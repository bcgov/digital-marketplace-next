// Captures what every screen of the original Digital Marketplace shows, as the content a
// redesign has to carry. For each screen in spec/contract/surface.yaml it fills the route's
// parameters from the seed (tests/seed/manifest.yaml), opens it as a person who can see it,
// and saves a picture of the whole page, its accessible outline, its copy, its links and its
// images. The fixed content pages and the program pages the home page links to are added.
//
// Run from the repository root, with the original application running (sdlc oracle up). Each
// address given to --base is one running copy, and the screens are shared out between them. A
// screen already captured is kept unless --fresh is given.
//   node content/capture.mjs [--base http://localhost:3100,http://localhost:3101] [--fresh]
import { createRequire } from "node:module";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(join(root, "tests", "package.json"));
const { chromium } = require("@playwright/test");
const YAML = require("yaml");

const argBase = process.argv.indexOf("--base");
const BASES = (argBase > 0 ? process.argv[argBase + 1] : "http://localhost:3100").split(",").map((b) => b.trim().replace(/\/+$/, "")).filter(Boolean);
const FRESH = process.argv.includes("--fresh");
const OUT = join(root, "content");

const surface = YAML.parse(readFileSync(join(root, "spec/contract/surface.yaml"), "utf8"));
const seed = YAML.parse(readFileSync(join(root, "tests/seed/manifest.yaml"), "utf8"));

const PROGRAMS = { "code-with-us": "cwu", "sprint-with-us": "swu", "team-with-us": "twu" };
const record = (ref) => (typeof ref === "string" ? ref.split(".").reduce((o, k) => o?.[k], seed) : undefined);

// Who signs in, by account. The original application mints a session for a fixed account
// through a route that exists only outside production.
function viewerOf(userRef) {
  const u = record(userRef);
  if (!u) return "administrator";
  if (u.idp_id === "test-admin") return "administrator";
  if (u.idp_id === "test-gov") return "staff";
  const n = /^test-vendor-(\d+)$/.exec(u.idp_id ?? "");
  if (n) return `vendor-${n[1]}`;
  if (u.account_type === "ADMIN") return "administrator";
  if (u.account_type === "GOV") return "staff";
  return "vendor-1";
}
const SESSION = { administrator: "/auth/createsessionadmin", staff: "/auth/createsessiongov" };
const sessionRoute = (viewer) => SESSION[viewer] ?? (viewer.startsWith("vendor-") ? `/auth/createsessionvendor/${viewer.slice(7)}` : null);

const opportunitiesOf = (program) => Object.entries(seed.opportunities)
  .filter(([, o]) => o.program === program).map(([k, o]) => ({ key: k, ...o }));
function openOpportunity(program) {
  const all = opportunitiesOf(program);
  return all.find((o) => o.status === "PUBLISHED") ?? all[0];
}
function proposalFor(program) {
  const all = Object.entries(seed.proposals).map(([k, p]) => ({ key: k, ...p }))
    .filter((p) => record(p.opportunity)?.program === program);
  return all.find((p) => p.seeded_status === "SUBMITTED") ?? all[0];
}
const panelOf = (program) => Object.values(seed.evaluation_panels).find((p) => record(p.opportunity)?.program === program);

