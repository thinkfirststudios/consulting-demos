# 02 — Spanworth Tax Co. (fictional demo)

Static HTML/CSS/JS. No build step. Open `index.html`.

Layout follows consulting-ref-02 (structure only): thin top bar, header over a dark photographic hero, approach split,
light / accent / dark feature cards with notched tabs, who-we-are collage with two panels, services. Colours stay 02's own —
manila, moss and ink, with deep moss in the dark role and a muted sage in the accent role. No lime, navy, blue or gold.

## Fictional details
Name, address (418 Alder Street, Kestrel Falls), (555) phone numbers, the `spanworth.example` email, hours, founding year,
the founder story (first names only), service copy, fees and season dates are all invented for the demo.
Still slots, on purpose: `[PREPARER CREDENTIALS AND PTIN — CONFIRM]`, `[WHO IS AUTHORISED TO REPRESENT — CONFIRM]`,
`[SECURE DOCUMENT INTAKE — CONFIRM PLATFORM]`, `[RETENTION PERIOD — CONFIRM]`, review panels, and the privacy/terms drafts.

## Fees and Circular 230
Fee figures appear only on `fees.html`, directly under the line stating the period they are honoured for and the conditions.
Service cards elsewhere show bands, not amounts. The client confirms every fee and the period before launch.

## The season switch
Line 1 of `script.js`:
`var SEASON_STATE = 'in-season'; // 'in-season' | 'out-of-season' | 'closed-to-new'`
It changes which door is primary, the season strip's text, and whether gated jackets show their dashed off-season state.
It never adds urgency, never shows a countdown, never hides a price.

## Booking and quotes
`appointment.html` has a demo slot picker; at launch it hands off to the practice's booking tool.
`quote.html` returns a likely band and a person who confirms the fee in writing — never a calculated figure.
There is no file input anywhere on this site. Documents go to `[SECURE DOCUMENT INTAKE — CONFIRM PLATFORM]`.

## Imagery
Real Pexels photographs of people (see `assets/CREDITS.md`). The founder appears as a monogram, not a photo, so no stock
model is presented as a named person.

## Launch blockers
See `PROMPT.md` → PRE-LAUNCH. Credentials, no IRS marks, and the secure-intake decision block absolutely.
