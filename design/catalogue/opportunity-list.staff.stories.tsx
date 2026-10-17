import type { Meta, StoryObj } from "@storybook/react-vite";
import { OpportunityListPage } from "./opportunity-list-page";
import { SitePage, WIDTHS } from "./site";

// opportunity-list · staff — an administrator: the status filter, each opportunity's stage, and the Unpublished group, opened here to
// show its rows (R-1.3, R-1.38, R-1.39).
const meta: Meta = { title: "opportunities/opportunity-list/staff", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const Staff: StoryObj = {
  render: () => (
    <SitePage viewer={{ role: "administrator", email: "admin.one@example.test" }} current="opportunities">
      <OpportunityListPage audience="staff" unpublishedOpen />
    </SitePage>
  ),
};
