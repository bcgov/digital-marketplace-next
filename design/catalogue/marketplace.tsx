import type { ReactNode } from "react";
import { Checkbox, Heading, Link } from "@bcgov/design-system-react-components";

// The chosen direction's own components (design/DESIGN.md, "The chosen direction"): the label, the opportunity rows and the
// program panels, with the facts they show. Built from standard HTML and the design tokens; none of them is a
// design-system component (design/DESIGN.md, "The chosen direction's components").

// Headings keep their level for structure and take the direction's denser sizes: a page's H1 in the design system's
// H3 size, a section's heading in its H4 size, an opportunity's title in bold body text.
export const look = {
  page: { font: "var(--typography-bold-h3)", color: "var(--typography-color-primary)" },
  section: { font: "var(--typography-bold-h4)", color: "var(--typography-color-primary)" },
  title: { font: "var(--typography-bold-body)" },
} as const;

export type LabelColour = "grey" | "green" | "blue" | "yellow" | "red";

// A short static label drawn like the design system's small rectangular Tag, from the same tokens. The Tag itself is
// an interactive grid item inside a TagGroup, the wrong role for text that only labels something. Colour marks an
// opportunity's status and nothing else; the label always says the status in words.
export function Label({ colour = "grey", testId, children }: { colour?: LabelColour; testId?: string; children: ReactNode }) {
  return (
    <span className={`dm-label dm-label-${colour}`} data-testid={testId}>
      {children}
    </span>
  );
}

// Text for assistive technology only, such as the program a "Learn More" link is about.
export function Hidden({ children }: { children: ReactNode }) {
  return <span className="dm-hidden">{children}</span>;
}

export type Program = "code-with-us" | "sprint-with-us" | "team-with-us";

export const PROGRAM_NAMES: Record<Program, string> = {
  "code-with-us": "Code With Us",
  "sprint-with-us": "Sprint With Us",
  "team-with-us": "Team With Us",
};

// Where an opportunity is in its life. Staff see this stage named; everyone else sees whether it is open.
export type Stage = "draft" | "under-review" | "published" | "evaluation" | "awarded" | "canceled";

export type Opportunity = {
  id: string;
  program: Program;
  title: string;
  summary: string;
  stage: Stage;
  // Accepting proposals: published, with its proposal deadline still ahead.
  open: boolean;
  // The proposal deadline, read after "Closes" until the opportunity has closed and after "Closed" once it has.
  deadline: string;
  value: string;
  location: string;
  remoteOk: boolean;
  watching?: boolean;
};

export type Status = { label: string; colour: LabelColour };

// The stages an opportunity reaches once its proposal deadline has passed.
const CLOSED_STAGES: Stage[] = ["evaluation", "awarded", "canceled"];

const STAGES: Record<Stage, Status> = {
  draft: { label: "Draft", colour: "grey" },
  "under-review": { label: "Under Review", colour: "yellow" },
  published: { label: "Published", colour: "green" },
  evaluation: { label: "Evaluation", colour: "yellow" },
  awarded: { label: "Awarded", colour: "green" },
  canceled: { label: "Canceled", colour: "red" },
};

// The original site's wording and colour for an opportunity's status. An administrator or the opportunity's author
// sees its stage; anyone else sees Open, Evaluation, Canceled or Completed.
export function statusOf(opportunity: Opportunity, asStaff: boolean): Status {
  if (asStaff) return STAGES[opportunity.stage];
  if (opportunity.open) return { label: "Open", colour: "green" };
  if (opportunity.stage === "evaluation") return { label: "Evaluation", colour: "yellow" };
  if (opportunity.stage === "canceled") return { label: "Canceled", colour: "red" };
  return { label: "Completed", colour: "grey" };
}

