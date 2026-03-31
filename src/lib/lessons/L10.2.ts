import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Grammar Mastery (12) ===
  { spanish: 'Cuando era niño, siempre jugaba en el parque que estaba cerca de mi casa', english: 'When I was a child, I always played in the park that was near my house', pronunciation: 'KWAHN-doh EH-rah NEE-nyoh see-EHM-preh hoo-GAH-bah ehn ehl PAHR-keh keh ehs-TAH-bah SEHR-kah deh mee KAH-sah', category: 'grammar-mastery', audio: 'cuando-era-nino-jugaba' },
  { spanish: 'Ayer comí en el restaurante donde conocí a mi esposa hace diez años', english: 'Yesterday I ate at the restaurant where I met my wife ten years ago', pronunciation: 'ah-YEHR koh-MEE ehn ehl rehs-tow-RAHN-teh DOHN-deh koh-noh-SEE ah mee ehs-POH-sah AH-seh dee-EHS AH-nyohs', category: 'grammar-mastery', audio: 'ayer-comi-restaurante' },
  { spanish: 'Ya habíamos terminado el proyecto cuando el jefe nos pidió cambios', english: 'We had already finished the project when the boss asked us for changes', pronunciation: 'yah ah-BEE-ah-mohs tehr-mee-NAH-doh ehl proh-YEHK-toh KWAHN-doh ehl HEH-feh nohs pee-dee-OH KAHM-bee-ohs', category: 'grammar-mastery', audio: 'habiamos-terminado-proyecto' },
  { spanish: 'Es importante que todos los ciudadanos participen en las elecciones', english: 'It is important that all citizens participate in the elections', pronunciation: 'ehs eem-pohr-TAHN-teh keh TOH-dohs lohs see-oo-dah-DAH-nohs pahr-tee-SEE-pehn ehn lahs eh-lehk-see-OH-nehs', category: 'grammar-mastery', audio: 'importante-ciudadanos-participen' },
  { spanish: 'Si yo hubiera sabido la verdad, habría tomado una decisión diferente', english: 'If I had known the truth, I would have made a different decision', pronunciation: 'see yoh oo-bee-EH-rah sah-BEE-doh lah behr-DAHD ah-BREE-ah toh-MAH-doh OO-nah deh-see-see-OHN dee-feh-REHN-teh', category: 'grammar-mastery', audio: 'si-hubiera-sabido-verdad' },
  { spanish: 'Ojalá que mis hijos pudieran ver lo que hemos construido juntos', english: 'I wish my children could see what we have built together', pronunciation: 'oh-hah-LAH keh mees EE-hohs poo-dee-EH-rahn behr loh keh EH-mohs kohns-troo-EE-doh HOON-tohs', category: 'grammar-mastery', audio: 'ojala-hijos-pudieran-ver' },
  { spanish: 'Si tuviera más tiempo, estudiaría lingüística computacional en Barcelona', english: 'If I had more time, I would study computational linguistics in Barcelona', pronunciation: 'see too-bee-EH-rah mahs tee-EHM-poh ehs-too-dee-ah-REE-ah leen-GWEES-tee-kah kohm-poo-tah-see-oh-NAHL ehn bahr-seh-LOH-nah', category: 'grammar-mastery', audio: 'si-tuviera-tiempo-estudiaria' },
  { spanish: 'El informe será presentado por la directora en la conferencia del viernes', english: 'The report will be presented by the director at Friday\'s conference', pronunciation: 'ehl een-FOHR-meh seh-RAH preh-sehn-TAH-doh pohr lah dee-rehk-TOH-rah ehn lah kohn-feh-REHN-see-ah dehl bee-EHR-nehs', category: 'grammar-mastery', audio: 'informe-sera-presentado' },
  { spanish: 'El profesor dijo que los resultados habían superado todas las expectativas', english: 'The professor said that the results had exceeded all expectations', pronunciation: 'ehl proh-feh-SOHR DEE-hoh keh lohs reh-sool-TAH-dohs ah-BEE-ahn soo-peh-RAH-doh TOH-dahs lahs ehks-pehk-tah-TEE-bahs', category: 'grammar-mastery', audio: 'profesor-dijo-resultados' },
  { spanish: 'La mujer cuyo libro ganó el premio es colombiana y vive en Madrid', english: 'The woman whose book won the prize is Colombian and lives in Madrid', pronunciation: 'lah moo-HEHR KOO-yoh LEE-broh gah-NOH ehl PREH-mee-oh ehs koh-lohm-bee-AH-nah ee BEE-beh ehn mah-DREED', category: 'grammar-mastery', audio: 'mujer-cuyo-libro-premio' },
  { spanish: 'Para el año que viene, ya habré terminado mi doctorado en educación bilingüe', english: 'By next year, I will have already finished my doctorate in bilingual education', pronunciation: 'PAH-rah ehl AH-nyoh keh bee-EH-neh yah ah-BREH tehr-mee-NAH-doh mee dohk-toh-RAH-doh ehn eh-doo-kah-see-OHN bee-leen-GWEH', category: 'grammar-mastery', audio: 'habré-terminado-doctorado' },
  { spanish: 'Si hubieras llegado antes, habrías conocido al autor del cual te hablé', english: 'If you had arrived earlier, you would have met the author I told you about', pronunciation: 'see oo-bee-EH-rahs yeh-GAH-doh AHN-tehs ah-BREE-ahs koh-noh-SEE-doh ahl ow-TOHR dehl kwahl teh ah-BLEH', category: 'grammar-mastery', audio: 'si-hubieras-llegado-antes' },

  // === Vocabulary Integration (12) ===
  { spanish: 'El abogado diagnosticó que la empresa necesitaba una reestructuración financiera completa', english: 'The lawyer diagnosed that the company needed a complete financial restructuring', pronunciation: 'ehl ah-boh-GAH-doh dee-ahg-nohs-tee-KOH keh lah ehm-PREH-sah neh-seh-see-TAH-bah OO-nah reh-ehs-trook-too-rah-see-OHN fee-nahn-see-EH-rah kohm-PLEH-tah', category: 'vocabulary-integration', audio: 'abogado-diagnostico-empresa' },
  { spanish: 'El chef utilizó técnicas de permacultura para crear un menú sostenible y delicioso', english: 'The chef used permaculture techniques to create a sustainable and delicious menu', pronunciation: 'ehl chehf oo-tee-lee-SOH TEHK-nee-kahs deh pehr-mah-kool-TOO-rah PAH-rah kreh-AHR oon meh-NOO sohs-teh-NEE-bleh ee deh-lee-see-OH-soh', category: 'vocabulary-integration', audio: 'chef-permacultura-menu' },
  { spanish: 'La arquitecta diseñó un hospital ecológico con paneles solares y jardines terapéuticos', english: 'The architect designed an ecological hospital with solar panels and therapeutic gardens', pronunciation: 'lah ahr-kee-TEHK-tah dee-seh-NYOH oon ohs-pee-TAHL eh-koh-LOH-hee-koh kohn pah-NEH-lehs soh-LAH-rehs ee hahr-DEE-nehs teh-rah-PEH-oo-tee-kohs', category: 'vocabulary-integration', audio: 'arquitecta-hospital-ecologico' },
  { spanish: 'El periodista investigó la corrupción política mientras cubría la crisis migratoria', english: 'The journalist investigated political corruption while covering the migration crisis', pronunciation: 'ehl peh-ree-oh-DEES-tah een-behs-tee-GOH lah koh-roop-see-OHN poh-LEE-tee-kah mee-EHN-trahs koo-BREE-ah lah KREE-sees mee-grah-TOH-ree-ah', category: 'vocabulary-integration', audio: 'periodista-investigo-corrupcion' },
  { spanish: 'La profesora de biología explicó cómo la inteligencia artificial transforma la medicina genómica', english: 'The biology teacher explained how artificial intelligence transforms genomic medicine', pronunciation: 'lah proh-feh-SOH-rah deh bee-oh-loh-HEE-ah ehks-plee-KOH KOH-moh lah een-teh-lee-HEHN-see-ah ahr-tee-fee-see-AHL trahns-FOHR-mah lah meh-dee-SEE-nah heh-NOH-mee-kah', category: 'vocabulary-integration', audio: 'profesora-biologia-ia-medicina' },
  { spanish: 'El emprendedor mexicano lanzó una aplicación de telemedicina para comunidades rurales', english: 'The Mexican entrepreneur launched a telemedicine app for rural communities', pronunciation: 'ehl ehm-prehn-deh-DOHR meh-hee-KAH-noh lahn-SOH OO-nah ah-plee-kah-see-OHN deh teh-leh-meh-dee-SEE-nah PAH-rah koh-moo-nee-DAH-dehs roo-RAH-lehs', category: 'vocabulary-integration', audio: 'emprendedor-telemedicina-rural' },
  { spanish: 'La embajadora negoció un tratado climático que incluía derechos indígenas', english: 'The ambassador negotiated a climate treaty that included indigenous rights', pronunciation: 'lah ehm-bah-hah-DOH-rah neh-goh-see-OH oon trah-TAH-doh klee-MAH-tee-koh keh een-kloo-EE-ah deh-REH-chohs een-DEE-heh-nahs', category: 'vocabulary-integration', audio: 'embajadora-tratado-climatico' },
  { spanish: 'El ingeniero civil supervisó la construcción del puente mientras gestionaba el presupuesto municipal', english: 'The civil engineer supervised the bridge construction while managing the municipal budget', pronunciation: 'ehl een-heh-nee-EH-roh see-BEEL soo-pehr-bee-SOH lah kohns-trook-see-OHN dehl PWEHN-teh mee-EHN-trahs hehs-tee-oh-NAH-bah ehl preh-soo-PWEHS-toh moo-nee-see-PAHL', category: 'vocabulary-integration', audio: 'ingeniero-puente-presupuesto' },
  { spanish: 'La psicóloga infantil recomendó terapia de arte para los niños con trastornos de ansiedad', english: 'The child psychologist recommended art therapy for children with anxiety disorders', pronunciation: 'lah see-KOH-loh-gah een-fahn-TEEL reh-koh-mehn-DOH teh-RAH-pee-ah deh AHR-teh PAH-rah lohs NEE-nyohs kohn trahs-TOHR-nohs deh ahn-see-eh-DAHD', category: 'vocabulary-integration', audio: 'psicologa-terapia-ansiedad' },
  { spanish: 'El sommelier argentino maridó vinos de Mendoza con platos de la gastronomía peruana', english: 'The Argentine sommelier paired Mendoza wines with Peruvian cuisine dishes', pronunciation: 'ehl soh-meh-lee-EH ahr-hehn-TEE-noh mah-ree-DOH BEE-nohs deh mehn-DOH-sah kohn PLAH-tohs deh lah gahs-troh-noh-MEE-ah peh-roo-AH-nah', category: 'vocabulary-integration', audio: 'sommelier-vinos-gastronomia' },
  { spanish: 'La activista denunció la deforestación del Amazonas en la cumbre de las Naciones Unidas', english: 'The activist denounced Amazon deforestation at the United Nations summit', pronunciation: 'lah ahk-tee-BEES-tah deh-noon-see-OH lah deh-foh-rehs-tah-see-OHN dehl ah-mah-SOH-nahs ehn lah KOOM-breh deh lahs nah-see-OH-nehs oo-NEE-dahs', category: 'vocabulary-integration', audio: 'activista-deforestacion-amazonas' },
  { spanish: 'El músico callejero compuso una sinfonía que fusionaba cumbia, jazz y música clásica', english: 'The street musician composed a symphony that fused cumbia, jazz, and classical music', pronunciation: 'ehl MOO-see-koh kah-yeh-HEH-roh kohm-POO-soh OO-nah seen-foh-NEE-ah keh foo-see-oh-NAH-bah KOOM-bee-ah yahs ee MOO-see-kah KLAH-see-kah', category: 'vocabulary-integration', audio: 'musico-sinfonia-cumbia-jazz' },

  // === Cultural Fluency (12) ===
  { spanish: 'En España dicen "vale" y en México dicen "sale" — pero ambos significan "okay, está bien"', english: 'In Spain they say "vale" and in Mexico they say "sale" — but both mean "okay, fine"', pronunciation: 'ehn ehs-PAH-nyah DEE-sehn BAH-leh ee ehn MEH-hee-koh DEE-sehn SAH-leh PEH-roh AHM-bohs seeg-nee-FEE-kahn oh-KAY ehs-TAH bee-EHN', category: 'cultural-fluency', audio: 'vale-sale-ambos-okay' },
  { spanish: 'Con todo respeto, estimado colega, permítame discrepar de su brillante pero cuestionable análisis', english: 'With all due respect, dear colleague, allow me to disagree with your brilliant but questionable analysis', pronunciation: 'kohn TOH-doh rehs-PEH-toh ehs-tee-MAH-doh koh-LEH-gah pehr-MEE-tah-meh dees-kreh-PAHR deh soo bree-YAHN-teh PEH-roh kwehs-tee-oh-NAH-bleh ah-NAH-lee-sees', category: 'cultural-fluency', audio: 'con-todo-respeto-discrepar' },
  { spanish: 'No es por nada, pero tu propuesta tiene más agujeros que un queso suizo, compadre', english: 'No offense, but your proposal has more holes than Swiss cheese, buddy', pronunciation: 'noh ehs pohr NAH-dah PEH-roh too proh-PWEHS-tah tee-EH-neh mahs ah-goo-HEH-rohs keh oon KEH-soh SWEE-soh kohm-PAH-dreh', category: 'cultural-fluency', audio: 'propuesta-agujeros-queso' },
  { spanish: 'Aquí en Chile decimos "cachai" y en Argentina dicen "entendés" — same energy, poh', english: 'Here in Chile we say "cachai" and in Argentina they say "entendés" — same energy, right', pronunciation: 'ah-KEE ehn CHEE-leh deh-SEE-mohs kah-CHAI ee ehn ahr-hehn-TEE-nah DEE-sehn ehn-tehn-DEHS saym EH-nehr-hee poh', category: 'cultural-fluency', audio: 'cachai-entendes-same-energy' },
  { spanish: 'Le agradecería enormemente si pudiera considerar nuestra humilde solicitud, señor ministro', english: 'I would be enormously grateful if you could consider our humble request, Minister', pronunciation: 'leh ah-grah-deh-seh-REE-ah eh-NOHR-meh-MEHN-teh see poo-dee-EH-rah kohn-see-deh-RAHR NWEHS-trah OOM-eel-deh soh-lee-see-TOOD seh-NYOHR mee-NEES-troh', category: 'cultural-fluency', audio: 'agradeceria-considerar-solicitud' },
  { spanish: 'Mi abuela siempre decía: "el que mucho abarca, poco aprieta" — y tenía toda la razón', english: 'My grandmother always said: "he who grasps too much holds little" — and she was completely right', pronunciation: 'mee ah-BWEH-lah see-EHM-preh deh-SEE-ah ehl keh MOO-choh ah-BAHR-kah POH-koh ah-pree-EH-tah ee teh-NEE-ah TOH-dah lah rah-SOHN', category: 'cultural-fluency', audio: 'abuela-mucho-abarca' },
  { spanish: 'En Colombia te dicen "quiubo, parce" y en Cuba te dicen "asere, ¿qué bolá?" — pura calidez', english: 'In Colombia they say "quiubo, parce" and in Cuba they say "asere, qué bolá?" — pure warmth', pronunciation: 'ehn koh-LOHM-bee-ah teh DEE-sehn kee-OO-boh PAHR-seh ee ehn KOO-bah teh DEE-sehn ah-SEH-reh keh boh-LAH POO-rah kah-lee-DEHS', category: 'cultural-fluency', audio: 'quiubo-parce-asere' },
  { spanish: 'Mire usted, con el debido respeto, creo que deberíamos replantear esta estrategia por completo', english: 'Look, with due respect, I believe we should rethink this strategy entirely', pronunciation: 'MEE-reh oos-TEHD kohn ehl deh-BEE-doh rehs-PEH-toh KREH-oh keh deh-beh-REE-ah-mohs reh-plahn-teh-AHR EHS-tah ehs-trah-TEH-hee-ah pohr kohm-PLEH-toh', category: 'cultural-fluency', audio: 'mire-usted-replantear' },
  { spanish: 'A mí me da igual si me hablas de tú, de vos o de usted — lo importante es que me hables', english: 'I don\'t care if you address me as tú, vos, or usted — what matters is that you talk to me', pronunciation: 'ah mee meh dah ee-GWAHL see meh AH-blahs deh too deh bohs oh deh oos-TEHD loh eem-pohr-TAHN-teh ehs keh meh AH-blehs', category: 'cultural-fluency', audio: 'da-igual-tu-vos-usted' },
  { spanish: 'Dicen que "no hay mal que por bien no venga" y yo le añado: "ni gringo que no aprenda español"', english: 'They say "every cloud has a silver lining" and I add: "nor a gringo who can\'t learn Spanish"', pronunciation: 'DEE-sehn keh noh eye mahl keh pohr bee-EHN noh BEHN-gah ee yoh leh ah-NYAH-doh nee GREEN-goh keh noh ah-PREHN-dah ehs-pah-NYOHL', category: 'cultural-fluency', audio: 'no-hay-mal-bien-venga' },
  { spanish: 'En la mañana soy formal: "buenos días, licenciado"; en la tarde: "¿qué onda, carnal?"', english: 'In the morning I\'m formal: "good morning, sir"; in the afternoon: "what\'s up, bro?"', pronunciation: 'ehn lah mah-NYAH-nah soy fohr-MAHL BWEH-nohs DEE-ahs lee-sehn-see-AH-doh ehn lah TAHR-deh keh OHN-dah kahr-NAHL', category: 'cultural-fluency', audio: 'manana-formal-tarde-informal' },
  { spanish: 'Le escribo para saludarle cordialmente y, de paso, recordarle que me debe un cafecito', english: 'I write to greet you cordially and, while I\'m at it, remind you that you owe me a coffee', pronunciation: 'leh ehs-KREE-boh PAH-rah sah-loo-DAHR-leh kohr-dee-ahl-MEHN-teh ee deh PAH-soh reh-kohr-DAHR-leh keh meh DEH-beh oon kah-feh-SEE-toh', category: 'cultural-fluency', audio: 'escribo-saludarle-cafecito' },

  // === Real-World Scenarios (12) ===
  { spanish: 'Buenas tardes, quisiera una mesa para dos junto a la ventana, si fuera tan amable', english: 'Good afternoon, I would like a table for two by the window, if you would be so kind', pronunciation: 'BWEH-nahs TAHR-dehs kee-see-EH-rah OO-nah MEH-sah PAH-rah dohs HOON-toh ah lah behn-TAH-nah see foo-EH-rah tahn ah-MAH-bleh', category: 'real-world-scenarios', audio: 'quisiera-mesa-ventana' },
  { spanish: 'Considerando mi experiencia y el mercado actual, creo que un salario de sesenta mil sería justo', english: 'Considering my experience and the current market, I believe a salary of sixty thousand would be fair', pronunciation: 'kohn-see-deh-RAHN-doh mee ehks-peh-ree-EHN-see-ah ee ehl mehr-KAH-doh ahk-too-AHL KREH-oh keh oon sah-LAH-ree-oh deh seh-SEHN-tah meel seh-REE-ah HOOS-toh', category: 'real-world-scenarios', audio: 'experiencia-salario-justo' },
  { spanish: 'Doctor, tengo un dolor punzante en el pecho que empeora cuando respiro profundamente', english: 'Doctor, I have a sharp pain in my chest that gets worse when I breathe deeply', pronunciation: 'dohk-TOHR TEHN-goh oon doh-LOHR poon-SAHN-teh ehn ehl PEH-choh keh ehm-peh-OH-rah KWAHN-doh rehs-PEE-roh proh-foon-dah-MEHN-teh', category: 'real-world-scenarios', audio: 'dolor-punzante-pecho' },
  { spanish: 'Estimados colegas, hoy les presento los resultados de nuestra investigación sobre el cambio climático', english: 'Dear colleagues, today I present to you the results of our research on climate change', pronunciation: 'ehs-tee-MAH-dohs koh-LEH-gahs oy lehs preh-SEHN-toh lohs reh-sool-TAH-dohs deh NWEHS-trah een-behs-tee-gah-see-OHN SOH-breh ehl KAHM-bee-oh klee-MAH-tee-koh', category: 'real-world-scenarios', audio: 'colegas-investigacion-climatico' },
  { spanish: 'Le escribo para confirmar la reunión del martes y adjuntar el contrato revisado para su aprobación', english: 'I am writing to confirm Tuesday\'s meeting and attach the revised contract for your approval', pronunciation: 'leh ehs-KREE-boh PAH-rah kohn-feer-MAHR lah reh-oo-nee-OHN dehl MAHR-tehs ee ahd-hoon-TAHR ehl kohn-TRAH-toh reh-bee-SAH-doh PAH-rah soo ah-proh-bah-see-OHN', category: 'real-world-scenarios', audio: 'escribo-confirmar-contrato' },
  { spanish: 'Disculpe, oficial, me perdí — ¿podría indicarme cómo llegar al consulado de mi país?', english: 'Excuse me, officer, I\'m lost — could you tell me how to get to my country\'s consulate?', pronunciation: 'dees-KOOL-peh oh-fee-see-AHL meh pehr-DEE poh-DREE-ah een-dee-KAHR-meh KOH-moh yeh-GAHR ahl kohn-soo-LAH-doh deh mee pah-EES', category: 'real-world-scenarios', audio: 'oficial-perdi-consulado' },
  { spanish: 'Buenos días, vengo a abrir una cuenta de ahorros y me gustaría información sobre los plazos fijos', english: 'Good morning, I\'m here to open a savings account and I\'d like information about fixed-term deposits', pronunciation: 'BWEH-nohs DEE-ahs BEHN-goh ah ah-BREER OO-nah KWEHN-tah deh ah-OH-rrohs ee meh goos-tah-REE-ah een-fohr-mah-see-OHN SOH-breh lohs PLAH-sohs FEE-hohs', category: 'real-world-scenarios', audio: 'abrir-cuenta-plazos-fijos' },
  { spanish: 'Señor juez, mi cliente es inocente y las pruebas presentadas por la fiscalía son insuficientes', english: 'Your Honor, my client is innocent and the evidence presented by the prosecution is insufficient', pronunciation: 'seh-NYOHR hwehs mee klee-EHN-teh ehs ee-noh-SEHN-teh ee lahs PRWEH-bahs preh-sehn-TAH-dahs pohr lah fees-kah-LEE-ah sohn een-soo-fee-see-EHN-tehs', category: 'real-world-scenarios', audio: 'juez-cliente-inocente' },
  { spanish: 'Quiero denunciar que mi equipaje no llegó en el vuelo y necesito presentar una reclamación formal', english: 'I want to report that my luggage didn\'t arrive on the flight and I need to file a formal complaint', pronunciation: 'kee-EH-roh deh-noon-see-AHR keh mee eh-kee-PAH-heh noh yeh-GOH ehn ehl BWEH-loh ee neh-seh-SEE-toh preh-sehn-TAHR OO-nah reh-klah-mah-see-OHN fohr-MAHL', category: 'real-world-scenarios', audio: 'denunciar-equipaje-reclamacion' },
  { spanish: 'Compañeros, propongo que formemos un comité para abordar el problema de la desigualdad salarial', english: 'Colleagues, I propose that we form a committee to address the issue of salary inequality', pronunciation: 'kohm-pah-NYEH-rohs proh-POHN-goh keh fohr-MEH-mohs oon koh-mee-TEH PAH-rah ah-bohr-DAHR ehl proh-BLEH-mah deh lah dehs-ee-gwahl-DAHD sah-lah-ree-AHL', category: 'real-world-scenarios', audio: 'propongo-comite-desigualdad' },
  { spanish: 'Profesora, me gustaría solicitar una extensión del plazo porque tuve una emergencia familiar', english: 'Professor, I would like to request a deadline extension because I had a family emergency', pronunciation: 'proh-feh-SOH-rah meh goos-tah-REE-ah soh-lee-see-TAHR OO-nah ehks-tehn-see-OHN dehl PLAH-soh POHR-keh TOO-beh OO-nah eh-mehr-HEHN-see-ah fah-mee-lee-AHR', category: 'real-world-scenarios', audio: 'solicitar-extension-emergencia' },
  { spanish: 'Queridos televidentes, esta noche les traemos un reportaje especial sobre la crisis hídrica en Centroamérica', english: 'Dear viewers, tonight we bring you a special report on the water crisis in Central America', pronunciation: 'keh-REE-dohs teh-leh-bee-DEHN-tehs EHS-tah NOH-cheh lehs trah-EH-mohs oon reh-pohr-TAH-heh ehs-peh-see-AHL SOH-breh lah KREE-sees EE-dree-kah ehn sehn-troh-ah-MEH-ree-kah', category: 'real-world-scenarios', audio: 'televidentes-reportaje-crisis' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L102PhraseByAudio = phraseByAudio

// === FINAL SHOWCASE CHALLENGE (unique activity) ===

export interface FinalShowcaseChallenge {
  scenario: string
  english: string
  correctAnswer: string
  options: string[]
  fromLevels: string
}

export const FINAL_SHOWCASE_CHALLENGES: FinalShowcaseChallenge[] = [
  {
    scenario: 'You arrive at a hotel in Bogotá late at night and need to explain that your reservation was made under a different name by your company. Complete: "Buenas noches, disculpe la hora. Mi empresa ___ la reservación a nombre de mi jefe, pero yo soy quien se hospeda."',
    english: 'Good evening, sorry for the hour. My company made the reservation under my boss\'s name, but I am the one staying.',
    correctAnswer: 'hizo',
    options: ['hizo', 'hacía', 'haría', 'haga'],
    fromLevels: 'L2+L3+L4',
  },
  {
    scenario: 'You are giving a presentation on climate change and need to express a mixed conditional. Complete: "Si los gobiernos hubieran invertido en energía renovable hace veinte años, hoy no ___ esta crisis ambiental."',
    english: 'If governments had invested in renewable energy twenty years ago, we would not have this environmental crisis today.',
    correctAnswer: 'tendríamos',
    options: ['tenemos', 'tendríamos', 'tuviéramos', 'tendremos'],
    fromLevels: 'L4+L6+L8',
  },
  {
    scenario: 'A Colombian friend asks about your weekend using regional slang. You reply naturally: "Pues ___, parce, ahí andamos. Fui a un concierto de salsa el sábado — ¡estuvo brutal!"',
    english: 'Well, nothing much, bro, here we are. I went to a salsa concert on Saturday — it was amazing!',
    correctAnswer: 'nada',
    options: ['nada', 'algo', 'todo', 'mucho'],
    fromLevels: 'L3+L7+L10',
  },
  {
    scenario: 'You need to write a formal email to a university dean. Complete: "Estimado Dr. Rodríguez, le ___ para solicitar una reunión en la que podamos discutir las oportunidades de colaboración académica."',
    english: 'Dear Dr. Rodríguez, I am writing to request a meeting in which we can discuss academic collaboration opportunities.',
    correctAnswer: 'escribo',
    options: ['escribo', 'escribiría', 'escribí', 'escriba'],
    fromLevels: 'L4+L5+L9',
  },
  {
    scenario: 'At a doctor\'s office in Mexico City, you describe symptoms using the subjunctive. Complete: "Doctor, no creo que ___ algo grave, pero me preocupa este dolor que tengo desde hace una semana."',
    english: 'Doctor, I don\'t think it\'s anything serious, but I\'m worried about this pain I\'ve had for a week.',
    correctAnswer: 'sea',
    options: ['es', 'sea', 'fuera', 'será'],
    fromLevels: 'L2+L4+L5',
  },
  {
    scenario: 'You are negotiating a business deal and want to use a diplomatic softener. Complete: "Entiendo su posición, sin embargo, ___ que consideráramos una alternativa que beneficie a ambas partes."',
    english: 'I understand your position, however, I would suggest that we consider an alternative that benefits both parties.',
    correctAnswer: 'sugeriría',
    options: ['sugiero', 'sugeriría', 'sugerí', 'sugiera'],
    fromLevels: 'L4+L6+L9',
  },
  {
    scenario: 'You are at a literary festival and want to praise an author using a relative clause. Complete: "La novela, ___ protagonista lucha contra la injusticia, me hizo reflexionar sobre mi propia responsabilidad social."',
    english: 'The novel, whose protagonist fights against injustice, made me reflect on my own social responsibility.',
    correctAnswer: 'cuyo',
    options: ['cuyo', 'que su', 'el cual', 'quien'],
    fromLevels: 'L5+L7+L8',
  },
]

// === LESSON DATA ===

export const L102Data: LessonData = {
  id: 'L10.2',
  hero: {
    lessonId: 'L10.2',
    title: 'Your Spanish Journey: Comprehensive Review',
    subtitle: 'The grand finale — from Hola to mastery',
    description: 'This is the FINAL lesson of the Alexandria Language Institute Spanish Program. It integrates vocabulary, grammar, and cultural knowledge from all 9 previous levels into one comprehensive review. From your first "Hola" to navigating complex real-world scenarios — celebrate how far you have come and prove your mastery.',
    image: '/images/L10.2/L10.2.jpg',
    gradient: 'from-amber-800/65 via-rose-700/55 to-purple-700/65',
    accentColor: 'amber-200',
  },

  objectives: [
    { icon: '🎓', title: 'Grammar Integration', desc: 'Use all tenses and moods naturally in complex, multi-clause sentences.' },
    { icon: '🌍', title: 'Cultural Mastery', desc: 'Navigate any cultural context — formal, informal, regional, professional.' },
    { icon: '💬', title: 'Real-World Fluency', desc: 'Handle any real-world situation entirely in Spanish with native-level confidence.' },
    { icon: '👑', title: 'Complete Your Journey', desc: 'Celebrate 74 lessons of growth — from "Hola" to complete mastery.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L1.1', label: 'Where It All Began', detail: 'L1.1 taught you the Spanish alphabet and sounds. Now you command every register, dialect, and nuance of the language.' },
    { fromLesson: 'L5.1', label: 'Advanced Grammar Milestone', detail: 'L5.1 introduced pluperfect tense. You now master all 14+ tenses and moods of Spanish.' },
    { fromLesson: 'L9.8', label: 'Most Recent Achievement', detail: 'L9.8 covered entrepreneurship. You can now discuss any professional domain in Spanish.' },
  ],

  sectionTransitions: [
    { afterSection: 'grammar-mastery', text: 'Every tense and mood at your command! Now let\'s see how vocabulary from all levels weaves together.' },
    { afterSection: 'vocabulary-integration', text: 'Incredible integration! Time to show your cultural fluency across the entire Spanish-speaking world.' },
    { afterSection: 'cultural-fluency', text: 'You belong in any conversation, anywhere. Now handle real-world scenarios like a native.' },
    { afterSection: 'dialogues', text: 'Beautiful conversations! Let\'s reflect on the journey with cultural insights.' },
    { afterSection: 'cultural', text: 'Now prove your mastery in the Final Showcase!' },
    { afterSection: 'final-showcase', text: 'The final quiz awaits — your last knowledge check!' },
  ],

  personalizedVocab: [
    { spanish: 'He recorrido un largo camino', english: 'I have come a long way' },
    { spanish: 'Domino el español', english: 'I command Spanish' },
    { spanish: 'El mundo hispanohablante es mi casa', english: 'The Spanish-speaking world is my home' },
    { spanish: 'De "Hola" a la maestría', english: 'From "Hola" to mastery' },
    { spanish: 'Este es solo el comienzo', english: 'This is only the beginning' },
    { spanish: 'El español es parte de mi identidad', english: 'Spanish is part of my identity' },
  ],

  pronunciationChallenges: [
    { spanish: 'Si yo hubiera sabido que el español me cambiaría la vida, habría empezado antes', pronunciation: 'see yoh oo-bee-EH-rah sah-BEE-doh keh ehl ehs-pah-NYOHL meh kahm-bee-ah-REE-ah lah BEE-dah ah-BREE-ah ehm-peh-SAH-doh AHN-tehs', english: 'If I had known that Spanish would change my life, I would have started sooner', audio: 'si-hubiera-sabido-verdad', tip: 'This sentence uses the pluperfect subjunctive + conditional perfect — the most complex structure in Spanish. You\'ve mastered it!' },
    { spanish: 'La embajadora cuyo discurso fue aplaudido por todos representaba a Colombia', pronunciation: 'lah ehm-bah-hah-DOH-rah KOO-yoh dees-KOOR-soh fweh ah-plow-DEE-doh pohr TOH-dohs reh-preh-sehn-TAH-bah ah koh-LOHM-bee-ah', english: 'The ambassador whose speech was applauded by everyone represented Colombia', audio: 'embajadora-tratado-climatico', tip: '"Cuyo/cuya" is the relative possessive — it agrees with the thing possessed, not the owner. Cuyo discurso (masculine) because discurso is masculine.' },
    { spanish: 'Estimados colegas, les ruego que consideren esta propuesta con la seriedad que merece', pronunciation: 'ehs-tee-MAH-dohs koh-LEH-gahs lehs RWEH-goh keh kohn-see-DEH-rehn EHS-tah proh-PWEHS-tah kohn lah seh-ree-eh-DAHD keh meh-REH-seh', english: 'Dear colleagues, I ask that you consider this proposal with the seriousness it deserves', audio: 'colegas-investigacion-climatico', tip: 'The formal register: "les ruego que consideren" (I beg you to consider) uses subjunctive after a verb of request. Peak professional Spanish.' },
    { spanish: 'No es por nada, pero si me hubieras preguntado, te habría dado mejor consejo, compadre', pronunciation: 'noh ehs pohr NAH-dah PEH-roh see meh oo-bee-EH-rahs preh-goon-TAH-doh teh ah-BREE-ah DAH-doh meh-HOHR kohn-SEH-hoh kohm-PAH-dreh', english: 'No offense, but if you had asked me, I would have given you better advice, buddy', audio: 'propuesta-agujeros-queso', tip: 'This blends informal register (compadre, no es por nada) with complex grammar (mixed conditional). True fluency = grammar + culture + personality.' },
    { spanish: 'Para el próximo año, ya habré visitado los veintiún países hispanohablantes', pronunciation: 'PAH-rah ehl PROHK-see-moh AH-nyoh yah ah-BREH bee-see-TAH-doh lohs beyn-tee-OON pah-EE-sehs ees-pah-noh-ah-BLAHN-tehs', english: 'By next year, I will have visited all twenty-one Spanish-speaking countries', audio: 'habré-terminado-doctorado', tip: 'The future perfect (habré visitado) expresses what will be completed by a future point. "Veintiún" drops the final -o before masculine nouns.' },
    { spanish: 'Ojalá que el mundo entero pudiera experimentar la riqueza del español como yo lo he hecho', pronunciation: 'oh-hah-LAH keh ehl MOON-doh ehn-TEH-roh poo-dee-EH-rah ehks-peh-ree-mehn-TAHR lah ree-KEH-sah dehl ehs-pah-NYOHL KOH-moh yoh loh eh EH-choh', english: 'I wish the whole world could experience the richness of Spanish as I have', audio: 'ojala-hijos-pudieran-ver', tip: '"Ojalá" comes from Arabic "Inshallah" (God willing). It always triggers subjunctive. A fitting word for the end of your journey — blending Arabic and Spanish heritage.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'grammar-mastery', label: 'Grammar Mastery' },
    { id: 'vocabulary-integration', label: 'Vocabulary Integration' },
    { id: 'cultural-fluency', label: 'Cultural Fluency' },
    { id: 'real-world-scenarios', label: 'Real-World Scenarios' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'final-showcase', label: 'Final Showcase' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'grammar-mastery',
      title: 'Grammar Mastery — Dominio Gramatical',
      description: 'One complex sentence per major grammar topic — present, preterite, imperfect, pluperfect, subjunctive, conditional, future, passive voice, reported speech, relative clauses, and mixed conditionals.',
      tabs: [
        { label: 'Tenses & Moods', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'grammar-mastery').slice(0, 6) },
        { label: 'Advanced Structures', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'grammar-mastery').slice(6) },
      ],
    },
    {
      id: 'vocabulary-integration',
      title: 'Vocabulary Integration — Integración de Vocabulario',
      description: 'Sentences that combine vocabulary from multiple levels — legal, medical, culinary, environmental, technological, artistic, and more.',
      tabs: [
        { label: 'Professional Domains', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'vocabulary-integration').slice(0, 6) },
        { label: 'Interdisciplinary', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'vocabulary-integration').slice(6) },
      ],
    },
    {
      id: 'cultural-fluency',
      title: 'Cultural Fluency — Fluidez Cultural',
      description: 'Culturally nuanced expressions: regional variants, idioms in formal contexts, diplomatic softeners with humor, and code-switching examples.',
      tabs: [
        { label: 'Regional & Idiomatic', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'cultural-fluency').slice(0, 6) },
        { label: 'Register & Humor', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'cultural-fluency').slice(6) },
      ],
    },
    {
      id: 'real-world-scenarios',
      title: 'Real-World Scenarios — Escenarios del Mundo Real',
      description: 'Complete real-world interactions: ordering at restaurants, negotiating salaries, explaining symptoms, giving presentations, writing professional emails, and more.',
      tabs: [
        { label: 'Daily & Professional', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'real-world-scenarios').slice(0, 6) },
        { label: 'Formal & Specialized', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'real-world-scenarios').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Mastering Multi-Clause Sentences',
      content: 'At this level, your sentences contain multiple clauses connected by relative pronouns (que, quien, cuyo, el cual), conjunctions (aunque, sin embargo, no obstante), and subordinators (para que, a fin de que). The key to natural delivery is pausing at clause boundaries — not at every comma. Group related words together and let intonation guide meaning. Native speakers process these as idea chunks, not individual words.',
      example: 'Si hubiera sabido [pause] que el español me cambiaría la vida, [pause] habría empezado antes.',
    },
    {
      title: 'Register Switching in Real Time',
      content: 'The mark of true fluency is switching registers seamlessly within a single conversation. You might start formally with a professor ("Estimado doctor, le agradezco su tiempo") and then shift when a friend appears ("¡Oye, qué onda, cuánto tiempo!"). The pronunciation shifts too: formal speech is slower, clearer, with full word endings. Informal speech is faster, with more elision and regional flavor.',
      example: '"Señor director, permítame..." → five minutes later → "¡Ey, carnal, qué rollo!"',
      reviewFrom: 'L4.3',
    },
    {
      title: 'The Music of 21 Countries',
      content: 'After 74 lessons, you can hear the difference between a Mexican\'s melodic intonation, a Spaniard\'s rapid-fire delivery, an Argentine\'s Italian-influenced rhythm, and a Caribbean speaker\'s musical flow. You don\'t need to pick one — your accent is YOUR accent, shaped by your journey. What matters is that you understand them all and can adjust your delivery to match your audience.',
      example: 'Same phrase, different music: "¿Qué tal?" (Spain: fast, rising) | (Mexico: warm, mid-tone) | (Argentina: elongated, falling)',
      reviewFrom: 'L7.1',
    },
    {
      title: 'Emotional Prosody — Speaking with Your Heart',
      content: 'The final frontier of pronunciation isn\'t sounds — it\'s emotion. Spanish is an expressive language where prosody (rhythm, stress, intonation) carries as much meaning as words. A heartfelt "lo siento mucho" sounds completely different from a perfunctory one. Joy, anger, tenderness, irony — each has its own melodic contour. You\'ve learned the notes; now play the music.',
      example: '"¡Qué alegría!" (genuine joy: wide pitch range) vs. "Qué alegría..." (sarcastic: flat, deadpan)',
    },
  ],

  flashcardGroups: [
    {
      key: 'grammar-mastery',
      label: 'Grammar Mastery',
      audioKeys: ['cuando-era-nino-jugaba', 'ayer-comi-restaurante', 'habiamos-terminado-proyecto', 'importante-ciudadanos-participen', 'si-hubiera-sabido-verdad', 'ojala-hijos-pudieran-ver', 'si-tuviera-tiempo-estudiaria', 'informe-sera-presentado', 'profesor-dijo-resultados', 'mujer-cuyo-libro-premio', 'habré-terminado-doctorado', 'si-hubieras-llegado-antes'],
    },
    {
      key: 'vocabulary-integration',
      label: 'Vocabulary Integration',
      audioKeys: ['abogado-diagnostico-empresa', 'chef-permacultura-menu', 'arquitecta-hospital-ecologico', 'periodista-investigo-corrupcion', 'profesora-biologia-ia-medicina', 'emprendedor-telemedicina-rural', 'embajadora-tratado-climatico', 'ingeniero-puente-presupuesto', 'psicologa-terapia-ansiedad', 'sommelier-vinos-gastronomia', 'activista-deforestacion-amazonas', 'musico-sinfonia-cumbia-jazz'],
    },
    {
      key: 'cultural-realworld',
      label: 'Cultural & Real-World',
      audioKeys: ['vale-sale-ambos-okay', 'con-todo-respeto-discrepar', 'quiubo-parce-asere', 'quisiera-mesa-ventana', 'experiencia-salario-justo', 'dolor-punzante-pecho', 'colegas-investigacion-climatico', 'escribo-confirmar-contrato'],
    },
  ],

  matchPairs: [
    { left: 'Si hubiera sabido', right: 'If I had known' },
    { left: 'Cuyo libro ganó', right: 'Whose book won' },
    { left: 'Habré terminado', right: 'I will have finished' },
    { left: 'Le agradecería', right: 'I would be grateful' },
    { left: 'Quisiera una mesa', right: 'I would like a table' },
    { left: 'Con todo respeto', right: 'With all due respect' },
    { left: 'Estimados colegas', right: 'Dear colleagues' },
    { left: 'No es por nada, pero', right: 'No offense, but' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Grammar Structure Identification',
      instruction: 'Does this sentence use an indicative tense or a subjunctive/conditional mood?',
      buckets: ['Indicative 📘', 'Subjunctive/Conditional 📙'],
      items: [
        { text: 'Ayer comí en el restaurante', bucket: 'Indicative 📘' },
        { text: 'El informe será presentado', bucket: 'Indicative 📘' },
        { text: 'Ya habíamos terminado', bucket: 'Indicative 📘' },
        { text: 'El profesor dijo que habían superado', bucket: 'Indicative 📘' },
        { text: 'Es importante que participen', bucket: 'Subjunctive/Conditional 📙' },
        { text: 'Si hubiera sabido, habría tomado', bucket: 'Subjunctive/Conditional 📙' },
        { text: 'Ojalá pudieran ver', bucket: 'Subjunctive/Conditional 📙' },
        { text: 'Si tuviera tiempo, estudiaría', bucket: 'Subjunctive/Conditional 📙' },
      ],
    },
    {
      title: 'Register Identification',
      instruction: 'Is this expression formal or informal?',
      buckets: ['Formal 🎩', 'Informal 🤙'],
      items: [
        { text: 'Estimados colegas, les presento', bucket: 'Formal 🎩' },
        { text: 'Le agradecería enormemente', bucket: 'Formal 🎩' },
        { text: 'Señor juez, mi cliente es inocente', bucket: 'Formal 🎩' },
        { text: 'Le escribo para confirmar', bucket: 'Formal 🎩' },
        { text: '¿Qué onda, carnal?', bucket: 'Informal 🤙' },
        { text: 'Pues nada, parce, ahí andamos', bucket: 'Informal 🤙' },
        { text: 'Más agujeros que un queso suizo', bucket: 'Informal 🤙' },
        { text: 'Me debe un cafecito', bucket: 'Informal 🤙' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Verb Sorting',

  dialogues: [
    {
      id: 'dialogue-reflection',
      title: 'Reflecting on the Journey — A Student and Teacher in Bogotá',
      location: 'Bogotá',
      lines: [
        { speaker: 'Profesora Lucía', text: 'Bueno, aquí estamos. Tu última clase de español. ¿Cómo te sientes?', audio: '/audio/L10.2/phrases/d1-line1.mp3' },
        { speaker: 'Student', text: 'Honestamente, profesora, estoy emocionado y un poco triste a la vez. Ha sido un viaje increíble.', audio: '/audio/L10.2/phrases/d1-line2.mp3' },
        { speaker: 'Profesora Lucía', text: '¿Te acuerdas de tu primera clase? No sabías ni decir "me llamo..." sin ponerte nervioso.', audio: '/audio/L10.2/phrases/d1-line3.mp3' },
        { speaker: 'Student', text: '¡Ja! Y ahora puedo debatir sobre política, negociar contratos y hasta contar chistes en español. Si me hubieran dicho eso entonces, no lo habría creído.', audio: '/audio/L10.2/phrases/d1-line4.mp3', annotations: [{ phrase: 'Si me hubieran dicho... no lo habría creído', fromLesson: 'L5.1', note: 'Mixed conditional — pluperfect subjunctive + conditional perfect' }] },
        { speaker: 'Profesora Lucía', text: 'Lo que más me enorgullece es que no solo aprendiste la gramática — aprendiste a VIVIR en español. Eso es lo que importa.', audio: '/audio/L10.2/phrases/d1-line5.mp3' },
        { speaker: 'Student', text: 'Tiene razón. Cuando viajé a Argentina el mes pasado, la gente me preguntaba de qué país hispanohablante era. ¡No podían creer que fuera estudiante!', audio: '/audio/L10.2/phrases/d1-line6.mp3' },
        { speaker: 'Profesora Lucía', text: '¡Eso es el mejor cumplido! Recuerda: el español no es solo un idioma — es una puerta a 21 países y 580 millones de personas.', audio: '/audio/L10.2/phrases/d1-line7.mp3' },
        { speaker: 'Student', text: 'Profesora, gracias por todo. Usted me enseñó que aprender un idioma es aprender a ver el mundo con otros ojos. Nunca lo olvidaré.', audio: '/audio/L10.2/phrases/d1-line8.mp3' },
        { speaker: 'Profesora Lucía', text: 'Y tú me enseñaste que la dedicación supera al talento. El español es tu casa ahora. Bienvenido para siempre.', audio: '/audio/L10.2/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-mastery',
      title: 'Navigating a Complex Business-Social Situation — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Martín', text: '¡Che, bienvenido a Buenos Aires! ¿Llegaste bien? Te presento a la Dra. Fernández, directora de la fundación con la que vamos a colaborar.', audio: '/audio/L10.2/phrases/d2-line1.mp3' },
        { speaker: 'Student', text: 'Encantado, Dra. Fernández. He leído mucho sobre el trabajo que su fundación ha hecho en educación rural. Es un honor conocerla.', audio: '/audio/L10.2/phrases/d2-line2.mp3' },
        { speaker: 'Dra. Fernández', text: 'El gusto es mío. Martín me contó que usted lidera el proyecto de tecnología educativa. ¿Me podría dar un resumen de la propuesta?', audio: '/audio/L10.2/phrases/d2-line3.mp3' },
        { speaker: 'Student', text: 'Por supuesto. Nuestra plataforma utiliza inteligencia artificial para adaptar las lecciones al nivel de cada estudiante. Si la implementáramos en sus escuelas rurales, podríamos cerrar la brecha digital en menos de dos años.', audio: '/audio/L10.2/phrases/d2-line4.mp3', annotations: [{ phrase: 'Si la implementáramos... podríamos cerrar', fromLesson: 'L4.8', note: 'Conditional clause — imperfect subjunctive + conditional' }] },
        { speaker: 'Dra. Fernández', text: 'Interesante. ¿Y cómo manejarían el tema de la conectividad? En muchas zonas no hay internet estable.', audio: '/audio/L10.2/phrases/d2-line5.mp3' },
        { speaker: 'Student', text: 'Excelente pregunta. Hemos desarrollado un modo offline que sincroniza los datos cuando se recupera la conexión. Es decir, los estudiantes pueden aprender sin internet.', audio: '/audio/L10.2/phrases/d2-line6.mp3' },
        { speaker: 'Martín', text: 'Dale, esto pinta muy bien. ¿Qué les parece si seguimos la charla cenando? Conozco una parrilla espectacular acá cerca.', audio: '/audio/L10.2/phrases/d2-line7.mp3' },
        { speaker: 'Dra. Fernández', text: '¡Me encanta la idea! Así podemos hablar más distendidos. Además, no se puede venir a Buenos Aires sin probar un buen asado.', audio: '/audio/L10.2/phrases/d2-line8.mp3' },
        { speaker: 'Student', text: '¡Con mucho gusto! Y de paso brindamos por esta nueva colaboración. Como dice el refrán: "el que no arriesga, no gana."', audio: '/audio/L10.2/phrases/d2-line9.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Reflect on your Spanish journey with your teacher in Bogotá and then navigate a complex business-social situation with confidence in Buenos Aires.',

  culturalNotes: [
    {
      title: 'The Lifelong Journey of Language Learning',
      content: 'Completing this course is not the end — it is a beginning. Even native speakers spend their entire lives discovering new words, regional expressions, and cultural nuances. The Spanish language evolves daily: new slang emerges from social media, academic terms are coined, and cultural references shift. The Real Academia Española adds hundreds of new words every year. Your journey as a Spanish speaker will deepen with every conversation, every book, every song, and every friendship. The difference is that now you have the foundation to learn from life itself — in Spanish.',
    },
    {
      title: 'The Spanish-Speaking World as One Family',
      content: 'Twenty-one countries spanning four continents share Spanish as an official language, and the United States has the second-largest Spanish-speaking population in the world. Despite differences in accent, vocabulary, and cultural norms, there is a profound sense of shared identity across the Spanish-speaking world. A Colombian can joke with a Spaniard, an Argentine can debate with a Mexican, and a Chilean can sing with a Cuban — all in the same language. You are now part of this family. "Hispanohablante" is not just a linguistic label; it is a community of 580 million people who will welcome you as one of their own.',
    },
    {
      title: 'El Español Es Tu Casa Ahora',
      content: 'There is a beautiful concept in Spanish: "sentirse como en casa" — to feel at home. After 74 lessons, 10 levels, thousands of phrases, and countless cultural insights, Spanish is no longer a foreign language for you. It is a part of who you are. You can dream in Spanish, argue in Spanish, love in Spanish, and think in Spanish. The grammar rules you memorized have become instinct. The vocabulary you drilled has become thought. The cultural knowledge you absorbed has become empathy. Welcome home. El español es tu casa ahora.',
    },
  ],
  culturalGradient: 'from-amber-50 to-purple-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Si hubiera sabido la verdad, habría actuado diferente" uses:', options: ['Present + future', 'Preterite + conditional', 'Pluperfect subjunctive + conditional perfect', 'Imperfect + present'], answer: 2 },
    { id: 2, type: 'fill', text: 'Complete: "La mujer ___ libro ganó el premio es colombiana" (whose)', answer: 'cuyo' },
    { id: 3, type: 'mc', text: '"El informe será presentado por la directora" is an example of:', options: ['Active voice', 'Passive voice', 'Reflexive construction', 'Impersonal se'], answer: 1 },
    { id: 4, type: 'tf', text: '"Ojalá" comes from Arabic and always requires the subjunctive mood.', answer: true },
    { id: 5, type: 'mc', text: 'In the sentence "El profesor dijo que los resultados habían superado las expectativas," the reported speech uses:', options: ['Present tense', 'Future tense', 'Pluperfect tense', 'Conditional tense'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "Para el próximo año, ya ___ terminado mi doctorado" (I will have)', answer: 'habré' },
    { id: 7, type: 'mc', text: '"Quiubo, parce" is a greeting from:', options: ['Spain', 'Argentina', 'Colombia', 'Chile'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, the professor says Spanish is:', options: ['Just a language', 'A door to 21 countries', 'Too difficult', 'Only useful for travel'], answer: 1 },
    { id: 9, type: 'tf', text: '"Cachai" is Chilean slang equivalent to "¿entiendes?" (do you understand?).', answer: true },
    { id: 10, type: 'mc', text: '"Le agradecería enormemente si pudiera considerar..." combines:', options: ['Future + present', 'Conditional + imperfect subjunctive', 'Preterite + future', 'Imperative + infinitive'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "Estimados colegas, hoy les ___ los resultados" (I present)', answer: 'presento' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, how does the student address the connectivity problem?', options: ['They require internet', 'They use satellite', 'They developed an offline mode', 'They avoid rural areas'], answer: 2 },
    { id: 13, type: 'mc', text: '"El que mucho abarca, poco aprieta" is equivalent to:', options: ['Early bird gets the worm', 'Jack of all trades, master of none', 'Actions speak louder than words', 'Better late than never'], answer: 1 },
    { id: 14, type: 'tf', text: 'The Real Academia Española adds hundreds of new words every year to keep the language current.', answer: true },
    { id: 15, type: 'mc', text: 'How many countries have Spanish as an official language?', options: ['15', '18', '21', '25'], answer: 2 },
  ],

  audioBase: '/audio/L10.2/phrases',

  uniqueActivity: {
    id: 'FinalShowcaseL102',
    sectionId: 'final-showcase',
    sectionColor: 'bg-amber-50/40',
    sectionBorder: 'border-amber-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'grammar-mastery': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'vocabulary-integration': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'cultural-fluency': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'real-world-scenarios': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'matching-game': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'verb-sorting': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    dialogues: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    cultural: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'final-showcase': { bg: 'bg-amber-50/40', border: 'border-amber-100' },
    'knowledge-check': { bg: 'bg-rose-50/40', border: 'border-rose-100' },
  },
}
