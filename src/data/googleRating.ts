// Rating and review count from the clinic's Google Business listing, fetched once per build
// with the Places API (New). If the key or place ID is missing, or the request fails, the build
// keeps going with the fallback numbers below; update them now and then so they stay close.

export const REVIEWS_URL =
  'https://www.google.com/search?hl=en-US&gl=us&q=Powerhouse+PT-+Physical+Therapy,+2446+San+Isidro+Pkwy,+Laredo,+TX+78045&ludocid=1487800702119469561#lrd=0x866121cdb1abf8e9:0x14a5badb1a6861f9,1,,,,';

const FALLBACK = { rating: 5.0, count: 118 };

export async function getGoogleRating(): Promise<{ rating: number; count: number }> {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) {
    console.warn('[google-rating] GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID not set; using fallback');
    return FALLBACK;
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: { 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': 'rating,userRatingCount' },
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${await response.text()}`);

    const place = await response.json();
    if (typeof place.rating !== 'number' || typeof place.userRatingCount !== 'number') {
      throw new Error(`unexpected response: ${JSON.stringify(place)}`);
    }
    return { rating: place.rating, count: place.userRatingCount };
  } catch (error) {
    console.warn(`[google-rating] request failed; using fallback. ${error}`);
    return FALLBACK;
  }
}
