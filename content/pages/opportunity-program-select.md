# opportunity-program-select

- Screen: `opportunity-program-select`, opportunities
- Address: `/opportunities/create`
- Seen as: administrator
- Picture: [../screens/opportunity-program-select.jpg](../screens/opportunity-program-select.jpg)

## Copy

Digital Marketplace
admin.one@example.test
Dashboard
|
Opportunities
|
Organizations
|
Users
|
Content
Code With Us
Use a Code With Us opportunity to pay a fixed price of up to $70,000 for the delivery of code that meets your acceptance criteria.
Price: $1,000 CAD
via Cost Recovery
See Service Level Agreement for details
Read Guide
Get Started
Team With Us
Use a Team With Us opportunity to procure individual resources for your Agile product development team on a time and materials basis.
Price: $3,000 CAD
via Cost Recovery
See Service Level Agreement for details
Read Guide
Get Started
Sprint With Us
Use a Sprint With Us opportunity to procure an Agile product development team for your digital service at a variable cost of up to $5,000,000.
Price: $5,000 CAD
via Cost Recovery
See Service Level Agreement for details
Read Guide
Get Started
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
- My Profile → `/users/00000000-0000-4000-8000-000000000101`
- Sign Out → `/sign-out`
- Digital Marketplace → `/`
- Dashboard → `/dashboard`
- Opportunities → `/opportunities`
- Organizations → `/organizations`
- Users → `/users`
- Content → `/content`
- admin.one@example.test → `/users/00000000-0000-4000-8000-000000000101`
- Sign Out → `/sign-out`
- Dashboard → `/dashboard`
- Opportunities → `/opportunities`
- Organizations → `/organizations`
- Users → `/users`
- Content → `/content`
- See Service Level Agreement for details → `/content/service-level-agreement`
- Read Guide → `/cwu/ministry-guide`
- Get Started → `/opportunities/code-with-us/create`
- See Service Level Agreement for details → `/content/service-level-agreement`
- Read Guide → `/twu/ministry-guide`
- Get Started → `/opportunities/team-with-us/create`
- See Service Level Agreement for details → `/content/service-level-agreement`
- Read Guide → `/swu/ministry-guide`
- Get Started → `/opportunities/sprint-with-us/create`
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
- Code With Us Image — `/images/illustrations/code_with_us.svg`
- Team With Us Image — `/images/illustrations/team_with_us.svg`
- Sprint With Us Image — `/images/illustrations/sprint_with_us.svg`

## Outline

```yaml
- main:
  - navigation:
    - link:
      - /url: /
      - img
    - link "Digital Marketplace":
      - /url: /
    - text: admin.one@example.test
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
    - text: "|"
    - link "Users":
      - /url: /users
    - text: "|"
    - link "Content":
      - /url: /content
  - img "Code With Us Image"
  - heading "Code With Us" [level=2]
  - text: Use a
  - emphasis: Code With Us
  - text: "opportunity to pay a fixed price of up to $70,000 for the delivery of code that meets your acceptance criteria. Price: $1,000 CAD via Cost Recovery"
  - link "See Service Level Agreement for details":
    - /url: /content/service-level-agreement
  - link "Read Guide":
    - /url: /cwu/ministry-guide
  - link "Get Started":
    - /url: /opportunities/code-with-us/create
  - img "Team With Us Image"
  - heading "Team With Us" [level=2]
  - text: Use a
  - emphasis: Team With Us
  - text: "opportunity to procure individual resources for your Agile product development team on a time and materials basis. Price: $3,000 CAD via Cost Recovery"
  - link "See Service Level Agreement for details":
    - /url: /content/service-level-agreement
  - link "Read Guide":
    - /url: /twu/ministry-guide
  - link "Get Started":
    - /url: /opportunities/team-with-us/create
  - img "Sprint With Us Image"
  - heading "Sprint With Us" [level=2]
  - text: Use a
  - emphasis: Sprint With Us
  - text: "opportunity to procure an Agile product development team for your digital service at a variable cost of up to $5,000,000. Price: $5,000 CAD via Cost Recovery"
  - link "See Service Level Agreement for details":
    - /url: /content/service-level-agreement
  - link "Read Guide":
    - /url: /swu/ministry-guide
  - link "Get Started":
    - /url: /opportunities/sprint-with-us/create
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
