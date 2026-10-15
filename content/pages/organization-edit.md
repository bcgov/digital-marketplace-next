# organization-edit

- Screen: `organization-edit`, organizations
- Address: `/organizations/00000000-0000-4000-8000-000000000301/edit`
- Seen as: vendor-2
- Picture: [../screens/organization-edit.jpg](../screens/organization-edit.jpg)

## Copy

Digital Marketplace
org.owner@example.test
Dashboard
|
Opportunities
|
Organizations
Edit Organization
Organization
Team
SWU Qualification
TWU Qualification
Changelog
Northern Pines Digital Ltd.
Sprint With Us Qualified
Team With Us Qualified
Profile Picture (Optional)
Legal Name
Website Url (Optional)
Legal Address
Street Address
Street Address
City
Province/State
Postal / ZIP Code
Country
Contact Information
Contact Name
Job Title (Optional)
Contact Email
Phone Number (Optional)
Archive Organization

Archiving this organization means that it will no longer be available for opportunity proposals.

Archive Organization
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
- My Profile → `/users/00000000-0000-4000-8000-000000000202`
- My Organizations → `/users/00000000-0000-4000-8000-000000000202?tab=organizations`
- Sign Out → `/sign-out`
- Digital Marketplace → `/`
- Dashboard → `/dashboard`
- Opportunities → `/opportunities`
- Organizations → `/organizations`
- org.owner@example.test → `/users/00000000-0000-4000-8000-000000000202`
- Sign Out → `/sign-out`
- Dashboard → `/dashboard`
- Opportunities → `/opportunities`
- Organizations → `/organizations`
- Organization → `/organizations/00000000-0000-4000-8000-000000000301/edit?tab=organization`
- Team → `/organizations/00000000-0000-4000-8000-000000000301/edit?tab=team`
- SWU Qualification → `/organizations/00000000-0000-4000-8000-000000000301/edit?tab=swuQualification`
- TWU Qualification → `/organizations/00000000-0000-4000-8000-000000000301/edit?tab=twuQualification`
- Changelog → `/organizations/00000000-0000-4000-8000-000000000301/edit?tab=changelog`
- Organization → `/organizations/00000000-0000-4000-8000-000000000301/edit?tab=organization`
- Team → `/organizations/00000000-0000-4000-8000-000000000301/edit?tab=team`
- SWU Qualification → `/organizations/00000000-0000-4000-8000-000000000301/edit?tab=swuQualification`
- TWU Qualification → `/organizations/00000000-0000-4000-8000-000000000301/edit?tab=twuQualification`
- Changelog → `/organizations/00000000-0000-4000-8000-000000000301/edit?tab=changelog`
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
    - text: org.owner@example.test
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
    - text: Edit Organization
  - link "Organization":
    - /url: /organizations/00000000-0000-4000-8000-000000000301/edit?tab=organization
    - img
    - text: Organization
  - link "Team":
    - /url: /organizations/00000000-0000-4000-8000-000000000301/edit?tab=team
    - img
    - text: Team
  - link "SWU Qualification":
    - /url: /organizations/00000000-0000-4000-8000-000000000301/edit?tab=swuQualification
    - img
    - text: SWU Qualification
  - link "TWU Qualification":
    - /url: /organizations/00000000-0000-4000-8000-000000000301/edit?tab=twuQualification
    - img
    - text: TWU Qualification
  - link "Changelog":
    - /url: /organizations/00000000-0000-4000-8000-000000000301/edit?tab=changelog
    - img
    - text: Changelog
  - heading "Northern Pines Digital Ltd." [level=2]
  - img
  - text: Sprint With Us Qualified
  - img
  - text: Team With Us Qualified
  - img
  - text: Profile Picture (Optional) Legal Name
  - textbox "Legal Name" [disabled]: Northern Pines Digital Ltd.
  - text: Website Url (Optional)
  - textbox "Website Url (Optional)" [disabled]: https://northern-pines.example.test
  - heading "Legal Address" [level=3]
  - text: Street Address
  - textbox "Street Address" [disabled]: 100 Placeholder Way
  - text: Street Address
  - textbox "Street Address" [disabled]
  - text: City
  - textbox "City" [disabled]: Victoria
  - text: Province/State
  - textbox "Province/State" [disabled]: BC
  - text: Postal / ZIP Code
  - textbox "Postal / ZIP Code" [disabled]: V0V0V0
  - text: Country
  - textbox "Country" [disabled]: Canada
  - heading "Contact Information" [level=3]
  - text: Contact Name
  - textbox "Contact Name" [disabled]: Blake Placeholder
  - text: Job Title (Optional)
  - textbox "Job Title (Optional)" [disabled]: Managing Director
  - text: Contact Email
  - textbox "Contact Email" [disabled]: org.owner@example.test
  - text: Phone Number (Optional)
  - textbox "Phone Number (Optional)" [disabled]: 250-555-0101
  - heading "Archive Organization" [level=3]
  - paragraph: Archiving this organization means that it will no longer be available for opportunity proposals.
  - img
  - text: Archive Organization
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
