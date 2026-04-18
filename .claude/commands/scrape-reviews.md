# Scrape Google Reviews for Powerhouse PT

Scrape the latest Google reviews for Powerhouse PT using Playwright MCP and save them to `all-reviews.json`.

## Steps

1. Navigate to the Google reviews page:
   `https://www.google.com/search?hl=en-US&gl=us&q=Powerhouse+PT-+Physical+Therapy,+2446+San+Isidro+Pkwy,+Laredo,+TX+78045&ludocid=1487800702119469561&lsig=AB86z5XVRRMvgvtACuoHZB6ps3vQ#lrd=0x866121cdb1abf8e9:0x14a5badb1a6861f9,1,,,,`

2. Take a screenshot to confirm the reviews panel is visible.

3. Scroll the reviews container (`.RVCQse`) repeatedly until the scroll height stops growing — this loads all reviews lazily:
   ```js
   async () => {
     const container = document.querySelector('.RVCQse');
     let last = 0;
     while (container.scrollHeight !== last) {
       last = container.scrollHeight;
       container.scrollTop = container.scrollHeight;
       await new Promise(r => setTimeout(r, 1000));
     }
   }
   ```

4. Expand all truncated reviews by clicking every `a.MtCSLb` ("More") link.

5. Extract all reviews using these selectors:
   - Review block: `div.bwb7ce`
   - Reviewer name: `.Vpc5Fe`
   - Date: `.y3Ibjb`
   - Rating: count `svg path[fill="#fabb05"]`
   - Review text: `.OA1nbd`

6. Save the result as `all-reviews.json` in the project root.

7. Report how many reviews were scraped and note any that mention providers by name (Dr. Sandra Gomez, Dr. Leslie Garcia, Gina, Alejandro) so the user can decide which ones to add to the carousel.

## Notes

- Reviews mentioning providers no longer at the clinic should be flagged but not automatically added to the carousel.
- If the review count on the page has grown since the last scrape, highlight the new reviews (those not already in the existing `all-reviews.json`).
- The carousel in `index.html` shows 20 curated reviews inside `#reviewsTrack`. To update a card, edit the relevant `div.review-card` block directly.