// The open opportunities of the seed the acceptance tests run against (tests/seed/manifest.yaml), so the catalogue
// shows the shapes the service holds. Their wording is test data.
export const OPEN_OPPORTUNITIES: Opportunity[] = [
  {
    id: "00000000-0000-4000-a025-000000000001",
    program: "sprint-with-us",
    title: "Seeded open Sprint With Us opportunity with a submitted proposal",
    summary: "A Sprint With Us opportunity still open for proposals.",
    stage: "published",
    open: true,
    deadline: "Nov 14, 2026 at 7:46 AM PST",
    value: "$500,000",
    location: "Victoria",
    remoteOk: true,
  },
  {
    id: "00000000-0000-4000-8000-000000000601",
    program: "code-with-us",
    title: "Seeded published Code With Us opportunity",
    summary: "A published opportunity that exists before any test runs.",
    stage: "published",
    open: true,
    deadline: "Jun 1, 2030 at 4:59 PM PDT",
    value: "$5,000",
    location: "Victoria",
    remoteOk: true,
  },
  {
    id: "00000000-0000-4000-a039-000000000001",
    program: "code-with-us",
    title: "Seeded Code With Us opportunity with a private note",
    summary: "A published opportunity whose history carries a private note.",
    stage: "published",
    open: true,
    deadline: "Jun 1, 2030 at 4:59 PM PDT",
    value: "$5,000",
    location: "Victoria",
    remoteOk: true,
  },
];

// Opportunities of the same seed that no longer accept proposals, most recently closed first. Their deadlines,
// values and summaries are test data.
export const CLOSED_OPPORTUNITIES: Opportunity[] = [
  {
    id: "00000000-0000-4000-a031-000000000001",
    program: "team-with-us",
    title: "Seeded Team With Us opportunity at consensus with five proponents",
    summary: "A Team With Us opportunity whose evaluators are agreeing their scores.",
    stage: "evaluation",
    open: false,
    deadline: "Oct 2, 2026 at 4:00 PM PDT",
    value: "$400,000",
    location: "Victoria",
    remoteOk: true,
  },
  {
    id: "00000000-0000-4000-a020-000000000001",
    program: "sprint-with-us",
    title: "Seeded awarded Sprint With Us opportunity",
    summary: "A Sprint With Us opportunity awarded to one proponent.",
    stage: "awarded",
    open: false,
    deadline: "Sep 18, 2026 at 4:00 PM PDT",
    value: "$500,000",
    location: "Victoria",
    remoteOk: true,
  },
  {
    id: "00000000-0000-4000-a008-000000000001",
    program: "code-with-us",
    title: "Seeded awarded Code With Us opportunity",
    summary: "A Code With Us opportunity awarded to one proponent.",
    stage: "awarded",
    open: false,
    deadline: "Aug 28, 2026 at 4:00 PM PDT",
    value: "$5,000",
    location: "Victoria",
    remoteOk: true,
  },
  {
    id: "00000000-0000-4000-a040-000000000001",
    program: "code-with-us",
    title: "Seeded cancelled Code With Us opportunity",
    summary: "A Code With Us opportunity cancelled before it was awarded.",
    stage: "canceled",
    open: false,
    deadline: "Aug 14, 2026 at 4:00 PM PDT",
    value: "$5,000",
    location: "Victoria",
    remoteOk: true,
  },
];

// The seed's unpublished opportunity, which staff see and nobody else does.
export const UNPUBLISHED_OPPORTUNITIES: Opportunity[] = [
  {
    id: "00000000-0000-4000-8000-000000000602",
    program: "code-with-us",
    title: "Seeded draft Code With Us opportunity of another staff member",
    summary: "A draft that has not been submitted for review.",
    stage: "draft",
    open: false,
    deadline: "Jun 1, 2030 at 4:59 PM PDT",
    value: "$5,000",
    location: "Victoria",
    remoteOk: true,
  },
];

type RowsProps = {
  opportunities: Opportunity[];
  // One level below the heading of the section the rows are listed under.
  titleLevel: 3 | 4;
  // The opportunity list's own test IDs for each row's status and proposal deadline. The home page's rows carry none.
  withTestIds?: boolean;
  // A signed-in viewer can watch each opportunity, to be emailed when it changes.
  withWatch?: boolean;
  // Staff see each opportunity's stage rather than whether it is open.
  asStaff?: boolean;
};

