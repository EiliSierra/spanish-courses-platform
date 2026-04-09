import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Regular Preterite -AR (8) ===
  { spanish: 'Hablé con mi mamá', english: 'I talked with my mom', pronunciation: 'ah-BLEH kohn mee mah-MAH', category: 'ar-verbs', audio: 'hable-con-mi-mama' },
  { spanish: 'Caminé al parque', english: 'I walked to the park', pronunciation: 'kah-mee-NEH ahl PAHR-keh', category: 'ar-verbs', audio: 'camine-al-parque' },
  { spanish: 'Cocinó una cena deliciosa', english: 'He/She cooked a delicious dinner', pronunciation: 'koh-see-NOH OO-nah SEH-nah deh-lee-see-OH-sah', category: 'ar-verbs', audio: 'cocino-una-cena' },
  { spanish: 'Compramos ropa nueva', english: 'We bought new clothes', pronunciation: 'kohm-PRAH-mohs RROH-pah NWEH-bah', category: 'ar-verbs', audio: 'compramos-ropa' },
  { spanish: 'Viajaron a México', english: 'They traveled to Mexico', pronunciation: 'bee-ah-HAH-rohn ah MEH-hee-koh', category: 'ar-verbs', audio: 'viajaron-a-mexico' },
  { spanish: '¿Estudiaste ayer?', english: 'Did you study yesterday?', pronunciation: 'ehs-too-dee-AHS-teh ah-YEHR', category: 'ar-verbs', audio: 'estudiaste-ayer' },
  { spanish: 'Trabajé todo el día', english: 'I worked all day', pronunciation: 'trah-bah-HEH TOH-doh ehl DEE-ah', category: 'ar-verbs', audio: 'trabaje-todo-el-dia' },
  { spanish: 'Llamaste a tu hermano', english: 'You called your brother', pronunciation: 'yah-MAHS-teh ah too ehr-MAH-noh', category: 'ar-verbs', audio: 'llamaste-a-tu-hermano' },

  // === Regular Preterite -ER/-IR (8) ===
  { spanish: 'Comí en un restaurante', english: 'I ate at a restaurant', pronunciation: 'koh-MEE ehn oon rehs-tow-RAHN-teh', category: 'er-ir-verbs', audio: 'comi-en-un-restaurante' },
  { spanish: 'Bebimos café', english: 'We drank coffee', pronunciation: 'beh-BEE-mohs kah-FEH', category: 'er-ir-verbs', audio: 'bebimos-cafe' },
  { spanish: 'Escribió un mensaje', english: 'He/She wrote a message', pronunciation: 'ehs-kree-bee-OH oon mehn-SAH-heh', category: 'er-ir-verbs', audio: 'escribio-un-mensaje' },
  { spanish: 'Salí temprano', english: 'I left early', pronunciation: 'sah-LEE tehm-PRAH-noh', category: 'er-ir-verbs', audio: 'sali-temprano' },
  { spanish: 'Aprendieron mucho', english: 'They learned a lot', pronunciation: 'ah-prehn-dee-EH-rohn MOO-choh', category: 'er-ir-verbs', audio: 'aprendieron-mucho' },
  { spanish: '¿Recibiste mi correo?', english: 'Did you receive my email?', pronunciation: 'reh-see-BEES-teh mee koh-RREH-oh', category: 'er-ir-verbs', audio: 'recibiste-mi-correo' },
  { spanish: 'Vivió en Colombia dos años', english: 'He/She lived in Colombia for two years', pronunciation: 'bee-bee-OH ehn koh-LOHM-bee-ah dohs AH-nyohs', category: 'er-ir-verbs', audio: 'vivio-en-colombia' },
  { spanish: 'Corrí por la mañana', english: 'I ran in the morning', pronunciation: 'koh-RREE pohr lah mah-NYAH-nah', category: 'er-ir-verbs', audio: 'corri-por-la-manana' },

  // === Irregular Preterite (10) ===
  { spanish: 'Fui al cine', english: 'I went to the movies', pronunciation: 'fwee ahl SEE-neh', category: 'irregular', audio: 'fui-al-cine' },
  { spanish: 'Fue un día increíble', english: 'It was an incredible day', pronunciation: 'fweh oon DEE-ah een-kreh-EE-bleh', category: 'irregular', audio: 'fue-un-dia-increible' },
  { spanish: 'Tuve mucho trabajo', english: 'I had a lot of work', pronunciation: 'TOO-beh MOO-choh trah-BAH-hoh', category: 'irregular', audio: 'tuve-mucho-trabajo' },
  { spanish: 'Hice la tarea', english: 'I did the homework', pronunciation: 'EE-seh lah tah-REH-ah', category: 'irregular', audio: 'hice-la-tarea' },
  { spanish: 'Dijo que sí', english: 'He/She said yes', pronunciation: 'DEE-hoh keh see', category: 'irregular', audio: 'dijo-que-si' },
  { spanish: 'Puso la mesa', english: 'He/She set the table', pronunciation: 'POO-soh lah MEH-sah', category: 'irregular', audio: 'puso-la-mesa' },
  { spanish: 'Vine a las ocho', english: 'I came at eight', pronunciation: 'BEE-neh ah lahs OH-choh', category: 'irregular', audio: 'vine-a-las-ocho' },
  { spanish: 'Pude terminar a tiempo', english: 'I was able to finish on time', pronunciation: 'POO-deh tehr-mee-NAHR ah tee-EHM-poh', category: 'irregular', audio: 'pude-terminar' },
  { spanish: 'Quiso ayudar', english: 'He/She wanted to help', pronunciation: 'KEE-soh ah-yoo-DAHR', category: 'irregular', audio: 'quiso-ayudar' },
  { spanish: 'Supe la verdad', english: 'I found out the truth', pronunciation: 'SOO-peh lah behr-DAHD', category: 'irregular', audio: 'supe-la-verdad' },

  // === Time Markers (10) ===
  { spanish: 'Ayer', english: 'Yesterday', pronunciation: 'ah-YEHR', category: 'time', audio: 'ayer' },
  { spanish: 'Anoche', english: 'Last night', pronunciation: 'ah-NOH-cheh', category: 'time', audio: 'anoche' },
  { spanish: 'La semana pasada', english: 'Last week', pronunciation: 'lah seh-MAH-nah pah-SAH-dah', category: 'time', audio: 'la-semana-pasada' },
  { spanish: 'El mes pasado', english: 'Last month', pronunciation: 'ehl mehs pah-SAH-doh', category: 'time', audio: 'el-mes-pasado' },
  { spanish: 'El año pasado', english: 'Last year', pronunciation: 'ehl AH-nyoh pah-SAH-doh', category: 'time', audio: 'el-ano-pasado' },
  { spanish: 'Hace dos días', english: 'Two days ago', pronunciation: 'AH-seh dohs DEE-ahs', category: 'time', audio: 'hace-dos-dias' },
  { spanish: 'El lunes pasado', english: 'Last Monday', pronunciation: 'ehl LOO-nehs pah-SAH-doh', category: 'time', audio: 'el-lunes-pasado' },
  { spanish: 'Esta mañana', english: 'This morning', pronunciation: 'EHS-tah mah-NYAH-nah', category: 'time', audio: 'esta-manana' },
  { spanish: 'Primero... después...', english: 'First... then...', pronunciation: 'pree-MEH-roh... dehs-PWEHS', category: 'time', audio: 'primero-despues' },
  { spanish: 'Finalmente', english: 'Finally', pronunciation: 'fee-nahl-MEHN-teh', category: 'time', audio: 'finalmente' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L31PhraseByAudio = phraseByAudio

// === STORY BUILDER (unique activity) ===

export interface StoryStep {
  prompt: string
  english: string
  correctSentence: string
  options: string[]
}

export const STORY_STEPS: StoryStep[] = [
  {
    prompt: 'Ayer por la mañana... (I woke up early)',
    english: 'Yesterday morning... I woke up early',
    correctSentence: 'Me desperté temprano',
    options: ['Me desperté temprano', 'Me despierto temprano', 'Me voy a despertar temprano', 'Me despertaba temprano'],
  },
  {
    prompt: 'Después... (I ate breakfast)',
    english: 'Then... I ate breakfast',
    correctSentence: 'Desayuné en casa',
    options: ['Desayuné en casa', 'Desayuno en casa', 'Voy a desayunar en casa', 'Desayunaba en casa'],
  },
  {
    prompt: 'A las nueve... (I went to work)',
    english: 'At nine... I went to work',
    correctSentence: 'Fui al trabajo',
    options: ['Fui al trabajo', 'Voy al trabajo', 'Iba al trabajo', 'Iré al trabajo'],
  },
  {
    prompt: 'En la oficina... (I had a meeting)',
    english: 'At the office... I had a meeting',
    correctSentence: 'Tuve una reunión importante',
    options: ['Tuve una reunión importante', 'Tengo una reunión importante', 'Tenía una reunión importante', 'Voy a tener una reunión'],
  },
  {
    prompt: 'Al mediodía... (I ate with coworkers)',
    english: 'At noon... I ate with coworkers',
    correctSentence: 'Comí con mis compañeros',
    options: ['Comí con mis compañeros', 'Como con mis compañeros', 'Comía con mis compañeros', 'Voy a comer con mis compañeros'],
  },
  {
    prompt: 'Por la noche... (I watched a movie)',
    english: 'At night... I watched a movie',
    correctSentence: 'Vi una película en casa',
    options: ['Vi una película en casa', 'Veo una película en casa', 'Veía una película', 'Voy a ver una película'],
  },
  {
    prompt: 'Finalmente... (I went to bed at eleven)',
    english: 'Finally... I went to bed at eleven',
    correctSentence: 'Me acosté a las once',
    options: ['Me acosté a las once', 'Me acuesto a las once', 'Me acostaba a las once', 'Me voy a acostar a las once'],
  },
]

// === LESSON DATA ===

export const L31Data: LessonData = {
  id: 'L3.1',
  hero: {
    lessonId: 'L3.1',
    title: 'Past Tense — Pretérito',
    subtitle: 'Telling stories about what happened',
    description: 'Learn the preterite tense to talk about completed actions in the past. Tell stories about yesterday, last week, and what happened. The key to becoming a real Spanish conversationalist!',
    image: '/images/L3.1/L3.1.jpg',
    gradient: 'from-orange-800/65 via-amber-700/55 to-yellow-700/65',
    accentColor: 'amber-200',
  },

  objectives: [
    { icon: '📖', title: 'Regular -AR Verbs', desc: 'Conjugate -AR verbs in the preterite: hablé, hablaste, habló, hablamos, hablaron.' },
    { icon: '📝', title: 'Regular -ER/-IR Verbs', desc: 'Conjugate -ER/-IR verbs: comí, comiste, comió, comimos, comieron.' },
    { icon: '⚡', title: 'Key Irregular Verbs', desc: 'Master the most common irregulars: fui, tuve, hice, dijo, puso, vine, pude.' },
    { icon: '🕐', title: 'Time Markers', desc: 'Use ayer, anoche, la semana pasada, hace dos días to anchor your stories in time.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.8', label: 'Daily Routines', detail: 'Routine verbs from L1.8 (levantarse, desayunar, trabajar) now get preterite endings.' },
    { fromLesson: 'L2.3', label: 'Near Future (ir + a)', detail: 'L2.3 taught future plans. Now you\u2019ll tell what actually happened!' },
    { fromLesson: 'L1.3', label: 'Numbers & Time', detail: 'Time expressions from L1.3 combine with past tense to say when things happened.' },
  ],

  sectionTransitions: [
    { afterSection: 'ar-verbs', text: 'You can tell stories with -AR verbs! Now let\u2019s add -ER and -IR.' },
    { afterSection: 'er-ir-verbs', text: 'Regular verbs mastered — now the tricky irregular ones!' },
    { afterSection: 'irregular-verbs', text: 'Irregulars down! Let\u2019s learn time markers to anchor your stories.' },
    { afterSection: 'dialogues', text: 'Great past-tense conversations! Let\u2019s learn about storytelling culture.' },
    { afterSection: 'cultural', text: 'Now build a complete story about your day!' },
    { afterSection: 'story-builder', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Ayer...', english: 'Yesterday...' },
    { spanish: 'Fui a...', english: 'I went to...' },
    { spanish: 'Comí...', english: 'I ate...' },
    { spanish: 'Hablé con...', english: 'I talked with...' },
    { spanish: 'Fue increíble', english: 'It was incredible' },
    { spanish: 'La semana pasada', english: 'Last week' },
  ],

  pronunciationChallenges: [
    { spanish: 'Hablé con mi amigo ayer', pronunciation: 'ah-BLEH kohn mee ah-MEE-goh ah-YEHR', english: 'I talked with my friend yesterday', audio: 'hable-con-mi-amigo-ayer', tip: 'The accent on -É is crucial! "Hablé" (I spoke) vs. "hable" (speak — subjunctive). Stress the last syllable.' },
    { spanish: 'Fui al cine anoche', pronunciation: 'fwee ahl SEE-neh ah-NOH-cheh', english: 'I went to the movies last night', audio: 'fui-al-cine-anoche', tip: '"Fui" = I went AND I was (ser/ir share the same preterite!). Context tells which: "Fui al cine" = went.' },
    { spanish: 'Comimos en un restaurante', pronunciation: 'koh-MEE-mohs ehn oon rehs-tow-RAHN-teh', english: 'We ate at a restaurant', audio: 'comimos-en-un-restaurante', tip: 'Notice: "comimos" (preterite) sounds like "comemos" (present) but with -I-! Listen carefully.' },
    { spanish: 'Tuve que trabajar el sábado', pronunciation: 'TOO-beh keh trah-bah-HAHR ehl SAH-bah-doh', english: 'I had to work on Saturday', audio: 'tuve-que-trabajar-el-sabado', tip: '"Tuve" is irregular — it\u2019s NOT "tenié." The stem changes to "tuv-." Same pattern: pude, supe, puse.' },
    { spanish: 'Hice la tarea y después salí', pronunciation: 'EE-seh lah tah-REH-ah ee dehs-PWEHS sah-LEE', english: 'I did the homework and then left', audio: 'hice-la-tarea-y-despues-sali', tip: '"Hice" from "hacer" — C changes to Z before O: "hizo" (he/she did). But "hice" keeps the C.' },
    { spanish: 'La semana pasada viajamos', pronunciation: 'lah seh-MAH-nah pah-SAH-dah bee-ah-HAH-mohs', english: 'Last week we traveled', audio: 'la-semana-pasada-viajamos', tip: '"Viajamos" — same form for present AND preterite! Only context (la semana pasada) tells you it\u2019s past.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'ar-verbs', label: '-AR Preterite' },
    { id: 'er-ir-verbs', label: '-ER/-IR Preterite' },
    { id: 'irregular-verbs', label: 'Irregular Preterite' },
    { id: 'time-markers', label: 'Time Markers' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'story-builder', label: 'Story Builder' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'ar-verbs',
      title: 'Regular -AR Preterite',
      description: 'The most common verb type. Drop -AR, add: -é, -aste, -ó, -amos, -aron.',
      tabs: [
        { label: 'Yo & Tú', color: 'orange', phrases: PHRASES.filter(p => p.category === 'ar-verbs').slice(0, 4) },
        { label: 'Él/Nosotros/Ellos', color: 'amber', phrases: PHRASES.filter(p => p.category === 'ar-verbs').slice(4) },
      ],
    },
    {
      id: 'er-ir-verbs',
      title: 'Regular -ER/-IR Preterite',
      description: '-ER and -IR share the SAME endings! Drop ending, add: -í, -iste, -ió, -imos, -ieron.',
      tabs: [
        { label: 'Yo & Tú', color: 'blue', phrases: PHRASES.filter(p => p.category === 'er-ir-verbs').slice(0, 4) },
        { label: 'Él/Nosotros/Ellos', color: 'purple', phrases: PHRASES.filter(p => p.category === 'er-ir-verbs').slice(4) },
      ],
    },
    {
      id: 'irregular-verbs',
      title: 'Irregular Preterite',
      description: 'These high-frequency verbs break the rules. Memorize them — you\u2019ll use them every day!',
      tabs: [
        { label: 'Ser/Ir & Tener', color: 'rose', phrases: PHRASES.filter(p => p.category === 'irregular').slice(0, 5) },
        { label: 'More Irregulars', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'irregular').slice(5) },
      ],
    },
    {
      id: 'time-markers',
      title: 'Time Markers',
      description: 'Anchor your stories in time. These words signal you\u2019re talking about the past.',
      tabs: [
        { label: 'When?', color: 'teal', phrases: PHRASES.filter(p => p.category === 'time').slice(0, 5) },
        { label: 'Sequence', color: 'amber', phrases: PHRASES.filter(p => p.category === 'time').slice(5) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Accent Mark Is Everything!',
      content: 'In preterite, accent marks distinguish persons and tenses. "Habló" (he spoke) vs. "hablo" (I speak). "Comí" (I ate) vs. "comi" (doesn\u2019t exist!). Always stress the accented syllable. Without it, you might be saying a completely different thing!',
      example: 'Hablé (I spoke) vs. Hable (subjunctive) | Habló (he spoke) vs. Hablo (I speak)',
    },
    {
      title: '-AR vs. -ER/-IR Endings',
      content: '-AR verbs: -é, -aste, -ó, -amos, -aron. -ER/-IR verbs: -í, -iste, -ió, -imos, -ieron. Notice: -AR uses É/Ó while -ER/-IR uses Í/IÓ. The "nosotros" form is identical to present for -AR and -IR verbs! Only context helps.',
      example: 'Hablamos (we speak / we spoke) | Vivimos (we live / we lived)',
      reviewFrom: 'L1.8',
    },
    {
      title: 'Irregular Stem Changes — The Pattern',
      content: 'Many irregular preterites share a pattern: new stem + special endings (-e, -iste, -o, -imos, -ieron). Tener → tuv- (tuve, tuviste, tuvo). Poder → pud-. Poner → pus-. Saber → sup-. Hacer → hic-/hiz-. No accent marks on these!',
      example: 'Tuve, tuviste, tuvo | Pude, pudiste, pudo | Hice, hiciste, hizo',
    },
    {
      title: 'Ser & Ir — Same Preterite!',
      content: 'The biggest surprise in Spanish: SER and IR have the EXACT same preterite forms! Fui, fuiste, fue, fuimos, fueron. "Fui al cine" = I WENT (ir). "Fue increíble" = It WAS (ser). Context always makes it clear. Don\u2019t overthink it!',
      example: 'Fui al parque (I went) | Fue divertido (It was fun) | Fuimos amigos (We were friends)',
    },
  ],

  flashcardGroups: [
    {
      key: 'regular-ar',
      label: 'Regular -AR',
      audioKeys: ['hable-con-mi-mama', 'camine-al-parque', 'cocino-una-cena', 'compramos-ropa', 'viajaron-a-mexico', 'estudiaste-ayer', 'trabaje-todo-el-dia', 'llamaste-a-tu-hermano'],
    },
    {
      key: 'regular-er-ir',
      label: 'Regular -ER/-IR',
      audioKeys: ['comi-en-un-restaurante', 'bebimos-cafe', 'escribio-un-mensaje', 'sali-temprano', 'aprendieron-mucho', 'recibiste-mi-correo', 'vivio-en-colombia', 'corri-por-la-manana'],
    },
    {
      key: 'irregular-time',
      label: 'Irregulars & Time',
      audioKeys: ['fui-al-cine', 'fue-un-dia-increible', 'tuve-mucho-trabajo', 'hice-la-tarea', 'dijo-que-si', 'ayer', 'anoche', 'la-semana-pasada', 'hace-dos-dias'],
    },
  ],

  matchPairs: [
    { left: 'Hablé', right: 'I spoke' },
    { left: 'Comí', right: 'I ate' },
    { left: 'Fui', right: 'I went / I was' },
    { left: 'Tuve', right: 'I had' },
    { left: 'Hice', right: 'I did / made' },
    { left: 'Ayer', right: 'Yesterday' },
    { left: 'Anoche', right: 'Last night' },
    { left: 'La semana pasada', right: 'Last week' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Regular vs. Irregular',
      instruction: 'Is this verb regular or irregular in the preterite?',
      buckets: ['Regular ✓', 'Irregular ⚡'],
      items: [
        { text: 'Hablé', bucket: 'Regular ✓' },
        { text: 'Comí', bucket: 'Regular ✓' },
        { text: 'Caminé', bucket: 'Regular ✓' },
        { text: 'Escribió', bucket: 'Regular ✓' },
        { text: 'Fui', bucket: 'Irregular ⚡' },
        { text: 'Tuve', bucket: 'Irregular ⚡' },
        { text: 'Hice', bucket: 'Irregular ⚡' },
        { text: 'Dijo', bucket: 'Irregular ⚡' },
      ],
    },
    {
      title: 'Present vs. Preterite',
      instruction: 'Is this sentence about NOW or the PAST?',
      buckets: ['Present (now)', 'Preterite (past)'],
      items: [
        { text: 'Hablo español', bucket: 'Present (now)' },
        { text: 'Como a las doce', bucket: 'Present (now)' },
        { text: 'Trabajo en una oficina', bucket: 'Present (now)' },
        { text: 'Voy al parque', bucket: 'Present (now)' },
        { text: 'Hablé con mi mamá', bucket: 'Preterite (past)' },
        { text: 'Comí en un restaurante', bucket: 'Preterite (past)' },
        { text: 'Trabajé todo el día', bucket: 'Preterite (past)' },
        { text: 'Fui al parque', bucket: 'Preterite (past)' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Verb Sorting',

  dialogues: [
    {
      id: 'dialogue-weekend',
      title: 'What Did You Do This Weekend? — Bogotá',
      location: 'Bogotá',
      lines: [
        { speaker: 'Andrea', text: '¡Hola! ¿Qué hiciste el fin de semana?', audio: '/audio/L3.1/phrases/d1-line1.mp3' },
        { speaker: 'Carlos', text: 'El sábado fui al centro comercial y compré ropa nueva.', audio: '/audio/L3.1/phrases/d1-line2.mp3', annotations: [{ phrase: 'centro comercial', fromLesson: 'L2.6', note: 'Shopping vocabulary from L2.6' }] },
        { speaker: 'Andrea', text: '¡Qué bien! ¿Y el domingo?', audio: '/audio/L3.1/phrases/d1-line3.mp3' },
        { speaker: 'Carlos', text: 'Cociné una pasta con mi novia y después vimos una película.', audio: '/audio/L3.1/phrases/d1-line4.mp3' },
        { speaker: 'Andrea', text: '¿Qué película vieron?', audio: '/audio/L3.1/phrases/d1-line5.mp3' },
        { speaker: 'Carlos', text: 'Vimos una comedia colombiana. Fue muy divertida. ¿Y tú?', audio: '/audio/L3.1/phrases/d1-line6.mp3', annotations: [{ phrase: 'divertida', fromLesson: 'L2.7', note: 'Personality/description from L2.7' }] },
        { speaker: 'Andrea', text: 'Yo salí con mis amigas el viernes. Cenamos en un restaurante nuevo.', audio: '/audio/L3.1/phrases/d1-line7.mp3' },
        { speaker: 'Carlos', text: '¿Les gustó el restaurante?', audio: '/audio/L3.1/phrases/d1-line8.mp3' },
        { speaker: 'Andrea', text: '¡Sí! La comida estuvo deliciosa. Después caminamos por el parque.', audio: '/audio/L3.1/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-trip',
      title: 'A Trip to the Beach — San Juan',
      location: 'San Juan',
      lines: [
        { speaker: 'Luis', text: '¿Fuiste a la playa la semana pasada?', audio: '/audio/L3.1/phrases/d2-line1.mp3' },
        { speaker: 'María', text: 'Sí, fuimos a Rincón. Salimos el viernes por la mañana.', audio: '/audio/L3.1/phrases/d2-line2.mp3' },
        { speaker: 'Luis', text: '¿Cómo estuvo el viaje?', audio: '/audio/L3.1/phrases/d2-line3.mp3' },
        { speaker: 'María', text: 'Fue increíble. Nadamos, tomamos sol y comimos mariscos frescos.', audio: '/audio/L3.1/phrases/d2-line4.mp3' },
        { speaker: 'Luis', text: '¿Dónde se quedaron?', audio: '/audio/L3.1/phrases/d2-line5.mp3', annotations: [{ phrase: 'se quedaron', fromLesson: 'L2.4', note: 'Hotel/staying from L2.4' }] },
        { speaker: 'María', text: 'Encontramos un hotel pequeño cerca de la playa. Costó muy poco.', audio: '/audio/L3.1/phrases/d2-line6.mp3' },
        { speaker: 'Luis', text: '¿Qué fue lo mejor del viaje?', audio: '/audio/L3.1/phrases/d2-line7.mp3' },
        { speaker: 'María', text: 'El atardecer. Vimos el sol desde la playa. Fue mágico.', audio: '/audio/L3.1/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Share weekend stories in Bogotá and relive a beach trip in Puerto Rico.',

  culturalNotes: [
    {
      title: '¿Qué hiciste? — The Universal Conversation Starter',
      content: '"¿Qué hiciste?" (What did you do?) and "¿Qué tal el fin de semana?" (How was the weekend?) are how most Monday conversations begin in Latin America. People love sharing stories — about food, family, trips, and adventures. The preterite is the storytelling tense, and mastering it opens the door to real, natural conversations.',
    },
    {
      title: 'Storytelling Culture in Latin America',
      content: 'Latin American cultures are deeply oral and narrative. Families share stories over meals (sobremesa from L1.4!), friends recount their weekends with vivid detail, and storytelling is a social art. Using "primero... después... finalmente..." to structure a story is natural and expected. The more detail, the better!',
    },
    {
      title: 'Regional Past Tense Differences',
      content: 'In Spain, the "pretérito perfecto" (he hablado — present perfect) is used for recent past: "Hoy he comido pizza" (Today I have eaten pizza). In Latin America, the simple preterite is preferred: "Hoy comí pizza." Both are correct! This course teaches the Latin American style, which is simpler and more widely used across the Americas.',
    },
  ],
  culturalGradient: 'from-orange-50 to-amber-50',

  quiz: [
    { id: 1, type: 'mc', text: 'The preterite of "hablar" (yo) is:', options: ['Hablo', 'Hablé', 'Hablaba', 'Hablaré'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Ayer ___ al cine" (I went)', answer: 'fui' },
    { id: 3, type: 'mc', text: '"Comimos" is the preterite form for:', options: ['I', 'You', 'We', 'They'], answer: 2 },
    { id: 4, type: 'tf', text: 'SER and IR have the same preterite forms (fui, fuiste, fue...).', answer: true },
    { id: 5, type: 'mc', text: '"Tuve mucho trabajo" means:', options: ['I have a lot of work', 'I had a lot of work', 'I will have work', 'I want work'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Ella ___ la verdad" (said — decir)', answer: 'dijo' },
    { id: 7, type: 'mc', text: 'Which is the correct -ER preterite ending for "yo"?', options: ['-é', '-í', '-ió', '-ieron'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what did Carlos cook on Sunday?', options: ['Rice', 'Pasta', 'Chicken', 'Fish'], answer: 1 },
    { id: 9, type: 'tf', text: '"Hablamos" can be both present AND preterite for -AR verbs.', answer: true },
    { id: 10, type: 'mc', text: '"Anoche" means:', options: ['This morning', 'Last night', 'Yesterday', 'Last week'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "___ la tarea ayer" (I did — hacer)', answer: 'Hice' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, where did María go?', options: ['A mountain', 'A lake', 'A beach', 'A city'], answer: 2 },
    { id: 13, type: 'mc', text: '"Hace dos días" means:', options: ['In two days', 'Two days ago', 'Two days later', 'Every two days'], answer: 1 },
    { id: 14, type: 'tf', text: 'In Latin America, simple preterite is preferred over present perfect for recent past.', answer: true },
    { id: 15, type: 'mc', text: '"Puse la mesa" — "puse" comes from:', options: ['Pasar', 'Poner', 'Poder', 'Pedir'], answer: 1 },
  ],

  audioBase: '/audio/L3.1/phrases',

  uniqueActivity: {
    id: 'StoryBuilderL31',
    sectionId: 'story-builder',
    sectionColor: 'bg-amber-50/40',
    sectionBorder: 'border-amber-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'ar-verbs': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'er-ir-verbs': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'irregular-verbs': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'time-markers': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'story-builder': { bg: 'bg-amber-50/40', border: 'border-amber-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
