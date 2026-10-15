# Digital Marketplace Organizations

- Screen: `organization-list`, organizations
- Address: `/organizations`
- Seen as: signed-out
- Picture: [../screens/organization-list.jpg](../screens/organization-list.jpg)

## Copy

Digital Marketplace
Sign In
Sign Up
Home
|
Opportunities
|
Organizations
Digital Marketplace Organizations
ORGANIZATION NAME

Broken Compass Delivery Ltd.

Cedar Hollow Systems Inc.

Northern Pines Digital Ltd.

Quiet Meadow Works Ltd.

Red Alder Studio Ltd.

Salt Marsh Labs Ltd.

Silver Creek Software Ltd.

Stony Ridge Digital Ltd.
Home|
About|
Disclaimer|
Privacy|
Accessibility|
Copyright|
Contact Us|
Source Code
Owned and operated by the B.C. Government.

## Links

- (no text) → `/`
- Digital Marketplace → `/`
- Sign In → `/sign-in`
- Sign Up → `/sign-up`
- Digital Marketplace → `/`
- Home → `/`
- Opportunities → `/opportunities`
- Organizations → `/organizations`
- Sign In → `/sign-in`
- Sign Up → `/sign-up`
- Home → `/`
- Opportunities → `/opportunities`
- Organizations → `/organizations`
- Home → `/`
- About → `/content/about`
- Disclaimer → `/content/disclaimer`
- Privacy → `/content/privacy`
- Accessibility → `/content/accessibility`
- Copyright → `/content/copyright`
- Contact Us → `mailto:digitalmarketplace@gov.bc.ca`
- Source Code → `https://github.com/bcgov/digital_marketplace/`

## Images

- (no alt text) — `/images/logo.svg`

## Outline

```yaml
- main:
  - navigation:
    - link:
      - /url: /
      - img
    - link "Digital Marketplace":
      - /url: /
    - link "Sign In":
      - /url: /sign-in
    - link "Sign Up":
      - /url: /sign-up
    - link "Home":
      - /url: /
    - text: "|"
    - link "Opportunities":
      - /url: /opportunities
    - text: "|"
    - link "Organizations":
      - /url: /organizations
  - heading "Digital Marketplace Organizations" [level=1]
  - table:
    - rowgroup:
      - row "Organization Name":
        - columnheader "Organization Name"
    - rowgroup:
      - row "Broken Compass Delivery Ltd.":
        - cell "Broken Compass Delivery Ltd."
      - row "Cedar Hollow Systems Inc.":
        - cell "Cedar Hollow Systems Inc."
      - row "Northern Pines Digital Ltd.":
        - cell "Northern Pines Digital Ltd."
      - row "Quiet Meadow Works Ltd.":
        - cell "Quiet Meadow Works Ltd."
      - row "Red Alder Studio Ltd.":
        - cell "Red Alder Studio Ltd."
      - row "Salt Marsh Labs Ltd.":
        - cell "Salt Marsh Labs Ltd."
      - row "Silver Creek Software Ltd.":
        - cell "Silver Creek Software Ltd."
      - row "Stony Ridge Digital Ltd.":
        - cell "Stony Ridge Digital Ltd."
  - link "Home":
    - /url: /
  - text: "|"
  - link "About":
    - /url: /content/about
  - text: "|"
  - link "Disclaimer":
    - /url: /content/disclaimer
  - text: "|"
  - link "Privacy":
    - /url: /content/privacy
  - text: "|"
  - link "Accessibility":
    - /url: /content/accessibility
  - text: "|"
  - link "Copyright":
    - /url: /content/copyright
  - text: "|"
  - link "Contact Us":
    - /url: mailto:digitalmarketplace@gov.bc.ca
  - text: "|"
  - link "Source Code":
    - /url: https://github.com/bcgov/digital_marketplace/
    - img
    - text: Source Code
  - text: Owned and operated by the B.C. Government.
```
