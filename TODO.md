# To-do

Open items for powerhousesportspt.com after the November 2026 launch. Tick items off as they are done.
Placeholder content the clinic still has to confirm is tracked separately in [MOCK_DATA.md](MOCK_DATA.md).

## Now

- [ ] Test the sign-up form on the live site (English and Spanish) with your own email: the clinic gets the lead, you get the confirmation.
- [ ] Move the project out of iCloud-synced `~/Documents` (for example to `~/Developer/powerhouse`), or turn off
      Desktop & Documents sync. iCloud keeps creating `name 2.ext` copies that have broken git and slipped into commits.
- [ ] Turn off GitHub Pages: GitHub → samsaraprogramming/powerhouse → Settings → Pages → Source: None (or Unpublish).
      It still publishes the old site at samsaraprogramming.github.io/powerhouse and fails every push with Jekyll errors.

## Email delivery (keep form emails out of spam)

Already done in code: SPF, DKIM and DMARC records; plain-text versions of both emails; replies to the
confirmation go to info@; a busy Resend is retried once and failed confirmations are logged.

- [ ] Google Admin console → Apps → Google Workspace → Gmail → Spam, Phishing and Malware → Email allowlist
      (or an approved-senders list): add `contact@powerhousesportspt.com`, so lead notifications never land in spam.
- [ ] In Gmail, mark any form email found in Spam as "Not spam" and add `contact@powerhousesportspt.com` to contacts.
- [ ] Check the score at mail-tester.com: submit the form with the address it gives you; aim for 9/10 or better.
- [ ] Optional: add the domain to Google Postmaster Tools (postmaster.google.com) to watch Gmail's rating.
- [ ] After a few healthy weeks, tighten DMARC in Netlify DNS: change `_dmarc` from `p=none` to `p=quarantine`.
- [ ] If a confirmation goes missing, check Resend → Emails (delivered or not) and Netlify → Logs → Functions → contact.

## This week

- [ ] Google Search Console: verify the domain (TXT record in Netlify DNS) and submit
      `https://powerhousesportspt.com/sitemap-index.xml`.
- [ ] Google Business Profile: website link, phone 956-307-6305 (calls and texts), add BFR, add "Se habla español", check hours.
- [ ] Netlify: create a build hook and save it as the `BUILD_HOOK_URL` environment variable, so the Google review count refreshes daily.
- [ ] HIPAA business associate agreements: accept Google's for Workspace (Admin console → Account → Account settings →
      Legal and compliance) and ask Resend about theirs.
- [ ] Cancel HostGator around November 8, 2026, after downloading a backup of the old files. Nothing uses it any more.

## From the clinic

- [ ] Fill in the placeholders listed in [MOCK_DATA.md](MOCK_DATA.md): hours, parking, call and visit lengths,
      response time, founding year, map coordinates.
- [ ] Clinical review: Dr. Gomez and Dr. Garcia approve the condition pages, library articles and the BFR page shown
      under their names, update the review dates, and confirm the 30-day direct access rule applies.
- [ ] Confirm the copy claims in MOCK_DATA.md (one-on-one sessions, scheduling times, BFR details).
- [ ] Spanish read-through by a native speaker.
- [ ] Photos: home banner / social share image, clinic interior, gym entrance and parking, team photo, BFR session.

## Optional improvements

- [ ] Visitor analytics with Plausible, counting form sign-ups and phone/text taps (needs an account).
- [ ] Form privacy hint under the goal box ("don't include medications, test results or insurance numbers") and a length limit.
- [ ] Branded social share image until a real photo arrives.
- [ ] Restyle the remaining checkmark lists: condition pages, library takeaways, access page.
- [ ] Match the sitemap's language codes (`en-US`/`es-US`) to the pages' (`en`/`es`).
- [ ] Decide whether Spanish page addresses should use Spanish words (`/es/condiciones/...`); redirects needed if changed after launch.
- [ ] Delete the unused images in `public/images/legacy/`.
