# Dashboard

- Screen: `opportunity-dashboard`, opportunities
- Address: `/dashboard`
- Seen as: administrator
- Picture: [../screens/opportunity-dashboard.jpg](../screens/opportunity-dashboard.jpg)

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
Create Opportunity
Dashboard
My Opportunities
Evaluations
My Opportunities
View all opportunities
TITLE	STATUS	CREATED
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
- Create Opportunity → `/opportunities/create`
- Create Opportunity → `/opportunities/create`
- View all opportunities → `/opportunities`
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
    - link "Create Opportunity":
      - /url: /opportunities/create
      - img
      - text: Create Opportunity
  - heading "Dashboard" [level=1]
  - list:
    - listitem: My Opportunities
    - listitem: Evaluations
  - text: My Opportunities
  - link "View all opportunities":
    - /url: /opportunities
    - text: View all opportunities
    - img
  - table:
    - rowgroup:
      - row "Title Status Created":
        - columnheader "Title"
        - columnheader "Status"
        - columnheader "Created"
    - rowgroup
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
