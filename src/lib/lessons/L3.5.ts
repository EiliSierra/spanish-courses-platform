import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Sports (10) ===
  { spanish: 'Juego al fútbol los sábados', english: 'I play soccer on Saturdays', pronunciation: 'HWEH-goh ahl FOOT-bohl lohs SAH-bah-dohs', category: 'sports', audio: 'juego-al-futbol' },
  { spanish: 'Me gusta nadar en la piscina', english: 'I like to swim in the pool', pronunciation: 'meh GOOS-tah nah-DAHR ehn lah pee-SEE-nah', category: 'sports', audio: 'me-gusta-nadar' },
  { spanish: 'Corro en el parque todas las mañanas', english: 'I run in the park every morning', pronunciation: 'KOH-rroh ehn ehl PAHR-keh TOH-dahs lahs mah-NYAH-nahs', category: 'sports', audio: 'corro-en-el-parque' },
  { spanish: 'Practico baloncesto con mis amigos', english: 'I practice basketball with my friends', pronunciation: 'PRAHK-tee-koh bah-lohn-SEHS-toh kohn mees ah-MEE-gohs', category: 'sports', audio: 'practico-baloncesto' },
  { spanish: 'Mi equipo ganó el partido', english: 'My team won the game', pronunciation: 'mee eh-KEE-poh gah-NOH ehl pahr-TEE-doh', category: 'sports', audio: 'mi-equipo-gano' },
  { spanish: 'El tenis es mi deporte favorito', english: 'Tennis is my favorite sport', pronunciation: 'ehl TEH-nees ehs mee deh-POHR-teh fah-boh-REE-toh', category: 'sports', audio: 'el-tenis-es-mi-deporte' },
  { spanish: 'Vamos a jugar al béisbol', english: "Let's play baseball", pronunciation: 'BAH-mohs ah hoo-GAHR ahl BEH-ees-bohl', category: 'sports', audio: 'vamos-a-jugar-beisbol' },
  { spanish: 'Monto bicicleta los domingos', english: 'I ride my bike on Sundays', pronunciation: 'MOHN-toh bee-see-KLEH-tah lohs doh-MEEN-gohs', category: 'sports', audio: 'monto-bicicleta' },
  { spanish: 'Hago yoga por la mañana', english: 'I do yoga in the morning', pronunciation: 'AH-goh YOH-gah pohr lah mah-NYAH-nah', category: 'sports', audio: 'hago-yoga' },
  { spanish: 'Levanto pesas en el gimnasio', english: 'I lift weights at the gym', pronunciation: 'leh-BAHN-toh PEH-sahs ehn ehl heem-NAH-see-oh', category: 'sports', audio: 'levanto-pesas' },

  // === Hobbies (10) ===
  { spanish: 'Leo libros antes de dormir', english: 'I read books before sleeping', pronunciation: 'LEH-oh LEE-brohs AHN-tehs deh dohr-MEER', category: 'hobbies', audio: 'leo-libros' },
  { spanish: 'Toco la guitarra desde niño', english: "I've played guitar since I was a kid", pronunciation: 'TOH-koh lah gee-TAH-rrah DEHS-deh NEE-nyoh', category: 'hobbies', audio: 'toco-la-guitarra' },
  { spanish: 'Pinto cuadros los fines de semana', english: 'I paint pictures on weekends', pronunciation: 'PEEN-toh KWAH-drohs lohs FEE-nehs deh seh-MAH-nah', category: 'hobbies', audio: 'pinto-cuadros' },
  { spanish: 'Cocino recetas nuevas cada semana', english: 'I cook new recipes every week', pronunciation: 'koh-SEE-noh rreh-SEH-tahs NWEH-bahs KAH-dah seh-MAH-nah', category: 'hobbies', audio: 'cocino-recetas-nuevas' },
  { spanish: 'Me encanta ver películas de acción', english: 'I love watching action movies', pronunciation: 'meh ehn-KAHN-tah behr peh-LEE-koo-lahs deh ahk-see-OHN', category: 'hobbies', audio: 'me-encanta-ver-peliculas' },
  { spanish: 'Juego videojuegos con mis hermanos', english: 'I play video games with my siblings', pronunciation: 'HWEH-goh bee-deh-oh-HWEH-gohs kohn mees ehr-MAH-nohs', category: 'hobbies', audio: 'juego-videojuegos' },
  { spanish: 'Bailo salsa todos los viernes', english: 'I dance salsa every Friday', pronunciation: 'BAI-loh SAHL-sah TOH-dohs lohs bee-EHR-nehs', category: 'hobbies', audio: 'bailo-salsa' },
  { spanish: 'Hago senderismo en las montañas', english: 'I go hiking in the mountains', pronunciation: 'AH-goh sehn-deh-REES-moh ehn lahs mohn-TAH-nyahs', category: 'hobbies', audio: 'hago-senderismo' },
  { spanish: 'Escribo poesía en mi tiempo libre', english: 'I write poetry in my free time', pronunciation: 'ehs-KREE-boh poh-eh-SEE-ah ehn mee tee-EHM-poh LEE-breh', category: 'hobbies', audio: 'escribo-poesia' },
  { spanish: 'Tomo fotografías cuando viajo', english: 'I take photos when I travel', pronunciation: 'TOH-moh foh-toh-grah-FEE-ahs KWAHN-doh bee-AH-hoh', category: 'hobbies', audio: 'tomo-fotografias' },

  // === Frequency (8) ===
  { spanish: 'Todos los días', english: 'Every day', pronunciation: 'TOH-dohs lohs DEE-ahs', category: 'frequency', audio: 'todos-los-dias' },
  { spanish: 'Dos veces a la semana', english: 'Twice a week', pronunciation: 'dohs BEH-sehs ah lah seh-MAH-nah', category: 'frequency', audio: 'dos-veces-a-la-semana' },
  { spanish: 'Los fines de semana', english: 'On weekends', pronunciation: 'lohs FEE-nehs deh seh-MAH-nah', category: 'frequency', audio: 'los-fines-de-semana' },
  { spanish: 'Una vez al mes', english: 'Once a month', pronunciation: 'OO-nah behs ahl mehs', category: 'frequency', audio: 'una-vez-al-mes' },
  { spanish: 'Casi nunca', english: 'Almost never', pronunciation: 'KAH-see NOON-kah', category: 'frequency', audio: 'casi-nunca' },
  { spanish: 'De vez en cuando', english: 'From time to time', pronunciation: 'deh behs ehn KWAHN-doh', category: 'frequency', audio: 'de-vez-en-cuando' },
  { spanish: 'Siempre que puedo', english: 'Whenever I can', pronunciation: 'see-EHM-preh keh PWEH-doh', category: 'frequency', audio: 'siempre-que-puedo' },
  { spanish: 'A menudo', english: 'Often', pronunciation: 'ah meh-NOO-doh', category: 'frequency', audio: 'a-menudo' },

  // === Opinions (10) ===
  { spanish: 'Me gusta mucho el fútbol', english: 'I like soccer a lot', pronunciation: 'meh GOOS-tah MOO-choh ehl FOOT-bohl', category: 'opinions', audio: 'me-gusta-mucho-el-futbol' },
  { spanish: 'Me encanta bailar', english: 'I love to dance', pronunciation: 'meh ehn-KAHN-tah bai-LAHR', category: 'opinions', audio: 'me-encanta-bailar' },
  { spanish: 'Prefiero leer que ver televisión', english: 'I prefer reading over watching TV', pronunciation: 'preh-fee-EH-roh leh-EHR keh behr teh-leh-bee-see-OHN', category: 'opinions', audio: 'prefiero-leer' },
  { spanish: 'No me gusta correr cuando llueve', english: "I don't like running when it rains", pronunciation: 'noh meh GOOS-tah koh-RREHR KWAHN-doh YEH-beh', category: 'opinions', audio: 'no-me-gusta-correr' },
  { spanish: 'Me fascina la fotografía', english: 'Photography fascinates me', pronunciation: 'meh fah-SEE-nah lah foh-toh-grah-FEE-ah', category: 'opinions', audio: 'me-fascina-la-fotografia' },
  { spanish: 'Me encanta jugar en equipo', english: 'I love playing on a team', pronunciation: 'meh ehn-KAHN-tah hoo-GAHR ehn eh-KEE-poh', category: 'opinions', audio: 'me-encanta-jugar-en-equipo' },
  { spanish: 'Prefiero deportes al aire libre', english: 'I prefer outdoor sports', pronunciation: 'preh-fee-EH-roh deh-POHR-tehs ahl AI-reh LEE-breh', category: 'opinions', audio: 'prefiero-deportes-aire-libre' },
  { spanish: 'Me aburre ver deportes en la tele', english: 'Watching sports on TV bores me', pronunciation: 'meh ah-BOO-rreh behr deh-POHR-tehs ehn lah TEH-leh', category: 'opinions', audio: 'me-aburre-ver-deportes' },
  { spanish: 'Me interesa aprender a surfear', english: "I'm interested in learning to surf", pronunciation: 'meh een-teh-REH-sah ah-prehn-DEHR ah soor-feh-AHR', category: 'opinions', audio: 'me-interesa-surfear' },
  { spanish: 'Me divierte mucho la escalada', english: 'Rock climbing is a lot of fun for me', pronunciation: 'meh dee-bee-EHR-teh MOO-choh lah ehs-kah-LAH-dah', category: 'opinions', audio: 'me-divierte-la-escalada' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L35PhraseByAudio = phraseByAudio

// === HOBBY MATCH (unique activity) ===

export interface HobbyMatchChallenge {
  personDescription: string
  english: string
  correctHobby: string
  options: string[]
}

export const HOBBY_MATCH_CHALLENGES: HobbyMatchChallenge[] = [
  {
    personDescription: 'Soy muy activa y me encanta estar al aire libre. Los sábados corro en el parque y los domingos monto bicicleta con mis amigos.',
    english: "I'm very active and love being outdoors. Saturdays I run in the park and Sundays I ride bikes with friends.",
    correctHobby: 'Ciclismo y running',
    options: ['Ciclismo y running', 'Pintura', 'Videojuegos', 'Cocina'],
  },
  {
    personDescription: 'En mi tiempo libre toco la guitarra y escribo canciones. A menudo voy a conciertos los fines de semana.',
    english: 'In my free time I play guitar and write songs. I often go to concerts on weekends.',
    correctHobby: 'Música',
    options: ['Senderismo', 'Música', 'Fotografía', 'Natación'],
  },
  {
    personDescription: 'Prefiero actividades tranquilas. Leo dos libros al mes y escribo poesía de vez en cuando.',
    english: 'I prefer calm activities. I read two books a month and write poetry from time to time.',
    correctHobby: 'Lectura y escritura',
    options: ['Fútbol', 'Baile', 'Lectura y escritura', 'Yoga'],
  },
  {
    personDescription: 'Todos los viernes voy a una clase de salsa y los sábados practico bachata. Me encanta el ritmo latino.',
    english: 'Every Friday I go to a salsa class and Saturdays I practice bachata. I love Latin rhythm.',
    correctHobby: 'Baile',
    options: ['Tenis', 'Baile', 'Senderismo', 'Guitarra'],
  },
  {
    personDescription: 'Hago yoga por la mañana y levanto pesas en el gimnasio tres veces a la semana. Me fascina cuidar mi cuerpo.',
    english: 'I do yoga in the morning and lift weights at the gym three times a week. I love taking care of my body.',
    correctHobby: 'Fitness y yoga',
    options: ['Béisbol', 'Fotografía', 'Fitness y yoga', 'Cocina'],
  },
  {
    personDescription: 'Siempre que puedo voy a las montañas. Me encanta caminar por senderos y tomar fotografías de la naturaleza.',
    english: 'Whenever I can I go to the mountains. I love hiking trails and taking photos of nature.',
    correctHobby: 'Senderismo y fotografía',
    options: ['Videojuegos', 'Senderismo y fotografía', 'Natación', 'Baloncesto'],
  },
  {
    personDescription: 'Mi equipo juega fútbol los sábados en el parque. Después del partido vemos los partidos de la liga en la televisión.',
    english: 'My team plays soccer on Saturdays in the park. After the game we watch league matches on TV.',
    correctHobby: 'Fútbol',
    options: ['Fútbol', 'Tenis', 'Pintura', 'Escalada'],
  },
  {
    personDescription: 'Cocino recetas nuevas cada semana y pinto cuadros los domingos. Me aburre ver televisión — prefiero crear cosas.',
    english: 'I cook new recipes every week and paint pictures on Sundays. Watching TV bores me — I prefer creating things.',
    correctHobby: 'Cocina y arte',
    options: ['Deportes de equipo', 'Lectura', 'Cocina y arte', 'Running'],
  },
]

// === LESSON DATA ===

export const L35Data: LessonData = {
  id: 'L3.5',
  hero: {
    lessonId: 'L3.5',
    title: 'Sports & Hobbies',
    subtitle: 'Talk about what you love to do',
    description: 'Learn to talk about sports, hobbies, and free-time activities. Express your preferences with me gusta, me encanta, and prefiero. Describe how often you do things and connect over shared interests!',
    image: '/images/L3.5/L3.5.jpg',
    gradient: 'from-green-800/65 via-emerald-700/55 to-teal-700/65',
    accentColor: 'emerald-200',
  },

  objectives: [
    { icon: '\u26BD', title: 'Sports Vocabulary', desc: 'Name common sports: f\u00fatbol, baloncesto, tenis, b\u00e9isbol, nataci\u00f3n, yoga, ciclismo.' },
    { icon: '\uD83C\uDFA8', title: 'Hobbies & Pastimes', desc: 'Talk about hobbies: leer, pintar, tocar guitarra, bailar, cocinar, hacer senderismo.' },
    { icon: '\u2764\uFE0F', title: 'Expressing Opinions', desc: 'Use me gusta, me encanta, prefiero, me fascina, me aburre to share your feelings.' },
    { icon: '\uD83D\uDD04', title: 'Frequency Expressions', desc: 'Say how often: todos los d\u00edas, dos veces a la semana, de vez en cuando, casi nunca.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.8', label: 'Daily Routines', detail: 'Routine verbs from L1.8 (levantarse, desayunar) combine with hobbies to describe your full day.' },
    { fromLesson: 'L2.3', label: 'Making Plans', detail: 'L2.3 taught "vamos a + verb" for plans. Now you\u2019ll say "Vamos a jugar al f\u00fatbol!"' },
    { fromLesson: 'L2.7', label: 'Personality Traits', detail: 'L2.7 personality adjectives (activo, creativo, tranquilo) connect to hobby preferences.' },
  ],

  sectionTransitions: [
    { afterSection: 'sports', text: 'Sports vocabulary ready! Now let\u2019s explore hobbies and pastimes.' },
    { afterSection: 'hobbies', text: 'Great hobbies! Let\u2019s learn to say how often you do them.' },
    { afterSection: 'frequency', text: 'You can express frequency! Now share your opinions and preferences.' },
    { afterSection: 'dialogues', text: 'Awesome conversations! Let\u2019s explore sports culture in Latin America.' },
    { afterSection: 'cultural', text: 'Now match people to their perfect hobby!' },
    { afterSection: 'hobby-match', text: 'Final stretch \u2014 quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Me gusta...', english: 'I like...' },
    { spanish: 'Juego al...', english: 'I play...' },
    { spanish: 'Practico...', english: 'I practice...' },
    { spanish: 'Los fines de semana', english: 'On weekends' },
    { spanish: 'Mi pasatiempo favorito es...', english: 'My favorite hobby is...' },
    { spanish: 'Prefiero... que...', english: 'I prefer... over...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Juego al f\u00fatbol los s\u00e1bados', pronunciation: 'HWEH-goh ahl FOOT-bohl lohs SAH-bah-dohs', english: 'I play soccer on Saturdays', audio: 'juego-al-futbol-los-sabados', tip: '"Juego" has a silent U \u2014 it\u2019s HWEH-goh, not joo-EH-goh. The J sounds like English H.' },
    { spanish: 'Me encanta bailar salsa', pronunciation: 'meh ehn-KAHN-tah bai-LAHR SAHL-sah', english: 'I love to dance salsa', audio: 'me-encanta-bailar-salsa', tip: '"Me encanta" literally means "it enchants me." The subject is bailar, not me! That\u2019s why it\u2019s encanta (3rd person).' },
    { spanish: 'Practico baloncesto dos veces a la semana', pronunciation: 'PRAHK-tee-koh bah-lohn-SEHS-toh dohs BEH-sehs', english: 'I practice basketball twice a week', audio: 'practico-baloncesto-dos-veces-a-la-semana', tip: '"Baloncesto" = bal\u00f3n + cesto (ball + basket). In some countries they say "b\u00e1squetbol" instead!' },
    { spanish: 'Hago senderismo en las monta\u00f1as', pronunciation: 'AH-goh sehn-deh-REES-moh ehn lahs mohn-TAH-nyahs', english: 'I go hiking in the mountains', audio: 'hago-senderismo-en-las-montanas', tip: '"Senderismo" comes from "sendero" (trail). The \u00d1 in monta\u00f1as is like "ny" in canyon.' },
    { spanish: 'Prefiero deportes al aire libre', pronunciation: 'preh-fee-EH-roh deh-POHR-tehs ahl AI-reh LEE-breh', english: 'I prefer outdoor sports', audio: 'prefiero-deportes-al-aire-libre', tip: '"Al aire libre" literally means "in the free air." It\u2019s the standard way to say "outdoors" in Spanish.' },
    { spanish: 'Toco la guitarra desde ni\u00f1o', pronunciation: 'TOH-koh lah gee-TAH-rrah DEHS-deh NEE-nyoh', english: 'I\u2019ve played guitar since childhood', audio: 'toco-la-guitarra-desde-nino', tip: '"Tocar" means both "to touch" and "to play (an instrument)." Double RR in guitarra \u2014 roll that R!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'sports', label: 'Sports' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'frequency', label: 'How Often?' },
    { id: 'opinions', label: 'Opinions & Preferences' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Activity Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'hobby-match', label: 'Hobby Match' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'sports',
      title: 'Sports',
      description: 'The most popular sports across the Spanish-speaking world. Use "jugar a" for team sports and "practicar/hacer" for individual ones.',
      tabs: [
        { label: 'Team Sports', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'sports').slice(0, 5) },
        { label: 'Individual Sports', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'sports').slice(5) },
      ],
    },
    {
      id: 'hobbies',
      title: 'Hobbies & Pastimes',
      description: 'Creative and relaxing activities for your free time. "Pasatiempo" = pastime, "afici\u00f3n" = hobby.',
      tabs: [
        { label: 'Creative', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'hobbies').slice(0, 5) },
        { label: 'Active', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'hobbies').slice(5) },
      ],
    },
    {
      id: 'frequency',
      title: 'How Often?',
      description: 'Express how frequently you do your favorite activities. These go before or after the verb.',
      tabs: [
        { label: 'Regular', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'frequency').slice(0, 4) },
        { label: 'Occasional', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'frequency').slice(4) },
      ],
    },
    {
      id: 'opinions',
      title: 'Opinions & Preferences',
      description: 'Share what you love, like, and prefer. These verbs work "backwards" \u2014 the activity is the subject!',
      tabs: [
        { label: 'Me gusta / encanta', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'opinions').slice(0, 5) },
        { label: 'Prefiero / other', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'opinions').slice(5) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Gustar-type Verbs Work Backwards!',
      content: 'In English: "I like soccer." In Spanish: "Me gusta el f\u00fatbol" \u2014 literally "Soccer pleases me." The thing you like is the SUBJECT. That\u2019s why it\u2019s "me gusta" (singular thing) vs. "me gustan" (plural things). Same for encantar, fascinar, aburrir, interesar.',
      example: 'Me gusta el tenis (I like tennis) | Me gustan los deportes (I like sports)',
    },
    {
      title: 'Jugar A vs. Practicar vs. Hacer',
      content: 'Team/competitive sports use "jugar a": juego al f\u00fatbol, juego al tenis. Individual activities use "practicar" or "hacer": practico yoga, hago senderismo. Musical instruments use "tocar": toco la guitarra. Choosing the right verb sounds natural!',
      example: 'Juego al b\u00e9isbol | Practico nataci\u00f3n | Hago yoga | Toco el piano',
      reviewFrom: 'L1.8',
    },
    {
      title: 'Frequency Words \u2014 Position Matters',
      content: 'Frequency expressions can go at the beginning or end of a sentence. "Siempre juego al f\u00fatbol" = "Juego al f\u00fatbol siempre." But "nunca" and "casi nunca" usually go BEFORE the verb: "Nunca nado" (I never swim). Double negative is OK: "No nado nunca."',
      example: 'Siempre corro (I always run) | Nunca bailo (I never dance) | No bailo nunca',
    },
    {
      title: 'Me encanta vs. Me gusta mucho',
      content: '"Me encanta" (I love it) is stronger than "me gusta mucho" (I like it a lot), but both are common. For negative: "No me gusta" (I don\u2019t like) is polite. "Me aburre" (it bores me) or "No me interesa" (it doesn\u2019t interest me) are also common and natural ways to express dislike.',
      example: 'Me encanta > Me gusta mucho > Me gusta > No me gusta > Me aburre',
    },
  ],

  flashcardGroups: [
    {
      key: 'sports',
      label: 'Sports',
      audioKeys: ['juego-al-futbol', 'me-gusta-nadar', 'corro-en-el-parque', 'practico-baloncesto', 'mi-equipo-gano', 'el-tenis-es-mi-deporte', 'vamos-a-jugar-beisbol', 'monto-bicicleta', 'hago-yoga', 'levanto-pesas'],
    },
    {
      key: 'hobbies',
      label: 'Hobbies',
      audioKeys: ['leo-libros', 'toco-la-guitarra', 'pinto-cuadros', 'cocino-recetas-nuevas', 'me-encanta-ver-peliculas', 'juego-videojuegos', 'bailo-salsa', 'hago-senderismo', 'escribo-poesia', 'tomo-fotografias'],
    },
    {
      key: 'freq-opinions',
      label: 'Frequency & Opinions',
      audioKeys: ['todos-los-dias', 'dos-veces-a-la-semana', 'los-fines-de-semana', 'de-vez-en-cuando', 'me-gusta-mucho-el-futbol', 'me-encanta-bailar', 'prefiero-leer', 'me-fascina-la-fotografia'],
    },
  ],

  matchPairs: [
    { left: 'Juego al f\u00fatbol', right: 'I play soccer' },
    { left: 'Me encanta bailar', right: 'I love to dance' },
    { left: 'Hago senderismo', right: 'I go hiking' },
    { left: 'Toco la guitarra', right: 'I play guitar' },
    { left: 'Todos los d\u00edas', right: 'Every day' },
    { left: 'De vez en cuando', right: 'From time to time' },
    { left: 'Me aburre', right: 'It bores me' },
    { left: 'Prefiero', right: 'I prefer' },
  ],
  matchLabels: { left: 'Espa\u00f1ol', right: 'English' },

  sortActivities: [
    {
      title: 'Sport or Hobby?',
      instruction: 'Is this a sport or a creative hobby?',
      buckets: ['Sport \u26BD', 'Hobby \uD83C\uDFA8'],
      items: [
        { text: 'F\u00fatbol', bucket: 'Sport \u26BD' },
        { text: 'Nataci\u00f3n', bucket: 'Sport \u26BD' },
        { text: 'Baloncesto', bucket: 'Sport \u26BD' },
        { text: 'Tenis', bucket: 'Sport \u26BD' },
        { text: 'Pintar', bucket: 'Hobby \uD83C\uDFA8' },
        { text: 'Tocar guitarra', bucket: 'Hobby \uD83C\uDFA8' },
        { text: 'Leer libros', bucket: 'Hobby \uD83C\uDFA8' },
        { text: 'Escribir poes\u00eda', bucket: 'Hobby \uD83C\uDFA8' },
      ],
    },
    {
      title: 'Jugar a / Practicar / Hacer',
      instruction: 'Which verb do you use with this activity?',
      buckets: ['Jugar a...', 'Practicar / Hacer...'],
      items: [
        { text: 'F\u00fatbol', bucket: 'Jugar a...' },
        { text: 'B\u00e9isbol', bucket: 'Jugar a...' },
        { text: 'Baloncesto', bucket: 'Jugar a...' },
        { text: 'Tenis', bucket: 'Jugar a...' },
        { text: 'Yoga', bucket: 'Practicar / Hacer...' },
        { text: 'Senderismo', bucket: 'Practicar / Hacer...' },
        { text: 'Nataci\u00f3n', bucket: 'Practicar / Hacer...' },
        { text: 'Ciclismo', bucket: 'Practicar / Hacer...' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Activity Sorting',

  dialogues: [
    {
      id: 'dialogue-sports',
      title: 'Weekend Sports \u2014 Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Mart\u00edn', text: '\u00bfQu\u00e9 hac\u00e9s los fines de semana?', audio: '/audio/L3.5/phrases/d1-line1.mp3' },
        { speaker: 'Valentina', text: 'Juego al f\u00fatbol con un equipo mixto los s\u00e1bados. \u00bfY vos?', audio: '/audio/L3.5/phrases/d1-line2.mp3', annotations: [{ phrase: 'equipo mixto', fromLesson: 'L2.7', note: 'Team descriptions from L2.7' }] },
        { speaker: 'Mart\u00edn', text: 'Yo hago yoga por la ma\u00f1ana y despu\u00e9s corro en el parque.', audio: '/audio/L3.5/phrases/d1-line3.mp3', annotations: [{ phrase: 'por la ma\u00f1ana', fromLesson: 'L1.8', note: 'Time-of-day routines from L1.8' }] },
        { speaker: 'Valentina', text: '\u00a1Qu\u00e9 activo! \u00bfCorr\u00e9s todos los d\u00edas?', audio: '/audio/L3.5/phrases/d1-line4.mp3' },
        { speaker: 'Mart\u00edn', text: 'No, tres veces a la semana. Los domingos monto bicicleta.', audio: '/audio/L3.5/phrases/d1-line5.mp3' },
        { speaker: 'Valentina', text: 'A m\u00ed me encanta el ciclismo tambi\u00e9n. \u00bfVamos a andar juntos alg\u00fan d\u00eda?', audio: '/audio/L3.5/phrases/d1-line6.mp3', annotations: [{ phrase: 'vamos a', fromLesson: 'L2.3', note: 'Making plans with ir a from L2.3' }] },
        { speaker: 'Mart\u00edn', text: '\u00a1Dale! El pr\u00f3ximo domingo a las nueve.', audio: '/audio/L3.5/phrases/d1-line7.mp3' },
        { speaker: 'Valentina', text: 'Perfecto. Despu\u00e9s podemos tomar un caf\u00e9.', audio: '/audio/L3.5/phrases/d1-line8.mp3' },
      ],
    },
    {
      id: 'dialogue-hobbies',
      title: 'New Hobbies \u2014 Medell\u00edn',
      location: 'Medell\u00edn',
      lines: [
        { speaker: 'Camila', text: '\u00bfTienes alg\u00fan pasatiempo nuevo?', audio: '/audio/L3.5/phrases/d2-line1.mp3' },
        { speaker: 'Santiago', text: 'S\u00ed, empec\u00e9 clases de salsa hace un mes. \u00a1Me encanta!', audio: '/audio/L3.5/phrases/d2-line2.mp3' },
        { speaker: 'Camila', text: '\u00a1Qu\u00e9 chévere! Yo bailo salsa desde niña. Es mi pasión.', audio: '/audio/L3.5/phrases/d2-line3.mp3' },
        { speaker: 'Santiago', text: '\u00bfDe verdad? \u00bfY qu\u00e9 m\u00e1s te gusta hacer en tu tiempo libre?', audio: '/audio/L3.5/phrases/d2-line4.mp3' },
        { speaker: 'Camila', text: 'Leo mucho \u2014 dos libros al mes. Y pinto cuadros los domingos.', audio: '/audio/L3.5/phrases/d2-line5.mp3' },
        { speaker: 'Santiago', text: 'Yo prefiero actividades al aire libre. Hago senderismo de vez en cuando.', audio: '/audio/L3.5/phrases/d2-line6.mp3' },
        { speaker: 'Camila', text: 'A m\u00ed tambi\u00e9n me interesa el senderismo. \u00bfConoces senderos cerca de aqu\u00ed?', audio: '/audio/L3.5/phrases/d2-line7.mp3' },
        { speaker: 'Santiago', text: '\u00a1Claro! Hay uno incre\u00edble en las monta\u00f1as. Vamos el pr\u00f3ximo fin de semana.', audio: '/audio/L3.5/phrases/d2-line8.mp3' },
        { speaker: 'Camila', text: '\u00a1Listo! Llevo mi c\u00e1mara para tomar fotos del paisaje.', audio: '/audio/L3.5/phrases/d2-line9.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Chat about weekend sports in Buenos Aires and discover new hobbies in Medell\u00edn.',

  culturalNotes: [
    {
      title: 'F\u00fatbol \u2014 More Than a Sport',
      content: 'In Latin America, f\u00fatbol (soccer) is a way of life. Families gather to watch matches, neighborhoods have their own teams, and rivalries like Boca vs. River (Argentina) or Am\u00e9rica vs. Chivas (Mexico) divide entire cities. Saying "Juego al f\u00fatbol" instantly connects you to millions. Even if you don\u2019t play, knowing your local team is social currency!',
    },
    {
      title: 'Outdoor Culture \u2014 Mountains, Beaches, and Parks',
      content: 'Latin Americans love outdoor activities. Colombia has incredible hiking (senderismo) trails, Mexico\u2019s beaches are perfect for surfing, and Argentina\u2019s Patagonia draws cyclists worldwide. "Al aire libre" activities are deeply cultural \u2014 families spend Sundays in parks (parques), plazas, and nature reserves. It\u2019s common to say "\u00bfVamos al parque?" on any sunny day.',
    },
    {
      title: 'Bailar \u2014 Dance as Social Connection',
      content: 'Dance is central to social life across Latin America. Salsa (Cuba/Colombia), bachata (Dominican Republic), tango (Argentina), cumbia (Colombia), and reggaet\u00f3n are not just music genres \u2014 they\u2019re social activities. Saying "Me gusta bailar" opens doors everywhere. Many cities have free dance classes in plazas, and it\u2019s completely normal to dance at any age!',
    },
  ],
  culturalGradient: 'from-green-50 to-emerald-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Me gusta nadar" means:', options: ['I swim', 'I like to swim', 'I can swim', 'I want to swim'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "_____ al f\u00fatbol los s\u00e1bados" (I play)', answer: 'Juego' },
    { id: 3, type: 'mc', text: 'Which verb do you use with "guitarra"?', options: ['Jugar', 'Practicar', 'Tocar', 'Hacer'], answer: 2 },
    { id: 4, type: 'tf', text: '"Me gustan los deportes" uses plural because "deportes" is the subject.', answer: true },
    { id: 5, type: 'mc', text: '"Dos veces a la semana" means:', options: ['Two times a day', 'Twice a week', 'Two weeks', 'Every two days'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Me _____ bailar salsa" (I love)', answer: 'encanta' },
    { id: 7, type: 'mc', text: '"Hago senderismo" means:', options: ['I go shopping', 'I go swimming', 'I go hiking', 'I go running'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what does Mart\u00edn do on Sundays?', options: ['Plays soccer', 'Does yoga', 'Rides a bike', 'Runs in the park'], answer: 2 },
    { id: 9, type: 'tf', text: '"Jugar a" is used for team/competitive sports like f\u00fatbol and tenis.', answer: true },
    { id: 10, type: 'mc', text: '"De vez en cuando" means:', options: ['Every day', 'From time to time', 'Always', 'Never'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "_____ leer que ver televisi\u00f3n" (I prefer)', answer: 'Prefiero' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what new hobby did Santiago start?', options: ['Hiking', 'Painting', 'Salsa classes', 'Photography'], answer: 2 },
    { id: 13, type: 'mc', text: '"Me aburre ver deportes" means:', options: ['I love watching sports', 'Watching sports bores me', 'I watch sports', 'Sports are interesting'], answer: 1 },
    { id: 14, type: 'tf', text: 'In Argentina, people say "vos" instead of "t\u00fa" (e.g., "\u00bfQu\u00e9 hac\u00e9s?" instead of "\u00bfQu\u00e9 haces?").', answer: true },
    { id: 15, type: 'mc', text: '"Monto bicicleta" means:', options: ['I fix my bike', 'I buy a bike', 'I ride a bike', 'I sell a bike'], answer: 2 },
  ],

  audioBase: '/audio/L3.5/phrases',

  uniqueActivity: {
    id: 'HobbyMatchL35',
    sectionId: 'hobby-match',
    sectionColor: 'bg-emerald-50/40',
    sectionBorder: 'border-emerald-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    sports: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    hobbies: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    frequency: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    opinions: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-green-50/30', border: 'border-green-100' },
    'hobby-match': { bg: 'bg-emerald-50/40', border: 'border-emerald-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
