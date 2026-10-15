# user-profile-self

- Screen: `user-profile-self` (also `file-image-picker`), users
- Address: `/users/me`
- Seen as: vendor-1
- Picture: [../screens/user-profile-self.jpg](../screens/user-profile-self.jpg)

## Copy

Digital Marketplace
vendor.one@example.test
Dashboard
|
Opportunities
|
Organizations
Edit Profile
Profile
Capabilities
Organizations
Notifications
Policies, Terms & Agreements
Alex Placeholder
Account Type
Vendor
Profile Information
Profile Picture (Optional)
GitHub
Name
Email Address
Deactivate Account

Deactivating your account means that you will no longer have access to the Digital Marketplace.

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
    - img
    - text: Edit Profile
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
  - heading "Alex Placeholder" [level=2]
  - text: Account Type Vendor
  - heading "Profile Information" [level=3]
  - img
  - text: Profile Picture (Optional) GitHub
  - img
  - textbox "GitHub" [disabled]: test-vendor-1
  - text: Name
  - textbox "Name" [disabled]: Alex Placeholder
  - text: Email Address
  - textbox "Email Address" [disabled]: vendor.one@example.test
  - heading "Deactivate Account" [level=3]
  - paragraph: Deactivating your account means that you will no longer have access to the Digital Marketplace.
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
