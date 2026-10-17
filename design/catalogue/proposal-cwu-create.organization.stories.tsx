import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProposalCwuCreatePage } from "./proposal-cwu-create-page";
import { SitePage, WIDTHS } from "./site";

// proposal-cwu-create · organization — the vendor proposes for an organization, so the individual's details give way to one choice
// among the organizations they own, with the original site's guidance (R-2.11, R-2.14).
const meta: Meta = { title: "proposals/proposal-cwu-create/organization", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const Organization: StoryObj = {
  render: () => (
    <SitePage viewer={{ role: "vendor", email: "vendor.one@example.test" }} current="opportunities">
      <ProposalCwuCreatePage state="organization" />
    </SitePage>
  ),
};
