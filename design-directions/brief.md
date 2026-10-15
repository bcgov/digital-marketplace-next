# Design directions: brief

Three visual directions for the rebuilt Digital Marketplace. Every direction carries exactly the
original site's content and follows the B.C. Design System; they differ in the overall design.
One is chosen and then extended to every screen.

This brief is a starting point for the designer to adjust before any direction is drawn.

## What is fixed

- **Content.** Every heading, paragraph, statistic, link and section recorded in
  [`../content/`](../content/index.md), screen by screen. A direction may regroup or reorder
  sections; it does not drop content or add new content. Copy edits are a separate, later piece
  of work.
- **Navigation.** The top bar offers Home, Opportunities and Organizations to everyone, and
  Dashboard, Opportunities and Organizations once signed in, with Users and Content added for
  administrators. The footer offers Home, About, Disclaimer, Privacy, Accessibility, Copyright,
  Contact Us and Source Code.
- **The B.C. Design System.** Its components, variables and text styles only: no new colours, no
  other typeface than BC Sans, no one-off components. Spacing and breakpoints come from its tokens.
- **Accessibility.** WCAG 2.2 AA: contrast, focus order and visibility, heading structure, target
  sizes. The keyboard, screen reader and zoom checks a design needs are listed with the person who
  makes each one, and their results are recorded before the chosen direction's screens are accepted.

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

## What is open

Where the directions differ: how each page is composed and what it leads with; the treatment of
the opening section; how the three programs are presented; cards, lists or tables for
opportunities; density; imagery (photography, illustration, or none); how the accent colour is
used within the design tokens; how statistics and testimonials are shown.

## The screens each direction draws

1. **Home**: [`home`](../content/pages/home.md).
2. **Opportunity list**: [`opportunity-list`](../content/pages/opportunity-list.md), including its
   no-results state.
3. **Proposal form**: [`proposal-cwu-create`](../content/pages/proposal-cwu-create.md), including
   its saved-draft state.

Each at desktop (1440), phone (390) and narrow phone (320) widths.

And a style tile: the type scale in use, buttons, one card, one form field, the imagery treatment
and the spacing rhythm, on a single frame.

## Three starting directions

**A. Programs first.** The three programs are the front door. A short opening states the purpose;
three large program panels (tagline, budget ceiling, Learn More) carry the home page; the Vendors
and Public Service Employees sections sit side by side; testimonials appear as quotations. The
opportunity list is grouped by program. The proposal form keeps the program's guidance beside the
form. Feel: welcoming and explanatory, with plenty of white space.

**B. Opportunities first.** The marketplace as a working tool. The latest open opportunities and
the way to search them lead the home page; the award totals become a compact band; the programs
become filters. The opportunity list shows each opportunity's key facts in rows (program, value,
deadline, location, remote). The proposal form is one long form with a summary that stays in view.
Feel: dense, efficient, task-led.

**C. Outcomes and stories.** Results and people first. The award totals are the headline; the
testimonials and what the programs have produced come early; imagery is generous (the designer
places photographs; the drafts hold placeholders). The opportunity list uses larger cards with
fuller summaries. The proposal form is guided, with plain-language help beside each section.
Feel: editorial and warm.

## Where to look for inspiration

- Services that do the same job: Australia's BuyICT and the UK's Digital Marketplace.
- Government design systems in use: the U.S. Web Design System showcase, GOV.UK, and the
  Government of Canada's design system.
- Product screen libraries, for list and form patterns: Mobbin, Refero.

## How the drafts are made

An agent drafts each direction in the project's Figma file through Figma's MCP server, one page
per direction, using only the B.C. Design System library, in small steps that are checked as they
go. The agent cannot place images or fonts outside the library, so photography is left as
placeholders. The designer then refines each direction. The directions are reviewed together, one
is chosen, and the choice and its principles are recorded in `decision.md` beside this brief.
