import { useEffect, useRef, useState, type ReactNode } from "react";
import { FileTrigger } from "react-aria-components";
import {
  Accordion,
  Button,
  ButtonGroup,
  Callout,
  Checkbox,
  Dialog,
  Form,
  Heading,
  InlineAlert,
  Link,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Text,
  TextArea,
  TextField,
} from "@bcgov/design-system-react-components";
import { PageContainer } from "./layout";
import { Label, MarketplaceStyles, OPEN_OPPORTUNITIES, PROGRAM_NAMES } from "./marketplace";
import { useNarrow } from "./site";

// The Code With Us proposal form in the chosen direction (design/DESIGN.md, "The chosen direction"): one long form in the
// original site's three parts, Proponent, Proposal and Attachments, beside a summary of the opportunity that stays in
// view and holds the actions. On a narrow screen the summary is a compact card near the top and the actions follow the
// form. Every word is the original site's. Submit opens the terms dialog and Save Draft shows the saved message, so the
// default story can be worked through.

export type ProposalState = "default" | "organization" | "invalid" | "refused" | "terms" | "draft-saved";

// The seed's published Code With Us opportunity.
const OPPORTUNITY = OPEN_OPPORTUNITIES.find((opportunity) => opportunity.title === "Seeded published Code With Us opportunity")!;

// The organizations the seed's vendor owns.
const ORGANIZATIONS = [{ id: "00000000-0000-4000-8000-000000000302", label: "Cedar Hollow Systems Inc." }];

// Test data: the vendor's existing proposal, which the refused story links to.
const EXISTING_PROPOSAL = "3f8a2c10-6d4b-4e19-a7c5-000000000111";

// Test data: an opportunity's evaluation criteria are written by its author.
const CRITERIA =
  "Proposals are scored on how completely they meet the acceptance criteria, the quality of the approach they describe, and the proponent's relevant experience.";

const css = `
.form-columns {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--layout-margin-xxxlarge);
  align-items: start;
}
.form-main, .form-intro, .form-section, .form-side, .form-summary, .form-actions {
  display: flex;
  flex-direction: column;
}
.form-main > *, .form-intro > *, .form-section > *, .form-side > *, .form-summary > * {
  margin: var(--layout-margin-none);
}
.form-main { gap: var(--layout-margin-xlarge); }
.form-intro { gap: var(--layout-margin-medium); }
.form-section { gap: var(--layout-margin-large); }
.form-heading { font: var(--typography-bold-h3); color: var(--typography-color-primary); }
.form-part { font: var(--typography-bold-h3); color: var(--typography-color-primary); }
.form-opportunity { font: var(--typography-regular-large-body); color: var(--typography-color-secondary); }
.form-text { font: var(--typography-regular-body); color: var(--typography-color-primary); }
.form-pair {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: var(--layout-margin-large);
  align-items: start;
}
.form-section .bcds-react-aria-TextField, .form-section .bcds-react-aria-Select, .form-section .bcds-react-aria-TextArea {
  width: 100%;
}
.form-proposal textarea { min-height: 300px; }
.form-comments textarea { min-height: 120px; }
.form-side { position: sticky; top: var(--layout-padding-medium); }
.form-summary {
  gap: var(--layout-margin-medium);
  padding: var(--layout-padding-large);
  border: var(--layout-border-width-small) solid var(--surface-color-border-default);
  border-radius: var(--layout-border-radius-medium);
}
.form-summary-compact { gap: var(--layout-margin-small); padding: var(--layout-padding-medium); }
.form-labels { display: flex; flex-wrap: wrap; gap: var(--layout-margin-small); }
.form-summary-title { font: var(--typography-bold-body); color: var(--typography-color-primary); }
.form-summary-closes { font: var(--typography-regular-small-body); color: var(--typography-color-primary); }
.form-summary-facts { font: var(--typography-regular-small-body); color: var(--typography-color-secondary); }
.form-actions { gap: var(--layout-margin-medium); }
.form-actions > button { width: 100%; justify-content: center; }
.form-errors { margin: var(--layout-margin-none); padding-inline-start: var(--layout-padding-large); }
.form-focus:focus {
  outline: var(--layout-border-width-medium) solid var(--surface-color-border-active);
  outline-offset: var(--layout-margin-hair);
}
.form-dialog {
  display: flex;
  flex-direction: column;
  gap: var(--layout-margin-medium);
  padding: var(--layout-padding-large);
}
.form-dialog > * { margin: var(--layout-margin-none); }
@media (max-width: 767.98px) {
  .form-opportunity { font: var(--typography-regular-body); }
  .form-text { font: var(--typography-regular-small-body); }
  .form-attach > button { width: 100%; justify-content: center; }
}
@media (min-width: 768px) {
  .form-columns { grid-template-columns: minmax(0, 1fr) 320px; }
  .form-heading { font: var(--typography-bold-h2); }
}
`;

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="form-section" aria-labelledby={id}>
      <Heading level={2} id={id} className="form-part">
        {title}
      </Heading>
      {children}
    </section>
  );
}

