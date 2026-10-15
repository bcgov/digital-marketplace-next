# proposal-cwu-view

- Screen: `proposal-cwu-view`, proposals
- Address: `/opportunities/code-with-us/00000000-0000-4000-a002-000000000001/proposals/00000000-0000-4000-a002-000000000101`
- Seen as: administrator
- Picture: [../screens/proposal-cwu-view.jpg](../screens/proposal-cwu-view.jpg)

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
Enter Score
Disqualify
Back to Opportunity
VENDOR PROPOSAL
Proposal Details
MANAGEMENT
Proposal History
Code With Us: Vendor Proposal
Status
Under Review
Proponent
Northern Pines Digital Ltd.
Proponent Type
Organization
Submitted By
Blake Placeholder
Export Proposal
—
Total Score
—
Ranking
1. Proponent

Will you be submitting a proposal for this opportunity as an Individual or Organization?

Individual
Organization

Please provide the following details for the proponent that will complete the work as outlined by the Acceptance Criteria of the opportunity.

Organization
Northern Pines Digital Ltd.
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
- Back to Opportunity → `/opportunities/code-with-us/00000000-0000-4000-a002-000000000001/edit?tab=proposals`
- Proposal Details → `/opportunities/code-with-us/00000000-0000-4000-a002-000000000001/proposals/00000000-0000-4000-a002-000000000101?tab=proposal`
- Proposal History → `/opportunities/code-with-us/00000000-0000-4000-a002-000000000001/proposals/00000000-0000-4000-a002-000000000101?tab=history`
- Proposal Details → `/opportunities/code-with-us/00000000-0000-4000-a002-000000000001/proposals/00000000-0000-4000-a002-000000000101?tab=proposal`
- Proposal History → `/opportunities/code-with-us/00000000-0000-4000-a002-000000000001/proposals/00000000-0000-4000-a002-000000000101?tab=history`
- Northern Pines Digital Ltd. → `/organizations/00000000-0000-4000-8000-000000000301/edit`
- Blake Placeholder → `/users/00000000-0000-4000-8000-000000000202`
- Export Proposal → `/opportunities/code-with-us/00000000-0000-4000-a002-000000000001/proposals/00000000-0000-4000-a002-000000000101/export`
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
    - text: Enter Score
    - img
    - text: Disqualify
  - link "Back to Opportunity":
    - /url: /opportunities/code-with-us/00000000-0000-4000-a002-000000000001/edit?tab=proposals
    - img
    - text: Back to Opportunity
  - text: Vendor Proposal
  - link "Proposal Details":
    - /url: /opportunities/code-with-us/00000000-0000-4000-a002-000000000001/proposals/00000000-0000-4000-a002-000000000101?tab=proposal
    - img
    - text: Proposal Details
  - text: Management
  - link "Proposal History":
    - /url: /opportunities/code-with-us/00000000-0000-4000-a002-000000000001/proposals/00000000-0000-4000-a002-000000000101?tab=history
    - img
    - text: Proposal History
  - 'heading "Code With Us: Vendor Proposal" [level=3]'
  - text: Status Under Review Proponent
  - link "Northern Pines Digital Ltd.":
    - /url: /organizations/00000000-0000-4000-8000-000000000301/edit
  - text: Proponent Type Organization Submitted By
  - link "Blake Placeholder":
    - /url: /users/00000000-0000-4000-8000-000000000202
  - link "Export Proposal":
    - /url: /opportunities/code-with-us/00000000-0000-4000-a002-000000000001/proposals/00000000-0000-4000-a002-000000000101/export
    - text: Export Proposal
    - img
  - img
  - text: — Total Score
  - img
  - text: — Ranking
  - list:
    - listitem:
      - text: 1. Proponent
      - img
  - paragraph: Will you be submitting a proposal for this opportunity as an Individual or Organization?
  - radio "Individual" [disabled]
  - text: Individual
  - radio "Organization" [checked] [disabled]
  - text: Organization
  - paragraph: Please provide the following details for the proponent that will complete the work as outlined by the Acceptance Criteria of the opportunity.
  - text: Organization
  - img
  - log
  - text: Northern Pines Digital Ltd.
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
