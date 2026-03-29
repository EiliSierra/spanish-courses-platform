import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Music (10) ===
  { spanish: 'La canción', english: 'The song', pronunciation: 'lah kahn-see-OHN', category: 'music', audio: 'la-cancion' },
  { spanish: 'El cantante', english: 'The singer', pronunciation: 'ehl kahn-TAHN-teh', category: 'music', audio: 'el-cantante' },
  { spanish: 'La banda', english: 'The band', pronunciation: 'lah BAHN-dah', category: 'music', audio: 'la-banda' },
  { spanish: 'El concierto', english: 'The concert', pronunciation: 'ehl kohn-see-EHR-toh', category: 'music', audio: 'el-concierto' },
  { spanish: 'La letra de la canción', english: 'The song lyrics', pronunciation: 'lah LEH-trah deh lah kahn-see-OHN', category: 'music', audio: 'la-letra-de-la-cancion' },
  { spanish: '¿Qué música te gusta?', english: 'What music do you like?', pronunciation: 'keh MOO-see-kah teh GOOS-tah', category: 'music', audio: 'que-musica-te-gusta' },
  { spanish: 'Me encanta el reggaetón', english: 'I love reggaeton', pronunciation: 'meh ehn-KAHN-tah ehl reh-geh-tohn', category: 'music', audio: 'me-encanta-el-reggaeton' },
  { spanish: 'Escucho salsa cuando cocino', english: 'I listen to salsa when I cook', pronunciation: 'ehs-KOO-choh SAHL-sah KWAHN-doh koh-SEE-noh', category: 'music', audio: 'escucho-salsa-cuando-cocino' },
  { spanish: 'De niño escuchaba cumbia', english: 'As a child I used to listen to cumbia', pronunciation: 'deh NEE-nyoh ehs-koo-CHAH-bah KOOM-bee-ah', category: 'music', audio: 'de-nino-escuchaba-cumbia' },
  { spanish: 'Fui a un concierto increíble', english: 'I went to an incredible concert', pronunciation: 'fwee ah oon kohn-see-EHR-toh een-kreh-EE-bleh', category: 'music', audio: 'fui-a-un-concierto-increible' },

  // === Movies & TV (10) ===
  { spanish: 'La película', english: 'The movie', pronunciation: 'lah peh-LEE-koo-lah', category: 'movies-tv', audio: 'la-pelicula' },
  { spanish: 'La serie', english: 'The TV series', pronunciation: 'lah SEH-ree-eh', category: 'movies-tv', audio: 'la-serie' },
  { spanish: 'El documental', english: 'The documentary', pronunciation: 'ehl doh-koo-mehn-TAHL', category: 'movies-tv', audio: 'el-documental' },
  { spanish: 'La comedia', english: 'The comedy', pronunciation: 'lah koh-MEH-dee-ah', category: 'movies-tv', audio: 'la-comedia' },
  { spanish: 'El drama', english: 'The drama', pronunciation: 'ehl DRAH-mah', category: 'movies-tv', audio: 'el-drama' },
  { spanish: 'La película de terror', english: 'The horror movie', pronunciation: 'lah peh-LEE-koo-lah deh teh-RROHR', category: 'movies-tv', audio: 'la-pelicula-de-terror' },
  { spanish: '¿Viste la nueva serie?', english: 'Did you see the new series?', pronunciation: 'BEES-teh lah NWEH-bah SEH-ree-eh', category: 'movies-tv', audio: 'viste-la-nueva-serie' },
  { spanish: 'Tiene muy buenas actuaciones', english: 'It has very good performances', pronunciation: 'tee-EH-neh mooy BWEH-nahs ahk-twah-see-OH-nehs', category: 'movies-tv', audio: 'tiene-buenas-actuaciones' },
  { spanish: 'El final me sorprendió', english: 'The ending surprised me', pronunciation: 'ehl fee-NAHL meh sohr-prehn-dee-OH', category: 'movies-tv', audio: 'el-final-me-sorprendio' },
  { spanish: 'Me gustaban las telenovelas de niña', english: 'I used to like telenovelas as a girl', pronunciation: 'meh goos-TAH-bahn lahs teh-leh-noh-BEH-lahs deh NEE-nyah', category: 'movies-tv', audio: 'me-gustaban-las-telenovelas' },

  // === Books & Theater (8) ===
  { spanish: 'El libro', english: 'The book', pronunciation: 'ehl LEE-broh', category: 'books-theater', audio: 'el-libro' },
  { spanish: 'La novela', english: 'The novel', pronunciation: 'lah noh-BEH-lah', category: 'books-theater', audio: 'la-novela' },
  { spanish: 'El cuento', english: 'The short story', pronunciation: 'ehl KWEHN-toh', category: 'books-theater', audio: 'el-cuento' },
  { spanish: 'La obra de teatro', english: 'The play (theater)', pronunciation: 'lah OH-brah deh teh-AH-troh', category: 'books-theater', audio: 'la-obra-de-teatro' },
  { spanish: 'El museo', english: 'The museum', pronunciation: 'ehl moo-SEH-oh', category: 'books-theater', audio: 'el-museo' },
  { spanish: 'La exposición de arte', english: 'The art exhibition', pronunciation: 'lah ehks-poh-see-see-OHN deh AHR-teh', category: 'books-theater', audio: 'la-exposicion-de-arte' },
  { spanish: 'Estoy leyendo una novela fantástica', english: 'I am reading a fantastic novel', pronunciation: 'ehs-TOY leh-YEHN-doh OO-nah noh-BEH-lah fahn-TAHS-tee-kah', category: 'books-theater', audio: 'estoy-leyendo-una-novela' },
  { spanish: 'Fuimos al teatro el sábado', english: 'We went to the theater on Saturday', pronunciation: 'FWEE-mohs ahl teh-AH-troh ehl SAH-bah-doh', category: 'books-theater', audio: 'fuimos-al-teatro-el-sabado' },

  // === Reviews & Opinions (10) ===
  { spanish: 'Es una obra maestra', english: 'It is a masterpiece', pronunciation: 'ehs OO-nah OH-brah mah-EHS-trah', category: 'reviews-opinions', audio: 'es-una-obra-maestra' },
  { spanish: 'La recomiendo mucho', english: 'I highly recommend it', pronunciation: 'lah reh-koh-mee-EHN-doh MOO-choh', category: 'reviews-opinions', audio: 'la-recomiendo-mucho' },
  { spanish: 'No me gustó para nada', english: 'I did not like it at all', pronunciation: 'noh meh goos-TOH PAH-rah NAH-dah', category: 'reviews-opinions', audio: 'no-me-gusto-para-nada' },
  { spanish: 'La trama es muy interesante', english: 'The plot is very interesting', pronunciation: 'lah TRAH-mah ehs mooy een-teh-reh-SAHN-teh', category: 'reviews-opinions', audio: 'la-trama-es-muy-interesante' },
  { spanish: 'Me pareció aburrida', english: 'It seemed boring to me', pronunciation: 'meh pah-reh-see-OH ah-boo-RREE-dah', category: 'reviews-opinions', audio: 'me-parecio-aburrida' },
  { spanish: 'Tiene un ritmo increíble', english: 'It has an incredible rhythm', pronunciation: 'tee-EH-neh oon RREET-moh een-kreh-EE-bleh', category: 'reviews-opinions', audio: 'tiene-un-ritmo-increible' },
  { spanish: '¿Qué opinas de esta película?', english: 'What do you think of this movie?', pronunciation: 'keh oh-PEE-nahs deh EHS-tah peh-LEE-koo-lah', category: 'reviews-opinions', audio: 'que-opinas-de-esta-pelicula' },
  { spanish: 'A mí me encantó, pero a ti no', english: 'I loved it, but you did not', pronunciation: 'ah mee meh ehn-kahn-TOH PEH-roh ah tee noh', category: 'reviews-opinions', audio: 'a-mi-me-encanto-pero-a-ti-no' },
  { spanish: 'Es la mejor película del año', english: 'It is the best movie of the year', pronunciation: 'ehs lah meh-HOHR peh-LEE-koo-lah dehl AH-nyoh', category: 'reviews-opinions', audio: 'es-la-mejor-pelicula-del-ano' },
  { spanish: 'Le doy cinco estrellas', english: 'I give it five stars', pronunciation: 'leh doy SEEN-koh ehs-TREH-yahs', category: 'reviews-opinions', audio: 'le-doy-cinco-estrellas' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L47PhraseByAudio = phraseByAudio

// === CRITIC CORNER (unique activity) ===

export interface CriticChallenge {
  review: string
  english: string
  correctGenre: string
  options: string[]
}

export const CRITIC_CHALLENGES: CriticChallenge[] = [
  {
    review: 'Tiene mucha acción, efectos especiales y el héroe salva al mundo al final.',
    english: 'It has a lot of action, special effects, and the hero saves the world at the end.',
    correctGenre: 'Película de acción',
    options: ['Película de acción', 'Documental', 'Comedia romántica', 'Obra de teatro'],
  },
  {
    review: 'Me hizo llorar. Es la historia de dos personas que se enamoran en Buenos Aires pero la vida los separa.',
    english: 'It made me cry. It is the story of two people who fall in love in Buenos Aires but life separates them.',
    correctGenre: 'Drama romántico',
    options: ['Película de terror', 'Drama romántico', 'Comedia', 'Concierto de rock'],
  },
  {
    review: 'El ritmo es contagioso. Mezcla tambores africanos con guitarra y tiene un coro que no puedes dejar de cantar.',
    english: 'The rhythm is contagious. It mixes African drums with guitar and has a chorus you cannot stop singing.',
    correctGenre: 'Canción de salsa',
    options: ['Novela policíaca', 'Canción de salsa', 'Documental de naturaleza', 'Ópera clásica'],
  },
  {
    review: 'El autor describe cien años de una familia en un pueblo mágico donde llueven flores y los muertos hablan.',
    english: 'The author describes a hundred years of a family in a magical town where flowers rain and the dead speak.',
    correctGenre: 'Novela de realismo mágico',
    options: ['Serie de televisión', 'Novela de realismo mágico', 'Película de ciencia ficción', 'Musical de Broadway'],
  },
  {
    review: 'Los actores estaban en el escenario. El público aplaudió de pie durante cinco minutos al final.',
    english: 'The actors were on stage. The audience gave a five-minute standing ovation at the end.',
    correctGenre: 'Obra de teatro',
    options: ['Concierto de reggaetón', 'Película animada', 'Obra de teatro', 'Podcast'],
  },
  {
    review: 'Muestra la vida real de los músicos de cumbia en Colombia. Tiene entrevistas y grabaciones originales de los años setenta.',
    english: 'It shows the real life of cumbia musicians in Colombia. It has interviews and original recordings from the seventies.',
    correctGenre: 'Documental musical',
    options: ['Telenovela', 'Comedia', 'Documental musical', 'Cuento infantil'],
  },
]

// === LESSON DATA ===

export const L47Data: LessonData = {
  id: 'L4.7',
  hero: {
    lessonId: 'L4.7',
    title: 'Arts & Entertainment',
    subtitle: 'Music, movies, books, and beyond',
    description: 'Learn to talk about your favorite music, movies, books, and art. Give reviews, share opinions, and explore the vibrant world of Latin American entertainment and culture.',
    image: '/images/L4.7/L4.7.jpg',
    gradient: 'from-purple-800/65 via-rose-700/55 to-amber-700/65',
    accentColor: 'purple-200',
  },

  objectives: [
    { icon: '🎵', title: 'Music Vocabulary', desc: 'Talk about songs, singers, bands, concerts, and genres like salsa, cumbia, and reggaeton.' },
    { icon: '🎬', title: 'Movies & TV', desc: 'Discuss films, series, documentaries. Describe plots, performances, and endings.' },
    { icon: '📚', title: 'Books, Theater & Art', desc: 'Talk about novels, plays, museums, and art exhibitions in Spanish.' },
    { icon: '⭐', title: 'Reviews & Opinions', desc: 'Give star ratings, recommend favorites, and debate what you liked or disliked.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L3.5', label: 'Hobbies & Free Time', detail: 'Hobby vocabulary from L3.5 (reading, music, movies) now gets richer entertainment context.' },
    { fromLesson: 'L4.4', label: 'Opinions & Preferences', detail: 'L4.4 opinion structures (me parece, creo que) are essential for giving reviews.' },
    { fromLesson: 'L4.1', label: 'Imperfect Tense', detail: 'L4.1 imperfect (escuchaba, veía) lets you describe past entertainment habits and childhood favorites.' },
  ],

  sectionTransitions: [
    { afterSection: 'music', text: 'You can talk about music! Now let\u2019s discuss movies and TV.' },
    { afterSection: 'movies-tv', text: 'Great film vocabulary! Let\u2019s explore books, theater, and art.' },
    { afterSection: 'books-theater', text: 'Now you can discuss all art forms! Time to learn how to give reviews.' },
    { afterSection: 'dialogues', text: 'Awesome entertainment conversations! Let\u2019s learn about Latin American culture.' },
    { afterSection: 'cultural', text: 'Now match reviews to their genres in the Critic Corner!' },
    { afterSection: 'critic-corner', text: 'Final stretch \u2014 quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Mi canción favorita es...', english: 'My favorite song is...' },
    { spanish: 'La última película que vi fue...', english: 'The last movie I saw was...' },
    { spanish: 'Me encanta leer...', english: 'I love reading...' },
    { spanish: 'Le doy... estrellas', english: 'I give it... stars' },
    { spanish: 'Te recomiendo...', english: 'I recommend you...' },
    { spanish: 'De niño/a me gustaba...', english: 'As a child I liked...' },
  ],

  pronunciationChallenges: [
    { spanish: '¿Qué música te gusta escuchar?', pronunciation: 'keh MOO-see-kah teh GOOS-tah ehs-koo-CHAHR', english: 'What music do you like to listen to?', audio: 'que-musica-te-gusta', tip: '"Música" has the stress on MÚ-. It\u2019s a proparoxytone (esdrújula) word. Always stress the accent mark!' },
    { spanish: 'La película fue increíble', pronunciation: 'lah peh-LEE-koo-lah fweh een-kreh-EE-bleh', english: 'The movie was incredible', audio: 'la-pelicula', tip: '"Película" is another esdrújula \u2014 stress on LÍ. In fast speech, don\u2019t skip the "u" sound: pe-LI-cu-la.' },
    { spanish: 'Fui a un concierto de salsa', pronunciation: 'fwee ah oon kohn-see-EHR-toh deh SAHL-sah', english: 'I went to a salsa concert', audio: 'fui-a-un-concierto-increible', tip: '"Concierto" \u2014 the "ci" sounds like "see" (not "ki"). And remember: "fui" from L3.1 preterite of ir!' },
    { spanish: 'Me pareció aburrida la obra', pronunciation: 'meh pah-reh-see-OH ah-boo-RREE-dah lah OH-brah', english: 'The play seemed boring to me', audio: 'me-parecio-aburrida', tip: '"Pareció" \u2014 stress the final Ó. "Aburrida" has a rolled RR. Don\u2019t confuse "aburrida" (boring) with "aburrido" (masculine).' },
    { spanish: 'La recomiendo, tiene buenas actuaciones', pronunciation: 'lah reh-koh-mee-EHN-doh tee-EH-neh BWEH-nahs ahk-twah-see-OH-nehs', english: 'I recommend it, it has good performances', audio: 'la-recomiendo-mucho', tip: '"Actuaciones" has 5 syllables: ac-tua-cio-nes. The "ua" is a quick diphthong. Practice saying it slowly first.' },
    { spanish: 'Es la mejor novela que he leído', pronunciation: 'ehs lah meh-HOHR noh-BEH-lah keh eh leh-EE-doh', english: 'It is the best novel I have read', audio: 'la-novela', tip: '"Mejor" \u2014 the J sounds like a strong English H. "Leído" has a written accent to break the diphthong: le-Í-do, not "lei-do."' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'music', label: 'Music' },
    { id: 'movies-tv', label: 'Movies & TV' },
    { id: 'books-theater', label: 'Books & Theater' },
    { id: 'reviews-opinions', label: 'Reviews & Opinions' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Genre Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'critic-corner', label: 'Critic Corner' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'music',
      title: 'Music',
      description: 'Songs, singers, concerts, and genres. Music is central to Latin American life!',
      tabs: [
        { label: 'Basics', color: 'purple', phrases: PHRASES.filter(p => p.category === 'music').slice(0, 5) },
        { label: 'Talking About Music', color: 'rose', phrases: PHRASES.filter(p => p.category === 'music').slice(5) },
      ],
    },
    {
      id: 'movies-tv',
      title: 'Movies & TV',
      description: 'Films, series, genres, and how to describe what you watched.',
      tabs: [
        { label: 'Genres', color: 'amber', phrases: PHRASES.filter(p => p.category === 'movies-tv').slice(0, 5) },
        { label: 'Discussing Films', color: 'blue', phrases: PHRASES.filter(p => p.category === 'movies-tv').slice(5) },
      ],
    },
    {
      id: 'books-theater',
      title: 'Books, Theater & Art',
      description: 'Novels, plays, museums \u2014 the literary and visual arts in Spanish.',
      tabs: [
        { label: 'Literature', color: 'teal', phrases: PHRASES.filter(p => p.category === 'books-theater').slice(0, 4) },
        { label: 'Arts & Culture', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'books-theater').slice(4) },
      ],
    },
    {
      id: 'reviews-opinions',
      title: 'Reviews & Opinions',
      description: 'Rate, recommend, and debate \u2014 express what you think about entertainment.',
      tabs: [
        { label: 'Positive Reviews', color: 'orange', phrases: PHRASES.filter(p => p.category === 'reviews-opinions').slice(0, 5) },
        { label: 'More Opinions', color: 'purple', phrases: PHRASES.filter(p => p.category === 'reviews-opinions').slice(5) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Esdrújulas \u2014 Words Stressed on the Third-to-Last Syllable',
      content: 'Many entertainment words are "esdrújulas" (stressed on the antepenultimate syllable): MÚsica, PElícula, CLÁsico, FANtástico. These ALWAYS have a written accent mark. If you see the accent, stress that syllable hard!',
      example: 'MÚ-si-ca | pe-LÍ-cu-la | CLÁ-si-co | fan-TÁS-ti-co',
    },
    {
      title: 'Genres and Borrowed Words',
      content: 'Many genre words come from other languages but are pronounced in Spanish: "rock" keeps its English sound, but "jazz" becomes "yas." "Reggaetón" adds Spanish stress on the final syllable. "Ballet" is pronounced "bah-LEH" (French-Spanish hybrid).',
      example: 'Rock (same) | Jazz → "yas" | Reggaetón (reh-geh-tohn) | Ballet (bah-LEH)',
    },
    {
      title: 'Parecer \u2014 For Giving Opinions',
      content: '"Me pareció" (it seemed to me) is your go-to for reviews. It works like "gustar": the thing is the subject. "Me pareció buena" (it seemed good TO ME). "Nos pareció aburrida" (it seemed boring TO US). Use past tense from L3.1!',
      example: 'Me pareció genial | Le pareció mala | Nos pareció interesante',
      reviewFrom: 'L4.4',
    },
    {
      title: 'Double RR in Entertainment Words',
      content: 'Watch for the rolled RR in key words: "aburrido/a" (boring), "guitarra" (guitar), "corrido" (Mexican ballad). A single R in "pero" (but) vs. double RR in "perro" (dog) changes meaning completely. Practice the tongue trill!',
      example: 'Aburrido (rolled RR) | Guitarra (rolled RR) | Corrido (rolled RR)',
    },
  ],

  flashcardGroups: [
    {
      key: 'music',
      label: 'Music',
      audioKeys: ['la-cancion', 'el-cantante', 'la-banda', 'el-concierto', 'la-letra-de-la-cancion', 'que-musica-te-gusta', 'me-encanta-el-reggaeton', 'escucho-salsa-cuando-cocino', 'de-nino-escuchaba-cumbia', 'fui-a-un-concierto-increible'],
    },
    {
      key: 'movies-tv',
      label: 'Movies & TV',
      audioKeys: ['la-pelicula', 'la-serie', 'el-documental', 'la-comedia', 'el-drama', 'la-pelicula-de-terror', 'viste-la-nueva-serie', 'tiene-buenas-actuaciones', 'el-final-me-sorprendio', 'me-gustaban-las-telenovelas'],
    },
    {
      key: 'books-reviews',
      label: 'Books & Reviews',
      audioKeys: ['el-libro', 'la-novela', 'la-obra-de-teatro', 'el-museo', 'es-una-obra-maestra', 'la-recomiendo-mucho', 'no-me-gusto-para-nada', 'la-trama-es-muy-interesante', 'es-la-mejor-pelicula-del-ano', 'le-doy-cinco-estrellas'],
    },
  ],

  matchPairs: [
    { left: 'La canción', right: 'The song' },
    { left: 'La película', right: 'The movie' },
    { left: 'El cuento', right: 'The short story' },
    { left: 'La obra de teatro', right: 'The play' },
    { left: 'La recomiendo', right: 'I recommend it' },
    { left: 'El concierto', right: 'The concert' },
    { left: 'La trama', right: 'The plot' },
    { left: 'Aburrida', right: 'Boring' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Music vs. Film vs. Literature',
      instruction: 'Which category does this word belong to?',
      buckets: ['Music 🎵', 'Film 🎬', 'Literature 📚'],
      items: [
        { text: 'La canción', bucket: 'Music 🎵' },
        { text: 'El cantante', bucket: 'Music 🎵' },
        { text: 'El concierto', bucket: 'Music 🎵' },
        { text: 'La película', bucket: 'Film 🎬' },
        { text: 'La serie', bucket: 'Film 🎬' },
        { text: 'El documental', bucket: 'Film 🎬' },
        { text: 'La novela', bucket: 'Literature 📚' },
        { text: 'El cuento', bucket: 'Literature 📚' },
      ],
    },
    {
      title: 'Positive vs. Negative Reviews',
      instruction: 'Is this a positive or negative opinion?',
      buckets: ['Positive ⭐', 'Negative 👎'],
      items: [
        { text: 'Es una obra maestra', bucket: 'Positive ⭐' },
        { text: 'La recomiendo mucho', bucket: 'Positive ⭐' },
        { text: 'Tiene un ritmo increíble', bucket: 'Positive ⭐' },
        { text: 'Le doy cinco estrellas', bucket: 'Positive ⭐' },
        { text: 'No me gustó para nada', bucket: 'Negative 👎' },
        { text: 'Me pareció aburrida', bucket: 'Negative 👎' },
        { text: 'La trama es predecible', bucket: 'Negative 👎' },
        { text: 'No la recomiendo', bucket: 'Negative 👎' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Genre Sorting',

  dialogues: [
    {
      id: 'dialogue-music-rec',
      title: 'Recommending Music \u2014 Medellín',
      location: 'Medellín',
      lines: [
        { speaker: 'Camila', text: '¿Has escuchado la nueva canción de Karol G?', audio: '/audio/L4.7/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: 'No todavía. ¿De qué género es?', audio: '/audio/L4.7/phrases/d1-line2.mp3' },
        { speaker: 'Camila', text: 'Es reggaetón pero con un poco de pop. La letra es muy bonita.', audio: '/audio/L4.7/phrases/d1-line3.mp3', annotations: [{ phrase: 'La letra', fromLesson: 'L3.5', note: 'Hobbies vocabulary from L3.5' }] },
        { speaker: 'Diego', text: 'A mí me gusta más el rock en español. De niño escuchaba mucho Soda Stereo.', audio: '/audio/L4.7/phrases/d1-line4.mp3', annotations: [{ phrase: 'De niño escuchaba', fromLesson: 'L4.1', note: 'Imperfect tense from L4.1 for past habits' }] },
        { speaker: 'Camila', text: '¡Soda Stereo es clásico! Pero tienes que escuchar esta canción. Tiene un ritmo increíble.', audio: '/audio/L4.7/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: 'Bueno, la voy a escuchar esta noche. ¿La encontré en Spotify?', audio: '/audio/L4.7/phrases/d1-line6.mp3' },
        { speaker: 'Camila', text: 'Sí, y también hay un video en YouTube. Fui a su concierto el mes pasado. ¡Fue increíble!', audio: '/audio/L4.7/phrases/d1-line7.mp3' },
        { speaker: 'Diego', text: '¿En serio? Yo quiero ir al próximo concierto. ¿Cuánto costaron las entradas?', audio: '/audio/L4.7/phrases/d1-line8.mp3' },
        { speaker: 'Camila', text: 'Costaron ciento cincuenta mil pesos, pero valió la pena. Te la recomiendo mucho.', audio: '/audio/L4.7/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-movie-debate',
      title: 'Debating a Movie \u2014 Ciudad de México',
      location: 'Ciudad de México',
      lines: [
        { speaker: 'Andrés', text: '¿Viste la película nueva de Guillermo del Toro?', audio: '/audio/L4.7/phrases/d2-line1.mp3' },
        { speaker: 'Lucía', text: 'Sí, la vi el fin de semana. A mí me encantó. Las actuaciones son increíbles.', audio: '/audio/L4.7/phrases/d2-line2.mp3', annotations: [{ phrase: 'A mí me encantó', fromLesson: 'L4.4', note: 'Opinion structures from L4.4' }] },
        { speaker: 'Andrés', text: 'A mí no me gustó mucho. Me pareció muy lenta. La trama no avanza.', audio: '/audio/L4.7/phrases/d2-line3.mp3' },
        { speaker: 'Lucía', text: '¿Lenta? ¡Pero es un drama! No todo tiene que ser acción. El final me sorprendió.', audio: '/audio/L4.7/phrases/d2-line4.mp3' },
        { speaker: 'Andrés', text: 'Bueno, la fotografía es hermosa. Eso sí lo reconozco. Pero yo le doy dos estrellas.', audio: '/audio/L4.7/phrases/d2-line5.mp3' },
        { speaker: 'Lucía', text: '¿Dos estrellas? ¡Yo le doy cinco! Es la mejor película del año, sin duda.', audio: '/audio/L4.7/phrases/d2-line6.mp3' },
        { speaker: 'Andrés', text: 'Prefiero la comedia que vimos la semana pasada. Me hizo reír mucho.', audio: '/audio/L4.7/phrases/d2-line7.mp3' },
        { speaker: 'Lucía', text: 'Esa también estuvo buena. ¿Y si la próxima vez vemos un documental?', audio: '/audio/L4.7/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Recommend music in Medellín and debate a new movie in Mexico City.',

  culturalNotes: [
    {
      title: 'Latin Music \u2014 A Global Phenomenon',
      content: 'Latin American music dominates global charts. Reggaetón (from Puerto Rico/Panama), salsa (Cuba/Puerto Rico/Colombia), cumbia (Colombia), bachata (Dominican Republic), and corridos tumbados (Mexico) are just a few genres. Artists like Bad Bunny, Shakira, and Karol G have made Spanish-language music a worldwide force. In Latin America, music is not just entertainment \u2014 it\u2019s identity, celebration, and community.',
    },
    {
      title: 'Telenovelas \u2014 More Than Just Soap Operas',
      content: 'Telenovelas are a cultural institution across Latin America. Unlike American soap operas, they have a defined beginning, middle, and end (usually 120\u2013200 episodes). Classics like "Betty la Fea" (Colombia), "Rebelde" (Mexico), and "Pasión de Gavilanes" (Colombia) have been adapted worldwide. Watching telenovelas is an excellent way to practice Spanish \u2014 the dialogue is dramatic, clear, and full of everyday expressions!',
    },
    {
      title: 'Latin American Literature \u2014 Magical Realism and Beyond',
      content: 'Latin America has produced some of the world\u2019s greatest literature. Gabriel García Márquez (Colombia) popularized "realismo mágico" with "Cien Años de Soledad." Pablo Neruda (Chile) won the Nobel Prize for poetry. Isabel Allende (Chile), Jorge Luis Borges (Argentina), and Octavio Paz (Mexico) are literary giants. The "Boom Latinoamericano" of the 1960s-70s transformed world literature forever.',
    },
  ],
  culturalGradient: 'from-purple-50 to-rose-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La canción" means:', options: ['The concert', 'The song', 'The singer', 'The band'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "¿Qué música te ___?" (do you like)', answer: 'gusta' },
    { id: 3, type: 'mc', text: '"La película de terror" is:', options: ['A comedy', 'A drama', 'A horror movie', 'A documentary'], answer: 2 },
    { id: 4, type: 'tf', text: '"Me pareció aburrida" means "It seemed boring to me."', answer: true },
    { id: 5, type: 'mc', text: 'In Dialogue 1, what genre does Camila recommend?', options: ['Rock', 'Classical', 'Reggaetón with pop', 'Jazz'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "La ___ mucho" (I recommend it)', answer: 'recomiendo' },
    { id: 7, type: 'mc', text: '"La obra de teatro" means:', options: ['The movie theater', 'The play (theater)', 'The TV show', 'The concert hall'], answer: 1 },
    { id: 8, type: 'tf', text: 'Telenovelas typically run indefinitely like American soap operas.', answer: false },
    { id: 9, type: 'mc', text: '"Le doy cinco estrellas" means:', options: ['I give it five minutes', 'I give it five stars', 'I give it five chances', 'I give it five tickets'], answer: 1 },
    { id: 10, type: 'fill', text: 'Complete: "Es una obra ___" (masterpiece)', answer: 'maestra' },
    { id: 11, type: 'mc', text: 'In Dialogue 2, how many stars does Andrés give the movie?', options: ['One', 'Two', 'Three', 'Five'], answer: 1 },
    { id: 12, type: 'tf', text: 'Gabriel García Márquez is famous for "realismo mágico."', answer: true },
    { id: 13, type: 'mc', text: '"El documental" means:', options: ['The document', 'The documentary', 'The drama', 'The novel'], answer: 1 },
    { id: 14, type: 'fill', text: 'Complete: "El final me ___" (surprised me)', answer: 'sorprendió' },
    { id: 15, type: 'mc', text: 'Which is NOT a Latin American music genre?', options: ['Cumbia', 'Bachata', 'Reggaetón', 'K-pop'], answer: 3 },
  ],

  audioBase: '/audio/L4.7/phrases',

  uniqueActivity: {
    id: 'CriticCornerL47',
    sectionId: 'critic-corner',
    sectionColor: 'bg-purple-50/40',
    sectionBorder: 'border-purple-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'music': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'movies-tv': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'books-theater': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'reviews-opinions': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    dialogues: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    cultural: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'critic-corner': { bg: 'bg-purple-50/40', border: 'border-purple-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
