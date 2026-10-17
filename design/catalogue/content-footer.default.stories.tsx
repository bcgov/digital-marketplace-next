import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading, Text } from "@bcgov/design-system-react-components";
import { PageContainer, Stack } from "./layout";
import { SitePage, VISITOR, WIDTHS } from "./site";

// content-footer · default — the footer every screen carries, here under a placeholder page as a visitor who is not
// signed in sees it. Its links are the original site's eight; the five pages the service keeps for its own prose
// (About, Disclaimer, Privacy, Accessibility, Copyright) open the page held at that address (R-7.19).
const meta: Meta = { title: "content/content-footer/default", parameters: { viewport: { options: WIDTHS } } };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <SitePage viewer={VISITOR}>
      <PageContainer>
        <Stack gap="medium">
          <Heading level={1}>Digital Marketplace</Heading>
          <Text elementType="p">Placeholder: the page above the footer is designed by its own domain.</Text>
        </Stack>
      </PageContainer>
    </SitePage>
  ),
};
