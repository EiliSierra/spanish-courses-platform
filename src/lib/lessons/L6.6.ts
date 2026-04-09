import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Existential Concepts (12) ===
  { spanish: 'El ser es anterior a la existencia', english: 'Being precedes existence', pronunciation: 'ehl SEHR ehs ahn-teh-ree-OHR ah lah ehk-sees-TEHN-see-ah', category: 'existential-concepts', audio: 'el-ser-es-anterior' },
  { spanish: 'La nada nos confronta con nuestra finitud', english: 'Nothingness confronts us with our finitude', pronunciation: 'lah NAH-dah nohs kohn-FROHN-tah kohn NWEHS-trah fee-nee-TOOD', category: 'existential-concepts', audio: 'la-nada-nos-confronta' },
  { spanish: 'La libertad implica una responsabilidad absoluta', english: 'Freedom implies absolute responsibility', pronunciation: 'lah lee-behr-TAHD eem-PLEE-kah OO-nah rrehs-pohn-sah-bee-lee-DAHD ahb-soh-LOO-tah', category: 'existential-concepts', audio: 'la-libertad-implica' },
  { spanish: 'La angustia surge ante las posibilidades infinitas', english: 'Anguish arises before infinite possibilities', pronunciation: 'lah ahn-GOOS-tee-ah SOOR-heh AHN-teh lahs poh-see-bee-lee-DAH-dehs een-fee-NEE-tahs', category: 'existential-concepts', audio: 'la-angustia-surge' },
  { spanish: 'El absurdo nace de la tensión entre el hombre y el mundo', english: 'The absurd is born from the tension between man and the world', pronunciation: 'ehl ahb-SOOR-doh NAH-seh deh lah tehn-see-OHN EHN-treh ehl OHM-breh ee ehl MOON-doh', category: 'existential-concepts', audio: 'el-absurdo-nace' },
  { spanish: 'La autenticidad exige vivir conforme a uno mismo', english: 'Authenticity demands living true to oneself', pronunciation: 'lah ow-tehn-tee-see-DAHD ehk-SEE-heh bee-BEER kohn-FOHR-meh ah OO-noh MEES-moh', category: 'existential-concepts', audio: 'la-autenticidad-exige' },
  { spanish: 'El libre albedrío es la capacidad de elegir', english: 'Free will is the capacity to choose', pronunciation: 'ehl LEE-breh ahl-beh-DREE-oh ehs lah kah-pah-see-DAHD deh eh-leh-HEER', category: 'existential-concepts', audio: 'el-libre-albedrio' },
  { spanish: 'La conciencia nos distingue del resto de los seres', english: 'Consciousness distinguishes us from other beings', pronunciation: 'lah kohn-see-EHN-see-ah nohs dees-TEEN-geh dehl RREHS-toh deh lohs SEH-rehs', category: 'existential-concepts', audio: 'la-conciencia-nos-distingue' },
  { spanish: 'El existencialismo plantea que la existencia precede a la esencia', english: 'Existentialism posits that existence precedes essence', pronunciation: 'ehl ehk-sees-tehn-see-ah-LEES-moh plahn-TEH-ah keh lah ehk-sees-TEHN-see-ah preh-SEH-deh ah lah eh-SEHN-see-ah', category: 'existential-concepts', audio: 'el-existencialismo-plantea' },
  { spanish: 'La contingencia del ser humano es innegable', english: 'The contingency of the human being is undeniable', pronunciation: 'lah kohn-teen-HEHN-see-ah dehl sehr oo-MAH-noh ehs ee-neh-GAH-bleh', category: 'existential-concepts', audio: 'la-contingencia-del-ser' },
  { spanish: 'El dasein se refiere al ser-en-el-mundo', english: 'Dasein refers to being-in-the-world', pronunciation: 'ehl dah-SAYN seh rreh-fee-EH-reh ahl SEHR ehn ehl MOON-doh', category: 'existential-concepts', audio: 'el-dasein-se-refiere' },
  { spanish: 'La alienación surge cuando el individuo pierde su esencia', english: 'Alienation arises when the individual loses their essence', pronunciation: 'lah ah-lee-eh-nah-see-OHN SOOR-heh KWAHN-doh ehl een-dee-BEE-doo-oh pee-EHR-deh soo eh-SEHN-see-ah', category: 'existential-concepts', audio: 'la-alienacion-surge' },

  // === Ethical Reasoning (12) ===
  { spanish: 'La ética estudia los principios del comportamiento moral', english: 'Ethics studies the principles of moral behavior', pronunciation: 'lah EH-tee-kah ehs-TOO-dee-ah lohs preen-SEE-pee-ohs dehl kohm-pohr-tah-mee-EHN-toh moh-RAHL', category: 'ethical-reasoning', audio: 'la-etica-estudia' },
  { spanish: 'La moral varía según la cultura y la época', english: 'Morality varies according to culture and era', pronunciation: 'lah moh-RAHL bah-REE-ah seh-GOON lah kool-TOO-rah ee lah EH-poh-kah', category: 'ethical-reasoning', audio: 'la-moral-varia' },
  { spanish: 'El bien común debe prevalecer sobre el interés individual', english: 'The common good should prevail over individual interest', pronunciation: 'ehl bee-EHN koh-MOON DEH-beh preh-bah-leh-SEHR SOH-breh ehl een-teh-REHS een-dee-bee-doo-AHL', category: 'ethical-reasoning', audio: 'el-bien-comun-debe' },
  { spanish: 'El utilitarismo busca la mayor felicidad para el mayor número', english: 'Utilitarianism seeks the greatest happiness for the greatest number', pronunciation: 'ehl oo-tee-lee-tah-REES-moh BOOS-kah lah mah-YOHR feh-lee-see-DAHD PAH-rah ehl mah-YOHR NOO-meh-roh', category: 'ethical-reasoning', audio: 'el-utilitarismo-busca' },
  { spanish: 'El imperativo categórico exige actuar según principios universales', english: 'The categorical imperative demands acting according to universal principles', pronunciation: 'ehl eem-peh-rah-TEE-boh kah-teh-GOH-ree-koh ehk-SEE-heh ahk-too-AHR seh-GOON preen-SEE-pee-ohs oo-nee-behr-SAH-lehs', category: 'ethical-reasoning', audio: 'el-imperativo-categorico' },
  { spanish: 'La justicia social requiere equidad en la distribución de recursos', english: 'Social justice requires equity in the distribution of resources', pronunciation: 'lah hoos-TEE-see-ah soh-see-AHL rreh-kee-EH-reh eh-kee-DAHD ehn lah dees-tree-boo-see-OHN deh rreh-KOOR-sohs', category: 'ethical-reasoning', audio: 'la-justicia-social-requiere' },
  { spanish: 'El relativismo moral niega la existencia de verdades absolutas', english: 'Moral relativism denies the existence of absolute truths', pronunciation: 'ehl rreh-lah-tee-BEES-moh moh-RAHL nee-EH-gah lah ehk-sees-TEHN-see-ah deh behr-DAH-dehs ahb-soh-LOO-tahs', category: 'ethical-reasoning', audio: 'el-relativismo-moral' },
  { spanish: 'La virtud es un hábito que se cultiva con la práctica', english: 'Virtue is a habit cultivated through practice', pronunciation: 'lah beer-TOOD ehs oon AH-bee-toh keh seh kool-TEE-bah kohn lah PRAHK-tee-kah', category: 'ethical-reasoning', audio: 'la-virtud-es-un-habito' },
  { spanish: 'El dilema ético nos obliga a elegir entre dos males', english: 'The ethical dilemma forces us to choose between two wrongs', pronunciation: 'ehl dee-LEH-mah EH-tee-koh nohs oh-BLEE-gah ah eh-leh-HEER EHN-treh dohs MAH-lehs', category: 'ethical-reasoning', audio: 'el-dilema-etico' },
  { spanish: 'La bioética aborda cuestiones de vida y muerte', english: 'Bioethics addresses questions of life and death', pronunciation: 'lah bee-oh-EH-tee-kah ah-BOHR-dah kweh-stee-OH-nehs deh BEE-dah ee MWEHR-teh', category: 'ethical-reasoning', audio: 'la-bioetica-aborda' },
  { spanish: 'Los derechos humanos son inalienables e universales', english: 'Human rights are inalienable and universal', pronunciation: 'lohs deh-REH-chohs oo-MAH-nohs sohn ee-nah-lee-eh-NAH-blehs eh oo-nee-behr-SAH-lehs', category: 'ethical-reasoning', audio: 'los-derechos-humanos' },
  { spanish: 'La responsabilidad moral recae en el agente consciente', english: 'Moral responsibility falls on the conscious agent', pronunciation: 'lah rrehs-pohn-sah-bee-lee-DAHD moh-RAHL rreh-KAH-eh ehn ehl ah-HEHN-teh kohn-see-EHN-teh', category: 'ethical-reasoning', audio: 'la-responsabilidad-moral' },

  // === Argumentation & Logic (12) ===
  { spanish: 'La premisa debe ser verdadera para que la conclusión sea válida', english: 'The premise must be true for the conclusion to be valid', pronunciation: 'lah preh-MEE-sah DEH-beh sehr behr-dah-DEH-rah PAH-rah keh lah kohn-kloo-see-OHN SEH-ah BAH-lee-dah', category: 'argumentation-logic', audio: 'la-premisa-debe-ser' },
  { spanish: 'La conclusión se deriva lógicamente de las premisas', english: 'The conclusion follows logically from the premises', pronunciation: 'lah kohn-kloo-see-OHN seh deh-REE-bah LOH-hee-kah-MEHN-teh deh lahs preh-MEE-sahs', category: 'argumentation-logic', audio: 'la-conclusion-se-deriva' },
  { spanish: 'Eso es una falacia ad hominem: ataca a la persona, no al argumento', english: 'That is an ad hominem fallacy: it attacks the person, not the argument', pronunciation: 'EH-soh ehs OO-nah fah-LAH-see-ah ahd OH-mee-nehm ah-TAH-kah ah lah pehr-SOH-nah noh ahl ahr-goo-MEHN-toh', category: 'argumentation-logic', audio: 'eso-es-una-falacia' },
  { spanish: 'El silogismo consta de dos premisas y una conclusión', english: 'The syllogism consists of two premises and a conclusion', pronunciation: 'ehl see-loh-HEES-moh KOHNS-tah deh dohs preh-MEE-sahs ee OO-nah kohn-kloo-see-OHN', category: 'argumentation-logic', audio: 'el-silogismo-consta' },
  { spanish: 'La deducción va de lo general a lo particular', english: 'Deduction goes from the general to the particular', pronunciation: 'lah deh-dook-see-OHN bah deh loh heh-neh-RAHL ah loh pahr-tee-koo-LAHR', category: 'argumentation-logic', audio: 'la-deduccion-va' },
  { spanish: 'La inducción parte de casos específicos para llegar a una generalización', english: 'Induction starts from specific cases to reach a generalization', pronunciation: 'lah een-dook-see-OHN PAHR-teh deh KAH-sohs ehs-peh-SEE-fee-kohs PAH-rah yeh-GAHR ah OO-nah heh-neh-rah-lee-sah-see-OHN', category: 'argumentation-logic', audio: 'la-induccion-parte' },
  { spanish: 'Permítame refutar ese argumento con evidencia empírica', english: 'Allow me to refute that argument with empirical evidence', pronunciation: 'pehr-MEE-tah-meh rreh-foo-TAHR EH-seh ahr-goo-MEHN-toh kohn eh-bee-DEHN-see-ah ehm-PEE-ree-kah', category: 'argumentation-logic', audio: 'permitame-refutar' },
  { spanish: 'No se puede rebatir un hecho con una opinión', english: 'You cannot rebut a fact with an opinion', pronunciation: 'noh seh PWEH-deh rreh-bah-TEER oon EH-choh kohn OO-nah oh-pee-nee-OHN', category: 'argumentation-logic', audio: 'no-se-puede-rebatir' },
  { spanish: 'Tu argumento incurre en una petición de principio', english: 'Your argument commits a begging the question fallacy', pronunciation: 'too ahr-goo-MEHN-toh een-KOO-rreh ehn OO-nah peh-tee-see-OHN deh preen-SEE-pee-oh', category: 'argumentation-logic', audio: 'tu-argumento-incurre' },
  { spanish: 'La analogía es un recurso argumentativo, no una prueba', english: 'Analogy is an argumentative resource, not proof', pronunciation: 'lah ah-nah-loh-HEE-ah ehs oon rreh-KOOR-soh ahr-goo-mehn-tah-TEE-boh noh OO-nah PROO-eh-bah', category: 'argumentation-logic', audio: 'la-analogia-es-un-recurso' },
  { spanish: 'Correlación no implica causalidad', english: 'Correlation does not imply causation', pronunciation: 'koh-rreh-lah-see-OHN noh eem-PLEE-kah kow-sah-lee-DAHD', category: 'argumentation-logic', audio: 'correlacion-no-implica' },
  { spanish: 'La carga de la prueba recae sobre quien afirma', english: 'The burden of proof falls on the one who asserts', pronunciation: 'lah KAHR-gah deh lah PROO-eh-bah rreh-KAH-eh SOH-breh kee-EHN ah-FEER-mah', category: 'argumentation-logic', audio: 'la-carga-de-la-prueba' },

  // === Abstract Expression (12) ===
  { spanish: 'En esencia, el problema radica en la falta de comunicación', english: 'In essence, the problem lies in the lack of communication', pronunciation: 'ehn eh-SEHN-see-ah ehl proh-BLEH-mah rah-DEE-kah ehn lah FAHL-tah deh koh-moo-nee-kah-see-OHN', category: 'abstract-expression', audio: 'en-esencia-el-problema' },
  { spanish: 'En el fondo, todos buscamos lo mismo', english: 'Deep down, we all seek the same thing', pronunciation: 'ehn ehl FOHN-doh TOH-dohs boos-KAH-mohs loh MEES-moh', category: 'abstract-expression', audio: 'en-el-fondo-todos' },
  { spanish: 'La trascendencia del arte va más allá de lo material', english: 'The transcendence of art goes beyond the material', pronunciation: 'lah trahs-sehn-DEHN-see-ah dehl AHR-teh bah mahs ah-YAH deh loh mah-teh-ree-AHL', category: 'abstract-expression', audio: 'la-trascendencia-del-arte' },
  { spanish: 'Lo intangible a menudo tiene más valor que lo tangible', english: 'The intangible often has more value than the tangible', pronunciation: 'loh een-tahn-HEE-bleh ah meh-NOO-doh tee-EH-neh mahs bah-LOHR keh loh tahn-HEE-bleh', category: 'abstract-expression', audio: 'lo-intangible-a-menudo' },
  { spanish: 'La dualidad entre razón y emoción define al ser humano', english: 'The duality between reason and emotion defines the human being', pronunciation: 'lah doo-ah-lee-DAHD EHN-treh rrah-SOHN ee eh-moh-see-OHN deh-FEE-neh ahl SEHR oo-MAH-noh', category: 'abstract-expression', audio: 'la-dualidad-entre-razon' },
  { spanish: 'La paradoja nos obliga a repensar nuestras certezas', english: 'The paradox forces us to rethink our certainties', pronunciation: 'lah pah-rah-DOH-hah nohs oh-BLEE-gah ah rreh-pehn-SAHR NWEHS-trahs sehr-TEH-sahs', category: 'abstract-expression', audio: 'la-paradoja-nos-obliga' },
  { spanish: 'La dialéctica permite la síntesis de ideas opuestas', english: 'Dialectics allows the synthesis of opposing ideas', pronunciation: 'lah dee-ah-LEHK-tee-kah pehr-MEE-teh lah SEEN-teh-sees deh ee-DEH-ahs oh-PWEHS-tahs', category: 'abstract-expression', audio: 'la-dialectica-permite' },
  { spanish: 'Lo sublime provoca asombro y reverencia', english: 'The sublime provokes awe and reverence', pronunciation: 'loh soo-BLEE-meh proh-BOH-kah ah-SOHM-broh ee rreh-beh-REHN-see-ah', category: 'abstract-expression', audio: 'lo-sublime-provoca' },
  { spanish: 'La cosmovisión de un pueblo moldea su filosofía', english: 'A people\'s worldview shapes their philosophy', pronunciation: 'lah kohs-moh-bee-see-OHN deh oon PWEH-bloh mohl-DEH-ah soo fee-loh-soh-FEE-ah', category: 'abstract-expression', audio: 'la-cosmovision-de-un-pueblo' },
  { spanish: 'El pensamiento crítico cuestiona lo que se da por sentado', english: 'Critical thinking questions what is taken for granted', pronunciation: 'ehl pehn-sah-mee-EHN-toh KREE-tee-koh kwehs-tee-OH-nah loh keh seh dah pohr sehn-TAH-doh', category: 'abstract-expression', audio: 'el-pensamiento-critico' },
  { spanish: 'La epistemología examina los límites del conocimiento', english: 'Epistemology examines the limits of knowledge', pronunciation: 'lah eh-pees-teh-moh-loh-HEE-ah ehk-SAH-mee-nah lohs LEE-mee-tehs dehl koh-noh-see-mee-EHN-toh', category: 'abstract-expression', audio: 'la-epistemologia-examina' },
  { spanish: 'La hermenéutica se ocupa de la interpretación de textos', english: 'Hermeneutics deals with the interpretation of texts', pronunciation: 'lah ehr-meh-NEH-oo-tee-kah seh oh-KOO-pah deh lah een-tehr-preh-tah-see-OHN deh TEHKS-tohs', category: 'abstract-expression', audio: 'la-hermeneutica-se-ocupa' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L66PhraseByAudio = phraseByAudio

// === PHILOSOPHY CIRCLE (unique activity) ===

export interface PhilosophyCircleChallenge {
  statement: string
  english: string
  question: string
  correctAnswer: string
  options: string[]
}

export const PHILOSOPHY_CIRCLE_CHALLENGES: PhilosophyCircleChallenge[] = [
  {
    statement: 'Sartre dijo: "El hombre está condenado a ser libre."',
    english: 'Sartre said: "Man is condemned to be free."',
    question: 'What does Sartre mean by being "condemned" to freedom?',
    correctAnswer: 'Freedom is inescapable; we must always choose, and that burden is unavoidable.',
    options: ['Freedom is inescapable; we must always choose, and that burden is unavoidable.', 'Humans are literally imprisoned by their freedom.', 'Society punishes those who seek freedom.', 'Freedom is a legal right that everyone deserves.'],
  },
  {
    statement: 'Camus afirmó que la vida es absurda, pero hay que imaginar a Sísifo feliz.',
    english: 'Camus affirmed that life is absurd, but we must imagine Sisyphus happy.',
    question: 'What is the philosophical stance toward the absurd according to Camus?',
    correctAnswer: 'We should embrace life and find meaning in the struggle itself, despite the absurdity.',
    options: ['We should give up since life has no meaning.', 'We should embrace life and find meaning in the struggle itself, despite the absurdity.', 'We should find happiness through religious faith.', 'Sisyphus was actually happy because he enjoyed physical labor.'],
  },
  {
    statement: 'Kant propuso el imperativo categórico: "Actúa de modo que la máxima de tu acción pueda convertirse en ley universal."',
    english: 'Kant proposed the categorical imperative: "Act so that the maxim of your action could become a universal law."',
    question: 'What does the categorical imperative require of our moral actions?',
    correctAnswer: 'Our actions should be based on principles we would want everyone to follow universally.',
    options: ['We should always obey the laws of our country.', 'Our actions should be based on principles we would want everyone to follow universally.', 'We should act based on what brings us the most personal happiness.', 'Morality is determined by cultural norms.'],
  },
  {
    statement: 'Descartes escribió: "Pienso, luego existo."',
    english: 'Descartes wrote: "I think, therefore I am."',
    question: 'Why is the act of thinking proof of existence for Descartes?',
    correctAnswer: 'Even if everything else can be doubted, the very act of doubting proves a thinking being exists.',
    options: ['Because only intelligent beings truly exist.', 'Because thinking is the most important human activity.', 'Even if everything else can be doubted, the very act of doubting proves a thinking being exists.', 'Because God gave humans the ability to think.'],
  },
  {
    statement: 'Nietzsche declaró: "Dios ha muerto."',
    english: 'Nietzsche declared: "God is dead."',
    question: 'What did Nietzsche mean philosophically by this statement?',
    correctAnswer: 'Traditional religious and metaphysical foundations for morality have lost their authority in modern society.',
    options: ['He was making a literal theological claim about God.', 'He was expressing personal atheism.', 'Traditional religious and metaphysical foundations for morality have lost their authority in modern society.', 'He believed science had disproven the existence of God.'],
  },
  {
    statement: 'La ética del cuidado sostiene que las relaciones y la empatía son la base de la moralidad.',
    english: 'The ethics of care holds that relationships and empathy are the foundation of morality.',
    question: 'How does the ethics of care differ from purely rational ethical systems?',
    correctAnswer: 'It prioritizes interpersonal relationships and emotional responsiveness over abstract universal rules.',
    options: ['It says morality does not exist.', 'It focuses only on family relationships.', 'It prioritizes interpersonal relationships and emotional responsiveness over abstract universal rules.', 'It rejects all forms of reasoning in ethics.'],
  },
  {
    statement: 'Simone de Beauvoir escribió: "No se nace mujer, se llega a serlo."',
    english: 'Simone de Beauvoir wrote: "One is not born a woman, one becomes one."',
    question: 'What philosophical concept does this statement illustrate?',
    correctAnswer: 'Gender identity is socially constructed rather than biologically determined — existence precedes essence.',
    options: ['Women must work hard to earn their identity.', 'Gender identity is socially constructed rather than biologically determined — existence precedes essence.', 'Biology has no role in human identity.', 'Only women have philosophical problems with identity.'],
  },
]

// === LESSON DATA ===

export const L66Data: LessonData = {
  id: 'L6.6',
  hero: {
    lessonId: 'L6.6',
    title: 'Philosophy & Abstract Thought',
    subtitle: 'Thinking deeply and debating ideas in Spanish',
    description: 'Engage with existential questions, ethical reasoning, logical argumentation, and abstract expression at the highest level. Learn to articulate philosophical positions, identify logical fallacies, and discuss transcendent ideas — the vocabulary that unlocks the deepest conversations in Spanish.',
    image: '/images/L6.6/L6.6.jpg',
    gradient: 'from-purple-800/65 via-violet-700/55 to-indigo-700/65',
    accentColor: 'violet-200',
  },

  objectives: [
    { icon: '🌌', title: 'Existential Concepts', desc: 'Discuss el ser, la nada, la libertad, la angustia, el absurdo, and the foundations of existentialist thought.' },
    { icon: '⚖️', title: 'Ethical Reasoning', desc: 'Engage with la ética, la moral, el bien común, el utilitarismo, and social justice frameworks.' },
    { icon: '🧩', title: 'Argumentation & Logic', desc: 'Master la premisa, la conclusión, la falacia, el silogismo, deduction, induction, and refutation.' },
    { icon: '💫', title: 'Abstract Expression', desc: 'Articulate en esencia, en el fondo, la trascendencia, lo intangible, la paradoja, and la dialéctica.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.7', label: 'Academic Language', detail: 'L5.7 introduced academic register and reported speech. Now apply that formality to philosophical discourse.' },
    { fromLesson: 'L5.4', label: 'Argumentation', detail: 'L5.4 taught discourse markers and argumentation. Now go deeper with formal logic and fallacy identification.' },
    { fromLesson: 'L5.2', label: 'Subjunctive & Hypothetical', detail: 'L5.2 covered advanced subjunctive. Now use it in philosophical hypotheticals: "Si existiera la justicia perfecta..."' },
  ],

  sectionTransitions: [
    { afterSection: 'existential-concepts', text: 'You\'ve explored the big existential questions! Now let\'s examine how we decide what is right and wrong.' },
    { afterSection: 'ethical-reasoning', text: 'Ethics understood! Time to sharpen your logical reasoning and learn to spot fallacies.' },
    { afterSection: 'argumentation-logic', text: 'Your logic is razor-sharp! Let\'s now explore the language of abstraction and transcendence.' },
    { afterSection: 'dialogues', text: 'Brilliant philosophical dialogues! Let\'s explore the deep roots of philosophy in the Spanish-speaking world.' },
    { afterSection: 'cultural', text: 'Cultural wisdom absorbed! Now enter the Philosophy Circle and test your understanding.' },
    { afterSection: 'philosophy-circle', text: 'Final stretch — let\'s see what you\'ve learned!' },
  ],

  personalizedVocab: [
    { spanish: 'En esencia...', english: 'In essence...' },
    { spanish: 'Desde una perspectiva ética...', english: 'From an ethical perspective...' },
    { spanish: 'La premisa fundamental es...', english: 'The fundamental premise is...' },
    { spanish: 'Lo que subyace aquí es...', english: 'What underlies this is...' },
    { spanish: 'La paradoja consiste en...', english: 'The paradox consists in...' },
    { spanish: 'En el fondo...', english: 'Deep down...' },
  ],

  pronunciationChallenges: [
    { spanish: 'El existencialismo plantea que la existencia precede a la esencia', pronunciation: 'ehl ehk-sees-tehn-see-ah-LEES-moh plahn-TEH-ah keh lah ehk-sees-TEHN-see-ah preh-SEH-deh ah lah eh-SEHN-see-ah', english: 'Existentialism posits that existence precedes essence', audio: 'el-existencialismo-plantea-que-la-existencia-precede-a-la-esencia', tip: 'Notice the rhythm of philosophical Spanish: long, flowing sentences with multiple syllables. "Existencialismo" has 8 syllables — take it slow and stress "-LIS-".' },
    { spanish: 'La ética estudia los principios del comportamiento moral', pronunciation: 'lah EH-tee-kah ehs-TOO-dee-ah lohs preen-SEE-pee-ohs dehl kohm-pohr-tah-mee-EHN-toh moh-RAHL', english: 'Ethics studies the principles of moral behavior', audio: 'la-etica-estudia-los-principios-del-comportamiento-moral', tip: '"Ética" carries an accent on the first syllable: É-ti-ca. Without the accent, "etica" would be wrong. Many philosophical terms carry written accents.' },
    { spanish: 'Correlación no implica causalidad', pronunciation: 'koh-rreh-lah-see-OHN noh eem-PLEE-kah kow-sah-lee-DAHD', english: 'Correlation does not imply causation', audio: 'correlacion-no-implica-causalidad', tip: 'This is one of the most important phrases in logical argumentation. Note the strong double-r in "correlación" and the stress pattern: co-rre-la-CIÓN.' },
    { spanish: 'La dialéctica permite la síntesis de ideas opuestas', pronunciation: 'lah dee-ah-LEHK-tee-kah pehr-MEE-teh lah SEEN-teh-sees deh ee-DEH-ahs oh-PWEHS-tahs', english: 'Dialectics allows the synthesis of opposing ideas', audio: 'la-dialectica-permite-la-sintesis-de-ideas-opuestas', tip: '"Dialéctica" and "síntesis" are both esdrújula words (stress on the third-to-last syllable). This pattern is common in academic/philosophical Spanish.' },
    { spanish: 'El imperativo categórico exige actuar según principios universales', pronunciation: 'ehl eem-peh-rah-TEE-boh kah-teh-GOH-ree-koh ehk-SEE-heh ahk-too-AHR seh-GOON preen-SEE-pee-ohs oo-nee-behr-SAH-lehs', english: 'The categorical imperative demands acting according to universal principles', audio: 'el-imperativo-categorico-exige-actuar-segun-principios-universales', tip: '"Categórico" is stressed on -GÓ-. Kantian terminology in Spanish follows precise pronunciation rules — each word matters.' },
    { spanish: 'La hermenéutica se ocupa de la interpretación de textos', pronunciation: 'lah ehr-meh-NEH-oo-tee-kah seh oh-KOO-pah deh lah een-tehr-preh-tah-see-OHN deh TEHKS-tohs', english: 'Hermeneutics deals with the interpretation of texts', audio: 'la-hermeneutica-se-ocupa-de-la-interpretacion-de-textos', tip: '"Hermenéutica" is one of the longest philosophical terms: her-me-NÉU-ti-ca. The "h" is silent, and the diphthong "éu" sounds like "EH-oo."' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'existential-concepts', label: 'Existential Concepts' },
    { id: 'ethical-reasoning', label: 'Ethical Reasoning' },
    { id: 'argumentation-logic', label: 'Argumentation & Logic' },
    { id: 'abstract-expression', label: 'Abstract Expression' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'concept-sorting', label: 'Concept Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'philosophy-circle', label: 'Philosophy Circle' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'existential-concepts',
      title: 'Existential Concepts — Conceptos Existenciales',
      description: 'The core vocabulary of existentialist philosophy: being, nothingness, freedom, anguish, and the search for authenticity.',
      tabs: [
        { label: 'Being & Nothingness', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'existential-concepts').slice(0, 6) },
        { label: 'Freedom & Authenticity', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'existential-concepts').slice(6) },
      ],
    },
    {
      id: 'ethical-reasoning',
      title: 'Ethical Reasoning — Razonamiento Ético',
      description: 'From utilitarianism to social justice, the language of moral philosophy and ethical debate.',
      tabs: [
        { label: 'Ethical Frameworks', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'ethical-reasoning').slice(0, 6) },
        { label: 'Rights & Responsibility', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'ethical-reasoning').slice(6) },
      ],
    },
    {
      id: 'argumentation-logic',
      title: 'Argumentation & Logic — Argumentación y Lógica',
      description: 'Master the tools of logical reasoning: premises, conclusions, fallacies, deduction, and the art of refutation.',
      tabs: [
        { label: 'Logic & Structure', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'argumentation-logic').slice(0, 6) },
        { label: 'Refutation & Evidence', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'argumentation-logic').slice(6) },
      ],
    },
    {
      id: 'abstract-expression',
      title: 'Abstract Expression — Expresión Abstracta',
      description: 'The language of transcendence, paradox, and deep conceptual thinking that marks true intellectual fluency.',
      tabs: [
        { label: 'Essence & Transcendence', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'abstract-expression').slice(0, 6) },
        { label: 'Dialectics & Epistemology', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'abstract-expression').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Philosophical Vocabulary: Esdrújulas',
      content: 'Many philosophical terms in Spanish are esdrújula words (stressed on the antepenultimate syllable): dialéctica, epistemología, hermenéutica, metafísica, silogísmo. These ALWAYS carry a written accent. When you see a long, intellectual-sounding word, check for the accent mark — it tells you exactly where to stress.',
      example: 'dia-LÉC-ti-ca | e-pis-te-mo-lo-GÍ-a | her-me-NÉU-ti-ca | me-ta-FÍ-si-ca',
    },
    {
      title: 'Building Complex Philosophical Sentences',
      content: 'Philosophical Spanish favors long, subordinate-heavy sentences. The key connectors: "en la medida en que" (insofar as), "en tanto que" (inasmuch as), "dado que" (given that), "a condición de que" (on the condition that). These require subjunctive when expressing uncertainty or hypothesis.',
      example: 'En la medida en que la libertad sea absoluta, la responsabilidad también lo es.',
      reviewFrom: 'L5.4',
    },
    {
      title: 'The Neutral "Lo" in Abstract Thinking',
      content: 'Spanish uses "lo + adjective" to create abstract nouns that English often renders with "the + adjective + thing/part": lo bueno (the good), lo intangible (the intangible), lo sublime (the sublime). This construction is essential for philosophical discourse and marks advanced proficiency.',
      example: 'Lo verdadero no siempre es lo evidente. | Lo absurdo de la existencia... | Lo trascendente va más allá de lo material.',
    },
    {
      title: 'Logical Connectors for Arguments',
      content: 'Formal argumentation requires precise connectors: "por consiguiente" (consequently), "de ahí que" (hence, from which it follows — triggers subjunctive), "en virtud de" (by virtue of), "dado que" (given that). These elevate your discourse from conversational to academic/philosophical.',
      example: 'Dado que toda acción tiene consecuencias, por consiguiente, somos responsables de nuestros actos.',
      reviewFrom: 'L5.4',
    },
  ],

  flashcardGroups: [
    {
      key: 'existential',
      label: 'Existential Concepts',
      audioKeys: ['el-ser-es-anterior', 'la-nada-nos-confronta', 'la-libertad-implica', 'la-angustia-surge', 'el-absurdo-nace', 'la-autenticidad-exige', 'el-libre-albedrio', 'la-conciencia-nos-distingue', 'el-existencialismo-plantea', 'la-contingencia-del-ser'],
    },
    {
      key: 'ethics',
      label: 'Ethical Reasoning',
      audioKeys: ['la-etica-estudia', 'la-moral-varia', 'el-bien-comun-debe', 'el-utilitarismo-busca', 'el-imperativo-categorico', 'la-justicia-social-requiere', 'el-relativismo-moral', 'la-virtud-es-un-habito', 'el-dilema-etico', 'los-derechos-humanos'],
    },
    {
      key: 'logic-abstract',
      label: 'Logic & Abstract Thought',
      audioKeys: ['la-premisa-debe-ser', 'eso-es-una-falacia', 'la-deduccion-va', 'la-induccion-parte', 'correlacion-no-implica', 'en-esencia-el-problema', 'la-paradoja-nos-obliga', 'la-dialectica-permite', 'el-pensamiento-critico', 'la-epistemologia-examina'],
    },
  ],

  matchPairs: [
    { left: 'La premisa', right: 'The premise' },
    { left: 'La falacia', right: 'The fallacy' },
    { left: 'El libre albedrío', right: 'Free will' },
    { left: 'La dialéctica', right: 'Dialectics' },
    { left: 'El bien común', right: 'The common good' },
    { left: 'La paradoja', right: 'The paradox' },
    { left: 'La trascendencia', right: 'Transcendence' },
    { left: 'El silogismo', right: 'The syllogism' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Ethics vs. Logic',
      instruction: 'Does this concept belong to ethics or formal logic?',
      buckets: ['Ethics ⚖️', 'Logic 🧩'],
      items: [
        { text: 'El bien común', bucket: 'Ethics ⚖️' },
        { text: 'El utilitarismo', bucket: 'Ethics ⚖️' },
        { text: 'La justicia social', bucket: 'Ethics ⚖️' },
        { text: 'La virtud', bucket: 'Ethics ⚖️' },
        { text: 'El silogismo', bucket: 'Logic 🧩' },
        { text: 'La falacia', bucket: 'Logic 🧩' },
        { text: 'La deducción', bucket: 'Logic 🧩' },
        { text: 'La inducción', bucket: 'Logic 🧩' },
      ],
    },
    {
      title: 'Concrete vs. Abstract',
      instruction: 'Is this expression concrete or abstract?',
      buckets: ['Concrete 🔍', 'Abstract 💫'],
      items: [
        { text: 'La premisa del argumento', bucket: 'Concrete 🔍' },
        { text: 'El texto de Kant', bucket: 'Concrete 🔍' },
        { text: 'Los derechos humanos', bucket: 'Concrete 🔍' },
        { text: 'La carga de la prueba', bucket: 'Concrete 🔍' },
        { text: 'La trascendencia', bucket: 'Abstract 💫' },
        { text: 'Lo intangible', bucket: 'Abstract 💫' },
        { text: 'La dualidad', bucket: 'Abstract 💫' },
        { text: 'La nada', bucket: 'Abstract 💫' },
      ],
    },
  ],
  sortSectionId: 'concept-sorting',
  sortTitle: 'Concept Sorting',

  dialogues: [
    {
      id: 'dialogue-philosophy-class',
      title: 'Philosophy Class — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Profesora Reyes', text: 'Buenas tardes. Hoy vamos a analizar la frase de Sartre: "El hombre está condenado a ser libre." ¿Quién quiere empezar?', audio: '/audio/L6.6/phrases/d1-line1.mp3' },
        { speaker: 'Martín', text: 'Yo. Me parece que Sartre plantea que la libertad no es un regalo, sino una carga. No podemos escapar de la responsabilidad de elegir.', audio: '/audio/L6.6/phrases/d1-line2.mp3' },
        { speaker: 'Lucía', text: 'Estoy de acuerdo, pero creo que el problema es más profundo. Si no hay esencia previa, cada elección nos define. Eso genera angustia.', audio: '/audio/L6.6/phrases/d1-line3.mp3' },
        { speaker: 'Profesora Reyes', text: 'Excelente. ¿Y cómo se relaciona eso con el concepto de autenticidad?', audio: '/audio/L6.6/phrases/d1-line4.mp3' },
        { speaker: 'Diego', text: 'En el fondo, vivir auténticamente significa aceptar esa libertad sin recurrir a excusas: ni la religión, ni la sociedad, ni la naturaleza humana.', audio: '/audio/L6.6/phrases/d1-line5.mp3', annotations: [{ phrase: 'En el fondo', fromLesson: 'L6.6', note: 'Abstract expression: "Deep down / At its core"' }] },
        { speaker: 'Lucía', text: 'Pero ahí está la paradoja: si niego mi libertad para evitar la angustia, ¿soy menos libre o simplemente cobarde?', audio: '/audio/L6.6/phrases/d1-line6.mp3' },
        { speaker: 'Martín', text: 'Sartre diría que es mala fe. Es una automentira existencial. Fingir que no elegimos cuando siempre lo hacemos.', audio: '/audio/L6.6/phrases/d1-line7.mp3' },
        { speaker: 'Profesora Reyes', text: 'Muy bien. ¿Y Camus? ¿Cómo responde al absurdo que surge de esa libertad radical?', audio: '/audio/L6.6/phrases/d1-line8.mp3' },
        { speaker: 'Diego', text: 'Camus dice que hay que imaginar a Sísifo feliz. En esencia, la respuesta al absurdo no es la evasión, sino la rebelión y la aceptación simultáneas.', audio: '/audio/L6.6/phrases/d1-line9.mp3', annotations: [{ phrase: 'En esencia', fromLesson: 'L6.6', note: 'Abstract expression: "In essence"' }] },
        { speaker: 'Lucía', text: '¿Pero no es contradictorio aceptar y rebelarse al mismo tiempo? La dialéctica de Camus me parece problemática.', audio: '/audio/L6.6/phrases/d1-line10.mp3' },
        { speaker: 'Profesora Reyes', text: 'Ahí radica precisamente lo genial de Camus: la contradicción no es un defecto del argumento, sino un reflejo fiel de la condición humana.', audio: '/audio/L6.6/phrases/d1-line11.mp3' },
        { speaker: 'Martín', text: 'Entonces, ¿la filosofía no busca eliminar las contradicciones, sino comprenderlas?', audio: '/audio/L6.6/phrases/d1-line12.mp3' },
        { speaker: 'Profesora Reyes', text: 'Exactamente. La filosofía, en el fondo, es el arte de convivir con las preguntas que no tienen respuesta definitiva.', audio: '/audio/L6.6/phrases/d1-line13.mp3' },
        { speaker: 'Diego', text: 'Me recuerda a lo que decía Sócrates: "Solo sé que no sé nada." La sabiduría comienza con reconocer nuestra ignorancia.', audio: '/audio/L6.6/phrases/d1-line14.mp3' },
        { speaker: 'Lucía', text: 'Y eso, paradójicamente, es lo más liberador de todo.', audio: '/audio/L6.6/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-ethics-debate',
      title: 'Ethics Debate — Bogotá',
      location: 'Bogotá',
      lines: [
        { speaker: 'Moderador', text: 'El tema de hoy: ¿Es moralmente justificable sacrificar a uno para salvar a muchos? El clásico dilema del tranvía. Empiece usted, doctora Vargas.', audio: '/audio/L6.6/phrases/d2-line1.mp3' },
        { speaker: 'Dra. Vargas', text: 'Desde una perspectiva utilitarista, la respuesta es clara: el bien común debe prevalecer. La mayor felicidad para el mayor número.', audio: '/audio/L6.6/phrases/d2-line2.mp3' },
        { speaker: 'Prof. Mendoza', text: 'Pero eso convierte a las personas en medios, no en fines. El imperativo categórico de Kant lo prohíbe expresamente.', audio: '/audio/L6.6/phrases/d2-line3.mp3', annotations: [{ phrase: 'El imperativo categórico de Kant', fromLesson: 'L6.6', note: 'Kant\'s categorical imperative: act as if your maxim were universal law' }] },
        { speaker: 'Dra. Vargas', text: 'Su argumento presupone que los principios abstractos tienen más peso que las consecuencias reales. Eso me parece una falacia de apelación a la autoridad.', audio: '/audio/L6.6/phrases/d2-line4.mp3' },
        { speaker: 'Prof. Mendoza', text: 'Con todo respeto, no es una falacia. Estoy apelando a un principio racional, no a una autoridad. La dignidad humana no es negociable.', audio: '/audio/L6.6/phrases/d2-line5.mp3' },
        { speaker: 'Moderador', text: 'Interesante. ¿Y si consideramos la ética del cuidado? ¿Cómo cambia el análisis?', audio: '/audio/L6.6/phrases/d2-line6.mp3' },
        { speaker: 'Dra. Vargas', text: 'La ética del cuidado nos obligaría a considerar la relación con cada persona. No es lo mismo sacrificar a un desconocido que a un ser querido.', audio: '/audio/L6.6/phrases/d2-line7.mp3' },
        { speaker: 'Prof. Mendoza', text: 'Precisamente. Y ahí la premisa utilitarista se derrumba. No somos calculadoras morales; somos seres con vínculos afectivos.', audio: '/audio/L6.6/phrases/d2-line8.mp3' },
        { speaker: 'Dra. Vargas', text: 'Permítame rebatir eso: si solo protegiéramos a quienes conocemos, nunca habría justicia social. Los derechos humanos son universales precisamente porque trascienden los vínculos personales.', audio: '/audio/L6.6/phrases/d2-line9.mp3' },
        { speaker: 'Prof. Mendoza', text: 'Ahí tiene un punto válido. La tensión entre lo particular y lo universal es, en el fondo, el gran dilema ético de nuestra época.', audio: '/audio/L6.6/phrases/d2-line10.mp3' },
        { speaker: 'Moderador', text: '¿Podemos llegar a alguna síntesis? ¿O es este un dilema irresoluble?', audio: '/audio/L6.6/phrases/d2-line11.mp3' },
        { speaker: 'Prof. Mendoza', text: 'La dialéctica nos enseña que la síntesis no elimina la tensión. Debemos actuar con principios pero sin ignorar las consecuencias.', audio: '/audio/L6.6/phrases/d2-line12.mp3' },
        { speaker: 'Dra. Vargas', text: 'Estoy de acuerdo. La sabiduría moral no es elegir un sistema ético, sino saber cuándo aplicar cada uno.', audio: '/audio/L6.6/phrases/d2-line13.mp3' },
        { speaker: 'Moderador', text: 'Magnífico cierre. La paradoja de la ética es que necesitamos múltiples marcos para navegar un mundo complejo. Gracias a los dos.', audio: '/audio/L6.6/phrases/d2-line14.mp3' },
        { speaker: 'Dra. Vargas', text: 'Gracias. Y recordemos: el pensamiento crítico cuestiona lo que se da por sentado, incluyendo nuestras propias conclusiones.', audio: '/audio/L6.6/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Engage in a philosophy class discussion about existentialism in Buenos Aires, then witness an ethics debate on the trolley problem in Bogotá.',

  culturalNotes: [
    {
      title: 'La Tradición Filosófica Latinoamericana',
      content: 'Latin America has a rich philosophical tradition often overlooked by the global academy. Thinkers like Leopoldo Zea (Mexico) developed "filosofía de la liberación" (liberation philosophy), arguing that Latin American thought must break free from European frameworks. Enrique Dussel\'s "Filosofía de la Liberación" challenged Eurocentric ethics. The region\'s unique experiences of colonialism, inequality, and cultural mestizaje have produced original philosophical contributions that redefine what it means to philosophize from the periphery.',
    },
    {
      title: 'Ortega y Gasset: "Yo soy yo y mi circunstancia"',
      content: 'Spanish philosopher José Ortega y Gasset (1883-1955) coined one of the most cited phrases in Spanish-language philosophy: "Yo soy yo y mi circunstancia, y si no la salvo a ella no me salvo yo" (I am myself and my circumstance, and if I do not save it, I do not save myself). This concept deeply influenced Latin American thought, emphasizing that philosophy must be rooted in lived experience and context — not just abstract universals. His concept of "razón vital" (vital reason) argues that life itself is the starting point of all philosophy.',
    },
    {
      title: 'La Teología de la Liberación',
      content: 'Born in Latin America in the 1960s, Liberation Theology (Teología de la Liberación) fused Christian theology with Marxist social analysis. Peruvian priest Gustavo Gutiérrez argued that God has a "preferential option for the poor" (opción preferencial por los pobres). This movement blurred the line between philosophy, theology, and political activism, producing concepts that remain central to Latin American intellectual discourse. Whether discussing ethics, politics, or social justice in Spanish, you will encounter its legacy.',
    },
  ],
  culturalGradient: 'from-purple-50 to-violet-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La existencia precede a la esencia" is a core principle of:', options: ['Utilitarianism', 'Existentialism', 'Empiricism', 'Stoicism'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "El libre ___ es la capacidad de elegir" (free will)', answer: 'albedrío' },
    { id: 3, type: 'tf', text: '"La deducción" goes from specific cases to general principles.', answer: false },
    { id: 4, type: 'mc', text: '"Correlación no implica causalidad" means:', options: ['Correlation proves causation', 'Correlation suggests causation', 'Correlation does not prove causation', 'Causation implies correlation'], answer: 2 },
    { id: 5, type: 'mc', text: '"La falacia ad hominem" attacks:', options: ['The argument\'s logic', 'The person making the argument', 'The evidence presented', 'The conclusion'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "En ___, el problema radica en la falta de comunicación" (In essence)', answer: 'esencia' },
    { id: 7, type: 'mc', text: 'The categorical imperative was proposed by:', options: ['Sartre', 'Camus', 'Kant', 'Nietzsche'], answer: 2 },
    { id: 8, type: 'tf', text: '"El utilitarismo busca la mayor felicidad para el mayor número" describes Bentham/Mill\'s philosophy.', answer: true },
    { id: 9, type: 'mc', text: 'In Dialogue 1, what is "mala fe" according to Sartre?', options: ['A religious concept', 'Self-deception about our freedom', 'Bad luck', 'A logical fallacy'], answer: 1 },
    { id: 10, type: 'mc', text: '"Lo intangible" uses the neutral "lo" to express:', options: ['A masculine noun', 'A feminine noun', 'An abstract concept', 'A plural noun'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ entre razón y emoción define al ser humano" (duality)', answer: 'dualidad' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what is the main disagreement?', options: ['Whether philosophy is useful', 'Whether consequences or principles should guide ethics', 'Whether God exists', 'Whether education is important'], answer: 1 },
    { id: 13, type: 'tf', text: 'Liberation Theology was born in Europe and later adopted in Latin America.', answer: false },
    { id: 14, type: 'mc', text: '"La carga de la prueba recae sobre quien afirma" means:', options: ['Everyone must prove everything', 'The burden of proof falls on the one who claims', 'Proof is not necessary', 'The judge decides the truth'], answer: 1 },
    { id: 15, type: 'mc', text: 'Ortega y Gasset\'s famous phrase is:', options: ['I think therefore I am', 'I am myself and my circumstance', 'God is dead', 'Man is condemned to be free'], answer: 1 },
  ],

  audioBase: '/audio/L6.6/phrases',

  uniqueActivity: {
    id: 'PhilosophyCircleL66',
    sectionId: 'philosophy-circle',
    sectionColor: 'bg-purple-50/40',
    sectionBorder: 'border-purple-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'existential-concepts': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'ethical-reasoning': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    'argumentation-logic': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'abstract-expression': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-pink-50/30', border: 'border-pink-100' },
    'concept-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'philosophy-circle': { bg: 'bg-purple-50/40', border: 'border-purple-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
