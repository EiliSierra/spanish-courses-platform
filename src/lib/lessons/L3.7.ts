import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Celebrations (10) ===
  { spanish: 'La fiesta de cumpleaños', english: 'The birthday party', pronunciation: 'lah fee-EHS-tah deh koom-pleh-AH-nyohs', category: 'celebrations', audio: 'la-fiesta-de-cumpleanos' },
  { spanish: 'La boda fue hermosa', english: 'The wedding was beautiful', pronunciation: 'lah BOH-dah fweh ehr-MOH-sah', category: 'celebrations', audio: 'la-boda-fue-hermosa' },
  { spanish: 'La quinceañera de mi prima', english: 'My cousin\'s quinceañera', pronunciation: 'lah keen-seh-ah-NYEH-rah deh mee PREE-mah', category: 'celebrations', audio: 'la-quinceanera-de-mi-prima' },
  { spanish: 'Celebramos con toda la familia', english: 'We celebrated with the whole family', pronunciation: 'seh-leh-BRAH-mohs kohn TOH-dah lah fah-MEE-lee-ah', category: 'celebrations', audio: 'celebramos-con-toda-la-familia' },
  { spanish: 'Sopló las velas del pastel', english: 'He/She blew out the cake candles', pronunciation: 'soh-PLOH lahs BEH-lahs dehl pahs-TEHL', category: 'celebrations', audio: 'soplo-las-velas' },
  { spanish: 'Bailamos toda la noche', english: 'We danced all night', pronunciation: 'bai-LAH-mohs TOH-dah lah NOH-cheh', category: 'celebrations', audio: 'bailamos-toda-la-noche' },
  { spanish: 'Abrió los regalos', english: 'He/She opened the gifts', pronunciation: 'ah-bree-OH lohs reh-GAH-lohs', category: 'celebrations', audio: 'abrio-los-regalos' },
  { spanish: 'El vals de la quinceañera', english: 'The quinceañera waltz', pronunciation: 'ehl bahls deh lah keen-seh-ah-NYEH-rah', category: 'celebrations', audio: 'el-vals-de-la-quinceanera' },
  { spanish: 'Brindamos por los novios', english: 'We toasted to the bride and groom', pronunciation: 'breen-DAH-mohs pohr lohs NOH-bee-ohs', category: 'celebrations', audio: 'brindamos-por-los-novios' },
  { spanish: 'Tiramos confeti y serpentinas', english: 'We threw confetti and streamers', pronunciation: 'tee-RAH-mohs kohn-FEH-tee ee sehr-pehn-TEE-nahs', category: 'celebrations', audio: 'tiramos-confeti' },

  // === Holidays (10) ===
  { spanish: 'Feliz Navidad', english: 'Merry Christmas', pronunciation: 'feh-LEES nah-bee-DAHD', category: 'holidays', audio: 'feliz-navidad' },
  { spanish: 'El Día de Muertos', english: 'The Day of the Dead', pronunciation: 'ehl DEE-ah deh MWEHR-tohs', category: 'holidays', audio: 'el-dia-de-muertos' },
  { spanish: 'Feliz Año Nuevo', english: 'Happy New Year', pronunciation: 'feh-LEES AH-nyoh NWEH-boh', category: 'holidays', audio: 'feliz-ano-nuevo' },
  { spanish: 'La Nochebuena es muy especial', english: 'Christmas Eve is very special', pronunciation: 'lah NOH-cheh-BWEH-nah ehs mooy ehs-peh-see-AHL', category: 'holidays', audio: 'la-nochebuena-es-especial' },
  { spanish: 'Pusimos un altar de muertos', english: 'We set up a Day of the Dead altar', pronunciation: 'poo-SEE-mohs oon ahl-TAHR deh MWEHR-tohs', category: 'holidays', audio: 'pusimos-un-altar' },
  { spanish: 'Comimos doce uvas a medianoche', english: 'We ate twelve grapes at midnight', pronunciation: 'koh-MEE-mohs DOH-seh OO-bahs ah meh-dee-ah-NOH-cheh', category: 'holidays', audio: 'comimos-doce-uvas' },
  { spanish: 'La Semana Santa en Guatemala', english: 'Holy Week in Guatemala', pronunciation: 'lah seh-MAH-nah SAHN-tah ehn gwah-teh-MAH-lah', category: 'holidays', audio: 'la-semana-santa' },
  { spanish: 'El Día de los Reyes Magos', english: 'Three Kings\' Day', pronunciation: 'ehl DEE-ah deh lohs REH-yehs MAH-gohs', category: 'holidays', audio: 'el-dia-de-reyes' },
  { spanish: 'Celebramos la Independencia', english: 'We celebrated Independence Day', pronunciation: 'seh-leh-BRAH-mohs lah een-deh-pehn-DEHN-see-ah', category: 'holidays', audio: 'celebramos-la-independencia' },
  { spanish: 'Fuimos a la misa de Nochebuena', english: 'We went to the Christmas Eve mass', pronunciation: 'FWEE-mohs ah lah MEE-sah deh NOH-cheh-BWEH-nah', category: 'holidays', audio: 'fuimos-a-la-misa' },

  // === Traditions (10) ===
  { spanish: 'Rompimos la piñata', english: 'We broke the piñata', pronunciation: 'rohm-PEE-mohs lah pee-NYAH-tah', category: 'traditions', audio: 'rompimos-la-pinata' },
  { spanish: 'Cantamos villancicos', english: 'We sang Christmas carols', pronunciation: 'kahn-TAH-mohs bee-yahn-SEE-kohs', category: 'traditions', audio: 'cantamos-villancicos' },
  { spanish: 'Hicimos un brindis', english: 'We made a toast', pronunciation: 'ee-SEE-mohs oon BREEN-dees', category: 'traditions', audio: 'hicimos-un-brindis' },
  { spanish: 'Las posadas duran nueve días', english: 'Las Posadas last nine days', pronunciation: 'lahs poh-SAH-dahs DOO-rahn NWEH-beh DEE-ahs', category: 'traditions', audio: 'las-posadas-duran' },
  { spanish: 'Decoramos con papel picado', english: 'We decorated with perforated paper', pronunciation: 'deh-koh-RAH-mohs kohn pah-PEHL pee-KAH-doh', category: 'traditions', audio: 'decoramos-con-papel-picado' },
  { spanish: 'Pusimos flores de cempasúchil', english: 'We placed marigold flowers', pronunciation: 'poo-SEE-mohs FLOH-rehs deh sehm-pah-SOO-cheel', category: 'traditions', audio: 'pusimos-flores-cempasuchil' },
  { spanish: 'Comimos tamales en Navidad', english: 'We ate tamales at Christmas', pronunciation: 'koh-MEE-mohs tah-MAH-lehs ehn nah-bee-DAHD', category: 'traditions', audio: 'comimos-tamales' },
  { spanish: 'Quemamos fuegos artificiales', english: 'We set off fireworks', pronunciation: 'keh-MAH-mohs FWEH-gohs ahr-tee-fee-see-AH-lehs', category: 'traditions', audio: 'quemamos-fuegos-artificiales' },
  { spanish: 'Usamos máscaras en el Carnaval', english: 'We wore masks at Carnival', pronunciation: 'oo-SAH-mohs MAHS-kah-rahs ehn ehl kahr-nah-BAHL', category: 'traditions', audio: 'usamos-mascaras' },
  { spanish: 'Preparamos pan de muerto', english: 'We prepared bread of the dead', pronunciation: 'preh-pah-RAH-mohs pahn deh MWEHR-toh', category: 'traditions', audio: 'preparamos-pan-de-muerto' },

  // === Greetings (8) ===
  { spanish: '¡Felicidades!', english: 'Congratulations!', pronunciation: 'feh-lee-see-DAH-dehs', category: 'greetings', audio: 'felicidades' },
  { spanish: '¡Feliz cumpleaños!', english: 'Happy birthday!', pronunciation: 'feh-LEES koom-pleh-AH-nyohs', category: 'greetings', audio: 'feliz-cumpleanos' },
  { spanish: '¡Que lo pases muy bien!', english: 'Have a great time!', pronunciation: 'keh loh PAH-sehs mooy bee-EHN', category: 'greetings', audio: 'que-lo-pases-bien' },
  { spanish: '¡Salud!', english: 'Cheers!', pronunciation: 'sah-LOOD', category: 'greetings', audio: 'salud' },
  { spanish: '¡Próspero Año Nuevo!', english: 'Prosperous New Year!', pronunciation: 'PROHS-peh-roh AH-nyoh NWEH-boh', category: 'greetings', audio: 'prospero-ano-nuevo' },
  { spanish: '¡Enhorabuena por tu boda!', english: 'Congratulations on your wedding!', pronunciation: 'ehn-oh-rah-BWEH-nah pohr too BOH-dah', category: 'greetings', audio: 'enhorabuena-por-tu-boda' },
  { spanish: '¡Que cumplas muchos más!', english: 'May you have many more!', pronunciation: 'keh KOOM-plahs MOO-chohs mahs', category: 'greetings', audio: 'que-cumplas-muchos-mas' },
  { spanish: '¡Que vivan los novios!', english: 'Long live the bride and groom!', pronunciation: 'keh BEE-bahn lohs NOH-bee-ohs', category: 'greetings', audio: 'que-vivan-los-novios' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L37PhraseByAudio = phraseByAudio

// === FESTIVAL MATCH (unique activity) ===

export interface FestivalMatchChallenge {
  description: string
  english: string
  correctFestival: string
  options: string[]
}

export const FESTIVAL_MATCH_CHALLENGES: FestivalMatchChallenge[] = [
  {
    description: 'Se celebra el 1 y 2 de noviembre. Las familias construyen altares con fotos, flores de cempasúchil y comida para recordar a sus seres queridos que ya fallecieron.',
    english: 'Celebrated November 1-2. Families build altars with photos, marigolds, and food to remember their deceased loved ones.',
    correctFestival: 'Día de Muertos — México',
    options: ['Día de Muertos — México', 'Semana Santa — Guatemala', 'Las Posadas — México', 'Inti Raymi — Perú'],
  },
  {
    description: 'Es una fiesta enorme con desfiles, música, disfraces coloridos y mucho baile. Se celebra antes de la Cuaresma y es famosa en Barranquilla y Río de Janeiro.',
    english: 'A huge festival with parades, music, colorful costumes, and lots of dancing. Celebrated before Lent, famous in Barranquilla and Rio de Janeiro.',
    correctFestival: 'Carnaval — Brasil/Colombia',
    options: ['Carnaval — Brasil/Colombia', 'Feria de Cali — Colombia', 'Día de Muertos — México', 'Las Posadas — México'],
  },
  {
    description: 'Es la fiesta del sol que se celebra en Cusco el 24 de junio. Los incas honraban al dios sol Inti con ceremonias, danzas y ofrendas en la fortaleza de Sacsayhuamán.',
    english: 'The Festival of the Sun celebrated in Cusco on June 24. The Incas honored the sun god Inti with ceremonies, dances, and offerings at Sacsayhuamán.',
    correctFestival: 'Inti Raymi — Perú',
    options: ['Inti Raymi — Perú', 'Carnaval — Brasil/Colombia', 'Semana Santa — Guatemala', 'Feria de Cali — Colombia'],
  },
  {
    description: 'Se celebra en diciembre con cinco días de salsa, rumba y alegría. Hay desfiles con orquestas de salsa, caballos y reinas de belleza. ¡Es la capital mundial de la salsa!',
    english: 'Celebrated in December with five days of salsa, dance, and joy. There are parades with salsa orchestras, horses, and beauty queens. The world capital of salsa!',
    correctFestival: 'Feria de Cali — Colombia',
    options: ['Feria de Cali — Colombia', 'Carnaval — Brasil/Colombia', 'Las Posadas — México', 'Inti Raymi — Perú'],
  },
  {
    description: 'Durante esta semana, las calles se llenan de procesiones con alfombras de flores y aserrín de colores. Los participantes cargan imágenes religiosas en andas enormes.',
    english: 'During this week, streets fill with processions over carpets of flowers and colored sawdust. Participants carry religious images on enormous platforms.',
    correctFestival: 'Semana Santa — Guatemala',
    options: ['Semana Santa — Guatemala', 'Día de Muertos — México', 'Inti Raymi — Perú', 'Las Posadas — México'],
  },
  {
    description: 'Del 16 al 24 de diciembre, los vecinos van de casa en casa cantando villancicos y pidiendo posada. Al final hay piñatas, ponche y comida para todos.',
    english: 'From December 16-24, neighbors go house to house singing carols and asking for shelter. At the end there are piñatas, punch, and food for everyone.',
    correctFestival: 'Las Posadas — México',
    options: ['Las Posadas — México', 'Feria de Cali — Colombia', 'Semana Santa — Guatemala', 'Carnaval — Brasil/Colombia'],
  },
]

// === LESSON DATA ===

export const L37Data: LessonData = {
  id: 'L3.7',
  hero: {
    lessonId: 'L3.7',
    title: 'Celebrations & Traditions',
    subtitle: 'Fiestas, holidays, and cultural celebrations',
    description: 'Learn vocabulary for birthdays, weddings, quinceañeras, and major Latin American holidays. Discover traditions like Día de Muertos, Las Posadas, and Carnaval. Express congratulations and celebrate in Spanish!',
    image: '/images/L3.7/L3.7.jpg',
    gradient: 'from-rose-800/65 via-purple-700/55 to-amber-700/65',
    accentColor: 'rose-200',
  },

  objectives: [
    { icon: '🎂', title: 'Celebrations', desc: 'Talk about cumpleaños, bodas, and quinceañeras — the parties that bring families together.' },
    { icon: '🎄', title: 'Holidays', desc: 'Learn about Navidad, Día de Muertos, Año Nuevo, and Semana Santa vocabulary.' },
    { icon: '🪅', title: 'Traditions', desc: 'Describe piñatas, villancicos, brindis, altares de muertos, and other cultural customs.' },
    { icon: '🥂', title: 'Festive Greetings', desc: 'Say ¡Felicidades!, ¡Feliz cumpleaños!, ¡Salud! and other celebration phrases.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.2', label: 'Greetings & Farewells', detail: 'Greeting phrases from L1.2 expand here into festive congratulations and toasts.' },
    { fromLesson: 'L1.6', label: 'Family Members', detail: 'Family vocabulary from L1.6 — celebrations always involve la familia!' },
    { fromLesson: 'L3.1', label: 'Past Tense', detail: 'Preterite from L3.1 lets you tell what happened at the party: bailamos, comimos, brindamos.' },
  ],

  sectionTransitions: [
    { afterSection: 'celebrations', text: 'You know the party vocab! Now let\u2019s explore Latin American holidays.' },
    { afterSection: 'holidays', text: 'Holidays covered — now the traditions that make them special!' },
    { afterSection: 'traditions', text: 'Traditions mastered! Time for festive greetings.' },
    { afterSection: 'dialogues', text: 'Great conversations! Let\u2019s dive into the culture behind these celebrations.' },
    { afterSection: 'cultural', text: 'Now match festivals to their countries!' },
    { afterSection: 'festival-match', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: '¡Feliz cumpleaños!', english: 'Happy birthday!' },
    { spanish: 'Celebramos con...', english: 'We celebrated with...' },
    { spanish: 'Bailamos en la fiesta', english: 'We danced at the party' },
    { spanish: 'La tradición es...', english: 'The tradition is...' },
    { spanish: '¡Salud!', english: 'Cheers!' },
    { spanish: 'Fue una fiesta increíble', english: 'It was an incredible party' },
  ],

  pronunciationChallenges: [
    { spanish: 'La quinceañera de mi prima', pronunciation: 'lah keen-seh-ah-NYEH-rah deh mee PREE-mah', english: 'My cousin\'s quinceañera', audio: 'la-quinceanera-de-mi-prima', tip: '"Quinceañera" — the Ñ is key! It\'s "keen-seh-ah-NYEH-rah," NOT "keen-seh-ah-NEH-rah." The Ñ adds a Y sound.' },
    { spanish: 'Pusimos flores de cempasúchil', pronunciation: 'poo-SEE-mohs FLOH-rehs deh sehm-pah-SOO-cheel', english: 'We placed marigold flowers', audio: 'pusimos-flores-de-cempasuchil', tip: '"Cempasúchil" is a Nahuatl word! Stress the "SU" syllable. These orange marigolds guide the spirits home.' },
    { spanish: 'Rompimos la piñata', pronunciation: 'rohm-PEE-mohs lah pee-NYAH-tah', english: 'We broke the piñata', audio: 'rompimos-la-pinata', tip: 'Another Ñ word! "Piñata" = "pee-NYAH-tah." The Ñ makes it distinctly Spanish — English speakers often forget it.' },
    { spanish: 'Cantamos villancicos toda la noche', pronunciation: 'kahn-TAH-mohs bee-yahn-SEE-kohs TOH-dah lah NOH-cheh', english: 'We sang Christmas carols all night', audio: 'cantamos-villancicos-toda-la-noche', tip: '"Villancicos" — double L sounds like Y: "bee-yahn-SEE-kohs." These carols are sung during Las Posadas.' },
    { spanish: '¡Felicidades! ¡Enhorabuena!', pronunciation: 'feh-lee-see-DAH-dehs ehn-oh-rah-BWEH-nah', english: 'Congratulations!', audio: 'felicidades-enhorabuena', tip: '"Felicidades" for birthdays/general, "Enhorabuena" for achievements/weddings. Both mean congratulations!' },
    { spanish: 'Brindamos por los novios', pronunciation: 'breen-DAH-mohs pohr lohs NOH-bee-ohs', english: 'We toasted to the bride and groom', audio: 'brindamos-por-los-novios', tip: '"Brindamos" = we toasted. "Novios" = the couple (bride and groom). At weddings, everyone raises their glass!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'celebrations', label: 'Celebrations' },
    { id: 'holidays', label: 'Holidays' },
    { id: 'traditions', label: 'Traditions' },
    { id: 'greetings', label: 'Festive Greetings' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Celebration Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'festival-match', label: 'Festival Match' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'celebrations',
      title: 'Celebrations',
      description: 'Birthdays, weddings, and quinceañeras — the biggest parties in Latin American culture.',
      tabs: [
        { label: 'Birthday & Wedding', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'celebrations').slice(0, 5) },
        { label: 'Dancing & Toasts', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'celebrations').slice(5) },
      ],
    },
    {
      id: 'holidays',
      title: 'Holidays',
      description: 'Major holidays celebrated across Latin America — from Navidad to Día de Muertos.',
      tabs: [
        { label: 'Christmas & New Year', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'holidays').slice(0, 5) },
        { label: 'More Holidays', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'holidays').slice(5) },
      ],
    },
    {
      id: 'traditions',
      title: 'Traditions',
      description: 'The customs that make Latin American celebrations unique and unforgettable.',
      tabs: [
        { label: 'Piñatas & Carols', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'traditions').slice(0, 5) },
        { label: 'Altars & Food', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'traditions').slice(5) },
      ],
    },
    {
      id: 'greetings',
      title: 'Festive Greetings',
      description: 'The phrases you need to congratulate, toast, and celebrate with others.',
      tabs: [
        { label: 'Congratulations', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'greetings').slice(0, 4) },
        { label: 'Cheers & Wishes', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'greetings').slice(4) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Ñ in Celebrations',
      content: 'So many celebration words use Ñ! Quinceañera, piñata, cumpleaños, año nuevo. The Ñ sounds like "NY" in "canyon." Without it, you change the meaning entirely: "año" (year) vs. "ano" (a very different word!). Always pronounce the Ñ clearly.',
      example: 'Quinceañera (keen-seh-ah-NYEH-rah) | Piñata (pee-NYAH-tah) | Cumpleaños (koom-pleh-AH-nyohs)',
    },
    {
      title: 'Nahuatl Words in Spanish',
      content: 'Some celebration vocabulary comes from Nahuatl, the Aztec language: cempasúchil (marigold), chocolate, tamal. These words entered Spanish during the colonial period and are used daily in Mexico. Stress patterns may differ from typical Spanish rules.',
      example: 'Cempasúchil (sehm-pah-SOO-cheel) | Tamal → Tamales (tah-MAH-lehs)',
      reviewFrom: 'L3.1',
    },
    {
      title: 'Party Verbs in Preterite',
      content: 'Most celebration verbs are regular -AR in the preterite: bailamos (we danced), celebramos (we celebrated), brindamos (we toasted), cantamos (we sang). Remember from L3.1: the "nosotros" form is the same in present and preterite! Context tells you which.',
      example: 'Bailamos (we dance / we danced) | Celebramos toda la noche (we celebrated all night)',
      reviewFrom: 'L3.1',
    },
    {
      title: 'Exclamation Marks — Double!',
      content: 'Spanish uses OPENING and closing exclamation marks: ¡Felicidades! ¡Salud! ¡Feliz cumpleaños! The opening mark (¡) tells the reader to start with excitement. In festive contexts, you\u2019ll see them everywhere. Don\u2019t forget the ¡ at the beginning!',
      example: '¡Feliz Navidad! | ¡Próspero Año Nuevo! | ¡Que vivan los novios!',
    },
  ],

  flashcardGroups: [
    {
      key: 'celebrations',
      label: 'Celebrations',
      audioKeys: ['la-fiesta-de-cumpleanos', 'la-boda-fue-hermosa', 'la-quinceanera-de-mi-prima', 'celebramos-con-toda-la-familia', 'soplo-las-velas', 'bailamos-toda-la-noche', 'abrio-los-regalos', 'el-vals-de-la-quinceanera', 'brindamos-por-los-novios', 'tiramos-confeti'],
    },
    {
      key: 'holidays',
      label: 'Holidays',
      audioKeys: ['feliz-navidad', 'el-dia-de-muertos', 'feliz-ano-nuevo', 'la-nochebuena-es-especial', 'pusimos-un-altar', 'comimos-doce-uvas', 'la-semana-santa', 'el-dia-de-reyes', 'celebramos-la-independencia', 'fuimos-a-la-misa'],
    },
    {
      key: 'traditions-greetings',
      label: 'Traditions & Greetings',
      audioKeys: ['rompimos-la-pinata', 'cantamos-villancicos', 'hicimos-un-brindis', 'decoramos-con-papel-picado', 'comimos-tamales', 'felicidades', 'feliz-cumpleanos', 'salud', 'que-lo-pases-bien'],
    },
  ],

  matchPairs: [
    { left: 'La boda', right: 'The wedding' },
    { left: 'Quinceañera', right: '15th birthday celebration' },
    { left: 'Día de Muertos', right: 'Day of the Dead' },
    { left: 'Villancicos', right: 'Christmas carols' },
    { left: 'Piñata', right: 'Candy-filled figure' },
    { left: '¡Felicidades!', right: 'Congratulations!' },
    { left: 'Nochebuena', right: 'Christmas Eve' },
    { left: '¡Salud!', right: 'Cheers!' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Celebration or Holiday?',
      instruction: 'Is this a personal celebration or a public holiday?',
      buckets: ['Personal Celebration 🎂', 'Public Holiday 🎆'],
      items: [
        { text: 'La boda', bucket: 'Personal Celebration 🎂' },
        { text: 'La quinceañera', bucket: 'Personal Celebration 🎂' },
        { text: 'La fiesta de cumpleaños', bucket: 'Personal Celebration 🎂' },
        { text: 'El bautizo', bucket: 'Personal Celebration 🎂' },
        { text: 'Día de Muertos', bucket: 'Public Holiday 🎆' },
        { text: 'Navidad', bucket: 'Public Holiday 🎆' },
        { text: 'Año Nuevo', bucket: 'Public Holiday 🎆' },
        { text: 'Semana Santa', bucket: 'Public Holiday 🎆' },
      ],
    },
    {
      title: 'Mexico or Other Country?',
      instruction: 'Is this tradition primarily from Mexico or another country?',
      buckets: ['Mexico 🇲🇽', 'Other Country 🌎'],
      items: [
        { text: 'Día de Muertos', bucket: 'Mexico 🇲🇽' },
        { text: 'Las Posadas', bucket: 'Mexico 🇲🇽' },
        { text: 'Piñata', bucket: 'Mexico 🇲🇽' },
        { text: 'Pan de muerto', bucket: 'Mexico 🇲🇽' },
        { text: 'Carnaval de Barranquilla', bucket: 'Other Country 🌎' },
        { text: 'Inti Raymi', bucket: 'Other Country 🌎' },
        { text: 'Feria de Cali', bucket: 'Other Country 🌎' },
        { text: 'Semana Santa (Guatemala)', bucket: 'Other Country 🌎' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Celebration Sorting',

  dialogues: [
    {
      id: 'dialogue-quinceanera',
      title: 'The Quinceañera — Ciudad de México',
      location: 'Ciudad de México',
      lines: [
        { speaker: 'Sofía', text: '¡Hola! ¿Fuiste a la quinceañera de Valentina?', audio: '/audio/L3.7/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: '¡Sí! Fue increíble. Bailamos toda la noche.', audio: '/audio/L3.7/phrases/d1-line2.mp3', annotations: [{ phrase: 'Bailamos', fromLesson: 'L3.1', note: 'Preterite -AR from L3.1' }] },
        { speaker: 'Sofía', text: '¿Cómo estuvo el vals?', audio: '/audio/L3.7/phrases/d1-line3.mp3' },
        { speaker: 'Diego', text: 'Hermoso. Valentina bailó con su papá primero y después con sus chambelanes.', audio: '/audio/L3.7/phrases/d1-line4.mp3', annotations: [{ phrase: 'su papá', fromLesson: 'L1.6', note: 'Family from L1.6' }] },
        { speaker: 'Sofía', text: '¿Rompieron la piñata?', audio: '/audio/L3.7/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: '¡Claro! Y también comimos un pastel enorme de tres pisos.', audio: '/audio/L3.7/phrases/d1-line6.mp3' },
        { speaker: 'Sofía', text: '¿Le dieron regalos?', audio: '/audio/L3.7/phrases/d1-line7.mp3' },
        { speaker: 'Diego', text: 'Sí, su abuela le dio un anillo de oro. Valentina lloró de la emoción.', audio: '/audio/L3.7/phrases/d1-line8.mp3', annotations: [{ phrase: 'su abuela', fromLesson: 'L1.6', note: 'Family from L1.6' }] },
        { speaker: 'Sofía', text: '¡Qué bonito! ¡Felicidades a Valentina!', audio: '/audio/L3.7/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-dia-muertos',
      title: 'Día de Muertos — Oaxaca',
      location: 'Oaxaca',
      lines: [
        { speaker: 'Camila', text: '¿Celebraste el Día de Muertos este año?', audio: '/audio/L3.7/phrases/d2-line1.mp3' },
        { speaker: 'Andrés', text: 'Sí, fuimos a Oaxaca con toda la familia.', audio: '/audio/L3.7/phrases/d2-line2.mp3', annotations: [{ phrase: 'toda la familia', fromLesson: 'L1.6', note: 'Family from L1.6' }] },
        { speaker: 'Camila', text: '¿Pusieron un altar de muertos?', audio: '/audio/L3.7/phrases/d2-line3.mp3' },
        { speaker: 'Andrés', text: 'Sí, pusimos fotos de mis abuelos, flores de cempasúchil y su comida favorita.', audio: '/audio/L3.7/phrases/d2-line4.mp3' },
        { speaker: 'Camila', text: '¿Fueron al panteón?', audio: '/audio/L3.7/phrases/d2-line5.mp3' },
        { speaker: 'Andrés', text: 'Sí, decoramos las tumbas con velas y flores. Fue muy emotivo.', audio: '/audio/L3.7/phrases/d2-line6.mp3' },
        { speaker: 'Camila', text: '¿Comieron algo especial?', audio: '/audio/L3.7/phrases/d2-line7.mp3' },
        { speaker: 'Andrés', text: 'Preparamos pan de muerto y chocolate caliente. También vimos las comparsas en el centro.', audio: '/audio/L3.7/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Experience a quinceañera in Mexico City and celebrate Día de Muertos in Oaxaca.',

  culturalNotes: [
    {
      title: 'La Quinceañera — More Than a Party',
      content: 'The quinceañera celebrates a girl\'s 15th birthday and her transition to womanhood. It typically includes a religious ceremony (misa de acción de gracias), the "vals" (waltz) with her father and chambelanes (escorts), the changing of shoes (from flats to heels), and the "última muñeca" (last doll). Each ritual symbolizes growing up. Today, some families also celebrate "quinceañeros" for boys!',
    },
    {
      title: 'Día de Muertos — Celebrating Life Through Death',
      content: 'Día de Muertos (November 1-2) is NOT "Mexican Halloween." It\'s a joyful celebration where families welcome back the spirits of deceased loved ones. Altars (ofrendas) include the person\'s favorite food, photos, cempasúchil flowers (whose scent guides spirits), pan de muerto, and papel picado. UNESCO declared it Intangible Cultural Heritage of Humanity in 2003. Each region of Mexico celebrates differently!',
    },
    {
      title: 'Las Doce Uvas — New Year\'s Eve Tradition',
      content: 'At midnight on December 31, people across Latin America and Spain eat 12 grapes — one for each bell stroke at midnight, one for each month of the new year. Each grape represents a wish. If you can eat all 12 before the bells stop, your wishes will come true! Other traditions include wearing yellow underwear (for money), red (for love), or carrying a suitcase around the block (for travel).',
    },
  ],
  culturalGradient: 'from-rose-50 to-purple-50',

  quiz: [
    { id: 1, type: 'mc', text: 'A quinceañera celebrates a girl turning:', options: ['13 years old', '15 years old', '16 years old', '18 years old'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "¡Feliz ___!" (birthday)', answer: 'cumpleaños' },
    { id: 3, type: 'mc', text: '"Día de Muertos" is celebrated on:', options: ['October 31', 'November 1-2', 'November 15', 'December 1'], answer: 1 },
    { id: 4, type: 'tf', text: 'Día de Muertos is the same as Halloween.', answer: false },
    { id: 5, type: 'mc', text: '"Brindamos por los novios" means:', options: ['We danced with the couple', 'We toasted to the bride and groom', 'We sang for the couple', 'We cooked for the newlyweds'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Rompimos la ___" (piñata)', answer: 'piñata' },
    { id: 7, type: 'mc', text: 'The orange flowers on Día de Muertos altars are called:', options: ['Rosas', 'Cempasúchil', 'Girasoles', 'Claveles'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, who gave Valentina a gold ring?', options: ['Her father', 'Her mother', 'Her grandmother', 'Her best friend'], answer: 2 },
    { id: 9, type: 'tf', text: 'Las Posadas last from December 16 to December 24.', answer: true },
    { id: 10, type: 'mc', text: '"¡Salud!" is used when:', options: ['Saying goodbye', 'Making a toast', 'Ordering food', 'Introducing someone'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "Cantamos ___ en Navidad" (Christmas carols)', answer: 'villancicos' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what did Andrés prepare for Día de Muertos?', options: ['Tamales and atole', 'Pan de muerto and hot chocolate', 'Mole and rice', 'Pozole and tostadas'], answer: 1 },
    { id: 13, type: 'mc', text: 'How many grapes do you eat at midnight on New Year\'s Eve?', options: ['6', '10', '12', '24'], answer: 2 },
    { id: 14, type: 'tf', text: '"Nochebuena" refers to Christmas Eve, not Christmas Day.', answer: true },
    { id: 15, type: 'mc', text: '"Inti Raymi" is a festival from:', options: ['Mexico', 'Colombia', 'Peru', 'Guatemala'], answer: 2 },
  ],

  audioBase: '/audio/L3.7/phrases',

  uniqueActivity: {
    id: 'FestivalMatchL37',
    sectionId: 'festival-match',
    sectionColor: 'bg-rose-50/40',
    sectionBorder: 'border-rose-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    celebrations: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    holidays: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    traditions: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    greetings: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    cultural: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'festival-match': { bg: 'bg-rose-50/40', border: 'border-rose-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
