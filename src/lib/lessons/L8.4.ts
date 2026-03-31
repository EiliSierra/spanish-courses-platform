import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Kitchen Techniques (12) ===
  { spanish: 'Hay que saltear las verduras a fuego alto', english: 'You need to saut\u00e9 the vegetables on high heat', pronunciation: 'eye keh sahl-teh-AHR lahs behr-DOO-rahs ah FWEH-goh AHL-toh', category: 'kitchen-techniques', audio: 'saltear-verduras' },
  { spanish: 'Blanquea los tomates antes de pelarlos', english: 'Blanch the tomatoes before peeling them', pronunciation: 'blahn-KEH-ah lohs toh-MAH-tehs AHN-tehs deh peh-LAHR-lohs', category: 'kitchen-techniques', audio: 'blanquear-tomates' },
  { spanish: 'Reduce la salsa hasta que espese', english: 'Reduce the sauce until it thickens', pronunciation: 'rreh-DOO-seh lah SAHL-sah AHS-tah keh ehs-PEH-seh', category: 'kitchen-techniques', audio: 'reducir-salsa' },
  { spanish: 'Emulsiona el aceite con el vinagre lentamente', english: 'Emulsify the oil with the vinegar slowly', pronunciation: 'eh-mool-see-OH-nah ehl ah-SEY-teh kohn ehl bee-NAH-greh lehn-tah-MEHN-teh', category: 'kitchen-techniques', audio: 'emulsionar-aceite' },
  { spanish: 'Flamea el postre con ron añejo', english: 'Flamb\u00e9 the dessert with aged rum', pronunciation: 'flah-MEH-ah ehl pohs-TREH kohn rrohn ah-NYEH-hoh', category: 'kitchen-techniques', audio: 'flamear-postre' },
  { spanish: 'Marina el pollo durante toda la noche', english: 'Marinate the chicken overnight', pronunciation: 'mah-REE-nah ehl POH-yoh doo-RAHN-teh TOH-dah lah NOH-cheh', category: 'kitchen-techniques', audio: 'marinar-pollo' },
  { spanish: 'La mise en place es esencial antes de cocinar', english: 'Mise en place is essential before cooking', pronunciation: 'lah mees ahn plahs ehs eh-sehn-see-AHL AHN-tehs deh koh-see-NAHR', category: 'kitchen-techniques', audio: 'mise-en-place' },
  { spanish: 'El punto de cocción del filete es medio', english: 'The cooking point of the steak is medium', pronunciation: 'ehl POON-toh deh kohk-see-OHN dehl fee-LEH-teh ehs MEH-dee-oh', category: 'kitchen-techniques', audio: 'punto-coccion' },
  { spanish: 'Glasea las zanahorias con mantequilla y miel', english: 'Glaze the carrots with butter and honey', pronunciation: 'glah-SEH-ah lahs sah-nah-OH-ree-ahs kohn mahn-teh-KEE-yah ee mee-EHL', category: 'kitchen-techniques', audio: 'glasear-zanahorias' },
  { spanish: 'Escalfa los huevos en agua con vinagre', english: 'Poach the eggs in water with vinegar', pronunciation: 'ehs-KAHL-fah lohs WEH-bohs ehn AH-gwah kohn bee-NAH-greh', category: 'kitchen-techniques', audio: 'escalfar-huevos' },
  { spanish: 'Confita el ajo a temperatura baja durante dos horas', english: 'Confit the garlic at low temperature for two hours', pronunciation: 'kohn-FEE-tah ehl AH-hoh ah tehm-peh-rah-TOO-rah BAH-hah doo-RAHN-teh dohs OH-rahs', category: 'kitchen-techniques', audio: 'confitar-ajo' },
  { spanish: 'Brasear la carne le da un sabor profundo', english: 'Braising the meat gives it a deep flavor', pronunciation: 'brah-seh-AHR lah KAHR-neh leh dah oon sah-BOHR proh-FOON-doh', category: 'kitchen-techniques', audio: 'brasear-carne' },

  // === Regional Cuisines (12) ===
  { spanish: 'El ceviche peruano se prepara con pescado crudo y limón', english: 'Peruvian ceviche is prepared with raw fish and lime', pronunciation: 'ehl seh-BEE-cheh peh-roo-AH-noh seh preh-PAH-rah kohn pehs-KAH-doh KROO-doh ee lee-MOHN', category: 'regional-cuisines', audio: 'ceviche-peruano' },
  { spanish: 'Los tacos al pastor llevan carne adobada y piña', english: 'Tacos al pastor have marinated meat and pineapple', pronunciation: 'lohs TAH-kohs ahl pahs-TOHR YEH-bahn KAHR-neh ah-doh-BAH-dah ee PEE-nyah', category: 'regional-cuisines', audio: 'tacos-al-pastor' },
  { spanish: 'La paella valenciana lleva arroz, conejo y judías verdes', english: 'Valencian paella has rice, rabbit, and green beans', pronunciation: 'lah pah-EH-yah bah-lehn-see-AH-nah YEH-bah ah-RROHS koh-NEH-hoh ee hoo-DEE-ahs BEHR-dehs', category: 'regional-cuisines', audio: 'paella-valenciana' },
  { spanish: 'El asado argentino se cocina lentamente sobre brasas', english: 'Argentine asado is cooked slowly over embers', pronunciation: 'ehl ah-SAH-doh ahr-hehn-TEE-noh seh koh-SEE-nah lehn-tah-MEHN-teh SOH-breh BRAH-sahs', category: 'regional-cuisines', audio: 'asado-argentino' },
  { spanish: 'La bandeja paisa colombiana es un plato abundante y contundente', english: 'Colombian bandeja paisa is an abundant and hearty dish', pronunciation: 'lah bahn-DEH-hah pah-EE-sah koh-lohm-bee-AH-nah ehs oon PLAH-toh ah-boon-DAHN-teh ee kohn-toon-DEHN-teh', category: 'regional-cuisines', audio: 'bandeja-paisa' },
  { spanish: 'El mole oaxaqueño lleva más de treinta ingredientes', english: 'Oaxacan mole has more than thirty ingredients', pronunciation: 'ehl MOH-leh wah-hah-KEH-nyoh YEH-bah mahs deh TREIN-tah een-greh-dee-EHN-tehs', category: 'regional-cuisines', audio: 'mole-oaxaqueno' },
  { spanish: 'Las empanadas argentinas se rellenan de carne, pollo o humita', english: 'Argentine empanadas are filled with beef, chicken, or humita', pronunciation: 'lahs ehm-pah-NAH-dahs ahr-hehn-TEE-nahs seh rreh-YEH-nahn deh KAHR-neh POH-yoh oh oo-MEE-tah', category: 'regional-cuisines', audio: 'empanadas-argentinas' },
  { spanish: 'El cuy es un plato tradicional en los Andes peruanos', english: 'Guinea pig is a traditional dish in the Peruvian Andes', pronunciation: 'ehl kooy ehs oon PLAH-toh trah-dee-see-oh-NAHL ehn lohs AHN-dehs peh-roo-AH-nohs', category: 'regional-cuisines', audio: 'cuy-andino' },
  { spanish: 'La arepa venezolana se rellena de queso, carne o frijoles', english: 'Venezuelan arepa is filled with cheese, meat, or beans', pronunciation: 'lah ah-REH-pah beh-neh-soh-LAH-nah seh rreh-YEH-nah deh KEH-soh KAHR-neh oh free-HOH-lehs', category: 'regional-cuisines', audio: 'arepa-venezolana' },
  { spanish: 'Las pupusas salvadoreñas son tortillas rellenas de queso y chicharrón', english: 'Salvadoran pupusas are tortillas filled with cheese and pork rind', pronunciation: 'lahs poo-POO-sahs sahl-bah-doh-REH-nyahs sohn tohr-TEE-yahs rreh-YEH-nahs deh KEH-soh ee chee-chah-RROHN', category: 'regional-cuisines', audio: 'pupusas-salvadorenas' },
  { spanish: 'El gazpacho andaluz es una sopa fría de tomate', english: 'Andalusian gazpacho is a cold tomato soup', pronunciation: 'ehl gahs-PAH-choh ahn-dah-LOOS ehs OO-nah SOH-pah FREE-ah deh toh-MAH-teh', category: 'regional-cuisines', audio: 'gazpacho-andaluz' },
  { spanish: 'El lomo saltado fusiona la cocina peruana con la china', english: 'Lomo saltado fuses Peruvian and Chinese cuisine', pronunciation: 'ehl LOH-moh sahl-TAH-doh foo-see-OH-nah lah koh-SEE-nah peh-roo-AH-nah kohn lah CHEE-nah', category: 'regional-cuisines', audio: 'lomo-saltado' },

  // === Food Criticism (12) ===
  { spanish: 'La textura es cremosa y aterciopelada', english: 'The texture is creamy and velvety', pronunciation: 'lah tehks-TOO-rah ehs kreh-MOH-sah ee ah-tehr-see-oh-peh-LAH-dah', category: 'food-criticism', audio: 'textura-cremosa' },
  { spanish: 'El sabor es umami con toques ahumados', english: 'The flavor is umami with smoky touches', pronunciation: 'ehl sah-BOHR ehs oo-MAH-mee kohn TOH-kehs ah-oo-MAH-dohs', category: 'food-criticism', audio: 'sabor-umami' },
  { spanish: 'Percibo notas de cítrico y hierbas frescas', english: 'I detect notes of citrus and fresh herbs', pronunciation: 'pehr-SEE-boh NOH-tahs deh SEE-tree-koh ee ee-EHR-bahs FREHS-kahs', category: 'food-criticism', audio: 'notas-citrico' },
  { spanish: 'Es un maridaje perfecto entre el vino y el queso', english: 'It is a perfect pairing between the wine and the cheese', pronunciation: 'ehs oon mah-ree-DAH-heh pehr-FEHK-toh EHN-treh ehl BEE-noh ee ehl KEH-soh', category: 'food-criticism', audio: 'maridaje-perfecto' },
  { spanish: 'La presentación del plato es impecable y artística', english: 'The plate presentation is impeccable and artistic', pronunciation: 'lah preh-sehn-tah-see-OHN dehl PLAH-toh ehs eem-peh-KAH-bleh ee ahr-TEES-tee-kah', category: 'food-criticism', audio: 'presentacion-impecable' },
  { spanish: 'El equilibrio de sabores entre dulce y ácido es magistral', english: 'The balance of flavors between sweet and acid is masterful', pronunciation: 'ehl eh-kee-LEE-bree-oh deh sah-BOH-rehs EHN-treh DOOL-seh ee AH-see-doh ehs mah-hees-TRAHL', category: 'food-criticism', audio: 'equilibrio-sabores' },
  { spanish: 'El plato tiene una complejidad de sabores extraordinaria', english: 'The dish has an extraordinary complexity of flavors', pronunciation: 'ehl PLAH-toh tee-EH-neh OO-nah kohm-pleh-hee-DAHD deh sah-BOH-rehs ehks-trah-ohr-dee-NAH-ree-ah', category: 'food-criticism', audio: 'complejidad-sabores' },
  { spanish: 'El bocado se deshace en la boca', english: 'The bite melts in your mouth', pronunciation: 'ehl boh-KAH-doh seh dehs-AH-seh ehn lah BOH-kah', category: 'food-criticism', audio: 'deshace-boca' },
  { spanish: 'La cocción es precisa y el interior queda jugoso', english: 'The cooking is precise and the interior stays juicy', pronunciation: 'lah kohk-see-OHN ehs preh-SEE-sah ee ehl een-teh-ree-OHR KEH-dah hoo-GOH-soh', category: 'food-criticism', audio: 'coccion-precisa' },
  { spanish: 'El emplatado es minimalista pero elegante', english: 'The plating is minimalist but elegant', pronunciation: 'ehl ehm-plah-TAH-doh ehs mee-nee-mah-LEES-tah PEH-roh eh-leh-GAHN-teh', category: 'food-criticism', audio: 'emplatado-minimalista' },
  { spanish: 'Cada ingrediente aporta su propia identidad al conjunto', english: 'Each ingredient contributes its own identity to the whole', pronunciation: 'KAH-dah een-greh-dee-EHN-teh ah-POHR-tah soo PROH-pee-ah ee-dehn-tee-DAHD ahl kohn-HOON-toh', category: 'food-criticism', audio: 'ingrediente-identidad' },
  { spanish: 'El postre tiene el punto justo de dulzura', english: 'The dessert has just the right amount of sweetness', pronunciation: 'ehl pohs-TREH tee-EH-neh ehl POON-toh HOOS-toh deh dool-SOO-rah', category: 'food-criticism', audio: 'punto-justo-dulzura' },

  // === Beverages & Specialty (12) ===
  { spanish: 'Este vino es de la cosecha del dos mil dieciocho', english: 'This wine is from the 2018 harvest', pronunciation: 'EHS-teh BEE-noh ehs deh lah koh-SEH-chah dehl dohs meel dee-eh-see-OH-choh', category: 'beverages-specialty', audio: 'cosecha-vino' },
  { spanish: 'Es un reserva con cinco años de crianza', english: 'It is a reserva with five years of aging', pronunciation: 'ehs oon rreh-SEHR-bah kohn SEEN-koh AH-nyohs deh kree-AHN-sah', category: 'beverages-specialty', audio: 'reserva-crianza' },
  { spanish: 'Los taninos son suaves y redondos en boca', english: 'The tannins are soft and round on the palate', pronunciation: 'lohs tah-NEE-nohs sohn SWAH-behs ee rreh-DOHN-dohs ehn BOH-kah', category: 'beverages-specialty', audio: 'taninos-suaves' },
  { spanish: 'El vino maduró en barrica de roble francés', english: 'The wine aged in French oak barrel', pronunciation: 'ehl BEE-noh mah-doo-ROH ehn bah-RREE-kah deh RROH-bleh frahn-SEHS', category: 'beverages-specialty', audio: 'barrica-roble' },
  { spanish: 'Este café de origen es de la sierra colombiana', english: 'This single-origin coffee is from the Colombian highlands', pronunciation: 'EHS-teh kah-FEH deh oh-REE-hehn ehs deh lah see-EH-rrah koh-lohm-bee-AH-nah', category: 'beverages-specialty', audio: 'cafe-origen' },
  { spanish: 'Prefiero un tueste medio para resaltar las notas frutales', english: 'I prefer a medium roast to highlight the fruity notes', pronunciation: 'preh-fee-EH-roh oon TWEHS-teh MEH-dee-oh PAH-rah rreh-sahl-TAHR lahs NOH-tahs froo-TAH-lehs', category: 'beverages-specialty', audio: 'tueste-medio' },
  { spanish: 'Detecto notas de chocolate amargo y nuez', english: 'I detect notes of dark chocolate and walnut', pronunciation: 'deh-TEHK-toh NOH-tahs deh choh-koh-LAH-teh ah-MAHR-goh ee nwehs', category: 'beverages-specialty', audio: 'notas-chocolate' },
  { spanish: 'La fermentación natural le da carácter al café', english: 'Natural fermentation gives the coffee character', pronunciation: 'lah fehr-mehn-tah-see-OHN nah-too-RAHL leh dah kah-RAHK-tehr ahl kah-FEH', category: 'beverages-specialty', audio: 'fermentacion-cafe' },
  { spanish: 'El mezcal artesanal tiene un final ahumado largo', english: 'Artisanal mezcal has a long smoky finish', pronunciation: 'ehl mehs-KAHL ahr-teh-sah-NAHL tee-EH-neh oon fee-NAHL ah-oo-MAH-doh LAHR-goh', category: 'beverages-specialty', audio: 'mezcal-artesanal' },
  { spanish: 'El cacao de Venezuela es considerado el mejor del mundo', english: 'Venezuelan cacao is considered the best in the world', pronunciation: 'ehl kah-KAH-oh deh beh-neh-SWEH-lah ehs kohn-see-deh-RAH-doh ehl meh-HOHR dehl MOON-doh', category: 'beverages-specialty', audio: 'cacao-venezuela' },
  { spanish: 'La infusión de hierba mate es un ritual en Argentina', english: 'Yerba mate infusion is a ritual in Argentina', pronunciation: 'lah een-foo-see-OHN deh ee-EHR-bah MAH-teh ehs oon rree-TWAHL ehn ahr-hehn-TEE-nah', category: 'beverages-specialty', audio: 'hierba-mate' },
  { spanish: 'Este pisco sour lleva clara de huevo y amargo de Angostura', english: 'This pisco sour has egg white and Angostura bitters', pronunciation: 'EHS-teh PEES-koh SOW-r YEH-bah KLAH-rah deh WEH-boh ee ah-MAHR-goh deh ahn-gohs-TOO-rah', category: 'beverages-specialty', audio: 'pisco-sour' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L84PhraseByAudio = phraseByAudio

// === CHEF CHALLENGE (unique activity) ===

export interface ChefChallenge {
  dish: string
  english: string
  correctTechnique: string
  options: string[]
}

export const CHEF_CHALLENGES: ChefChallenge[] = [
  {
    dish: 'Tomates que necesitan pelarse fácilmente sumergidos brevemente en agua hirviendo',
    english: 'Tomatoes that need to peel easily, briefly submerged in boiling water',
    correctTechnique: 'Blanquear',
    options: ['Blanquear', 'Saltear', 'Flamear', 'Confitar'],
  },
  {
    dish: 'Verduras cortadas en trozos pequeños, movidas rápidamente en un sartén con aceite muy caliente',
    english: 'Vegetables cut in small pieces, quickly tossed in a pan with very hot oil',
    correctTechnique: 'Saltear',
    options: ['Reducir', 'Saltear', 'Escalfar', 'Brasear'],
  },
  {
    dish: 'Un postre bañado en licor al que se le prende fuego para caramelizar',
    english: 'A dessert bathed in liquor that is set on fire to caramelize',
    correctTechnique: 'Flamear',
    options: ['Glasear', 'Emulsionar', 'Flamear', 'Marinar'],
  },
  {
    dish: 'Carne sumergida en una mezcla de especias, vinagre y hierbas durante varias horas',
    english: 'Meat submerged in a mix of spices, vinegar, and herbs for several hours',
    correctTechnique: 'Marinar',
    options: ['Marinar', 'Blanquear', 'Reducir', 'Confitar'],
  },
  {
    dish: 'Salsa que se cocina sin tapa a fuego lento hasta que pierde volumen y se concentra',
    english: 'Sauce cooked uncovered on low heat until it loses volume and concentrates',
    correctTechnique: 'Reducir',
    options: ['Saltear', 'Escalfar', 'Glasear', 'Reducir'],
  },
  {
    dish: 'Huevos cocidos suavemente en agua caliente sin hervir, sin cáscara',
    english: 'Eggs cooked gently in hot water without boiling, no shell',
    correctTechnique: 'Escalfar',
    options: ['Blanquear', 'Confitar', 'Escalfar', 'Emulsionar'],
  },
  {
    dish: 'Aceite y vinagre mezclados vigorosamente hasta formar una mezcla homogénea y estable',
    english: 'Oil and vinegar mixed vigorously until forming a homogeneous and stable mixture',
    correctTechnique: 'Emulsionar',
    options: ['Reducir', 'Emulsionar', 'Flamear', 'Brasear'],
  },
]

// === LESSON DATA ===

export const L84Data: LessonData = {
  id: 'L8.4',
  hero: {
    lessonId: 'L8.4',
    title: 'Gastronomy & Culinary Arts',
    subtitle: 'The language of professional kitchens and food culture',
    description: 'Master the vocabulary of professional cooking techniques, iconic regional dishes from across the Spanish-speaking world, food criticism, and specialty beverages. From saut\u00e9ing and flamb\u00e9ing to discussing tannins and single-origin coffee — express yourself like a true culinary professional.',
    image: '/images/L8.4/L8.4.jpg',
    gradient: 'from-orange-800/65 via-amber-700/55 to-yellow-700/65',
    accentColor: 'orange-200',
  },

  objectives: [
    { icon: '🔪', title: 'Kitchen Techniques', desc: 'Master professional culinary verbs: saut\u00e9, blanch, reduce, emulsify, flamb\u00e9, marinate, and more.' },
    { icon: '🌎', title: 'Regional Cuisines', desc: 'Describe iconic dishes from Peru, Mexico, Spain, Argentina, Colombia, and beyond.' },
    { icon: '📝', title: 'Food Criticism', desc: 'Use precise language to describe textures, flavors, pairings, and presentation like a food critic.' },
    { icon: '🍷', title: 'Beverages & Specialty', desc: 'Navigate wine vocabulary (tannins, oak barrel, harvest), coffee origins, and artisanal spirits.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L3.4', label: 'Cooking & Recipes', detail: 'L3.4 introduced basic cooking vocabulary and recipe instructions. Now advance to professional kitchen terminology.' },
    { fromLesson: 'L1.7', label: 'Food & Drinks', detail: 'L1.7 covered everyday food items and ordering at restaurants. Now explore gastronomy at a professional level.' },
    { fromLesson: 'L6.5', label: 'Translation & Untranslatables', detail: 'L6.5 explored culturally untranslatable concepts. Many culinary terms carry deep cultural meaning beyond translation.' },
  ],

  sectionTransitions: [
    { afterSection: 'kitchen-techniques', text: 'You know the techniques! Now let\'s explore the legendary dishes of the Spanish-speaking world.' },
    { afterSection: 'regional-cuisines', text: 'What a culinary tour! Let\'s learn to describe food like a professional critic.' },
    { afterSection: 'food-criticism', text: 'Now you can critique like a pro! Let\'s dive into specialty beverages.' },
    { afterSection: 'dialogues', text: 'Fantastic kitchen conversations! Let\'s explore the culture of gastronomy.' },
    { afterSection: 'cultural', text: 'Now put your skills to the test in the Chef Challenge!' },
    { afterSection: 'chef-challenge', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Hay que saltear...', english: 'You need to saut\u00e9...' },
    { spanish: 'El plato tiene notas de...', english: 'The dish has notes of...' },
    { spanish: 'El maridaje ideal es...', english: 'The ideal pairing is...' },
    { spanish: 'La técnica consiste en...', english: 'The technique consists of...' },
    { spanish: 'Este vino tiene...', english: 'This wine has...' },
    { spanish: 'El punto de cocción es...', english: 'The cooking point is...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Emulsiona el aceite con el vinagre', pronunciation: 'eh-mool-see-OH-nah ehl ah-SEY-teh kohn ehl bee-NAH-greh', english: 'Emulsify the oil with the vinegar', audio: 'emulsionar-aceite', tip: '"Emulsionar" keeps the stress on -NAR in the infinitive, but when conjugated, it shifts: emulSIO-na. The "si" creates a smooth glide before the stressed syllable.' },
    { spanish: 'El mole oaxaqueño lleva treinta ingredientes', pronunciation: 'ehl MOH-leh wah-hah-KEH-nyoh YEH-bah TREIN-tah een-greh-dee-EHN-tehs', english: 'Oaxacan mole has thirty ingredients', audio: 'mole-oaxaqueno', tip: '"Oaxaqueño" is pronounced wah-hah-KEH-nyo. The "x" in Oaxaca makes a "h" sound — a remnant of indigenous Zapotec pronunciation.' },
    { spanish: 'La paella valenciana lleva arroz y conejo', pronunciation: 'lah pah-EH-yah bah-lehn-see-AH-nah YEH-bah ah-RROHS ee koh-NEH-hoh', english: 'Valencian paella has rice and rabbit', audio: 'paella-valenciana', tip: '"Paella" is pah-EH-yah, not pay-ELL-ah. The double L (ll) makes a "y" sound in most Spanish dialects. In Valencia, it is closer to a soft "y."' },
    { spanish: 'Los taninos son suaves y redondos en boca', pronunciation: 'lohs tah-NEE-nohs sohn SWAH-behs ee rreh-DOHN-dohs ehn BOH-kah', english: 'The tannins are soft and round on the palate', audio: 'taninos-suaves', tip: '"Taninos" comes from the French "tannin." In Spanish, stress falls on the second syllable: ta-NI-nos. Wine vocabulary in Spanish borrows heavily from French.' },
    { spanish: 'Flamea el postre con ron añejo', pronunciation: 'flah-MEH-ah ehl pohs-TREH kohn rrohn ah-NYEH-hoh', english: 'Flamb\u00e9 the dessert with aged rum', audio: 'flamear-postre', tip: '"Flamear" comes from French "flamber." "Añejo" (aged) uses the ñ sound: ah-NYEH-hoh. This word is critical for describing aged spirits and cheeses.' },
    { spanish: 'El ceviche se cura con jugo de limón', pronunciation: 'ehl seh-BEE-cheh seh KOO-rah kohn HOO-goh deh lee-MOHN', english: 'Ceviche is cured with lime juice', audio: 'ceviche-peruano', tip: '"Ceviche" can be spelled ceviche, cebiche, or seviche depending on the country. The pronunciation is always seh-BEE-cheh. Peru and Ecuador debate ownership fiercely!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'kitchen-techniques', label: 'Kitchen Techniques' },
    { id: 'regional-cuisines', label: 'Regional Cuisines' },
    { id: 'food-criticism', label: 'Food Criticism' },
    { id: 'beverages-specialty', label: 'Beverages & Specialty' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Culinary Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'chef-challenge', label: 'Chef Challenge' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'kitchen-techniques',
      title: 'Kitchen Techniques — Técnicas de Cocina',
      description: 'Professional culinary verbs and methods used in high-end kitchens across the Spanish-speaking world.',
      tabs: [
        { label: 'Heat & Pan Techniques', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'kitchen-techniques').slice(0, 6) },
        { label: 'Precision Cooking', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'kitchen-techniques').slice(6) },
      ],
    },
    {
      id: 'regional-cuisines',
      title: 'Regional Cuisines — Cocinas Regionales',
      description: 'Iconic dishes from across Latin America and Spain that define their culinary identities.',
      tabs: [
        { label: 'South America & Mexico', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'regional-cuisines').slice(0, 6) },
        { label: 'Central America & Spain', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'regional-cuisines').slice(6) },
      ],
    },
    {
      id: 'food-criticism',
      title: 'Food Criticism — Crítica Gastronómica',
      description: 'The precise vocabulary of food critics: textures, flavors, pairings, and presentation.',
      tabs: [
        { label: 'Flavor & Texture', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'food-criticism').slice(0, 6) },
        { label: 'Presentation & Balance', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'food-criticism').slice(6) },
      ],
    },
    {
      id: 'beverages-specialty',
      title: 'Beverages & Specialty — Bebidas Especiales',
      description: 'Wine, coffee, spirits, and specialty beverages with their professional tasting vocabulary.',
      tabs: [
        { label: 'Wine & Spirits', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'beverages-specialty').slice(0, 6) },
        { label: 'Coffee & Specialty', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'beverages-specialty').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Indigenous & Regional Food Names',
      content: 'Many dish names come from indigenous languages: "mole" from Nahuatl "molli" (sauce), "ceviche" possibly from Quechua "siwichi" (fresh fish), "mate" from Quechua "mati" (gourd). These words have been fully adopted into Spanish with standard pronunciation rules, but knowing their origins helps you understand why they sound different from typical Spanish words.',
      example: 'Mole (MOH-leh) | Ceviche (seh-BEE-cheh) | Mate (MAH-teh) | Guacamole (gwah-kah-MOH-leh)',
    },
    {
      title: 'French Culinary Loanwords',
      content: 'Professional Spanish cuisine borrows extensively from French: "mise en place" (mees ahn plahs), "flamear" (from flamber), "glasear" (from glacer), "saut\u00e9" becomes "saltear." These words are pronounced with Spanish phonetics even when they retain French spelling. "Mise en place" is the most commonly used as-is, keeping its French pronunciation.',
      example: 'Mise en place | Flamear | Glasear | Gratinar | Juliana',
      reviewFrom: 'L3.4',
    },
    {
      title: 'Wine Tasting Vocabulary',
      content: 'Wine vocabulary in Spanish follows specific patterns: "notas de..." (notes of), "en boca" (on the palate), "en nariz" (on the nose). Descriptors often use adjectives in a specific order: texture first, then flavor, then finish. "Redondo" (round), "sedoso" (silky), "afrutado" (fruity) are key adjectives you\'ll hear at any Spanish wine tasting.',
      example: 'Un vino redondo con notas de cereza y un final largo y sedoso',
      reviewFrom: 'L1.7',
    },
    {
      title: 'Cooking Point Terminology',
      content: 'Meat doneness in Spanish varies by country. In Spain: "poco hecho" (rare), "al punto" (medium), "muy hecho" (well done). In Argentina: "jugoso" (rare/juicy), "a punto" (medium), "cocido" (well done). Mexico uses "rojo" (rare), "término medio" (medium), "bien cocido" (well done). Always ask locally — these terms shift across regions!',
      example: 'Spain: poco hecho → al punto → muy hecho | Argentina: jugoso → a punto → cocido',
    },
  ],

  flashcardGroups: [
    {
      key: 'kitchen-techniques',
      label: 'Kitchen Techniques',
      audioKeys: ['saltear-verduras', 'blanquear-tomates', 'reducir-salsa', 'emulsionar-aceite', 'flamear-postre', 'marinar-pollo', 'mise-en-place', 'punto-coccion', 'glasear-zanahorias', 'escalfar-huevos', 'confitar-ajo', 'brasear-carne'],
    },
    {
      key: 'regional-cuisines',
      label: 'Regional Cuisines',
      audioKeys: ['ceviche-peruano', 'tacos-al-pastor', 'paella-valenciana', 'asado-argentino', 'bandeja-paisa', 'mole-oaxaqueno', 'empanadas-argentinas', 'cuy-andino', 'arepa-venezolana', 'pupusas-salvadorenas', 'gazpacho-andaluz', 'lomo-saltado'],
    },
    {
      key: 'food-criticism',
      label: 'Food Criticism',
      audioKeys: ['textura-cremosa', 'sabor-umami', 'notas-citrico', 'maridaje-perfecto', 'presentacion-impecable', 'equilibrio-sabores', 'complejidad-sabores', 'deshace-boca', 'coccion-precisa', 'emplatado-minimalista', 'ingrediente-identidad', 'punto-justo-dulzura'],
    },
    {
      key: 'beverages-specialty',
      label: 'Beverages & Specialty',
      audioKeys: ['cosecha-vino', 'reserva-crianza', 'taninos-suaves', 'barrica-roble', 'cafe-origen', 'tueste-medio', 'notas-chocolate', 'fermentacion-cafe', 'mezcal-artesanal', 'cacao-venezuela', 'hierba-mate', 'pisco-sour'],
    },
  ],

  matchPairs: [
    { left: 'Saltear', right: 'To saut\u00e9' },
    { left: 'Blanquear', right: 'To blanch' },
    { left: 'Maridaje', right: 'Pairing (food & wine)' },
    { left: 'Taninos', right: 'Tannins' },
    { left: 'Mise en place', right: 'Preparation setup' },
    { left: 'Cosecha', right: 'Harvest / Vintage' },
    { left: 'Emulsionar', right: 'To emulsify' },
    { left: 'Punto de cocción', right: 'Cooking point / Doneness' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Technique vs. Dish',
      instruction: 'Is this a cooking technique or a specific dish?',
      buckets: ['Technique 🔪', 'Dish 🍽️'],
      items: [
        { text: 'Saltear', bucket: 'Technique 🔪' },
        { text: 'Blanquear', bucket: 'Technique 🔪' },
        { text: 'Flamear', bucket: 'Technique 🔪' },
        { text: 'Emulsionar', bucket: 'Technique 🔪' },
        { text: 'Ceviche peruano', bucket: 'Dish 🍽️' },
        { text: 'Paella valenciana', bucket: 'Dish 🍽️' },
        { text: 'Mole oaxaqueño', bucket: 'Dish 🍽️' },
        { text: 'Asado argentino', bucket: 'Dish 🍽️' },
      ],
    },
    {
      title: 'Wine vs. Coffee',
      instruction: 'Does this term belong to wine or coffee vocabulary?',
      buckets: ['Wine 🍷', 'Coffee ☕'],
      items: [
        { text: 'Taninos', bucket: 'Wine 🍷' },
        { text: 'Cosecha', bucket: 'Wine 🍷' },
        { text: 'Barrica de roble', bucket: 'Wine 🍷' },
        { text: 'Reserva', bucket: 'Wine 🍷' },
        { text: 'Tueste medio', bucket: 'Coffee ☕' },
        { text: 'Café de origen', bucket: 'Coffee ☕' },
        { text: 'Notas de chocolate', bucket: 'Coffee ☕' },
        { text: 'Fermentación natural', bucket: 'Coffee ☕' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Culinary Sorting',

  dialogues: [
    {
      id: 'dialogue-kitchen',
      title: 'Professional Kitchen Service — Lima, Peru',
      location: 'Lima',
      lines: [
        { speaker: 'Chef Rojas', text: '¡Atención, equipo! Mise en place lista. El servicio empieza en quince minutos.', audio: '/audio/L8.4/phrases/d1-line1.mp3' },
        { speaker: 'Sous Chef Ana', text: 'Chef, el ceviche de corvina está listo. ¿Le agrego el ají limo ahora o al servir?', audio: '/audio/L8.4/phrases/d1-line2.mp3' },
        { speaker: 'Chef Rojas', text: 'Al servir, siempre al servir. El ají pierde potencia si lo agregas antes.', audio: '/audio/L8.4/phrases/d1-line3.mp3' },
        { speaker: 'Cocinero Diego', text: 'Chef, el lomo saltado está listo para saltear. ¿Fuego alto o medio?', audio: '/audio/L8.4/phrases/d1-line4.mp3' },
        { speaker: 'Chef Rojas', text: 'Fuego alto, siempre. El wok tiene que estar humeando. La carne necesita sellarse en segundos.', audio: '/audio/L8.4/phrases/d1-line5.mp3', annotations: [{ phrase: 'sellarse en segundos', fromLesson: 'L3.4', note: 'Cooking basics from L3.4 — now at professional speed' }] },
        { speaker: 'Sous Chef Ana', text: 'La reducción de ají amarillo está espesando. ¿La cuelo o la dejo así?', audio: '/audio/L8.4/phrases/d1-line6.mp3' },
        { speaker: 'Chef Rojas', text: 'Cuélala. Necesitamos una textura sedosa para la presentación del plato.', audio: '/audio/L8.4/phrases/d1-line7.mp3' },
        { speaker: 'Cocinero Diego', text: '¡Marchando tres ceviches y dos lomos saltados, mesa siete!', audio: '/audio/L8.4/phrases/d1-line8.mp3' },
        { speaker: 'Chef Rojas', text: '¡Oído! Ana, el emplatado del ceviche tiene que ser minimalista pero elegante.', audio: '/audio/L8.4/phrases/d1-line9.mp3' },
        { speaker: 'Sous Chef Ana', text: 'Entendido. Uso la leche de tigre como espejo y el camote crocante de decoración.', audio: '/audio/L8.4/phrases/d1-line10.mp3' },
        { speaker: 'Chef Rojas', text: 'Perfecto. Diego, el punto de cocción del lomo, ¿cómo lo pidieron?', audio: '/audio/L8.4/phrases/d1-line11.mp3' },
        { speaker: 'Cocinero Diego', text: 'Uno jugoso y uno a punto, chef.', audio: '/audio/L8.4/phrases/d1-line12.mp3' },
        { speaker: 'Chef Rojas', text: 'Bien. Cada ingrediente tiene que aportar su identidad al plato. Nada de más, nada de menos.', audio: '/audio/L8.4/phrases/d1-line13.mp3' },
        { speaker: 'Sous Chef Ana', text: 'Chef, el crítico del periódico está en la mesa doce. Pidió el menú degustación.', audio: '/audio/L8.4/phrases/d1-line14.mp3' },
        { speaker: 'Chef Rojas', text: 'Entonces cada plato sale perfecto. Somos cocina peruana de nivel mundial. ¡Vamos, equipo!', audio: '/audio/L8.4/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-critic',
      title: 'Food Critic Review — Barcelona, Spain',
      location: 'Barcelona',
      lines: [
        { speaker: 'Crítico Martín', text: 'Buenas noches. Reservación a nombre de Martín, para la columna del suplemento gastronómico.', audio: '/audio/L8.4/phrases/d2-line1.mp3' },
        { speaker: 'Sommelier Clara', text: 'Bienvenido, señor Martín. He seleccionado tres vinos para maridar con el menú de esta noche.', audio: '/audio/L8.4/phrases/d2-line2.mp3' },
        { speaker: 'Crítico Martín', text: 'Excelente. Empecemos. ¿Qué me recomienda para acompañar el primer plato?', audio: '/audio/L8.4/phrases/d2-line3.mp3' },
        { speaker: 'Sommelier Clara', text: 'Un albariño de Rías Baixas. Fresco, con notas de cítrico y melocotón. Maridaje perfecto con los mejillones.', audio: '/audio/L8.4/phrases/d2-line4.mp3' },
        { speaker: 'Crítico Martín', text: 'Interesante elección. Los mejillones tienen una textura cremosa impresionante.', audio: '/audio/L8.4/phrases/d2-line5.mp3', annotations: [{ phrase: 'textura cremosa', fromLesson: 'L1.7', note: 'Food adjective from L1.7 used in professional criticism context' }] },
        { speaker: 'Sommelier Clara', text: 'El chef los preparó al vapor con azafrán y un toque de pimentón ahumado de la Vera.', audio: '/audio/L8.4/phrases/d2-line6.mp3' },
        { speaker: 'Crítico Martín', text: 'El equilibrio de sabores es magistral. El ahumado no opaca el sabor del mar.', audio: '/audio/L8.4/phrases/d2-line7.mp3' },
        { speaker: 'Sommelier Clara', text: 'Para el segundo plato, un Rioja reserva del dos mil dieciocho. Taninos suaves, final largo.', audio: '/audio/L8.4/phrases/d2-line8.mp3' },
        { speaker: 'Crítico Martín', text: '¿Cuánto tiempo en barrica de roble?', audio: '/audio/L8.4/phrases/d2-line9.mp3' },
        { speaker: 'Sommelier Clara', text: 'Dieciocho meses en roble francés. El vino tiene notas de vainilla y cereza madura.', audio: '/audio/L8.4/phrases/d2-line10.mp3' },
        { speaker: 'Crítico Martín', text: 'Exquisito. Y el cordero... la cocción es precisa. El interior queda rosado y jugoso.', audio: '/audio/L8.4/phrases/d2-line11.mp3' },
        { speaker: 'Sommelier Clara', text: 'El chef lo braseó durante tres horas a temperatura baja antes del sellado final.', audio: '/audio/L8.4/phrases/d2-line12.mp3' },
        { speaker: 'Crítico Martín', text: 'Se nota. El bocado se deshace en la boca. La presentación es minimalista pero impactante.', audio: '/audio/L8.4/phrases/d2-line13.mp3' },
        { speaker: 'Sommelier Clara', text: 'Para el postre, un Pedro Ximénez. Notas de dátil, higo y chocolate amargo.', audio: '/audio/L8.4/phrases/d2-line14.mp3' },
        { speaker: 'Crítico Martín', text: 'Una cena extraordinaria. Cada plato contó una historia. Mi crítica será muy favorable.', audio: '/audio/L8.4/phrases/d2-line15.mp3' },
        { speaker: 'Sommelier Clara', text: 'Nos honra, señor Martín. La cocina española vive su mejor momento.', audio: '/audio/L8.4/phrases/d2-line16.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Experience the intensity of a professional kitchen service in Lima and witness a food critic reviewing a high-end restaurant in Barcelona.',

  culturalNotes: [
    {
      title: 'The Latin American Gastronomy Renaissance',
      content: 'Latin America is experiencing a gastronomic revolution. Peru\'s Virgilio Mart\u00ednez (Central) and Mexico\'s Enrique Olvera (Pujol) have put their countries on the global culinary map. The "World\'s 50 Best Restaurants" regularly features Latin American establishments. This renaissance celebrates indigenous ingredients — quinoa, chia, amaranth, aj\u00ed peppers — that were overlooked for centuries. "Cocina de autor" (signature cuisine) that honors ancestral recipes with modern techniques defines this movement.',
    },
    {
      title: 'Street Food Culture: The Soul of Latin Cooking',
      content: 'While fine dining gets international attention, street food remains the beating heart of Latin American gastronomy. Mexico\'s taquer\u00edas, Colombia\'s empanada carts, Peru\'s cevicher\u00edas, and Argentina\'s choripaner\u00edas serve food that is as complex and delicious as any restaurant. The phrase "la mejor comida est\u00e1 en la calle" (the best food is on the street) is a widely held belief. Street food vendors often specialize in a single dish perfected over generations — their techniques rival those of formally trained chefs.',
    },
    {
      title: 'Wine Regions of the Spanish-Speaking World',
      content: 'Spain\'s La Rioja, Ribera del Duero, and Priorat are legendary wine regions. But Latin America has emerged as a global wine power: Argentina\'s Mendoza (Malbec), Chile\'s Maipo Valley (Cabernet Sauvignon), and Mexico\'s Valle de Guadalupe challenge Old World traditions. The term "terru\u00f1o" (terroir) is central to wine culture — it captures how soil, climate, and tradition shape a wine\'s character. Wine tourism ("enoturismo") is booming across Spanish-speaking countries, making wine vocabulary essential for travelers.',
    },
  ],
  culturalGradient: 'from-orange-50 to-amber-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Saltear" means:', options: ['To boil', 'To saut\u00e9', 'To bake', 'To freeze'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La ___ en place es esencial antes de cocinar" (mise)', answer: 'mise' },
    { id: 3, type: 'mc', text: '"Blanquear" in cooking means:', options: ['To whiten clothes', 'To add white wine', 'To briefly boil and ice-shock', 'To add cream'], answer: 2 },
    { id: 4, type: 'tf', text: 'Valencian paella traditionally contains rice, rabbit, and green beans.', answer: true },
    { id: 5, type: 'mc', text: '"Maridaje" in gastronomy refers to:', options: ['A marriage ceremony', 'Food and wine pairing', 'A cooking technique', 'A type of dessert'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Los ___ del vino son suaves y redondos" (tannins)', answer: 'taninos' },
    { id: 7, type: 'mc', text: 'What does "barrica de roble" mean?', options: ['Barrel of rum', 'Oak barrel', 'Wine glass', 'Copper pot'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what does Chef Rojas say about the wok?', options: ['It should be cold', 'It should be warm', 'It should be smoking hot', 'It should be oiled'], answer: 2 },
    { id: 9, type: 'tf', text: '"Ceviche" is spelled the same way in every Spanish-speaking country.', answer: false },
    { id: 10, type: 'mc', text: '"Café de origen" means:', options: ['Coffee with milk', 'Original coffee recipe', 'Single-origin coffee', 'Instant coffee'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "El ___ de cocción del filete es medio" (point/level)', answer: 'punto' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, how long was the Rioja reserva aged in oak?', options: ['6 months', '12 months', '18 months', '24 months'], answer: 2 },
    { id: 13, type: 'mc', text: '"Emulsionar" means:', options: ['To fry quickly', 'To blend into a stable mixture', 'To freeze slowly', 'To smoke food'], answer: 1 },
    { id: 14, type: 'tf', text: 'Argentina\'s Mendoza region is world-famous for its Malbec wines.', answer: true },
    { id: 15, type: 'mc', text: '"El bocado se deshace en la boca" means:', options: ['The bite is too hot', 'The bite melts in your mouth', 'The food is spicy', 'The portion is small'], answer: 1 },
  ],

  audioBase: '/audio/L8.4/phrases',

  uniqueActivity: {
    id: 'ChefChallengeL84',
    sectionId: 'chef-challenge',
    sectionColor: 'bg-orange-50/40',
    sectionBorder: 'border-orange-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'kitchen-techniques': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'regional-cuisines': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'food-criticism': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'beverages-specialty': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'chef-challenge': { bg: 'bg-orange-50/40', border: 'border-orange-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
