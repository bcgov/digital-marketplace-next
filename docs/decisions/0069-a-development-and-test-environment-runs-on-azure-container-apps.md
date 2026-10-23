# 0069 · A development and test environment runs on Azure Container Apps

- Status: proposed (G2). The J6 exception to P4 and the J2 amendment it needs are drafted in `constitution.md` in the same change; both take effect when this record is accepted at G2.
- Date: 2026-10-07

## Context

P4 sends lower environments to OpenShift unless a decision record documents an exception, and J2
puts environment operations and infrastructure out of scope (0006). The team wants one long-lived
shared instance in Azure for development and testing, which an Azure SRE agent and the team can work
against, and which the pipeline can later deploy to after a build, with no manual steps.

## Decision

`infra/azure/` holds Bicep that creates one environment in a resource group of its own:

- a Log Analytics workspace and a workspace-based Application Insights resource, with the
  Container Apps environment's logs sent to the workspace;
- a Container Apps environment running one app holding the frontend and the backend as two
  containers (the migrations an init container, as in 0006), Keycloak (the realm rendered by an init
  container from `app/compose/idp/`) and a Mailpit mail catcher, each at one replica;
- Azure Database for PostgreSQL Flexible Server (Burstable), reached over TLS;
- an availability test on `/status` and metric alerts, so the SRE agent has signals;
- read-only role assignments (Reader, Monitoring Reader, Log Analytics Reader) for the existing SRE
  agent's managed identity, and the resource group added to the agent's managed resources through
  its API. The agent itself is not created here, and its Review mode is untouched.

Images are public packages on GitHub Container Registry, so no registry credential exists. There is
no Application Gateway: the three public applications use the Container Apps default domain.

The deployment has two passes, because the frontend is built knowing the identity provider's
address (`VITE_OIDC_URL`) and that address depends on the environment's domain. The first pass
creates everything but the applications and outputs the domain; the second adds them.

The backend shares an app with the web server, which reaches it on `localhost`, because the
subscription's landing-zone policy denies a Container App with plain-HTTP ingress, which a separate
backend app would need.

Everything in the environment is synthetic, as the sandbox is (P3). Secrets come from the
pipeline's environment, never from a file in this repository.

## Why

- Bicep is Azure-native, needs no state backend, and the pipeline needs only an OIDC login.
- Reusing the compose file's services and the realm renderer keeps the environment the same shape
  as the sandbox the acceptance suite already runs against.
- Read-only access plus the agent's on-behalf-of flow keeps writes behind a human approval.

## What would reverse it

- A decision not to grant the J6 exception, in which case `infra/azure/` is removed.
- Moving the environment to OpenShift, which 0006 already describes.

## Not yet decided

- The deploy workflow itself, and the one-time bootstrap of the identity it signs in as, which is
  documented steps because creating it needs tenant approval.
