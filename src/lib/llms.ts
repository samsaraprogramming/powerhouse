// Builds /llms.txt (a short, linked summary for AI assistants, per llmstxt.org, with a short Spanish
// section at the end) and /llms-full.txt and /es/llms-full.txt (the same facts plus the full condition
// and service guides, one file per language). Everything is read from the same data as the pages.
import { clinic, hours, insurance, directAccess, areasServed, fullAddress } from '../data/clinic';
import { conditions } from '../data/conditions';
import { faqGroups } from '../data/faq';
import { posts } from '../data/posts';
import { serviceFaqs } from '../data/serviceFaqs';
import { REVIEWS_URL } from '../data/googleRating';
import { dayNames, href, type Lang } from '../i18n/ui';
import { getServices, getTeam, plain } from './content';
import { abs } from './schema';

type Rating = { rating: number; count: number };

const hoursText = (lang: Lang) => hours.map((h) => `${h.days.map((d) => dayNames[lang][d]).join(', ')}: ${h.opens}–${h.closes}`).join('; ');

function facts(lang: Lang, r: Rating) {
  if (lang === 'es') {
    return [
      `- Dirección: ${fullAddress} (${clinic.address.note.es})`,
      `- Teléfono (llamadas o mensajes de texto): ${clinic.phone} · Fax: ${clinic.fax} · Correo: ${clinic.email}`,
      `- Horario: ${hoursText('es')}`,
      `- Calificación en Google: ${r.rating.toFixed(1)} de 5 con ${r.count} reseñas: ${REVIEWS_URL}`,
      `- Abierta desde: ${clinic.foundingYear}`,
      `- Idiomas: inglés y español; todo el equipo atiende en español`,
      `- Acceso directo: en Texas puedes atenderte sin referencia médica hasta por ${directAccess.days} días naturales consecutivos (HB 4099, vigente desde el 1 de septiembre de 2025): ${abs(href('es', '/direct-access.html'))}`,
      `- Seguros: ${insurance.summary.es} Llama para verificar tu plan.${insurance.hsaFsa ? ' Se aceptan HSA/FSA.' : ''}`,
      `- Pago directo (sin seguro): disponible; llama para más detalles (los precios no se publican)`,
      `- Zona: una sola clínica en Laredo (sin otras sucursales); los pacientes vienen de ${areasServed.join(', ')}`,
      `- Citas: llamada gratuita de orientación en ${abs(href('es', '/sign-up.html'))}`,
    ].join('\n');
  }
  return [
    `- Address: ${fullAddress} (${clinic.address.note.en})`,
    `- Phone (call or text): ${clinic.phone} · Fax: ${clinic.fax} · Email: ${clinic.email}`,
    `- Hours: ${hoursText('en')}`,
    `- Google rating: ${r.rating.toFixed(1)} out of 5 from ${r.count} reviews: ${REVIEWS_URL}`,
    `- Open since: ${clinic.foundingYear}`,
    `- Languages: ${clinic.languages.join(', ')}; every clinician treats patients in Spanish`,
    `- Direct access: Texas patients can be seen without a referral for up to ${directAccess.days} consecutive calendar days (HB 4099, effective Sept. 1, 2025): ${abs('/direct-access.html')}`,
    `- Insurance: ${insurance.summary.en} Call to verify a specific plan.${insurance.hsaFsa ? ' HSA/FSA accepted.' : ''}`,
    `- Self-pay: available; call for details (prices are not published)`,
    `- Areas served: one clinic in Laredo (no other locations); patients come from ${areasServed.join(', ')}`,
    `- Booking: free discovery call via ${abs('/sign-up.html')}`,
  ].join('\n');
}

/** A short Spanish summary appended to /llms.txt, after the English, so tools that stop early still get the English in full. */
function spanishSection(r: Rating): string {
  const services = getServices('es');
  return `## En español

Clínica de terapia física (fisioterapia) individual en Laredo, Texas, dentro de Gold's Gym. Atendemos dolor de espalda, cuello, hombro, codo, cadera, rodilla, pie y tobillo, lesiones de LCA, lesiones al correr, desgarres de isquiotibiales e ingle, otras lesiones deportivas y rehabilitación después de cirugía. Atención en español.

${facts('es', r)}

### Servicios

${services.map((s) => `- [${plain(s.heroTitle)}](${abs(href('es', `/service-${s.slug}.html`))})`).join('\n')}

### Condiciones

${conditions.map((c) => `- [${c.name.es}](${abs(href('es', `/conditions/${c.slug}.html`))})`).join('\n')}

### Más información

- [Sitio en español](${abs(href('es', '/'))})
- [Seguros, pago directo y acceso directo](${abs(href('es', '/access.html'))})
- [Terapia física sin referencia en Texas](${abs(href('es', '/direct-access.html'))})
- [Preguntas frecuentes](${abs(href('es', '/faq.html'))})
- [Ubicación y horario](${abs(href('es', '/location.html'))})
- [Texto completo en español para asistentes de IA](${abs('/es/llms-full.txt')})
`;
}

