import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProposalCwuCreatePage } from "./proposal-cwu-create-page";
import { SitePage, WIDTHS } from "./site";

// proposal-cwu-create · refused — the service refused to create the proposal because this vendor already holds one for the
// opportunity. The message receives focus and links to the existing proposal (R-2.2, R-2.11, R-2.15).
const meta: Meta = { title: "proposals/proposal-cwu-create/refused", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const Refused: StoryObj = {
  render: () => (
    <SitePage viewer={{ role: "vendor", email: "vendor.one@example.test" }} current="opportunities">
      <ProposalCwuCreatePage state="refused" />
    </SitePage>
  ),
};
