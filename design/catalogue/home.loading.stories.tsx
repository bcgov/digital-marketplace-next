import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomePage } from "./home-page";
import { SitePage, VISITOR, WIDTHS } from "./site";

// home · loading — the open opportunities and the award totals have not arrived; the page's own text is already
// readable, and each wait is announced as a status.
const meta: Meta = { title: "opportunities/home-page/loading", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const Loading: StoryObj = {
  render: () => (
    <SitePage viewer={VISITOR} current="home" signInTestId="home-sign-in" signUpTestId="home-sign-up">
      <HomePage loading />
    </SitePage>
  ),
};
