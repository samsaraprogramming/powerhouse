// Spanish versions of the visitor-facing team fields, plus schema details for the Person JSON-LD.
// Same HTML rules as team.ts (paragraphs are rendered with set:html).

export const teamOrder = ['sandra', 'leslie', 'uriel', 'georgina', 'alejandro'];

/** Degrees named in each bio; used for alumniOf in the Person schema. */
export const alumni: Record<string, string[]> = {
  sandra: ['The University of Texas at Austin', 'Texas State University'],
  leslie: ['Texas A&M International University', 'University of Texas Medical Branch'],
  uriel: ['Texas A&M International University', 'University of Texas Medical Branch'],
  georgina: [],
  alejandro: ['The University of Texas at San Antonio'],
};

/** MOCK: Texas license numbers are opt-in and not published yet (see MOCK_DATA.md). */
export const licenses: Record<string, string | null> = {
  sandra: null,
  leslie: null,
  uriel: null,
  georgina: null,
  alejandro: null,
};

export const teamEs: Record<string, {
  metaTitle: string;
  metaDescription: string;
  title: string;
  role: string;
  expertise: string;
  points: string[];
  teaser: string;
  paragraphs: string[];
}> = {
  sandra: {
    metaTitle: 'Dra. Sandra Gomez, PT, DPT — Powerhouse PT',
    metaDescription: 'Conoce a la Dra. Sandra Gomez, PT, DPT, fundadora y dueña de Powerhouse PT en Laredo, Texas. Experta en ortopedia, terapia manual y entrenamiento de fuerza.',
    title: 'Doctora en Terapia Física &mdash; Fundadora y dueña',
    role: 'Doctora en Terapia Física',
    expertise: 'Experiencia en ortopedia, terapia manual y entrenamiento de fuerza',
    points: ['Formación extensa en el Manual Therapy Institute', 'Especialización en rehabilitación de LCA', 'Entrenadora USA Weightlifting Nivel 1'],
    teaser: 'La Dra. Sandra Gomez es originaria de Laredo, donde jugó fútbol, voleibol y atletismo en la preparatoria. Estudió su licenciatura en la Universidad de Texas en Austin y su doctorado en Terapia Física en Texas State University...',
    paragraphs: [
      'La Dra. Sandra Gomez es originaria de Laredo, donde jugó fútbol, voleibol y atletismo durante la preparatoria. Estudió su licenciatura en ciencias en la Universidad de Texas en Austin, donde también jugó en el equipo de fútbol del club. Después obtuvo su doctorado en Terapia Física en Texas State University.',
      'La Dra. Sandra tiene amplia experiencia en entrenamiento con pesas y ha trabajado con atletas universitarios, semiprofesionales y de preparatoria. Se capacita constantemente en terapia manual y su meta principal es unir el rendimiento, el deporte y la educación para que las personas entiendan mejor su cuerpo y logren resultados duraderos.',
      'Le apasionan el ejercicio, la educación y la ciencia del dolor, y quiere dar a sus pacientes la mejor atención con el tratamiento basado en evidencia más actualizado. En su tiempo libre le gusta mantenerse activa entrenando con pesas, hacer senderismo con sus perros y sigue jugando fútbol en ligas de la ciudad.',
    ],
  },
  leslie: {
    metaTitle: 'Dra. Leslie Garcia, PT, DPT — Powerhouse PT',
    metaDescription: 'Conoce a la Dra. Leslie Garcia, PT, DPT, fisioterapeuta en Powerhouse PT en Laredo, Texas. Especialista en condiciones ortopédicas y neurológicas.',
    title: 'Doctora en Terapia Física',
    role: 'Doctora en Terapia Física',
    expertise: 'Experiencia en ortopedia, condiciones neurológicas, terapia manual y entrenamiento de fuerza',
    points: ['Proveedora certificada de punción seca', 'Entrenadora USA Weightlifting Nivel 1', 'Formación extensa en condiciones neurológicas'],
    teaser: 'Orgullosamente laredense, la Dra. Leslie Garcia tiene una pasión de toda la vida por la salud, el movimiento y el servicio a la comunidad. Estudió Biología en Texas A&M International University, donde también fue instructora de acondicionamiento y entrenadora personal...',
    paragraphs: [
      'Orgullosamente laredense, la Dra. Leslie Garcia tiene una pasión de toda la vida por la salud, el movimiento y el servicio a la comunidad. Obtuvo su licenciatura en Biología en Texas A&amp;M International University, donde también trabajó como instructora de acondicionamiento y entrenadora personal, ganando experiencia práctica mientras estudiaba.',
      'Su interés por el movimiento empezó temprano: practicó Aikido durante ocho años en la preparatoria y la universidad, lo que formó su comprensión del control corporal y la función.',
      'Después obtuvo su doctorado en Terapia Física en la University of Texas Medical Branch en Galveston, donde construyó una base sólida en rehabilitación y ciencias del movimiento. A lo largo de su carrera ha trabajado con pacientes de todas las edades, desde niños hasta adultos mayores, adaptando su enfoque a las necesidades de cada persona.',
      'A la Dra. Leslie le apasiona integrar su experiencia en acondicionamiento con la rehabilitación basada en evidencia, ayudando a sus pacientes no solo a recuperarse sino a estar mejor a largo plazo. Se especializa en condiciones ortopédicas y neurológicas, con una atención integral basada en el movimiento y la educación.',
    ],
  },
  uriel: {
    metaTitle: 'Dr. Uriel Garza, PT, DPT — Powerhouse PT',
    metaDescription: 'Conoce al Dr. Uriel Garza, PT, DPT, fisioterapeuta en Powerhouse PT en Laredo, Texas. Con experiencia en rehabilitación ortopédica y postquirúrgica, ejercicio y fuerza.',
    title: 'Doctor en Terapia Física',
    role: 'Doctor en Terapia Física',
    expertise: 'Experiencia en ortopedia, rehabilitación postquirúrgica y entrenamiento de fuerza',
    points: ['Doctorado en Terapia Física — UTMB', 'Licenciatura en Biología — TAMIU', 'Experiencia en condiciones ortopédicas y postquirúrgicas', 'Sólida formación en ejercicio, fuerza y movimiento'],
    teaser: 'El Dr. Uriel Garza es Doctor en Terapia Física con pasión por el movimiento, la salud y ayudar a las personas a ser su mejor versión. Jugar básquetbol y fútbol americano despertó su interés por el rendimiento y la biomecánica...',
    paragraphs: [
      'El Dr. Uriel Garza es Doctor en Terapia Física con pasión por el movimiento, la salud y ayudar a las personas a ser su mejor versión. Egresado de United High School, obtuvo su licenciatura en Biología en Texas A&amp;M International University y su doctorado en Terapia Física en la University of Texas Medical Branch.',
      'Para Uriel, el camino a la terapia física empezó con algo que siempre ha sido parte de su vida: el deporte y mantenerse activo. Jugar básquetbol y fútbol americano despertó su interés por el rendimiento, el movimiento y, con el tiempo, por la anatomía y biomecánica del cuerpo.',
      'Hoy ese mismo interés guía su forma de trabajar. Uriel cree que una buena atención va más allá de tratar una lesión o un diagnóstico: se toma el tiempo de conocer a cada paciente, explicarle lo que pasa en su cuerpo y crear un plan individual que lo haga sentirse más fuerte y seguro al moverse.',
      'Tiene experiencia tratando condiciones ortopédicas y postquirúrgicas, y disfruta trabajar con todo tipo de pacientes, desde quienes se recuperan de una cirugía o lesión hasta personas activas y atletas de fin de semana que quieren volver a lo que les gusta.',
      'Fuera de la clínica, Uriel se mantiene activo levantando pesas y corriendo. También disfruta viajar por México, especialmente a Sabinas Hidalgo, Nuevo Le&oacute;n, donde pasa tiempo en el rancho con familia y amigos. Le apasiona servir a la comunidad de Laredo y ayudar a sus pacientes a moverse mejor, sentirse mejor y volver a lo que aman.',
    ],
  },
  georgina: {
    metaTitle: 'Georgina Morales, PTA — Powerhouse PT',
    metaDescription: 'Conoce a Georgina Morales, PTA, asistente de terapia física en Powerhouse PT en Laredo, Texas. Especialista en condiciones ortopédicas y neurológicas.',
    title: 'Asistente de Terapia Física',
    role: 'Asistente de Terapia Física',
    expertise: 'Experiencia en ortopedia, condiciones neurológicas, terapia manual y entrenamiento de fuerza',
    points: ['Proveedora certificada de punción seca', 'Entrenadora USA Weightlifting Nivel 1', 'Formación extensa en condiciones neurológicas'],
    teaser: 'Georgina aporta una sólida trayectoria atlética, formación avanzada y una pasión genuina por ayudar a sus pacientes. Ha sido atleta toda su vida y ha jugado voleibol por 17 años, compitiendo todavía hoy...',
    paragraphs: [
      'Georgina aporta una sólida trayectoria atlética, formación avanzada y una pasión genuina por ayudar a sus pacientes a moverse y sentirse mejor.',
      'Georgina ha sido atleta toda su vida. Ha jugado voleibol por 17 años y lo que más destaca es que todavía juega de forma activa y competitiva, llevando esa misma energía y disciplina a su trabajo. También entrena levantamiento de pesas y carrera, comprometida con su propia salud y rendimiento.',
      'En la clínica tiene años de experiencia tratando condiciones ortopédicas y neurológicas. Ayuda a sus pacientes a mejorar fuerza, movilidad, coordinación, equilibrio y función general con un enfoque individual basado en el movimiento, influido por su experiencia en voleibol, básquetbol, atletismo, lanzamiento de bala y disco.',
      'Georgina valora la educación continua y planea estudiar su Doctorado en Terapia Física (DPT) en el futuro cercano, para seguir creciendo como proveedora para la comunidad de Laredo.',
    ],
  },
  alejandro: {
    metaTitle: 'Alejandro Morales, PTA — Powerhouse PT',
    metaDescription: 'Conoce a Alejandro Morales, PTA, asistente de terapia física en Powerhouse PT en Laredo, Texas. Enfocado en movimiento funcional y rehabilitación ortopédica.',
    title: 'Asistente de Terapia Física',
    role: 'Asistente de Terapia Física',
    expertise: 'Enfoque en movimiento funcional, rehabilitación ortopédica y rendimiento',
    points: ['Asistente de Terapia Física con licencia', 'Licenciatura en Kinesiología — UTSA', 'Experiencia en entornos ortopédicos y de rehabilitación', 'Enfoque en movimiento funcional y rendimiento'],
    teaser: 'Alejandro es el proveedor de terapia física con licencia más reciente en unirse a Powerhouse PT. Un clínico enfocado en el movimiento, con pasión por construir fuerza, recuperar la función y ayudar a sus pacientes a rendir más...',
    paragraphs: [
      'Nuestro proveedor de terapia física con licencia más reciente en unirse a POWERHOUSE PT. Un clínico enfocado en el movimiento, con pasión por construir fuerza, recuperar la función y ayudar a sus pacientes a rendir a un nivel más alto.',
      'Alejandro tiene un enfoque orientado a resultados, con planes de tratamiento eficientes e individuales que priorizan el progreso real y los resultados a largo plazo.',
      'Con experiencia práctica en entornos ortopédicos y de rehabilitación, trabaja para mejorar la movilidad, la fuerza, la coordinación y el rendimiento general. Fuera de la clínica disfruta el ciclismo de montaña, la pesca y el off-road.',
      'Su enfoque se centra en la mecánica correcta del movimiento y la progresión &mdash; ayudando a sus pacientes no solo a recuperarse, sino a regresar más fuertes.',
      'Alejandro está comprometido con su crecimiento y planea estudiar su Doctorado en Terapia Física (DPT) para elevar aún más el nivel de atención que ofrece.',
    ],
  },
};
