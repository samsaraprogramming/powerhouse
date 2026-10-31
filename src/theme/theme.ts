// Direction D · Grove: a dark, calm palette (night, ivory, sage, ember) with an editorial serif.
// Only this file, src/styles/theme.css and src/components/Intro.astro differ from revamp/base.

export interface LogoColors {
  /** The lightning-bolt "P". */
  p: string;
  /** The POWERHOUSE wordmark. */
  text: string;
}

export const theme = {
  id: 'grove',
  name: 'D · Grove',
  /**
   * Font files to preload. Fonts are self-hosted in public/fonts (latin subset, variable weight)
   * and declared with @font-face in src/styles/theme.css. The italic loads only when used.
   */
  fontPreload: ['/fonts/newsreader-normal.woff2', '/fonts/manrope-normal.woff2'],
  /** Browser UI colour on mobile. */
  themeColor: '#0C0E0D',
  logo: {
    /**
     * 'original' shows the unmodified logo files from /images. 'tinted' recolours the same
     * artwork (never a redraw) with the colours below. Switch back to 'original' to revert.
     */
    mode: 'tinted' as 'original' | 'tinted',
    /** Logo on the page background, which is dark in this theme: ivory wordmark, green bolt (the original logo green #5CB947, slightly deeper). */
    onLight: { p: '#4CA239', text: '#F3F0E8' } satisfies LogoColors,
    /** Logo in the footer and other dark panels. */
    onDark: { p: '#4CA239', text: '#F3F0E8' } satisfies LogoColors,
    /** Round badge used as the favicon and compact mark. */
    badge: { disc: '#0C0E0D', p: '#4CA239', rings: '#E6814E' },
  },
};
