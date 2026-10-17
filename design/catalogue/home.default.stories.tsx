import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomePage } from "./home-page";
import { SitePage, VISITOR, WIDTHS } from "./site";

// home · default — a visitor who has not signed in. The header's Sign In and Sign Up are the page's own sign-in and
// sign-up actions. The award totals are the original site's; the opportunities are the test seed's.
const meta: Meta = { title: "opportunities/home-page/default", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <SitePage viewer={VISITOR} current="home" signInTestId="home-sign-in" signUpTestId="home-sign-up">
      <HomePage />
    </SitePage>
  ),
};
