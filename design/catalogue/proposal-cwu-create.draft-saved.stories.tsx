import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProposalCwuCreatePage } from "./proposal-cwu-create-page";
import { SitePage, WIDTHS } from "./site";

// proposal-cwu-create · draft-saved — Save Draft was pressed. The original site's confirmation, "Draft Proposal Saved", stays on the page
// until it is dismissed, keyboard focus moves to it so it is read out, and the summary is labelled Draft.
const meta: Meta = { title: "proposals/proposal-cwu-create/draft-saved", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const DraftSaved: StoryObj = {
  render: () => (
    <SitePage viewer={{ role: "vendor", email: "vendor.one@example.test" }} current="opportunities">
      <ProposalCwuCreatePage state="draft-saved" />
    </SitePage>
  ),
};