// The address and the people to try, for one screen. Each entry is one capture.
function plan(page) {
  const route = page.route;
  const program = Object.keys(PROGRAMS).find((p) => route.includes(`/${p}/`) || route.endsWith(`/${p}`));
  const variants = [];
  const fill = (params) => route.replace(/:([A-Za-z]+)/g, (m, name) => params[name] ?? m);
  const add = (suffix, params, viewers, why) => variants.push({ id: suffix ? `${page.id}--${suffix}` : page.id, url: fill(params), viewers, ...(why ? { why } : {}) });

  if (route.includes(":slug")) {
    const pages = Object.entries(seed.content).filter(([k]) => k.startsWith("servicePage") || k === "ordinaryPage");
    if (route.endsWith("/edit")) add("", { slug: seed.content.servicePageAbout.slug }, ["administrator"]);
    else for (const [, c] of pages) add(c.slug, { slug: c.slug }, ["signed-out", "administrator"]);
    return variants;
  }
  if (route.includes(":program")) {
    for (const p of Object.keys(PROGRAMS)) {
      const o = openOpportunity(p);
      add(PROGRAMS[p], { program: p, opportunityId: o.id }, [viewerOf(o.created_by), "administrator"]);
    }
    return variants;
  }
  if (/\/evaluations\/|\/consensus\//.test(route) && program) {
    const panel = panelOf(program);
    const proposal = Object.values(seed.proposals).find((p) => p.opportunity === panel.opportunity);
    const consensus = route.includes("/consensus/");
    const member = panel.members.find((m) => (consensus ? m.chair : m.evaluator && !m.chair)) ?? panel.members[0];
    const viewer = viewerOf(member.user);
    add("", { opportunityId: record(panel.opportunity).id, proposalId: proposal.id, userId: record(member.user).id }, [viewer, "administrator"]);
    return variants;
  }
  if (route.includes(":proposalId") && program) {
    const p = proposalFor(program);
    const o = record(p.opportunity);
    const exporting = route.includes("/export");
    const owner = viewerOf(p.vendor ?? p.created_by);
    add("", { opportunityId: o.id, proposalId: p.id }, exporting ? ["administrator", owner] : [owner, "administrator"]);
    return variants;
  }
  if (route.includes(":opportunityId") && program) {
    const tab = /[?&]tab=/.test(route);
    if (tab && route.includes("tab=evaluationPanel") || /tab=(instructions|evaluation|consensus)/.test(route)) {
      const panel = panelOf(program);
      const o = record(panel.opportunity);
      add("", { opportunityId: o.id }, ["administrator", "staff"]);
      return variants;
    }
    const o = openOpportunity(program);
    // A proposal can only be started against an opportunity that is still open; with none in
    // the seed, the original application shows the vendor's existing proposal instead.
    if (route.includes("/proposals/create") && o.status !== "PUBLISHED") {
      add("", { opportunityId: o.id }, [], `no open ${program} opportunity in the seed to start a proposal against`);
      return variants;
    }
    const viewers = route.endsWith(`/${o.id}`) || /\/:opportunityId$/.test(route)
      ? ["signed-out", "vendor-1", viewerOf(o.created_by)]
      : route.includes("/proposals/create") ? ["vendor-2", "vendor-1"] : [viewerOf(o.created_by), "administrator"];
    add("", { opportunityId: o.id }, viewers);
    return variants;
  }
  if (route.includes(":orgId")) {
    const org = seed.organizations.qualified;
    add("", { orgId: org.id }, [viewerOf(org.owner), "administrator"]);
    return variants;
  }
  if (route.includes(":userId")) {
    add("", { userId: seed.users.vendorOne.id }, ["administrator"]);
    return variants;
  }
  if (route.includes(":noticeId")) {
    add("", { noticeId: "deactivatedOwnAccount" }, ["signed-out"]);
    return variants;
  }
  if (route.startsWith("/users/me") || route === "/proposals") {
    add("", {}, ["vendor-1"]);
    return variants;
  }
  if (route === "/dashboard") {
    const who = page.id.startsWith("evaluation") ? "staff" : page.id.startsWith("proposal") ? "vendor-1" : "administrator";
    add("", {}, [who]);
    return variants;
  }
  if (/^\/(users|content|admin)/.test(route) || route.endsWith("/create") || route.includes("/edit")) {
    add("", {}, ["administrator", "staff", "vendor-1"]);
    return variants;
  }
  add("", {}, ["signed-out", "vendor-1", "administrator"]);
  return variants;
}