// Every opportunity shows the same facts in the same order: program and status, title, closing date, value, location
// and Remote OK, then its summary (design/DESIGN.md, "The chosen direction", rule 2). Where the list is wide enough the facts sit
// in aligned columns beside the title; where it is not, each opportunity is a stacked card with its facts on two
// lines. The switch follows the width of the list itself, not of the window.
export function OpportunityRows({ opportunities, titleLevel, withTestIds = false, withWatch = false, asStaff = false }: RowsProps) {
  return (
    <ul className="dm-rows">
      {opportunities.map((opportunity) => {
        const titleId = `opportunity-${opportunity.id}`;
        const status = statusOf(opportunity, asStaff);
        const closed = CLOSED_STAGES.includes(opportunity.stage);
        return (
          <li key={opportunity.id} className="dm-row">
            <article aria-labelledby={titleId} className="dm-row-grid">
              <div className="dm-row-head">
                <div className="dm-row-labels">
                  <Label>{PROGRAM_NAMES[opportunity.program]}</Label>
                  <Label colour={status.colour} testId={withTestIds ? "opportunity-status" : undefined}>
                    {status.label}
                  </Label>
                </div>
                <Heading level={titleLevel} id={titleId} style={look.title}>
                  <Link href={`/opportunities/${opportunity.program}/${opportunity.id}`}>{opportunity.title}</Link>
                </Heading>
              </div>
              <ul className="dm-facts">
                <li>
                  {closed ? "Closed" : "Closes"}{" "}
                  <span data-testid={withTestIds ? "opportunity-proposal-deadline" : undefined}>{opportunity.deadline}</span>
                </li>
                <li>{opportunity.value}</li>
                <li>{opportunity.location}</li>
                {opportunity.remoteOk ? <li>Remote OK</li> : null}
              </ul>
              <p className="dm-row-summary">{opportunity.summary}</p>
              {withWatch ? (
                <div className="dm-row-watch">
                  <Checkbox
                    defaultSelected={opportunity.watching}
                    aria-label={`Watch ${opportunity.title}`}
                    data-testid="opportunity-watch-toggle"
                  >
                    Watch
                  </Checkbox>
                </div>
              ) : null}
            </article>
          </li>
        );
      })}
    </ul>
  );
}

// The original site's own program illustrations, served with the catalogue. Their sizes are the files' own.
const ILLUSTRATIONS: Record<Program, { src: string; width: number; height: number }> = {
  "code-with-us": { src: new URL("./images/code_with_us.svg", import.meta.url).href, width: 350, height: 216 },
  "team-with-us": { src: new URL("./images/team_with_us.svg", import.meta.url).href, width: 1814, height: 1156 },
  "sprint-with-us": { src: new URL("./images/sprint_with_us.svg", import.meta.url).href, width: 312, height: 217 },
};

// The original site's descriptions of the three programs, in its order.
export const PROGRAMS: { id: Program; text: string; budget?: string }[] = [
  { id: "code-with-us", text: "Commit Code. Get Paid.", budget: "Opportunities up to $70,000." },
  {
    id: "team-with-us",
    text: "Provide individual tech resources to work with an existing Agile Team. Get paid on a time and materials basis.",
  },
  {
    id: "sprint-with-us",
    text: "Supply an Agile Team to work with a government product manager in a modern DevOps environment.",
    budget: "Opportunities up to $5,000,000.",
  },
];

// Direction A's program panels, drawn at Direction B's density: a gold rule, the program's illustration, its name, what
// it is, its budget limit where it has one, and Learn More. Three across where they fit, stacked where they do not.
// The illustrations are decorative: the program's name is the panel's heading.
export function ProgramPanels({ headingLevel }: { headingLevel: 2 | 3 }) {
  return (
    <ul className="dm-panels">
      {PROGRAMS.map((program) => {
        const name = PROGRAM_NAMES[program.id];
        const illustration = ILLUSTRATIONS[program.id];
        return (
          <li key={program.id} className="dm-panel">
            <section aria-labelledby={`program-${program.id}`} className="dm-panel-body">
              <img
                className="dm-panel-image"
                src={illustration.src}
                width={illustration.width}
                height={illustration.height}
                alt=""
              />
              <Heading level={headingLevel} id={`program-${program.id}`} style={look.section}>
                {name}
              </Heading>
              <p className="dm-panel-text">{program.text}</p>
              {program.budget ? <p className="dm-panel-budget">{program.budget}</p> : null}
              <p className="dm-panel-text">
                <Link href={`/learn-more/${program.id}`}>
                  Learn More<Hidden> about {name}</Hidden>
                </Link>
              </p>
            </section>
          </li>
        );
      })}
    </ul>
  );
}

