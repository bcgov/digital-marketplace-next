# Renders the sandbox realm inside a deployed environment, where the template cannot be mounted
# from the repository as the compose file does. It runs as an init container on the identity
# provider and writes into the volume Keycloak imports from.
FROM node:22-alpine
COPY app/compose/idp/realm-template.json /app/realm-template.json
COPY app/compose/idp/render-realm.mjs /app/render-realm.mjs
ENV REALM_TEMPLATE=/app/realm-template.json
ENV REALM_OUTPUT=/import/realm.json
CMD ["node", "/app/render-realm.mjs"]
