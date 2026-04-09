import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Internet & Digital Slang (12) ===
  { spanish: 'Me stalkeó en todas mis redes sociales', english: 'He/she stalked me on all my social media', pronunciation: 'meh stahl-keh-OH ehn TOH-dahs mees RREH-dehs soh-see-AH-lehs', category: 'internet-digital-slang', audio: 'stalkeo-en-todas-mis-redes' },
  { spanish: 'Voy a googlear eso ahora mismo', english: 'I\'m going to google that right now', pronunciation: 'boy ah goo-gleh-AHR EH-soh ah-OH-rah MEES-moh', category: 'internet-digital-slang', audio: 'voy-a-googlear-eso' },
  { spanish: 'Ella tuiteó una foto increíble', english: 'She tweeted an incredible photo', pronunciation: 'EH-yah twee-teh-OH OO-nah FOH-toh een-kreh-EE-bleh', category: 'internet-digital-slang', audio: 'tuiteo-una-foto-increible' },
  { spanish: 'Los fans shippean a esos dos personajes', english: 'The fans ship those two characters', pronunciation: 'lohs fahns shee-PEH-ahn ah EH-sohs dohs pehr-soh-NAH-hehs', category: 'internet-digital-slang', audio: 'fans-shippean-dos-personajes' },
  { spanish: 'Me ghosteó después de tres citas', english: 'He/she ghosted me after three dates', pronunciation: 'meh gohs-teh-OH dehs-PWEHS deh trehs SEE-tahs', category: 'internet-digital-slang', audio: 'me-ghosteo-despues-de-tres-citas' },
  { spanish: 'No lo troleen, es un buen tipo', english: 'Don\'t troll him, he\'s a good guy', pronunciation: 'noh loh troh-LEH-ehn ehs oon bwehn TEE-poh', category: 'internet-digital-slang', audio: 'no-lo-troleen' },
  { spanish: 'Vamos a streamear el partido en vivo', english: 'Let\'s stream the game live', pronunciation: 'BAH-mohs ah stree-meh-AHR ehl pahr-TEE-doh ehn BEE-boh', category: 'internet-digital-slang', audio: 'streamear-el-partido-en-vivo' },
  { spanish: 'Ese influencer tiene millones de seguidores', english: 'That influencer has millions of followers', pronunciation: 'EH-seh een-floo-EHN-sehr tee-EH-neh mee-YOH-nehs deh seh-gee-DOH-rehs', category: 'internet-digital-slang', audio: 'influencer-millones-seguidores' },
  { spanish: 'Pon el hashtag para que sea tendencia', english: 'Put the hashtag so it trends', pronunciation: 'pohn ehl AHSH-tahg PAH-rah keh SEH-ah tehn-DEHN-see-ah', category: 'internet-digital-slang', audio: 'pon-el-hashtag-tendencia' },
  { spanish: 'Ese meme se volvió viral en segundos', english: 'That meme went viral in seconds', pronunciation: 'EH-seh MEH-meh seh bohl-bee-OH bee-RAHL ehn seh-GOON-dohs', category: 'internet-digital-slang', audio: 'meme-se-volvio-viral' },
  { spanish: 'El video se hizo viral de la noche a la mañana', english: 'The video went viral overnight', pronunciation: 'ehl BEE-deh-oh seh EE-soh bee-RAHL deh lah NOH-cheh ah lah mah-NYAH-nah', category: 'internet-digital-slang', audio: 'video-viral-noche-manana' },
  { spanish: 'Lo cancelaron en redes por sus comentarios', english: 'They canceled him on social media for his comments', pronunciation: 'loh kahn-seh-LAH-rohn ehn RREH-dehs pohr soos koh-mehn-TAH-ree-ohs', category: 'internet-digital-slang', audio: 'cancelaron-en-redes' },

  // === Anglicisms & The Debate (12) ===
  { spanish: 'El departamento de marketing lanzó la campaña', english: 'The marketing department launched the campaign', pronunciation: 'ehl deh-pahr-tah-MEHN-toh deh MAHR-keh-teen lahn-SOH lah kahm-PAH-nyah', category: 'anglicisms-debate', audio: 'departamento-marketing-campana' },
  { spanish: 'En México dicen mercadotecnia, no marketing', english: 'In Mexico they say mercadotecnia, not marketing', pronunciation: 'ehn MEH-hee-koh DEE-sehn mehr-kah-doh-TEHK-nee-ah noh MAHR-keh-teen', category: 'anglicisms-debate', audio: 'mexico-mercadotecnia' },
  { spanish: 'Necesito tu feedback sobre el proyecto', english: 'I need your feedback on the project', pronunciation: 'neh-seh-SEE-toh too FEED-bahk SOH-breh ehl proh-YEHK-toh', category: 'anglicisms-debate', audio: 'necesito-feedback-proyecto' },
  { spanish: 'La retroalimentación del cliente fue positiva', english: 'The client feedback was positive', pronunciation: 'lah rreh-troh-ah-lee-mehn-tah-see-OHN dehl klee-EHN-teh fweh poh-see-TEE-bah', category: 'anglicisms-debate', audio: 'retroalimentacion-positiva' },
  { spanish: 'Te mando un email con los detalles', english: 'I\'ll send you an email with the details', pronunciation: 'teh MAHN-doh oon ee-MEYL kohn lohs deh-TAH-yehs', category: 'anglicisms-debate', audio: 'mando-email-detalles' },
  { spanish: 'Revisa tu correo electrónico, por favor', english: 'Check your email, please', pronunciation: 'rreh-BEE-sah too koh-RREH-oh eh-lehk-TROH-nee-koh pohr fah-BOHR', category: 'anglicisms-debate', audio: 'revisa-correo-electronico' },
  { spanish: 'Dejé el coche en el parking del centro', english: 'I left the car in the downtown parking lot', pronunciation: 'deh-HEH ehl KOH-cheh ehn ehl PAHR-keen dehl SEHN-troh', category: 'anglicisms-debate', audio: 'coche-en-el-parking' },
  { spanish: 'Busca estacionamiento cerca del teatro', english: 'Look for parking near the theater', pronunciation: 'BOOS-kah ehs-tah-see-oh-nah-mee-EHN-toh SEHR-kah dehl teh-AH-troh', category: 'anglicisms-debate', audio: 'busca-estacionamiento' },
  { spanish: 'El show de anoche fue espectacular', english: 'Last night\'s show was spectacular', pronunciation: 'ehl SHOH deh ah-NOH-cheh fweh ehs-pehk-tah-koo-LAHR', category: 'anglicisms-debate', audio: 'show-anoche-espectacular' },
  { spanish: 'El espectáculo empieza a las ocho', english: 'The show starts at eight', pronunciation: 'ehl ehs-pehk-TAH-koo-loh ehm-pee-EH-sah ah lahs OH-choh', category: 'anglicisms-debate', audio: 'espectaculo-empieza-ocho' },
  { spanish: 'Los puristas dicen que los anglicismos destruyen el español', english: 'Purists say that anglicisms destroy Spanish', pronunciation: 'lohs poo-REES-tahs DEE-sehn keh lohs ahn-glee-SEES-mohs dehs-TROO-yehn ehl ehs-pah-NYOHL', category: 'anglicisms-debate', audio: 'puristas-anglicismos-destruyen' },
  { spanish: 'La lengua evoluciona y absorbe palabras de otros idiomas', english: 'Language evolves and absorbs words from other languages', pronunciation: 'lah LEHN-gwah eh-boh-loo-see-OH-nah ee ahb-SOHR-beh pah-LAH-brahs deh OH-trohs ee-dee-OH-mahs', category: 'anglicisms-debate', audio: 'lengua-evoluciona-absorbe' },

  // === Generational Shifts (12) ===
  { spanish: 'Es que literal no entiendo nada', english: 'I literally don\'t understand anything', pronunciation: 'ehs keh lee-teh-RAHL noh ehn-tee-EHN-doh NAH-dah', category: 'generational-shifts', audio: 'literal-no-entiendo' },
  { spanish: 'Fue algo muy random lo que pasó', english: 'What happened was very random', pronunciation: 'fweh AHL-goh mooy RAHN-dohm loh keh pah-SOH', category: 'generational-shifts', audio: 'algo-muy-random' },
  { spanish: '¡Qué cringe lo que hizo en la fiesta!', english: 'What he did at the party was so cringe!', pronunciation: 'keh KREENJ loh keh EE-soh ehn lah fee-EHS-tah', category: 'generational-shifts', audio: 'que-cringe-fiesta' },
  { spanish: 'Esa relación es súper tóxica', english: 'That relationship is super toxic', pronunciation: 'EH-sah rreh-lah-see-OHN ehs SOO-pehr TOHK-see-kah', category: 'generational-shifts', audio: 'relacion-super-toxica' },
  { spanish: 'Me ghosteó sin explicación alguna', english: 'He/she ghosted me without any explanation', pronunciation: 'meh gohs-teh-OH seen ehks-plee-kah-see-OHN ahl-GOO-nah', category: 'generational-shifts', audio: 'me-ghosteo-sin-explicacion' },
  { spanish: 'No cap, eso fue lo mejor del año', english: 'No cap, that was the best thing this year', pronunciation: 'noh KAHP EH-soh fweh loh meh-HOHR dehl AH-nyoh', category: 'generational-shifts', audio: 'no-cap-lo-mejor' },
  { spanish: 'De hecho, ya nadie dice eso', english: 'Actually, nobody says that anymore', pronunciation: 'deh EH-choh yah NAH-dee-eh DEE-seh EH-soh', category: 'generational-shifts', audio: 'de-hecho-nadie-dice-eso' },
  { spanish: 'Y yo tipo... ¿qué está pasando aquí?', english: 'And I was like... what\'s going on here?', pronunciation: 'ee yoh TEE-poh keh ehs-TAH pah-SAHN-doh ah-KEE', category: 'generational-shifts', audio: 'yo-tipo-que-pasa' },
  { spanish: 'O sea, no tiene ningún sentido', english: 'I mean, it doesn\'t make any sense', pronunciation: 'oh SEH-ah noh tee-EH-neh neen-GOON sehn-TEE-doh', category: 'generational-shifts', audio: 'o-sea-no-tiene-sentido' },
  { spanish: 'Mis abuelos no entienden ni la mitad de lo que digo', english: 'My grandparents don\'t understand half of what I say', pronunciation: 'mees ah-BWEH-lohs noh ehn-tee-EHN-dehn nee lah mee-TAHD deh loh keh DEE-goh', category: 'generational-shifts', audio: 'abuelos-no-entienden' },
  { spanish: 'Los boomers no saben lo que es "basado"', english: 'Boomers don\'t know what "based" means', pronunciation: 'lohs BOO-mehrs noh SAH-behn loh keh ehs bah-SAH-doh', category: 'generational-shifts', audio: 'boomers-no-saben-basado' },
  { spanish: 'Cada generación inventa su propio vocabulario', english: 'Each generation invents its own vocabulary', pronunciation: 'KAH-dah heh-neh-rah-see-OHN een-BEHN-tah soo PROH-pee-oh boh-kah-boo-LAH-ree-oh', category: 'generational-shifts', audio: 'generacion-inventa-vocabulario' },

  // === RAE Neologisms (12) ===
  { spanish: 'Mándame un wasap cuando llegues', english: 'Send me a WhatsApp when you arrive', pronunciation: 'MAHN-dah-meh oon wah-SAHP KWAHN-doh YEH-gehs', category: 'rae-neologisms', audio: 'mandame-un-wasap' },
  { spanish: 'Publicó un tuit muy polémico ayer', english: 'He/she published a very controversial tweet yesterday', pronunciation: 'poo-blee-KOH oon TWEET mooy poh-LEH-mee-koh ah-YEHR', category: 'rae-neologisms', audio: 'publico-tuit-polemico' },
  { spanish: 'Se tomó una selfi frente al monumento', english: 'He/she took a selfie in front of the monument', pronunciation: 'seh toh-MOH OO-nah SEHL-fee FREHN-teh ahl moh-noo-MEHN-toh', category: 'rae-neologisms', audio: 'tomo-selfi-monumento' },
  { spanish: 'El bitcóin alcanzó un nuevo récord', english: 'Bitcoin reached a new record', pronunciation: 'ehl beet-KOH-een ahl-kahn-SOH oon NWEH-boh RREH-kohrd', category: 'rae-neologisms', audio: 'bitcoin-nuevo-record' },
  { spanish: 'Vivimos en la era de la posverdad', english: 'We live in the post-truth era', pronunciation: 'bee-BEE-mohs ehn lah EH-rah deh lah pohs-behr-DAHD', category: 'rae-neologisms', audio: 'era-de-la-posverdad' },
  { spanish: 'Me mandó un emoji de corazón', english: 'He/she sent me a heart emoji', pronunciation: 'meh mahn-DOH oon eh-MOH-hee deh koh-rah-SOHN', category: 'rae-neologisms', audio: 'mando-emoji-corazon' },
  { spanish: 'Escucho ese pódcast todas las mañanas', english: 'I listen to that podcast every morning', pronunciation: 'ehs-KOO-choh EH-seh POHD-kahst TOH-dahs lahs mah-NYAH-nahs', category: 'rae-neologisms', audio: 'escucho-podcast-mananas' },
  { spanish: 'La empresa usa big data para tomar decisiones', english: 'The company uses big data to make decisions', pronunciation: 'lah ehm-PREH-sah OO-sah beeg DAH-tah PAH-rah toh-MAHR deh-see-see-OH-nehs', category: 'rae-neologisms', audio: 'empresa-usa-big-data' },
  { spanish: 'Guardo todos mis archivos en la nube', english: 'I keep all my files in the cloud', pronunciation: 'GWAHR-doh TOH-dohs mees ahr-CHEE-bohs ehn lah NOO-beh', category: 'rae-neologisms', audio: 'archivos-en-la-nube' },
  { spanish: 'La resiliencia es clave en tiempos difíciles', english: 'Resilience is key in difficult times', pronunciation: 'lah rreh-see-lee-EHN-see-ah ehs KLAH-beh ehn tee-EHM-pohs dee-FEE-see-lehs', category: 'rae-neologisms', audio: 'resiliencia-clave-tiempos' },
  { spanish: 'Hay que empoderar a las comunidades locales', english: 'We must empower local communities', pronunciation: 'eye keh ehm-poh-deh-RAHR ah lahs koh-moo-nee-DAH-dehs loh-KAH-lehs', category: 'rae-neologisms', audio: 'empoderar-comunidades' },
  { spanish: 'La sociedad necesita deconstruir ciertos estereotipos', english: 'Society needs to deconstruct certain stereotypes', pronunciation: 'lah soh-see-eh-DAHD neh-seh-SEE-tah deh-kohns-troo-EER see-EHR-tohs ehs-teh-reh-oh-TEE-pohs', category: 'rae-neologisms', audio: 'deconstruir-estereotipos' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L64PhraseByAudio = phraseByAudio

// === SLANG EVOLUTION (unique activity) ===

export interface SlangEvolutionChallenge {
  oldForm: string
  context: string
  english: string
  correctModern: string
  options: string[]
}

export const SLANG_EVOLUTION_CHALLENGES: SlangEvolutionChallenge[] = [
  {
    oldForm: 'Envíame un mensaje por WhatsApp',
    context: 'Texting a friend casually in 2026',
    english: 'Send me a WhatsApp message',
    correctModern: 'Mándame un wasap',
    options: ['Mándame un wasap', 'Envíame un telegrama', 'Escríbeme una carta', 'Llámame por teléfono'],
  },
  {
    oldForm: 'Buscar información en Internet',
    context: 'A teenager asking a friend how to find something online',
    english: 'To search for information on the Internet',
    correctModern: 'Googlear',
    options: ['Googlear', 'Investigar en la enciclopedia', 'Navegar el ciberespacio', 'Consultar la biblioteca'],
  },
  {
    oldForm: 'Dejó de responder mis mensajes sin explicación',
    context: 'A Gen Z person describing a dating experience',
    english: 'Stopped answering my messages without explanation',
    correctModern: 'Me ghosteó',
    options: ['Me ghosteó', 'Me abandonó', 'Se fue sin despedirse', 'Me dejó en visto'],
  },
  {
    oldForm: 'Fotografía de uno mismo',
    context: 'The RAE had to accept a new word for this in 2014',
    english: 'A photograph of oneself',
    correctModern: 'Selfi',
    options: ['Selfi', 'Autorretrato digital', 'Foto personal', 'Imagen propia'],
  },
  {
    oldForm: 'Persona con influencia en redes sociales',
    context: 'Describing someone with millions of followers on Instagram',
    english: 'A person with influence on social media',
    correctModern: 'Influencer / Influenciador',
    options: ['Influencer / Influenciador', 'Famoso digital', 'Celebridad de Internet', 'Líder de opinión virtual'],
  },
  {
    oldForm: 'Eso me da mucha vergüenza ajena',
    context: 'A young person reacting to an embarrassing video online',
    english: 'That gives me secondhand embarrassment',
    correctModern: '¡Qué cringe!',
    options: ['¡Qué cringe!', '¡Qué pena!', '¡Qué horror!', '¡Qué bochorno!'],
  },
  {
    oldForm: 'Transmitir contenido en directo por Internet',
    context: 'A gamer going live on Twitch',
    english: 'To broadcast content live on the Internet',
    correctModern: 'Streamear',
    options: ['Streamear', 'Televisar digitalmente', 'Emitir en línea', 'Retransmitir virtualmente'],
  },
]

// === LESSON DATA ===

export const L64Data: LessonData = {
  id: 'L6.4',
  hero: {
    lessonId: 'L6.4',
    title: 'Slang, Neologisms & Language Evolution',
    subtitle: 'How Spanish reinvents itself every generation',
    description: 'Explore how Spanish evolves in real time: internet slang (stalkear, googlear), anglicisms vs. purist alternatives (marketing vs. mercadotecnia), generational language shifts, and how new words officially enter the RAE dictionary. Master the living, breathing language that textbooks rarely teach.',
    image: '/images/L6.4/L6.4.jpg',
    gradient: 'from-lime-800/65 via-green-700/55 to-emerald-700/65',
    accentColor: 'lime-200',
  },

  objectives: [
    { icon: '📱', title: 'Internet & Digital Slang', desc: 'Use and understand verbified English words: stalkear, googlear, tuitear, ghostear, streamear.' },
    { icon: '⚔️', title: 'The Anglicism Debate', desc: 'Navigate the tension between anglicisms (email, parking) and their Spanish equivalents (correo electrónico, estacionamiento).' },
    { icon: '🔄', title: 'Generational Language Shifts', desc: 'Decode how millennials and Gen Z speak: "literal", "random", "cringe", "tipo" as filler, "o sea".' },
    { icon: '📖', title: 'RAE Neologisms', desc: 'Learn recently accepted RAE words: wasap, tuit, selfi, bitcóin, pódcast, emoji, posverdad.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.6', label: 'Idioms & Colloquial Expressions', detail: 'L5.6 covered traditional idioms. Now discover how the newest generation creates fresh expressions that may become tomorrow\'s idioms.' },
    { fromLesson: 'L5.8', label: 'Regional Variation', detail: 'L5.8 explored dialect differences. Now see how internet culture creates a pan-Hispanic slang that crosses national borders.' },
    { fromLesson: 'L4.4', label: 'News & Current Events', detail: 'L4.4 introduced media vocabulary. Now learn the informal digital language that dominates social media discourse.' },
  ],

  sectionTransitions: [
    { afterSection: 'internet-digital-slang', text: 'You can talk like a digital native! Now let\'s explore the great anglicism debate.' },
    { afterSection: 'anglicisms-debate', text: 'Marketing or mercadotecnia? Both are valid! Now see how generations speak differently.' },
    { afterSection: 'generational-shifts', text: 'You speak Gen Z now! Let\'s see which slang words the RAE has officially accepted.' },
    { afterSection: 'dialogues', text: 'Great conversations about evolving language! Let\'s explore the cultural side.' },
    { afterSection: 'cultural', text: 'Now test your knowledge of language evolution!' },
    { afterSection: 'slang-evolution', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Stalkear a alguien', english: 'To stalk someone (online)' },
    { spanish: 'Se hizo viral', english: 'It went viral' },
    { spanish: '¡Qué cringe!', english: 'How cringe!' },
    { spanish: 'Mándame un wasap', english: 'Send me a WhatsApp' },
    { spanish: 'Es que literal...', english: 'It\'s literally...' },
    { spanish: 'O sea...', english: 'I mean... / Like...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Lo stalkeé en Instagram y me dio cringe', pronunciation: 'loh stahl-keh-EH ehn eens-tah-GRAHM ee meh dee-OH KREENJ', english: 'I stalked him on Instagram and it gave me cringe', audio: 'lo-stalkee-en-instagram-y-me-dio-cringe', tip: 'Spanish adapts English verbs by adding -ear: stalkear, googlear, tuitear. They conjugate like regular -AR verbs!' },
    { spanish: 'La RAE aceptó "selfi" con i latina, no con ie', pronunciation: 'lah RRAH-eh ah-sehp-TOH SEHL-fee kohn ee lah-TEE-nah noh kohn ee-EH', english: 'The RAE accepted "selfi" with Latin i, not ie', audio: 'la-rae-acepto-selfi-con-i-latina-no-con-ie', tip: 'When the RAE adopts English words, they adapt spelling to Spanish rules: selfie→selfi, tweet→tuit, bitcoin→bitcóin.' },
    { spanish: 'Es que literal, tipo, o sea, no sé qué decir', pronunciation: 'ehs keh lee-teh-RAHL TEE-poh oh SEH-ah noh seh keh deh-SEER', english: 'Like, literally, I mean, I don\'t know what to say', audio: 'es-que-literal-tipo-o-sea-no-se-que-decir', tip: 'Young speakers chain fillers: "es que" + "literal" + "tipo" + "o sea." Understanding these is essential for real conversations.' },
    { spanish: 'El feedback del equipo fue que necesitamos más marketing', pronunciation: 'ehl FEED-bahk dehl eh-KEE-poh fweh keh neh-seh-see-TAH-mohs mahs MAHR-keh-teen', english: 'The team\'s feedback was that we need more marketing', audio: 'el-feedback-del-equipo-fue-que-necesitamos-mas-marketing', tip: 'In business Spanish, anglicisms dominate: feedback, marketing, email, show. Formal alternatives exist but sound stiff in casual contexts.' },
    { spanish: 'Escucho un pódcast sobre posverdad y resiliencia', pronunciation: 'ehs-KOO-choh oon POHD-kahst SOH-breh pohs-behr-DAHD ee rreh-see-lee-EHN-see-ah', english: 'I listen to a podcast about post-truth and resilience', audio: 'escucho-un-podcast-sobre-posverdad-y-resiliencia', tip: 'Pódcast keeps the accent on the first syllable per Spanish stress rules. The RAE always adapts pronunciation to Spanish phonology.' },
    { spanish: 'Los boomers no entienden y los zoomers no explican', pronunciation: 'lohs BOO-mehrs noh ehn-tee-EHN-dehn ee lohs SOO-mehrs noh ehks-PLEE-kahn', english: 'Boomers don\'t understand and zoomers don\'t explain', audio: 'los-boomers-no-entienden-y-los-zoomers-no-explican', tip: 'Generational labels (boomers, millennials, zoomers) are used in Spanish exactly as in English. The generational divide in language is universal!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'internet-digital-slang', label: 'Internet Slang' },
    { id: 'anglicisms-debate', label: 'Anglicisms Debate' },
    { id: 'generational-shifts', label: 'Generational Shifts' },
    { id: 'rae-neologisms', label: 'RAE Neologisms' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'slang-evolution', label: 'Slang Evolution' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'internet-digital-slang',
      title: 'Internet & Digital Slang — Jerga Digital',
      description: 'English verbs adapted into Spanish with -ear endings. They conjugate like regular -AR verbs: stalkear → stalkeé, stalkeó, stalkeamos.',
      tabs: [
        { label: 'Verbified English', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'internet-digital-slang').slice(0, 6) },
        { label: 'Social Media Culture', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'internet-digital-slang').slice(6) },
      ],
    },
    {
      id: 'anglicisms-debate',
      title: 'Anglicisms & The Purity Debate — Anglicismos',
      description: 'Many English words have Spanish equivalents. Some speakers prefer the anglicism; others insist on the "pure" Spanish form. Both are valid!',
      tabs: [
        { label: 'Anglicism vs. Spanish', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'anglicisms-debate').slice(0, 6) },
        { label: 'The Debate', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'anglicisms-debate').slice(6) },
      ],
    },
    {
      id: 'generational-shifts',
      title: 'Generational Language Shifts — Cambios Generacionales',
      description: 'How millennials and Gen Z have transformed everyday Spanish with fillers, borrowed words, and new meanings for old words.',
      tabs: [
        { label: 'Gen Z Speak', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'generational-shifts').slice(0, 6) },
        { label: 'The Generation Gap', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'generational-shifts').slice(6) },
      ],
    },
    {
      id: 'rae-neologisms',
      title: 'RAE-Accepted Neologisms — Neologismos de la RAE',
      description: 'Words the Real Academia Española has officially added to the dictionary, adapted to Spanish spelling and phonology.',
      tabs: [
        { label: 'Tech & Digital', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'rae-neologisms').slice(0, 6) },
        { label: 'Society & Culture', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'rae-neologisms').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'How Spanish "Eats" English Verbs',
      content: 'Spanish takes English verbs and adds -ear to create new infinitives that follow regular -AR conjugation patterns. "To google" becomes "googlear" (yo googleo, tú googleas, él googleó). "To stream" becomes "streamear." This is the most productive word-formation process in modern digital Spanish.',
      example: 'stalk → stalkear | google → googlear | tweet → tuitear | ghost → ghostear | stream → streamear',
    },
    {
      title: 'RAE Spelling Adaptations',
      content: 'When the RAE accepts an English word, they adapt it to Spanish orthographic rules: double letters simplified (tweet→tuit), final -ie becomes -i (selfie→selfi), accent marks added per Spanish stress rules (podcast→pódcast, bitcoin→bitcóin). This makes the words feel more "Spanish" while keeping recognition.',
      example: 'selfie → selfi | tweet → tuit | bitcoin → bitcóin | podcast → pódcast | whisky → güisqui',
    },
    {
      title: 'Fillers: The Secret Code of Youth',
      content: '"Tipo", "literal", "o sea", "de hecho", and "es que" are the most common fillers in young Spanish speakers\' everyday language. "Tipo" works like English "like," "o sea" like "I mean," and "literal" like "literally." Stringing them together (es que literal, tipo, o sea...) is a hallmark of informal youth speech.',
      example: '"Es que, tipo, literal no sé, o sea, de hecho sí sé pero no sé cómo explicarlo"',
    },
    {
      title: 'Register Awareness: When NOT to Use Slang',
      content: 'While it\'s essential to understand slang, knowing when NOT to use it is equally important. In formal writing, job interviews, academic papers, and official communication, use the formal equivalent: correo electrónico (not email), retroalimentación (not feedback), estacionamiento (not parking). In casual speech with friends? Anything goes.',
      example: 'Formal: "Envíe su solicitud por correo electrónico" | Casual: "Mándame un email, porfa"',
    },
  ],

  flashcardGroups: [
    {
      key: 'internet-slang',
      label: 'Internet Slang',
      audioKeys: ['stalkeo-en-todas-mis-redes', 'voy-a-googlear-eso', 'tuiteo-una-foto-increible', 'fans-shippean-dos-personajes', 'me-ghosteo-despues-de-tres-citas', 'no-lo-troleen', 'streamear-el-partido-en-vivo', 'influencer-millones-seguidores', 'meme-se-volvio-viral', 'cancelaron-en-redes'],
    },
    {
      key: 'anglicisms',
      label: 'Anglicisms vs. Spanish',
      audioKeys: ['departamento-marketing-campana', 'mexico-mercadotecnia', 'necesito-feedback-proyecto', 'retroalimentacion-positiva', 'mando-email-detalles', 'revisa-correo-electronico', 'coche-en-el-parking', 'busca-estacionamiento', 'show-anoche-espectacular', 'espectaculo-empieza-ocho'],
    },
    {
      key: 'gen-z-rae',
      label: 'Gen Z & RAE Words',
      audioKeys: ['literal-no-entiendo', 'algo-muy-random', 'que-cringe-fiesta', 'yo-tipo-que-pasa', 'o-sea-no-tiene-sentido', 'mandame-un-wasap', 'publico-tuit-polemico', 'tomo-selfi-monumento', 'escucho-podcast-mananas', 'archivos-en-la-nube'],
    },
  ],

  matchPairs: [
    { left: 'Stalkear', right: 'To stalk online' },
    { left: 'Ghostear', right: 'To ghost someone' },
    { left: 'Wasap', right: 'WhatsApp message' },
    { left: 'Selfi', right: 'Selfie' },
    { left: 'Marketing', right: 'Mercadotecnia' },
    { left: 'Email', right: 'Correo electrónico' },
    { left: 'Parking', right: 'Estacionamiento' },
    { left: 'Show', right: 'Espectáculo' },
  ],
  matchLabels: { left: 'Slang / Anglicism', right: 'Equivalent' },

  sortActivities: [
    {
      title: 'Anglicism vs. Spanish Equivalent',
      instruction: 'Is this the anglicism or the traditional Spanish word?',
      buckets: ['Anglicism 🇬🇧', 'Spanish Equivalent 🇪🇸'],
      items: [
        { text: 'Marketing', bucket: 'Anglicism 🇬🇧' },
        { text: 'Email', bucket: 'Anglicism 🇬🇧' },
        { text: 'Parking', bucket: 'Anglicism 🇬🇧' },
        { text: 'Feedback', bucket: 'Anglicism 🇬🇧' },
        { text: 'Mercadotecnia', bucket: 'Spanish Equivalent 🇪🇸' },
        { text: 'Correo electrónico', bucket: 'Spanish Equivalent 🇪🇸' },
        { text: 'Estacionamiento', bucket: 'Spanish Equivalent 🇪🇸' },
        { text: 'Retroalimentación', bucket: 'Spanish Equivalent 🇪🇸' },
      ],
    },
    {
      title: 'RAE-Accepted vs. Not Yet Official',
      instruction: 'Has the RAE officially accepted this word into the dictionary?',
      buckets: ['RAE-Accepted ✅', 'Not Official (Yet) ❌'],
      items: [
        { text: 'Selfi', bucket: 'RAE-Accepted ✅' },
        { text: 'Tuit', bucket: 'RAE-Accepted ✅' },
        { text: 'Wasap', bucket: 'RAE-Accepted ✅' },
        { text: 'Pódcast', bucket: 'RAE-Accepted ✅' },
        { text: 'Stalkear', bucket: 'Not Official (Yet) ❌' },
        { text: 'Ghostear', bucket: 'Not Official (Yet) ❌' },
        { text: 'Shippear', bucket: 'Not Official (Yet) ❌' },
        { text: 'Cringe', bucket: 'Not Official (Yet) ❌' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Verb Sorting',

  dialogues: [
    {
      id: 'dialogue-teens-cdmx',
      title: 'Chatting Online After School — Ciudad de México',
      location: 'Mexico City',
      lines: [
        { speaker: 'Valentina', text: 'Wey, ¿ya viste lo que tuiteó el profe de historia?', audio: '/audio/L6.4/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: 'No mames, sí. Literal se hizo viral en dos horas. Ya tiene como diez mil likes.', audio: '/audio/L6.4/phrases/d1-line2.mp3' },
        { speaker: 'Valentina', text: 'Jaja, es que fue súper random. Tipo, ¿un profe tuiteando memes de historia?', audio: '/audio/L6.4/phrases/d1-line3.mp3' },
        { speaker: 'Diego', text: 'A mí me da cringe cuando los profes intentan hablar como nosotros. Tipo "hola, chavos, ¿qué onda?"', audio: '/audio/L6.4/phrases/d1-line4.mp3' },
        { speaker: 'Valentina', text: 'No, pero este profe sí es chistoso de verdad. No cap.', audio: '/audio/L6.4/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: 'Oye, ¿stalkeaste el perfil del chavo nuevo? El que llegó esta semana.', audio: '/audio/L6.4/phrases/d1-line6.mp3' },
        { speaker: 'Valentina', text: 'Obvio. Tiene puro contenido de gaming. Streamea en Twitch y todo.', audio: '/audio/L6.4/phrases/d1-line7.mp3' },
        { speaker: 'Diego', text: '¿Neta? Qué cool. ¿Lo seguiste?', audio: '/audio/L6.4/phrases/d1-line8.mp3' },
        { speaker: 'Valentina', text: 'Sí, pero no quiero que piense que lo estoy stalkeando, o sea, solo es curiosidad.', audio: '/audio/L6.4/phrases/d1-line9.mp3' },
        { speaker: 'Diego', text: 'Jaja, clásico. Oye, mándame un wasap con el link del meme del profe.', audio: '/audio/L6.4/phrases/d1-line10.mp3' },
        { speaker: 'Valentina', text: 'Sale, te lo mando. Y no lo compartas en el grupo de la clase, ¿eh? No lo vayan a cancelar.', audio: '/audio/L6.4/phrases/d1-line11.mp3' },
        { speaker: 'Diego', text: 'Tranquila, no soy troll. Aunque, de hecho, sería muy chistoso...', audio: '/audio/L6.4/phrases/d1-line12.mp3' },
        { speaker: 'Valentina', text: '¡Diego! No seas tóxico. El profe es buena onda.', audio: '/audio/L6.4/phrases/d1-line13.mp3' },
        { speaker: 'Diego', text: 'Ya, ya, era broma. Tipo, relájate. Voy a googlear si tiene más contenido nada más.', audio: '/audio/L6.4/phrases/d1-line14.mp3' },
        { speaker: 'Valentina', text: 'Ok, pero literal no hagas nada raro. Nos vemos mañana.', audio: '/audio/L6.4/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-linguist-madrid',
      title: 'RAE Linguist Interview — Madrid',
      location: 'Madrid',
      lines: [
        { speaker: 'Periodista', text: 'Doctora Campos, la RAE acaba de aceptar varias palabras nuevas este año. ¿Cómo decide la Academia qué palabras incluir?', audio: '/audio/L6.4/phrases/d2-line1.mp3' },
        { speaker: 'Dra. Campos', text: 'Bueno, el criterio principal es el uso. Si una palabra se usa de manera extendida y estable en la comunidad hispanohablante, la RAE la registra. No inventamos la lengua; la documentamos.', audio: '/audio/L6.4/phrases/d2-line2.mp3' },
        { speaker: 'Periodista', text: 'Pero hay mucha polémica. Muchos critican la inclusión de palabras como "selfi" o "wasap". Dicen que se está destruyendo el español.', audio: '/audio/L6.4/phrases/d2-line3.mp3' },
        { speaker: 'Dra. Campos', text: 'Es un debate antiguo. Cuando se aceptó "fútbol" del inglés "football", hubo las mismas críticas. Y hoy nadie diría que "fútbol" no es una palabra española.', audio: '/audio/L6.4/phrases/d2-line4.mp3', annotations: [{ phrase: 'fútbol', fromLesson: 'L5.8', note: 'Example of an anglicism fully integrated into Spanish, discussed in L5.8 regional variation' }] },
        { speaker: 'Periodista', text: '¿Y qué opina de los jóvenes que mezclan inglés y español constantemente? "Literal", "cringe", "random"...', audio: '/audio/L6.4/phrases/d2-line5.mp3' },
        { speaker: 'Dra. Campos', text: 'Las generaciones jóvenes siempre han innovado el lenguaje. Los abuelos de hoy usaban jerga que escandalizaba a sus padres. Es un ciclo natural.', audio: '/audio/L6.4/phrases/d2-line6.mp3' },
        { speaker: 'Periodista', text: 'Algunos lingüistas dicen que el "Spanglish" es una amenaza. ¿Está de acuerdo?', audio: '/audio/L6.4/phrases/d2-line7.mp3' },
        { speaker: 'Dra. Campos', text: 'Para nada. El Spanglish es un fenómeno sociolingüístico fascinante, especialmente en Estados Unidos. No es una corrupción del español; es una creatividad bilingüe.', audio: '/audio/L6.4/phrases/d2-line8.mp3' },
        { speaker: 'Periodista', text: '¿Cuál ha sido la palabra más polémica que la RAE ha aceptado recientemente?', audio: '/audio/L6.4/phrases/d2-line9.mp3' },
        { speaker: 'Dra. Campos', text: 'Probablemente "posverdad". No por el origen de la palabra, sino por lo que implica sobre nuestra sociedad. Una palabra puede ser un espejo.', audio: '/audio/L6.4/phrases/d2-line10.mp3', annotations: [{ phrase: 'posverdad', fromLesson: 'L4.4', note: 'Media literacy concept introduced in L4.4 News & Current Events' }] },
        { speaker: 'Periodista', text: '¿Algún consejo para los estudiantes de español que quieren sonar naturales?', audio: '/audio/L6.4/phrases/d2-line11.mp3' },
        { speaker: 'Dra. Campos', text: 'Que lean de todo: noticias, redes sociales, literatura. Que escuchen pódcasts y canciones. La lengua viva está en la calle, no solo en los libros de gramática.', audio: '/audio/L6.4/phrases/d2-line12.mp3' },
        { speaker: 'Periodista', text: '¿Cree que en veinte años el español tendrá aún más anglicismos?', audio: '/audio/L6.4/phrases/d2-line13.mp3' },
        { speaker: 'Dra. Campos', text: 'Sin duda. Pero también creo que el español influenciará más al inglés. Ya lo hace: "fiesta", "siesta", "aficionado". El intercambio es bidireccional.', audio: '/audio/L6.4/phrases/d2-line14.mp3' },
        { speaker: 'Periodista', text: 'Doctora Campos, muchas gracias por esta conversación tan enriquecedora.', audio: '/audio/L6.4/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Two teens chat online about viral memes and stalking profiles in CDMX, and a RAE linguist discusses language evolution with a journalist in Madrid.',

  culturalNotes: [
    {
      title: 'The RAE: Guardian or Gatekeeper?',
      content: 'The Real Academia Española (RAE), founded in 1713, is the institution that maintains the official Spanish dictionary. Its motto is "Limpia, fija y da esplendor" (It cleans, fixes, and gives splendor). But its role is hotly debated. Critics say it\'s too slow to accept new words and too Eurocentric, favoring Peninsular Spanish over Latin American varieties. Supporters argue it provides necessary standardization for a language spoken by 600 million people. In 2014, the RAE began accepting more digital terms (tuit, selfi, wasap), signaling a shift toward descriptivism — documenting how language IS used rather than prescribing how it SHOULD be used.',
    },
    {
      title: 'Spanglish: A Language of Its Own',
      content: 'In the United States, over 60 million Spanish speakers have created Spanglish — a fluid mix of English and Spanish that\'s more than just code-switching. "Voy a parquear la troca" (I\'m going to park the truck) uses Spanish grammar with adapted English nouns. Some linguists, like Ilan Stavans, argue Spanglish deserves recognition as a legitimate dialect. It appears in literature (Junot Díaz), music (Bad Bunny), and daily life from Los Angeles to Miami. For Spanish learners, understanding Spanglish is crucial because it\'s the reality of how millions of native speakers actually communicate.',
    },
    {
      title: 'Language Evolution Across Generations',
      content: 'Every generation of Spanish speakers has faced accusations of "ruining the language." In the 1960s, it was "onda" (vibe) and "rollo" (scene). In the 2000s, it was "mola" (cool, Spain) and "chido" (cool, Mexico). Today it\'s "cringe," "random," and "literal." This generational cycle is a sign of linguistic health, not decay. Studies show that young people\'s slang often fills genuine lexical gaps — "ghostear" describes something that "dejar de hablar con alguien" takes six words to say. The most successful neologisms survive precisely because they\'re efficient and expressive. Today\'s slang is tomorrow\'s standard vocabulary.',
    },
  ],
  culturalGradient: 'from-lime-50 to-green-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Stalkear" comes from the English verb "to stalk" and follows which conjugation pattern?', options: ['Regular -IR verb', 'Regular -AR verb (via -ear)', 'Irregular verb', 'Reflexive verb only'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Mándame un ___ cuando llegues" (WhatsApp message, RAE spelling)', answer: 'wasap' },
    { id: 3, type: 'mc', text: 'What is the formal Spanish equivalent of "email"?', options: ['Emilio', 'Correo electrónico', 'Carta digital', 'Mensaje web'], answer: 1 },
    { id: 4, type: 'tf', text: 'The RAE has officially accepted "selfi" (with -i, not -ie) into the dictionary.', answer: true },
    { id: 5, type: 'mc', text: '"Es que literal" is most commonly used by:', options: ['Older generations in formal speech', 'Young speakers as an intensifier/filler', 'RAE linguists in official documents', 'Only in written Spanish'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "En México dicen ___, no marketing" (marketing in pure Spanish)', answer: 'mercadotecnia' },
    { id: 7, type: 'mc', text: 'Which word has the RAE adapted from "podcast"?', options: ['Podcasto', 'Pódcast', 'Podcastear', 'Poscadena'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, why does Valentina tell Diego not to share the meme?', options: ['It\'s too embarrassing', 'So the teacher doesn\'t get canceled', 'Because it\'s copyrighted', 'The teacher already deleted it'], answer: 1 },
    { id: 9, type: 'tf', text: '"Ghostear" means to stop responding to someone\'s messages without explanation.', answer: true },
    { id: 10, type: 'mc', text: 'The RAE\'s motto "Limpia, fija y da esplendor" means:', options: ['Cleans, fixes, and gives splendor', 'Creates, defines, and distributes', 'Guards, protects, and preserves', 'Writes, publishes, and teaches'], answer: 0 },
    { id: 11, type: 'fill', text: 'Complete: "Se tomó una ___ frente al monumento" (selfie, RAE spelling)', answer: 'selfi' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what does Dra. Campos say about Spanglish?', options: ['It\'s a corruption of Spanish', 'It should be banned', 'It\'s a fascinating sociolinguistic phenomenon', 'It\'s only spoken in Texas'], answer: 2 },
    { id: 13, type: 'mc', text: 'Which of these is NOT an RAE-accepted neologism?', options: ['Tuit', 'Wasap', 'Ghostear', 'Bitcóin'], answer: 2 },
    { id: 14, type: 'tf', text: 'The word "fútbol" was once controversial as an anglicism, just like "selfi" is today.', answer: true },
    { id: 15, type: 'mc', text: '"Tipo" used as a filler word by Gen Z is equivalent to:', options: ['Dude', 'Like (English filler)', 'Actually', 'However'], answer: 1 },
  ],

  audioBase: '/audio/L6.4/phrases',

  uniqueActivity: {
    id: 'SlangEvolutionL64',
    sectionId: 'slang-evolution',
    sectionColor: 'bg-lime-50/40',
    sectionBorder: 'border-lime-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-lime-50/30', border: 'border-lime-100' },
    'internet-digital-slang': { bg: 'bg-lime-50/30', border: 'border-lime-100' },
    'anglicisms-debate': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'generational-shifts': { bg: 'bg-cyan-50/30', border: 'border-cyan-100' },
    'rae-neologisms': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-green-50/30', border: 'border-green-100' },
    cultural: { bg: 'bg-lime-50/30', border: 'border-lime-100' },
    'slang-evolution': { bg: 'bg-lime-50/40', border: 'border-lime-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
