import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Regular Imperfect -AR (10) ===
  { spanish: 'Yo hablaba mucho de niño', english: 'I used to talk a lot as a child', pronunciation: 'yoh ah-BLAH-bah MOO-choh deh NEE-nyoh', category: 'ar-imperfect', audio: 'hablaba-mucho' },
  { spanish: 'Caminaba al colegio todos los días', english: 'I used to walk to school every day', pronunciation: 'kah-mee-NAH-bah ahl koh-LEH-hee-oh TOH-dohs lohs DEE-ahs', category: 'ar-imperfect', audio: 'caminaba-al-colegio' },
  { spanish: 'Jugaba con mis amigos en el parque', english: 'I used to play with my friends in the park', pronunciation: 'hoo-GAH-bah kohn mees ah-MEE-gohs ehn ehl PAHR-keh', category: 'ar-imperfect', audio: 'jugaba-con-amigos' },
  { spanish: 'Mi abuela cocinaba los domingos', english: 'My grandmother used to cook on Sundays', pronunciation: 'mee ah-BWEH-lah koh-see-NAH-bah lohs doh-MEEN-gohs', category: 'ar-imperfect', audio: 'abuela-cocinaba' },
  { spanish: 'Estudiábamos juntos después de clases', english: 'We used to study together after class', pronunciation: 'ehs-too-dee-AH-bah-mohs HOON-tohs dehs-PWEHS deh KLAH-sehs', category: 'ar-imperfect', audio: 'estudiabamos-juntos' },
  { spanish: 'Mi papá trabajaba en una fábrica', english: 'My dad used to work in a factory', pronunciation: 'mee pah-PAH trah-bah-HAH-bah ehn OO-nah FAH-bree-kah', category: 'ar-imperfect', audio: 'papa-trabajaba' },
  { spanish: '¿Cantabas en el coro de la escuela?', english: 'Did you use to sing in the school choir?', pronunciation: 'kahn-TAH-bahs ehn ehl KOH-roh deh lah ehs-KWEH-lah', category: 'ar-imperfect', audio: 'cantabas-coro' },
  { spanish: 'Mis hermanos peleaban todo el tiempo', english: 'My siblings used to fight all the time', pronunciation: 'mees ehr-MAH-nohs peh-leh-AH-bahn TOH-doh ehl tee-EHM-poh', category: 'ar-imperfect', audio: 'hermanos-peleaban' },
  { spanish: 'Ella dibujaba muy bien', english: 'She used to draw very well', pronunciation: 'EH-yah dee-boo-HAH-bah mooy bee-EHN', category: 'ar-imperfect', audio: 'dibujaba-bien' },
  { spanish: 'Tomábamos helado en verano', english: 'We used to have ice cream in summer', pronunciation: 'toh-MAH-bah-mohs eh-LAH-doh ehn beh-RAH-noh', category: 'ar-imperfect', audio: 'tomabamos-helado' },

  // === Regular Imperfect -ER/-IR (8) ===
  { spanish: 'Comía en casa de mi abuela', english: 'I used to eat at my grandmother\'s house', pronunciation: 'koh-MEE-ah ehn KAH-sah deh mee ah-BWEH-lah', category: 'er-ir-imperfect', audio: 'comia-casa-abuela' },
  { spanish: 'Vivíamos en un pueblo pequeño', english: 'We used to live in a small town', pronunciation: 'bee-BEE-ah-mohs ehn oon PWEH-bloh peh-KEH-nyoh', category: 'er-ir-imperfect', audio: 'viviamos-pueblo' },
  { spanish: 'Tenía un perro que se llamaba Max', english: 'I had a dog named Max', pronunciation: 'teh-NEE-ah oon PEH-rroh keh seh yah-MAH-bah mahks', category: 'er-ir-imperfect', audio: 'tenia-perro' },
  { spanish: 'Leía cuentos antes de dormir', english: 'I used to read stories before sleeping', pronunciation: 'leh-EE-ah KWEHN-tohs AHN-tehs deh dohr-MEER', category: 'er-ir-imperfect', audio: 'leia-cuentos' },
  { spanish: 'Escribía cartas a mi prima', english: 'I used to write letters to my cousin', pronunciation: 'ehs-kree-BEE-ah KAHR-tahs ah mee PREE-mah', category: 'er-ir-imperfect', audio: 'escribia-cartas' },
  { spanish: '¿Qué querías ser de grande?', english: 'What did you want to be when you grew up?', pronunciation: 'keh keh-REE-ahs sehr deh GRAHN-deh', category: 'er-ir-imperfect', audio: 'querias-ser' },
  { spanish: 'Dormían con la luz encendida', english: 'They used to sleep with the light on', pronunciation: 'dohr-MEE-ahn kohn lah loos ehn-sehn-DEE-dah', category: 'er-ir-imperfect', audio: 'dormian-luz' },
  { spanish: 'Corríamos por el campo', english: 'We used to run through the field', pronunciation: 'koh-RREE-ah-mohs pohr ehl KAHM-poh', category: 'er-ir-imperfect', audio: 'corriamos-campo' },

  // === Irregular Imperfect (6) — only 3 irregular verbs: ser, ir, ver ===
  { spanish: 'Era muy tímido de niño', english: 'I was very shy as a child', pronunciation: 'EH-rah mooy TEE-mee-doh deh NEE-nyoh', category: 'irregular-imperfect', audio: 'era-timido' },
  { spanish: 'Mi ciudad era más tranquila antes', english: 'My city was calmer before', pronunciation: 'mee see-oo-DAHD EH-rah mahs trahn-KEE-lah AHN-tehs', category: 'irregular-imperfect', audio: 'ciudad-era-tranquila' },
  { spanish: 'Iba a la playa cada verano', english: 'I used to go to the beach every summer', pronunciation: 'EE-bah ah lah PLAH-yah KAH-dah beh-RAH-noh', category: 'irregular-imperfect', audio: 'iba-playa' },
  { spanish: 'Íbamos al mercado los sábados', english: 'We used to go to the market on Saturdays', pronunciation: 'EE-bah-mohs ahl mehr-KAH-doh lohs SAH-bah-dohs', category: 'irregular-imperfect', audio: 'ibamos-mercado' },
  { spanish: 'Veía caricaturas por la mañana', english: 'I used to watch cartoons in the morning', pronunciation: 'beh-EE-ah kah-ree-kah-TOO-rahs pohr lah mah-NYAH-nah', category: 'irregular-imperfect', audio: 'veia-caricaturas' },
  { spanish: 'Veíamos las estrellas desde el techo', english: 'We used to watch the stars from the roof', pronunciation: 'beh-EE-ah-mohs lahs ehs-TREH-yahs DEHS-deh ehl TEH-choh', category: 'irregular-imperfect', audio: 'veiamos-estrellas' },

  // === Childhood / Habitual Past (14) ===
  { spanish: 'Cuando era niño, todo era diferente', english: 'When I was a child, everything was different', pronunciation: 'KWAHN-doh EH-rah NEE-nyoh TOH-doh EH-rah dee-feh-REHN-teh', category: 'childhood', audio: 'cuando-era-nino' },
  { spanish: 'De pequeño, me gustaba trepar árboles', english: 'As a kid, I liked climbing trees', pronunciation: 'deh peh-KEH-nyoh meh goos-TAH-bah treh-PAHR AHR-boh-lehs', category: 'childhood', audio: 'de-pequeno-trepar' },
  { spanish: 'Siempre llovía en diciembre', english: 'It always rained in December', pronunciation: 'see-EHM-preh yoh-BEE-ah ehn dee-see-EHM-breh', category: 'childhood', audio: 'siempre-llovia' },
  { spanish: 'No había internet en esa época', english: 'There was no internet back then', pronunciation: 'noh ah-BEE-ah een-tehr-NEHT ehn EH-sah EH-poh-kah', category: 'childhood', audio: 'no-habia-internet' },
  { spanish: 'Antes la vida era más sencilla', english: 'Life used to be simpler before', pronunciation: 'AHN-tehs lah BEE-dah EH-rah mahs sehn-SEE-yah', category: 'childhood', audio: 'antes-vida-sencilla' },
  { spanish: 'Todos los veranos visitábamos a los abuelos', english: 'Every summer we used to visit the grandparents', pronunciation: 'TOH-dohs lohs beh-RAH-nohs bee-see-TAH-bah-mohs ah lohs ah-BWEH-lohs', category: 'childhood', audio: 'veranos-abuelos' },
  { spanish: 'Mi mamá me contaba historias', english: 'My mom used to tell me stories', pronunciation: 'mee mah-MAH meh kohn-TAH-bah ees-TOH-ree-ahs', category: 'childhood', audio: 'mama-contaba' },
  { spanish: 'Mientras dormía, soñaba con volar', english: 'While I slept, I dreamed about flying', pronunciation: 'mee-EHN-trahs dohr-MEE-ah soh-NYAH-bah kohn boh-LAHR', category: 'childhood', audio: 'sonaba-volar' },
  { spanish: 'En esos tiempos no existían los celulares', english: 'Back then cell phones didn\'t exist', pronunciation: 'ehn EH-sohs tee-EHM-pohs noh ehk-sees-TEE-ahn lohs seh-loo-LAH-rehs', category: 'childhood', audio: 'no-existian-celulares' },
  { spanish: 'La escuela quedaba a dos cuadras', english: 'The school was two blocks away', pronunciation: 'lah ehs-KWEH-lah keh-DAH-bah ah dohs KWAH-drahs', category: 'childhood', audio: 'escuela-dos-cuadras' },
  { spanish: 'Hacía mucho calor en mi pueblo', english: 'It was very hot in my town', pronunciation: 'ah-SEE-ah MOO-choh kah-LOHR ehn mee PWEH-bloh', category: 'childhood', audio: 'hacia-calor-pueblo' },
  { spanish: 'Nos conocíamos todos en el barrio', english: 'We all knew each other in the neighborhood', pronunciation: 'nohs koh-noh-SEE-ah-mohs TOH-dohs ehn ehl BAH-rree-oh', category: 'childhood', audio: 'conociamos-barrio' },
  { spanish: 'Cada noche cenábamos en familia', english: 'Every night we used to have dinner as a family', pronunciation: 'KAH-dah NOH-cheh seh-NAH-bah-mohs ehn fah-MEE-lee-ah', category: 'childhood', audio: 'cenabamos-familia' },
  { spanish: 'Los fines de semana eran para jugar', english: 'Weekends were for playing', pronunciation: 'lohs FEE-nehs deh seh-MAH-nah EH-rahn PAH-rah hoo-GAHR', category: 'childhood', audio: 'fines-semana-jugar' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L41PhraseByAudio = phraseByAudio

// === MEMORY LANE (unique activity) ===

export interface MemoryLaneChallenge {
  sentence: string
  english: string
  correctTense: 'imperfect' | 'preterite'
  explanation: string
}

export const MEMORY_LANE_CHALLENGES: MemoryLaneChallenge[] = [
  {
    sentence: 'Cuando era niño, jugaba en la calle.',
    english: 'When I was a child, I used to play in the street.',
    correctTense: 'imperfect',
    explanation: 'Habitual action in the past — something that happened repeatedly over time. Key phrase: "cuando era niño."',
  },
  {
    sentence: 'Ayer compré un libro nuevo.',
    english: 'Yesterday I bought a new book.',
    correctTense: 'preterite',
    explanation: 'A completed, one-time action with a specific time marker: "ayer." This is preterite territory!',
  },
  {
    sentence: 'Siempre llovía en diciembre.',
    english: 'It always rained in December.',
    correctTense: 'imperfect',
    explanation: '"Siempre" (always) signals a habitual, recurring situation — classic imperfect.',
  },
  {
    sentence: 'El martes pasado fui al doctor.',
    english: 'Last Tuesday I went to the doctor.',
    correctTense: 'preterite',
    explanation: 'Specific day + completed action = preterite. "El martes pasado" pins it to one moment.',
  },
  {
    sentence: 'Mi abuela hacía las mejores empanadas.',
    english: 'My grandmother used to make the best empanadas.',
    correctTense: 'imperfect',
    explanation: 'Describing a characteristic or habitual action of someone in the past — imperfect for descriptions and habits.',
  },
  {
    sentence: 'Anoche terminé la tarea a las diez.',
    english: 'Last night I finished the homework at ten.',
    correctTense: 'preterite',
    explanation: '"Anoche" + "a las diez" = specific completed event. Preterite tells the story of what happened.',
  },
  {
    sentence: 'Todos los días caminábamos al río.',
    english: 'Every day we used to walk to the river.',
    correctTense: 'imperfect',
    explanation: '"Todos los días" = every day. Repeated, habitual action in the past = imperfect.',
  },
  {
    sentence: 'De repente sonó el teléfono.',
    english: 'Suddenly the phone rang.',
    correctTense: 'preterite',
    explanation: '"De repente" (suddenly) signals an interruption — a single, completed event that broke into the scene. Preterite!',
  },
]

// === LESSON DATA ===

export const L41Data: LessonData = {
  id: 'L4.1',
  hero: {
    lessonId: 'L4.1',
    title: 'Imperfect Tense — Imperfecto',
    subtitle: 'Describing how things used to be',
    description: 'Learn the imperfect tense to talk about habitual past actions, background descriptions, and childhood memories. The imperfect paints the scene — the preterite tells the story. Master both and you\'ll sound truly fluent!',
    image: '/images/L4.1/L4.1.jpg',
    gradient: 'from-purple-800/65 via-violet-700/55 to-indigo-700/65',
    accentColor: 'purple-200',
  },

  objectives: [
    { icon: '📖', title: 'Regular -AR Imperfect', desc: 'Conjugate -AR verbs in the imperfect: hablaba, hablabas, hablaba, hablábamos, hablaban.' },
    { icon: '📝', title: 'Regular -ER/-IR Imperfect', desc: 'Conjugate -ER/-IR verbs: comía, comías, comía, comíamos, comían.' },
    { icon: '⚡', title: 'Only 3 Irregulars!', desc: 'Great news — only ser (era), ir (iba), and ver (veía) are irregular in the imperfect!' },
    { icon: '🧒', title: 'Childhood & Habitual Past', desc: 'Use "cuando era niño," "de pequeño," "siempre," "todos los días" to tell childhood stories.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L3.1', label: 'Preterite Tense', detail: 'L3.1 taught completed past actions. Now learn the imperfect for ongoing/habitual past — they work together!' },
    { fromLesson: 'L1.8', label: 'Daily Routines', detail: 'Daily routine verbs from L1.8 (levantarse, desayunar) now describe what you USED TO do.' },
    { fromLesson: 'L2.7', label: 'Describing People & Things', detail: 'L2.7 descriptions in the present — now describe how people and places WERE in the past.' },
  ],

  sectionTransitions: [
    { afterSection: 'ar-imperfect', text: 'Great! -AR imperfect is simple and regular. Now let\u2019s add -ER and -IR verbs.' },
    { afterSection: 'er-ir-imperfect', text: 'Two groups down! Now for the best news — only THREE irregular verbs!' },
    { afterSection: 'irregular-imperfect', text: 'Irregulars done! Let\u2019s use everything to talk about childhood memories.' },
    { afterSection: 'dialogues', text: 'Beautiful conversations about the past! Let\u2019s explore the culture of nostalgia.' },
    { afterSection: 'cultural', text: 'Now test yourself — imperfect or preterite? Memory Lane awaits!' },
    { afterSection: 'memory-lane', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Cuando era niño/a...', english: 'When I was a child...' },
    { spanish: 'De pequeño/a...', english: 'As a kid...' },
    { spanish: 'Siempre...', english: 'Always / I always used to...' },
    { spanish: 'Antes...', english: 'Before / Back then...' },
    { spanish: 'Todos los días...', english: 'Every day...' },
    { spanish: 'En esa época...', english: 'Back in those days...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Yo hablaba con mi abuela todos los días', pronunciation: 'yoh ah-BLAH-bah kohn mee ah-BWEH-lah TOH-dohs lohs DEE-ahs', english: 'I used to talk with my grandmother every day', audio: 'hablaba-mucho', tip: 'The -ABA ending repeats for all -AR imperfect forms. It\u2019s smooth and rhythmic: hablaba, caminaba, jugaba. No accent marks needed except for nosotros (hablÁbamos)!' },
    { spanish: 'Comía en casa de mi abuela', pronunciation: 'koh-MEE-ah ehn KAH-sah deh mee ah-BWEH-lah', english: 'I used to eat at my grandmother\u2019s house', audio: 'comia-casa-abuela', tip: 'For -ER/-IR verbs, the imperfect uses -ÍA. Always accented: comía, vivía, dormía. The stress falls on the Í.' },
    { spanish: 'Era muy tímido de niño', pronunciation: 'EH-rah mooy TEE-mee-doh deh NEE-nyoh', english: 'I was very shy as a child', audio: 'era-timido', tip: '"Era" is one of only 3 irregular imperfect verbs! Era, eras, era, éramos, eran. Compare with preterite "fui" — completely different!' },
    { spanish: 'Iba a la playa cada verano', pronunciation: 'EE-bah ah lah PLAH-yah KAH-dah beh-RAH-noh', english: 'I used to go to the beach every summer', audio: 'iba-playa', tip: '"Iba" (imperfect of ir) vs. "fui" (preterite of ir). "Iba" = used to go (habitual). "Fui" = went (one time). Huge difference!' },
    { spanish: 'Veíamos las estrellas desde el techo', pronunciation: 'beh-EE-ah-mohs lahs ehs-TREH-yahs DEHS-deh ehl TEH-choh', english: 'We used to watch the stars from the roof', audio: 'veiamos-estrellas', tip: '"Ver" keeps its E in the imperfect: veía, veías, veía, veíamos, veían. The accent is always on the Í.' },
    { spanish: 'Mientras dormía, soñaba con volar', pronunciation: 'mee-EHN-trahs dohr-MEE-ah soh-NYAH-bah kohn boh-LAHR', english: 'While I slept, I dreamed about flying', audio: 'sonaba-volar', tip: '"Mientras" (while) is a classic imperfect trigger. Two imperfect verbs together paint an ongoing scene.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'ar-imperfect', label: '-AR Imperfect' },
    { id: 'er-ir-imperfect', label: '-ER/-IR Imperfect' },
    { id: 'irregular-imperfect', label: 'Irregular Imperfect' },
    { id: 'childhood', label: 'Childhood Memories' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'memory-lane', label: 'Memory Lane' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'ar-imperfect',
      title: 'Regular -AR Imperfect',
      description: 'The most common verb type. Drop -AR, add: -aba, -abas, -aba, -ábamos, -aban. Super regular!',
      tabs: [
        { label: 'Yo & Tú', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'ar-imperfect').slice(0, 5) },
        { label: 'Él/Nosotros/Ellos', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'ar-imperfect').slice(5) },
      ],
    },
    {
      id: 'er-ir-imperfect',
      title: 'Regular -ER/-IR Imperfect',
      description: '-ER and -IR share the SAME endings again! Drop ending, add: -ía, -ías, -ía, -íamos, -ían.',
      tabs: [
        { label: 'Yo & Tú', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'er-ir-imperfect').slice(0, 4) },
        { label: 'Él/Nosotros/Ellos', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'er-ir-imperfect').slice(4) },
      ],
    },
    {
      id: 'irregular-imperfect',
      title: 'Irregular Imperfect — Only 3!',
      description: 'The best news in Spanish grammar: only SER (era), IR (iba), and VER (veía) are irregular in the imperfect!',
      tabs: [
        { label: 'Ser & Ir', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'irregular-imperfect').slice(0, 4) },
        { label: 'Ver', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'irregular-imperfect').slice(4) },
      ],
    },
    {
      id: 'childhood',
      title: 'Childhood & Habitual Past',
      description: 'Put it all together! Describe memories, habits, and how life used to be.',
      tabs: [
        { label: 'Childhood', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'childhood').slice(0, 7) },
        { label: 'Life Back Then', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'childhood').slice(7) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: '-ABA is Your New Best Friend',
      content: 'All -AR verbs in the imperfect use -aba endings: hablaba, caminaba, jugaba, cocinaba. The only accent mark is on the nosotros form: hablÁbamos. Every other form is stress-regular. This makes -AR imperfect one of the easiest conjugations in all of Spanish!',
      example: 'hablaba, hablabas, hablaba, hablábamos, hablaban',
    },
    {
      title: '-ÍA for -ER and -IR Verbs',
      content: 'Just like in the preterite, -ER and -IR verbs share the same endings in the imperfect: -ía, -ías, -ía, -íamos, -ían. The accent on Í is always there! No stem changes, no surprises. If you know the infinitive, you can conjugate it.',
      example: 'comía, vivía, dormía, escribía, tenía',
      reviewFrom: 'L3.1',
    },
    {
      title: 'Only 3 Irregular Verbs!',
      content: 'Compare this with the preterite (which has dozens of irregulars!). The imperfect only has THREE: ser → era, ir → iba, ver → veía. That\u2019s it. Everything else follows the regular pattern. This is why many students find the imperfect easier than the preterite.',
      example: 'era, eras, era, éramos, eran | iba, ibas, iba, íbamos, iban | veía, veías, veía, veíamos, veían',
    },
    {
      title: 'Imperfect vs. Preterite — The Key Difference',
      content: 'Preterite = WHAT HAPPENED (completed action). Imperfect = HOW THINGS WERE (ongoing/habitual). Think of a movie: preterite is the plot (events), imperfect is the setting (background). "Llovía (imperfect — it was raining) cuando llegué (preterite — when I arrived)."',
      example: 'Llovía cuando salí. | Era de noche y hacía frío. | Mientras dormía, sonó el teléfono.',
      reviewFrom: 'L3.1',
    },
  ],

  flashcardGroups: [
    {
      key: 'regular-ar-imp',
      label: 'Regular -AR',
      audioKeys: ['hablaba-mucho', 'caminaba-al-colegio', 'jugaba-con-amigos', 'abuela-cocinaba', 'estudiabamos-juntos', 'papa-trabajaba', 'cantabas-coro', 'hermanos-peleaban', 'dibujaba-bien', 'tomabamos-helado'],
    },
    {
      key: 'regular-er-ir-imp',
      label: 'Regular -ER/-IR',
      audioKeys: ['comia-casa-abuela', 'viviamos-pueblo', 'tenia-perro', 'leia-cuentos', 'escribia-cartas', 'querias-ser', 'dormian-luz', 'corriamos-campo'],
    },
    {
      key: 'irregular-childhood',
      label: 'Irregulars & Childhood',
      audioKeys: ['era-timido', 'ciudad-era-tranquila', 'iba-playa', 'ibamos-mercado', 'veia-caricaturas', 'veiamos-estrellas', 'cuando-era-nino', 'de-pequeno-trepar', 'siempre-llovia', 'no-habia-internet'],
    },
  ],

  matchPairs: [
    { left: 'Hablaba', right: 'I used to talk' },
    { left: 'Comía', right: 'I used to eat' },
    { left: 'Era', right: 'I/He was (habitual)' },
    { left: 'Iba', right: 'I/He used to go' },
    { left: 'Veía', right: 'I/He used to see' },
    { left: 'Siempre', right: 'Always' },
    { left: 'Cuando era niño', right: 'When I was a child' },
    { left: 'Todos los días', right: 'Every day' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Imperfect vs. Preterite',
      instruction: 'Is this sentence imperfect (habitual/ongoing) or preterite (completed)?',
      buckets: ['Imperfect \ud83d\udd04', 'Preterite \u2713'],
      items: [
        { text: 'Hablaba con mi abuela', bucket: 'Imperfect \ud83d\udd04' },
        { text: 'Siempre jugaba en el parque', bucket: 'Imperfect \ud83d\udd04' },
        { text: 'Era muy tímido', bucket: 'Imperfect \ud83d\udd04' },
        { text: 'Iba a la playa cada verano', bucket: 'Imperfect \ud83d\udd04' },
        { text: 'Ayer compré un libro', bucket: 'Preterite \u2713' },
        { text: 'Fui al cine anoche', bucket: 'Preterite \u2713' },
        { text: 'Hice la tarea', bucket: 'Preterite \u2713' },
        { text: 'El martes viajé a México', bucket: 'Preterite \u2713' },
      ],
    },
    {
      title: '-AR vs. -ER/-IR Imperfect',
      instruction: 'Does this imperfect verb use -ABA or -ÍA endings?',
      buckets: ['-ABA endings', '-ÍA endings'],
      items: [
        { text: 'Hablaba', bucket: '-ABA endings' },
        { text: 'Caminaba', bucket: '-ABA endings' },
        { text: 'Jugaba', bucket: '-ABA endings' },
        { text: 'Cocinaba', bucket: '-ABA endings' },
        { text: 'Comía', bucket: '-ÍA endings' },
        { text: 'Vivía', bucket: '-ÍA endings' },
        { text: 'Tenía', bucket: '-ÍA endings' },
        { text: 'Dormía', bucket: '-ÍA endings' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Verb Sorting',

  dialogues: [
    {
      id: 'dialogue-childhood',
      title: 'Childhood Memories in a Small Town — Oaxaca',
      location: 'Oaxaca',
      lines: [
        { speaker: 'Lucía', text: '¿Cómo era tu pueblo cuando eras niña?', audio: '/audio/L4.1/phrases/d1-line1.mp3' },
        { speaker: 'Rosa', text: 'Era muy pequeño y tranquilo. Nos conocíamos todos.', audio: '/audio/L4.1/phrases/d1-line2.mp3' },
        { speaker: 'Lucía', text: '¿Qué hacías después de la escuela?', audio: '/audio/L4.1/phrases/d1-line3.mp3' },
        { speaker: 'Rosa', text: 'Jugaba con mis primos en la calle. Corríamos, trepábamos árboles...', audio: '/audio/L4.1/phrases/d1-line4.mp3' },
        { speaker: 'Lucía', text: '¡Qué bonito! ¿Y tu abuela?', audio: '/audio/L4.1/phrases/d1-line5.mp3' },
        { speaker: 'Rosa', text: 'Mi abuela cocinaba mole los domingos. Toda la familia iba a su casa.', audio: '/audio/L4.1/phrases/d1-line6.mp3', annotations: [{ phrase: 'mole', fromLesson: 'L1.4', note: 'Traditional food — recall food vocabulary from L1.4' }] },
        { speaker: 'Lucía', text: '¿Veían televisión?', audio: '/audio/L4.1/phrases/d1-line7.mp3' },
        { speaker: 'Rosa', text: 'No teníamos televisión. Por la noche, veíamos las estrellas y mi abuelo contaba historias.', audio: '/audio/L4.1/phrases/d1-line8.mp3' },
        { speaker: 'Lucía', text: 'Suena mágico. La vida era más sencilla antes.', audio: '/audio/L4.1/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-before-now',
      title: 'Life Before vs. Now — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Martín', text: '¿Sabés? Antes yo era muy diferente.', audio: '/audio/L4.1/phrases/d2-line1.mp3' },
        { speaker: 'Sofía', text: '¿En serio? ¿Cómo eras?', audio: '/audio/L4.1/phrases/d2-line2.mp3' },
        { speaker: 'Martín', text: 'Era tímido. No hablaba mucho y siempre leía libros solo.', audio: '/audio/L4.1/phrases/d2-line3.mp3', annotations: [{ phrase: 'tímido', fromLesson: 'L2.7', note: 'Personality description from L2.7' }] },
        { speaker: 'Sofía', text: '¡No te creo! Ahora hablás con todo el mundo.', audio: '/audio/L4.1/phrases/d2-line4.mp3' },
        { speaker: 'Martín', text: 'Sí, cambié mucho. Antes no salía de mi casa. Ahora viajo todo el tiempo.', audio: '/audio/L4.1/phrases/d2-line5.mp3' },
        { speaker: 'Sofía', text: 'Yo también era distinta. De chica no me gustaba cocinar.', audio: '/audio/L4.1/phrases/d2-line6.mp3' },
        { speaker: 'Martín', text: '¿Y ahora? ¡Cocinás increíble!', audio: '/audio/L4.1/phrases/d2-line7.mp3' },
        { speaker: 'Sofía', text: 'Gracias. Mi mamá siempre cocinaba y yo la miraba. Supongo que aprendí sin darme cuenta.', audio: '/audio/L4.1/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Relive childhood in a small Mexican town and compare who you used to be with who you are now in Buenos Aires.',

  culturalNotes: [
    {
      title: 'Nostalgia in Latin American Culture',
      content: 'Nostalgia runs deep in Latin American culture. Songs like "Recuerdos de la Alhambra" or "Volver" by Gardel celebrate longing for the past. Phrases like "los buenos tiempos" (the good old days) and "antes todo era mejor" (everything was better before) are common in conversation. The imperfect tense is the grammar of nostalgia — it paints those warm, ongoing memories.',
    },
    {
      title: 'Antes vs. Ahora — A Universal Conversation',
      content: '"Antes vs. ahora" (before vs. now) is a beloved conversation topic across Latin America. People compare how neighborhoods changed, how technology transformed daily life, and how childhood was different. Grandparents especially love this! It naturally mixes imperfect (how things were) with present (how things are now), making it perfect practice.',
    },
    {
      title: 'Storytelling with the Imperfect — Setting the Scene',
      content: 'In Spanish storytelling (cuentos), the imperfect sets the stage: "Había una vez..." (Once upon a time...), "Era una noche oscura..." (It was a dark night...). Then the preterite drives the action: "De repente, apareció un lobo" (Suddenly, a wolf appeared). This interplay between imperfect (background) and preterite (events) is the heartbeat of Spanish narrative.',
    },
  ],
  culturalGradient: 'from-purple-50 to-violet-50',

  quiz: [
    { id: 1, type: 'mc', text: 'The imperfect of "hablar" (yo) is:', options: ['Hablo', 'Hablé', 'Hablaba', 'Hablaré'], answer: 2 },
    { id: 2, type: 'fill', text: 'Complete: "Cuando ___ niño, jugaba mucho" (I was — ser)', answer: 'era' },
    { id: 3, type: 'mc', text: 'How many irregular verbs exist in the imperfect?', options: ['None', 'Three', 'Ten', 'Many'], answer: 1 },
    { id: 4, type: 'tf', text: 'The imperfect is used for habitual or repeated actions in the past.', answer: true },
    { id: 5, type: 'mc', text: '"Iba a la playa cada verano" means:', options: ['I went to the beach yesterday', 'I used to go to the beach every summer', 'I will go to the beach', 'I am going to the beach'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "De pequeño, ___ caricaturas" (I used to watch — ver)', answer: 'veía' },
    { id: 7, type: 'mc', text: 'Which ending do -ER/-IR verbs use in the imperfect?', options: ['-aba', '-ía', '-é', '-ió'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what did Rosa\'s grandmother cook on Sundays?', options: ['Tacos', 'Mole', 'Pasta', 'Empanadas'], answer: 1 },
    { id: 9, type: 'tf', text: '"Ser," "ir," and "ver" are the only irregular verbs in the imperfect.', answer: true },
    { id: 10, type: 'mc', text: '"Mientras" is a trigger word for:', options: ['Preterite', 'Imperfect', 'Future', 'Subjunctive'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "Todos los días ___ al colegio" (I used to walk — caminar)', answer: 'caminaba' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, how was Martín as a child?', options: ['Outgoing', 'Athletic', 'Shy', 'Funny'], answer: 2 },
    { id: 13, type: 'mc', text: '"Había una vez..." means:', options: ['There will be a time', 'Once upon a time', 'There is a time', 'It was one time'], answer: 1 },
    { id: 14, type: 'tf', text: 'The imperfect sets the scene while the preterite tells the events.', answer: true },
    { id: 15, type: 'mc', text: 'Which sentence uses the imperfect correctly?', options: ['Ayer llovía mucho', 'Siempre llovía en diciembre', 'Anoche llovía a las diez', 'El martes llovía'], answer: 1 },
  ],

  audioBase: '/audio/L4.1/phrases',

  uniqueActivity: {
    id: 'MemoryLaneL41',
    sectionId: 'memory-lane',
    sectionColor: 'bg-purple-50/40',
    sectionBorder: 'border-purple-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'ar-imperfect': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'er-ir-imperfect': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'irregular-imperfect': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'childhood': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'memory-lane': { bg: 'bg-purple-50/40', border: 'border-purple-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
