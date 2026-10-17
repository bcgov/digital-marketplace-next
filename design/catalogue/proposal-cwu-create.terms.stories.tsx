import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProposalCwuCreatePage } from "./proposal-cwu-create-page";
import { SitePage, WIDTHS } from "./site";

// proposal-cwu-create · terms — Submit was pressed. The original site's dialog asks the vendor to accept the program's terms and the
// service's terms, and its Submit Proposal button stays disabled until both boxes are ticked (R-2.3).
const meta: Meta = { title: "proposals/proposal-cwu-create/terms", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const Terms: StoryObj = {
  render: () => (
    <SitePage viewer={{ role: "vendor", email: "vendor.one@example.test" }} current="opportunities">
      <ProposalCwuCreatePage state="terms" />
    </SitePage>
  ),
};
