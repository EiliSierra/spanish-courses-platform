import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Relative Clauses (12) ===
  { spanish: 'La persona con quien hablé ayer me dio la información', english: 'The person with whom I spoke yesterday gave me the information', pronunciation: 'lah pehr-SOH-nah kohn kee-EHN ah-BLEH AH-yehr meh dee-OH lah een-fohr-mah-see-OHN', category: 'relative-clauses', audio: 'persona-con-quien-hable' },
  { spanish: 'El libro cuyo autor ganó el Nobel es fascinante', english: 'The book whose author won the Nobel Prize is fascinating', pronunciation: 'ehl LEE-broh KOO-yoh ow-TOHR gah-NOH ehl noh-BEHL ehs fah-see-NAHN-teh', category: 'relative-clauses', audio: 'libro-cuyo-autor' },
  { spanish: 'Lo cual demuestra que teníamos razón desde el principio', english: 'Which demonstrates that we were right from the beginning', pronunciation: 'loh kwahl deh-MWEHS-trah keh teh-NEE-ah-mohs rrah-SOHN DEHS-deh ehl preen-SEE-pee-oh', category: 'relative-clauses', audio: 'lo-cual-demuestra' },
  { spanish: 'Los estudiantes a los cuales les asigné el proyecto son brillantes', english: 'The students to whom I assigned the project are brilliant', pronunciation: 'lohs ehs-too-dee-AHN-tehs ah lohs KWAH-lehs lehs ah-seeg-NEH ehl proh-YEHK-toh sohn bree-YAHN-tehs', category: 'relative-clauses', audio: 'estudiantes-a-los-cuales' },
  { spanish: 'La razón por la cual renunció sigue siendo un misterio', english: 'The reason for which he resigned remains a mystery', pronunciation: 'lah rrah-SOHN pohr lah kwahl rreh-noon-see-OH SEE-geh see-EHN-doh oon mees-TEH-ree-oh', category: 'relative-clauses', audio: 'razon-por-la-cual' },
  { spanish: 'Lo que más me sorprendió fue su honestidad', english: 'What surprised me most was his honesty', pronunciation: 'loh keh mahs meh sohr-prehn-dee-OH fweh soo oh-nehs-tee-DAHD', category: 'relative-clauses', audio: 'lo-que-mas-sorprendio' },
  { spanish: 'La doctora, a la cual consulté, me recetó un tratamiento nuevo', english: 'The doctor, whom I consulted, prescribed me a new treatment', pronunciation: 'lah dohk-TOH-rah ah lah kwahl kohn-sool-TEH meh rreh-seh-TOH oon trah-tah-mee-EHN-toh NWEH-boh', category: 'relative-clauses', audio: 'doctora-a-la-cual' },
  { spanish: 'Es una situación cuya complejidad nadie anticipó', english: 'It is a situation whose complexity nobody anticipated', pronunciation: 'ehs OO-nah see-too-ah-see-OHN KOO-yah kohm-pleh-hee-DAHD NAH-dee-eh ahn-tee-see-POH', category: 'relative-clauses', audio: 'situacion-cuya-complejidad' },
  { spanish: 'Los países en los cuales se habla español comparten tradiciones', english: 'The countries in which Spanish is spoken share traditions', pronunciation: 'lohs pah-EE-sehs ehn lohs KWAH-lehs seh AH-blah ehs-pah-NYOHL kohm-PAHR-tehn trah-dee-see-OH-nehs', category: 'relative-clauses', audio: 'paises-en-los-cuales' },
  { spanish: 'El candidato por quien votamos resultó ser incompetente', english: 'The candidate for whom we voted turned out to be incompetent', pronunciation: 'ehl kahn-dee-DAH-toh pohr kee-EHN boh-TAH-mohs rreh-sool-TOH sehr een-kohm-peh-TEHN-teh', category: 'relative-clauses', audio: 'candidato-por-quien' },
  { spanish: 'Lo que pasa es que no hemos recibido la autorización', english: 'What happens is that we have not received the authorization', pronunciation: 'loh keh PAH-sah ehs keh noh EH-mohs rreh-see-BEE-doh lah ow-toh-ree-sah-see-OHN', category: 'relative-clauses', audio: 'lo-que-pasa-es-que' },
  { spanish: 'La empresa cuyas acciones cayeron anunció despidos masivos', english: 'The company whose stock fell announced massive layoffs', pronunciation: 'lah ehm-PREH-sah KOO-yahs ahk-see-OH-nehs kah-YEH-rohn ah-noon-see-OH dehs-PEE-dohs mah-SEE-bohs', category: 'relative-clauses', audio: 'empresa-cuyas-acciones' },

  // === Nominalization (12) ===
  { spanish: 'El hecho de que no hayan respondido es preocupante', english: 'The fact that they have not responded is worrying', pronunciation: 'ehl EH-choh deh keh noh AH-yahn rrehs-pohn-DEE-doh ehs preh-oh-koo-PAHN-teh', category: 'nominalization', audio: 'hecho-de-que-no-hayan' },
  { spanish: 'Lo interesante es que ninguno de los expertos coincidió', english: 'The interesting thing is that none of the experts agreed', pronunciation: 'loh een-teh-reh-SAHN-teh ehs keh neen-GOO-noh deh lohs ehks-PEHR-tohs koh-een-see-dee-OH', category: 'nominalization', audio: 'lo-interesante-es-que' },
  { spanish: 'Su manera de hablar refleja años de experiencia diplomática', english: 'His way of speaking reflects years of diplomatic experience', pronunciation: 'soo mah-NEH-rah deh ah-BLAHR rreh-FLEH-hah AH-nyohs deh ehks-peh-ree-EHN-see-ah dee-ploh-MAH-tee-kah', category: 'nominalization', audio: 'manera-de-hablar' },
  { spanish: 'El ser humano tiene la capacidad de adaptarse a cualquier entorno', english: 'The human being has the capacity to adapt to any environment', pronunciation: 'ehl sehr oo-MAH-noh tee-EH-neh lah kah-pah-see-DAHD deh ah-dahp-TAHR-seh ah kwahl-kee-EHR ehn-TOHR-noh', category: 'nominalization', audio: 'ser-humano-capacidad' },
  { spanish: 'Lo bueno y lo malo de vivir en la ciudad es la intensidad', english: 'The good and the bad of living in the city is the intensity', pronunciation: 'loh BWEH-noh ee loh MAH-loh deh bee-BEER ehn lah see-oo-DAHD ehs lah een-tehn-see-DAHD', category: 'nominalization', audio: 'lo-bueno-y-lo-malo' },
  { spanish: 'El poder de la palabra escrita ha transformado civilizaciones', english: 'The power of the written word has transformed civilizations', pronunciation: 'ehl poh-DEHR deh lah pah-LAH-brah ehs-KREE-tah ah trahns-fohr-MAH-doh see-bee-lee-sah-see-OH-nehs', category: 'nominalization', audio: 'poder-de-la-palabra' },
  { spanish: 'Lo fundamental es que se respeten los derechos de todos', english: 'The fundamental thing is that everyone\'s rights be respected', pronunciation: 'loh foon-dah-mehn-TAHL ehs keh seh rrehs-PEH-tehn lohs deh-REH-chohs deh TOH-dohs', category: 'nominalization', audio: 'lo-fundamental-es-que' },
  { spanish: 'Su insistencia en negar los hechos debilitó su argumento', english: 'His insistence on denying the facts weakened his argument', pronunciation: 'soo een-sees-TEHN-see-ah ehn neh-GAHR lohs EH-chohs deh-bee-lee-TOH soo ahr-goo-MEHN-toh', category: 'nominalization', audio: 'insistencia-en-negar' },
  { spanish: 'El querer controlarlo todo es una fuente de estrés', english: 'Wanting to control everything is a source of stress', pronunciation: 'ehl keh-REHR kohn-troh-LAHR-loh TOH-doh ehs OO-nah FWEHN-teh deh ehs-TREHS', category: 'nominalization', audio: 'querer-controlarlo-todo' },
  { spanish: 'Lo que necesitamos es un enfoque completamente diferente', english: 'What we need is a completely different approach', pronunciation: 'loh keh neh-seh-see-TAH-mohs ehs oon ehn-FOH-keh kohm-pleh-tah-MEHN-teh dee-feh-REHN-teh', category: 'nominalization', audio: 'lo-que-necesitamos' },
  { spanish: 'El saber no ocupa lugar, como dice el refrán', english: 'Knowledge takes up no space, as the saying goes', pronunciation: 'ehl sah-BEHR noh oh-KOO-pah loo-GAHR KOH-moh DEE-seh ehl rreh-FRAHN', category: 'nominalization', audio: 'saber-no-ocupa-lugar' },
  { spanish: 'Lo sorprendente fue la rapidez con que se resolvió el conflicto', english: 'The surprising thing was the speed with which the conflict was resolved', pronunciation: 'loh sohr-prehn-dee-EHN-teh fweh lah rrah-pee-DEHS kohn keh seh rreh-sohl-bee-OH ehl kohn-FLEEK-toh', category: 'nominalization', audio: 'lo-sorprendente-fue' },

  // === Complex Subordination (12) ===
  { spanish: 'Aunque sabía que no debería haberlo dicho, no pudo evitar mencionar que la propuesta tenía fallos', english: 'Although he knew he shouldn\'t have said it, he couldn\'t avoid mentioning that the proposal had flaws', pronunciation: 'OWN-keh sah-BEE-ah keh noh deh-beh-REE-ah ah-BEHR-loh DEE-choh noh POO-doh eh-bee-TAHR mehn-see-oh-NAHR keh lah proh-PWEHS-tah teh-NEE-ah FAH-yohs', category: 'complex-subordination', audio: 'aunque-sabia-que-no' },
  { spanish: 'Es evidente que quienes participaron en el estudio no sabían que estaban siendo observados', english: 'It is evident that those who participated in the study did not know they were being observed', pronunciation: 'ehs eh-bee-DEHN-teh keh kee-EH-nehs pahr-tee-see-PAH-rohn ehn ehl ehs-TOO-dee-oh noh sah-BEE-ahn keh ehs-TAH-bahn see-EHN-doh ohb-sehr-BAH-dohs', category: 'complex-subordination', audio: 'es-evidente-que-quienes' },
  { spanish: 'Me pregunto si habrá alguien que sepa exactamente lo que ocurrió aquella noche', english: 'I wonder if there is anyone who knows exactly what happened that night', pronunciation: 'meh preh-GOON-toh see ah-BRAH AHL-gee-ehn keh SEH-pah ehk-SAHK-tah-MEHN-teh loh keh oh-koo-rree-OH ah-KEH-yah NOH-cheh', category: 'complex-subordination', audio: 'me-pregunto-si-habra' },
  { spanish: 'El informe que presentó el comité sugiere que las medidas que se tomaron fueron insuficientes', english: 'The report that the committee presented suggests that the measures that were taken were insufficient', pronunciation: 'ehl een-FOHR-meh keh preh-sehn-TOH ehl koh-mee-TEH soo-hee-EH-reh keh lahs meh-DEE-dahs keh seh toh-MAH-rohn FWEH-rohn een-soo-fee-see-EHN-tehs', category: 'complex-subordination', audio: 'informe-que-presento' },
  { spanish: 'No creo que sea posible que terminemos antes de que anochezca, a menos que todos colaboren', english: 'I don\'t think it\'s possible for us to finish before nightfall, unless everyone collaborates', pronunciation: 'noh KREH-oh keh SEH-ah poh-SEE-bleh keh tehr-mee-NEH-mohs AHN-tehs deh keh ah-noh-CHEHS-kah ah MEH-nohs keh TOH-dohs koh-lah-BOH-rehn', category: 'complex-subordination', audio: 'no-creo-que-sea-posible' },
  { spanish: 'Resulta que la persona a la que habíamos contratado no tenía la experiencia que decía tener', english: 'It turns out that the person we had hired did not have the experience they claimed to have', pronunciation: 'rreh-SOOL-tah keh lah pehr-SOH-nah ah lah keh ah-BEE-ah-mohs kohn-trah-TAH-doh noh teh-NEE-ah lah ehks-peh-ree-EHN-see-ah keh deh-SEE-ah teh-NEHR', category: 'complex-subordination', audio: 'resulta-que-la-persona' },
  { spanish: 'Si bien es cierto que la economía mejoró, no se puede negar que la desigualdad aumentó', english: 'While it is true that the economy improved, one cannot deny that inequality increased', pronunciation: 'see bee-EHN ehs see-EHR-toh keh lah eh-koh-noh-MEE-ah meh-hoh-ROH noh seh PWEH-deh neh-GAHR keh lah deh-see-gwahl-DAHD ow-mehn-TOH', category: 'complex-subordination', audio: 'si-bien-es-cierto' },
  { spanish: 'Lo que no entiendo es por qué insisten en que aceptemos condiciones que claramente nos perjudican', english: 'What I don\'t understand is why they insist that we accept conditions that clearly harm us', pronunciation: 'loh keh noh ehn-tee-EHN-doh ehs pohr KEH een-SEES-tehn ehn keh ahk-sehp-TEH-mohs kohn-dee-see-OH-nehs keh KLAH-rah-MEHN-teh nohs pehr-HOO-dee-kahn', category: 'complex-subordination', audio: 'lo-que-no-entiendo' },
  { spanish: 'Dado que la situación era tan compleja que ningún abogado quería asumir el caso, tuvimos que buscar ayuda internacional', english: 'Given that the situation was so complex that no lawyer wanted to take the case, we had to seek international help', pronunciation: 'DAH-doh keh lah see-too-ah-see-OHN EH-rah tahn kohm-PLEH-hah keh neen-GOON ah-boh-GAH-doh keh-REE-ah ah-soo-MEER ehl KAH-soh TOO-bee-mohs keh boos-KAHR ah-YOO-dah een-tehr-nah-see-oh-NAHL', category: 'complex-subordination', audio: 'dado-que-la-situacion' },
  { spanish: 'Quiero que sepas que, aunque no siempre lo demuestre, valoro todo lo que haces por nosotros', english: 'I want you to know that, although I don\'t always show it, I value everything you do for us', pronunciation: 'kee-EH-roh keh SEH-pahs keh OWN-keh noh see-EHM-preh loh deh-MWEHS-treh bah-LOH-roh TOH-doh loh keh AH-sehs pohr noh-SOH-trohs', category: 'complex-subordination', audio: 'quiero-que-sepas-que' },
  { spanish: 'Parece mentira que después de tantos años todavía no hayamos encontrado una solución que funcione', english: 'It seems unbelievable that after so many years we still have not found a solution that works', pronunciation: 'pah-REH-seh mehn-TEE-rah keh dehs-PWEHS deh TAHN-tohs AH-nyohs toh-dah-BEE-ah noh AH-yah-mohs ehn-kohn-TRAH-doh OO-nah soh-loo-see-OHN keh foon-see-OH-neh', category: 'complex-subordination', audio: 'parece-mentira-que' },
  { spanish: 'A pesar de que le advertimos que el proyecto fracasaría si no cambiaba de estrategia, siguió adelante', english: 'Despite the fact that we warned him the project would fail if he didn\'t change strategy, he pressed on', pronunciation: 'ah peh-SAHR deh keh leh ahd-behr-TEE-mohs keh ehl proh-YEHK-toh frah-kah-sah-REE-ah see noh kahm-bee-AH-bah deh ehs-trah-TEH-hee-ah see-gee-OH ah-deh-LAHN-teh', category: 'complex-subordination', audio: 'a-pesar-de-que-advertimos' },

  // === Conditional Advanced (12) ===
  { spanish: 'De haberlo sabido antes, habría tomado una decisión completamente diferente', english: 'Had I known earlier, I would have made a completely different decision', pronunciation: 'deh ah-BEHR-loh sah-BEE-doh AHN-tehs ah-BREE-ah toh-MAH-doh OO-nah deh-see-see-OHN kohm-pleh-tah-MEHN-teh dee-feh-REHN-teh', category: 'conditional-advanced', audio: 'de-haberlo-sabido' },
  { spanish: 'Siempre y cuando se mantengan las condiciones actuales, el acuerdo seguirá vigente', english: 'As long as current conditions are maintained, the agreement will remain in force', pronunciation: 'see-EHM-preh ee KWAHN-doh seh mahn-TEHN-gahn lahs kohn-dee-see-OH-nehs ahk-too-AH-lehs ehl ah-KWEHR-doh seh-gee-RAH bee-HEHN-teh', category: 'conditional-advanced', audio: 'siempre-y-cuando' },
  { spanish: 'A menos que presenten pruebas convincentes, el juez desestimará el caso', english: 'Unless they present convincing evidence, the judge will dismiss the case', pronunciation: 'ah MEH-nohs keh preh-SEHN-tehn PRWEH-bahs kohn-been-SEHN-tehs ehl hwehs deh-sehs-tee-mah-RAH ehl KAH-soh', category: 'conditional-advanced', audio: 'a-menos-que-presenten' },
  { spanish: 'Con tal de que llegues a tiempo, no importa qué medio de transporte uses', english: 'As long as you arrive on time, it doesn\'t matter what means of transportation you use', pronunciation: 'kohn tahl deh keh YEH-gehs ah tee-EHM-poh noh eem-POHR-tah keh MEH-dee-oh deh trahns-POHR-teh OO-sehs', category: 'conditional-advanced', audio: 'con-tal-de-que-llegues' },
  { spanish: 'A condición de que se firme el contrato esta semana, iniciaremos la obra el lunes', english: 'On the condition that the contract is signed this week, we will begin the work on Monday', pronunciation: 'ah kohn-dee-see-OHN deh keh seh FEER-meh ehl kohn-TRAH-toh EHS-tah seh-MAH-nah ee-nee-see-ah-REH-mohs lah OH-brah ehl LOO-nehs', category: 'conditional-advanced', audio: 'a-condicion-de-que' },
  { spanish: 'Por si acaso llueve, lleva un paraguas y una chaqueta impermeable', english: 'Just in case it rains, bring an umbrella and a waterproof jacket', pronunciation: 'pohr see ah-KAH-soh YWEH-beh YEH-bah oon pah-RAH-gwahs ee OO-nah chah-KEH-tah eem-pehr-meh-AH-bleh', category: 'conditional-advanced', audio: 'por-si-acaso-llueve' },
  { spanish: 'Si hubiera estudiado medicina en vez de derecho, hoy estaría trabajando en un hospital', english: 'If I had studied medicine instead of law, today I would be working in a hospital', pronunciation: 'see oo-bee-EH-rah ehs-too-dee-AH-doh meh-dee-SEE-nah ehn behs deh deh-REH-choh oy ehs-tah-REE-ah trah-bah-HAHN-doh ehn oon ohs-pee-TAHL', category: 'conditional-advanced', audio: 'si-hubiera-estudiado' },
  { spanish: 'De no ser por tu ayuda, no habríamos podido completar el proyecto a tiempo', english: 'If it weren\'t for your help, we wouldn\'t have been able to complete the project on time', pronunciation: 'deh noh sehr pohr too ah-YOO-dah noh ah-BREE-ah-mohs poh-DEE-doh kohm-pleh-TAHR ehl proh-YEHK-toh ah tee-EHM-poh', category: 'conditional-advanced', audio: 'de-no-ser-por-tu' },
  { spanish: 'En caso de que necesiten más información, no duden en contactarnos', english: 'In case you need more information, do not hesitate to contact us', pronunciation: 'ehn KAH-soh deh keh neh-seh-SEE-tehn mahs een-fohr-mah-see-OHN noh DOO-dehn ehn kohn-tahk-TAHR-nohs', category: 'conditional-advanced', audio: 'en-caso-de-que' },
  { spanish: 'Si yo fuera tú, habría aceptado la oferta sin pensarlo dos veces', english: 'If I were you, I would have accepted the offer without thinking twice', pronunciation: 'see yoh FWEH-rah too ah-BREE-ah ahk-sehp-TAH-doh lah oh-FEHR-tah seen pehn-SAHR-loh dohs BEH-sehs', category: 'conditional-advanced', audio: 'si-yo-fuera-tu' },
  { spanish: 'A no ser que cambien las políticas, los resultados serán los mismos', english: 'Unless they change the policies, the results will be the same', pronunciation: 'ah noh sehr keh KAHM-bee-ehn lahs poh-LEE-tee-kahs lohs rreh-sool-TAH-dohs seh-RAHN lohs MEES-mohs', category: 'conditional-advanced', audio: 'a-no-ser-que-cambien' },
  { spanish: 'De haber tenido más recursos, la investigación habría producido mejores resultados', english: 'Had we had more resources, the research would have produced better results', pronunciation: 'deh ah-BEHR teh-NEE-doh mahs rreh-KOOR-sohs lah een-behs-tee-gah-see-OHN ah-BREE-ah proh-doo-SEE-doh meh-HOH-rehs rreh-sool-TAH-dohs', category: 'conditional-advanced', audio: 'de-haber-tenido-mas' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L61PhraseByAudio = phraseByAudio

// === CLAUSE ARCHITECT (unique activity) ===

export interface ClauseArchitectChallenge {
  fragments: string[]
  correctSentence: string
  english: string
}

export const CLAUSE_ARCHITECT_CHALLENGES: ClauseArchitectChallenge[] = [
  {
    fragments: ['cuyo autor', 'ganó el Premio Nobel,', 'El libro,', 'ha sido traducido', 'a más de cuarenta idiomas.'],
    correctSentence: 'El libro, cuyo autor ganó el Premio Nobel, ha sido traducido a más de cuarenta idiomas.',
    english: 'The book, whose author won the Nobel Prize, has been translated into more than forty languages.',
  },
  {
    fragments: ['no habría ocurrido', 'De haber sabido', 'que el camino estaba cerrado,', 'el accidente.'],
    correctSentence: 'De haber sabido que el camino estaba cerrado, no habría ocurrido el accidente.',
    english: 'Had we known the road was closed, the accident would not have occurred.',
  },
  {
    fragments: ['Lo que más me preocupa', 'es que', 'nadie haya denunciado', 'lo que ocurrió', 'aquella noche.'],
    correctSentence: 'Lo que más me preocupa es que nadie haya denunciado lo que ocurrió aquella noche.',
    english: 'What worries me most is that nobody reported what happened that night.',
  },
  {
    fragments: ['a menos que', 'todos los departamentos', 'El proyecto no avanzará', 'colaboren entre sí.'],
    correctSentence: 'El proyecto no avanzará a menos que todos los departamentos colaboren entre sí.',
    english: 'The project will not move forward unless all departments collaborate with each other.',
  },
  {
    fragments: ['con quienes', 'Los investigadores', 'compartimos los datos', 'publicaron un artículo', 'en la revista más prestigiosa.'],
    correctSentence: 'Los investigadores con quienes compartimos los datos publicaron un artículo en la revista más prestigiosa.',
    english: 'The researchers with whom we shared the data published an article in the most prestigious journal.',
  },
  {
    fragments: ['Aunque reconoció', 'que había cometido errores,', 'insistió en que', 'la decisión final', 'había sido la correcta.'],
    correctSentence: 'Aunque reconoció que había cometido errores, insistió en que la decisión final había sido la correcta.',
    english: 'Although he acknowledged he had made mistakes, he insisted that the final decision had been the correct one.',
  },
  {
    fragments: ['siempre y cuando', 'El hecho de que', 'se respeten las condiciones', 'hayamos llegado a un acuerdo', 'no significa nada,', 'del contrato original.'],
    correctSentence: 'El hecho de que hayamos llegado a un acuerdo no significa nada, siempre y cuando se respeten las condiciones del contrato original.',
    english: 'The fact that we have reached an agreement means nothing, as long as the conditions of the original contract are respected.',
  },
]

// === LESSON DATA ===

export const L61Data: LessonData = {
  id: 'L6.1',
  hero: {
    lessonId: 'L6.1',
    title: 'Complex Sentence Architecture',
    subtitle: 'Building multi-layered sentences like a native',
    description: 'Master advanced clause combinations with relative pronouns (quien, el cual, cuyo), nominalization techniques, complex subordination with multiple embedded clauses, and sophisticated conditional structures. These patterns are the hallmark of academic, legal, and literary Spanish at the C1-C2 level.',
    image: '/images/L6.1/L6.1.jpg',
    gradient: 'from-cyan-800/65 via-blue-700/55 to-indigo-700/65',
    accentColor: 'cyan-200',
  },

  objectives: [
    { icon: '\ud83d\udd17', title: 'Advanced Relative Pronouns', desc: 'Use quien, el/la cual, cuyo/a, lo que, and lo cual to create sophisticated relative clauses with complex antecedent references.' },
    { icon: '\ud83d\udcdd', title: 'Nominalization Mastery', desc: 'Convert verbs and adjectives into noun phrases using el hecho de que, lo interesante, su manera de, and infinitive nominalization.' },
    { icon: '\ud83c\udfdb\ufe0f', title: 'Multi-Level Subordination', desc: 'Build sentences with two or three embedded clauses, linking ideas with precision and elegance.' },
    { icon: '\u2696\ufe0f', title: 'Advanced Conditionals', desc: 'Master mixed conditionals, de + infinitive constructions, and conditional conjunctions like siempre y cuando and a condición de que.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.1', label: 'Pluperfect Sequencing', detail: 'L5.1 taught había + participle for past-before-past. Now embed these in multi-level subordinate clauses.' },
    { fromLesson: 'L5.2', label: 'Advanced Subjunctive', detail: 'L5.2 covered subjunctive in noun/adjectival/adverbial clauses. Now combine multiple subjunctive triggers in single complex sentences.' },
    { fromLesson: 'L5.4', label: 'Discourse Markers', detail: 'L5.4 introduced connectors like sin embargo, no obstante, por lo tanto. Now integrate them into architecturally complex sentence structures.' },
  ],

  sectionTransitions: [
    { afterSection: 'relative-clauses', text: 'Excellent work with relative pronouns! Now let\'s explore how Spanish turns verbs and adjectives into nouns.' },
    { afterSection: 'nominalization', text: 'You can nominalize like a pro! Time to tackle multi-level subordination — the real test of advanced Spanish.' },
    { afterSection: 'complex-subordination', text: 'Impressive clause stacking! Let\'s finish with advanced conditionals that will make your Spanish truly sophisticated.' },
    { afterSection: 'dialogues', text: 'Fascinating debates! Let\'s explore how complex sentences shape Spanish literature, law, and academia.' },
    { afterSection: 'cultural', text: 'Now put your skills to the ultimate test with the Clause Architect challenge!' },
    { afterSection: 'clause-architect', text: 'Final stretch — prove your mastery in the comprehensive quiz!' },
  ],

  personalizedVocab: [
    { spanish: 'Lo que pienso es que...', english: 'What I think is that...' },
    { spanish: 'La persona con quien...', english: 'The person with whom...' },
    { spanish: 'El hecho de que...', english: 'The fact that...' },
    { spanish: 'De haberlo sabido...', english: 'Had I known...' },
    { spanish: 'A menos que...', english: 'Unless...' },
    { spanish: 'Siempre y cuando...', english: 'As long as...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La razón por la cual renunció sigue siendo un misterio', pronunciation: 'lah rrah-SOHN pohr lah kwahl rreh-noon-see-OH SEE-geh see-EHN-doh oon mees-TEH-ree-oh', english: 'The reason for which he resigned remains a mystery', audio: 'razon-por-la-cual', tip: '"Por la cual" is a formal alternative to "por la que." In academic and legal Spanish, el/la cual forms are preferred for clarity in long sentences.' },
    { spanish: 'De haberlo sabido antes, habría tomado otra decisión', pronunciation: 'deh ah-BEHR-loh sah-BEE-doh AHN-tehs ah-BREE-ah toh-MAH-doh OH-trah deh-see-see-OHN', english: 'Had I known earlier, I would have made another decision', audio: 'de-haberlo-sabido', tip: '"De + infinitive" replaces "si" clauses in formal/literary Spanish. "De haberlo sabido" = "Si lo hubiera sabido." Very common in writing.' },
    { spanish: 'El hecho de que no hayan respondido es preocupante', pronunciation: 'ehl EH-choh deh keh noh AH-yahn rrehs-pohn-DEE-doh ehs preh-oh-koo-PAHN-teh', english: 'The fact that they have not responded is worrying', audio: 'hecho-de-que-no-hayan', tip: '"El hecho de que" always triggers subjunctive (hayan, not han). This nominalization + subjunctive combo is essential for academic Spanish.' },
    { spanish: 'Siempre y cuando se mantengan las condiciones actuales', pronunciation: 'see-EHM-preh ee KWAHN-doh seh mahn-TEHN-gahn lahs kohn-dee-see-OH-nehs ahk-too-AH-lehs', english: 'As long as current conditions are maintained', audio: 'siempre-y-cuando', tip: '"Siempre y cuando" requires subjunctive (mantengan). It\'s more formal than "mientras" and very common in contracts and agreements.' },
    { spanish: 'Es una situación cuya complejidad nadie anticipó', pronunciation: 'ehs OO-nah see-too-ah-see-OHN KOO-yah kohm-pleh-hee-DAHD NAH-dee-eh ahn-tee-see-POH', english: 'It is a situation whose complexity nobody anticipated', audio: 'situacion-cuya-complejidad', tip: '"Cuyo/a" agrees with the possessed noun (complejidad = feminine, so cuya), NOT with the possessor. This is a common mistake even for advanced learners.' },
    { spanish: 'Lo que no entiendo es por qué insisten en que aceptemos', pronunciation: 'loh keh noh ehn-tee-EHN-doh ehs pohr KEH een-SEES-tehn ehn keh ahk-sehp-TEH-mohs', english: 'What I don\'t understand is why they insist that we accept', audio: 'lo-que-no-entiendo', tip: 'This sentence has three clause levels: "Lo que no entiendo" (what I don\'t understand) + "por qué insisten" (why they insist) + "en que aceptemos" (that we accept). Classic multi-level subordination.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'relative-clauses', label: 'Relative Clauses' },
    { id: 'nominalization', label: 'Nominalization' },
    { id: 'complex-subordination', label: 'Complex Subordination' },
    { id: 'conditional-advanced', label: 'Advanced Conditionals' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Clause Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'clause-architect', label: 'Clause Architect' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'relative-clauses',
      title: 'Advanced Relative Pronouns',
      description: 'Master quien, el/la cual, los/las cuales, cuyo/a, lo que, and lo cual. These formal relative pronouns are essential for academic writing, legal documents, and sophisticated conversation.',
      tabs: [
        { label: 'Quien & El Cual', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'relative-clauses').slice(0, 6) },
        { label: 'Cuyo & Lo Que', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'relative-clauses').slice(6) },
      ],
    },
    {
      id: 'nominalization',
      title: 'Nominalization — Turning Ideas into Nouns',
      description: 'Convert verbs, adjectives, and clauses into noun phrases. Use el hecho de que, lo + adjective, su manera de, and infinitive-as-noun constructions to add sophistication to your Spanish.',
      tabs: [
        { label: 'Lo + Adjective & El Hecho', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'nominalization').slice(0, 6) },
        { label: 'Infinitive Nouns & More', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'nominalization').slice(6) },
      ],
    },
    {
      id: 'complex-subordination',
      title: 'Complex Subordination — Multi-Level Clauses',
      description: 'Build sentences with two or three levels of embedded clauses. These structures are the hallmark of fluent, educated Spanish in journalism, law, and literature.',
      tabs: [
        { label: 'Double Embedding', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'complex-subordination').slice(0, 6) },
        { label: 'Triple Embedding', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'complex-subordination').slice(6) },
      ],
    },
    {
      id: 'conditional-advanced',
      title: 'Advanced Conditionals — Beyond Si Clauses',
      description: 'Master mixed conditionals, de + infinitive as a formal alternative to si, and conditional conjunctions: siempre y cuando, a menos que, con tal de que, a condición de que, por si acaso, a no ser que.',
      tabs: [
        { label: 'De + Infinitive & Mixed', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'conditional-advanced').slice(0, 6) },
        { label: 'Conditional Conjunctions', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'conditional-advanced').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Cuyo Agrees with the POSSESSED Noun, Not the Possessor',
      content: '"Cuyo" (whose) is one of the trickiest relative pronouns because it agrees in gender and number with the noun it modifies (the possessed thing), NOT with the person who possesses. So "La autora cuyo libro..." (cuyo = masculine, because libro is masculine) and "El autor cuya novela..." (cuya = feminine, because novela is feminine). Forms: cuyo, cuya, cuyos, cuyas.',
      example: 'El país cuya economía creció más... | La empresa cuyos empleados... | Los autores cuyas obras...',
    },
    {
      title: '"De + Infinitive" Replaces Formal Si Clauses',
      content: 'In formal and literary Spanish, "de + haber + participle" replaces "si + pluperfect subjunctive" for past unreal conditions. "De haberlo sabido" = "Si lo hubiera sabido." You can also use "de + infinitive" for present: "De ser posible" = "Si fuera posible." This construction is extremely common in legal and academic writing.',
      example: 'De haber tenido tiempo... (If I had had time) | De no ser por ti... (If it weren\'t for you)',
      reviewFrom: 'L5.2',
    },
    {
      title: 'Subjunctive After Conditional Conjunctions',
      content: 'All these conditional conjunctions ALWAYS require subjunctive: a menos que, con tal de que, a condición de que, siempre y cuando, a no ser que, en caso de que, por si acaso (informal, sometimes indicative). There are no exceptions — if you see these conjunctions, use subjunctive.',
      example: 'A menos que vengas... | Con tal de que estudien... | Siempre y cuando se respete...',
      reviewFrom: 'L5.2',
    },
    {
      title: 'When to Use El Cual vs. Que',
      content: 'Use "el cual / la cual / los cuales / las cuales" instead of "que" when: (1) after prepositions of two+ syllables (según el cual, para la cual), (2) when the antecedent is far from the relative clause, (3) to avoid ambiguity in sentences with multiple possible antecedents. In conversation, "que" is fine; in writing, "el cual" adds precision and formality.',
      example: 'La ley según la cual... | El problema, el cual mencionamos antes... | Los datos sin los cuales...',
    },
  ],

  flashcardGroups: [
    {
      key: 'relative-pronouns',
      label: 'Relative Pronouns',
      audioKeys: ['persona-con-quien-hable', 'libro-cuyo-autor', 'lo-cual-demuestra', 'estudiantes-a-los-cuales', 'razon-por-la-cual', 'lo-que-mas-sorprendio', 'doctora-a-la-cual', 'situacion-cuya-complejidad', 'paises-en-los-cuales', 'candidato-por-quien'],
    },
    {
      key: 'nominalization-patterns',
      label: 'Nominalization Patterns',
      audioKeys: ['hecho-de-que-no-hayan', 'lo-interesante-es-que', 'manera-de-hablar', 'ser-humano-capacidad', 'lo-bueno-y-lo-malo', 'poder-de-la-palabra', 'lo-fundamental-es-que', 'querer-controlarlo-todo'],
    },
    {
      key: 'conditionals-subordination',
      label: 'Conditionals & Subordination',
      audioKeys: ['de-haberlo-sabido', 'siempre-y-cuando', 'a-menos-que-presenten', 'con-tal-de-que-llegues', 'aunque-sabia-que-no', 'es-evidente-que-quienes', 'si-bien-es-cierto', 'en-caso-de-que'],
    },
  ],

  matchPairs: [
    { left: 'cuyo / cuya', right: 'whose' },
    { left: 'el cual / la cual', right: 'which (formal)' },
    { left: 'con quien', right: 'with whom' },
    { left: 'lo que', right: 'what / that which' },
    { left: 'a menos que', right: 'unless' },
    { left: 'siempre y cuando', right: 'as long as' },
    { left: 'de haberlo sabido', right: 'had I known' },
    { left: 'el hecho de que', right: 'the fact that' },
  ],
  matchLabels: { left: 'Espa\u00f1ol', right: 'English' },

  sortActivities: [
    {
      title: 'Relative Pronoun Selection',
      instruction: 'Classify each relative pronoun by its function: refers to PEOPLE or refers to THINGS/IDEAS.',
      buckets: ['People', 'Things / Ideas'],
      items: [
        { text: 'quien / quienes', bucket: 'People' },
        { text: 'con quien', bucket: 'People' },
        { text: 'a quienes', bucket: 'People' },
        { text: 'el cual / la cual', bucket: 'Things / Ideas' },
        { text: 'lo que', bucket: 'Things / Ideas' },
        { text: 'lo cual', bucket: 'Things / Ideas' },
        { text: 'cuyo / cuya', bucket: 'Things / Ideas' },
        { text: 'por quien', bucket: 'People' },
      ],
    },
    {
      title: 'Conditional Conjunctions — Subjunctive or Indicative?',
      instruction: 'Does this conjunction require the subjunctive or can it use the indicative?',
      buckets: ['Always Subjunctive', 'Can Use Indicative'],
      items: [
        { text: 'a menos que', bucket: 'Always Subjunctive' },
        { text: 'con tal de que', bucket: 'Always Subjunctive' },
        { text: 'a condición de que', bucket: 'Always Subjunctive' },
        { text: 'siempre y cuando', bucket: 'Always Subjunctive' },
        { text: 'si', bucket: 'Can Use Indicative' },
        { text: 'por si acaso', bucket: 'Can Use Indicative' },
        { text: 'a no ser que', bucket: 'Always Subjunctive' },
        { text: 'en caso de que', bucket: 'Always Subjunctive' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Clause Sorting',

  dialogues: [
    {
      id: 'dialogue-professors',
      title: 'Constitutional Debate — Universidad de Salamanca',
      location: 'Salamanca',
      lines: [
        { speaker: 'Prof. Mendoza', text: 'La cuestión fundamental es si la ley, cuyo objetivo era proteger la libertad de expresión, ha logrado lo que se propuso.', audio: '/audio/L6.1/phrases/d1-line1.mp3', annotations: [{ phrase: 'cuyo objetivo', fromLesson: 'L6.1', note: 'Cuyo agrees with "objetivo" (masculine), not with "ley" (feminine).' }] },
        { speaker: 'Prof. Rivas', text: 'Lo interesante es que, a pesar de que la ley fue aprobada por unanimidad, los resultados no han sido los que esperábamos.', audio: '/audio/L6.1/phrases/d1-line2.mp3' },
        { speaker: 'Prof. Mendoza', text: 'Precisamente. De haber anticipado estas consecuencias, el parlamento habría redactado el artículo tercero de manera diferente.', audio: '/audio/L6.1/phrases/d1-line3.mp3', annotations: [{ phrase: 'De haber anticipado', fromLesson: 'L6.1', note: '"De + infinitive" = formal "si" clause. De haber anticipado = Si hubieran anticipado.' }] },
        { speaker: 'Prof. Rivas', text: 'No estoy de acuerdo. El hecho de que los resultados sean mixtos no significa que la ley en sí sea defectuosa.', audio: '/audio/L6.1/phrases/d1-line4.mp3' },
        { speaker: 'Prof. Mendoza', text: 'Pero los juristas con quienes consulté coinciden en que el problema radica en la ambigüedad del texto.', audio: '/audio/L6.1/phrases/d1-line5.mp3' },
        { speaker: 'Prof. Rivas', text: 'Siempre y cuando se mantenga el espíritu de la ley, las interpretaciones pueden adaptarse. Lo que no podemos hacer es descartarla por completo.', audio: '/audio/L6.1/phrases/d1-line6.mp3', annotations: [{ phrase: 'Siempre y cuando', fromLesson: 'L6.1', note: 'Requires subjunctive: "se mantenga" (mantener in present subjunctive).' }] },
        { speaker: 'Prof. Mendoza', text: 'Reconozco que tiene razón en eso. A condición de que se revisen los artículos problemáticos, la reforma podría funcionar.', audio: '/audio/L6.1/phrases/d1-line7.mp3' },
        { speaker: 'Prof. Rivas', text: 'Exacto. Lo fundamental es que el debate continúe con rigor académico, no con posiciones ideológicas.', audio: '/audio/L6.1/phrases/d1-line8.mp3' },
      ],
    },
    {
      id: 'dialogue-journalists',
      title: 'Editorial Meeting — El Espectador, Bogot\u00e1',
      location: 'Bogot\u00e1',
      lines: [
        { speaker: 'Editora Vargas', text: 'Lo que necesitamos es un enfoque que conecte la investigación con lo que la gente realmente vive a diario.', audio: '/audio/L6.1/phrases/d2-line1.mp3' },
        { speaker: 'Periodista Lozano', text: 'El problema es que las fuentes con las cuales hemos trabajado no quieren ser citadas, lo cual dificulta la verificación.', audio: '/audio/L6.1/phrases/d2-line2.mp3', annotations: [{ phrase: 'con las cuales', fromLesson: 'L6.1', note: 'Formal "el cual" form after preposition. "Con las cuales" = "con las que" but more formal.' }] },
        { speaker: 'Editora Vargas', text: 'Entiendo, pero a menos que tengamos datos verificables, no podemos publicar. Nuestra credibilidad depende de ello.', audio: '/audio/L6.1/phrases/d2-line3.mp3' },
        { speaker: 'Periodista Lozano', text: 'De no ser por el testimonio del funcionario cuya identidad protegemos, no tendríamos nada.', audio: '/audio/L6.1/phrases/d2-line4.mp3', annotations: [{ phrase: 'cuya identidad', fromLesson: 'L6.1', note: '"Cuya" = feminine because "identidad" is feminine, even though the functionary is male.' }] },
        { speaker: 'Editora Vargas', text: 'Lo sorprendente es que nadie más haya investigado este tema, dado que las pruebas son bastante accesibles.', audio: '/audio/L6.1/phrases/d2-line5.mp3' },
        { speaker: 'Periodista Lozano', text: 'Quizás sea porque el asunto involucra a personas con quienes los otros medios tienen compromisos económicos.', audio: '/audio/L6.1/phrases/d2-line6.mp3' },
        { speaker: 'Editora Vargas', text: 'Razón de más para publicarlo. Con tal de que cada dato esté respaldado por documentos, seguimos adelante.', audio: '/audio/L6.1/phrases/d2-line7.mp3' },
        { speaker: 'Periodista Lozano', text: 'De acuerdo. Su manera de abordar estos temas es lo que distingue a este periódico. Preparo el borrador para mañana.', audio: '/audio/L6.1/phrases/d2-line8.mp3' },
        { speaker: 'Editora Vargas', text: 'Perfecto. Y recuerda: lo que escribamos hoy será lo que la historia juzgue mañana.', audio: '/audio/L6.1/phrases/d2-line9.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Hear law professors debate constitutional reform at the University of Salamanca and witness journalists navigate editorial ethics at a Bogot\u00e1 newspaper.',

  culturalNotes: [
    {
      title: 'Las Frases Largas en la Literatura Espa\u00f1ola',
      content: 'Spanish literature is famous for its long, elaborately constructed sentences. Gabriel Garc\u00eda M\u00e1rquez wrote sentences spanning entire pages in "El oto\u00f1o del patriarca." Carlos Fuentes, Mario Vargas Llosa, and Javier Mar\u00edas are known for multi-clause constructions that would be impossible in English without breaking them apart. This is not excess \u2014 it reflects a cultural appreciation for linguistic architecture. When you read "El autor, cuya obra, la cual hab\u00eda sido ignorada durante d\u00e9cadas, finalmente recibi\u00f3 el reconocimiento que merec\u00eda..." you are experiencing a rhetorical tradition that values connecting ideas within a single breath.',
    },
    {
      title: 'El Espa\u00f1ol Jur\u00eddico: Complejidad con Prop\u00f3sito',
      content: 'Legal Spanish (espa\u00f1ol jur\u00eddico) is perhaps the most complex register of the language. Laws, contracts, and court rulings use extensive relative clauses with "el cual," "cuyo," and "lo cual" precisely because ambiguity can have real consequences. A single article of the Spanish Constitution may contain sentences with four or five subordinate clauses. Understanding this register is essential for anyone working in law, business, or government in the Spanish-speaking world. The phrase "a los efectos de lo dispuesto en el art\u00edculo cuya aplicaci\u00f3n se solicita..." is everyday reading for a Spanish lawyer.',
    },
    {
      title: 'La Escritura Acad\u00e9mica en el Mundo Hispanohablante',
      content: 'Academic writing in Spanish tends to favor longer, more complex sentences than its English counterpart. While English academic style has moved toward shorter sentences since the 1960s, Spanish academia still values elaborate constructions. Phrases like "el hecho de que" (the fact that), "lo cual sugiere que" (which suggests that), and "dado que" (given that) are the building blocks of every thesis, journal article, and conference paper. Mastering nominalization and complex subordination is not optional for academic Spanish \u2014 it is the price of admission to scholarly discourse across twenty-one countries.',
    },
  ],
  culturalGradient: 'from-cyan-50 to-blue-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Cuyo" agrees with:', options: ['The subject of the sentence', 'The possessor (the person who owns)', 'The possessed noun (the thing owned)', 'The verb of the clause'], answer: 2 },
    { id: 2, type: 'fill', text: 'Complete: "El libro ___ autor ganó el Nobel es fascinante" (whose)', answer: 'cuyo' },
    { id: 3, type: 'mc', text: '"De haberlo sabido" is equivalent to:', options: ['Si lo sé', 'Si lo hubiera sabido', 'Cuando lo supe', 'Para saberlo'], answer: 1 },
    { id: 4, type: 'tf', text: '"A menos que" always requires the subjunctive mood.', answer: true },
    { id: 5, type: 'mc', text: '"Lo que más me sorprendió fue su honestidad" — "Lo que" functions as:', options: ['A relative pronoun meaning "which"', 'A nominalized phrase meaning "what / that which"', 'A conjunction meaning "because"', 'An adverb meaning "how much"'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "La persona con ___ hablé me dio la información" (whom)', answer: 'quien' },
    { id: 7, type: 'mc', text: 'Which conjunction means "as long as" and requires subjunctive?', options: ['Por si acaso', 'Siempre y cuando', 'Porque', 'Mientras tanto'], answer: 1 },
    { id: 8, type: 'tf', text: '"El hecho de que" triggers the subjunctive in the following clause.', answer: true },
    { id: 9, type: 'mc', text: 'In Dialogue 1, Prof. Mendoza uses "De haber anticipado estas consecuencias." This means:', options: ['After anticipating these consequences', 'If they had anticipated these consequences', 'In order to anticipate these consequences', 'Without anticipating these consequences'], answer: 1 },
    { id: 10, type: 'fill', text: 'Complete: "La razón por la ___ renunció sigue siendo un misterio" (which — formal)', answer: 'cual' },
    { id: 11, type: 'mc', text: '"Lo interesante es que nadie reaccionó" — "Lo interesante" is an example of:', options: ['A relative clause', 'Nominalization using lo + adjective', 'A conditional structure', 'A temporal connector'], answer: 1 },
    { id: 12, type: 'tf', text: '"Cuyo" can be used to refer to both people and things as possessors.', answer: true },
    { id: 13, type: 'mc', text: 'In Dialogue 2, the editor says "Con tal de que cada dato esté respaldado." "Esté" is subjunctive because:', options: ['It expresses doubt', 'Con tal de que always requires subjunctive', 'It is a question', 'It is in the past tense'], answer: 1 },
    { id: 14, type: 'mc', text: 'Which is the correct form: "La empresa ___ empleados protestaron"?', options: ['cuyo', 'cuyos', 'cuya', 'cuyas'], answer: 1 },
    { id: 15, type: 'tf', text: 'Spanish academic and legal writing tends to use longer, more complex sentences than English.', answer: true },
  ],

  audioBase: '/audio/L6.1/phrases',

  uniqueActivity: {
    id: 'ClauseArchitectL61',
    sectionId: 'clause-architect',
    sectionColor: 'bg-cyan-50/40',
    sectionBorder: 'border-cyan-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-cyan-50/30', border: 'border-cyan-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'relative-clauses': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    nominalization: { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'complex-subordination': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'conditional-advanced': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'clause-architect': { bg: 'bg-cyan-50/40', border: 'border-cyan-100' },
    'knowledge-check': { bg: 'bg-cyan-50/40', border: 'border-cyan-100' },
  },
}
