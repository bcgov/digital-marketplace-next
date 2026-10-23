import { useAzureMonitor } from "@azure/monitor-opentelemetry";

// Imported first in main.ts so the HTTP instrumentation is in place before express loads.
if (process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
  useAzureMonitor();
}
