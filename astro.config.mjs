import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://powerhousesportspt.com',
  // Emit leslie-bio.html, service-cupping.html, etc. so the old URLs keep working.
  // Inline the (small) stylesheet so phones don't wait on a second request before drawing the page.
  build: { format: 'file', inlineStylesheets: 'always' },
  // The markup relies on whitespace between inline elements (icon links, contact lines).
  compressHTML: false,
  integrations: [
    sitemap({
      // Pair each English page with its /es/ twin so the sitemap carries hreflang links.
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-US' } },
      filter: (page) => !page.endsWith('/404') && !page.endsWith('/404.html'),
      // List the same .html URLs the pages declare as canonical.
      serialize(item) {
        const fix = (href) => {
          const url = new URL(href);
          const path = url.pathname.replace(/\/$/, '');
          if (path === '' || path === '/es') url.pathname = path === '' ? '/' : '/es/';
          else if (!path.endsWith('.html')) url.pathname = `${path}.html`;
          return url.href;
        };
        return { ...item, url: fix(item.url), links: item.links?.map((link) => ({ ...link, url: fix(link.url) })) };
      },
    }),
  ],
});
