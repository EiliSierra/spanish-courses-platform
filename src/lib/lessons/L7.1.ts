import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Phonetic Variation (12) ===
  { spanish: 'En Argentina se pronuncia "yo" y "calle" con sonido "sh": "sho" y "cashe" — eso es el sheísmo rioplatense', english: 'In Argentina "yo" and "calle" are pronounced with a "sh" sound: "sho" and "cashe" — that\'s Rioplatense sheísmo', pronunciation: 'ehn ahr-hehn-TEE-nah seh proh-NOON-see-ah SHOH ee KAH-sheh EH-soh ehs ehl sheh-EES-moh rree-oh-plah-TEHN-seh', category: 'phonetic-variation', audio: 'en-argentina-sheismo' },
  { spanish: 'El seseo consiste en pronunciar la "z" y la "c" ante e/i como "s": "sapato" en vez de "θapato"', english: 'Seseo means pronouncing "z" and "c" before e/i as "s": "sapato" instead of "θapato"', pronunciation: 'ehl seh-SEH-oh kohn-SEES-teh ehn proh-noon-see-AHR lah SEH-tah ee lah SEH KOH-moh EH-seh sah-PAH-toh ehn behs deh thah-PAH-toh', category: 'phonetic-variation', audio: 'el-seseo-consiste' },
  { spanish: 'La distinción entre "s" y "z" solo se mantiene en el centro y norte de España', english: 'The distinction between "s" and "z" is only maintained in central and northern Spain', pronunciation: 'lah dees-teen-see-OHN EHN-treh EH-seh ee SEH-tah SOH-loh seh mahn-tee-EH-neh ehn ehl SEHN-troh ee NOHR-teh deh ehs-PAH-nyah', category: 'phonetic-variation', audio: 'la-distincion-entre-s-y-z' },
  { spanish: 'En el Caribe, la "s" final se aspira o desaparece: "estos" suena como "ehtoh"', english: 'In the Caribbean, final "s" is aspirated or dropped: "estos" sounds like "ehtoh"', pronunciation: 'ehn ehl kah-REE-beh lah EH-seh fee-NAHL seh ahs-PEE-rah oh deh-sah-pah-REH-seh EHS-tohs SWEH-nah KOH-moh EH-toh', category: 'phonetic-variation', audio: 'en-el-caribe-la-s-final' },
  { spanish: 'El voseo argentino cambia la conjugación: "vos tenés", "vos podés", "vos querés"', english: 'Argentine voseo changes the conjugation: "vos tenés," "vos podés," "vos querés"', pronunciation: 'ehl boh-SEH-oh ahr-hehn-TEE-noh KAHM-bee-ah lah kohn-hoo-gah-see-OHN bohs teh-NEHS bohs poh-DEHS bohs keh-REHS', category: 'phonetic-variation', audio: 'el-voseo-argentino' },
  { spanish: 'En México, la "x" puede sonar como "j", "ks", o "sh" según la palabra: México, examen, Xochimilco', english: 'In Mexico, "x" can sound like "j," "ks," or "sh" depending on the word: México, examen, Xochimilco', pronunciation: 'ehn MEH-hee-koh lah EH-kees PWEH-deh soh-NAHR KOH-moh HOH-tah kah-EH-seh oh shh seh-GOON lah pah-LAH-brah', category: 'phonetic-variation', audio: 'en-mexico-la-x-puede' },
  { spanish: 'En el Caribe se intercambian la "r" y la "l": "puerta" suena como "puelta" y "algo" como "argo"', english: 'In the Caribbean "r" and "l" are swapped: "puerta" sounds like "puelta" and "algo" like "argo"', pronunciation: 'ehn ehl kah-REE-beh seh een-tehr-KAHM-bee-ahn lah EH-rreh ee lah EH-leh PWEHR-tah SWEH-nah KOH-moh PWEL-tah', category: 'phonetic-variation', audio: 'en-el-caribe-r-y-l' },
  { spanish: 'En Chile, la "ch" a veces suena más suave, casi como "sh": "mucho" se oye como "musho"', english: 'In Chile, "ch" sometimes sounds softer, almost like "sh": "mucho" sounds like "musho"', pronunciation: 'ehn CHEE-leh lah CHEH ah BEH-sehs SWEH-nah mahs SWAH-beh KAH-see KOH-moh shh MOO-choh seh OH-yeh KOH-moh MOO-shoh', category: 'phonetic-variation', audio: 'en-chile-la-ch' },
  { spanish: 'El yeísmo fusiona la "ll" y la "y" en un solo sonido: "calle" y "caye" suenan igual', english: 'Yeísmo merges "ll" and "y" into one sound: "calle" and "caye" sound the same', pronunciation: 'ehl yeh-EES-moh foo-see-OH-nah lah EH-yeh-DOH-bleh ee lah ee-gree-EH-gah ehn oon SOH-loh soh-NEE-doh', category: 'phonetic-variation', audio: 'el-yeismo-fusiona' },
  { spanish: 'En los Andes, la "ll" se distingue de la "y": "calle" tiene un sonido lateral palatal claro', english: 'In the Andes, "ll" is distinct from "y": "calle" has a clear lateral palatal sound', pronunciation: 'ehn lohs AHN-dehs lah EH-yeh-DOH-bleh seh dees-TEEN-geh deh lah ee-gree-EH-gah KAH-yeh tee-EH-neh oon soh-NEE-doh lah-teh-RAHL', category: 'phonetic-variation', audio: 'en-los-andes-la-ll' },
  { spanish: 'La "j" española peninsular es más fuerte y gutural que la "j" suave latinoamericana', english: 'The Peninsular Spanish "j" is stronger and more guttural than the soft Latin American "j"', pronunciation: 'lah HOH-tah ehs-pah-NYOH-lah peh-neen-soo-LAHR ehs mahs FWEHR-teh ee goo-too-RAHL keh lah HOH-tah SWAH-beh', category: 'phonetic-variation', audio: 'la-j-espanola-peninsular' },
  { spanish: 'En Centroamérica también se usa el voseo, pero con variaciones regionales en imperativo y subjuntivo: "vení" vs. "vení/volvé"', english: 'In Central America voseo is also used, but with regional variations in imperative and subjunctive forms', pronunciation: 'ehn sehn-troh-ah-MEH-ree-kah seh OO-sah ehl boh-SEH-oh kohn kohn-hoo-gah-see-OH-nehs dees-TEEN-tahs', category: 'phonetic-variation', audio: 'en-centroamerica-voseo' },

  // === Vocabulary Divergence (12) ===
  { spanish: 'El transporte público se llama "autobús" en España, "camión" en México, "colectivo" en Argentina y "guagua" en Cuba', english: 'Public transport is called "autobús" in Spain, "camión" in Mexico, "colectivo" in Argentina, and "guagua" in Cuba', pronunciation: 'ehl trahns-POHR-teh POO-blee-koh seh YAH-mah ow-toh-BOOS ehn ehs-PAH-nyah kah-mee-OHN ehn MEH-hee-koh koh-lehk-TEE-boh ehn ahr-hehn-TEE-nah GWAH-gwah ehn KOO-bah', category: 'vocabulary-divergence', audio: 'el-transporte-publico' },
  { spanish: 'Una vivienda es un "apartamento" en Colombia, un "departamento" en México, y un "piso" en España', english: 'A dwelling is an "apartamento" in Colombia, a "departamento" in Mexico, and a "piso" in Spain', pronunciation: 'OO-nah bee-bee-EHN-dah ehs oon ah-pahr-tah-MEHN-toh ehn koh-LOHM-bee-ah oon deh-pahr-tah-MEHN-toh ehn MEH-hee-koh ee oon PEE-soh ehn ehs-PAH-nyah', category: 'vocabulary-divergence', audio: 'una-vivienda-es' },
  { spanish: 'En España se dice "ordenador", en México "computadora" y en Colombia "computador"', english: 'In Spain they say "ordenador," in Mexico "computadora," and in Colombia "computador"', pronunciation: 'ehn ehs-PAH-nyah seh DEE-seh ohr-deh-nah-DOHR ehn MEH-hee-koh kohm-poo-tah-DOH-rah ee ehn koh-LOHM-bee-ah kohm-poo-tah-DOHR', category: 'vocabulary-divergence', audio: 'en-espana-ordenador' },
  { spanish: 'El vehículo es un "coche" en España, un "carro" en el Caribe y Centroamérica, y un "auto" en Argentina y Chile', english: 'The vehicle is a "coche" in Spain, a "carro" in the Caribbean and Central America, and an "auto" in Argentina and Chile', pronunciation: 'ehl beh-EE-koo-loh ehs oon KOH-cheh ehn ehs-PAH-nyah oon KAH-rroh ehn ehl kah-REE-beh ee oon OW-toh ehn ahr-hehn-TEE-nah', category: 'vocabulary-divergence', audio: 'el-vehiculo-coche-carro' },
  { spanish: 'Los niños son "chicos" en Argentina, "chamacos" en México, "chamos" en Venezuela y "pibes" en el Río de la Plata', english: 'Children are "chicos" in Argentina, "chamacos" in Mexico, "chamos" in Venezuela, and "pibes" in the Río de la Plata', pronunciation: 'lohs NEE-nyohs sohn CHEE-kohs ehn ahr-hehn-TEE-nah chah-MAH-kohs ehn MEH-hee-koh CHAH-mohs ehn beh-neh-SWEH-lah PEE-behs', category: 'vocabulary-divergence', audio: 'los-ninos-chicos-chamacos' },
  { spanish: 'El "móvil" español es un "celular" en casi toda Latinoamérica', english: 'The Spanish "móvil" is a "celular" in almost all of Latin America', pronunciation: 'ehl MOH-beel ehs-pah-NYOHL ehs oon seh-loo-LAHR ehn KAH-see TOH-dah lah-tee-noh-ah-MEH-ree-kah', category: 'vocabulary-divergence', audio: 'el-movil-celular' },
  { spanish: 'El "zumo" de España es "jugo" en Latinoamérica; las "patatas" son "papas"', english: 'Spain\'s "zumo" is "jugo" in Latin America; "patatas" are "papas"', pronunciation: 'ehl SOO-moh deh ehs-PAH-nyah ehs HOO-goh ehn lah-tee-noh-ah-MEH-ree-kah lahs pah-TAH-tahs sohn PAH-pahs', category: 'vocabulary-divergence', audio: 'el-zumo-jugo-patatas-papas' },
  { spanish: '"Plata" significa dinero en Argentina, pero en México se dice "lana" y en España "pasta"', english: '"Plata" means money in Argentina, but in Mexico they say "lana" and in Spain "pasta"', pronunciation: 'PLAH-tah seeg-nee-FEE-kah dee-NEH-roh ehn ahr-hehn-TEE-nah PEH-roh ehn MEH-hee-koh seh DEE-seh LAH-nah ee ehn ehs-PAH-nyah PAHS-tah', category: 'vocabulary-divergence', audio: 'plata-lana-pasta-dinero' },
  { spanish: 'El "bolígrafo" español es una "pluma" en México, un "lapicero" en Perú y una "birome" en Argentina', english: 'The Spanish "bolígrafo" is a "pluma" in Mexico, a "lapicero" in Peru, and a "birome" in Argentina', pronunciation: 'ehl boh-LEE-grah-foh ehs-pah-NYOHL ehs OO-nah PLOO-mah ehn MEH-hee-koh oon lah-pee-SEH-roh ehn peh-ROO OO-nah bee-ROH-meh ehn ahr-hehn-TEE-nah', category: 'vocabulary-divergence', audio: 'el-boligrafo-pluma-lapicero' },
  { spanish: '"Enojado" se usa en México, "enfadado" en España, "arrecho" en Venezuela y "caliente" en Colombia', english: '"Enojado" is used in Mexico, "enfadado" in Spain, "arrecho" in Venezuela, and "caliente" in Colombia (for angry)', pronunciation: 'eh-noh-HAH-doh seh OO-sah ehn MEH-hee-koh ehn-fah-DAH-doh ehn ehs-PAH-nyah ah-RREH-choh ehn beh-neh-SWEH-lah kah-lee-EHN-teh ehn koh-LOHM-bee-ah', category: 'vocabulary-divergence', audio: 'enojado-enfadado-arrecho' },
  { spanish: 'Una "pollera" argentina es una "falda" en España y una "enagua" en Costa Rica', english: 'An Argentine "pollera" is a "falda" in Spain and an "enagua" in Costa Rica', pronunciation: 'OO-nah poh-YEH-rah ahr-hehn-TEE-nah ehs OO-nah FAHL-dah ehn ehs-PAH-nyah ee OO-nah eh-NAH-gwah ehn KOHS-tah RREE-kah', category: 'vocabulary-divergence', audio: 'pollera-falda-enagua' },
  { spanish: '"Manejar" es conducir en México, pero en España se dice "conducir" y en Argentina "manejar" o "conducir"', english: '"Manejar" is to drive in Mexico, but in Spain they say "conducir" and in Argentina "manejar" or "conducir"', pronunciation: 'mah-neh-HAHR ehs kohn-doo-SEER ehn MEH-hee-koh PEH-roh ehn ehs-PAH-nyah seh DEE-seh kohn-doo-SEER', category: 'vocabulary-divergence', audio: 'manejar-conducir' },

  // === Sociolects & Registers (12) ===
  { spanish: 'El lunfardo porteño nació en los conventillos de Buenos Aires: "laburo" (trabajo), "mina" (mujer), "afanar" (robar)', english: 'Buenos Aires lunfardo was born in the tenement houses: "laburo" (work), "mina" (woman), "afanar" (steal)', pronunciation: 'ehl loon-FAHR-doh pohr-TEH-nyoh nah-see-OH ehn lohs kohn-behn-TEE-yohs deh BWEH-nohs AY-rehs lah-BOO-roh MEE-nah ah-fah-NAHR', category: 'sociolects-registers', audio: 'el-lunfardo-porteno' },
  { spanish: 'El caló mexicano incluye expresiones como "neta" (verdad), "chido" (genial), "chamba" (trabajo)', english: 'Mexican caló includes expressions like "neta" (truth), "chido" (cool), "chamba" (work)', pronunciation: 'ehl kah-LOH meh-hee-KAH-noh een-KLOO-yeh ehks-preh-see-OH-nehs KOH-moh NEH-tah CHEE-doh CHAHM-bah', category: 'sociolects-registers', audio: 'el-calo-mexicano' },
  { spanish: 'El parlache de Medellín usa "parce" (amigo), "bacano" (genial), "gonorrea" (insulto/halago según el tono)', english: 'Medellín parlache uses "parce" (friend), "bacano" (cool), "gonorrea" (insult/compliment depending on tone)', pronunciation: 'ehl pahr-LAH-cheh deh meh-deh-YEEN OO-sah PAHR-seh bah-KAH-noh goh-noh-RREH-ah', category: 'sociolects-registers', audio: 'el-parlache-medellin' },
  { spanish: 'La jerga juvenil española incluye "molar" (gustar), "flipar" (sorprenderse), "quedada" (encuentro)', english: 'Spanish youth slang includes "molar" (to like), "flipar" (to be amazed), "quedada" (meetup)', pronunciation: 'lah HEHR-gah hoo-beh-NEEL ehs-pah-NYOH-lah een-KLOO-yeh moh-LAHR flee-PAHR keh-DAH-dah', category: 'sociolects-registers', audio: 'la-jerga-juvenil-espanola' },
  { spanish: 'La clase social influye en el habla: el registro formal ("¿Podría usted...?") versus el coloquial ("¿Me hacés un favor?")', english: 'Social class affects speech: formal register ("Could you...?") versus colloquial ("Can you do me a favor?")', pronunciation: 'lah KLAH-seh soh-see-AHL een-FLOO-yeh ehn ehl AH-blah ehl rreh-HEES-troh fohr-MAHL BEHR-soos ehl koh-loh-kee-AHL', category: 'sociolects-registers', audio: 'la-clase-social-influye' },
  { spanish: 'En Colombia, el habla paisa (de Antioquia) es muy distinta del habla costeña: entonación, velocidad y vocabulario cambian', english: 'In Colombia, paisa speech (from Antioquia) is very different from coastal speech: intonation, speed, and vocabulary change', pronunciation: 'ehn koh-LOHM-bee-ah ehl AH-blah PAY-sah ehs mooy dees-TEEN-tah dehl AH-blah kohs-TEH-nyah', category: 'sociolects-registers', audio: 'en-colombia-habla-paisa' },
  { spanish: 'El vesre argentino invierte las sílabas: "feca" por café, "garpa" por pagar, "jermu" por mujer', english: 'Argentine vesre reverses syllables: "feca" for café, "garpa" for pagar, "jermu" for mujer', pronunciation: 'ehl BEHS-reh ahr-hehn-TEE-noh een-bee-EHR-teh lahs SEE-lah-bahs FEH-kah pahr kah-FEH GAHR-pah pohr pah-GAHR HEHR-moo pohr moo-HEHR', category: 'sociolects-registers', audio: 'el-vesre-argentino' },
  { spanish: 'En Chile, el "flaite" es un sociolecto asociado con barrios populares: "cachai" (¿entiendes?), "wea" (cosa)', english: 'In Chile, "flaite" is a sociolect associated with popular neighborhoods: "cachai" (you get it?), "wea" (thing)', pronunciation: 'ehn CHEE-leh ehl FLAY-teh ehs oon soh-see-oh-LEHK-toh ah-soh-see-AH-doh kohn BAH-rree-ohs poh-poo-LAH-rehs', category: 'sociolects-registers', audio: 'en-chile-flaite' },
  { spanish: 'El habla formal mexicana es reconocida por su cortesía: "Disculpe, ¿sería tan amable de...?"', english: 'Formal Mexican speech is recognized for its politeness: "Excuse me, would you be so kind as to...?"', pronunciation: 'ehl AH-blah fohr-MAHL meh-hee-KAH-nah ehs rreh-koh-noh-SEE-dah pohr soo kohr-teh-SEE-ah dees-KOOL-peh seh-REE-ah tahn ah-MAH-bleh deh', category: 'sociolects-registers', audio: 'el-habla-formal-mexicana' },
  { spanish: 'El coa chileno es la jerga carcelaria: "cana" (cárcel), "paco" (policía), "gil" (tonto)', english: 'Chilean coa is prison slang: "cana" (jail), "paco" (police), "gil" (fool)', pronunciation: 'ehl KOH-ah chee-LEH-noh ehs lah HEHR-gah kahr-seh-LAH-ree-ah KAH-nah PAH-koh heel', category: 'sociolects-registers', audio: 'el-coa-chileno' },
  { spanish: 'En España, el habla andaluza aspira consonantes finales y suena muy distinta del castellano del norte', english: 'In Spain, Andalusian speech aspirates final consonants and sounds very different from northern Castilian', pronunciation: 'ehn ehs-PAH-nyah ehl AH-blah ahn-dah-LOO-sah ahs-PEE-rah kohn-soh-NAHN-tehs fee-NAH-lehs ee SWEH-nah mooy dees-TEEN-tah', category: 'sociolects-registers', audio: 'en-espana-habla-andaluza' },
  { spanish: 'El habla de las clases altas limeñas se distingue por una pronunciación más cuidada y uso de "usted" frecuente', english: 'Upper-class Lima speech is distinguished by more careful pronunciation and frequent use of "usted"', pronunciation: 'ehl AH-blah deh lahs KLAH-sehs AHL-tahs lee-MEH-nyahs seh dees-TEEN-geh pohr OO-nah proh-noon-see-ah-see-OHN mahs kwee-DAH-dah', category: 'sociolects-registers', audio: 'el-habla-clases-altas-lima' },

  // === Code-Switching (12) ===
  { spanish: 'El spanglish mezcla inglés y español fluidamente: "Voy a parkear el carro y te llamo pa\'back"', english: 'Spanglish mixes English and Spanish fluidly: "I\'m going to park the car and I\'ll call you back"', pronunciation: 'ehl SPAHN-gleesh MEHS-klah een-GLEHS ee ehs-pah-NYOHL floo-ee-dah-MEHN-teh boy ah pahr-keh-AHR ehl KAH-rroh ee teh YAH-moh pah BAHK', category: 'code-switching', audio: 'el-spanglish-mezcla' },
  { spanish: 'Los bilingües cambian de idioma según el tema: hablan de trabajo en inglés y de familia en español', english: 'Bilinguals switch languages by topic: they talk about work in English and family in Spanish', pronunciation: 'lohs bee-LEEN-gwehs KAHM-bee-ahn deh ee-dee-OH-mah seh-GOON ehl TEH-mah AH-blahn deh trah-BAH-hoh ehn een-GLEHS ee deh fah-MEE-lee-ah ehn ehs-pah-NYOHL', category: 'code-switching', audio: 'los-bilingues-cambian' },
  { spanish: '"Hablar mocho" se dice cuando alguien mezcla mal los dos idiomas, ni inglés ni español completo', english: '"Hablar mocho" is said when someone mixes both languages poorly, neither full English nor full Spanish', pronunciation: 'ah-BLAHR MOH-choh seh DEE-seh KWAHN-doh AHL-gee-ehn MEHS-klah mahl lohs dohs ee-dee-OH-mahs', category: 'code-switching', audio: 'hablar-mocho-se-dice' },
  { spanish: 'El español chicano incluye préstamos como "lonche" (lunch), "troca" (truck), "yarda" (yard)', english: 'Chicano Spanish includes borrowings like "lonche" (lunch), "troca" (truck), "yarda" (yard)', pronunciation: 'ehl ehs-pah-NYOHL chee-KAH-noh een-KLOO-yeh PREHS-tah-mohs KOH-moh LOHN-cheh TROH-kah YAHR-dah', category: 'code-switching', audio: 'el-espanol-chicano' },
  { spanish: 'El nuyorican mezcla el español puertorriqueño con inglés neoyorquino: "Oye bro, vamos pal party esta noche"', english: 'Nuyorican blends Puerto Rican Spanish with New York English: "Hey bro, let\'s go to the party tonight"', pronunciation: 'ehl noo-yoh-REE-kahn MEHS-klah ehl ehs-pah-NYOHL pwehr-toh-rree-KEH-nyoh kohn een-GLEHS neh-oh-yohr-KEE-noh OH-yeh broh BAH-mohs pahl PAHR-tee', category: 'code-switching', audio: 'el-nuyorican-mezcla' },
  { spanish: 'La identidad lingüística es política: elegir hablar español en EE.UU. es un acto de resistencia cultural', english: 'Linguistic identity is political: choosing to speak Spanish in the U.S. is an act of cultural resistance', pronunciation: 'lah ee-dehn-tee-DAHD leen-GWEES-tee-kah ehs poh-LEE-tee-kah eh-leh-HEER ah-BLAHR ehs-pah-NYOHL ehn EH-EH-OO-OO ehs oon AHK-toh deh rreh-sees-TEHN-see-ah', category: 'code-switching', audio: 'la-identidad-linguistica' },
  { spanish: 'El code-switching no es un defecto: es una habilidad cognitiva avanzada de los hablantes bilingües', english: 'Code-switching is not a defect: it\'s an advanced cognitive skill of bilingual speakers', pronunciation: 'ehl KOHD-SWEE-cheeng noh ehs oon deh-FEHK-toh ehs OO-nah ah-bee-lee-DAHD kohg-nee-TEE-bah ah-bahn-SAH-dah', category: 'code-switching', audio: 'el-code-switching-no-es' },
  { spanish: 'En Miami se escucha "Ay, I forgot decirte que el meeting es at three en el conference room"', english: 'In Miami you hear "Oh, I forgot to tell you that the meeting is at three in the conference room"', pronunciation: 'ehn mah-YAH-mee seh ehs-KOO-chah ay ay fohr-GAHT deh-SEER-teh keh ehl MEE-teeng ehs aht three ehn ehl KOHN-feh-rehns room', category: 'code-switching', audio: 'en-miami-se-escucha' },
  { spanish: 'Los jóvenes latinos en EE.UU. crean nuevas palabras: "textear" (text), "likear" (like), "googlear" (google)', english: 'Young Latinos in the U.S. create new words: "textear" (text), "likear" (like), "googlear" (google)', pronunciation: 'lohs HOH-beh-nehs lah-TEE-nohs ehn EH-EH-OO-OO KREH-ahn NWEH-bahs pah-LAH-brahs tehks-teh-AHR lee-keh-AHR goo-gleh-AHR', category: 'code-switching', audio: 'los-jovenes-latinos' },
  { spanish: 'Gloria Anzaldúa escribió que "el español chicano es una lengua fronteriza, ni de aquí ni de allá"', english: 'Gloria Anzaldúa wrote that "Chicano Spanish is a border language, neither from here nor from there"', pronunciation: 'GLOH-ree-ah ahn-sahl-DOO-ah ehs-kree-bee-OH keh ehl ehs-pah-NYOHL chee-KAH-noh ehs OO-nah LEHN-gwah frohn-teh-REE-sah', category: 'code-switching', audio: 'gloria-anzaldua-escribio' },
  { spanish: 'El cambio de código puede ser interoracional (entre oraciones) o intraoracional (dentro de una misma oración)', english: 'Code-switching can be intersentential (between sentences) or intrasentential (within the same sentence)', pronunciation: 'ehl KAHM-bee-oh deh KOH-dee-goh PWEH-deh sehr een-tehr-oh-rah-see-oh-NAHL oh een-trah-oh-rah-see-oh-NAHL', category: 'code-switching', audio: 'el-cambio-de-codigo' },
  { spanish: 'En la frontera México-EE.UU., el español y el inglés conviven en un continuo lingüístico llamado "border talk"', english: 'On the Mexico-U.S. border, Spanish and English coexist in a linguistic continuum called "border talk"', pronunciation: 'ehn lah frohn-TEH-rah MEH-hee-koh EH-EH-OO-OO ehl ehs-pah-NYOHL ee ehl een-GLEHS kohn-BEE-behn ehn oon kohn-TEE-noo-oh leen-GWEES-tee-koh', category: 'code-switching', audio: 'en-la-frontera-border-talk' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L71PhraseByAudio = phraseByAudio

// === DIALECT DECODER (unique activity) ===

export interface DialectDecoderChallenge {
  phrase: string
  english: string
  correctCountry: string
  options: string[]
}

export const DIALECT_DECODER_CHALLENGES: DialectDecoderChallenge[] = [
  {
    phrase: '¿Tenés un mango? Necesito tomarme un bondi.',
    english: 'Do you have a peso? I need to take a bus.',
    correctCountry: 'Argentina',
    options: ['Mexico', 'Argentina', 'Spain', 'Colombia'],
  },
  {
    phrase: '¡Qué chido, güey! Vamos por unas chelas.',
    english: 'How cool, dude! Let\'s go for some beers.',
    correctCountry: 'Mexico',
    options: ['Mexico', 'Chile', 'Cuba', 'Peru'],
  },
  {
    phrase: '¡Tío, mola mogollón! Quedamos en mi piso.',
    english: 'Dude, that\'s super cool! Let\'s meet at my apartment.',
    correctCountry: 'Spain',
    options: ['Argentina', 'Mexico', 'Spain', 'Venezuela'],
  },
  {
    phrase: '¡Qué bacano, parce! Vamos a rumbear esta noche.',
    english: 'How awesome, bro! Let\'s go party tonight.',
    correctCountry: 'Colombia',
    options: ['Chile', 'Colombia', 'Cuba', 'Spain'],
  },
  {
    phrase: '¡Cachai? La weá está filete, vamos altiro.',
    english: 'You get it? The thing is great, let\'s go right now.',
    correctCountry: 'Chile',
    options: ['Argentina', 'Peru', 'Chile', 'Mexico'],
  },
  {
    phrase: 'Oye asere, ¿qué bolá? Vamos en la guagua.',
    english: 'Hey buddy, what\'s up? Let\'s go on the bus.',
    correctCountry: 'Cuba',
    options: ['Cuba', 'Spain', 'Colombia', 'Mexico'],
  },
  {
    phrase: 'Causa, ese ceviche está de la ptm, pe.',
    english: 'Bro, that ceviche is amazing, man.',
    correctCountry: 'Peru',
    options: ['Argentina', 'Peru', 'Chile', 'Venezuela'],
  },
]

// === LESSON DATA ===

export const L71Data: LessonData = {
  id: 'L7.1',
  hero: {
    lessonId: 'L7.1',
    title: 'Dialectology & Sociolinguistics',
    subtitle: 'One language, infinite voices — exploring the rich mosaic of Spanish varieties',
    description: 'Dive deep into the regional varieties of Spanish: Mexican, Rioplatense, Caribbean, Andean, Peninsular, and Chilean. Explore phonetic differences, vocabulary divergence, sociolects, code-switching, and how identity shapes language across the Spanish-speaking world.',
    image: '/images/L7.1/L7.1.jpg',
    gradient: 'from-teal-800/65 via-emerald-700/55 to-green-700/65',
    accentColor: 'teal-200',
  },

  objectives: [
    { icon: '\uD83C\uDF0D', title: 'Phonetic Variation', desc: 'Master yeísmo, seseo, aspiration of /s/, voseo conjugations, Caribbean r/l swap, and the Mexican "x."' },
    { icon: '\uD83D\uDCD6', title: 'Vocabulary Divergence', desc: 'Learn how the same object has different names: autobús/camión/colectivo/guagua across the Spanish world.' },
    { icon: '\uD83C\uDFAD', title: 'Sociolects & Registers', desc: 'Explore lunfardo, caló, parlache, and how social class shapes speech in different countries.' },
    { icon: '\uD83D\uDD00', title: 'Code-Switching', desc: 'Understand Spanglish, Chicano Spanish, Nuyorican, and the cognitive power of bilingual switching.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.8', label: 'Regional Variation', detail: 'L5.8 introduced regional slang. Now go deeper into the systematic phonetic and lexical differences that define each major dialect.' },
    { fromLesson: 'L6.4', label: 'Language Evolution', detail: 'L6.4 explored how languages change. Now see these forces at work in real-time across the Spanish-speaking world.' },
    { fromLesson: 'L4.3', label: 'Formal/Informal Registers', detail: 'L4.3 covered tú/usted/vos. Now understand how register intersects with social class and regional identity.' },
  ],

  sectionTransitions: [
    { afterSection: 'phonetic-variation', text: 'You\'ve heard how Spanish sounds different across the world! Now let\'s see how vocabulary splits by country.' },
    { afterSection: 'vocabulary-divergence', text: 'Same language, different words! Now let\'s explore how social class and subcultures shape speech.' },
    { afterSection: 'sociolects-registers', text: 'From lunfardo to parlache, sociolects reveal social identity. Now let\'s dive into code-switching.' },
    { afterSection: 'dialogues', text: 'Fascinating cross-dialect conversations! Let\'s explore the cultural significance of linguistic diversity.' },
    { afterSection: 'cultural', text: 'Cultural context absorbed! Now test your ear in the Dialect Decoder challenge.' },
    { afterSection: 'dialect-decoder', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'En mi país se dice...', english: 'In my country we say...' },
    { spanish: 'Eso es un regionalismo de...', english: 'That\'s a regionalism from...' },
    { spanish: 'El voseo se usa en...', english: 'Voseo is used in...' },
    { spanish: 'Los bilingües alternan entre...', english: 'Bilinguals alternate between...' },
    { spanish: 'Esa palabra es lunfardo / caló / parlache', english: 'That word is lunfardo / caló / parlache' },
    { spanish: 'El cambio de código ocurre cuando...', english: 'Code-switching happens when...' },
  ],

  pronunciationChallenges: [
    { spanish: 'En Argentina se pronuncia "yo" y "calle" con sonido "sh": "sho" y "cashe"', pronunciation: 'ehn ahr-hehn-TEE-nah seh proh-NOON-see-ah SHOH ee KAH-sheh', english: 'In Argentina "yo" and "calle" are pronounced with a "sh" sound', audio: 'en-argentina-se-pronuncia-yo-y-calle-con-sonido-sh-sho-y-cashe', tip: 'Rioplatense Spanish has the most distinctive pronunciation: "ll" and "y" become "sh" (sheísmo). A porteño says "sho me shamo..." while a Mexican says "yo me yamo..." Same language, completely different sound!' },
    { spanish: 'En el Caribe, la "s" final se aspira o desaparece: "estos" suena como "ehtoh"', pronunciation: 'ehn ehl kah-REE-beh lahs EH-seh fee-NAHL seh ahs-PEE-rah EHS-tohs SWEH-nah KOH-moh EH-toh', english: 'In the Caribbean, final "s" is aspirated or dropped', audio: 'en-el-caribe-la-s-final-se-aspira-o-desaparece-estos-suena-como-ehtoh', tip: 'Caribbean Spanish (Cuba, Dominican Republic, Puerto Rico, coastal Colombia and Venezuela) weakens or drops final "s." This is so systematic that speakers understand perfectly — "los otros" becomes "loh otroh." It\'s a feature, not an error!' },
    { spanish: 'El voseo argentino cambia la conjugación: "vos tenés", "vos podés", "vos querés"', pronunciation: 'ehl boh-SEH-oh ahr-hehn-TEE-noh KAHM-bee-ah bohs teh-NEHS bohs poh-DEHS bohs keh-REHS', english: 'Argentine voseo changes the conjugation: "vos tenés," "vos podés," "vos querés"', audio: 'el-voseo-argentino-cambia-la-conjugacion-vos-tenes-vos-podes-vos-queres', tip: 'Voseo isn\'t just replacing "tú" with "vos" — the entire conjugation changes! Tú tienes → Vos tenés, Tú quieres → Vos querés, Tú puedes → Vos podés. The stress shifts to the last syllable. Used daily in Argentina, Uruguay, and much of Central America.' },
    { spanish: 'El spanglish mezcla inglés y español fluidamente: "Voy a parkear el carro"', pronunciation: 'ehl SPAHN-gleesh MEHS-klah een-GLEHS ee ehs-pah-NYOHL boy ah pahr-keh-AHR ehl KAH-rroh', english: 'Spanglish mixes English and Spanish fluidly: "I\'m going to park the car"', audio: 'el-spanglish-mezcla-ingles-y-espanol-fluidamente-voy-a-parkear-el-carro', tip: 'Spanglish isn\'t "bad Spanish" — it\'s a creative, rule-governed way of speaking that demonstrates advanced bilingual competence. Words like "parkear," "textear," and "lonche" follow Spanish morphological rules applied to English roots.' },
    { spanish: 'El lunfardo porteño nació en los conventillos de Buenos Aires: "laburo", "mina", "afanar"', pronunciation: 'ehl loon-FAHR-doh pohr-TEH-nyoh nah-see-OH ehn lohs kohn-behn-TEE-yohs lah-BOO-roh MEE-nah ah-fah-NAHR', english: 'Buenos Aires lunfardo was born in the tenement houses: "laburo," "mina," "afanar"', audio: 'el-lunfardo-porteno-nacio-en-los-conventillos-de-buenos-aires-laburo-mina-afanar', tip: 'Lunfardo began as a secret language among immigrants and criminals in 1900s Buenos Aires. Many words come from Italian (laburo from lavoro), and some use vesre (syllable reversal): café→feca, mujer→jermu. Today lunfardo permeates all social classes through tango lyrics.' },
    { spanish: 'El code-switching no es un defecto: es una habilidad cognitiva avanzada de los hablantes bilingües', pronunciation: 'ehl KOHD-SWEE-cheeng noh ehs oon deh-FEHK-toh ehs OO-nah ah-bee-lee-DAHD kohg-nee-TEE-bah ah-bahn-SAH-dah', english: 'Code-switching is not a defect: it\'s an advanced cognitive skill of bilingual speakers', audio: 'el-code-switching-no-es-un-defecto-es-una-habilidad-cognitiva-avanzada-de-los-hablantes-bilingues', tip: 'Research shows bilingual code-switchers have enhanced executive function, better multitasking ability, and delayed onset of dementia. Switching languages mid-sentence requires monitoring both grammars simultaneously — it\'s a cognitive workout, not a linguistic deficiency.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'phonetic-variation', label: 'Phonetic Variation' },
    { id: 'vocabulary-divergence', label: 'Vocabulary Divergence' },
    { id: 'sociolects-registers', label: 'Sociolects & Registers' },
    { id: 'code-switching', label: 'Code-Switching' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'dialect-sorting', label: 'Dialect Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'dialect-decoder', label: 'Dialect Decoder' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'phonetic-variation',
      title: 'Phonetic Variation — Variación Fonética',
      description: 'Spanish sounds radically different depending on where you are. From the "sh" of Buenos Aires to the aspirated "s" of the Caribbean, each region has its own sonic fingerprint.',
      tabs: [
        { label: 'Pronunciation Features', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'phonetic-variation').slice(0, 6) },
        { label: 'Regional Sound Systems', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'phonetic-variation').slice(6) },
      ],
    },
    {
      id: 'vocabulary-divergence',
      title: 'Vocabulary Divergence — Divergencia Léxica',
      description: 'The same object, dozens of names. A bus is an autobús, camión, colectivo, guagua, or micro depending on which country you\'re in.',
      tabs: [
        { label: 'Everyday Objects', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'vocabulary-divergence').slice(0, 6) },
        { label: 'More Variations', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'vocabulary-divergence').slice(6) },
      ],
    },
    {
      id: 'sociolects-registers',
      title: 'Sociolects & Registers — Sociolectos y Registros',
      description: 'Language reveals social identity. Lunfardo in Buenos Aires, caló in Mexico, parlache in Medellín — each sociolect tells a story of class, migration, and culture.',
      tabs: [
        { label: 'Urban Sociolects', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'sociolects-registers').slice(0, 6) },
        { label: 'Class & Register', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'sociolects-registers').slice(6) },
      ],
    },
    {
      id: 'code-switching',
      title: 'Code-Switching — Cambio de Código',
      description: 'When two languages meet, something beautiful happens. Spanglish, Chicano Spanish, and Nuyorican represent the creative power of bilingual minds.',
      tabs: [
        { label: 'Spanglish & Identity', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'code-switching').slice(0, 6) },
        { label: 'Bilingual Creativity', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'code-switching').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Yeísmo, Lleísmo, and Sheísmo: The "ll/y" Spectrum',
      content: 'Most Spanish speakers merge "ll" and "y" into one sound (yeísmo). In the Andes and parts of Paraguay, they\'re still distinct — "ll" has a lateral quality (lleísmo). In Buenos Aires and Montevideo, both sounds became "sh" or "zh" (sheísmo/zheísmo). So "yo me llamo" sounds like "yo me yamo" (Mexico), "yo me lyamo" (Andes), or "sho me shamo" (Buenos Aires).',
      example: 'Calle: [KAH-yeh] Mexico | [KAH-lyeh] Andes | [KAH-sheh] Buenos Aires',
    },
    {
      title: 'Seseo vs. Distinción: The Great "s/z" Divide',
      content: 'In central and northern Spain, "z" and "c" (before e/i) are pronounced "th" (like English "thin"), distinct from "s." This is called "distinción." In southern Spain, the Canary Islands, and ALL of Latin America, both sounds merge into "s" (seseo). So a Madrileño says "thapato" while everyone else says "sapato." Neither is more correct — they\'re parallel evolutions.',
      example: 'Zapato: [tha-PAH-toh] Madrid | [sah-PAH-toh] Mexico City | Cerveza: [ther-BEH-thah] vs. [ser-BEH-sah]',
    },
    {
      title: 'Caribbean Consonant Weakening',
      content: 'Caribbean Spanish (Cuba, DR, Puerto Rico, coastal Colombia/Venezuela) systematically weakens consonants: final "s" aspirates ("estos" → "ehtoh"), "r" and "l" swap ("puerta" → "puelta"), and final "r" may become "l" ("amor" → "amol"). This creates a distinctive melodic, vowel-rich sound that is one of the most recognizable accents in the Spanish world.',
      example: 'Los otros → [loh OH-troh] | Puerta → [PWEL-tah] | Algo → [AHR-goh] | Verdad → [beh-DAH]',
    },
    {
      title: 'Spanglish Is Not Broken Spanish',
      content: 'Linguists have proven that code-switching follows complex grammatical rules. Bilinguals don\'t switch randomly — they switch at syntactically permissible points. Words like "parkear," "textear," and "lonche" follow Spanish morphology perfectly. Research by Ana Celia Zentella on Nuyoricans showed that code-switching correlates with higher, not lower, proficiency in both languages.',
      example: '"Voy a parkear" follows Spanish verb patterns: park + -ear (infinitive) | "Estoy texteando" uses Spanish progressive: text + -eando',
      reviewFrom: 'L5.8',
    },
  ],

  flashcardGroups: [
    {
      key: 'phonetic',
      label: 'Phonetic Variation',
      audioKeys: ['en-argentina-sheismo', 'el-seseo-consiste', 'en-el-caribe-la-s-final', 'el-voseo-argentino', 'en-mexico-la-x-puede', 'en-el-caribe-r-y-l', 'en-chile-la-ch', 'el-yeismo-fusiona', 'en-los-andes-la-ll', 'la-j-espanola-peninsular'],
    },
    {
      key: 'vocabulary',
      label: 'Vocabulary Divergence',
      audioKeys: ['el-transporte-publico', 'una-vivienda-es', 'en-espana-ordenador', 'el-vehiculo-coche-carro', 'los-ninos-chicos-chamacos', 'el-movil-celular', 'el-zumo-jugo-patatas-papas', 'plata-lana-pasta-dinero', 'el-boligrafo-pluma-lapicero', 'enojado-enfadado-arrecho'],
    },
    {
      key: 'sociolects-switching',
      label: 'Sociolects & Code-Switching',
      audioKeys: ['el-lunfardo-porteno', 'el-calo-mexicano', 'el-parlache-medellin', 'el-vesre-argentino', 'el-spanglish-mezcla', 'el-espanol-chicano', 'el-nuyorican-mezcla', 'el-code-switching-no-es'],
    },
  ],

  matchPairs: [
    { left: 'Guagua', right: 'Bus (Cuba)' },
    { left: 'Pibe', right: 'Kid (Argentina)' },
    { left: 'Chido', right: 'Cool (Mexico)' },
    { left: 'Molar', right: 'To like (Spain)' },
    { left: 'Bacano', right: 'Awesome (Colombia)' },
    { left: 'Cachai', right: 'You get it? (Chile)' },
    { left: 'Laburo', right: 'Work (Lunfardo)' },
    { left: 'Lonche', right: 'Lunch (Spanglish)' },
  ],
  matchLabels: { left: 'Regional Word', right: 'Meaning & Origin' },

  sortActivities: [
    {
      title: 'Which Country?',
      instruction: 'Sort these words or phrases by the country or region where they are typically used.',
      buckets: ['Mexico \uD83C\uDDF2\uD83C\uDDFD', 'Argentina \uD83C\uDDE6\uD83C\uDDF7'],
      items: [
        { text: 'Chamaco (kid)', bucket: 'Mexico \uD83C\uDDF2\uD83C\uDDFD' },
        { text: 'Chido (cool)', bucket: 'Mexico \uD83C\uDDF2\uD83C\uDDFD' },
        { text: 'Camión (bus)', bucket: 'Mexico \uD83C\uDDF2\uD83C\uDDFD' },
        { text: 'Chamba (work)', bucket: 'Mexico \uD83C\uDDF2\uD83C\uDDFD' },
        { text: 'Pibe (kid)', bucket: 'Argentina \uD83C\uDDE6\uD83C\uDDF7' },
        { text: 'Colectivo (bus)', bucket: 'Argentina \uD83C\uDDE6\uD83C\uDDF7' },
        { text: 'Laburo (work)', bucket: 'Argentina \uD83C\uDDE6\uD83C\uDDF7' },
        { text: 'Mina (woman)', bucket: 'Argentina \uD83C\uDDE6\uD83C\uDDF7' },
      ],
    },
    {
      title: 'Spain or Latin America?',
      instruction: 'Sort these vocabulary items by where they are primarily used.',
      buckets: ['Spain \uD83C\uDDEA\uD83C\uDDF8', 'Latin America \uD83C\uDF0E'],
      items: [
        { text: 'Ordenador (computer)', bucket: 'Spain \uD83C\uDDEA\uD83C\uDDF8' },
        { text: 'Móvil (cellphone)', bucket: 'Spain \uD83C\uDDEA\uD83C\uDDF8' },
        { text: 'Zumo (juice)', bucket: 'Spain \uD83C\uDDEA\uD83C\uDDF8' },
        { text: 'Coche (car)', bucket: 'Spain \uD83C\uDDEA\uD83C\uDDF8' },
        { text: 'Computadora (computer)', bucket: 'Latin America \uD83C\uDF0E' },
        { text: 'Celular (cellphone)', bucket: 'Latin America \uD83C\uDF0E' },
        { text: 'Jugo (juice)', bucket: 'Latin America \uD83C\uDF0E' },
        { text: 'Carro (car)', bucket: 'Latin America \uD83C\uDF0E' },
      ],
    },
    {
      title: 'Sociolect or Code-Switching?',
      instruction: 'Is this an example of a regional sociolect or bilingual code-switching?',
      buckets: ['Sociolect \uD83C\uDFAD', 'Code-Switching \uD83D\uDD00'],
      items: [
        { text: '"Laburo" (lunfardo)', bucket: 'Sociolect \uD83C\uDFAD' },
        { text: '"Neta" (caló)', bucket: 'Sociolect \uD83C\uDFAD' },
        { text: '"Bacano" (parlache)', bucket: 'Sociolect \uD83C\uDFAD' },
        { text: '"Cachai" (Chilean)', bucket: 'Sociolect \uD83C\uDFAD' },
        { text: '"Voy a parkear"', bucket: 'Code-Switching \uD83D\uDD00' },
        { text: '"Lonche" (lunch)', bucket: 'Code-Switching \uD83D\uDD00' },
        { text: '"Textear" (to text)', bucket: 'Code-Switching \uD83D\uDD00' },
        { text: '"El meeting es at three"', bucket: 'Code-Switching \uD83D\uDD00' },
      ],
    },
  ],
  sortSectionId: 'dialect-sorting',
  sortTitle: 'Dialect Sorting',

  dialogues: [
    {
      id: 'dialogue-linguistics-class',
      title: 'Linguistics Class — UNAM, Mexico City',
      location: 'Mexico City',
      lines: [
        { speaker: 'Dra. Vega', text: 'Hoy vamos a analizar las variedades dialectales del español. ¿Quién puede dar un ejemplo de variación fonética?', audio: '/audio/L7.1/phrases/d1-line1.mp3' },
        { speaker: 'Andrés', text: 'En Argentina dicen "sho" en vez de "yo." Mi compañero porteño dice "sho me shamo Andrés" y suena completamente distinto.', audio: '/audio/L7.1/phrases/d1-line2.mp3' },
        { speaker: 'Dra. Vega', text: 'Excelente. Eso es el sheísmo rioplatense. La "y" y la "ll" se pronuncian como "sh." ¿Y qué pasa en el Caribe?', audio: '/audio/L7.1/phrases/d1-line3.mp3' },
        { speaker: 'Lucía', text: 'La "s" final se aspira. Mi abuela cubana dice "ehtoh" en vez de "estos" y "puelta" en vez de "puerta."', audio: '/audio/L7.1/phrases/d1-line4.mp3' },
        { speaker: 'Dra. Vega', text: 'Muy bien. Y el intercambio de /r/ y /l/ es sistemático, no aleatorio. Son reglas fonológicas consistentes.', audio: '/audio/L7.1/phrases/d1-line5.mp3', annotations: [{ phrase: 'reglas fonológicas consistentes', fromLesson: 'L7.1', note: 'Dialectal variation follows systematic phonological rules, not random errors' }] },
        { speaker: 'Andrés', text: '¿Y qué opinan del spanglish? ¿Es una variedad legítima o una corrupción del español?', audio: '/audio/L7.1/phrases/d1-line6.mp3' },
        { speaker: 'Dra. Vega', text: 'Pregunta provocadora. La lingüística moderna demuestra que el cambio de código sigue reglas gramaticales complejas. No es una mezcla caótica.', audio: '/audio/L7.1/phrases/d1-line7.mp3' },
        { speaker: 'Lucía', text: 'Mi prima en Miami dice "Voy a parkear el carro y te llamo pa\'back." ¿Eso tiene reglas?', audio: '/audio/L7.1/phrases/d1-line8.mp3' },
        { speaker: 'Dra. Vega', text: 'Absolutamente. "Parkear" sigue la morfología verbal española perfectamente: raíz inglesa + sufijo -ear. Es creatividad lingüística, no error.', audio: '/audio/L7.1/phrases/d1-line9.mp3' },
        { speaker: 'Andrés', text: '¿Y el vocabulario? Es increíble que un autobús sea "camión" aquí en México, "colectivo" en Argentina y "guagua" en Cuba.', audio: '/audio/L7.1/phrases/d1-line10.mp3' },
        { speaker: 'Dra. Vega', text: 'La divergencia léxica es una de las características más visibles de la variación dialectal. Son los mismos objetos, pero cada comunidad creó sus propios términos.', audio: '/audio/L7.1/phrases/d1-line11.mp3' },
        { speaker: 'Lucía', text: 'Profesora, ¿existe un español "correcto" o "estándar"?', audio: '/audio/L7.1/phrases/d1-line12.mp3' },
        { speaker: 'Dra. Vega', text: 'No existe un español superior a otro. Cada variedad tiene su propia lógica interna, su propia gramática y su propia belleza. La diversidad lingüística es riqueza, no problema.', audio: '/audio/L7.1/phrases/d1-line13.mp3' },
        { speaker: 'Andrés', text: '¡Me encanta esa perspectiva! Entonces el español no es uno, sino muchos.', audio: '/audio/L7.1/phrases/d1-line14.mp3' },
        { speaker: 'Dra. Vega', text: 'Exacto. Quinientos ochenta millones de hablantes, cada uno con su propia voz. Esa es la verdadera riqueza del español.', audio: '/audio/L7.1/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-friends-miami',
      title: 'Friends from Different Countries — Miami Coffee Shop',
      location: 'Miami',
      lines: [
        { speaker: 'Camila (Argentina)', text: '¡Che, qué bueno que nos juntamos! Hace banda que no nos vemos. ¿Cómo andás, parce?', audio: '/audio/L7.1/phrases/d2-line1.mp3' },
        { speaker: 'Diego (Colombia)', text: '¡Uy, parcera! Todo bien, todo bacano. ¡Qué nota verte! ¿Y vos qué hacés por acá en Miami?', audio: '/audio/L7.1/phrases/d2-line2.mp3' },
        { speaker: 'Sofía (Mexico)', text: '¡Órale, qué onda, compas! Yo acabo de llegar. ¿Ya pidieron algo o qué?', audio: '/audio/L7.1/phrases/d2-line3.mp3' },
        { speaker: 'Camila', text: 'Todavía no. ¿Vos querés un café con leche? Acá hacen uno re grosso.', audio: '/audio/L7.1/phrases/d2-line4.mp3' },
        { speaker: 'Diego', text: '¿"Re grosso"? Jajaja. ¿Eso qué es, parcera? ¿Bueno o malo?', audio: '/audio/L7.1/phrases/d2-line5.mp3' },
        { speaker: 'Camila', text: '¡Buenísimo! "Re" es "muy" en argentino. "Re grosso" es algo increíble, genial.', audio: '/audio/L7.1/phrases/d2-line6.mp3' },
        { speaker: 'Sofía', text: 'Jaja, en México diríamos "está bien chido." Oigan, ¿y cómo piden el camión acá?', audio: '/audio/L7.1/phrases/d2-line7.mp3' },
        { speaker: 'Diego', text: '¿Camión? Eso es un truck, Sofía. Acá se dice "bus" o... wait, ¿tú dices camión al autobús?', audio: '/audio/L7.1/phrases/d2-line8.mp3' },
        { speaker: 'Sofía', text: '¡Claro! En México el camión es el bus. Y ustedes, ¿cómo le dicen en Colombia?', audio: '/audio/L7.1/phrases/d2-line9.mp3' },
        { speaker: 'Diego', text: 'Bus o buseta, depende del tamaño. Y en Argentina, ¿cómo es, Cami?', audio: '/audio/L7.1/phrases/d2-line10.mp3' },
        { speaker: 'Camila', text: '¡Colectivo! O "bondi" en lunfardo. Es gracioso, hablamos el mismo idioma pero con palabras distintas.', audio: '/audio/L7.1/phrases/d2-line11.mp3' },
        { speaker: 'Sofía', text: 'Y estando acá en Miami, ya todos terminamos hablando mitad español, mitad inglés. "Voy a parkear y nos vemos at the coffee shop."', audio: '/audio/L7.1/phrases/d2-line12.mp3' },
        { speaker: 'Diego', text: '¡Eso es spanglish puro! Mi mamá me regaña: "¡Hablá bien, mijo!" Pero es que uno se acostumbra.', audio: '/audio/L7.1/phrases/d2-line13.mp3' },
        { speaker: 'Camila', text: 'A mí me pasa igual. Pero ¿sabés qué? Me encanta. Cada uno trae su español y acá se mezcla todo. Es hermoso.', audio: '/audio/L7.1/phrases/d2-line14.mp3' },
        { speaker: 'Sofía', text: '¡Simón! Tres países, tres acentos, un mismo corazón. Eso es lo bonito del español.', audio: '/audio/L7.1/phrases/d2-line15.mp3' },
        { speaker: 'Diego', text: '¡Qué chimba! Brindemos por la diversidad del español. ¡Salud, compadres!', audio: '/audio/L7.1/phrases/d2-line16.mp3' },
        { speaker: 'Camila', text: '¡Salud! Y que cada quien hable como quiera. Todas las voces cuentan.', audio: '/audio/L7.1/phrases/d2-line17.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Attend a university linguistics lecture in Mexico City analyzing dialectal variation, then join three friends from Argentina, Colombia, and Mexico at a Miami coffee shop.',

  culturalNotes: [
    {
      title: 'La Diversidad Lingüística como Riqueza',
      content: 'Spanish is spoken by 580 million people across 21 countries, and no two countries sound the same. This diversity is not a problem to solve but a treasure to celebrate. Each dialect carries the history of its people: Caribbean Spanish echoes African linguistic influence, Andean Spanish preserves indigenous substrate, Rioplatense Spanish reflects massive Italian immigration, and Chicano Spanish embodies the bicultural experience of the U.S.-Mexico border. When we say "Spanish," we\'re really talking about a family of interconnected varieties, each as valid and expressive as the next.',
    },
    {
      title: 'El Mito del "Español Neutro"',
      content: 'The media industry invented "neutral Spanish" (español neutro) for dubbing and broadcasting — a standardized variety that avoids any regional markers. But linguists argue this is an artificial construct: nobody actually speaks "neutral Spanish" naturally. Every speaker has an accent, regional vocabulary, and cultural expressions. The pursuit of a "correct" or "pure" Spanish often masks linguistic discrimination — judging Caribbean, Andean, or Chicano varieties as inferior. Modern sociolinguistics rejects this hierarchy: all dialects are complete, rule-governed systems worthy of equal respect.',
    },
    {
      title: 'La Influencia de las Lenguas Indígenas',
      content: 'Indigenous languages didn\'t just lend vocabulary to Spanish — they shaped its very structure in regions of sustained contact. In Andean Spanish, Quechua influence explains the preserved "ll/y" distinction, the diminutive overuse (-ito on everything), and unique word orders. In Paraguayan Spanish, Guaraní influence is so deep that most Paraguayans are bilingual, freely mixing both languages. In Mexican Spanish, Nahuatl gave not only words (chocolate, tomate, chile) but also pragmatic patterns and discourse markers. These substrate influences make each regional Spanish a unique linguistic hybrid.',
    },
  ],
  culturalGradient: 'from-teal-50 to-emerald-50',

  quiz: [
    { id: 1, type: 'mc', text: 'What is "sheísmo" in Rioplatense Spanish?', options: ['Pronouncing "s" as "sh"', 'Pronouncing "ll" and "y" as "sh"', 'Dropping final "s"', 'Swapping "r" and "l"'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: In the Caribbean, the final "s" is ___ or dropped (process name).', answer: 'aspirated' },
    { id: 3, type: 'tf', text: 'Seseo (pronouncing "z" as "s") is used in ALL of Latin America and southern Spain.', answer: true },
    { id: 4, type: 'mc', text: 'In Argentina, a bus is called a:', options: ['Camión', 'Guagua', 'Colectivo', 'Buseta'], answer: 2 },
    { id: 5, type: 'mc', text: 'Lunfardo originated in which city?', options: ['Mexico City', 'Medellín', 'Buenos Aires', 'Madrid'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: In Mexico "cool" is "chido," but in Colombia it\'s "___"', answer: 'bacano' },
    { id: 7, type: 'mc', text: 'What is "vesre" in Argentine Spanish?', options: ['A type of tango', 'Reversing syllables of words', 'A formal greeting', 'A type of lunfardo food'], answer: 1 },
    { id: 8, type: 'tf', text: 'Code-switching is considered a linguistic deficiency by modern linguists.', answer: false },
    { id: 9, type: 'mc', text: 'In Dialogue 1, Dra. Vega explains that "parkear" follows:', options: ['English grammar rules', 'French morphological patterns', 'Spanish verbal morphology', 'No grammatical rules'], answer: 2 },
    { id: 10, type: 'mc', text: 'In Spain, a cellphone is called a "móvil," but in Latin America it\'s:', options: ['Teléfono', 'Celular', 'Portable', 'Fono'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: The Colombian sociolect from Medellín is called ___', answer: 'parlache' },
    { id: 12, type: 'mc', text: 'Which dialect preserves the distinction between "ll" and "y"?', options: ['Rioplatense', 'Caribbean', 'Andean', 'Mexican'], answer: 2 },
    { id: 13, type: 'tf', text: 'Gloria Anzaldúa described Chicano Spanish as a "border language."', answer: true },
    { id: 14, type: 'mc', text: 'In Dialogue 2, what does Camila mean by "re grosso"?', options: ['Very ugly', 'Very big', 'Incredible/amazing', 'Very expensive'], answer: 2 },
    { id: 15, type: 'mc', text: 'According to the cultural notes, "español neutro" is:', options: ['The best form of Spanish', 'An artificial media construct', 'The dialect of Madrid', 'What children learn first'], answer: 1 },
  ],

  audioBase: '/audio/L7.1/phrases',

  uniqueActivity: {
    id: 'DialectDecoderL71',
    sectionId: 'dialect-decoder',
    sectionColor: 'bg-teal-50/40',
    sectionBorder: 'border-teal-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'phonetic-variation': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'vocabulary-divergence': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'sociolects-registers': { bg: 'bg-green-50/30', border: 'border-green-100' },
    'code-switching': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'matching-game': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'dialect-sorting': { bg: 'bg-green-50/30', border: 'border-green-100' },
    dialogues: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    cultural: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'dialect-decoder': { bg: 'bg-teal-50/40', border: 'border-teal-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
