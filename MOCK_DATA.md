# Mock data register

The revamp preview builds use placeholder data wherever real clinic facts were not available.
Everything below must be confirmed or replaced before the chosen design goes live on `main`.
Each item names the file and field to edit; pages, JSON-LD and `llms.txt` all read from these.

## Clinic facts — `src/data/clinic.ts`

Confirmed by the clinic in November 2026: hours (Mon–Thu 7am–7pm, Fri 8am–12pm, Sat & Sun closed), parking notes,
areas served, insurance wording, HSA/FSA accepted, 15-minute discovery call, response within one business day,
founding year 2023, the 30-day direct access policy (therapists qualify), and the map coordinates (taken from
the Google Maps pin). Visit lengths and visit frequency are intentionally not published.

Nothing left to confirm in this file.

## Team — `src/data/team.es.ts`

| What | Mock value | Field |
| --- | --- | --- |
| Texas license numbers | Not shown (opt-in) | `licenses` |

## Clinical review — `src/data/conditions.ts`, `src/data/posts.ts`

The condition pages and library articles show "Clinically reviewed by Dr. Sandra Gomez / Dr. Leslie Garcia"
and emit `reviewedBy` / `lastReviewed` in JSON-LD. **No clinician has reviewed this copy yet.**
Before launch each reviewer must read and approve their pages, and the dates must be updated.

| Page | Reviewer | Field |
| --- | --- | --- |
| Back pain & sciatica, Shoulder pain, Hip pain, Sports injuries | Dr. Sandra Gomez | `reviewer`, `lastReviewed` (mock: 2026-10-15) |
| Neck pain & headaches, Knee pain, Foot & ankle pain, Post-surgical rehab | Dr. Leslie Garcia | `reviewer`, `lastReviewed` (mock: 2026-10-15) |
| Article: ankle sprain recovery, running with knee pain | Dr. Leslie Garcia | `posts[].reviewer`, `posts[].date` (mock) |
| Article: back pain after sitting | Dr. Sandra Gomez | `posts[].reviewer`, `posts[].date` (mock) |

Source links on condition pages point to MedlinePlus topic pages; check each still resolves.

**Added November 2026, also unreviewed:** four more questions per condition page (`faqs`, now six each, English
and Spanish). The reviewer for each page should read these with the rest of the page.

## Direct access page — `src/views/DirectAccess.astro`

The legal facts (30 consecutive calendar days, HB 4099 signed June 20, 2025, effective Sept. 1, 2025, the previous
10/15 business-day limits, and the eligibility conditions) come from the enrolled bill and the House bill analysis.
Before launch the clinic should confirm: that it requests referrals from the patient's doctor after day 30, the
Medicare plan-of-care sign-off wording, and the workers' compensation answer.

## Copy claims

Confirmed by the clinic in November 2026: one-on-one with a licensed provider for the whole session, most new
patients scheduled within a few days, BFR cuff pressure set per patient after a safety screen, team speaks
English and Spanish. Removed at the clinic's request: how often patients come. Rehab timelines are given only as general AAOS ranges,
credited to AAOS and linked in the page's sources, not as a clinic promise.

## Images

Images live in `public/images/` by use: `brand/`, `team/`, `services/`, `conditions/` and
`library/`. New photos are licensed Adobe Stock,
resized to 1600px and saved as WebP. All 8 condition pages, the orthopedic service and the library
articles now have their own photos.

Still needed before launch:

- Home hero and Open Graph share image (still the original orthopedic photo; a real clinic photo is best)
- Clinic interior / treatment area (location page)
- Building / Gold's Gym entrance and parking (location page, real photo)
- Team group photo (about page, real photo)
- Blood flow restriction training photo (currently reuses the original orthopedic photo)
