// A development and test environment on Azure Container Apps (decision record 0069).
// Deployed into the existing resource group rg-<environmentName> in two passes: with deployApps
// false it creates monitoring, the Container Apps environment and database, and outputs the
// environment's domain; the frontend is built knowing where the identity provider will be, then
// deployApps true adds the applications.
targetScope = 'resourceGroup'

@minLength(2)
@maxLength(12)
param environmentName string = 'dmdev'

param location string = resourceGroup().location

param deployApps bool = false

@description('Registry path of the images, without a trailing slash, for example ghcr.io/owner/repo.')
param imageRegistry string = ''

param imageTag string = 'latest'

@secure()
param postgresAdminPassword string

@secure()
param sandboxPassword string

@description('Object ID of the existing SRE agent\'s managed identity; empty skips the role assignments.')
param agentPrincipalId string = ''

var prefix = environmentName
var tags = {
  project: 'digital-marketplace-next'
  environment: environmentName
  purpose: 'dev-test'
}

module monitoring 'modules/monitoring.bicep' = {
  params: {
    prefix: prefix
    location: location
    tags: tags
  }
}

module environment 'modules/environment.bicep' = {
  params: {
    prefix: prefix
    location: location
    tags: tags
    workspaceName: monitoring.outputs.workspaceName
  }
}

module database 'modules/database.bicep' = {
  params: {
    prefix: prefix
    location: location
    tags: tags
    uniqueSuffix: uniqueString(resourceGroup().id)
    administratorPassword: postgresAdminPassword
  }
}

module agentAccess 'modules/agent-access.bicep' = if (!empty(agentPrincipalId)) {
  params: {
    agentPrincipalId: agentPrincipalId
  }
}

module apps 'modules/apps.bicep' = if (deployApps) {
  params: {
    prefix: prefix
    location: location
    tags: tags
    environmentId: environment.outputs.environmentId
    defaultDomain: environment.outputs.defaultDomain
    appInsightsName: monitoring.outputs.appInsightsName
    imageRegistry: imageRegistry
    imageTag: imageTag
    databaseHost: database.outputs.host
    databaseName: database.outputs.databaseName
    databaseUser: database.outputs.administratorLogin
    databasePassword: postgresAdminPassword
    sandboxPassword: sandboxPassword
  }
}

module alerts 'modules/alerts.bicep' = if (deployApps) {
  params: {
    prefix: prefix
    location: location
    tags: tags
    appInsightsId: monitoring.outputs.appInsightsId
    frontendId: apps!.outputs.frontendId
    frontendUrl: apps!.outputs.frontendUrl
  }
}

output resourceGroupName string = resourceGroup().name
output defaultDomain string = environment.outputs.defaultDomain
output idpUrl string = 'https://${prefix}-idp.${environment.outputs.defaultDomain}'
output frontendUrl string = 'https://${prefix}-frontend.${environment.outputs.defaultDomain}'
output logAnalyticsWorkspaceName string = monitoring.outputs.workspaceName
output appInsightsName string = monitoring.outputs.appInsightsName
output appInsightsAppId string = monitoring.outputs.appInsightsAppId
