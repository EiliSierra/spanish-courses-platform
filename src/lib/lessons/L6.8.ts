import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Rhetorical Devices (12) ===
  { spanish: 'La anáfora repite palabras al inicio de cada frase para crear ritmo', english: 'Anaphora repeats words at the beginning of each phrase to create rhythm', pronunciation: 'lah ah-NAH-foh-rah rreh-PEE-teh pah-LAH-brahs ahl ee-NEE-see-oh deh KAH-dah FRAH-seh PAH-rah kreh-AHR RREET-moh', category: 'rhetorical-devices', audio: 'la-anafora-repite' },
  { spanish: 'La antítesis confronta ideas opuestas para crear impacto', english: 'Antithesis confronts opposing ideas to create impact', pronunciation: 'lah ahn-TEE-teh-sees kohn-FROHN-tah ee-DEH-ahs oh-PWEHS-tahs PAH-rah kreh-AHR eem-PAHK-toh', category: 'rhetorical-devices', audio: 'la-antitesis-confronta' },
  { spanish: 'La gradación construye una escalada de intensidad', english: 'Gradation builds a crescendo of intensity', pronunciation: 'lah grah-dah-see-OHN kohns-TROO-yeh OO-nah ehs-kah-LAH-dah deh een-tehn-see-DAHD', category: 'rhetorical-devices', audio: 'la-gradacion-construye' },
  { spanish: '¿Acaso no merecemos un futuro mejor? — una pregunta retórica', english: 'Don\'t we deserve a better future? — a rhetorical question', pronunciation: 'ah-KAH-soh noh meh-reh-SEH-mohs oon foo-TOO-roh meh-HOHR OO-nah preh-GOON-tah rreh-TOH-ree-kah', category: 'rhetorical-devices', audio: 'acaso-no-merecemos' },
  { spanish: 'El paralelismo repite estructuras gramaticales idénticas', english: 'Parallelism repeats identical grammatical structures', pronunciation: 'ehl pah-rah-leh-LEES-moh rreh-PEE-teh ehs-trook-TOO-rahs grah-mah-tee-KAH-lehs ee-DEHN-tee-kahs', category: 'rhetorical-devices', audio: 'el-paralelismo-repite' },
  { spanish: 'El clímax lleva al público al punto de máxima emoción', english: 'The climax brings the audience to the point of maximum emotion', pronunciation: 'ehl KLEE-mahks YEH-bah ahl POO-blee-koh ahl POON-toh deh MAHK-see-mah eh-moh-see-OHN', category: 'rhetorical-devices', audio: 'el-climax-lleva' },
  { spanish: 'La metáfora transforma una idea abstracta en una imagen concreta', english: 'Metaphor transforms an abstract idea into a concrete image', pronunciation: 'lah meh-TAH-foh-rah trahns-FOHR-mah OO-nah ee-DEH-ah ahbs-TRAHK-tah ehn OO-nah ee-MAH-hehn kohn-KREH-tah', category: 'rhetorical-devices', audio: 'la-metafora-transforma' },
  { spanish: 'La hipérbole exagera para enfatizar un punto', english: 'Hyperbole exaggerates to emphasize a point', pronunciation: 'lah ee-PEHR-boh-leh ehk-sah-HEH-rah PAH-rah ehn-fah-tee-SAHR oon POON-toh', category: 'rhetorical-devices', audio: 'la-hiperbole-exagera' },
  { spanish: 'La ironía dice lo contrario de lo que quiere expresar', english: 'Irony says the opposite of what it means to express', pronunciation: 'lah ee-roh-NEE-ah DEE-seh loh kohn-TRAH-ree-oh deh loh keh kee-EH-reh ehks-preh-SAHR', category: 'rhetorical-devices', audio: 'la-ironia-dice' },
  { spanish: 'La aliteración repite sonidos consonánticos para crear musicalidad', english: 'Alliteration repeats consonant sounds to create musicality', pronunciation: 'lah ah-lee-teh-rah-see-OHN rreh-PEE-teh soh-NEE-dohs kohn-soh-NAHN-tee-kohs PAH-rah kreh-AHR moo-see-kah-lee-DAHD', category: 'rhetorical-devices', audio: 'la-aliteracion-repite' },
  { spanish: 'La personificación atribuye cualidades humanas a lo inanimado', english: 'Personification attributes human qualities to inanimate things', pronunciation: 'lah pehr-soh-nee-fee-kah-see-OHN ah-tree-BOO-yeh kwah-lee-DAH-dehs oo-MAH-nahs ah loh ee-nah-nee-MAH-doh', category: 'rhetorical-devices', audio: 'la-personificacion-atribuye' },
  { spanish: 'El asíndeton elimina conjunciones para acelerar el ritmo', english: 'Asyndeton eliminates conjunctions to accelerate the rhythm', pronunciation: 'ehl ah-SEEN-deh-tohn eh-lee-MEE-nah kohn-hoon-see-OH-nehs PAH-rah ah-seh-leh-RAHR ehl RREET-moh', category: 'rhetorical-devices', audio: 'el-asindeton-elimina' },

  // === Speech Structure (12) ===
  { spanish: 'Estimado público, es un honor dirigirme a ustedes hoy', english: 'Dear audience, it is an honor to address you today', pronunciation: 'ehs-tee-MAH-doh POO-blee-koh ehs oon oh-NOHR dee-ree-HEER-meh ah oos-TEH-dehs oy', category: 'speech-structure', audio: 'estimado-publico' },
  { spanish: 'En primer lugar, quiero agradecer su presencia', english: 'First of all, I want to thank you for your presence', pronunciation: 'ehn pree-MEHR loo-GAHR kee-EH-roh ah-grah-deh-SEHR soo preh-SEHN-see-ah', category: 'speech-structure', audio: 'en-primer-lugar-quiero' },
  { spanish: 'Permítanme comenzar con una pregunta fundamental', english: 'Allow me to begin with a fundamental question', pronunciation: 'pehr-MEE-tahn-meh koh-mehn-SAHR kohn OO-nah preh-GOON-tah foon-dah-mehn-TAHL', category: 'speech-structure', audio: 'permitanme-comenzar' },
  { spanish: 'Para concluir, quiero dejarles una reflexión', english: 'To conclude, I want to leave you with a reflection', pronunciation: 'PAH-rah kohn-kloo-EER kee-EH-roh deh-HAHR-lehs OO-nah rreh-flehk-see-OHN', category: 'speech-structure', audio: 'para-concluir-quiero' },
  { spanish: 'Hago un llamado a la acción: no podemos esperar más', english: 'I make a call to action: we cannot wait any longer', pronunciation: 'AH-goh oon yah-MAH-doh ah lah ahk-see-OHN noh poh-DEH-mohs ehs-peh-RAHR mahs', category: 'speech-structure', audio: 'hago-un-llamado' },
  { spanish: 'Como les decía al principio, el cambio empieza por nosotros', english: 'As I was saying at the beginning, change starts with us', pronunciation: 'KOH-moh lehs deh-SEE-ah ahl preen-SEE-pee-oh ehl KAHM-bee-oh ehm-pee-EH-sah pohr noh-SOH-trohs', category: 'speech-structure', audio: 'como-les-decia' },
  { spanish: 'Quisiera compartir con ustedes una historia personal', english: 'I would like to share a personal story with you', pronunciation: 'kee-see-EH-rah kohm-pahr-TEER kohn oos-TEH-dehs OO-nah ees-TOH-ree-ah pehr-soh-NAHL', category: 'speech-structure', audio: 'quisiera-compartir' },
  { spanish: 'Los datos son contundentes: el 80% de los encuestados coincide', english: 'The data is compelling: 80% of respondents agree', pronunciation: 'lohs DAH-tohs sohn kohn-toon-DEHN-tehs ehl oh-CHEHN-tah pohr see-EHN-toh deh lohs ehn-kwehs-TAH-dohs koh-een-SEE-deh', category: 'speech-structure', audio: 'los-datos-son-contundentes' },
  { spanish: 'Ahora bien, hay quienes podrían objetar que esto no es viable', english: 'Now then, there are those who might object that this is not viable', pronunciation: 'ah-OH-rah bee-EHN ay kee-EH-nehs poh-DREE-ahn ohb-heh-TAHR keh EHS-toh noh ehs bee-AH-bleh', category: 'speech-structure', audio: 'ahora-bien-hay-quienes' },
  { spanish: 'Sin embargo, las evidencias demuestran lo contrario', english: 'However, the evidence demonstrates the opposite', pronunciation: 'seen ehm-BAHR-goh lahs eh-bee-DEHN-see-ahs deh-MWEHS-trahn loh kohn-TRAH-ree-oh', category: 'speech-structure', audio: 'sin-embargo-las-evidencias' },
  { spanish: 'Antes de terminar, quiero recalcar tres puntos clave', english: 'Before finishing, I want to emphasize three key points', pronunciation: 'AHN-tehs deh tehr-mee-NAHR kee-EH-roh rreh-kahl-KAHR trehs POON-tohs KLAH-beh', category: 'speech-structure', audio: 'antes-de-terminar' },
  { spanish: 'Les dejo con esta cita de Gabriel García Márquez', english: 'I leave you with this quote from Gabriel García Márquez', pronunciation: 'lehs DEH-hoh kohn EHS-tah SEE-tah deh gah-bree-EHL gahr-SEE-ah MAHR-kehs', category: 'speech-structure', audio: 'les-dejo-con-esta-cita' },

  // === Persuasion Techniques (12) ===
  { spanish: 'Apelar a las emociones conecta con el corazón del público', english: 'Appealing to emotions connects with the audience\'s heart', pronunciation: 'ah-peh-LAHR ah lahs eh-moh-see-OH-nehs koh-NEHK-tah kohn ehl koh-rah-SOHN dehl POO-blee-koh', category: 'persuasion-techniques', audio: 'apelar-a-las-emociones' },
  { spanish: 'Establecer credibilidad es el primer paso para persuadir', english: 'Establishing credibility is the first step to persuading', pronunciation: 'ehs-tah-bleh-SEHR kreh-dee-bee-lee-DAHD ehs ehl pree-MEHR PAH-soh PAH-rah pehr-swah-DEER', category: 'persuasion-techniques', audio: 'establecer-credibilidad' },
  { spanish: 'Presentar evidencia sólida fortalece cualquier argumento', english: 'Presenting solid evidence strengthens any argument', pronunciation: 'preh-sehn-TAHR eh-bee-DEHN-see-ah SOH-lee-dah fohr-tah-LEH-seh kwahl-kee-EHR ahr-goo-MEHN-toh', category: 'persuasion-techniques', audio: 'presentar-evidencia-solida' },
  { spanish: 'Anticipar objeciones demuestra dominio del tema', english: 'Anticipating objections demonstrates mastery of the subject', pronunciation: 'ahn-tee-see-PAHR ohb-heh-see-OH-nehs deh-MWEHS-trah doh-MEE-nee-oh dehl TEH-mah', category: 'persuasion-techniques', audio: 'anticipar-objeciones' },
  { spanish: 'Usar anécdotas personales humaniza el mensaje', english: 'Using personal anecdotes humanizes the message', pronunciation: 'oo-SAHR ah-NEHK-doh-tahs pehr-soh-NAH-lehs oo-mah-NEE-sah ehl mehn-SAH-heh', category: 'persuasion-techniques', audio: 'usar-anecdotas-personales' },
  { spanish: 'El contacto visual genera confianza y conexión', english: 'Eye contact generates trust and connection', pronunciation: 'ehl kohn-TAHK-toh bee-soo-AHL heh-NEH-rah kohn-fee-AHN-sah ee koh-nehk-see-OHN', category: 'persuasion-techniques', audio: 'el-contacto-visual' },
  { spanish: 'Las pausas estratégicas dan peso a las palabras clave', english: 'Strategic pauses give weight to key words', pronunciation: 'lahs POW-sahs ehs-trah-TEH-hee-kahs dahn PEH-soh ah lahs pah-LAH-brahs KLAH-beh', category: 'persuasion-techniques', audio: 'las-pausas-estrategicas' },
  { spanish: 'Repetir la idea central refuerza el mensaje', english: 'Repeating the central idea reinforces the message', pronunciation: 'rreh-peh-TEER lah ee-DEH-ah sehn-TRAHL rreh-FWEHR-sah ehl mehn-SAH-heh', category: 'persuasion-techniques', audio: 'repetir-la-idea-central' },
  { spanish: 'Invocar valores compartidos une al orador con su público', english: 'Invoking shared values unites the speaker with their audience', pronunciation: 'een-boh-KAHR bah-LOH-rehs kohm-pahr-TEE-dohs OO-neh ahl oh-rah-DOHR kohn soo POO-blee-koh', category: 'persuasion-techniques', audio: 'invocar-valores-compartidos' },
  { spanish: 'El tono de voz debe variar para mantener la atención', english: 'The tone of voice should vary to maintain attention', pronunciation: 'ehl TOH-noh deh bohs DEH-beh bah-ree-AHR PAH-rah mahn-teh-NEHR lah ah-tehn-see-OHN', category: 'persuasion-techniques', audio: 'el-tono-de-voz' },
  { spanish: 'Citar a expertos aporta autoridad al discurso', english: 'Citing experts adds authority to the speech', pronunciation: 'see-TAHR ah ehks-PEHR-tohs ah-POHR-tah ow-toh-ree-DAHD ahl dees-KOOR-soh', category: 'persuasion-techniques', audio: 'citar-a-expertos' },
  { spanish: 'Un cierre poderoso deja una impresión duradera', english: 'A powerful closing leaves a lasting impression', pronunciation: 'oon see-EH-rreh poh-deh-ROH-soh DEH-hah OO-nah eem-preh-see-OHN doo-rah-DEH-rah', category: 'persuasion-techniques', audio: 'un-cierre-poderoso' },

  // === Famous Speeches (12) ===
  { spanish: '"Compañeros, hay que endurecerse, pero sin perder la ternura jamás" — Che Guevara', english: '"Comrades, we must harden ourselves but without ever losing tenderness" — Che Guevara', pronunciation: 'kohm-pah-NYEH-rohs ay keh ehn-doo-reh-SEHR-seh PEH-roh seen pehr-DEHR lah tehr-NOO-rah hah-MAHS', category: 'famous-speeches', audio: 'companeros-hay-que' },
  { spanish: '"La Historia me absolverá" — Fidel Castro, discurso de defensa, 1953', english: '"History will absolve me" — Fidel Castro, defense speech, 1953', pronunciation: 'lah ees-TOH-ree-ah meh ahb-sohl-beh-RAH', category: 'famous-speeches', audio: 'la-historia-me-absolvera' },
  { spanish: '"Sueño con un continente unido por la justicia" — Simón Bolívar', english: '"I dream of a continent united by justice" — Simón Bolívar', pronunciation: 'SWEH-nyoh kohn oon kohn-tee-NEHN-teh oo-NEE-doh pohr lah hoos-TEE-see-ah', category: 'famous-speeches', audio: 'sueno-con-un-continente' },
  { spanish: '"La patria es dicha de todos, y dolor de todos" — José Martí', english: '"The homeland is the joy of all, and the pain of all" — José Martí', pronunciation: 'lah PAH-tree-ah ehs DEE-chah deh TOH-dohs ee doh-LOHR deh TOH-dohs', category: 'famous-speeches', audio: 'la-patria-es-dicha' },
  { spanish: 'El discurso de Eva Perón unió a millones con su oratoria apasionada', english: 'Eva Perón\'s speech united millions with her passionate oratory', pronunciation: 'ehl dees-KOOR-soh deh EH-bah peh-ROHN oo-nee-OH ah mee-YOH-nehs kohn soo oh-rah-TOH-ree-ah ah-pah-see-oh-NAH-dah', category: 'famous-speeches', audio: 'el-discurso-de-eva-peron' },
  { spanish: '"Yo no vengo a llorar; aquí vengo a encender mi sangre" — Pablo Neruda', english: '"I don\'t come to weep; here I come to ignite my blood" — Pablo Neruda', pronunciation: 'yoh noh BEHN-goh ah yoh-RAHR ah-KEE BEHN-goh ah ehn-sehn-DEHR mee SAHN-greh', category: 'famous-speeches', audio: 'yo-no-vengo-a-llorar' },
  { spanish: 'Rigoberta Menchú habló ante la ONU sobre los derechos indígenas', english: 'Rigoberta Menchú spoke before the UN about indigenous rights', pronunciation: 'rree-goh-BEHR-tah mehn-CHOO ah-BLOH AHN-teh lah oh-NOO SOH-breh lohs deh-REH-chohs een-DEE-heh-nahs', category: 'famous-speeches', audio: 'rigoberta-menchu-hablo' },
  { spanish: '"El pueblo unido jamás será vencido" — eslogan de protesta chileno', english: '"The people united will never be defeated" — Chilean protest slogan', pronunciation: 'ehl PWEH-bloh oo-NEE-doh hah-MAHS seh-RAH behn-SEE-doh', category: 'famous-speeches', audio: 'el-pueblo-unido' },
  { spanish: 'Gabriel García Márquez usó su discurso Nobel para hablar de América Latina', english: 'Gabriel García Márquez used his Nobel speech to speak about Latin America', pronunciation: 'gah-bree-EHL gahr-SEE-ah MAHR-kehs oo-SOH soo dees-KOOR-soh NOH-behl PAH-rah ah-BLAHR deh ah-MEH-ree-kah lah-TEE-nah', category: 'famous-speeches', audio: 'garcia-marquez-uso' },
  { spanish: '"Tenemos sed de libertad" es un recurso de personificación colectiva', english: '"We thirst for freedom" is a collective personification device', pronunciation: 'teh-NEH-mohs SEHD deh lee-behr-TAHD ehs oon rreh-KOOR-soh deh pehr-soh-nee-fee-kah-see-OHN koh-lehk-TEE-bah', category: 'famous-speeches', audio: 'tenemos-sed-de-libertad' },
  { spanish: 'La anáfora en discursos: "Queremos paz. Queremos justicia. Queremos dignidad."', english: 'Anaphora in speeches: "We want peace. We want justice. We want dignity."', pronunciation: 'keh-REH-mohs pahs keh-REH-mohs hoos-TEE-see-ah keh-REH-mohs deeg-nee-DAHD', category: 'famous-speeches', audio: 'queremos-paz-queremos' },
  { spanish: 'La oratoria es el arte de mover conciencias con la palabra', english: 'Oratory is the art of moving consciences with the word', pronunciation: 'lah oh-rah-TOH-ree-ah ehs ehl AHR-teh deh moh-BEHR kohn-see-EHN-see-ahs kohn lah pah-LAH-brah', category: 'famous-speeches', audio: 'la-oratoria-es-el-arte' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L68PhraseByAudio = phraseByAudio

// === SPEECH CRAFTER (unique activity) ===

export interface SpeechCrafterChallenge {
  context: string
  english: string
  missingElement: string
  correctPhrase: string
  options: string[]
}

export const SPEECH_CRAFTER_CHALLENGES: SpeechCrafterChallenge[] = [
  {
    context: 'You are opening a TEDx talk about education reform. You need a powerful opening.',
    english: 'Opening line to grab attention',
    missingElement: 'Attention-grabbing opening',
    correctPhrase: 'Permítanme comenzar con una pregunta fundamental: ¿por qué seguimos educando para el siglo pasado?',
    options: ['Permítanme comenzar con una pregunta fundamental: ¿por qué seguimos educando para el siglo pasado?', 'Bueno, hoy voy a hablar de educación.', 'La educación es importante para todos nosotros.', 'Gracias por venir. Empecemos.'],
  },
  {
    context: 'You need to present shocking data during a speech about climate change.',
    english: 'Presenting evidence with impact',
    missingElement: 'Data presentation with emphasis',
    correctPhrase: 'Los datos son contundentes: en los últimos diez años, hemos perdido el equivalente a un país del tamaño de Portugal en bosques.',
    options: ['Hay algunos datos sobre el medio ambiente.', 'Los datos son contundentes: en los últimos diez años, hemos perdido el equivalente a un país del tamaño de Portugal en bosques.', 'El cambio climático es un problema.', 'Las estadísticas son interesantes.'],
  },
  {
    context: 'You are concluding a speech about women\'s rights. You need a powerful call to action.',
    english: 'Closing with a call to action',
    missingElement: 'Emotional call to action',
    correctPhrase: 'Hago un llamado a la acción: no podemos esperar más. Cada día de silencio es un día de injusticia.',
    options: ['Bueno, eso es todo. Gracias.', 'Espero que hayan aprendido algo.', 'Hago un llamado a la acción: no podemos esperar más. Cada día de silencio es un día de injusticia.', 'Les recomiendo leer más sobre el tema.'],
  },
  {
    context: 'You anticipate that critics will say your proposal is too expensive. You need to address this proactively.',
    english: 'Anticipating and addressing objections',
    missingElement: 'Preemptive counter-argument',
    correctPhrase: 'Ahora bien, hay quienes podrían objetar que esto no es viable económicamente. Sin embargo, las evidencias demuestran que la inacción cuesta diez veces más.',
    options: ['No me importa lo que piensen los críticos.', 'Ahora bien, hay quienes podrían objetar que esto no es viable económicamente. Sin embargo, las evidencias demuestran que la inacción cuesta diez veces más.', 'Sé que es caro, pero tenemos que hacerlo.', 'Los críticos no saben nada del tema.'],
  },
  {
    context: 'You want to use anaphora to build emotional momentum about the need for equality.',
    english: 'Using anaphora for emotional buildup',
    missingElement: 'Anaphora structure',
    correctPhrase: 'Queremos un mundo donde nadie pase hambre. Queremos un mundo donde todos tengan acceso a la educación. Queremos un mundo donde la dignidad no sea un privilegio.',
    options: ['La igualdad es importante para la sociedad.', 'Hay muchos problemas en el mundo.', 'Queremos un mundo donde nadie pase hambre. Queremos un mundo donde todos tengan acceso a la educación. Queremos un mundo donde la dignidad no sea un privilegio.', 'Debemos trabajar juntos por un futuro mejor.'],
  },
  {
    context: 'You need to establish your credibility before presenting a controversial proposal.',
    english: 'Establishing credibility',
    missingElement: 'Ethos / credibility builder',
    correctPhrase: 'Después de veinte años investigando este tema y haber entrevistado a más de quinientos expertos, puedo afirmar con confianza que existe una solución.',
    options: ['Yo creo que tengo razón.', 'Después de veinte años investigando este tema y haber entrevistado a más de quinientos expertos, puedo afirmar con confianza que existe una solución.', 'Esto es lo que pienso del problema.', 'Soy una persona que sabe mucho.'],
  },
  {
    context: 'You want to close your speech by circling back to the opening, creating a satisfying sense of completeness.',
    english: 'Circular closing technique',
    missingElement: 'Callback to opening',
    correctPhrase: 'Como les decía al principio, el cambio empieza por nosotros. Y ahora, después de todo lo que hemos compartido, espero que cada uno de ustedes salga de aquí listo para ser ese cambio.',
    options: ['Como les decía al principio, el cambio empieza por nosotros. Y ahora, después de todo lo que hemos compartido, espero que cada uno de ustedes salga de aquí listo para ser ese cambio.', 'Bueno, eso fue todo. Adiós.', 'En conclusión, hay que mejorar las cosas.', 'Muchas gracias por escucharme hoy.'],
  },
]

// === LESSON DATA ===

export const L68Data: LessonData = {
  id: 'L6.8',
  hero: {
    lessonId: 'L6.8',
    title: 'Public Speaking & Rhetoric',
    subtitle: 'The art of moving minds and hearts with the spoken word',
    description: 'Master the rhetorical devices, speech structures, and persuasion techniques that make great orators unforgettable. From anaphora to antithesis, from TED talks to political speeches, learn to craft and deliver powerful messages in Spanish.',
    image: '/images/L6.8/L6.8.jpg',
    gradient: 'from-red-800/65 via-rose-700/55 to-pink-700/65',
    accentColor: 'red-200',
  },

  objectives: [
    { icon: '🎭', title: 'Rhetorical Devices', desc: 'Master anaphora, antithesis, gradation, rhetorical questions, parallelism, and climax.' },
    { icon: '🏗️', title: 'Speech Structure', desc: 'Open with impact, build with evidence, and close with a memorable call to action.' },
    { icon: '🎯', title: 'Persuasion Techniques', desc: 'Appeal to emotions, establish credibility, present evidence, and anticipate objections.' },
    { icon: '🔥', title: 'Famous Speeches', desc: 'Analyze rhetorical strategies from Bolívar, Martí, Eva Perón, Neruda, and García Márquez.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L5.5', label: 'Professional Presentations', detail: 'L5.5 taught formal presentations and meeting language. Now go from presenting information to persuading audiences.' },
    { fromLesson: 'L5.4', label: 'Discourse Markers', detail: 'L5.4 covered connectors and argumentation. Now use them as building blocks for powerful rhetoric.' },
    { fromLesson: 'L6.6', label: 'Argumentation', detail: 'L6.6 taught logical reasoning and fallacies. Now combine logic with emotion for maximum persuasive impact.' },
  ],

  sectionTransitions: [
    { afterSection: 'rhetorical-devices', text: 'You\'ve mastered the tools of rhetoric! Now let\'s learn how to structure a speech from opening to close.' },
    { afterSection: 'speech-structure', text: 'Your speech has structure! Let\'s add the techniques that make audiences believe, feel, and act.' },
    { afterSection: 'persuasion-techniques', text: 'You\'re persuasive! Now let\'s analyze how the greatest Spanish-language orators used these techniques.' },
    { afterSection: 'dialogues', text: 'Incredible speeches! Let\'s explore the cultural tradition of oratory in the Spanish-speaking world.' },
    { afterSection: 'cultural', text: 'Cultural context mastered! Now craft your own speeches in the Speech Crafter challenge.' },
    { afterSection: 'speech-crafter', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Estimado público...', english: 'Dear audience...' },
    { spanish: 'Permítanme comenzar con...', english: 'Allow me to begin with...' },
    { spanish: 'Hago un llamado a...', english: 'I make a call to...' },
    { spanish: 'Los datos son contundentes...', english: 'The data is compelling...' },
    { spanish: 'Para concluir...', english: 'To conclude...' },
    { spanish: 'En primer lugar...', english: 'First of all...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Queremos paz. Queremos justicia. Queremos dignidad.', pronunciation: 'keh-REH-mohs pahs keh-REH-mohs hoos-TEE-see-ah keh-REH-mohs deeg-nee-DAHD', english: 'We want peace. We want justice. We want dignity.', audio: 'queremos-paz-queremos-justicia-queremos-dignidad', tip: 'This is anaphora in action: repeating "queremos" at the start of each phrase. In public speaking, the rhythm must be deliberate — pause slightly between each sentence for maximum impact.' },
    { spanish: 'Hago un llamado a la acción: no podemos esperar más', pronunciation: 'AH-goh oon yah-MAH-doh ah lah ahk-see-OHN noh poh-DEH-mohs ehs-peh-RAHR mahs', english: 'I make a call to action: we cannot wait any longer', audio: 'hago-un-llamado-a-la-accion-no-podemos-esperar-mas', tip: 'A call to action needs a strong, descending intonation on the final words. "No podemos esperar MÁS" — the word "más" should land like a hammer.' },
    { spanish: 'Los datos son contundentes: el ochenta por ciento coincide', pronunciation: 'lohs DAH-tohs sohn kohn-toon-DEHN-tehs ehl oh-CHEHN-tah pohr see-EHN-toh koh-een-SEE-deh', english: 'The data is compelling: eighty percent agree', audio: 'los-datos-son-contundentes-el-ochenta-por-ciento-coincide', tip: '"Contundentes" (compelling/overwhelming) is a power word in Spanish rhetoric. Notice how the "tun" syllable naturally carries weight — lean into it for emphasis.' },
    { spanish: 'Permítanme comenzar con una pregunta fundamental', pronunciation: 'pehr-MEE-tahn-meh koh-mehn-SAHR kohn OO-nah preh-GOON-tah foon-dah-mehn-TAHL', english: 'Allow me to begin with a fundamental question', audio: 'permitanme-comenzar-con-una-pregunta-fundamental', tip: 'This formal opening uses "permítanme" (allow me) with the ustedes command form. The falling intonation on "fundamental" signals importance and invites the audience to lean in.' },
    { spanish: '"La patria es dicha de todos, y dolor de todos" — José Martí', pronunciation: 'lah PAH-tree-ah ehs DEE-chah deh TOH-dohs ee doh-LOHR deh TOH-dohs', english: '"The homeland is the joy of all, and the pain of all" — José Martí', audio: 'la-patria-es-dicha-de-todos-y-dolor-de-todos-jose-marti', tip: 'Martí uses antithesis: "dicha" (joy) vs. "dolor" (pain). The parallel structure with "de todos" repeated creates a musical, memorable rhythm. Great orators use balance and contrast.' },
    { spanish: 'El pueblo unido jamás será vencido', pronunciation: 'ehl PWEH-bloh oo-NEE-doh hah-MAHS seh-RAH behn-SEE-doh', english: 'The people united will never be defeated', audio: 'el-pueblo-unido-jamas-sera-vencido', tip: 'This Chilean protest chant has become universal. Its power lies in its rhythm (each word stressed equally) and the finality of "vencido." In protests, it\'s chanted in unison — the ultimate rhetorical act.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'rhetorical-devices', label: 'Rhetorical Devices' },
    { id: 'speech-structure', label: 'Speech Structure' },
    { id: 'persuasion-techniques', label: 'Persuasion Techniques' },
    { id: 'famous-speeches', label: 'Famous Speeches' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'rhetoric-sorting', label: 'Rhetoric Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'speech-crafter', label: 'Speech Crafter' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'rhetorical-devices',
      title: 'Rhetorical Devices — Figuras Retóricas',
      description: 'The toolbox of great speakers: repetition, contrast, exaggeration, and rhythm.',
      tabs: [
        { label: 'Structure & Rhythm', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'rhetorical-devices').slice(0, 6) },
        { label: 'Imagery & Sound', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'rhetorical-devices').slice(6) },
      ],
    },
    {
      id: 'speech-structure',
      title: 'Speech Structure — Estructura del Discurso',
      description: 'How to open, build, and close a speech that moves people.',
      tabs: [
        { label: 'Openings & Transitions', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'speech-structure').slice(0, 6) },
        { label: 'Evidence & Closings', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'speech-structure').slice(6) },
      ],
    },
    {
      id: 'persuasion-techniques',
      title: 'Persuasion Techniques — Técnicas de Persuasión',
      description: 'Ethos (credibility), pathos (emotion), and logos (logic) — the three pillars of persuasion.',
      tabs: [
        { label: 'Emotion & Credibility', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'persuasion-techniques').slice(0, 6) },
        { label: 'Delivery & Authority', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'persuasion-techniques').slice(6) },
      ],
    },
    {
      id: 'famous-speeches',
      title: 'Famous Speeches — Discursos Célebres',
      description: 'Iconic quotes and rhetorical analysis from the greatest Spanish-language orators in history.',
      tabs: [
        { label: 'Revolutionary Voices', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'famous-speeches').slice(0, 6) },
        { label: 'Modern Oratory', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'famous-speeches').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Power of the Pause',
      content: 'In Spanish oratory, silence is a rhetorical device. "Hago un llamado a la acción... [pause] ...no podemos esperar más." The pause before the key phrase creates anticipation. Great speakers like Fidel Castro and Eva Perón were masters of the strategic pause.',
      example: 'Queremos paz. [pausa] Queremos justicia. [pausa] Queremos dignidad. [pausa larga] Y la queremos AHORA.',
    },
    {
      title: 'Anaphora: The Heart of Political Speech',
      content: 'Repeating words at the start of consecutive phrases is the most powerful rhetorical device in any language. In Spanish, the natural rhythm of the language makes anaphora especially musical. Martin Luther King\'s "I have a dream" technique works identically in Spanish with "Queremos," "Necesitamos," "Soñamos."',
      example: 'Necesitamos escuelas. Necesitamos hospitales. Necesitamos dignidad. Necesitamos un cambio.',
      reviewFrom: 'L5.4',
    },
    {
      title: 'The Subjunctive in Oratory',
      content: 'The subjunctive mood is the speaker\'s secret weapon. It expresses desires, demands, and visions of a different world. "Exigimos que se haga justicia" (We demand that justice be done), "Soñamos con que haya igualdad" (We dream that there be equality). Every call to action uses the subjunctive.',
      example: 'Quiero que ustedes actúen. | Exigimos que se respeten nuestros derechos. | Soñamos con que nadie pase hambre.',
      reviewFrom: 'L5.2',
    },
    {
      title: 'Vocal Variation: The Speaker\'s Instrument',
      content: 'Spanish has a naturally wider pitch range than English, making vocal variation crucial. Low, slow delivery = gravity and seriousness. Rising pitch = excitement and hope. Staccato delivery = urgency. Whispered words = intimate connection. The best speakers use ALL ranges within a single speech.',
      example: 'Los datos son claros. [grave] ¡Pero necesitamos actuar YA! [ascendente] Porque si no... [susurro] ya será demasiado tarde.',
    },
  ],

  flashcardGroups: [
    {
      key: 'rhetorical',
      label: 'Rhetorical Devices',
      audioKeys: ['la-anafora-repite', 'la-antitesis-confronta', 'la-gradacion-construye', 'acaso-no-merecemos', 'el-paralelismo-repite', 'el-climax-lleva', 'la-metafora-transforma', 'la-hiperbole-exagera', 'la-ironia-dice', 'la-aliteracion-repite'],
    },
    {
      key: 'speech',
      label: 'Speech Structure',
      audioKeys: ['estimado-publico', 'en-primer-lugar-quiero', 'permitanme-comenzar', 'para-concluir-quiero', 'hago-un-llamado', 'como-les-decia', 'quisiera-compartir', 'los-datos-son-contundentes', 'ahora-bien-hay-quienes', 'sin-embargo-las-evidencias'],
    },
    {
      key: 'famous',
      label: 'Famous Speeches',
      audioKeys: ['companeros-hay-que', 'la-historia-me-absolvera', 'sueno-con-un-continente', 'la-patria-es-dicha', 'el-pueblo-unido', 'yo-no-vengo-a-llorar', 'garcia-marquez-uso', 'queremos-paz-queremos'],
    },
  ],

  matchPairs: [
    { left: 'La anáfora', right: 'Repetition at start of phrases' },
    { left: 'La antítesis', right: 'Contrasting opposing ideas' },
    { left: 'La pregunta retórica', right: 'Question with obvious answer' },
    { left: 'El paralelismo', right: 'Identical grammatical structures' },
    { left: 'La hipérbole', right: 'Exaggeration for emphasis' },
    { left: 'La metáfora', right: 'Abstract idea as concrete image' },
    { left: 'El clímax', right: 'Building to maximum intensity' },
    { left: 'El asíndeton', right: 'Removing conjunctions for speed' },
  ],
  matchLabels: { left: 'Figura Retórica', right: 'Definition' },

  sortActivities: [
    {
      title: 'Ethos, Pathos, or Logos?',
      instruction: 'Sort each technique by the type of persuasion it represents.',
      buckets: ['Ethos (Credibility) 🎓', 'Pathos (Emotion) ❤️', 'Logos (Logic) 🧠'],
      items: [
        { text: 'Citar a expertos', bucket: 'Ethos (Credibility) 🎓' },
        { text: 'Establecer credibilidad', bucket: 'Ethos (Credibility) 🎓' },
        { text: 'Apelar a las emociones', bucket: 'Pathos (Emotion) ❤️' },
        { text: 'Usar anécdotas personales', bucket: 'Pathos (Emotion) ❤️' },
        { text: 'Invocar valores compartidos', bucket: 'Pathos (Emotion) ❤️' },
        { text: 'Presentar evidencia sólida', bucket: 'Logos (Logic) 🧠' },
        { text: 'Anticipar objeciones', bucket: 'Logos (Logic) 🧠' },
        { text: 'Los datos son contundentes', bucket: 'Logos (Logic) 🧠' },
      ],
    },
    {
      title: 'Opening or Closing?',
      instruction: 'Is this phrase used to open or close a speech?',
      buckets: ['Opening 🎬', 'Closing 🎯'],
      items: [
        { text: 'Estimado público', bucket: 'Opening 🎬' },
        { text: 'Permítanme comenzar con', bucket: 'Opening 🎬' },
        { text: 'En primer lugar', bucket: 'Opening 🎬' },
        { text: 'Quisiera compartir una historia', bucket: 'Opening 🎬' },
        { text: 'Para concluir', bucket: 'Closing 🎯' },
        { text: 'Hago un llamado a la acción', bucket: 'Closing 🎯' },
        { text: 'Les dejo con esta cita', bucket: 'Closing 🎯' },
        { text: 'Antes de terminar', bucket: 'Closing 🎯' },
      ],
    },
  ],
  sortSectionId: 'rhetoric-sorting',
  sortTitle: 'Rhetoric Sorting',

  dialogues: [
    {
      id: 'dialogue-ted-talk',
      title: 'TED Talk Preparation — Medellín',
      location: 'Medellín',
      lines: [
        { speaker: 'Andrea', text: 'Estoy muy nerviosa por mi charla TEDx de mañana. ¿Me ayudas a practicar, Carlos?', audio: '/audio/L6.8/phrases/d1-line1.mp3' },
        { speaker: 'Carlos', text: 'Claro. Empieza desde el principio. ¿Cuál es tu apertura?', audio: '/audio/L6.8/phrases/d1-line2.mp3' },
        { speaker: 'Andrea', text: 'Permítanme comenzar con una pregunta fundamental: ¿cuántos de ustedes han sentido que el sistema educativo les falló?', audio: '/audio/L6.8/phrases/d1-line3.mp3', annotations: [{ phrase: 'Permítanme comenzar con una pregunta', fromLesson: 'L6.8', note: 'Classic rhetorical opening: formal request + rhetorical question' }] },
        { speaker: 'Carlos', text: '¡Poderoso! La pregunta retórica es perfecta para enganchar. ¿Y después?', audio: '/audio/L6.8/phrases/d1-line4.mp3' },
        { speaker: 'Andrea', text: 'Presento los datos: el sesenta por ciento de los estudiantes colombianos dice que la escuela no les preparó para la vida real.', audio: '/audio/L6.8/phrases/d1-line5.mp3' },
        { speaker: 'Carlos', text: 'Bien, pero necesitas una anécdota personal. Los datos convencen; las historias conmueven.', audio: '/audio/L6.8/phrases/d1-line6.mp3' },
        { speaker: 'Andrea', text: 'Tienes razón. Voy a contar cómo yo misma abandoné la universidad y después volví para cambiar el sistema desde adentro.', audio: '/audio/L6.8/phrases/d1-line7.mp3' },
        { speaker: 'Carlos', text: 'Perfecto. Eso establece credibilidad y genera empatía al mismo tiempo. ¿Y tu cierre?', audio: '/audio/L6.8/phrases/d1-line8.mp3' },
        { speaker: 'Andrea', text: 'Hago un llamado a la acción: "No podemos esperar a que el sistema cambie. Somos nosotros el cambio."', audio: '/audio/L6.8/phrases/d1-line9.mp3' },
        { speaker: 'Carlos', text: 'Me encanta, pero prueba con una anáfora para el final: "Somos el cambio en las aulas. Somos el cambio en las calles. Somos el cambio que nuestros hijos merecen."', audio: '/audio/L6.8/phrases/d1-line10.mp3' },
        { speaker: 'Andrea', text: '¡Eso es increíble! La repetición le da un ritmo que se queda en la mente.', audio: '/audio/L6.8/phrases/d1-line11.mp3' },
        { speaker: 'Carlos', text: 'Y una cosa más: no olvides las pausas. Después de cada "somos el cambio", cuenta dos segundos. El silencio es tu mejor aliado.', audio: '/audio/L6.8/phrases/d1-line12.mp3' },
        { speaker: 'Andrea', text: 'Gracias, Carlos. La oratoria realmente es un arte. Me siento mucho más preparada.', audio: '/audio/L6.8/phrases/d1-line13.mp3' },
        { speaker: 'Carlos', text: 'Lo vas a hacer genial. Recuerda: conéctate con el público, no con tus notas. La autenticidad es la técnica más poderosa.', audio: '/audio/L6.8/phrases/d1-line14.mp3' },
        { speaker: 'Andrea', text: 'Como les decía al principio... no, espera, eso es para mañana. ¡Practiquemos una vez más!', audio: '/audio/L6.8/phrases/d1-line15.mp3' },
      ],
    },
    {
      id: 'dialogue-political-speech',
      title: 'Political Speech Workshop — Santiago',
      location: 'Santiago',
      lines: [
        { speaker: 'Prof. Soto', text: 'Hoy analizaremos las técnicas retóricas de los grandes discursos latinoamericanos. Comencemos con José Martí.', audio: '/audio/L6.8/phrases/d2-line1.mp3' },
        { speaker: 'Valentina', text: '"La patria es dicha de todos, y dolor de todos." Es una antítesis perfecta: dicha contra dolor.', audio: '/audio/L6.8/phrases/d2-line2.mp3' },
        { speaker: 'Prof. Soto', text: 'Exacto. Y la repetición de "de todos" crea un paralelismo que refuerza la idea de universalidad. Martí era un maestro.', audio: '/audio/L6.8/phrases/d2-line3.mp3' },
        { speaker: 'Felipe', text: '¿Y Eva Perón? Su discurso del renunciamiento es legendario por su carga emocional.', audio: '/audio/L6.8/phrases/d2-line4.mp3' },
        { speaker: 'Prof. Soto', text: 'Eva Perón dominaba el pathos como nadie. Apelaba directamente a las emociones del pueblo: "Yo no soy más que una humilde mujer."', audio: '/audio/L6.8/phrases/d2-line5.mp3', annotations: [{ phrase: 'dominaba el pathos', fromLesson: 'L6.8', note: 'Pathos: the rhetorical appeal to emotion' }] },
        { speaker: 'Valentina', text: 'Eso es fascinante. Usaba la humildad como arma retórica para generar identificación con su público.', audio: '/audio/L6.8/phrases/d2-line6.mp3' },
        { speaker: 'Prof. Soto', text: 'Correcto. Y "El pueblo unido jamás será vencido" — ¿qué técnica retórica tiene?', audio: '/audio/L6.8/phrases/d2-line7.mp3' },
        { speaker: 'Felipe', text: 'Es una afirmación absoluta con ritmo musical. El "jamás será vencido" es un clímax emocional.', audio: '/audio/L6.8/phrases/d2-line8.mp3' },
        { speaker: 'Prof. Soto', text: 'Y el hecho de que se repita en coro lo convierte en un acto de retórica colectiva. El público no escucha; participa.', audio: '/audio/L6.8/phrases/d2-line9.mp3' },
        { speaker: 'Valentina', text: '¿Y el discurso Nobel de García Márquez? "La soledad de América Latina" es magistral.', audio: '/audio/L6.8/phrases/d2-line10.mp3' },
        { speaker: 'Prof. Soto', text: 'García Márquez usó la narración como herramienta retórica. En vez de datos, contó historias de América Latina para convencer a Europa de su realidad.', audio: '/audio/L6.8/phrases/d2-line11.mp3' },
        { speaker: 'Felipe', text: 'Entonces, ¿la narrativa puede ser más persuasiva que los argumentos lógicos?', audio: '/audio/L6.8/phrases/d2-line12.mp3' },
        { speaker: 'Prof. Soto', text: 'A menudo sí. Las historias activan la empatía. Un dato se olvida; una historia se recuerda. Por eso los mejores oradores combinan logos con pathos.', audio: '/audio/L6.8/phrases/d2-line13.mp3' },
        { speaker: 'Valentina', text: 'Me inspira saber que la oratoria no es solo para políticos. Todos podemos aprender a comunicar con impacto.', audio: '/audio/L6.8/phrases/d2-line14.mp3' },
        { speaker: 'Prof. Soto', text: 'Exacto. La oratoria es el arte de mover conciencias con la palabra. Y ese arte, como todos, se practica.', audio: '/audio/L6.8/phrases/d2-line15.mp3' },
        { speaker: 'Felipe', text: 'Como dijo Neruda: "Yo no vengo a llorar; aquí vengo a encender mi sangre." Eso es retórica pura.', audio: '/audio/L6.8/phrases/d2-line16.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Prepare a TED talk on education reform in Medellín, then analyze the rhetoric of Latin America\'s greatest speeches in a workshop in Santiago.',

  culturalNotes: [
    {
      title: 'La Tradición Oratoria Latinoamericana',
      content: 'Latin America has a particularly rich oratorical tradition born from its turbulent history. Independence leaders like Simón Bolívar and José Martí were as much poets as politicians — their speeches read like literature. This fusion of literary beauty with political passion is a hallmark of Latin American rhetoric. From Bolívar\'s "Discurso de Angostura" to Fidel Castro\'s marathon speeches (some lasting over 7 hours), the region values the spoken word as a tool of transformation. Even today, political speeches in Latin America tend to be more emotionally charged and poetically structured than their Anglo-Saxon counterparts.',
    },
    {
      title: 'El Discurso de Protesta',
      content: 'Protest speech is deeply embedded in Latin American culture. From Chile\'s "El pueblo unido jamás será vencido" to the Mothers of the Plaza de Mayo in Argentina chanting "Aparición con vida," the power of collective voice has shaped history. The tradition of spoken protest extends to contemporary movements: the 2019 Chilean estallido social produced new slogans like "Chile despertó" (Chile woke up), and Mexico\'s feminist movement uses powerful cánticos at marches. These are not mere slogans — they are rhetorical acts that unite, motivate, and demand change.',
    },
    {
      title: 'De la Plaza Pública al TED Talk',
      content: 'The tradition of public speaking in Spanish is evolving. While political oratory dominated the 20th century, the 21st century has seen the rise of TED-style talks, motivational speaking, and social media oratory. Platforms like TEDxBuenosAires, TEDxMedellín, and TEDxMéxico have created new spaces for persuasive speech. The key difference: modern oratory favors personal stories over political ideology, data visualization over pure rhetoric, and conversational tone over declamatory style. Yet the core remains the same — the power of the well-crafted word to change minds.',
    },
  ],
  culturalGradient: 'from-red-50 to-rose-50',

  quiz: [
    { id: 1, type: 'mc', text: '"Queremos paz. Queremos justicia. Queremos dignidad." is an example of:', options: ['Antithesis', 'Anaphora', 'Hyperbole', 'Irony'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La ___ confronta ideas opuestas para crear impacto" (antithesis)', answer: 'antítesis' },
    { id: 3, type: 'tf', text: 'A rhetorical question is asked with the expectation of no answer — it makes the audience think.', answer: true },
    { id: 4, type: 'mc', text: '"Estimado público" is used to:', options: ['Close a speech', 'Open a speech formally', 'Introduce data', 'Tell a joke'], answer: 1 },
    { id: 5, type: 'mc', text: 'The three pillars of persuasion are:', options: ['Logos, ethos, pathos', 'Data, charts, conclusions', 'Opening, body, closing', 'Speaker, audience, message'], answer: 0 },
    { id: 6, type: 'fill', text: 'Complete: "Hago un ___ a la acción" (call)', answer: 'llamado' },
    { id: 7, type: 'mc', text: '"La patria es dicha de todos, y dolor de todos" uses:', options: ['Anaphora', 'Antithesis', 'Hyperbole', 'Asyndeton'], answer: 1 },
    { id: 8, type: 'tf', text: '"El pueblo unido jamás será vencido" originated as a Chilean protest chant.', answer: true },
    { id: 9, type: 'mc', text: 'In Dialogue 1, what does Carlos recommend for the speech closing?', options: ['More data', 'Anaphora with pauses', 'A joke', 'A quotation from Cervantes'], answer: 1 },
    { id: 10, type: 'mc', text: '"Apelar a las emociones" is a technique of:', options: ['Logos', 'Ethos', 'Pathos', 'Kairos'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "Para ___, quiero dejarles una reflexión" (To conclude)', answer: 'concluir' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, Prof. Soto says García Márquez used what as his main rhetorical tool?', options: ['Data and statistics', 'Narrative storytelling', 'Logical arguments', 'Shouting and repetition'], answer: 1 },
    { id: 13, type: 'tf', text: '"Asíndeton" means removing conjunctions to accelerate the rhythm of a sentence.', answer: true },
    { id: 14, type: 'mc', text: '"Citar a expertos" adds which type of persuasive appeal?', options: ['Pathos (emotion)', 'Ethos (credibility)', 'Logos (logic)', 'Kairos (timing)'], answer: 1 },
    { id: 15, type: 'mc', text: 'Which rhetorical device builds a crescendo of intensity?', options: ['Antithesis', 'Irony', 'Gradation', 'Personification'], answer: 2 },
  ],

  audioBase: '/audio/L6.8/phrases',

  uniqueActivity: {
    id: 'SpeechCrafterL68',
    sectionId: 'speech-crafter',
    sectionColor: 'bg-red-50/40',
    sectionBorder: 'border-red-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'rhetorical-devices': { bg: 'bg-red-50/30', border: 'border-red-100' },
    'speech-structure': { bg: 'bg-pink-50/30', border: 'border-pink-100' },
    'persuasion-techniques': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'famous-speeches': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-red-50/30', border: 'border-red-100' },
    'matching-game': { bg: 'bg-pink-50/30', border: 'border-pink-100' },
    'rhetoric-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'speech-crafter': { bg: 'bg-red-50/40', border: 'border-red-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
