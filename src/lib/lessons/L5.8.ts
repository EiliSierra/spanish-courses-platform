import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Softeners & Hedging (12) ===
  { spanish: 'Tal vez deberíamos reconsiderarlo', english: 'Perhaps we should reconsider it', pronunciation: 'tahl BEHS deh-beh-REE-ah-mohs rreh-kohn-see-deh-RAHR-loh', category: 'softeners-hedging', audio: 'tal-vez-deberiamos' },
  { spanish: 'Quizás no sea el mejor momento', english: 'Maybe it\'s not the best time', pronunciation: 'kee-SAHS noh SEH-ah ehl meh-HOHR moh-MEHN-toh', category: 'softeners-hedging', audio: 'quizas-no-sea' },
  { spanish: 'Es posible que haya un malentendido', english: 'It\'s possible there\'s been a misunderstanding', pronunciation: 'ehs poh-SEE-bleh keh AH-yah oon mahl-ehn-tehn-DEE-doh', category: 'softeners-hedging', audio: 'es-posible-que-haya' },
  { spanish: 'Me parece que podríamos intentar otra cosa', english: 'It seems to me we could try something else', pronunciation: 'meh pah-REH-seh keh poh-DREE-ah-mohs een-tehn-TAHR OH-trah KOH-sah', category: 'softeners-hedging', audio: 'me-parece-que-podriamos' },
  { spanish: 'Diría que es un poco arriesgado', english: 'I would say it\'s a bit risky', pronunciation: 'dee-REE-ah keh ehs oon POH-koh ah-rree-ehs-GAH-doh', category: 'softeners-hedging', audio: 'diria-que-es-arriesgado' },
  { spanish: 'No estoy del todo seguro, pero creo que sí', english: 'I\'m not entirely sure, but I think so', pronunciation: 'noh ehs-TOY dehl TOH-doh seh-GOO-roh PEH-roh KREH-oh keh SEE', category: 'softeners-hedging', audio: 'no-estoy-del-todo-seguro' },
  { spanish: 'A lo mejor tiene razón', english: 'Maybe you\'re right', pronunciation: 'ah loh meh-HOHR tee-EH-neh rrah-SOHN', category: 'softeners-hedging', audio: 'a-lo-mejor-tiene-razon' },
  { spanish: 'Puede que me equivoque', english: 'I might be wrong', pronunciation: 'PWEH-deh keh meh eh-kee-BOH-keh', category: 'softeners-hedging', audio: 'puede-que-me-equivoque' },
  { spanish: 'En cierto modo, tienes un punto', english: 'In a way, you have a point', pronunciation: 'ehn see-EHR-toh MOH-doh tee-EH-nehs oon POON-toh', category: 'softeners-hedging', audio: 'en-cierto-modo-tienes' },
  { spanish: 'Hasta cierto punto, estoy de acuerdo', english: 'To a certain extent, I agree', pronunciation: 'AHS-tah see-EHR-toh POON-toh ehs-TOY deh ah-KWEHR-doh', category: 'softeners-hedging', audio: 'hasta-cierto-punto' },
  { spanish: 'Por lo que tengo entendido, así es', english: 'From what I understand, that\'s the case', pronunciation: 'pohr loh keh TEHN-goh ehn-tehn-DEE-doh ah-SEE ehs', category: 'softeners-hedging', audio: 'por-lo-que-tengo-entendido' },
  { spanish: 'Si no me equivoco, ya lo mencionaron', english: 'If I\'m not mistaken, they already mentioned it', pronunciation: 'see noh meh eh-kee-BOH-koh yah loh mehn-see-oh-NAH-rohn', category: 'softeners-hedging', audio: 'si-no-me-equivoco' },

  // === Euphemisms & Politeness (12) ===
  { spanish: 'Pasó a mejor vida', english: 'Passed away (lit. went to a better life)', pronunciation: 'pah-SOH ah meh-HOHR BEE-dah', category: 'euphemisms-politeness', audio: 'paso-a-mejor-vida' },
  { spanish: 'Está en una situación delicada', english: 'Is in a difficult situation (financial trouble)', pronunciation: 'ehs-TAH ehn OO-nah see-too-ah-see-OHN deh-lee-KAH-dah', category: 'euphemisms-politeness', audio: 'situacion-delicada' },
  { spanish: 'No es mi fuerte', english: 'It\'s not my strong suit (I\'m bad at it)', pronunciation: 'noh ehs mee FWEHR-teh', category: 'euphemisms-politeness', audio: 'no-es-mi-fuerte' },
  { spanish: '¿Le importaría repetirlo?', english: 'Would you mind repeating that?', pronunciation: 'leh eem-pohr-tah-REE-ah rreh-peh-TEER-loh', category: 'euphemisms-politeness', audio: 'le-importaria-repetirlo' },
  { spanish: 'Disculpe la molestia', english: 'Pardon the inconvenience', pronunciation: 'dees-KOOL-peh lah moh-LEHS-tee-ah', category: 'euphemisms-politeness', audio: 'disculpe-la-molestia' },
  { spanish: 'Está entre trabajos', english: 'Is between jobs (unemployed)', pronunciation: 'ehs-TAH EHN-treh trah-BAH-hohs', category: 'euphemisms-politeness', audio: 'esta-entre-trabajos' },
  { spanish: 'No sé si será el momento adecuado', english: 'I don\'t know if it\'s the right time', pronunciation: 'noh seh see seh-RAH ehl moh-MEHN-toh ah-deh-KWAH-doh', category: 'euphemisms-politeness', audio: 'no-se-si-sera-el-momento' },
  { spanish: 'Le agradecería enormemente su ayuda', english: 'I would be enormously grateful for your help', pronunciation: 'leh ah-grah-deh-seh-REE-ah eh-NOHR-meh-MEHN-teh soo ah-YOO-dah', category: 'euphemisms-politeness', audio: 'le-agradeceria-enormemente' },
  { spanish: 'Tiene cierta edad', english: 'Is of a certain age (is old)', pronunciation: 'tee-EH-neh see-EHR-tah eh-DAHD', category: 'euphemisms-politeness', audio: 'tiene-cierta-edad' },
  { spanish: 'No me es posible en este momento', english: 'It\'s not possible for me at this time (polite refusal)', pronunciation: 'noh meh ehs poh-SEE-bleh ehn EHS-teh moh-MEHN-toh', category: 'euphemisms-politeness', audio: 'no-me-es-posible' },
  { spanish: 'Está un poco pasado de copas', english: 'Is a bit over-served (drunk)', pronunciation: 'ehs-TAH oon POH-koh pah-SAH-doh deh KOH-pahs', category: 'euphemisms-politeness', audio: 'pasado-de-copas' },
  { spanish: 'Con todo respeto, no comparto esa opinión', english: 'With all due respect, I don\'t share that opinion', pronunciation: 'kohn TOH-doh rrehs-PEH-toh noh kohm-PAHR-toh EH-sah oh-pee-nee-OHN', category: 'euphemisms-politeness', audio: 'con-todo-respeto' },

  // === Irony & Humor (12) ===
  { spanish: '¡Qué bien! (dicho con ironía)', english: 'How great! (said sarcastically)', pronunciation: 'keh bee-EHN', category: 'irony-humor', audio: 'que-bien-ironia' },
  { spanish: '¡No me digas!', english: 'You don\'t say! (ironic surprise)', pronunciation: 'noh meh DEE-gahs', category: 'irony-humor', audio: 'no-me-digas' },
  { spanish: '¡Faltaba más!', english: 'Of course! / That\'s all we needed! (depends on tone)', pronunciation: 'fahl-TAH-bah MAHS', category: 'irony-humor', audio: 'faltaba-mas' },
  { spanish: '¡Menos mal!', english: 'Thank goodness! (relief)', pronunciation: 'MEH-nohs mahl', category: 'irony-humor', audio: 'menos-mal' },
  { spanish: '¡Vaya, vaya!', english: 'Well, well! (amused surprise)', pronunciation: 'BAH-yah BAH-yah', category: 'irony-humor', audio: 'vaya-vaya' },
  { spanish: 'Ni modo', english: 'Oh well / No way around it', pronunciation: 'nee MOH-doh', category: 'irony-humor', audio: 'ni-modo' },
  { spanish: '¡Anda ya!', english: 'Come on! / No way! (disbelief)', pronunciation: 'AHN-dah YAH', category: 'irony-humor', audio: 'anda-ya' },
  { spanish: '¡Ya era hora!', english: 'About time! (impatient relief)', pronunciation: 'yah EH-rah OH-rah', category: 'irony-humor', audio: 'ya-era-hora' },
  { spanish: '¿Tú crees? (con tono escéptico)', english: 'You think? (skeptical tone)', pronunciation: 'too KREH-ehs', category: 'irony-humor', audio: 'tu-crees-esceptico' },
  { spanish: '¡Qué casualidad! (sarcástico)', english: 'What a coincidence! (sarcastic)', pronunciation: 'keh kah-soo-ah-lee-DAHD', category: 'irony-humor', audio: 'que-casualidad' },
  { spanish: 'Sí, cómo no', english: 'Yeah, sure (skeptical / sarcastic)', pronunciation: 'see KOH-moh noh', category: 'irony-humor', audio: 'si-como-no' },
  { spanish: '¡Qué sorpresa! (irónico)', english: 'What a surprise! (ironic)', pronunciation: 'keh sohr-PREH-sah', category: 'irony-humor', audio: 'que-sorpresa-ironico' },

  // === Regional Variation (12) ===
  { spanish: '¡Órale! (México)', english: 'Wow! / Right on! / Let\'s go! (Mexican exclamation)', pronunciation: 'OH-rah-leh', category: 'regional-variation', audio: 'orale-mexico' },
  { spanish: '¡Qué padre! (México)', english: 'How cool! (Mexican slang)', pronunciation: 'keh PAH-dreh', category: 'regional-variation', audio: 'que-padre-mexico' },
  { spanish: '¡Está bien chido! (México)', english: 'It\'s really cool! (Mexican slang)', pronunciation: 'ehs-TAH bee-EHN CHEE-doh', category: 'regional-variation', audio: 'esta-chido-mexico' },
  { spanish: 'Neta, no lo sabía (México)', english: 'For real, I didn\'t know (Mexican "truth/honestly")', pronunciation: 'NEH-tah noh loh sah-BEE-ah', category: 'regional-variation', audio: 'neta-no-lo-sabia' },
  { spanish: '¡Re copado! (Argentina)', english: 'Really cool! (Argentine intensifier "re" + "copado")', pronunciation: 'rreh koh-PAH-doh', category: 'regional-variation', audio: 're-copado-argentina' },
  { spanish: '¡Ey, boludo! (Argentina)', english: 'Hey, dude! (Argentine term of endearment among friends)', pronunciation: 'ey boh-LOO-doh', category: 'regional-variation', audio: 'boludo-argentina' },
  { spanish: 'Posta que es genial (Argentina)', english: 'Seriously, it\'s great (Argentine "posta" = honestly)', pronunciation: 'POHS-tah keh ehs heh-nee-AHL', category: 'regional-variation', audio: 'posta-argentina' },
  { spanish: 'No me bardees (Argentina)', english: 'Don\'t mess with me / Don\'t disrespect me (Argentine slang)', pronunciation: 'noh meh bahr-DEH-ehs', category: 'regional-variation', audio: 'no-bardees-argentina' },
  { spanish: '¡Qué chimba! (Colombia)', english: 'How awesome! (Colombian slang, very informal)', pronunciation: 'keh CHEEM-bah', category: 'regional-variation', audio: 'que-chimba-colombia' },
  { spanish: '¡Ey, parce! (Colombia)', english: 'Hey, bro! (Colombian "parcero" shortened)', pronunciation: 'ey PAHR-seh', category: 'regional-variation', audio: 'parce-colombia' },
  { spanish: '¡Qué bacano! (Colombia)', english: 'How cool/awesome! (Colombian & Venezuelan slang)', pronunciation: 'keh bah-KAH-noh', category: 'regional-variation', audio: 'que-bacano-colombia' },
  { spanish: '¡Ey, marica! (Colombia)', english: 'Hey, dude! (Colombian term of endearment among close friends — NOT offensive in context)', pronunciation: 'ey mah-REE-kah', category: 'regional-variation', audio: 'marica-colombia' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L58PhraseByAudio = phraseByAudio

// === TONE TUNER (unique activity) ===

export interface ToneTunerChallenge {
  context: string
  english: string
  tooDirectStatement: string
  correctTone: string
  options: string[]
}

export const TONE_TUNER_CHALLENGES: ToneTunerChallenge[] = [
  {
    context: 'Your colleague\'s presentation had several errors. You need to give feedback.',
    english: 'The presentation had mistakes.',
    tooDirectStatement: 'Tu presentación estaba llena de errores.',
    correctTone: 'Tal vez podríamos revisar algunos detalles de la presentación.',
    options: ['Tal vez podríamos revisar algunos detalles de la presentación.', 'Tu presentación fue un desastre.', 'Hay errores en todo.', 'Diría que necesita muchos cambios.'],
  },
  {
    context: 'A friend asks you to lend them money, but you don\'t want to.',
    english: 'I can\'t lend you money.',
    tooDirectStatement: 'No, no te voy a prestar dinero.',
    correctTone: 'No me es posible en este momento, pero espero que encuentres una solución.',
    options: ['No tengo nada para ti.', 'No me es posible en este momento, pero espero que encuentres una solución.', 'Olvídalo, siempre pides dinero.', 'Jamás te prestaré nada.'],
  },
  {
    context: 'Your boss suggests an idea you think is bad. You need to disagree tactfully.',
    english: 'I don\'t think that\'s a good idea.',
    tooDirectStatement: 'Esa idea no va a funcionar.',
    correctTone: 'Me parece que podríamos considerar también otras opciones.',
    options: ['Es una idea terrible.', 'No estoy de acuerdo para nada.', 'Me parece que podríamos considerar también otras opciones.', 'Usted no sabe de esto.'],
  },
  {
    context: 'You arrive at a restaurant and the food is cold. You want to complain politely.',
    english: 'The food is cold.',
    tooDirectStatement: 'Esta comida está fría. Esto es inaceptable.',
    correctTone: 'Disculpe la molestia, ¿sería posible calentar el plato?',
    options: ['¡Esto está helado!', 'Disculpe la molestia, ¿sería posible calentar el plato?', 'Quiero hablar con el gerente.', 'Nunca volveré a este restaurante.'],
  },
  {
    context: 'Someone asks your opinion about their new haircut, and you don\'t like it.',
    english: 'I don\'t like the haircut.',
    tooDirectStatement: 'No me gusta tu corte de pelo.',
    correctTone: 'Es un cambio interesante. A lo mejor solo necesitas acostumbrarte.',
    options: ['Te ves horrible.', 'Es un cambio interesante. A lo mejor solo necesitas acostumbrarte.', 'No te queda bien.', '¿Por qué te hiciste eso?'],
  },
  {
    context: 'You\'re at a meeting and someone is wrong about a key fact. You need to correct them.',
    english: 'That information is incorrect.',
    tooDirectStatement: 'Estás equivocado, los datos son otros.',
    correctTone: 'Si no me equivoco, los datos más recientes indican algo diferente.',
    options: ['Eso no es cierto.', 'No sabes de lo que hablas.', 'Si no me equivoco, los datos más recientes indican algo diferente.', 'Te confundiste completamente.'],
  },
  {
    context: 'Your neighbor plays loud music at night. You want them to stop.',
    english: 'Your music is too loud.',
    tooDirectStatement: '¡Baja esa música! ¡No puedo dormir!',
    correctTone: 'Disculpe, ¿le importaría bajar un poco el volumen? Es que mañana madrugo.',
    options: ['¡Cállate ya!', 'Disculpe, ¿le importaría bajar un poco el volumen? Es que mañana madrugo.', 'Voy a llamar a la policía.', 'Tu música es insoportable.'],
  },
]

// === LESSON DATA ===

export const L58Data: LessonData = {
  id: 'L5.8',
  hero: {
    lessonId: 'L5.8',
    title: 'Nuanced Expression & Cultural Fluency',
    subtitle: 'The art of saying what you mean — without quite saying it',
    description: 'Master the softeners, euphemisms, irony, and regional slang that make your Spanish feel truly native. Learn to read between the lines, adjust your tone for any situation, and navigate the rich diversity of how Spanish is spoken across Latin America.',
    image: '/images/L5.8/L5.8.jpg',
    gradient: 'from-pink-800/65 via-purple-700/55 to-indigo-700/65',
    accentColor: 'purple-200',
  },

  objectives: [
    { icon: '🪶', title: 'Softeners & Hedging', desc: 'Use tal vez, quizás, me parece que, diría que to cushion opinions and avoid directness.' },
    { icon: '🎭', title: 'Euphemisms & Politeness', desc: 'Master indirect expressions: pasó a mejor vida, está entre trabajos, tiene cierta edad.' },
    { icon: '😏', title: 'Irony & Humor', desc: 'Decode tone-dependent expressions: ¡Qué bien!, ¡No me digas!, ¡Ya era hora! and their sarcastic meanings.' },
    { icon: '🌎', title: 'Regional Variation', desc: 'Navigate Mexicanisms (¡Órale!, chido), Argentinisms (re copado, boludo), and Colombianisms (¡Qué chimba!, parce).' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.3', label: 'Register Switching', detail: 'L4.3 taught formal vs. informal register. Now go deeper: learn to soften, hedge, and navigate tone within a register.' },
    { fromLesson: 'L4.5', label: 'Sensitive Topics', detail: 'L4.5 covered health & sensitive subjects. Now master the euphemisms and indirectness used when discussing ANY delicate matter.' },
    { fromLesson: 'L3.8', label: 'Cultural Tone', detail: 'L3.8 introduced cultural context. Now apply it to understanding irony, humor, and how meaning changes across regions.' },
  ],

  sectionTransitions: [
    { afterSection: 'softeners-hedging', text: 'You\'ve learned to soften your words! Now let\'s explore how Spanish speakers avoid uncomfortable truths.' },
    { afterSection: 'euphemisms-politeness', text: 'Euphemisms mastered! Time for the fun part — irony and humor that make you sound truly native.' },
    { afterSection: 'irony-humor', text: 'You can now read between the lines! Let\'s explore how Spanish changes from country to country.' },
    { afterSection: 'dialogues', text: 'Great conversations across the Spanish-speaking world! Let\'s reflect on the culture of indirectness.' },
    { afterSection: 'cultural', text: 'Cultural insights absorbed! Now test your tone-tuning skills in a real-world challenge.' },
    { afterSection: 'tone-tuner', text: 'Final stretch — let\'s see what you\'ve learned!' },
  ],

  personalizedVocab: [
    { spanish: 'Tal vez...', english: 'Perhaps...' },
    { spanish: 'Me parece que...', english: 'It seems to me that...' },
    { spanish: 'Con todo respeto...', english: 'With all due respect...' },
    { spanish: 'A lo mejor...', english: 'Maybe...' },
    { spanish: '¿Le importaría...?', english: 'Would you mind...?' },
    { spanish: 'Puede que...', english: 'It might be that...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Tal vez deberíamos pensarlo mejor', pronunciation: 'tahl BEHS deh-beh-REE-ah-mohs pehn-SAHR-loh meh-HOHR', english: 'Perhaps we should think it over', audio: 'tal-vez-deberiamos-pensarlo-mejor', tip: 'Spanish softeners like "tal vez" and "quizás" trigger the subjunctive. Listen for that subtle mood shift!' },
    { spanish: '¡Qué casualidad que siempre llegas tarde!', pronunciation: 'keh kah-soo-ah-lee-DAHD keh see-EHM-preh YEH-gahs TAHR-deh', english: 'What a coincidence you\'re always late! (sarcastic)', audio: 'que-casualidad-que-siempre-llegas-tarde', tip: 'Irony in Spanish is all about intonation. The words are polite but the tone communicates the real meaning.' },
    { spanish: '¡Está bien chido, güey!', pronunciation: 'ehs-TAH bee-EHN CHEE-doh GWEY', english: 'It\'s really cool, dude! (Mexican)', audio: 'esta-bien-chido-guey', tip: '"Güey" (sometimes "wey") is Mexico\'s most common slang among friends. The "ü" is pronounced like English "w" + "ey."' },
    { spanish: '¿Le importaría cerrar la puerta?', pronunciation: 'leh eem-pohr-tah-REE-ah seh-RRAHR lah PWEHR-tah', english: 'Would you mind closing the door?', audio: 'le-importaria-cerrar-la-puerta', tip: '"¿Le importaría...?" is the gold standard of polite requests. The conditional "-ría" ending is key to the softness.' },
    { spanish: '¡Posta que re copado, boludo!', pronunciation: 'POHS-tah keh rreh koh-PAH-doh boh-LOO-doh', english: 'Honestly, really cool, dude! (Argentine)', audio: 'posta-que-re-copado-boludo', tip: 'Argentine Spanish uses "re" as an intensifier (like "muy"), "posta" for "honestly," and "boludo" as "dude" among friends.' },
    { spanish: '¡Ey, parce, qué bacano!', pronunciation: 'ey PAHR-seh keh bah-KAH-noh', english: 'Hey bro, how awesome! (Colombian)', audio: 'ey-parce-que-bacano', tip: '"Parce" (short for "parcero") is Colombia\'s equivalent of "bro." "Bacano" means cool/awesome — used everywhere in Colombia.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'softeners-hedging', label: 'Softeners & Hedging' },
    { id: 'euphemisms-politeness', label: 'Euphemisms & Politeness' },
    { id: 'irony-humor', label: 'Irony & Humor' },
    { id: 'regional-variation', label: 'Regional Variation' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'expression-sorting', label: 'Expression Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'tone-tuner', label: 'Tone Tuner' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'softeners-hedging',
      title: 'Softeners & Hedging — Suavizando la Expresión',
      description: 'In Spanish, directness can feel aggressive. These phrases let you express opinions while leaving room for the other person\'s perspective.',
      tabs: [
        { label: 'Possibility & Doubt', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'softeners-hedging').slice(0, 6) },
        { label: 'Qualified Statements', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'softeners-hedging').slice(6) },
      ],
    },
    {
      id: 'euphemisms-politeness',
      title: 'Euphemisms & Politeness — El Arte de lo Indirecto',
      description: 'Spanish speakers often prefer indirect ways to discuss uncomfortable realities. These euphemisms are essential for navigating sensitive conversations.',
      tabs: [
        { label: 'Life & Situations', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'euphemisms-politeness').slice(0, 6) },
        { label: 'Polite Refusals', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'euphemisms-politeness').slice(6) },
      ],
    },
    {
      id: 'irony-humor',
      title: 'Irony & Humor — Leyendo Entre Líneas',
      description: 'These expressions mean one thing literally but communicate the opposite through tone and context. Mastering them is a sign of true fluency.',
      tabs: [
        { label: 'Sarcasm & Surprise', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'irony-humor').slice(0, 6) },
        { label: 'Resignation & Disbelief', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'irony-humor').slice(6) },
      ],
    },
    {
      id: 'regional-variation',
      title: 'Regional Variation — Español por el Mundo',
      description: 'Spanish changes dramatically from country to country. These expressions will help you recognize (and use!) slang from Mexico, Argentina, and Colombia.',
      tabs: [
        { label: 'Mexico & Argentina', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'regional-variation').slice(0, 8) },
        { label: 'Colombia & Beyond', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'regional-variation').slice(8) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Softening with Subjunctive Triggers',
      content: 'Many softeners (tal vez, quizás, es posible que, puede que) trigger the subjunctive mood. "Tal vez venga" (Maybe he\'ll come) uses subjunctive "venga" instead of indicative "viene." This grammatical softness mirrors the social softness of the expression.',
      example: 'Tal vez sea mejor esperar. | Puede que tengas razón. | Quizás deberíamos irnos.',
      reviewFrom: 'L4.2',
    },
    {
      title: 'Irony Lives in Intonation',
      content: '"¡Qué bien!" can mean genuine happiness OR biting sarcasm — the ONLY difference is intonation. Genuine: rising, open tone. Sarcastic: flat or falling tone with a slight pause. Similarly, "¡No me digas!" can be genuine surprise or "yeah, obviously." Context + tone = meaning.',
      example: '¡Qué bien! ↗ (happy) vs. ¡Qué bien! ↘ (sarcastic) | ¡No me digas! ↗ vs. ¡No me digas! ↘',
    },
    {
      title: 'Regional Pronunciation Patterns',
      content: 'Mexico: clear, melodic intonation, "s" always pronounced. Argentina: "ll/y" = "sh" sound (yo = "sho"), Italian-influenced rhythm. Colombia: varies hugely — coast is fast & drops final "s", Bogotá is formal & clear. Recognizing these patterns helps you identify where someone is from.',
      example: 'Yo me llamo → Mexico: "yo meh YAH-moh" | Argentina: "sho meh SHAH-moh" | Colombia: "jo meh JAH-moh"',
      reviewFrom: 'L3.8',
    },
    {
      title: 'The Conditional as a Politeness Tool',
      content: 'The conditional tense (-ría) is your single most powerful politeness tool. Compare: "¿Puedes ayudarme?" (Can you help me? — direct) vs. "¿Podrías ayudarme?" (Could you help me? — polite) vs. "¿Le importaría ayudarme?" (Would you mind helping me? — very polite). Each step adds formality and softness.',
      example: 'Quiero → Querría → Me gustaría → ¿Sería posible...?',
      reviewFrom: 'L4.3',
    },
  ],

  flashcardGroups: [
    {
      key: 'softeners-euphemisms',
      label: 'Softeners & Euphemisms',
      audioKeys: ['tal-vez-deberiamos', 'quizas-no-sea', 'es-posible-que-haya', 'me-parece-que-podriamos', 'diria-que-es-arriesgado', 'no-estoy-del-todo-seguro', 'paso-a-mejor-vida', 'situacion-delicada', 'no-es-mi-fuerte', 'le-importaria-repetirlo'],
    },
    {
      key: 'irony-humor',
      label: 'Irony & Humor',
      audioKeys: ['que-bien-ironia', 'no-me-digas', 'faltaba-mas', 'menos-mal', 'vaya-vaya', 'ni-modo', 'anda-ya', 'ya-era-hora'],
    },
    {
      key: 'regional',
      label: 'Regional Slang',
      audioKeys: ['orale-mexico', 'que-padre-mexico', 'esta-chido-mexico', 'neta-no-lo-sabia', 're-copado-argentina', 'boludo-argentina', 'que-chimba-colombia', 'parce-colombia', 'que-bacano-colombia', 'marica-colombia'],
    },
  ],

  matchPairs: [
    { left: 'Pasó a mejor vida', right: 'Passed away' },
    { left: '¡Órale!', right: 'Wow! / Let\'s go! (Mexico)' },
    { left: '¡Re copado!', right: 'Really cool! (Argentina)' },
    { left: '¡Qué chimba!', right: 'How awesome! (Colombia)' },
    { left: 'Tal vez', right: 'Perhaps' },
    { left: '¡Ya era hora!', right: 'About time!' },
    { left: 'No es mi fuerte', right: 'Not my strong suit' },
    { left: '¡No me digas!', right: 'You don\'t say! (ironic)' },
  ],
  matchLabels: { left: 'Expresión', right: 'Meaning' },

  sortActivities: [
    {
      title: 'Direct vs. Softened',
      instruction: 'Is this statement direct or softened/polite?',
      buckets: ['Too Direct 🗣️', 'Well Softened 🪶'],
      items: [
        { text: 'Estás equivocado.', bucket: 'Too Direct 🗣️' },
        { text: 'Esa idea no funciona.', bucket: 'Too Direct 🗣️' },
        { text: 'No quiero ir.', bucket: 'Too Direct 🗣️' },
        { text: 'Dame eso.', bucket: 'Too Direct 🗣️' },
        { text: 'Me parece que hay otra opción.', bucket: 'Well Softened 🪶' },
        { text: 'Tal vez podríamos reconsiderarlo.', bucket: 'Well Softened 🪶' },
        { text: '¿Le importaría repetirlo?', bucket: 'Well Softened 🪶' },
        { text: 'Puede que me equivoque, pero...', bucket: 'Well Softened 🪶' },
      ],
    },
    {
      title: 'Which Country?',
      instruction: 'Sort the slang to its country of origin.',
      buckets: ['Mexico 🇲🇽', 'Argentina 🇦🇷', 'Colombia 🇨🇴'],
      items: [
        { text: '¡Órale!', bucket: 'Mexico 🇲🇽' },
        { text: '¡Qué padre!', bucket: 'Mexico 🇲🇽' },
        { text: 'Chido', bucket: 'Mexico 🇲🇽' },
        { text: 'Re copado', bucket: 'Argentina 🇦🇷' },
        { text: 'Boludo', bucket: 'Argentina 🇦🇷' },
        { text: 'Bardear', bucket: 'Argentina 🇦🇷' },
        { text: '¡Qué chimba!', bucket: 'Colombia 🇨🇴' },
        { text: 'Parce', bucket: 'Colombia 🇨🇴' },
      ],
    },
  ],
  sortSectionId: 'expression-sorting',
  sortTitle: 'Expression Sorting',

  dialogues: [
    {
      id: 'dialogue-guadalajara',
      title: 'Friday Night Plans — Guadalajara, Mexico',
      location: 'Guadalajara',
      lines: [
        { speaker: 'Alejandra', text: '¡Órale, güey! ¿Qué onda para esta noche?', audio: '/audio/L5.8/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: 'Pues mira, hay un lugar bien chido en Chapultepec. ¿Jala?', audio: '/audio/L5.8/phrases/d1-line2.mp3' },
        { speaker: 'Alejandra', text: '¡Qué padre! ¿Y quién más va? No me digas que invitaste a Rodrigo...', audio: '/audio/L5.8/phrases/d1-line3.mp3' },
        { speaker: 'Diego', text: 'Neta que no. Ese cuate siempre llega tardísimo.', audio: '/audio/L5.8/phrases/d1-line4.mp3' },
        { speaker: 'Alejandra', text: '¡Ya era hora de que alguien lo dijera! La última vez llegó a las once.', audio: '/audio/L5.8/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: '¡Sí, cómo no! "Cinco minutitos" dijo, y llegó dos horas después.', audio: '/audio/L5.8/phrases/d1-line6.mp3', annotations: [{ phrase: 'Sí, cómo no', fromLesson: 'L5.8', note: 'Sarcastic — means "yeah right, sure"' }] },
        { speaker: 'Alejandra', text: 'Ni modo. Bueno, ¿a qué hora nos vemos?', audio: '/audio/L5.8/phrases/d1-line7.mp3' },
        { speaker: 'Diego', text: 'A las ocho. Y si llego tarde, ¡no me digas nada!', audio: '/audio/L5.8/phrases/d1-line8.mp3' },
        { speaker: 'Alejandra', text: '¡Anda ya! Tú eres peor que Rodrigo. Ahí nos vemos, chido.', audio: '/audio/L5.8/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-buenos-aires',
      title: 'Office Feedback — Buenos Aires, Argentina',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Luciana', text: 'Che, Martín, ¿tenés un segundo? Quería hablar del informe.', audio: '/audio/L5.8/phrases/d2-line1.mp3' },
        { speaker: 'Martín', text: 'Dale, decime. ¿Qué onda?', audio: '/audio/L5.8/phrases/d2-line2.mp3' },
        { speaker: 'Luciana', text: 'Mirá, me parece que podríamos revisar la sección de costos. Hay un par de detalles.', audio: '/audio/L5.8/phrases/d2-line3.mp3', annotations: [{ phrase: 'me parece que podríamos', fromLesson: 'L5.8', note: 'Double softener: "it seems to me" + conditional "could"' }] },
        { speaker: 'Martín', text: '¿Vos decís? Los revisé dos veces...', audio: '/audio/L5.8/phrases/d2-line4.mp3' },
        { speaker: 'Luciana', text: 'Sí, puede que me equivoque, pero el total del tercer trimestre no me cierra.', audio: '/audio/L5.8/phrases/d2-line5.mp3' },
        { speaker: 'Martín', text: 'A ver... ¡Posta! Tenés razón, puse el número del año pasado. ¡Qué boludo!', audio: '/audio/L5.8/phrases/d2-line6.mp3' },
        { speaker: 'Luciana', text: '¡Menos mal que lo revisamos! No pasa nada, le erramos todos.', audio: '/audio/L5.8/phrases/d2-line7.mp3' },
        { speaker: 'Martín', text: 'Re copado que me dijiste. Si lo mandaba así, era un desastre.', audio: '/audio/L5.8/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Navigate Friday night plans using Mexican slang in Guadalajara, then deliver tactful workplace feedback with Argentine expressions in Buenos Aires.',

  culturalNotes: [
    {
      title: 'La Cultura de lo Indirecto en América Latina',
      content: 'Latin American communication tends to be high-context and indirect, especially when delivering bad news, disagreeing, or refusing requests. Saying "no" directly can be seen as rude — instead, speakers use softeners (tal vez, puede que), conditional forms (¿podría?, ¿le importaría?), and even affirmative-sounding responses that actually mean "no" (like "ahorita" in Mexico, which can mean "eventually" or "probably not"). This isn\'t dishonesty — it\'s a deeply rooted cultural value of preserving harmony and the other person\'s "face."',
    },
    {
      title: 'Orgullo Regional: El Español de Mi País',
      content: 'Spanish speakers take enormous pride in their regional variety. Mexicans love their "güey" and "chido," Argentines cherish their "vos" and "che," Colombians celebrate "parce" and "bacano." These aren\'t "wrong" Spanish — they\'re vibrant expressions of cultural identity. A common mistake for learners is assuming one variety is "correct." Instead, embrace the diversity: learn to recognize each variant, appreciate its history, and adapt your own speech to your audience. The most respected speakers can code-switch between neutral and regional Spanish.',
    },
    {
      title: 'El Humor como Vínculo Social',
      content: 'Irony, sarcasm, and playful teasing (called "carrilla" in Mexico, "joda" in Argentina, "mamadera" in Venezuela) are fundamental to building close relationships in Spanish. Friends who joke with each other are showing trust and affection. "¡Qué bien!" said sarcastically to a friend who dropped their phone is a sign of closeness, not cruelty. The key is knowing when humor is appropriate: formal settings demand restraint, but among friends and family, wit and wordplay are highly valued social currencies.',
    },
  ],
  culturalGradient: 'from-pink-50 to-purple-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Tal vez" and "quizás" are examples of:', options: ['Regional slang', 'Euphemisms', 'Softeners/hedges', 'Ironic expressions'], answer: 2 },
    { id: 2, type: 'fill', text: 'Complete: "___ que podríamos intentar otra cosa" (It seems to me)', answer: 'Me parece' },
    { id: 3, type: 'tf', text: '"Pasó a mejor vida" is a euphemism for dying.', answer: true },
    { id: 4, type: 'mc', text: '"¡Qué bien!" said with a flat, falling tone usually means:', options: ['Genuine happiness', 'A question', 'Sarcasm', 'Surprise'], answer: 2 },
    { id: 5, type: 'mc', text: '"¡Órale!" is slang from:', options: ['Argentina', 'Colombia', 'Mexico', 'Spain'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete the softened request: "¿Le ___ cerrar la puerta?" (Would you mind)', answer: 'importaría' },
    { id: 7, type: 'mc', text: '"Re copado" uses the Argentine intensifier "re" which means:', options: ['Not at all', 'Very/really', 'Kind of', 'Never'], answer: 1 },
    { id: 8, type: 'tf', text: 'In Colombian Spanish, "parce" is short for "parcero" and means "bro/dude."', answer: true },
    { id: 9, type: 'mc', text: 'In Dialogue 1, why does Alejandra not want Rodrigo invited?', options: ['He\'s boring', 'He always arrives very late', 'He\'s too loud', 'He doesn\'t drink'], answer: 1 },
    { id: 10, type: 'mc', text: '"Está entre trabajos" is a polite way to say someone is:', options: ['Busy', 'Retired', 'Unemployed', 'On vacation'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "Con todo ___, no comparto esa opinión" (With all due respect)', answer: 'respeto' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what was wrong with Martín\'s report?', options: ['Missing a section', 'Wrong quarter total (used last year\'s number)', 'Spelling errors', 'Wrong format'], answer: 1 },
    { id: 13, type: 'tf', text: '"¡Ya era hora!" expresses impatient relief that something finally happened.', answer: true },
    { id: 14, type: 'mc', text: 'Which is the MOST polite request?', options: ['Pásame la sal.', 'Dame la sal.', '¿Me pasas la sal?', '¿Le importaría pasarme la sal?'], answer: 3 },
    { id: 15, type: 'mc', text: 'In Colombian slang, "marica" used among close friends is:', options: ['Always offensive', 'A term of endearment like "dude"', 'A formal greeting', 'An insult'], answer: 1 },
  ],

  audioBase: '/audio/L5.8/phrases',

  uniqueActivity: {
    id: 'ToneTunerL58',
    sectionId: 'tone-tuner',
    sectionColor: 'bg-pink-50/40',
    sectionBorder: 'border-pink-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'softeners-hedging': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'euphemisms-politeness': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'irony-humor': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'regional-variation': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-pink-50/30', border: 'border-pink-100' },
    'expression-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'tone-tuner': { bg: 'bg-pink-50/40', border: 'border-pink-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
