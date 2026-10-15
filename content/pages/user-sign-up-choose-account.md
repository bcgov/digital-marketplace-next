# Create Your Digital Marketplace Account.

- Screen: `user-sign-up-choose-account`, users
- Address: `/sign-up`
- Seen as: signed-out
- Picture: [../screens/user-sign-up-choose-account.jpg](../screens/user-sign-up-choose-account.jpg)

## Copy

Digital Marketplace
Sign In
Sign Up
Home
|
Opportunities
|
Organizations
Create Your Digital Marketplace Account.
Join a community of developers, entrepreneurs and public service innovators who are making public services better.
Already have an account? Sign in.
Choose Account Type

Choose the account type that describes you best. Access to certain features of the app will be based on the account type that you select.

Vendor

Vendors will be required to have a GitHub account to sign up for the Digital Marketplace. Don’t have an account? Creating one only takes a minute.

Sign Up Using GitHub
Public Sector Employee

Public sector employees will be required to use their IDIR to sign up for the Digital Marketplace.

Sign Up Using IDIR
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
- Sign in → `/sign-in`
- Sign Up Using GitHub → `/auth/sign-in?provider=githubpublic`
- Sign Up Using IDIR → `/auth/sign-in?provider=idir`
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
  - heading "Create Your Digital Marketplace Account." [level=1]
  - text: Join a community of developers, entrepreneurs and public service innovators who are making public services better. Already have an account?
  - link "Sign in":
    - /url: /sign-in
  - text: .
  - heading "Choose Account Type" [level=2]
  - paragraph: Choose the account type that describes you best. Access to certain features of the app will be based on the account type that you select.
  - heading "Vendor" [level=3]:
    - img
    - text: Vendor
  - paragraph: Vendors will be required to have a GitHub account to sign up for the Digital Marketplace. Don’t have an account? Creating one only takes a minute.
  - link "Sign Up Using GitHub":
    - /url: /auth/sign-in?provider=githubpublic
  - heading "Public Sector Employee" [level=3]:
    - img
    - text: Public Sector Employee
  - paragraph: Public sector employees will be required to use their IDIR to sign up for the Digital Marketplace.
  - link "Sign Up Using IDIR":
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
