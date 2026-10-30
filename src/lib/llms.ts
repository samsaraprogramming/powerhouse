// Builds /llms.txt (a short, linked summary for AI assistants, per llmstxt.org) and
// /llms-full.txt (the same facts plus the full condition and service guides).
import { clinic, hours, insurance, selfPay, directAccess, areasServed, fullAddress } from '../data/clinic';
import { conditions } from '../data/conditions';
import { faqGroups } from '../data/faq';
import { posts } from '../data/posts';
import { getServices, getTeam, plain } from './content';
import { abs } from './schema';

const hoursText = hours.map((h) => `${h.days.join(', ')}: ${h.opens}–${h.closes}`).join('; ');

function facts() {
  return [
    `- Address: ${fullAddress} (${clinic.address.note.en})`,
    `- Phone: ${clinic.phone} · Fax: ${clinic.fax} · Email: ${clinic.email}`,
    `- Hours: ${hoursText}`,
    `- Languages: ${clinic.languages.join(', ')}`,
    `- Direct access: Texas patients can be seen without a referral for up to ${directAccess.days} consecutive days`,
    `- Insurance: ${insurance.accepted.map((i) => i.name).join(', ')}${insurance.hsaFsa ? '; HSA/FSA accepted' : ''}`,
    `- Self-pay: initial evaluation $${selfPay.find((p) => p.key === 'evaluation')?.price}, follow-up $${selfPay.find((p) => p.key === 'followUp')?.price}`,
    `- Areas served: one clinic in Laredo (no other locations); patients come from ${areasServed.join(', ')}`,
    `- Booking: free discovery call via ${abs('/sign-up.html')}`,
  ].join('\n');
}

export function llmsTxt(): string {
  const services = getServices('en');
  const team = getTeam('en');
  return `# ${clinic.name}

> One-on-one outpatient physical therapy clinic in Laredo, Texas, inside Gold's Gym. Doctors of physical therapy treat back, neck, shoulder, hip, knee, foot and ankle pain, sports injuries and post-surgical rehab, and offer dry needling, cupping and running analysis. Care is available in English and Spanish.

## Key facts

${facts()}

## Services

${services.map((s) => `- [${plain(s.heroTitle)}](${abs(`/service-${s.slug}.html`)}): ${plain(s.heroSubtitle)}`).join('\n')}

## Conditions

${conditions.map((c) => `- [${c.name.en}](${abs(`/conditions/${c.slug}.html`)}): ${c.summary.en}`).join('\n')}

## Team

${team.map((m) => `- [${plain(m.name)}](${abs(`/${m.slug}-bio.html`)}): ${plain(m.home.role)}. ${m.home.expertise}`).join('\n')}

## Library

${posts.map((p) => `- [${p.title.en}](${abs(`/library/${p.slug}.html`)}): ${p.description.en}`).join('\n')}

## Patient information

- [Access & cost](${abs('/access.html')}): referrals, insurance and self-pay prices
- [FAQ](${abs('/faq.html')}): common questions about visits and treatment
- [Location & hours](${abs('/location.html')}): address, parking and areas served

## Optional

- [Full text for AI assistants](${abs('/llms-full.txt')})
- [Spanish site (sitio en español)](${abs('/es/')})
`;
}

export function llmsFullTxt(): string {
  const services = getServices('en');
  const section = (title: string, items: string[]) => `### ${title}\n\n${items.map((i) => `- ${i}`).join('\n')}`;
  return `# ${clinic.name} — full reference

${facts()}

## Conditions

${conditions
  .map(
    (c) => `## ${c.name.en}

URL: ${abs(`/conditions/${c.slug}.html`)}

${c.intro.en}

${section('Common symptoms', c.symptoms.en)}

${section('Common causes', c.causes.en)}

${section('How physical therapy helps', c.treatment.en)}

### When to get it checked

${c.whenToSeek.en}

${section('See a doctor right away if', c.redFlags.en)}

${c.faqs.en.map((f) => `**${f.q}** ${f.a}`).join('\n\n')}`,
  )
  .join('\n\n')}

## Services

${services
  .map(
    (s) => `## ${plain(s.heroTitle)}

URL: ${abs(`/service-${s.slug}.html`)}

${plain(s.intro)}

${section(plain(s.conditionsHeading), s.conditions.map(plain))}`,
  )
  .join('\n\n')}

## Frequently asked questions

${faqGroups.flatMap((g) => g.items).map((f) => `**${f.q.en}** ${f.a.en}`).join('\n\n')}
`;
}
