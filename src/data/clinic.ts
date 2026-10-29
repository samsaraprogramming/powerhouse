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

/** The city the clinic serves. One location for now; add cities here if the business expands. */
export const areasServed = ['Laredo'];

/**
 * Insurance. BlueCross BlueShield and Medicare are real (from the site's old pop-up);
 * the rest of the list is MOCK.
 */
export const insurance = {
  accepted: [
    { name: 'BlueCross BlueShield of Texas', mock: false },
    { name: 'Medicare', mock: false },
    { name: 'Aetna', mock: true },
    { name: 'Cigna', mock: true },
    { name: 'UnitedHealthcare', mock: true },
    { name: 'Humana', mock: true },
    { name: 'TRICARE', mock: true },
    { name: "Workers' compensation", mock: true },
  ],
  hsaFsa: true, // MOCK
};

/** MOCK: self-pay prices in USD. */
export const selfPay = [
  { key: 'evaluation', price: 120 },
  { key: 'followUp', price: 95 },
  { key: 'dryNeedling', price: 60 },
  { key: 'runningAnalysis', price: 150 },
  { key: 'package', price: 450 }, // 5 follow-up visits
];

/** MOCK: Texas allows PT without a referral for a limited window; confirm the clinic's policy. */
export const directAccess = { allowed: true, days: 15 };

/** MOCK: how booking works. The free call itself is real (sign-up form). */
export const booking = {
  discoveryCallMinutes: 15, // MOCK
  evaluationMinutes: 60, // MOCK
  followUpMinutes: 45, // MOCK
  responseTime: { en: 'within one business day', es: 'en un día hábil' }, // MOCK
};

export const fullAddress = `${clinic.address.street}, ${clinic.address.city}, ${clinic.address.region} ${clinic.address.postalCode}`;
