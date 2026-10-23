# Azure development and test environment

Bicep for the shared environment described in decision record
[0069](../../docs/decisions/0069-a-development-and-test-environment-runs-on-azure-container-apps.md):
one resource group (`rg-dmdev`) holding Log Analytics, Application Insights, a Container Apps
environment (frontend and backend in one app, Keycloak, Mailpit), PostgreSQL Flexible Server, and
alerts. It is synthetic data only and not a production target.

The environment is deployed in two passes, because the frontend image is built knowing the identity
provider's address, which depends on the environment's domain:

1. `deployApps=false` creates everything except the applications and outputs the domain.
2. After the images are built and pushed, `deployApps=true` adds the applications and alerts.

## Deploying

The resource group `rg-dmdev` is created once, by hand, and the Bicep deploys into it at
resource-group scope, so no subscription-level role is needed.

```bash
az group create -n rg-dmdev -l canadacentral
```

The workflow [deploy-azure.yml](../../.github/workflows/deploy-azure.yml) builds and pushes the four
images to GHCR tagged with the commit, points the existing `dmdev-idp` and `dmdev-frontend` apps at
them, and smoke-tests the result. Run it manually from the Actions tab. It creates nothing: the
foundation, the apps and the SRE agent's access are created once by hand (below), and the
workflow's identity can only update those two apps.

To deploy by hand, set the variables read by [main.bicepparam](main.bicepparam)
(`POSTGRES_ADMIN_PASSWORD`, `SDLC_SANDBOX_PASSWORD`, and for the second pass `DEPLOY_APPS=true`,
`IMAGE_REGISTRY`, `IMAGE_TAG`, optionally `AGENT_PRINCIPAL_ID` to grant the SRE agent its read-only
roles) and run:

```bash
az deployment group create -g rg-dmdev --name dmdev-foundation --parameters main.bicepparam
```

The images must be built and pushed between the two passes, with `VITE_OIDC_URL` set to
`https://dmdev-idp.<environment domain>`. Attaching the group to the agent is the `agent` job's
`az rest` PATCH in the workflow.

## One-time bootstrap (workflow only)

The workflow signs in to Azure through OIDC, with no stored credential. The identity it signs in as
has to exist first. A user-assigned managed identity needs no Entra directory permission, unlike an
app registration.

```bash
SUB=bcca42e1-a0c9-4a0c-99dc-4c63e5728042
REPO=KaruzaD/digital-marketplace-next
BOOT_RG=rg-dmdev-bootstrap          # outside rg-dmdev, so tearing the environment down keeps it

az group create -n "$BOOT_RG" -l canadacentral
az identity create -g "$BOOT_RG" -n id-dmdev-deploy

# Only runs of the `dev` GitHub environment in this repository can use the identity.
az identity federated-credential create -g "$BOOT_RG" --identity-name id-dmdev-deploy \
  -n github-dev --issuer https://token.actions.githubusercontent.com \
  --subject "repo:$REPO:environment:dev" --audiences api://AzureADTokenExchange

PRINCIPAL=$(az identity show -g "$BOOT_RG" -n id-dmdev-deploy --query principalId -o tsv)
```

The identity gets one role, on the two apps whose images change. It cannot create resources or
touch the database. Both assignments go away if `rg-dmdev` is deleted, so redo them after a
teardown, once the apps exist again.

```bash
for app in dmdev-idp dmdev-frontend; do
  az role assignment create --assignee-object-id "$PRINCIPAL" --assignee-principal-type ServicePrincipal \
    --role "Container Apps Contributor" \
    --scope "/subscriptions/$SUB/resourceGroups/rg-dmdev/providers/Microsoft.App/containerApps/$app"
done
```

### GitHub environment

Create an environment named `dev` in the repository (required reviewers recommended), then:

```bash
gh variable set AZURE_CLIENT_ID --env dev --body "$(az identity show -g $BOOT_RG -n id-dmdev-deploy --query clientId -o tsv)"
gh variable set AZURE_TENANT_ID --env dev --body "$(az account show --query tenantId -o tsv)"
gh variable set AZURE_SUBSCRIPTION_ID --env dev --body "$SUB"
```

### Image visibility

The images are pulled with no registry credential, so the four GHCR packages (`backend`,
`migrations`, `idp-realm`, `frontend`) must be public. Packages published by the workflow are linked
to the repository by an image label; if they come up private, make them public once under the
package's settings, since GitHub does not offer that through its API.

## Teardown

`az group delete -n rg-dmdev` removes the environment, including the database. The bootstrap
identity lives in its own resource group and is kept.
