import type { Meta, StoryObj } from "@storybook/react-vite";
import { OpportunityListPage } from "./opportunity-list-page";
import { SitePage, VISITOR, WIDTHS } from "./site";

// opportunity-list · no-results — a search that matches no open opportunity: the original site's sentence, announced as a status, and Clear
// search, which empties the field and returns focus to it.
const meta: Meta = { title: "opportunities/opportunity-list/no-results", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const NoResults: StoryObj = {
  render: () => (
    <SitePage viewer={VISITOR} current="opportunities">
      <OpportunityListPage audience="visitor" search="Kamloops" />
    </SitePage>
  ),
};
