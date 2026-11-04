# 03 — Drawknife Consulting (fictional demo)

Static HTML/CSS/JS. No build step. Open `index.html`.

## Display face
The brief names `Sora Condensed`. Google Fonts does not serve that family (checked 2026-11-03: HTTP 400), so the build loads **Barlow Condensed** 600/700 — Pool D, unused by 01/02, set in sentence case. The CSS stack lists `'Sora Condensed'` first so the named face wins wherever it is installed.

## ?finding=[n]
Every finding's "Book a scoping call →" links to `scoping-call.html?finding=n`. The intake summary renders "You arrived from: Finding 0n — [FINDING TITLE]" and a hidden field carries it with the submission.

## Booking handoff (scoping-call.html)
1. **Static + link out (default):** the four-step intake posts to `[FORM ENDPOINT — CONFIRM]`; the confirmation links to `[SCHEDULER URL — CONFIRM]`.
2. **Embed:** the scheduler embed follows step 4.
No file upload anywhere (B11). Retention of the free-text problem description must be decided before launch (L14).

## Launch blockers
See `PROMPT.md` → PRE-LAUNCH (L1–L19). L1 scoping flag and L2 confidentiality name-by-name block absolutely.
