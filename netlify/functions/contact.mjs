// Contact form handler: notifies the clinic and sends the patient a confirmation via Resend.
const TO_EMAIL = 'INFO@POWERHOUSESPORTSPT.COM';
const FROM_EMAIL = 'Powerhouse PT <contact@powerhousesportspt.com>';

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

// Input rules, mirrored in src/views/SignUp.astro so visitors see the message before sending.
// Names: letters (accents included), spaces, apostrophes, hyphens and periods; nothing a link could hide in.
const NAME_RE = /^[\p{L}\p{M}' .-]+$/u;
const NAME_MAX = 50;
const GOAL_MAX = 1000;
// Links and markup: web addresses, bare domains on common endings, and HTML or forum tags.
const LINK_RE =
  /(\b[a-z][a-z0-9+.-]*:\/\/|\bwww\.|<\s*[a-z!\/]|\[\s*\/?\s*(url|link)\b|\b[a-z0-9-]+\.(com|net|org|info|biz|io|co|me|ly|us|ru|cn|xyz|top|site|online|click|link|app|shop|store|live|win|vip|bet|loan)\b)/i;
// The submitted values from the insurance dropdown (always in English).
const INSURANCE = [
  'None', 'Aetna', 'Blue Cross Blue Shield', 'Cigna', 'Humana', 'Medicare', 'Medicaid', 'Tricare',
  'UnitedHealthcare', "Workers' compensation", 'Other',
];

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Patient confirmation. Written to look like a personal note, not a newsletter: no banner or images, no buttons,
// no hidden preview text, two links. Gmail files branded, image-heavy mail under Promotions; plain mail from a
// person lands in Primary far more often.
const PHONE = '956-307-6305';
const PHONE_TEL = '+1' + PHONE.replace(/\D/g, ''); // takes calls and texts
const ADDRESS = { en: "2446 San Isidro Pkwy, Laredo, TX 78045 · inside Gold's Gym", es: "2446 San Isidro Pkwy, Laredo, TX 78045 · dentro de Gold's Gym" };

const confirmCopy = {
  en: {
    subject: 'We received your request – Powerhouse PT',
    greeting: (name) => `Hi ${name},`,
    lead: "Thanks for reaching out. We received your request for a free discovery call. Here's what happens next:",
    steps: [
      ['We call you', 'A member of our team will call you within one business day.'],
      ['Free 15-minute call', "Tell us what's going on and ask anything. No pressure, no commitment."],
      ['Your first visit', "If physical therapy is a good fit, we'll book your evaluation and check your insurance benefits."],
    ],
    sooner: (phone) => `If you need us sooner, call or text us at ${phone}.`,
    privacy: "Please don't reply with medical records, medications or insurance numbers. We'll go over the details on the phone.",
    signoff: 'Talk soon,',
    team: 'The Powerhouse PT team',
    phoneNote: 'call or text',
  },
  es: {
    subject: 'Recibimos tu solicitud – Powerhouse PT',
    greeting: (name) => `Hola, ${name}:`,
    lead: 'Gracias por escribirnos. Recibimos tu solicitud para una llamada gratuita. Esto es lo que sigue:',
    steps: [
      ['Te llamamos', 'Alguien de nuestro equipo te llamará en un día hábil.'],
      ['Llamada gratuita de 15 minutos', 'Cuéntanos qué está pasando y pregunta lo que quieras. Sin presión y sin compromiso.'],
      ['Tu primera visita', 'Si la terapia física es buena opción para ti, agendamos tu evaluación y revisamos los beneficios de tu seguro.'],
    ],
    sooner: (phone) => `Si necesitas hablar antes, llámanos o envíanos un mensaje al ${phone}.`,
    privacy: 'Por favor no respondas con expedientes médicos, medicamentos ni números de seguro. Revisaremos los detalles por teléfono.',
    signoff: 'Hasta pronto,',
    team: 'El equipo de Powerhouse PT',
    phoneNote: 'llamadas o mensajes',
  },
};

function confirmEmail(lang, firstName, origin) {
  const c = confirmCopy[lang];
  const home = lang === 'es' ? `${origin}/es/` : `${origin}/`;
  const p = 'margin:0 0 16px;';
  const small = 'margin:0 0 16px;font-size:14px;color:#666666;';
  const phoneLink = `<a href="tel:${PHONE_TEL}" style="color:#336827;">${PHONE}</a>`;
  const steps = c.steps
    .map(([heading, body], i) => `<p style="${p}"><strong>${i + 1}. ${heading}.</strong> ${body}</p>`)
    .join('\n');

  const html = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${c.subject}</title>
</head>
<body style="margin:0;padding:0;">
<div style="max-width:560px;padding:16px;font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#222222;">
<p style="${p}">${c.greeting(escapeHtml(firstName))}</p>
<p style="${p}">${c.lead}</p>
${steps}
<p style="${p}">${c.sooner(phoneLink)}</p>
<p style="${small}">${c.privacy}</p>
<p style="${p}">${c.signoff}<br>${c.team}</p>
<p style="${small}">Powerhouse Sports Physical Therapy<br>${ADDRESS[lang]}<br>${PHONE} (${c.phoneNote}) · <a href="${home}" style="color:#336827;">powerhousesportspt.com</a></p>
</div>
</body>
</html>`;

  // Plain-text twin of the HTML: mail providers trust messages that carry both.
  const text = [
    c.greeting(firstName),
    '',
    c.lead,
    '',
    ...c.steps.map(([heading, body], i) => `${i + 1}. ${heading}. ${body}`),
    '',
    c.sooner(PHONE),
    '',
    c.privacy,
    '',
    c.signoff,
    c.team,
    '',
    'Powerhouse Sports Physical Therapy',
    ADDRESS[lang],
    `${PHONE} (${c.phoneNote}) · ${home}`,
  ].join('\n');

  return { subject: c.subject, html, text };
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Resend allows about 2 requests a second; a 429, a 5xx or a dropped connection is retried once after a short pause.
// Both attempts carry the same idempotency key, so if the first one actually went through, Resend doesn't send
// it again (keys are remembered for 24 hours). Returns the HTTP status, or 0 if Resend couldn't be reached.
async function sendEmail(apiKey, { to, subject, html, text, replyTo, idempotencyKey }) {
  const data = { from: FROM_EMAIL, to: [to], subject, html };
  if (text) data.text = text;
  if (replyTo) data.reply_to = replyTo;

  for (let attempt = 1; ; attempt++) {
    let status;
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'Idempotency-Key': idempotencyKey,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) return response.status;
      status = response.status;
      console.error(`Resend ${status} (attempt ${attempt}, "${subject}"): ${await response.text()}`);
    } catch (error) {
      status = 0;
      console.error(`Resend unreachable (attempt ${attempt}, "${subject}"): ${error}`);
    }

    const retryable = status === 0 || status === 429 || status >= 500;
    if (!retryable || attempt === 2) return status;
    await sleep(1200);
  }
}

export default async (req) => {
  if (req.method !== 'POST') {
    return json({ status: 'error', message: 'Direct access not allowed.' }, 405);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return json({ status: 'error', message: 'Server not configured.' }, 500);
  }

  let form;
  try {
    form = await req.formData();
  } catch {
    return json({ status: 'error', message: 'Invalid form data.' }, 400);
  }

  const field = (name) => String(form.get(name) ?? '').trim();

  // Bot checks. A filled honeypot, or a form sent within a few seconds of opening (or without the page's
  // script running), is dropped quietly: the sender sees "success" so it has no reason to try again, and no
  // email goes out, so the form can't be used to mail strangers.
  const MIN_FILL_MS = 3000;
  const elapsed = Number(field('elapsed'));
  if (field('website') || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    console.warn(`Dropped a likely bot submission (honeypot: ${field('website') ? 'filled' : 'empty'}, elapsed: ${field('elapsed') || 'missing'} ms).`);
    return json({ status: 'success' });
  }
  const firstName = field('first_name');
  const lastName = field('last_name');
  const phone = field('phone');
  const email = field('email');
  const insurance = field('insurance');
  const goal = field('goal');

  // Same rules as the form on sign-up.astro; this is the check that can't be bypassed.
  const phoneDigits = phone.replace(/\D/g, '');
  const validPhone = /^\+?[\d\s().-]+$/.test(phone) && phoneDigits.length >= 7 && phoneDigits.length <= 15;
  const validEmail = email.length <= 254 && /^[^\s@<>"',]+@[^\s@.<>"',]+(\.[^\s@.<>"',]+)+$/.test(email);

  if (!firstName || !lastName || !insurance || !goal) {
    return json({ status: 'error', message: 'All fields are required.' }, 400);
  }
  // The first name also goes into the confirmation sent to the visitor's address, so names are kept to plain
  // letters: the form can't be used to put a link in front of someone else.
  if ([firstName, lastName].some((name) => name.length > NAME_MAX || !NAME_RE.test(name))) {
    return json({ status: 'error', message: 'Please enter names using letters only.' }, 400);
  }
  if (goal.length > GOAL_MAX) {
    return json({ status: 'error', message: `Please keep your goal under ${GOAL_MAX} characters.` }, 400);
  }
  if (LINK_RE.test(goal)) {
    return json({ status: 'error', message: 'Please remove links or web addresses from your goal.' }, 400);
  }
  if (!INSURANCE.includes(insurance)) {
    return json({ status: 'error', message: 'Please select your insurance provider from the list.' }, 400);
  }
  if (!validPhone) {
    return json({ status: 'error', message: 'Please enter a valid phone number.' }, 400);
  }
  if (!validEmail) {
    return json({ status: 'error', message: 'Please enter a valid email address.' }, 400);
  }

  // One ID per submission; each email gets its own key so a retry can't deliver it twice.
  const submissionId = crypto.randomUUID();

  // Subjects are plain text; keep them on one line.
  const subjectName = `${firstName} ${lastName}`.replace(/[\r\n]+/g, ' ').trim();

  const notifyBody = `
<h2>New Lead from Website</h2>
<p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Insurance:</strong> ${escapeHtml(insurance)}</p>
<p><strong>Goal:</strong><br>${escapeHtml(goal)}</p>
`;
  const notifyText = `New lead from the website\n\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nInsurance: ${insurance}\nGoal:\n${goal}\n`;

  const status = await sendEmail(apiKey, {
    to: TO_EMAIL,
    subject: `New Contact: ${subjectName}`,
    html: notifyBody,
    text: notifyText,
    replyTo: email,
    idempotencyKey: `${submissionId}-notify`,
  });

  if (status !== 200 && status !== 201) {
    return json({ status: 'error', message: `API Error ${status}` });
  }

  const lang = field('lang') === 'es' ? 'es' : 'en';
  const confirm = confirmEmail(lang, firstName, new URL(req.url).origin);

  // The lead already reached the clinic, so the visitor still sees success; a failed confirmation is logged
  // (Netlify > Logs > Functions > contact) so it can be followed up.
  const confirmStatus = await sendEmail(apiKey, {
    to: email,
    subject: confirm.subject,
    html: confirm.html,
    text: confirm.text,
    // Replies go to the clinic inbox, not the sending address.
    replyTo: TO_EMAIL.toLowerCase(),
    idempotencyKey: `${submissionId}-confirm`,
  });
  if (confirmStatus !== 200 && confirmStatus !== 201) {
    console.error(`Confirmation email to the visitor failed with ${confirmStatus}; the clinic notification was sent.`);
  }

  return json({ status: 'success' });
};

export const config = { path: '/api/contact' };
