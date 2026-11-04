# 03 — Drawknife Consulting (fictional demo)

Static HTML/CSS/JS. No build step. Open `index.html`.

## v2 (2026-11-04)
The layout follows `consulting-ref-03.png`:
- a dark photographic hero with the person framed against an angled oxide shape, a small inset photo card, and the striped-circle and dot-grid ornaments
- a centred "Welcome to" heading with one underlined word
- the three-part about block (a tall photo with a fact tile, "Who we are", a checklist, a second photo)
- a 3 × 2 services list with a "View all services" cell
- the team section, case studies, review row, CTA band and a multi-column footer

The palette is 03's own (slate, quartz and oxide, with a muted violet-slate echo). There is no acid green, navy, blue or gold.

Swaps from the reference:
- **"42+ years"** became "2014 — Established in Portland, Oregon".
- **"Top guaranteed results" and "3K projects"** became process facts: a fixed-fee diagnostic, written findings, and the fact that the partners do the work.
- **Team headshots** became labelled empty frames.
- **Testimonials** became dashed placeholders, with no names and no stars.
- **The reference's video play button** became a static "Working session" caption.

The business details are fictional: a Wexley Street address, a (555) phone number and an `example`-domain email. Fees, legal terms, the CRM, the form endpoint and the secure document intake stay as bracketed placeholders.

## Display face
The brief names `Sora Condensed`, but Google Fonts does not serve that family (checked 2026-11-03: HTTP 400). The build loads **Barlow Condensed** 600/700 instead. The CSS font stack lists `'Sora Condensed'` first, so the named face wins wherever it is installed.

## Hero statements
The three statements rotate every 7 seconds and are switched by the dots. The rotation pauses on hover or focus and has a Pause/Play button. With reduced motion it does not rotate on its own.

## ?finding=[n]
On findings.html, each finding links to `scoping-call.html?finding=n`, and so do the four finding cards on the home page. The intake summary then reads "You arrived from: Finding 0n — <title>", using the titles in `window.DK_FINDINGS`, and a hidden field carries that line with the submission.

## Booking handoff (scoping-call.html)
The four-step intake posts to `[FORM ENDPOINT — CONFIRM]`, or hands off to `[SCHEDULER URL — CONFIRM]`. There is no file upload anywhere.

## Launch blockers
See `PROMPT.md` → PRE-LAUNCH. The fictional details must be replaced with the client's real ones, and every bracketed placeholder must be confirmed.
