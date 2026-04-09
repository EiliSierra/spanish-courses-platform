import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Pluperfect Regular -AR (10) ===
  { spanish: 'Ya había hablado con el profesor', english: 'I had already talked with the professor', pronunciation: 'yah ah-BEE-ah ah-BLAH-doh kohn ehl proh-feh-SOHR', category: 'pluperfect-regular', audio: 'habia-hablado-con-profesor' },
  { spanish: 'Habíamos terminado el proyecto antes del plazo', english: 'We had finished the project before the deadline', pronunciation: 'ah-BEE-ah-mohs tehr-mee-NAH-doh ehl proh-YEHK-toh AHN-tehs dehl PLAH-soh', category: 'pluperfect-regular', audio: 'habiamos-terminado-proyecto' },
  { spanish: 'Ella había estudiado toda la noche', english: 'She had studied all night', pronunciation: 'EH-yah ah-BEE-ah ehs-too-dee-AH-doh TOH-dah lah NOH-cheh', category: 'pluperfect-regular', audio: 'habia-estudiado-toda-la-noche' },
  { spanish: 'Habían viajado a Colombia el año anterior', english: 'They had traveled to Colombia the previous year', pronunciation: 'ah-BEE-ahn bee-ah-HAH-doh ah koh-LOHM-bee-ah ehl AH-nyoh ahn-teh-ree-OHR', category: 'pluperfect-regular', audio: 'habian-viajado-a-colombia' },
  { spanish: '¿Habías trabajado antes en un restaurante?', english: 'Had you worked in a restaurant before?', pronunciation: 'ah-BEE-ahs trah-bah-HAH-doh AHN-tehs ehn oon rehs-tow-RAHN-teh', category: 'pluperfect-regular', audio: 'habias-trabajado-antes' },
  { spanish: 'Cuando llegué, ya habían cerrado la tienda', english: 'When I arrived, they had already closed the store', pronunciation: 'KWAHN-doh yeh-GEH yah ah-BEE-ahn seh-RRAH-doh lah tee-EHN-dah', category: 'pluperfect-regular', audio: 'ya-habian-cerrado-tienda' },
  { spanish: 'Nunca había probado la comida peruana', english: 'I had never tried Peruvian food', pronunciation: 'NOON-kah ah-BEE-ah proh-BAH-doh lah koh-MEE-dah peh-roo-AH-nah', category: 'pluperfect-regular', audio: 'nunca-habia-probado' },
  { spanish: 'Habíamos caminado tres horas cuando empezó a llover', english: 'We had walked three hours when it started to rain', pronunciation: 'ah-BEE-ah-mohs kah-mee-NAH-doh trehs OH-rahs KWAHN-doh ehm-peh-SOH ah yoh-BEHR', category: 'pluperfect-regular', audio: 'habiamos-caminado-tres-horas' },
  { spanish: 'El avión había despegado sin nosotros', english: 'The plane had taken off without us', pronunciation: 'ehl ah-bee-OHN ah-BEE-ah dehs-peh-GAH-doh seen noh-SOH-trohs', category: 'pluperfect-regular', audio: 'avion-habia-despegado' },
  { spanish: 'Ya había reservado la mesa antes de llamarte', english: 'I had already reserved the table before calling you', pronunciation: 'yah ah-BEE-ah rreh-sehr-BAH-doh lah MEH-sah AHN-tehs deh yah-MAHR-teh', category: 'pluperfect-regular', audio: 'habia-reservado-mesa' },

  // === Pluperfect Irregular Participles (10) ===
  { spanish: 'Había escrito una carta pero no la envié', english: 'I had written a letter but I didn\'t send it', pronunciation: 'ah-BEE-ah ehs-KREE-toh OO-nah KAHR-tah PEH-roh noh lah ehn-bee-EH', category: 'pluperfect-irregular', audio: 'habia-escrito-carta' },
  { spanish: 'Ya habían abierto todas las ventanas', english: 'They had already opened all the windows', pronunciation: 'yah ah-BEE-ahn ah-bee-EHR-toh TOH-dahs lahs behn-TAH-nahs', category: 'pluperfect-irregular', audio: 'habian-abierto-ventanas' },
  { spanish: 'Habíamos dicho la verdad desde el principio', english: 'We had told the truth from the beginning', pronunciation: 'ah-BEE-ah-mohs DEE-choh lah behr-DAHD DEHS-deh ehl preen-SEE-pee-oh', category: 'pluperfect-irregular', audio: 'habiamos-dicho-verdad' },
  { spanish: 'Ella había hecho la tarea antes de salir', english: 'She had done the homework before leaving', pronunciation: 'EH-yah ah-BEE-ah EH-choh lah tah-REH-ah AHN-tehs deh sah-LEER', category: 'pluperfect-irregular', audio: 'habia-hecho-tarea' },
  { spanish: 'Habían vuelto de vacaciones el lunes', english: 'They had returned from vacation on Monday', pronunciation: 'ah-BEE-ahn BWEHL-toh deh bah-kah-see-OH-nehs ehl LOO-nehs', category: 'pluperfect-irregular', audio: 'habian-vuelto-vacaciones' },
  { spanish: '¿Habías visto esa película antes?', english: 'Had you seen that movie before?', pronunciation: 'ah-BEE-ahs BEES-toh EH-sah peh-LEE-koo-lah AHN-tehs', category: 'pluperfect-irregular', audio: 'habias-visto-pelicula' },
  { spanish: 'No había puesto atención a la advertencia', english: 'I hadn\'t paid attention to the warning', pronunciation: 'noh ah-BEE-ah PWEHS-toh ah-tehn-see-OHN ah lah ahd-behr-TEHN-see-ah', category: 'pluperfect-irregular', audio: 'no-habia-puesto-atencion' },
  { spanish: 'Habíamos roto el récord anterior', english: 'We had broken the previous record', pronunciation: 'ah-BEE-ah-mohs RROH-toh ehl RREH-kohrd ahn-teh-ree-OHR', category: 'pluperfect-irregular', audio: 'habiamos-roto-record' },
  { spanish: 'Ya había muerto el autor cuando publicaron el libro', english: 'The author had already died when they published the book', pronunciation: 'yah ah-BEE-ah MWEHR-toh ehl ow-TOHR KWAHN-doh poo-blee-KAH-rohn ehl LEE-broh', category: 'pluperfect-irregular', audio: 'habia-muerto-autor' },
  { spanish: 'Había descubierto la clave del problema', english: 'I had discovered the key to the problem', pronunciation: 'ah-BEE-ah dehs-koo-bee-EHR-toh lah KLAH-beh dehl proh-BLEH-mah', category: 'pluperfect-irregular', audio: 'habia-descubierto-clave' },

  // === Temporal Connectors (14) ===
  { spanish: 'Antes de que llegara el jefe, ya habíamos resuelto el problema', english: 'Before the boss arrived, we had already solved the problem', pronunciation: 'AHN-tehs deh keh yeh-GAH-rah ehl HEH-feh yah ah-BEE-ah-mohs rreh-SWEHL-toh ehl proh-BLEH-mah', category: 'temporal', audio: 'antes-de-que-llegara' },
  { spanish: 'Después de que habían comido, salieron a caminar', english: 'After they had eaten, they went out for a walk', pronunciation: 'dehs-PWEHS deh keh ah-BEE-ahn koh-MEE-doh sah-lee-EH-rohn ah kah-mee-NAHR', category: 'temporal', audio: 'despues-de-que-habian' },
  { spanish: 'Cuando ya había oscurecido, encendieron las luces', english: 'When it had already gotten dark, they turned on the lights', pronunciation: 'KWAHN-doh yah ah-BEE-ah ohs-koo-reh-SEE-doh ehn-sehn-dee-EH-rohn lahs LOO-sehs', category: 'temporal', audio: 'cuando-ya-habia-oscurecido' },
  { spanish: 'Apenas había terminado de hablar cuando sonó el teléfono', english: 'I had barely finished speaking when the phone rang', pronunciation: 'ah-PEH-nahs ah-BEE-ah tehr-mee-NAH-doh deh ah-BLAHR KWAHN-doh soh-NOH ehl teh-LEH-foh-noh', category: 'temporal', audio: 'apenas-habia-terminado' },
  { spanish: 'Una vez que habían llegado todos, comenzó la reunión', english: 'Once everyone had arrived, the meeting began', pronunciation: 'OO-nah behs keh ah-BEE-ahn yeh-GAH-doh TOH-dohs koh-mehn-SOH lah rreh-oo-nee-OHN', category: 'temporal', audio: 'una-vez-que-habian' },
  { spanish: 'Hasta ese momento, no había entendido la situación', english: 'Until that moment, I hadn\'t understood the situation', pronunciation: 'AHS-tah EH-seh moh-MEHN-toh noh ah-BEE-ah ehn-tehn-DEE-doh lah see-too-ah-see-OHN', category: 'temporal', audio: 'hasta-ese-momento' },
  { spanish: 'Para cuando llegamos, ya se habían ido', english: 'By the time we arrived, they had already left', pronunciation: 'PAH-rah KWAHN-doh yeh-GAH-mohs yah seh ah-BEE-ahn EE-doh', category: 'temporal', audio: 'para-cuando-llegamos' },
  { spanish: 'Tan pronto como había recibido la noticia, llamó a su madre', english: 'As soon as he had received the news, he called his mother', pronunciation: 'tahn PROHN-toh KOH-moh ah-BEE-ah rreh-see-BEE-doh lah noh-TEE-see-ah yah-MOH ah soo MAH-dreh', category: 'temporal', audio: 'tan-pronto-como' },
  { spanish: 'Desde que había empezado el curso, su español mejoró mucho', english: 'Since he had started the course, his Spanish improved a lot', pronunciation: 'DEHS-deh keh ah-BEE-ah ehm-peh-SAH-doh ehl KOOR-soh soo ehs-pah-NYOHL meh-hoh-ROH MOO-choh', category: 'temporal', audio: 'desde-que-habia-empezado' },
  { spanish: 'Mientras habíamos estado de viaje, renovaron la oficina', english: 'While we had been traveling, they renovated the office', pronunciation: 'mee-EHN-trahs ah-BEE-ah-mohs ehs-TAH-doh deh bee-AH-heh rreh-noh-BAH-rohn lah oh-fee-SEE-nah', category: 'temporal', audio: 'mientras-habiamos-estado' },
  { spanish: 'No bien había amanecido, empezaron a construir', english: 'No sooner had dawn broken than they started building', pronunciation: 'noh bee-EHN ah-BEE-ah ah-mah-neh-SEE-doh ehm-peh-SAH-rohn ah kohns-troo-EER', category: 'temporal', audio: 'no-bien-habia-amanecido' },
  { spanish: 'Al momento de llegar, ya habían vendido todas las entradas', english: 'At the moment of arriving, they had already sold all the tickets', pronunciation: 'ahl moh-MEHN-toh deh yeh-GAHR yah ah-BEE-ahn behn-DEE-doh TOH-dahs lahs ehn-TRAH-dahs', category: 'temporal', audio: 'al-momento-de-llegar' },
  { spanish: 'Luego de que había estudiado todo el día, se fue a dormir', english: 'After she had studied all day, she went to sleep', pronunciation: 'LWEH-goh deh keh ah-BEE-ah ehs-too-dee-AH-doh TOH-doh ehl DEE-ah seh fweh ah dohr-MEER', category: 'temporal', audio: 'luego-de-que-habia' },
  { spanish: 'A partir de que había obtenido el título, le ofrecieron mejores puestos', english: 'From the time she had obtained her degree, they offered her better positions', pronunciation: 'ah pahr-TEER deh keh ah-BEE-ah ohb-teh-NEE-doh ehl TEE-too-loh leh oh-freh-see-EH-rohn meh-HOH-rehs PWEHS-tohs', category: 'temporal', audio: 'a-partir-de-que' },

  // === Narrative Sequencing (14) ===
  { spanish: 'Primero había llovido, luego salió el sol', english: 'First it had rained, then the sun came out', pronunciation: 'pree-MEH-roh ah-BEE-ah yoh-BEE-doh LWEH-goh sah-lee-OH ehl sohl', category: 'sequencing', audio: 'primero-habia-llovido' },
  { spanish: 'Todo había comenzado con una simple llamada', english: 'It had all started with a simple phone call', pronunciation: 'TOH-doh ah-BEE-ah koh-mehn-SAH-doh kohn OO-nah SEEM-pleh yah-MAH-dah', category: 'sequencing', audio: 'todo-habia-comenzado' },
  { spanish: 'La policía descubrió que el ladrón había escapado por la ventana', english: 'The police discovered that the thief had escaped through the window', pronunciation: 'lah poh-lee-SEE-ah dehs-koo-bree-OH keh ehl lah-DROHN ah-BEE-ah ehs-kah-PAH-doh pohr lah behn-TAH-nah', category: 'sequencing', audio: 'policia-descubrio' },
  { spanish: 'Supo que había cometido un error cuando ya era demasiado tarde', english: 'He realized he had made a mistake when it was already too late', pronunciation: 'SOO-poh keh ah-BEE-ah koh-meh-TEE-doh oon eh-RROHR KWAHN-doh yah EH-rah deh-mah-see-AH-doh TAHR-deh', category: 'sequencing', audio: 'supo-que-habia-cometido' },
  { spanish: 'Según nos contaron, la empresa había quebrado meses antes', english: 'According to what they told us, the company had gone bankrupt months earlier', pronunciation: 'seh-GOON nohs kohn-TAH-rohn lah ehm-PREH-sah ah-BEE-ah keh-BRAH-doh MEH-sehs AHN-tehs', category: 'sequencing', audio: 'empresa-habia-quebrado' },
  { spanish: 'Recordó que nunca le había dicho lo que sentía', english: 'She remembered that she had never told him what she felt', pronunciation: 'rreh-kohr-DOH keh NOON-kah leh ah-BEE-ah DEE-choh loh keh sehn-TEE-ah', category: 'sequencing', audio: 'recordo-nunca-habia-dicho' },
  { spanish: 'Al revisar las cámaras, vieron que alguien había entrado de noche', english: 'Upon reviewing the cameras, they saw that someone had entered at night', pronunciation: 'ahl rreh-bee-SAHR lahs KAH-mah-rahs bee-EH-rohn keh AHL-gee-ehn ah-BEE-ah ehn-TRAH-doh deh NOH-cheh', category: 'sequencing', audio: 'al-revisar-camaras' },
  { spanish: 'Me di cuenta de que había olvidado mi pasaporte en casa', english: 'I realized that I had forgotten my passport at home', pronunciation: 'meh dee KWEHN-tah deh keh ah-BEE-ah ohl-bee-DAH-doh mee pah-sah-POHR-teh ehn KAH-sah', category: 'sequencing', audio: 'habia-olvidado-pasaporte' },
  { spanish: 'El detective concluyó que el sospechoso había mentido', english: 'The detective concluded that the suspect had lied', pronunciation: 'ehl deh-tehk-TEE-beh kohn-kloo-YOH keh ehl sohs-peh-CHOH-soh ah-BEE-ah mehn-TEE-doh', category: 'sequencing', audio: 'detective-concluyo' },
  { spanish: 'Después de lo que había pasado, decidieron mudarse', english: 'After what had happened, they decided to move', pronunciation: 'dehs-PWEHS deh loh keh ah-BEE-ah pah-SAH-doh deh-see-dee-EH-rohn moo-DAHR-seh', category: 'sequencing', audio: 'despues-de-lo-que' },
  { spanish: 'Nadie sabía que él había vivido en tres países', english: 'Nobody knew that he had lived in three countries', pronunciation: 'NAH-dee-eh sah-BEE-ah keh ehl ah-BEE-ah bee-BEE-doh ehn trehs pah-EE-sehs', category: 'sequencing', audio: 'nadie-sabia-que' },
  { spanish: 'La investigación reveló que habían usado fondos públicos', english: 'The investigation revealed that they had used public funds', pronunciation: 'lah een-behs-tee-gah-see-OHN rreh-beh-LOH keh ah-BEE-ahn oo-SAH-doh FOHN-dohs POO-blee-kohs', category: 'sequencing', audio: 'investigacion-revelo' },
  { spanish: 'Cuando revisé, noté que alguien había cambiado la contraseña', english: 'When I checked, I noticed someone had changed the password', pronunciation: 'KWAHN-doh rreh-bee-SEH noh-TEH keh AHL-gee-ehn ah-BEE-ah kahm-bee-AH-doh lah kohn-trah-SEH-nyah', category: 'sequencing', audio: 'alguien-habia-cambiado' },
  { spanish: 'Resultó que habían confundido los documentos', english: 'It turned out they had mixed up the documents', pronunciation: 'rreh-sool-TOH keh ah-BEE-ahn kohn-foon-DEE-doh lohs doh-koo-MEHN-tohs', category: 'sequencing', audio: 'habian-confundido-documentos' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L51PhraseByAudio = phraseByAudio

// === TIMELINE WEAVER (unique activity) ===

export interface TimelineWeaverChallenge {
  narrative: string
  english: string
  correctOrder: string[]
  events: string[]
}

export const TIMELINE_WEAVER_CHALLENGES: TimelineWeaverChallenge[] = [
  {
    narrative: 'La policía reconstruyó los hechos de un robo en un museo.',
    english: 'The police reconstructed the events of a museum robbery.',
    correctOrder: [
      'El guardia había salido a cenar.',
      'Alguien había desactivado la alarma.',
      'Los ladrones entraron por la ventana.',
      'Robaron tres pinturas.',
      'La policía llegó al amanecer.',
    ],
    events: [
      'La policía llegó al amanecer.',
      'Los ladrones entraron por la ventana.',
      'Alguien había desactivado la alarma.',
      'Robaron tres pinturas.',
      'El guardia había salido a cenar.',
    ],
  },
  {
    narrative: 'Ana contó cómo consiguió su trabajo soñado.',
    english: 'Ana told how she got her dream job.',
    correctOrder: [
      'Había estudiado ingeniería en la universidad.',
      'Había hecho dos pasantías en el extranjero.',
      'Envió su currículum a veinte empresas.',
      'La llamaron para una entrevista.',
      'Le ofrecieron el puesto.',
    ],
    events: [
      'La llamaron para una entrevista.',
      'Había hecho dos pasantías en el extranjero.',
      'Le ofrecieron el puesto.',
      'Había estudiado ingeniería en la universidad.',
      'Envió su currículum a veinte empresas.',
    ],
  },
  {
    narrative: 'El periodista investigó un escándalo político.',
    english: 'The journalist investigated a political scandal.',
    correctOrder: [
      'El senador había recibido dinero de una empresa.',
      'Había firmado un contrato secreto.',
      'Un empleado filtró los documentos.',
      'El periodista publicó la noticia.',
      'El senador renunció.',
    ],
    events: [
      'El periodista publicó la noticia.',
      'Había firmado un contrato secreto.',
      'El senador renunció.',
      'Un empleado filtró los documentos.',
      'El senador había recibido dinero de una empresa.',
    ],
  },
  {
    narrative: 'Mi amigo llegó tarde al aeropuerto.',
    english: 'My friend arrived late at the airport.',
    correctOrder: [
      'Había puesto la alarma a las 5:00.',
      'La alarma no había sonado.',
      'Se despertó a las 7:30.',
      'Tomó un taxi al aeropuerto.',
      'El avión ya había despegado.',
    ],
    events: [
      'Se despertó a las 7:30.',
      'El avión ya había despegado.',
      'Había puesto la alarma a las 5:00.',
      'Tomó un taxi al aeropuerto.',
      'La alarma no había sonado.',
    ],
  },
  {
    narrative: 'La chef explicó cómo preparó su plato ganador.',
    english: 'The chef explained how she prepared her winning dish.',
    correctOrder: [
      'Había seleccionado ingredientes frescos del mercado.',
      'Había marinado la carne durante doce horas.',
      'Cocinó la salsa a fuego lento.',
      'Presentó el plato al jurado.',
      'Ganó el primer lugar.',
    ],
    events: [
      'Cocinó la salsa a fuego lento.',
      'Ganó el primer lugar.',
      'Había marinado la carne durante doce horas.',
      'Presentó el plato al jurado.',
      'Había seleccionado ingredientes frescos del mercado.',
    ],
  },
  {
    narrative: 'El doctor diagnosticó al paciente después de varios análisis.',
    english: 'The doctor diagnosed the patient after several tests.',
    correctOrder: [
      'El paciente había sentido dolor por semanas.',
      'Había visitado dos médicos sin resultados.',
      'Le hicieron análisis de sangre.',
      'El doctor revisó los resultados.',
      'Finalmente le dieron un diagnóstico.',
    ],
    events: [
      'Le hicieron análisis de sangre.',
      'Había visitado dos médicos sin resultados.',
      'Finalmente le dieron un diagnóstico.',
      'El paciente había sentido dolor por semanas.',
      'El doctor revisó los resultados.',
    ],
  },
]

// === LESSON DATA ===

export const L51Data: LessonData = {
  id: 'L5.1',
  hero: {
    lessonId: 'L5.1',
    title: 'Past Perfect & Sequencing',
    subtitle: 'What had happened before something else',
    description: 'Master the pluperfect tense (pretérito pluscuamperfecto) to describe what had already happened before another past event. Learn to use temporal connectors like "antes de que," "para cuando," and "una vez que" to sequence narratives with precision.',
    image: '/images/L5.1/L5.1.jpg',
    gradient: 'from-slate-800/65 via-indigo-700/55 to-violet-700/65',
    accentColor: 'indigo-200',
  },

  objectives: [
    { icon: '🔙', title: 'Pluperfect Tense', desc: 'Form and use había + past participle to talk about what had happened before another past event.' },
    { icon: '📝', title: 'Irregular Participles', desc: 'Master escrito, dicho, hecho, vuelto, visto, puesto, roto, muerto, abierto, descubierto.' },
    { icon: '⏳', title: 'Temporal Connectors', desc: 'Use antes de que, después de que, para cuando, una vez que, tan pronto como to sequence events.' },
    { icon: '📖', title: 'Narrative Sequencing', desc: 'Tell stories and reconstruct events using the pluperfect to set the stage for past actions.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.1', label: 'Imperfect Tense', detail: 'L4.1 taught the imperfect of haber: había, habías, había, habíamos, habían. Now combine it with past participles for the pluperfect.' },
    { fromLesson: 'L3.1', label: 'Pretérito', detail: 'L3.1 covered the preterite — completed past actions. The pluperfect describes what happened BEFORE those preterite events.' },
    { fromLesson: 'L4.2', label: 'Subjunctive Triggers', detail: 'L4.2 introduced "antes de que" with subjunctive. Now see it in past contexts: "antes de que llegara..."' },
  ],

  sectionTransitions: [
    { afterSection: 'pluperfect-regular', text: 'You\'ve got the regular pluperfect down! Now let\'s tackle the tricky irregular past participles.' },
    { afterSection: 'pluperfect-irregular', text: 'Irregular participles mastered! Time to learn the temporal connectors that glue your narratives together.' },
    { afterSection: 'temporal-connectors', text: 'Now you can sequence events precisely. Let\'s put it all together in full narratives.' },
    { afterSection: 'dialogues', text: 'Great storytelling! Let\'s discover how Latin Americans relate to memory and history.' },
    { afterSection: 'cultural', text: 'Now test your sequencing skills with the Timeline Weaver!' },
    { afterSection: 'timeline-weaver', text: 'Final stretch — show what you\'ve learned in the quiz!' },
  ],

  personalizedVocab: [
    { spanish: 'Ya había...', english: 'I had already...' },
    { spanish: 'Nunca había...', english: 'I had never...' },
    { spanish: 'Antes de que...', english: 'Before...' },
    { spanish: 'Para cuando...', english: 'By the time...' },
    { spanish: 'Una vez que...', english: 'Once...' },
    { spanish: 'Después de que...', english: 'After...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Ya había terminado cuando llegaste', pronunciation: 'yah ah-BEE-ah tehr-mee-NAH-doh KWAHN-doh yeh-GAHS-teh', english: 'I had already finished when you arrived', audio: 'ya-habia-terminado-cuando-llegaste', tip: 'The pluperfect always uses "había" (imperfect of haber) + past participle. Stress falls on "BEE" in había.' },
    { spanish: 'Nunca había visto algo tan hermoso', pronunciation: 'NOON-kah ah-BEE-ah BEES-toh AHL-goh tahn ehr-MOH-soh', english: 'I had never seen something so beautiful', audio: 'nunca-habia-visto-algo-tan-hermoso', tip: '"Visto" is irregular — from "ver." Regular would be *veído, but Spanish says "visto." Memorize these 10 irregulars!' },
    { spanish: 'Para cuando llegamos, ya se habían ido', pronunciation: 'PAH-rah KWAHN-doh yeh-GAH-mohs yah seh ah-BEE-ahn EE-doh', english: 'By the time we arrived, they had already left', audio: 'para-cuando-llegamos-ya-se-habian-ido', tip: '"Para cuando" is a key sequencing phrase. It sets up the moment AFTER the pluperfect action.' },
    { spanish: 'Había escrito tres novelas antes de cumplir treinta', pronunciation: 'ah-BEE-ah ehs-KREE-toh trehs noh-BEH-lahs AHN-tehs deh koom-PLEER TREHN-tah', english: 'She had written three novels before turning thirty', audio: 'habia-escrito-tres-novelas-antes-de-cumplir-treinta', tip: '"Escrito" is irregular from "escribir." The regular form would be *escribido, but it\'s always "escrito."' },
    { spanish: 'Una vez que habían llegado todos, empezó la fiesta', pronunciation: 'OO-nah behs keh ah-BEE-ahn yeh-GAH-doh TOH-dohs ehm-peh-SOH lah fee-EHS-tah', english: 'Once everyone had arrived, the party started', audio: 'una-vez-que-habian-llegado-todos-empezo-la-fiesta', tip: '"Una vez que" means "once" in the temporal sense. It signals that the pluperfect action was completed before the next event.' },
    { spanish: 'Me di cuenta de que había olvidado las llaves', pronunciation: 'meh dee KWEHN-tah deh keh ah-BEE-ah ohl-bee-DAH-doh lahs YAH-behs', english: 'I realized I had forgotten the keys', audio: 'me-di-cuenta-de-que-habia-olvidado-las-llaves', tip: '"Darse cuenta" (to realize) is often followed by a pluperfect clause — the realization in the preterite, what happened before in the pluperfect.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'pluperfect-regular', label: 'Pluperfect: Regular' },
    { id: 'pluperfect-irregular', label: 'Irregular Participles' },
    { id: 'temporal-connectors', label: 'Temporal Connectors' },
    { id: 'narrative-sequencing', label: 'Narrative Sequencing' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'timeline-weaver', label: 'Timeline Weaver' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'pluperfect-regular',
      title: 'Pluperfect — Regular Participles',
      description: 'Había/habías/había/habíamos/habían + -ado (AR) or -ido (ER/IR). This tense describes what had happened BEFORE another past event.',
      tabs: [
        { label: 'Regular -AR', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'pluperfect-regular').slice(0, 5) },
        { label: 'More Regular', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'pluperfect-regular').slice(5) },
      ],
    },
    {
      id: 'pluperfect-irregular',
      title: 'Pluperfect — Irregular Participles',
      description: 'Ten key verbs have irregular past participles: escrito, dicho, hecho, vuelto, visto, puesto, roto, muerto, abierto, descubierto. Memorize them!',
      tabs: [
        { label: 'Common Irregulars', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'pluperfect-irregular').slice(0, 5) },
        { label: 'More Irregulars', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'pluperfect-irregular').slice(5) },
      ],
    },
    {
      id: 'temporal-connectors',
      title: 'Temporal Connectors — Linking Past Events',
      description: 'Use antes de que, después de que, cuando ya, para cuando, una vez que, tan pronto como, and more to precisely sequence past events.',
      tabs: [
        { label: 'Before & After', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'temporal').slice(0, 7) },
        { label: 'More Connectors', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'temporal').slice(7) },
      ],
    },
    {
      id: 'narrative-sequencing',
      title: 'Narrative Sequencing — Telling Stories',
      description: 'Combine preterite (what happened) with pluperfect (what had happened before) to build layered, professional-sounding narratives.',
      tabs: [
        { label: 'Stories & Reports', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'sequencing').slice(0, 7) },
        { label: 'Discoveries', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'sequencing').slice(7) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Pluperfect = Imperfect of Haber + Past Participle',
      content: 'The pluperfect is formed with the imperfect tense of "haber" (había, habías, había, habíamos, habían) plus the past participle (-ado for -AR verbs, -ido for -ER/-IR verbs). Unlike English, NOTHING can go between "había" and the participle — no adverbs, no pronouns.',
      example: 'Había hablado (I had spoken) | Habíamos comido (We had eaten) | Habían vivido (They had lived)',
    },
    {
      title: '10 Irregular Past Participles to Memorize',
      content: 'These verbs have irregular participles: escribir→escrito, decir→dicho, hacer→hecho, volver→vuelto, ver→visto, poner→puesto, romper→roto, morir→muerto, abrir→abierto, descubrir→descubierto. Their compounds follow the same pattern: devolver→devuelto, componer→compuesto.',
      example: 'Había escrito (had written) | Habían dicho (had said) | Habíamos hecho (had done/made)',
      reviewFrom: 'L4.1',
    },
    {
      title: 'Temporal Connector + Pluperfect = Precise Sequencing',
      content: 'Use connectors like "antes de que" (before), "después de que" (after), "para cuando" (by the time), "una vez que" (once), "tan pronto como" (as soon as) with the pluperfect to create precise timelines. Note: "antes de que" always triggers subjunctive, even in the past.',
      example: 'Para cuando llegué, ya habían cenado. | Antes de que yo supiera, ya habían decidido.',
      reviewFrom: 'L4.2',
    },
  ],

  flashcardGroups: [
    {
      key: 'pluperfect-regular',
      label: 'Regular Pluperfect',
      audioKeys: ['habia-hablado-con-profesor', 'habiamos-terminado-proyecto', 'habia-estudiado-toda-la-noche', 'habian-viajado-a-colombia', 'habias-trabajado-antes', 'ya-habian-cerrado-tienda', 'nunca-habia-probado', 'habiamos-caminado-tres-horas', 'avion-habia-despegado', 'habia-reservado-mesa'],
    },
    {
      key: 'pluperfect-irregular',
      label: 'Irregular Participles',
      audioKeys: ['habia-escrito-carta', 'habian-abierto-ventanas', 'habiamos-dicho-verdad', 'habia-hecho-tarea', 'habian-vuelto-vacaciones', 'habias-visto-pelicula', 'no-habia-puesto-atencion', 'habiamos-roto-record', 'habia-muerto-autor', 'habia-descubierto-clave'],
    },
    {
      key: 'temporal-narrative',
      label: 'Connectors & Narratives',
      audioKeys: ['antes-de-que-llegara', 'para-cuando-llegamos', 'una-vez-que-habian', 'tan-pronto-como', 'todo-habia-comenzado', 'policia-descubrio', 'habia-olvidado-pasaporte', 'detective-concluyo'],
    },
  ],

  matchPairs: [
    { left: 'Había hablado', right: 'I had spoken' },
    { left: 'Había escrito', right: 'I had written' },
    { left: 'Habían hecho', right: 'They had done' },
    { left: 'Había visto', right: 'I had seen' },
    { left: 'Para cuando', right: 'By the time' },
    { left: 'Antes de que', right: 'Before' },
    { left: 'Una vez que', right: 'Once' },
    { left: 'Tan pronto como', right: 'As soon as' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Regular vs. Irregular Participles',
      instruction: 'Is this past participle regular (-ado/-ido) or irregular?',
      buckets: ['Regular (-ado/-ido)', 'Irregular'],
      items: [
        { text: 'hablado', bucket: 'Regular (-ado/-ido)' },
        { text: 'comido', bucket: 'Regular (-ado/-ido)' },
        { text: 'terminado', bucket: 'Regular (-ado/-ido)' },
        { text: 'vivido', bucket: 'Regular (-ado/-ido)' },
        { text: 'escrito', bucket: 'Irregular' },
        { text: 'dicho', bucket: 'Irregular' },
        { text: 'hecho', bucket: 'Irregular' },
        { text: 'visto', bucket: 'Irregular' },
      ],
    },
    {
      title: 'Happened First vs. Happened Second',
      instruction: 'In each pair, identify which event happened FIRST (pluperfect) and which happened SECOND (preterite).',
      buckets: ['Happened First (Pluperfect)', 'Happened Second (Preterite)'],
      items: [
        { text: 'Había terminado el trabajo', bucket: 'Happened First (Pluperfect)' },
        { text: 'Salí de la oficina', bucket: 'Happened Second (Preterite)' },
        { text: 'Ya habían cerrado', bucket: 'Happened First (Pluperfect)' },
        { text: 'Llegamos al restaurante', bucket: 'Happened Second (Preterite)' },
        { text: 'Había estudiado toda la noche', bucket: 'Happened First (Pluperfect)' },
        { text: 'Aprobó el examen', bucket: 'Happened Second (Preterite)' },
        { text: 'Había llovido mucho', bucket: 'Happened First (Pluperfect)' },
        { text: 'El río se desbordó', bucket: 'Happened Second (Preterite)' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Verb Sorting',

  dialogues: [
    {
      id: 'dialogue-detective',
      title: 'Reconstructing the Crime — Bogotá',
      location: 'Bogotá',
      lines: [
        { speaker: 'Detective Morales', text: 'Bueno, dígame: ¿qué había pasado antes de que usted llegara a la oficina?', audio: '/audio/L5.1/phrases/d1-line1.mp3' },
        { speaker: 'Testigo', text: 'Cuando llegué a las ocho, la puerta ya había sido forzada.', audio: '/audio/L5.1/phrases/d1-line2.mp3' },
        { speaker: 'Detective Morales', text: '¿Y había notado algo raro los días anteriores?', audio: '/audio/L5.1/phrases/d1-line3.mp3' },
        { speaker: 'Testigo', text: 'Sí, el martes había visto a un hombre desconocido en el estacionamiento.', audio: '/audio/L5.1/phrases/d1-line4.mp3', annotations: [{ phrase: 'había visto', fromLesson: 'L4.1', note: 'Imperfect of haber (había) from L4.1 + irregular participle "visto"' }] },
        { speaker: 'Detective Morales', text: '¿Había hablado con él?', audio: '/audio/L5.1/phrases/d1-line5.mp3' },
        { speaker: 'Testigo', text: 'No, no le había puesto atención. Pensé que era un empleado nuevo.', audio: '/audio/L5.1/phrases/d1-line6.mp3' },
        { speaker: 'Detective Morales', text: 'Entiendo. ¿Los documentos que habían desaparecido eran confidenciales?', audio: '/audio/L5.1/phrases/d1-line7.mp3' },
        { speaker: 'Testigo', text: 'Sí, eran archivos que habíamos guardado bajo llave. Nunca habíamos tenido un robo así.', audio: '/audio/L5.1/phrases/d1-line8.mp3', annotations: [{ phrase: 'bajo llave', fromLesson: 'L4.6', note: 'Security vocabulary from L4.6 Banking & Finance' }] },
        { speaker: 'Detective Morales', text: 'No se preocupe. Para cuando terminemos la investigación, habremos resuelto todo.', audio: '/audio/L5.1/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-memoir',
      title: 'Grandmother\'s Memoir — Buenos Aires',
      location: 'Buenos Aires',
      lines: [
        { speaker: 'Lucía', text: 'Abuela, contame: ¿cómo era la vida antes de que yo naciera?', audio: '/audio/L5.1/phrases/d2-line1.mp3' },
        { speaker: 'Abuela Rosa', text: 'Ay, nena. Para cuando vos naciste, yo ya había vivido en tres ciudades diferentes.', audio: '/audio/L5.1/phrases/d2-line2.mp3', annotations: [{ phrase: 'vos naciste', fromLesson: 'L4.3', note: 'Voseo from L4.3 Formal vs. Informal' }] },
        { speaker: 'Lucía', text: '¿En serio? ¿Y qué había pasado con el abuelo?', audio: '/audio/L5.1/phrases/d2-line3.mp3' },
        { speaker: 'Abuela Rosa', text: 'Nos habíamos conocido en Córdoba. Él había llegado de Italia hacía dos años.', audio: '/audio/L5.1/phrases/d2-line4.mp3' },
        { speaker: 'Lucía', text: '¡Qué romántico! ¿Y ya habían decidido casarse rápido?', audio: '/audio/L5.1/phrases/d2-line5.mp3' },
        { speaker: 'Abuela Rosa', text: 'No, primero él había tenido que aprender español. Pero una vez que habíamos empezado a hablar, no paramos más.', audio: '/audio/L5.1/phrases/d2-line6.mp3' },
        { speaker: 'Lucía', text: 'Me encanta esa historia. Nunca me la habías contado tan completa.', audio: '/audio/L5.1/phrases/d2-line7.mp3' },
        { speaker: 'Abuela Rosa', text: 'Es que hasta ahora no me habías preguntado con tanta curiosidad, mi amor.', audio: '/audio/L5.1/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Reconstruct a crime timeline with a detective in Bogotá and hear a grandmother\'s memoir about immigration in Buenos Aires.',

  culturalNotes: [
    {
      title: 'La Tradición Oral en América Latina',
      content: 'In Latin American cultures, storytelling is a cherished tradition. Before the internet and even before widespread literacy, knowledge was passed down through oral narratives. Grandparents (abuelos) are often the family historians, using the pluperfect naturally: "Cuando tu padre era niño, yo ya había emigrado de..." This tradition remains strong — family reunions are often filled with stories of "lo que había pasado antes." Understanding the pluperfect connects you to this rich narrative heritage.',
    },
    {
      title: 'El Realismo Mágico y la Narrativa Latinoamericana',
      content: 'Latin American literature, especially magical realism (García Márquez, Isabel Allende, Juan Rulfo), makes extensive use of the pluperfect to create layered timelines. In "Cien Años de Soledad," past events are constantly referenced through "había" constructions, blurring the line between past and even-more-distant past. Reading these authors will expose you to masterful use of temporal sequencing — and why the pluperfect is essential for sophisticated Spanish.',
    },
    {
      title: 'Los Testimonios: Memoria Histórica',
      content: 'In countries that experienced dictatorships or conflicts (Argentina, Chile, Colombia, Guatemala), "testimonios" (testimonials) are a crucial literary and legal genre. Survivors use the pluperfect to reconstruct events: "Antes de que llegaran los soldados, ya habíamos escondido los documentos." These narratives are central to truth commissions and historical memory movements. The pluperfect is not just grammar — it\'s a tool for justice and remembrance.',
    },
  ],
  culturalGradient: 'from-indigo-50 to-violet-50',

  quiz: [
    { id: 1, type: 'mc', text: 'The pluperfect is formed with:', options: ['Ser + participle', 'Haber (present) + participle', 'Haber (imperfect) + participle', 'Estar + participle'], answer: 2 },
    { id: 2, type: 'fill', text: 'Complete: "Ya ___ terminado cuando llegaste" (I had)', answer: ['había', 'habia'] },
    { id: 3, type: 'mc', text: 'The irregular participle of "escribir" is:', options: ['escribido', 'escrito', 'escribto', 'escrebido'], answer: 1 },
    { id: 4, type: 'tf', text: '"Había hecho" means "I had done/made."', answer: true },
    { id: 5, type: 'mc', text: '"Para cuando llegamos, ya se habían ido" means:', options: ['When we leave, they will go', 'By the time we arrived, they had already left', 'We arrived and they left', 'Before we arrived, they were leaving'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "Nunca había ___ esa película" (seen — ver)', answer: 'visto' },
    { id: 7, type: 'mc', text: 'Which temporal connector means "once"?', options: ['Antes de que', 'Para cuando', 'Una vez que', 'Mientras'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what had already happened when the witness arrived?', options: ['The police had arrived', 'The door had been forced open', 'The documents had been found', 'The man had been arrested'], answer: 1 },
    { id: 9, type: 'tf', text: 'In Spanish, you can place adverbs between "había" and the participle (e.g., "había ya comido").', answer: false },
    { id: 10, type: 'mc', text: 'The irregular participle of "decir" is:', options: ['decido', 'dicido', 'dicho', 'decido'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "Habíamos ___ la verdad desde el principio" (told — decir)', answer: 'dicho' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, where had Abuela Rosa and the grandfather met?', options: ['Buenos Aires', 'Italy', 'Córdoba', 'Madrid'], answer: 2 },
    { id: 13, type: 'mc', text: '"Antes de que llegara el jefe" uses the subjunctive because:', options: ['It\'s a question', 'Antes de que always requires subjunctive', 'The boss is uncertain', 'It\'s in the future'], answer: 1 },
    { id: 14, type: 'tf', text: 'Magical realism in Latin American literature makes extensive use of the pluperfect to create layered timelines.', answer: true },
    { id: 15, type: 'mc', text: '"Había puesto" is the pluperfect of:', options: ['Poder', 'Pedir', 'Poner', 'Pensar'], answer: 2 },
  ],

  audioBase: '/audio/L5.1/phrases',

  uniqueActivity: {
    id: 'TimelineWeaverL51',
    sectionId: 'timeline-weaver',
    sectionColor: 'bg-indigo-50/40',
    sectionBorder: 'border-indigo-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pluperfect-regular': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'pluperfect-irregular': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'temporal-connectors': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'narrative-sequencing': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'timeline-weaver': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
