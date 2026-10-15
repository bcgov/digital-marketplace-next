# Create a Code With Us Opportunity

- Screen: `opportunity-cwu-create`, opportunities
- Address: `/opportunities/code-with-us/create`
- Seen as: administrator
- Picture: [../screens/opportunity-cwu-create.jpg](../screens/opportunity-cwu-create.jpg)

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
Publish
Save Draft
Cancel
Create a Code With Us Opportunity

Code With Us opportunities pay a fixed price of up to $70,000 for the delivery of code that meets your acceptance criteria.

Use the form provided to create your Code With Us opportunity. You can either save a draft of your opportunity to complete the form at a later time, or you can complete the form now to publish your opportunity immediately.

Need help? Read the guide to learn how to create and manage a Code With Us opportunity.

Familiarize yourself with Code With Us Terms and Conditions.

1. Overview
Title*
Teaser
Remote OK?*
Yes
No
Location*
Fixed-Price Award*
$
Cost Recovery
$
Required Skills*
Required Skills
Next
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
- Read the guide → `/cwu/ministry-guide`
- Terms and Conditions → `/content/code-with-us-terms-and-conditions`
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
    - text: Publish
    - img
    - text: Save Draft Cancel
  - heading "Create a Code With Us Opportunity" [level=1]
  - paragraph:
    - emphasis: Code With Us
    - text: opportunities pay a fixed price of up to $70,000 for the delivery of code that meets your acceptance criteria.
  - paragraph:
    - text: Use the form provided to create your
    - emphasis: Code With Us
    - text: opportunity. You can either save a draft of your opportunity to complete the form at a later time, or you can complete the form now to publish your opportunity immediately.
  - paragraph:
    - text: Need help?
    - link "Read the guide":
      - /url: /cwu/ministry-guide
    - text: to learn how to create and manage a
    - emphasis: Code With Us
    - text: opportunity.
  - paragraph:
    - text: Familiarize yourself with
    - emphasis: Code With Us
    - link "Terms and Conditions":
      - /url: /content/code-with-us-terms-and-conditions
    - text: .
  - list:
    - listitem:
      - img
      - text: 1. Overview
      - img
  - text: Title*
  - img
  - textbox "Title*":
    - /placeholder: Opportunity Title
  - text: Teaser
  - img
  - textbox "Teaser":
    - /placeholder: Provide 1-2 sentences that describe to readers what you are inviting them to do.
  - text: Remote OK?*
  - img
  - radio "Yes"
  - text: "Yes"
  - radio "No"
  - text: No Location*
  - img
  - textbox "Location*":
    - /placeholder: Location
    - text: Victoria
  - text: Fixed-Price Award*
  - img
  - text: $
  - spinbutton "Fixed-Price Award*"
  - text: Cost Recovery
  - img
  - text: $
  - spinbutton "Cost Recovery" [disabled]: "1000"
  - text: Required Skills*
  - img
  - log
  - text: Required Skills
  - combobox "Required Skills*"
  - img
  - text: Next
  - img
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
