// Practice facts shared by every page, the JSON-LD and llms.txt.
// Anything marked MOCK is placeholder data for the preview builds; MOCK_DATA.md lists each one.

export const clinic = {
  name: 'Powerhouse PT - Physical Therapy',
  shortName: 'Powerhouse PT',
  url: 'https://powerhousesportspt.com',
  phone: '956-307-6305',
  phoneE164: '+19563076305',
  fax: '956-857-3229',
  email: 'info@powerhousesportspt.com',
  address: {
    street: '2446 San Isidro Pkwy',
    note: { en: "Inside Gold's Gym", es: "Dentro de Gold's Gym" },
    city: 'Laredo',
    region: 'TX',
    postalCode: '78045',
    country: 'US',
  },
  geo: { lat: 27.5627, lng: -99.4422 }, // MOCK: approximate, confirm from the Google listing
  mapUrl: 'https://maps.app.goo.gl/yDw3U9cw4icQMNew6',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226282.67799933587!2d-99.61554858359375!3d27.603856700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866121cdb1abf8e9%3A0x14a5badb1a6861f9!2sPowerhouse%20PT-%20Physical%20Therapy!5e0!3m2!1sen!2sus!4v1781297069318!5m2!1sen!2sus',
  social: {
    instagram: 'https://www.instagram.com/powerhousept_',
    facebook: 'https://www.facebook.com/people/Powerhouse-PT-Physical-Therapy/100094690571519/',
  },
  owner: 'sandra',
  foundingYear: 2023, // MOCK
  languages: ['English', 'Spanish'],
};

/** MOCK: opening hours. Days use schema.org names; times are 24h. */
export const hours = [
  { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '07:00', closes: '19:00' },
  { days: ['Friday'], opens: '07:00', closes: '17:00' },
  { days: ['Saturday'], opens: '08:00', closes: '12:00' },
];

/** MOCK: parking and access notes. */
export const parking = {
  en: "Free parking in the Gold's Gym lot. Enter through the main gym doors and let the front desk know you're here for physical therapy.",
  es: "Estacionamiento gratuito en el lote de Gold's Gym. Entra por la puerta principal del gimnasio y avisa en recepción que vienes a terapia física.",
};

/**
 * Communities within about 50 miles (Hebbronville is just past it) that patients come from. These are not clinic locations:
 * there is one clinic (inside Gold's Gym, Laredo). MOCK: confirm the list with the clinic.
 */
export const areasServed = [
  'Laredo',
  'North Laredo',
  'South Laredo',
  'Del Mar',
  'San Isidro',
  'Rio Bravo',
  'El Cenizo',
  'Mirando City',
  'Encinal',
  'Zapata',
  'Hebbronville',
];

/**
 * Insurance, stated in general terms on purpose: no list of named plans until the clinic
 * confirms one. Each entry shows as a pill on the home and Access pages.
 */
export const insurance = {
  accepted: [
    { en: 'Most major insurance plans', es: 'La mayoría de los seguros principales' },
    { en: "Workers' compensation", es: 'Compensación laboral (workers\' comp)' },
    { en: 'Medicare', es: 'Medicare' },
  ],
  summary: {
    en: "We accept most major insurance plans, as well as workers' compensation and Medicare.",
    es: 'Aceptamos la mayoría de los seguros principales, además de compensación laboral (workers\' comp) y Medicare.',
  },
  hsaFsa: true, // MOCK
};

/** Self-pay is offered, but prices are deliberately not published; patients call for details. */
export const selfPay = {
  en: "Self-pay is available if you don't have insurance or prefer not to use it. Call us and we'll walk you through the options.",
  es: 'También puedes pagar por tu cuenta si no tienes seguro o prefieres no usarlo. Llámanos y te explicamos las opciones.',
};

/**
 * Texas direct access: a PT may treat without a referral for up to 30 consecutive calendar days
 * (Occupations Code §453.301, as amended by HB 4099, effective Sept. 1, 2025; previously 10 or 15
 * business days). MOCK: confirm the clinic's therapists meet the law's conditions and follow this policy.
 */
export const directAccess = { allowed: true, days: 30 };

/** MOCK: how booking works. The free call itself is real (sign-up form). */
export const booking = {
  discoveryCallMinutes: 15, // MOCK
  evaluationMinutes: 60, // MOCK
  followUpMinutes: 45, // MOCK
  responseTime: { en: 'within one business day', es: 'en un día hábil' }, // MOCK
};

export const fullAddress = `${clinic.address.street}, ${clinic.address.city}, ${clinic.address.region} ${clinic.address.postalCode}`;
