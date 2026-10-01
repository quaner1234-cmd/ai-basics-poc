# Would AI Hurt People?

A single-page proof of concept: **what AI actually did** when it met a violent crime plan—using a multi-source verified case, not a slogan.

**Open it:** double-click `index.html` (or serve this folder and visit `/`).

## What you should see

1. **Hero** — “Would AI Hurt People?” / Accomplice or helper?
2. **Timeline** — sequence & the concrete plan (expand plan details)
3. **Sources** — public links to check the record

## Case (verified)

Darren Zhou / OpenAI → FBI → Palm Beach County (2026). Event facts cross-checked against Palm Beach Post (via Virginia Lawyers Weekly / USA TODAY Network), Hoodline, and MediaNama. Chinese magazine clip used in research had a **wrong year**; timeline follows court-facing English reporting.

## Run locally

No build step. Open `index.html` in a browser. Content lives in `js/data.js` — edit facts there, not in HTML. `index.html` also carries a static no-JS fallback (timeline summaries + sources) mirrored from `data.js`; if facts change, update both.

## Deploy (GitHub Pages)

1. Push this repo to GitHub (public).
2. Settings → Pages → Deploy from branch `main` / root.
3. Visit `https://<user>.github.io/<repo>/`.

## Project docs

Learning/planning artifacts for the Devpost hackathon live in `devpost/` (`scope.md`, `prd.md`, `spec.md`).

## Non-goals

Not a news aggregator. Not legal advice. Short attributed facts only—no full article reposts. No operational crime instructions.
