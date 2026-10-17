import { useId, useRef, useState, type ReactNode } from "react";
import {
  Button,
  Checkbox,
  Heading,
  Link,
  ProgressCircle,
  Select,
  SvgChevronDownIcon,
  Text,
  TextField,
} from "@bcgov/design-system-react-components";
import { PageContainer } from "./layout";
import {
  CLOSED_OPPORTUNITIES,
  Hidden,
  Label,
  MarketplaceStyles,
  OPEN_OPPORTUNITIES,
  OpportunityRows,
  PROGRAM_NAMES,
  UNPUBLISHED_OPPORTUNITIES,
  look,
  type Opportunity,
  type Program,
} from "./marketplace";

// The opportunity list in the chosen direction (design/DESIGN.md, "The chosen direction"): a filter sidebar beside the
// the rows of open opportunities, with closed (and, for staff, unpublished) opportunities in groups that open on
// request, as on the original site. On a narrow screen the filters sit under the search and the program descriptions
// follow the results. The filters and the search work on the stories' opportunities.

export type Audience = "visitor" | "vendor" | "staff";

const PROGRAM_ITEMS = [
  { id: "all", label: "All Opportunity Types" },
  { id: "code-with-us", label: "Code With Us" },
  { id: "sprint-with-us", label: "Sprint With Us" },
  { id: "team-with-us", label: "Team With Us" },
];

// The original site's state filter, offered to staff only.
const STAGE_ITEMS = [
  { id: "all", label: "All Opportunity Statuses" },
  { id: "draft", label: "Draft" },
  { id: "under-review", label: "Under Review" },
  { id: "published", label: "Published" },
  { id: "evaluation", label: "Evaluation" },
  { id: "awarded", label: "Awarded" },
];

const PROGRAM_TEXT: Record<Program, string> = {
  "code-with-us": "Code With Us opportunities pay a fixed price for meeting acceptance criteria.",
  "team-with-us":
    "Team With Us opportunities are for registered organizations that are pre-qualified to supply individual resources for a given service area (e.g., Full-Stack Developer).",
  "sprint-with-us": "Sprint With Us opportunities are for registered organizations that can supply teams.",
};

