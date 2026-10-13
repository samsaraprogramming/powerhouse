import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://powerhousesportspt.com',
  // Emit leslie-bio.html, service-cupping.html, etc. so the old URLs keep working.
  build: { format: 'file' },
  // The markup relies on whitespace between inline elements (icon links, contact lines).
  compressHTML: false,
  integrations: [
    sitemap({
      // List the same .html URLs the pages declare as canonical.
      serialize(item) {
        const url = new URL(item.url);
        if (url.pathname !== '/' && !url.pathname.endsWith('.html')) {
          url.pathname = `${url.pathname.replace(/\/$/, '')}.html`;
        }
        return { ...item, url: url.href };
      },
    }),
  ],
});
