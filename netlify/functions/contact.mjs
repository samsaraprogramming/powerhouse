// Contact form handler: notifies the clinic and sends the patient a confirmation via Resend.
const TO_EMAIL = 'INFO@POWERHOUSESPORTSPT.COM';
const FROM_EMAIL = 'Powerhouse PT <contact@powerhousesportspt.com>';

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

async function sendEmail(apiKey, { to, subject, html, replyTo }) {
  const data = { from: FROM_EMAIL, to: [to], subject, html };
  if (replyTo) data.reply_to = replyTo;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error(`Resend ${response.status}: ${await response.text()}`);
  }

  return response.status;
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
  if (!validPhone) {
    return json({ status: 'error', message: 'Please enter a valid phone number.' }, 400);
  }
  if (!validEmail) {
    return json({ status: 'error', message: 'Please enter a valid email address.' }, 400);
  }

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

  const status = await sendEmail(apiKey, {
    to: TO_EMAIL,
    subject: `New Contact: ${subjectName}`,
    html: notifyBody,
    replyTo: email,
  });

  if (status !== 200 && status !== 201) {
    return json({ status: 'error', message: `API Error ${status}` });
  }

  const confirmBody = `
<div style='font-family:sans-serif;max-width:600px;margin:auto;'>
  <h2 style='color:#1a1a2e;'>Thanks, ${escapeHtml(firstName)}!</h2>
  <p>We received your request and will be in touch shortly to get you scheduled.</p>
  <p>If you need to reach us sooner, call us at <strong>(956) 724-9800</strong>.</p>
  <hr style='border:none;border-top:1px solid #eee;margin:24px 0;'>
  <p style='color:#888;font-size:13px;'>Powerhouse Sports Physical Therapy &mdash; Laredo, TX</p>
</div>
`;

  await sendEmail(apiKey, {
    to: email,
    subject: 'We received your request – Powerhouse PT',
    html: confirmBody,
  });

  return json({ status: 'success' });
};

export const config = { path: '/api/contact' };
