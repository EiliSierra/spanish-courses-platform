import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Emotional Vocabulary (12) ===
  { spanish: 'La angustia me invade cuando pienso en el futuro', english: 'Anguish overwhelms me when I think about the future', pronunciation: 'lah ahn-GOOS-tee-ah meh een-BAH-deh KWAHN-doh pee-EHN-soh ehn ehl foo-TOO-roh', category: 'emotional-vocabulary', audio: 'la-angustia-me-invade' },
  { spanish: 'La resiliencia es la capacidad de recuperarse de la adversidad', english: 'Resilience is the ability to recover from adversity', pronunciation: 'lah rreh-see-lee-EHN-see-ah ehs lah kah-pah-see-DAHD deh rreh-koo-peh-RAHR-seh deh lah ahd-behr-see-DAHD', category: 'emotional-vocabulary', audio: 'la-resiliencia-es' },
  { spanish: 'El apego inseguro puede afectar nuestras relaciones adultas', english: 'Insecure attachment can affect our adult relationships', pronunciation: 'ehl ah-PEH-goh een-seh-GOO-roh PWEH-deh ah-fehk-TAHR NWEHS-trahs rreh-lah-see-OH-nehs ah-DOOL-tahs', category: 'emotional-vocabulary', audio: 'el-apego-inseguro' },
  { spanish: 'La autoestima se construye a lo largo de toda la vida', english: 'Self-esteem is built throughout one\'s entire life', pronunciation: 'lah ow-toh-ehs-TEE-mah seh kohns-TROO-yeh ah loh LAHR-goh deh TOH-dah lah BEE-dah', category: 'emotional-vocabulary', audio: 'la-autoestima-se-construye' },
  { spanish: 'El duelo es un proceso necesario para sanar emocionalmente', english: 'Grief is a necessary process for emotional healing', pronunciation: 'ehl DWEH-loh ehs oon proh-SEH-soh neh-seh-SAH-ree-oh PAH-rah sah-NAHR eh-moh-see-oh-NAHL-mehn-teh', category: 'emotional-vocabulary', audio: 'el-duelo-es-un-proceso' },
  { spanish: 'La ansiedad se manifiesta de formas muy diferentes en cada persona', english: 'Anxiety manifests in very different ways in each person', pronunciation: 'lah ahn-see-eh-DAHD seh mah-nee-fee-EHS-tah deh FOHR-mahs mooy dee-feh-REHN-tehs ehn KAH-dah pehr-SOH-nah', category: 'emotional-vocabulary', audio: 'la-ansiedad-se-manifiesta' },
  { spanish: 'La empatía nos permite ponernos en el lugar del otro', english: 'Empathy allows us to put ourselves in another\'s place', pronunciation: 'lah ehm-pah-TEE-ah nohs pehr-MEE-teh poh-NEHR-nohs ehn ehl loo-GAHR dehl OH-troh', category: 'emotional-vocabulary', audio: 'la-empatia-nos-permite' },
  { spanish: 'El desapego saludable permite amar sin depender emocionalmente', english: 'Healthy detachment allows loving without emotional dependency', pronunciation: 'ehl deh-sah-PEH-goh sah-loo-DAH-bleh pehr-MEE-teh ah-MAHR seen deh-pehn-DEHR eh-moh-see-oh-NAHL-mehn-teh', category: 'emotional-vocabulary', audio: 'el-desapego-saludable' },
  { spanish: 'La vulnerabilidad no es debilidad; es valentía emocional', english: 'Vulnerability is not weakness; it is emotional courage', pronunciation: 'lah bool-neh-rah-bee-lee-DAHD noh ehs deh-bee-lee-DAHD ehs bah-lehn-TEE-ah eh-moh-see-oh-NAHL', category: 'emotional-vocabulary', audio: 'la-vulnerabilidad-no-es' },
  { spanish: 'La frustración surge cuando nuestras expectativas no se cumplen', english: 'Frustration arises when our expectations are not met', pronunciation: 'lah froos-trah-see-OHN SOOR-heh KWAHN-doh NWEHS-trahs ehks-pehk-tah-TEE-bahs noh seh KOOM-plehn', category: 'emotional-vocabulary', audio: 'la-frustracion-surge' },
  { spanish: 'La gratitud transforma nuestra perspectiva sobre la vida', english: 'Gratitude transforms our perspective on life', pronunciation: 'lah grah-tee-TOOD trahns-FOHR-mah NWEHS-trah pehr-spehk-TEE-bah SOH-breh lah BEE-dah', category: 'emotional-vocabulary', audio: 'la-gratitud-transforma' },
  { spanish: 'La culpa no resuelta puede convertirse en un peso emocional crónico', english: 'Unresolved guilt can become a chronic emotional burden', pronunciation: 'lah KOOL-pah noh rreh-SWEL-tah PWEH-deh kohn-behr-TEER-seh ehn oon PEH-soh eh-moh-see-oh-NAHL KROH-nee-koh', category: 'emotional-vocabulary', audio: 'la-culpa-no-resuelta' },

  // === Therapeutic Language (12) ===
  { spanish: '¿Cómo te hace sentir eso?', english: 'How does that make you feel?', pronunciation: 'KOH-moh teh AH-seh sehn-TEER EH-soh', category: 'therapeutic-language', audio: 'como-te-hace-sentir' },
  { spanish: 'Parece que estás experimentando una gran carga emocional', english: 'It seems like you\'re experiencing a great emotional burden', pronunciation: 'pah-REH-seh keh ehs-TAHS ehks-peh-ree-mehn-TAHN-doh OO-nah grahn KAHR-gah eh-moh-see-oh-NAHL', category: 'therapeutic-language', audio: 'parece-que-estas' },
  { spanish: 'Es válido sentirse así; no tienes que juzgarte por ello', english: 'It\'s valid to feel that way; you don\'t have to judge yourself for it', pronunciation: 'ehs BAH-lee-doh sehn-TEER-seh ah-SEE noh tee-EH-nehs keh hoos-GAHR-teh pohr EH-yoh', category: 'therapeutic-language', audio: 'es-valido-sentirse' },
  { spanish: 'Necesito establecer límites para proteger mi bienestar emocional', english: 'I need to set boundaries to protect my emotional well-being', pronunciation: 'neh-seh-SEE-toh ehs-tah-bleh-SEHR LEE-mee-tehs PAH-rah proh-teh-HEHR mee bee-ehn-ehs-TAHR eh-moh-see-oh-NAHL', category: 'therapeutic-language', audio: 'necesito-establecer-limites' },
  { spanish: 'Lo que sientes es una respuesta natural a lo que has vivido', english: 'What you feel is a natural response to what you\'ve experienced', pronunciation: 'loh keh see-EHN-tehs ehs OO-nah rrehs-PWEHS-tah nah-too-RAHL ah loh keh ahs bee-BEE-doh', category: 'therapeutic-language', audio: 'lo-que-sientes-es' },
  { spanish: 'A veces necesitamos pedir ayuda, y eso no nos hace débiles', english: 'Sometimes we need to ask for help, and that doesn\'t make us weak', pronunciation: 'ah BEH-sehs neh-seh-see-TAH-mohs peh-DEER ah-YOO-dah ee EH-soh noh nohs AH-seh DEH-bee-lehs', category: 'therapeutic-language', audio: 'a-veces-necesitamos' },
  { spanish: 'Vamos a explorar juntos de dónde viene esa emoción', english: 'Let\'s explore together where that emotion comes from', pronunciation: 'BAH-mohs ah ehks-ploh-RAHR HOON-tohs deh DOHN-deh bee-EH-neh EH-sah eh-moh-see-OHN', category: 'therapeutic-language', audio: 'vamos-a-explorar' },
  { spanish: 'El autocuidado no es egoísmo; es una necesidad fundamental', english: 'Self-care is not selfishness; it\'s a fundamental need', pronunciation: 'ehl ow-toh-kwee-DAH-doh noh ehs eh-goh-EES-moh ehs OO-nah neh-seh-see-DAHD foon-dah-mehn-TAHL', category: 'therapeutic-language', audio: 'el-autocuidado-no-es' },
  { spanish: 'Reconocer nuestras heridas es el primer paso para sanarlas', english: 'Recognizing our wounds is the first step to healing them', pronunciation: 'rreh-koh-noh-SEHR NWEHS-trahs eh-REE-dahs ehs ehl pree-MEHR PAH-soh PAH-rah sah-NAHR-lahs', category: 'therapeutic-language', audio: 'reconocer-nuestras-heridas' },
  { spanish: '¿Qué necesitas en este momento para sentirte mejor?', english: 'What do you need right now to feel better?', pronunciation: 'keh neh-seh-SEE-tahs ehn EHS-teh moh-MEHN-toh PAH-rah sehn-TEER-teh meh-HOHR', category: 'therapeutic-language', audio: 'que-necesitas-en-este' },
  { spanish: 'Tu proceso de sanación es único y tiene su propio ritmo', english: 'Your healing process is unique and has its own pace', pronunciation: 'too proh-SEH-soh deh sah-nah-see-OHN ehs OO-nee-koh ee tee-EH-neh soo PROH-pee-oh RREET-moh', category: 'therapeutic-language', audio: 'tu-proceso-de-sanacion' },
  { spanish: 'No tienes que tener todas las respuestas ahora mismo', english: 'You don\'t have to have all the answers right now', pronunciation: 'noh tee-EH-nehs keh teh-NEHR TOH-dahs lahs rrehs-PWEHS-tahs ah-OH-rah MEES-moh', category: 'therapeutic-language', audio: 'no-tienes-que-tener' },

  // === Interpersonal Skills (12) ===
  { spanish: 'La escucha activa implica prestar atención sin interrumpir ni juzgar', english: 'Active listening means paying attention without interrupting or judging', pronunciation: 'lah ehs-KOO-chah ahk-TEE-bah eem-PLEE-kah prehs-TAHR ah-tehn-see-OHN seen een-teh-rroom-PEER nee hoos-GAHR', category: 'interpersonal-skills', audio: 'la-escucha-activa' },
  { spanish: 'La comunicación asertiva expresa necesidades con claridad y respeto', english: 'Assertive communication expresses needs with clarity and respect', pronunciation: 'lah koh-moo-nee-kah-see-OHN ah-sehr-TEE-bah ehks-PREH-sah neh-seh-see-DAH-dehs kohn klah-ree-DAHD ee rrehs-PEH-toh', category: 'interpersonal-skills', audio: 'la-comunicacion-asertiva' },
  { spanish: 'La inteligencia emocional es la capacidad de gestionar nuestras emociones', english: 'Emotional intelligence is the ability to manage our emotions', pronunciation: 'lah een-teh-lee-HEHN-see-ah eh-moh-see-oh-NAHL ehs lah kah-pah-see-DAHD deh hehs-tee-oh-NAHR NWEHS-trahs eh-moh-see-OH-nehs', category: 'interpersonal-skills', audio: 'la-inteligencia-emocional' },
  { spanish: 'El manejo de conflictos requiere paciencia y voluntad de compromiso', english: 'Conflict management requires patience and willingness to compromise', pronunciation: 'ehl mah-NEH-hoh deh kohn-FLEEK-tohs rreh-kee-EH-reh pah-see-EHN-see-ah ee boh-loon-TAHD deh kohm-proh-MEE-soh', category: 'interpersonal-skills', audio: 'el-manejo-de-conflictos' },
  { spanish: 'La retroalimentación constructiva ayuda a crecer sin herir', english: 'Constructive feedback helps growth without hurting', pronunciation: 'lah rreh-troh-ah-lee-mehn-tah-see-OHN kohns-trook-TEE-bah ah-YOO-dah ah kreh-SEHR seen eh-REER', category: 'interpersonal-skills', audio: 'la-retroalimentacion' },
  { spanish: 'Validar las emociones del otro no significa estar de acuerdo', english: 'Validating another\'s emotions doesn\'t mean agreeing with them', pronunciation: 'bah-lee-DAHR lahs eh-moh-see-OH-nehs dehl OH-troh noh seeg-NEE-fee-kah ehs-TAHR deh ah-KWEHR-doh', category: 'interpersonal-skills', audio: 'validar-las-emociones' },
  { spanish: 'La empatía cognitiva y la empatía emocional son complementarias', english: 'Cognitive empathy and emotional empathy are complementary', pronunciation: 'lah ehm-pah-TEE-ah kohg-nee-TEE-bah ee lah ehm-pah-TEE-ah eh-moh-see-oh-NAHL sohn kohm-pleh-mehn-TAH-ree-ahs', category: 'interpersonal-skills', audio: 'la-empatia-cognitiva' },
  { spanish: 'Poner límites saludables fortalece las relaciones, no las destruye', english: 'Setting healthy boundaries strengthens relationships, it doesn\'t destroy them', pronunciation: 'poh-NEHR LEE-mee-tehs sah-loo-DAH-blehs fohr-tah-LEH-seh lahs rreh-lah-see-OH-nehs noh lahs dehs-TROO-yeh', category: 'interpersonal-skills', audio: 'poner-limites-saludables' },
  { spanish: 'La resolución de conflictos empieza por reconocer la perspectiva del otro', english: 'Conflict resolution begins by acknowledging the other\'s perspective', pronunciation: 'lah rreh-soh-loo-see-OHN deh kohn-FLEEK-tohs ehm-pee-EH-sah pohr rreh-koh-noh-SEHR lah pehr-spehk-TEE-bah dehl OH-troh', category: 'interpersonal-skills', audio: 'la-resolucion-de-conflictos' },
  { spanish: 'La comunicación no violenta transforma la forma en que nos relacionamos', english: 'Nonviolent communication transforms the way we relate to each other', pronunciation: 'lah koh-moo-nee-kah-see-OHN noh bee-oh-LEHN-tah trahns-FOHR-mah lah FOHR-mah ehn keh nohs rreh-lah-see-oh-NAH-mohs', category: 'interpersonal-skills', audio: 'la-comunicacion-no-violenta' },
  { spanish: 'Saber decir "no" con firmeza y amabilidad es una habilidad esencial', english: 'Knowing how to say "no" with firmness and kindness is an essential skill', pronunciation: 'sah-BEHR deh-SEER noh kohn feer-MEH-sah ee ah-mah-bee-lee-DAHD ehs OO-nah ah-bee-lee-DAHD eh-sehn-see-AHL', category: 'interpersonal-skills', audio: 'saber-decir-no' },
  { spanish: 'La negociación emocional busca que ambas partes se sientan escuchadas', english: 'Emotional negotiation seeks for both parties to feel heard', pronunciation: 'lah neh-goh-see-ah-see-OHN eh-moh-see-oh-NAHL BOOS-kah keh AHM-bahs PAHR-tehs seh see-EHN-tahn ehs-koo-CHAH-dahs', category: 'interpersonal-skills', audio: 'la-negociacion-emocional' },

  // === Self-Reflection (12) ===
  { spanish: 'Me doy cuenta de que mis reacciones reflejan mis heridas internas', english: 'I realize that my reactions reflect my internal wounds', pronunciation: 'meh doy KWEHN-tah deh keh mees rreh-ahk-see-OH-nehs rreh-FLEH-hahn mees eh-REE-dahs een-TEHR-nahs', category: 'self-reflection', audio: 'me-doy-cuenta-de-que' },
  { spanish: 'He aprendido a reconocer mis patrones emocionales destructivos', english: 'I have learned to recognize my destructive emotional patterns', pronunciation: 'eh ah-prehn-DEE-doh ah rreh-koh-noh-SEHR mees pah-TROH-nehs eh-moh-see-oh-NAH-lehs dehs-trook-TEE-bohs', category: 'self-reflection', audio: 'he-aprendido-a-reconocer' },
  { spanish: 'Necesito trabajar en mi tendencia a evitar los conflictos', english: 'I need to work on my tendency to avoid conflicts', pronunciation: 'neh-seh-SEE-toh trah-bah-HAHR ehn mee tehn-DEHN-see-ah ah eh-bee-TAHR lohs kohn-FLEEK-tohs', category: 'self-reflection', audio: 'necesito-trabajar-en' },
  { spanish: 'Me cuesta aceptar que no puedo controlar todo lo que sucede', english: 'It\'s hard for me to accept that I can\'t control everything that happens', pronunciation: 'meh KWEHS-tah ah-sehp-TAHR keh noh PWEH-doh kohn-troh-LAHR TOH-doh loh keh soo-SEH-deh', category: 'self-reflection', audio: 'me-cuesta-aceptar-que' },
  { spanish: 'Estoy aprendiendo a ser compasivo conmigo mismo', english: 'I am learning to be compassionate with myself', pronunciation: 'ehs-TOY ah-prehn-dee-EHN-doh ah sehr kohm-pah-SEE-boh kohn-MEE-goh MEES-moh', category: 'self-reflection', audio: 'estoy-aprendiendo-a-ser' },
  { spanish: 'Reconozco que mi miedo al rechazo influye en mis decisiones', english: 'I recognize that my fear of rejection influences my decisions', pronunciation: 'rreh-koh-NOHS-koh keh mee mee-EH-doh ahl rreh-CHAH-soh een-FLOO-yeh ehn mees deh-see-see-OH-nehs', category: 'self-reflection', audio: 'reconozco-que-mi-miedo' },
  { spanish: 'He descubierto que mi fortaleza nace de mis momentos más difíciles', english: 'I have discovered that my strength is born from my most difficult moments', pronunciation: 'eh dehs-koo-bee-EHR-toh keh mee fohr-tah-LEH-sah NAH-seh deh mees moh-MEHN-tohs mahs dee-FEE-see-lehs', category: 'self-reflection', audio: 'he-descubierto-que' },
  { spanish: 'Me comprometo a escucharme con la misma paciencia que ofrezco a otros', english: 'I commit to listening to myself with the same patience I offer others', pronunciation: 'meh kohm-proh-MEH-toh ah ehs-koo-CHAHR-meh kohn lah MEES-mah pah-see-EHN-see-ah keh oh-FREHS-koh ah OH-trohs', category: 'self-reflection', audio: 'me-comprometo-a-escucharme' },
  { spanish: 'Aceptar mi imperfección me libera de la presión de ser perfecto', english: 'Accepting my imperfection frees me from the pressure of being perfect', pronunciation: 'ah-sehp-TAHR mee eem-pehr-fehk-see-OHN meh lee-BEH-rah deh lah preh-see-OHN deh sehr pehr-FEHK-toh', category: 'self-reflection', audio: 'aceptar-mi-imperfeccion' },
  { spanish: 'Cada día es una oportunidad para elegir cómo respondo ante la vida', english: 'Every day is an opportunity to choose how I respond to life', pronunciation: 'KAH-dah DEE-ah ehs OO-nah oh-pohr-too-nee-DAHD PAH-rah eh-leh-HEER KOH-moh rrehs-POHN-doh AHN-teh lah BEE-dah', category: 'self-reflection', audio: 'cada-dia-es-una-oportunidad' },
  { spanish: 'La introspección me ayuda a entender por qué actúo como actúo', english: 'Introspection helps me understand why I act the way I do', pronunciation: 'lah een-trohs-pehk-see-OHN meh ah-YOO-dah ah ehn-tehn-DEHR pohr keh ahk-TOO-oh KOH-moh ahk-TOO-oh', category: 'self-reflection', audio: 'la-introspeccion-me-ayuda' },
  { spanish: 'Soltar el control ha sido uno de los aprendizajes más difíciles de mi vida', english: 'Letting go of control has been one of the hardest lessons of my life', pronunciation: 'sohl-TAHR ehl kohn-TROHL ah SEE-doh OO-noh deh lohs ah-prehn-dee-SAH-hehs mahs dee-FEE-see-lehs deh mee BEE-dah', category: 'self-reflection', audio: 'soltar-el-control' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L75PhraseByAudio = phraseByAudio

// === EMOTION MAPPER (unique activity) ===

export interface EmotionMapperChallenge {
  scenario: string
  english: string
  correctEmotion: string
  options: string[]
}

export const EMOTION_MAPPER_CHALLENGES: EmotionMapperChallenge[] = [
  {
    scenario: 'Tu mejor amigo te dice que se muda a otro país y no sabes cuándo lo volverás a ver.',
    english: 'Your best friend tells you they\'re moving to another country and you don\'t know when you\'ll see them again.',
    correctEmotion: 'la angustia por la separación',
    options: ['la angustia por la separación', 'la frustración por la injusticia', 'la envidia por su oportunidad', 'el desapego emocional'],
  },
  {
    scenario: 'Después de meses de terapia, finalmente puedes hablar de tu infancia sin llorar.',
    english: 'After months of therapy, you can finally talk about your childhood without crying.',
    correctEmotion: 'la resiliencia emocional',
    options: ['la indiferencia', 'la resiliencia emocional', 'el desapego total', 'la negación del dolor'],
  },
  {
    scenario: 'Tu pareja no respeta tu necesidad de tiempo a solas y te sientes sofocado/a.',
    english: 'Your partner doesn\'t respect your need for alone time and you feel suffocated.',
    correctEmotion: 'la necesidad de establecer límites',
    options: ['la culpa por querer espacio', 'la necesidad de establecer límites', 'la ansiedad social', 'el duelo anticipado'],
  },
  {
    scenario: 'Recibes una crítica dura en el trabajo y no puedes dejar de pensar en ella durante días.',
    english: 'You receive harsh criticism at work and can\'t stop thinking about it for days.',
    correctEmotion: 'la vulnerabilidad ante el juicio externo',
    options: ['la gratitud por la retroalimentación', 'el desapego profesional', 'la vulnerabilidad ante el juicio externo', 'la autoestima fortalecida'],
  },
  {
    scenario: 'Observas que siempre eliges parejas que te tratan de forma similar a como te trataban tus padres.',
    english: 'You observe that you always choose partners who treat you similarly to how your parents treated you.',
    correctEmotion: 'el reconocimiento de patrones de apego',
    options: ['la frustración romántica', 'el reconocimiento de patrones de apego', 'la ansiedad generalizada', 'la empatía excesiva'],
  },
  {
    scenario: 'Un amigo te cuenta un problema grave y tú sientes su dolor casi como si fuera tuyo.',
    english: 'A friend tells you about a serious problem and you feel their pain almost as if it were yours.',
    correctEmotion: 'la empatía profunda',
    options: ['la ansiedad por contagio', 'el apego inseguro', 'la empatía profunda', 'la culpa del sobreviviente'],
  },
  {
    scenario: 'Logras perdonar a alguien que te hizo mucho daño y sientes un alivio inmenso.',
    english: 'You manage to forgive someone who hurt you deeply and feel immense relief.',
    correctEmotion: 'la liberación emocional a través del perdón',
    options: ['la negación del dolor', 'la indiferencia emocional', 'la liberación emocional a través del perdón', 'el desapego forzado'],
  },
]

// === LESSON DATA ===

export const L75Data: LessonData = {
  id: 'L7.5',
  hero: {
    lessonId: 'L7.5',
    title: 'Psychology & Emotional Intelligence',
    subtitle: 'Understanding the language of emotions and the mind',
    description: 'Master the vocabulary of psychology, therapeutic language, interpersonal skills, and self-reflection. From recognizing emotional patterns to expressing vulnerability, learn to navigate the deepest aspects of human experience in Spanish.',
    image: '/images/L7.5/L7.5.jpg',
    gradient: 'from-violet-800/65 via-purple-700/55 to-fuchsia-700/65',
    accentColor: 'violet-200',
  },

  objectives: [
    { icon: '💜', title: 'Emotional Vocabulary', desc: 'Name and discuss complex emotions: anguish, resilience, attachment, grief, anxiety, and vulnerability.' },
    { icon: '🧠', title: 'Therapeutic Language', desc: 'Use the language of therapy — validating feelings, setting boundaries, and exploring emotions.' },
    { icon: '🤝', title: 'Interpersonal Skills', desc: 'Master active listening, assertive communication, emotional intelligence, and conflict resolution.' },
    { icon: '🪞', title: 'Self-Reflection', desc: 'Express deep self-awareness: recognizing patterns, accepting imperfection, and choosing growth.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.5', label: 'Health & Wellness', detail: 'L4.5 introduced health vocabulary and basic emotional states. Now go deeper into the psychology of emotions and therapeutic language.' },
    { fromLesson: 'L5.8', label: 'Nuanced Expression', detail: 'L5.8 taught subtle expression and tone. Now apply that nuance to the most intimate emotional conversations.' },
    { fromLesson: 'L6.6', label: 'Philosophy & Abstract Thought', detail: 'L6.6 explored abstract reasoning. Now turn that philosophical lens inward for deep emotional self-examination.' },
  ],

  sectionTransitions: [
    { afterSection: 'emotional-vocabulary', text: 'You can name the emotions! Now let\'s learn the language therapists use to explore and validate them.' },
    { afterSection: 'therapeutic-language', text: 'Therapeutic language mastered! Let\'s build the interpersonal skills that create healthy relationships.' },
    { afterSection: 'interpersonal-skills', text: 'You communicate with empathy! Now turn that awareness inward with powerful self-reflection.' },
    { afterSection: 'dialogues', text: 'Deep conversations explored! Let\'s discover how emotional intelligence varies across cultures.' },
    { afterSection: 'cultural', text: 'Cultural perspectives understood! Now test your emotional intelligence in the Emotion Mapper.' },
    { afterSection: 'emotion-mapper', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'La angustia me invade...', english: 'Anguish overwhelms me...' },
    { spanish: '¿Cómo te hace sentir eso?', english: 'How does that make you feel?' },
    { spanish: 'Necesito establecer límites...', english: 'I need to set boundaries...' },
    { spanish: 'La escucha activa implica...', english: 'Active listening means...' },
    { spanish: 'Me doy cuenta de que...', english: 'I realize that...' },
    { spanish: 'La resiliencia es...', english: 'Resilience is...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La vulnerabilidad no es debilidad; es valentía emocional', pronunciation: 'lah bool-neh-rah-bee-lee-DAHD noh ehs deh-bee-lee-DAHD ehs bah-lehn-TEE-ah eh-moh-see-oh-NAHL', english: 'Vulnerability is not weakness; it is emotional courage', audio: 'la-vulnerabilidad-no-es', tip: 'The word "vulnerabilidad" has six syllables — emphasize the penultimate: bool-neh-rah-bee-lee-DAHD. This is a powerful reframing statement; deliver it with conviction.' },
    { spanish: '¿Cómo te hace sentir eso?', pronunciation: 'KOH-moh teh AH-seh sehn-TEER EH-soh', english: 'How does that make you feel?', audio: 'como-te-hace-sentir', tip: 'This classic therapeutic question should be spoken softly, with genuine curiosity. The rising intonation on "eso" invites openness.' },
    { spanish: 'La empatía nos permite ponernos en el lugar del otro', pronunciation: 'lah ehm-pah-TEE-ah nohs pehr-MEE-teh poh-NEHR-nohs ehn ehl loo-GAHR dehl OH-troh', english: 'Empathy allows us to put ourselves in another\'s place', audio: 'la-empatia-nos-permite', tip: '"Empatía" is stressed on the third syllable: ehm-pah-TEE-ah. The phrase flows naturally — practice connecting "ponernos en el lugar" as one rhythmic unit.' },
    { spanish: 'La resiliencia es la capacidad de recuperarse de la adversidad', pronunciation: 'lah rreh-see-lee-EHN-see-ah ehs lah kah-pah-see-DAHD deh rreh-koo-peh-RAHR-seh deh lah ahd-behr-see-DAHD', english: 'Resilience is the ability to recover from adversity', audio: 'la-resiliencia-es', tip: '"Resiliencia" has five syllables with stress on the fourth: rreh-see-lee-EHN-see-ah. The rolled "rr" at the start gives the word strength, matching its meaning.' },
    { spanish: 'Me doy cuenta de que mis reacciones reflejan mis heridas internas', pronunciation: 'meh doy KWEHN-tah deh keh mees rreh-ahk-see-OH-nehs rreh-FLEH-hahn mees eh-REE-dahs een-TEHR-nahs', english: 'I realize that my reactions reflect my internal wounds', audio: 'me-doy-cuenta-de-que', tip: '"Me doy cuenta de que" is the reflective awareness phrase — it introduces self-discovery. Speak it slowly, as if the realization is happening in real time.' },
    { spanish: 'La retroalimentación constructiva ayuda a crecer sin herir', pronunciation: 'lah rreh-troh-ah-lee-mehn-tah-see-OHN kohns-trook-TEE-bah ah-YOO-dah ah kreh-SEHR seen eh-REER', english: 'Constructive feedback helps growth without hurting', audio: 'la-retroalimentacion', tip: '"Retroalimentación" is one of Spanish\'s longest common words (8 syllables). Break it down: re-tro-a-li-men-ta-ción. The stress falls on the final syllable.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'emotional-vocabulary', label: 'Emotional Vocabulary' },
    { id: 'therapeutic-language', label: 'Therapeutic Language' },
    { id: 'interpersonal-skills', label: 'Interpersonal Skills' },
    { id: 'self-reflection', label: 'Self-Reflection' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'emotion-sorting', label: 'Emotion Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'emotion-mapper', label: 'Emotion Mapper' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'emotional-vocabulary',
      title: 'Emotional Vocabulary — Vocabulario Emocional',
      description: 'The words we use to name our deepest feelings shape how we understand ourselves.',
      tabs: [
        { label: 'Core Emotions', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'emotional-vocabulary').slice(0, 6) },
        { label: 'Complex States', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'emotional-vocabulary').slice(6) },
      ],
    },
    {
      id: 'therapeutic-language',
      title: 'Therapeutic Language — Lenguaje Terapéutico',
      description: 'The compassionate language of therapy: validating, exploring, and healing.',
      tabs: [
        { label: 'Validation & Inquiry', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'therapeutic-language').slice(0, 6) },
        { label: 'Healing & Growth', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'therapeutic-language').slice(6) },
      ],
    },
    {
      id: 'interpersonal-skills',
      title: 'Interpersonal Skills — Habilidades Interpersonales',
      description: 'Active listening, assertive communication, and the art of healthy relationships.',
      tabs: [
        { label: 'Communication', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'interpersonal-skills').slice(0, 6) },
        { label: 'Boundaries & Resolution', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'interpersonal-skills').slice(6) },
      ],
    },
    {
      id: 'self-reflection',
      title: 'Self-Reflection — Autorreflexión',
      description: 'Turning the lens inward: recognizing patterns, accepting imperfection, and growing.',
      tabs: [
        { label: 'Awareness', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'self-reflection').slice(0, 6) },
        { label: 'Growth & Acceptance', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'self-reflection').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Language of Emotional Safety',
      content: 'In therapeutic Spanish, tone matters as much as words. Phrases like "¿Cómo te hace sentir eso?" should be delivered softly, with a gently rising intonation that communicates curiosity without pressure. The best therapists in the Spanish-speaking world use a measured, warm rhythm that creates a safe space for vulnerability.',
      example: '¿Cómo te hace sentir eso? | Es válido sentirse así. | No tienes que tener todas las respuestas.',
    },
    {
      title: 'Naming Emotions with Precision',
      content: 'Spanish has a remarkably rich emotional vocabulary. While English might say "I\'m sad," Spanish distinguishes between tristeza (sadness), angustia (anguish), melancolía (melancholy), pena (grief/sorrow), and desconsuelo (desolation). Using the precise word for each emotional state is a hallmark of emotional intelligence in Spanish.',
      example: 'Siento angustia (anguish) ≠ Siento tristeza (sadness) ≠ Siento melancolía (melancholy)',
      reviewFrom: 'L4.5',
    },
    {
      title: 'Reflexive Verbs for Inner Experience',
      content: 'Spanish uses reflexive constructions to express internal emotional processes: "me doy cuenta" (I realize), "me siento" (I feel), "me cuesta" (it\'s hard for me), "me comprometo" (I commit myself). These reflexive forms emphasize that the experience is deeply personal and internal.',
      example: 'Me doy cuenta de que... | Me cuesta aceptar que... | Me comprometo a...',
      reviewFrom: 'L5.8',
    },
    {
      title: 'The Power of "No Es"',
      content: 'Some of the most powerful statements in psychological Spanish use negation to reframe: "La vulnerabilidad no es debilidad" (Vulnerability is not weakness), "El autocuidado no es egoísmo" (Self-care is not selfishness). This rhetorical structure challenges assumptions and opens space for new understanding.',
      example: 'No es debilidad. | No es egoísmo. | No nos hace débiles.',
    },
  ],

  flashcardGroups: [
    {
      key: 'emotions',
      label: 'Emotional Vocabulary',
      audioKeys: ['la-angustia-me-invade', 'la-resiliencia-es', 'el-apego-inseguro', 'la-autoestima-se-construye', 'el-duelo-es-un-proceso', 'la-ansiedad-se-manifiesta', 'la-empatia-nos-permite', 'el-desapego-saludable', 'la-vulnerabilidad-no-es', 'la-frustracion-surge'],
    },
    {
      key: 'therapeutic',
      label: 'Therapeutic Language',
      audioKeys: ['como-te-hace-sentir', 'parece-que-estas', 'es-valido-sentirse', 'necesito-establecer-limites', 'lo-que-sientes-es', 'a-veces-necesitamos', 'vamos-a-explorar', 'el-autocuidado-no-es', 'reconocer-nuestras-heridas', 'que-necesitas-en-este'],
    },
    {
      key: 'interpersonal',
      label: 'Interpersonal Skills',
      audioKeys: ['la-escucha-activa', 'la-comunicacion-asertiva', 'la-inteligencia-emocional', 'el-manejo-de-conflictos', 'la-retroalimentacion', 'validar-las-emociones', 'la-empatia-cognitiva', 'poner-limites-saludables'],
    },
  ],

  matchPairs: [
    { left: 'La angustia', right: 'Intense anguish or distress' },
    { left: 'La resiliencia', right: 'Ability to recover from adversity' },
    { left: 'El apego', right: 'Emotional attachment' },
    { left: 'La autoestima', right: 'Self-esteem' },
    { left: 'El duelo', right: 'Grief process' },
    { left: 'La empatía', right: 'Understanding others\' feelings' },
    { left: 'El desapego', right: 'Healthy emotional detachment' },
    { left: 'La vulnerabilidad', right: 'Emotional openness and courage' },
  ],
  matchLabels: { left: 'Concepto', right: 'Meaning' },

  sortActivities: [
    {
      title: 'Internal or Interpersonal?',
      instruction: 'Sort each concept by whether it primarily involves your relationship with yourself or with others.',
      buckets: ['Internal (Self) 🪞', 'Interpersonal (Others) 🤝'],
      items: [
        { text: 'La autoestima', bucket: 'Internal (Self) 🪞' },
        { text: 'La introspección', bucket: 'Internal (Self) 🪞' },
        { text: 'El autocuidado', bucket: 'Internal (Self) 🪞' },
        { text: 'El duelo', bucket: 'Internal (Self) 🪞' },
        { text: 'La escucha activa', bucket: 'Interpersonal (Others) 🤝' },
        { text: 'La comunicación asertiva', bucket: 'Interpersonal (Others) 🤝' },
        { text: 'El manejo de conflictos', bucket: 'Interpersonal (Others) 🤝' },
        { text: 'La retroalimentación constructiva', bucket: 'Interpersonal (Others) 🤝' },
      ],
    },
    {
      title: 'Healthy or Unhealthy?',
      instruction: 'Is this emotional pattern healthy or unhealthy?',
      buckets: ['Healthy 💚', 'Unhealthy 🔴'],
      items: [
        { text: 'Establecer límites', bucket: 'Healthy 💚' },
        { text: 'La resiliencia emocional', bucket: 'Healthy 💚' },
        { text: 'La comunicación no violenta', bucket: 'Healthy 💚' },
        { text: 'La escucha activa', bucket: 'Healthy 💚' },
        { text: 'La culpa no resuelta', bucket: 'Unhealthy 🔴' },
        { text: 'Evitar los conflictos siempre', bucket: 'Unhealthy 🔴' },
        { text: 'El apego inseguro', bucket: 'Unhealthy 🔴' },
        { text: 'Depender emocionalmente', bucket: 'Unhealthy 🔴' },
      ],
    },
  ],
  sortSectionId: 'emotion-sorting',
  sortTitle: 'Emotion Sorting',

  dialogues: [
    {
      id: 'dialogue-therapy-barcelona',
      title: 'Therapy Session — Barcelona',
      location: 'Barcelona',
      lines: [
        { speaker: 'Dra. Vega', text: 'Bienvenida, Lucía. ¿Cómo te ha ido esta semana?', audio: '/audio/L7.5/phrases/d1-line1.mp3' },
        { speaker: 'Lucía', text: 'Ha sido difícil. Tuve una discusión fuerte con mi madre y no he podido dejar de pensar en ello.', audio: '/audio/L7.5/phrases/d1-line2.mp3' },
        { speaker: 'Dra. Vega', text: '¿Cómo te hace sentir eso? ¿Puedes ponerle nombre a la emoción?', audio: '/audio/L7.5/phrases/d1-line3.mp3', annotations: [{ phrase: '¿Cómo te hace sentir eso?', fromLesson: 'L7.5', note: 'Classic therapeutic question: inviting the patient to name and own their emotion' }] },
        { speaker: 'Lucía', text: 'Siento una mezcla de angustia y culpa. Angustia porque sé que la relación se deteriora, y culpa porque quizás fui demasiado dura.', audio: '/audio/L7.5/phrases/d1-line4.mp3' },
        { speaker: 'Dra. Vega', text: 'Es válido sentirse así. La angustia y la culpa a menudo coexisten en las relaciones familiares. No tienes que juzgarte por ello.', audio: '/audio/L7.5/phrases/d1-line5.mp3' },
        { speaker: 'Lucía', text: 'Pero me cuesta aceptar que no puedo controlar cómo reacciona ella. Siempre intento arreglar las cosas y termino exhausta.', audio: '/audio/L7.5/phrases/d1-line6.mp3' },
        { speaker: 'Dra. Vega', text: 'Ahí hay un patrón interesante. ¿Te das cuenta de que asumes la responsabilidad emocional de la relación entera?', audio: '/audio/L7.5/phrases/d1-line7.mp3' },
        { speaker: 'Lucía', text: 'Sí... He aprendido a reconocer ese patrón, pero romperlo es otra cosa. Es como si mi autoestima dependiera de que ella esté bien.', audio: '/audio/L7.5/phrases/d1-line8.mp3' },
        { speaker: 'Dra. Vega', text: 'Eso se relaciona con el apego. Cuando crecemos sintiendo que debemos cuidar emocionalmente a nuestros padres, desarrollamos un apego ansioso.', audio: '/audio/L7.5/phrases/d1-line9.mp3' },
        { speaker: 'Lucía', text: 'Entonces, ¿necesito trabajar en mi tendencia a evitar los conflictos poniéndome en el papel de mediadora?', audio: '/audio/L7.5/phrases/d1-line10.mp3' },
        { speaker: 'Dra. Vega', text: 'Exactamente. Y también en establecer límites. Puedes amar a tu madre y al mismo tiempo proteger tu bienestar emocional.', audio: '/audio/L7.5/phrases/d1-line11.mp3' },
        { speaker: 'Lucía', text: 'Me da miedo que poner límites signifique perderla.', audio: '/audio/L7.5/phrases/d1-line12.mp3' },
        { speaker: 'Dra. Vega', text: 'La vulnerabilidad de expresar tus límites no es debilidad, Lucía. Es valentía emocional. Y los límites saludables fortalecen las relaciones, no las destruyen.', audio: '/audio/L7.5/phrases/d1-line13.mp3' },
        { speaker: 'Lucía', text: 'Tiene razón. Estoy aprendiendo a ser compasiva conmigo misma, pero es un proceso lento.', audio: '/audio/L7.5/phrases/d1-line14.mp3' },
        { speaker: 'Dra. Vega', text: 'Tu proceso de sanación es único y tiene su propio ritmo. Lo importante es que estás aquí, haciendo el trabajo. Eso ya es resiliencia.', audio: '/audio/L7.5/phrases/d1-line15.mp3' },
        { speaker: 'Lucía', text: 'Gracias, doctora. Cada sesión me ayuda a entender un poco más por qué actúo como actúo.', audio: '/audio/L7.5/phrases/d1-line16.mp3' },
      ],
    },
    {
      id: 'dialogue-support-lima',
      title: 'Emotional Support Group — Lima',
      location: 'Lima',
      lines: [
        { speaker: 'Facilitadora', text: 'Bienvenidos al grupo de apoyo emocional. Hoy hablaremos sobre la inteligencia emocional en nuestras relaciones. ¿Quién quiere comenzar?', audio: '/audio/L7.5/phrases/d2-line1.mp3' },
        { speaker: 'Marco', text: 'Yo, por favor. He estado reflexionando sobre por qué siempre elijo parejas que me tratan mal. Me doy cuenta de que mis reacciones reflejan mis heridas internas.', audio: '/audio/L7.5/phrases/d2-line2.mp3' },
        { speaker: 'Facilitadora', text: 'Gracias por compartir eso, Marco. Reconocer esos patrones es enorme. ¿Cómo te sientes al decirlo en voz alta?', audio: '/audio/L7.5/phrases/d2-line3.mp3' },
        { speaker: 'Marco', text: 'Vulnerable. Pero también aliviado. La introspección me ayuda a entender que no es casualidad.', audio: '/audio/L7.5/phrases/d2-line4.mp3' },
        { speaker: 'Sofía', text: 'Yo puedo relacionarme con eso. Mi terapeuta me dijo algo que cambió mi perspectiva: "Lo que sientes es una respuesta natural a lo que has vivido."', audio: '/audio/L7.5/phrases/d2-line5.mp3', annotations: [{ phrase: 'Lo que sientes es una respuesta natural', fromLesson: 'L7.5', note: 'Therapeutic validation: normalizing emotional responses without dismissing them' }] },
        { speaker: 'Facilitadora', text: 'Eso es la validación emocional. Y validar las emociones del otro no significa estar de acuerdo con todo; significa reconocer que su experiencia es real.', audio: '/audio/L7.5/phrases/d2-line6.mp3' },
        { speaker: 'Carlos', text: 'Yo estoy trabajando en la comunicación asertiva. Antes, o explotaba o me callaba todo. No había punto medio.', audio: '/audio/L7.5/phrases/d2-line7.mp3' },
        { speaker: 'Facilitadora', text: 'La comunicación asertiva es exactamente ese punto medio: expresar lo que necesitas con claridad y respeto, sin agredir ni someterte.', audio: '/audio/L7.5/phrases/d2-line8.mp3' },
        { speaker: 'Marco', text: 'A mí me cuesta mucho la escucha activa. Mientras la otra persona habla, ya estoy preparando mi respuesta en vez de realmente escuchar.', audio: '/audio/L7.5/phrases/d2-line9.mp3' },
        { speaker: 'Sofía', text: 'A veces necesitamos pedir ayuda, y eso no nos hace débiles. Yo tardé años en venir a este grupo, pero ha sido transformador.', audio: '/audio/L7.5/phrases/d2-line10.mp3' },
        { speaker: 'Facilitadora', text: 'Exacto. El autocuidado no es egoísmo; es una necesidad fundamental. No podemos cuidar a otros si no nos cuidamos primero.', audio: '/audio/L7.5/phrases/d2-line11.mp3' },
        { speaker: 'Carlos', text: 'He descubierto que mi fortaleza nace de mis momentos más difíciles. Cada crisis me ha enseñado algo sobre mí mismo.', audio: '/audio/L7.5/phrases/d2-line12.mp3' },
        { speaker: 'Facilitadora', text: 'Eso es resiliencia pura. Y el hecho de que estén aquí, compartiendo y aprendiendo juntos, demuestra una enorme inteligencia emocional.', audio: '/audio/L7.5/phrases/d2-line13.mp3' },
        { speaker: 'Marco', text: 'Me comprometo a escucharme con la misma paciencia que ofrezco a otros. Creo que es hora de tratarme como trataría a un amigo.', audio: '/audio/L7.5/phrases/d2-line14.mp3' },
        { speaker: 'Sofía', text: 'Cada día es una oportunidad para elegir cómo respondemos ante la vida. Hoy elijo la compasión.', audio: '/audio/L7.5/phrases/d2-line15.mp3' },
        { speaker: 'Facilitadora', text: 'Hermosas palabras para cerrar. Recuerden: aceptar nuestra imperfección nos libera de la presión de ser perfectos. Nos vemos la próxima semana.', audio: '/audio/L7.5/phrases/d2-line16.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Navigate a therapy session exploring attachment patterns in Barcelona, then participate in an emotional support group discussing resilience and self-compassion in Lima.',

  culturalNotes: [
    {
      title: 'La Salud Mental en Latinoamérica',
      content: 'Mental health awareness in Latin America has evolved dramatically in the 21st century. While traditional cultures sometimes stigmatized therapy ("eso es para locos"), a new generation is embracing psychological well-being as essential. Countries like Argentina have the highest ratio of psychologists per capita in the world — Buenos Aires alone has more therapists than many entire countries. The influence of psychoanalysis in Argentine culture is so deep that phrases like "mi analista me dijo" (my analyst told me) are common in everyday conversation.',
    },
    {
      title: 'Expresión Emocional y Cultura',
      content: 'Spanish-speaking cultures generally encourage more open emotional expression than Anglo-Saxon ones. Crying in public, passionate arguments, and physical displays of affection are more socially accepted. However, male emotional expression still faces barriers in many regions — the concept of "machismo" often suppresses vulnerability in men. Modern movements across Latin America are challenging these norms, with campaigns like "Los hombres también lloran" (Men also cry) promoting emotional intelligence for all.',
    },
    {
      title: 'El Concepto de "Apoyo" vs. Terapia Formal',
      content: 'In many Latin American communities, emotional support traditionally comes from family and close friends rather than professional therapists. The concept of "desahogarse" (to unburden oneself) — talking through problems with a trusted person over coffee or mate — is a cultural form of emotional processing. While professional therapy is growing, this cultural tradition of communal emotional support remains powerful and valuable. Many therapists in the region actually integrate these cultural practices into their approaches.',
    },
  ],
  culturalGradient: 'from-violet-50 to-purple-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La resiliencia" is the ability to:', options: ['Avoid all problems', 'Recover from adversity', 'Control others', 'Eliminate emotions'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "¿Cómo te hace ___ eso?" (feel)', answer: 'sentir' },
    { id: 3, type: 'tf', text: '"El desapego saludable" means completely cutting off emotions from relationships.', answer: false },
    { id: 4, type: 'mc', text: '"La escucha activa" requires:', options: ['Preparing your response while listening', 'Paying attention without interrupting or judging', 'Giving advice immediately', 'Changing the subject'], answer: 1 },
    { id: 5, type: 'mc', text: '"Es válido sentirse así" is an example of:', options: ['Dismissal', 'Emotional validation', 'Confrontation', 'Diagnosis'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Necesito establecer ___ para proteger mi bienestar" (boundaries)', answer: 'límites' },
    { id: 7, type: 'mc', text: '"La comunicación asertiva" expresses needs with:', options: ['Aggression and force', 'Passive silence', 'Clarity and respect', 'Manipulation'], answer: 2 },
    { id: 8, type: 'tf', text: '"Validar las emociones del otro" means you must agree with everything they say.', answer: false },
    { id: 9, type: 'mc', text: 'In Dialogue 1, Dra. Vega identifies Lucía\'s pattern as:', options: ['Social anxiety', 'Assuming total emotional responsibility', 'Depression', 'Narcissism'], answer: 1 },
    { id: 10, type: 'mc', text: '"Me doy cuenta de que" expresses:', options: ['A command', 'Self-awareness/realization', 'A question', 'Uncertainty'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ no es debilidad; es valentía emocional" (vulnerability)', answer: 'vulnerabilidad' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what does the facilitadora say about self-care?', options: ['It\'s selfish', 'It\'s optional', 'It\'s a fundamental need', 'It\'s only for therapists'], answer: 2 },
    { id: 13, type: 'tf', text: '"La retroalimentación constructiva" means giving harsh criticism without compassion.', answer: false },
    { id: 14, type: 'mc', text: '"El apego inseguro" affects:', options: ['Only childhood', 'Adult relationships too', 'Only work', 'Nothing important'], answer: 1 },
    { id: 15, type: 'mc', text: 'Which interpersonal skill involves recognizing the other person\'s perspective first?', options: ['Assertive communication', 'Active listening', 'Conflict resolution', 'Emotional negotiation'], answer: 2 },
  ],

  audioBase: '/audio/L7.5/phrases',

  uniqueActivity: {
    id: 'EmotionMapperL75',
    sectionId: 'emotion-mapper',
    sectionColor: 'bg-violet-50/40',
    sectionBorder: 'border-violet-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'emotional-vocabulary': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'therapeutic-language': { bg: 'bg-fuchsia-50/30', border: 'border-fuchsia-100' },
    'interpersonal-skills': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'self-reflection': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'matching-game': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'emotion-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'emotion-mapper': { bg: 'bg-violet-50/40', border: 'border-violet-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
