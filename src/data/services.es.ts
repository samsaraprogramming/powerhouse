// Spanish versions of the visitor-facing fields in services.ts, keyed by slug.
// Same shape and HTML rules; icons, images and step numbers come from the English entry.

export const servicesEs: Record<string, {
  metaTitle: string;
  metaDescription: string;
  heroAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  conditionsHeading: string;
  conditions: string[];
  detailsHeading: string;
  details: { title: string; text: string }[];
  processHeading: string;
  steps: { title: string; text: string }[];
  ctaHeading: string;
  ctaSubtext: string;
}> = {
  'orthopedic-pt': {
    metaTitle: 'Terapia física ortopédica en Laredo, TX | Powerhouse PT',
    metaDescription: 'Terapia física ortopédica en Laredo, Texas. Tratamos dolor articular, lesiones musculares y dolor de nervio con planes personalizados para que vuelvas a hacer lo que te gusta.',
    heroAlt: 'Fisioterapeuta realizando un tratamiento ortopédico a un paciente',
    heroTitle: 'Terapia física ortopédica',
    heroSubtitle: 'Atención enfocada para el dolor de articulaciones, músculos y nervios, para que vuelvas a moverte y sentirte bien',
    intro: 'En Powerhouse PT, nuestro programa de terapia física ortopédica va más allá de tratar síntomas. Buscamos la causa de tu dolor, ya sea una lesión de espalda que no se quita, una rodilla rígida o un hombro que no coopera, y creamos un plan para que vuelvas a moverte con confianza. Desde Laredo, Texas, atendemos pacientes de todas las edades y niveles de actividad que están listos para dejar de aguantar el dolor y empezar a vivir sin él.',
    conditionsHeading: 'Condiciones que <span>tratamos</span>',
    conditions: [
      'Dolor de espalda baja y ciática',
      'Dolor de cuello y disfunción cervical',
      'Dolor de rodilla, lesiones de LCA y menisco',
      'Pinzamiento de hombro y rupturas del manguito rotador',
      'Dolor de cadera y lesiones del labrum',
      'Esguinces e inestabilidad de tobillo',
      'Rehabilitación postquirúrgica',
      'Tendinitis y lesiones por sobreuso',
      'Dolor de nervio y radiculopatía',
      'Distensiones musculares y esguinces de ligamentos',
      'Artritis y rigidez articular',
      'Fascitis plantar y dolor de pie',
    ],
    detailsHeading: 'Cómo te <span>ayudamos</span>',
    details: [
      { title: 'Evaluación completa', text: 'Cada plan empieza con una evaluación de tu movimiento, fuerza, flexibilidad y patrones de dolor, para entender exactamente qué está causando tu condición.' },
      { title: 'Terapia manual', text: 'Técnicas manuales como movilización articular, trabajo de tejidos blandos y liberación miofascial para recuperar movilidad, reducir el dolor y acelerar tu recuperación.' },
      { title: 'Ejercicio personalizado', text: 'Ejercicios de fortalecimiento y corrección diseñados para tus necesidades específicas, no un protocolo genérico. Avanzamos de forma progresiva para que los resultados duren.' },
      { title: 'Reeducación del movimiento', text: 'Identificamos los patrones de movimiento que contribuyen a tu dolor y te enseñamos a moverte de forma segura y eficiente, reduciendo el riesgo de volver a lesionarte.' },
      { title: 'Seguimiento del progreso', text: 'Reevaluamos y ajustamos tu tratamiento constantemente para que siempre avances, en lugar de seguir con un plan que dejó de funcionar hace semanas.' },
      { title: 'Educación al paciente', text: 'Entender tu condición es una parte importante de la recuperación. Te explicamos qué pasa en tu cuerpo y qué puedes hacer para apoyar tu propia sanación.' },
    ],
    processHeading: 'Qué <span>esperar</span>',
    steps: [
      { title: 'Llamada gratuita', text: 'Empezamos con una llamada breve para conocer tu dolor, tus metas y si somos la opción correcta para ti, sin presión y sin compromiso.' },
      { title: 'Evaluación inicial completa', text: 'Tu primera visita es a fondo. Evaluamos tu movimiento, postura, fuerza y dolor para tener un panorama clínico completo antes de diseñar tu plan.' },
      { title: 'Empieza el tratamiento', text: 'Comenzamos de inmediato con terapia manual y ejercicios específicos. La mayoría de los pacientes nota la diferencia en las primeras sesiones.' },
      { title: 'Rehabilitación progresiva', text: 'Conforme mejoras, tu programa evoluciona: aumentamos el reto y construimos la fuerza y calidad de movimiento que necesitas para mantenerte sin dolor a largo plazo.' },
    ],
    ctaHeading: '¿Listo para dejar atrás el dolor?',
    ctaSubtext: 'Nuestro equipo de terapia física en Laredo está listo para ayudarte a encontrar un alivio duradero. Agenda hoy una llamada gratuita y da el primer paso para moverte mejor.',
  },
  'sports-performance': {
    metaTitle: 'Rendimiento deportivo y prevención de lesiones en Laredo, TX | Powerhouse PT',
    metaDescription: 'Entrenamiento de rendimiento deportivo y prevención de lesiones en Laredo, Texas. Ayudamos a atletas de todas las edades a moverse mejor, ganar fuerza y mantenerse sin lesiones toda la temporada.',
    heroAlt: 'Atleta entrenando para mejorar su rendimiento deportivo',
    heroTitle: 'Rendimiento y prevención de lesiones deportivas',
    heroSubtitle: 'Entrena mejor, muévete mejor y mantente en el juego toda la temporada',
    intro: 'Ya seas atleta de fin de semana, deportista competitivo de preparatoria o profesional con experiencia, tu cuerpo merece más que atención después de lesionarte. En Powerhouse PT en Laredo, Texas, nuestro programa de rendimiento y prevención de lesiones parte de una idea sencilla: la mejor lesión es la que nunca ocurre. Combinamos ciencia del movimiento, entrenamiento de fuerza y experiencia en terapia física para ayudar a atletas de todos los niveles a rendir al máximo y seguir rindiendo.',
    conditionsHeading: 'Para <span>quién</span> es',
    conditions: [
      'Atletas de preparatoria y universidad',
      'Corredores y atletas de resistencia',
      'Atletas de lanzamiento (béisbol, tenis, natación)',
      'Jugadores de fútbol, básquetbol y fútbol americano',
      'Levantadores de pesas y atletas de CrossFit',
      'Atletas de deportes de combate y artes marciales',
      'Atletas que regresan de una lesión',
      'Atletas que quieren moverse con más eficiencia',
      'Padres que quieren proteger a sus hijos deportistas',
      'Adultos activos que quieren mantener un estilo de vida atlético',
      'Preparación de pretemporada y mantenimiento en temporada',
      'Desarrollo de rendimiento fuera de temporada',
    ],
    detailsHeading: 'Lo que <span>ofrecemos</span>',
    details: [
      { title: 'Evaluación del movimiento', text: 'Hacemos una evaluación completa del movimiento para detectar compensaciones, desequilibrios musculares y limitaciones de movilidad que aumentan tu riesgo de lesión antes de que se conviertan en un problema.' },
      { title: 'Acondicionamiento específico', text: 'Tu entrenamiento se basa en las exigencias de tu deporte (potencia, velocidad, agilidad, resistencia) para que desarrolles justo las cualidades que se traducen en mejor rendimiento.' },
      { title: 'Programas de prevención', text: 'Diseñamos protocolos basados en evidencia para fortalecer las articulaciones, tejidos y patrones de movimiento más vulnerables en tu deporte, reduciendo el riesgo de lesiones de LCA, de hombro y fracturas por estrés.' },
      { title: 'Fuerza y potencia', text: 'Nuestro equipo incluye entrenadores certificados por USA Weightlifting. Integramos principios correctos de fuerza y potencia para que construyas un cuerpo que rinda más, de forma segura.' },
      { title: 'Regreso al deporte', text: '¿Vienes de una lesión? Te guiamos con una progresión estructurada y pruebas objetivas para que regreses completamente preparado, no solo sin dolor.' },
      { title: 'Educación para el rendimiento', text: 'Enseñamos a los atletas a entrenar, recuperarse y cuidar su cuerpo entre sesiones, porque lo que haces fuera de la terapia importa tanto como lo que pasa dentro.' },
    ],
    processHeading: 'Qué <span>esperar</span>',
    steps: [
      { title: 'Consulta de rendimiento', text: 'Conocemos tu deporte, tu historial de entrenamiento, tus metas y lesiones previas. Esto nos da el contexto para crear algo que realmente se adapte a tu vida.' },
      { title: 'Evaluación de movimiento y rendimiento', text: 'Una evaluación detallada de cómo te mueves, incluyendo patrones propios de tu deporte, para identificar tus fortalezas, limitaciones y prioridades.' },
      { title: 'Programa personalizado', text: 'Con base en tu evaluación, diseñamos un programa que atiende tus necesidades específicas, no un protocolo genérico sacado de internet.' },
      { title: 'Acompañamiento y progresión', text: 'Trabajamos contigo mientras avanzas, ajustando el programa y subiendo el nivel para que siempre mejores, dentro y fuera de la cancha.' },
    ],
    ctaHeading: 'Lleva tu rendimiento al siguiente nivel',
    ctaSubtext: 'Ya sea para prevenir tu próxima lesión o alcanzar un nuevo nivel de rendimiento, nuestro equipo de terapia deportiva en Laredo está aquí para ayudarte.',
  },
  'running-analysis': {
    metaTitle: 'Análisis de carrera en Laredo, TX | Evaluación de marcha y movimiento | Powerhouse PT',
    metaDescription: 'Análisis profesional de carrera en Laredo, Texas. Evaluamos cómo caminas y corres para detectar ineficiencias, reducir el riesgo de lesión y mejorar tu rendimiento. Agenda una llamada gratuita.',
    heroAlt: 'Evaluación de análisis de carrera en progreso',
    heroTitle: 'Análisis de carrera',
    heroSubtitle: 'Descubre lo que tu forma de caminar o correr nos dice, y corrige lo que te está frenando',
    intro: 'La forma en que te mueves cuenta una historia. Pequeñas ineficiencias al caminar o correr pueden acumularse en dolor, fatiga y lesiones con el tiempo, muchas veces en lugares que nunca relacionarías con tu movimiento. En Powerhouse PT en Laredo, Texas, nuestro análisis de carrera usa una evaluación clínica detallada para revelar exactamente qué pasa en tus patrones de movimiento. Ya seas corredor con dolor de rodilla recurrente, alguien que se recupera de una lesión de pierna o un atleta que busca su mejor marca, el análisis nos da la información para crear un plan que atienda la causa.',
    conditionsHeading: 'Quién se beneficia del <span>análisis de carrera</span>',
    conditions: [
      'Corredores con dolor recurrente de rodilla, cadera o pie',
      'Atletas que regresan de lesiones de pierna',
      'Personas con dolor crónico de espalda baja',
      'Pacientes que se recuperan de esguinces de tobillo',
      'Personas con desgaste anormal del calzado',
      'Adultos mayores con problemas de equilibrio',
      'Pacientes en rehabilitación postquirúrgica (cadera, rodilla, tobillo)',
      'Corredores que buscan más eficiencia y velocidad',
      'Atletas con fracturas por estrés o periostitis tibial',
      'Cualquier persona con dolor de pierna o pie sin explicación',
      'Pacientes con condiciones neurológicas que afectan la marcha',
      'Triatletas y atletas de resistencia',
    ],
    detailsHeading: 'Lo que <span>evaluamos</span>',
    details: [
      { title: 'Patrón de marcha', text: 'Evaluamos la longitud del paso, la simetría, el apoyo del pie y la mecánica general al caminar para detectar ineficiencias y compensaciones que contribuyen al dolor o la fatiga.' },
      { title: 'Técnica de carrera', text: 'Para corredores, analizamos tu técnica a distintas velocidades: cadencia, tiempo de contacto con el suelo, oscilación vertical y cómo trabajan juntos pie, rodilla y cadera en cada zancada.' },
      { title: 'Simetría y compensaciones', text: 'Comparamos diferencias entre un lado y otro en fuerza, movilidad y movimiento para detectar compensaciones que suelen aparecer después de una lesión y causan problemas futuros.' },
      { title: 'Mecánica de pie y tobillo', text: 'La pronación o supinación excesivas y el pie caído son causas comunes de dolor de rodilla, cadera y espalda. Evaluamos cómo tus pies interactúan con el suelo y cómo eso afecta toda la cadena.' },
      { title: 'Estabilidad de cadera y tronco', text: 'Una cadera débil y un tronco inestable son dos de las causas más comunes de una marcha ineficiente. Evaluamos qué tan bien te sostienen tus estabilizadores.' },
      { title: 'Plan de corrección personalizado', text: 'Después de la evaluación te damos un plan específico, con ejercicios correctivos, terapia manual, indicaciones de técnica y ajustes al entrenamiento.' },
    ],
    processHeading: 'Qué <span>esperar</span>',
    steps: [
      { title: 'Historial y metas', text: 'Conocemos tu historial de dolor, tu experiencia deportiva y tus metas. Ya sea correr un medio maratón o caminar sin dolor, tu objetivo define toda la evaluación.' },
      { title: 'Evaluación estática y dinámica', text: 'Empezamos con una evaluación de postura y flexibilidad, y luego observamos cómo caminas y/o corres en condiciones clínicas.' },
      { title: 'Resultados y educación', text: 'Te explicamos exactamente qué encontramos: dónde están tus compensaciones, por qué aparecieron y cómo se relacionan con tus síntomas.' },
      { title: 'Plan de tratamiento', text: 'Creamos un plan para corregir tus déficits de movimiento con terapia manual, ejercicio correctivo y reentrenamiento del movimiento.' },
    ],
    ctaHeading: 'Descubre lo que tu movimiento te está diciendo',
    ctaSubtext: 'Un análisis de carrera en Powerhouse PT en Laredo, TX puede ser la pieza que le falta a tu recuperación o a tu rendimiento. Empieza con una llamada gratuita.',
  },
  'dry-needling': {
    metaTitle: 'Punción seca en Laredo, TX | Terapia de puntos gatillo | Powerhouse PT',
    metaDescription: 'Punción seca certificada en Laredo, Texas. Tratamos puntos gatillo y bandas musculares tensas para aliviar el dolor crónico, acelerar la recuperación y restaurar la función muscular.',
    heroAlt: 'Tratamiento de punción seca',
    heroTitle: 'Punción seca',
    heroSubtitle: 'Libera la tensión muscular persistente, reduce el dolor crónico y acelera tu recuperación',
    intro: 'La punción seca es una de las herramientas más efectivas para llegar a disfunciones musculares profundas que la terapia manual sola no siempre alcanza. En Powerhouse PT en Laredo, Texas, nuestros proveedores certificados usan agujas finas y estériles para tratar puntos gatillo: esos nudos sensibles en el músculo que causan dolor, limitan el movimiento y no responden a tratamientos convencionales. Cuando la aguja llega a un punto gatillo activo, provoca una respuesta de contracción local que relaja el músculo y activa la respuesta natural de sanación de tu cuerpo. El resultado suele ser un alivio más rápido y profundo que con estiramientos o masaje solamente.',
    conditionsHeading: 'Condiciones que <span>tratamos</span>',
    conditions: [
      'Tensión crónica de cuello y espalda alta',
      'Dolor de espalda baja y espasmos',
      'Dolor de hombro y del manguito rotador',
      'Codo de tenista y codo de golfista',
      'Tensión en flexores de cadera y banda iliotibial',
      'Dolor de rodilla y tendinopatía rotuliana',
      'Tensión de pantorrilla y problemas del tendón de Aquiles',
      'Fascitis plantar',
      'Dolores de cabeza y tensión de mandíbula (ATM)',
      'Distensiones musculares deportivas',
      'Tejido cicatricial y rigidez muscular después de cirugía',
      'Fibromialgia y dolor miofascial generalizado',
    ],
    detailsHeading: 'Cómo <span>funciona</span>',
    details: [
      { title: 'Liberación de puntos gatillo', text: 'Se inserta una aguja fina y estéril en la banda muscular tensa. La contracción local que sientes es el músculo relajándose y soltando la tensión que causaba tu dolor.' },
      { title: 'Mejor circulación', text: 'La aguja estimula el flujo de sangre hacia la zona tratada, llevando oxígeno y nutrientes necesarios para reparar el tejido.' },
      { title: 'Liberación de endorfinas', text: 'La punción seca activa el sistema de control del dolor de tu cuerpo, liberando endorfinas y serotonina para un alivio natural que dura más allá de la sesión.' },
      { title: 'Recuperación de la función muscular', text: 'Al desactivar puntos gatillo, recuperamos la longitud y activación normal del músculo, permitiendo que los músculos cercanos trabajen bien y reduciendo la tensión que lleva a nuevas lesiones.' },
      { title: 'Recuperación deportiva más rápida', text: 'Los atletas usan la punción seca para recuperarse más rápido entre entrenamientos, reducir el dolor muscular tardío y atender tensiones crónicas que limitan su rendimiento.' },
      { title: 'Combinada con terapia manual', text: 'La punción seca funciona mejor como parte de un plan más amplio. La integramos con terapia manual y ejercicio para que lo que logras en la clínica se mantenga en tu día a día.' },
    ],
    processHeading: 'Qué <span>esperar</span>',
    steps: [
      { title: 'Evaluación clínica', text: 'Antes de usar agujas evaluamos tu condición para confirmar que la punción seca es apropiada e identificar los músculos y puntos gatillo a tratar.' },
      { title: 'El procedimiento', text: 'Se insertan agujas finas y estériles en los músculos objetivo. La mayoría siente una contracción breve seguida de alivio de la tensión. Suele tolerarse bien y las sesiones duran de 20 a 40 minutos.' },
      { title: 'Después del tratamiento', text: 'Es normal sentir algo de dolor muscular de 24 a 48 horas, parecido al de después de hacer ejercicio. Desaparece rápido y la mayoría nota alivio en 1 a 3 sesiones.' },
      { title: 'Plan de ejercicio', text: 'Después de la punción te damos ejercicios específicos para reforzar lo logrado y evitar que los puntos gatillo regresen.' },
    ],
    ctaHeading: '¿Listo para soltar esa tensión?',
    ctaSubtext: 'Nuestros proveedores certificados de punción seca en Powerhouse PT en Laredo, TX están listos para ayudarte a superar el dolor y la tensión crónica. Agenda una llamada gratuita.',
  },
  cupping: {
    metaTitle: 'Terapia con ventosas en Laredo, TX | Recuperación muscular y alivio del dolor | Powerhouse PT',
    metaDescription: 'Terapia profesional con ventosas en Laredo, Texas. Usamos ventosas para mejorar la circulación, reducir la tensión muscular y acelerar la recuperación de lesiones o entrenamientos intensos.',
    heroAlt: 'Sesión de terapia con ventosas en Powerhouse PT',
    heroTitle: 'Terapia con ventosas',
    heroSubtitle: 'Libera la tensión de los tejidos profundos, mejora la circulación y acelera la sanación natural de tu cuerpo',
    intro: 'Mientras la mayoría de las técnicas manuales presionan el tejido, las ventosas funcionan al revés: levantan. Al crear succión sobre la piel y la fascia, las ventosas descomprimen capas de tejido que suelen quedar pegadas por lesiones, sobreuso o tensión crónica. En Powerhouse PT en Laredo, Texas, usamos las ventosas como herramienta clínica dentro de tu plan de tratamiento, no como un servicio de spa aislado. El resultado es menos dolor muscular, mejor movilidad del tejido, mejor circulación y una recuperación más rápida.',
    conditionsHeading: 'Quién se beneficia de las <span>ventosas</span>',
    conditions: [
      'Atletas con tensión muscular crónica',
      'Dolor muscular tardío después del ejercicio',
      'Tensión en espalda alta, cuello y hombros',
      'Rigidez y espasmos en la espalda baja',
      'Tensión de banda iliotibial y cuádriceps en corredores',
      'Restricciones en flexores de cadera y piriforme',
      'Tejido cicatricial por cirugías o lesiones',
      'Fascitis plantar y tensión de pantorrilla',
      'Poca movilidad en la columna torácica',
      'Restricciones fasciales que limitan el movimiento',
      'Recuperación entre entrenamientos intensos',
      'Tensión postural por trabajo de escritorio o con los brazos arriba',
    ],
    detailsHeading: 'Cómo funcionan las <span>ventosas</span>',
    details: [
      { title: 'Descompresión miofascial', text: 'La succión levanta la piel y la fascia, separando capas que se han quedado pegadas o restringidas y recuperando el deslizamiento entre ellas.' },
      { title: 'Más flujo sanguíneo', text: 'Las ventosas atraen sangre a la zona tratada, llevando oxígeno y nutrientes y ayudando a eliminar desechos que se acumulan por entrenamiento intenso o inactividad.' },
      { title: 'Tejido cicatricial', text: 'Las lesiones crónicas y cirugías pueden dejar tejido cicatricial denso que limita el movimiento. Las ventosas generan fuerzas que ayudan a soltar adherencias y recuperar elasticidad.' },
      { title: 'Menos inflamación', text: 'Al favorecer el drenaje linfático y la circulación local, las ventosas ayudan a reducir la inflamación en músculos tensos y tejidos lesionados.' },
      { title: 'Más rango de movimiento', text: 'Las ventosas dinámicas, que se deslizan sobre la piel con succión, dan un estiramiento profundo a capas fasciales que el estiramiento tradicional no siempre alcanza.' },
      { title: 'Integradas a tu tratamiento', text: 'No usamos las ventosas de forma aislada. Son parte de un plan completo junto con terapia manual, ejercicio y educación para resultados duraderos.' },
    ],
    processHeading: 'Qué <span>esperar</span>',
    steps: [
      { title: 'Evaluación y plan', text: 'Identificamos las zonas de restricción, tensión o lesión que más se beneficiarán de las ventosas dentro de tu plan general.' },
      { title: 'La sesión', text: 'Las ventosas se colocan en las zonas objetivo por varios minutos. Sentirás un jalón firme pero cómodo, y podemos deslizarlas sobre la piel para un efecto dinámico.' },
      { title: 'Marcas después del tratamiento', text: 'Las marcas circulares no son moretones; son sangre que sube a la superficie de la piel. Suelen desaparecer en 3 a 7 días.' },
      { title: 'Seguimiento', text: 'Después de las ventosas hacemos trabajo de movilidad o ejercicio para que tu cuerpo conserve el mayor rango de movimiento y la menor tensión.' },
    ],
    ctaHeading: 'Vive una recuperación más profunda',
    ctaSubtext: 'Ya seas atleta buscando recuperarte más rápido o paciente con tensión crónica, la terapia con ventosas en Powerhouse PT en Laredo, TX puede hacer la diferencia. Agenda una llamada gratuita.',
  },
  'blood-flow-restriction': {
    metaTitle: "Entrenamiento con restricción del flujo sanguíneo (BFR) en Laredo, TX | Powerhouse PT",
    metaDescription: "Entrenamiento con restricción del flujo sanguíneo (BFR) en Laredo, Texas. Gana fuerza con pesos ligeros después de una cirugía o lesión, con supervisión de doctores en terapia física.",
    heroAlt: "Fisioterapeuta guiando a un paciente en ejercicios de fortalecimiento",
    heroTitle: "Entrenamiento con restricción del flujo sanguíneo (BFR)",
    heroSubtitle: "Gana fuerza real con pesos ligeros, aunque tu cuerpo todavía no tolere cargas pesadas",
    intro: "El entrenamiento con restricción del flujo sanguíneo (BFR, por sus siglas en inglés) usa un brazalete, parecido al de la presión arterial, en la parte alta del brazo o del muslo. El brazalete reduce en parte la salida de sangre del músculo mientras haces ejercicio. Así, pesos ligeros, a menudo una fracción de lo que normalmente levantarías, generan ganancias de fuerza y músculo que normalmente solo se logran con cargas pesadas. En Powerhouse PT en Laredo, Texas, usamos BFR cuando todavía no es seguro o cómodo cargar peso pesado: después de una cirugía, durante la recuperación de una lesión o con dolor articular. Cada sesión la prepara y supervisa un doctor en terapia física, con la presión del brazalete ajustada para ti.",
    conditionsHeading: "Quién se beneficia del <span>BFR</span>",
    conditions: [
      "Recuperación después de cirugía de LCA, menisco o reemplazo de rodilla",
      "Pérdida muscular después de usar férula, bota o muletas",
      "Dolor de rodilla que hace incómodo levantar peso pesado",
      "Problemas del tendón de Aquiles o rotuliano",
      "Rehabilitación de hombro después de cirugía o lesión",
      "Lesiones de tobillo y pie con apoyo limitado",
      "Atletas que quieren mantenerse fuertes mientras sanan",
      "Adultos mayores que ganan fuerza con cargas ligeras",
      "Debilidad de cadera y muslo después de una lesión"
    ],
    detailsHeading: "Cómo funciona el <span>BFR</span>",
    details: [
      {
        "title": "Presión ajustada para ti",
        "text": "Antes de entrenar, encontramos la presión adecuada del brazalete para tu brazo o pierna, para que la restricción sea efectiva pero nunca excesiva."
      },
      {
        "title": "Cargas ligeras, resultados reales",
        "text": "Los ejercicios usan pesos ligeros o solo tu peso corporal. El brazalete hace que el músculo trabaje como si la carga fuera mucho mayor, sin forzar el tejido que está sanando."
      },
      {
        "title": "Revisión de seguridad primero",
        "text": "Revisamos tu historial de salud antes de empezar. El BFR no es para todos, incluidas algunas personas con antecedentes de coágulos, presión arterial no controlada o ciertas condiciones del corazón o la circulación."
      },
      {
        "title": "Parte de tu plan",
        "text": "El BFR es una herramienta dentro de tu rehabilitación, no un reemplazo. Lo combinamos con terapia manual y ejercicio progresivo, y lo retiramos cuando estás listo para cargas más pesadas."
      }
    ],
    processHeading: "Qué <span>esperar</span>",
    steps: [
      {
        "title": "Llamada gratuita",
        "text": "Hablamos de tu lesión o cirugía, tus metas y si el BFR te puede ayudar."
      },
      {
        "title": "Evaluación y revisión",
        "text": "Evaluamos tu fuerza y movimiento y revisamos tu historial de salud para confirmar que el BFR es seguro para ti."
      },
      {
        "title": "Sesiones supervisadas de BFR",
        "text": "Un bloque corto de ejercicio ligero con el brazalete, normalmente unas series con descansos breves. Sentirás un ardor muscular fuerte que se pasa rápido al quitar el brazalete."
      },
      {
        "title": "Avanza hasta tu fuerza completa",
        "text": "A medida que sanas, aumentamos la carga y reducimos el BFR hasta que vuelvas a entrenar normalmente."
      }
    ],
    ctaHeading: "Gana fuerza mientras sanas",
    ctaSubtext: "¿No sabes si el BFR encaja en tu recuperación? Agenda una llamada gratuita con nuestro equipo en Laredo y lo platicamos.",
  },
};
