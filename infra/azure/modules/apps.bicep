param prefix string
param location string
param tags object
param environmentId string
param defaultDomain string

@description('Registry path holding the frontend, backend, migrations and idp-realm images, without a trailing slash.')
param imageRegistry string
param imageTag string
param keycloakImage string = 'quay.io/keycloak/keycloak:26.0'
param mailpitImage string = 'docker.io/axllent/mailpit:latest'

param appInsightsName string
param databaseHost string
param databaseName string
param databaseUser string

@secure()
param databasePassword string

@secure()
param sandboxPassword string

resource appInsights 'Microsoft.Insights/components@2020-02-02' existing = {
  name: appInsightsName
}

var frontendName = '${prefix}-frontend'
var backendName = '${prefix}-backend'
var idpName = '${prefix}-idp'
var mailName = '${prefix}-mail'

var frontendUrl = 'https://${frontendName}.${defaultDomain}'
var idpUrl = 'https://${idpName}.${defaultDomain}'
var realmUrl = '${idpUrl}/realms/digital-marketplace'

// The tokens name the realm as the browser reaches it, so the service reaches it the same way.
resource idp 'Microsoft.App/containerApps@2024-03-01' = {
  name: idpName
  location: location
  tags: tags
  properties: {
    managedEnvironmentId: environmentId
    configuration: {
      activeRevisionsMode: 'Single'
      ingress: { external: true, targetPort: 8080, transport: 'http', allowInsecure: false }
      secrets: [
        { name: 'sandbox-password', value: sandboxPassword }
      ]
    }
    template: {
      initContainers: [
        {
          name: 'render-realm'
          image: '${imageRegistry}/idp-realm:${imageTag}'
          resources: { cpu: json('0.25'), memory: '0.5Gi' }
          env: [
            { name: 'SDLC_SANDBOX_PASSWORD', secretRef: 'sandbox-password' }
            { name: 'APP_ORIGIN', value: frontendUrl }
          ]
          volumeMounts: [{ volumeName: 'realm', mountPath: '/import' }]
        }
      ]
      containers: [
        {
          name: 'keycloak'
          image: keycloakImage
          args: ['start-dev', '--import-realm', '--http-port=8080']
          resources: { cpu: json('1.0'), memory: '2Gi' }
          env: [
            { name: 'KC_BOOTSTRAP_ADMIN_USERNAME', value: 'admin' }
            { name: 'KC_BOOTSTRAP_ADMIN_PASSWORD', secretRef: 'sandbox-password' }
            { name: 'KC_HEALTH_ENABLED', value: 'true' }
            { name: 'KC_HOSTNAME', value: idpUrl }
            { name: 'KC_PROXY_HEADERS', value: 'xforwarded' }
          ]
          volumeMounts: [{ volumeName: 'realm', mountPath: '/opt/keycloak/data/import' }]
          probes: [
            {
              type: 'Startup'
              tcpSocket: { port: 8080 }
              periodSeconds: 10
              failureThreshold: 30
            }
          ]
        }
      ]
      volumes: [{ name: 'realm', storageType: 'EmptyDir' }]
      scale: { minReplicas: 1, maxReplicas: 1 }
    }
  }
}

// Mailpit takes the mail on 1025 (reached by app name inside the environment) and shows it on 8025.
resource mail 'Microsoft.App/containerApps@2024-03-01' = {
  name: mailName
  location: location
  tags: tags
  properties: {
    managedEnvironmentId: environmentId
    configuration: {
      activeRevisionsMode: 'Single'
      ingress: {
        external: true
        targetPort: 8025
        transport: 'http'
        allowInsecure: false
        additionalPortMappings: [
          { external: false, targetPort: 1025, exposedPort: 1025 }
        ]
      }
    }
    template: {
      containers: [
        {
          name: 'mailpit'
          image: mailpitImage
          resources: { cpu: json('0.25'), memory: '0.5Gi' }
          env: [
            { name: 'MP_SMTP_AUTH_ACCEPT_ANY', value: '1' }
            { name: 'MP_SMTP_AUTH_ALLOW_INSECURE', value: '1' }
          ]
        }
      ]
      scale: { minReplicas: 1, maxReplicas: 1 }
    }
  }
}

