// Runs after every successful deploy (Netlify calls functions with this name automatically).
// Tells IndexNow search engines (Bing, which feeds ChatGPT and Copilot, plus Yandex and others) that the
// site's pages changed, so they re-crawl within minutes instead of on their own schedule.
// The key is public by design: it matches public/67508f033e15fbdd05522e56230c9013.txt, which proves we own the site.
const SITE = 'https://powerhousesportspt.com';
const KEY = '67508f033e15fbdd05522e56230c9013';

export const handler = async (event) => {
  let context = 'production';
  try {
    context = JSON.parse(event.body || '{}').payload?.context || context;
  } catch {}
  if (context !== 'production') {
    console.log(`Skipping IndexNow for a ${context} deploy`);
    return { statusCode: 200 };
  }

  try {
    const index = await (await fetch(`${SITE}/sitemap-index.xml`)).text();
    const sitemaps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const urlList = [];
    for (const sitemap of sitemaps) {
      const xml = await (await fetch(sitemap)).text();
      urlList.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
    }

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
    });
    console.log(`IndexNow: sent ${urlList.length} URLs, response ${response.status}`);
  } catch (error) {
    console.error(`IndexNow failed: ${error}`);
  }
  return { statusCode: 200 };
};
