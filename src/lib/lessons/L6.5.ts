import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === False Friends (12) ===
  { spanish: 'Estoy embarazada, voy a tener un bebé', english: 'I\'m pregnant, I\'m going to have a baby (NOT embarrassed)', pronunciation: 'ehs-TOY ehm-bah-rah-SAH-dah boy ah teh-NEHR oon beh-BEH', category: 'false-friends', audio: 'embarazada-bebe' },
  { spanish: 'El problema actual es la inflación', english: 'The current problem is inflation (NOT actual/real)', pronunciation: 'ehl proh-BLEH-mah ahk-too-AHL ehs lah een-flah-see-OHN', category: 'false-friends', audio: 'problema-actual' },
  { spanish: 'Su éxito profesional fue enorme', english: 'His professional success was enormous (NOT exit)', pronunciation: 'soo EHK-see-toh proh-feh-see-oh-NAHL fweh eh-NOHR-meh', category: 'false-friends', audio: 'exito-profesional' },
  { spanish: 'Es una persona muy sensible', english: 'She is a very sensitive person (NOT sensible/reasonable)', pronunciation: 'ehs OO-nah pehr-SOH-nah mooy sehn-SEE-bleh', category: 'false-friends', audio: 'persona-sensible' },
  { spanish: 'Necesito realizar este proyecto', english: 'I need to carry out this project (NOT realize/understand)', pronunciation: 'neh-seh-SEE-toh reh-ah-lee-SAHR EHS-teh proh-YEHK-toh', category: 'false-friends', audio: 'realizar-proyecto' },
  { spanish: 'Voy a la librería a comprar un libro', english: 'I\'m going to the bookstore to buy a book (NOT library)', pronunciation: 'boy ah lah lee-breh-REE-ah ah kohm-PRAHR oon LEE-broh', category: 'false-friends', audio: 'libreria-comprar' },
  { spanish: 'Estoy constipado, tengo mucha congestión', english: 'I have a cold, I have a lot of congestion (NOT constipated)', pronunciation: 'ehs-TOY kohns-tee-PAH-doh TEHN-goh MOO-chah kohn-hehs-tee-OHN', category: 'false-friends', audio: 'constipado-congestion' },
  { spanish: 'No me molestes, estoy trabajando', english: 'Don\'t bother me, I\'m working (NOT molest)', pronunciation: 'noh meh moh-LEHS-tehs ehs-TOY trah-bah-HAHN-doh', category: 'false-friends', audio: 'no-me-molestes' },
  { spanish: 'No puedo soportar el calor', english: 'I can\'t stand/bear the heat (NOT support)', pronunciation: 'noh PWEH-doh soh-pohr-TAHR ehl kah-LOHR', category: 'false-friends', audio: 'soportar-calor' },
  { spanish: 'Pretendo terminar antes de las cinco', english: 'I intend to finish before five (NOT pretend)', pronunciation: 'preh-TEHN-doh tehr-mee-NAHR AHN-tehs deh lahs SEEN-koh', category: 'false-friends', audio: 'pretendo-terminar' },
  { spanish: 'Dejé la carpeta sobre el escritorio', english: 'I left the folder on the desk (NOT carpet)', pronunciation: 'deh-HEH lah kahr-PEH-tah SOH-breh ehl ehs-kree-TOH-ree-oh', category: 'false-friends', audio: 'carpeta-escritorio' },
  { spanish: 'El conductor del autobús es muy amable', english: 'The bus driver is very kind (NOT orchestra conductor)', pronunciation: 'ehl kohn-dook-TOHR dehl ow-toh-BOOS ehs mooy ah-MAH-bleh', category: 'false-friends', audio: 'conductor-autobus' },

  // === Untranslatable Words (12) ===
  { spanish: 'La sobremesa duró tres horas con café y risas', english: 'The after-meal conversation lasted three hours with coffee and laughter (no English equivalent)', pronunciation: 'lah soh-breh-MEH-sah doo-ROH trehs OH-rahs kohn kah-FEH ee RREE-sahs', category: 'untranslatable', audio: 'sobremesa-tres-horas' },
  { spanish: 'Salimos a las tres de la madrugada', english: 'We left at three in the early morning hours (between midnight and dawn)', pronunciation: 'sah-LEE-mohs ah lahs trehs deh lah mah-droo-GAH-dah', category: 'untranslatable', audio: 'tres-de-la-madrugada' },
  { spanish: 'Voy a estrenar mis zapatos nuevos', english: 'I\'m going to wear/use my new shoes for the first time', pronunciation: 'boy ah ehs-treh-NAHR mees sah-PAH-tohs NWEH-bohs', category: 'untranslatable', audio: 'estrenar-zapatos' },
  { spanish: 'Hay que aprovechar esta oportunidad', english: 'We must make the most of this opportunity (seize/take advantage fully)', pronunciation: 'eye keh ah-proh-beh-CHAHR EHS-tah oh-pohr-too-nee-DAHD', category: 'untranslatable', audio: 'aprovechar-oportunidad' },
  { spanish: '¿Puedo tutearte o prefieres que te hable de usted?', english: 'Can I address you informally (tú) or do you prefer formal (usted)?', pronunciation: 'PWEH-doh too-teh-AHR-teh oh preh-fee-EH-rehs keh teh AH-bleh deh oos-TEHD', category: 'untranslatable', audio: 'puedo-tutearte' },
  { spanish: 'Me desvelé estudiando para el examen', english: 'I stayed up all night studying for the exam (couldn\'t/didn\'t sleep)', pronunciation: 'meh dehs-beh-LEH ehs-too-dee-AHN-doh PAH-rah ehl ehk-SAH-mehn', category: 'untranslatable', audio: 'desvele-estudiando' },
  { spanish: 'Este pastel empalaga, es demasiado dulce', english: 'This cake is sickeningly/cloyingly sweet, it\'s too sweet', pronunciation: 'EHS-teh pahs-TEHL ehm-pah-LAH-gah ehs deh-mah-see-AH-doh DOOL-seh', category: 'untranslatable', audio: 'pastel-empalaga' },
  { spanish: 'Mi consuegra viene a cenar esta noche', english: 'My child\'s mother-in-law is coming to dinner tonight (no English word)', pronunciation: 'mee kohn-SWEH-grah bee-EH-neh ah seh-NAHR EHS-tah NOH-cheh', category: 'untranslatable', audio: 'consuegra-cenar' },
  { spanish: 'Anteayer fuimos al cine juntos', english: 'The day before yesterday we went to the movies together', pronunciation: 'ahn-teh-ah-YEHR FWEE-mohs ahl SEE-neh HOON-tohs', category: 'untranslatable', audio: 'anteayer-cine' },
  { spanish: '¡Eres mi tocayo! También te llamas Carlos', english: 'You\'re my namesake! Your name is also Carlos (person with the same name)', pronunciation: 'EH-rehs mee toh-KAH-yoh tahm-bee-EHN teh YAH-mahs KAHR-lohs', category: 'untranslatable', audio: 'tocayo-carlos' },
  { spanish: 'Soy muy friolento, siempre tengo frío', english: 'I\'m very cold-natured, I\'m always cold (person who easily gets cold)', pronunciation: 'soy mooy free-oh-LEHN-toh see-EHM-preh TEHN-goh FREE-oh', category: 'untranslatable', audio: 'friolento-frio' },
  { spanish: 'Siento pena ajena cuando alguien canta mal en público', english: 'I feel secondhand embarrassment when someone sings badly in public', pronunciation: 'see-EHN-toh PEH-nah ah-HEH-nah KWAHN-doh AHL-gee-ehn KAHN-tah mahl ehn POO-blee-koh', category: 'untranslatable', audio: 'pena-ajena' },

  // === Context-Dependent Translations (12) ===
  { spanish: 'Ya voy — estoy saliendo ahora mismo', english: '"Ya" = now/already/coming — I\'m leaving right now', pronunciation: 'yah boy ehs-TOY sah-lee-EHN-doh ah-OH-rah MEES-moh', category: 'context-translation', audio: 'ya-voy' },
  { spanish: 'Ya no quiero más, gracias', english: '"Ya" = no longer — I don\'t want any more, thanks', pronunciation: 'yah noh kee-EH-roh mahs GRAH-see-ahs', category: 'context-translation', audio: 'ya-no-quiero' },
  { spanish: 'Este vestido te queda perfecto', english: '"Quedar" = to fit — This dress fits you perfectly', pronunciation: 'EHS-teh behs-TEE-doh teh KEH-dah pehr-FEHK-toh', category: 'context-translation', audio: 'vestido-queda' },
  { spanish: 'Quedamos en el café a las tres', english: '"Quedar" = to meet/arrange — We\'re meeting at the café at three', pronunciation: 'keh-DAH-mohs ehn ehl kah-FEH ah lahs trehs', category: 'context-translation', audio: 'quedamos-cafe' },
  { spanish: 'Se puso rojo de vergüenza', english: '"Ponerse" = to become — He turned red with embarrassment', pronunciation: 'seh POO-soh RROH-hoh deh behr-GWEHN-sah', category: 'context-translation', audio: 'se-puso-rojo' },
  { spanish: 'Pon la mesa para la cena', english: '"Poner" = to set — Set the table for dinner', pronunciation: 'pohn lah MEH-sah PAH-rah lah SEH-nah', category: 'context-translation', audio: 'pon-la-mesa' },
  { spanish: 'Te echo de menos todos los días', english: '"Echar de menos" = to miss — I miss you every day', pronunciation: 'teh EH-choh deh MEH-nohs TOH-dohs lohs DEE-ahs', category: 'context-translation', audio: 'echo-de-menos' },
  { spanish: 'Échale más sal a la sopa', english: '"Echar" = to pour/add — Add more salt to the soup', pronunciation: 'EH-chah-leh mahs sahl ah lah SOH-pah', category: 'context-translation', audio: 'echale-sal' },
  { spanish: 'La ventana da al jardín', english: '"Dar a" = to face/overlook — The window faces the garden', pronunciation: 'lah behn-TAH-nah dah ahl hahr-DEEN', category: 'context-translation', audio: 'ventana-da-jardin' },
  { spanish: 'Me da igual, tú decides', english: '"Dar igual" = to not matter — I don\'t mind, you decide', pronunciation: 'meh dah ee-GWAHL too deh-SEE-dehs', category: 'context-translation', audio: 'me-da-igual' },
  { spanish: 'Llevo tres años viviendo aquí', english: '"Llevar" = to have been doing — I\'ve been living here for three years', pronunciation: 'YEH-boh trehs AH-nyohs bee-bee-EHN-doh ah-KEE', category: 'context-translation', audio: 'llevo-tres-anos' },
  { spanish: 'Siempre lleva ropa elegante', english: '"Llevar" = to wear — She always wears elegant clothes', pronunciation: 'see-EHM-preh YEH-bah RROH-pah eh-leh-GAHN-teh', category: 'context-translation', audio: 'lleva-ropa-elegante' },

  // === Register & Cultural Translation (12) ===
  { spanish: '¿Me podría indicar dónde se encuentra la estación?', english: 'Formal: Could you tell me where the station is located?', pronunciation: 'meh poh-DREE-ah een-dee-KAHR DOHN-deh seh ehn-KWEHN-trah lah ehs-tah-see-OHN', category: 'register-translation', audio: 'formal-donde-estacion' },
  { spanish: '¿Sabes dónde queda la estación?', english: 'Informal: Do you know where the station is?', pronunciation: 'SAH-behs DOHN-deh KEH-dah lah ehs-tah-see-OHN', category: 'register-translation', audio: 'informal-donde-estacion' },
  { spanish: 'Le ruego disculpe las molestias ocasionadas', english: 'Formal: I beg you to excuse the inconvenience caused', pronunciation: 'leh RRWEH-goh dees-KOOL-peh lahs moh-LEHS-tee-ahs oh-kah-see-oh-NAH-dahs', category: 'register-translation', audio: 'formal-disculpe' },
  { spanish: 'Perdona, fue sin querer', english: 'Informal: Sorry, it was unintentional', pronunciation: 'pehr-DOH-nah fweh seen keh-REHR', category: 'register-translation', audio: 'informal-perdona' },
  { spanish: 'Estimado señor, me dirijo a usted para solicitar...', english: 'Formal letter: Dear sir, I am writing to you to request...', pronunciation: 'ehs-tee-MAH-doh seh-NYOHR meh dee-REE-hoh ah oos-TEHD PAH-rah soh-lee-see-TAHR', category: 'register-translation', audio: 'formal-carta' },
  { spanish: '¡Oye, necesito pedirte un favor!', english: 'Informal: Hey, I need to ask you a favor!', pronunciation: 'OH-yeh neh-seh-SEE-toh peh-DEER-teh oon fah-BOHR', category: 'register-translation', audio: 'informal-favor' },
  { spanish: 'Lamento comunicarle que su solicitud ha sido denegada', english: 'Formal: I regret to inform you that your application has been denied', pronunciation: 'lah-MEHN-toh koh-moo-nee-KAHR-leh keh soo soh-lee-see-TOOD ah SEE-doh deh-neh-GAH-dah', category: 'register-translation', audio: 'formal-lamento' },
  { spanish: 'Lo siento, no se pudo, hermano', english: 'Informal: Sorry, it didn\'t work out, bro', pronunciation: 'loh see-EHN-toh noh seh POO-doh ehr-MAH-noh', category: 'register-translation', audio: 'informal-lo-siento' },
  { spanish: 'Quedo a su entera disposición para cualquier consulta', english: 'Formal: I remain at your complete disposal for any inquiry', pronunciation: 'KEH-doh ah soo ehn-TEH-rah dees-poh-see-see-OHN PAH-rah kwahl-kee-EHR kohn-SOOL-tah', category: 'register-translation', audio: 'formal-disposicion' },
  { spanish: 'Cualquier cosa, me dices', english: 'Informal: Anything, just let me know', pronunciation: 'kwahl-kee-EHR KOH-sah meh DEE-sehs', category: 'register-translation', audio: 'informal-me-dices' },
  { spanish: 'Sería tan amable de facilitarme esa información', english: 'Formal: Would you be so kind as to provide me that information', pronunciation: 'seh-REE-ah tahn ah-MAH-bleh deh fah-see-lee-TAHR-meh EH-sah een-fohr-mah-see-OHN', category: 'register-translation', audio: 'formal-tan-amable' },
  { spanish: '¿Me pasas eso? Porfa', english: 'Informal: Can you pass me that? Please (shortened)', pronunciation: 'meh PAH-sahs EH-soh POHR-fah', category: 'register-translation', audio: 'informal-porfa' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L65PhraseByAudio = phraseByAudio

// === TRANSLATOR BOOTH CHALLENGE (unique activity) ===

export interface TranslatorBoothChallenge {
  sourceText: string
  context: string
  english: string
  correctTranslation: string
  options: string[]
}

export const TRANSLATOR_BOOTH_CHALLENGES: TranslatorBoothChallenge[] = [
  {
    sourceText: 'She was embarrassed about her mistake at work.',
    context: 'A coworker made an error during a presentation and feels self-conscious.',
    english: 'She was embarrassed about her mistake at work.',
    correctTranslation: 'Estaba avergonzada por su error en el trabajo.',
    options: ['Estaba embarazada por su error en el trabajo.', 'Estaba avergonzada por su error en el trabajo.', 'Estaba molesta por su error en el trabajo.', 'Estaba constipada por su error en el trabajo.'],
  },
  {
    sourceText: 'We enjoyed a long sobremesa after Sunday lunch.',
    context: 'A family in Spain finishes eating but stays at the table talking for hours.',
    english: 'We enjoyed a long after-meal conversation after Sunday lunch.',
    correctTranslation: 'Disfrutamos de una larga sobremesa después del almuerzo del domingo.',
    options: ['Disfrutamos de una larga conversación después del almuerzo del domingo.', 'Disfrutamos de una larga sobremesa después del almuerzo del domingo.', 'Disfrutamos de un largo postre después del almuerzo del domingo.', 'Disfrutamos de una larga siesta después del almuerzo del domingo.'],
  },
  {
    sourceText: 'I\'ve been living in Madrid for five years.',
    context: 'Someone describes their ongoing residence in Spain — the action started in the past and continues now.',
    english: 'I\'ve been living in Madrid for five years.',
    correctTranslation: 'Llevo cinco años viviendo en Madrid.',
    options: ['He vivido en Madrid por cinco años.', 'Viví en Madrid cinco años.', 'Llevo cinco años viviendo en Madrid.', 'Estoy viviendo en Madrid cinco años.'],
  },
  {
    sourceText: 'The hotel room overlooks the beach.',
    context: 'Describing the view from a vacation hotel room.',
    english: 'The hotel room overlooks the beach.',
    correctTranslation: 'La habitación del hotel da a la playa.',
    options: ['La habitación del hotel mira a la playa.', 'La habitación del hotel ve la playa.', 'La habitación del hotel da a la playa.', 'La habitación del hotel sale a la playa.'],
  },
  {
    sourceText: 'I intend to finish my degree this year.',
    context: 'A university student talking about academic plans — expressing intention, not pretending.',
    english: 'I intend to finish my degree this year.',
    correctTranslation: 'Pretendo terminar mi carrera este año.',
    options: ['Finjo terminar mi carrera este año.', 'Pretendo terminar mi carrera este año.', 'Planeo terminar mi carrera este año.', 'Realizo terminar mi carrera este año.'],
  },
  {
    sourceText: 'Could you please tell me where the nearest library is?',
    context: 'A tourist politely asking for directions to a public lending library — formal register.',
    english: 'Could you please tell me where the nearest library is?',
    correctTranslation: '¿Podría indicarme dónde se encuentra la biblioteca más cercana?',
    options: ['¿Podría indicarme dónde se encuentra la librería más cercana?', '¿Podría indicarme dónde se encuentra la biblioteca más cercana?', '¿Sabes dónde queda la librería más cercana?', '¿Sabes dónde está la biblioteca más cercana?'],
  },
  {
    sourceText: 'I miss my grandmother\'s cooking so much.',
    context: 'Someone living abroad, feeling nostalgic about home — emotional, personal register.',
    english: 'I miss my grandmother\'s cooking so much.',
    correctTranslation: 'Echo mucho de menos la comida de mi abuela.',
    options: ['Extraño mucho la comida de mi abuela.', 'Pierdo mucho la comida de mi abuela.', 'Echo mucho de menos la comida de mi abuela.', 'Falto mucho la comida de mi abuela.'],
  },
]

// === LESSON DATA ===

export const L65Data: LessonData = {
  id: 'L6.5',
  hero: {
    lessonId: 'L6.5',
    title: 'Translation & Interpretation',
    subtitle: 'Bridging languages, cultures, and meanings',
    description: 'Explore false friends that trick even advanced learners, discover untranslatable Spanish gems like sobremesa and madrugada, master context-dependent verbs like quedar and llevar, and learn how register shapes translation. This is the art of conveying meaning — not just words — across languages.',
    image: '/images/L6.5/L6.5.jpg',
    gradient: 'from-sky-800/65 via-cyan-700/55 to-teal-700/65',
    accentColor: 'sky-200',
  },

  objectives: [
    { icon: '🚫', title: 'False Friends', desc: 'Identify and avoid the 12 most dangerous false cognates: embarazada ≠ embarrassed, actual ≠ actual, éxito ≠ exit, and more.' },
    { icon: '💎', title: 'Untranslatable Words', desc: 'Master uniquely Spanish concepts — sobremesa, madrugada, estrenar, tutear — that have no single English equivalent.' },
    { icon: '🔄', title: 'Context-Dependent Translation', desc: 'Navigate polysemous verbs like quedar, poner, echar, dar, llevar — where context determines meaning entirely.' },
    { icon: '🎭', title: 'Register-Aware Translation', desc: 'Translate the same idea formally vs. informally, understanding how tone, culture, and audience shape word choice.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.8', label: 'Nuanced Expression', detail: 'L5.8 developed your ability to express subtle differences. Now apply that precision to translation across languages.' },
    { fromLesson: 'L5.6', label: 'Idioms & Figurative Language', detail: 'L5.6 introduced idiomatic expressions. Now see why they resist direct translation and how to handle them.' },
    { fromLesson: 'L5.5', label: 'Professional Register', detail: 'L5.5 covered formal vs. informal registers. Now use that awareness when choosing translations for different audiences.' },
  ],

  sectionTransitions: [
    { afterSection: 'false-friends', text: 'False friends conquered! Now let\'s discover words that exist only in Spanish — untranslatable gems.' },
    { afterSection: 'untranslatable', text: 'Beautiful, aren\'t they? Now let\'s tackle verbs that change meaning completely based on context.' },
    { afterSection: 'context-translation', text: 'Context is everything! Now let\'s see how register — formal vs. informal — changes translation entirely.' },
    { afterSection: 'dialogues', text: 'Fascinating dialogues about the translator\'s craft! Let\'s explore the cultural side of translation.' },
    { afterSection: 'cultural', text: 'Now put your skills to the test in the Translator\'s Booth!' },
    { afterSection: 'translator-booth', text: 'Final challenge — the knowledge check awaits!' },
  ],

  personalizedVocab: [
    { spanish: 'En realidad...', english: 'Actually... (NOT "actualmente")' },
    { spanish: 'Quiero decir que...', english: 'What I mean is...' },
    { spanish: 'No tiene traducción exacta', english: 'It has no exact translation' },
    { spanish: 'Depende del contexto', english: 'It depends on the context' },
    { spanish: 'En un registro formal...', english: 'In a formal register...' },
    { spanish: 'La mejor traducción sería...', english: 'The best translation would be...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Estoy embarazada, no avergonzada', pronunciation: 'ehs-TOY ehm-bah-rah-SAH-dah noh ah-behr-gohn-SAH-dah', english: 'I\'m pregnant, not embarrassed', audio: 'estoy-embarazada-no-avergonzada', tip: '"Embarazada" = pregnant. "Avergonzada" = embarrassed. This is the #1 false friend that catches every learner!' },
    { spanish: 'La sobremesa es una tradición española', pronunciation: 'lah soh-breh-MEH-sah ehs OO-nah trah-dee-see-OHN ehs-pah-NYOH-lah', english: 'Sobremesa is a Spanish tradition', audio: 'la-sobremesa-es-una-tradicion-espanola', tip: '"Sobremesa" literally means "over the table" — it\'s the time spent talking after a meal. No English word captures this cultural practice.' },
    { spanish: 'Llevo cinco años aprendiendo español', pronunciation: 'YEH-boh SEEN-koh AH-nyohs ah-prehn-dee-EHN-doh ehs-pah-NYOHL', english: 'I\'ve been learning Spanish for five years', audio: 'llevo-cinco-anos-aprendiendo-espanol', tip: '"Llevar + time + gerund" expresses ongoing duration. It\'s more natural than "he estado aprendiendo" in everyday Spanish.' },
    { spanish: 'Me puso nerviosa el examen', pronunciation: 'meh POO-soh nehr-bee-OH-sah ehl ehk-SAH-mehn', english: 'The exam made me nervous', audio: 'me-puso-nerviosa-el-examen', tip: '"Ponerse + adjective" = to become/get. Ponerse nervioso, ponerse rojo, ponerse triste. The reflexive changes the meaning entirely!' },
    { spanish: 'Le ruego tenga a bien considerar mi solicitud', pronunciation: 'leh RRWEH-goh TEHN-gah ah bee-EHN kohn-see-deh-RAHR mee soh-lee-see-TOOD', english: 'I kindly request that you consider my application', audio: 'le-ruego-tenga-a-bien-considerar-mi-solicitud', tip: 'Ultra-formal register uses subjunctive + set phrases: "Le ruego," "tenga a bien," "quedo a su disposición." Essential for official letters in Spanish.' },
    { spanish: '¿Me echas una mano con esto?', pronunciation: 'meh EH-chahs OO-nah MAH-noh kohn EHS-toh', english: 'Can you give me a hand with this?', audio: 'me-echas-una-mano-con-esto', tip: '"Echar una mano" = to help out. "Echar" alone can mean throw, pour, add, miss, or fire someone. Context is everything!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'false-friends', label: 'False Friends' },
    { id: 'untranslatable', label: 'Untranslatable Words' },
    { id: 'context-translation', label: 'Context-Dependent' },
    { id: 'register-translation', label: 'Register & Tone' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Translation Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'translator-booth', label: 'Translator\'s Booth' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'false-friends',
      title: 'False Friends — Falsos Amigos',
      description: 'Words that look like English but mean something completely different. These are the most common traps for English speakers learning Spanish.',
      tabs: [
        { label: 'Common Traps', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'false-friends').slice(0, 6) },
        { label: 'More False Friends', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'false-friends').slice(6) },
      ],
    },
    {
      id: 'untranslatable',
      title: 'Untranslatable Words — Palabras Intraducibles',
      description: 'Spanish words and concepts that have no single-word equivalent in English. These reveal the unique worldview embedded in the language.',
      tabs: [
        { label: 'Time & Social', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'untranslatable').slice(0, 6) },
        { label: 'Feelings & Identity', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'untranslatable').slice(6) },
      ],
    },
    {
      id: 'context-translation',
      title: 'Context-Dependent Translation — Según el Contexto',
      description: 'Verbs like quedar, poner, echar, dar, and llevar change meaning entirely depending on context. Master these and you think in Spanish.',
      tabs: [
        { label: 'Ya, Quedar, Poner', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'context-translation').slice(0, 6) },
        { label: 'Echar, Dar, Llevar', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'context-translation').slice(6) },
      ],
    },
    {
      id: 'register-translation',
      title: 'Register-Aware Translation — El Registro',
      description: 'The same message in formal vs. informal register requires completely different vocabulary, structures, and even verb forms. A good translator always considers the audience.',
      tabs: [
        { label: 'Formal Register', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'register-translation').filter((_, i) => i % 2 === 0) },
        { label: 'Informal Register', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'register-translation').filter((_, i) => i % 2 === 1) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'False Friends: Sound Alike, Mean Different',
      content: 'False friends (falsos amigos) are cognates that look similar but have different meanings. The key is to memorize the correct Spanish word alongside the false friend. "Embarrassed" = avergonzado (NOT embarazado). "Actually" = en realidad (NOT actualmente, which means "currently"). Create mental images linking the CORRECT meaning to the Spanish word.',
      example: 'Embarazada = pregnant | Actual = current | Éxito = success | Sensible = sensitive',
    },
    {
      title: 'Untranslatable Words: Think in Concepts',
      content: 'When you encounter untranslatable words, stop trying to find an English equivalent. Instead, internalize the CONCEPT. "Sobremesa" is not "after-dinner conversation" — it\'s the entire cultural ritual of lingering at the table. "Estrenar" is not just "to use for the first time" — it carries the excitement and specialness of that moment. These words expand your thinking.',
      example: 'Sobremesa = the ritual | Madrugada = the hours | Estrenar = the first-time feeling',
    },
    {
      title: 'Context Verbs: Learn in Phrases, Not Isolation',
      content: 'Verbs like "quedar," "dar," "llevar," and "echar" have 5-10 meanings each. Never study them in isolation — always learn them in complete phrases. "Quedar en" (to agree to meet), "quedar bien" (to fit well), "quedarse" (to stay). Build a mental map of prepositions and contexts that trigger each meaning.',
      example: 'Quedar en = arrange to meet | Quedar bien = fit well | Quedarse = to remain/stay',
      reviewFrom: 'L5.6',
    },
    {
      title: 'Register: Matching Tone Across Languages',
      content: 'Translation is not just about words — it\'s about tone. A formal Spanish letter uses subjunctive, indirect constructions, and set phrases ("Le ruego," "Quedo a su disposición"). An informal message uses tú, contractions, and slang ("Porfa," "Oye," "Me dices"). When translating, always ask: WHO is speaking, TO WHOM, and in WHAT situation?',
      example: '"Please" → Por favor (neutral) | Le ruego (formal) | Porfa (informal/abbreviated)',
      reviewFrom: 'L5.5',
    },
  ],

  flashcardGroups: [
    {
      key: 'false-friends',
      label: 'False Friends',
      audioKeys: ['embarazada-bebe', 'problema-actual', 'exito-profesional', 'persona-sensible', 'realizar-proyecto', 'libreria-comprar', 'constipado-congestion', 'no-me-molestes', 'soportar-calor', 'pretendo-terminar', 'carpeta-escritorio', 'conductor-autobus'],
    },
    {
      key: 'untranslatable',
      label: 'Untranslatable',
      audioKeys: ['sobremesa-tres-horas', 'tres-de-la-madrugada', 'estrenar-zapatos', 'aprovechar-oportunidad', 'puedo-tutearte', 'desvele-estudiando', 'pastel-empalaga', 'consuegra-cenar', 'anteayer-cine', 'tocayo-carlos', 'friolento-frio', 'pena-ajena'],
    },
    {
      key: 'context-register',
      label: 'Context & Register',
      audioKeys: ['ya-voy', 'ya-no-quiero', 'vestido-queda', 'quedamos-cafe', 'echo-de-menos', 'llevo-tres-anos', 'formal-donde-estacion', 'informal-donde-estacion', 'formal-disculpe', 'informal-perdona'],
    },
  ],

  matchPairs: [
    { left: 'Embarazada', right: 'Pregnant (NOT embarrassed)' },
    { left: 'Éxito', right: 'Success (NOT exit)' },
    { left: 'Sobremesa', right: 'After-meal conversation' },
    { left: 'Madrugada', right: 'Early morning hours' },
    { left: 'Echar de menos', right: 'To miss someone' },
    { left: 'Llevar + time', right: 'To have been doing' },
    { left: 'Le ruego', right: 'I kindly request (formal)' },
    { left: 'Porfa', right: 'Please (informal/short)' },
  ],
  matchLabels: { left: 'Español', right: 'True Meaning' },

  sortActivities: [
    {
      title: 'False Friend or True Cognate?',
      instruction: 'Does this Spanish word mean the same as its English look-alike?',
      buckets: ['False Friend 🚫', 'True Cognate ✓'],
      items: [
        { text: 'Embarazada = Embarrassed', bucket: 'False Friend 🚫' },
        { text: 'Éxito = Exit', bucket: 'False Friend 🚫' },
        { text: 'Sensible = Sensible', bucket: 'False Friend 🚫' },
        { text: 'Carpeta = Carpet', bucket: 'False Friend 🚫' },
        { text: 'Familia = Family', bucket: 'True Cognate ✓' },
        { text: 'Profesor = Professor', bucket: 'True Cognate ✓' },
        { text: 'Hospital = Hospital', bucket: 'True Cognate ✓' },
        { text: 'Elefante = Elephant', bucket: 'True Cognate ✓' },
      ],
    },
    {
      title: 'Formal or Informal Register?',
      instruction: 'Would you use this phrase in a formal letter or a casual chat?',
      buckets: ['Formal Letter 📜', 'Casual Chat 💬'],
      items: [
        { text: 'Le ruego disculpe las molestias', bucket: 'Formal Letter 📜' },
        { text: 'Estimado señor, me dirijo a usted', bucket: 'Formal Letter 📜' },
        { text: 'Quedo a su entera disposición', bucket: 'Formal Letter 📜' },
        { text: 'Sería tan amable de facilitarme', bucket: 'Formal Letter 📜' },
        { text: 'Perdona, fue sin querer', bucket: 'Casual Chat 💬' },
        { text: '¡Oye, necesito pedirte un favor!', bucket: 'Casual Chat 💬' },
        { text: 'Lo siento, no se pudo, hermano', bucket: 'Casual Chat 💬' },
        { text: '¿Me pasas eso? Porfa', bucket: 'Casual Chat 💬' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Translation Sorting',

  dialogues: [
    {
      id: 'dialogue-un-translators',
      title: 'Translation Challenges — UN Office, New York City',
      location: 'New York City',
      lines: [
        { speaker: 'Elena', text: 'Hoy casi cometo un error terrible. Traduje "embarrassed" como "embarazada" en un documento oficial.', audio: '/audio/L6.5/phrases/d1-line1.mp3' },
        { speaker: 'Roberto', text: '¡Dios mío! Eso habría sido un desastre diplomático. ¿Lo corregiste a tiempo?', audio: '/audio/L6.5/phrases/d1-line2.mp3' },
        { speaker: 'Elena', text: 'Sí, por suerte. Pero me hizo pensar en cuántos falsos amigos nos acechan cada día.', audio: '/audio/L6.5/phrases/d1-line3.mp3' },
        { speaker: 'Roberto', text: 'Totalmente. La semana pasada tuve que traducir "sobremesa" y no encontraba un equivalente en inglés.', audio: '/audio/L6.5/phrases/d1-line4.mp3' },
        { speaker: 'Elena', text: 'Es que no lo hay. Tuve que escribir una nota al pie explicando el concepto cultural.', audio: '/audio/L6.5/phrases/d1-line5.mp3', annotations: [{ phrase: 'nota al pie', fromLesson: 'L5.5', note: 'Professional terminology from L5.5' }] },
        { speaker: 'Roberto', text: '¿Y qué haces cuando el registro formal en español no tiene equivalente en inglés?', audio: '/audio/L6.5/phrases/d1-line6.mp3' },
        { speaker: 'Elena', text: 'Adapto el tono. "Le ruego tenga a bien" no se puede traducir literalmente. Busco la función, no las palabras.', audio: '/audio/L6.5/phrases/d1-line7.mp3' },
        { speaker: 'Roberto', text: 'Exacto. Traducimos significados, no palabras. Eso es lo que nos enseñaron en la carrera.', audio: '/audio/L6.5/phrases/d1-line8.mp3' },
        { speaker: 'Elena', text: 'Y lo más difícil: mantener el humor. Los chistes con doble sentido son prácticamente imposibles.', audio: '/audio/L6.5/phrases/d1-line9.mp3' },
        { speaker: 'Roberto', text: '¡Ni me lo digas! Ayer intenté traducir un juego de palabras con "éxito" y "exit." Imposible.', audio: '/audio/L6.5/phrases/d1-line10.mp3' },
        { speaker: 'Elena', text: 'Ahí es donde la interpretación se convierte en arte. No estamos traduciendo idiomas, estamos traduciendo culturas.', audio: '/audio/L6.5/phrases/d1-line11.mp3' },
        { speaker: 'Roberto', text: 'Bien dicho. Por eso amo este trabajo. Cada documento es un rompecabezas cultural.', audio: '/audio/L6.5/phrases/d1-line12.mp3' },
        { speaker: 'Elena', text: 'Oye, ¿y la conferencia de mañana? Llevo tres semanas preparando la terminología especializada.', audio: '/audio/L6.5/phrases/d1-line13.mp3', annotations: [{ phrase: 'Llevo tres semanas', fromLesson: 'L5.8', note: 'Llevar + time + gerund for ongoing duration from L5.8' }] },
        { speaker: 'Roberto', text: 'Yo también. Es sobre cambio climático. El vocabulario técnico en ese campo evoluciona constantemente.', audio: '/audio/L6.5/phrases/d1-line14.mp3' },
        { speaker: 'Elena', text: 'Bueno, a seguir con la preparación. ¡Que no nos agarren los falsos amigos mañana!', audio: '/audio/L6.5/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-salamanca-student',
      title: 'Learning the Untranslatable — University of Salamanca',
      location: 'Salamanca',
      lines: [
        { speaker: 'Sarah', text: 'Profesora, estoy frustrada. No entiendo por qué "ya" puede significar tantas cosas diferentes.', audio: '/audio/L6.5/phrases/d2-line1.mp3' },
        { speaker: 'Profesora Lucía', text: 'Es normal, Sarah. "Ya" es una de las palabras más difíciles del español. ¿Puedes darme un ejemplo?', audio: '/audio/L6.5/phrases/d2-line2.mp3' },
        { speaker: 'Sarah', text: '"Ya voy" significa "I\'m coming" pero "ya no" significa "not anymore." ¡Es confuso!', audio: '/audio/L6.5/phrases/d2-line3.mp3' },
        { speaker: 'Profesora Lucía', text: 'Piénsalo así: "ya" marca un cambio de estado. "Ya voy" = ahora empiezo a ir. "Ya no" = dejó de ser así.', audio: '/audio/L6.5/phrases/d2-line4.mp3' },
        { speaker: 'Sarah', text: '¡Ah! Entonces es como un interruptor. Algo cambia en ese momento.', audio: '/audio/L6.5/phrases/d2-line5.mp3' },
        { speaker: 'Profesora Lucía', text: '¡Exactamente! Y hablando de palabras difíciles, ¿has experimentado la sobremesa española?', audio: '/audio/L6.5/phrases/d2-line6.mp3' },
        { speaker: 'Sarah', text: 'Sí, mi familia anfitriona se queda en la mesa una hora después de comer. Al principio me parecía raro.', audio: '/audio/L6.5/phrases/d2-line7.mp3', annotations: [{ phrase: 'familia anfitriona', fromLesson: 'L5.6', note: 'Host family vocabulary from travel/cultural context' }] },
        { speaker: 'Profesora Lucía', text: 'Y ahora, ¿te gusta?', audio: '/audio/L6.5/phrases/d2-line8.mp3' },
        { speaker: 'Sarah', text: '¡Me encanta! Pero cuando intento explicarla en inglés, no encuentro las palabras adecuadas.', audio: '/audio/L6.5/phrases/d2-line9.mp3' },
        { speaker: 'Profesora Lucía', text: 'Porque no existen. La sobremesa es intraducible. Y eso es lo bello de aprender otro idioma.', audio: '/audio/L6.5/phrases/d2-line10.mp3' },
        { speaker: 'Sarah', text: 'También me cuesta "estrenar." Ayer dije "I first-timed my shoes" y todos se rieron.', audio: '/audio/L6.5/phrases/d2-line11.mp3' },
        { speaker: 'Profesora Lucía', text: '¡Ja! Es que "estrenar" no tiene traducción directa. Puedes decir "to wear for the first time" pero pierdes la emoción.', audio: '/audio/L6.5/phrases/d2-line12.mp3' },
        { speaker: 'Sarah', text: 'Exacto. Cuando dices "estrenar" sientes la ilusión. La traducción larga no captura eso.', audio: '/audio/L6.5/phrases/d2-line13.mp3' },
        { speaker: 'Profesora Lucía', text: 'Estás pensando como traductora. El día que dejes de buscar equivalentes palabra por palabra, habrás llegado.', audio: '/audio/L6.5/phrases/d2-line14.mp3' },
        { speaker: 'Sarah', text: 'Creo que ya estoy empezando a pensar en español. A veces sueño en español también.', audio: '/audio/L6.5/phrases/d2-line15.mp3' },
        { speaker: 'Profesora Lucía', text: '¡Eso es la señal definitiva! Cuando sueñas en otro idioma, ya no estás traduciendo — estás viviendo en él.', audio: '/audio/L6.5/phrases/d2-line16.mp3' },
        { speaker: 'Sarah', text: 'Gracias, profesora. Creo que necesito dejar de traducir y empezar a interpretar.', audio: '/audio/L6.5/phrases/d2-line17.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Follow UN translators in New York navigating false friends and cultural concepts, then join an American student in Salamanca discovering the beauty of untranslatable Spanish words.',

  culturalNotes: [
    {
      title: 'Translation as a Cultural Bridge',
      content: 'Translation has never been just about converting words from one language to another. The Spanish philosopher José Ortega y Gasset argued that translation is fundamentally impossible — and yet absolutely necessary. Every language carries within it a unique way of seeing the world. When you learn that "sobremesa" has no English equivalent, you\'re not just learning a word — you\'re discovering a value system where relationships and conversation are prioritized over productivity. The best translators don\'t translate languages; they translate worldviews.',
    },
    {
      title: 'The Sobremesa Phenomenon',
      content: 'Sobremesa is perhaps the most culturally revealing untranslatable word in Spanish. In Spain and Latin America, meals are not just about eating — they\'re social events. The sobremesa (literally "over the table") is the time spent lingering after a meal: talking, laughing, having coffee, arguing about politics, or simply enjoying company. It can last from 30 minutes to several hours. This tradition reflects a cultural attitude that values human connection over efficiency. When translators encounter "sobremesa," they face a choice: explain the concept (losing brevity) or substitute an approximation (losing meaning). There is no right answer — and that\'s the art.',
    },
    {
      title: 'Borges on Translation',
      content: 'Jorge Luis Borges, the Argentine literary giant, was both a translator and a theorist of translation. He provocatively argued that a translation could be superior to the original — because the translator has the advantage of knowing the destination culture. Borges translated works by Kafka, Faulkner, and Virginia Woolf into Spanish, often taking creative liberties that would horrify purists but delighted readers. His philosophy: "The original is unfaithful to the translation." This radical idea invites us to see translation not as a lesser copy but as an act of creation. Every time you choose how to express a Spanish idea in English (or vice versa), you are, in Borges\' view, creating something new.',
    },
  ],
  culturalGradient: 'from-sky-50 to-cyan-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Embarazada" in Spanish means:', options: ['Embarrassed', 'Pregnant', 'Embraced', 'Emotional'], answer: 1 },
    { id: 2, type: 'tf', text: '"Actual" in Spanish means "actual/real" in English.', answer: false },
    { id: 3, type: 'mc', text: 'What does "sobremesa" refer to?', options: ['A tablecloth', 'An after-meal conversation period', 'A type of dessert', 'A table setting'], answer: 1 },
    { id: 4, type: 'fill', text: 'Complete: "Llevo tres años ___ español" (learning — gerund)', answer: 'aprendiendo' },
    { id: 5, type: 'mc', text: '"Éxito" means:', options: ['Exit', 'Excitement', 'Success', 'Exile'], answer: 2 },
    { id: 6, type: 'mc', text: 'What is the correct translation of "I miss you" using "echar"?', options: ['Te echo', 'Te echo de menos', 'Te echo fuera', 'Te echo sal'], answer: 1 },
    { id: 7, type: 'tf', text: '"Librería" means "library" in English.', answer: false },
    { id: 8, type: 'mc', text: '"Se puso rojo" means:', options: ['He put on red', 'He became red/blushed', 'He placed red', 'He wore red'], answer: 1 },
    { id: 9, type: 'fill', text: 'Complete the formal phrase: "Le ___ disculpe las molestias" (I beg you)', answer: 'ruego' },
    { id: 10, type: 'mc', text: 'In Dialogue 1, what almost happened with a translation at the UN?', options: ['Wrong date', '"Embarrassed" mistranslated as "embarazada"', 'Missing document', 'Wrong language'], answer: 1 },
    { id: 11, type: 'mc', text: '"Madrugada" refers to:', options: ['Morning rush', 'The early hours between midnight and dawn', 'A sunrise', 'An alarm clock'], answer: 1 },
    { id: 12, type: 'tf', text: '"Quedar" can mean both "to fit" (clothing) and "to meet/arrange" depending on context.', answer: true },
    { id: 13, type: 'mc', text: 'What did Borges argue about translation?', options: ['It is always inferior', 'It should be literal', 'A translation can surpass the original', 'Only natives should translate'], answer: 2 },
    { id: 14, type: 'mc', text: '"Porfa" is a shortened form of:', options: ['Por fin', 'Por favor', 'Por ahora', 'Porfiar'], answer: 1 },
    { id: 15, type: 'fill', text: 'Complete: "La ventana ___ al jardín" (faces/overlooks — dar)', answer: 'da' },
  ],

  audioBase: '/audio/L6.5/phrases',

  uniqueActivity: {
    id: 'TranslatorBoothL65',
    sectionId: 'translator-booth',
    sectionColor: 'bg-sky-50/40',
    sectionBorder: 'border-sky-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-sky-50/30', border: 'border-sky-100' },
    'false-friends': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    untranslatable: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'context-translation': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'register-translation': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-cyan-50/30', border: 'border-cyan-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    dialogues: { bg: 'bg-sky-50/30', border: 'border-sky-100' },
    cultural: { bg: 'bg-cyan-50/30', border: 'border-cyan-100' },
    'translator-booth': { bg: 'bg-sky-50/40', border: 'border-sky-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
