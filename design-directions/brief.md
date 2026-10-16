# Design directions: brief

Three design directions for the rebuilt Digital Marketplace. Every direction carries exactly the
original site's content and follows the B.C. Design System; they differ in how the pages are put
together. One is chosen and then extended to every screen.

## What is fixed

- **Content.** Every heading, paragraph, statistic, link and section recorded in
  [`../content/`](../content/index.md), screen by screen. A direction may regroup or reorder
  sections; it does not drop content or add new content. Copy edits are a separate, later piece
  of work.
- **Navigation.** The top bar offers Home, Opportunities and Organizations to everyone, and
  Dashboard, Opportunities and Organizations once signed in, with Users and Content added for
  administrators. The footer offers Home, About, Disclaimer, Privacy, Accessibility, Copyright,
  Contact Us and Source Code.
- **The B.C. Design System.** Its components, colour and spacing tokens and text styles: no new
  colours, no other typeface than BC Sans. Where the design system has no component for something
  the marketplace needs, such as a card or a table, it is composed from the design system's tokens
  and listed as the project's own, never presented as a design system component.
- **Accessibility.** WCAG 2.2 AA: contrast, focus order and visibility, heading structure, target
  sizes. Layouts reflow with their content rather than at fixed breakpoints, and work at 320 CSS
  pixels and at 400% zoom without sideways scrolling. The keyboard, screen reader and zoom checks a
  design needs are listed with the person who makes each one, and their results are recorded before
  the chosen direction's screens are accepted.

## What the review of the first build asks of every direction

The first build was reviewed screen by screen, and these follow from what it found:

- **Every screen at three widths.** Desktop (1440), phone (390) and narrow phone (320). The first
  build was only ever drawn and checked at desktop width, and at 320 and 390 its header pushed
  Sign in and Sign up off the screen and its opportunity filters truncated and overlapped.
- **The site's header, navigation and footer are designed in their own right**, at all three
  widths, rather than left to each page.
- **Every state a screen can be in.** Empty; no results for a search, with a way to clear it,
  distinct from a list that is genuinely empty; saving; saved, with a confirmation that the work
  was kept; and error.
- **Where you are is never shown by colour alone.** The current section or tab is marked by more
  than a colour change.
- **Design system controls, not stand-ins.** A date is chosen with the design system's date
  picker, a checkbox's target is the checkbox and its label rather than the whole row, and any
  place a component cannot be used is written down for a reviewer to decide.
- **After moving to a new page, focus starts at its heading.** Recorded with each screen, so the
  build can be checked against it.

## The shared header and footer

Every direction uses the same header and footer, drawn once at all three widths on the "Site
header and footer" page of the project's Figma file.

- **Desktop.** Two rows. The first holds the B.C. logo, "Digital Marketplace" and the account
  area: Sign In as a tertiary button and Sign Up as a secondary one when signed out, so each
  page's own main action stays its only primary button; when signed in, the person's email
  address, which opens My Profile, My Organizations (for vendors) and Sign Out. The second row
  holds the navigation, separated by dividers as on the original site.
- **Phones.** The design system's phone header: the B.C. logo and a Menu button that shows the
  word "Menu" beside its icon, and "Close" when the menu is open. The open menu repeats "Digital
  Marketplace" at its top, lists the navigation, then the account actions.
- **The current page** is marked by a bar and bold text: under the item on desktop, beside it in
  the phone menu.
- **Keyboard and screen readers.** A "Skip to main content" link comes first and appears on focus.
  The Menu button is named "Menu" and tells assistive technology whether the menu is open.
- **The footer** is the design system's footer with its land acknowledgement. Everything else in
  it is the original site's: its eight links and the line "Owned and operated by the B.C.
  Government."

## What is open

Where the directions differ: what each page leads with; the treatment of the opening section; how
the three programs are presented; cards, lists or tables for opportunities; density; imagery
(photography, illustration, or none); how the accent colour is used within the design tokens; how
statistics and testimonials are shown.

## How the directions are drawn

1. **All three directions, at desktop width.** For each, an element collage, then the home page
   and the opportunity list. An element collage is one frame holding the pieces a direction treats
   differently from the others (an opportunity, the program presentation, the statistics, a
   testimonial and the opening section) without laying out a whole page.
2. **One direction is chosen**, or one direction with named borrowings from another, by one
   question: which direction gets a vendor from the home page to an open opportunity that suits
   them fastest on a phone, while still explaining the three programs to a first-time visitor?
