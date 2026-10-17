import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProposalCwuCreatePage } from "./proposal-cwu-create-page";
import { SitePage, WIDTHS } from "./site";

// proposal-cwu-create · invalid — submitted as an individual with problems. The original site's message heads the form with a link to
// each problem, each field says what is wrong in the original site's words, and what was typed is kept. Focus starts on
// the message (R-2.13, R-2.14).
const meta: Meta = { title: "proposals/proposal-cwu-create/invalid", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const Invalid: StoryObj = {
  render: () => (
    <SitePage viewer={{ role: "vendor", email: "vendor.one@example.test" }} current="opportunities">
      <ProposalCwuCreatePage state="invalid" />
    </SitePage>
  ),
};
