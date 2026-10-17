import { useEffect, useId, useState, type ReactNode } from "react";
import {
  Button,
  Footer,
  FooterLinks,
  Header,
  Link,
  Menu,
  MenuItem,
  MenuTrigger,
  Subheader,
  SvgChevronDownIcon,
  SvgCloseIcon,
  Text,
} from "@bcgov/design-system-react-components";

// The site's shell: the banner with the service's navigation, the main region, and the footer, which every screen
// carries. This project's own composition of the design system's Header, Subheader, Menu and Footer, not a
// design-system component (design/DESIGN.md, "Site header and footer").

// Below this width the navigation and the account actions move behind the Menu button. 768 pixels is the narrowest
// width the design system's Figma header is drawn for above its phone version ("Tablet MD"); no token carries it.
const NARROW = "(max-width: 767.98px)";

// Whether the window is narrower than the header's switch point. Read in script rather than in a style sheet so only
// one header is ever in the document: two copies, one hidden, would give each account action two test IDs.
export function useNarrow(): boolean {
  const [narrow, setNarrow] = useState(() => window.matchMedia(NARROW).matches);
  useEffect(() => {
    const query = window.matchMedia(NARROW);
    const update = () => setNarrow(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return narrow;
}

// The three widths every screen is drawn at, offered in Storybook's viewport menu for each story. Each layout reflows
// with its content between them; the header is the one part that switches.
export const WIDTHS = {
  desktop: { name: "Desktop 1440", styles: { width: "1440px", height: "900px" }, type: "desktop" },
  phone: { name: "Phone 390", styles: { width: "390px", height: "844px" }, type: "mobile" },
  narrow: { name: "Narrow phone 320", styles: { width: "320px", height: "640px" }, type: "mobile" },
} as const;

// Who is looking. The navigation and the account area are the only parts of the shell that depend on it.
export type Viewer = { role: "visitor" } | { role: "vendor" | "government" | "administrator"; email: string };

export const VISITOR: Viewer = { role: "visitor" };

export type Section = "home" | "dashboard" | "opportunities" | "organizations" | "users" | "content";

const SECTIONS: Record<Section, { label: string; href: string }> = {
  home: { label: "Home", href: "/" },
  dashboard: { label: "Dashboard", href: "/dashboard" },
  opportunities: { label: "Opportunities", href: "/opportunities" },
  organizations: { label: "Organizations", href: "/organizations" },
  users: { label: "Users", href: "/users" },
  content: { label: "Content", href: "/content" },
};

// Everyone is offered Home, Opportunities and Organizations; a signed-in person's first item is their Dashboard, and
// an administrator also manages Users and Content.
function sectionsFor(viewer: Viewer): Section[] {
  if (viewer.role === "visitor") return ["home", "opportunities", "organizations"];
  const signedIn: Section[] = ["dashboard", "opportunities", "organizations"];
  return viewer.role === "administrator" ? [...signedIn, "users", "content"] : signedIn;
}

// A signed-in person's own pages. My Organizations is offered to vendors only.
function accountLinksFor(viewer: Viewer): { label: string; href: string }[] {
  if (viewer.role === "visitor") return [];
  return [
    { label: "My Profile", href: "/users/me" },
    ...(viewer.role === "vendor" ? [{ label: "My Organizations", href: "/users/me?tab=organizations" }] : []),
    { label: "Sign Out", href: "/sign-out" },
  ];
}

// The current section is marked three ways: `aria-current="page"`, a bar and bold text. A bar and bold text are what
// make it visible without relying on colour.
//
// The skip link is the first thing on the page, drawn as the design system draws its own. The design system's Header
// places its skip links after the logo link, which would make "Skip to main content" the second Tab stop.
//
// Two corrections to the design system's own styles. A Link drawn as a button keeps the browser's underline for
// links, which the design system's button styles do not remove, so it is removed here to match its buttons. Its Footer
// gives the logo block and the link list minimum widths of 324 and 320 pixels, wider than a 320-pixel screen less the
// footer's padding, so on small screens both shrink to the screen instead of scrolling it sideways.
const css = `
a.bcds-react-aria-Button {
  text-decoration: none;
}
.site-skip {
  position: absolute;
  z-index: 1;
  top: var(--layout-padding-small);
  left: -100000px;
  padding: var(--layout-padding-xsmall) var(--layout-padding-medium);
  background-color: var(--surface-color-forms-default);
  color: var(--typography-color-link);
  font: var(--typography-regular-body);
  white-space: nowrap;
}
.site-skip:focus {
  left: var(--layout-padding-medium);
  outline: var(--layout-border-width-medium) solid var(--surface-color-border-active);
}
.site-menu-toggle {
  margin-inline-start: auto;
}
.site-account {
  display: flex;
  align-items: center;
  gap: var(--layout-margin-small);
}
.site-header .bcds-Subheader a[aria-current="page"] {
  font-weight: var(--typography-font-weights-bold);
  box-shadow: inset 0 calc(-1 * var(--layout-border-width-large)) 0 var(--surface-color-primary-default);
}
.site-menu {
  background-color: var(--surface-color-background-white);
  border-bottom: var(--layout-border-width-small) solid var(--surface-color-border-default);
  padding-block: var(--layout-padding-small) var(--layout-padding-medium);
}
.site-menu-name {
  margin: var(--layout-margin-none);
  padding: var(--layout-padding-small) var(--layout-padding-medium);
  font: var(--typography-bold-h4);
  color: var(--typography-color-primary);
}
.site-menu ul {
  list-style: none;
  margin: var(--layout-margin-none);
  padding: var(--layout-padding-none);
}
.site-menu li {
  display: flex;
  padding-block: var(--layout-padding-small);
  border-left: var(--layout-border-width-large) solid transparent;
}
.site-menu li:has(> a[aria-current="page"]) {
  border-left-color: var(--surface-color-primary-default);
}
.site-menu li > a[aria-current="page"] {
  font-weight: var(--typography-font-weights-bold);
}
.site-menu-account {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--layout-margin-small);
  margin-top: var(--layout-margin-small);
  padding: var(--layout-padding-medium) var(--layout-padding-medium) var(--layout-padding-small);
  border-top: var(--layout-border-width-small) solid var(--surface-color-border-default);
}
.site-menu-account > a {
  justify-content: center;
}
.site-menu-account > p {
  margin: var(--layout-margin-none);
}
.site-menu-account nav {
  margin-inline: calc(-1 * var(--layout-padding-medium));
}
@media (max-width: 575px) {
  .bcds-footer > .bcds-footer--container > .bcds-footer--container-content > .bcds-footer--logo-links > .bcds-footer--logo,
  .bcds-footer > .bcds-footer--container > .bcds-footer--container-content > .bcds-footer--logo-links.horizontal > .bcds-footer--links {
    min-width: 0;
    max-width: 100%;
  }
}
`;

// The design system ships no menu icon, so the three bars are drawn here in the text colour of the button they sit in.
function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M1 3h14v1.5H1zM1 7.25h14v1.5H1zM1 11.5h14V13H1z" fill="currentColor" />
    </svg>
  );
}

type HeaderProps = {
  viewer: Viewer;
  current?: Section;
  // A page whose contract names its own sign-in and sign-up actions (the home page) passes their test IDs here: on
  // every screen those actions are the header's.
  signInTestId?: string;
  signUpTestId?: string;
};

export function SiteHeader(props: HeaderProps) {
  return useNarrow() ? <PhoneHeader {...props} /> : <DesktopHeader {...props} />;
}

// Wide screens: the logo, the service's name and the account area on the first row; the navigation, separated by
// the Subheader's dividers, on the second. Sign In is tertiary and Sign Up secondary, so each page's own main action
// stays its only primary button.
function DesktopHeader({ viewer, current, signInTestId, signUpTestId }: HeaderProps) {
  return (
    <div className="site-header" data-testid="site-header">
      <Header title="Digital Marketplace">
        {viewer.role === "visitor" ? (
          <div className="site-account">
            <Link href="/sign-in" isButton buttonVariant="tertiary" size="medium" data-testid={signInTestId}>
              Sign In
            </Link>
            <Link href="/sign-up" isButton buttonVariant="secondary" size="medium" data-testid={signUpTestId}>
              Sign Up
            </Link>
          </div>
        ) : (
          // The design system's Menu: Enter, Space or a click opens it, the arrow keys move through it, and Escape
          // closes it and returns focus to the button.
          <MenuTrigger>
            <Button variant="tertiary" size="medium">
              {viewer.email}
              <SvgChevronDownIcon />
            </Button>
            <Menu placement="bottom end">
              {accountLinksFor(viewer).map((link) => (
                <MenuItem key={link.href} id={link.href} href={link.href}>
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </MenuTrigger>
        )}
      </Header>
      <Subheader ariaLabel="Main">
        {sectionsFor(viewer).map((section) => (
          <Link
            key={section}
            href={SECTIONS[section].href}
            isButton
            buttonVariant="tertiary"
            size="small"
            aria-current={section === current ? "page" : undefined}
          >
            {SECTIONS[section].label}
          </Link>
        ))}
      </Subheader>
    </div>
  );
}

// Narrow screens: the design system's phone header, the logo and a Menu button that says what it does. The open menu
// repeats the service's name, lists the navigation, then the account actions. Escape closes it and returns focus to
// the button.
function PhoneHeader({ viewer, current, signInTestId, signUpTestId }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleId = useId();
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      document.getElementById(toggleId)?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, toggleId]);

  return (
    <div className="site-header" data-testid="site-header">
      <Header>
        <div className="site-menu-toggle">
          <Button
            id={toggleId}
            variant="secondary"
            size="medium"
            aria-expanded={open}
            aria-controls={menuId}
            onPress={() => setOpen((wasOpen) => !wasOpen)}
          >
            {open ? <SvgCloseIcon /> : <MenuIcon />}
            {open ? "Close" : "Menu"}
          </Button>
        </div>
      </Header>
      <div id={menuId} className="site-menu" hidden={!open}>
        <p className="site-menu-name">Digital Marketplace</p>
        <nav aria-label="Main">
          <ul>
            {sectionsFor(viewer).map((section) => (
              <li key={section}>
                <Link
                  href={SECTIONS[section].href}
                  isButton
                  buttonVariant="tertiary"
                  size="small"
                  aria-current={section === current ? "page" : undefined}
                >
                  {SECTIONS[section].label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-menu-account">
          {viewer.role === "visitor" ? (
            <>
              <Link href="/sign-in" isButton buttonVariant="tertiary" size="medium" data-testid={signInTestId}>
                Sign In
              </Link>
              <Link href="/sign-up" isButton buttonVariant="secondary" size="medium" data-testid={signUpTestId}>
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Text elementType="p" size="small" color="secondary">
                Signed in as {viewer.email}
              </Text>
              <nav aria-label="Account">
                <ul>
                  {accountLinksFor(viewer).map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} isButton buttonVariant="tertiary" size="small">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// The original site's eight footer links. The five the service writes itself keep the test IDs the content domain
// gave them (R-7.19).
const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/content/about", testId: "footer-about-link" },
  { label: "Disclaimer", href: "/content/disclaimer", testId: "footer-disclaimer-link" },
  { label: "Privacy", href: "/content/privacy", testId: "footer-privacy-link" },
  { label: "Accessibility", href: "/content/accessibility", testId: "footer-accessibility-link" },
  { label: "Copyright", href: "/content/copyright", testId: "footer-copyright-link" },
  { label: "Contact Us", href: "mailto:digitalmarketplace@gov.bc.ca" },
  { label: "Source Code", href: "https://github.com/bcgov/digital_marketplace/" },
];

// The design system's Footer with its land acknowledgement, its logo, the original site's line "Owned and operated by
// the B.C. Government." where the design system puts contact details, and the eight links in its two-column list. The
// list has no heading, as on the original site, and there is no copyright line.
export function SiteFooter() {
  return (
    <div data-testid="site-footer">
      <Footer
        hideCopyright
        contact={
          <Text elementType="p" size="small" color="secondary">
            Owned and operated by the B.C. Government.
          </Text>
        }
        links={
          <FooterLinks
            title=""
            links={FOOTER_LINKS.map((link) => (
              <Link key={link.label} href={link.href} data-testid={link.testId}>
                {link.label}
              </Link>
            ))}
          />
        }
      />
    </div>
  );
}

type PageProps = HeaderProps & { children: ReactNode };

// A whole screen: the header, the page's own content as the main region, and the footer. Focus lands on the main
// region from the skip link; moving to a new page puts it on the page's H1 (design/DESIGN.md, "Document title and
// focus").
export function SitePage({ children, ...header }: PageProps) {
  return (
    <>
      <style>{css}</style>
      <a className="site-skip" href="#main">
        Skip to main content
      </a>
      <SiteHeader {...header} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
