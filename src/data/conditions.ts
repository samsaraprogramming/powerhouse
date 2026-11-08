import type { L10n } from '../i18n/ui';
import { directAccess } from './clinic';

// Condition pages: one per body region. Plain text (no HTML).
// `reviewer` and `lastReviewed` drive the "Clinically reviewed by" byline and the
// MedicalWebPage JSON-LD. MOCK: no clinician has reviewed this copy yet (see MOCK_DATA.md).

export interface Condition {
  slug: string;
  image: string;
  reviewer: 'sandra' | 'leslie';
  lastReviewed: string;
  services: string[];
  name: L10n;
  /** Alternate names for the MedicalCondition schema. */
  alsoKnownAs: string[];
  summary: L10n;
  intro: L10n;
  symptoms: L10n<string[]>;
  causes: L10n<string[]>;
  treatment: L10n<string[]>;
  whenToSeek: L10n;
  redFlags: L10n<string[]>;
  faqs: L10n<{ q: string; a: string }[]>;
  sources: { title: string; url: L10n }[];
}

const medline = (en: string, es: string, title: string) => ({
  title,
  url: { en: `https://medlineplus.gov/${en}.html`, es: `https://medlineplus.gov/spanish/${es}.html` },
});

export const conditions: Condition[] = [
  {
    slug: 'back-pain-sciatica',
    image: '/images/conditions/back-pain.webp',
    reviewer: 'sandra',
    lastReviewed: '2026-10-15',
    services: ['orthopedic-pt', 'dry-needling', 'cupping'],
    name: { en: 'Back pain & sciatica', es: 'Dolor de espalda y ciática' },
    alsoKnownAs: ['Low back pain', 'Lumbar radiculopathy', 'Sciatica'],
    summary: {
      en: 'Low back pain, stiffness and pain that travels down the leg.',
      es: 'Dolor y rigidez en la espalda baja, y dolor que baja por la pierna.',
    },
    intro: {
      en: 'Most back pain is not caused by serious damage, and most people improve with the right mix of movement, strength and hands-on care. When pain travels into the buttock or leg, an irritated nerve root is often involved. That is sciatica. Our job is to find which movements calm your symptoms, which ones provoke them, and build from there.',
      es: 'La mayoría del dolor de espalda no se debe a un daño grave, y casi todas las personas mejoran con la combinación correcta de movimiento, fuerza y terapia manual. Cuando el dolor baja al glúteo o a la pierna, muchas veces hay una raíz nerviosa irritada: eso es la ciática. Nuestro trabajo es encontrar qué movimientos calman tus síntomas, cuáles los empeoran, y avanzar a partir de ahí.',
    },
    symptoms: {
      en: ['Aching or sharp pain across the low back', 'Pain, tingling or numbness down one leg', 'Stiffness after sitting or first thing in the morning', 'Pain when bending, lifting or standing up', 'Muscle spasm or a feeling that your back "catches"'],
      es: ['Dolor sordo o punzante en la espalda baja', 'Dolor, hormigueo o entumecimiento en una pierna', 'Rigidez después de estar sentado o al despertar', 'Dolor al agacharte, cargar o levantarte', 'Espasmos o la sensación de que la espalda se "traba"'],
    },
    causes: {
      en: ['Muscle or joint strain from lifting or a sudden movement', 'Disc irritation pressing on a nerve root', 'Long hours of sitting with little movement', 'Weak hips and trunk muscles that leave the spine doing extra work'],
      es: ['Distensión muscular o articular al cargar o por un movimiento brusco', 'Irritación de un disco que presiona una raíz nerviosa', 'Muchas horas sentado con poco movimiento', 'Cadera y tronco débiles que dejan más trabajo a la columna'],
    },
    treatment: {
      en: ['A movement screen to find positions that ease your symptoms', 'Hands-on joint and soft-tissue work to reduce pain and guarding', 'Graded strengthening for the hips and trunk', 'Dry needling or cupping for stubborn muscle tension when appropriate', 'A plan for sitting, lifting and staying active at work'],
      es: ['Evaluación del movimiento para encontrar posiciones que alivien los síntomas', 'Terapia manual en articulaciones y tejidos para reducir dolor y tensión', 'Fortalecimiento progresivo de cadera y tronco', 'Punción seca o ventosas para tensión muscular persistente cuando sea apropiado', 'Un plan para sentarte, cargar y mantenerte activo en el trabajo'],
    },
    whenToSeek: {
      en: 'If back pain has not started improving within a week or two, keeps coming back, or is changing how you sleep, work or train, it is worth an evaluation.',
      es: 'Si el dolor de espalda no empieza a mejorar en una o dos semanas, regresa con frecuencia, o está afectando tu sueño, trabajo o entrenamiento, vale la pena una evaluación.',
    },
    redFlags: {
      en: ['Numbness in the groin or inner thighs', 'New trouble controlling your bladder or bowels', 'Weakness in a leg that is getting worse', 'Back pain with fever, unexplained weight loss, or after a major fall'],
      es: ['Entumecimiento en la ingle o la parte interna de los muslos', 'Problemas nuevos para controlar la vejiga o el intestino', 'Debilidad en una pierna que va empeorando', 'Dolor de espalda con fiebre, pérdida de peso sin explicación o después de una caída fuerte'],
    },
    faqs: {
      en: [
        { q: 'Should I rest my back until the pain is gone?', a: 'Short rest can help on the worst days, but staying in bed usually slows recovery. Gentle walking and the right exercises tend to help pain settle faster.' },
        { q: 'Do I need an MRI first?', a: 'Usually not. Most back pain improves without imaging. We will tell you if your exam suggests you need one and coordinate with your doctor.' },
        { q: "How long does sciatica take to get better?", a: "It varies, but many people notice a clear change within the first few weeks of the right exercises and activity changes. Leg symptoms often settle more slowly than back pain. After your evaluation we give you your own expected timeline and adjust it as you progress." },
        { q: "Is it a herniated disc?", a: "It might be, but that is less worrying than it sounds. Disc bulges show up on scans of many people with no pain at all, and herniated discs often shrink on their own over time. What matters more is how your back and nerves respond to movement, which is what we test." },
        { q: "Should I use heat or ice?", a: "Use whichever feels better. Both are short-term comfort tools that can make it easier to move. They do not fix the problem on their own, so pair them with the exercises in your program." },
        { q: "Can I keep going to the gym?", a: "Usually, yes. We adjust the lifts and positions that flare your back, keep the ones you tolerate, and build the load back up step by step. Staying active generally helps back pain recover." },
      ],
      es: [
        { q: '¿Debo descansar la espalda hasta que se quite el dolor?', a: 'Un descanso corto ayuda en los peores días, pero quedarse en cama suele retrasar la recuperación. Caminar suave y los ejercicios correctos ayudan a que el dolor baje más rápido.' },
        { q: '¿Necesito una resonancia antes?', a: 'Por lo general no. La mayoría del dolor de espalda mejora sin estudios de imagen. Si tu evaluación indica que la necesitas, te lo diremos y coordinaremos con tu médico.' },
        { q: "¿Cuánto tarda en mejorar la ciática?", a: "Varía, pero muchas personas notan un cambio claro en las primeras semanas con los ejercicios y ajustes correctos. Los síntomas en la pierna suelen calmarse más despacio que el dolor de espalda. Después de tu evaluación te damos un tiempo estimado y lo ajustamos conforme avanzas." },
        { q: "¿Es una hernia de disco?", a: "Puede ser, pero es menos grave de lo que suena. Los abultamientos de disco aparecen en estudios de muchas personas que no tienen dolor, y las hernias muchas veces se reducen solas con el tiempo. Lo que más importa es cómo responden tu espalda y tus nervios al movimiento, y eso es lo que evaluamos." },
        { q: "¿Uso calor o hielo?", a: "Usa el que te haga sentir mejor. Los dos alivian a corto plazo y pueden facilitar el movimiento. Por sí solos no resuelven el problema, así que combínalos con los ejercicios de tu programa." },
        { q: "¿Puedo seguir yendo al gimnasio?", a: "Por lo general, sí. Ajustamos los ejercicios y posiciones que irritan tu espalda, mantenemos los que toleras y vamos subiendo la carga paso a paso. Mantenerte activo suele ayudar a que el dolor de espalda mejore." },
      ],
    },
    sources: [medline('backpain', 'backpain', 'MedlinePlus: Back pain'), medline('sciatica', 'sciatica', 'MedlinePlus: Sciatica')],
  },
  {
    slug: 'neck-pain-headaches',
    image: '/images/conditions/neck-pain.webp',
    reviewer: 'leslie',
    lastReviewed: '2026-10-15',
    services: ['orthopedic-pt', 'dry-needling', 'cupping'],
    name: { en: 'Neck pain & headaches', es: 'Dolor de cuello y dolores de cabeza' },
    alsoKnownAs: ['Cervical pain', 'Cervicogenic headache', 'Tension-type headache'],
    summary: {
      en: 'A stiff, sore neck and headaches that start at the base of the skull.',
      es: 'Cuello rígido y adolorido, y dolores de cabeza que empiezan en la nuca.',
    },
    intro: {
      en: 'Neck pain often builds slowly from long hours at a screen, poor sleep positions or stress that settles into the shoulders. Some headaches start in the joints and muscles of the upper neck. Treating the neck can reduce how often they happen and how strong they are.',
      es: 'El dolor de cuello suele aparecer poco a poco por largas horas frente a una pantalla, malas posiciones al dormir o estrés que se acumula en los hombros. Algunos dolores de cabeza se originan en las articulaciones y músculos de la parte alta del cuello, y tratar el cuello puede reducir su frecuencia e intensidad.',
    },
    symptoms: {
      en: ['Stiffness turning or tilting your head', 'Aching across the neck and top of the shoulders', 'Headaches that start at the base of the skull', 'Pain that spreads toward the shoulder blade', 'Tingling into the arm or hand'],
      es: ['Rigidez al girar o inclinar la cabeza', 'Dolor en el cuello y la parte superior de los hombros', 'Dolores de cabeza que empiezan en la nuca', 'Dolor que se extiende hacia el omóplato', 'Hormigueo en el brazo o la mano'],
    },
    causes: {
      en: ['Long periods looking down at a phone or laptop', 'Sleeping in an awkward position', 'Whiplash or another sudden jolt', 'Weak deep neck and upper back muscles'],
      es: ['Pasar mucho tiempo mirando hacia abajo al celular o la computadora', 'Dormir en una posición incómoda', 'Latigazo cervical u otro golpe brusco', 'Debilidad en los músculos profundos del cuello y la espalda alta'],
    },
    treatment: {
      en: ['Gentle joint mobilisation for the neck and upper back', 'Soft-tissue work and dry needling for tight muscles', 'Strength work for deep neck flexors and shoulder blade muscles', 'Workstation and sleep position changes', 'A home routine you can do in a few minutes a day'],
      es: ['Movilización suave de cuello y espalda alta', 'Terapia de tejidos blandos y punción seca para músculos tensos', 'Fortalecimiento de los flexores profundos del cuello y músculos del omóplato', 'Ajustes en tu estación de trabajo y posición al dormir', 'Una rutina en casa de pocos minutos al día'],
    },
    whenToSeek: {
      en: 'Book an evaluation if neck pain lasts more than a couple of weeks, keeps returning, or comes with regular headaches that make it hard to work or sleep.',
      es: 'Agenda una evaluación si el dolor de cuello dura más de un par de semanas, regresa seguido o viene con dolores de cabeza frecuentes que te dificultan trabajar o dormir.',
    },
    redFlags: {
      en: ['A sudden, severe headache unlike any before', 'Neck pain with fever and a stiff neck', 'Dizziness, double vision, or trouble speaking or swallowing', 'Pain after a car accident or fall before you have been checked by a doctor'],
      es: ['Un dolor de cabeza repentino e intenso, distinto a cualquier otro', 'Dolor de cuello con fiebre y rigidez', 'Mareo, visión doble o dificultad para hablar o tragar', 'Dolor después de un accidente o caída sin haber sido revisado por un médico'],
    },
    faqs: {
      en: [
        { q: 'Can physical therapy help my headaches?', a: 'If your headaches are linked to your neck, often yes. We screen for that during your evaluation and refer you on if something else looks likely.' },
        { q: 'Is cracking my neck bad?', a: 'An occasional pop is usually harmless. If you feel you need to crack it all the time, that is a sign the area needs better mobility and strength.' },
        { q: "What is the best sleeping position for neck pain?", a: "On your back or your side, with a pillow that keeps your head level with your body rather than tilted up or down. Sleeping on your stomach keeps the neck twisted for hours, so it often makes neck pain worse." },
        { q: "Is my desk setup causing my neck pain?", a: "It can contribute. Raising your screen to eye level and keeping the keyboard close helps, but changing position often matters more than finding one perfect posture. Short movement breaks through the day make a real difference." },
        { q: "Why do I feel tingling in my arm?", a: "Tingling that runs from the neck into the arm or hand can come from an irritated nerve root in the neck. We test strength, sensation and reflexes to check. Get it looked at promptly if you notice weakness, such as dropping things." },
        { q: "Do you treat whiplash?", a: "Yes, once a doctor has ruled out a fracture or other serious injury. Gentle, gradual movement in the first weeks generally helps more than keeping the neck still, and we guide how much to do." },
      ],
      es: [
        { q: '¿La terapia física puede ayudar con mis dolores de cabeza?', a: 'Si tus dolores de cabeza están relacionados con el cuello, con frecuencia sí. Lo revisamos en la evaluación y te referimos si parece ser otra causa.' },
        { q: '¿Es malo tronarme el cuello?', a: 'Un tronido ocasional suele ser inofensivo. Si sientes que necesitas hacerlo todo el tiempo, es señal de que la zona necesita mejor movilidad y fuerza.' },
        { q: "¿Cuál es la mejor posición para dormir con dolor de cuello?", a: "Boca arriba o de lado, con una almohada que mantenga la cabeza alineada con el cuerpo, sin inclinarla hacia arriba ni hacia abajo. Dormir boca abajo deja el cuello girado por horas y con frecuencia empeora el dolor." },
        { q: "¿Mi escritorio está causando mi dolor de cuello?", a: "Puede influir. Subir la pantalla a la altura de los ojos y acercar el teclado ayuda, pero cambiar de posición seguido importa más que encontrar una postura perfecta. Pausas cortas para moverte durante el día hacen una diferencia real." },
        { q: "¿Por qué siento hormigueo en el brazo?", a: "El hormigueo que baja del cuello al brazo o la mano puede venir de una raíz nerviosa irritada en el cuello. Lo revisamos con pruebas de fuerza, sensibilidad y reflejos. Revísalo pronto si notas debilidad, por ejemplo si se te caen las cosas." },
        { q: "¿Atienden el latigazo cervical?", a: "Sí, una vez que un médico haya descartado una fractura u otra lesión grave. Moverte de forma suave y gradual en las primeras semanas suele ayudar más que mantener el cuello inmóvil, y te guiamos sobre cuánto hacer." },
      ],
    },
    sources: [medline('neckinjuriesanddisorders', 'neckinjuriesanddisorders', 'MedlinePlus: Neck injuries and disorders'), medline('headache', 'headache', 'MedlinePlus: Headache')],
  },
  {
    slug: 'shoulder-pain',
    image: '/images/conditions/shoulder-pain.webp',
    reviewer: 'sandra',
    lastReviewed: '2026-10-15',
    services: ['orthopedic-pt', 'sports-performance', 'dry-needling'],
    name: { en: 'Shoulder pain', es: 'Dolor de hombro' },
    alsoKnownAs: ['Rotator cuff tendinopathy', 'Shoulder impingement', 'Frozen shoulder'],
    summary: {
      en: 'Pain reaching overhead, sleeping on your side, or lifting.',
      es: 'Dolor al estirar el brazo hacia arriba, dormir de lado o cargar.',
    },
    intro: {
      en: 'The shoulder trades stability for a huge range of motion, so it relies on the rotator cuff and shoulder blade muscles to stay comfortable. When those muscles fall behind what you ask of them, at the gym, at work or in sport, pain usually follows.',
      es: 'El hombro sacrifica estabilidad a cambio de un gran rango de movimiento, por eso depende del manguito rotador y los músculos del omóplato para funcionar sin dolor. Cuando esos músculos no alcanzan lo que les pides en el gimnasio, el trabajo o el deporte, suele aparecer el dolor.',
    },
    symptoms: {
      en: ['Pain lifting your arm overhead or out to the side', 'Pain lying on the affected side at night', 'Weakness or a "catch" partway through a movement', 'Stiffness reaching behind your back', 'A dull ache on the outside of the upper arm'],
      es: ['Dolor al levantar el brazo por encima de la cabeza o hacia un lado', 'Dolor al acostarte sobre ese lado en la noche', 'Debilidad o un "atorón" a mitad del movimiento', 'Rigidez al llevar la mano a la espalda', 'Dolor sordo en la parte externa del brazo'],
    },
    causes: {
      en: ['Overloading the rotator cuff with too much, too soon', 'Repetitive overhead work or throwing', 'Poor shoulder blade control', 'A fall onto an outstretched arm'],
      es: ['Sobrecargar el manguito rotador con demasiado y muy pronto', 'Trabajo o lanzamientos repetitivos por encima de la cabeza', 'Mal control del omóplato', 'Una caída sobre el brazo extendido'],
    },
    treatment: {
      en: ['Testing strength and range to pinpoint the irritated structure', 'Progressive rotator cuff and shoulder blade strengthening', 'Joint mobilisation for stiffness', 'Dry needling for trigger points around the shoulder', 'A gradual return to lifting, throwing or overhead work'],
      es: ['Pruebas de fuerza y rango para identificar la estructura irritada', 'Fortalecimiento progresivo del manguito rotador y el omóplato', 'Movilización articular para la rigidez', 'Punción seca para puntos gatillo alrededor del hombro', 'Regreso gradual a cargar, lanzar o trabajar con los brazos arriba'],
    },
    whenToSeek: {
      en: 'Get it checked if shoulder pain is waking you at night, has lasted more than two weeks, or is stopping you from training or working normally.',
      es: 'Revísalo si el dolor de hombro te despierta en la noche, dura más de dos semanas o te impide entrenar o trabajar con normalidad.',
    },
    redFlags: {
      en: ['Sudden inability to lift the arm after an injury', 'A visible deformity after a fall', 'Left shoulder or arm pain with chest pain or shortness of breath (call 911)'],
      es: ['Incapacidad repentina de levantar el brazo después de una lesión', 'Deformidad visible después de una caída', 'Dolor en el hombro o brazo izquierdo con dolor de pecho o falta de aire (llama al 911)'],
    },
    faqs: {
      en: [
        { q: 'Do rotator cuff tears always need surgery?', a: 'No. Many partial and some full-thickness tears do well with a structured strengthening program. Your surgeon and therapist can help you weigh the options.' },
        { q: 'Should I stop lifting weights?', a: 'Usually you modify rather than stop. We adjust the exercises that hurt and keep you training around the problem while it heals.' },
        { q: "Why does my shoulder hurt more at night?", a: "Lying on the sore side presses on irritated tendons, and the shoulder has less support when you are relaxed. Sleeping on the other side while hugging a pillow, or on your back with a pillow under the arm, often helps while we calm it down." },
        { q: "Can physical therapy help a frozen shoulder?", a: "Yes. A frozen shoulder stiffens the joint capsule and often takes many months to resolve fully. Therapy helps manage pain, keep the motion you have and restore what was lost as it loosens." },
        { q: "Should I get a cortisone shot?", a: "That is a decision for you and your doctor. A shot can calm pain for a while, but it does not rebuild strength, so it works best alongside an exercise program. We coordinate with your doctor either way." },
        { q: "Do you work with throwing and overhead athletes?", a: "Yes: baseball and softball players, volleyball and tennis players, swimmers and lifters. Rehab ends with a gradual return to throwing or overhead work, not just pain-free daily life." },
      ],
      es: [
        { q: '¿Las rupturas del manguito rotador siempre necesitan cirugía?', a: 'No. Muchas rupturas parciales y algunas completas evolucionan bien con un programa estructurado de fortalecimiento. Tu cirujano y tu terapeuta pueden ayudarte a evaluar las opciones.' },
        { q: '¿Debo dejar de levantar pesas?', a: 'Normalmente se modifica en lugar de suspender. Ajustamos los ejercicios que duelen y seguimos entrenando alrededor del problema mientras sana.' },
        { q: "¿Por qué me duele más el hombro en la noche?", a: "Acostarte sobre el lado adolorido presiona los tendones irritados, y el hombro tiene menos soporte cuando estás relajado. Dormir del otro lado abrazando una almohada, o boca arriba con una almohada bajo el brazo, suele ayudar mientras lo calmamos." },
        { q: "¿La terapia física ayuda con el hombro congelado?", a: "Sí. El hombro congelado endurece la cápsula de la articulación y con frecuencia tarda varios meses en resolverse por completo. La terapia ayuda a controlar el dolor, conservar el movimiento que tienes y recuperar el que perdiste conforme se libera." },
        { q: "¿Debo ponerme una inyección de cortisona?", a: "Eso lo decides con tu médico. La inyección puede calmar el dolor por un tiempo, pero no recupera la fuerza, así que funciona mejor junto con un programa de ejercicios. En cualquier caso, coordinamos con tu médico." },
        { q: "¿Trabajan con atletas que lanzan o usan los brazos arriba?", a: "Sí: jugadores de béisbol y softbol, voleibol y tenis, nadadores y personas que levantan pesas. La rehabilitación termina con un regreso gradual a lanzar o trabajar con los brazos arriba, no solo con poder hacer tu día sin dolor." },
      ],
    },
    sources: [medline('shoulderinjuriesanddisorders', 'shoulderinjuriesanddisorders', 'MedlinePlus: Shoulder injuries and disorders')],
  },
  {
    slug: 'hip-pain',
    image: '/images/conditions/hip-pain.webp',
    reviewer: 'sandra',
    lastReviewed: '2026-10-15',
    services: ['orthopedic-pt', 'running-analysis', 'sports-performance'],
    name: { en: 'Hip pain', es: 'Dolor de cadera' },
    alsoKnownAs: ['Gluteal tendinopathy', 'Hip impingement', 'Hip osteoarthritis'],
    summary: {
      en: 'Groin, outer hip or buttock pain when walking, climbing stairs or sitting.',
      es: 'Dolor en la ingle, la parte externa de la cadera o el glúteo al caminar, subir escaleras o sentarte.',
    },
    intro: {
      en: 'Hip pain can come from the joint itself, the tendons on the outside of the hip, or the low back. Where you feel it and what makes it worse tell us a lot. Strength, especially in the glutes, is usually a big part of the fix.',
      es: 'El dolor de cadera puede venir de la articulación, de los tendones en la parte externa de la cadera o de la espalda baja. Dónde lo sientes y qué lo empeora nos dice mucho. La fuerza, sobre todo de los glúteos, suele ser parte importante de la solución.',
    },
    symptoms: {
      en: ['Pain in the groin or front of the hip', 'Pain on the outside of the hip, worse lying on that side', 'Stiffness getting out of a car or putting on shoes', 'Pain with stairs, hills or long walks', 'A limp after activity'],
      es: ['Dolor en la ingle o al frente de la cadera', 'Dolor en la parte externa de la cadera, peor al acostarte de ese lado', 'Rigidez al bajar del carro o ponerte los zapatos', 'Dolor en escaleras, subidas o caminatas largas', 'Cojear después de la actividad'],
    },
    causes: {
      en: ['Weak gluteal muscles', 'Sudden jumps in running or walking volume', 'Joint wear and tear with age', 'Hip shape differences that pinch at end range'],
      es: ['Glúteos débiles', 'Aumentos bruscos en la distancia que corres o caminas', 'Desgaste articular con la edad', 'Diferencias en la forma de la cadera que pellizcan al final del movimiento'],
    },
    treatment: {
      en: ['Separating hip, back and tendon sources of pain', 'Progressive glute and hip strengthening', 'Manual therapy to restore hip motion', 'Gait or running analysis if pain shows up with activity', 'Activity changes that keep you moving while it settles'],
      es: ['Distinguir si el dolor viene de la cadera, la espalda o los tendones', 'Fortalecimiento progresivo de glúteos y cadera', 'Terapia manual para recuperar el movimiento', 'Análisis de marcha o carrera si el dolor aparece con la actividad', 'Ajustes de actividad para seguir moviéndote mientras mejora'],
    },
    whenToSeek: {
      en: 'Book an evaluation if hip pain lasts more than two weeks, makes you limp, or is getting in the way of walking, sleep or exercise.',
      es: 'Agenda una evaluación si el dolor de cadera dura más de dos semanas, te hace cojear o te impide caminar, dormir o hacer ejercicio.',
    },
    redFlags: {
      en: ['Unable to put weight on the leg after a fall', 'Hip pain with fever or a hot, swollen joint', 'Sudden severe pain with no clear cause'],
      es: ['No poder apoyar la pierna después de una caída', 'Dolor de cadera con fiebre o una articulación caliente e inflamada', 'Dolor intenso y repentino sin causa clara'],
    },
    faqs: {
      en: [
        { q: 'Is hip pain always arthritis?', a: 'No. Tendon irritation on the outside of the hip is very common and responds well to strengthening. Your exam tells us which one we are dealing with.' },
        { q: 'Can I keep running?', a: 'Often, with changes. We may reduce volume or adjust your form while we build strength, rather than stopping completely.' },
        { q: "Can physical therapy help hip arthritis?", a: "Yes. Clinical guidelines list exercise as a first-line treatment for hip osteoarthritis. Building strength and keeping the hip moving often reduces pain and makes walking easier, whether or not surgery is in your future." },
        { q: "Why does the outside of my hip hurt when I lie on my side?", a: "Often it is the gluteal tendons on the outside of the hip, which get irritated by compression. A pillow between your knees helps at night, and a progressive strengthening program usually settles it." },
        { q: "Could my hip pain be coming from my back?", a: "Yes. The low back can send pain into the buttock and hip. We check your back as part of every hip evaluation so we treat the right area." },
        { q: "Do labral tears need surgery?", a: "Not always. Labral tears are common on scans, even in people without pain, and many people improve with targeted strengthening and changes to how they move. If therapy is not enough, we help you talk it through with a surgeon." },
      ],
      es: [
        { q: '¿El dolor de cadera siempre es artritis?', a: 'No. La irritación de los tendones en la parte externa de la cadera es muy común y responde bien al fortalecimiento. La evaluación nos dice cuál es tu caso.' },
        { q: '¿Puedo seguir corriendo?', a: 'Muchas veces sí, con ajustes. Podemos reducir el volumen o corregir tu técnica mientras ganas fuerza, en lugar de parar por completo.' },
        { q: "¿La terapia física ayuda con la artritis de cadera?", a: "Sí. Las guías clínicas recomiendan el ejercicio como uno de los primeros tratamientos para la osteoartritis de cadera. Ganar fuerza y mantener la cadera en movimiento suele reducir el dolor y facilitar caminar, necesites cirugía más adelante o no." },
        { q: "¿Por qué me duele la parte externa de la cadera al acostarme de lado?", a: "Muchas veces son los tendones de los glúteos en la parte externa de la cadera, que se irritan con la presión. Una almohada entre las rodillas ayuda en la noche, y un programa de fortalecimiento progresivo suele calmarlo." },
        { q: "¿Mi dolor de cadera puede venir de la espalda?", a: "Sí. La espalda baja puede reflejar dolor hacia el glúteo y la cadera. Revisamos tu espalda en cada evaluación de cadera para tratar la zona correcta." },
        { q: "¿Las lesiones del labrum necesitan cirugía?", a: "No siempre. Las lesiones del labrum son comunes en los estudios, incluso en personas sin dolor, y muchas personas mejoran con fortalecimiento dirigido y cambios en cómo se mueven. Si la terapia no es suficiente, te ayudamos a platicarlo con un cirujano." },
      ],
    },
    sources: [medline('hipinjuriesanddisorders', 'hipinjuriesanddisorders', 'MedlinePlus: Hip injuries and disorders')],
  },
  {
    slug: 'knee-pain',
    image: '/images/conditions/knee-pain.webp',
    reviewer: 'leslie',
    lastReviewed: '2026-10-15',
    services: ['orthopedic-pt', 'sports-performance', 'running-analysis', 'blood-flow-restriction'],
    name: { en: 'Knee pain', es: 'Dolor de rodilla' },
    alsoKnownAs: ['Patellofemoral pain', 'Meniscus injury', 'ACL injury', 'Knee osteoarthritis'],
    summary: {
      en: 'Pain with stairs, squats, running, or after a twist or fall.',
      es: 'Dolor en escaleras, sentadillas, al correr, o después de una torcedura o caída.',
    },
    intro: {
      en: 'The knee sits between the hip and the ankle, so it often takes the blame for problems above or below it. Whether you are dealing with pain around the kneecap, a meniscus or ligament injury, or arthritis, building strength and control through the whole leg is central to getting back to stairs, squats and sport.',
      es: 'La rodilla está entre la cadera y el tobillo, así que muchas veces paga por problemas de arriba o de abajo. Ya sea dolor alrededor de la rótula, una lesión de menisco o ligamento, o artritis, ganar fuerza y control en toda la pierna es clave para volver a subir escaleras, hacer sentadillas y practicar tu deporte.',
    },
    symptoms: {
      en: ['Pain around or behind the kneecap', 'Pain going up or down stairs', 'Swelling after activity', 'Clicking, catching or a feeling the knee might give way', 'Stiffness after sitting for a while'],
      es: ['Dolor alrededor o detrás de la rótula', 'Dolor al subir o bajar escaleras', 'Inflamación después de la actividad', 'Chasquidos, bloqueos o sensación de que la rodilla falla', 'Rigidez después de estar sentado un rato'],
    },
    causes: {
      en: ['Weak quads and hips relative to your activity level', 'A twist or pivot during sport', 'Rapid increases in running, jumping or squatting', 'Age-related joint changes'],
      es: ['Cuádriceps y cadera débiles para tu nivel de actividad', 'Una torcedura o giro durante el deporte', 'Aumentos rápidos en carrera, saltos o sentadillas', 'Cambios articulares por la edad'],
    },
    treatment: {
      en: ['Strength testing for the quads, hips and calves', 'Progressive loading that respects how irritable the knee is', 'Manual therapy to restore bend and straightening', 'Return-to-sport testing before you go back to cutting and jumping', 'Running analysis when pain shows up on the road'],
      es: ['Pruebas de fuerza de cuádriceps, cadera y pantorrillas', 'Carga progresiva que respeta qué tan irritada está la rodilla', 'Terapia manual para recuperar la flexión y extensión', 'Pruebas de regreso al deporte antes de volver a cambios de dirección y saltos', 'Análisis de carrera cuando el dolor aparece al correr'],
    },
    whenToSeek: {
      en: 'See us if knee pain has lasted more than two weeks, keeps swelling, or is stopping you from stairs, squats or your sport.',
      es: 'Visítanos si el dolor de rodilla dura más de dos semanas, sigue inflamándose o te impide subir escaleras, hacer sentadillas o tu deporte.',
    },
    redFlags: {
      en: ['A pop with immediate swelling during sport', 'The knee is locked and will not straighten', 'Unable to put weight on the leg', 'A hot, red, swollen knee with fever'],
      es: ['Un tronido con inflamación inmediata durante el deporte', 'La rodilla está bloqueada y no se estira', 'No poder apoyar la pierna', 'Una rodilla caliente, roja e inflamada con fiebre'],
    },
    faqs: {
      en: [
        { q: 'Are squats bad for my knees?', a: 'Not when they are dosed well. Squatting within a comfortable range is one of the best ways to strengthen a sore knee.' },
        { q: 'Do you work with ACL reconstructions?', a: 'Yes. We take you from the first weeks after surgery through return-to-sport testing.' },
        { q: "Why does my knee hurt going down stairs?", a: "Going down stairs puts a high load through the kneecap and the front of the knee. It is a common sign of kneecap (patellofemoral) pain, which usually responds well to strengthening the thigh and hip muscles." },
        { q: "Does a meniscus tear need surgery?", a: "Often not. Many meniscus tears, especially ones that develop gradually with age, do as well with a structured exercise program as with surgery. A knee that locks or catches often may need a surgeon's opinion, and we refer you if it does." },
        { q: "Can physical therapy help knee arthritis?", a: "Yes. Clinical guidelines list exercise as a first-line treatment for knee osteoarthritis. Stronger muscles around the knee take load off the joint and usually make walking and stairs easier." },
        { q: "Should I wear a knee brace?", a: "Sometimes, for a short time. A brace or sleeve can make the knee feel more secure while it settles, but it does not replace the strength that protects it. We tell you if one makes sense for your knee." },
      ],
      es: [
        { q: '¿Las sentadillas son malas para las rodillas?', a: 'No, si se dosifican bien. Hacer sentadillas en un rango cómodo es una de las mejores formas de fortalecer una rodilla adolorida.' },
        { q: '¿Atienden reconstrucciones de LCA?', a: 'Sí. Te acompañamos desde las primeras semanas después de la cirugía hasta las pruebas de regreso al deporte.' },
        { q: "¿Por qué me duele la rodilla al bajar escaleras?", a: "Bajar escaleras pone mucha carga sobre la rótula y la parte frontal de la rodilla. Es una señal común de dolor en la rótula (patelofemoral), que suele responder bien al fortalecimiento de muslo y cadera." },
        { q: "¿Una lesión de menisco necesita cirugía?", a: "Muchas veces no. Muchas lesiones de menisco, sobre todo las que aparecen poco a poco con la edad, evolucionan igual de bien con un programa estructurado de ejercicio que con cirugía. Si la rodilla se bloquea o se atora seguido, puede necesitar la opinión de un cirujano, y te referimos si es así." },
        { q: "¿La terapia física ayuda con la artritis de rodilla?", a: "Sí. Las guías clínicas recomiendan el ejercicio como uno de los primeros tratamientos para la osteoartritis de rodilla. Músculos más fuertes alrededor de la rodilla le quitan carga a la articulación y suelen facilitar caminar y subir escaleras." },
        { q: "¿Debo usar rodillera?", a: "A veces, por un tiempo corto. Una rodillera puede dar más seguridad mientras la rodilla se calma, pero no reemplaza la fuerza que la protege. Te decimos si tiene sentido en tu caso." },
      ],
    },
    sources: [medline('kneeinjuriesanddisorders', 'kneeinjuriesanddisorders', 'MedlinePlus: Knee injuries and disorders')],
  },
  {
    slug: 'foot-ankle-pain',
    image: '/images/conditions/foot-ankle-pain.webp',
    reviewer: 'leslie',
    lastReviewed: '2026-10-15',
    services: ['orthopedic-pt', 'running-analysis', 'dry-needling'],
    name: { en: 'Foot & ankle pain', es: 'Dolor de pie y tobillo' },
    alsoKnownAs: ['Ankle sprain', 'Plantar fasciitis', 'Achilles tendinopathy'],
    summary: {
      en: 'Ankle sprains, heel pain and Achilles pain that keep you off your feet.',
      es: 'Esguinces de tobillo, dolor de talón y del tendón de Aquiles que no te dejan caminar bien.',
    },
    intro: {
      en: 'Your feet take every step you do, so small problems add up fast. Sprained ankles that never fully recover, heel pain first thing in the morning, and a sore Achilles are among the most common reasons runners and walkers come to see us.',
      es: 'Tus pies reciben cada paso que das, así que los problemas pequeños crecen rápido. Esguinces de tobillo que nunca se recuperan del todo, dolor de talón al levantarte y un tendón de Aquiles adolorido están entre las razones más comunes por las que corredores y caminantes nos visitan.',
    },
    symptoms: {
      en: ['Heel pain with your first steps in the morning', 'Pain or stiffness in the Achilles tendon', 'An ankle that rolls easily or feels unstable', 'Swelling around the ankle after activity', 'Pain in the arch or ball of the foot'],
      es: ['Dolor de talón en los primeros pasos de la mañana', 'Dolor o rigidez en el tendón de Aquiles', 'Un tobillo que se tuerce con facilidad o se siente inestable', 'Inflamación alrededor del tobillo después de la actividad', 'Dolor en el arco o la planta del pie'],
    },
    causes: {
      en: ['A previous sprain that was never fully rehabbed', 'Big jumps in walking or running distance', 'Tight or weak calves', 'Footwear changes or long hours standing on hard floors'],
      es: ['Un esguince anterior que nunca se rehabilitó por completo', 'Aumentos grandes en la distancia que caminas o corres', 'Pantorrillas tensas o débiles', 'Cambio de calzado o muchas horas de pie en pisos duros'],
    },
    treatment: {
      en: ['Balance and ankle stability training', 'Progressive calf and foot strengthening', 'Joint mobilisation for a stiff ankle', 'Dry needling for calf and foot trigger points', 'Running or walking analysis and footwear advice'],
      es: ['Entrenamiento de equilibrio y estabilidad de tobillo', 'Fortalecimiento progresivo de pantorrilla y pie', 'Movilización articular para un tobillo rígido', 'Punción seca para puntos gatillo en pantorrilla y pie', 'Análisis de carrera o marcha y recomendaciones de calzado'],
    },
    whenToSeek: {
      en: 'Book a visit if heel or ankle pain lasts more than two weeks, or if you keep rolling the same ankle.',
      es: 'Agenda una visita si el dolor de talón o tobillo dura más de dos semanas, o si te sigues torciendo el mismo tobillo.',
    },
    redFlags: {
      en: ['Unable to walk four steps after an injury', 'Tenderness on the bony bumps of the ankle after a fall', 'A sudden snap at the back of the ankle', 'A red, hot, swollen foot, especially if you have diabetes'],
      es: ['No poder dar cuatro pasos después de una lesión', 'Dolor al tocar los huesos del tobillo después de una caída', 'Un chasquido repentino en la parte de atrás del tobillo', 'Un pie rojo, caliente e inflamado, sobre todo si tienes diabetes'],
    },
    faqs: {
      en: [
        { q: 'Do I need orthotics for plantar fasciitis?', a: 'Sometimes they help in the short term, but strengthening the calf and foot is what usually makes the difference. We will tell you if inserts make sense for you.' },
        { q: 'How long does an ankle sprain take to heal?', a: 'Mild sprains often feel better in a couple of weeks, but full strength and balance take longer. Finishing rehab lowers the chance of spraining it again.' },
        { q: "Why does my heel hurt most with my first steps in the morning?", a: "That is a classic sign of plantar fasciitis. The tissue under the foot stiffens overnight and is sore when you first put weight on it. Calf and foot strengthening, plus changes to how long you are on your feet, usually help." },
        { q: "Should I rest completely after an ankle sprain?", a: "Only briefly. Protect it for the first few days, then early, gentle movement and putting weight on it as tolerated help it recover. Balance training is what lowers the chance of spraining it again." },
        { q: "What helps Achilles pain?", a: "Gradually loading the calf and Achilles tendon with strength work is the main treatment. Complete rest or stretching alone rarely fixes it. We set the starting level and build it up as the tendon tolerates more." },
        { q: "Do I need different shoes?", a: "Not always. The best shoe is usually the one that feels comfortable for what you do. Sudden changes, like switching to a very different running shoe overnight, can cause problems, so change gradually." },
      ],
      es: [
        { q: '¿Necesito plantillas para la fascitis plantar?', a: 'A veces ayudan a corto plazo, pero fortalecer la pantorrilla y el pie es lo que suele hacer la diferencia. Te diremos si las plantillas tienen sentido para ti.' },
        { q: '¿Cuánto tarda en sanar un esguince de tobillo?', a: 'Los esguinces leves suelen sentirse mejor en un par de semanas, pero la fuerza y el equilibrio completos tardan más. Terminar la rehabilitación reduce la probabilidad de volver a torcerlo.' },
        { q: "¿Por qué me duele más el talón con los primeros pasos en la mañana?", a: "Es una señal clásica de fascitis plantar. El tejido debajo del pie se pone rígido durante la noche y duele cuando lo apoyas por primera vez. Fortalecer la pantorrilla y el pie, y ajustar cuánto tiempo pasas de pie, suele ayudar." },
        { q: "¿Debo descansar por completo después de un esguince de tobillo?", a: "Solo por poco tiempo. Protégelo los primeros días y luego el movimiento suave y apoyar el pie según toleres ayudan a recuperarlo. El entrenamiento de equilibrio es lo que reduce la probabilidad de volver a torcerlo." },
        { q: "¿Qué ayuda con el dolor del tendón de Aquiles?", a: "El tratamiento principal es cargar poco a poco la pantorrilla y el tendón con ejercicios de fuerza. El reposo completo o solo estirar rara vez lo resuelven. Definimos el nivel inicial y lo aumentamos conforme el tendón tolera más." },
        { q: "¿Necesito otros zapatos?", a: "No siempre. El mejor zapato suele ser el que se siente cómodo para lo que haces. Los cambios bruscos, como pasar de un día a otro a un tenis para correr muy diferente, pueden causar problemas, así que cambia poco a poco." },
      ],
    },
    sources: [medline('ankleinjuriesanddisorders', 'ankleinjuriesanddisorders', 'MedlinePlus: Ankle injuries and disorders'), medline('footinjuriesanddisorders', 'footinjuriesanddisorders', 'MedlinePlus: Foot injuries and disorders')],
  },
  {
    slug: 'sports-injuries',
    image: '/images/conditions/sports-injuries.webp',
    reviewer: 'sandra',
    lastReviewed: '2026-10-15',
    services: ['sports-performance', 'running-analysis', 'orthopedic-pt', 'blood-flow-restriction'],
    name: { en: 'Sports injuries', es: 'Lesiones deportivas' },
    alsoKnownAs: ['Muscle strain', 'Tendinopathy', 'Overuse injury'],
    summary: {
      en: 'Strains, sprains and overuse injuries, with a clear path back to play.',
      es: 'Distensiones, esguinces y lesiones por sobreuso, con un camino claro de regreso al juego.',
    },
    intro: {
      en: 'Getting hurt is part of playing sport. Coming back too early, or never rebuilding the strength you lost, is what turns one injury into a repeating one. We treat the injury and then test you against the demands of your sport before you go back.',
      es: 'Lastimarse es parte de practicar un deporte. Regresar demasiado pronto, o nunca recuperar la fuerza perdida, es lo que convierte una lesión en una que se repite. Tratamos la lesión y luego te evaluamos frente a las exigencias de tu deporte antes de que regreses.',
    },
    symptoms: {
      en: ['A sudden pull or pain during sprinting, cutting or jumping', 'Pain that builds the longer you train', 'Loss of speed, power or confidence on one side', 'Swelling or bruising after a game', 'Tightness that never quite goes away'],
      es: ['Un tirón o dolor repentino al correr rápido, cambiar de dirección o saltar', 'Dolor que aumenta mientras más entrenas', 'Pérdida de velocidad, potencia o confianza en un lado', 'Inflamación o moretones después de un partido', 'Tensión que nunca termina de irse'],
    },
    causes: {
      en: ['Sudden spikes in training load', 'Returning from a previous injury before you were ready', 'Strength imbalances between sides', 'Not enough recovery between sessions'],
      es: ['Aumentos bruscos en la carga de entrenamiento', 'Regresar de una lesión anterior antes de estar listo', 'Desequilibrios de fuerza entre un lado y otro', 'Poca recuperación entre sesiones'],
    },
    treatment: {
      en: ['A diagnosis and timeline you can plan your season around', 'Hands-on care and dry needling to speed early recovery', 'Sport-specific strength, speed and agility work', 'Objective return-to-sport testing', 'Load planning to lower the risk of re-injury'],
      es: ['Un diagnóstico y tiempos con los que puedas planear tu temporada', 'Terapia manual y punción seca para acelerar la recuperación inicial', 'Trabajo de fuerza, velocidad y agilidad específico de tu deporte', 'Pruebas objetivas de regreso al deporte', 'Planeación de cargas para reducir el riesgo de volver a lesionarte'],
    },
    whenToSeek: {
      en: 'The sooner the better. Early care shortens time away from sport, and we can help you keep training safely while you heal.',
      es: 'Mientras antes, mejor. La atención temprana acorta el tiempo fuera del deporte y te ayudamos a seguir entrenando de forma segura mientras sanas.',
    },
    redFlags: {
      en: ['Any head injury with confusion, vomiting or worsening headache (see a doctor the same day)', 'A visible deformity or suspected fracture', 'Unable to bear weight after an injury'],
      es: ['Cualquier golpe en la cabeza con confusión, vómito o dolor de cabeza que empeora (ve al médico el mismo día)', 'Una deformidad visible o sospecha de fractura', 'No poder apoyar peso después de una lesión'],
    },
    faqs: {
      en: [
        { q: 'Do you work with school and club athletes?', a: 'Yes. We see youth, high school, college and adult recreational athletes, and we are happy to talk with coaches and athletic trainers.' },
        { q: 'How do I know I am ready to return?', a: 'We use strength, hop and agility tests compared side to side, plus how you feel, so the decision is not a guess.' },
        { q: "Should I see a doctor or a physical therapist first?", a: `For most strains, sprains and overuse injuries you can start with us: in Texas you do not need a referral for the first ${directAccess.days} days. Go to a doctor or the emergency room first for a suspected fracture, a dislocation or a head injury.` },
        { q: "Can I keep training while I recover?", a: "Usually, in some form. We work out what you can do without making the injury worse, so you keep your fitness and strength while the injured area heals." },
        { q: "How do I avoid getting hurt again?", a: "Finish rehab even after the pain is gone. A previous injury is one of the biggest risk factors for many sports injuries, usually because strength and control never fully came back. Return-to-sport testing and a gradual build-up of training load lower that risk." },
        { q: "Can you help prevent injuries?", a: "Yes. Strength and movement screens, plus warm-up programs built around landing, cutting and balance, have been shown to lower injury rates in team sports. We can build one into your training." },
      ],
      es: [
        { q: '¿Atienden atletas escolares y de clubes?', a: 'Sí. Atendemos atletas juveniles, de preparatoria, universitarios y adultos recreativos, y con gusto hablamos con entrenadores y preparadores físicos.' },
        { q: '¿Cómo sé que estoy listo para regresar?', a: 'Usamos pruebas de fuerza, saltos y agilidad comparando ambos lados, además de cómo te sientes, para que la decisión no sea una suposición.' },
        { q: "¿Primero veo a un médico o a un fisioterapeuta?", a: `Para la mayoría de los desgarres, esguinces y lesiones por sobreuso puedes empezar con nosotros: en Texas no necesitas referencia durante los primeros ${directAccess.days} días. Ve primero con un médico o a urgencias si sospechas una fractura, una luxación o un golpe en la cabeza.` },
        { q: "¿Puedo seguir entrenando mientras me recupero?", a: "Por lo general sí, de alguna forma. Definimos lo que puedes hacer sin empeorar la lesión, para que mantengas tu condición y fuerza mientras sana la zona lesionada." },
        { q: "¿Cómo evito lastimarme otra vez?", a: "Termina la rehabilitación aunque ya no tengas dolor. Haber tenido una lesión antes es uno de los mayores factores de riesgo para muchas lesiones deportivas, normalmente porque la fuerza y el control nunca regresaron por completo. Las pruebas de regreso al deporte y aumentar la carga de entrenamiento poco a poco reducen ese riesgo." },
        { q: "¿Pueden ayudar a prevenir lesiones?", a: "Sí. Las evaluaciones de fuerza y movimiento, junto con calentamientos enfocados en aterrizar, cambiar de dirección y equilibrio, han demostrado reducir las lesiones en deportes de equipo. Podemos incluir uno en tu entrenamiento." },
      ],
    },
    sources: [medline('sportsinjuries', 'sportsinjuries', 'MedlinePlus: Sports injuries')],
  },
  {
    slug: 'post-surgical-rehab',
    image: '/images/conditions/post-surgical-rehab.webp',
    reviewer: 'leslie',
    lastReviewed: '2026-10-15',
    services: ['orthopedic-pt', 'sports-performance', 'blood-flow-restriction'],
    name: { en: 'Post-surgical rehab', es: 'Rehabilitación postquirúrgica' },
    alsoKnownAs: ['Postoperative rehabilitation', 'Joint replacement rehab', 'ACL reconstruction rehab'],
    summary: {
      en: 'Rehab after joint replacements, ACL repairs, shoulder surgery and more.',
      es: 'Rehabilitación después de reemplazos articulares, reconstrucción de LCA, cirugía de hombro y más.',
    },
    intro: {
      en: 'Surgery repairs the structure. Rehab rebuilds the motion, strength and confidence around it. We follow your surgeon\'s protocol, keep them updated, and move you through each phase as your body is ready.',
      es: 'La cirugía repara la estructura; la rehabilitación recupera el movimiento, la fuerza y la confianza alrededor de ella. Seguimos el protocolo de tu cirujano, lo mantenemos informado y avanzamos cada fase cuando tu cuerpo está listo.',
    },
    symptoms: {
      en: ['Stiffness and swelling in the weeks after surgery', 'Weakness in the muscles around the joint', 'Difficulty walking, reaching or climbing stairs', 'Worry about doing too much, or too little'],
      es: ['Rigidez e inflamación en las semanas después de la cirugía', 'Debilidad en los músculos alrededor de la articulación', 'Dificultad para caminar, estirarte o subir escaleras', 'Preocupación por hacer demasiado o muy poco'],
    },
    causes: {
      en: ['Knee and hip replacements', 'ACL, meniscus and other ligament repairs', 'Rotator cuff and shoulder stabilisation surgery', 'Ankle fracture fixation and Achilles repairs'],
      es: ['Reemplazos de rodilla y cadera', 'Reparaciones de LCA, menisco y otros ligamentos', 'Cirugía de manguito rotador y estabilización de hombro', 'Fijación de fracturas de tobillo y reparación del tendón de Aquiles'],
    },
    treatment: {
      en: ['Swelling and pain management in the early phase', 'Restoring range of motion safely', 'Progressive strengthening matched to your surgeon\'s protocol', 'Balance, walking and stair training', 'Return-to-work and return-to-sport testing'],
      es: ['Manejo de inflamación y dolor en la fase inicial', 'Recuperar el rango de movimiento de forma segura', 'Fortalecimiento progresivo según el protocolo de tu cirujano', 'Entrenamiento de equilibrio, marcha y escaleras', 'Pruebas de regreso al trabajo y al deporte'],
    },
    whenToSeek: {
      en: 'Ideally, book your first visit before surgery or within the first week after, as your surgeon advises.',
      es: 'Lo ideal es agendar tu primera visita antes de la cirugía o durante la primera semana después, según indique tu cirujano.',
    },
    redFlags: {
      en: ['Calf pain, redness and swelling (possible blood clot)', 'Fever, or redness and drainage from the incision', 'Sudden shortness of breath or chest pain (call 911)'],
      es: ['Dolor, enrojecimiento e inflamación en la pantorrilla (posible coágulo)', 'Fiebre, o enrojecimiento y secreción en la herida', 'Falta de aire repentina o dolor de pecho (llama al 911)'],
    },
    faqs: {
      en: [
        { q: 'Do I need a referral from my surgeon?', a: 'For post-surgical care we usually work from your surgeon\'s referral and protocol. Bring any paperwork you were given to your first visit.' },
        { q: 'How long will rehab take?', a: "It depends on the surgery, your surgeon's protocol and your goals. As a general guide from the American Academy of Orthopaedic Surgeons (not a promise for any one person): after a total knee replacement, most people return to most daily activities within 3 to 6 weeks, and after an ACL reconstruction, most are cleared for full sports within 6 to 12 months. After your evaluation we give you your own expected timeline and update it as you progress." },
        { q: "When should I start physical therapy after surgery?", a: "When your surgeon says to. For many surgeries that is within the first days or weeks. Bring your surgeon's protocol to your first visit so we can follow it exactly." },
        { q: "Can I start therapy before surgery?", a: "Yes, and it often helps. Going into surgery with better strength and range of motion, sometimes called prehab, can make the early weeks of recovery easier. It is especially common before ACL surgery and joint replacements." },
        { q: "Is some pain during rehab normal?", a: "Some discomfort is expected as you regain motion and strength. We keep it in a range that helps rather than sets you back, and we adjust if pain or swelling builds from one visit to the next." },
        { q: "Will you talk to my surgeon?", a: "Yes. We send progress updates and contact your surgeon with any questions about the protocol, or if anything looks unusual during your recovery." },
      ],
      es: [
        { q: '¿Necesito una referencia de mi cirujano?', a: 'Para la atención postquirúrgica normalmente trabajamos con la referencia y el protocolo de tu cirujano. Trae a tu primera visita los documentos que te hayan dado.' },
        { q: '¿Cuánto dura la rehabilitación?', a: 'Depende de la cirugía, del protocolo de tu cirujano y de tus metas. Como guía general de la Academia Americana de Cirujanos Ortopédicos (no es una promesa para cada persona): después de un reemplazo total de rodilla, la mayoría vuelve a casi todas sus actividades diarias en 3 a 6 semanas, y después de una reconstrucción de LCA, la mayoría recibe autorización para el deporte completo en 6 a 12 meses. Después de tu evaluación te damos tu propio tiempo estimado y lo ajustamos conforme avanzas.' },
        { q: "¿Cuándo debo empezar la terapia después de la cirugía?", a: "Cuando tu cirujano lo indique. En muchas cirugías es en los primeros días o semanas. Trae el protocolo de tu cirujano a tu primera visita para seguirlo al pie de la letra." },
        { q: "¿Puedo empezar la terapia antes de la cirugía?", a: "Sí, y con frecuencia ayuda. Llegar a la cirugía con más fuerza y movilidad, lo que se conoce como prehabilitación, puede facilitar las primeras semanas de recuperación. Es especialmente común antes de una cirugía de LCA o un reemplazo articular." },
        { q: "¿Es normal sentir algo de dolor durante la rehabilitación?", a: "Es normal sentir algo de molestia mientras recuperas movimiento y fuerza. La mantenemos en un rango que ayuda en lugar de retrasarte, y ajustamos si el dolor o la inflamación aumentan de una visita a otra." },
        { q: "¿Se comunican con mi cirujano?", a: "Sí. Le enviamos reportes de tu avance y lo contactamos si tenemos dudas sobre el protocolo o si algo parece fuera de lo normal en tu recuperación." },
      ],
    },
    sources: [
      medline('rehabilitation', 'rehabilitation', 'MedlinePlus: Rehabilitation'),
      // AAOS patient pages (English only); quoted for the recovery ranges in the FAQ above.
      { title: 'AAOS OrthoInfo: Total knee replacement', url: { en: 'https://www.orthoinfo.org/treatment/total-knee-replacement/', es: 'https://www.orthoinfo.org/treatment/total-knee-replacement/' } },
      { title: 'AAOS OrthoInfo: ACL injury, does it require surgery?', url: { en: 'https://www.orthoinfo.org/treatment/acl-injury-does-it-require-surgery/', es: 'https://www.orthoinfo.org/treatment/acl-injury-does-it-require-surgery/' } },
    ],
  },
];

export const conditionBySlug = (slug: string) => conditions.find((c) => c.slug === slug);
