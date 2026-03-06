# Copilot / AI Agent Instructions — Front-end Exercises

Purpose: help an AI agent make small, safe, and useful edits to this static front-end exercises repo.

**Big picture**
- This is a collection of client-side JavaScript exercises served as static HTML. Key folders:
  - `exercises/` — HTML and JS exercise files.
  - `exercises/data/` — JSON fixtures consumed by `fetch()`.
  - `img/` — image assets.

**How to run (important)**
- Serve from the project root over HTTP (fetch requires a server). Examples:
  - `python -m http.server 8000` then open `http://localhost:8000/exercises/list-products.html`
  - Use the VS Code Live Server extension to avoid `file://` fetch issues.

**Observed patterns & conventions**
- Scripts are plain ES6, loaded with `<script defer src="...">` in each HTML file (e.g. `exercises/list-products.html`).
- Data requests use relative fetch paths like `fetch("data/products.json")` (relative to the HTML file location).
- DOM updates use `getElementById`/`innerHTML` and template literals — keep new code consistent with this style.
- There is no build, bundler, or test harness — changes should remain simple and browser-compatible.

**Concrete examples (inspect these to reproduce behavior)**
- `exercises/list-products.html` — loads `list-products.js` via `defer` and contains `#products-container`.
- `exercises/list-products.js` — `fetch("data/products.json")`, `console.log(data)`, and a `displayProducts(productsArray)` function that builds HTML.
- `exercises/list-users.js` — similar fetch pattern for `data/users.json`.
- `exercises/data/products.json` and `exercises/data/users.json` — JSON arrays used as fixtures.

**Known, discoverable issues to watch for**
- `exercises/list-products.js` currently logs fetched `data` but does not call `displayProducts(data)` in the success branch, so UI is not updated. The `catch` block calls `displayProducts(data)` where `data` is undefined. This is an observable bug; safe fixes:
  - On successful fetch: call `displayProducts(data)`.
  - In `catch`: do not reference undefined variables; instead show a friendly error message in the UI (e.g. set `#products-container.innerText`).
- Many scripts assume files are served from the same directory; when moving files, update fetch paths accordingly.

**Editing guidelines for AI agents**
- Make minimal, local changes. Avoid introducing build systems or module transforms without explicit approval.
- Preserve fixture shapes (JSON arrays of objects). If you change JSON keys, update all consumer scripts.
- When adding UI behavior, keep to the existing DOM-manipulation pattern (no frameworks).
- Prefer clear, testable commits with a short message explaining the change and the file(s) touched.

If any of these assumptions are incorrect or you want stricter rules (linting, tests, commit format), tell me which areas to expand.
