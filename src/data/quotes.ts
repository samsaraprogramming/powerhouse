/**
 * Patient quotes from Google reviews, matched to the page they appear on.
 * Every fragment is copied word for word from the review (only trimmed, marked with …), so they stay in
 * English on the Spanish pages. Names are first name + last initial.
 *
 * Condition pages use the "Then / Now" layout (`came` + `now`); service pages and bios use the
 * hanging quote (`text`). Before adding one, check it word for word against the review on Google.
 */
import type { Lang } from '../i18n/ui';

type Bi = Record<Lang, string>;

export interface TurnQuote {
  name: string;
  context: Bi;
  came: string;
  now: string;
}

export interface HangQuote {
  name: string;
  context: Bi;
  text: string;
}

export const conditionQuotes: Record<string, TurnQuote> = {
  'knee-pain': {
    name: 'Miguel G.',
    context: { en: 'ACL recovery with Dr. Sandra Gomez', es: 'Recuperación de LCA con la Dra. Sandra Gomez' },
    came: '…my first appointment she noticed I wasn’t fully extending my knee when I would walk.',
    now: 'Now I am confident to play sports again and run like before if not better.',
  },
  'back-pain-sciatica': {
    name: 'Peter K.',
    context: { en: 'Lower back, with Dr. Sandra Gomez', es: 'Espalda baja, con la Dra. Sandra Gomez' },
    came: 'I was on a path to using steroid shots and rest as the recommended protocol.',
    now: '…I experienced better mobility and less pain…without drugs!',
  },
  'shoulder-pain': {
    name: 'Jonathan S.',
    context: { en: 'Shoulder, with Dr. Sandra Gomez', es: 'Hombro, con la Dra. Sandra Gomez' },
    came: 'I’ve been having shoulder pain and discomfort for quite some time and it started to affect my workouts including my sleep',
    now: '…she was able to help me get my shoulder back to feeling comfortable.',
  },
  'hip-pain': {
    name: 'Dominic H.',
    context: { en: 'Hip flexor tear, with Dr. Sandra Gomez', es: 'Desgarro del flexor de cadera, con la Dra. Sandra Gomez' },
    came: 'While powerlifting, I sustained a tear in my hip flexor.',
    now: '…she had me back in the gym, hitting my normal weights, in no time.',
  },
  'foot-ankle-pain': {
    name: 'Evelyn Q.',
    context: { en: 'Ankle, with Dr. Sandra Gomez', es: 'Tobillo, con la Dra. Sandra Gomez' },
    came: 'I was in pain everyday from my right ankle( I couldn’t even go down the stairs)',
    now: '…just from a few sessions I saw improvement and now I am pain free.',
  },
  'elbow-pain': {
    name: 'Francisco N.',
    context: { en: 'Tennis elbow, with Dr. Sandra Gomez', es: 'Codo de tenista, con la Dra. Sandra Gomez' },
    came: 'I came in dealing with a persistent tennis elbow that was affecting my tennis game.',
    now: '…Im now back on the tennis court feeling significantly better and more confident.',
  },
  'acl-injury': {
    name: 'Oli R.',
    context: { en: 'Parents of a football player, after ACL surgery', es: 'Padres de un jugador de fútbol americano, después de cirugía de LCA' },
    came: 'After his ACL surgery, this has been such a long and emotional road for our family…',
    now: '…helping him get back to doing what he loves most: playing football.',
  },
  'sports-injuries': {
    name: 'Vanessa R.',
    context: { en: 'Her son, a baseball player, with Dr. Sandra Gomez', es: 'Su hijo, beisbolista, con la Dra. Sandra Gomez' },
    came: 'When my son began his therapy he had no range of motion…',
    now: 'Not only did she get his full range of motion back but she also strengthened his shoulder and elbow.',
  },
  'running-injuries': {
    name: 'Mikey C.',
    context: { en: 'Running injuries', es: 'Lesiones al correr' },
    came: 'I would get injured often and would not have consistent training because of injuries.',
    now: '…my overall running improved tremendously and was even hit multiple personal records throughout my season.',
  },
  'hamstring-groin-strains': {
    name: 'Sharlyn P.',
    context: { en: 'Her daughter, a young athlete, with Dr. Sandra Gomez', es: 'Su hija, una joven atleta, con la Dra. Sandra Gomez' },
    came: '…my 11 year old who has had 2 knee surgeries and had pulled a hamstring at the time.',
    now: 'Dr. Gomez has not only done such a great job overall with my daughter being pain free, but has also made her understand the importance of taking care of her body while being a full time athlete.',
  },
  'post-surgical-rehab': {
    name: 'Emilio G.',
    context: { en: 'After ACL surgery, with Gina and Dr. Sandra Gomez', es: 'Después de cirugía de LCA, con Gina y la Dra. Sandra Gomez' },
    came: 'I started going to Powerhouse Therapy 2 weeks post ACL surgery with a lot of pain and barely any mobility or strength.',
    now: 'Within 2 weeks of starting therapy, I had already noticed a drastic difference.',
  },
};

