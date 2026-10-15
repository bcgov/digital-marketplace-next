# organization-create

- Screen: `organization-create`, organizations
- Address: `/organizations/create`
- Seen as: vendor-1
- Picture: [../screens/organization-create.jpg](../screens/organization-create.jpg)

## Copy

Digital Marketplace
vendor.one@example.test
Dashboard
|
Opportunities
|
Organizations
Create Organization
Cancel
Profile
Capabilities
Organizations
Notifications
Policies, Terms & Agreements
Create Organization
Profile Picture (Optional)
Choose Image
Legal Name*
Website Url (Optional)
Legal Address
Street Address*
Street Address
City*
Province/State*
Postal / ZIP Code*
Country*
Contact Information
Contact Name*
Job Title (Optional)
Contact Email*
Phone Number (Optional)
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
- Cancel → `/users/00000000-0000-4000-8000-000000000201?tab=organizations`
- Cancel → `/users/00000000-0000-4000-8000-000000000201?tab=organizations`
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
- (no alt text) — `/images/default_organization_logo.svg`

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
    - text: Create Organization
    - link "Cancel":
      - /url: /users/00000000-0000-4000-8000-000000000201?tab=organizations
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
  - heading "Create Organization" [level=2]
  - img
  - text: Profile Picture (Optional)
  - button "Choose File"
  - text: Choose Image Legal Name*
  - textbox "Legal Name*"
  - text: Website Url (Optional)
  - textbox "Website Url (Optional)"
  - heading "Legal Address" [level=3]
  - text: Street Address*
  - textbox "Street Address*"
  - text: Street Address
  - textbox "Street Address"
  - text: City*
  - textbox "City*"
  - text: Province/State*
  - textbox "Province/State*"
  - text: Postal / ZIP Code*
  - textbox "Postal / ZIP Code*"
  - text: Country*
  - textbox "Country*"
  - heading "Contact Information" [level=3]
  - text: Contact Name*
  - textbox "Contact Name*"
  - text: Job Title (Optional)
  - textbox "Job Title (Optional)"
  - text: Contact Email*
  - textbox "Contact Email*"
  - text: Phone Number (Optional)
  - textbox "Phone Number (Optional)"
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
