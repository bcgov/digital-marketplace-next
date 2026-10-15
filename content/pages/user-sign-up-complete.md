# Dashboard

- Screen: `user-sign-up-complete`, users
- Address: `/sign-up/complete`, which landed on `/dashboard`
- Seen as: vendor-1
- Picture: [../screens/user-sign-up-complete.jpg](../screens/user-sign-up-complete.jpg)

## Copy

Digital Marketplace
vendor.one@example.test
Dashboard
|
Opportunities
|
Organizations
You must create an organization and be a Qualified Sprint With Us Supplier or Qualified Team With Us Supplier in order to submit proposals to Sprint With Us or Team With Us opportunities.
Dashboard
My Proposals
Org Proposals
Welcome to the Digital Marketplace!

Get started by browsing the opportunities posted to the Digital Marketplace.

View All Opportunities
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
- My Profile → `/users/00000000-0000-4000-8000-000000000201`
- My Organizations → `/users/00000000-0000-4000-8000-000000000201?tab=organizations`
- Sign Out → `/sign-out`
- Digital Marketplace → `/`
- Dashboard → `/dashboard`
- Opportunities → `/opportunities`
- Organizations → `/organizations`
- vendor.one@example.test → `/users/00000000-0000-4000-8000-000000000201`
- Sign Out → `/sign-out`
- Dashboard → `/dashboard`
- Opportunities → `/opportunities`
- Organizations → `/organizations`
- create an organization → `/organizations/create`
- Qualified Sprint With Us Supplier → `/learn-more/sprint-with-us`
- Qualified Team With Us Supplier → `/learn-more/team-with-us`
- View All Opportunities → `/opportunities`
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
- (no alt text) — `/images/default_user_avatar.svg`
- (no alt text) — `/images/default_user_avatar.svg`
- (no alt text) — `/images/illustrations/dashboard_welcome.svg`

## Outline

```yaml
- main:
  - navigation:
    - link:
      - /url: /
      - img
    - link "Digital Marketplace":
      - /url: /
    - text: vendor.one@example.test
    - img
    - img
    - link "Dashboard":
      - /url: /dashboard
    - text: "|"
    - link "Opportunities":
      - /url: /opportunities
    - text: "|"
    - link "Organizations":
      - /url: /organizations
  - alert:
    - text: You must
    - link "create an organization":
      - /url: /organizations/create
    - text: and be a
    - link "Qualified Sprint With Us Supplier":
      - /url: /learn-more/sprint-with-us
    - text: or
    - link "Qualified Team With Us Supplier":
      - /url: /learn-more/team-with-us
    - text: in order to submit proposals to Sprint With Us or Team With Us opportunities.
  - heading "Dashboard" [level=1]
  - list:
    - listitem: My Proposals
    - listitem: Org Proposals
  - img
  - heading "Welcome to the Digital Marketplace!" [level=1]
  - paragraph: Get started by browsing the opportunities posted to the Digital Marketplace.
  - link "View All Opportunities":
    - /url: /opportunities
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
