# user-sign-out

- Screen: `user-sign-out`, users
- Address: `/sign-out`
- Seen as: signed-out
- Picture: [../screens/user-sign-out.jpg](../screens/user-sign-out.jpg)

## Copy

Digital Marketplace
Sign In
Sign Up
Home
|
Opportunities
|
Organizations
You have successfully signed out. Thank you for using the Digital Marketplace.
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
  - text: You have successfully signed out. Thank you for using the Digital Marketplace.
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
