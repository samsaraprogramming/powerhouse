// Direction C · Glacier: the current logo blues on an icy white, with a dark ink.
// Only this file, src/styles/theme.css and src/components/Intro.astro differ from revamp/base.

export interface LogoColors {
  /** The lightning-bolt "P". */
  p: string;
  /** The POWERHOUSE wordmark. */
  text: string;
}

export const theme = {
  id: 'glacier',
  name: 'C · Glacier',
  /** Google Fonts stylesheet with every family and weight the theme uses. */
  fontsHref: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
  /** Browser UI colour on mobile. */
  themeColor: '#F4FAFC',
  logo: {
    /**
     * 'original' shows the unmodified logo files from /images. 'tinted' recolours the same
     * artwork (never a redraw) with the colours below. Switch back to 'original' to revert.
     */
    mode: 'tinted' as 'original' | 'tinted',
    /** On light backgrounds the wordmark goes ink and the bolt takes a deeper logo blue. */
    onLight: { p: '#1597B0', text: '#0B1218' } satisfies LogoColors,
    /** On dark backgrounds the logo keeps its current colours. */
    onDark: { p: '#ACDEFF', text: '#FFFFFF' } satisfies LogoColors,
    /** Round badge used as the favicon and compact mark. */
    badge: { disc: '#0B1218', p: '#ACDEFF', rings: '#4EC9DE' },
  },
};
