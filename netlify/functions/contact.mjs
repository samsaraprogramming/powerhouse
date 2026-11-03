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

// Patient confirmation. Table layout with inline styles so it renders the same in Gmail, Outlook and Apple Mail.
// The logo is a PNG (email clients don't all show WebP) served from the site that received the form.
const PHONE = '956-307-6305';
const PHONE_TEL = '+1' + PHONE.replace(/\D/g, ''); // takes calls and texts
const ADDRESS = { en: "2446 San Isidro Pkwy, Laredo, TX 78045 · inside Gold's Gym", es: "2446 San Isidro Pkwy, Laredo, TX 78045 · dentro de Gold's Gym" };

const confirmCopy = {
  en: {
    subject: 'We received your request – Powerhouse PT',
    preheader: "Thanks for reaching out. Here's what happens next.",
    title: (name) => `Thanks, ${name}!`,
    lead: "We received your request for a free discovery call. Here's what happens next:",
    steps: [
      ['We call you', 'A member of our team will call you within one business day.'],
      ['Free 15-minute call', "Tell us what's going on and ask anything. No pressure, no commitment."],
      ['Your first visit', "If physical therapy is a good fit, we'll book your evaluation and check your insurance benefits."],
    ],
    sooner: 'Need us sooner? Call or text&nbsp;us.',
    call: 'Call',
    text: 'Text us',
    phoneNote: 'call or text',
    privacy: "Please don't reply with medical records, medications or insurance numbers. We'll go over the details on the phone.",
    sent: 'You received this email because you asked us to contact you on our website.',
  },
  es: {
    subject: 'Recibimos tu solicitud – Powerhouse PT',
    preheader: 'Gracias por escribirnos. Esto es lo que sigue.',
    title: (name) => `¡Gracias, ${name}!`,
    lead: 'Recibimos tu solicitud para una llamada gratuita. Esto es lo que sigue:',
    steps: [
      ['Te llamamos', 'Alguien de nuestro equipo te llamará en un día hábil.'],
      ['Llamada gratuita de 15 minutos', 'Cuéntanos qué está pasando y pregunta lo que quieras. Sin presión y sin compromiso.'],
      ['Tu primera visita', 'Si la terapia física es buena opción para ti, agendamos tu evaluación y revisamos los beneficios de tu seguro.'],
    ],
    sooner: '¿Necesitas hablar antes? Llámanos o&nbsp;escríbenos.',
    call: 'Llama al',
    text: 'Envía un mensaje',
    phoneNote: 'llamadas o mensajes',
    privacy: 'Por favor no respondas con expedientes médicos, medicamentos ni números de seguro. Revisaremos los detalles por teléfono.',
    sent: 'Recibiste este correo porque nos pediste que te contactáramos desde nuestro sitio web.',
  },
};

function confirmEmail(lang, firstName, origin) {
  const c = confirmCopy[lang];
  const home = lang === 'es' ? `${origin}/es/` : `${origin}/`;
  const serif = "Georgia,'Times New Roman',serif";
  const sans = "-apple-system,'Segoe UI',Helvetica,Arial,sans-serif";
  const steps = c.steps
    .map(
      ([heading, text], i) => `
          <tr>
            <td width="40" valign="top" style="padding:0 0 18px;">
              <div style="width:28px;height:28px;border-radius:14px;background:#e9f4e5;color:#336827;font:700 14px/28px ${sans};text-align:center;">${i + 1}</div>
            </td>
            <td valign="top" style="padding:3px 0 18px;font:15px/1.5 ${sans};color:#4d4a43;">
              <strong style="color:#0c0e0d;">${heading}</strong><br>${text}
            </td>
          </tr>`,
    )
    .join('');

  const html = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light only">
<title>${c.subject}</title>
</head>
<body style="margin:0;padding:0;background:#f3f0e8;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${c.preheader}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f0e8;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #d9d3c6;">
        <tr>
          <td align="center" style="background:#0c0e0d;padding:28px 24px;">
            <a href="${home}"><img src="${origin}/images/brand/email-logo.png" width="190" height="92" alt="Powerhouse Physical Therapy" style="display:block;border:0;width:190px;height:auto;color:#f3f0e8;font:700 18px ${sans};"></a>
          </td>
        </tr>
        <tr><td style="height:4px;line-height:4px;font-size:0;background:#4ca239;">&nbsp;</td></tr>
        <tr>
          <td style="padding:36px 36px 8px;">
            <h1 style="margin:0 0 12px;font:400 30px/1.2 ${serif};color:#0c0e0d;">${c.title(escapeHtml(firstName))}</h1>
            <p style="margin:0 0 24px;font:16px/1.6 ${sans};color:#4d4a43;">${c.lead}</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${steps}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 36px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f0e8;border-radius:12px;">
              <tr>
                <td style="padding:20px 24px;font:15px/1.5 ${sans};color:#4d4a43;">
                  <strong style="color:#0c0e0d;">${c.sooner}</strong><br>
                  <a href="tel:${PHONE_TEL}" style="display:inline-block;margin:12px 8px 0 0;padding:12px 22px;border-radius:999px;background:#4ca239;color:#0c0e0d;font:700 15px ${sans};text-decoration:none;">${c.call} ${PHONE}</a>
                  <a href="sms:${PHONE_TEL}" style="display:inline-block;margin:12px 0 0 0;padding:11px 20px;border-radius:999px;border:1.5px solid #0c0e0d;color:#0c0e0d;font:700 15px ${sans};text-decoration:none;">${c.text}</a>
                </td>
              </tr>
            </table>
            <p style="margin:20px 0 0;font:13px/1.5 ${sans};color:#7a766d;">${c.privacy}</p>
          </td>
        </tr>
        <tr>
          <td style="background:#0c0e0d;padding:22px 36px;font:13px/1.6 ${sans};color:#a39e92;">
            <strong style="color:#f3f0e8;">Powerhouse Sports Physical Therapy</strong><br>
            ${ADDRESS[lang]}<br>
            <a href="tel:${PHONE_TEL}" style="color:#72c95e;text-decoration:none;">${PHONE}</a> (${c.phoneNote}) &nbsp;·&nbsp; <a href="${home}" style="color:#72c95e;text-decoration:none;">powerhousesportspt.com</a>
          </td>
        </tr>
      </table>
      <p style="margin:16px 0 0;font:12px/1.5 ${sans};color:#7a766d;max-width:560px;">${c.sent}</p>
    </td>
  </tr>
</table>
</body>
</html>`;

  // Plain-text twin of the HTML: mail providers trust messages that carry both.
  const text = [
    c.title(firstName),
    '',
    c.lead,
    '',
    ...c.steps.map(([heading, body], i) => `${i + 1}. ${heading}: ${body}`),
    '',
    `${c.sooner.replace(/&nbsp;/g, ' ')} ${PHONE}`,
    '',
    c.privacy,
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
