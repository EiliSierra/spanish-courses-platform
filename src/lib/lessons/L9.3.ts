import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Farming & Crops (12) ===
  { spanish: 'La cosecha de maíz fue abundante este año', english: 'The corn harvest was abundant this year', pronunciation: 'lah koh-SEH-chah deh mah-EES fweh ah-boon-DAHN-teh EHS-teh AH-nyoh', category: 'farming-crops', audio: 'la-cosecha-de-maiz' },
  { spanish: 'La siembra comienza en marzo con las primeras lluvias', english: 'Planting begins in March with the first rains', pronunciation: 'lah see-EHM-brah koh-mee-EHN-sah ehn MAHR-soh kohn lahs pree-MEH-rahs YOO-bee-ahs', category: 'farming-crops', audio: 'la-siembra-comienza' },
  { spanish: 'Instalamos riego por goteo para ahorrar agua', english: 'We installed drip irrigation to save water', pronunciation: 'een-stah-LAH-mohs ree-EH-goh pohr goh-TEH-oh PAH-rah ah-oh-RRAHR AH-gwah', category: 'farming-crops', audio: 'riego-por-goteo' },
  { spanish: 'El cultivo rotativo mejora la fertilidad del suelo', english: 'Crop rotation improves soil fertility', pronunciation: 'ehl kool-TEE-boh roh-tah-TEE-boh meh-HOH-rah lah fehr-tee-lee-DAHD dehl SWEH-loh', category: 'farming-crops', audio: 'cultivo-rotativo' },
  { spanish: 'Mi parcela tiene dos hectáreas de café', english: 'My plot has two hectares of coffee', pronunciation: 'mee pahr-SEH-lah tee-EH-neh dohs ehk-TAH-reh-ahs deh kah-FEH', category: 'farming-crops', audio: 'mi-parcela-cafe' },
  { spanish: 'El invernadero protege los tomates de las heladas', english: 'The greenhouse protects the tomatoes from frost', pronunciation: 'ehl een-behr-nah-DEH-roh proh-TEH-heh lohs toh-MAH-tehs deh lahs eh-LAH-dahs', category: 'farming-crops', audio: 'invernadero-tomates' },
  { spanish: 'Usamos abono orgánico en lugar de químicos', english: 'We use organic fertilizer instead of chemicals', pronunciation: 'oo-SAH-mohs ah-BOH-noh ohr-GAH-nee-koh ehn loo-GAHR deh KEE-mee-kohs', category: 'farming-crops', audio: 'abono-organico' },
  { spanish: 'La temporada de siembra varía según la región', english: 'The planting season varies by region', pronunciation: 'lah tehm-poh-RAH-dah deh see-EHM-brah bah-REE-ah seh-GOON lah reh-hee-OHN', category: 'farming-crops', audio: 'temporada-de-siembra' },
  { spanish: 'Los surcos deben estar bien alineados para el riego', english: 'The furrows must be well aligned for irrigation', pronunciation: 'lohs SOOR-kohs DEH-behn ehs-TAHR bee-ehn ah-lee-neh-AH-dohs PAH-rah ehl ree-EH-goh', category: 'farming-crops', audio: 'surcos-alineados' },
  { spanish: 'La tierra necesita descansar entre temporadas', english: 'The land needs to rest between seasons', pronunciation: 'lah tee-EH-rrah neh-seh-SEE-tah dehs-kahn-SAHR EHN-treh tehm-poh-RAH-dahs', category: 'farming-crops', audio: 'tierra-descansar' },
  { spanish: 'El arado prepara la tierra para la nueva siembra', english: 'The plow prepares the soil for the new planting', pronunciation: 'ehl ah-RAH-doh preh-PAH-rah lah tee-EH-rrah PAH-rah lah NWEH-bah see-EHM-brah', category: 'farming-crops', audio: 'arado-prepara' },
  { spanish: 'Las plagas destruyeron la mitad del cultivo', english: 'Pests destroyed half the crop', pronunciation: 'lahs PLAH-gahs dehs-troo-YEH-rohn lah mee-TAHD dehl kool-TEE-boh', category: 'farming-crops', audio: 'plagas-destruyeron' },

  // === Livestock & Animals (12) ===
  { spanish: 'El ganado vacuno pasta en los prados verdes', english: 'The cattle graze in the green meadows', pronunciation: 'ehl gah-NAH-doh bah-KOO-noh PAHS-tah ehn lohs PRAH-dohs BEHR-dehs', category: 'livestock-animals', audio: 'ganado-vacuno' },
  { spanish: 'La ganadería extensiva requiere mucha tierra', english: 'Extensive cattle farming requires a lot of land', pronunciation: 'lah gah-nah-deh-REE-ah ehks-tehn-SEE-bah reh-kee-EH-reh MOO-chah tee-EH-rrah', category: 'livestock-animals', audio: 'ganaderia-extensiva' },
  { spanish: 'El pastoreo debe ser controlado para evitar la erosión', english: 'Grazing must be controlled to prevent erosion', pronunciation: 'ehl pahs-toh-REH-oh DEH-beh sehr kohn-troh-LAH-doh PAH-rah eh-bee-TAHR lah eh-roh-see-OHN', category: 'livestock-animals', audio: 'pastoreo-controlado' },
  { spanish: 'La trashumancia es el traslado estacional del ganado', english: 'Transhumance is the seasonal movement of livestock', pronunciation: 'lah trahs-oo-MAHN-see-ah ehs ehl trahs-LAH-doh ehs-tah-see-oh-NAHL dehl gah-NAH-doh', category: 'livestock-animals', audio: 'trashumancia' },
  { spanish: 'La cría de aves incluye pollos y gallinas ponedoras', english: 'Poultry farming includes chickens and laying hens', pronunciation: 'lah KREE-ah deh AH-behs een-KLOO-yeh POH-yohs ee gah-YEE-nahs poh-neh-DOH-rahs', category: 'livestock-animals', audio: 'cria-de-aves' },
  { spanish: 'El ordeño se hace a las cinco de la mañana', english: 'Milking is done at five in the morning', pronunciation: 'ehl ohr-DEH-nyoh seh AH-seh ah lahs SEEN-koh deh lah mah-NYAH-nah', category: 'livestock-animals', audio: 'ordeno-manana' },
  { spanish: 'La inseminación artificial mejora la genética del rebaño', english: 'Artificial insemination improves the herd genetics', pronunciation: 'lah een-seh-mee-nah-see-OHN ahr-tee-fee-see-AHL meh-HOH-rah lah heh-NEH-tee-kah dehl reh-BAH-nyoh', category: 'livestock-animals', audio: 'inseminacion-artificial' },
  { spanish: 'Las ovejas producen lana de alta calidad', english: 'The sheep produce high-quality wool', pronunciation: 'lahs oh-BEH-hahs proh-DOO-sehn LAH-nah deh AHL-tah kah-lee-DAHD', category: 'livestock-animals', audio: 'ovejas-lana' },
  { spanish: 'El veterinario revisa al ganado cada mes', english: 'The veterinarian checks the cattle every month', pronunciation: 'ehl beh-teh-ree-NAH-ree-oh reh-BEE-sah ahl gah-NAH-doh KAH-dah mehs', category: 'livestock-animals', audio: 'veterinario-ganado' },
  { spanish: 'Los cerdos se alimentan con maíz y soya', english: 'The pigs are fed with corn and soy', pronunciation: 'lohs SEHR-dohs seh ah-lee-MEHN-tahn kohn mah-EES ee SOH-yah', category: 'livestock-animals', audio: 'cerdos-maiz-soya' },
  { spanish: 'El corral debe estar limpio para prevenir enfermedades', english: 'The pen must be clean to prevent diseases', pronunciation: 'ehl koh-RRAHL DEH-beh ehs-TAHR LEEM-pee-oh PAH-rah preh-beh-NEER ehn-fehr-meh-DAH-dehs', category: 'livestock-animals', audio: 'corral-limpio' },
  { spanish: 'La marca del ganado identifica al propietario', english: 'The cattle brand identifies the owner', pronunciation: 'lah MAHR-kah dehl gah-NAH-doh ee-dehn-tee-FEE-kah ahl proh-pee-eh-TAH-ree-oh', category: 'livestock-animals', audio: 'marca-ganado' },

  // === Organic & Sustainable Agriculture (12) ===
  { spanish: 'La agricultura orgánica no usa pesticidas sintéticos', english: 'Organic agriculture does not use synthetic pesticides', pronunciation: 'lah ah-gree-kool-TOO-rah ohr-GAH-nee-kah noh OO-sah pehs-tee-SEE-dahs seen-TEH-tee-kohs', category: 'organic-sustainable', audio: 'agricultura-organica' },
  { spanish: 'El comercio justo garantiza un precio digno al productor', english: 'Fair trade guarantees a fair price to the producer', pronunciation: 'ehl koh-MEHR-see-oh HOOS-toh gah-rahn-TEE-sah oon PREH-see-oh DEEG-noh ahl proh-dook-TOHR', category: 'organic-sustainable', audio: 'comercio-justo' },
  { spanish: 'Los pesticidas naturales protegen sin contaminar', english: 'Natural pesticides protect without contaminating', pronunciation: 'lohs pehs-tee-SEE-dahs nah-too-RAH-lehs proh-TEH-hehn seen kohn-tah-mee-NAHR', category: 'organic-sustainable', audio: 'pesticidas-naturales' },
  { spanish: 'La permacultura imita los patrones de la naturaleza', english: 'Permaculture imitates the patterns of nature', pronunciation: 'lah pehr-mah-kool-TOO-rah ee-MEE-tah lohs pah-TROH-nehs deh lah nah-too-rah-LEH-sah', category: 'organic-sustainable', audio: 'permacultura' },
  { spanish: 'La soberanía alimentaria es un derecho de los pueblos', english: 'Food sovereignty is a right of the people', pronunciation: 'lah soh-beh-rah-NEE-ah ah-lee-mehn-TAH-ree-ah ehs oon deh-REH-choh deh lohs PWEH-blohs', category: 'organic-sustainable', audio: 'soberania-alimentaria' },
  { spanish: 'La agricultura regenerativa restaura los ecosistemas', english: 'Regenerative agriculture restores ecosystems', pronunciation: 'lah ah-gree-kool-TOO-rah reh-heh-neh-rah-TEE-bah rrehs-tah-OO-rah lohs eh-koh-sees-TEH-mahs', category: 'organic-sustainable', audio: 'agricultura-regenerativa' },
  { spanish: 'El compostaje transforma los desechos en nutrientes', english: 'Composting transforms waste into nutrients', pronunciation: 'ehl kohm-pohs-TAH-heh trahns-FOHR-mah lohs deh-SEH-chohs ehn noo-tree-EHN-tehs', category: 'organic-sustainable', audio: 'compostaje' },
  { spanish: 'La certificación orgánica toma al menos tres años', english: 'Organic certification takes at least three years', pronunciation: 'lah sehr-tee-fee-kah-see-OHN ohr-GAH-nee-kah TOH-mah ahl MEH-nohs trehs AH-nyohs', category: 'organic-sustainable', audio: 'certificacion-organica' },
  { spanish: 'Los mercados locales apoyan a los pequeños productores', english: 'Local markets support small producers', pronunciation: 'lohs mehr-KAH-dohs loh-KAH-lehs ah-POH-yahn ah lohs peh-KEH-nyohs proh-dook-TOH-rehs', category: 'organic-sustainable', audio: 'mercados-locales' },
  { spanish: 'La rotación de cultivos previene el agotamiento del suelo', english: 'Crop rotation prevents soil depletion', pronunciation: 'lah roh-tah-see-OHN deh kool-TEE-bohs preh-bee-EH-neh ehl ah-goh-tah-mee-EHN-toh dehl SWEH-loh', category: 'organic-sustainable', audio: 'rotacion-cultivos' },
  { spanish: 'El control biológico usa insectos beneficiosos', english: 'Biological control uses beneficial insects', pronunciation: 'ehl kohn-TROHL bee-oh-LOH-hee-koh OO-sah een-SEHK-tohs beh-neh-fee-see-OH-sohs', category: 'organic-sustainable', audio: 'control-biologico' },
  { spanish: 'La huella de carbono agrícola se puede reducir', english: 'The agricultural carbon footprint can be reduced', pronunciation: 'lah WEH-yah deh kahr-BOH-noh ah-GREE-koh-lah seh PWEH-deh reh-doo-SEER', category: 'organic-sustainable', audio: 'huella-carbono-agricola' },

  // === Rural Customs & Traditions (12) ===
  { spanish: 'La feria ganadera reúne a productores de toda la región', english: 'The livestock fair brings together producers from the whole region', pronunciation: 'lah FEH-ree-ah gah-nah-DEH-rah reh-OO-neh ah proh-dook-TOH-rehs deh TOH-dah lah reh-hee-OHN', category: 'rural-customs', audio: 'feria-ganadera' },
  { spanish: 'La vendimia celebra la cosecha de la uva', english: 'The grape harvest celebration marks the grape picking', pronunciation: 'lah behn-DEE-mee-ah seh-LEH-brah lah koh-SEH-chah deh lah OO-bah', category: 'rural-customs', audio: 'vendimia' },
  { spanish: 'La matanza es una tradición rural de preparar carne', english: 'The slaughter is a rural tradition of preparing meat', pronunciation: 'lah mah-TAHN-sah ehs OO-nah trah-dee-see-OHN roo-RAHL deh preh-pah-RAHR KAHR-neh', category: 'rural-customs', audio: 'matanza-tradicion' },
  { spanish: 'El trueque era la forma original de comercio', english: 'Bartering was the original form of trade', pronunciation: 'ehl TRWEH-keh EH-rah lah FOHR-mah oh-ree-hee-NAHL deh koh-MEHR-see-oh', category: 'rural-customs', audio: 'trueque' },
  { spanish: 'La minga comunitaria reúne vecinos para trabajo colectivo', english: 'The community minga gathers neighbors for collective work', pronunciation: 'lah MEEN-gah koh-moo-nee-TAH-ree-ah reh-OO-neh beh-SEE-nohs PAH-rah trah-BAH-hoh koh-lehk-TEE-boh', category: 'rural-customs', audio: 'minga-comunitaria' },
  { spanish: 'Las fiestas patronales del pueblo duran varios días', english: 'The town patron saint festivals last several days', pronunciation: 'lahs fee-EHS-tahs pah-troh-NAH-lehs dehl PWEH-bloh DOO-rahn BAH-ree-ohs DEE-ahs', category: 'rural-customs', audio: 'fiestas-patronales' },
  { spanish: 'Los arrieros transportaban mercancías a lomo de mula', english: 'Muleteers transported goods by mule', pronunciation: 'lohs ah-ree-EH-rohs trahns-pohr-TAH-bahn mehr-kahn-SEE-ahs ah LOH-moh deh MOO-lah', category: 'rural-customs', audio: 'arrieros' },
  { spanish: 'La fogata reúne a la familia después de la jornada', english: 'The bonfire brings the family together after the workday', pronunciation: 'lah foh-GAH-tah reh-OO-neh ah lah fah-MEE-lee-ah dehs-PWEHS deh lah hohr-NAH-dah', category: 'rural-customs', audio: 'fogata-familia' },
  { spanish: 'El mercado campesino se instala cada domingo', english: 'The farmers market is set up every Sunday', pronunciation: 'ehl mehr-KAH-doh kahm-peh-SEE-noh seh een-STAH-lah KAH-dah doh-MEEN-goh', category: 'rural-customs', audio: 'mercado-campesino' },
  { spanish: 'La rodada reúne a los jinetes del valle', english: 'The ride gathers the horsemen of the valley', pronunciation: 'lah roh-DAH-dah reh-OO-neh ah lohs hee-NEH-tehs dehl BAH-yeh', category: 'rural-customs', audio: 'rodada-jinetes' },
  { spanish: 'La cosecha se celebra con música y comida típica', english: 'The harvest is celebrated with music and traditional food', pronunciation: 'lah koh-SEH-chah seh seh-LEH-brah kohn MOO-see-kah ee koh-MEE-dah TEE-pee-kah', category: 'rural-customs', audio: 'cosecha-musica' },
  { spanish: 'Las cooperativas agrícolas fortalecen a los campesinos', english: 'Agricultural cooperatives strengthen the farmers', pronunciation: 'lahs koh-oh-peh-rah-TEE-bahs ah-GREE-koh-lahs fohr-tah-LEH-sehn ah lohs kahm-peh-SEE-nohs', category: 'rural-customs', audio: 'cooperativas-agricolas' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L93PhraseByAudio = phraseByAudio

// === HARVEST PLANNER (unique activity) ===

export interface HarvestPlannerChallenge {
  scenario: string
  english: string
  correctAction: string
  options: string[]
}

export const HARVEST_PLANNER_CHALLENGES: HarvestPlannerChallenge[] = [
  {
    scenario: 'Las lluvias llegarán en dos semanas y la tierra está seca. ¿Qué debe hacer el agricultor?',
    english: 'The rains will arrive in two weeks and the soil is dry. What should the farmer do?',
    correctAction: 'Preparar los surcos y el sistema de riego por goteo',
    options: ['Preparar los surcos y el sistema de riego por goteo', 'Cosechar todo el maíz inmediatamente', 'Aplicar pesticidas sintéticos al suelo', 'Vender la parcela al vecino'],
  },
  {
    scenario: 'Las plagas están atacando los tomates en el invernadero orgánico. ¿Cuál es la mejor solución?',
    english: 'Pests are attacking the tomatoes in the organic greenhouse. What is the best solution?',
    correctAction: 'Introducir insectos beneficiosos como control biológico',
    options: ['Introducir insectos beneficiosos como control biológico', 'Fumigar con pesticidas químicos industriales', 'Cerrar el invernadero y abandonar el cultivo', 'Regar más frecuentemente las plantas'],
  },
  {
    scenario: 'El suelo de la parcela está agotado después de tres años de monocultivo. ¿Qué práctica implementaría?',
    english: 'The plot soil is depleted after three years of monoculture. What practice would you implement?',
    correctAction: 'Implementar cultivo rotativo con leguminosas',
    options: ['Implementar cultivo rotativo con leguminosas', 'Continuar con el mismo cultivo y más fertilizante', 'Quemar los rastrojos para limpiar el terreno', 'Dejar la tierra sin usar permanentemente'],
  },
  {
    scenario: 'La comunidad quiere construir un nuevo canal de riego. ¿Cómo organizarían el trabajo?',
    english: 'The community wants to build a new irrigation canal. How would they organize the work?',
    correctAction: 'Organizar una minga comunitaria con todos los vecinos',
    options: ['Organizar una minga comunitaria con todos los vecinos', 'Contratar una empresa extranjera costosa', 'Esperar a que el gobierno lo construya solo', 'Cada agricultor construye su propio canal individual'],
  },
  {
    scenario: 'Un pequeño productor de café quiere vender a mejor precio. ¿Qué debería buscar?',
    english: 'A small coffee producer wants to sell at a better price. What should they look for?',
    correctAction: 'Obtener certificación de comercio justo',
    options: ['Obtener certificación de comercio justo', 'Vender todo a intermediarios locales baratos', 'Reducir la calidad para producir más cantidad', 'Cambiar de café a un cultivo más fácil'],
  },
  {
    scenario: 'Es época de vendimia y hay muchas uvas maduras. ¿Cuál es la prioridad?',
    english: 'It is grape harvest time and there are many ripe grapes. What is the priority?',
    correctAction: 'Cosechar rápidamente y comenzar el proceso de vinificación',
    options: ['Cosechar rápidamente y comenzar el proceso de vinificación', 'Esperar dos meses más para que maduren aún más', 'Dejar que los pájaros se coman las uvas sobrantes', 'Aplicar más riego a las viñas maduras'],
  },
  {
    scenario: 'El ganado necesita moverse a nuevos pastos porque el prado actual está desgastado. ¿Qué práctica tradicional aplicaría?',
    english: 'The cattle need to move to new pastures because the current meadow is worn out. What traditional practice would you apply?',
    correctAction: 'Practicar la trashumancia hacia pastos de montaña',
    options: ['Practicar la trashumancia hacia pastos de montaña', 'Mantener todo el ganado en el mismo prado', 'Reducir el rebaño a la mitad inmediatamente', 'Alimentar con granos importados exclusivamente'],
  },
]

// === LESSON DATA ===

export const L93Data: LessonData = {
  id: 'L9.3',
  hero: {
    lessonId: 'L9.3',
    title: 'Agriculture & Rural Life',
    subtitle: 'From seed to table — the language of the land',
    description: 'Master the specialized vocabulary of farming, livestock, organic agriculture, and rural customs across the Spanish-speaking world. From ancient indigenous techniques to modern sustainable practices, learn to discuss the food supply chain and the traditions that sustain rural communities.',
    image: '/images/L9.3/L9.3.jpg',
    gradient: 'from-emerald-800/65 via-green-700/55 to-lime-700/65',
    accentColor: 'emerald-200',
  },

  objectives: [
    { icon: '🌾', title: 'Farming & Crops', desc: 'Discuss planting, harvesting, irrigation, and crop management with technical vocabulary.' },
    { icon: '🐄', title: 'Livestock & Animals', desc: 'Talk about cattle farming, grazing, breeding, and animal husbandry practices.' },
    { icon: '🌿', title: 'Organic & Sustainable', desc: 'Explore organic agriculture, fair trade, permaculture, and food sovereignty concepts.' },
    { icon: '🎊', title: 'Rural Customs', desc: 'Understand traditional rural celebrations, community work, and agricultural heritage.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L7.4', label: 'Environmental & Scientific', detail: 'L7.4 introduced environmental vocabulary and scientific concepts. Now apply them to agriculture and sustainability.' },
    { fromLesson: 'L3.4', label: 'Cooking & Ingredients', detail: 'L3.4 covered food and cooking. Now learn where that food comes from — the farm-to-table journey.' },
    { fromLesson: 'L6.7', label: 'History of Spanish', detail: 'L6.7 explored linguistic history. Many agricultural terms have indigenous (Nahuatl, Quechua) origins.' },
  ],

  sectionTransitions: [
    { afterSection: 'farming-crops', text: 'Great work with farming vocabulary! Now let\'s meet the animals of the farm.' },
    { afterSection: 'livestock-animals', text: 'You know the livestock! Let\'s explore how to farm sustainably.' },
    { afterSection: 'organic-sustainable', text: 'Sustainability mastered! Time to discover the rich customs of rural life.' },
    { afterSection: 'dialogues', text: 'Wonderful conversations about farming! Let\'s explore agricultural culture.' },
    { afterSection: 'cultural', text: 'Now put your knowledge to the test in the Harvest Planner!' },
    { afterSection: 'harvest-planner', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Sembrar la semilla...', english: 'To sow the seed...' },
    { spanish: 'La tierra fértil...', english: 'The fertile land...' },
    { spanish: 'Cosechar los frutos...', english: 'To harvest the fruits...' },
    { spanish: 'Ganado de pastoreo...', english: 'Grazing livestock...' },
    { spanish: 'Producción orgánica...', english: 'Organic production...' },
    { spanish: 'La vida del campo...', english: 'Country life...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La trashumancia lleva siglos practicándose', pronunciation: 'lah trahs-oo-MAHN-see-ah YEH-bah SEE-glohs prahk-tee-KAHN-doh-seh', english: 'Transhumance has been practiced for centuries', audio: 'la-trashumancia-lleva-siglos-practicandose', tip: '"Trashumancia" has Latin roots: trans (across) + humus (ground). Stress falls on -MAN-. The "h" is always silent in Spanish.' },
    { spanish: 'El riego por goteo ahorra un sesenta por ciento de agua', pronunciation: 'ehl ree-EH-goh pohr goh-TEH-oh ah-OH-rrah oon seh-SEHN-tah pohr see-EHN-toh deh AH-gwah', english: 'Drip irrigation saves sixty percent of water', audio: 'el-riego-por-goteo-ahorra-un-sesenta-por-ciento-de-agua', tip: '"Riego" comes from "regar" (to irrigate). The diphthong "ie" is pronounced as one syllable: ree-EH-goh.' },
    { spanish: 'La soberanía alimentaria protege a los pueblos indígenas', pronunciation: 'lah soh-beh-rah-NEE-ah ah-lee-mehn-TAH-ree-ah proh-TEH-heh ah lohs PWEH-blohs een-DEE-heh-nahs', english: 'Food sovereignty protects indigenous peoples', audio: 'la-soberania-alimentaria-protege-a-los-pueblos-indigenas', tip: '"Soberanía" has the stress on the í: soh-beh-rah-NEE-ah. "Alimentaria" relates to "alimento" (food/nourishment).' },
    { spanish: 'La permacultura imita los ciclos naturales del ecosistema', pronunciation: 'lah pehr-mah-kool-TOO-rah ee-MEE-tah lohs SEE-klohs nah-too-RAH-lehs dehl eh-koh-sees-TEH-mah', english: 'Permaculture imitates the natural cycles of the ecosystem', audio: 'la-permacultura-imita-los-ciclos-naturales-del-ecosistema', tip: '"Permacultura" blends "permanente" + "cultura." Stress on -TU-: pehr-mah-kool-TOO-rah.' },
    { spanish: 'La vendimia es una fiesta en los valles de Mendoza', pronunciation: 'lah behn-DEE-mee-ah ehs OO-nah fee-EHS-tah ehn lohs BAH-yehs deh mehn-DOH-sah', english: 'The grape harvest is a festival in the valleys of Mendoza', audio: 'la-vendimia-es-una-fiesta-en-los-valles-de-mendoza', tip: '"Vendimia" comes from Latin vindemia (grape gathering). The "v" is pronounced like a soft "b" in Spanish: behn-DEE-mee-ah.' },
    { spanish: 'La minga comunitaria fortalece los lazos entre vecinos', pronunciation: 'lah MEEN-gah koh-moo-nee-TAH-ree-ah fohr-tah-LEH-seh lohs LAH-sohs EHN-treh beh-SEE-nohs', english: 'The community minga strengthens bonds between neighbors', audio: 'la-minga-comunitaria-fortalece-los-lazos-entre-vecinos', tip: '"Minga" is a Quechua word (mink\'a) meaning communal work. It shows how indigenous languages enriched Spanish agricultural vocabulary.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'farming-crops', label: 'Farming & Crops' },
    { id: 'livestock-animals', label: 'Livestock & Animals' },
    { id: 'organic-sustainable', label: 'Organic & Sustainable' },
    { id: 'rural-customs', label: 'Rural Customs' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'harvest-planner', label: 'Harvest Planner' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'farming-crops',
      title: 'Farming & Crops — Agricultura y Cultivos',
      description: 'Essential vocabulary for planting, harvesting, irrigation systems, and crop management across different regions.',
      tabs: [
        { label: 'Planting & Harvest', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'farming-crops').slice(0, 6) },
        { label: 'Land & Techniques', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'farming-crops').slice(6) },
      ],
    },
    {
      id: 'livestock-animals',
      title: 'Livestock & Animals — Ganadería y Animales',
      description: 'From cattle ranching to poultry farming — the vocabulary of animal husbandry and traditional herding practices.',
      tabs: [
        { label: 'Cattle & Grazing', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'livestock-animals').slice(0, 6) },
        { label: 'Breeding & Care', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'livestock-animals').slice(6) },
      ],
    },
    {
      id: 'organic-sustainable',
      title: 'Organic & Sustainable Agriculture — Agricultura Orgánica y Sostenible',
      description: 'Modern sustainable farming practices, fair trade, permaculture, and the movement toward food sovereignty.',
      tabs: [
        { label: 'Organic Practices', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'organic-sustainable').slice(0, 6) },
        { label: 'Sustainability & Markets', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'organic-sustainable').slice(6) },
      ],
    },
    {
      id: 'rural-customs',
      title: 'Rural Customs & Traditions — Costumbres y Tradiciones Rurales',
      description: 'The celebrations, communal practices, and time-honored customs that define rural life across Latin America and Spain.',
      tabs: [
        { label: 'Festivals & Traditions', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'rural-customs').slice(0, 6) },
        { label: 'Community & Heritage', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'rural-customs').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Indigenous Agricultural Words in Spanish',
      content: 'Many farming terms in Latin American Spanish come from indigenous languages. "Minga" (communal work) is Quechua, "milpa" (corn field) is Nahuatl, "chacra" (small farm) is Quechua. These words have been fully adopted into regional Spanish and are essential for discussing agriculture in the Americas.',
      example: 'La minga | La milpa | La chacra | El maíz (from Taíno: mahís)',
    },
    {
      title: 'Technical vs. Everyday Agricultural Terms',
      content: 'Agricultural Spanish has both technical and colloquial registers. "Ganado vacuno" (cattle) is formal; "las vacas" (the cows) is everyday. "Cultivo rotativo" is technical; "cambiar lo que se siembra" is how a farmer might say it. Knowing both registers helps you communicate with experts and rural communities alike.',
      example: 'Formal: inseminación artificial | Everyday: cruzar el ganado',
      reviewFrom: 'L7.4',
    },
    {
      title: 'Regional Variation in Farm Vocabulary',
      content: 'Farm vocabulary varies significantly across the Spanish-speaking world. A farm is "finca" in Colombia, "estancia" in Argentina, "rancho" in Mexico, "hacienda" historically. A farmer is "campesino," "agricultor," "granjero," or "chacarero" depending on the country. Context and region determine the right word.',
      example: 'Finca (CO) = Estancia (AR) = Rancho (MX) = Granja (ES)',
      reviewFrom: 'L6.7',
    },
    {
      title: 'Compound Agricultural Terms',
      content: 'Many agricultural concepts use compound phrases: "riego por goteo" (drip irrigation), "cultivo rotativo" (crop rotation), "comercio justo" (fair trade), "agricultura orgánica" (organic agriculture). The adjective typically follows the noun in Spanish, unlike English.',
      example: 'Riego por goteo = drip irrigation | Ganado vacuno = cattle (lit. bovine livestock)',
    },
  ],

  flashcardGroups: [
    {
      key: 'farming',
      label: 'Farming & Crops',
      audioKeys: ['la-cosecha-de-maiz', 'la-siembra-comienza', 'riego-por-goteo', 'cultivo-rotativo', 'mi-parcela-cafe', 'invernadero-tomates', 'abono-organico', 'temporada-de-siembra', 'surcos-alineados', 'tierra-descansar', 'arado-prepara', 'plagas-destruyeron'],
    },
    {
      key: 'livestock',
      label: 'Livestock & Animals',
      audioKeys: ['ganado-vacuno', 'ganaderia-extensiva', 'pastoreo-controlado', 'trashumancia', 'cria-de-aves', 'ordeno-manana', 'inseminacion-artificial', 'ovejas-lana', 'veterinario-ganado', 'cerdos-maiz-soya', 'corral-limpio', 'marca-ganado'],
    },
    {
      key: 'organic-rural',
      label: 'Organic & Rural',
      audioKeys: ['agricultura-organica', 'comercio-justo', 'pesticidas-naturales', 'permacultura', 'soberania-alimentaria', 'feria-ganadera', 'vendimia', 'minga-comunitaria', 'fiestas-patronales', 'cooperativas-agricolas'],
    },
  ],

  matchPairs: [
    { left: 'La cosecha', right: 'The harvest' },
    { left: 'El riego por goteo', right: 'Drip irrigation' },
    { left: 'El ganado vacuno', right: 'Cattle' },
    { left: 'La trashumancia', right: 'Transhumance' },
    { left: 'El comercio justo', right: 'Fair trade' },
    { left: 'La vendimia', right: 'Grape harvest' },
    { left: 'La minga', right: 'Community work' },
    { left: 'La permacultura', right: 'Permaculture' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Farming Practice Type',
      instruction: 'Is this a traditional or modern sustainable practice?',
      buckets: ['Traditional 🌾', 'Modern Sustainable 🌿'],
      items: [
        { text: 'La trashumancia', bucket: 'Traditional 🌾' },
        { text: 'La minga comunitaria', bucket: 'Traditional 🌾' },
        { text: 'La vendimia', bucket: 'Traditional 🌾' },
        { text: 'El trueque', bucket: 'Traditional 🌾' },
        { text: 'El riego por goteo', bucket: 'Modern Sustainable 🌿' },
        { text: 'La permacultura', bucket: 'Modern Sustainable 🌿' },
        { text: 'El control biológico', bucket: 'Modern Sustainable 🌿' },
        { text: 'La certificación orgánica', bucket: 'Modern Sustainable 🌿' },
      ],
    },
    {
      title: 'Crops vs. Livestock',
      instruction: 'Does this term relate to crops or livestock?',
      buckets: ['Crops 🌽', 'Livestock 🐄'],
      items: [
        { text: 'La siembra', bucket: 'Crops 🌽' },
        { text: 'El invernadero', bucket: 'Crops 🌽' },
        { text: 'La cosecha', bucket: 'Crops 🌽' },
        { text: 'El cultivo rotativo', bucket: 'Crops 🌽' },
        { text: 'El ordeño', bucket: 'Livestock 🐄' },
        { text: 'La trashumancia', bucket: 'Livestock 🐄' },
        { text: 'El pastoreo', bucket: 'Livestock 🐄' },
        { text: 'La inseminación artificial', bucket: 'Livestock 🐄' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Vocabulary Sorting',

  dialogues: [
    {
      id: 'dialogue-organic-farm',
      title: 'An Organic Farm in Oaxaca — Mexico',
      location: 'Oaxaca, Mexico',
      lines: [
        { speaker: 'Doña Carmen', text: 'Bienvenidos a nuestra parcela orgánica. Aquí cultivamos maíz, frijol y calabaza juntos.', audio: '/audio/L9.3/phrases/d1-line1.mp3' },
        { speaker: 'Miguel', text: '¿Por qué siembran los tres cultivos juntos? Eso es la milpa, ¿verdad?', audio: '/audio/L9.3/phrases/d1-line2.mp3' },
        { speaker: 'Doña Carmen', text: 'Exacto. La milpa es sabiduría ancestral. El maíz crece alto, el frijol le da nitrógeno al suelo, y la calabaza cubre la tierra para retener humedad.', audio: '/audio/L9.3/phrases/d1-line3.mp3' },
        { speaker: 'Miguel', text: '¡Increíble! Es como una permacultura natural. ¿Y usan abono orgánico?', audio: '/audio/L9.3/phrases/d1-line4.mp3' },
        { speaker: 'Doña Carmen', text: 'Sí, hacemos nuestro propio compostaje con desechos de la cocina y estiércol de las gallinas.', audio: '/audio/L9.3/phrases/d1-line5.mp3', annotations: [{ phrase: 'compostaje', fromLesson: 'L7.4', note: 'Composting connects to environmental vocabulary from L7.4' }] },
        { speaker: 'Miguel', text: '¿Y cómo controlan las plagas sin pesticidas químicos?', audio: '/audio/L9.3/phrases/d1-line6.mp3' },
        { speaker: 'Doña Carmen', text: 'Usamos control biológico. Plantamos flores que atraen insectos beneficiosos, y también preparamos repelentes con ajo y chile.', audio: '/audio/L9.3/phrases/d1-line7.mp3' },
        { speaker: 'Miguel', text: '¿Han pensado en obtener certificación orgánica?', audio: '/audio/L9.3/phrases/d1-line8.mp3' },
        { speaker: 'Doña Carmen', text: 'Es un proceso largo — toma al menos tres años. Pero ya estamos en el segundo año. Con el comercio justo, podremos vender a mejor precio.', audio: '/audio/L9.3/phrases/d1-line9.mp3' },
        { speaker: 'Miguel', text: '¿La comunidad los apoya?', audio: '/audio/L9.3/phrases/d1-line10.mp3' },
        { speaker: 'Doña Carmen', text: 'Mucho. Organizamos mingas para las tareas grandes. Los vecinos vienen, trabajamos juntos, y después compartimos comida. Así ha sido siempre.', audio: '/audio/L9.3/phrases/d1-line11.mp3' },
        { speaker: 'Miguel', text: '¿Cuál es la temporada de siembra aquí?', audio: '/audio/L9.3/phrases/d1-line12.mp3' },
        { speaker: 'Doña Carmen', text: 'Sembramos en mayo con las primeras lluvias y cosechamos en noviembre. La tierra descansa en invierno — ella también necesita su descanso.', audio: '/audio/L9.3/phrases/d1-line13.mp3' },
        { speaker: 'Miguel', text: '¿Y venden en el mercado local?', audio: '/audio/L9.3/phrases/d1-line14.mp3' },
        { speaker: 'Doña Carmen', text: 'Sí, cada domingo en el mercado campesino. Los clientes saben que nuestros productos son frescos y sin químicos. La soberanía alimentaria empieza aquí, en la parcela.', audio: '/audio/L9.3/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-cooperative',
      title: 'An Agricultural Cooperative in Mendoza — Argentina',
      location: 'Mendoza, Argentina',
      lines: [
        { speaker: 'Martín', text: 'Che, ¿viste que la cooperativa va a comprar un nuevo sistema de riego por goteo?', audio: '/audio/L9.3/phrases/d2-line1.mp3' },
        { speaker: 'Lucía', text: 'Sí, es una inversión grande pero necesaria. Con la sequía, no podemos seguir con el riego tradicional.', audio: '/audio/L9.3/phrases/d2-line2.mp3' },
        { speaker: 'Martín', text: '¿Cuántas hectáreas tenemos entre todos los socios?', audio: '/audio/L9.3/phrases/d2-line3.mp3' },
        { speaker: 'Lucía', text: 'Unas doscientas hectáreas de viñedos y cincuenta de olivos. La vendimia empieza en marzo.', audio: '/audio/L9.3/phrases/d2-line4.mp3' },
        { speaker: 'Martín', text: 'Este año quiero implementar cultivo rotativo en mi parcela. Tres años de vid y uno de leguminosas para recuperar el suelo.', audio: '/audio/L9.3/phrases/d2-line5.mp3', annotations: [{ phrase: 'cultivo rotativo', fromLesson: 'L7.4', note: 'Sustainable practice connecting to environmental concepts from L7.4' }] },
        { speaker: 'Lucía', text: 'Buena idea. Mi abuelo hacía lo mismo. También dejaba descansar la tierra un año de cada cuatro.', audio: '/audio/L9.3/phrases/d2-line6.mp3' },
        { speaker: 'Martín', text: '¿Y qué opinás de la ganadería? Algunos socios quieren agregar ganado vacuno.', audio: '/audio/L9.3/phrases/d2-line7.mp3' },
        { speaker: 'Lucía', text: 'Podría funcionar. Ganadería extensiva en las laderas que no sirven para vid. El pastoreo controlado hasta ayuda a fertilizar.', audio: '/audio/L9.3/phrases/d2-line8.mp3' },
        { speaker: 'Martín', text: '¿Vamos a participar en la feria ganadera de San Rafael?', audio: '/audio/L9.3/phrases/d2-line9.mp3' },
        { speaker: 'Lucía', text: 'Claro, es buena para hacer contactos. Y la fiesta de la vendimia en Mendoza es en marzo — podemos promover nuestros vinos orgánicos ahí.', audio: '/audio/L9.3/phrases/d2-line10.mp3' },
        { speaker: 'Martín', text: 'Perfecto. ¿Sabés qué me gusta de la cooperativa? Que entre todos somos más fuertes. Es como una minga moderna.', audio: '/audio/L9.3/phrases/d2-line11.mp3' },
        { speaker: 'Lucía', text: 'Totalmente. Solos no podríamos competir. Juntos, exportamos a Europa con sello de comercio justo.', audio: '/audio/L9.3/phrases/d2-line12.mp3' },
        { speaker: 'Martín', text: 'El veterinario viene mañana a revisar los animales. ¿Le avisamos a los demás socios?', audio: '/audio/L9.3/phrases/d2-line13.mp3' },
        { speaker: 'Lucía', text: 'Sí, mandá un mensaje al grupo. Y recordales que el ordeño ahora es a las cinco, no a las seis.', audio: '/audio/L9.3/phrases/d2-line14.mp3' },
        { speaker: 'Martín', text: 'Dale. La vida del campo es dura, pero no la cambiaría por nada.', audio: '/audio/L9.3/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Visit an organic farm in Oaxaca to learn ancient milpa techniques, and join a modern agricultural cooperative in Mendoza preparing for the grape harvest.',

  culturalNotes: [
    {
      title: 'Indigenous Farming Knowledge — La Milpa & the Three Sisters',
      content: 'Long before modern agriculture, indigenous peoples of the Americas developed sophisticated farming systems. The "milpa" — planting corn, beans, and squash together — is a Mesoamerican innovation over 7,000 years old. The corn provides a structure for beans to climb, beans fix nitrogen in the soil, and squash leaves shade the ground to retain moisture. This "Three Sisters" method is now recognized by modern science as a brilliant example of companion planting, and it continues to feed millions across Mexico and Central America.',
    },
    {
      title: 'Wine Country — Argentina, Chile, and Spain',
      content: 'The Spanish-speaking world is home to some of the world\'s finest wine regions. Mendoza, Argentina produces 70% of Argentina\'s wine and is famous for Malbec. Chile\'s Central Valley is renowned for Carménère, a grape nearly extinct in Europe. Spain\'s La Rioja, Ribera del Duero, and Priorat regions produce world-class Tempranillo. "La vendimia" (grape harvest) is celebrated with festivals featuring music, dancing, and the traditional grape-stomping. In Mendoza, the Fiesta Nacional de la Vendimia draws hundreds of thousands every March.',
    },
    {
      title: 'Coffee Culture — Colombia\'s Eje Cafetero',
      content: 'Colombia\'s "Coffee Triangle" (Eje Cafetero) — covering Caldas, Quindío, and Risaralda — is a UNESCO World Heritage cultural landscape. Small family farms ("fincas cafeteras") grow Arabica coffee at elevations between 1,200 and 1,800 meters. The "cafetero" (coffee farmer) is a cultural icon, and "Juan Valdez" became the world\'s most recognizable coffee brand. Today, Colombian coffee cooperatives lead the fair trade movement, ensuring "comercio justo" reaches small producers. A "tinto" (black coffee) costs just a few pesos and is the social glue of Colombian daily life.',
    },
  ],
  culturalGradient: 'from-emerald-50 to-green-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La cosecha" refers to:', options: ['The planting season', 'The harvest', 'The irrigation system', 'The livestock'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "El riego por ___ ahorra agua" (drip)', answer: 'goteo' },
    { id: 3, type: 'mc', text: '"La trashumancia" is:', options: ['A type of crop', 'Seasonal movement of livestock', 'A harvesting tool', 'An organic certification'], answer: 1 },
    { id: 4, type: 'tf', text: '"La minga" is a Quechua word for communal work.', answer: true },
    { id: 5, type: 'mc', text: '"El comercio justo" means:', options: ['Fast commerce', 'Fair trade', 'Free market', 'Illegal trade'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "La agricultura ___ no usa pesticidas sintéticos" (organic)', answer: 'orgánica' },
    { id: 7, type: 'mc', text: 'In Dialogue 1, what three crops form the milpa?', options: ['Rice, wheat, barley', 'Corn, beans, squash', 'Coffee, cocoa, sugarcane', 'Tomatoes, peppers, onions'], answer: 1 },
    { id: 8, type: 'mc', text: '"El ganado vacuno" refers to:', options: ['Sheep', 'Pigs', 'Cattle', 'Poultry'], answer: 2 },
    { id: 9, type: 'tf', text: '"La vendimia" celebrates the grain harvest.', answer: false },
    { id: 10, type: 'mc', text: '"La soberanía alimentaria" means:', options: ['Food export policy', 'Food sovereignty', 'Food inspection', 'Food rationing'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "El ___ orgánico reemplaza los fertilizantes químicos" (fertilizer/compost)', answer: 'abono' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what crop does the cooperative primarily grow?', options: ['Coffee', 'Corn', 'Grapes/vineyards', 'Wheat'], answer: 2 },
    { id: 13, type: 'mc', text: '"La permacultura" is based on:', options: ['Maximum chemical use', 'Imitating natural patterns', 'Industrial monoculture', 'Genetic modification'], answer: 1 },
    { id: 14, type: 'tf', text: 'Colombia\'s Coffee Triangle is a UNESCO World Heritage site.', answer: true },
    { id: 15, type: 'mc', text: '"El cultivo rotativo" helps prevent:', options: ['Rain', 'Soil depletion', 'Animal diseases', 'Fair trade'], answer: 1 },
  ],

  audioBase: '/audio/L9.3/phrases',

  uniqueActivity: {
    id: 'HarvestPlannerL93',
    sectionId: 'harvest-planner',
    sectionColor: 'bg-emerald-50/40',
    sectionBorder: 'border-emerald-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'farming-crops': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'livestock-animals': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'organic-sustainable': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'rural-customs': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'harvest-planner': { bg: 'bg-emerald-50/40', border: 'border-emerald-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
