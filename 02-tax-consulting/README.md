# 02 — Spanworth Tax Co. (fictional demo)

Static HTML/CSS/JS. No build step. Open `index.html`.

## The season switch
Line 1 of `script.js`:
`var SEASON_STATE = 'in-season'; // 'in-season' | 'out-of-season' | 'closed-to-new'`
Changed once a year by `[SEASONAL CONTENT OWNER — NAME A PERSON]`. It changes which door is primary, the season band's text (placeholders only), and whether gated jackets show their dashed off-season state. It never changes a date, never adds urgency, never hides a price.

## Booking handoff (appointment.html)
1. **Static + link out (default):** form posts to `[FORM ENDPOINT — CONFIRM]`, confirmation links to `[SCHEDULER URL — CONFIRM]`.
2. **Embed:** the client's scheduler embed replaces the slot grid.
There is no file input anywhere on this site, by design (B7). Documents go to `[SECURE DOCUMENT INTAKE — CONFIRM PLATFORM]`.

## Quote route (quote.html)
Returns `[LIKELY COMPLEXITY BAND — CONFIRM]` and a person — never a figure.

## Launch blockers
See `PROMPT.md` → PRE-LAUNCH (L1–L17). L1 credentials, L2 no IRS marks, L3 secure intake block absolutely.
