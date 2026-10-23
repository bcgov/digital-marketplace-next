param prefix string
param location string
param tags object
param appInsightsId string
param frontendId string
param frontendUrl string

resource statusTest 'Microsoft.Insights/webtests@2022-06-15' = {
  name: '${prefix}-status'
  location: location
  tags: union(tags, { 'hidden-link:${appInsightsId}': 'Resource' })
  kind: 'standard'
  properties: {
    SyntheticMonitorId: '${prefix}-status'
    Name: 'Service status'
    Enabled: true
    Frequency: 300
    Timeout: 30
    Kind: 'standard'
    RetryEnabled: true
    Locations: [
      { Id: 'us-va-ash-azr' }
      { Id: 'us-ca-sjc-azr' }
    ]
    Request: {
      RequestUrl: '${frontendUrl}/status'
      HttpVerb: 'GET'
      ParseDependentRequests: false
    }
    ValidationRules: {
      ExpectedHttpStatusCode: 200
      SSLCheck: false
    }
  }
}

resource statusDown 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: '${prefix}-status-down'
  location: 'global'
  tags: tags
  properties: {
    description: 'The service status check fails from two locations.'
    severity: 1
    enabled: true
    scopes: [statusTest.id, appInsightsId]
    evaluationFrequency: 'PT5M'
    windowSize: 'PT15M'
    criteria: {
      'odata.type': 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria'
      webTestId: statusTest.id
      componentId: appInsightsId
      failedLocationCount: 2
    }
  }
}

resource serverErrors 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: '${prefix}-5xx'
  location: 'global'
  tags: tags
  properties: {
    description: 'The application answered with server errors.'
    severity: 2
    enabled: true
    scopes: [frontendId]
    evaluationFrequency: 'PT5M'
    windowSize: 'PT15M'
    criteria: {
      'odata.type': 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria'
      allOf: [
        {
          name: 'ServerErrors'
          metricNamespace: 'microsoft.app/containerapps'
          metricName: 'Requests'
          operator: 'GreaterThan'
          threshold: 5
          timeAggregation: 'Total'
          criterionType: 'StaticThresholdCriterion'
          dimensions: [
            { name: 'statusCodeCategory', operator: 'Include', values: ['5xx'] }
          ]
        }
      ]
    }
  }
}
