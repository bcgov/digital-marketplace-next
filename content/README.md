# Content of the original Digital Marketplace

What every screen of the original application shows: its copy, links, images and accessible
outline, with a picture of the whole page. It is the content a redesign carries over, and the
starting point for the design directions in [`../design-directions/`](../design-directions/brief.md).

- [`index.md`](index.md) lists every screen captured, where it lives and who it was seen as.
- `pages/<screen>.md` holds one screen's copy, links, images and outline.
- `screens/<screen>.jpg` is a picture of the whole page.
- `inventory.json` is the same list for a program to read.

## How it was made

`capture.mjs` takes every screen named in `spec/contract/surface.yaml`, fills each address from the
records in `tests/seed/manifest.yaml`, signs in as a person who can see it through the original
application's test-only session routes, and records what the page shows. It adds the fixed content
pages (About, Privacy, the program guides and terms, and the rest) and the three programs' Learn More
pages. Entries of the contract that are interfaces rather than screens are left out.

To run it again, start the original application (`sdlc oracle up`) and, from the repository root:

```sh
node content/capture.mjs --base http://localhost:3100,http://localhost:3101,http://localhost:3102,http://localhost:3103
```

A screen already captured is kept; `--fresh` captures everything again.

## What it does not show

- Every person and organization is seed data, and every address is on `example.test`.
- Each screen is captured once, as the first person able to see it, in the state the seed leaves
  it in. A form with several steps shows its first step.
- The Sprint With Us and Team With Us proposal forms are not captured: the seed has no open
  opportunity in either program to start a proposal against. The Code With Us form is.
- The screens for editing an evaluation or a consensus already begun are not captured, because the
  seed starts none; the screens for starting one are.
