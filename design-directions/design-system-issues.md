# B.C. Design System: issues found while building

Building the chosen direction's Storybook stories from `@bcgov/design-system-react-components`
0.8.1 and `@bcgov/design-tokens` 5.0.0 turned up five faults in the design system and four things it
does not offer. Each fault is worked around in this project's catalogue and listed in
[`../design/DESIGN.md`](../design/DESIGN.md), "Gaps in the design system". They are written up here
so they can be reported to the design system's team.

## Faults

### 1. InlineAlert drops its title when it has content of its own

**What happens.** Given children, `InlineAlert` renders the children and nothing else: neither its
`title` nor its `description` appears. Its container keeps `aria-labelledby="alert-title"`, which now
points at an element that is not there, and the id is fixed, so two alerts on one page would share
it.

**Why it matters.** An alert that carries a list, such as the problems with a submitted form, loses
its headline without any warning, and screen readers are told the alert is labelled by nothing.

**Workaround.** Alerts with content write their title inside the content, in the alert's own title
markup (`<span class="title" id="alert-title">`), which shows the title and gives the label something
to point at.

### 2. Header puts its skip links after the logo link

**What happens.** `Header` renders the logo link first and the `skipLinks` after it, so "Skip to main
content" is the second stop for someone moving through the page with the Tab key.

**Why it matters.** A skip link is there to be the first thing a keyboard user reaches.

**Workaround.** The site renders its own skip link before the header, drawn with the same tokens the
design system uses for its skip links.

### 3. Footer is wider than a 320-pixel screen

**What happens.** `Footer` gives its logo block a minimum width of 324 pixels and its link list a
minimum width of 320 pixels. On a 320-pixel screen, less the footer's own padding, both overflow,
and the whole page scrolls sideways.

**Why it matters.** WCAG 2.2 asks that content reflow at 320 CSS pixels without scrolling in two
directions. Every page that uses the footer fails at that width.

**Workaround.** Below 576 pixels, the site lets both blocks shrink to the screen.

### 4. A Link drawn as a button keeps the underline

**What happens.** `Link` with `isButton` takes the button classes, which do not remove the browser's
underline for links, so a link styled as a button is underlined and a real button is not.

**Why it matters.** Two things that should look the same look different, depending only on whether
they navigate or act.

**Workaround.** The site removes the underline from links drawn as buttons.

### 5. Line heights differ between the code and the Figma library

**What happens.** The CSS tokens set the H3 size at 28 pixels on a 48-pixel line. The Figma library's
H3 text style uses a 42-pixel line.

**Why it matters.** Screens drawn in Figma and built in code do not line up: headings stand taller in
code than in the design they were built from.

**Workaround.** None in code. The stories follow the CSS tokens, and the difference is noted wherever
a story is compared with its Figma frame.

## Things the design system does not offer

- **A static label or badge.** `Tag` is an interactive item inside a `TagGroup` (a grid), the wrong
  role for text that only labels something, such as an opportunity's status. The site draws its own
  label from the `Tag`'s tokens.
- **A menu icon.** There is a close icon but no icon for opening a menu, so the site's phone Menu
  button draws three bars in the button's own text colour.
- **A section heading that opens and closes.** `Accordion` draws its trigger as a small link, not as
  a heading, so a group of results that opens on request (such as closed opportunities) is a heading
  holding a plain button.
- **A card, a table or a page layout.** These are composed from tokens and listed among the project's
  own components.
