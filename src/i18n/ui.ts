// UI strings and URL helpers for the English (default, no prefix) and Spanish (/es/) sites.

export const languages = { en: 'English', es: 'Español' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** A string per language; content files use this shape for anything a visitor reads. */
export type L10n<T = string> = Record<Lang, T>;

/**
 * The public path of a page. With build.format 'file' the home pages build to index.html and
 * es.html; Netlify serves them at / and /es/ (see netlify.toml), so those are the real URLs.
 */
export function publicPath(pathname: string): string {
  if (pathname === '/index.html' || pathname === '') return '/';
  if (pathname === '/es' || pathname === '/es.html' || pathname === '/es/index.html') return '/es/';
  return pathname;
}

export function langFromUrl(url: URL): Lang {
  return publicPath(url.pathname).startsWith('/es/') ? 'es' : 'en';
}

/** Prefix an English path for the given language: href('es', '/faq.html') -> '/es/faq.html'. */
export function href(lang: Lang, path: string): string {
  if (lang === 'en') return path;
  return path === '/' ? '/es/' : `/es${path}`;
}

/** The same page in the other language, for the switcher and hreflang. */
export function swapLang(url: URL, to: Lang): string {
  return href(to, publicPath(url.pathname).replace(/^\/es\//, '/'));
}

export const ui = {
  en: {
    'skip': 'Skip to main content',
    'nav.care': 'Care',
    'nav.conditions': 'Conditions',
    'nav.access': 'Access & cost',
    'nav.about': 'About',
    'nav.library': 'Library',
    'nav.location': 'Location',
    'nav.faq': 'FAQ',
    'nav.book': 'Book now',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.home': 'Home',
    'cta.book': 'Book an evaluation',
    'cta.call': 'Free discovery call',
    'cta.callUs': 'Call us',
    'cta.learnMore': 'Learn more',
    'cta.allConditions': 'All conditions',
    'cta.allServices': 'All services',
    'cta.readMore': 'Read more',
    'cta.readBio': 'Read full bio',
    'cta.directions': 'Get directions',
    'rating.reviews': 'reviews on Google',
    'rating.readAll': 'Read all reviews on Google',
    'home.servicesTitle': 'How we help',
    'home.servicesLead': 'Five ways we get you moving again, all one-on-one with a licensed physical therapist.',
    'home.conditionsTitle': 'Where it hurts',
    'home.conditionsLead': 'Start with the area that is bothering you. Each page explains common causes, what treatment looks like, and when to get help.',
    'home.processTitle': 'What happens when you reach out',
    'home.reviewsTitle': 'What patients say',
    'home.teamTitle': 'Meet the team',
    'home.accessTitle': 'Getting started is simpler than you think',
    'home.faqTitle': 'Common questions',
    'home.visitTitle': 'Visit us',
    'reviewed.by': 'Clinically reviewed by',
    'reviewed.on': 'Last reviewed',
    'sources': 'Sources',
    'breadcrumb.home': 'Home',
    'conditions.title': 'Conditions we treat',
    'conditions.symptoms': 'Common symptoms',
    'conditions.causes': 'What usually causes it',
    'conditions.treatment': 'How physical therapy helps',
    'conditions.whenToSeek': 'When to get it checked',
    'conditions.related': 'Related services',
    'conditions.faq': 'Questions about',
    'service.conditions': 'Conditions we treat',
    'service.process': 'What to expect',
    'team.title': 'Our team',
    'library.title': 'Library',
    'library.lead': 'Plain-language guides from our physical therapists.',
    'library.minutes': 'min read',
    'library.enOnly': '',
    'access.title': 'Access & cost',
    'faq.title': 'Frequently asked questions',
    'location.title': 'Location & hours',
    'location.hours': 'Hours',
    'location.parking': 'Parking & arrival',
    'location.areas': 'Areas we serve',
    'location.closed': 'Closed',
    'contact.phone': 'Phone',
    'contact.fax': 'Fax',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': 'Information on this site is educational and is not a substitute for an evaluation by a licensed provider.',
    'footer.explore': 'Explore',
    'footer.visit': 'Visit',
    'lang.switch': 'Español',
    'lang.label': 'Ver en español',
  },
  es: {
    'skip': 'Ir al contenido principal',
    'nav.care': 'Servicios',
    'nav.conditions': 'Condiciones',
    'nav.access': 'Acceso y costos',
    'nav.about': 'Nosotros',
    'nav.library': 'Biblioteca',
    'nav.location': 'Ubicación',
    'nav.faq': 'Preguntas',
    'nav.book': 'Agenda',
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar menú',
    'nav.home': 'Inicio',
    'cta.book': 'Agenda una evaluación',
    'cta.call': 'Llamada gratuita',
    'cta.callUs': 'Llámanos',
    'cta.learnMore': 'Ver más',
    'cta.allConditions': 'Todas las condiciones',
    'cta.allServices': 'Todos los servicios',
    'cta.readMore': 'Leer más',
    'cta.readBio': 'Ver biografía',
    'cta.directions': 'Cómo llegar',
    'rating.reviews': 'reseñas en Google',
    'rating.readAll': 'Ver todas las reseñas en Google',
    'home.servicesTitle': 'Cómo te ayudamos',
    'home.servicesLead': 'Cinco formas de ayudarte a moverte otra vez, siempre uno a uno con un fisioterapeuta con licencia.',
    'home.conditionsTitle': 'Dónde te duele',
    'home.conditionsLead': 'Empieza por la zona que te molesta. Cada página explica causas comunes, cómo es el tratamiento y cuándo buscar ayuda.',
    'home.processTitle': 'Qué pasa cuando nos contactas',
    'home.reviewsTitle': 'Lo que dicen nuestros pacientes',
    'home.teamTitle': 'Conoce al equipo',
    'home.accessTitle': 'Empezar es más fácil de lo que crees',
    'home.faqTitle': 'Preguntas comunes',
    'home.visitTitle': 'Visítanos',
    'reviewed.by': 'Revisión clínica por',
    'reviewed.on': 'Última revisión',
    'sources': 'Fuentes',
    'breadcrumb.home': 'Inicio',
    'conditions.title': 'Condiciones que tratamos',
    'conditions.symptoms': 'Síntomas comunes',
    'conditions.causes': 'Causas más frecuentes',
    'conditions.treatment': 'Cómo ayuda la terapia física',
    'conditions.whenToSeek': 'Cuándo revisarlo',
    'conditions.related': 'Servicios relacionados',
    'conditions.faq': 'Preguntas sobre',
    'service.conditions': 'Condiciones que tratamos',
    'service.process': 'Qué esperar',
    'team.title': 'Nuestro equipo',
    'library.title': 'Biblioteca',
    'library.lead': 'Guías en lenguaje sencillo de nuestros fisioterapeutas.',
    'library.minutes': 'min de lectura',
    'library.enOnly': 'Artículo en inglés',
    'access.title': 'Acceso y costos',
    'faq.title': 'Preguntas frecuentes',
    'location.title': 'Ubicación y horario',
    'location.hours': 'Horario',
    'location.parking': 'Estacionamiento y llegada',
    'location.areas': 'Zonas que atendemos',
    'location.closed': 'Cerrado',
    'contact.phone': 'Teléfono',
    'contact.fax': 'Fax',
    'contact.email': 'Correo',
    'contact.address': 'Dirección',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.disclaimer': 'La información de este sitio es educativa y no reemplaza la evaluación de un profesional con licencia.',
    'footer.explore': 'Explorar',
    'footer.visit': 'Visítanos',
    'lang.switch': 'English',
    'lang.label': 'View in English',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key] ?? ui.en[key];
}

export const dayNames: L10n<Record<string, string>> = {
  en: { Monday: 'Monday', Tuesday: 'Tuesday', Wednesday: 'Wednesday', Thursday: 'Thursday', Friday: 'Friday', Saturday: 'Saturday', Sunday: 'Sunday' },
  es: { Monday: 'Lunes', Tuesday: 'Martes', Wednesday: 'Miércoles', Thursday: 'Jueves', Friday: 'Viernes', Saturday: 'Sábado', Sunday: 'Domingo' },
};

export function formatTime(lang: Lang, hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  if (lang === 'es') return `${h}:${String(m).padStart(2, '0')}`;
  const suffix = h >= 12 ? 'pm' : 'am';
  const h12 = h % 12 || 12;
  return m ? `${h12}:${String(m).padStart(2, '0')} ${suffix}` : `${h12} ${suffix}`;
}
