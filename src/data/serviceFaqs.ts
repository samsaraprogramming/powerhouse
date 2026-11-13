import type { L10n } from '../i18n/ui';

// Questions specific to each service page. General questions (referral, insurance, what to wear,
// "Does dry needling hurt?") live on the FAQ page and are not repeated here. MOCK: written for the
// site, not yet reviewed by the clinic (see MOCK_DATA.md). No visit lengths, visit counts or prices.

/** How each service reads after "Questions about" / "Preguntas sobre" in the section heading. */
export const serviceFaqTopic: Record<string, L10n> = {
  'orthopedic-pt': { en: 'orthopedic physical therapy', es: 'la terapia física ortopédica' },
  'sports-performance': { en: 'sports performance training', es: 'el entrenamiento de rendimiento deportivo' },
  'running-analysis': { en: 'running analysis', es: 'el análisis de carrera' },
  'dry-needling': { en: 'dry needling', es: 'la punción seca' },
  cupping: { en: 'cupping', es: 'las ventosas' },
  'blood-flow-restriction': { en: 'BFR training', es: 'el entrenamiento BFR' },
};

export const serviceFaqs: Record<string, L10n<{ q: string; a: string }[]>> = {
  'orthopedic-pt': {
    en: [
      {
        q: 'Can physical therapy help me avoid surgery?',
        a: 'Often, yes. For many back, knee and shoulder problems, including some meniscus and rotator cuff tears, physical therapy is the recommended first treatment, and many people never need surgery. If you do end up needing an operation, being stronger beforehand usually makes recovery easier.',
      },
      {
        q: 'Should I see an orthopedic surgeon or a physical therapist first?',
        a: 'If you have no red flags such as a recent fall with a deformity, numbness that keeps spreading, or loss of bladder or bowel control, starting with a physical therapist is reasonable. In Texas you can start without a referral. We send you to a doctor if your evaluation shows you need one.',
      },
    ],
    es: [
      {
        q: '¿La terapia física me puede ayudar a evitar una cirugía?',
        a: 'Muchas veces, sí. En muchos problemas de espalda, rodilla y hombro, incluidos algunos desgarres de menisco y del manguito rotador, la terapia física es el primer tratamiento recomendado, y muchas personas nunca necesitan cirugía. Si al final sí necesitas operarte, llegar más fuerte suele hacer más fácil la recuperación.',
      },
      {
        q: '¿Debo ver primero a un cirujano ortopedista o a un fisioterapeuta?',
        a: 'Si no tienes señales de alarma, como una caída reciente con deformidad, entumecimiento que se sigue extendiendo o pérdida del control de la vejiga o el intestino, es razonable empezar con un fisioterapeuta. En Texas puedes empezar sin referencia médica. Si la evaluación muestra que necesitas un médico, te enviamos con uno.',
      },
    ],
  },
  'sports-performance': {
    en: [
      {
        q: 'Do I need to be injured to start?',
        a: 'No. Many athletes come in to find weak spots before they turn into injuries, to get ready for a season, or to return to full training after time off. Injured athletes get the same approach once the injury allows it.',
      },
      {
        q: "Will this replace my team's strength and conditioning?",
        a: "No, it works alongside it. We focus on the movement problems and weak links that raise your injury risk, and give you work that fits around your team's practices and lifts.",
      },
    ],
    es: [
      {
        q: '¿Necesito estar lesionado para empezar?',
        a: 'No. Muchos atletas vienen para detectar puntos débiles antes de que se conviertan en lesiones, para prepararse para una temporada o para volver a entrenar completo después de un tiempo fuera. Los atletas lesionados reciben el mismo enfoque en cuanto la lesión lo permite.',
      },
      {
        q: '¿Esto reemplaza la preparación física de mi equipo?',
        a: 'No, la complementa. Nos enfocamos en los problemas de movimiento y los puntos débiles que aumentan tu riesgo de lesión, y te damos un trabajo que se acomoda a las prácticas y pesas de tu equipo.',
      },
    ],
  },
  'running-analysis': {
    en: [
      {
        q: 'Do I need to be injured to get a running analysis?',
        a: 'No. Runners come in with nagging pain, but also to run more efficiently, to prepare for a race or to come back after time off. Finding a problem in how you run before it hurts is one of the best uses of it.',
      },
      {
        q: 'What should I bring?',
        a: 'Wear or bring the shoes and clothes you usually run in, so we see how you actually run. If you have a training plan or a running app, bring that too.',
      },
    ],
    es: [
      {
        q: '¿Necesito estar lesionado para hacerme un análisis de carrera?',
        a: 'No. Algunos corredores vienen por un dolor que no se quita, pero otros vienen para correr con más eficiencia, prepararse para una carrera o volver después de un tiempo sin correr. Encontrar un problema en tu forma de correr antes de que duela es uno de sus mejores usos.',
      },
      {
        q: '¿Qué debo traer?',
        a: 'Usa o trae los tenis y la ropa con los que normalmente corres, para ver cómo corres en realidad. Si tienes un plan de entrenamiento o una app para correr, tráelos también.',
      },
    ],
  },
  'dry-needling': {
    en: [
      {
        q: 'Is dry needling the same as acupuncture?',
        a: 'No. Both use thin needles, but acupuncture comes from traditional Chinese medicine and follows meridians. Dry needling is based on anatomy: the needle goes into a tight, tender spot in a muscle to release it, and it is used as part of a physical therapy plan with exercise.',
      },
      {
        q: 'Who should not have dry needling?',
        a: "Tell your therapist if you are pregnant, take blood thinners, have a bleeding disorder, a weakened immune system, an infection or skin problem near the area, or a strong fear of needles. In those cases we may change where we needle or use a different treatment.",
      },
    ],
    es: [
      {
        q: '¿La punción seca es lo mismo que la acupuntura?',
        a: 'No. Las dos usan agujas delgadas, pero la acupuntura viene de la medicina tradicional china y sigue meridianos. La punción seca se basa en la anatomía: la aguja entra en un punto tenso y sensible del músculo para liberarlo, y se usa como parte de un plan de terapia física con ejercicio.',
      },
      {
        q: '¿Quién no debe recibir punción seca?',
        a: 'Avísale a tu terapeuta si estás embarazada, tomas anticoagulantes, tienes un trastorno de coagulación, defensas bajas, una infección o problema de la piel cerca de la zona, o mucho miedo a las agujas. En esos casos podemos cambiar dónde aplicamos la punción o usar otro tratamiento.',
      },
    ],
  },
  cupping: {
    en: [
      {
        q: 'Will cupping leave marks?',
        a: 'Usually, yes. Round marks are common and are not bruises from an injury. They are not painful for most people and fade on their own, typically within several days to two weeks.',
      },
      {
        q: 'Is this the same as the cupping I see at a spa?',
        a: 'The tool is similar, but here cupping is one part of a physical therapy plan. We use it on a specific area to help tissue move, often while you move the joint, and follow it with exercise.',
      },
    ],
    es: [
      {
        q: '¿Las ventosas dejan marcas?',
        a: 'Normalmente, sí. Es común que queden marcas redondas, y no son moretones por una lesión. A la mayoría no les duelen y se quitan solas, normalmente entre varios días y dos semanas.',
      },
      {
        q: '¿Es lo mismo que las ventosas de un spa?',
        a: 'La herramienta es parecida, pero aquí las ventosas son una parte de un plan de terapia física. Las usamos en una zona específica para ayudar a que el tejido se mueva, muchas veces mientras mueves la articulación, y después seguimos con ejercicio.',
      },
    ],
  },
  'blood-flow-restriction': {
    en: [
      {
        q: 'Is blood flow restriction training safe?',
        a: 'When it is screened and supervised, research shows it is generally safe. The cuff pressure is set for you, not a one-size setting, and is released between sets. Expect a strong burn in the muscle and some soreness, which is normal.',
      },
      {
        q: 'Who should not use BFR?',
        a: 'BFR is usually not used for people with a history of blood clots, uncontrolled high blood pressure, poor circulation in the arms or legs, or during pregnancy. We ask about your health history before the first session.',
      },
    ],
    es: [
      {
        q: '¿El entrenamiento con restricción del flujo sanguíneo es seguro?',
        a: 'Cuando hay evaluación previa y supervisión, los estudios muestran que en general es seguro. La presión del brazalete se ajusta a ti, no es una medida única, y se libera entre series. Es normal sentir un ardor fuerte en el músculo y algo de dolor muscular.',
      },
      {
        q: '¿Quién no debe usar BFR?',
        a: 'Normalmente no se usa en personas con antecedentes de coágulos, presión alta no controlada, mala circulación en brazos o piernas, ni durante el embarazo. Te preguntamos tu historial de salud antes de la primera sesión.',
      },
    ],
  },
};
