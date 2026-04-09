import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Bias Techniques (12) ===
  { spanish: 'El sesgo de confirmación nos hace buscar solo información que refuerza nuestras creencias', english: 'Confirmation bias makes us seek only information that reinforces our beliefs', pronunciation: 'ehl SEHS-goh deh kohn-feer-mah-see-OHN nohs AH-seh boos-KAHR', category: 'bias-techniques', audio: 'sesgo-de-confirmacion' },
  { spanish: 'La falacia ad hominem ataca a la persona en vez de refutar su argumento', english: 'The ad hominem fallacy attacks the person instead of refuting their argument', pronunciation: 'lah fah-LAH-see-ah ahd OH-mee-nehm ah-TAH-kah ah lah pehr-SOH-nah', category: 'bias-techniques', audio: 'falacia-ad-hominem' },
  { spanish: 'La apelación a la emoción manipula los sentimientos para evitar el razonamiento lógico', english: 'The appeal to emotion manipulates feelings to avoid logical reasoning', pronunciation: 'lah ah-peh-lah-see-OHN ah lah eh-moh-see-OHN mah-nee-POO-lah', category: 'bias-techniques', audio: 'apelacion-a-la-emocion' },
  { spanish: 'La generalización apresurada saca conclusiones de una muestra insuficiente', english: 'The hasty generalization draws conclusions from an insufficient sample', pronunciation: 'lah heh-neh-rah-lee-sah-see-OHN ah-preh-soo-RAH-dah SAH-kah', category: 'bias-techniques', audio: 'generalizacion-apresurada' },
  { spanish: 'El hombre de paja distorsiona la posición del oponente para atacarla más fácilmente', english: 'The straw man distorts the opponent\'s position to attack it more easily', pronunciation: 'ehl OHM-breh deh PAH-hah dees-tohr-see-OH-nah lah poh-see-see-OHN', category: 'bias-techniques', audio: 'hombre-de-paja' },
  { spanish: 'La pendiente resbaladiza predice una cadena catastrófica de eventos sin evidencia', english: 'The slippery slope predicts a catastrophic chain of events without evidence', pronunciation: 'lah pehn-dee-EHN-teh rehs-bah-lah-DEE-sah preh-DEE-seh', category: 'bias-techniques', audio: 'pendiente-resbaladiza' },
  { spanish: 'La falsa equivalencia equipara dos cosas que no son comparables en absoluto', english: 'False equivalence equates two things that are not comparable at all', pronunciation: 'lah FAHL-sah eh-kee-bah-LEHN-see-ah eh-kee-PAH-rah dohs KOH-sahs', category: 'bias-techniques', audio: 'falsa-equivalencia' },
  { spanish: 'El sesgo de anclaje nos hace depender demasiado de la primera información recibida', english: 'Anchoring bias makes us rely too much on the first information received', pronunciation: 'ehl SEHS-goh deh ahn-KLAH-heh nohs AH-seh deh-pehn-DEHR', category: 'bias-techniques', audio: 'sesgo-de-anclaje' },
  { spanish: 'La falacia del jugador cree que eventos pasados afectan probabilidades futuras independientes', english: 'The gambler\'s fallacy believes past events affect independent future probabilities', pronunciation: 'lah fah-LAH-see-ah dehl hoo-gah-DOHR KREH-eh keh eh-BEHN-tohs', category: 'bias-techniques', audio: 'falacia-del-jugador' },
  { spanish: 'El argumento de autoridad usa la fama de alguien como prueba en vez de datos', english: 'The argument from authority uses someone\'s fame as proof instead of data', pronunciation: 'ehl ahr-goo-MEHN-toh deh ow-toh-ree-DAHD OO-sah lah FAH-mah', category: 'bias-techniques', audio: 'argumento-de-autoridad' },
  { spanish: 'La falsa dicotomía presenta solo dos opciones cuando existen alternativas intermedias', english: 'The false dichotomy presents only two options when intermediate alternatives exist', pronunciation: 'lah FAHL-sah dee-koh-toh-MEE-ah preh-SEHN-tah SOH-loh dohs ohp-see-OH-nehs', category: 'bias-techniques', audio: 'falsa-dicotomia' },
  { spanish: 'El efecto bandwagon argumenta que algo es cierto porque la mayoría lo cree', english: 'The bandwagon effect argues something is true because the majority believes it', pronunciation: 'ehl eh-FEHK-toh BAHND-wah-gohn ahr-goo-MEHN-tah keh AHL-goh', category: 'bias-techniques', audio: 'efecto-bandwagon' },

  // === Media Vocabulary (12) ===
  { spanish: 'El titular sensacionalista exagera los hechos para captar la atención del lector', english: 'The sensationalist headline exaggerates facts to capture the reader\'s attention', pronunciation: 'ehl tee-too-LAHR sehn-sah-see-oh-nah-LEES-tah ehk-sah-HEH-rah lohs EH-chohs', category: 'media-vocabulary', audio: 'titular-sensacionalista' },
  { spanish: 'La fuente anónima proporcionó información clave bajo condición de confidencialidad', english: 'The anonymous source provided key information under condition of confidentiality', pronunciation: 'lah FWEHN-teh ah-NOH-nee-mah proh-pohr-see-oh-NOH een-fohr-mah-see-OHN KLAH-beh', category: 'media-vocabulary', audio: 'fuente-anonima' },
  { spanish: 'La nota de prensa fue distribuida por el departamento de comunicaciones del gobierno', english: 'The press release was distributed by the government\'s communications department', pronunciation: 'lah NOH-tah deh PREHN-sah fweh dees-tree-boo-EE-dah pohr ehl deh-pahr-tah-MEHN-toh', category: 'media-vocabulary', audio: 'nota-de-prensa' },
  { spanish: 'El editorial refleja la opinión del medio, no necesariamente los hechos objetivos', english: 'The editorial reflects the outlet\'s opinion, not necessarily objective facts', pronunciation: 'ehl eh-dee-toh-ree-AHL reh-FLEH-hah lah oh-pee-nee-OHN dehl MEH-dee-oh', category: 'media-vocabulary', audio: 'editorial-refleja-opinion' },
  { spanish: 'La crónica combina narración y análisis para contar los hechos con profundidad', english: 'The chronicle combines narration and analysis to tell facts in depth', pronunciation: 'lah KROH-nee-kah kohm-BEE-nah nah-rrah-see-OHN ee ah-NAH-lee-sees', category: 'media-vocabulary', audio: 'cronica-combina-narracion' },
  { spanish: 'El reportaje de investigación expuso la red de corrupción tras meses de trabajo', english: 'The investigative report exposed the corruption network after months of work', pronunciation: 'ehl reh-pohr-TAH-heh deh een-behs-tee-gah-see-OHN ehks-POO-soh', category: 'media-vocabulary', audio: 'reportaje-de-investigacion' },
  { spanish: 'El corresponsal en el extranjero envía informes desde la zona del conflicto', english: 'The foreign correspondent sends reports from the conflict zone', pronunciation: 'ehl koh-rrehs-pohn-SAHL ehn ehl ehks-trahn-HEH-roh ehn-BEE-ah', category: 'media-vocabulary', audio: 'corresponsal-en-el-extranjero' },
  { spanish: 'El enviado especial cubrió las elecciones presidenciales desde la capital', english: 'The special envoy covered the presidential elections from the capital', pronunciation: 'ehl ehn-bee-AH-doh ehs-peh-see-AHL koo-bree-OH lahs eh-lehk-see-OH-nehs', category: 'media-vocabulary', audio: 'enviado-especial' },
  { spanish: 'En la rueda de prensa, los periodistas cuestionaron las declaraciones oficiales', english: 'At the press conference, journalists questioned the official statements', pronunciation: 'ehn lah RRWEH-dah deh PREHN-sah lohs peh-ree-oh-DEES-tahs kwehs-tee-oh-NAH-rohn', category: 'media-vocabulary', audio: 'rueda-de-prensa' },
  { spanish: 'La línea editorial del periódico determina qué historias reciben cobertura prioritaria', english: 'The newspaper\'s editorial line determines which stories receive priority coverage', pronunciation: 'lah LEE-neh-ah eh-dee-toh-ree-AHL dehl peh-ree-OH-dee-koh', category: 'media-vocabulary', audio: 'linea-editorial' },
  { spanish: 'La columna de opinión permite al autor expresar su punto de vista personal', english: 'The opinion column allows the author to express their personal point of view', pronunciation: 'lah koh-LOOM-nah deh oh-pee-nee-OHN pehr-MEE-teh ahl ow-TOHR', category: 'media-vocabulary', audio: 'columna-de-opinion' },
  { spanish: 'El pie de foto contextualiza la imagen y debe ser preciso y verificable', english: 'The photo caption contextualizes the image and must be accurate and verifiable', pronunciation: 'ehl pee-EH deh FOH-toh kohn-tehks-too-ah-LEE-sah lah ee-MAH-hehn', category: 'media-vocabulary', audio: 'pie-de-foto' },

  // === Fake News Detection (12) ===
  { spanish: 'Verificar fuentes es el primer paso para confirmar la veracidad de una noticia', english: 'Verifying sources is the first step to confirm the truthfulness of a news story', pronunciation: 'beh-ree-fee-KAHR FWEHN-tehs ehs ehl pree-MEHR PAH-soh', category: 'fake-news-detection', audio: 'verificar-fuentes' },
  { spanish: 'Contrastar información con múltiples medios independientes reduce el riesgo de error', english: 'Cross-referencing information with multiple independent outlets reduces the risk of error', pronunciation: 'kohn-trahs-TAHR een-fohr-mah-see-OHN kohn MOOL-tee-plehs MEH-dee-ohs', category: 'fake-news-detection', audio: 'contrastar-informacion' },
  { spanish: 'Distinguir entre dato y opinión es fundamental para el pensamiento crítico', english: 'Distinguishing between fact and opinion is fundamental for critical thinking', pronunciation: 'dees-teen-GEER EHN-treh DAH-toh ee oh-pee-nee-OHN ehs foon-dah-mehn-TAHL', category: 'fake-news-detection', audio: 'dato-vs-opinion' },
  { spanish: 'La desinformación se crea deliberadamente; la malinformación saca de contexto hechos reales', english: 'Disinformation is created deliberately; malinformation takes real facts out of context', pronunciation: 'lah dehs-een-fohr-mah-see-OHN seh KREH-ah deh-lee-beh-rah-dah-MEHN-teh', category: 'fake-news-detection', audio: 'desinformacion-vs-malinformacion' },
  { spanish: 'El bulo o fake news circula rápidamente en redes sociales sin verificación previa', english: 'The hoax or fake news circulates rapidly on social media without prior verification', pronunciation: 'ehl BOO-loh oh feik noos seer-KOO-lah RRAH-pee-dah-MEHN-teh', category: 'fake-news-detection', audio: 'bulo-fake-news' },
  { spanish: 'El sesgo algorítmico filtra contenido según tus preferencias, creando burbujas informativas', english: 'Algorithmic bias filters content according to your preferences, creating information bubbles', pronunciation: 'ehl SEHS-goh ahl-goh-REET-mee-koh FEEL-trah kohn-teh-NEE-doh', category: 'fake-news-detection', audio: 'sesgo-algoritmico' },
  { spanish: 'La cámara de eco refuerza tus ideas al exponerte solo a opiniones similares', english: 'The echo chamber reinforces your ideas by exposing you only to similar opinions', pronunciation: 'lah KAH-mah-rah deh EH-koh reh-FWEHR-sah toos ee-DEH-ahs', category: 'fake-news-detection', audio: 'camara-de-eco' },
  { spanish: 'El clickbait usa titulares engañosos para generar clics sin ofrecer contenido sustancial', english: 'Clickbait uses misleading headlines to generate clicks without offering substantial content', pronunciation: 'ehl kleek-beit OO-sah tee-too-LAH-rehs ehn-gah-NYOH-sohs', category: 'fake-news-detection', audio: 'clickbait-titulares-enganosos' },
  { spanish: 'Los bots y cuentas falsas amplifican mensajes para crear la ilusión de consenso', english: 'Bots and fake accounts amplify messages to create the illusion of consensus', pronunciation: 'lohs bohts ee KWEHN-tahs FAHL-sahs ahm-plee-FEE-kahn mehn-SAH-hehs', category: 'fake-news-detection', audio: 'bots-cuentas-falsas' },
  { spanish: 'El fact-checking profesional verifica afirmaciones usando bases de datos y expertos', english: 'Professional fact-checking verifies claims using databases and experts', pronunciation: 'ehl fahkt-CHEH-keeng proh-feh-see-oh-NAHL beh-ree-FEE-kah ah-feer-mah-see-OH-nehs', category: 'fake-news-detection', audio: 'fact-checking-profesional' },
  { spanish: 'La imagen sacada de contexto es una de las formas más comunes de desinformación visual', english: 'The image taken out of context is one of the most common forms of visual disinformation', pronunciation: 'lah ee-MAH-hehn sah-KAH-dah deh kohn-TEHKS-toh ehs OO-nah', category: 'fake-news-detection', audio: 'imagen-sacada-de-contexto' },
  { spanish: 'El deepfake utiliza inteligencia artificial para crear videos falsos extremadamente realistas', english: 'Deepfake uses artificial intelligence to create extremely realistic fake videos', pronunciation: 'ehl deep-feik oo-tee-LEE-sah een-teh-lee-HEHN-see-ah ahr-tee-fee-see-AHL', category: 'fake-news-detection', audio: 'deepfake-inteligencia-artificial' },

  // === Critical Reading (12) ===
  { spanish: 'El autor implica que las reformas benefician solo a ciertos sectores privilegiados', english: 'The author implies that the reforms benefit only certain privileged sectors', pronunciation: 'ehl ow-TOHR eem-PLEE-kah keh lahs reh-FOHR-mahs beh-neh-FEE-see-ahn', category: 'critical-reading', audio: 'el-autor-implica-que' },
  { spanish: 'Se puede inferir que el periodista tiene una postura crítica hacia el gobierno', english: 'One can infer that the journalist has a critical stance toward the government', pronunciation: 'seh PWEH-deh een-feh-REER keh ehl peh-ree-oh-DEES-tah tee-EH-neh', category: 'critical-reading', audio: 'se-puede-inferir-que' },
  { spanish: 'El tono del artículo es irónico, lo cual revela la verdadera opinión del autor', english: 'The tone of the article is ironic, which reveals the author\'s true opinion', pronunciation: 'ehl TOH-noh dehl ahr-TEE-koo-loh ehs ee-ROH-nee-koh', category: 'critical-reading', audio: 'el-tono-del-articulo' },
  { spanish: 'La intención del autor es persuadir al lector de que la medida es necesaria', english: 'The author\'s intention is to persuade the reader that the measure is necessary', pronunciation: 'lah een-tehn-see-OHN dehl ow-TOHR ehs pehr-swah-DEER ahl lehk-TOHR', category: 'critical-reading', audio: 'la-intencion-del-autor' },
  { spanish: 'El público objetivo de este medio son jóvenes urbanos con educación universitaria', english: 'The target audience of this outlet is urban youth with university education', pronunciation: 'ehl POO-blee-koh ohb-heh-TEE-boh deh EHS-teh MEH-dee-oh sohn HOH-beh-nehs', category: 'critical-reading', audio: 'el-publico-objetivo' },
  { spanish: 'El subtexto político sugiere una alianza entre el medio y el partido en el poder', english: 'The political subtext suggests an alliance between the outlet and the ruling party', pronunciation: 'ehl soob-TEHKS-toh poh-LEE-tee-koh soo-hee-EH-reh OO-nah ah-lee-AHN-sah', category: 'critical-reading', audio: 'el-subtexto-politico' },
  { spanish: 'La selección de fuentes revela el sesgo ideológico del reportaje', english: 'The selection of sources reveals the ideological bias of the report', pronunciation: 'lah seh-lehk-see-OHN deh FWEHN-tehs reh-BEH-lah ehl SEHS-goh', category: 'critical-reading', audio: 'seleccion-de-fuentes' },
  { spanish: 'El encuadre mediático determina cómo se presenta una historia al público', english: 'Media framing determines how a story is presented to the public', pronunciation: 'ehl ehn-kwah-DREH meh-dee-AH-tee-koh deh-tehr-MEE-nah KOH-moh', category: 'critical-reading', audio: 'encuadre-mediatico' },
  { spanish: 'La omisión de datos relevantes es tan manipuladora como la mentira directa', english: 'The omission of relevant data is as manipulative as a direct lie', pronunciation: 'lah oh-mee-see-OHN deh DAH-tohs reh-leh-BAHN-tehs ehs tahn', category: 'critical-reading', audio: 'omision-de-datos' },
  { spanish: 'El lenguaje connotativo carga las palabras de significado emocional e ideológico', english: 'Connotative language charges words with emotional and ideological meaning', pronunciation: 'ehl lehn-GWAH-heh koh-noh-tah-TEE-boh KAHR-gah lahs pah-LAH-brahs', category: 'critical-reading', audio: 'lenguaje-connotativo' },
  { spanish: 'La agenda setting decide qué temas son importantes y cuáles se ignoran', english: 'Agenda setting decides which topics are important and which are ignored', pronunciation: 'lah ah-HEHN-dah SEH-teeng deh-SEE-deh keh TEH-mahs sohn eem-pohr-TAHN-tehs', category: 'critical-reading', audio: 'agenda-setting' },
  { spanish: 'La triangulación de fuentes requiere al menos tres fuentes independientes para confirmar un hecho', english: 'Source triangulation requires at least three independent sources to confirm a fact', pronunciation: 'lah tree-ahn-goo-lah-see-OHN deh FWEHN-tehs reh-kee-EH-reh', category: 'critical-reading', audio: 'triangulacion-de-fuentes' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L73PhraseByAudio = phraseByAudio

// === BIAS DETECTOR (unique activity) ===

export interface BiasDetectorChallenge {
  headline: string
  english: string
  correctBias: string
  options: string[]
}

export const BIAS_DETECTOR_CHALLENGES: BiasDetectorChallenge[] = [
  {
    headline: '"Si no aprobamos esta ley, el país entero colapsará en menos de un año"',
    english: '"If we don\'t pass this law, the entire country will collapse in less than a year"',
    correctBias: 'Pendiente resbaladiza',
    options: ['Pendiente resbaladiza', 'Falsa equivalencia', 'Ad hominem', 'Generalización apresurada'],
  },
  {
    headline: '"No escuchen al senador García — fue expulsado de la universidad hace 20 años"',
    english: '"Don\'t listen to Senator García — he was expelled from university 20 years ago"',
    correctBias: 'Ad hominem',
    options: ['Sesgo de confirmación', 'Ad hominem', 'Hombre de paja', 'Efecto bandwagon'],
  },
  {
    headline: '"Tres vecinos de mi calle perdieron su empleo, así que la economía está destruida"',
    english: '"Three neighbors on my street lost their jobs, so the economy is destroyed"',
    correctBias: 'Generalización apresurada',
    options: ['Apelación a la emoción', 'Falsa dicotomía', 'Generalización apresurada', 'Pendiente resbaladiza'],
  },
  {
    headline: '"Piensen en los niños hambrientos antes de votar en contra de este presupuesto"',
    english: '"Think of the hungry children before voting against this budget"',
    correctBias: 'Apelación a la emoción',
    options: ['Apelación a la emoción', 'Hombre de paja', 'Sesgo de anclaje', 'Falsa equivalencia'],
  },
  {
    headline: '"El candidato dice que quiere mejorar la educación, o sea que quiere adoctrinar a nuestros hijos"',
    english: '"The candidate says he wants to improve education, meaning he wants to indoctrinate our children"',
    correctBias: 'Hombre de paja',
    options: ['Ad hominem', 'Pendiente resbaladiza', 'Hombre de paja', 'Argumento de autoridad'],
  },
  {
    headline: '"O estás con nosotros o estás contra el progreso del país"',
    english: '"Either you are with us or you are against the country\'s progress"',
    correctBias: 'Falsa dicotomía',
    options: ['Falsa dicotomía', 'Efecto bandwagon', 'Generalización apresurada', 'Apelación a la emoción'],
  },
  {
    headline: '"El 90% de los encuestados apoya la medida, así que debe ser la decisión correcta"',
    english: '"90% of respondents support the measure, so it must be the right decision"',
    correctBias: 'Efecto bandwagon',
    options: ['Sesgo de confirmación', 'Argumento de autoridad', 'Falsa equivalencia', 'Efecto bandwagon'],
  },
]

// === LESSON DATA ===

export const L73Data: LessonData = {
  id: 'L7.3',
  hero: {
    lessonId: 'L7.3',
    title: 'Media Literacy & Critical Analysis',
    subtitle: 'Detecting bias, propaganda, and misinformation in Spanish-language media',
    description: 'Develop the vocabulary and analytical tools to critically evaluate media in Spanish. Learn to identify bias techniques, distinguish editorial from news, recognize clickbait, detect fake news, and read between the lines of any article or broadcast.',
    image: '/images/L7.3/L7.3.jpg',
    gradient: 'from-orange-800/65 via-red-700/55 to-rose-700/65',
    accentColor: 'orange-200',
  },

  objectives: [
    { icon: '🔍', title: 'Bias Techniques', desc: 'Identify logical fallacies and propaganda techniques: ad hominem, straw man, slippery slope, false equivalence.' },
    { icon: '📰', title: 'Media Vocabulary', desc: 'Master journalism terminology: editorial, crónica, reportaje, corresponsal, rueda de prensa, línea editorial.' },
    { icon: '🛡️', title: 'Fake News Detection', desc: 'Learn to verify sources, cross-reference information, spot clickbait, and understand algorithmic bias.' },
    { icon: '🧠', title: 'Critical Reading', desc: 'Analyze author intent, tone, target audience, political subtext, and media framing in Spanish texts.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.4', label: 'News Vocabulary', detail: 'L4.4 introduced basic news terms (noticia, periódico). Now master advanced media vocabulary: editorial, crónica, reportaje de investigación.' },
    { fromLesson: 'L5.4', label: 'Argumentation', detail: 'L5.4 covered constructing arguments. Now learn to deconstruct them: identify fallacies, biases, and persuasion techniques.' },
    { fromLesson: 'L6.2', label: 'Literary Analysis', detail: 'L6.2 taught literary criticism tools. Now apply the same analytical lens to news articles, editorials, and social media.' },
  ],

  sectionTransitions: [
    { afterSection: 'bias-techniques', text: 'You can spot logical fallacies! Now let\'s learn the vocabulary of professional journalism.' },
    { afterSection: 'media-vocabulary', text: 'You know your editorials from your crónicas! Time to learn how to detect fake news.' },
    { afterSection: 'fake-news-detection', text: 'Excellent detection skills! Now let\'s dive into critical reading — analyzing what\'s between the lines.' },
    { afterSection: 'dialogues', text: 'Great discussions about media! Let\'s explore how journalism works across Latin America.' },
    { afterSection: 'cultural', text: 'Now put your bias-detection skills to the test!' },
    { afterSection: 'bias-detector', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'El sesgo de...', english: 'The bias of...' },
    { spanish: 'Se puede inferir que...', english: 'One can infer that...' },
    { spanish: 'La intención del autor es...', english: 'The author\'s intention is...' },
    { spanish: 'Este artículo carece de...', english: 'This article lacks...' },
    { spanish: 'La evidencia sugiere que...', english: 'The evidence suggests that...' },
    { spanish: 'Es necesario verificar...', english: 'It is necessary to verify...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La desinformación se propaga más rápido que la verdad', pronunciation: 'lah dehs-een-fohr-mah-see-OHN seh proh-PAH-gah mahs RRAH-pee-doh keh lah behr-DAHD', english: 'Disinformation spreads faster than the truth', audio: 'la-desinformacion-se-propaga-mas-rapido-que-la-verdad', tip: '"Desinformación" (disinformation) is intentionally false. "Malinformación" (malinformation) is real info used out of context. Both are dangerous!' },
    { spanish: 'El sesgo de confirmación nos impide ver la realidad objetivamente', pronunciation: 'ehl SEHS-goh deh kohn-feer-mah-see-OHN nohs eem-PEE-deh behr lah reh-ah-lee-DAHD', english: 'Confirmation bias prevents us from seeing reality objectively', audio: 'el-sesgo-de-confirmacion-nos-impide-ver-la-realidad-objetivamente', tip: '"Sesgo" (bias/skew) is a key term in media literacy. It comes from the Latin "sesgare" — to cut diagonally.' },
    { spanish: 'La cámara de eco refuerza nuestras creencias preexistentes', pronunciation: 'lah KAH-mah-rah deh EH-koh reh-FWEHR-sah NWEHS-trahs kreh-EHN-see-ahs preh-ehk-sees-TEHN-tehs', english: 'The echo chamber reinforces our preexisting beliefs', audio: 'la-camara-de-eco-refuerza-nuestras-creencias-preexistentes', tip: '"Cámara de eco" is a calque from English. In Latin American media criticism, you\'ll also hear "burbuja informativa" (information bubble).' },
    { spanish: 'El reportaje de investigación requiere contrastar múltiples fuentes', pronunciation: 'ehl reh-pohr-TAH-heh deh een-behs-tee-gah-see-OHN reh-kee-EH-reh kohn-trahs-TAHR', english: 'Investigative reporting requires cross-referencing multiple sources', audio: 'el-reportaje-de-investigacion-requiere-contrastar-multiples-fuentes', tip: '"Reportaje" (feature report) vs "noticia" (news story): a reportaje is longer, more in-depth, and often includes analysis.' },
    { spanish: 'El encuadre mediático determina cómo percibimos los eventos', pronunciation: 'ehl ehn-kwah-DREH meh-dee-AH-tee-koh deh-tehr-MEE-nah KOH-moh pehr-see-BEE-mohs', english: 'Media framing determines how we perceive events', audio: 'el-encuadre-mediatico-determina-como-percibimos-los-eventos', tip: '"Encuadre" literally means "framing" (from "cuadro" = frame). In journalism, it refers to how a story is angled and presented.' },
    { spanish: 'La triangulación de fuentes es esencial para el periodismo riguroso', pronunciation: 'lah tree-ahn-goo-lah-see-OHN deh FWEHN-tehs ehs eh-sehn-see-AHL pah-rah ehl peh-ree-oh-DEES-moh', english: 'Source triangulation is essential for rigorous journalism', audio: 'la-triangulacion-de-fuentes-es-esencial-para-el-periodismo-riguroso', tip: '"Triangulación" in journalism means using at least three independent sources. It\'s considered the gold standard of verification.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'bias-techniques', label: 'Bias Techniques' },
    { id: 'media-vocabulary', label: 'Media Vocabulary' },
    { id: 'fake-news-detection', label: 'Fake News Detection' },
    { id: 'critical-reading', label: 'Critical Reading' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Concept Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'bias-detector', label: 'Bias Detector' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'bias-techniques',
      title: 'Bias Techniques — Técnicas de Sesgo',
      description: 'Logical fallacies and propaganda techniques used to manipulate public opinion. Learn to identify them in headlines, speeches, and social media.',
      tabs: [
        { label: 'Logical Fallacies', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'bias-techniques').slice(0, 6) },
        { label: 'Cognitive Biases', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'bias-techniques').slice(6) },
      ],
    },
    {
      id: 'media-vocabulary',
      title: 'Media Vocabulary — Vocabulario Mediático',
      description: 'The professional terminology of journalism: genres, roles, and structures that shape how news reaches you.',
      tabs: [
        { label: 'News Formats', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'media-vocabulary').slice(0, 6) },
        { label: 'Journalism Roles & Terms', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'media-vocabulary').slice(6) },
      ],
    },
    {
      id: 'fake-news-detection',
      title: 'Fake News Detection — Detección de Noticias Falsas',
      description: 'Tools and techniques to verify information, spot manipulation, and navigate the digital information landscape.',
      tabs: [
        { label: 'Verification Methods', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'fake-news-detection').slice(0, 6) },
        { label: 'Digital Threats', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'fake-news-detection').slice(6) },
      ],
    },
    {
      id: 'critical-reading',
      title: 'Critical Reading — Lectura Crítica',
      description: 'Analytical phrases for dissecting texts: identifying author intent, tone, audience, subtext, and framing.',
      tabs: [
        { label: 'Author Analysis', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'critical-reading').slice(0, 6) },
        { label: 'Media Analysis', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'critical-reading').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Media Terminology: Latin Roots',
      content: 'Many media literacy terms in Spanish come from Latin and are cognates with English: "editorial" (editorial), "corresponsal" (correspondent), "desinformación" (disinformation). The pronunciation follows Spanish rules: stress the penultimate syllable if ending in a vowel, -n, or -s. Words like "editorial" (eh-dee-toh-ree-AHL) stress the last syllable because they end in -l.',
      example: 'editorial (eh-dee-toh-ree-AHL) | corresponsal (koh-rrehs-pohn-SAHL) | información (een-fohr-mah-see-OHN)',
    },
    {
      title: 'The "Sesgo" Family of Words',
      content: 'The word "sesgo" (bias/skew) is fundamental to media literacy. It generates useful phrases: "sesgo de confirmación" (confirmation bias), "sesgo algorítmico" (algorithmic bias), "sesgo ideológico" (ideological bias). In all cases, "sesgo" is pronounced SEHS-goh with a hard "g" sound.',
      example: 'Sesgo de confirmación | Sesgo algorítmico | Sesgo mediático | Sin sesgo (unbiased)',
      reviewFrom: 'L5.4',
    },
    {
      title: 'Distinguishing Similar Terms',
      content: '"Noticia" (news story) vs "editorial" (opinion piece) vs "crónica" (chronicle/feature) vs "reportaje" (in-depth report). These four genres represent increasing depth and analysis. A "noticia" reports facts. An "editorial" gives opinion. A "crónica" narrates with literary style. A "reportaje" investigates in depth.',
      example: 'La noticia informa, el editorial opina, la crónica narra, el reportaje investiga.',
      reviewFrom: 'L4.4',
    },
    {
      title: 'Fallacy Names in Spanish',
      content: 'Most fallacy names are borrowed from Latin or translated literally: "ad hominem" (against the person), "hombre de paja" (straw man), "pendiente resbaladiza" (slippery slope), "falsa equivalencia" (false equivalence). The Latin terms like "ad hominem" keep their original pronunciation in Spanish conversation.',
      example: 'Falacia ad hominem | Falacia del hombre de paja | Falsa dicotomía | Petición de principio',
    },
  ],

  flashcardGroups: [
    {
      key: 'bias',
      label: 'Bias Techniques',
      audioKeys: ['sesgo-de-confirmacion', 'falacia-ad-hominem', 'apelacion-a-la-emocion', 'generalizacion-apresurada', 'hombre-de-paja', 'pendiente-resbaladiza', 'falsa-equivalencia', 'sesgo-de-anclaje', 'falacia-del-jugador', 'argumento-de-autoridad', 'falsa-dicotomia', 'efecto-bandwagon'],
    },
    {
      key: 'media',
      label: 'Media & Journalism',
      audioKeys: ['titular-sensacionalista', 'fuente-anonima', 'nota-de-prensa', 'editorial-refleja-opinion', 'cronica-combina-narracion', 'reportaje-de-investigacion', 'corresponsal-en-el-extranjero', 'enviado-especial', 'rueda-de-prensa', 'linea-editorial', 'columna-de-opinion', 'pie-de-foto'],
    },
    {
      key: 'detection-critical',
      label: 'Detection & Critical Reading',
      audioKeys: ['verificar-fuentes', 'contrastar-informacion', 'dato-vs-opinion', 'desinformacion-vs-malinformacion', 'bulo-fake-news', 'sesgo-algoritmico', 'camara-de-eco', 'el-autor-implica-que', 'se-puede-inferir-que', 'el-tono-del-articulo', 'encuadre-mediatico', 'agenda-setting'],
    },
  ],

  matchPairs: [
    { left: 'Sesgo de confirmación', right: 'Confirmation bias' },
    { left: 'Hombre de paja', right: 'Straw man fallacy' },
    { left: 'Cámara de eco', right: 'Echo chamber' },
    { left: 'Reportaje de investigación', right: 'Investigative report' },
    { left: 'Rueda de prensa', right: 'Press conference' },
    { left: 'Encuadre mediático', right: 'Media framing' },
    { left: 'Clickbait', right: 'Misleading headlines for clicks' },
    { left: 'Desinformación', right: 'Deliberately false information' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Fact vs. Opinion',
      instruction: 'Is this a verifiable fact or a subjective opinion?',
      buckets: ['Fact (Dato)', 'Opinion (Opinión)'],
      items: [
        { text: 'El artículo fue publicado el 15 de marzo', bucket: 'Fact (Dato)' },
        { text: 'La rueda de prensa duró 45 minutos', bucket: 'Fact (Dato)' },
        { text: 'El corresponsal envió su informe desde Bogotá', bucket: 'Fact (Dato)' },
        { text: 'La ley fue aprobada con 67 votos a favor', bucket: 'Fact (Dato)' },
        { text: 'Este editorial es el mejor análisis del tema', bucket: 'Opinion (Opinión)' },
        { text: 'La medida es claramente perjudicial para todos', bucket: 'Opinion (Opinión)' },
        { text: 'El gobierno debería cambiar su estrategia', bucket: 'Opinion (Opinión)' },
        { text: 'Es obvio que el periodista tiene razón', bucket: 'Opinion (Opinión)' },
      ],
    },
    {
      title: 'News vs. Editorial',
      instruction: 'Does this belong in a news report (noticia) or an editorial (editorial)?',
      buckets: ['News Report (Noticia)', 'Editorial (Opinión)'],
      items: [
        { text: 'El presidente firmó la ley ayer a las 3 PM', bucket: 'News Report (Noticia)' },
        { text: 'Según el ministerio, 500 personas fueron afectadas', bucket: 'News Report (Noticia)' },
        { text: 'El senador declaró que votará en contra', bucket: 'News Report (Noticia)' },
        { text: 'Las cifras muestran un aumento del 12%', bucket: 'News Report (Noticia)' },
        { text: 'Creemos que esta política es un grave error', bucket: 'Editorial (Opinión)' },
        { text: 'Es hora de que los ciudadanos exijan cambios', bucket: 'Editorial (Opinión)' },
        { text: 'Esta decisión refleja una falta de visión', bucket: 'Editorial (Opinión)' },
        { text: 'Nos parece inaceptable la inacción del gobierno', bucket: 'Editorial (Opinión)' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Concept Sorting',

  dialogues: [
    {
      id: 'dialogue-journalism-class',
      title: 'Journalism Class Discussion — Madrid',
      location: 'Madrid',
      lines: [
        { speaker: 'Profesora Vega', text: 'Hoy analizaremos cómo los medios construyen la realidad. ¿Alguien puede darme un ejemplo de sesgo mediático?', audio: '/audio/L7.3/phrases/d1-line1.mp3' },
        { speaker: 'Alejandro', text: 'Ayer vi un titular que decía "Desastre total en la economía" pero el artículo solo hablaba de una caída del 0.3%.', audio: '/audio/L7.3/phrases/d1-line2.mp3' },
        { speaker: 'Profesora Vega', text: 'Excelente ejemplo de titular sensacionalista. ¿Qué falacia detectas ahí, Lucía?', audio: '/audio/L7.3/phrases/d1-line3.mp3' },
        { speaker: 'Lucía', text: 'Es una generalización apresurada. Usan un dato menor para sacar una conclusión enorme.', audio: '/audio/L7.3/phrases/d1-line4.mp3', annotations: [{ phrase: 'generalización apresurada', fromLesson: 'L5.4', note: 'Argumentation vocabulary from L5.4' }] },
        { speaker: 'Profesora Vega', text: 'Exacto. Y también hay apelación a la emoción con la palabra "desastre". Ahora, ¿cómo verificaríamos esta noticia?', audio: '/audio/L7.3/phrases/d1-line5.mp3' },
        { speaker: 'Alejandro', text: 'Primero, buscaría la fuente original de los datos económicos. Luego contrastaría con al menos dos medios más.', audio: '/audio/L7.3/phrases/d1-line6.mp3' },
        { speaker: 'Lucía', text: '¿Y no deberíamos revisar quién es el dueño del periódico? La línea editorial puede explicar el sesgo.', audio: '/audio/L7.3/phrases/d1-line7.mp3' },
        { speaker: 'Profesora Vega', text: '¡Brillante! La propiedad mediática es clave. En España, los grandes grupos mediáticos tienen vínculos políticos claros.', audio: '/audio/L7.3/phrases/d1-line8.mp3' },
        { speaker: 'Alejandro', text: '¿Es posible encontrar un medio completamente objetivo?', audio: '/audio/L7.3/phrases/d1-line9.mp3' },
        { speaker: 'Profesora Vega', text: 'La objetividad absoluta no existe. Lo importante es ser consciente de los sesgos y leer críticamente.', audio: '/audio/L7.3/phrases/d1-line10.mp3' },
        { speaker: 'Lucía', text: 'Entonces, ¿el lector también tiene sesgo de confirmación al elegir qué medios consume?', audio: '/audio/L7.3/phrases/d1-line11.mp3' },
        { speaker: 'Profesora Vega', text: 'Absolutamente. Las redes sociales y los algoritmos crean cámaras de eco. Por eso hay que buscar fuentes diversas.', audio: '/audio/L7.3/phrases/d1-line12.mp3' },
        { speaker: 'Alejandro', text: '¿Y qué papel juegan los verificadores de datos como Maldita.es o Newtral?', audio: '/audio/L7.3/phrases/d1-line13.mp3' },
        { speaker: 'Profesora Vega', text: 'Son esenciales. El fact-checking profesional ha demostrado ser una herramienta vital contra la desinformación.', audio: '/audio/L7.3/phrases/d1-line14.mp3' },
        { speaker: 'Lucía', text: 'Me parece que la alfabetización mediática debería enseñarse desde la escuela primaria.', audio: '/audio/L7.3/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-fact-checkers',
      title: 'Fact-Checkers at Work — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Martín', text: '¿Viste este viral que dice que Argentina va a prohibir las redes sociales para menores?', audio: '/audio/L7.3/phrases/d2-line1.mp3' },
        { speaker: 'Carolina', text: 'Sí, lo estamos verificando. El titular es puro clickbait. La propuesta real es muy diferente.', audio: '/audio/L7.3/phrases/d2-line2.mp3' },
        { speaker: 'Martín', text: '¿Cuál es la diferencia entre lo que dice el titular y lo que dice el proyecto de ley?', audio: '/audio/L7.3/phrases/d2-line3.mp3' },
        { speaker: 'Carolina', text: 'El proyecto propone verificación de edad, no una prohibición. Es un caso clásico de hombre de paja mediático.', audio: '/audio/L7.3/phrases/d2-line4.mp3', annotations: [{ phrase: 'hombre de paja', fromLesson: 'L5.4', note: 'Argumentation fallacy from L5.4' }] },
        { speaker: 'Martín', text: '¿Y cómo procedemos? ¿Buscamos la fuente original?', audio: '/audio/L7.3/phrases/d2-line5.mp3' },
        { speaker: 'Carolina', text: 'Ya la tengo. El texto completo está en el Boletín Oficial. Compará vos mismo: nada de "prohibición".', audio: '/audio/L7.3/phrases/d2-line6.mp3' },
        { speaker: 'Martín', text: '¿Y las imágenes del artículo? Parecen sacadas de contexto.', audio: '/audio/L7.3/phrases/d2-line7.mp3' },
        { speaker: 'Carolina', text: 'Sí, hice una búsqueda inversa de imagen. La foto es de una protesta de 2023 en otro país.', audio: '/audio/L7.3/phrases/d2-line8.mp3' },
        { speaker: 'Martín', text: 'Increíble. La desinformación visual es cada vez más sofisticada. ¿Y los comentarios?', audio: '/audio/L7.3/phrases/d2-line9.mp3' },
        { speaker: 'Carolina', text: 'Muchas cuentas que lo comparten tienen patrones de bots: cuentas nuevas, nombres genéricos, publicaciones masivas.', audio: '/audio/L7.3/phrases/d2-line10.mp3' },
        { speaker: 'Martín', text: '¿Publicamos la verificación como "falso" o como "engañoso"?', audio: '/audio/L7.3/phrases/d2-line11.mp3' },
        { speaker: 'Carolina', text: 'Como "engañoso". El proyecto existe, pero la representación es completamente distorsionada. Esa es la categoría correcta.', audio: '/audio/L7.3/phrases/d2-line12.mp3' },
        { speaker: 'Martín', text: 'La verdad está en los matices. Nuestro trabajo es mostrar esos matices que los titulares ignoran.', audio: '/audio/L7.3/phrases/d2-line13.mp3' },
        { speaker: 'Carolina', text: 'Exacto. Y por eso la triangulación de fuentes es nuestro estándar de oro. Mínimo tres fuentes independientes.', audio: '/audio/L7.3/phrases/d2-line14.mp3' },
        { speaker: 'Martín', text: 'Bueno, publiquemos. Ojalá que la verificación circule tanto como el bulo original.', audio: '/audio/L7.3/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Analyze media bias in a journalism class in Madrid and follow fact-checkers as they debunk a viral story in Buenos Aires.',

  culturalNotes: [
    {
      title: 'The Media Landscape in Latin America',
      content: 'Latin American media is characterized by high concentration of ownership. In Mexico, Televisa and TV Azteca dominated television for decades. In Argentina, Grupo Clarín controls newspapers, TV, cable, and internet. In Brazil, Globo is a media empire. This concentration means that a few families and corporations shape the information millions receive. The phrase "los dueños de la información" (the owners of information) is commonly used in media criticism. Understanding this landscape is essential for critical media consumption in Spanish — when you read a headline, asking "¿quién es el dueño de este medio?" (who owns this outlet?) is a fundamental first step.',
    },
    {
      title: 'Press Freedom Challenges in the Spanish-Speaking World',
      content: 'Mexico is one of the most dangerous countries in the world for journalists, with dozens killed or disappeared in recent decades. In Central America, Honduras and Guatemala face similar threats. Cuba and Venezuela have severe press restrictions. Spain and Uruguay consistently rank highest for press freedom in the Spanish-speaking world. Organizations like Artículo 19 (named after the Universal Declaration\'s free speech article), Reporteros Sin Fronteras, and FLIP (Colombia) fight for journalists\' safety. The phrase "periodismo bajo amenaza" (journalism under threat) is tragically common in regional discourse.',
    },
    {
      title: 'The Rise of Digital Journalism and Fact-Checking',
      content: 'A new generation of digital-native media has transformed Spanish-language journalism. In Spain, elDiario.es and Maldita.es lead in investigative and fact-checking journalism. In Argentina, Chequeado pioneered fact-checking in Latin America. In Mexico, Animal Político and Verificado offer independent coverage. These outlets often survive on reader subscriptions and grants rather than advertising, giving them editorial independence. The culture of "verificación de datos" (fact-checking) is growing rapidly, with international organizations like the IFCN certifying fact-checkers across the region. Social media has also given rise to citizen journalism — "periodismo ciudadano" — where ordinary people document events that traditional media might ignore.',
    },
  ],
  culturalGradient: 'from-orange-50 to-red-50',

  quiz: [
    { id: 1, type: 'mc', text: 'A "falacia ad hominem" attacks:', options: ['The argument\'s logic', 'The person making the argument', 'The evidence presented', 'The audience'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "El sesgo de ___ nos hace buscar solo información que confirme nuestras creencias"', answer: 'confirmación' },
    { id: 3, type: 'mc', text: '"Pendiente resbaladiza" predicts:', options: ['A single negative outcome', 'A catastrophic chain of events without evidence', 'An economic downturn', 'A logical conclusion'], answer: 1 },
    { id: 4, type: 'tf', text: 'An "editorial" reflects the outlet\'s opinion, not necessarily objective facts.', answer: true },
    { id: 5, type: 'mc', text: 'What is the difference between "desinformación" and "malinformación"?', options: ['They are the same thing', 'Desinformación is deliberate; malinformación uses real facts out of context', 'Malinformación is more dangerous', 'Desinformación is only online'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "La ___ de eco refuerza nuestras ideas al exponernos solo a opiniones similares"', answer: 'cámara' },
    { id: 7, type: 'mc', text: '"Triangulación de fuentes" requires:', options: ['Two agreeing sources', 'At least three independent sources', 'A government source', 'An anonymous source'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what does Profesora Vega say about absolute objectivity?', options: ['It is the journalist\'s duty', 'It does not exist', 'Only public media achieves it', 'It is required by law'], answer: 1 },
    { id: 9, type: 'tf', text: '"Clickbait" uses misleading headlines to generate clicks without offering substantial content.', answer: true },
    { id: 10, type: 'mc', text: '"Encuadre mediático" refers to:', options: ['The newspaper\'s layout', 'How a story is angled and presented', 'The journalist\'s salary', 'The printing process'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "El hombre de ___ distorsiona la posición del oponente"', answer: 'paja' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, how did Carolina verify the viral photo?', options: ['Called the photographer', 'Reverse image search', 'Asked the government', 'Checked social media comments'], answer: 1 },
    { id: 13, type: 'mc', text: 'A "crónica" in journalism is:', options: ['A short news bulletin', 'A narrative combining facts with literary style', 'An editorial opinion', 'A press release'], answer: 1 },
    { id: 14, type: 'tf', text: 'In Latin America, media ownership is highly concentrated, with a few groups controlling most outlets.', answer: true },
    { id: 15, type: 'mc', text: '"Sesgo algorítmico" refers to:', options: ['A mathematical error', 'Content filtering based on user preferences', 'A type of computer virus', 'A coding language'], answer: 1 },
  ],

  audioBase: '/audio/L7.3/phrases',

  uniqueActivity: {
    id: 'BiasDetectorL73',
    sectionId: 'bias-detector',
    sectionColor: 'bg-orange-50/40',
    sectionBorder: 'border-orange-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'bias-techniques': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'media-vocabulary': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'fake-news-detection': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'critical-reading': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'bias-detector': { bg: 'bg-orange-50/40', border: 'border-orange-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
