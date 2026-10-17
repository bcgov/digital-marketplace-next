import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProposalCwuCreatePage } from "./proposal-cwu-create-page";
import { SitePage, WIDTHS } from "./site";

// proposal-cwu-create · default — a signed-in vendor proposing as an individual. Submit opens the terms dialog and Save Draft shows the
// saved message, so the story can be worked through (R-2.3, R-2.13, R-2.14).
const meta: Meta = { title: "proposals/proposal-cwu-create/default", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <SitePage viewer={{ role: "vendor", email: "vendor.one@example.test" }} current="opportunities">
      <ProposalCwuCreatePage state="default" />
    </SitePage>
  ),
};
