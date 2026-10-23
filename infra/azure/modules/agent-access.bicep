// Read-only roles only: writes by the SRE agent stay behind its Review-mode approval.
param agentPrincipalId string

var roleIds = [
  'acdd72a7-3385-48ef-bd42-f606fba81ae7' // Reader
  '43d0d8ad-25c7-4714-9337-8ba259a9fe05' // Monitoring Reader
  '73c42c96-874c-492b-b04d-ab87d138a893' // Log Analytics Reader
]

resource assignments 'Microsoft.Authorization/roleAssignments@2022-04-01' = [
  for roleId in roleIds: {
    name: guid(resourceGroup().id, agentPrincipalId, roleId)
    properties: {
      principalId: agentPrincipalId
      principalType: 'ServicePrincipal'
      roleDefinitionId: subscriptionResourceId('Microsoft.Authorization/roleDefinitions', roleId)
    }
  }
]