const screens = surface.pages.filter((p) => !/^\/(api|hold)\b/.test(p.route));
const notScreens = surface.pages.filter((p) => /^\/(api|hold)\b/.test(p.route));
const captures = screens.flatMap(plan);
for (const program of Object.keys(PROGRAMS)) {
  captures.push({ id: `learn-more--${PROGRAMS[program]}`, url: `/learn-more/${program}`, viewers: ["signed-out"] });
}
// The same address as the same person is one capture, kept under its first name.
const seen = new Map();
for (const c of captures) {
  const key = `${c.url} as ${c.viewers[0]}`;
  if (seen.has(key)) seen.get(key).alsoFor.push(c.id);
  else seen.set(key, { ...c, alsoFor: [] });
}
const unique = [...seen.values()];

async function settle(page) {
  let last = -1;
  for (let i = 0, still = 0; i < 40 && still < 3; i++) {
    await page.waitForTimeout(250);
    const n = (await page.locator("body").innerText().catch(() => "")).length;
    still = n === last && n > 0 ? still + 1 : 0;
    last = n;
  }
}

function refused(requested, url, text) {
  if (new URL(url).pathname === "/sign-in" && !requested.startsWith("/sign-in")) return "asked to sign in";
  if (/The page you are looking for doesn't exist/.test(text)) return "not found";
  if (/not authorized|do not have permission/i.test(text)) return "not allowed";
  return null;
}

// What an earlier run recorded about a screen it captured, read back from its page.
function entryFromPage(c) {
  const file = join(OUT, "pages", `${c.id}.md`);
  if (!existsSync(file)) return null;
  const text = readFileSync(file, "utf8");
  const heading = /^# (.*)$/m.exec(text)?.[1] ?? "";
  const viewer = /^- Seen as: (.*)$/m.exec(text)?.[1] ?? "";
  return { viewer, heading: heading === c.id ? "" : heading };
}

function pageText(c, entry, done) {
  return [
    `# ${done.heading || c.id}`,
    "",
    `- Screen: \`${c.id}\`${c.alsoFor.length ? ` (also ${c.alsoFor.map((a) => `\`${a}\``).join(", ")})` : ""}, ${entry.domain}`,
    `- Address: \`${c.url}\`${done.finalUrl !== c.url ? `, which landed on \`${done.finalUrl}\`` : ""}`,
    `- Seen as: ${done.viewer}`,
    `- Picture: [../screens/${c.id}.jpg](../screens/${c.id}.jpg)`,
    "",
    "## Copy",
    "",
    done.copy,
    "",
    "## Links",
    "",
    ...done.links.filter((l) => l.text || l.href).map((l) => `- ${l.text || "(no text)"} → \`${l.href}\``),
    "",
    "## Images",
    "",
    ...(done.images.length ? done.images.map((i) => `- ${i.alt || "(no alt text)"} — \`${i.src}\``) : ["None."]),
    "",
    "## Outline",
    "",
    "```yaml",
    done.outline,
    "```",
    "",
  ].join("\n");
}

if (FRESH) {
  rmSync(join(OUT, "pages"), { recursive: true, force: true });
  rmSync(join(OUT, "screens"), { recursive: true, force: true });
}
mkdirSync(join(OUT, "pages"), { recursive: true });
mkdirSync(join(OUT, "screens"), { recursive: true });

const browser = await chromium.launch();