// The search matches its words, in order, against an opportunity's title or location, ignoring case, as the original
// site's does.
function matches(opportunity: Opportunity, search: string): boolean {
  const words = search.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return true;
  const pattern = new RegExp(words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*"), "i");
  return pattern.test(opportunity.title) || pattern.test(opportunity.location);
}

// The heading and the rhythm. Wide: the H1 in the design system's H2 size, a 240-pixel sidebar 48 pixels from the
// results. Narrow: the H1 in its H3 size, one column. The switch follows the width of the page's own container.
const css = `
.list-page { container-type: inline-size; }
.list-frame { display: flex; flex-direction: column; gap: var(--layout-margin-medium); }
.list-frame > * { margin: var(--layout-margin-none); }
.list-heading { font: var(--typography-bold-h3); color: var(--typography-color-primary); }
.list-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas: "search" "filters" "results" "programs";
  gap: var(--layout-margin-medium);
}
.list-search { grid-area: search; }
.list-search > div, .list-search > div > * { width: 100%; }
.list-filters {
  grid-area: filters;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--layout-margin-medium) var(--layout-margin-large);
}
.list-filters > .list-select { flex: 1 1 100%; }
.list-filters > .list-select > * { width: 100%; }
.list-results, .list-group, .list-group-body, .list-empty {
  display: flex;
  flex-direction: column;
  gap: var(--layout-margin-medium);
}
.list-results { grid-area: results; }
.list-results > *, .list-group > *, .list-group-body > *, .list-empty > * { margin: var(--layout-margin-none); }
.list-group-body[hidden] { display: none; }
.list-count { display: flex; align-items: center; gap: var(--layout-margin-small); }
.list-closed { padding-top: var(--layout-padding-medium); }
.list-toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--layout-margin-medium);
  margin: var(--layout-margin-none);
  padding: var(--layout-padding-none);
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  text-align: start;
}
.list-toggle:focus-visible {
  outline: var(--layout-border-width-medium) solid var(--surface-color-border-active);
  outline-offset: var(--layout-margin-hair);
  border-radius: var(--layout-border-radius-small);
}
.list-toggle[aria-expanded="true"] > svg { transform: rotate(180deg); }
.list-message { font: var(--typography-regular-body); color: var(--typography-color-primary); }
.list-programs {
  grid-area: programs;
  display: flex;
  flex-direction: column;
  gap: var(--layout-margin-medium);
  padding-top: var(--layout-padding-large);
  border-top: var(--layout-border-width-small) solid var(--surface-color-border-default);
}
.list-program { display: flex; flex-direction: column; align-items: flex-start; gap: var(--layout-margin-small); }
.list-program > * { margin: var(--layout-margin-none); }
.list-program-name { font: var(--typography-bold-small-body); color: var(--typography-color-primary); }
.list-program-text { font: var(--typography-regular-small-body); color: var(--typography-color-secondary); }
@media (max-width: 767.98px) {
  .list-clear > button { width: 100%; }
}
@media (min-width: 768px) {
  .list-frame { gap: var(--layout-margin-huge); }
  .list-heading { font: var(--typography-bold-h2); }
}
@container (min-width: 720px) {
  .list-layout {
    grid-template-columns: 240px minmax(0, 1fr);
    grid-template-areas: "filters search" "filters results" "programs results";
    grid-template-rows: auto auto 1fr;
    column-gap: var(--layout-margin-xxxlarge);
    align-items: start;
  }
  .list-filters { flex-direction: column; align-items: flex-start; flex-wrap: nowrap; gap: var(--layout-margin-large); }
  .list-filters > .list-select { flex: none; align-self: stretch; }
  .list-programs { margin-top: var(--layout-margin-small); }
}
`;

// A group the original site keeps closed until asked for: a heading whose button shows or hides the group's rows
// (the disclosure pattern), the chevron turning to say which.
function Disclosure({
  title,
  testId,
  defaultOpen = false,
  children,
}: {
  title: string;
  testId: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();
  return (
    <section className="list-group list-closed" aria-label={title} data-testid={testId}>
      <Heading level={2} style={look.section}>
        <button
          type="button"
          className="list-toggle"
          aria-expanded={open}
          aria-controls={bodyId}
          onClick={() => setOpen((wasOpen) => !wasOpen)}
        >
          {title}
          <SvgChevronDownIcon />
        </button>
      </Heading>
      <div id={bodyId} className="list-group-body" hidden={!open}>
        {children}
      </div>
    </section>
  );
}

// What a group says when it has nothing to show: the original site's words, which tell a search that matched nothing
// apart from a group that is empty.
function Empty({ which, searching }: { which: "open" | "closed" | "unpublished"; searching: boolean }) {
  const text = searching
    ? `There are no ${which} opportunities that match your search criteria.`
    : {
        open: "There are currently no open opportunities. Check back soon!",
        closed: "There are currently no closed opportunities.",
        unpublished: "There are currently no unpublished opportunities.",
      }[which];
  return <p className="list-message">{text}</p>;
}

type ListProps = {
  audience: Audience;
  // A search already typed, as when a search from the home page lands here.
  search?: string;
  loading?: boolean;
  // Staff only: the Unpublished group opened.
  unpublishedOpen?: boolean;
};

export function OpportunityListPage({ audience, search: initialSearch = "", loading = false, unpublishedOpen = false }: ListProps) {
  const asStaff = audience === "staff";
  const signedIn = audience !== "visitor";
  const [program, setProgram] = useState<string>("all");
  const [stage, setStage] = useState<string>("all");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [search, setSearch] = useState(initialSearch);
  const searchField = useRef<HTMLDivElement>(null);

  const narrowed = (list: Opportunity[]) =>
    list.filter(
      (opportunity) =>
        (program === "all" || opportunity.program === program) &&
        (stage === "all" || opportunity.stage === stage) &&
        (!remoteOnly || opportunity.remoteOk) &&
        matches(opportunity, search),
    );
  const searching = program !== "all" || stage !== "all" || remoteOnly || search.trim() !== "";
  const open = narrowed(OPEN_OPPORTUNITIES);
  const closed = narrowed(CLOSED_OPPORTUNITIES);
  const unpublished = asStaff ? narrowed(UNPUBLISHED_OPPORTUNITIES) : [];

  const reset = () => {
    setProgram("all");
    setStage("all");
    setRemoteOnly(false);
    setSearch("");
  };
  // Clear search empties the search field and returns focus to it; the filters stay as they are.
  const clearSearch = () => {
    setSearch("");
    searchField.current?.querySelector("input")?.focus();
  };

  const rows = (list: Opportunity[]) => (
    <OpportunityRows opportunities={list} titleLevel={3} withTestIds withWatch={signedIn && !asStaff} asStaff={asStaff} />
  );

  return (
    <PageContainer>
      <MarketplaceStyles />
      <style>{css}</style>
      <div className="list-page">
        <div className="list-frame">
          <Heading level={1} className="list-heading">
            Welcome to the Digital Marketplace
          </Heading>
          <div className="list-layout">
            <form className="list-search" role="search" aria-label="Opportunities" onSubmit={(event) => event.preventDefault()}>
              <div ref={searchField}>
                <TextField
                  type="search"
                  label="Search by Title or Location"
                  value={search}
                  onChange={setSearch}
                  data-testid="opportunity-search"
                />
              </div>
            </form>

            <div className="list-filters" role="group" aria-label="Filter opportunities">
              <div className="list-select">
                <Select
                  label="Filter Opportunities"
                  items={PROGRAM_ITEMS}
                  value={program}
                  onChange={(key) => setProgram(String(key ?? "all"))}
                  data-testid="opportunity-filter-program"
                />
              </div>
              {asStaff ? (
                <div className="list-select">
                  <Select
                    label="Opportunity Status"
                    items={STAGE_ITEMS}
                    value={stage}
                    onChange={(key) => setStage(String(key ?? "all"))}
                    data-testid="opportunity-filter-status"
                  />
                </div>
              ) : null}
              <Checkbox isSelected={remoteOnly} onChange={setRemoteOnly} data-testid="opportunity-filter-remote">
                Remote OK
              </Checkbox>
              <Button variant="tertiary" size="medium" onPress={reset}>
                Reset
              </Button>
            </div>

            <div className="list-results">
              {loading ? (
                <div className="list-count" role="status">
                  <ProgressCircle isIndeterminate aria-label="Loading opportunities" />
                  <Text>Loading opportunities…</Text>
                </div>
              ) : (
                <>
                  {asStaff ? (
                    <Disclosure title="Unpublished Opportunities" testId="opportunity-group-unpublished" defaultOpen={unpublishedOpen}>
                      {unpublished.length ? rows(unpublished) : <Empty which="unpublished" searching={searching} />}
                    </Disclosure>
                  ) : null}

                  <section className="list-group" aria-labelledby="list-open-heading" data-testid="opportunity-group-open">
                    <Heading level={2} id="list-open-heading" className="list-count" style={look.section}>
                      Open Opportunities
                      {open.length ? <Label>{open.length}</Label> : null}
                    </Heading>
                    {/* A polite status that is always present, so its message is announced when the results change. */}
                    <div role="status" className="list-empty">
                      {open.length ? null : <Empty which="open" searching={searching} />}
                    </div>
                    {open.length ? rows(open) : null}
                    {!open.length && search.trim() ? (
                      <div className="list-clear">
                        <Button variant="secondary" size="medium" onPress={clearSearch}>
                          Clear search
                        </Button>
                      </div>
                    ) : null}
                  </section>

                  <Disclosure title="Closed Opportunities" testId="opportunity-group-closed">
                    {closed.length ? rows(closed) : <Empty which="closed" searching={searching} />}
                  </Disclosure>
                </>
              )}
            </div>

            <section className="list-programs" aria-label="The three programs">
              {(["code-with-us", "team-with-us", "sprint-with-us"] as const).map((id) => (
                <div key={id} className="list-program">
                  <Heading level={2} className="list-program-name">
                    {PROGRAM_NAMES[id]}
                  </Heading>
                  <p className="list-program-text">{PROGRAM_TEXT[id]}</p>
                  <Link href={`/learn-more/${id}`} size="small">
                    Learn More<Hidden> about {PROGRAM_NAMES[id]}</Hidden>
                  </Link>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
