# besser-website

Static marketing site for **besser lesen schreiben** — Mag. Angelika Ortner's Lese- und Schreibtraining practice in Linz, Austria.

Single-page site (`index.html`) built on ZURB Foundation with jQuery. No build step — files are served as-is.

## Local preview

```
npx serve .
```

Then open http://localhost:3000.

## Deploy

Pushes to `master` trigger a GitHub Actions workflow that uploads the site to world4you over FTP. See `.github/workflows/deploy.yml`.

## Structure

- `index.html` — all page content and sections
- `css/app.css` — site styles (edit this for visual changes)
- `css/foundation.css` — Foundation base
- `js/`, `fonts/`, `img/` — assets
- `screenshots/` — local test screenshots, not deployed

See `CLAUDE.md` for editing conventions.
