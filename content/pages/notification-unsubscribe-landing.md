# notification-unsubscribe-landing

- Screen: `notification-unsubscribe-landing`, notifications
- Address: `/users/me?tab=notifications&unsubscribe`
- Seen as: vendor-1
- Picture: [../screens/notification-unsubscribe-landing.jpg](../screens/notification-unsubscribe-landing.jpg)

## Copy

Digital Marketplace
vendor.one@example.test
Dashboard
|
Opportunities
|
Organizations
Profile
Capabilities
Organizations
Notifications
Policies, Terms & Agreements
Notifications

Email notifications will be sent to vendor.one@example.test for the options selected below. If this email address is incorrect please update your profile.

Notify me about...
New opportunities.
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
  - heading "Notifications" [level=2]
  - paragraph: Email notifications will be sent to vendor.one@example.test for the options selected below. If this email address is incorrect please update your profile.
  - text: Notify me about...
  - checkbox "Notify me about... New opportunities." [checked]
  - text: New opportunities.
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
- dialog:
  - document:
    - heading "Unsubscribe?" [level=5]
    - img
    - text: Are you sure you want to unsubscribe? vendor.one@example.test will no longer receive notifications about new opportunities.
    - img
    - text: Unsubscribe Cancel
```
