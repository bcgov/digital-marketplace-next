# organization-user-memberships-self

- Screen: `organization-user-memberships-self`, organizations
- Address: `/users/me?tab=organizations`
- Seen as: vendor-1
- Picture: [../screens/organization-user-memberships-self.jpg](../screens/organization-user-memberships-self.jpg)

## Copy

Digital Marketplace
vendor.one@example.test
Dashboard
|
Opportunities
|
Organizations
Create Organization
Profile
Capabilities
Organizations
Notifications
Policies, Terms & Agreements
Owned Organizations

You are the owner of the following organizations:

LEGAL NAME	TEAM MEMBERS	SWU QUALIFIED?

Cedar Hollow Systems Inc.
	
1
	
Affiliated Organizations

You are not affiliated with any organizations.

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
- Create Organization → `/organizations/create`
- Create Organization → `/organizations/create`
- Profile → `/users/00000000-0000-4000-8000-000000000201?tab=profile`
- Capabilities → `/users/00000000-0000-4000-8000-000000000201?tab=capabilities`
- Organizations → `/users/00000000-0000-4000-8000-000000000201?tab=organizations`
- Notifications → `/users/00000000-0000-4000-8000-000000000201?tab=notifications`
- Policies, Terms & Agreements → `/users/00000000-0000-4000-8000-000000000201?tab=legal`
- Profile → `/users/00000000-0000-4000-8000-000000000201?tab=profile`
- Capabilities → `/users/00000000-0000-4000-8000-000000000201?tab=capabilities`
- Organizations → `/users/00000000-0000-4000-8000-000000000201?tab=organizations`
- Notifications → `/users/00000000-0000-4000-8000-000000000201?tab=notifications`
- Policies, Terms & Agreements → `/users/00000000-0000-4000-8000-000000000201?tab=legal`
- Cedar Hollow Systems Inc. → `/organizations/00000000-0000-4000-8000-000000000302/edit`
- 1 → `/organizations/00000000-0000-4000-8000-000000000302/edit?tab=team`
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
    - link "Create Organization":
      - /url: /organizations/create
      - img
      - text: Create Organization
  - link "Profile":
    - /url: /users/00000000-0000-4000-8000-000000000201?tab=profile
    - img
    - text: Profile
  - link "Capabilities":
    - /url: /users/00000000-0000-4000-8000-000000000201?tab=capabilities
    - img
    - text: Capabilities
  - link "Organizations":
    - /url: /users/00000000-0000-4000-8000-000000000201?tab=organizations
    - img
    - text: Organizations
  - link "Notifications":
    - /url: /users/00000000-0000-4000-8000-000000000201?tab=notifications
    - img
    - text: Notifications
  - link "Policies, Terms & Agreements":
    - /url: /users/00000000-0000-4000-8000-000000000201?tab=legal
    - img
    - text: Policies, Terms & Agreements
  - heading "Owned Organizations" [level=2]
  - paragraph: "You are the owner of the following organizations:"
  - table:
    - rowgroup:
      - row "Legal Name Team Members SWU Qualified?":
        - columnheader "Legal Name"
        - columnheader "Team Members"
        - columnheader "SWU Qualified?"
    - rowgroup:
      - row "Cedar Hollow Systems Inc. 1":
        - cell "Cedar Hollow Systems Inc.":
          - link "Cedar Hollow Systems Inc.":
            - /url: /organizations/00000000-0000-4000-8000-000000000302/edit
        - cell "1":
          - link "1":
            - /url: /organizations/00000000-0000-4000-8000-000000000302/edit?tab=team
        - cell:
          - img
  - heading "Affiliated Organizations" [level=2]
  - paragraph: You are not affiliated with any organizations.
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
