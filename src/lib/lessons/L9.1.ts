import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Architectural Styles (12) ===
  { spanish: 'El barroco se caracteriza por la ornamentación excesiva', english: 'Baroque is characterized by excessive ornamentation', pronunciation: 'ehl bah-RROH-koh seh kah-rahk-teh-REE-sah pohr lah ohr-nah-mehn-tah-see-OHN ehk-seh-SEE-bah', category: 'architectural-styles', audio: 'barroco-ornamentacion' },
  { spanish: 'El estilo mudéjar combina elementos islámicos y cristianos', english: 'Mudéjar style combines Islamic and Christian elements', pronunciation: 'ehl ehs-TEE-loh moo-DEH-hahr kohm-BEE-nah eh-leh-MEHN-tohs ees-LAH-mee-kohs ee krees-tee-AH-nohs', category: 'architectural-styles', audio: 'mudejar-islamicos-cristianos' },
  { spanish: 'El art decó utiliza formas geométricas y líneas limpias', english: 'Art deco uses geometric forms and clean lines', pronunciation: 'ehl ahrt deh-KOH oo-tee-LEE-sah FOHR-mahs heh-oh-MEH-tree-kahs ee LEE-neh-ahs LEEM-pee-ahs', category: 'architectural-styles', audio: 'art-deco-geometricas' },
  { spanish: 'El brutalismo emplea hormigón visto en grandes superficies', english: 'Brutalism employs exposed concrete on large surfaces', pronunciation: 'ehl broo-tah-LEES-moh ehm-PLEH-ah ohr-mee-GOHN BEES-toh ehn GRAHN-dehs soo-pehr-FEE-see-ehs', category: 'architectural-styles', audio: 'brutalismo-hormigon' },
  { spanish: 'El neoclásico recupera las formas de la Grecia antigua', english: 'Neoclassical recovers the forms of ancient Greece', pronunciation: 'ehl neh-oh-KLAH-see-koh reh-koo-PEH-rah lahs FOHR-mahs deh lah GREH-see-ah ahn-TEE-gwah', category: 'architectural-styles', audio: 'neoclasico-grecia' },
  { spanish: 'La arquitectura colonial refleja la influencia española', english: 'Colonial architecture reflects the Spanish influence', pronunciation: 'lah ahr-kee-tehk-TOO-rah koh-loh-nee-AHL reh-FLEH-hah lah een-floo-EHN-see-ah ehs-pah-NYOH-lah', category: 'architectural-styles', audio: 'colonial-espanola' },
  { spanish: 'El modernismo catalán fue liderado por Antoni Gaudí', english: 'Catalan modernism was led by Antoni Gaudí', pronunciation: 'ehl moh-dehr-NEES-moh kah-tah-LAHN fweh lee-deh-RAH-doh pohr ahn-TOH-nee gow-DEE', category: 'architectural-styles', audio: 'modernismo-catalan-gaudi' },
  { spanish: 'La bóveda distribuye el peso hacia los muros laterales', english: 'The vault distributes weight toward the lateral walls', pronunciation: 'lah BOH-beh-dah dees-tree-BOO-yeh ehl PEH-soh AH-see-ah lohs MOO-rohs lah-teh-RAH-lehs', category: 'architectural-styles', audio: 'boveda-peso-muros' },
  { spanish: 'El arco de herradura es típico de la arquitectura islámica', english: 'The horseshoe arch is typical of Islamic architecture', pronunciation: 'ehl AHR-koh deh eh-rrah-DOO-rah ehs TEE-pee-koh deh lah ahr-kee-tehk-TOO-rah ees-LAH-mee-kah', category: 'architectural-styles', audio: 'arco-herradura-islamica' },
  { spanish: 'La fachada del edificio fue renovada el año pasado', english: 'The building facade was renovated last year', pronunciation: 'lah fah-CHAH-dah dehl eh-dee-FEE-see-oh fweh reh-noh-BAH-dah ehl AH-nyoh pah-SAH-doh', category: 'architectural-styles', audio: 'fachada-renovada' },
  { spanish: 'El estilo gótico se distingue por sus arcos apuntados', english: 'Gothic style is distinguished by its pointed arches', pronunciation: 'ehl ehs-TEE-loh GOH-tee-koh seh dees-TEEN-geh pohr soos AHR-kohs ah-poon-TAH-dohs', category: 'architectural-styles', audio: 'gotico-arcos-apuntados' },
  { spanish: 'La arquitectura minimalista prioriza la funcionalidad', english: 'Minimalist architecture prioritizes functionality', pronunciation: 'lah ahr-kee-tehk-TOO-rah mee-nee-mah-LEES-tah pree-oh-ree-SAH lah foon-see-oh-nah-lee-DAHD', category: 'architectural-styles', audio: 'minimalista-funcionalidad' },

  // === Construction Vocabulary (12) ===
  { spanish: 'Los cimientos sostienen toda la estructura del edificio', english: 'The foundations support the entire building structure', pronunciation: 'lohs see-mee-EHN-tohs sohs-tee-EH-nehn TOH-dah lah ehs-trook-TOO-rah dehl eh-dee-FEE-see-oh', category: 'construction-vocab', audio: 'cimientos-estructura' },
  { spanish: 'La estructura portante resiste las cargas del edificio', english: 'The load-bearing structure resists the building loads', pronunciation: 'lah ehs-trook-TOO-rah pohr-TAHN-teh reh-SEES-teh lahs KAHR-gahs dehl eh-dee-FEE-see-oh', category: 'construction-vocab', audio: 'estructura-portante-cargas' },
  { spanish: 'El hormigón armado combina concreto con barras de acero', english: 'Reinforced concrete combines concrete with steel bars', pronunciation: 'ehl ohr-mee-GOHN ahr-MAH-doh kohm-BEE-nah kohn-KREH-toh kohn BAH-rrahs deh ah-SEH-roh', category: 'construction-vocab', audio: 'hormigon-armado-acero' },
  { spanish: 'La viga de acero cruza todo el salón principal', english: 'The steel beam crosses the entire main hall', pronunciation: 'lah BEE-gah deh ah-SEH-roh KROO-sah TOH-doh ehl sah-LOHN preen-see-PAHL', category: 'construction-vocab', audio: 'viga-acero-salon' },
  { spanish: 'El andamio permite a los obreros trabajar en altura', english: 'The scaffolding allows workers to work at height', pronunciation: 'ehl ahn-DAH-mee-oh pehr-MEE-teh ah lohs oh-BREH-rohs trah-bah-HAHR ehn ahl-TOO-rah', category: 'construction-vocab', audio: 'andamio-obreros-altura' },
  { spanish: 'La obra en curso estará terminada para diciembre', english: 'The construction in progress will be finished by December', pronunciation: 'lah OH-brah ehn KOOR-soh ehs-tah-RAH tehr-mee-NAH-dah PAH-rah dee-see-EHM-breh', category: 'construction-vocab', audio: 'obra-en-curso-diciembre' },
  { spanish: 'El plano arquitectónico muestra la distribución de espacios', english: 'The architectural plan shows the space distribution', pronunciation: 'ehl PLAH-noh ahr-kee-tehk-TOH-nee-koh MWEHS-trah lah dees-tree-boo-see-OHN deh ehs-PAH-see-ohs', category: 'construction-vocab', audio: 'plano-arquitectonico-espacios' },
  { spanish: 'La grúa levanta los materiales hasta el décimo piso', english: 'The crane lifts materials up to the tenth floor', pronunciation: 'lah GROO-ah leh-BAHN-tah lohs mah-teh-ree-AH-lehs AHS-tah ehl DEH-see-moh PEE-soh', category: 'construction-vocab', audio: 'grua-materiales-piso' },
  { spanish: 'El encofrado da forma al hormigón antes de que fragüe', english: 'The formwork shapes the concrete before it sets', pronunciation: 'ehl ehn-koh-FRAH-doh dah FOHR-mah ahl ohr-mee-GOHN AHN-tehs deh keh FRAH-gweh', category: 'construction-vocab', audio: 'encofrado-hormigon-frague' },
  { spanish: 'La cimentación profunda es necesaria en suelos blandos', english: 'Deep foundation is necessary on soft soils', pronunciation: 'lah see-mehn-tah-see-OHN proh-FOON-dah ehs neh-seh-SAH-ree-ah ehn SWEH-lohs BLAHN-dohs', category: 'construction-vocab', audio: 'cimentacion-suelos-blandos' },
  { spanish: 'El arquitecto supervisó la demolición del edificio antiguo', english: 'The architect supervised the demolition of the old building', pronunciation: 'ehl ahr-kee-TEHK-toh soo-pehr-bee-SOH lah deh-moh-lee-see-OHN dehl eh-dee-FEE-see-oh ahn-TEE-gwoh', category: 'construction-vocab', audio: 'arquitecto-demolicion' },
  { spanish: 'Los ladrillos se colocan con mortero de cemento', english: 'The bricks are laid with cement mortar', pronunciation: 'lohs lah-DREE-yohs seh koh-LOH-kahn kohn mohr-TEH-roh deh seh-MEHN-toh', category: 'construction-vocab', audio: 'ladrillos-mortero-cemento' },

  // === Urban Planning (12) ===
  { spanish: 'El plan de ordenamiento territorial regula el uso del suelo', english: 'The territorial planning plan regulates land use', pronunciation: 'ehl plahn deh ohr-deh-nah-mee-EHN-toh teh-rree-toh-ree-AHL REH-goo-lah ehl OO-soh dehl SWEH-loh', category: 'urban-planning', audio: 'ordenamiento-territorial-suelo' },
  { spanish: 'La zonificación divide la ciudad en áreas residenciales y comerciales', english: 'Zoning divides the city into residential and commercial areas', pronunciation: 'lah soh-nee-fee-kah-see-OHN dee-BEE-deh lah see-oo-DAHD ehn AH-reh-ahs reh-see-dehn-see-AH-lehs ee koh-mehr-see-AH-lehs', category: 'urban-planning', audio: 'zonificacion-residenciales' },
  { spanish: 'El espacio público fomenta la convivencia ciudadana', english: 'Public space fosters community coexistence', pronunciation: 'ehl ehs-PAH-see-oh POO-blee-koh foh-MEHN-tah lah kohn-bee-BEHN-see-ah see-oo-dah-DAH-nah', category: 'urban-planning', audio: 'espacio-publico-convivencia' },
  { spanish: 'La gentrificación desplaza a los residentes originales del barrio', english: 'Gentrification displaces the original neighborhood residents', pronunciation: 'lah hehn-tree-fee-kah-see-OHN dehs-PLAH-sah ah lohs reh-see-DEHN-tehs oh-ree-hee-NAH-lehs dehl BAH-rree-oh', category: 'urban-planning', audio: 'gentrificacion-residentes' },
  { spanish: 'El transporte público integrado conecta metro, bus y tranvía', english: 'Integrated public transportation connects metro, bus, and tramway', pronunciation: 'ehl trahns-POHR-teh POO-blee-koh een-teh-GRAH-doh koh-NEHK-tah MEH-troh boos ee trahn-BEE-ah', category: 'urban-planning', audio: 'transporte-integrado-metro' },
  { spanish: 'La densidad poblacional afecta la calidad de vida urbana', english: 'Population density affects urban quality of life', pronunciation: 'lah dehn-see-DAHD poh-blah-see-oh-NAHL ah-FEHK-tah lah kah-lee-DAHD deh BEE-dah oor-BAH-nah', category: 'urban-planning', audio: 'densidad-poblacional-calidad' },
  { spanish: 'Las ciclovías promueven una movilidad más sostenible', english: 'Bike lanes promote more sustainable mobility', pronunciation: 'lahs see-kloh-BEE-ahs proh-MWEH-behn OO-nah moh-bee-lee-DAHD mahs sohs-teh-NEE-bleh', category: 'urban-planning', audio: 'ciclovias-movilidad-sostenible' },
  { spanish: 'El plan maestro urbano se revisa cada diez años', english: 'The urban master plan is reviewed every ten years', pronunciation: 'ehl plahn mah-EHS-troh oor-BAH-noh seh reh-BEE-sah KAH-dah dee-ehs AH-nyohs', category: 'urban-planning', audio: 'plan-maestro-diez-anos' },
  { spanish: 'La infraestructura vial necesita mantenimiento constante', english: 'Road infrastructure needs constant maintenance', pronunciation: 'lah een-frah-ehs-trook-TOO-rah bee-AHL neh-seh-SEE-tah mahn-teh-nee-mee-EHN-toh kohns-TAHN-teh', category: 'urban-planning', audio: 'infraestructura-vial-mantenimiento' },
  { spanish: 'Los parques urbanos mejoran la salud mental de los habitantes', english: 'Urban parks improve the mental health of inhabitants', pronunciation: 'lohs PAHR-kehs oor-BAH-nohs meh-HOH-rahn lah sah-LOOD mehn-TAHL deh lohs ah-bee-TAHN-tehs', category: 'urban-planning', audio: 'parques-urbanos-salud' },
  { spanish: 'La regeneración urbana transforma zonas degradadas', english: 'Urban regeneration transforms degraded areas', pronunciation: 'lah reh-heh-neh-rah-see-OHN oor-BAH-nah trahns-FOHR-mah SOH-nahs deh-grah-DAH-dahs', category: 'urban-planning', audio: 'regeneracion-urbana-zonas' },
  { spanish: 'El uso mixto del suelo combina vivienda, comercio y oficinas', english: 'Mixed land use combines housing, commerce, and offices', pronunciation: 'ehl OO-soh MEEKS-toh dehl SWEH-loh kohm-BEE-nah bee-bee-EHN-dah koh-MEHR-see-oh ee oh-fee-SEE-nahs', category: 'urban-planning', audio: 'uso-mixto-vivienda-comercio' },

  // === Sustainable Design (12) ===
  { spanish: 'La certificación LEED garantiza estándares de sostenibilidad', english: 'LEED certification guarantees sustainability standards', pronunciation: 'lah sehr-tee-fee-kah-see-OHN leed gah-rahn-TEE-sah ehs-TAHN-dah-rehs deh sohs-teh-nee-bee-lee-DAHD', category: 'sustainable-design', audio: 'certificacion-leed-sostenibilidad' },
  { spanish: 'La huella ecológica del edificio se mide durante todo su ciclo de vida', english: 'The building ecological footprint is measured throughout its lifecycle', pronunciation: 'lah HWEH-yah eh-koh-LOH-hee-kah dehl eh-dee-FEE-see-oh seh MEE-deh doo-RAHN-teh TOH-doh soo SEE-kloh deh BEE-dah', category: 'sustainable-design', audio: 'huella-ecologica-ciclo-vida' },
  { spanish: 'Los materiales reciclados reducen el impacto ambiental', english: 'Recycled materials reduce environmental impact', pronunciation: 'lohs mah-teh-ree-AH-lehs reh-see-KLAH-dohs reh-DOO-sehn ehl eem-PAHK-toh ahm-bee-ehn-TAHL', category: 'sustainable-design', audio: 'materiales-reciclados-impacto' },
  { spanish: 'La ventilación natural reduce el consumo de energía', english: 'Natural ventilation reduces energy consumption', pronunciation: 'lah behn-tee-lah-see-OHN nah-too-RAHL reh-DOO-seh ehl kohn-SOO-moh deh eh-nehr-HEE-ah', category: 'sustainable-design', audio: 'ventilacion-natural-energia' },
  { spanish: 'Los paneles solares integrados generan electricidad limpia', english: 'Integrated solar panels generate clean electricity', pronunciation: 'lohs pah-NEH-lehs soh-LAH-rehs een-teh-GRAH-dohs heh-NEH-rahn eh-lehk-tree-see-DAHD LEEM-pee-ah', category: 'sustainable-design', audio: 'paneles-solares-electricidad' },
  { spanish: 'La azotea verde ayuda a regular la temperatura interior', english: 'The green roof helps regulate interior temperature', pronunciation: 'lah ah-soh-TEH-ah BEHR-deh ah-YOO-dah ah reh-goo-LAHR lah tehm-peh-rah-TOO-rah een-teh-ree-OHR', category: 'sustainable-design', audio: 'azotea-verde-temperatura' },
  { spanish: 'La recolección de aguas pluviales abastece los jardines', english: 'Rainwater collection supplies the gardens', pronunciation: 'lah reh-koh-lehk-see-OHN deh AH-gwahs ploo-bee-AH-lehs ah-bahs-TEH-seh lohs hahr-DEE-nehs', category: 'sustainable-design', audio: 'aguas-pluviales-jardines' },
  { spanish: 'El aislamiento térmico evita la pérdida de calor', english: 'Thermal insulation prevents heat loss', pronunciation: 'ehl ah-ees-lah-mee-EHN-toh TEHR-mee-koh eh-BEE-tah lah PEHR-dee-dah deh kah-LOHR', category: 'sustainable-design', audio: 'aislamiento-termico-calor' },
  { spanish: 'La iluminación LED consume menos que la convencional', english: 'LED lighting consumes less than conventional', pronunciation: 'lah ee-loo-mee-nah-see-OHN lehd kohn-SOO-meh MEH-nohs keh lah kohn-behn-see-oh-NAHL', category: 'sustainable-design', audio: 'iluminacion-led-convencional' },
  { spanish: 'Los edificios de energía neta cero producen lo que consumen', english: 'Net-zero energy buildings produce what they consume', pronunciation: 'lohs eh-dee-FEE-see-ohs deh eh-nehr-HEE-ah NEH-tah SEH-roh proh-DOO-sehn loh keh kohn-SOO-mehn', category: 'sustainable-design', audio: 'energia-neta-cero' },
  { spanish: 'La bioconstrucción utiliza materiales naturales como el adobe', english: 'Bio-construction uses natural materials like adobe', pronunciation: 'lah bee-oh-kohns-trook-see-OHN oo-tee-LEE-sah mah-teh-ree-AH-lehs nah-too-RAH-lehs KOH-moh ehl ah-DOH-beh', category: 'sustainable-design', audio: 'bioconstruccion-adobe' },
  { spanish: 'El diseño pasivo aprovecha la orientación solar del terreno', english: 'Passive design takes advantage of the terrain solar orientation', pronunciation: 'ehl dee-SEH-nyoh pah-SEE-boh ah-proh-BEH-chah lah oh-ree-ehn-tah-see-OHN soh-LAHR dehl teh-RREH-noh', category: 'sustainable-design', audio: 'diseno-pasivo-orientacion' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L91PhraseByAudio = phraseByAudio

// === BLUEPRINT READER (unique activity) ===

export interface BlueprintReaderChallenge {
  description: string
  english: string
  correctTerm: string
  options: string[]
}

export const BLUEPRINT_READER_CHALLENGES: BlueprintReaderChallenge[] = [
  {
    description: 'En el plano se indica que esta parte del edificio distribuye el peso hacia los muros laterales mediante una superficie curva.',
    english: 'The plan indicates this part of the building distributes weight to lateral walls via a curved surface.',
    correctTerm: 'la bóveda',
    options: ['la bóveda', 'la viga', 'el andamio', 'los cimientos'],
  },
  {
    description: 'El arquitecto especificó que los pilares deben ser de concreto reforzado con barras de acero para soportar las cargas del edificio.',
    english: 'The architect specified the pillars must be reinforced concrete with steel bars to support building loads.',
    correctTerm: 'el hormigón armado',
    options: ['el hormigón armado', 'el encofrado', 'el mortero', 'el aislamiento térmico'],
  },
  {
    description: 'La sección del plano muestra un arco con forma de media circunferencia extendida, característico de la arquitectura andalusí.',
    english: 'The plan section shows an arch shaped as an extended semicircle, characteristic of Andalusian architecture.',
    correctTerm: 'el arco de herradura',
    options: ['el arco de herradura', 'la fachada', 'la bóveda', 'el arco apuntado'],
  },
  {
    description: 'El diseño incorpora una cubierta vegetal en la parte superior del edificio para regular la temperatura interior.',
    english: 'The design incorporates a plant cover on the top of the building to regulate interior temperature.',
    correctTerm: 'la azotea verde',
    options: ['la azotea verde', 'los paneles solares integrados', 'la ventilación natural', 'el aislamiento térmico'],
  },
  {
    description: 'El plano señala la parte inferior de la estructura que se excava en el terreno para sostener todo el peso del edificio.',
    english: 'The plan marks the lower part of the structure dug into the ground to support the entire building weight.',
    correctTerm: 'los cimientos',
    options: ['los cimientos', 'la estructura portante', 'la viga', 'el encofrado'],
  },
  {
    description: 'En las notas del proyecto se exige obtener esta acreditación internacional que garantiza estándares ambientales en la construcción.',
    english: 'The project notes require obtaining this international accreditation guaranteeing environmental construction standards.',
    correctTerm: 'la certificación LEED',
    options: ['la certificación LEED', 'el plan de ordenamiento territorial', 'la zonificación', 'la huella ecológica'],
  },
  {
    description: 'El plano muestra la vista frontal exterior del edificio, incluyendo ventanas, puertas y elementos decorativos.',
    english: 'The plan shows the front exterior view of the building, including windows, doors, and decorative elements.',
    correctTerm: 'la fachada',
    options: ['la fachada', 'el plano arquitectónico', 'la estructura portante', 'la bóveda'],
  },
]

// === LESSON DATA ===

export const L91Data: LessonData = {
  id: 'L9.1',
  hero: {
    lessonId: 'L9.1',
    title: 'Architecture & Urban Planning',
    subtitle: 'Designing spaces, building the future',
    description: 'Explore the vocabulary of architectural styles from baroque to brutalism, learn construction terminology, discuss urban development challenges, and master the language of sustainable design. From Gaudí\'s Barcelona to Medellín\'s urban transformation, build your specialized Spanish.',
    image: '/images/L9.1/L9.1.jpg',
    gradient: 'from-amber-800/65 via-orange-700/55 to-rose-700/65',
    accentColor: 'amber-200',
  },

  objectives: [
    { icon: '🏛️', title: 'Architectural Styles', desc: 'Identify and describe styles: barroco, mudéjar, art decó, brutalismo, neoclásico, colonial, modernismo catalán.' },
    { icon: '🏗️', title: 'Construction Vocabulary', desc: 'Master terms: cimientos, hormigón armado, viga, andamio, plano arquitectónico, estructura portante.' },
    { icon: '🌆', title: 'Urban Planning', desc: 'Discuss zonificación, gentrificación, transporte integrado, densidad poblacional, espacio público.' },
    { icon: '🌿', title: 'Sustainable Design', desc: 'Explain certificación LEED, azotea verde, paneles solares, ventilación natural, materiales reciclados.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L3.2', label: 'Home & Housing', detail: 'L3.2 taught household vocabulary and rooms. Now expand to the professional language of how buildings are designed and constructed.' },
    { fromLesson: 'L7.4', label: 'Scientific & Environmental', detail: 'L7.4 introduced environmental terminology. Apply that knowledge to sustainable architecture and green building practices.' },
    { fromLesson: 'L6.1', label: 'Complex Sentences', detail: 'L6.1 covered complex sentence structures. Use them to describe intricate architectural concepts and urban planning proposals.' },
  ],

  sectionTransitions: [
    { afterSection: 'architectural-styles', text: 'You know the styles! Now let\'s learn how buildings are actually constructed.' },
    { afterSection: 'construction-vocab', text: 'Construction terms mastered! Let\'s zoom out to how cities are planned.' },
    { afterSection: 'urban-planning', text: 'From city planning to green design — let\'s explore sustainability.' },
    { afterSection: 'dialogues', text: 'Great architectural conversations! Let\'s explore the cultural side.' },
    { afterSection: 'cultural', text: 'Now test your skills reading architectural blueprints!' },
    { afterSection: 'blueprint-reader', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'El edificio donde vivo es de estilo...', english: 'The building where I live is ... style' },
    { spanish: 'Mi barrio necesita más...', english: 'My neighborhood needs more...' },
    { spanish: 'El material más común aquí es...', english: 'The most common material here is...' },
    { spanish: 'Me gustaría que mi ciudad tuviera...', english: 'I would like my city to have...' },
    { spanish: 'El diseño sostenible es importante porque...', english: 'Sustainable design is important because...' },
    { spanish: 'Mi edificio favorito es...', english: 'My favorite building is...' },
  ],

  pronunciationChallenges: [
    { spanish: 'El hormigón armado es fundamental en la construcción moderna', pronunciation: 'ehl ohr-mee-GOHN ahr-MAH-doh ehs foon-dah-mehn-TAHL ehn lah kohns-trook-see-OHN moh-DEHR-nah', english: 'Reinforced concrete is fundamental in modern construction', audio: 'hormigon-armado-acero', tip: '"Hormigón" has the stress on the last syllable: hormigÓN. The "h" is always silent in Spanish.' },
    { spanish: 'La zonificación regula el desarrollo urbano', pronunciation: 'lah soh-nee-fee-kah-see-OHN REH-goo-lah ehl deh-sah-RROH-yoh oor-BAH-noh', english: 'Zoning regulates urban development', audio: 'zonificacion-residenciales', tip: '"Zonificación" — notice the -ción ending, always stressed: zonificaCIÓN. All -ción words are feminine: LA zonificación.' },
    { spanish: 'El modernismo catalán revolucionó la arquitectura', pronunciation: 'ehl moh-dehr-NEES-moh kah-tah-LAHN reh-boh-loo-see-oh-NOH lah ahr-kee-tehk-TOO-rah', english: 'Catalan modernism revolutionized architecture', audio: 'modernismo-catalan-gaudi', tip: '"Catalán" stresses the last syllable: catalÁN. "Arquitectura" has the stress on -TU-: arquitecTUra.' },
    { spanish: 'Los cimientos son la base de cualquier estructura', pronunciation: 'lohs see-mee-EHN-tohs sohn lah BAH-seh deh kwahl-kee-EHR ehs-trook-TOO-rah', english: 'Foundations are the base of any structure', audio: 'cimientos-estructura', tip: '"Cimientos" — the "ci" sounds like "see" in Latin America and "thee" in Spain. Both are correct!' },
    { spanish: 'La certificación LEED promueve edificios sostenibles', pronunciation: 'lah sehr-tee-fee-kah-see-OHN leed proh-MWEH-beh eh-dee-FEE-see-ohs sohs-teh-NEE-blehs', english: 'LEED certification promotes sustainable buildings', audio: 'certificacion-leed-sostenibilidad', tip: '"Sostenible" is stressed on -NI-: sosteNIble. Compare with English "sustainable" — different stress pattern!' },
    { spanish: 'La azotea verde reduce la huella ecológica', pronunciation: 'lah ah-soh-TEH-ah BEHR-deh reh-DOO-seh lah HWEH-yah eh-koh-LOH-hee-kah', english: 'The green roof reduces the ecological footprint', audio: 'azotea-verde-temperatura', tip: '"Huella" starts with the "hw" sound. "Azotea" is stressed on -TE-: azoTEa. Both are everyday words in architecture.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'architectural-styles', label: 'Architectural Styles' },
    { id: 'construction-vocab', label: 'Construction Vocab' },
    { id: 'urban-planning', label: 'Urban Planning' },
    { id: 'sustainable-design', label: 'Sustainable Design' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'blueprint-reader', label: 'Blueprint Reader' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'architectural-styles',
      title: 'Architectural Styles — Estilos Arquitectónicos',
      description: 'From the ornate baroque to the raw brutalism, learn to identify and describe the world\'s major architectural movements and their defining elements.',
      tabs: [
        { label: 'Historic Styles', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'architectural-styles').slice(0, 6) },
        { label: 'Modern & Elements', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'architectural-styles').slice(6) },
      ],
    },
    {
      id: 'construction-vocab',
      title: 'Construction Vocabulary — Vocabulario de Construcción',
      description: 'The essential terms used on construction sites, in architectural offices, and in building specifications.',
      tabs: [
        { label: 'Structure & Foundation', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'construction-vocab').slice(0, 6) },
        { label: 'Tools & Process', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'construction-vocab').slice(6) },
      ],
    },
    {
      id: 'urban-planning',
      title: 'Urban Planning — Planificación Urbana',
      description: 'How cities grow, change, and adapt. From zoning laws to public transportation, master the language of urban development.',
      tabs: [
        { label: 'Planning & Zoning', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'urban-planning').slice(0, 6) },
        { label: 'Infrastructure & Green', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'urban-planning').slice(6) },
      ],
    },
    {
      id: 'sustainable-design',
      title: 'Sustainable Design — Diseño Sostenible',
      description: 'Green architecture, energy efficiency, and eco-friendly materials. The vocabulary of building for the future.',
      tabs: [
        { label: 'Certifications & Materials', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'sustainable-design').slice(0, 6) },
        { label: 'Technologies & Methods', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'sustainable-design').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Architecture Terms: Stress Patterns',
      content: 'Many architecture words end in -ción (feminine, stressed on the last syllable): zonificaCIÓN, certificaCIÓN, ventilaCIÓN, cimentaCIÓN. Remember: ALL -ción words are feminine (LA certificación) and always carry a written accent.',
      example: 'La zonificación, la certificación, la ventilación, la cimentación',
    },
    {
      title: 'Silent H in Construction Terms',
      content: 'The letter "h" is always silent in Spanish. This is especially important in construction terms: hormigón (concrete), herradura (horseshoe), huella (footprint). Don\'t pronounce the "h" — it\'s just a historical artifact in Spanish spelling.',
      example: 'Hormigón → or-mee-GOHN | Herradura → eh-rrah-DOO-rah | Huella → HWEH-yah',
    },
    {
      title: 'Compound Terms in Urban Planning',
      content: 'Urban planning uses many compound terms where both words keep their individual stress: plan de ordenamiento, uso mixto, energía neta, transporte integrado. Practice each word separately, then combine them smoothly.',
      example: 'Plan de ordenamiento territorial | Transporte público integrado | Uso mixto del suelo',
      reviewFrom: 'L6.1',
    },
    {
      title: 'Technical Adjectives: -ble Endings',
      content: 'Many sustainability terms use the -ble suffix (like English -ble): sosteniBLE, renovaBLE, recicLAble. The stress falls on the syllable BEFORE -ble. These adjectives work for both masculine and feminine nouns: energía renovable, material reciclable.',
      example: 'Sostenible, renovable, reciclable, habitable, permeable',
    },
  ],

  flashcardGroups: [
    {
      key: 'architectural-styles',
      label: 'Architectural Styles',
      audioKeys: ['barroco-ornamentacion', 'mudejar-islamicos-cristianos', 'art-deco-geometricas', 'brutalismo-hormigon', 'neoclasico-grecia', 'colonial-espanola', 'modernismo-catalan-gaudi', 'boveda-peso-muros', 'arco-herradura-islamica', 'fachada-renovada', 'gotico-arcos-apuntados', 'minimalista-funcionalidad'],
    },
    {
      key: 'construction-vocab',
      label: 'Construction Vocabulary',
      audioKeys: ['cimientos-estructura', 'estructura-portante-cargas', 'hormigon-armado-acero', 'viga-acero-salon', 'andamio-obreros-altura', 'obra-en-curso-diciembre', 'plano-arquitectonico-espacios', 'grua-materiales-piso', 'encofrado-hormigon-frague', 'cimentacion-suelos-blandos', 'arquitecto-demolicion', 'ladrillos-mortero-cemento'],
    },
    {
      key: 'urban-sustainable',
      label: 'Urban Planning & Sustainable Design',
      audioKeys: ['ordenamiento-territorial-suelo', 'zonificacion-residenciales', 'espacio-publico-convivencia', 'gentrificacion-residentes', 'transporte-integrado-metro', 'certificacion-leed-sostenibilidad', 'paneles-solares-electricidad', 'azotea-verde-temperatura'],
    },
  ],

  matchPairs: [
    { left: 'Los cimientos', right: 'The foundations' },
    { left: 'El hormigón armado', right: 'Reinforced concrete' },
    { left: 'La fachada', right: 'The facade' },
    { left: 'La azotea verde', right: 'Green roof' },
    { left: 'La gentrificación', right: 'Gentrification' },
    { left: 'El plano arquitectónico', right: 'Architectural plan' },
    { left: 'La zonificación', right: 'Zoning' },
    { left: 'La bóveda', right: 'The vault' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Style Era: Historical vs. Modern',
      instruction: 'Is this architectural style historical or modern?',
      buckets: ['Historical 🏛️', 'Modern 🏢'],
      items: [
        { text: 'Barroco', bucket: 'Historical 🏛️' },
        { text: 'Mudéjar', bucket: 'Historical 🏛️' },
        { text: 'Neoclásico', bucket: 'Historical 🏛️' },
        { text: 'Gótico', bucket: 'Historical 🏛️' },
        { text: 'Art decó', bucket: 'Modern 🏢' },
        { text: 'Brutalismo', bucket: 'Modern 🏢' },
        { text: 'Modernismo catalán', bucket: 'Modern 🏢' },
        { text: 'Minimalista', bucket: 'Modern 🏢' },
      ],
    },
    {
      title: 'Building vs. City Planning',
      instruction: 'Does this term relate to a building or to city planning?',
      buckets: ['Building 🏗️', 'City Planning 🌆'],
      items: [
        { text: 'Los cimientos', bucket: 'Building 🏗️' },
        { text: 'La viga', bucket: 'Building 🏗️' },
        { text: 'El andamio', bucket: 'Building 🏗️' },
        { text: 'La fachada', bucket: 'Building 🏗️' },
        { text: 'La zonificación', bucket: 'City Planning 🌆' },
        { text: 'La gentrificación', bucket: 'City Planning 🌆' },
        { text: 'El transporte integrado', bucket: 'City Planning 🌆' },
        { text: 'La densidad poblacional', bucket: 'City Planning 🌆' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Concept Sorting',

  dialogues: [
    {
      id: 'dialogue-architects-barcelona',
      title: 'Reviewing Plans in Barcelona — Studio Meeting',
      location: 'Barcelona',
      lines: [
        { speaker: 'Elena', text: 'Buenos días, Carles. ¿Ya revisaste los planos para el nuevo centro cultural?', audio: '/audio/L9.1/phrases/d1-line1.mp3' },
        { speaker: 'Carles', text: 'Sí, Elena. Me preocupa la estructura portante. Necesitamos reforzar los cimientos porque el terreno es blando.', audio: '/audio/L9.1/phrases/d1-line2.mp3' },
        { speaker: 'Elena', text: 'Entiendo. ¿Y qué opinas de la fachada? El cliente quiere algo que evoque el modernismo catalán.', audio: '/audio/L9.1/phrases/d1-line3.mp3' },
        { speaker: 'Carles', text: 'Podemos incorporar elementos orgánicos, como hacía Gaudí. Curvas en vez de líneas rectas, mosaicos de cerámica.', audio: '/audio/L9.1/phrases/d1-line4.mp3' },
        { speaker: 'Elena', text: 'Me encanta. Y para la sostenibilidad, propongo una azotea verde y paneles solares integrados.', audio: '/audio/L9.1/phrases/d1-line5.mp3', annotations: [{ phrase: 'azotea verde', fromLesson: 'L7.4', note: 'Environmental vocabulary from L7.4' }] },
        { speaker: 'Carles', text: 'Perfecto. También deberíamos considerar la ventilación natural. Barcelona tiene un clima ideal para eso.', audio: '/audio/L9.1/phrases/d1-line6.mp3' },
        { speaker: 'Elena', text: 'Sí, y si usamos hormigón armado con materiales reciclados, podríamos obtener la certificación LEED.', audio: '/audio/L9.1/phrases/d1-line7.mp3' },
        { speaker: 'Carles', text: '¿Cuántas plantas tendrá el edificio? El plano arquitectónico actual muestra cinco.', audio: '/audio/L9.1/phrases/d1-line8.mp3' },
        { speaker: 'Elena', text: 'Cinco más la azotea. Necesitaremos vigas de acero reforzadas para el auditorio del tercer piso.', audio: '/audio/L9.1/phrases/d1-line9.mp3' },
        { speaker: 'Carles', text: 'De acuerdo. Haré los cálculos estructurales esta semana. ¿Cuándo es la próxima reunión con el cliente?', audio: '/audio/L9.1/phrases/d1-line10.mp3' },
        { speaker: 'Elena', text: 'El jueves. Quiero presentarle las tres opciones de fachada con los renders 3D.', audio: '/audio/L9.1/phrases/d1-line11.mp3' },
        { speaker: 'Carles', text: 'Perfecto. También prepararé un análisis comparativo de los costos de materiales sostenibles versus convencionales.', audio: '/audio/L9.1/phrases/d1-line12.mp3' },
        { speaker: 'Elena', text: 'Excelente. Este proyecto puede ser un referente del diseño sostenible en Cataluña.', audio: '/audio/L9.1/phrases/d1-line13.mp3' },
        { speaker: 'Carles', text: 'Estoy de acuerdo. Un edificio que respete la tradición del modernismo catalán pero con tecnología del siglo XXI.', audio: '/audio/L9.1/phrases/d1-line14.mp3' },
        { speaker: 'Elena', text: '¡Exacto! Vamos a crear algo que Gaudí habría admirado.', audio: '/audio/L9.1/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-urban-bogota',
      title: 'Urban Planning Presentation — Bogotá City Hall',
      location: 'Bogotá',
      lines: [
        { speaker: 'Camila', text: 'Buenas tardes, concejales. Hoy presentaré el nuevo plan de ordenamiento territorial para la zona sur.', audio: '/audio/L9.1/phrases/d2-line1.mp3' },
        { speaker: 'Concejal Ríos', text: '¿Cuáles son los principales cambios en la zonificación?', audio: '/audio/L9.1/phrases/d2-line2.mp3' },
        { speaker: 'Camila', text: 'Proponemos cambiar de uso exclusivamente residencial a uso mixto: vivienda, comercio y oficinas en la misma zona.', audio: '/audio/L9.1/phrases/d2-line3.mp3' },
        { speaker: 'Concejal Ríos', text: '¿No aumentará eso la densidad poblacional en un área ya congestionada?', audio: '/audio/L9.1/phrases/d2-line4.mp3' },
        { speaker: 'Camila', text: 'Al contrario. El transporte público integrado que proponemos conectará la zona con TransMilenio y el futuro metro.', audio: '/audio/L9.1/phrases/d2-line5.mp3', annotations: [{ phrase: 'transporte público integrado', fromLesson: 'L3.2', note: 'Transportation vocabulary from L3.2' }] },
        { speaker: 'Concejal Vargas', text: '¿Y cómo evitaremos la gentrificación? Los residentes originales no pueden ser desplazados.', audio: '/audio/L9.1/phrases/d2-line6.mp3' },
        { speaker: 'Camila', text: 'Tenemos un plan de vivienda protegida. El treinta por ciento de las nuevas construcciones serán viviendas de interés social.', audio: '/audio/L9.1/phrases/d2-line7.mp3' },
        { speaker: 'Concejal Vargas', text: '¿Y los espacios públicos? El sector carece de parques y zonas verdes.', audio: '/audio/L9.1/phrases/d2-line8.mp3' },
        { speaker: 'Camila', text: 'El plan incluye tres nuevos parques urbanos y ciclovías que conectan con la red existente.', audio: '/audio/L9.1/phrases/d2-line9.mp3' },
        { speaker: 'Concejal Ríos', text: '¿Qué materiales se usarán en las nuevas construcciones?', audio: '/audio/L9.1/phrases/d2-line10.mp3' },
        { speaker: 'Camila', text: 'Exigiremos materiales reciclados y certificación LEED para todos los edificios de más de cinco pisos.', audio: '/audio/L9.1/phrases/d2-line11.mp3' },
        { speaker: 'Concejal Vargas', text: 'Bogotá ha sido un referente en urbanismo. ¿Cómo se compara este plan con el modelo de Medellín?', audio: '/audio/L9.1/phrases/d2-line12.mp3' },
        { speaker: 'Camila', text: 'Nos inspiramos en Medellín pero adaptamos a nuestra realidad. La regeneración urbana aquí debe priorizar la equidad social.', audio: '/audio/L9.1/phrases/d2-line13.mp3' },
        { speaker: 'Concejal Ríos', text: '¿Cuál es el cronograma de implementación?', audio: '/audio/L9.1/phrases/d2-line14.mp3' },
        { speaker: 'Camila', text: 'Fase uno en dieciocho meses: infraestructura vial y transporte. Fase dos en tres años: las nuevas edificaciones sostenibles.', audio: '/audio/L9.1/phrases/d2-line15.mp3' },
        { speaker: 'Concejal Vargas', text: 'Impresionante, arquitecta. Tiene nuestro apoyo para avanzar con la consulta ciudadana.', audio: '/audio/L9.1/phrases/d2-line16.mp3' },
        { speaker: 'Camila', text: 'Gracias, concejales. Juntos construiremos una Bogotá más justa y sostenible.', audio: '/audio/L9.1/phrases/d2-line17.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Review architectural plans for a cultural center in Barcelona and present an urban development project at Bogotá City Hall.',

  culturalNotes: [
    {
      title: 'Gaudí y el Modernismo Catalán',
      content: 'Antoni Gaudí (1852-1926) transformed Barcelona into an open-air museum. His masterpiece, the Sagrada Familia, has been under construction since 1882 and is expected to be completed in 2026. Gaudí\'s "modernismo catalán" rejected straight lines in favor of organic forms inspired by nature — tree-like columns, bone-shaped structures, and hyperbolic paraboloid surfaces. Park Güell, Casa Batlló, and La Pedrera are UNESCO World Heritage sites. When discussing architecture in Barcelona, locals say "Gaudí no copió la naturaleza, la entendió" (Gaudí didn\'t copy nature, he understood it).',
    },
    {
      title: 'Arquitectura Colonial en América Latina',
      content: 'Spanish colonial architecture (16th-19th century) left an indelible mark across Latin America. Cities like Cartagena, Antigua Guatemala, Oaxaca, and Cusco showcase this style: thick walls, interior courtyards (patios), ornate churches with baroque facades, and colored plaster. The colonial style blended Spanish, indigenous, and sometimes African building traditions — creating something uniquely American. UNESCO has designated many colonial centers as World Heritage sites. "El centro histórico" (the historic center) is a phrase you\'ll hear in every Latin American city, often referring to these colonial-era districts.',
    },
    {
      title: 'Urbanismo Sostenible: Medellín y Curitiba',
      content: 'Two Latin American cities are global models for sustainable urbanism. Medellín, Colombia, transformed from one of the world\'s most violent cities to an urban innovation leader through "urbanismo social": cable cars connecting poor hillside neighborhoods to the city center, library-parks in underserved areas, and the famous escaleras eléctricas (outdoor escalators) in Comuna 13. Curitiba, Brazil, pioneered the Bus Rapid Transit (BRT) system in the 1970s, which inspired TransMilenio in Bogotá and similar systems worldwide. Both cities prove that "el buen urbanismo puede transformar vidas" (good urbanism can transform lives).',
    },
  ],
  culturalGradient: 'from-amber-50 to-orange-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El hormigón armado" is:', options: ['Plain concrete', 'Reinforced concrete', 'Cement mortar', 'Steel frame'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La ___ verde ayuda a regular la temperatura interior" (green roof)', answer: 'azotea' },
    { id: 3, type: 'mc', text: 'The horseshoe arch (arco de herradura) is typical of:', options: ['Gothic architecture', 'Baroque architecture', 'Islamic architecture', 'Neoclassical architecture'], answer: 2 },
    { id: 4, type: 'tf', text: 'La gentrificación desplaza a los residentes originales del barrio.', answer: true },
    { id: 5, type: 'mc', text: '"Los cimientos" refers to:', options: ['The roof', 'The facade', 'The foundations', 'The scaffolding'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "El ___ arquitectónico muestra la distribución de espacios" (plan)', answer: 'plano' },
    { id: 7, type: 'mc', text: 'Catalan modernism was led by:', options: ['Pablo Picasso', 'Antoni Gaudí', 'Santiago Calatrava', 'Oscar Niemeyer'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what certification do the architects want to obtain?', options: ['ISO 9001', 'LEED', 'BREEAM', 'Passivhaus'], answer: 1 },
    { id: 9, type: 'tf', text: 'La certificación LEED garantiza estándares de sostenibilidad en la construcción.', answer: true },
    { id: 10, type: 'mc', text: '"La zonificación" means:', options: ['Renovation', 'Demolition', 'Zoning', 'Insulation'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ portante resiste las cargas del edificio" (structure)', answer: 'estructura' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what percentage of new constructions will be social housing?', options: ['Ten percent', 'Twenty percent', 'Thirty percent', 'Fifty percent'], answer: 2 },
    { id: 13, type: 'mc', text: '"El andamio" is used for:', options: ['Measuring distances', 'Mixing concrete', 'Working at height', 'Drawing plans'], answer: 2 },
    { id: 14, type: 'tf', text: 'Medellín installed outdoor escalators (escaleras eléctricas) in Comuna 13 as part of its urban transformation.', answer: true },
    { id: 15, type: 'mc', text: '"La ventilación natural" reduces:', options: ['Building height', 'Construction time', 'Energy consumption', 'Material costs'], answer: 2 },
  ],

  audioBase: '/audio/L9.1/phrases',

  uniqueActivity: {
    id: 'BlueprintReaderL91',
    sectionId: 'blueprint-reader',
    sectionColor: 'bg-amber-50/40',
    sectionBorder: 'border-amber-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'architectural-styles': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'construction-vocab': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'urban-planning': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'sustainable-design': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'blueprint-reader': { bg: 'bg-amber-50/40', border: 'border-amber-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
