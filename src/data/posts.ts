import type { L10n } from '../i18n/ui';

// Library articles. MOCK: written for the preview builds; dates and clinical review are
// placeholders until the reviewing therapist signs off (see MOCK_DATA.md).

export interface Post {
  slug: string;
  date: string;
  reviewer: 'sandra' | 'leslie';
  minutes: number;
  image: string;
  conditions: string[];
  title: L10n;
  description: L10n;
  takeaways: L10n<string[]>;
  sections: L10n<{ heading: string; paragraphs: string[] }[]>;
}

export const posts: Post[] = [
  {
    slug: 'ankle-sprain-recovery-time',
    date: '2026-09-22',
    reviewer: 'leslie',
    minutes: 4,
    image: '/images/conditions/foot-ankle-pain.webp',
    conditions: ['foot-ankle-pain'],
    title: {
      en: 'How long does an ankle sprain take to heal?',
      es: '¿Cuánto tarda en sanar un esguince de tobillo?',
    },
    description: {
      en: 'Typical recovery times for mild, moderate and severe ankle sprains, and why finishing rehab matters.',
      es: 'Tiempos de recuperación típicos para esguinces leves, moderados y graves, y por qué terminar la rehabilitación es importante.',
    },
    takeaways: {
      en: ['Mild sprains often feel better in one to three weeks.', 'Moderate and severe sprains can take six weeks to a few months.', 'Balance training lowers the chance of spraining the same ankle again.'],
      es: ['Los esguinces leves suelen sentirse mejor en una a tres semanas.', 'Los moderados y graves pueden tardar de seis semanas a varios meses.', 'El entrenamiento de equilibrio reduce la probabilidad de volver a torcer el mismo tobillo.'],
    },
    sections: {
      en: [
        { heading: 'What counts as a mild, moderate or severe sprain?', paragraphs: ['A sprain is a stretch or tear of the ligaments that hold the ankle bones together. Mild sprains stretch the ligament, moderate sprains partly tear it, and severe sprains tear it completely. Swelling, bruising and how much weight you can put on the foot give a first clue, but an exam is the best way to know.'] },
        { heading: 'How long does each one usually take?', paragraphs: ['Mild sprains often let you walk comfortably within one to three weeks. Moderate sprains usually take three to six weeks before you feel close to normal. Severe sprains can take several months, especially if you want to return to cutting and jumping sports.', 'Feeling better is not the same as being fully recovered. Strength and balance often lag weeks behind the pain.'] },
        { heading: 'Why do ankles keep rolling after a sprain?', paragraphs: ['A sprain affects the small sensors in the ligaments that tell your brain where your foot is. If those are never retrained, the ankle reacts a little slower and rolls more easily. Balance work, hopping drills and calf strengthening are what close that gap.'] },
        { heading: 'When should I get it checked?', paragraphs: ['See a doctor right away if you cannot take four steps, or if the bony bumps of the ankle are tender after a fall, because those can point to a fracture. Otherwise, book a physical therapy evaluation if the ankle is not clearly improving after a week or keeps giving way.'] },
      ],
      es: [
        { heading: '¿Qué es un esguince leve, moderado o grave?', paragraphs: ['Un esguince es un estiramiento o desgarro de los ligamentos que unen los huesos del tobillo. En el leve el ligamento se estira, en el moderado se rompe en parte y en el grave se rompe por completo. La inflamación, los moretones y cuánto peso puedes apoyar dan una primera pista, pero una evaluación es la mejor forma de saberlo.'] },
        { heading: '¿Cuánto tarda cada uno?', paragraphs: ['Con un esguince leve muchas personas caminan cómodas en una a tres semanas. Los moderados suelen tardar de tres a seis semanas en sentirse casi normales. Los graves pueden tardar varios meses, sobre todo si quieres volver a deportes con saltos y cambios de dirección.', 'Sentirse mejor no es lo mismo que estar recuperado. La fuerza y el equilibrio suelen tardar semanas más que el dolor.'] },
        { heading: '¿Por qué el tobillo se sigue torciendo después de un esguince?', paragraphs: ['Un esguince afecta los pequeños sensores de los ligamentos que le dicen a tu cerebro dónde está tu pie. Si no se reentrenan, el tobillo reacciona un poco más lento y se tuerce con más facilidad. El trabajo de equilibrio, los saltos y el fortalecimiento de pantorrilla cierran esa brecha.'] },
        { heading: '¿Cuándo debo revisarlo?', paragraphs: ['Ve al médico de inmediato si no puedes dar cuatro pasos o si te duelen los huesos del tobillo al tocarlos después de una caída, porque puede ser una fractura. Si no, agenda una evaluación de terapia física si el tobillo no mejora claramente después de una semana o sigue fallando.'] },
      ],
    },
  },
  {
    slug: 'running-with-knee-pain',
    date: '2026-10-06',
    reviewer: 'leslie',
    minutes: 5,
    image: '/images/library/knee-pain.webp',
    conditions: ['knee-pain', 'sports-injuries'],
    title: {
      en: 'Should you keep running with knee pain?',
      es: '¿Deberías seguir corriendo con dolor de rodilla?',
    },
    description: {
      en: 'A simple way to decide whether to keep running, cut back or stop, and what usually fixes runner\'s knee.',
      es: 'Una forma sencilla de decidir si sigues corriendo, reduces o paras, y qué suele resolver la rodilla del corredor.',
    },
    takeaways: {
      en: ['Mild pain that settles by the next morning is usually okay to run through.', 'Pain that changes how you run, or builds during a run, means cut back.', 'Strengthening the hips and quads is the most reliable fix for runner\'s knee.'],
      es: ['Un dolor leve que se quita a la mañana siguiente normalmente permite seguir corriendo.', 'Si el dolor cambia tu forma de correr o aumenta durante la carrera, hay que reducir.', 'Fortalecer cadera y cuádriceps es la solución más confiable para la rodilla del corredor.'],
    },
    sections: {
      en: [
        { heading: 'Is some pain okay?', paragraphs: ['Often, yes. A useful rule: if pain stays at a low level during the run (around 3 out of 10 or less) and is back to normal by the next morning, running is unlikely to be making things worse.'] },
        { heading: 'When should I cut back?', paragraphs: ['Reduce distance or speed if pain climbs as you run, makes you change your stride, or is worse the next day. Cutting back for a week or two is usually enough to let things calm down while you start strengthening.'] },
        { heading: 'What usually causes runner\'s knee?', paragraphs: ['Pain around the kneecap is most often a load problem: the knee is being asked to handle more than it is currently ready for. Sudden jumps in mileage, lots of downhill running and weak hips or quads are common reasons.'] },
        { heading: 'What helps it get better?', paragraphs: ['Progressive strength work for the hips, quads and calves, a short-term change in training volume, and sometimes small changes to cadence. A running analysis can show whether your form is adding load to the knee.'] },
        { heading: 'When should I stop and get it checked?', paragraphs: ['Stop and get an evaluation if the knee swells, locks, gives way, or if you cannot put weight on it. Those signs point to more than an overload problem.'] },
      ],
      es: [
        { heading: '¿Está bien sentir algo de dolor?', paragraphs: ['Muchas veces sí. Una regla útil: si el dolor se mantiene bajo durante la carrera (alrededor de 3 de 10 o menos) y vuelve a la normalidad a la mañana siguiente, es poco probable que correr lo esté empeorando.'] },
        { heading: '¿Cuándo debo reducir?', paragraphs: ['Reduce la distancia o la velocidad si el dolor aumenta mientras corres, te hace cambiar la zancada o está peor al día siguiente. Reducir una o dos semanas suele bastar para que se calme mientras empiezas a fortalecer.'] },
        { heading: '¿Qué causa la rodilla del corredor?', paragraphs: ['El dolor alrededor de la rótula casi siempre es un problema de carga: a la rodilla se le pide más de lo que está lista para soportar. Aumentos bruscos de kilometraje, mucha bajada y cadera o cuádriceps débiles son causas comunes.'] },
        { heading: '¿Qué ayuda a mejorar?', paragraphs: ['Fortalecimiento progresivo de cadera, cuádriceps y pantorrillas, un cambio temporal en el volumen de entrenamiento y, a veces, pequeños ajustes en la cadencia. Un análisis de carrera puede mostrar si tu técnica está cargando la rodilla.'] },
        { heading: '¿Cuándo debo parar y revisarlo?', paragraphs: ['Detente y busca una evaluación si la rodilla se inflama, se bloquea, falla o no puedes apoyar peso. Esas señales indican algo más que sobrecarga.'] },
      ],
    },
  },
  {
    slug: 'desk-job-back-pain',
    date: '2026-10-20',
    reviewer: 'sandra',
    minutes: 4,
    image: '/images/conditions/back-pain.webp',
    conditions: ['back-pain-sciatica', 'neck-pain-headaches'],
    title: {
      en: 'Why does my back hurt after sitting all day?',
      es: '¿Por qué me duele la espalda después de estar sentado todo el día?',
    },
    description: {
      en: 'Why long stretches of sitting make your back and neck ache, and five habits that make a difference.',
      es: 'Por qué pasar mucho tiempo sentado causa dolor de espalda y cuello, y cinco hábitos que ayudan.',
    },
    takeaways: {
      en: ['There is no single perfect posture; changing position often matters most.', 'Short movement breaks every 30 to 45 minutes help more than one long workout.', 'Hip and trunk strength make long days easier on your back.'],
      es: ['No existe una postura perfecta; cambiar de posición seguido es lo que más importa.', 'Pausas cortas de movimiento cada 30 a 45 minutos ayudan más que un solo entrenamiento largo.', 'La fuerza de cadera y tronco hace que los días largos sean más fáciles para tu espalda.'],
    },
    sections: {
      en: [
        { heading: 'Is bad posture the problem?', paragraphs: ['Less than most people think. Bodies tolerate many postures well; what they dislike is staying in any one of them for hours. Stiffness builds when joints and muscles stay still too long.'] },
        { heading: 'What habits actually help?', paragraphs: ['Stand up or walk for a minute every 30 to 45 minutes. Set your screen at eye level. Keep your feet supported. Alternate sitting and standing if you can. And build strength in your hips and trunk two or three times a week.'] },
        { heading: 'Does a standing desk fix it?', paragraphs: ['It can help by giving you another position, but standing all day causes its own aches. The goal is variety, not swapping one fixed position for another.'] },
        { heading: 'When is it worth seeing a physical therapist?', paragraphs: ['If back or neck pain lasts more than a couple of weeks, keeps coming back, or starts traveling into an arm or leg, an evaluation can find what is driving it and give you a plan that fits your workday.'] },
      ],
      es: [
        { heading: '¿El problema es la mala postura?', paragraphs: ['Menos de lo que se cree. El cuerpo tolera bien muchas posturas; lo que no le gusta es quedarse en una sola por horas. La rigidez aparece cuando articulaciones y músculos se quedan quietos demasiado tiempo.'] },
        { heading: '¿Qué hábitos ayudan de verdad?', paragraphs: ['Levántate o camina un minuto cada 30 a 45 minutos. Pon la pantalla a la altura de los ojos. Mantén los pies apoyados. Alterna entre sentado y de pie si puedes. Y fortalece cadera y tronco dos o tres veces por semana.'] },
        { heading: '¿Un escritorio de pie lo resuelve?', paragraphs: ['Puede ayudar porque te da otra posición, pero estar de pie todo el día causa sus propias molestias. La meta es variar, no cambiar una posición fija por otra.'] },
        { heading: '¿Cuándo vale la pena ver a un fisioterapeuta?', paragraphs: ['Si el dolor de espalda o cuello dura más de un par de semanas, regresa con frecuencia o empieza a bajar a un brazo o pierna, una evaluación puede encontrar la causa y darte un plan que se adapte a tu jornada.'] },
      ],
    },
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