// The opportunity the proposal is for, with the draft label once a draft is saved. On a wide screen it holds the
// actions and stays in view; on a narrow one it is a compact card without them, under the opportunity's title.
function Summary({ saved, compact, children }: { saved: boolean; compact?: boolean; children?: ReactNode }) {
  return (
    <section
      className={`form-summary${compact ? " form-summary-compact" : ""}`}
      aria-label="The opportunity"
      data-testid="proposal-opportunity-summary"
    >
      <div className="form-labels">
        <Label>{PROGRAM_NAMES[OPPORTUNITY.program]}</Label>
        {saved ? <Label colour="blue">Draft</Label> : null}
      </div>
      {compact ? null : <p className="form-summary-title">{OPPORTUNITY.title}</p>}
      <p className="form-summary-closes">Closes {OPPORTUNITY.deadline}</p>
      <p className="form-summary-facts">
        {OPPORTUNITY.value} · {OPPORTUNITY.location}
        {OPPORTUNITY.remoteOk ? " · Remote OK" : ""}
      </p>
      {children}
    </section>
  );
}

// A message that receives keyboard focus when it appears, so it is read out and a keyboard user starts from it.
function Focused({ testId, when, children }: { testId?: string; when: boolean; children: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (when) box.current?.focus();
  }, [when]);
  return (
    <div ref={box} tabIndex={-1} className="form-focus" data-testid={testId}>
      {children}
    </div>
  );
}

// An alert's title when the alert has content of its own. The design system's InlineAlert drops its `title` when it
// is given children, so the title is written here in the alert's own markup, which also names the alert.
function AlertTitle({ children }: { children: ReactNode }) {
  return (
    <span className="title" id="alert-title">
      {children}
    </span>
  );
}

// The original site's messages for the fields the invalid story leaves wrong.
const ERRORS = {
  legalName: "Legal Name must be between 1 and 100 characters long.",
  email: "Please enter a valid email.",
  postal: "Postal/Zip Code must be between 1 and 100 characters long.",
  proposal: "Proposal Text must be between 1 and 10000 characters long.",
};

