import type { L10n } from '../i18n/ui';
import { booking, directAccess, insurance, selfPay } from './clinic';

// General questions for /faq.html (FAQPage JSON-LD) and the home page preview.
// Answers that quote clinic facts read them from clinic.ts, so replacing the MOCK values there
// updates these too.


export interface FaqGroup {
  id: string;
  title: L10n;
  items: { q: L10n; a: L10n; home?: boolean }[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: 'getting-started',
    title: { en: 'Getting started', es: 'Para empezar' },
    items: [
      {
        home: true,
        q: { en: 'Do I need a referral to see a physical therapist?', es: '¿Necesito una referencia para ver a un fisioterapeuta?' },
        a: {
          en: `Not to get started. In Texas you can see a physical therapist without a referral for up to ${directAccess.days} consecutive days. After that, or if your insurance requires one, we help you get a referral from your doctor.`,
          es: `No para empezar. En Texas puedes ver a un fisioterapeuta sin referencia hasta por ${directAccess.days} días consecutivos. Después de eso, o si tu seguro la pide, te ayudamos a conseguirla con tu médico.`,
        },
      },
      {
        home: true,
        q: { en: 'What happens on the free discovery call?', es: '¿Qué pasa en la llamada gratuita?' },
        a: {
          en: `A ${booking.discoveryCallMinutes}-minute phone call with our team. We ask about your pain and goals, answer your questions, and tell you honestly whether we are the right fit. There is no cost and no commitment.`,
          es: `Una llamada de ${booking.discoveryCallMinutes} minutos con nuestro equipo. Te preguntamos sobre tu dolor y tus metas, respondemos tus dudas y te decimos con honestidad si somos la opción correcta. No tiene costo ni compromiso.`,
        },
      },
      {
        q: { en: 'How soon can I be seen?', es: '¿Qué tan pronto me pueden atender?' },
        a: {
          en: `Most new patients are scheduled within a few days. Fill out the form and we will reach out ${booking.responseTime.en}.`,
          es: `La mayoría de los pacientes nuevos se agenda en pocos días. Llena el formulario y te contactaremos ${booking.responseTime.es}.`,
        },
      },
      {
        q: { en: 'Do you see patients in Spanish?', es: '¿Atienden en español?' },
        a: {
          en: 'Yes. Our team speaks English and Spanish, and you can request either language for your visits.',
          es: 'Sí. Nuestro equipo habla inglés y español, y puedes pedir cualquiera de los dos idiomas para tus visitas.',
        },
      },
    ],
  },
  {
    id: 'insurance-cost',
    title: { en: 'Insurance & cost', es: 'Seguros y costos' },
    items: [
      {
        home: true,
        q: { en: 'Which insurance plans do you accept?', es: '¿Qué seguros aceptan?' },
        a: {
          en: `${insurance.summary.en} Coverage varies by plan, so tell us your insurance when you book and we verify your benefits before your first visit.`,
          es: `${insurance.summary.es} La cobertura depende de tu plan, así que dinos cuál tienes al agendar y verificamos tus beneficios antes de tu primera visita.`,
        },
      },
      {
        home: true,
        q: { en: "What if I don't have insurance?", es: '¿Y si no tengo seguro?' },
        a: {
          en: `${selfPay.en}${insurance.hsaFsa ? ' HSA and FSA cards are accepted.' : ''}`,
          es: `${selfPay.es}${insurance.hsaFsa ? ' Aceptamos tarjetas HSA y FSA.' : ''}`,
        },
      },
      {
        q: { en: 'Can I use my HSA or FSA card?', es: '¿Puedo usar mi tarjeta HSA o FSA?' },
        a: {
          en: insurance.hsaFsa ? 'Yes. Physical therapy is a qualified medical expense, so you can pay with an HSA or FSA card.' : 'Please call us to check.',
          es: insurance.hsaFsa ? 'Sí. La terapia física es un gasto médico calificado, así que puedes pagar con tarjeta HSA o FSA.' : 'Llámanos para confirmarlo.',
        },
      },
    ],
  },
  {
    id: 'visits',
    title: { en: 'Your visits', es: 'Tus visitas' },
    items: [
      {
        q: { en: 'How long is each visit?', es: '¿Cuánto dura cada visita?' },
        a: {
          en: `Your first evaluation takes about ${booking.evaluationMinutes} minutes. Follow-up visits are about ${booking.followUpMinutes} minutes, one-on-one with your therapist.`,
          es: `Tu primera evaluación dura unos ${booking.evaluationMinutes} minutos. Las visitas de seguimiento duran unos ${booking.followUpMinutes} minutos, uno a uno con tu terapeuta.`,
        },
      },
      {
        q: { en: 'What should I wear?', es: '¿Qué ropa debo usar?' },
        a: {
          en: 'Comfortable clothes you can move in. Shorts help for hip, knee and ankle problems; a tank top or loose shirt helps for the neck and shoulder. Bring running shoes for a running analysis.',
          es: 'Ropa cómoda con la que te puedas mover. Los shorts ayudan para problemas de cadera, rodilla y tobillo; una playera sin mangas o holgada ayuda para cuello y hombro. Trae tenis para correr si vienes a un análisis de carrera.',
        },
      },
      {
        q: { en: 'How many visits will I need?', es: '¿Cuántas visitas voy a necesitar?' },
        a: {
          en: 'It depends on your condition and goals. After your evaluation we give you an expected timeline and update it as you progress. Many patients come once or twice a week for four to eight weeks.',
          es: 'Depende de tu condición y tus metas. Después de tu evaluación te damos un tiempo estimado y lo ajustamos conforme avanzas. Muchos pacientes vienen una o dos veces por semana durante cuatro a ocho semanas.',
        },
      },
    ],
  },
  {
    id: 'treatment',
    title: { en: 'Treatment', es: 'Tratamiento' },
    items: [
      {
        q: { en: 'Does dry needling hurt?', es: '¿Duele la punción seca?' },
        a: {
          en: 'Most people feel a quick prick and then a brief cramp or twitch in the muscle. It is usually sore for a day or two afterward, similar to after a hard workout.',
          es: 'La mayoría siente un piquete rápido y luego un calambre o contracción breve en el músculo. Suele quedar adolorido uno o dos días, parecido a después de un entrenamiento intenso.',
        },
      },
      {
        q: { en: 'Will I get exercises to do at home?', es: '¿Me darán ejercicios para hacer en casa?' },
        a: {
          en: 'Yes. Every patient gets a short home program that matches what we are working on in the clinic, and we update it as you get stronger.',
          es: 'Sí. Cada paciente recibe un programa corto para casa que corresponde a lo que trabajamos en la clínica, y lo actualizamos conforme ganas fuerza.',
        },
      },
    ],
  },
];

export const homeFaqs = faqGroups.flatMap((g) => g.items.filter((i) => i.home));
