# organization-user-memberships

- Screen: `organization-user-memberships`, organizations
- Address: `/users/00000000-0000-4000-8000-000000000201?tab=organizations`
- Seen as: administrator
- Picture: [../screens/organization-user-memberships.jpg](../screens/organization-user-memberships.jpg)

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
Alex Placeholder
Status
Active
Account Type
Vendor
Profile Picture (Optional)
GitHub
Name
Email Address
Deactivate Account

Deactivating their account means that they will no longer have access to the Digital Marketplace.

Deactivate Account
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
  - heading "Alex Placeholder" [level=2]
  - text: Status Active Account Type Vendor
  - img
  - text: Profile Picture (Optional) GitHub
  - img
  - textbox "GitHub" [disabled]: test-vendor-1
  - text: Name
  - textbox "Name" [disabled]: Alex Placeholder
  - text: Email Address
  - textbox "Email Address" [disabled]: vendor.one@example.test
  - heading "Deactivate Account" [level=3]
  - paragraph: Deactivating their account means that they will no longer have access to the Digital Marketplace.
  - img
  - text: Deactivate Account
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
