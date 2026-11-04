# To-do

Open items for powerhousesportspt.com after the November 2026 launch. Tick items off as they are done.
Placeholder content the clinic still has to confirm is tracked separately in [MOCK_DATA.md](MOCK_DATA.md).

## Now

- [x] Test the sign-up form on the live site (English and Spanish) with your own email: the clinic gets the lead,
      you get the confirmation, and Resend → Emails shows each one delivered once.
- [x] Move the project out of iCloud-synced `~/Documents` (now at `~/Developer/powerhouse`).
- [x] Turn off GitHub Pages.

## Email delivery (keep form emails out of spam)

Already done in code: SPF, DKIM and DMARC records; plain-text versions of both emails; replies to the
confirmation go to info@; a busy or unreachable Resend is retried once with an idempotency key (no duplicates);
failed confirmations are logged.

- [x] Google Admin console → Apps → Google Workspace → Gmail → Spam, Phishing and Malware → Spam → Configure:
      "Bypass spam filters… approved senders lists", with an address list holding `contact@powerhousesportspt.com` and
      "Require sender authentication" checked. (The "Email allowlist" setting there takes IP addresses, not this.)
      Needs the owner or another super admin.
- [ ] In Gmail, mark any form email found in Spam as "Not spam" and add `contact@powerhousesportspt.com` to contacts.
- [x] Check the score at mail-tester.com: submit the form with the address it gives you; aim for 9/10 or better. (10/10, November 2026)
- [x] Resend → Domains → powerhousesportspt.com: confirm open tracking and click tracking are off (both look like marketing to Gmail).
- [ ] Optional: add the domain to Google Postmaster Tools (postmaster.google.com) to watch Gmail's rating.
- [ ] After a few healthy weeks, tighten DMARC in Netlify DNS: change `_dmarc` from `p=none` to `p=quarantine`.
- [ ] If a confirmation goes missing, check Resend → Emails (delivered or not) and Netlify → Logs → Functions → contact.

## Form spam protection

Done in code: a "Did you mean …?" hint for misspelled email providers; a hidden honeypot field and a 3-second minimum fill time (bots get a quiet "success", no email is
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
- [x] Google Business Profile: hours, phone, website, services, Spanish under service options, attributes, new description.
- [ ] Google Business Profile photos: logo, cover photo, team, clinic interior, Gold's Gym entrance (add as they arrive).
- [x] Copy the map pin coordinates from Google Maps into `src/data/clinic.ts` (`geo`).
- [x] Squarespace: turn on domain auto-renew; leave the nameservers pointing to Netlify.
- [ ] Cancel HostGator around November 8, 2026, after downloading a backup of the old files. Nothing uses it any more.

## From the clinic

- [x] Map coordinates (the last placeholder in [MOCK_DATA.md](MOCK_DATA.md)).
- [ ] Clinical review: each doctor skims the pages under her name and updates the review dates.
      Sandra: back, shoulder, hip, sports injuries, desk-job article.
      Leslie: neck, knee, foot & ankle, post-surgical, ankle sprain article, running article.
- [ ] Spanish read-through by a native speaker.
- [ ] Photos: home banner / social share image, clinic interior, gym entrance and parking, team photo, BFR session.

## Later

- [ ] HIPAA business associate agreement with Google, accepted by the owner: Admin console → Account → Account settings →
      Legal and compliance → HIPAA Business Associate Amendment → Review and Accept. Covers Gmail, Drive, Calendar,
      Docs and Meet; not the Business Profile, Maps, Search Console or Google Cloud.
- [ ] HIPAA and form email: Resend doesn't sign a BAA, but the lead notification carries what the patient wrote about
      their condition. Options, best first: send both form emails through Google Workspace (covered by Google's BAA once
      accepted); or switch to a provider that signs BAAs (for example Amazon SES or Paubox); or keep Resend and leave the
      goal out of the email, so the clinic reads it somewhere covered. Check the choice with whoever handles the
      clinic's HIPAA compliance.

## Optional improvements

- [ ] Visitor analytics with Plausible, counting form sign-ups and phone/text taps (needs an account).
- [x] Form privacy hint under the goal box ("don't include medications, test results or insurance numbers").
- [ ] Branded social share image until a real photo arrives.
- [x] Restyle the remaining checkmark lists: condition pages and library takeaways (access page stays a checklist).
- [x] Match the sitemap's language codes (`en-US`/`es-US`) to the pages' (`en`/`es`).
- [ ] Decide whether Spanish page addresses should use Spanish words (`/es/condiciones/...`); redirects needed if changed after launch.
- [x] Delete the unused images in `public/images/legacy/` (and their old-address redirects).
