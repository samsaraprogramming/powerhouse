# Mock data register

The revamp preview builds use placeholder data wherever real clinic facts were not available.
Everything below must be confirmed or replaced before the chosen design goes live on `main`.
Each item names the file and field to edit; pages, JSON-LD and `llms.txt` all read from these.

## Clinic facts — `src/data/clinic.ts`

| What | Mock value | Field |
| --- | --- | --- |
| Opening hours | Mon–Thu 7am–7pm, Fri 7am–5pm, Sat 8am–12pm, Sun closed | `hours` |
| Parking & arrival notes | Free parking in the Gold's Gym lot; check in at the gym front desk | `parking` |
| Insurance list | Aetna, Cigna, UnitedHealthcare, Humana, TRICARE, workers' comp (BCBS and Medicare are real) | `insurance.accepted` (`mock: true` rows) |
| HSA / FSA accepted | Yes | `insurance.hsaFsa` |
| Self-pay prices | Evaluation $120, follow-up $95, dry needling add-on $60, running analysis $150, 5-visit package $450 | `selfPay` |
| Direct access policy | No referral needed for up to 15 business days (Texas rule; confirm the clinic follows it and any payer limits) | `directAccess` |
| Discovery call length | 15 minutes | `booking.discoveryCallMinutes` |
| Evaluation / follow-up length | 60 / 45 minutes | `booking.evaluationMinutes`, `booking.followUpMinutes` |
| Response time | "within one business day" | `booking.responseTime` |
| Map coordinates | 27.5627, -99.4422 (approximate) | `clinic.geo` |
| Founding year | 2023 | `clinic.foundingYear` |

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

## Copy claims to confirm

| Claim | Where |
| --- | --- |
| "One-on-one with a licensed provider for the whole session" | `src/views/About.astro` (values), `src/i18n/ui.ts` (`home.servicesLead`) |
| Team speaks English and Spanish; visits available in either | `src/data/faq.ts`, `clinic.languages` |
| "Most new patients are scheduled within a few days" | `src/data/faq.ts` |
| "Many patients come once or twice a week for four to eight weeks" | `src/data/faq.ts` |
| Typical rehab timelines (knee replacement ~3 months, ACL 9+ months) | `src/data/conditions.ts` (post-surgical FAQ) |

## Images

Existing clinic photos are reused across pages. Needed before launch (stock or, better, real clinic photos):

- Clinic interior / treatment area (home hero, location page, Open Graph image)
- Building / Gold's Gym entrance and parking (location page)
- One image per condition: back, neck, shoulder, hip, knee, foot & ankle, post-surgical (currently 3 photos shared across 8 pages)
- Library article images (currently reuse service photos)
- Team group photo (about page)

## Existing issue noticed (not mock data)

`netlify/functions/contact.mjs` tells patients to call **(956) 724-9800** in the confirmation email,
but the site lists **956-307-6305**. Confirm which number is right.
