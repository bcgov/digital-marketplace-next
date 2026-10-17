import type { Meta, StoryObj } from "@storybook/react-vite";
import { OpportunityListPage } from "./opportunity-list-page";
import { SitePage, WIDTHS } from "./site";

// opportunity-list · loading — the filters are ready and the opportunities have not arrived; the wait is announced as a status.
const meta: Meta = { title: "opportunities/opportunity-list/loading", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const Loading: StoryObj = {
  render: () => (
    <SitePage viewer={{ role: "vendor", email: "vendor.one@example.test" }} current="opportunities">
      <OpportunityListPage audience="vendor" loading />
    </SitePage>
  ),
};