async function capture(base, contexts, c) {
  const tried = [];
  for (const viewer of c.viewers) {
    if (!contexts.has(viewer)) {
      const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
      const route = sessionRoute(viewer);
      if (route) {
        const p = await ctx.newPage();
        await p.goto(base + route, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
        await settle(p);
        await p.close();
      }
      contexts.set(viewer, ctx);
    }
    const page = await contexts.get(viewer).newPage();
    try {
      await page.goto(base + c.url, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
      await settle(page);
      const text = await page.locator("body").innerText().catch(() => "");
      const why = refused(c.url, page.url(), text);
      if (why) { tried.push(`${viewer}: ${why}`); continue; }
      const scope = (await page.locator("main").count()) ? page.locator("main").first() : page.locator("body");
      const outline = await page.locator("body").ariaSnapshot().catch(() => "");
      const copy = (await scope.innerText().catch(() => "")).replace(/\n{3,}/g, "\n\n").trim();
      const links = await page.$$eval("a[href]", (as) => as.map((a) => ({ text: (a.innerText || a.getAttribute("aria-label") || "").trim().replace(/\s+/g, " "), href: a.getAttribute("href") })));
      const images = await page.$$eval("img", (is) => is.map((i) => ({ alt: i.getAttribute("alt") ?? "", src: i.getAttribute("src") ?? "" })));
      const heading = (await page.locator("h1").first().innerText({ timeout: 2000 }).catch(() => "")).trim();
      await page.screenshot({ path: join(OUT, "screens", `${c.id}.jpg`), fullPage: true, type: "jpeg", quality: 60 });
      return { done: { viewer, finalUrl: page.url().replace(base, ""), heading, outline, copy, links, images }, tried };
    } catch (e) {
      tried.push(`${viewer}: ${String(e.message ?? e).split("\n")[0]}`);
    } finally {
      await page.close().catch(() => {});
    }
  }
  return { done: null, tried };
}

const results = new Map();
async function worker(base, list) {
  const contexts = new Map();
  for (const c of list) {
    const page = surface.pages.find((p) => p.id === c.id.split("--")[0]);
    const domain = page?.domain ?? "content";
    const kept = FRESH ? null : entryFromPage(c);
    if (kept) {
      results.set(c.id, { id: c.id, alsoFor: c.alsoFor, domain, url: c.url, status: "captured", ...kept });
      continue;
    }
    const { done, tried } = c.why ? { done: null, tried: [c.why] } : await capture(base, contexts, c);
    const entry = { id: c.id, alsoFor: c.alsoFor, domain, url: c.url, status: done ? "captured" : "not captured", ...(done ? { viewer: done.viewer, heading: done.heading } : { tried }) };
    results.set(c.id, entry);
    if (done) writeFileSync(join(OUT, "pages", `${c.id}.md`), pageText(c, entry, done));
    console.log(`${done ? "ok  " : "MISS"} ${c.id} ${c.url}${done ? ` as ${done.viewer}` : ` (${tried.join("; ")})`}`);
  }
  for (const ctx of contexts.values()) await ctx.close().catch(() => {});
}
await Promise.all(BASES.map((base, i) => worker(base, unique.filter((_, k) => k % BASES.length === i))));
await browser.close();
const ordered = unique.map((c) => results.get(c.id));

writeFileSync(join(OUT, "inventory.json"), `${JSON.stringify({ base: "the original application", screens: ordered, notScreens: notScreens.map((p) => ({ id: p.id, route: p.route })) }, null, 2)}\n`);
const captured = ordered.filter((r) => r.status === "captured");
writeFileSync(join(OUT, "index.md"), [
  "# Content of the original Digital Marketplace",
  "",
  `Every screen of the original application, captured as a person who can see it: ${captured.length} of ${ordered.length} captures.`,
  "Each links to its page of copy, links, images and outline, and to a picture of the whole page.",
  `${notScreens.length} entries of the contract are interfaces rather than screens and are not captured.`,
  "",
  "| Screen | Area | Address | Seen as |",
  "| --- | --- | --- | --- |",
  ...ordered.map((r) => `| ${r.status === "captured" ? `[${r.id}](pages/${r.id}.md)` : `${r.id} (not captured: ${r.tried.join("; ")})`} | ${r.domain} | \`${r.url}\` | ${r.viewer ?? "—"} |`),
  "",
].join("\n"));
console.log(`\n${captured.length} of ${ordered.length} captured`);