// The widths below are the facts' columns, so that each fact lines up from one opportunity to the next. No token
// carries a column width. Narrow screens (the header's switch point) take the smaller text and tighter padding the
// phone drafts use.
const css = `
.dm-label {
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  min-height: var(--layout-padding-large);
  padding: var(--layout-padding-hair) var(--layout-padding-small);
  border: var(--layout-border-width-small) solid;
  border-radius: var(--layout-border-radius-small);
  font: var(--typography-regular-label);
  color: var(--typography-color-primary);
  white-space: nowrap;
}
.dm-label-grey { background-color: var(--theme-gray-20); border-color: var(--surface-color-border-dark); }
.dm-label-green { background-color: var(--support-surface-color-success); border-color: var(--support-border-color-success); }
.dm-label-blue { background-color: var(--support-surface-color-info); border-color: var(--support-border-color-info); }
.dm-label-yellow { background-color: var(--support-surface-color-warning); border-color: var(--support-border-color-warning); }
.dm-label-red { background-color: var(--support-surface-color-danger); border-color: var(--support-border-color-danger); }
.dm-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.dm-rows {
  container-type: inline-size;
  list-style: none;
  margin: var(--layout-margin-none);
  padding: var(--layout-padding-none);
  display: flex;
  flex-direction: column;
  gap: var(--layout-margin-small);
}
.dm-row {
  padding-block: var(--layout-padding-medium);
  border-bottom: var(--layout-border-width-small) solid var(--surface-color-border-default);
}
.dm-row-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas: "head" "facts" "summary" "watch";
  row-gap: var(--layout-margin-small);
}
.dm-row-head {
  grid-area: head;
  display: flex;
  flex-direction: column;
  gap: var(--layout-margin-small);
}
.dm-row-head > h3, .dm-row-head > h4 { margin: var(--layout-margin-none); }
.dm-row-head > :is(h3, h4) > a.bcds-react-aria-Link { font: inherit; }
.dm-row-labels {
  display: flex;
  flex-wrap: wrap;
  gap: var(--layout-margin-small);
}
.dm-facts {
  grid-area: facts;
  list-style: none;
  margin: var(--layout-margin-none);
  padding: var(--layout-padding-none);
  display: flex;
  flex-wrap: wrap;
  column-gap: var(--layout-margin-small);
  font: var(--typography-regular-small-body);
  color: var(--typography-color-secondary);
}
.dm-facts > li:first-child {
  flex-basis: 100%;
  color: var(--typography-color-primary);
}
.dm-facts > li:not(:first-child):not(:last-child)::after {
  content: "·" / "";
  margin-inline-start: var(--layout-margin-small);
}
.dm-row-summary {
  grid-area: summary;
  margin: var(--layout-margin-none);
  font: var(--typography-regular-small-body);
  color: var(--typography-color-secondary);
}
.dm-row-watch { grid-area: watch; }
@container (min-width: 760px) {
  .dm-rows { gap: var(--layout-margin-medium); }
  .dm-row-grid {
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas: "head facts" "summary facts" "watch facts";
    grid-template-rows: auto auto 1fr;
    column-gap: var(--layout-margin-medium);
  }
  .dm-facts {
    display: grid;
    grid-template-columns: 190px 70px 70px 80px;
    column-gap: var(--layout-margin-medium);
    align-self: start;
    color: var(--typography-color-primary);
  }
  .dm-facts > li:not(:first-child):not(:last-child)::after { content: none; }
}
@container (min-width: 1000px) {
  .dm-row-grid { column-gap: var(--layout-margin-xlarge); }
  .dm-facts {
    grid-template-columns: 280px 80px 80px 80px;
    column-gap: var(--layout-margin-xlarge);
  }
}

.dm-panels {
  list-style: none;
  margin: var(--layout-margin-none);
  padding: var(--layout-padding-none);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: var(--layout-margin-large);
}
.dm-panel {
  border: var(--layout-border-width-small) solid var(--surface-color-border-default);
  border-top: var(--layout-border-width-large) solid var(--theme-primary-gold);
  border-radius: var(--layout-border-radius-medium);
}
.dm-panel-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--layout-margin-medium);
  padding: var(--layout-padding-large);
}
.dm-panel-body > * { margin: var(--layout-margin-none); }
.dm-panel-image { width: 160px; height: auto; }
.dm-panel-text { font: var(--typography-regular-body); color: var(--typography-color-primary); }
.dm-panel-budget { font: var(--typography-bold-body); color: var(--typography-color-primary); }
@media (max-width: 767.98px) {
  .dm-panel-body { padding: var(--layout-padding-medium); gap: var(--layout-margin-small); }
  .dm-panel-image { width: 120px; }
  .dm-panel-text { font: var(--typography-regular-small-body); }
  .dm-panel-budget { font: var(--typography-bold-small-body); }
}
`;

// The style sheet for the components above, placed once by each page that uses them.
export function MarketplaceStyles() {
  return <style>{css}</style>;
}
