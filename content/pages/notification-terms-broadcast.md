# notification-terms-broadcast

- Screen: `notification-terms-broadcast`, notifications
- Address: `/content/terms-and-conditions/edit`
- Seen as: administrator
- Picture: [../screens/notification-terms-broadcast.jpg](../screens/notification-terms-broadcast.jpg)

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
Edit
Notify Vendors
This is a "fixed" page, which means this web app needs it to exist at a specific slug in order to function correctly. Consequently, this page cannot be deleted and its slug cannot be changed.
terms-and-conditions
Published Oct 15, 2026 8:47 AM
|
Updated Oct 15, 2026 8:47 AM
Published By
System
Updated By
System
Title
Slug
This page is available at /content/terms-and-conditions.
Body
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
- terms-and-conditions → `/content/terms-and-conditions`
- (no text) → `/content/markdown-guide`
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
    - img
    - text: Edit
    - img
    - text: Notify Vendors
  - alert: This is a "fixed" page, which means this web app needs it to exist at a specific slug in order to function correctly. Consequently, this page cannot be deleted and its slug cannot be changed.
  - link "terms-and-conditions":
    - /url: /content/terms-and-conditions
  - text: Published Oct 15, 2026 8:47 AM | Updated Oct 15, 2026 8:47 AM Published By System Updated By System Title
  - textbox "Title" [disabled]: terms-and-conditions
  - text: Slug
  - img
  - textbox "Slug" [disabled]:
    - /placeholder: Slug, e.g. an-example-slug-123
    - text: terms-and-conditions
  - text: This page is available at /content/terms-and-conditions. Body
  - img
  - img
  - img
  - img
  - img
  - img
  - img
  - img
  - img
  - button "Choose File"
  - img
  - link:
    - /url: /content/markdown-guide
    - img
  - textbox "Body" [disabled]:
    - /placeholder: Enter the page's body here.
    - text: Initial version
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
