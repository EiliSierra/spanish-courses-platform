import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Body Idioms (12) ===
  { spanish: 'Meter la pata', english: 'To put your foot in it / mess up', pronunciation: 'meh-TEHR lah PAH-tah', category: 'body-idioms', audio: 'meter-la-pata' },
  { spanish: 'Tomar el pelo', english: 'To pull someone\'s leg / joke around', pronunciation: 'toh-MAHR ehl PEH-loh', category: 'body-idioms', audio: 'tomar-el-pelo' },
  { spanish: 'No tener pelos en la lengua', english: 'To not mince words / speak bluntly', pronunciation: 'noh teh-NEHR PEH-lohs ehn lah LEHN-gwah', category: 'body-idioms', audio: 'no-tener-pelos-en-la-lengua' },
  { spanish: 'Dar la mano', english: 'To shake hands / lend a hand', pronunciation: 'dahr lah MAH-noh', category: 'body-idioms', audio: 'dar-la-mano' },
  { spanish: 'Echar una mano', english: 'To give someone a hand / help out', pronunciation: 'eh-CHAHR OO-nah MAH-noh', category: 'body-idioms', audio: 'echar-una-mano' },
  { spanish: 'Costar un ojo de la cara', english: 'To cost an arm and a leg', pronunciation: 'kohs-TAHR oon OH-hoh deh lah KAH-rah', category: 'body-idioms', audio: 'costar-un-ojo-de-la-cara' },
  { spanish: 'Poner los pies en la tierra', english: 'To have your feet on the ground / be realistic', pronunciation: 'poh-NEHR lohs pee-EHS ehn lah tee-EH-rrah', category: 'body-idioms', audio: 'poner-los-pies-en-la-tierra' },
  { spanish: 'Tener la cabeza en las nubes', english: 'To have your head in the clouds', pronunciation: 'teh-NEHR lah kah-BEH-sah ehn lahs NOO-behs', category: 'body-idioms', audio: 'tener-la-cabeza-en-las-nubes' },
  { spanish: 'Dar en el clavo', english: 'To hit the nail on the head', pronunciation: 'dahr ehn ehl KLAH-boh', category: 'body-idioms', audio: 'dar-en-el-clavo' },
  { spanish: 'Quedarse con la boca abierta', english: 'To be left speechless / jaw drop', pronunciation: 'keh-DAHR-seh kohn lah BOH-kah ah-bee-EHR-tah', category: 'body-idioms', audio: 'quedarse-con-la-boca-abierta' },
  { spanish: 'Tener sangre fría', english: 'To be cold-blooded / keep calm', pronunciation: 'teh-NEHR SAHN-greh FREE-ah', category: 'body-idioms', audio: 'tener-sangre-fria' },
  { spanish: 'Romperse la cabeza', english: 'To rack your brain', pronunciation: 'rohm-PEHR-seh lah kah-BEH-sah', category: 'body-idioms', audio: 'romperse-la-cabeza' },

  // === Nature & Animal Idioms (12) ===
  { spanish: 'Estar en las nubes', english: 'To be daydreaming / spaced out', pronunciation: 'ehs-TAHR ehn lahs NOO-behs', category: 'nature-animal-idioms', audio: 'estar-en-las-nubes' },
  { spanish: 'Llover a cántaros', english: 'To rain cats and dogs', pronunciation: 'yoh-BEHR ah KAHN-tah-rohs', category: 'nature-animal-idioms', audio: 'llover-a-cantaros' },
  { spanish: 'Ser un pez gordo', english: 'To be a big fish / important person', pronunciation: 'sehr oon pehs GOHR-doh', category: 'nature-animal-idioms', audio: 'ser-un-pez-gordo' },
  { spanish: 'Matar dos pájaros de un tiro', english: 'To kill two birds with one stone', pronunciation: 'mah-TAHR dohs PAH-hah-rohs deh oon TEE-roh', category: 'nature-animal-idioms', audio: 'matar-dos-pajaros-de-un-tiro' },
  { spanish: 'Buscar la quinta pata al gato', english: 'To look for problems where there are none', pronunciation: 'boos-KAHR lah KEEN-tah PAH-tah ahl GAH-toh', category: 'nature-animal-idioms', audio: 'buscar-la-quinta-pata-al-gato' },
  { spanish: 'Cuando el río suena, agua lleva', english: 'Where there\'s smoke, there\'s fire', pronunciation: 'KWAHN-doh ehl REE-oh SWEH-nah AH-gwah YEH-bah', category: 'nature-animal-idioms', audio: 'cuando-el-rio-suena' },
  { spanish: 'Estar como pez en el agua', english: 'To be in your element / like a fish in water', pronunciation: 'ehs-TAHR KOH-moh pehs ehn ehl AH-gwah', category: 'nature-animal-idioms', audio: 'estar-como-pez-en-el-agua' },
  { spanish: 'Ser más lento que una tortuga', english: 'To be slower than a turtle', pronunciation: 'sehr mahs LEHN-toh keh OO-nah tohr-TOO-gah', category: 'nature-animal-idioms', audio: 'ser-mas-lento-que-una-tortuga' },
  { spanish: 'Tener memoria de pez', english: 'To have a memory like a goldfish', pronunciation: 'teh-NEHR meh-MOH-ree-ah deh pehs', category: 'nature-animal-idioms', audio: 'tener-memoria-de-pez' },
  { spanish: 'Ahogarse en un vaso de agua', english: 'To make a mountain out of a molehill', pronunciation: 'ah-oh-GAHR-seh ehn oon BAH-soh deh AH-gwah', category: 'nature-animal-idioms', audio: 'ahogarse-en-un-vaso-de-agua' },
  { spanish: 'Ser pan comido', english: 'To be a piece of cake / very easy', pronunciation: 'sehr pahn koh-MEE-doh', category: 'nature-animal-idioms', audio: 'ser-pan-comido' },
  { spanish: 'Estar en la luna', english: 'To be on the moon / totally distracted', pronunciation: 'ehs-TAHR ehn lah LOO-nah', category: 'nature-animal-idioms', audio: 'estar-en-la-luna' },

  // === Proverbs / Refranes (12) ===
  { spanish: 'No hay mal que por bien no venga', english: 'Every cloud has a silver lining', pronunciation: 'noh eye mahl keh pohr bee-EHN noh BEHN-gah', category: 'proverbs-refranes', audio: 'no-hay-mal-que-por-bien-no-venga' },
  { spanish: 'En boca cerrada no entran moscas', english: 'Silence is golden / keep your mouth shut', pronunciation: 'ehn BOH-kah seh-RRAH-dah noh EHN-trahn MOHS-kahs', category: 'proverbs-refranes', audio: 'en-boca-cerrada-no-entran-moscas' },
  { spanish: 'Más vale tarde que nunca', english: 'Better late than never', pronunciation: 'mahs BAH-leh TAHR-deh keh NOON-kah', category: 'proverbs-refranes', audio: 'mas-vale-tarde-que-nunca' },
  { spanish: 'A caballo regalado no le mires el diente', english: 'Don\'t look a gift horse in the mouth', pronunciation: 'ah kah-BAH-yoh rreh-gah-LAH-doh noh leh MEE-rehs ehl dee-EHN-teh', category: 'proverbs-refranes', audio: 'a-caballo-regalado' },
  { spanish: 'Dime con quién andas y te diré quién eres', english: 'Tell me who your friends are and I\'ll tell you who you are', pronunciation: 'DEE-meh kohn kee-EHN AHN-dahs ee teh dee-REH kee-EHN EH-rehs', category: 'proverbs-refranes', audio: 'dime-con-quien-andas' },
  { spanish: 'El que mucho abarca, poco aprieta', english: 'Jack of all trades, master of none', pronunciation: 'ehl keh MOO-choh ah-BAHR-kah POH-koh ah-pree-EH-tah', category: 'proverbs-refranes', audio: 'el-que-mucho-abarca' },
  { spanish: 'No por mucho madrugar amanece más temprano', english: 'Good things come to those who wait', pronunciation: 'noh pohr MOO-choh mah-droo-GAHR ah-mah-NEH-seh mahs tehm-PRAH-noh', category: 'proverbs-refranes', audio: 'no-por-mucho-madrugar' },
  { spanish: 'A quien madruga, Dios le ayuda', english: 'The early bird catches the worm', pronunciation: 'ah kee-EHN mah-DROO-gah dee-OHS leh ah-YOO-dah', category: 'proverbs-refranes', audio: 'a-quien-madruga' },
  { spanish: 'Más vale prevenir que curar', english: 'An ounce of prevention is worth a pound of cure', pronunciation: 'mahs BAH-leh preh-beh-NEER keh koo-RAHR', category: 'proverbs-refranes', audio: 'mas-vale-prevenir-que-curar' },
  { spanish: 'Ojos que no ven, corazón que no siente', english: 'Out of sight, out of mind', pronunciation: 'OH-hohs keh noh behn koh-rah-SOHN keh noh see-EHN-teh', category: 'proverbs-refranes', audio: 'ojos-que-no-ven' },
  { spanish: 'El hábito no hace al monje', english: 'Don\'t judge a book by its cover', pronunciation: 'ehl AH-bee-toh noh AH-seh ahl MOHN-heh', category: 'proverbs-refranes', audio: 'el-habito-no-hace-al-monje' },
  { spanish: 'Camarón que se duerme, se lo lleva la corriente', english: 'You snooze, you lose', pronunciation: 'kah-mah-ROHN keh seh DWEHR-meh seh loh YEH-bah lah koh-rree-EHN-teh', category: 'proverbs-refranes', audio: 'camaron-que-se-duerme' },

  // === Colloquial Intensifiers (12) ===
  { spanish: '¡Qué fuerte!', english: 'No way! / That\'s intense!', pronunciation: 'keh FWEHR-teh', category: 'colloquial-intensifiers', audio: 'que-fuerte' },
  { spanish: 'Mola mucho', english: 'That\'s really cool (Spain)', pronunciation: 'MOH-lah MOO-choh', category: 'colloquial-intensifiers', audio: 'mola-mucho' },
  { spanish: '¡Estoy flipando!', english: 'I\'m freaking out! / I can\'t believe it! (Spain)', pronunciation: 'ehs-TOY flee-PAHN-doh', category: 'colloquial-intensifiers', audio: 'estoy-flipando' },
  { spanish: 'Es una pasada', english: 'It\'s amazing / awesome (Spain)', pronunciation: 'ehs OO-nah pah-SAH-dah', category: 'colloquial-intensifiers', audio: 'es-una-pasada' },
  { spanish: '¡Qué guay!', english: 'How cool! (Spain)', pronunciation: 'keh gwai', category: 'colloquial-intensifiers', audio: 'que-guay' },
  { spanish: '¡Qué chévere!', english: 'How cool! (Colombia, Venezuela, Ecuador)', pronunciation: 'keh CHEH-beh-reh', category: 'colloquial-intensifiers', audio: 'que-chevere' },
  { spanish: '¡Qué padre!', english: 'How cool! (Mexico)', pronunciation: 'keh PAH-dreh', category: 'colloquial-intensifiers', audio: 'que-padre' },
  { spanish: '¡Qué copado!', english: 'How cool! (Argentina)', pronunciation: 'keh koh-PAH-doh', category: 'colloquial-intensifiers', audio: 'que-copado' },
  { spanish: '¡No manches!', english: 'No way! / You\'re kidding! (Mexico)', pronunciation: 'noh MAHN-chehs', category: 'colloquial-intensifiers', audio: 'no-manches' },
  { spanish: '¡Qué locura!', english: 'How crazy! / That\'s insane!', pronunciation: 'keh loh-KOO-rah', category: 'colloquial-intensifiers', audio: 'que-locura' },
  { spanish: '¡Qué bárbaro!', english: 'How awesome! / Incredible! (Argentina, Uruguay)', pronunciation: 'keh BAHR-bah-roh', category: 'colloquial-intensifiers', audio: 'que-barbaro' },
  { spanish: '¡Está buenísimo!', english: 'It\'s super good! / amazing!', pronunciation: 'ehs-TAH bweh-NEE-see-moh', category: 'colloquial-intensifiers', audio: 'esta-buenisimo' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L56PhraseByAudio = phraseByAudio

// === IDIOM DETECTIVE (unique activity) ===

export interface IdiomDetectiveChallenge {
  conversation: string
  english: string
  idiomUsed: string
  correctMeaning: string
  options: string[]
}

export const IDIOM_DETECTIVE_CHALLENGES: IdiomDetectiveChallenge[] = [
  {
    conversation: '—¿Cómo te fue en la reunión?\n—Fatal. Dije algo inapropiado sobre el jefe y metí la pata.',
    english: 'How did the meeting go? — Terrible. I said something inappropriate about the boss and I messed up.',
    idiomUsed: 'metí la pata',
    correctMeaning: 'Made an embarrassing mistake',
    options: ['Made an embarrassing mistake', 'Put my foot in a bucket', 'Kicked someone under the table', 'Walked out angrily'],
  },
  {
    conversation: '—¿Es verdad que te vas a vivir a la luna?\n—¡No! Mi hermano te está tomando el pelo.',
    english: 'Is it true you\'re going to live on the moon? — No! My brother is pulling your leg.',
    idiomUsed: 'tomando el pelo',
    correctMeaning: 'Joking with you / teasing you',
    options: ['Cutting your hair', 'Joking with you / teasing you', 'Stealing your ideas', 'Ignoring you completely'],
  },
  {
    conversation: '—Vi unos zapatos preciosos pero costaban 500 euros.\n—¡Madre mía! Eso cuesta un ojo de la cara.',
    english: 'I saw some beautiful shoes but they cost 500 euros. — That costs an arm and a leg!',
    idiomUsed: 'cuesta un ojo de la cara',
    correctMeaning: 'It\'s extremely expensive',
    options: ['It hurts your eyes to look at it', 'It\'s extremely expensive', 'It\'s worth every penny', 'It\'s a visual masterpiece'],
  },
  {
    conversation: '—¿Puedes ayudarme con la mudanza el sábado?\n—¡Claro! Siempre estoy dispuesto a echar una mano.',
    english: 'Can you help me with the move on Saturday? — Of course! I\'m always willing to lend a hand.',
    idiomUsed: 'echar una mano',
    correctMeaning: 'Help someone out',
    options: ['Throw something away', 'Shake hands formally', 'Help someone out', 'Wave goodbye'],
  },
  {
    conversation: '—Tu abuela siempre dice lo que piensa sin filtro.\n—Sí, ella no tiene pelos en la lengua.',
    english: 'Your grandma always says what she thinks without a filter. — Yes, she doesn\'t mince words.',
    idiomUsed: 'no tiene pelos en la lengua',
    correctMeaning: 'Speaks very directly and honestly',
    options: ['Has trouble speaking clearly', 'Speaks very directly and honestly', 'Is always whispering secrets', 'Never talks to strangers'],
  },
  {
    conversation: '—¡Oye! Está lloviendo a cántaros. No salgas sin paraguas.\n—Tienes razón, me quedo en casa.',
    english: 'Hey! It\'s raining cats and dogs. Don\'t go out without an umbrella.',
    idiomUsed: 'lloviendo a cántaros',
    correctMeaning: 'Raining very heavily',
    options: ['Raining very heavily', 'Drizzling lightly', 'A pitcher fell from the sky', 'The weather is unpredictable'],
  },
  {
    conversation: '—Mi vecino acaba de comprarse un yate y un Ferrari.\n—Normal, es un pez gordo en la industria petrolera.',
    english: 'My neighbor just bought a yacht and a Ferrari. — Makes sense, he\'s a big shot in the oil industry.',
    idiomUsed: 'un pez gordo',
    correctMeaning: 'An important or powerful person',
    options: ['Someone who eats a lot of fish', 'An important or powerful person', 'A person who is overweight', 'Someone who loves the ocean'],
  },
]

// === LESSON DATA ===

export const L56Data: LessonData = {
  id: 'L5.6',
  hero: {
    lessonId: 'L5.6',
    title: 'Idioms, Proverbs & Figurative Language',
    subtitle: 'Speaking like a native with colorful expressions',
    description: 'Unlock the richest layer of Spanish: idioms (modismos), proverbs (refranes), and regional slang. From "meter la pata" to "¡qué chévere!", master the figurative language that makes you sound truly fluent across the Spanish-speaking world.',
    image: '/images/L5.6/L5.6.jpg',
    gradient: 'from-amber-800/65 via-yellow-700/55 to-lime-700/65',
    accentColor: 'yellow-200',
  },

  objectives: [
    { icon: '🗣️', title: 'Body & Nature Idioms', desc: 'Use common Spanish idioms like meter la pata, tomar el pelo, estar en las nubes in natural conversation.' },
    { icon: '📜', title: 'Proverbs & Refranes', desc: 'Learn traditional Spanish proverbs (refranes) and know when to use them for wisdom and humor.' },
    { icon: '🌎', title: 'Regional Slang Variants', desc: 'Recognize and use colloquial expressions from Spain, Mexico, Colombia, and Argentina.' },
    { icon: '🔍', title: 'Figurative Meaning Detection', desc: 'Identify figurative vs. literal meaning in context and avoid common misunderstandings.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L3.5', label: 'Colloquial Hobby Language', detail: 'L3.5 introduced informal expressions about hobbies. Now expand to full idiomatic language.' },
    { fromLesson: 'L4.7', label: 'Arts & Descriptive Expressions', detail: 'L4.7 used expressive language for art. Idioms take expressiveness to the next level.' },
    { fromLesson: 'L3.7', label: 'Festival & Cultural Phrases', detail: 'L3.7 covered cultural celebrations. Proverbs are the oral tradition behind those celebrations.' },
  ],

  sectionTransitions: [
    { afterSection: 'body-idioms', text: 'You\'ve got body idioms down! Let\'s explore nature and animal expressions next.' },
    { afterSection: 'nature-animal-idioms', text: 'From clouds to fish — great work! Now let\'s discover the ancient wisdom of Spanish proverbs.' },
    { afterSection: 'proverbs-refranes', text: 'Refranes mastered! Time to learn the fun stuff — modern slang and intensifiers.' },
    { afterSection: 'dialogues', text: 'Awesome conversations! Let\'s explore why idioms vary so much across regions.' },
    { afterSection: 'cultural', text: 'Now put your detective skills to the test — can you spot the idiom meanings?' },
    { afterSection: 'idiom-detective', text: 'Final stretch — let\'s see how much you remember!' },
  ],

  personalizedVocab: [
    { spanish: 'Me tomaron el pelo...', english: 'They pulled my leg...' },
    { spanish: '¡Eso mola!', english: 'That\'s cool! (Spain)' },
    { spanish: 'No hay mal que por bien no venga', english: 'Every cloud has a silver lining' },
    { spanish: 'Metí la pata cuando...', english: 'I messed up when...' },
    { spanish: '¡Qué chévere tu...!', english: 'How cool your...! (Colombia)' },
    { spanish: 'Más vale tarde que nunca', english: 'Better late than never' },
  ],

  pronunciationChallenges: [
    { spanish: 'Camarón que se duerme, se lo lleva la corriente', pronunciation: 'kah-mah-ROHN keh seh DWEHR-meh seh loh YEH-bah lah koh-rree-EHN-teh', english: 'You snooze, you lose', audio: 'camaron-que-se-duerme-se-lo-lleva-la-corriente', tip: 'This proverb has a musical rhythm. Practice the natural flow: ca-ma-RÓN que se DUER-me. The double RR in "corriente" needs a strong trill.' },
    { spanish: 'No tener pelos en la lengua', pronunciation: 'noh teh-NEHR PEH-lohs ehn lah LEHN-gwah', english: 'To not mince words', audio: 'no-tener-pelos-en-la-lengua', tip: 'Watch the "gua" in "lengua" — it\'s LEHN-gwah, not LEHN-gah. The "u" is pronounced.' },
    { spanish: 'Matar dos pájaros de un tiro', pronunciation: 'mah-TAHR dohs PAH-hah-rohs deh oon TEE-roh', english: 'To kill two birds with one stone', audio: 'matar-dos-pajaros-de-un-tiro', tip: 'The "j" in "pájaros" makes the Spanish "h" sound (like English "h" but stronger). PAH-hah-rohs.' },
    { spanish: '¡Qué chévere!', pronunciation: 'keh CHEH-beh-reh', english: 'How cool!', audio: 'que-chevere', tip: 'This Colombian/Venezuelan expression has stress on the first syllable of "chévere": CHEH-beh-reh. The "ch" is like English "ch" in "cheese."' },
    { spanish: 'A caballo regalado no le mires el diente', pronunciation: 'ah kah-BAH-yoh rreh-gah-LAH-doh noh leh MEE-rehs ehl dee-EHN-teh', english: 'Don\'t look a gift horse in the mouth', audio: 'a-caballo-regalado-no-le-mires-el-diente', tip: 'Long proverb! Break it into chunks: "A caballo regalado" / "no le mires" / "el diente." The double RR in "regalado" needs a trill.' },
    { spanish: '¡Estoy flipando!', pronunciation: 'ehs-TOY flee-PAHN-doh', english: 'I\'m freaking out!', audio: 'estoy-flipando', tip: 'This Spain slang comes from English "flipping out." The "fl" combination is the same as English. Stress on -PAHN-: flee-PAHN-doh.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'body-idioms', label: 'Body Idioms' },
    { id: 'nature-animal-idioms', label: 'Nature & Animal Idioms' },
    { id: 'proverbs-refranes', label: 'Proverbs & Refranes' },
    { id: 'colloquial-intensifiers', label: 'Colloquial Intensifiers' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'idiom-sorting', label: 'Idiom Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'idiom-detective', label: 'Idiom Detective' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'body-idioms',
      title: 'Body Idioms — Modismos del Cuerpo',
      description: 'Spanish is full of idioms that reference body parts. These expressions are used daily in conversation and rarely translate literally!',
      tabs: [
        { label: 'Hands & Feet', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'body-idioms').slice(0, 6) },
        { label: 'Head & More', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'body-idioms').slice(6) },
      ],
    },
    {
      id: 'nature-animal-idioms',
      title: 'Nature & Animal Idioms — La Naturaleza',
      description: 'Animals and nature inspire some of the most vivid Spanish expressions. Many have equivalents in English — but the images are delightfully different.',
      tabs: [
        { label: 'Weather & Water', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'nature-animal-idioms').slice(0, 6) },
        { label: 'Animals & Food', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'nature-animal-idioms').slice(6) },
      ],
    },
    {
      id: 'proverbs-refranes',
      title: 'Proverbs — Refranes Populares',
      description: 'Refranes are the wisdom of centuries, passed down orally. Using a well-placed refrán in conversation instantly marks you as a sophisticated Spanish speaker.',
      tabs: [
        { label: 'Life Wisdom', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'proverbs-refranes').slice(0, 6) },
        { label: 'Character & Action', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'proverbs-refranes').slice(6) },
      ],
    },
    {
      id: 'colloquial-intensifiers',
      title: 'Colloquial Intensifiers — ¡Qué Fuerte!',
      description: 'Every Spanish-speaking country has its own way to say "cool," "awesome," or "no way!" Learn the regional favorites and sound like a local anywhere.',
      tabs: [
        { label: 'Spain Slang', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'colloquial-intensifiers').slice(0, 6) },
        { label: 'Latin America Slang', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'colloquial-intensifiers').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Idioms Flow as One Unit',
      content: 'Idioms are spoken as a single rhythmic phrase, not word-by-word. "Meter la pata" should flow as meh-TEHR-lah-PAH-tah without pauses. Native speakers blend the words together, especially with articles (la, el, un). Practice saying each idiom as one musical phrase.',
      example: 'Meter-la-pata | Tomar-el-pelo | Echar-una-mano → all flow as single units',
    },
    {
      title: 'Proverbs Have Musical Rhythm',
      content: 'Spanish proverbs (refranes) often rhyme or have a poetic meter. "En boca cerrada no entran moscas" has a 4-beat rhythm. When you learn a proverb, tap the rhythm with your hand — it helps your brain remember the phrase AND the pronunciation.',
      example: 'En-BO-ca-ce-RRA-da | no-EN-tran-MOS-cas (2 rhythmic phrases)',
      reviewFrom: 'L3.7',
    },
    {
      title: 'Regional Sounds Change Too',
      content: 'Slang carries its region\'s accent. "¡Qué chévere!" from Colombia has a clear, crisp pronunciation. "¡Qué copado!" from Argentina often comes with the Rioplatense "sh" for LL/Y. "Mola mucho" from Spain uses the Castilian rhythm. Don\'t just learn the words — absorb the sound.',
      example: '¡Qué chévere! (Colombian clear) vs. ¡Qué copado! (Argentine drawl) vs. ¡Mola! (Spanish quick)',
    },
    {
      title: 'The Art of the Refrán Pause',
      content: 'Most proverbs have two halves with a natural pause (caesura) in the middle. "Más vale tarde / que nunca." "Ojos que no ven / corazón que no siente." Speakers pause slightly between the halves for dramatic effect. Master this pause and you\'ll deliver proverbs like a native grandmother.',
      example: 'No hay mal que por bien no venga → "No hay mal... que por bien no venga" (pause after "mal")',
    },
  ],

  flashcardGroups: [
    {
      key: 'body-idioms',
      label: 'Body Idioms',
      audioKeys: ['meter-la-pata', 'tomar-el-pelo', 'no-tener-pelos-en-la-lengua', 'dar-la-mano', 'echar-una-mano', 'costar-un-ojo-de-la-cara', 'poner-los-pies-en-la-tierra', 'tener-la-cabeza-en-las-nubes', 'dar-en-el-clavo', 'quedarse-con-la-boca-abierta'],
    },
    {
      key: 'nature-proverbs',
      label: 'Nature Idioms & Proverbs',
      audioKeys: ['estar-en-las-nubes', 'llover-a-cantaros', 'ser-un-pez-gordo', 'matar-dos-pajaros-de-un-tiro', 'no-hay-mal-que-por-bien-no-venga', 'en-boca-cerrada-no-entran-moscas', 'mas-vale-tarde-que-nunca', 'a-caballo-regalado'],
    },
    {
      key: 'slang-intensifiers',
      label: 'Slang & Intensifiers',
      audioKeys: ['que-fuerte', 'mola-mucho', 'estoy-flipando', 'es-una-pasada', 'que-guay', 'que-chevere', 'que-padre', 'que-copado', 'no-manches', 'que-locura'],
    },
  ],

  matchPairs: [
    { left: 'Meter la pata', right: 'To mess up' },
    { left: 'Tomar el pelo', right: 'To pull someone\'s leg' },
    { left: 'Llover a cántaros', right: 'To rain cats and dogs' },
    { left: 'Ser pan comido', right: 'To be a piece of cake' },
    { left: 'Más vale tarde que nunca', right: 'Better late than never' },
    { left: '¡Qué chévere!', right: 'How cool! (Colombia)' },
    { left: 'Mola mucho', right: 'That\'s really cool (Spain)' },
    { left: 'Costar un ojo de la cara', right: 'To cost an arm and a leg' },
  ],
  matchLabels: { left: 'Expresión', right: 'Meaning' },

  sortActivities: [
    {
      title: 'Idiom vs. Proverb',
      instruction: 'Is this an idiom (everyday expression) or a proverb (traditional saying with moral)?',
      buckets: ['Idiom (Modismo) 🗣️', 'Proverb (Refrán) 📜'],
      items: [
        { text: 'Meter la pata', bucket: 'Idiom (Modismo) 🗣️' },
        { text: 'Tomar el pelo', bucket: 'Idiom (Modismo) 🗣️' },
        { text: 'Estar en las nubes', bucket: 'Idiom (Modismo) 🗣️' },
        { text: 'Costar un ojo de la cara', bucket: 'Idiom (Modismo) 🗣️' },
        { text: 'Más vale tarde que nunca', bucket: 'Proverb (Refrán) 📜' },
        { text: 'En boca cerrada no entran moscas', bucket: 'Proverb (Refrán) 📜' },
        { text: 'A caballo regalado no le mires el diente', bucket: 'Proverb (Refrán) 📜' },
        { text: 'Camarón que se duerme se lo lleva la corriente', bucket: 'Proverb (Refrán) 📜' },
      ],
    },
    {
      title: 'Positive vs. Negative Meaning',
      instruction: 'Does this expression convey a positive or negative meaning?',
      buckets: ['Positive / Encouraging 👍', 'Negative / Warning ⚠️'],
      items: [
        { text: 'Echar una mano (help out)', bucket: 'Positive / Encouraging 👍' },
        { text: 'Dar en el clavo (hit the nail on the head)', bucket: 'Positive / Encouraging 👍' },
        { text: '¡Qué chévere! (how cool!)', bucket: 'Positive / Encouraging 👍' },
        { text: 'Ser pan comido (piece of cake)', bucket: 'Positive / Encouraging 👍' },
        { text: 'Meter la pata (mess up)', bucket: 'Negative / Warning ⚠️' },
        { text: 'Ahogarse en un vaso de agua (overreact)', bucket: 'Negative / Warning ⚠️' },
        { text: 'Buscar la quinta pata al gato (overcomplicate)', bucket: 'Negative / Warning ⚠️' },
        { text: 'Tener memoria de pez (bad memory)', bucket: 'Negative / Warning ⚠️' },
      ],
    },
  ],
  sortSectionId: 'idiom-sorting',
  sortTitle: 'Idiom Sorting',

  dialogues: [
    {
      id: 'dialogue-medellin',
      title: 'Friends Chatting in a Café — Medellín',
      location: 'Medellín, Colombia',
      lines: [
        { speaker: 'Camila', text: '¡Ey, parcero! ¿Qué hubo? ¿Cómo te fue en la entrevista de trabajo?', audio: '/audio/L5.6/phrases/d1-line1.mp3' },
        { speaker: 'Andrés', text: 'Ay, hermano... metí la pata. Le dije al jefe que su empresa era pequeña.', audio: '/audio/L5.6/phrases/d1-line2.mp3', annotations: [{ phrase: 'metí la pata', fromLesson: 'L5.6', note: 'Idiom: messed up / put my foot in it' }] },
        { speaker: 'Camila', text: '¡Nooo! ¿Y él qué dijo? ¡Qué fuerte!', audio: '/audio/L5.6/phrases/d1-line3.mp3' },
        { speaker: 'Andrés', text: 'Se quedó con la boca abierta. Pero bueno, no hay mal que por bien no venga.', audio: '/audio/L5.6/phrases/d1-line4.mp3', annotations: [{ phrase: 'no hay mal que por bien no venga', fromLesson: 'L5.6', note: 'Proverb: every cloud has a silver lining' }] },
        { speaker: 'Camila', text: 'Eso sí es verdad. Oye, ¿y ya supiste lo de Julián? ¡Consiguió el trabajo en Google!', audio: '/audio/L5.6/phrases/d1-line5.mp3' },
        { speaker: 'Andrés', text: '¡¿En serio?! ¡Qué chévere! Ese man siempre cae como pez en el agua en las entrevistas.', audio: '/audio/L5.6/phrases/d1-line6.mp3', annotations: [{ phrase: 'como pez en el agua', fromLesson: 'L5.6', note: 'Idiom: in his element / very comfortable' }] },
        { speaker: 'Camila', text: 'Sí, a él nunca le toman el pelo. Siempre sabe qué decir.', audio: '/audio/L5.6/phrases/d1-line7.mp3' },
        { speaker: 'Andrés', text: 'Bueno, como dicen: a quien madruga, Dios le ayuda. Mañana voy a otra entrevista.', audio: '/audio/L5.6/phrases/d1-line8.mp3', annotations: [{ phrase: 'a quien madruga, Dios le ayuda', fromLesson: 'L5.6', note: 'Proverb: the early bird catches the worm' }] },
        { speaker: 'Camila', text: '¡Así se habla! ¡Dale con todo, parcero! ¡Tú puedes!', audio: '/audio/L5.6/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-madrid',
      title: 'Colleagues at the Office — Madrid',
      location: 'Madrid, Spain',
      lines: [
        { speaker: 'Laura', text: '¡Tío! ¿Has visto el nuevo proyecto? ¡Es una pasada!', audio: '/audio/L5.6/phrases/d2-line1.mp3', annotations: [{ phrase: 'es una pasada', fromLesson: 'L5.6', note: 'Spain slang: it\'s amazing' }] },
        { speaker: 'Pablo', text: 'Sí, mola mucho. Pero el plazo es cortísimo. Nos van a costar un ojo de la cara las horas extra.', audio: '/audio/L5.6/phrases/d2-line2.mp3' },
        { speaker: 'Laura', text: 'Ya, pero es lo que hay. Más vale prevenir que curar — empecemos ya.', audio: '/audio/L5.6/phrases/d2-line3.mp3', annotations: [{ phrase: 'más vale prevenir que curar', fromLesson: 'L5.6', note: 'Proverb: an ounce of prevention is worth a pound of cure' }] },
        { speaker: 'Pablo', text: 'Tienes razón. Oye, ¿y qué pasó con el informe de Marcos? Lleva tres días y nada.', audio: '/audio/L5.6/phrases/d2-line4.mp3' },
        { speaker: 'Laura', text: 'Es que ese tío está siempre en las nubes. Hay que decírselo clarito.', audio: '/audio/L5.6/phrases/d2-line5.mp3', annotations: [{ phrase: 'en las nubes', fromLesson: 'L5.6', note: 'Idiom: daydreaming / distracted' }] },
        { speaker: 'Pablo', text: '¡Estoy flipando! Le mandé tres correos y ni los ha abierto.', audio: '/audio/L5.6/phrases/d2-line6.mp3' },
        { speaker: 'Laura', text: 'Bueno, no te ahogues en un vaso de agua. Yo le echo una mano y entre los dos lo terminamos.', audio: '/audio/L5.6/phrases/d2-line7.mp3', annotations: [{ phrase: 'no te ahogues en un vaso de agua', fromLesson: 'L5.6', note: 'Idiom: don\'t make a mountain out of a molehill' }] },
        { speaker: 'Pablo', text: '¡Qué guay! Gracias, Laura. Contigo todo es pan comido.', audio: '/audio/L5.6/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Chat with friends in Medellín using Colombian idioms and slang, then navigate office life in Madrid with Spanish expressions and proverbs.',

  culturalNotes: [
    {
      title: 'Regional Idiom Variation — One Language, Many Flavors',
      content: 'Spanish has a shared core of idioms understood everywhere (meter la pata, costar un ojo de la cara), but every country adds its own spice. In Spain, something cool is "guay" or "mola"; in Mexico it\'s "padre" or "chido"; in Colombia, "chévere"; in Argentina, "copado" or "bárbaro." These differences aren\'t barriers — they\'re badges of identity. When traveling, locals love hearing foreigners use their local slang. Using "¡qué chévere!" in Bogotá or "¡mola!" in Madrid instantly earns you warmth and smiles.',
    },
    {
      title: 'The Oral Tradition of Refranes',
      content: 'Spanish proverbs (refranes) are a living oral tradition passed from grandmothers to grandchildren for centuries. Unlike English, where proverbs feel old-fashioned, Spanish speakers of ALL ages regularly use refranes in daily conversation. A mother scolding her child might say "camarón que se duerme, se lo lleva la corriente." A friend consoling another uses "no hay mal que por bien no venga." Many refranes come from Cervantes\' Don Quijote (1605), Arabic influence during the Moorish period, and rural agricultural wisdom. Knowing refranes signals cultural depth.',
    },
    {
      title: 'How Slang Evolves — From Streets to Screens',
      content: 'Modern Spanish slang evolves at lightning speed thanks to social media, reggaeton, and streaming. Words like "flipar" (Spain) came from English in the 1980s. "Chévere" has indigenous Caribbean roots. The newest generation says "es que está muy random" or "literal me muero" — mixing English with Spanish naturally. TikTok and Instagram are creating a pan-Hispanic slang where young speakers from Mexico to Spain understand each other\'s memes. The lesson? Slang is not "wrong" Spanish — it\'s Spanish alive and evolving.',
    },
  ],
  culturalGradient: 'from-amber-50 to-yellow-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Meter la pata" means:', options: ['To kick someone', 'To make an embarrassing mistake', 'To walk slowly', 'To put your foot in a shoe'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete the idiom: "Tomar el ___" (to pull someone\'s leg)', answer: 'pelo' },
    { id: 3, type: 'tf', text: '"Llover a cántaros" means it\'s raining very heavily.', answer: true },
    { id: 4, type: 'mc', text: '"Costar un ojo de la cara" is equivalent to:', options: ['Being blind', 'Costing an arm and a leg', 'Being beautiful', 'Having sharp eyesight'], answer: 1 },
    { id: 5, type: 'mc', text: 'In Colombia, you would say ___ to mean "how cool!"', options: ['¡Qué guay!', '¡Qué padre!', '¡Qué chévere!', '¡Qué copado!'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete the proverb: "Más vale tarde que ___"', answer: 'nunca' },
    { id: 7, type: 'mc', text: '"Mola mucho" is slang from:', options: ['Mexico', 'Argentina', 'Spain', 'Colombia'], answer: 2 },
    { id: 8, type: 'tf', text: '"Ser pan comido" means something is very difficult.', answer: false },
    { id: 9, type: 'mc', text: 'In Dialogue 1, Andrés\' mistake in the interview was:', options: ['Arriving late', 'Calling the company small', 'Forgetting his resume', 'Wearing the wrong clothes'], answer: 1 },
    { id: 10, type: 'fill', text: 'Complete: "En boca cerrada no entran ___"', answer: 'moscas' },
    { id: 11, type: 'mc', text: '"Estar en las nubes" means someone is:', options: ['Flying an airplane', 'Very happy', 'Daydreaming / distracted', 'Feeling sad'], answer: 2 },
    { id: 12, type: 'tf', text: 'Spanish proverbs (refranes) are only used by elderly people.', answer: false },
    { id: 13, type: 'mc', text: 'In Dialogue 2, Laura tells Pablo not to:', options: ['Work overtime', 'Make a mountain out of a molehill', 'Send more emails', 'Talk to the boss'], answer: 1 },
    { id: 14, type: 'mc', text: '"A caballo regalado no le mires el diente" is similar to:', options: ['The early bird catches the worm', 'Don\'t look a gift horse in the mouth', 'Actions speak louder than words', 'Better late than never'], answer: 1 },
    { id: 15, type: 'fill', text: 'Complete: "Camarón que se ___, se lo lleva la corriente" (You snooze, you lose)', answer: 'duerme' },
  ],

  audioBase: '/audio/L5.6/phrases',

  uniqueActivity: {
    id: 'IdiomDetectiveL56',
    sectionId: 'idiom-detective',
    sectionColor: 'bg-amber-50/40',
    sectionBorder: 'border-amber-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'body-idioms': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'nature-animal-idioms': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'proverbs-refranes': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'colloquial-intensifiers': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'matching-game': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'idiom-sorting': { bg: 'bg-lime-50/30', border: 'border-lime-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'idiom-detective': { bg: 'bg-amber-50/40', border: 'border-amber-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
