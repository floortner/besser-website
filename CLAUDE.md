# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing website for "besser lesen schreiben" (Mag. Angelika Ortner, LRS/reading-and-writing training in Linz, Austria). The site is a single `index.html` plus CSS/JS assets. There is no build step — files are served as-is.

## Structure

- `index.html` — the entire site (single page; section anchors like about, testimonials, e-learning, impressum).
- `css/foundation.css` + `css/app.css` — ZURB Foundation base plus site-specific overrides. `app.css` is the file to edit for visual changes.
- `js/app.js`, `js/vendor/` — jQuery + Foundation JS. Minimal custom JS.
- `fonts/`, `img/` — assets referenced directly from `index.html`/CSS.
- `screenshots/` — store all screenshots captured during testing (Playwright or any other tool) here. Not deployed.
- `temp.html` — scratch file, not deployed.

## Local development

There is no npm script; `package.json` only lists legacy gulp devDependencies. Node-related warnings can be ignored (noted in README).

To preview locally, serve the directory with any static server, e.g.:

```
npx serve .
```

Then open `http://localhost:3000`.

## Deploy

Deployment is **FTP to world4you** (`ftp31.world4you.com`, dest `/`). The legacy `gulpfile.js` still contains a `deploy` task (`gulp deploy -u <user> -p <pass>`) that uploads `css/**`, `fonts/**`, `img/**`, `js/**`, `index.html`. The README says gulp was removed — in practice the file is still there but the project is treated as pure static; confirm with the user before running gulp tasks. Uploading the five globs above via any FTP client achieves the same result.

## Editing conventions

- Content is bilingual-leaning German; preserve existing German copy and umlauts when editing.
- Testimonials are hand-authored blocks inside `index.html`; recent commits show they are added/rotated frequently and dates are balanced across years on purpose — match the surrounding markup when adding one.
- Google Analytics (`G-D487S9Q0PR`) is hard-coded at the top of `index.html`; leave it in place unless explicitly asked.
