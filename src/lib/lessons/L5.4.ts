import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Contrast Connectors (12) ===
  { spanish: 'Sin embargo, la propuesta tiene varios puntos débiles', english: 'However, the proposal has several weak points', pronunciation: 'seen ehm-BAHR-goh lah proh-PWEHS-tah tee-EH-neh BAH-ree-ohs POON-tohs DEH-bee-lehs', category: 'contrast-connectors', audio: 'sin-embargo-propuesta' },
  { spanish: 'No obstante, los resultados fueron positivos', english: 'Nevertheless, the results were positive', pronunciation: 'noh ohbs-TAHN-teh lohs rreh-sool-TAH-dohs FWEH-rohn poh-see-TEE-bohs', category: 'contrast-connectors', audio: 'no-obstante-resultados' },
  { spanish: 'En cambio, otros expertos opinan lo contrario', english: 'On the other hand, other experts hold the opposite view', pronunciation: 'ehn KAHM-bee-oh OH-trohs ehks-PEHR-tohs oh-PEE-nahn loh kohn-TRAH-ree-oh', category: 'contrast-connectors', audio: 'en-cambio-otros-expertos' },
  { spanish: 'Por el contrario, la evidencia sugiere lo opuesto', english: 'On the contrary, the evidence suggests the opposite', pronunciation: 'pohr ehl kohn-TRAH-ree-oh lah eh-bee-DEHN-see-ah soo-hee-EH-reh loh oh-PWEHS-toh', category: 'contrast-connectors', audio: 'por-el-contrario-evidencia' },
  { spanish: 'A pesar de eso, el gobierno mantuvo su posición', english: 'Despite that, the government maintained its position', pronunciation: 'ah peh-SAHR deh EH-soh ehl goh-bee-EHR-noh mahn-TOO-boh soo poh-see-see-OHN', category: 'contrast-connectors', audio: 'a-pesar-de-eso-gobierno' },
  { spanish: 'Con todo, debemos reconocer los avances logrados', english: 'All the same, we must acknowledge the progress achieved', pronunciation: 'kohn TOH-doh deh-BEH-mohs rreh-koh-noh-SEHR lohs ah-BAHN-sehs loh-GRAH-dohs', category: 'contrast-connectors', audio: 'con-todo-debemos-reconocer' },
  { spanish: 'Ahora bien, hay que considerar el contexto histórico', english: 'Now then, we must consider the historical context', pronunciation: 'ah-OH-rah bee-EHN eye keh kohn-see-deh-RAHR ehl kohn-TEHKS-toh ees-TOH-ree-koh', category: 'contrast-connectors', audio: 'ahora-bien-contexto-historico' },
  { spanish: 'Al contrario de lo esperado, la economía creció', english: 'Contrary to expectations, the economy grew', pronunciation: 'ahl kohn-TRAH-ree-oh deh loh ehs-peh-RAH-doh lah eh-koh-noh-MEE-ah kreh-see-OH', category: 'contrast-connectors', audio: 'al-contrario-economia-crecio' },
  { spanish: 'Mientras que unos apoyan la reforma, otros la rechazan', english: 'While some support the reform, others reject it', pronunciation: 'mee-EHN-trahs keh OO-nohs ah-POH-yahn lah rreh-FOHR-mah OH-trohs lah rreh-CHAH-sahn', category: 'contrast-connectors', audio: 'mientras-que-apoyan-reforma' },
  { spanish: 'A diferencia de Europa, América Latina apuesta por otro modelo', english: 'Unlike Europe, Latin America opts for a different model', pronunciation: 'ah dee-feh-REHN-see-ah deh eh-oo-ROH-pah ah-MEH-ree-kah lah-TEE-nah ah-PWEHS-tah pohr OH-troh moh-DEH-loh', category: 'contrast-connectors', audio: 'a-diferencia-europa-latam' },
  { spanish: 'Con todo y eso, no se puede negar su contribución', english: 'Even so, one cannot deny their contribution', pronunciation: 'kohn TOH-doh ee EH-soh noh seh PWEH-deh neh-GAHR soo kohn-tree-boo-see-OHN', category: 'contrast-connectors', audio: 'con-todo-y-eso-contribucion' },
  { spanish: 'Si bien es cierto que hay riesgos, los beneficios son mayores', english: 'While it is true that there are risks, the benefits are greater', pronunciation: 'see bee-EHN ehs see-EHR-toh keh eye ree-EHS-gohs lohs beh-neh-FEE-see-ohs sohn mah-YOH-rehs', category: 'contrast-connectors', audio: 'si-bien-es-cierto-riesgos' },

  // === Cause & Consequence (12) ===
  { spanish: 'Por lo tanto, la inversión debe aumentar', english: 'Therefore, the investment must increase', pronunciation: 'pohr loh TAHN-toh lah een-behr-see-OHN DEH-beh ow-mehn-TAHR', category: 'cause-consequence', audio: 'por-lo-tanto-inversion' },
  { spanish: 'En consecuencia, se aprobaron nuevas leyes', english: 'Consequently, new laws were approved', pronunciation: 'ehn kohn-seh-KWEHN-see-ah seh ah-proh-BAH-rohn NWEH-bahs LEH-yehs', category: 'cause-consequence', audio: 'en-consecuencia-nuevas-leyes' },
  { spanish: 'De ahí que sea necesario replantear la estrategia', english: 'Hence the need to rethink the strategy', pronunciation: 'deh ah-EE keh SEH-ah neh-seh-SAH-ree-oh rreh-plahn-teh-AHR lah ehs-trah-TEH-hee-ah', category: 'cause-consequence', audio: 'de-ahi-que-replantear' },
  { spanish: 'Dado que los costos subieron, reducimos el presupuesto', english: 'Given that costs went up, we reduced the budget', pronunciation: 'DAH-doh keh lohs KOHS-tohs soo-bee-EH-rohn rreh-doo-SEE-mohs ehl preh-soo-PWEHS-toh', category: 'cause-consequence', audio: 'dado-que-costos-subieron' },
  { spanish: 'Puesto que no hay consenso, se pospuso la votación', english: 'Since there is no consensus, the vote was postponed', pronunciation: 'PWEHS-toh keh noh eye kohn-SEHN-soh seh pohs-poo-SOH lah boh-tah-see-OHN', category: 'cause-consequence', audio: 'puesto-que-no-consenso' },
  { spanish: 'Ya que mencionas el tema, hablemos de ello a fondo', english: 'Since you bring up the topic, let\'s discuss it in depth', pronunciation: 'yah keh mehn-see-OH-nahs ehl TEH-mah ah-BLEH-mohs deh EH-yoh ah FOHN-doh', category: 'cause-consequence', audio: 'ya-que-mencionas-tema' },
  { spanish: 'De modo que la solución era obvia desde el principio', english: 'So the solution was obvious from the beginning', pronunciation: 'deh MOH-doh keh lah soh-loo-see-OHN EH-rah OHB-bee-ah DEHS-deh ehl preen-SEE-pee-oh', category: 'cause-consequence', audio: 'de-modo-que-solucion-obvia' },
  { spanish: 'Así pues, queda demostrado que el método funciona', english: 'Thus, it is demonstrated that the method works', pronunciation: 'ah-SEE pwehs KEH-dah deh-mohs-TRAH-doh keh ehl MEH-toh-doh foon-see-OH-nah', category: 'cause-consequence', audio: 'asi-pues-queda-demostrado' },
  { spanish: 'Por consiguiente, debemos actuar con urgencia', english: 'Accordingly, we must act with urgency', pronunciation: 'pohr kohn-see-gee-EHN-teh deh-BEH-mohs ahk-too-AHR kohn oor-HEHN-see-ah', category: 'cause-consequence', audio: 'por-consiguiente-actuar' },
  { spanish: 'A causa de la sequía, miles de familias perdieron sus cosechas', english: 'Due to the drought, thousands of families lost their crops', pronunciation: 'ah KOW-sah deh lah seh-KEE-ah MEE-lehs deh fah-MEE-lee-ahs pehr-dee-EH-rohn soos koh-SEH-chahs', category: 'cause-consequence', audio: 'a-causa-de-sequia' },
  { spanish: 'Gracias a la cooperación internacional, se logró el acuerdo', english: 'Thanks to international cooperation, the agreement was achieved', pronunciation: 'GRAH-see-ahs ah lah koh-oh-peh-rah-see-OHN een-tehr-nah-see-oh-NAHL seh loh-GROH ehl ah-KWEHR-doh', category: 'cause-consequence', audio: 'gracias-cooperacion-acuerdo' },
  { spanish: 'Como resultado de las protestas, el gobierno cedió', english: 'As a result of the protests, the government gave in', pronunciation: 'KOH-moh rreh-sool-TAH-doh deh lahs proh-TEHS-tahs ehl goh-bee-EHR-noh seh-dee-OH', category: 'cause-consequence', audio: 'como-resultado-protestas' },

  // === Concession & Addition (12) ===
  { spanish: 'Además, es importante considerar los efectos a largo plazo', english: 'Furthermore, it is important to consider the long-term effects', pronunciation: 'ah-deh-MAHS ehs eem-pohr-TAHN-teh kohn-see-deh-RAHR lohs eh-FEHK-tohs ah LAHR-goh PLAH-soh', category: 'concession-addition', audio: 'ademas-considerar-efectos' },
  { spanish: 'Asimismo, los estudios confirman la tendencia', english: 'Likewise, the studies confirm the trend', pronunciation: 'ah-see-MEES-moh lohs ehs-TOO-dee-ohs kohn-FEER-mahn lah tehn-DEHN-see-ah', category: 'concession-addition', audio: 'asimismo-estudios-confirman' },
  { spanish: 'Incluso los críticos más duros reconocen el progreso', english: 'Even the harshest critics acknowledge the progress', pronunciation: 'een-KLOO-soh lohs KREE-tee-kohs mahs DOO-rohs rreh-koh-NOH-sehn ehl proh-GREH-soh', category: 'concession-addition', audio: 'incluso-criticos-reconocen' },
  { spanish: 'A pesar de que el camino es difícil, seguiremos adelante', english: 'Despite the path being difficult, we will continue forward', pronunciation: 'ah peh-SAHR deh keh ehl kah-MEE-noh ehs dee-FEE-seel seh-gee-REH-mohs ah-deh-LAHN-teh', category: 'concession-addition', audio: 'a-pesar-de-que-camino' },
  { spanish: 'Si bien la propuesta es ambiciosa, carece de financiamiento', english: 'Although the proposal is ambitious, it lacks funding', pronunciation: 'see bee-EHN lah proh-PWEHS-tah ehs ahm-bee-see-OH-sah kah-REH-seh deh fee-nahn-see-ah-mee-EHN-toh', category: 'concession-addition', audio: 'si-bien-propuesta-ambiciosa' },
  { spanish: 'Aunque parezca contradictorio, ambas posturas tienen mérito', english: 'Although it may seem contradictory, both positions have merit', pronunciation: 'OWN-keh pah-REHS-kah kohn-trah-deek-TOH-ree-oh AHM-bahs pohs-TOO-rahs tee-EH-nehn MEH-ree-toh', category: 'concession-addition', audio: 'aunque-parezca-contradictorio' },
  { spanish: 'Aun cuando las cifras mejoraron, persiste la desigualdad', english: 'Even when the numbers improved, inequality persists', pronunciation: 'ah-OON KWAHN-doh lahs SEE-frahs meh-hoh-RAH-rohn pehr-SEES-teh lah deh-see-gwahl-DAHD', category: 'concession-addition', audio: 'aun-cuando-cifras-mejoraron' },
  { spanish: 'De igual manera, se debe analizar el impacto ambiental', english: 'Similarly, the environmental impact must be analyzed', pronunciation: 'deh ee-GWAHL mah-NEH-rah seh DEH-beh ah-nah-lee-SAHR ehl eem-PAHK-toh ahm-bee-ehn-TAHL', category: 'concession-addition', audio: 'de-igual-manera-impacto' },
  { spanish: 'Por otra parte, la educación juega un papel fundamental', english: 'On the other hand, education plays a fundamental role', pronunciation: 'pohr OH-trah PAHR-teh lah eh-doo-kah-see-OHN HWEH-gah oon pah-PEHL foon-dah-mehn-TAHL', category: 'concession-addition', audio: 'por-otra-parte-educacion' },
  { spanish: 'Es más, las encuestas indican un cambio de opinión', english: 'What\'s more, the polls indicate a change in opinion', pronunciation: 'ehs MAHS lahs ehn-KWEHS-tahs een-DEE-kahn oon KAHM-bee-oh deh oh-pee-nee-OHN', category: 'concession-addition', audio: 'es-mas-encuestas-indican' },
  { spanish: 'Aparte de eso, hay que tener en cuenta la opinión pública', english: 'Apart from that, public opinion must be taken into account', pronunciation: 'ah-PAHR-teh deh EH-soh eye keh teh-NEHR ehn KWEHN-tah lah oh-pee-nee-OHN POO-blee-kah', category: 'concession-addition', audio: 'aparte-de-eso-opinion-publica' },
  { spanish: 'No solo eso, sino que también afecta la economía regional', english: 'Not only that, but it also affects the regional economy', pronunciation: 'noh SOH-loh EH-soh SEE-noh keh tahm-bee-EHN ah-FEHK-tah lah eh-koh-noh-MEE-ah rreh-hee-oh-NAHL', category: 'concession-addition', audio: 'no-solo-eso-economia' },

  // === Hedging & Academic (12) ===
  { spanish: 'Cabe señalar que este fenómeno no es exclusivo de una región', english: 'It should be noted that this phenomenon is not exclusive to one region', pronunciation: 'KAH-beh seh-nyah-LAHR keh EHS-teh feh-NOH-meh-noh noh ehs ehks-kloo-SEE-boh deh OO-nah rreh-hee-OHN', category: 'hedging-academic', audio: 'cabe-senalar-fenomeno' },
  { spanish: 'Conviene destacar la importancia de la educación bilingüe', english: 'It is worth highlighting the importance of bilingual education', pronunciation: 'kohn-bee-EH-neh dehs-tah-KAHR lah eem-pohr-TAHN-see-ah deh lah eh-doo-kah-see-OHN bee-leen-GWEH', category: 'hedging-academic', audio: 'conviene-destacar-educacion' },
  { spanish: 'Es preciso mencionar que los datos son preliminares', english: 'It is necessary to mention that the data is preliminary', pronunciation: 'ehs preh-SEE-soh mehn-see-oh-NAHR keh lohs DAH-tohs sohn preh-lee-mee-NAH-rehs', category: 'hedging-academic', audio: 'es-preciso-mencionar-datos' },
  { spanish: 'Se podría argumentar que la tecnología tiene un doble filo', english: 'One could argue that technology is a double-edged sword', pronunciation: 'seh poh-DREE-ah ahr-goo-mehn-TAHR keh lah tehk-noh-loh-HEE-ah tee-EH-neh oon DOH-bleh FEE-loh', category: 'hedging-academic', audio: 'se-podria-argumentar' },
  { spanish: 'No se puede negar que ha habido avances significativos', english: 'It cannot be denied that there have been significant advances', pronunciation: 'noh seh PWEH-deh neh-GAHR keh ah ah-BEE-doh ah-BAHN-sehs seeg-nee-fee-kah-TEE-bohs', category: 'hedging-academic', audio: 'no-se-puede-negar-avances' },
  { spanish: 'Cabría preguntarse si esta política es sostenible', english: 'One might wonder whether this policy is sustainable', pronunciation: 'kah-BREE-ah preh-goon-TAHR-seh see EHS-tah poh-LEE-tee-kah ehs sohs-teh-NEE-bleh', category: 'hedging-academic', audio: 'cabria-preguntarse-politica' },
  { spanish: 'Dicho de otro modo, el modelo actual está agotado', english: 'In other words, the current model is exhausted', pronunciation: 'DEE-choh deh OH-troh MOH-doh ehl moh-DEH-loh ahk-too-AHL ehs-TAH ah-goh-TAH-doh', category: 'hedging-academic', audio: 'dicho-de-otro-modo' },
  { spanish: 'En definitiva, la clave está en la colaboración', english: 'Ultimately, the key lies in collaboration', pronunciation: 'ehn deh-fee-nee-TEE-bah lah KLAH-beh ehs-TAH ehn lah koh-lah-boh-rah-see-OHN', category: 'hedging-academic', audio: 'en-definitiva-colaboracion' },
  { spanish: 'Desde esta perspectiva, el problema adquiere otra dimensión', english: 'From this perspective, the problem takes on another dimension', pronunciation: 'DEHS-deh EHS-tah pehrs-pehk-TEE-bah ehl proh-BLEH-mah ahd-kee-EH-reh OH-trah dee-mehn-see-OHN', category: 'hedging-academic', audio: 'desde-esta-perspectiva' },
  { spanish: 'Es necesario subrayar que la muestra es limitada', english: 'It is necessary to underline that the sample is limited', pronunciation: 'ehs neh-seh-SAH-ree-oh soo-brah-YAHR keh lah MWEHS-trah ehs lee-mee-TAH-dah', category: 'hedging-academic', audio: 'es-necesario-subrayar-muestra' },
  { spanish: 'Todo parece indicar que la tendencia continuará', english: 'Everything seems to indicate that the trend will continue', pronunciation: 'TOH-doh pah-REH-seh een-dee-KAHR keh lah tehn-DEHN-see-ah kohn-tee-noo-ah-RAH', category: 'hedging-academic', audio: 'todo-parece-indicar-tendencia' },
  { spanish: 'En resumidas cuentas, los datos respaldan la hipótesis', english: 'In short, the data supports the hypothesis', pronunciation: 'ehn rreh-soo-MEE-dahs KWEHN-tahs lohs DAH-tohs rrehs-PAHL-dahn lah ee-POH-teh-sees', category: 'hedging-academic', audio: 'en-resumidas-cuentas-datos' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L54PhraseByAudio = phraseByAudio

// === DEBATE ARENA (unique activity) ===

export interface DebateArenaChallenge {
  topic: string
  position: string
  english: string
  sentence: string
  correctMarker: string
  options: string[]
}

export const DEBATE_ARENA_CHALLENGES: DebateArenaChallenge[] = [
  {
    topic: 'Energía nuclear vs. renovable',
    position: 'A favor de la energía nuclear',
    english: 'Nuclear energy is more efficient. However, we must address safety concerns.',
    sentence: 'La energía nuclear es más eficiente. ___, debemos abordar las preocupaciones de seguridad.',
    correctMarker: 'Sin embargo',
    options: ['Sin embargo', 'Por lo tanto', 'Además', 'Dado que'],
  },
  {
    topic: 'Educación virtual vs. presencial',
    position: 'A favor de la educación virtual',
    english: 'Given that technology has advanced, online education offers equal quality.',
    sentence: '___ la tecnología ha avanzado, la educación en línea ofrece calidad equivalente.',
    correctMarker: 'Dado que',
    options: ['Sin embargo', 'Dado que', 'No obstante', 'En definitiva'],
  },
  {
    topic: 'Inmigración y economía',
    position: 'Análisis neutral',
    english: 'Not only does immigration fill labor gaps, but it also enriches cultural diversity.',
    sentence: '___ la inmigración cubre vacíos laborales, sino que también enriquece la diversidad cultural.',
    correctMarker: 'No solo',
    options: ['Además', 'No solo', 'Puesto que', 'A pesar de que'],
  },
  {
    topic: 'Inteligencia artificial en el trabajo',
    position: 'Perspectiva cautelosa',
    english: 'One could argue that AI will create more jobs than it destroys.',
    sentence: '___ que la IA creará más empleos de los que destruirá.',
    correctMarker: 'Se podría argumentar',
    options: ['Se podría argumentar', 'En consecuencia', 'Por el contrario', 'Asimismo'],
  },
  {
    topic: 'Cambio climático y política',
    position: 'Urgencia de acción',
    english: 'Consequently, governments must implement stricter environmental policies.',
    sentence: '___, los gobiernos deben implementar políticas ambientales más estrictas.',
    correctMarker: 'En consecuencia',
    options: ['En consecuencia', 'Ahora bien', 'A pesar de que', 'Cabe señalar que'],
  },
  {
    topic: 'Redes sociales y democracia',
    position: 'Visión crítica',
    english: 'Although social media democratizes information, it also spreads misinformation.',
    sentence: '___ las redes sociales democratizan la información, también difunden desinformación.',
    correctMarker: 'Si bien',
    options: ['Si bien', 'Por lo tanto', 'De ahí que', 'Dicho de otro modo'],
  },
  {
    topic: 'Salud pública y vacunación',
    position: 'Conclusión del debate',
    english: 'Ultimately, vaccination remains the most effective tool against pandemics.',
    sentence: '___, la vacunación sigue siendo la herramienta más eficaz contra las pandemias.',
    correctMarker: 'En definitiva',
    options: ['En definitiva', 'No obstante', 'A causa de', 'Mientras que'],
  },
]

// === LESSON DATA ===

export const L54Data: LessonData = {
  id: 'L5.4',
  hero: {
    lessonId: 'L5.4',
    title: 'Discourse Markers & Argumentation',
    subtitle: 'Building powerful arguments in Spanish',
    description: 'Master the discourse markers that make your Spanish sound sophisticated and persuasive. Learn to contrast, explain causes, make concessions, and hedge like a native speaker — essential tools for debates, essays, and professional communication.',
    image: '/images/L5.4/L5.4.jpg',
    gradient: 'from-red-800/65 via-rose-700/55 to-orange-700/65',
    accentColor: 'rose-200',
  },

  objectives: [
    { icon: '⚔️', title: 'Contrast & Opposition', desc: 'Use sin embargo, no obstante, en cambio, por el contrario to present opposing views.' },
    { icon: '🔗', title: 'Cause & Consequence', desc: 'Connect ideas with por lo tanto, en consecuencia, dado que, de ahí que.' },
    { icon: '🤝', title: 'Concession & Addition', desc: 'Concede and expand with además, a pesar de que, si bien, incluso.' },
    { icon: '🎓', title: 'Academic Hedging', desc: 'Soften claims with cabe señalar, se podría argumentar, cabría preguntarse.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.4', label: 'Formal Register', detail: 'L4.4 introduced formal vs. informal registers. Now use discourse markers to write and speak at an academic level.' },
    { fromLesson: 'L4.2', label: 'Subjunctive Mood', detail: 'L4.2 covered the subjunctive. Markers like "de ahí que" and "a pesar de que" trigger subjunctive in dependent clauses.' },
    { fromLesson: 'L3.6', label: 'Connectors & Conjunctions', detail: 'L3.6 introduced basic connectors (pero, porque, entonces). Now upgrade to advanced discourse markers.' },
  ],

  sectionTransitions: [
    { afterSection: 'contrast-connectors', text: 'You can contrast ideas like a debater! Now let\'s connect causes and consequences.' },
    { afterSection: 'cause-consequence', text: 'Cause and effect mastered! Time to learn concession — agreeing while still pushing your point.' },
    { afterSection: 'concession-addition', text: 'Concessions and additions down! Let\'s polish your style with academic hedging.' },
    { afterSection: 'dialogues', text: 'Powerful debates! Let\'s explore how argumentation differs across the Spanish-speaking world.' },
    { afterSection: 'cultural', text: 'Culture explored! Time for the Debate Arena challenge.' },
    { afterSection: 'debate-arena', text: 'Final stretch — let\'s test everything you\'ve learned!' },
  ],

  personalizedVocab: [
    { spanish: 'Sin embargo...', english: 'However...' },
    { spanish: 'Por lo tanto...', english: 'Therefore...' },
    { spanish: 'A pesar de que...', english: 'Despite the fact that...' },
    { spanish: 'Cabe señalar que...', english: 'It should be noted that...' },
    { spanish: 'En definitiva...', english: 'Ultimately...' },
    { spanish: 'Se podría argumentar...', english: 'One could argue...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Sin embargo, los datos no respaldan esa afirmación', pronunciation: 'seen ehm-BAHR-goh lohs DAH-tohs noh rrehs-PAHL-dahn EH-sah ah-feer-mah-see-OHN', english: 'However, the data does not support that claim', audio: 'sin-embargo-los-datos-no-respaldan-esa-afirmacion', tip: '"Sin embargo" always carries a pause after it. Think of it as a verbal traffic light — stop, then redirect the argument.' },
    { spanish: 'No obstante, debemos considerar todas las variables', pronunciation: 'noh ohbs-TAHN-teh deh-BEH-mohs kohn-see-deh-RAHR TOH-dahs lahs bah-ree-AH-blehs', english: 'Nevertheless, we must consider all variables', audio: 'no-obstante-debemos-considerar-todas-las-variables', tip: '"No obstante" is slightly more formal than "sin embargo." Used heavily in academic writing and formal speeches.' },
    { spanish: 'Por consiguiente, la hipótesis queda confirmada', pronunciation: 'pohr kohn-see-gee-EHN-teh lah ee-POH-teh-sees KEH-dah kohn-feer-MAH-dah', english: 'Accordingly, the hypothesis is confirmed', audio: 'por-consiguiente-la-hipotesis-queda-confirmada', tip: '"Consiguiente" has four syllables: con-si-guien-te. Stress falls on the third: con-see-gee-EHN-teh.' },
    { spanish: 'Cabría preguntarse si estamos ante un punto de inflexión', pronunciation: 'kah-BREE-ah preh-goon-TAHR-seh see ehs-TAH-mohs AHN-teh oon POON-toh deh een-flehk-see-OHN', english: 'One might wonder if we are at a turning point', audio: 'cabria-preguntarse-si-estamos-ante-un-punto-de-inflexion', tip: '"Cabría" is the conditional of "caber" (to fit/be possible). This hedging formula softens strong claims beautifully.' },
    { spanish: 'A pesar de que la evidencia es mixta, la tendencia es clara', pronunciation: 'ah peh-SAHR deh keh lah eh-bee-DEHN-see-ah ehs MEEKS-tah lah tehn-DEHN-see-ah ehs KLAH-rah', english: 'Despite the evidence being mixed, the trend is clear', audio: 'a-pesar-de-que-la-evidencia-es-mixta-la-tendencia-es-clara', tip: '"A pesar de que" triggers subjunctive when the outcome is uncertain, indicative when stating a fact already known.' },
    { spanish: 'De ahí que sea imprescindible reformar el sistema', pronunciation: 'deh ah-EE keh SEH-ah eem-prehs-seen-DEE-bleh rreh-fohr-MAHR ehl sees-TEH-mah', english: 'Hence the need to reform the system', audio: 'de-ahi-que-sea-imprescindible-reformar-el-sistema', tip: '"De ahí que" ALWAYS requires the subjunctive: "de ahí que sea" (not "es"). This is a non-negotiable grammar rule!' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'contrast-connectors', label: 'Contrast Connectors' },
    { id: 'cause-consequence', label: 'Cause & Consequence' },
    { id: 'concession-addition', label: 'Concession & Addition' },
    { id: 'hedging-academic', label: 'Academic Hedging' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'marker-sorting', label: 'Marker Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'debate-arena', label: 'Debate Arena' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'contrast-connectors',
      title: 'Contrast Connectors — Conectores de Contraste',
      description: 'Use these markers to introduce opposing ideas, counterarguments, or unexpected turns in your argument.',
      tabs: [
        { label: 'Core Contrast', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'contrast-connectors').slice(0, 6) },
        { label: 'Advanced Contrast', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'contrast-connectors').slice(6) },
      ],
    },
    {
      id: 'cause-consequence',
      title: 'Cause & Consequence — Causa y Consecuencia',
      description: 'Connect reasons to results. These markers create logical chains that strengthen any argument.',
      tabs: [
        { label: 'Result Markers', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'cause-consequence').slice(0, 6) },
        { label: 'Cause Markers', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'cause-consequence').slice(6) },
      ],
    },
    {
      id: 'concession-addition',
      title: 'Concession & Addition — Concesión y Adición',
      description: 'Acknowledge the other side while adding your own points. The art of diplomatic argumentation.',
      tabs: [
        { label: 'Concession', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'concession-addition').slice(0, 6) },
        { label: 'Addition', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'concession-addition').slice(6) },
      ],
    },
    {
      id: 'hedging-academic',
      title: 'Academic Hedging — Lenguaje Académico',
      description: 'Soften claims, signal nuance, and frame arguments with scholarly precision. Essential for essays and formal debates.',
      tabs: [
        { label: 'Hedging Formulas', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'hedging-academic').slice(0, 6) },
        { label: 'Framing & Conclusions', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'hedging-academic').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Pause is Part of the Marker',
      content: 'Discourse markers in Spanish are ALWAYS followed by a brief pause (and a comma in writing). This pause signals to the listener that a shift is coming. "Sin embargo, ..." "Por lo tanto, ..." "No obstante, ..." — that pause is not optional; it\'s what gives the marker its rhetorical power.',
      example: 'Sin embargo, [pause] los datos no respaldan esa conclusión.',
    },
    {
      title: 'Subjunctive Triggers',
      content: 'Several discourse markers trigger the subjunctive: "de ahí que" (hence), "a pesar de que" (despite), "si bien" (although), "aun cuando" (even when). When you hear or use these markers, expect the subjunctive in the following clause. This is a hallmark of advanced Spanish.',
      example: 'De ahí que SEA necesario... | A pesar de que TENGA razón... | Aun cuando PAREZCA difícil...',
      reviewFrom: 'L4.2',
    },
    {
      title: 'Register Awareness',
      content: '"Sin embargo" and "no obstante" mean essentially the same thing (however/nevertheless), but "no obstante" is more formal. "Por lo tanto" and "por consiguiente" both mean "therefore," but "por consiguiente" is reserved for academic or legal contexts. Choosing the right register shows mastery.',
      example: 'Casual: pero | Formal: sin embargo | Academic: no obstante',
      reviewFrom: 'L4.4',
    },
  ],

  flashcardGroups: [
    {
      key: 'contrast',
      label: 'Contrast Connectors',
      audioKeys: ['sin-embargo-propuesta', 'no-obstante-resultados', 'en-cambio-otros-expertos', 'por-el-contrario-evidencia', 'a-pesar-de-eso-gobierno', 'con-todo-debemos-reconocer', 'ahora-bien-contexto-historico', 'al-contrario-economia-crecio', 'mientras-que-apoyan-reforma', 'a-diferencia-europa-latam'],
    },
    {
      key: 'cause-consequence',
      label: 'Cause & Consequence',
      audioKeys: ['por-lo-tanto-inversion', 'en-consecuencia-nuevas-leyes', 'de-ahi-que-replantear', 'dado-que-costos-subieron', 'puesto-que-no-consenso', 'ya-que-mencionas-tema', 'de-modo-que-solucion-obvia', 'asi-pues-queda-demostrado'],
    },
    {
      key: 'concession-hedging',
      label: 'Concession & Hedging',
      audioKeys: ['ademas-considerar-efectos', 'asimismo-estudios-confirman', 'incluso-criticos-reconocen', 'a-pesar-de-que-camino', 'cabe-senalar-fenomeno', 'se-podria-argumentar', 'no-se-puede-negar-avances', 'cabria-preguntarse-politica', 'en-definitiva-colaboracion', 'en-resumidas-cuentas-datos'],
    },
  ],

  matchPairs: [
    { left: 'Sin embargo', right: 'However' },
    { left: 'Por lo tanto', right: 'Therefore' },
    { left: 'Dado que', right: 'Given that' },
    { left: 'A pesar de que', right: 'Despite the fact that' },
    { left: 'Cabe señalar que', right: 'It should be noted that' },
    { left: 'No obstante', right: 'Nevertheless' },
    { left: 'En consecuencia', right: 'Consequently' },
    { left: 'En definitiva', right: 'Ultimately' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Contrast vs. Cause-Consequence',
      instruction: 'Does this marker introduce a contrast or a cause/consequence?',
      buckets: ['Contrast ⚔️', 'Cause/Consequence 🔗'],
      items: [
        { text: 'Sin embargo', bucket: 'Contrast ⚔️' },
        { text: 'No obstante', bucket: 'Contrast ⚔️' },
        { text: 'En cambio', bucket: 'Contrast ⚔️' },
        { text: 'Por el contrario', bucket: 'Contrast ⚔️' },
        { text: 'Por lo tanto', bucket: 'Cause/Consequence 🔗' },
        { text: 'En consecuencia', bucket: 'Cause/Consequence 🔗' },
        { text: 'Dado que', bucket: 'Cause/Consequence 🔗' },
        { text: 'De ahí que', bucket: 'Cause/Consequence 🔗' },
      ],
    },
    {
      title: 'Concession vs. Addition',
      instruction: 'Is this marker conceding a point or adding one?',
      buckets: ['Concession 🤝', 'Addition ➕'],
      items: [
        { text: 'A pesar de que', bucket: 'Concession 🤝' },
        { text: 'Si bien', bucket: 'Concession 🤝' },
        { text: 'Aunque', bucket: 'Concession 🤝' },
        { text: 'Aun cuando', bucket: 'Concession 🤝' },
        { text: 'Además', bucket: 'Addition ➕' },
        { text: 'Asimismo', bucket: 'Addition ➕' },
        { text: 'Es más', bucket: 'Addition ➕' },
        { text: 'No solo... sino que', bucket: 'Addition ➕' },
      ],
    },
  ],
  sortSectionId: 'marker-sorting',
  sortTitle: 'Marker Sorting',

  dialogues: [
    {
      id: 'dialogue-political-debate',
      title: 'Debate on Urban Development — Lima',
      location: 'Lima',
      lines: [
        { speaker: 'Moderadora', text: 'Buenas noches. El tema de hoy: ¿debe la ciudad priorizar el transporte público o las autopistas? Comencemos con usted, señor Ramos.', audio: '/audio/L5.4/phrases/d1-line1.mp3' },
        { speaker: 'Ramos', text: 'Gracias. Cabe señalar que Lima enfrenta una crisis de movilidad. Por lo tanto, debemos invertir masivamente en el metro y los buses.', audio: '/audio/L5.4/phrases/d1-line2.mp3', annotations: [{ phrase: 'Cabe señalar', fromLesson: 'L5.4', note: 'Academic hedging marker: "It should be noted"' }] },
        { speaker: 'Vargas', text: 'Sin embargo, señor Ramos, no podemos ignorar que millones de limeños dependen de sus vehículos. A diferencia de ciudades europeas, nuestra infraestructura no está preparada.', audio: '/audio/L5.4/phrases/d1-line3.mp3', annotations: [{ phrase: 'Sin embargo', fromLesson: 'L5.4', note: 'Contrast marker: "However"' }] },
        { speaker: 'Ramos', text: 'No obstante, los datos muestran que el 70% de la contaminación viene de los autos privados. En consecuencia, reducir su uso es urgente.', audio: '/audio/L5.4/phrases/d1-line4.mp3' },
        { speaker: 'Vargas', text: 'Si bien es cierto que la contaminación es grave, la solución no puede ser eliminar los autos de la noche a la mañana. Además, las familias necesitan opciones reales antes de dejar su vehículo.', audio: '/audio/L5.4/phrases/d1-line5.mp3', annotations: [{ phrase: 'Si bien es cierto', fromLesson: 'L5.4', note: 'Concession: "While it is true that"' }] },
        { speaker: 'Ramos', text: 'A pesar de eso, ciudades como Bogotá y Medellín han demostrado que se puede hacer la transición. De ahí que necesitemos voluntad política.', audio: '/audio/L5.4/phrases/d1-line6.mp3' },
        { speaker: 'Vargas', text: 'Se podría argumentar que esos modelos no aplican directamente a Lima. Con todo, estoy de acuerdo en que debemos mejorar el transporte público — pero gradualmente.', audio: '/audio/L5.4/phrases/d1-line7.mp3', annotations: [{ phrase: 'Se podría argumentar', fromLesson: 'L5.4', note: 'Hedging: "One could argue"' }] },
        { speaker: 'Moderadora', text: 'En definitiva, ambos coinciden en la necesidad de mejorar el sistema. Gracias por este debate tan enriquecedor.', audio: '/audio/L5.4/phrases/d1-line8.mp3' },
      ],
    },
    {
      id: 'dialogue-academic-discussion',
      title: 'Academic Panel on AI in Education — Montevideo',
      location: 'Montevideo',
      lines: [
        { speaker: 'Dra. Sánchez', text: 'Bueno, la pregunta central es: ¿la inteligencia artificial mejorará la educación o la perjudicará? Es preciso mencionar que los estudios aún son limitados.', audio: '/audio/L5.4/phrases/d2-line1.mp3', annotations: [{ phrase: 'Es preciso mencionar', fromLesson: 'L5.4', note: 'Academic hedging: "It is necessary to mention"' }] },
        { speaker: 'Prof. Oliveira', text: 'Desde esta perspectiva, conviene destacar que la IA puede personalizar el aprendizaje. No obstante, el rol del docente sigue siendo insustituible.', audio: '/audio/L5.4/phrases/d2-line2.mp3' },
        { speaker: 'Dra. Sánchez', text: 'Asimismo, debemos considerar el acceso desigual a la tecnología. Dado que no todos los estudiantes tienen las mismas herramientas, la brecha digital podría ampliarse.', audio: '/audio/L5.4/phrases/d2-line3.mp3', annotations: [{ phrase: 'Dado que', fromLesson: 'L5.4', note: 'Cause marker: "Given that"' }] },
        { speaker: 'Prof. Oliveira', text: 'Por el contrario, algunos argumentan que la IA reduce costos y democratiza el acceso. Todo parece indicar que depende de la implementación.', audio: '/audio/L5.4/phrases/d2-line4.mp3' },
        { speaker: 'Dra. Sánchez', text: 'Cabría preguntarse si estamos preparados para regular esta tecnología en el aula. Aun cuando las intenciones sean buenas, los riesgos existen.', audio: '/audio/L5.4/phrases/d2-line5.mp3', annotations: [{ phrase: 'Cabría preguntarse', fromLesson: 'L5.4', note: 'Hedging: "One might wonder"' }] },
        { speaker: 'Prof. Oliveira', text: 'No se puede negar que hay riesgos. Ahora bien, también es cierto que la educación tradicional tiene sus propias limitaciones.', audio: '/audio/L5.4/phrases/d2-line6.mp3' },
        { speaker: 'Dra. Sánchez', text: 'De modo que la clave no es elegir entre IA y educación tradicional, sino encontrar el equilibrio correcto.', audio: '/audio/L5.4/phrases/d2-line7.mp3' },
        { speaker: 'Prof. Oliveira', text: 'En resumidas cuentas, necesitamos más investigación, mejor regulación y, sobre todo, escuchar a los docentes.', audio: '/audio/L5.4/phrases/d2-line8.mp3' },
        { speaker: 'Dra. Sánchez', text: 'Completamente de acuerdo. Por consiguiente, propongo que formemos un comité de seguimiento. ¿Le parece?', audio: '/audio/L5.4/phrases/d2-line9.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Join a heated political debate on urban development in Lima and an academic panel discussion about AI in education in Montevideo.',

  culturalNotes: [
    {
      title: 'La Cultura del Debate en el Mundo Hispanohablante',
      content: 'Debate culture varies significantly across the Spanish-speaking world. In Argentina and Uruguay, passionate political discussion ("la mesa del domingo") is a cherished family tradition — expect raised voices, interruptions, and animated gestures without offense. In Mexico, debate tends to be more diplomatic, using softening markers like "con todo respeto" and "me permito señalar." In Spain, tertulias (talk-show debates) are a national pastime, where panelists use discourse markers at lightning speed. Understanding these cultural norms helps you choose the right level of directness.',
    },
    {
      title: 'El Español Académico: Una Tradición de Siglos',
      content: 'Academic Spanish has a rich tradition dating back to the Universidad de Salamanca (1218). Unlike English academic writing, which favors short, direct sentences, Spanish academic prose embraces longer, more complex structures with multiple subordinate clauses. Markers like "cabe señalar," "es preciso mencionar," and "cabría preguntarse" are not just decorative — they signal scholarly rigor. The Real Academia Española (RAE) and ASALE set standards that unify academic language across 20+ countries.',
    },
    {
      title: 'Argumentación Política en América Latina',
      content: 'Political discourse in Latin America is deeply intertwined with literary tradition. Leaders like José Martí (Cuba), Gabriela Mistral (Chile), and Octavio Paz (Mexico) shaped political language with poetic power. Today, political speeches use discourse markers strategically: "sin embargo" to pivot, "por consiguiente" to build momentum, and "en definitiva" to close with authority. Even informal political conversations at cafés use these markers — mastering them connects you to a centuries-old tradition of public argument.',
    },
  ],
  culturalGradient: 'from-rose-50 to-orange-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Sin embargo" is used to:', options: ['Add information', 'Show cause', 'Introduce a contrast', 'Conclude an argument'], answer: 2 },
    { id: 2, type: 'fill', text: 'Complete: "___ los costos son altos, los beneficios justifican la inversión." (Although)', answer: ['Si bien', 'Aunque', 'A pesar de que'] },
    { id: 3, type: 'mc', text: '"Por lo tanto" means:', options: ['However', 'Furthermore', 'Therefore', 'Despite'], answer: 2 },
    { id: 4, type: 'tf', text: '"De ahí que" requires the subjunctive in the following clause.', answer: true },
    { id: 5, type: 'mc', text: 'Which marker is most appropriate for academic writing?', options: ['Pero', 'Sin embargo', 'No obstante', 'Aunque'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "___ que este fenómeno requiere más investigación." (It should be noted)', answer: 'Cabe señalar' },
    { id: 7, type: 'mc', text: '"En consecuencia" is a marker of:', options: ['Contrast', 'Concession', 'Cause/consequence', 'Addition'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, Ramos argues Lima should invest in:', options: ['Highways', 'Metro and buses', 'Electric cars', 'Bike lanes'], answer: 1 },
    { id: 9, type: 'tf', text: '"Además" and "asimismo" both function as addition markers.', answer: true },
    { id: 10, type: 'mc', text: '"Se podría argumentar que..." is an example of:', options: ['Direct assertion', 'Academic hedging', 'Contrast', 'Concession'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "Los datos son claros. ___, debemos actuar con urgencia." (Therefore)', answer: ['Por lo tanto', 'En consecuencia', 'Por consiguiente'] },
    { id: 12, type: 'mc', text: 'In Dialogue 2, Dra. Sánchez\'s main concern about AI is:', options: ['Cost', 'Digital divide', 'Job losses', 'Privacy'], answer: 1 },
    { id: 13, type: 'mc', text: '"A pesar de que" is followed by:', options: ['Infinitive only', 'Indicative or subjunctive', 'Future tense', 'Imperative'], answer: 1 },
    { id: 14, type: 'tf', text: 'In Latin America, political debate traditions are closely tied to literary heritage.', answer: true },
    { id: 15, type: 'mc', text: '"En definitiva" is best translated as:', options: ['Definitely', 'In the end / Ultimately', 'By definition', 'Without a doubt'], answer: 1 },
  ],

  audioBase: '/audio/L5.4/phrases',

  uniqueActivity: {
    id: 'DebateArenaL54',
    sectionId: 'debate-arena',
    sectionColor: 'bg-rose-50/40',
    sectionBorder: 'border-rose-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'contrast-connectors': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'cause-consequence': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'concession-addition': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    'hedging-academic': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'marker-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'debate-arena': { bg: 'bg-rose-50/40', border: 'border-rose-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
