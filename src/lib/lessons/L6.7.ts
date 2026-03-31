import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Latin Origins (12) ===
  { spanish: 'La palabra "agua" viene del latín "aqua"', english: 'The word "agua" comes from Latin "aqua"', pronunciation: 'lah pah-LAH-brah AH-gwah bee-EH-neh dehl lah-TEEN AH-kwah', category: 'latin-origins', audio: 'la-palabra-agua-viene' },
  { spanish: 'El latín vulgar evolucionó de manera distinta en cada región', english: 'Vulgar Latin evolved differently in each region', pronunciation: 'ehl lah-TEEN bool-GAHR eh-boh-loo-see-oh-NOH deh mah-NEH-rah dees-TEEN-tah ehn KAH-dah rreh-hee-OHN', category: 'latin-origins', audio: 'el-latin-vulgar-evoluciono' },
  { spanish: '"Hijo" proviene del latín "filius"; la f se convirtió en h', english: '"Hijo" comes from Latin "filius"; the f became h', pronunciation: 'EE-hoh proh-bee-EH-neh dehl lah-TEEN FEE-lee-oos lah EH-feh seh kohn-beer-tee-OH ehn AH-cheh', category: 'latin-origins', audio: 'hijo-proviene-del-latin' },
  { spanish: 'Las lenguas romances son hijas del latín', english: 'Romance languages are daughters of Latin', pronunciation: 'lahs LEHN-gwahs rroh-MAHN-sehs sohn EE-hahs dehl lah-TEEN', category: 'latin-origins', audio: 'las-lenguas-romances' },
  { spanish: '"Noche" deriva de "noctem" con la típica palatalización castellana', english: '"Noche" derives from "noctem" with typical Castilian palatalization', pronunciation: 'NOH-cheh deh-REE-bah deh NOHK-tehm kohn lah TEE-pee-kah pah-lah-tah-lee-sah-see-OHN kahs-teh-YAH-nah', category: 'latin-origins', audio: 'noche-deriva-de-noctem' },
  { spanish: 'El castellano conserva la distinción entre ser y estar del latín', english: 'Castilian preserves the distinction between ser and estar from Latin', pronunciation: 'ehl kahs-teh-YAH-noh kohn-SEHR-bah lah dees-teen-see-OHN EHN-treh sehr ee ehs-TAHR dehl lah-TEEN', category: 'latin-origins', audio: 'el-castellano-conserva' },
  { spanish: '"Plaza" viene de "platea" y "lluvia" de "pluvia"', english: '"Plaza" comes from "platea" and "lluvia" from "pluvia"', pronunciation: 'PLAH-sah bee-EH-neh deh plah-TEH-ah ee YOO-bee-ah deh PLOO-bee-ah', category: 'latin-origins', audio: 'plaza-viene-de-platea' },
  { spanish: 'Los verbos en -ar, -er, -ir reflejan las conjugaciones latinas', english: 'Verbs in -ar, -er, -ir reflect Latin conjugation classes', pronunciation: 'lohs BEHR-bohs ehn AHR EHR EER rreh-FLEH-hahn lahs kohn-hoo-gah-see-OH-nehs lah-TEE-nahs', category: 'latin-origins', audio: 'los-verbos-en-ar-er-ir' },
  { spanish: '"Pueblo" desciende de "populus" mediante evolución fonética regular', english: '"Pueblo" descends from "populus" through regular phonetic evolution', pronunciation: 'PWEH-bloh dehs-see-EHN-deh deh POH-poo-loos meh-dee-AHN-teh eh-boh-loo-see-OHN foh-NEH-tee-kah rreh-goo-LAHR', category: 'latin-origins', audio: 'pueblo-desciende-de-populus' },
  { spanish: 'El género gramatical español hereda el sistema de tres géneros del latín', english: 'Spanish grammatical gender inherits Latin\'s three-gender system', pronunciation: 'ehl HEH-neh-roh grah-mah-tee-KAHL ehs-pah-NYOHL eh-REH-dah ehl sees-TEH-mah deh trehs HEH-neh-rohs dehl lah-TEEN', category: 'latin-origins', audio: 'el-genero-gramatical' },
  { spanish: '"Ojo" viene de "oculus" y "oreja" de "auricula"', english: '"Ojo" comes from "oculus" and "oreja" from "auricula"', pronunciation: 'OH-hoh bee-EH-neh deh OH-koo-loos ee oh-REH-hah deh ow-REE-koo-lah', category: 'latin-origins', audio: 'ojo-viene-de-oculus' },
  { spanish: 'El subjuntivo español preserva modos verbales del latín clásico', english: 'The Spanish subjunctive preserves verb moods from Classical Latin', pronunciation: 'ehl soob-hoon-TEE-boh ehs-pah-NYOHL preh-SEHR-bah MOH-dohs behr-BAH-lehs dehl lah-TEEN KLAH-see-koh', category: 'latin-origins', audio: 'el-subjuntivo-espanol' },

  // === Arabic Influence (12) ===
  { spanish: '"Almohada" viene del árabe "al-mujadda" (el cojín)', english: '"Almohada" comes from Arabic "al-mujadda" (the cushion)', pronunciation: 'ahl-moh-AH-dah bee-EH-neh dehl AH-rah-beh ahl-moo-HAH-dah', category: 'arabic-influence', audio: 'almohada-viene-del-arabe' },
  { spanish: '"Alfombra" proviene de "al-hanbariyya" (la tapicería)', english: '"Alfombra" comes from "al-hanbariyya" (the tapestry)', pronunciation: 'ahl-FOHM-brah proh-bee-EH-neh deh ahl-hahn-bah-REE-yah', category: 'arabic-influence', audio: 'alfombra-proviene-de' },
  { spanish: '"Ojalá" proviene del árabe "inshallah" (si Dios quiere)', english: '"Ojalá" comes from Arabic "inshallah" (God willing)', pronunciation: 'oh-hah-LAH proh-bee-EH-neh dehl AH-rah-beh een-shah-LLAH', category: 'arabic-influence', audio: 'ojala-proviene-del-arabe' },
  { spanish: '"Alcalde" viene de "al-qadi" (el juez)', english: '"Alcalde" comes from "al-qadi" (the judge)', pronunciation: 'ahl-KAHL-deh bee-EH-neh deh ahl-KAH-dee', category: 'arabic-influence', audio: 'alcalde-viene-de-al-qadi' },
  { spanish: '"Álgebra" proviene del árabe "al-jabr" (la restauración)', english: '"Álgebra" comes from Arabic "al-jabr" (the restoration)', pronunciation: 'AHL-heh-brah proh-bee-EH-neh dehl AH-rah-beh ahl-HABR', category: 'arabic-influence', audio: 'algebra-proviene-del-arabe' },
  { spanish: '"Azúcar" viene de "as-sukkar" a través del árabe', english: '"Azúcar" comes from "as-sukkar" through Arabic', pronunciation: 'ah-SOO-kahr bee-EH-neh deh ahs-SOO-kahr ah trah-BEHS dehl AH-rah-beh', category: 'arabic-influence', audio: 'azucar-viene-de-as-sukkar' },
  { spanish: 'El prefijo "al-" es el artículo definido en árabe', english: 'The prefix "al-" is the definite article in Arabic', pronunciation: 'ehl preh-FEE-hoh AHL ehs ehl ahr-TEE-koo-loh deh-fee-NEE-doh ehn AH-rah-beh', category: 'arabic-influence', audio: 'el-prefijo-al-es' },
  { spanish: 'Más de 4.000 palabras españolas tienen origen árabe', english: 'More than 4,000 Spanish words have Arabic origin', pronunciation: 'mahs deh KWAH-troh meel pah-LAH-brahs ehs-pah-NYOH-lahs tee-EH-nehn oh-REE-hehn AH-rah-beh', category: 'arabic-influence', audio: 'mas-de-4000-palabras' },
  { spanish: '"Aceite" proviene de "az-zayt" y "aceituna" de "az-zaytuna"', english: '"Aceite" comes from "az-zayt" and "aceituna" from "az-zaytuna"', pronunciation: 'ah-SAY-teh proh-bee-EH-neh deh ahs-SAYT ee ah-say-TOO-nah deh ahs-say-TOO-nah', category: 'arabic-influence', audio: 'aceite-proviene-de-az-zayt' },
  { spanish: '"Guadalquivir" significa "el río grande" en árabe', english: '"Guadalquivir" means "the great river" in Arabic', pronunciation: 'gwah-dahl-kee-BEER seeg-nee-FEE-kah ehl RREE-oh GRAHN-deh ehn AH-rah-beh', category: 'arabic-influence', audio: 'guadalquivir-significa' },
  { spanish: '"Alhambra" quiere decir "la roja" en árabe', english: '"Alhambra" means "the red one" in Arabic', pronunciation: 'ahl-AHM-brah kee-EH-reh deh-SEER lah RROH-hah ehn AH-rah-beh', category: 'arabic-influence', audio: 'alhambra-quiere-decir' },
  { spanish: 'La influencia árabe se extiende a la arquitectura, la música y la gastronomía', english: 'Arabic influence extends to architecture, music, and gastronomy', pronunciation: 'lah een-floo-EHN-see-ah AH-rah-beh seh ehks-tee-EHN-deh ah lah ahr-kee-tehk-TOO-rah lah MOO-see-kah ee lah gahs-troh-noh-MEE-ah', category: 'arabic-influence', audio: 'la-influencia-arabe-se-extiende' },

  // === Medieval Spanish (12) ===
  { spanish: 'En español medieval se decía "fablar" en vez de "hablar"', english: 'In Medieval Spanish they said "fablar" instead of "hablar"', pronunciation: 'ehn ehs-pah-NYOHL meh-dee-eh-BAHL seh deh-SEE-ah fah-BLAHR ehn behs deh ah-BLAHR', category: 'medieval-spanish', audio: 'en-espanol-medieval-fablar' },
  { spanish: '"Fazer" se transformó en "hacer" con la aspiración de la f', english: '"Fazer" became "hacer" with the aspiration of the f', pronunciation: 'fah-SEHR seh trahns-fohr-MOH ehn ah-SEHR kohn lah ahs-pee-rah-see-OHN deh lah EH-feh', category: 'medieval-spanish', audio: 'fazer-se-transformo' },
  { spanish: 'El Cantar de Mio Cid es la primera obra importante en castellano', english: 'El Cantar de Mio Cid is the first major work in Castilian', pronunciation: 'ehl kahn-TAHR deh MEE-oh SEED ehs lah pree-MEH-rah OH-brah eem-pohr-TAHN-teh ehn kahs-teh-YAH-noh', category: 'medieval-spanish', audio: 'el-cantar-de-mio-cid' },
  { spanish: 'Cervantes escribió "El Quijote" en el español del Siglo de Oro', english: 'Cervantes wrote "Don Quixote" in Golden Age Spanish', pronunciation: 'sehr-BAHN-tehs ehs-kree-bee-OH ehl kee-HOH-teh ehn ehl ehs-pah-NYOHL dehl SEE-gloh deh OH-roh', category: 'medieval-spanish', audio: 'cervantes-escribio-el-quijote' },
  { spanish: 'La "ç" cedilla existía en español antiguo y luego desapareció', english: 'The cedilla "ç" existed in Old Spanish and later disappeared', pronunciation: 'lah seh-DEE-yah ehk-sees-TEE-ah ehn ehs-pah-NYOHL ahn-TEE-gwoh ee LWEH-goh deh-sah-pah-reh-see-OH', category: 'medieval-spanish', audio: 'la-cedilla-existia' },
  { spanish: 'La pronunciación de la "j" cambió de un sonido palatal a velar', english: 'The pronunciation of "j" changed from a palatal to a velar sound', pronunciation: 'lah proh-noon-see-ah-see-OHN deh lah HOH-tah kahm-bee-OH deh oon soh-NEE-doh pah-lah-TAHL ah beh-LAHR', category: 'medieval-spanish', audio: 'la-pronunciacion-de-la-j' },
  { spanish: 'Alfonso X el Sabio estandarizó el castellano como lengua de cultura', english: 'Alfonso X the Wise standardized Castilian as the language of culture', pronunciation: 'ahl-FOHN-soh DEH-see-moh ehl SAH-bee-oh ehs-tahn-dah-ree-SOH ehl kahs-teh-YAH-noh KOH-moh LEHN-gwah deh kool-TOO-rah', category: 'medieval-spanish', audio: 'alfonso-x-el-sabio' },
  { spanish: '"Agora" se convirtió en "ahora" en español moderno', english: '"Agora" became "ahora" in modern Spanish', pronunciation: 'ah-GOH-rah seh kohn-beer-tee-OH ehn ah-OH-rah ehn ehs-pah-NYOHL moh-DEHR-noh', category: 'medieval-spanish', audio: 'agora-se-convirtio' },
  { spanish: '"Vos" era el pronombre de respeto en español medieval', english: '"Vos" was the respectful pronoun in Medieval Spanish', pronunciation: 'bohs EH-rah ehl proh-NOHM-breh deh rrehs-PEH-toh ehn ehs-pah-NYOHL meh-dee-eh-BAHL', category: 'medieval-spanish', audio: 'vos-era-el-pronombre' },
  { spanish: 'La "x" en español antiguo representaba el sonido "sh"', english: 'The "x" in Old Spanish represented the "sh" sound', pronunciation: 'lah EH-kees ehn ehs-pah-NYOHL ahn-TEE-gwoh rreh-preh-sehn-TAH-bah ehl soh-NEE-doh shh', category: 'medieval-spanish', audio: 'la-x-en-espanol-antiguo' },
  { spanish: '"México" conserva la ortografía antigua con "x" que se pronuncia como "j"', english: '"México" preserves the old spelling with "x" pronounced as "j"', pronunciation: 'MEH-hee-koh kohn-SEHR-bah lah ohr-toh-grah-FEE-ah ahn-TEE-gwah kohn EH-kees keh seh proh-NOON-see-ah KOH-moh HOH-tah', category: 'medieval-spanish', audio: 'mexico-conserva-la-ortografia' },
  { spanish: 'El español medieval tenía sonidos sibilantes que luego se simplificaron', english: 'Medieval Spanish had sibilant sounds that were later simplified', pronunciation: 'ehl ehs-pah-NYOHL meh-dee-eh-BAHL teh-NEE-ah soh-NEE-dohs see-bee-LAHN-tehs keh LWEH-goh seh seem-plee-fee-KAH-rohn', category: 'medieval-spanish', audio: 'el-espanol-medieval-tenia' },

  // === Modern Evolution (12) ===
  { spanish: 'La Real Academia Española se fundó en 1713 para fijar la lengua', english: 'The Royal Spanish Academy was founded in 1713 to fix the language', pronunciation: 'lah rreh-AHL ah-kah-DEH-mee-ah ehs-pah-NYOH-lah seh foon-DOH ehn meel seh-teh-see-EHN-tohs TREH-seh PAH-rah fee-HAHR lah LEHN-gwah', category: 'modern-evolution', audio: 'la-real-academia-espanola' },
  { spanish: 'El lema de la RAE es "Limpia, fija y da esplendor"', english: 'The motto of the RAE is "Cleanses, fixes, and gives splendor"', pronunciation: 'ehl LEH-mah deh lah RRAH-eh ehs LEEM-pee-ah FEE-hah ee dah ehs-plehn-DOHR', category: 'modern-evolution', audio: 'el-lema-de-la-rae' },
  { spanish: 'Las reformas ortográficas simplificaron la escritura del español', english: 'Spelling reforms simplified the writing of Spanish', pronunciation: 'lahs rreh-FOHR-mahs ohr-toh-GRAH-fee-kahs seem-plee-fee-KAH-rohn lah ehs-kree-TOO-rah dehl ehs-pah-NYOHL', category: 'modern-evolution', audio: 'las-reformas-ortograficas' },
  { spanish: 'América Latina desarrolló sus propias variantes a partir de la Colonia', english: 'Latin America developed its own variants from the Colonial period', pronunciation: 'ah-MEH-ree-kah lah-TEE-nah deh-sah-rroh-YOH soos PROH-pee-ahs bah-ree-AHN-tehs ah pahr-TEER deh lah koh-LOH-nee-ah', category: 'modern-evolution', audio: 'america-latina-desarrollo' },
  { spanish: 'El voseo tiene raíces en el castellano del siglo XVI', english: 'Voseo has roots in 16th-century Castilian', pronunciation: 'ehl boh-SEH-oh tee-EH-neh rrah-EE-sehs ehn ehl kahs-teh-YAH-noh dehl SEE-gloh dee-eh-see-SAYS', category: 'modern-evolution', audio: 'el-voseo-tiene-raices' },
  { spanish: 'Las lenguas indígenas aportaron miles de palabras al español americano', english: 'Indigenous languages contributed thousands of words to American Spanish', pronunciation: 'lahs LEHN-gwahs een-DEE-heh-nahs ah-pohr-TAH-rohn MEE-lehs deh pah-LAH-brahs ahl ehs-pah-NYOHL ah-meh-ree-KAH-noh', category: 'modern-evolution', audio: 'las-lenguas-indigenas' },
  { spanish: '"Chocolate", "tomate" y "aguacate" vienen del náhuatl', english: '"Chocolate," "tomate," and "aguacate" come from Nahuatl', pronunciation: 'choh-koh-LAH-teh toh-MAH-teh ee ah-gwah-KAH-teh bee-EH-nehn dehl NAH-wahtl', category: 'modern-evolution', audio: 'chocolate-tomate-aguacate' },
  { spanish: 'El español es la segunda lengua materna más hablada del mundo', english: 'Spanish is the second most spoken native language in the world', pronunciation: 'ehl ehs-pah-NYOHL ehs lah seh-GOON-dah LEHN-gwah mah-TEHR-nah mahs ah-BLAH-dah dehl MOON-doh', category: 'modern-evolution', audio: 'el-espanol-es-la-segunda' },
  { spanish: 'El "spanglish" refleja el contacto entre inglés y español en EE.UU.', english: '"Spanglish" reflects the contact between English and Spanish in the U.S.', pronunciation: 'ehl SPAHN-gleesh rreh-FLEH-hah ehl kohn-TAHK-toh EHN-treh een-GLEHS ee ehs-pah-NYOHL ehn eh-EH oo-OO', category: 'modern-evolution', audio: 'el-spanglish-refleja' },
  { spanish: 'La RAE ahora acepta neologismos como "tuitear" y "wasapear"', english: 'The RAE now accepts neologisms like "tuitear" and "wasapear"', pronunciation: 'lah RRAH-eh ah-OH-rah ah-SEHP-tah neh-oh-loh-HEES-mohs KOH-moh twee-teh-AHR ee wah-sah-peh-AHR', category: 'modern-evolution', audio: 'la-rae-ahora-acepta' },
  { spanish: 'El lenguaje inclusivo con la "e" genera un intenso debate lingüístico', english: 'Inclusive language with "e" generates intense linguistic debate', pronunciation: 'ehl lehn-GWAH-heh een-kloo-SEE-boh kohn lah EH heh-NEH-rah oon een-TEHN-soh deh-BAH-teh leen-GWEES-tee-koh', category: 'modern-evolution', audio: 'el-lenguaje-inclusivo' },
  { spanish: 'Hoy 580 millones de personas hablan español en el mundo', english: 'Today 580 million people speak Spanish in the world', pronunciation: 'oy keen-ee-EHN-tohs oh-CHEHN-tah mee-YOH-nehs deh pehr-SOH-nahs AH-blahn ehs-pah-NYOHL ehn ehl MOON-doh', category: 'modern-evolution', audio: 'hoy-580-millones' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L67PhraseByAudio = phraseByAudio

// === LANGUAGE TIMELINE (unique activity) ===

export interface LanguageTimelineChallenge {
  word: string
  english: string
  correctOrigin: string
  options: string[]
}

export const LANGUAGE_TIMELINE_CHALLENGES: LanguageTimelineChallenge[] = [
  {
    word: 'Almohada',
    english: 'Pillow',
    correctOrigin: 'Arabic',
    options: ['Latin', 'Arabic', 'Indigenous (Nahuatl)', 'French'],
  },
  {
    word: 'Chocolate',
    english: 'Chocolate',
    correctOrigin: 'Indigenous (Nahuatl)',
    options: ['Latin', 'Arabic', 'Indigenous (Nahuatl)', 'English'],
  },
  {
    word: 'Hijo',
    english: 'Son',
    correctOrigin: 'Latin',
    options: ['Latin', 'Arabic', 'Indigenous (Quechua)', 'French'],
  },
  {
    word: 'Álgebra',
    english: 'Algebra',
    correctOrigin: 'Arabic',
    options: ['Latin', 'Arabic', 'Greek', 'English'],
  },
  {
    word: 'Aguacate',
    english: 'Avocado',
    correctOrigin: 'Indigenous (Nahuatl)',
    options: ['Latin', 'Arabic', 'Indigenous (Nahuatl)', 'French'],
  },
  {
    word: 'Tuitear',
    english: 'To tweet',
    correctOrigin: 'English',
    options: ['Latin', 'Arabic', 'Indigenous (Nahuatl)', 'English'],
  },
  {
    word: 'Ojalá',
    english: 'Hopefully / God willing',
    correctOrigin: 'Arabic',
    options: ['Latin', 'Arabic', 'French', 'Indigenous (Quechua)'],
  },
]

// === LESSON DATA ===

export const L67Data: LessonData = {
  id: 'L6.7',
  hero: {
    lessonId: 'L6.7',
    title: 'History of the Spanish Language',
    subtitle: 'From Latin roots to global tongue — the epic journey of Spanish',
    description: 'Trace the evolution of Spanish from Vulgar Latin through 800 years of Arabic influence, medieval transformation, and modern globalization. Understand why Spanish sounds the way it does, where its words come from, and how it became the language of 580 million people.',
    image: '/images/L6.7/L6.7.jpg',
    gradient: 'from-amber-800/65 via-orange-700/55 to-red-700/65',
    accentColor: 'orange-200',
  },

  objectives: [
    { icon: '🏛️', title: 'Latin Origins', desc: 'Understand how Vulgar Latin evolved into Spanish: aqua→agua, filius→hijo, noctem→noche.' },
    { icon: '🕌', title: 'Arabic Influence', desc: 'Discover the 4,000+ Arabic-origin words: almohada, ojalá, alcalde, álgebra, azúcar.' },
    { icon: '📜', title: 'Medieval Spanish', desc: 'Explore Old Spanish: fablar→hablar, fazer→hacer, the Cantar de Mio Cid, and Cervantes.' },
    { icon: '🌐', title: 'Modern Evolution', desc: 'From RAE reforms to Nahuatl loanwords, voseo history, Spanglish, and inclusive language debates.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L6.4', label: 'Language Evolution', detail: 'L6.4 explored how language changes. Now trace the specific historical journey of Spanish from its origins.' },
    { fromLesson: 'L5.8', label: 'Regional Variation', detail: 'L5.8 covered regional slang. Now understand WHY Spanish varies so much — the historical forces that shaped each dialect.' },
    { fromLesson: 'L4.3', label: 'Formal/Informal History', detail: 'L4.3 taught tú vs. usted vs. vos. Now learn the historical journey from Latin "vos" to modern usage patterns.' },
  ],

  sectionTransitions: [
    { afterSection: 'latin-origins', text: 'You\'ve seen how Latin became Spanish! Now let\'s explore the massive Arabic influence on the language.' },
    { afterSection: 'arabic-influence', text: 'Arabic legacy understood! Let\'s travel through Medieval Spanish and see the language in transformation.' },
    { afterSection: 'medieval-spanish', text: 'From medieval to modern! Let\'s see how Spanish became a global language.' },
    { afterSection: 'dialogues', text: 'Fascinating linguistic journeys! Let\'s explore the cultural significance of language history.' },
    { afterSection: 'cultural', text: 'Cultural context absorbed! Now test your knowledge in the Language Timeline challenge.' },
    { afterSection: 'language-timeline', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Proviene del latín...', english: 'It comes from Latin...' },
    { spanish: 'Tiene origen árabe...', english: 'It has Arabic origin...' },
    { spanish: 'Evolucionó a partir de...', english: 'It evolved from...' },
    { spanish: 'En español medieval se decía...', english: 'In Medieval Spanish they said...' },
    { spanish: 'La RAE define...', english: 'The RAE defines...' },
    { spanish: 'Es un préstamo del...', english: 'It\'s a loanword from...' },
  ],

  pronunciationChallenges: [
    { spanish: '"Hijo" proviene del latín "filius"; la f se convirtió en h', pronunciation: 'EE-hoh proh-bee-EH-neh dehl lah-TEEN FEE-lee-oos lah EH-feh seh kohn-beer-tee-OH ehn AH-cheh', english: '"Hijo" comes from Latin "filius"; the f became h', audio: 'hijo-proviene-del-latin', tip: 'One of the most distinctive features of Castilian: Latin initial "f" became "h" (which is now silent). Filius→hijo, facere→hacer, fabulare→hablar. This change set Spanish apart from other Romance languages.' },
    { spanish: '"Ojalá" proviene del árabe "inshallah" (si Dios quiere)', pronunciation: 'oh-hah-LAH proh-bee-EH-neh dehl AH-rah-beh een-shah-LLAH', english: '"Ojalá" comes from Arabic "inshallah" (God willing)', audio: 'ojala-proviene-del-arabe', tip: '"Ojalá" is one of the most beautiful Arabic legacies in Spanish. It\'s the only word that triggers subjunctive automatically: "Ojalá que llueva" (I hope it rains). It preserves the original Arabic supplication.' },
    { spanish: '"Chocolate", "tomate" y "aguacate" vienen del náhuatl', pronunciation: 'choh-koh-LAH-teh toh-MAH-teh ee ah-gwah-KAH-teh bee-EH-nehn dehl NAH-wahtl', english: '"Chocolate," "tomate," and "aguacate" come from Nahuatl', audio: 'chocolate-tomate-aguacate', tip: 'Nahuatl gave Spanish (and the world) dozens of food words. The suffix "-ate" is a giveaway: chocolate (xocolatl), tomate (tomatl), aguacate (ahuacatl). Even "coyote" (coyotl) is Nahuatl!' },
    { spanish: 'En español medieval se decía "fablar" en vez de "hablar"', pronunciation: 'ehn ehs-pah-NYOHL meh-dee-eh-BAHL seh deh-SEE-ah fah-BLAHR ehn behs deh ah-BLAHR', english: 'In Medieval Spanish they said "fablar" instead of "hablar"', audio: 'en-espanol-medieval-fablar', tip: 'Reading Old Spanish is like reading a different language! "Fablar" (hablar), "fazer" (hacer), "fermoso" (hermoso). The f→h shift happened between the 14th and 16th centuries.' },
    { spanish: '"México" conserva la ortografía antigua con "x" que se pronuncia como "j"', pronunciation: 'MEH-hee-koh kohn-SEHR-bah lah ohr-toh-grah-FEE-ah ahn-TEE-gwah', english: '"México" preserves the old spelling with "x" pronounced as "j"', audio: 'mexico-conserva-la-ortografia', tip: 'In Old Spanish, "x" made a "sh" sound. When pronunciation shifted to the modern "j" (velar fricative), most words changed spelling (Quixote→Quijote), but Mexico kept the "x" as a symbol of cultural identity.' },
    { spanish: 'La RAE ahora acepta neologismos como "tuitear" y "wasapear"', pronunciation: 'lah RRAH-eh ah-OH-rah ah-SEHP-tah neh-oh-loh-HEES-mohs KOH-moh twee-teh-AHR ee wah-sah-peh-AHR', english: 'The RAE now accepts neologisms like "tuitear" and "wasapear"', audio: 'la-rae-ahora-acepta', tip: 'Language never stops evolving! The RAE has adapted: "tuitear" (to tweet), "wasapear" (to WhatsApp), "selfi" (selfie). Spanish adapts foreign words to its own phonetic patterns.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'latin-origins', label: 'Latin Origins' },
    { id: 'arabic-influence', label: 'Arabic Influence' },
    { id: 'medieval-spanish', label: 'Medieval Spanish' },
    { id: 'modern-evolution', label: 'Modern Evolution' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'origin-sorting', label: 'Origin Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'language-timeline', label: 'Language Timeline' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'latin-origins',
      title: 'Latin Origins — Orígenes Latinos',
      description: 'Spanish descends directly from Vulgar Latin. See how specific Latin words evolved into modern Spanish through centuries of phonetic change.',
      tabs: [
        { label: 'Word Evolution', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'latin-origins').slice(0, 6) },
        { label: 'Grammar & Structure', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'latin-origins').slice(6) },
      ],
    },
    {
      id: 'arabic-influence',
      title: 'Arabic Influence — La Huella Árabe',
      description: '800 years of Moorish presence left over 4,000 Arabic words in Spanish, especially with the telltale "al-" prefix.',
      tabs: [
        { label: 'Al- Words', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'arabic-influence').slice(0, 6) },
        { label: 'Cultural & Place Names', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'arabic-influence').slice(6) },
      ],
    },
    {
      id: 'medieval-spanish',
      title: 'Medieval Spanish — El Español Medieval',
      description: 'From El Cantar de Mio Cid to Cervantes, watch Spanish transform through the Middle Ages and Golden Age.',
      tabs: [
        { label: 'Sound Changes', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'medieval-spanish').slice(0, 6) },
        { label: 'Historical Milestones', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'medieval-spanish').slice(6) },
      ],
    },
    {
      id: 'modern-evolution',
      title: 'Modern Evolution — Evolución Moderna',
      description: 'From the founding of the RAE to Spanglish and inclusive language, Spanish continues to evolve in the 21st century.',
      tabs: [
        { label: 'Institutions & Reform', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'modern-evolution').slice(0, 6) },
        { label: 'Global Spanish', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'modern-evolution').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The f → h Shift: Spanish\'s Signature Sound Change',
      content: 'The most distinctive phonetic change in Spanish history: Latin initial "f" became Castilian "h" (now silent). This happened between the 14th-16th centuries and set Castilian apart from all other Romance languages. Portuguese kept "f" (filho, fazer), but Spanish shifted to "h" (hijo, hacer).',
      example: 'filius → hijo | facere → hacer | fabulare → hablar | farina → harina | ferrum → hierro',
    },
    {
      title: 'The Arabic "al-" Prefix',
      content: '"Al-" is the Arabic definite article (like "the"). When Arabic words entered Spanish, they often kept this article fused to the word. This is why so many Spanish words starting with "al-" have Arabic origins: almohada, alfombra, alcalde, almacén, algodón, alcohol.',
      example: 'al-mujadda → almohada | al-qadi → alcalde | al-jabr → álgebra | al-qutn → algodón',
    },
    {
      title: 'The Great Sibilant Shift',
      content: 'Medieval Spanish had six sibilant sounds (like "ts," "dz," "sh," "zh," "s," "z"). Between the 16th-17th centuries, these simplified: "sh" became the modern "j" sound, and the "ts/dz" distinction merged into "c/z" (which in most of Spain is "th"). This massive simplification is why modern Spanish pronunciation is relatively straightforward.',
      example: 'Quixote [ki-SHO-te] → Quijote [ki-HO-te] | fazer [fa-DZER] → hacer [a-SER/a-THER]',
    },
    {
      title: 'Indigenous Language Contributions',
      content: 'After 1492, contact with Nahuatl, Quechua, Guaraní, and other indigenous languages enriched Spanish enormously. Many words for New World plants, animals, and concepts entered Spanish — and from there, all European languages. The suffix "-tl" from Nahuatl was often adapted to "-te" in Spanish.',
      example: 'xocolatl → chocolate | tomatl → tomate | ahuacatl → aguacate | quechua: papa → papa | guaraní: ñandú → ñandú',
      reviewFrom: 'L5.8',
    },
  ],

  flashcardGroups: [
    {
      key: 'latin',
      label: 'Latin Origins',
      audioKeys: ['la-palabra-agua-viene', 'hijo-proviene-del-latin', 'las-lenguas-romances', 'noche-deriva-de-noctem', 'el-castellano-conserva', 'plaza-viene-de-platea', 'los-verbos-en-ar-er-ir', 'pueblo-desciende-de-populus', 'ojo-viene-de-oculus', 'el-subjuntivo-espanol'],
    },
    {
      key: 'arabic',
      label: 'Arabic Influence',
      audioKeys: ['almohada-viene-del-arabe', 'alfombra-proviene-de', 'ojala-proviene-del-arabe', 'alcalde-viene-de-al-qadi', 'algebra-proviene-del-arabe', 'azucar-viene-de-as-sukkar', 'el-prefijo-al-es', 'aceite-proviene-de-az-zayt', 'guadalquivir-significa', 'alhambra-quiere-decir'],
    },
    {
      key: 'medieval-modern',
      label: 'Medieval & Modern',
      audioKeys: ['en-espanol-medieval-fablar', 'cervantes-escribio-el-quijote', 'mexico-conserva-la-ortografia', 'la-real-academia-espanola', 'america-latina-desarrollo', 'chocolate-tomate-aguacate', 'el-spanglish-refleja', 'la-rae-ahora-acepta'],
    },
  ],

  matchPairs: [
    { left: 'Almohada', right: 'Arabic origin (al-mujadda)' },
    { left: 'Hijo', right: 'Latin origin (filius)' },
    { left: 'Chocolate', right: 'Nahuatl origin (xocolatl)' },
    { left: 'Ojalá', right: 'Arabic origin (inshallah)' },
    { left: 'Noche', right: 'Latin origin (noctem)' },
    { left: 'Tuitear', right: 'English origin (tweet)' },
    { left: 'Aguacate', right: 'Nahuatl origin (ahuacatl)' },
    { left: 'Álgebra', right: 'Arabic origin (al-jabr)' },
  ],
  matchLabels: { left: 'Spanish Word', right: 'Origin' },

  sortActivities: [
    {
      title: 'Latin or Arabic?',
      instruction: 'Sort these Spanish words by their linguistic origin.',
      buckets: ['Latin 🏛️', 'Arabic 🕌'],
      items: [
        { text: 'Hijo (filius)', bucket: 'Latin 🏛️' },
        { text: 'Noche (noctem)', bucket: 'Latin 🏛️' },
        { text: 'Agua (aqua)', bucket: 'Latin 🏛️' },
        { text: 'Plaza (platea)', bucket: 'Latin 🏛️' },
        { text: 'Almohada (al-mujadda)', bucket: 'Arabic 🕌' },
        { text: 'Ojalá (inshallah)', bucket: 'Arabic 🕌' },
        { text: 'Alcalde (al-qadi)', bucket: 'Arabic 🕌' },
        { text: 'Azúcar (as-sukkar)', bucket: 'Arabic 🕌' },
      ],
    },
    {
      title: 'Medieval or Modern?',
      instruction: 'Did this word or feature exist in Medieval Spanish or is it modern?',
      buckets: ['Medieval 📜', 'Modern 🌐'],
      items: [
        { text: 'Fablar (hablar)', bucket: 'Medieval 📜' },
        { text: 'Fazer (hacer)', bucket: 'Medieval 📜' },
        { text: 'Vos (respectful pronoun)', bucket: 'Medieval 📜' },
        { text: 'La cedilla (ç)', bucket: 'Medieval 📜' },
        { text: 'Tuitear', bucket: 'Modern 🌐' },
        { text: 'Wasapear', bucket: 'Modern 🌐' },
        { text: 'Spanglish', bucket: 'Modern 🌐' },
        { text: 'Lenguaje inclusivo (-e)', bucket: 'Modern 🌐' },
      ],
    },
  ],
  sortSectionId: 'origin-sorting',
  sortTitle: 'Origin Sorting',

  dialogues: [
    {
      id: 'dialogue-linguistics',
      title: 'Linguistics Lecture — Madrid',
      location: 'Madrid',
      lines: [
        { speaker: 'Prof. García', text: 'Buenos días. Hoy exploraremos cómo el latín vulgar se transformó en castellano. ¿Alguien sabe qué significa "vulgar" en este contexto?', audio: '/audio/L6.7/phrases/d1-line1.mp3' },
        { speaker: 'Elena', text: '¿Se refiere al latín hablado por el pueblo, no al latín clásico de los escritores?', audio: '/audio/L6.7/phrases/d1-line2.mp3' },
        { speaker: 'Prof. García', text: 'Exacto. "Vulgar" viene de "vulgus" — el pueblo. Era el latín cotidiano de soldados, comerciantes y colonos.', audio: '/audio/L6.7/phrases/d1-line3.mp3' },
        { speaker: 'Carlos', text: 'Entonces, ¿por qué el español suena tan diferente del italiano o el francés si todos vienen del latín?', audio: '/audio/L6.7/phrases/d1-line4.mp3' },
        { speaker: 'Prof. García', text: 'Gran pregunta. Cada región evolucionó de forma aislada. El castellano tuvo una influencia única: ochocientos años de contacto con el árabe.', audio: '/audio/L6.7/phrases/d1-line5.mp3', annotations: [{ phrase: 'ochocientos años de contacto con el árabe', fromLesson: 'L6.7', note: '711-1492 CE: Moorish presence in the Iberian Peninsula' }] },
        { speaker: 'Elena', text: '¿Y eso explica todas las palabras con "al-"? Almohada, alfombra, alcalde...', audio: '/audio/L6.7/phrases/d1-line6.mp3' },
        { speaker: 'Prof. García', text: 'Exactamente. El "al-" es el artículo definido en árabe. Más de cuatro mil palabras españolas tienen origen árabe.', audio: '/audio/L6.7/phrases/d1-line7.mp3' },
        { speaker: 'Carlos', text: 'Es fascinante. ¿Y qué pasó con el sonido de la "f" que se convirtió en "h"?', audio: '/audio/L6.7/phrases/d1-line8.mp3' },
        { speaker: 'Prof. García', text: 'Ah, el cambio f→h es la firma del castellano. "Filius" se convirtió en "hijo", "facere" en "hacer". Ninguna otra lengua romance hizo este cambio.', audio: '/audio/L6.7/phrases/d1-line9.mp3' },
        { speaker: 'Elena', text: '¿Es verdad que "México" conserva la ortografía antigua? ¿Que la "x" antes sonaba como "sh"?', audio: '/audio/L6.7/phrases/d1-line10.mp3' },
        { speaker: 'Prof. García', text: 'Sí. En el español del siglo XVI, "México" se pronunciaba "Meshico." Cuando el sonido cambió a "j", la ortografía de algunos nombres se mantuvo como símbolo cultural.', audio: '/audio/L6.7/phrases/d1-line11.mp3' },
        { speaker: 'Carlos', text: '¿Y el español seguirá cambiando? ¿Cómo será en cien años?', audio: '/audio/L6.7/phrases/d1-line12.mp3' },
        { speaker: 'Prof. García', text: 'Sin duda. La lengua es un organismo vivo. Ya incorporamos "tuitear", "wasapear"... y el debate sobre el lenguaje inclusivo muestra que la evolución continúa.', audio: '/audio/L6.7/phrases/d1-line13.mp3' },
        { speaker: 'Elena', text: '¿La RAE decide qué cambios son válidos?', audio: '/audio/L6.7/phrases/d1-line14.mp3' },
        { speaker: 'Prof. García', text: 'La RAE registra el uso, no lo controla. La lengua la hacen los hablantes. La academia solo "limpia, fija y da esplendor."', audio: '/audio/L6.7/phrases/d1-line15.mp3' },
        { speaker: 'Carlos', text: '¡Qué viaje tan increíble del latín hasta el tuitear! La historia de nuestra lengua es fascinante.', audio: '/audio/L6.7/phrases/d1-line16.mp3' },
      ],
    },
    {
      id: 'dialogue-alhambra',
      title: 'Tour of the Alhambra — Granada',
      location: 'Granada',
      lines: [
        { speaker: 'Guía', text: 'Bienvenidos a la Alhambra, que en árabe significa "la roja." Aquí empieza nuestro viaje por la herencia lingüística árabe en español.', audio: '/audio/L6.7/phrases/d2-line1.mp3' },
        { speaker: 'Turista 1', text: 'Es impresionante. ¿Por qué hay tanta influencia árabe en el español?', audio: '/audio/L6.7/phrases/d2-line2.mp3' },
        { speaker: 'Guía', text: 'Los árabes gobernaron partes de la península ibérica desde el año 711 hasta 1492. Fueron ochocientos años de convivencia cultural.', audio: '/audio/L6.7/phrases/d2-line3.mp3' },
        { speaker: 'Turista 2', text: '¿Solo dejaron palabras con "al-"? ¿O la influencia fue más profunda?', audio: '/audio/L6.7/phrases/d2-line4.mp3' },
        { speaker: 'Guía', text: 'Va mucho más allá. Los árabes trajeron avances en ciencia, medicina, agricultura y filosofía. "Álgebra", "algoritmo", "cifra" — todo viene del árabe.', audio: '/audio/L6.7/phrases/d2-line5.mp3', annotations: [{ phrase: 'álgebra, algoritmo, cifra', fromLesson: 'L6.7', note: 'Mathematical terms with Arabic origins: al-jabr, al-Khwarizmi, sifr' }] },
        { speaker: 'Turista 1', text: '¿Y la palabra "ojalá"? Siempre me ha parecido especial.', audio: '/audio/L6.7/phrases/d2-line6.mp3' },
        { speaker: 'Guía', text: '"Ojalá" proviene de "inshallah" — "si Dios quiere." Es quizás la herencia más bella del árabe en español. Se usa con subjuntivo: "ojalá que llueva."', audio: '/audio/L6.7/phrases/d2-line7.mp3' },
        { speaker: 'Turista 2', text: '¿Y los nombres de lugares? ¿"Guadalquivir" también es árabe?', audio: '/audio/L6.7/phrases/d2-line8.mp3' },
        { speaker: 'Guía', text: 'Sí. "Guadalquivir" significa "el río grande." Y muchos nombres con "Guad-" vienen del árabe "wadi" (río): Guadalajara, Guadiana, Guadalupe.', audio: '/audio/L6.7/phrases/d2-line9.mp3' },
        { speaker: 'Turista 1', text: 'Entonces, cuando digo "ojalá que mañana visite el Alcázar de un alcalde," estoy usando tres palabras árabes sin darme cuenta.', audio: '/audio/L6.7/phrases/d2-line10.mp3' },
        { speaker: 'Guía', text: '¡Exacto! Y si duerme en una almohada, sobre una alfombra, y mira por la ventana al jardín con azahares, suma seis más.', audio: '/audio/L6.7/phrases/d2-line11.mp3' },
        { speaker: 'Turista 2', text: 'Es increíble cómo la historia vive en cada palabra que pronunciamos.', audio: '/audio/L6.7/phrases/d2-line12.mp3' },
        { speaker: 'Guía', text: 'Así es. La lengua es un museo vivo. Cada palabra lleva consigo la historia de los pueblos que la crearon.', audio: '/audio/L6.7/phrases/d2-line13.mp3' },
        { speaker: 'Turista 1', text: 'Ahora miraré el español con otros ojos. Cada palabra es una ventana a la historia.', audio: '/audio/L6.7/phrases/d2-line14.mp3' },
        { speaker: 'Guía', text: 'Y eso, amigos, es la magia de la lingüística histórica. Sigamos el recorrido — hay más historias esperando en cada sala.', audio: '/audio/L6.7/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Attend a linguistics lecture on Latin-to-Spanish evolution in Madrid, then explore Arabic linguistic heritage at the Alhambra in Granada.',

  culturalNotes: [
    {
      title: 'El Legado Árabe: Más que Palabras',
      content: 'The 800 years of Moorish presence in Spain (711-1492) left an indelible mark not just on Spanish vocabulary but on culture itself. Arabic contributions include: irrigation systems (acequia), architectural styles (alcázar, azulejo), culinary traditions (arroz, azafrán), and scientific terminology (álgebra, algoritmo). The city of Córdoba was the intellectual capital of Europe during the 10th century, home to the largest library in the Western world. When Spanish speakers say "ojalá," they carry a millennium of cultural exchange in a single word.',
    },
    {
      title: 'La RAE: Guardiana del Idioma',
      content: 'The Real Academia Española, founded in 1713, modeled itself after the French Academy (Académie française). Its motto "Limpia, fija y da esplendor" (cleanses, fixes, and gives splendor) originally meant to purify Spanish of foreign influences. Today, the RAE works with 22 other national academies (ASALE) to coordinate a pluricentric approach — recognizing that no single country "owns" Spanish. The annual updates to the Diccionario de la lengua española reflect the living, evolving nature of the language across all its geographic varieties.',
    },
    {
      title: 'Las Lenguas Indígenas: Riqueza Invisible',
      content: 'When the Spanish arrived in the Americas, they encountered hundreds of indigenous languages that deeply enriched Spanish vocabulary. Nahuatl (Mexico) gave us chocolate, tomate, aguacate, chile, coyote. Quechua (Andes) contributed papa, cóndor, llama, cancha, coca. Guaraní (Paraguay) added ñandú, jaguar, tucán. Today, Latin American Spanish carries this heritage in everyday words — often without speakers realizing that these terms were once part of entirely different linguistic families. This indigenous layer makes American Spanish fundamentally different from Peninsular Spanish.',
    },
  ],
  culturalGradient: 'from-amber-50 to-orange-50',

  quiz: [
    { id: 1, type: 'mc', text: 'The Latin word "filius" evolved into which Spanish word?', options: ['Filo', 'Hijo', 'Fiel', 'Hilo'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "___" proviene del árabe "inshallah" (hopefully)', answer: 'Ojalá' },
    { id: 3, type: 'tf', text: 'The prefix "al-" in Spanish words like "almohada" and "alcalde" comes from the Arabic definite article.', answer: true },
    { id: 4, type: 'mc', text: 'In Medieval Spanish, "hablar" was pronounced as:', options: ['Ablar', 'Fablar', 'Jablar', 'Sablar'], answer: 1 },
    { id: 5, type: 'mc', text: '"Chocolate" and "tomate" come from which indigenous language?', options: ['Quechua', 'Guaraní', 'Nahuatl', 'Maya'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "La Real Academia Española se fundó en ___" (year)', answer: '1713' },
    { id: 7, type: 'mc', text: 'The "x" in "México" historically represented which sound?', options: ['The "ks" sound', 'The "sh" sound', 'The "ch" sound', 'The "th" sound'], answer: 1 },
    { id: 8, type: 'tf', text: '"Guadalquivir" means "the great river" in Arabic.', answer: true },
    { id: 9, type: 'mc', text: 'In Dialogue 1, Prof. García explains that "vulgar" in "Vulgar Latin" means:', options: ['Rude or offensive', 'Spoken by the common people', 'Written in a simplified form', 'Used by the military'], answer: 1 },
    { id: 10, type: 'mc', text: 'How many Arabic-origin words exist in Spanish?', options: ['About 400', 'About 1,000', 'About 4,000', 'About 40,000'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "El lema de la RAE es: Limpia, fija y da ___"', answer: 'esplendor' },
    { id: 12, type: 'mc', text: 'Which change is unique to Castilian among Romance languages?', options: ['Vowel harmony', 'Initial f → h', 'Loss of case system', 'Nasal vowels'], answer: 1 },
    { id: 13, type: 'tf', text: '"Tuitear" and "wasapear" are neologisms now accepted by the RAE.', answer: true },
    { id: 14, type: 'mc', text: 'In Dialogue 2, the guide explains that "Alhambra" means:', options: ['The palace', 'The red one', 'The fortress', 'The garden'], answer: 1 },
    { id: 15, type: 'mc', text: 'The voseo has roots in which century of Castilian?', options: ['10th century', '13th century', '16th century', '19th century'], answer: 2 },
  ],

  audioBase: '/audio/L6.7/phrases',

  uniqueActivity: {
    id: 'LanguageTimelineL67',
    sectionId: 'language-timeline',
    sectionColor: 'bg-amber-50/40',
    sectionBorder: 'border-amber-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'latin-origins': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'arabic-influence': { bg: 'bg-red-50/30', border: 'border-red-100' },
    'medieval-spanish': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'modern-evolution': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'matching-game': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'origin-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    cultural: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'language-timeline': { bg: 'bg-amber-50/40', border: 'border-amber-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
