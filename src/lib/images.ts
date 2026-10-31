import imageSizes from '../data/image-sizes.json';

// Smaller copies made by scripts/resize-images.py, so phones don't download desktop-sized photos.
const manifest = imageSizes as Record<string, [string, number][]>;

/** src and srcset attributes for a photo; falls back to the plain src when it has no copies. */
export function responsive(src: string) {
  const list = manifest[src];
  if (!list) return { src };
  return { src, srcset: list.map(([path, width]) => `${path} ${width}w`).join(', ') };
}

/** `sizes` values for the layouts photos appear in. */
export const sizes = {
  hero: '(min-width: 961px) 560px, calc(100vw - 32px)',
  card: '(min-width: 961px) 370px, (min-width: 640px) 50vw, calc(100vw - 32px)',
  team: '(min-width: 961px) 280px, (min-width: 640px) 50vw, calc(100vw - 32px)',
  avatar: '48px',
};
