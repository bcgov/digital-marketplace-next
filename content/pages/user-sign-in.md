# Welcome Back to the Digital Marketplace

- Screen: `user-sign-in`, users
- Address: `/sign-in`
- Seen as: signed-out
- Picture: [../screens/user-sign-in.jpg](../screens/user-sign-in.jpg)

## Copy

Digital Marketplace
Sign In
Sign Up
Home
|
Opportunities
|
Organizations
Welcome Back to the Digital Marketplace
Please sign in to access your Digital Marketplace account.
Don't have an account? Sign up.
Sign In

Select one of the options available below to sign in to your Digital Marketplace account.

Vendor

Use your GitHub account to sign in to the Digital Marketplace.

Sign In Using GitHub
Public Sector Employee

Use your IDIR to sign in to the Digital Marketplace.

Sign In Using IDIR
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
- Sign up → `/sign-up`
- Sign In Using GitHub → `/auth/sign-in?provider=githubpublic`
- Sign In Using IDIR → `/auth/sign-in?provider=idir`
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
  - heading "Welcome Back to the Digital Marketplace" [level=1]
  - text: Please sign in to access your Digital Marketplace account. Don't have an account?
  - link "Sign up":
    - /url: /sign-up
  - text: .
  - heading "Sign In" [level=2]
  - paragraph: Select one of the options available below to sign in to your Digital Marketplace account.
  - heading "Vendor" [level=3]:
    - img
    - text: Vendor
  - paragraph: Use your GitHub account to sign in to the Digital Marketplace.
  - link "Sign In Using GitHub":
    - /url: /auth/sign-in?provider=githubpublic
  - heading "Public Sector Employee" [level=3]:
    - img
    - text: Public Sector Employee
  - paragraph: Use your IDIR to sign in to the Digital Marketplace.
  - link "Sign In Using IDIR":
    - /url: /auth/sign-in?provider=idir
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
