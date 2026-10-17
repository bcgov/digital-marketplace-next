import type { Meta, StoryObj } from "@storybook/react-vite";
import { OpportunityListPage } from "./opportunity-list-page";
import { SitePage, WIDTHS } from "./site";

// opportunity-list · default — a signed-in vendor: the open opportunities with Watch on each, and the closed ones in a group that opens on
// request (R-1.2, R-1.5, R-1.38, R-1.39).
const meta: Meta = { title: "opportunities/opportunity-list/default", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <SitePage viewer={{ role: "vendor", email: "vendor.one@example.test" }} current="opportunities">
      <OpportunityListPage audience="vendor" />
    </SitePage>
  ),
};
