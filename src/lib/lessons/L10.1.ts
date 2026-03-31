import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Turn-Taking (12) ===
  { spanish: 'Perdona que te interrumpa, pero...', english: 'Sorry to interrupt you, but...', pronunciation: 'pehr-DOH-nah keh teh een-teh-RROOM-pah PEH-roh', category: 'turn-taking', audio: 'perdona-que-te-interrumpa' },
  { spanish: 'Como iba diciendo...', english: 'As I was saying...', pronunciation: 'KOH-moh EE-bah dee-see-EHN-doh', category: 'turn-taking', audio: 'como-iba-diciendo' },
  { spanish: 'Déjame terminar y luego te cuento', english: 'Let me finish and then I\'ll tell you', pronunciation: 'DEH-hah-meh tehr-mee-NAHR ee LWEH-goh teh KWEHN-toh', category: 'turn-taking', audio: 'dejame-terminar-y-luego' },
  { spanish: 'Quería añadir algo a lo que dijiste', english: 'I wanted to add something to what you said', pronunciation: 'keh-REE-ah ah-nyah-DEER AHL-goh ah loh keh dee-HEES-teh', category: 'turn-taking', audio: 'queria-anadir-algo' },
  { spanish: 'Espera, déjame tomar la palabra', english: 'Wait, let me take the floor', pronunciation: 'ehs-PEH-rah DEH-hah-meh toh-MAHR lah pah-LAH-brah', category: 'turn-taking', audio: 'dejame-tomar-la-palabra' },
  { spanish: 'Te cedo el turno, adelante', english: 'I yield the floor to you, go ahead', pronunciation: 'teh SEH-doh ehl TOOR-noh ah-deh-LAHN-teh', category: 'turn-taking', audio: 'te-cedo-el-turno' },
  { spanish: 'Perdón, ¿puedo decir algo?', english: 'Excuse me, may I say something?', pronunciation: 'pehr-DOHN PWEH-doh deh-SEER AHL-goh', category: 'turn-taking', audio: 'puedo-decir-algo' },
  { spanish: 'A lo que iba...', english: 'Getting back to what I was saying...', pronunciation: 'ah loh keh EE-bah', category: 'turn-taking', audio: 'a-lo-que-iba' },
  { spanish: 'Retomando el hilo de la conversación', english: 'Picking up the thread of the conversation', pronunciation: 'reh-toh-MAHN-doh ehl EE-loh deh lah kohn-behr-sah-see-OHN', category: 'turn-taking', audio: 'retomando-el-hilo' },
  { spanish: 'Antes de que se me olvide...', english: 'Before I forget...', pronunciation: 'AHN-tehs deh keh seh meh ohl-BEE-deh', category: 'turn-taking', audio: 'antes-de-que-se-me-olvide' },
  { spanish: 'Tú dirás, te escucho', english: 'Go ahead, I\'m listening', pronunciation: 'too dee-RAHS teh ehs-KOO-choh', category: 'turn-taking', audio: 'tu-diras-te-escucho' },
  { spanish: 'Un momento, que no he terminado', english: 'One moment, I haven\'t finished', pronunciation: 'oon moh-MEHN-toh keh noh eh tehr-mee-NAH-doh', category: 'turn-taking', audio: 'un-momento-no-terminado' },

  // === Active Listening (12) ===
  { spanish: '¡No me digas!', english: 'No way! / You don\'t say!', pronunciation: 'noh meh DEE-gahs', category: 'active-listening', audio: 'no-me-digas' },
  { spanish: '¿En serio? ¡Qué fuerte!', english: 'Seriously? That\'s intense!', pronunciation: 'ehn SEH-ree-oh keh FWEHR-teh', category: 'active-listening', audio: 'en-serio-que-fuerte' },
  { spanish: '¡Qué interesante! Cuéntame más', english: 'How interesting! Tell me more', pronunciation: 'keh een-teh-reh-SAHN-teh KWEHN-tah-meh mahs', category: 'active-listening', audio: 'que-interesante-cuentame' },
  { spanish: 'Claro, claro, te entiendo perfectamente', english: 'Of course, of course, I understand you perfectly', pronunciation: 'KLAH-roh KLAH-roh teh ehn-tee-EHN-doh pehr-fehk-tah-MEHN-teh', category: 'active-listening', audio: 'claro-claro-te-entiendo' },
  { spanish: 'Ajá, sigue, sigue', english: 'Uh-huh, go on, go on', pronunciation: 'ah-HAH SEE-geh SEE-geh', category: 'active-listening', audio: 'aja-sigue-sigue' },
  { spanish: 'Ya veo, ya veo... tiene sentido', english: 'I see, I see... it makes sense', pronunciation: 'yah BEH-oh yah BEH-oh tee-EH-neh sehn-TEE-doh', category: 'active-listening', audio: 'ya-veo-tiene-sentido' },
  { spanish: '¡Qué barbaridad! ¿Y qué pasó después?', english: 'How outrageous! And what happened next?', pronunciation: 'keh bahr-bah-ree-DAHD ee keh pah-SOH dehs-PWEHS', category: 'active-listening', audio: 'que-barbaridad-que-paso' },
  { spanish: '¡Fíjate! Yo no sabía eso', english: 'Imagine that! I didn\'t know that', pronunciation: 'FEE-hah-teh yoh noh sah-BEE-ah EH-soh', category: 'active-listening', audio: 'fijate-no-sabia' },
  { spanish: '¡Qué bien! Me alegro mucho', english: 'Great! I\'m so glad', pronunciation: 'keh bee-EHN meh ah-LEH-groh MOO-choh', category: 'active-listening', audio: 'que-bien-me-alegro' },
  { spanish: 'Mmm, ¿y tú qué opinas?', english: 'Hmm, and what do you think?', pronunciation: 'mmm ee too keh oh-PEE-nahs', category: 'active-listening', audio: 'y-tu-que-opinas' },
  { spanish: 'Totalmente de acuerdo contigo', english: 'Totally agree with you', pronunciation: 'toh-tahl-MEHN-teh deh ah-KWEHR-doh kohn-TEE-goh', category: 'active-listening', audio: 'totalmente-de-acuerdo' },
  { spanish: '¡Ay, qué pena! Lo siento mucho', english: 'Oh, what a shame! I\'m so sorry', pronunciation: 'eye keh PEH-nah loh see-EHN-toh MOO-choh', category: 'active-listening', audio: 'que-pena-lo-siento' },

  // === Conversation Repair (12) ===
  { spanish: 'Lo que quiero decir es que...', english: 'What I mean to say is that...', pronunciation: 'loh keh kee-EH-roh deh-SEER ehs keh', category: 'conversation-repair', audio: 'lo-que-quiero-decir' },
  { spanish: 'No me refiero a eso, sino a...', english: 'I\'m not referring to that, but rather to...', pronunciation: 'noh meh reh-fee-EH-roh ah EH-soh SEE-noh ah', category: 'conversation-repair', audio: 'no-me-refiero-a-eso' },
  { spanish: 'Me explico mal, a ver...', english: 'I\'m explaining myself poorly, let me try...', pronunciation: 'meh ehks-PLEE-koh mahl ah behr', category: 'conversation-repair', audio: 'me-explico-mal' },
  { spanish: 'A ver si me entiendes bien', english: 'Let me see if you understand me correctly', pronunciation: 'ah behr see meh ehn-tee-EHN-dehs bee-EHN', category: 'conversation-repair', audio: 'a-ver-si-me-entiendes' },
  { spanish: 'Para ser más preciso, quiero decir que...', english: 'To be more precise, I mean that...', pronunciation: 'PAH-rah sehr mahs preh-SEE-soh kee-EH-roh deh-SEER keh', category: 'conversation-repair', audio: 'para-ser-mas-preciso' },
  { spanish: 'Mejor dicho, lo que pasa es que...', english: 'Rather, what\'s happening is that...', pronunciation: 'meh-HOHR DEE-choh loh keh PAH-sah ehs keh', category: 'conversation-repair', audio: 'mejor-dicho-lo-que-pasa' },
  { spanish: 'No es exactamente eso, déjame reformular', english: 'That\'s not exactly it, let me rephrase', pronunciation: 'noh ehs ehk-sahk-tah-MEHN-teh EH-soh DEH-hah-meh reh-fohr-moo-LAHR', category: 'conversation-repair', audio: 'dejame-reformular' },
  { spanish: 'Creo que me has malinterpretado', english: 'I think you\'ve misunderstood me', pronunciation: 'KREH-oh keh meh ahs mahl-een-tehr-preh-TAH-doh', category: 'conversation-repair', audio: 'me-has-malinterpretado' },
  { spanish: 'Es decir, lo que intento explicar es...', english: 'That is to say, what I\'m trying to explain is...', pronunciation: 'ehs deh-SEER loh keh een-TEHN-toh ehks-plee-KAHR ehs', category: 'conversation-repair', audio: 'es-decir-lo-que-intento' },
  { spanish: 'Perdón, no me he expresado bien', english: 'Sorry, I haven\'t expressed myself well', pronunciation: 'pehr-DOHN noh meh eh ehks-preh-SAH-doh bee-EHN', category: 'conversation-repair', audio: 'no-me-he-expresado-bien' },
  { spanish: 'O sea, en otras palabras...', english: 'I mean, in other words...', pronunciation: 'oh SEH-ah ehn OH-trahs pah-LAH-brahs', category: 'conversation-repair', audio: 'o-sea-en-otras-palabras' },
  { spanish: 'Lo que pasa es que no me sale la palabra', english: 'The thing is I can\'t find the word', pronunciation: 'loh keh PAH-sah ehs keh noh meh SAH-leh lah pah-LAH-brah', category: 'conversation-repair', audio: 'no-me-sale-la-palabra' },

  // === Small Talk Mastery (12) ===
  { spanish: '¡Qué calor hace hoy! ¿No te parece?', english: 'It\'s so hot today! Don\'t you think?', pronunciation: 'keh kah-LOHR AH-seh oy noh teh pah-REH-seh', category: 'small-talk-mastery', audio: 'que-calor-hace-hoy' },
  { spanish: 'Bueno, cambiando de tema...', english: 'Well, changing the subject...', pronunciation: 'BWEH-noh kahm-bee-AHN-doh deh TEH-mah', category: 'small-talk-mastery', audio: 'cambiando-de-tema' },
  { spanish: 'Oye, a propósito, ¿supiste lo de...?', english: 'Hey, by the way, did you hear about...?', pronunciation: 'OH-yeh ah proh-POH-see-toh soo-PEES-teh loh deh', category: 'small-talk-mastery', audio: 'a-proposito-supiste' },
  { spanish: 'Bueno, te dejo que tengo que irme', english: 'Well, I\'ll let you go, I have to leave', pronunciation: 'BWEH-noh teh DEH-hoh keh TEHN-goh keh EER-meh', category: 'small-talk-mastery', audio: 'te-dejo-que-tengo-que-irme' },
  { spanish: 'Fue un placer charlar contigo', english: 'It was a pleasure chatting with you', pronunciation: 'fweh oon plah-SEHR chahr-LAHR kohn-TEE-goh', category: 'small-talk-mastery', audio: 'fue-un-placer-charlar' },
  { spanish: 'Y hablando de eso, ¿qué tal tu familia?', english: 'And speaking of that, how\'s your family?', pronunciation: 'ee ah-BLAHN-doh deh EH-soh keh tahl too fah-MEE-lee-ah', category: 'small-talk-mastery', audio: 'hablando-de-eso-tu-familia' },
  { spanish: 'La sobremesa de ayer fue larguísima', english: 'Yesterday\'s after-dinner conversation was very long', pronunciation: 'lah soh-breh-MEH-sah deh ah-YEHR fweh lahr-GEE-see-mah', category: 'small-talk-mastery', audio: 'la-sobremesa-fue-larguisima' },
  { spanish: '¿Qué tal el fin de semana? ¿Hiciste algo?', english: 'How was the weekend? Did you do anything?', pronunciation: 'keh tahl ehl feen deh seh-MAH-nah ee-SEES-teh AHL-goh', category: 'small-talk-mastery', audio: 'que-tal-fin-de-semana' },
  { spanish: 'Pues nada, aquí andamos, como siempre', english: 'Well, nothing much, here we are, as always', pronunciation: 'pwehs NAH-dah ah-KEE ahn-DAH-mohs KOH-moh see-EHM-preh', category: 'small-talk-mastery', audio: 'aqui-andamos-como-siempre' },
  { spanish: 'Eso me recuerda que quería contarte algo', english: 'That reminds me I wanted to tell you something', pronunciation: 'EH-soh meh reh-KWEHR-dah keh keh-REE-ah kohn-TAHR-teh AHL-goh', category: 'small-talk-mastery', audio: 'eso-me-recuerda' },
  { spanish: 'Qué gusto verte, hace mucho que no nos vemos', english: 'Great to see you, it\'s been a long time', pronunciation: 'keh GOOS-toh BEHR-teh AH-seh MOO-choh keh noh nohs BEH-mohs', category: 'small-talk-mastery', audio: 'que-gusto-verte' },
  { spanish: 'Nos ponemos al día otro rato, ¿vale?', english: 'Let\'s catch up another time, okay?', pronunciation: 'nohs poh-NEH-mohs ahl DEE-ah OH-troh RRAH-toh BAH-leh', category: 'small-talk-mastery', audio: 'nos-ponemos-al-dia' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L101PhraseByAudio = phraseByAudio

// === CONVERSATION MASTER (unique activity) ===

export interface ConversationMasterChallenge {
  situation: string
  english: string
  correctResponse: string
  options: string[]
}

export const CONVERSATION_MASTER_CHALLENGES: ConversationMasterChallenge[] = [
  {
    situation: 'Your friend is telling a long story. You want to show you\'re engaged without interrupting. What do you say?',
    english: 'Show active listening.',
    correctResponse: '¡No me digas! ¿Y qué pasó después?',
    options: ['¡No me digas! ¿Y qué pasó después?', 'Bueno, cambiando de tema...', 'Un momento, que no he terminado', 'Me explico mal, a ver...'],
  },
  {
    situation: 'You realize mid-sentence that you\'re not explaining yourself clearly. You want to rephrase.',
    english: 'Repair your own speech.',
    correctResponse: 'Es decir, lo que intento explicar es...',
    options: ['Claro, claro, te entiendo', 'Es decir, lo que intento explicar es...', '¡Qué interesante!', 'Te cedo el turno, adelante'],
  },
  {
    situation: 'Someone has been talking for a while and you have an important point to add. How do you politely take the floor?',
    english: 'Politely take your turn.',
    correctResponse: 'Perdona que te interrumpa, pero...',
    options: ['Ajá, sigue, sigue', 'Perdona que te interrumpa, pero...', 'Bueno, te dejo que tengo que irme', 'Ya veo, ya veo...'],
  },
  {
    situation: 'You\'re at a networking event and want to smoothly change the topic to something more relevant.',
    english: 'Gracefully change the topic.',
    correctResponse: 'Oye, a propósito, ¿supiste lo de...?',
    options: ['No me refiero a eso, sino a...', 'Un momento, que no he terminado', 'Oye, a propósito, ¿supiste lo de...?', 'Totalmente de acuerdo contigo'],
  },
  {
    situation: 'You need to leave a pleasant conversation without being rude. What\'s the best way to exit?',
    english: 'Exit a conversation gracefully.',
    correctResponse: 'Bueno, te dejo que tengo que irme. ¡Fue un placer!',
    options: ['Bueno, te dejo que tengo que irme. ¡Fue un placer!', 'Como iba diciendo...', 'Creo que me has malinterpretado', '¿En serio? ¡Qué fuerte!'],
  },
  {
    situation: 'Someone misunderstood what you said. You need to clarify without sounding annoyed.',
    english: 'Clarify a misunderstanding.',
    correctResponse: 'No me refiero a eso, sino a...',
    options: ['¡Qué barbaridad!', 'Ajá, sigue, sigue', 'No me refiero a eso, sino a...', 'A lo que iba...'],
  },
  {
    situation: 'You were interrupted in the middle of your story. Now you want to continue from where you left off.',
    english: 'Resume after an interruption.',
    correctResponse: 'Como iba diciendo...',
    options: ['¡Fíjate! Yo no sabía eso', 'Para ser más preciso...', 'Como iba diciendo...', 'Mmm, ¿y tú qué opinas?'],
  },
]

// === LESSON DATA ===

export const L101Data: LessonData = {
  id: 'L10.1',
  hero: {
    lessonId: 'L10.1',
    title: 'The Art of Conversation',
    subtitle: 'Mastering real-world conversational flow in Spanish',
    description: 'Master the subtle art of real-world conversation: turn-taking, topic management, active listening signals, conversation repair, small talk mastery, and the unwritten rules of Spanish conversation across cultures. This capstone lesson brings together everything you\'ve learned into fluid, natural dialogue.',
    image: '/images/L10.1/L10.1.jpg',
    gradient: 'from-indigo-800/65 via-blue-700/55 to-cyan-700/65',
    accentColor: 'indigo-200',
  },

  objectives: [
    { icon: '🗣', title: 'Turn-Taking', desc: 'Take, yield, and reclaim the floor with grace: interrupting politely, resuming, and ceding turns.' },
    { icon: '👂', title: 'Active Listening', desc: 'Use muletillas and listening signals: ¡No me digas!, ¿En serio?, Ajá, Ya veo, Cuéntame más.' },
    { icon: '🔧', title: 'Conversation Repair', desc: 'Reformulate, clarify, and recover: Lo que quiero decir es..., Me explico mal, Es decir...' },
    { icon: '☕', title: 'Small Talk Mastery', desc: 'Break the ice, keep it flowing, change topics smoothly, and exit without brusqueness.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.8', label: 'Nuanced Expression', detail: 'L5.8 taught nuanced phrasing and tone. Now apply those skills in real-time conversational flow.' },
    { fromLesson: 'L7.1', label: 'Dialectology', detail: 'L7.1 explored regional varieties. Conversational norms vary by region — interruption, silence, and pacing differ across the Spanish-speaking world.' },
    { fromLesson: 'L4.3', label: 'Formal vs. Informal', detail: 'L4.3 covered register switching. Now deploy the right register dynamically within a single conversation.' },
  ],

  sectionTransitions: [
    { afterSection: 'turn-taking', text: 'You can navigate turns like a pro! Now let\'s master the art of active listening.' },
    { afterSection: 'active-listening', text: 'Great listening signals! Now learn to repair and clarify when things go sideways.' },
    { afterSection: 'conversation-repair', text: 'Smooth repairs! Time to master small talk — the glue of social interaction.' },
    { afterSection: 'dialogues', text: 'Wonderful conversations! Let\'s explore how conversation norms differ across cultures.' },
    { afterSection: 'cultural', text: 'Cultural insights absorbed! Now prove your conversational mastery in the challenge!' },
    { afterSection: 'conversation-master', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Perdona que te interrumpa...', english: 'Sorry to interrupt...' },
    { spanish: '¡No me digas!', english: 'No way!' },
    { spanish: 'Lo que quiero decir es...', english: 'What I mean is...' },
    { spanish: 'Cambiando de tema...', english: 'Changing the subject...' },
    { spanish: 'Fue un placer charlar', english: 'It was a pleasure chatting' },
    { spanish: 'A ver si me entiendes', english: 'Let me see if you get me' },
  ],

  pronunciationChallenges: [
    { spanish: 'Perdona que te interrumpa, pero quería decir algo', pronunciation: 'pehr-DOH-nah keh teh een-teh-RROOM-pah PEH-roh keh-REE-ah deh-SEER AHL-goh', english: 'Sorry to interrupt, but I wanted to say something', audio: 'perdona-que-te-interrumpa', tip: 'The "rr" in "interrumpa" requires a strong trill. The polite subjunctive "interrumpa" softens the interruption.' },
    { spanish: '¡Qué barbaridad! No tenía ni idea', pronunciation: 'keh bahr-bah-ree-DAHD noh teh-NEE-ah nee ee-DEH-ah', english: 'How outrageous! I had no idea', audio: 'que-barbaridad-que-paso', tip: '"Barbaridad" shows shock. The stress falls on the last syllable: barbarIDAD. Great active listening signal.' },
    { spanish: 'Es decir, lo que intento explicar es otra cosa', pronunciation: 'ehs deh-SEER loh keh een-TEHN-toh ehks-plee-KAHR ehs OH-trah KOH-sah', english: 'That is to say, what I\'m trying to explain is something else', audio: 'es-decir-lo-que-intento', tip: '"Es decir" is the most versatile repair phrase. It means "that is to say" and gives you time to reformulate.' },
    { spanish: 'Bueno, cambiando de tema, ¿qué tal tu trabajo?', pronunciation: 'BWEH-noh kahm-bee-AHN-doh deh TEH-mah keh tahl too trah-BAH-hoh', english: 'Well, changing the subject, how\'s your job?', audio: 'cambiando-de-tema', tip: '"Bueno" at the start of a sentence is a universal topic-changer in Spanish. It works everywhere.' },
    { spanish: 'Retomando el hilo, como te decía antes...', pronunciation: 'reh-toh-MAHN-doh ehl EE-loh KOH-moh teh deh-SEE-ah AHN-tehs', english: 'Picking up the thread, as I was telling you before...', audio: 'retomando-el-hilo', tip: '"El hilo" (the thread) is a metaphor for the conversation\'s flow. "Retomar el hilo" = getting back on track.' },
    { spanish: 'Nos ponemos al día la próxima vez, ¿vale?', pronunciation: 'nohs poh-NEH-mohs ahl DEE-ah lah PROHK-see-mah behs BAH-leh', english: 'Let\'s catch up next time, okay?', audio: 'nos-ponemos-al-dia', tip: '"Ponerse al día" means to catch up. "¿Vale?" at the end seeks agreement — very common in Spain. In Latin America, use "¿va?" or "¿dale?"' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'turn-taking', label: 'Turn-Taking' },
    { id: 'active-listening', label: 'Active Listening' },
    { id: 'conversation-repair', label: 'Conversation Repair' },
    { id: 'small-talk-mastery', label: 'Small Talk Mastery' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'conversation-master', label: 'Conversation Master' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'turn-taking',
      title: 'Turn-Taking — Tomar y Ceder la Palabra',
      description: 'Navigate the flow of conversation: take the floor, yield gracefully, interrupt politely, and resume after being interrupted.',
      tabs: [
        { label: 'Taking the Floor', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'turn-taking').slice(0, 6) },
        { label: 'Yielding & Resuming', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'turn-taking').slice(6) },
      ],
    },
    {
      id: 'active-listening',
      title: 'Active Listening — Señales de Escucha Activa',
      description: 'Show engagement with the right muletillas and reactions. These small signals tell the speaker "I\'m with you."',
      tabs: [
        { label: 'Surprise & Interest', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'active-listening').slice(0, 6) },
        { label: 'Agreement & Empathy', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'active-listening').slice(6) },
      ],
    },
    {
      id: 'conversation-repair',
      title: 'Conversation Repair — Reformulación y Aclaración',
      description: 'When words fail or meaning gets lost, these phrases let you rephrase, clarify, and recover without losing your listener.',
      tabs: [
        { label: 'Clarifying Intent', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'conversation-repair').slice(0, 6) },
        { label: 'Rephrasing & Correcting', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'conversation-repair').slice(6) },
      ],
    },
    {
      id: 'small-talk-mastery',
      title: 'Small Talk Mastery — El Arte de la Charla',
      description: 'Break the ice, keep the conversation flowing, change topics with elegance, and say goodbye without brusqueness.',
      tabs: [
        { label: 'Opening & Flowing', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'small-talk-mastery').slice(0, 6) },
        { label: 'Redirecting & Closing', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'small-talk-mastery').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Music of Muletillas',
      content: 'Muletillas (filler words and listening signals) are the heartbeat of Spanish conversation. Unlike English fillers that can sound hesitant, Spanish muletillas like "o sea," "es decir," "bueno," and "pues" are integral to fluent speech. They buy thinking time, signal transitions, and show you\'re a native-level communicator. Embrace them — don\'t avoid them!',
      example: '"O sea, lo que pasa es que..." (I mean, the thing is...) | "Bueno, pues nada..." (Well, anyway...)',
    },
    {
      title: 'Intonation for Interruptions',
      content: 'When interrupting in Spanish, rising intonation at the start softens the interruption: "¿Perdona?" with a gentle rise sounds polite, while a flat "Perdona" can sound curt. Similarly, "Pero..." with a slight rise invites the listener to yield, while a forceful "PERO" feels aggressive. The music of your voice matters more than the words.',
      example: '"¿Perdona que te interrumpa? (↑)" vs. "Perdona que te interrumpa. (→)"',
      reviewFrom: 'L4.3',
    },
    {
      title: 'The Speed of Small Talk',
      content: 'Small talk in Spanish moves fast — especially in Spain and the Caribbean. Don\'t try to process every word. Focus on key phrases: "¿Qué tal?", "¿Cómo va todo?", "Pues nada, aquí andamos." The responses are often formulaic. The real content comes later, once the ritual pleasantries are done. Practice the rhythm, not just the words.',
      example: '"¿Qué tal?" "Bien, ¿y tú?" "Aquí, tirando." — This exchange takes 2 seconds in real life.',
      reviewFrom: 'L5.8',
    },
    {
      title: 'Conversation Repair Without Panic',
      content: 'When you need to rephrase, slow down slightly and use a repair phrase as a bridge: "Es decir..." (that is to say), "O sea..." (I mean), "Mejor dicho..." (rather/better said). These phrases signal to the listener that you\'re about to clarify — they\'ll wait patiently. Native speakers use them constantly, so you should too!',
      example: '"Es decir... no, espera... mejor dicho, lo que quiero decir es..." — Perfectly natural!',
    },
  ],

  flashcardGroups: [
    {
      key: 'turn-taking',
      label: 'Turn-Taking',
      audioKeys: ['perdona-que-te-interrumpa', 'como-iba-diciendo', 'dejame-terminar-y-luego', 'queria-anadir-algo', 'dejame-tomar-la-palabra', 'te-cedo-el-turno', 'puedo-decir-algo', 'a-lo-que-iba', 'retomando-el-hilo', 'antes-de-que-se-me-olvide', 'tu-diras-te-escucho', 'un-momento-no-terminado'],
    },
    {
      key: 'active-listening',
      label: 'Active Listening',
      audioKeys: ['no-me-digas', 'en-serio-que-fuerte', 'que-interesante-cuentame', 'claro-claro-te-entiendo', 'aja-sigue-sigue', 'ya-veo-tiene-sentido', 'que-barbaridad-que-paso', 'fijate-no-sabia', 'que-bien-me-alegro', 'y-tu-que-opinas', 'totalmente-de-acuerdo', 'que-pena-lo-siento'],
    },
    {
      key: 'repair-smalltalk',
      label: 'Repair & Small Talk',
      audioKeys: ['lo-que-quiero-decir', 'no-me-refiero-a-eso', 'me-explico-mal', 'a-ver-si-me-entiendes', 'cambiando-de-tema', 'te-dejo-que-tengo-que-irme', 'fue-un-placer-charlar', 'que-gusto-verte'],
    },
  ],

  matchPairs: [
    { left: 'Perdona que te interrumpa', right: 'Sorry to interrupt' },
    { left: '¡No me digas!', right: 'No way! / You don\'t say!' },
    { left: 'Lo que quiero decir es...', right: 'What I mean is...' },
    { left: 'Cambiando de tema', right: 'Changing the subject' },
    { left: 'Ya veo', right: 'I see' },
    { left: 'Me explico mal', right: 'I\'m explaining poorly' },
    { left: 'Fue un placer charlar', right: 'It was a pleasure chatting' },
    { left: 'A lo que iba...', right: 'Getting back to my point...' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Conversational Move Type',
      instruction: 'Is this phrase for turn-taking or for active listening?',
      buckets: ['Turn-Taking 🗣', 'Active Listening 👂'],
      items: [
        { text: 'Perdona que te interrumpa', bucket: 'Turn-Taking 🗣' },
        { text: 'Como iba diciendo...', bucket: 'Turn-Taking 🗣' },
        { text: 'Déjame tomar la palabra', bucket: 'Turn-Taking 🗣' },
        { text: 'Te cedo el turno', bucket: 'Turn-Taking 🗣' },
        { text: '¡No me digas!', bucket: 'Active Listening 👂' },
        { text: 'Ajá, sigue, sigue', bucket: 'Active Listening 👂' },
        { text: 'Ya veo, ya veo...', bucket: 'Active Listening 👂' },
        { text: '¡Qué interesante!', bucket: 'Active Listening 👂' },
      ],
    },
    {
      title: 'Repair vs. Small Talk',
      instruction: 'Is this phrase for repairing a misunderstanding or for small talk?',
      buckets: ['Conversation Repair 🔧', 'Small Talk ☕'],
      items: [
        { text: 'Lo que quiero decir es...', bucket: 'Conversation Repair 🔧' },
        { text: 'No me refiero a eso', bucket: 'Conversation Repair 🔧' },
        { text: 'Me explico mal', bucket: 'Conversation Repair 🔧' },
        { text: 'Es decir...', bucket: 'Conversation Repair 🔧' },
        { text: 'Cambiando de tema...', bucket: 'Small Talk ☕' },
        { text: '¿Qué tal el fin de semana?', bucket: 'Small Talk ☕' },
        { text: 'Fue un placer charlar', bucket: 'Small Talk ☕' },
        { text: 'Nos ponemos al día', bucket: 'Small Talk ☕' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Verb Sorting',

  dialogues: [
    {
      id: 'dialogue-dinner-party',
      title: 'Dinner Party in Madrid — Navigating a Group Conversation',
      location: 'Madrid',
      lines: [
        { speaker: 'Carmen', text: 'Bueno, ¿y qué me contáis? Hace meses que no nos juntamos todos.', audio: '/audio/L10.1/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: 'Pues yo acabo de volver de Colombia. ¡Fue increíble! La gente, la comida...', audio: '/audio/L10.1/phrases/d1-line2.mp3' },
        { speaker: 'Lucía', text: 'Perdona que te interrumpa, Diego, pero ¿fuiste a Cartagena? Me han dicho que es espectacular.', audio: '/audio/L10.1/phrases/d1-line3.mp3' },
        { speaker: 'Diego', text: 'Sí, sí. Bueno, como iba diciendo, la gastronomía me dejó flipado. Probé de todo.', audio: '/audio/L10.1/phrases/d1-line4.mp3', annotations: [{ phrase: 'como iba diciendo', fromLesson: 'L10.1', note: 'Resuming after interruption — turn-taking' }] },
        { speaker: 'Carmen', text: '¡No me digas! ¿Y qué fue lo mejor que comiste?', audio: '/audio/L10.1/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: 'Un ajiaco bogotano que... bueno, es que no me sale la palabra... era como una sopa pero con tres tipos de patata.', audio: '/audio/L10.1/phrases/d1-line6.mp3' },
        { speaker: 'Pablo', text: '¡Fíjate! Yo he oído que en Bogotá la comida callejera es buenísima también.', audio: '/audio/L10.1/phrases/d1-line7.mp3' },
        { speaker: 'Lucía', text: 'Oye, a propósito, ¿supisteis lo de la nueva ruta directa Madrid-Bogotá?', audio: '/audio/L10.1/phrases/d1-line8.mp3' },
        { speaker: 'Carmen', text: 'Ajá, sí, lo leí. Cambiando un poco de tema, ¿alguien quiere más vino? Esta sobremesa va para largo.', audio: '/audio/L10.1/phrases/d1-line9.mp3', annotations: [{ phrase: 'sobremesa', fromLesson: 'L10.1', note: 'The cherished post-meal conversation — uniquely Spanish' }] },
        { speaker: 'Diego', text: '¡Claro! Retomando el hilo, lo que quería decir es que Colombia me cambió la perspectiva. Es decir, ahora entiendo por qué la llaman "el país más acogedor."', audio: '/audio/L10.1/phrases/d1-line10.mp3' },
        { speaker: 'Pablo', text: 'Totalmente de acuerdo. Yo fui hace dos años y quiero volver. Bueno, ya os contaré.', audio: '/audio/L10.1/phrases/d1-line11.mp3' },
        { speaker: 'Lucía', text: 'Pues nada, aquí andamos, planificando viajes. ¡Qué gusto juntarnos así!', audio: '/audio/L10.1/phrases/d1-line12.mp3' },
        { speaker: 'Carmen', text: 'Oye, antes de que se me olvide, quería contaros algo del trabajo. ¿Me dejáis un momento?', audio: '/audio/L10.1/phrases/d1-line13.mp3' },
        { speaker: 'Diego', text: 'Tú dirás, te escuchamos.', audio: '/audio/L10.1/phrases/d1-line14.mp3' },
        { speaker: 'Carmen', text: '¡Me han ascendido! Pero mejor dicho, lo que pasa es que me han dado un proyecto internacional.', audio: '/audio/L10.1/phrases/d1-line15.mp3' },
        { speaker: 'Lucía', text: '¡Qué bien! ¡Me alegro mucho, Carmen! Eso hay que celebrarlo.', audio: '/audio/L10.1/phrases/d1-line16.mp3' },
      ],
    },
    {
      id: 'dialogue-networking',
      title: 'Networking Event in Mexico City — Small Talk Mastery',
      location: 'Mexico City',
      lines: [
        { speaker: 'Andrea', text: '¡Qué gusto verte! Hace mucho que no coincidíamos en un evento así.', audio: '/audio/L10.1/phrases/d2-line1.mp3' },
        { speaker: 'Tomás', text: '¡Andrea! Sí, desde la conferencia de Guadalajara. ¿Qué tal el fin de semana? ¿Hiciste algo interesante?', audio: '/audio/L10.1/phrases/d2-line2.mp3' },
        { speaker: 'Andrea', text: 'Pues nada, aquí andamos, como siempre. Bueno, en realidad sí — empecé un curso de inteligencia artificial.', audio: '/audio/L10.1/phrases/d2-line3.mp3' },
        { speaker: 'Tomás', text: '¿En serio? ¡Qué interesante! Cuéntame más. ¿Es presencial o en línea?', audio: '/audio/L10.1/phrases/d2-line4.mp3' },
        { speaker: 'Andrea', text: 'En línea, pero tiene sesiones en vivo. Lo que pasa es que... a ver si me explico... no es tanto de programar, sino de, o sea, en otras palabras, de entender cómo aplicar la IA a negocios.', audio: '/audio/L10.1/phrases/d2-line5.mp3', annotations: [{ phrase: 'o sea, en otras palabras', fromLesson: 'L10.1', note: 'Natural conversation repair — rephrasing mid-thought' }] },
        { speaker: 'Tomás', text: 'Ya veo, ya veo. Tiene sentido. Eso me recuerda que quería contarte algo — mi empresa está buscando alguien con ese perfil.', audio: '/audio/L10.1/phrases/d2-line6.mp3' },
        { speaker: 'Andrea', text: '¡No me digas! Oye, a propósito, ¿sigues trabajando en la misma empresa?', audio: '/audio/L10.1/phrases/d2-line7.mp3' },
        { speaker: 'Tomás', text: 'Sí, pero cambié de área. Ahora estoy en innovación. Perdón, ¿puedo decir algo antes de que se me olvide?', audio: '/audio/L10.1/phrases/d2-line8.mp3' },
        { speaker: 'Andrea', text: 'Claro, claro, adelante.', audio: '/audio/L10.1/phrases/d2-line9.mp3' },
        { speaker: 'Tomás', text: 'Te mando mi tarjeta por WhatsApp. Hablando de eso, ¿sigues con el mismo número?', audio: '/audio/L10.1/phrases/d2-line10.mp3' },
        { speaker: 'Andrea', text: 'Sí, el mismo. Oye, mira, ya va a empezar la conferencia. Bueno, te dejo que tengo que buscar mi asiento.', audio: '/audio/L10.1/phrases/d2-line11.mp3' },
        { speaker: 'Tomás', text: 'Fue un placer charlar contigo. Nos ponemos al día otro rato, ¿va?', audio: '/audio/L10.1/phrases/d2-line12.mp3' },
        { speaker: 'Andrea', text: '¡Claro que sí! Un gusto, Tomás. ¡Hablamos pronto!', audio: '/audio/L10.1/phrases/d2-line13.mp3' },
        { speaker: 'Tomás', text: '¡Igualmente! Y suerte con el curso de IA. Cuéntame cómo te va.', audio: '/audio/L10.1/phrases/d2-line14.mp3' },
        { speaker: 'Andrea', text: '¡Seguro! Nos vemos, Tomás.', audio: '/audio/L10.1/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Navigate a lively dinner party with multiple speakers in Madrid and master small talk at a networking event in Mexico City.',

  culturalNotes: [
    {
      title: 'The Art of Sobremesa Revisited',
      content: 'Sobremesa — the time spent lingering at the table after a meal — is more than a custom. It is the social institution where real relationships are forged in Spanish culture. Unlike cultures where leaving the table quickly is normal, in Spain and Latin America, rushing the sobremesa is considered rude. Conversations meander, topics overlap, people interrupt each other warmly, and silence is rare. The sobremesa can last from 30 minutes to 3 hours. It is where business deals close, friendships deepen, and family bonds strengthen. Mastering the conversational flow of sobremesa is mastering Spanish social life itself.',
    },
    {
      title: 'Conversational Styles Across Latin America',
      content: 'The Spanish-speaking world is not monolithic in its conversational norms. Spaniards and Argentines tend toward overlapping speech — interrupting is a sign of engagement, not rudeness. Mexicans generally allow more space between turns, valuing indirect communication and saving face. Colombians are known for elaborate courtesy phrases and warmth. Caribbean speakers (Cubans, Dominicans, Puerto Ricans) often speak rapidly with high energy. Chileans use a dense layer of slang and inside humor. Understanding these differences helps you navigate conversations in any Spanish-speaking country without committing cultural faux pas.',
    },
    {
      title: 'Silence and Interruption Norms',
      content: 'In many Anglo cultures, silence in conversation signals discomfort. In Spanish, it depends. Brief pauses are natural, but prolonged silence can create awkwardness — hence the abundance of muletillas to fill gaps. Interruption norms are perhaps the biggest cultural shock: in Spain, overlapping speech is normal and expected. Not interrupting can make you seem disengaged! In Mexico, interrupting a superior is inappropriate. In Argentina, animated debate with constant interruption is a sign of intellectual engagement. The key is to read the room and match the energy of your conversational partners.',
    },
  ],
  culturalGradient: 'from-indigo-50 to-cyan-50',

  quiz: [
    { id: 1, type: 'mc', text: 'To politely interrupt someone, you would say:', options: ['Ajá, sigue', 'Perdona que te interrumpa, pero...', 'Bueno, te dejo', 'Ya veo'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Como ___ diciendo, la comida era excelente" (I was)', answer: 'iba' },
    { id: 3, type: 'mc', text: '"¡No me digas!" is used for:', options: ['Giving an order', 'Expressing surprise/engagement', 'Ending a conversation', 'Repairing a mistake'], answer: 1 },
    { id: 4, type: 'tf', text: '"Sobremesa" refers to the post-meal conversation that can last hours.', answer: true },
    { id: 5, type: 'mc', text: '"Lo que quiero decir es..." is used to:', options: ['Change the topic', 'Show surprise', 'Clarify or rephrase', 'Say goodbye'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "Bueno, ___ de tema, ¿qué tal tu familia?" (changing)', answer: 'cambiando' },
    { id: 7, type: 'mc', text: 'In Spain, overlapping speech during conversation is:', options: ['Always rude', 'A sign of engagement', 'Only for arguments', 'Unacceptable'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what news does Carmen share?', options: ['She\'s moving abroad', 'She got promoted', 'She\'s getting married', 'She quit her job'], answer: 1 },
    { id: 9, type: 'tf', text: '"Muletillas" are filler phrases that signal poor Spanish.', answer: false },
    { id: 10, type: 'mc', text: '"Fue un placer charlar contigo" is used to:', options: ['Start a conversation', 'Change topics', 'Exit gracefully', 'Interrupt politely'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "Es ___, lo que intento explicar es otra cosa" (that is to say)', answer: 'decir' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what course is Andrea taking?', options: ['Business administration', 'Artificial intelligence', 'Marketing', 'Spanish literature'], answer: 1 },
    { id: 13, type: 'mc', text: '"Nos ponemos al día" means:', options: ['We\'ll fight', 'We\'ll catch up', 'We\'ll cook', 'We\'ll forget'], answer: 1 },
    { id: 14, type: 'tf', text: 'In Mexico, interrupting a superior is generally considered acceptable.', answer: false },
    { id: 15, type: 'mc', text: 'Which phrase helps you resume after being interrupted?', options: ['¡Qué bien!', 'A lo que iba...', 'Totalmente de acuerdo', 'Nos ponemos al día'], answer: 1 },
  ],

  audioBase: '/audio/L10.1/phrases',

  uniqueActivity: {
    id: 'ConversationMasterL101',
    sectionId: 'conversation-master',
    sectionColor: 'bg-indigo-50/40',
    sectionBorder: 'border-indigo-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-cyan-50/30', border: 'border-cyan-100' },
    'turn-taking': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'active-listening': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'conversation-repair': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'small-talk-mastery': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    cultural: { bg: 'bg-cyan-50/30', border: 'border-cyan-100' },
    'conversation-master': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
    'knowledge-check': { bg: 'bg-rose-50/40', border: 'border-rose-100' },
  },
}
