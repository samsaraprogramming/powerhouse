// schema.org JSON-LD builders. BaseLayout always emits the clinic and website nodes;
// pages add their own nodes, which point back to them by @id.
import { clinic, hours, areasServed, insurance } from '../data/clinic';
import { alumni, licenses } from '../data/team.es';
import type { Lang } from '../i18n/ui';
import { href } from '../i18n/ui';
import type { Condition } from '../data/conditions';
import type { Post } from '../data/posts';
import { getMember, plain, type Member, type Service } from './content';

const site = clinic.url;
export const abs = (path: string) => new URL(path, site).href;
export const CLINIC_ID = `${site}/#clinic`;
const WEBSITE_ID = `${site}/#website`;
const personId = (slug: string) => `${site}/${slug}-bio.html#person`;
const inLanguage = (lang: Lang) => (lang === 'es' ? 'es-US' : 'en-US');

export function clinicNode(rating: { rating: number; count: number }) {
  return {
    '@type': ['Physiotherapy', 'MedicalBusiness'],
    '@id': CLINIC_ID,
    name: clinic.name,
    alternateName: clinic.shortName,
    url: `${site}/`,
    logo: abs('/images/brand/powerhouse-logo.webp'),
    image: abs('/images/services/orthopedic-sports-therapy.webp'),
    telephone: clinic.phoneE164,
    faxNumber: clinic.fax,
    email: clinic.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: clinic.geo.lat, longitude: clinic.geo.lng },
    hasMap: clinic.mapUrl,
    openingHoursSpecification: hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: areasServed.map((name) => ({ '@type': 'Place', name })),
    availableLanguage: clinic.languages,
    medicalSpecialty: 'Physiotherapy',
    isAcceptingNewPatients: true,
    paymentAccepted: ['Cash', 'Credit Card', ...(insurance.hsaFsa ? ['HSA', 'FSA'] : [])].join(', '),
    founder: { '@id': personId(clinic.owner) },
    employee: ['sandra', 'leslie', 'uriel', 'georgina', 'alejandro'].map((s) => ({ '@id': personId(s) })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.rating,
      reviewCount: rating.count,
      bestRating: 5,
    },
    sameAs: [clinic.social.instagram, clinic.social.facebook],
  };
}

export function websiteNode(lang: Lang) {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${site}/`,
    name: clinic.shortName,
    publisher: { '@id': CLINIC_ID },
    inLanguage: ['en-US', 'es-US'],
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function pageNode(opts: {
  type?: string;
  path: string;
  name: string;
  description: string;
  lang: Lang;
  reviewer?: string;
  lastReviewed?: string;
  about?: object;
  extra?: Record<string, unknown>;
}) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${abs(opts.path)}#page`,
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: inLanguage(opts.lang),
    isPartOf: { '@id': WEBSITE_ID },
    ...(opts.reviewer ? { reviewedBy: { '@id': personId(opts.reviewer) } } : {}),
    ...(opts.lastReviewed ? { lastReviewed: opts.lastReviewed } : {}),
    ...(opts.about ? { about: opts.about } : {}),
    ...(opts.extra ?? {}),
  };
}

export function personNode(member: Member, lang: Lang) {
  const isDoctor = member.name.includes('DPT');
  const license = licenses[member.slug];
  return {
    '@type': 'Person',
    '@id': personId(member.slug),
    name: plain(member.name).replace(/,.*$/, ''),
    honorificSuffix: plain(member.name).split(', ').slice(1).join(', '),
    jobTitle: plain(member.home.role),
    image: abs(member.photo),
    url: abs(href(lang, `/${member.slug}-bio.html`)),
    worksFor: { '@id': CLINIC_ID },
    alumniOf: alumni[member.slug].map((name) => ({ '@type': 'CollegeOrUniversity', name })),
    knowsLanguage: ['English', 'Spanish'],
    ...(isDoctor ? { hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'Doctor of Physical Therapy' } } : {}),
    ...(license ? { identifier: { '@type': 'PropertyValue', propertyID: 'Texas PT license', value: license } } : {}),
  };
}

/** Reviewer Person nodes, so reviewedBy references resolve on the same page. */
export const reviewerNode = (slug: string, lang: Lang) => personNode(getMember(slug, lang), lang);

export function faqNode(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function conditionNode(c: Condition, lang: Lang) {
  return {
    '@type': 'MedicalCondition',
    name: c.name[lang],
    alternateName: c.alsoKnownAs,
    description: c.summary[lang],
    signOrSymptom: c.symptoms[lang].map((name) => ({ '@type': 'MedicalSignOrSymptom', name })),
    possibleTreatment: c.treatment[lang].map((name) => ({ '@type': 'MedicalTherapy', name })),
  };
}

export function therapyNode(s: Service, path: string) {
  return {
    '@type': 'MedicalTherapy',
    name: plain(s.heroTitle),
    description: plain(s.metaDescription),
    url: abs(path),
    provider: { '@id': CLINIC_ID },
  };
}

export function articleNode(p: Post, lang: Lang, path: string) {
  return {
    '@type': 'Article',
    headline: p.title[lang],
    description: p.description[lang],
    image: abs(p.image),
    datePublished: p.date,
    dateModified: p.date,
    inLanguage: inLanguage(lang),
    author: { '@id': personId(p.reviewer) },
    publisher: { '@id': CLINIC_ID },
    mainEntityOfPage: { '@id': `${abs(path)}#page` },
  };
}
