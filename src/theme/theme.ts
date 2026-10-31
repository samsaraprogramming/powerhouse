// The design direction. revamp/base ships a neutral theme; the design branches
// (revamp/glacier, revamp/grove) replace this file, src/styles/theme.css and
// src/components/Intro.astro, and nothing else needs to change.

export interface LogoColors {
  /** The lightning-bolt "P". */
  p: string;
  /** The POWERHOUSE wordmark. */
  text: string;
}

export const theme = {
  id: 'base',
  name: 'Base (neutral)',
  /**
   * Font files to preload. Fonts are self-hosted in public/fonts (latin subset, variable weight)
   * and declared with @font-face in src/styles/theme.css.
   */
  fontPreload: ['/fonts/inter-normal.woff2'],
  /** Browser UI colour on mobile. */
  themeColor: '#0B1218',
  logo: {
    /**
     * 'original' shows the unmodified logo files from /images. 'tinted' recolours the same
     * artwork (never a redraw) with the colours below. Switch back to 'original' to revert.
     */
    mode: 'original' as 'original' | 'tinted',
    /** Logo on light backgrounds (header, light sections). */
    onLight: { p: '#1597B0', text: '#0B1218' } satisfies LogoColors,
    /** Logo on dark backgrounds (footer, dark sections). */
    onDark: { p: '#ACDEFF', text: '#FFFFFF' } satisfies LogoColors,
    /** Round badge used as the favicon and compact mark. */
    badge: { disc: '#000000', p: '#ACDEFF', rings: '#9C9C9C' },
  },
};
