using './main.bicep'

param environmentName = 'dmdev'
param location = 'canadacentral'
param deployApps = toLower(readEnvironmentVariable('DEPLOY_APPS', 'false')) == 'true'
param imageRegistry = readEnvironmentVariable('IMAGE_REGISTRY', '')
param imageTag = readEnvironmentVariable('IMAGE_TAG', 'latest')
param agentPrincipalId = readEnvironmentVariable('AGENT_PRINCIPAL_ID', '')
param postgresAdminPassword = readEnvironmentVariable('POSTGRES_ADMIN_PASSWORD')
param sandboxPassword = readEnvironmentVariable('SDLC_SANDBOX_PASSWORD')
