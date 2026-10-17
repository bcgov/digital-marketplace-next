import type { Meta, StoryObj } from "@storybook/react-vite";
import { OpportunityListPage } from "./opportunity-list-page";
import { SitePage, VISITOR, WIDTHS } from "./site";

// opportunity-list · signed-out — a visitor who has not signed in sees the open opportunities and no Watch control (R-1.2, R-1.5).
const meta: Meta = { title: "opportunities/opportunity-list/signed-out", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const SignedOut: StoryObj = {
  render: () => (
    <SitePage viewer={VISITOR} current="opportunities">
      <OpportunityListPage audience="visitor" />
    </SitePage>
  ),
};
