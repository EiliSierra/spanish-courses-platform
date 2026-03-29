import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Wishes / Deseos (10) ===
  { spanish: 'Quiero que vengas a mi fiesta', english: 'I want you to come to my party', pronunciation: 'kee-EH-roh keh BEHN-gahs ah mee fee-EHS-tah', category: 'wishes', audio: 'quiero-que-vengas' },
  { spanish: 'Espero que estés bien', english: 'I hope you are well', pronunciation: 'ehs-PEH-roh keh ehs-TEHS bee-EHN', category: 'wishes', audio: 'espero-que-estes-bien' },
  { spanish: 'Deseo que seas feliz', english: 'I wish you to be happy', pronunciation: 'deh-SEH-oh keh SEH-ahs feh-LEES', category: 'wishes', audio: 'deseo-que-seas-feliz' },
  { spanish: 'Quiero que aprendas español', english: 'I want you to learn Spanish', pronunciation: 'kee-EH-roh keh ah-PREHN-dahs ehs-pah-NYOHL', category: 'wishes', audio: 'quiero-que-aprendas' },
  { spanish: 'Espero que tengas un buen día', english: 'I hope you have a good day', pronunciation: 'ehs-PEH-roh keh TEHN-gahs oon bwehn DEE-ah', category: 'wishes', audio: 'espero-que-tengas' },
  { spanish: 'Ojalá que llueva mañana', english: 'I hope it rains tomorrow', pronunciation: 'oh-hah-LAH keh YWEH-bah mah-NYAH-nah', category: 'wishes', audio: 'ojala-que-llueva' },
  { spanish: 'Necesito que me ayudes', english: 'I need you to help me', pronunciation: 'neh-seh-SEE-toh keh meh ah-YOO-dehs', category: 'wishes', audio: 'necesito-que-me-ayudes' },
  { spanish: 'Quiero que hables con él', english: 'I want you to talk to him', pronunciation: 'kee-EH-roh keh AH-blehs kohn ehl', category: 'wishes', audio: 'quiero-que-hables' },
  { spanish: 'Espero que podamos ir juntos', english: 'I hope we can go together', pronunciation: 'ehs-PEH-roh keh poh-DAH-mohs eer HOON-tohs', category: 'wishes', audio: 'espero-que-podamos' },
  { spanish: 'Deseo que todo salga bien', english: 'I wish everything goes well', pronunciation: 'deh-SEH-oh keh TOH-doh SAHL-gah bee-EHN', category: 'wishes', audio: 'deseo-que-todo-salga' },

  // === Recommendations / Recomendaciones (10) ===
  { spanish: 'Es importante que estudies', english: 'It is important that you study', pronunciation: 'ehs eem-pohr-TAHN-teh keh ehs-TOO-dee-ehs', category: 'recommendations', audio: 'es-importante-que-estudies' },
  { spanish: 'Te sugiero que vayas al doctor', english: 'I suggest you go to the doctor', pronunciation: 'teh soo-HIEH-roh keh BAH-yahs ahl dohk-TOHR', category: 'recommendations', audio: 'te-sugiero-que-vayas' },
  { spanish: 'Es mejor que comas frutas', english: 'It is better that you eat fruits', pronunciation: 'ehs meh-HOHR keh KOH-mahs FROO-tahs', category: 'recommendations', audio: 'es-mejor-que-comas' },
  { spanish: 'Te recomiendo que duermas más', english: 'I recommend you sleep more', pronunciation: 'teh reh-koh-mee-EHN-doh keh DWEHR-mahs mahs', category: 'recommendations', audio: 'te-recomiendo-que-duermas' },
  { spanish: 'Es necesario que practiques', english: 'It is necessary that you practice', pronunciation: 'ehs neh-seh-SAH-ree-oh keh prahk-TEE-kehs', category: 'recommendations', audio: 'es-necesario-que-practiques' },
  { spanish: 'Te aconsejo que ahorres dinero', english: 'I advise you to save money', pronunciation: 'teh ah-kohn-SEH-hoh keh ah-OH-rrehs dee-NEH-roh', category: 'recommendations', audio: 'te-aconsejo-que-ahorres' },
  { spanish: 'Es bueno que hagas ejercicio', english: 'It is good that you exercise', pronunciation: 'ehs BWEH-noh keh AH-gahs eh-hehr-SEE-see-oh', category: 'recommendations', audio: 'es-bueno-que-hagas' },
  { spanish: 'Sugiero que llames a tu mamá', english: 'I suggest you call your mom', pronunciation: 'soo-HIEH-roh keh YAH-mehs ah too mah-MAH', category: 'recommendations', audio: 'sugiero-que-llames' },
  { spanish: 'Es preferible que salgas temprano', english: 'It is preferable that you leave early', pronunciation: 'ehs preh-feh-REE-bleh keh SAHL-gahs tehm-PRAH-noh', category: 'recommendations', audio: 'es-preferible-que-salgas' },
  { spanish: 'Te pido que tengas paciencia', english: 'I ask you to have patience', pronunciation: 'teh PEE-doh keh TEHN-gahs pah-see-EHN-see-ah', category: 'recommendations', audio: 'te-pido-que-tengas' },

  // === Emotions / Emociones (10) ===
  { spanish: 'Me alegra que estés aquí', english: 'I am glad you are here', pronunciation: 'meh ah-LEH-grah keh ehs-TEHS ah-KEE', category: 'emotions', audio: 'me-alegra-que-estes' },
  { spanish: 'Me preocupa que no duermas', english: 'It worries me that you do not sleep', pronunciation: 'meh preh-oh-KOO-pah keh noh DWEHR-mahs', category: 'emotions', audio: 'me-preocupa-que-no-duermas' },
  { spanish: 'Es triste que se vaya', english: 'It is sad that he/she is leaving', pronunciation: 'ehs TREES-teh keh seh BAH-yah', category: 'emotions', audio: 'es-triste-que-se-vaya' },
  { spanish: 'Me molesta que llegues tarde', english: 'It bothers me that you arrive late', pronunciation: 'meh moh-LEHS-tah keh YEH-gehs TAHR-deh', category: 'emotions', audio: 'me-molesta-que-llegues' },
  { spanish: 'Me sorprende que hables tan bien', english: 'It surprises me that you speak so well', pronunciation: 'meh sohr-PREHN-deh keh AH-blehs tahn bee-EHN', category: 'emotions', audio: 'me-sorprende-que-hables' },
  { spanish: 'Es una lástima que no puedas ir', english: 'It is a shame you cannot go', pronunciation: 'ehs OO-nah LAHS-tee-mah keh noh PWEH-dahs eer', category: 'emotions', audio: 'es-una-lastima-que-no-puedas' },
  { spanish: 'Me encanta que cocines así', english: 'I love that you cook like that', pronunciation: 'meh ehn-KAHN-tah keh koh-SEE-nehs ah-SEE', category: 'emotions', audio: 'me-encanta-que-cocines' },
  { spanish: 'Tengo miedo de que se pierda', english: 'I am afraid it will get lost', pronunciation: 'TEHN-goh mee-EH-doh deh keh seh pee-EHR-dah', category: 'emotions', audio: 'tengo-miedo-de-que-se-pierda' },
  { spanish: 'Me frustra que no entiendas', english: 'It frustrates me that you do not understand', pronunciation: 'meh FROOS-trah keh noh ehn-tee-EHN-dahs', category: 'emotions', audio: 'me-frustra-que-no-entiendas' },
  { spanish: 'Estoy feliz de que estemos juntos', english: 'I am happy that we are together', pronunciation: 'ehs-TOY feh-LEES deh keh ehs-TEH-mohs HOON-tohs', category: 'emotions', audio: 'estoy-feliz-de-que-estemos' },

  // === Doubt / Duda (8) ===
  { spanish: 'Dudo que llueva hoy', english: 'I doubt it will rain today', pronunciation: 'DOO-doh keh YWEH-bah oy', category: 'doubt', audio: 'dudo-que-llueva' },
  { spanish: 'No creo que sea verdad', english: 'I do not think it is true', pronunciation: 'noh KREH-oh keh SEH-ah behr-DAHD', category: 'doubt', audio: 'no-creo-que-sea-verdad' },
  { spanish: 'Es posible que venga mañana', english: 'It is possible he/she comes tomorrow', pronunciation: 'ehs poh-SEE-bleh keh BEHN-gah mah-NYAH-nah', category: 'doubt', audio: 'es-posible-que-venga' },
  { spanish: 'No estoy seguro de que funcione', english: 'I am not sure it works', pronunciation: 'noh ehs-TOY seh-GOO-roh deh keh foon-see-OH-neh', category: 'doubt', audio: 'no-estoy-seguro-que-funcione' },
  { spanish: 'Es probable que lleguen tarde', english: 'It is likely they arrive late', pronunciation: 'ehs proh-BAH-bleh keh YEH-gehn TAHR-deh', category: 'doubt', audio: 'es-probable-que-lleguen' },
  { spanish: 'Tal vez tenga razón', english: 'Maybe he/she is right', pronunciation: 'tahl behs TEHN-gah rrah-SOHN', category: 'doubt', audio: 'tal-vez-tenga-razon' },
  { spanish: 'No es seguro que haya tiempo', english: 'It is not certain there is time', pronunciation: 'noh ehs seh-GOO-roh keh AH-yah tee-EHM-poh', category: 'doubt', audio: 'no-es-seguro-que-haya' },
  { spanish: 'Quizás pueda ayudarte', english: 'Perhaps I can help you', pronunciation: 'kee-SAHS PWEH-dah ah-yoo-DAHR-teh', category: 'doubt', audio: 'quizas-pueda-ayudarte' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L42PhraseByAudio = phraseByAudio

// === SUBJUNCTIVE DETECTOR (unique activity) ===

export interface SubjunctiveChallenge {
  sentence: string
  english: string
  correctMood: 'indicative' | 'subjunctive'
  explanation: string
}

export const SUBJUNCTIVE_CHALLENGES: SubjunctiveChallenge[] = [
  {
    sentence: 'Quiero que estudies más.',
    english: 'I want you to study more.',
    correctMood: 'subjunctive',
    explanation: '"Quiero que..." expresses a wish about someone else\'s action. The verb after "que" (estudies) is subjunctive because it\'s not a fact — it\'s a desire.',
  },
  {
    sentence: 'Ella trabaja en un hospital.',
    english: 'She works at a hospital.',
    correctMood: 'indicative',
    explanation: 'This is a statement of fact about what she does. No wish, doubt, or emotion — just reality. Indicative mood.',
  },
  {
    sentence: 'Es importante que duermas bien.',
    english: 'It is important that you sleep well.',
    correctMood: 'subjunctive',
    explanation: '"Es importante que..." is an impersonal expression of recommendation. The action (duermas) is not confirmed — it\'s advice. Subjunctive!',
  },
  {
    sentence: 'Sé que hablas español.',
    english: 'I know you speak Spanish.',
    correctMood: 'indicative',
    explanation: '"Sé que..." (I know that...) expresses certainty. The speaker is sure about the fact. Certainty = indicative.',
  },
  {
    sentence: 'Me alegra que estés aquí.',
    english: 'I am glad you are here.',
    correctMood: 'subjunctive',
    explanation: '"Me alegra que..." expresses an emotion about a situation. Emotions trigger the subjunctive in the subordinate clause.',
  },
  {
    sentence: 'Dudo que lleguen a tiempo.',
    english: 'I doubt they will arrive on time.',
    correctMood: 'subjunctive',
    explanation: '"Dudo que..." expresses doubt. When the speaker is uncertain or doubtful, the subordinate verb (lleguen) must be subjunctive.',
  },
  {
    sentence: 'Nosotros comemos a las doce.',
    english: 'We eat at twelve.',
    correctMood: 'indicative',
    explanation: 'A simple factual statement about a routine. No desire, recommendation, emotion, or doubt. Pure indicative.',
  },
  {
    sentence: 'No creo que sea fácil.',
    english: 'I don\'t think it is easy.',
    correctMood: 'subjunctive',
    explanation: '"No creo que..." (I don\'t think that...) expresses doubt or disbelief. Negated belief triggers the subjunctive.',
  },
]

// === LESSON DATA ===

export const L42Data: LessonData = {
  id: 'L4.2',
  hero: {
    lessonId: 'L4.2',
    title: 'Subjunctive Mood — Introduction',
    subtitle: 'Expressing wishes, recommendations, emotions & doubt',
    description: 'Unlock the subjunctive mood — the key to expressing what you want, what you recommend, how you feel, and what you doubt. This is the gateway to advanced Spanish and truly natural conversation!',
    image: '/images/L4.2/L4.2.jpg',
    gradient: 'from-indigo-800/65 via-blue-700/55 to-cyan-700/65',
    accentColor: 'blue-200',
  },

  objectives: [
    { icon: '💫', title: 'Wishes & Desires', desc: 'Use "quiero que...", "espero que...", "deseo que..." to express what you want others to do.' },
    { icon: '📋', title: 'Recommendations & Advice', desc: 'Give advice with "es importante que...", "te sugiero que...", "es mejor que...".' },
    { icon: '❤️', title: 'Emotions & Reactions', desc: 'React with "me alegra que...", "me preocupa que...", "es triste que...".' },
    { icon: '🤔', title: 'Doubt & Uncertainty', desc: 'Express doubt with "dudo que...", "no creo que...", "es posible que...".' },
  ],

  priorKnowledge: [
    { fromLesson: 'L3.1', label: 'Past Tense (Preterite)', detail: 'You already know indicative past. Now you\'ll learn a completely different mood: the subjunctive.' },
    { fromLesson: 'L2.3', label: 'Making Plans (ir + a)', detail: 'L2.3 taught future plans with indicative. Subjunctive adds wishes and uncertainty to your plans.' },
    { fromLesson: 'L2.1', label: 'Health Recommendations', detail: 'L2.1 had health advice. Now you\'ll use subjunctive to give proper recommendations: "Es importante que descanses."' },
  ],

  sectionTransitions: [
    { afterSection: 'wishes', text: 'You can express wishes! Now let\'s give advice and recommendations.' },
    { afterSection: 'recommendations', text: 'Great recommendations! Let\'s add emotional reactions.' },
    { afterSection: 'emotions', text: 'Emotions mastered! Now express doubt and uncertainty.' },
    { afterSection: 'dialogues', text: 'Wonderful subjunctive conversations! Let\'s explore how it lives in culture.' },
    { afterSection: 'cultural', text: 'Now test your subjunctive detector skills!' },
    { afterSection: 'subjunctive-detector', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Quiero que...', english: 'I want (someone) to...' },
    { spanish: 'Es importante que...', english: 'It is important that...' },
    { spanish: 'Me alegra que...', english: 'I am glad that...' },
    { spanish: 'Dudo que...', english: 'I doubt that...' },
    { spanish: 'Ojalá que...', english: 'I hope / God willing...' },
    { spanish: 'Es posible que...', english: 'It is possible that...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Quiero que vengas a mi fiesta', pronunciation: 'kee-EH-roh keh BEHN-gahs ah mee fee-EHS-tah', english: 'I want you to come to my party', audio: 'quiero-que-vengas', tip: 'Notice "vengas" (subjunctive) vs. "vienes" (indicative). The -AS ending signals subjunctive for -IR/-ER verbs.' },
    { spanish: 'Es importante que estudies mucho', pronunciation: 'ehs eem-pohr-TAHN-teh keh ehs-TOO-dee-ehs MOO-choh', english: 'It is important that you study a lot', audio: 'es-importante-que-estudies', tip: '"Estudies" (subjunctive) vs. "estudias" (indicative). For -AR verbs, subjunctive uses -ES instead of -AS!' },
    { spanish: 'Me alegra que estés aquí', pronunciation: 'meh ah-LEH-grah keh ehs-TEHS ah-KEE', english: 'I am glad you are here', audio: 'me-alegra-que-estes', tip: '"Estés" is the subjunctive of "estar." Notice: estás (indicative) → estés (subjunctive). The accent shifts!' },
    { spanish: 'Dudo que llueva esta tarde', pronunciation: 'DOO-doh keh YWEH-bah EHS-tah TAHR-deh', english: 'I doubt it will rain this afternoon', audio: 'dudo-que-llueva', tip: '"Llueva" (subjunctive of llover). The stem change UE stays in subjunctive! Llueve → llueva.' },
    { spanish: 'Ojalá que todo salga bien', pronunciation: 'oh-hah-LAH keh TOH-doh SAHL-gah bee-EHN', english: 'I hope everything goes well', audio: 'ojala-que-llueva', tip: '"Ojalá" comes from Arabic "Inshallah" (God willing). It ALWAYS triggers subjunctive. "Salga" = subjunctive of "salir."' },
    { spanish: 'No creo que sea verdad', pronunciation: 'noh KREH-oh keh SEH-ah behr-DAHD', english: 'I do not think it is true', audio: 'no-creo-que-sea-verdad', tip: '"Sea" is the subjunctive of "ser." "No creo que..." expresses doubt, so subjunctive follows. But "Creo que es verdad" (no negation) uses indicative!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'wishes', label: 'Wishes & Desires' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'emotions', label: 'Emotions & Reactions' },
    { id: 'doubt', label: 'Doubt & Uncertainty' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'mood-sorting', label: 'Mood Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'subjunctive-detector', label: 'Subjunctive Detector' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'wishes',
      title: 'Wishes & Desires',
      description: 'Use "quiero que...", "espero que...", "deseo que..." + subjunctive to express what you want someone else to do.',
      tabs: [
        { label: 'Quiero & Espero', color: 'blue', phrases: PHRASES.filter(p => p.category === 'wishes').slice(0, 5) },
        { label: 'More Wishes', color: 'purple', phrases: PHRASES.filter(p => p.category === 'wishes').slice(5) },
      ],
    },
    {
      id: 'recommendations',
      title: 'Recommendations & Advice',
      description: 'Impersonal expressions like "es importante que...", "es mejor que..." always trigger the subjunctive.',
      tabs: [
        { label: 'Es importante / mejor', color: 'orange', phrases: PHRASES.filter(p => p.category === 'recommendations').slice(0, 5) },
        { label: 'Sugiero / Aconsejo', color: 'amber', phrases: PHRASES.filter(p => p.category === 'recommendations').slice(5) },
      ],
    },
    {
      id: 'emotions',
      title: 'Emotions & Reactions',
      description: 'When you express how you feel about something someone does, use the subjunctive: "me alegra que...", "me preocupa que...".',
      tabs: [
        { label: 'Positive Emotions', color: 'emerald', phrases: PHRASES.filter(p => p.category === 'emotions').slice(0, 5) },
        { label: 'Concerns & More', color: 'rose', phrases: PHRASES.filter(p => p.category === 'emotions').slice(5) },
      ],
    },
    {
      id: 'doubt',
      title: 'Doubt & Uncertainty',
      description: 'Doubt, disbelief, and possibility expressions require the subjunctive: "dudo que...", "no creo que...", "es posible que...".',
      tabs: [
        { label: 'Dudo & No creo', color: 'teal', phrases: PHRASES.filter(p => p.category === 'doubt').slice(0, 4) },
        { label: 'Possibility', color: 'blue', phrases: PHRASES.filter(p => p.category === 'doubt').slice(4) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Subjunctive = Opposite Vowel!',
      content: 'The simplest rule: -AR verbs swap to -E endings, -ER/-IR verbs swap to -A endings. "Hablas" (indicative) → "hables" (subjunctive). "Comes" (indicative) → "comas" (subjunctive). Think of it as "opposite vowel" — that\'s the subjunctive\'s signature sound!',
      example: 'Hablas → Hables | Comes → Comas | Vives → Vivas',
    },
    {
      title: 'The Magic Word: QUE',
      content: 'In 90% of cases, the subjunctive appears after "que." Listen for the pattern: [trigger] + QUE + [subjunctive verb]. "Quiero QUE vengas." "Es importante QUE estudies." "Dudo QUE llueva." If you hear "que" after a wish, recommendation, emotion, or doubt — the next verb is likely subjunctive!',
      example: 'Quiero QUE vengas | Es importante QUE estudies | Dudo QUE llueva',
    },
    {
      title: 'Irregular Subjunctives — Same Stems as Commands',
      content: 'Good news: if you know the "yo" form of present indicative, you can form the subjunctive! Take "yo" form, drop the -O, add opposite endings. Tengo → teng- → tenga, tengas. Hago → hag- → haga, hagas. Salgo → salg- → salga, salgas. Only 6 verbs are truly irregular: ser (sea), estar (esté), ir (vaya), saber (sepa), haber (haya), dar (dé).',
      example: 'Tengo → Tenga | Hago → Haga | Salgo → Salga | Pongo → Ponga',
    },
    {
      title: 'WEIRDO — The Subjunctive Trigger Mnemonic',
      content: 'Remember WEIRDO for when to use subjunctive: Wishes (quiero que), Emotions (me alegra que), Impersonal expressions (es importante que), Recommendations (sugiero que), Doubt (dudo que), Ojalá (always subjunctive!). If the main clause fits WEIRDO, the subordinate clause is subjunctive.',
      example: 'W: Quiero que... | E: Me alegra que... | I: Es importante que... | R: Sugiero que... | D: Dudo que... | O: Ojalá que...',
    },
  ],

  flashcardGroups: [
    {
      key: 'wishes',
      label: 'Wishes',
      audioKeys: ['quiero-que-vengas', 'espero-que-estes-bien', 'deseo-que-seas-feliz', 'quiero-que-aprendas', 'espero-que-tengas', 'ojala-que-llueva', 'necesito-que-me-ayudes', 'quiero-que-hables'],
    },
    {
      key: 'recommendations',
      label: 'Recommendations',
      audioKeys: ['es-importante-que-estudies', 'te-sugiero-que-vayas', 'es-mejor-que-comas', 'te-recomiendo-que-duermas', 'es-necesario-que-practiques', 'te-aconsejo-que-ahorres', 'es-bueno-que-hagas', 'sugiero-que-llames'],
    },
    {
      key: 'emotions-doubt',
      label: 'Emotions & Doubt',
      audioKeys: ['me-alegra-que-estes', 'me-preocupa-que-no-duermas', 'es-triste-que-se-vaya', 'me-sorprende-que-hables', 'dudo-que-llueva', 'no-creo-que-sea-verdad', 'es-posible-que-venga', 'tal-vez-tenga-razon'],
    },
  ],

  matchPairs: [
    { left: 'Quiero que vengas', right: 'I want you to come' },
    { left: 'Es importante que estudies', right: 'It is important you study' },
    { left: 'Me alegra que estés aquí', right: 'I am glad you are here' },
    { left: 'Dudo que llueva', right: 'I doubt it will rain' },
    { left: 'Ojalá que llueva', right: 'I hope it rains' },
    { left: 'Es posible que venga', right: 'It is possible he comes' },
    { left: 'Te sugiero que vayas', right: 'I suggest you go' },
    { left: 'Me preocupa que no duermas', right: 'It worries me you don\'t sleep' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Indicative vs. Subjunctive Trigger',
      instruction: 'Does this expression trigger the subjunctive or stay in indicative?',
      buckets: ['Indicative (facts)', 'Subjunctive (WEIRDO)'],
      items: [
        { text: 'Sé que...', bucket: 'Indicative (facts)' },
        { text: 'Creo que...', bucket: 'Indicative (facts)' },
        { text: 'Es verdad que...', bucket: 'Indicative (facts)' },
        { text: 'Es obvio que...', bucket: 'Indicative (facts)' },
        { text: 'Quiero que...', bucket: 'Subjunctive (WEIRDO)' },
        { text: 'Dudo que...', bucket: 'Subjunctive (WEIRDO)' },
        { text: 'Me alegra que...', bucket: 'Subjunctive (WEIRDO)' },
        { text: 'Es importante que...', bucket: 'Subjunctive (WEIRDO)' },
      ],
    },
    {
      title: 'Indicative Form vs. Subjunctive Form',
      instruction: 'Is this verb form indicative or subjunctive?',
      buckets: ['Indicative Form', 'Subjunctive Form'],
      items: [
        { text: 'hablas', bucket: 'Indicative Form' },
        { text: 'comes', bucket: 'Indicative Form' },
        { text: 'vives', bucket: 'Indicative Form' },
        { text: 'tienes', bucket: 'Indicative Form' },
        { text: 'hables', bucket: 'Subjunctive Form' },
        { text: 'comas', bucket: 'Subjunctive Form' },
        { text: 'vivas', bucket: 'Subjunctive Form' },
        { text: 'tengas', bucket: 'Subjunctive Form' },
      ],
    },
  ],
  sortSectionId: 'mood-sorting',
  sortTitle: 'Mood Sorting',

  dialogues: [
    {
      id: 'dialogue-parent-advice',
      title: 'A Mother\'s Advice — Mexico City',
      location: 'Mexico City',
      lines: [
        { speaker: 'Mamá', text: 'Hijo, quiero que estudies para tu examen.', audio: '/audio/L4.2/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: 'Sí, mamá. Ya estoy estudiando.', audio: '/audio/L4.2/phrases/d1-line2.mp3' },
        { speaker: 'Mamá', text: 'Es importante que duermas bien esta noche. No te desveles.', audio: '/audio/L4.2/phrases/d1-line3.mp3' },
        { speaker: 'Diego', text: 'No te preocupes. Espero que el examen no sea muy difícil.', audio: '/audio/L4.2/phrases/d1-line4.mp3' },
        { speaker: 'Mamá', text: 'Te sugiero que repases los últimos tres capítulos.', audio: '/audio/L4.2/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: 'Buena idea. ¿Quieres que te ayude con la cena primero?', audio: '/audio/L4.2/phrases/d1-line6.mp3' },
        { speaker: 'Mamá', text: 'Me alegra que me ofrezcas ayuda. Sí, necesito que cortes las verduras.', audio: '/audio/L4.2/phrases/d1-line7.mp3' },
        { speaker: 'Diego', text: 'Claro. Ojalá que mañana todo salga bien.', audio: '/audio/L4.2/phrases/d1-line8.mp3' },
        { speaker: 'Mamá', text: 'Estoy segura de que vas a estar bien. ¡Tú puedes!', audio: '/audio/L4.2/phrases/d1-line9.mp3', annotations: [{ phrase: 'Estoy segura de que', fromLesson: 'L4.2', note: 'Certainty = indicative! "vas" is indicative because she is sure.' }] },
      ],
    },
    {
      id: 'dialogue-trip-recommendation',
      title: 'Planning a Trip — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Valentina', text: 'Te recomiendo que vayas a Bariloche. ¡Es hermoso!', audio: '/audio/L4.2/phrases/d2-line1.mp3' },
        { speaker: 'Tomás', text: '¿En serio? No creo que tenga suficiente dinero.', audio: '/audio/L4.2/phrases/d2-line2.mp3' },
        { speaker: 'Valentina', text: 'Es posible que encuentres ofertas en internet. Te sugiero que busques ahora.', audio: '/audio/L4.2/phrases/d2-line3.mp3' },
        { speaker: 'Tomás', text: 'Me encanta que me ayudes con esto. ¿Cuándo es mejor ir?', audio: '/audio/L4.2/phrases/d2-line4.mp3' },
        { speaker: 'Valentina', text: 'Es mejor que vayas en invierno si querés esquiar.', audio: '/audio/L4.2/phrases/d2-line5.mp3', annotations: [{ phrase: 'querés', fromLesson: 'L4.3', note: 'Argentine "voseo": querés = quieres. Common in Buenos Aires!' }] },
        { speaker: 'Tomás', text: 'Espero que haya nieve. Dudo que pueda ir en julio, pero tal vez en agosto.', audio: '/audio/L4.2/phrases/d2-line6.mp3' },
        { speaker: 'Valentina', text: 'Ojalá que puedas ir. Es importante que reserves el hotel con tiempo.', audio: '/audio/L4.2/phrases/d2-line7.mp3', annotations: [{ phrase: 'reserves', fromLesson: 'L2.4', note: 'Hotel reservations from L2.4, now with subjunctive!' }] },
        { speaker: 'Tomás', text: '¡Gracias! Me alegra que conozcas tanto de viajes.', audio: '/audio/L4.2/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'A mother giving exam advice in Mexico City and friends planning a trip to Bariloche.',

  culturalNotes: [
    {
      title: 'Subjunctive in Daily Life — More Common Than You Think!',
      content: 'Many learners fear the subjunctive, but Spanish speakers use it constantly without thinking! "Ojalá que no llueva" (I hope it doesn\'t rain), "Espero que estés bien" (I hope you\'re well), "Que te vaya bien" (May it go well for you). These everyday expressions are all subjunctive. You\'ve probably heard them in songs, movies, and conversations. The subjunctive isn\'t an advanced grammar concept — it\'s the language of hopes, feelings, and human connection.',
    },
    {
      title: 'Politeness Through Subjunctive — The Art of Indirectness',
      content: 'The subjunctive is a politeness tool! Instead of the direct command "Estudia más" (Study more), you can say "Es importante que estudies más" — softer and more respectful. "Quiero que me ayudes" is gentler than "¡Ayúdame!" In professional settings and with elders, using the subjunctive shows respect and education. In Latin American culture, indirectness is valued, and the subjunctive is the grammatical tool for it.',
    },
    {
      title: 'Songs That Live in the Subjunctive',
      content: 'Latin music is full of subjunctive! "Ojalá que llueva café" (Juan Luis Guerra) — a Dominican classic wishing coffee would rain from the sky. "Que me quieras" (many artists) — wishing to be loved. Reggaeton and pop constantly use "quiero que bailes" (I want you to dance), "espero que me llames" (I hope you call me). Listen for the patterns: after "que" in emotional or wishful lyrics, you\'ll hear subjunctive forms everywhere.',
    },
  ],
  culturalGradient: 'from-indigo-50 to-blue-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Quiero que vengas" uses the subjunctive because:', options: ['It states a fact', 'It expresses a wish', 'It describes a routine', 'It tells a story'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Espero que ___ bien" (tú — estar)', answer: 'estés' },
    { id: 3, type: 'mc', text: 'Which expression triggers the subjunctive?', options: ['Sé que...', 'Creo que...', 'Es importante que...', 'Es verdad que...'], answer: 2 },
    { id: 4, type: 'tf', text: '"Ojalá" always requires the subjunctive.', answer: true },
    { id: 5, type: 'mc', text: '"Dudo que llueva" means:', options: ['It is raining', 'I doubt it will rain', 'I know it will rain', 'It rained'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Es mejor que tú ___ frutas" (comer)', answer: 'comas' },
    { id: 7, type: 'mc', text: 'The subjunctive of "hablar" (tú) is:', options: ['Hablas', 'Hables', 'Hablés', 'Hablaste'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what does the mother want Diego to do?', options: ['Cook dinner', 'Study for his exam', 'Go to sleep', 'Call his brother'], answer: 1 },
    { id: 9, type: 'tf', text: '"Creo que es verdad" (affirmative) uses indicative, not subjunctive.', answer: true },
    { id: 10, type: 'mc', text: 'WEIRDO stands for:', options: ['Wishes, Emotions, Impersonal, Recommendations, Doubt, Ojalá', 'Words, Expressions, Ideas, Rules, Definitions, Orders', 'Writing, Editing, Interpreting, Reading, Describing, Observing', 'Wishes, Events, Intentions, Reactions, Demands, Opinions'], answer: 0 },
    { id: 11, type: 'fill', text: 'Complete: "Me alegra que ___ aquí" (tú — estar)', answer: 'estés' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, where does Valentina recommend going?', options: ['Mendoza', 'Patagonia', 'Bariloche', 'Ushuaia'], answer: 2 },
    { id: 13, type: 'mc', text: '"No creo que sea fácil" — "sea" is subjunctive because:', options: ['It\'s a past action', 'It expresses doubt/disbelief', 'It\'s a command', 'It describes weather'], answer: 1 },
    { id: 14, type: 'tf', text: 'The subjunctive -AR verb endings use -E (opposite of indicative -A).', answer: true },
    { id: 15, type: 'mc', text: '"Ojalá" originally comes from:', options: ['Latin', 'Arabic', 'Nahuatl', 'Greek'], answer: 1 },
  ],

  audioBase: '/audio/L4.2/phrases',

  uniqueActivity: {
    id: 'SubjunctiveDetectorL42',
    sectionId: 'subjunctive-detector',
    sectionColor: 'bg-indigo-50/40',
    sectionBorder: 'border-indigo-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    wishes: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    recommendations: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    emotions: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    doubt: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'mood-sorting': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    dialogues: { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'subjunctive-detector': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
