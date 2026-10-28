// Localised views of the data files, so pages never branch on language themselves.
import type { Lang } from '../i18n/ui';
import { services } from '../data/services';
import { servicesEs } from '../data/services.es';
import { team } from '../data/team';
import { teamEs, teamOrder } from '../data/team.es';

export type Service = (typeof services)[number];
export type Member = (typeof team)[number];

export function getService(slug: string, lang: Lang): Service {
  const base = services.find((s) => s.slug === slug)!;
  if (lang === 'en') return base;
  const es = servicesEs[slug];
  return {
    ...base,
    ...es,
    details: base.details.map((d, i) => ({ ...d, ...es.details[i] })),
    steps: base.steps.map((s, i) => ({ ...s, ...es.steps[i] })),
  };
}

export const getServices = (lang: Lang) => services.map((s) => getService(s.slug, lang));

export function getMember(slug: string, lang: Lang): Member {
  const base = team.find((m) => m.slug === slug)!;
  if (lang === 'en') return base;
  const es = teamEs[slug];
  return {
    ...base,
    metaTitle: es.metaTitle,
    metaDescription: es.metaDescription,
    title: es.title,
    paragraphs: es.paragraphs,
    home: { ...base.home, role: es.role, expertise: es.expertise, points: es.points, teaser: es.teaser },
  };
}

export const getTeam = (lang: Lang) => teamOrder.map((slug) => getMember(slug, lang));

/** Strip the HTML the data files allow in headings, for meta tags and JSON-LD. */
export const plain = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&mdash;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&oacute;/g, 'ó')
    .replace(/&[a-z]+;/g, '');