// The backend runs beside the web server in one app: the landing-zone policy refuses plain-HTTP
// ingress, so the web server reaches the backend on localhost instead of through the environment.
resource frontend 'Microsoft.App/containerApps@2024-03-01' = {
  name: frontendName
  location: location
  tags: tags
  properties: {
    managedEnvironmentId: environmentId
    configuration: {
      activeRevisionsMode: 'Single'
      ingress: { external: true, targetPort: 3000, transport: 'http', allowInsecure: false }
      secrets: [
        {
          name: 'database-url'
          #disable-next-line use-secure-value-for-secure-inputs // built from the secure password
          value: 'postgresql://${databaseUser}:${databasePassword}@${databaseHost}:5432/${databaseName}?sslmode=require'
        }
        { name: 'appinsights-connection', value: appInsights.properties.ConnectionString }
      ]
    }
    template: {
      initContainers: [
        {
          name: 'migrate'
          image: '${imageRegistry}/migrations:${imageTag}'
          resources: { cpu: json('0.25'), memory: '0.5Gi' }
          env: [{ name: 'DATABASE_URL', secretRef: 'database-url' }]
        }
      ]
      containers: [
        {
          name: 'frontend'
          image: '${imageRegistry}/frontend:${imageTag}'
          resources: { cpu: json('0.25'), memory: '0.5Gi' }
          env: [{ name: 'BACKEND_ORIGIN', value: 'localhost:3001' }]
          probes: [
            { type: 'Liveness', tcpSocket: { port: 3000 }, periodSeconds: 30 }
          ]
        }
        {
          name: 'backend'
          image: '${imageRegistry}/backend:${imageTag}'
          resources: { cpu: json('0.5'), memory: '1Gi' }
          env: [
            { name: 'DATABASE_URL', secretRef: 'database-url' }
            { name: 'PORT', value: '3001' }
            { name: 'NODE_ENV', value: 'production' }
            { name: 'OIDC_ISSUER', value: realmUrl }
            { name: 'OIDC_JWKS_URL', value: '${realmUrl}/protocol/openid-connect/certs' }
            { name: 'OIDC_CLIENT_ID', value: 'digital-marketplace-app' }
            { name: 'OIDC_BACKCHANNEL_URL', value: realmUrl }
            { name: 'SMTP_HOST', value: mailName }
            { name: 'SMTP_PORT', value: '1025' }
            { name: 'MAILER_FROM', value: 'Digital Marketplace <donotreply@example.test>' }
            { name: 'SHOW_TEST_INDICATOR', value: '1' }
            { name: 'SERVICE_ORIGIN', value: frontendUrl }
            { name: 'CONTACT_EMAIL', value: 'digitalmarketplace@example.test' }
            { name: 'DISABLE_NOTIFICATIONS', value: '0' }
            { name: 'DEADLINE_HOOK_INTERVAL_MS', value: '0' }
            { name: 'FILE_UPLOADS_DIR', value: '/srv/uploads' }
            { name: 'APPLICATIONINSIGHTS_CONNECTION_STRING', secretRef: 'appinsights-connection' }
            { name: 'OTEL_SERVICE_NAME', value: backendName }
          ]
          volumeMounts: [{ volumeName: 'uploads', mountPath: '/srv/uploads' }]
          probes: [
            { type: 'Liveness', httpGet: { path: '/status', port: 3001 }, periodSeconds: 30 }
            { type: 'Readiness', httpGet: { path: '/status', port: 3001 }, periodSeconds: 10 }
          ]
        }
      ]
      volumes: [{ name: 'uploads', storageType: 'EmptyDir' }]
      scale: { minReplicas: 1, maxReplicas: 1 }
    }
  }
}

output frontendId string = frontend.id
output frontendUrl string = frontendUrl
output idpUrl string = idpUrl
output mailUrl string = 'https://${mailName}.${defaultDomain}'
