# Wording for review

The chosen direction carries the original site's wording. These are the only words it adds, each
because a requirement in [`brief.md`](brief.md) needs something the original site did not have.
They are listed here for the copy review that follows the design work.

| Where | Wording | Why it is there |
|---|---|---|
| Every page, first in the page | **Skip to main content** | Lets keyboard and screen reader users pass the header and its navigation. |
| Header on phones | **Menu**, and **Close** while the menu is open | The menu button says what it does rather than showing only an icon. |
| Header on phones, signed in | **Signed in as** before the email address | Names the account the menu's actions belong to. On wide screens the email address alone opens the account menu. |
| Opportunity list, beside the filters | **Reset** | Clears every filter and the search in one step. |
| Opportunity list, staff only | **Opportunity Status** as the label of the status filter | The original site's status filter showed only its placeholder, "All Opportunity Statuses". A visible label names the control for everyone, screen reader users included. |
| Opportunity list, no-results state | **Clear search** | Gives a way out of a search that matched nothing. The sentence above it is the original site's own: "There are no open opportunities that match your search criteria." |
| Home page and opportunity list, while loading | **Loading opportunities…** and **Loading figures…** | Says what is being waited for, and is announced to screen readers as a status. |
| Learn More links on the home page and the opportunity list | **about Code With Us**, **about Team With Us** or **about Sprint With Us** after "Learn More", for screen readers only | The three Learn More links would otherwise sound the same when read out of context. |
| Proposal form, required fields | **(required)** after the label | Identifies required fields in words rather than by a symbol alone. |
| Proposal form, proponent choice | The question "Will you be submitting a proposal for this opportunity as an Individual or Organization?" as the label of the choice | Lets screen readers announce the question with the two options. The wording is the original's. |

The proposal form's messages are the original application's own. The confirmation after saving a
draft, "Draft Proposal Saved", is shown on the page rather than as a notice that disappears. The
message after a submission fails, "Unable to Submit Proposal", heads the form with a link to each
problem, and each field shows the original site's message for it.

Two messages on these screens come from the first build's design rather than from the original site,
and are listed for the same review: the refusal when a vendor already holds a proposal for the
opportunity ("Your proposal was not created", "You already have a proposal for this opportunity.",
"Open your proposal"), and the page for an address that does not exist ("Page not found", "The page
you are looking for does not exist.", "Back to home").

The opportunities, organizations and email addresses shown in the drafts and the stories are test
data, not real ones.