export function ProposalCwuCreatePage({ state }: { state: ProposalState }) {
  const narrow = useNarrow();
  const invalid = state === "invalid";
  const [proponent, setProponent] = useState(state === "organization" ? "organization" : "individual");
  const [saved, setSaved] = useState(state === "draft-saved");
  const [terms, setTerms] = useState(state === "terms");
  const [programTerms, setProgramTerms] = useState(false);
  const [appTerms, setAppTerms] = useState(false);

  // What the invalid story's vendor typed, kept when the form is returned with its problems.
  const typed = invalid
    ? { email: "vendor.one@example", phone: "250-555-0100", street: "100 Example Street", city: "Victoria", region: "British Columbia", country: "Canada" }
    : {};

  const actions = (
    <div className="form-actions">
      <Button variant="primary" size="medium" onPress={() => setTerms(true)} data-testid="proposal-submit">
        Submit
      </Button>
      <Button variant="secondary" size="medium" onPress={() => setSaved(true)} data-testid="proposal-save-draft">
        Save Draft
      </Button>
      <Button variant="tertiary" size="medium" data-testid="proposal-cancel">
        Cancel
      </Button>
    </div>
  );

  return (
    <PageContainer>
      <MarketplaceStyles />
      <style>{css}</style>
      <div className="form-columns">
        <div className="form-main">
          <div className="form-intro">
            <Heading level={1} className="form-heading">
              Create a Code With Us Proposal
            </Heading>
            <p className="form-opportunity">{OPPORTUNITY.title}</p>
            {saved ? (
              <Focused when={saved}>
                <InlineAlert
                  variant="success"
                  title="Draft Proposal Saved"
                  description="Your draft Code With Us proposal has been saved. You can return to this page to complete and submit your proposal prior to the opportunity's proposal deadline."
                  isCloseable
                  onClose={() => setSaved(false)}
                />
              </Focused>
            ) : null}
            {invalid ? (
              <Focused when={invalid}>
                <InlineAlert variant="danger">
                  <AlertTitle>Unable to Submit Proposal</AlertTitle>
                  <Text elementType="p">
                    Your Code With Us proposal could not be submitted. Please fix any errors in the form and try again.
                  </Text>
                  <ul className="form-errors">
                    <li data-testid="field-error">
                      <Link href="#proposal-legal-name">{ERRORS.legalName}</Link>
                    </li>
                    <li data-testid="field-error">
                      <Link href="#proposal-email">{ERRORS.email}</Link>
                    </li>
                    <li data-testid="field-error">
                      <Link href="#proposal-postal">{ERRORS.postal}</Link>
                    </li>
                    <li data-testid="field-error">
                      <Link href="#proposal-text">{ERRORS.proposal}</Link>
                    </li>
                  </ul>
                </InlineAlert>
              </Focused>
            ) : null}
            {state === "refused" ? (
              <Focused when testId="proposal-refused-message">
                <InlineAlert variant="danger">
                  <AlertTitle>Your proposal was not created</AlertTitle>
                  <Text elementType="p">You already have a proposal for this opportunity.</Text>
                  <Link href={`/opportunities/code-with-us/${OPPORTUNITY.id}/proposals/${EXISTING_PROPOSAL}/edit`}>
                    Open your proposal
                  </Link>
                </InlineAlert>
              </Focused>
            ) : null}
            {narrow ? <Summary saved={saved} compact /> : null}
            <p className="form-text">
              Use the form provided to create your proposal for this Code With Us opportunity. You can either save a draft
              of your proposal to complete the form at a later time, or you can complete the form now to submit your
              proposal immediately.
            </p>
            <p className="form-text">
              Need help? <Link href="/content/code-with-us-proposal-guide">Read the guide</Link> to learn how to create and
              manage a Code With Us proposal.
            </p>
          </div>

          <Form validationBehavior="aria" className="form-main" onSubmit={(event) => event.preventDefault()}>
            <Section id="form-proponent" title="1. Proponent">
              <RadioGroup
                id="proposal-proponent-type"
                label="Will you be submitting a proposal for this opportunity as an Individual or Organization?"
                orientation={narrow ? "vertical" : "horizontal"}
                isRequired
                value={proponent}
                onChange={setProponent}
              >
                <Radio value="individual" data-testid="proposal-proponent-individual">
                  Individual
                </Radio>
                <Radio value="organization" data-testid="proposal-proponent-organization">
                  Organization
                </Radio>
              </RadioGroup>
              {proponent === "organization" ? (
                <>
                  <Select
                    id="proposal-organization"
                    label="Organization"
                    placeholder="Organization"
                    description="Select the Organization that will complete the work as outlined in the opportunity's acceptance criteria."
                    items={ORGANIZATIONS}
                    isRequired
                    data-testid="proposal-organization-field"
                  />
                  <Text elementType="p" size="small" color="secondary">
                    If the organization you are looking for is not listed in this dropdown, please ensure that you have
                    created the organization in <Link href="/users/me?tab=organizations">your user profile</Link>. Also,
                    please make sure that you have saved this proposal beforehand to avoid losing any unsaved changes you
                    might have made.
                  </Text>
                </>
              ) : (
                <>
                  <p className="form-text">
                    Please provide the following details for the proponent that will complete the work as outlined by the
                    Acceptance Criteria of the opportunity.
                  </p>
                  <TextField
                    id="proposal-legal-name"
                    label="Legal Name"
                    description="Provide the first and last name of the individual that will complete the work as outlined in the opportunity’s acceptance criteria."
                    isRequired
                    isInvalid={invalid}
                    errorMessage={invalid ? ERRORS.legalName : undefined}
                    data-testid="proposal-legal-name-field"
                  />
                  <div className="form-pair">
                    <TextField
                      id="proposal-email"
                      label="Email Address"
                      type="email"
                      isRequired
                      defaultValue={typed.email}
                      isInvalid={invalid}
                      errorMessage={invalid ? ERRORS.email : undefined}
                      data-testid="proposal-email-field"
                    />
                    <TextField
                      id="proposal-phone"
                      label="Phone Number"
                      type="tel"
                      defaultValue={typed.phone}
                      data-testid="proposal-phone-field"
                    />
                  </div>
                  <TextField
                    id="proposal-street"
                    label="Street Address"
                    isRequired
                    defaultValue={typed.street}
                    data-testid="proposal-street-field"
                  />
                  <TextField id="proposal-street-2" label="Street Address" data-testid="proposal-street-2-field" />
                  <div className="form-pair">
                    <TextField id="proposal-city" label="City" isRequired defaultValue={typed.city} data-testid="proposal-city-field" />
                    <TextField
                      id="proposal-region"
                      label="Province / State"
                      isRequired
                      defaultValue={typed.region}
                      data-testid="proposal-region-field"
                    />
                  </div>
                  <div className="form-pair">
                    <TextField
                      id="proposal-postal"
                      label="Postal / ZIP Code"
                      isRequired
                      isInvalid={invalid}
                      errorMessage={invalid ? ERRORS.postal : undefined}
                      data-testid="proposal-postal-field"
                    />
                    <TextField
                      id="proposal-country"
                      label="Country"
                      isRequired
                      defaultValue={typed.country}
                      data-testid="proposal-country-field"
                    />
                  </div>
                </>
              )}
            </Section>

            <Section id="form-proposal" title="2. Proposal">
              <p className="form-text">
                Enter your proposal and any additional comments in the spaces provided below. Be sure to address the
                Proposal Evaluation Criteria.
              </p>
              <Callout variant="lightBlue">
                <Accordion label="Proposal Evaluation Criteria">
                  <Text elementType="p">{CRITERIA}</Text>
                </Accordion>
              </Callout>
              <div className="form-proposal">
                <TextArea
                  id="proposal-text"
                  label="Proposal"
                  description="Provide your complete proposal here. Be sure to address the Proposal Evaluation Criteria as outlined on the opportunity. You can format your proposal with Markdown."
                  isRequired
                  isInvalid={invalid}
                  errorMessage={invalid ? ERRORS.proposal : undefined}
                  data-testid="proposal-text-field"
                />
              </div>
              <div className="form-comments">
                <TextArea
                  id="proposal-comments"
                  label="Additional Comments"
                  description="Provide any additional information or comments that are relevant to your proposal submission. You can format your additional comments with Markdown."
                  data-testid="proposal-comments-field"
                />
              </div>
            </Section>

            <Section id="form-attachments" title="3. Attachments">
              <p className="form-text" id="attachment-size-limit" data-testid="attachment-size-limit">
                Upload any supporting material for your proposal here. Attachments must be smaller than 10MB.
              </p>
              <div className="form-attach">
                <FileTrigger>
                  <Button variant="secondary" size="medium" aria-describedby="attachment-size-limit" data-testid="attachment-add-button">
                    Add Attachment
                  </Button>
                </FileTrigger>
              </div>
            </Section>

            {narrow ? actions : null}
          </Form>
        </div>

        {narrow ? null : (
          <aside className="form-side" aria-label="Opportunity and actions">
            <Summary saved={saved}>{actions}</Summary>
          </aside>
        )}
      </div>

      <Modal isOpen={terms} onOpenChange={setTerms} isDismissable>
        <Dialog isCloseable data-testid="proposal-terms-dialog">
          <div className="form-dialog">
            <Heading level={2} slot="title" className="form-part">
              Review Terms and Conditions
            </Heading>
            <Text elementType="p">
              Please ensure you have reviewed the{" "}
              <Link href="/content/code-with-us-terms-and-conditions">Code With Us Terms &amp; Conditions</Link> and{" "}
              <Link href="/content/terms-and-conditions">Digital Marketplace Terms &amp; Conditions for E-Bidding</Link> prior
              to submitting your proposal for this Code With Us opportunity.
            </Text>
            <Checkbox isSelected={programTerms} onChange={setProgramTerms} data-testid="proposal-accept-program-terms">
              I acknowledge that I have read, fully understand and agree to the <em>Code With Us Terms &amp; Conditions</em>.
            </Checkbox>
            <Checkbox isSelected={appTerms} onChange={setAppTerms} data-testid="proposal-accept-app-terms">
              I acknowledge that I have read, fully understand and agree to the{" "}
              <em>Digital Marketplace Terms &amp; Conditions for E-Bidding</em>.
            </Checkbox>
            <ButtonGroup ariaLabel="Submit choices">
              <Button
                variant="primary"
                isDisabled={!(programTerms && appTerms)}
                onPress={() => setTerms(false)}
                data-testid="proposal-submit-confirm"
              >
                Submit Proposal
              </Button>
              <Button variant="secondary" onPress={() => setTerms(false)} data-testid="proposal-dialog-cancel">
                Cancel
              </Button>
            </ButtonGroup>
          </div>
        </Dialog>
      </Modal>
    </PageContainer>
  );
}