export function llmsTxt(r: Rating): string {
  const services = getServices('en');
  const team = getTeam('en');
  return `# ${clinic.name}

> One-on-one outpatient physical therapy clinic in Laredo, Texas, inside Gold's Gym. Doctors of physical therapy treat back, neck, shoulder, elbow, hip, knee, foot and ankle pain, ACL tears, running injuries, hamstring and groin strains, other sports injuries and post-surgical rehab, and offer dry needling, cupping, blood flow restriction (BFR) training and running analysis. Care is available in English and Spanish.

## Start here

- [Conditions we treat](${abs('/conditions.html')}): one guide per condition, with symptoms, treatment and when to see a doctor
- [Physical therapy without a referral in Texas](${abs('/direct-access.html')})
- [Access & cost](${abs('/access.html')}): insurance, Medicare, workers' comp, self-pay and HSA/FSA
- [Book a free discovery call](${abs('/sign-up.html')})

## Key facts

${facts('en', r)}

## Services

${services.map((s) => `- [${plain(s.heroTitle)}](${abs(`/service-${s.slug}.html`)}): ${plain(s.heroSubtitle)}`).join('\n')}

## Conditions

${conditions.map((c) => `- [${c.name.en}](${abs(`/conditions/${c.slug}.html`)}): ${c.summary.en}`).join('\n')}

## Team

${team.map((m) => `- [${plain(m.name)}](${abs(`/${m.slug}-bio.html`)}): ${plain(m.home.role)}. ${m.home.expertise}. ${m.home.points.map(plain).join('; ')}`).join('\n')}

## Library

${posts.map((p) => `- [${p.title.en}](${abs(`/library/${p.slug}.html`)}): ${p.description.en}`).join('\n')}

## Patient information

- [Access & cost](${abs('/access.html')}): referrals, insurance and self-pay
- [Physical therapy without a referral in Texas](${abs('/direct-access.html')}): the ${directAccess.days}-day direct access law (HB 4099), who qualifies, what happens after, and how insurance fits in
- [FAQ](${abs('/faq.html')}): common questions about visits and treatment
- [Location & hours](${abs('/location.html')}): address, parking and areas served

## Optional

- [Full text for AI assistants](${abs('/llms-full.txt')})
- [Spanish site (sitio en español)](${abs('/es/')})

${spanishSection(r)}`;
}

const fullLabels = {
  en: { title: 'full reference', conditions: 'Conditions', services: 'Services', team: 'Team', faq: 'Frequently asked questions', symptoms: 'Common symptoms', causes: 'Common causes', treatment: 'How physical therapy helps', when: 'When to get it checked', redFlags: 'See a doctor right away if' },
  es: { title: 'referencia completa', conditions: 'Condiciones', services: 'Servicios', team: 'Equipo', faq: 'Preguntas frecuentes', symptoms: 'Síntomas comunes', causes: 'Causas comunes', treatment: 'Cómo ayuda la terapia física', when: 'Cuándo revisarlo', redFlags: 'Ve al médico de inmediato si' },
};

export function llmsFullTxt(r: Rating, lang: Lang = 'en'): string {
  const services = getServices(lang);
  const team = getTeam(lang);
  const l = fullLabels[lang];
  const section = (title: string, items: string[]) => `### ${title}\n\n${items.map((i) => `- ${i}`).join('\n')}`;
  return `# ${clinic.name} — ${l.title}

${facts(lang, r)}

## ${l.conditions}

${conditions
  .map(
    (c) => `## ${c.name[lang]}

URL: ${abs(href(lang, `/conditions/${c.slug}.html`))}

${c.intro[lang]}

${section(l.symptoms, c.symptoms[lang])}

${section(l.causes, c.causes[lang])}

${section(l.treatment, c.treatment[lang])}

### ${l.when}

${c.whenToSeek[lang]}

${section(l.redFlags, c.redFlags[lang])}

${c.faqs[lang].map((f) => `**${f.q}** ${f.a}`).join('\n\n')}`,
  )
  .join('\n\n')}

## ${l.services}

${services
  .map(
    (s) => `## ${plain(s.heroTitle)}

URL: ${abs(href(lang, `/service-${s.slug}.html`))}

${plain(s.intro)}

${section(plain(s.conditionsHeading), s.conditions.map(plain))}

${(serviceFaqs[s.slug]?.[lang] ?? []).map((f) => `**${f.q}** ${f.a}`).join('\n\n')}`,
  )
  .join('\n\n')}

## ${l.team}

${team
  .map((m) => `### ${plain(m.name)}

URL: ${abs(href(lang, `/${m.slug}-bio.html`))}

${plain(m.home.role)}. ${m.home.expertise}

${m.home.points.map((p) => `- ${plain(p)}`).join('\n')}`)
  .join('\n\n')}

## ${l.faq}

${faqGroups.flatMap((g) => g.items).map((f) => `**${f.q[lang]}** ${f.a[lang]}`).join('\n\n')}
`;
}
