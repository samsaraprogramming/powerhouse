# To-do

Open items for powerhousesportspt.com after the November 2026 launch. Tick items off as they are done.
Placeholder content the clinic still has to confirm is tracked separately in [MOCK_DATA.md](MOCK_DATA.md).

## Now

- [ ] Test the sign-up form on the live site (English and Spanish) with your own email: the clinic gets the lead,
      you get the confirmation, and Resend → Emails shows each one delivered once.
- [x] Move the project out of iCloud-synced `~/Documents` (now at `~/Developer/powerhouse`).
- [x] Turn off GitHub Pages.

## Email delivery (keep form emails out of spam)

Already done in code: SPF, DKIM and DMARC records; plain-text versions of both emails; replies to the
confirmation go to info@; a busy or unreachable Resend is retried once with an idempotency key (no duplicates);
failed confirmations are logged.

- [ ] Google Admin console → Apps → Google Workspace → Gmail → Spam, Phishing and Malware → Email allowlist:
      add `contact@powerhousesportspt.com`, so lead notifications never land in spam. (Needs the owner or a clinic admin account.)
- [ ] In Gmail, mark any form email found in Spam as "Not spam" and add `contact@powerhousesportspt.com` to contacts.
- [ ] Check the score at mail-tester.com: submit the form with the address it gives you; aim for 9/10 or better.
- [ ] Optional: add the domain to Google Postmaster Tools (postmaster.google.com) to watch Gmail's rating.
- [ ] After a few healthy weeks, tighten DMARC in Netlify DNS: change `_dmarc` from `p=none` to `p=quarantine`.
- [ ] If a confirmation goes missing, check Resend → Emails (delivered or not) and Netlify → Logs → Functions → contact.

## Form spam protection

Done in code: a hidden honeypot field and a 3-second minimum fill time (bots get a quiet "success", no email is
sent); names are letters only; the goal rejects links and HTML and is capped at 1,000 characters; insurance must
be a dropdown value. Dropped bot submissions are logged in Netlify → Logs → Functions → contact.

- [ ] Now and then, check those logs for "Dropped a likely bot submission" to make sure real people aren't caught.
- [ ] If spam still gets through, add Cloudflare Turnstile (free, usually invisible).

## This week

- [x] Google Search Console: verify the domain, submit `sitemap-index.xml`, request indexing for the main pages.
- [ ] Search Console, about a week after setup: Sitemaps shows Success; Indexing → Pages has no "Not found (404)"
      from old-site addresses (send any to be redirected).
- [x] Live Google rating: Places API (New) key and Place ID in Netlify (`GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`).
- [x] Netlify build hook saved as `BUILD_HOOK_URL`, so the review count refreshes daily.
- [ ] Google Business Profile: hours (Mon–Thu 7–7, Fri 8–12, weekends closed), website link, appointment link
      (`/sign-up.html`), phone 956-307-6305 (calls and texts), add BFR, add "Se habla español", photos.
- [ ] Copy the map pin coordinates from Google Maps into `src/data/clinic.ts` (`geo`).
- [ ] Squarespace: turn on domain auto-renew; leave the nameservers pointing to Netlify.
- [ ] HIPAA business associate agreements: accept Google's for Workspace (Admin console → Account → Account settings →
      Legal and compliance) and ask Resend about theirs.
- [ ] Cancel HostGator around November 8, 2026, after downloading a backup of the old files. Nothing uses it any more.

## From the clinic

- [ ] Map coordinates (the last placeholder in [MOCK_DATA.md](MOCK_DATA.md)).
- [ ] Clinical review: each doctor skims the pages under her name and updates the review dates.
      Sandra: back, shoulder, hip, sports injuries, desk-job article.
      Leslie: neck, knee, foot & ankle, post-surgical, ankle sprain article, running article.
- [ ] Spanish read-through by a native speaker.
- [ ] Photos: home banner / social share image, clinic interior, gym entrance and parking, team photo, BFR session.

## Optional improvements

- [ ] Visitor analytics with Plausible, counting form sign-ups and phone/text taps (needs an account).
- [ ] Form privacy hint under the goal box ("don't include medications, test results or insurance numbers").
- [ ] Branded social share image until a real photo arrives.
- [ ] Restyle the remaining checkmark lists: condition pages, library takeaways, access page.
- [ ] Match the sitemap's language codes (`en-US`/`es-US`) to the pages' (`en`/`es`).
- [ ] Decide whether Spanish page addresses should use Spanish words (`/es/condiciones/...`); redirects needed if changed after launch.
- [ ] Delete the unused images in `public/images/legacy/`.