3. **The chosen direction draws every screen below** at desktop (1440), phone (390) and narrow
   phone (320):
   1. **Home**: [`home`](../content/pages/home.md).
   2. **Opportunity list**: [`opportunity-list`](../content/pages/opportunity-list.md), including
      its no-results state.
   3. **Proposal form**: [`proposal-cwu-create`](../content/pages/proposal-cwu-create.md),
      including its saved-draft state.

## The three directions

Each direction's answer to every open question, and the public services it borrows from.
Screenshots of each reference are on the "References" page of the project's Figma file.

### A. Programs first

Welcoming and explanatory: the three programs are the front door.

| Open question | Answer |
|---|---|
| Leads with | What the marketplace is for, then the three programs. |
| Opening section | The existing headline and introduction, the award totals as a quiet line, and Browse Opportunities. The Vendors and Public Service Employees sections follow the programs, as two paths side by side. |
| The three programs | Three large panels, each with its description, its budget limit where it has one, and Learn More. |
| Opportunities | Cards, grouped under their program. |
| Density | Low, with plenty of white space. |
| Imagery | The original site's own program illustrations; no photographs. |
| Accent colour | B.C. gold as a thin rule on each program panel; blue only for actions. |
| Statistics and testimonials | The two award totals as a quiet line under the introduction; testimonials as quotations near the end. |

Borrowed from:

- **BuyICT** home page, Australia (<https://www.buyict.gov.au/>): two large audience panels, one
  for buyers and one for sellers, then a card for each program.
- **Digital Marketplace**, UK (<https://www.digitalmarketplace.service.gov.uk/>): each buying
  program named with one line saying what it is for; the buyer and seller paths side by side.
- **Canadian Digital Service** (<https://digital.canada.ca/>): products grouped under plain
  headings, each with a one-line description.

### B. Opportunities first

A working tool: dense, efficient and task-led.

| Open question | Answer |
|---|---|
| Leads with | The open opportunities and the search. |
| Opening section | A short headline, the search field and the number of open opportunities, with the latest opportunities directly below. |
| The three programs | The opportunity type filter, and the program named on each opportunity; their Learn More pages linked from a compact strip. |
| Opportunities | Rows of the same facts in a fixed order: program and status, title, closing date, value, location and Remote OK, with the summary below the title. The number of open opportunities, and a way to reset the filters. |
| Density | High: small text for the facts, tight spacing. |
| Imagery | None. |
| Accent colour | Only for an opportunity's status, using the design system's status colours. |
| Statistics and testimonials | The award totals as a compact band; testimonials lower on the page. |

Borrowed from:

- **Find a Tender** search results, UK
  (<https://www.find-tender.service.gov.uk/Search/Results>): rows of facts under each title, the
  result count at the top, and Update results and Reset under the filters.
- **BuyICT** opportunities, Australia (<https://www.buyict.gov.au/>, Opportunities): the facts each
  opportunity shows, including its working arrangement (remote or hybrid), location and closing
  time, and a filter panel beside the list.
- **Contracts Finder** search results, UK
  (<https://www.contractsfinder.service.gov.uk/Search/Results>): the number of matches shown beside
  each filter option.

### C. Outcomes and stories

Editorial and warm: results and people first.

| Open question | Answer |
|---|---|
| Leads with | Results: the award totals as headline numbers. |
| Opening section | The two totals as large figures beside the headline, then the testimonials. |
| The three programs | A row of three, set out the way SBIR sets out its phases, each with its budget limit where it has one. |
| Opportunities | Larger cards with the full summary. |
| Density | Low to medium, with full-width bands separating sections. |
| Imagery | Photographs of people at work: the original site's own images where they exist, and marked places where new photographs would go. |
| Accent colour | Full-width light-blue and dark-blue bands from the design system's background colours to pace the page. |
| Statistics and testimonials | Statistics in the largest text size; testimonials as large quotations with the person's name and role. |

Borrowed from:

- **America's Seed Fund**, US (<https://www.sbir.gov/>): three headline numbers, then the program
  presented as phases, each with its funding range.
- **Digital Government**, B.C. (<https://digital.gov.bc.ca/>): story cards with a photograph, date
  and ministry, in the B.C. brand.

## How the drafts are made

An agent drafts each direction in the project's Figma file through Figma's MCP server, using the
B.C. Design System library, in small steps that are each checked from a screenshot. Screenshots and
photographs can be placed in the file; the agent does not make photographs, so direction C uses the
original site's own images and marks where new ones would go. The designer refines the drafts. The
directions are reviewed together, one is chosen, and the choice and its principles are recorded in
`decision.md` beside this brief.