export const serviceQuotes: Record<string, HangQuote> = {
  'orthopedic-pt': {
    name: 'Edward D.',
    context: { en: 'Lower back, with Dr. Sandra Gomez', es: 'Espalda baja, con la Dra. Sandra Gomez' },
    text: 'I came in with a lower back issue, and Dr. Gómez immediately put together a plan to get me back to 100%. … I just closed my case fully recovered and happy with my results.',
  },
  'sports-performance': {
    name: 'Mauricio R.',
    context: { en: 'Knee pain, with Dr. Sandra Gomez', es: 'Dolor de rodilla, con la Dra. Sandra Gomez' },
    text: 'Went in for knee pain, after good PT, some dry needling (which I highly recommend) and movement adjustments to my training, my knee pain was gone and my PR’s came back',
  },
  'running-analysis': {
    name: 'Priscilla V.',
    context: { en: 'Back to running, with Dr. Sandra Gomez', es: 'De vuelta a correr, con la Dra. Sandra Gomez' },
    text: 'She provided me with effective ways to improve my strength and mobility, and thanks to her guidance, I’m now able to run pain-free and injury-free.',
  },
  'dry-needling': {
    name: 'Jose C.',
    context: { en: 'Upper back, with Dr. Sandra Gomez', es: 'Espalda alta, con la Dra. Sandra Gomez' },
    text: 'After two treatments of dry needling and therapy work with Dr. Sandra, I felt an immediate and positive impact on the area of discomfort that I had not felt before.',
  },
};

export const bioQuotes: Record<string, HangQuote> = {
  sandra: {
    name: 'Roberto R.',
    context: { en: 'Meniscus and Achilles recovery', es: 'Recuperación de menisco y tendón de Aquiles' },
    text: 'Sandra knows when to push you, even when you feel like you can’t do something, but she also makes sure you’re progressing the right way.',
  },
  leslie: {
    name: 'Asela A.',
    context: { en: 'Back, after two surgeries', es: 'Espalda, después de dos cirugías' },
    text: 'Dr. Leslie always monitored my progress and modified exercises every session. I always felt like she was keeping me at the right pace, not too slow and not too fast.',
  },
  georgina: {
    name: 'Diana S.',
    context: { en: 'Hip recovery', es: 'Recuperación de cadera' },
    text: 'Gina was my therapist, and she played a big part in helping me recover from my hip. They truly gave me my life back, and I feel much stronger now than I did before.',
  },
  alejandro: {
    name: 'Rolando G.',
    context: { en: 'With Alex, Gina and Dr. Leslie', es: 'Con Alex, Gina y la Dra. Leslie' },
    text: 'Having worked directly with Gina, Leslie, and Alex throughout my time in therapy, they were able to go above and beyond with getting me back to what my activity level was pre injury.',
  },
};
