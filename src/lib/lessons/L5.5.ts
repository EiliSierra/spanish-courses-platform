import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Email Conventions (12) ===
  { spanish: 'Estimado/a señor/a García:', english: 'Dear Mr./Ms. García:', pronunciation: 'ehs-tee-MAH-doh/dah seh-NYOHR/ah gahr-SEE-ah', category: 'email-conventions', audio: 'estimado-senor-garcia' },
  { spanish: 'Le escribo para informarle sobre el estado del proyecto', english: 'I am writing to inform you about the status of the project', pronunciation: 'leh ehs-KREE-boh PAH-rah een-fohr-MAHR-leh SOH-breh ehl ehs-TAH-doh dehl proh-YEHK-toh', category: 'email-conventions', audio: 'le-escribo-para-informarle' },
  { spanish: 'Adjunto encontrará el informe trimestral', english: 'Attached you will find the quarterly report', pronunciation: 'ahd-HOON-toh ehn-kohn-trah-RAH ehl een-FOHR-meh tree-mehs-TRAHL', category: 'email-conventions', audio: 'adjunto-encontrara-informe' },
  { spanish: 'Quedo a su disposición para cualquier consulta', english: 'I remain at your disposal for any inquiry', pronunciation: 'KEH-doh ah soo dees-poh-see-see-OHN PAH-rah kwahl-kee-EHR kohn-SOOL-tah', category: 'email-conventions', audio: 'quedo-a-su-disposicion' },
  { spanish: 'Atentamente, Departamento de Recursos Humanos', english: 'Sincerely, Human Resources Department', pronunciation: 'ah-tehn-tah-MEHN-teh deh-pahr-tah-MEHN-toh deh rreh-KOOR-sohs oo-MAH-nohs', category: 'email-conventions', audio: 'atentamente-recursos-humanos' },
  { spanish: 'Por la presente, le comunico que su solicitud ha sido aprobada', english: 'Hereby, I inform you that your application has been approved', pronunciation: 'pohr lah preh-SEHN-teh leh koh-MOO-nee-koh keh soo soh-lee-see-TOOD ah SEE-doh ah-proh-BAH-dah', category: 'email-conventions', audio: 'por-la-presente-comunico' },
  { spanish: 'En relación con su correo del pasado martes', english: 'In relation to your email from last Tuesday', pronunciation: 'ehn rreh-lah-see-OHN kohn soo koh-RREH-oh dehl pah-SAH-doh MAHR-tehs', category: 'email-conventions', audio: 'en-relacion-con-correo' },
  { spanish: 'Le agradezco de antemano su pronta respuesta', english: 'I thank you in advance for your prompt reply', pronunciation: 'leh ah-grah-DEHS-koh deh ahn-teh-MAH-noh soo PROHN-tah rrehs-PWEHS-tah', category: 'email-conventions', audio: 'le-agradezco-de-antemano' },
  { spanish: 'Sin otro particular, le saluda cordialmente', english: 'Without further ado, kind regards', pronunciation: 'seen OH-troh pahr-tee-koo-LAHR leh sah-LOO-dah kohr-dee-ahl-MEHN-teh', category: 'email-conventions', audio: 'sin-otro-particular' },
  { spanish: 'Acuso recibo de su mensaje y procederé a revisarlo', english: 'I acknowledge receipt of your message and will proceed to review it', pronunciation: 'ah-KOO-soh rreh-SEE-boh deh soo mehn-SAH-heh ee proh-seh-deh-REH ah rreh-bee-SAHR-loh', category: 'email-conventions', audio: 'acuso-recibo-mensaje' },
  { spanish: 'Lamento informarle que no será posible cumplir con el plazo', english: 'I regret to inform you that it will not be possible to meet the deadline', pronunciation: 'lah-MEHN-toh een-fohr-MAHR-leh keh noh seh-RAH poh-SEE-bleh koom-PLEER kohn ehl PLAH-soh', category: 'email-conventions', audio: 'lamento-informarle-plazo' },
  { spanish: 'Quedo en espera de sus comentarios al respecto', english: 'I await your comments on the matter', pronunciation: 'KEH-doh ehn ehs-PEH-rah deh soos koh-mehn-TAH-ree-ohs ahl rrehs-PEHK-toh', category: 'email-conventions', audio: 'quedo-en-espera-comentarios' },

  // === Meeting Language (12) ===
  { spanish: 'Propongo que revisemos los resultados del último trimestre', english: 'I propose that we review last quarter\'s results', pronunciation: 'proh-POHN-goh keh rreh-bee-SEH-mohs lohs rreh-sool-TAH-dohs dehl OOL-tee-moh tree-MEHS-treh', category: 'meeting-language', audio: 'propongo-que-revisemos' },
  { spanish: 'Tomemos en cuenta las opiniones de todos los departamentos', english: 'Let us take into account the opinions of all departments', pronunciation: 'toh-MEH-mohs ehn KWEHN-tah lahs oh-pee-nee-OH-nehs deh TOH-dohs lohs deh-pahr-tah-MEHN-tohs', category: 'meeting-language', audio: 'tomemos-en-cuenta' },
  { spanish: 'El orden del día incluye tres puntos principales', english: 'The agenda includes three main points', pronunciation: 'ehl OHR-dehn dehl DEE-ah een-KLOO-yeh trehs POON-tohs preen-see-PAH-lehs', category: 'meeting-language', audio: 'orden-del-dia-incluye' },
  { spanish: 'Pasemos al siguiente punto de la agenda', english: 'Let us move on to the next item on the agenda', pronunciation: 'pah-SEH-mohs ahl see-gee-EHN-teh POON-toh deh lah ah-HEHN-dah', category: 'meeting-language', audio: 'pasemos-al-siguiente-punto' },
  { spanish: '¿Alguien tiene algo que agregar antes de continuar?', english: 'Does anyone have anything to add before we continue?', pronunciation: 'ahl-gee-EHN tee-EH-neh AHL-goh keh ah-greh-GAHR AHN-tehs deh kohn-tee-noo-AHR', category: 'meeting-language', audio: 'alguien-tiene-algo-que-agregar' },
  { spanish: 'Quiero hacer hincapié en la importancia del presupuesto', english: 'I want to emphasize the importance of the budget', pronunciation: 'kee-EH-roh ah-SEHR een-kah-pee-EH ehn lah eem-pohr-TAHN-see-ah dehl preh-soo-PWEHS-toh', category: 'meeting-language', audio: 'hacer-hincapie-presupuesto' },
  { spanish: 'Sugiero que formemos un comité para evaluar las opciones', english: 'I suggest we form a committee to evaluate the options', pronunciation: 'soo-hee-EH-roh keh fohr-MEH-mohs oon koh-mee-TEH PAH-rah eh-bah-loo-AHR lahs ohp-see-OH-nehs', category: 'meeting-language', audio: 'sugiero-formemos-comite' },
  { spanish: 'Estoy de acuerdo con lo que ha planteado la directora', english: 'I agree with what the director has raised', pronunciation: 'ehs-TOY deh ah-KWEHR-doh kohn loh keh ah plahn-teh-AH-doh lah dee-rehk-TOH-rah', category: 'meeting-language', audio: 'estoy-de-acuerdo-directora' },
  { spanish: 'Me gustaría solicitar una prórroga de dos semanas', english: 'I would like to request a two-week extension', pronunciation: 'meh goos-tah-REE-ah soh-lee-see-TAHR OO-nah PROH-rroh-gah deh dohs seh-MAH-nahs', category: 'meeting-language', audio: 'solicitar-prorroga' },
  { spanish: 'Levantemos acta de los acuerdos alcanzados hoy', english: 'Let us take minutes of the agreements reached today', pronunciation: 'leh-bahn-TEH-mohs AHK-tah deh lohs ah-KWEHR-dohs ahl-kahn-SAH-dohs oy', category: 'meeting-language', audio: 'levantemos-acta-acuerdos' },
  { spanish: 'Antes de cerrar, ¿hay alguna pregunta pendiente?', english: 'Before we close, are there any outstanding questions?', pronunciation: 'AHN-tehs deh seh-RRAHR ay ahl-GOO-nah preh-GOON-tah pehn-dee-EHN-teh', category: 'meeting-language', audio: 'alguna-pregunta-pendiente' },
  { spanish: 'Quedamos en reunirnos la próxima semana para dar seguimiento', english: 'We agree to meet next week for follow-up', pronunciation: 'keh-DAH-mohs ehn rreh-oo-NEER-nohs lah PROHK-see-mah seh-MAH-nah PAH-rah dahr seh-gee-mee-EHN-toh', category: 'meeting-language', audio: 'quedamos-en-reunirnos' },

  // === Negotiation Phrases (12) ===
  { spanish: 'Estamos dispuestos a negociar los términos del contrato', english: 'We are willing to negotiate the terms of the contract', pronunciation: 'ehs-TAH-mohs dees-PWEHS-tohs ah neh-goh-see-AHR lohs TEHR-mee-nohs dehl kohn-TRAH-toh', category: 'negotiation-phrases', audio: 'dispuestos-a-negociar' },
  { spanish: 'Nuestra propuesta incluye un descuento del quince por ciento', english: 'Our proposal includes a fifteen percent discount', pronunciation: 'NWEHS-trah proh-PWEHS-tah een-KLOO-yeh oon dehs-KWEHN-toh dehl KEEN-seh pohr see-EHN-toh', category: 'negotiation-phrases', audio: 'propuesta-incluye-descuento' },
  { spanish: 'Necesitamos llegar a un acuerdo antes del viernes', english: 'We need to reach an agreement before Friday', pronunciation: 'neh-seh-see-TAH-mohs yeh-GAHR ah oon ah-KWEHR-doh AHN-tehs dehl bee-EHR-nehs', category: 'negotiation-phrases', audio: 'llegar-a-un-acuerdo' },
  { spanish: '¿Qué condiciones serían aceptables para su empresa?', english: 'What conditions would be acceptable for your company?', pronunciation: 'keh kohn-dee-see-OH-nehs seh-REE-ahn ah-sehp-TAH-blehs PAH-rah soo ehm-PREH-sah', category: 'negotiation-phrases', audio: 'condiciones-aceptables' },
  { spanish: 'Podemos ofrecer un plazo de pago de treinta días', english: 'We can offer a payment term of thirty days', pronunciation: 'poh-DEH-mohs oh-freh-SEHR oon PLAH-soh deh PAH-goh deh TREH-een-tah DEE-ahs', category: 'negotiation-phrases', audio: 'plazo-de-pago-treinta' },
  { spanish: 'Consideramos que esta oferta es mutuamente beneficiosa', english: 'We consider this offer to be mutually beneficial', pronunciation: 'kohn-see-deh-RAH-mohs keh EHS-tah oh-FEHR-tah ehs moo-too-ah-MEHN-teh beh-neh-fee-see-OH-sah', category: 'negotiation-phrases', audio: 'oferta-mutuamente-beneficiosa' },
  { spanish: 'Lamentablemente, no podemos aceptar esas condiciones', english: 'Unfortunately, we cannot accept those conditions', pronunciation: 'lah-mehn-TAH-bleh-MEHN-teh noh poh-DEH-mohs ah-sehp-TAHR EH-sahs kohn-dee-see-OH-nehs', category: 'negotiation-phrases', audio: 'no-podemos-aceptar' },
  { spanish: 'Propongo un punto intermedio que satisfaga a ambas partes', english: 'I propose a middle ground that satisfies both parties', pronunciation: 'proh-POHN-goh oon POON-toh een-tehr-MEH-dee-oh keh sah-tees-FAH-gah ah AHM-bahs PAHR-tehs', category: 'negotiation-phrases', audio: 'punto-intermedio' },
  { spanish: 'Nos comprometemos a cumplir con los plazos establecidos', english: 'We commit to meeting the established deadlines', pronunciation: 'nohs kohm-proh-meh-TEH-mohs ah koom-PLEER kohn lohs PLAH-sohs ehs-tah-bleh-SEE-dohs', category: 'negotiation-phrases', audio: 'comprometemos-cumplir-plazos' },
  { spanish: '¿Estarían de acuerdo en revisar la cláusula de exclusividad?', english: 'Would you agree to review the exclusivity clause?', pronunciation: 'ehs-tah-REE-ahn deh ah-KWEHR-doh ehn rreh-bee-SAHR lah KLOW-soo-lah deh ehks-kloo-see-bee-DAHD', category: 'negotiation-phrases', audio: 'revisar-clausula-exclusividad' },
  { spanish: 'Si aceptan estas condiciones, podemos firmar hoy mismo', english: 'If you accept these conditions, we can sign today', pronunciation: 'see ah-SEHP-tahn EHS-tahs kohn-dee-see-OH-nehs poh-DEH-mohs feer-MAHR oy MEES-moh', category: 'negotiation-phrases', audio: 'aceptan-firmar-hoy' },
  { spanish: 'Necesito consultar con mi equipo antes de dar una respuesta definitiva', english: 'I need to consult with my team before giving a definitive answer', pronunciation: 'neh-seh-SEE-toh kohn-sool-TAHR kohn mee eh-KEE-poh AHN-tehs deh dahr OO-nah rrehs-PWEHS-tah deh-fee-nee-TEE-bah', category: 'negotiation-phrases', audio: 'consultar-equipo-respuesta' },

  // === Presentation Delivery (12) ===
  { spanish: 'En primer lugar, me gustaría agradecer su presencia hoy', english: 'First of all, I would like to thank you for your presence today', pronunciation: 'ehn pree-MEHR loo-GAHR meh goos-tah-REE-ah ah-grah-deh-SEHR soo preh-SEHN-see-ah oy', category: 'presentation-delivery', audio: 'en-primer-lugar-agradecer' },
  { spanish: 'A continuación, les presentaré los resultados de la investigación', english: 'Next, I will present to you the results of the research', pronunciation: 'ah kohn-tee-noo-ah-see-OHN lehs preh-sehn-tah-REH lohs rreh-sool-TAH-dohs deh lah een-behs-tee-gah-see-OHN', category: 'presentation-delivery', audio: 'a-continuacion-resultados' },
  { spanish: 'Como pueden observar en esta gráfica, las ventas aumentaron un veinte por ciento', english: 'As you can see in this chart, sales increased by twenty percent', pronunciation: 'KOH-moh PWEH-dehn ohb-sehr-BAHR ehn EHS-tah GRAH-fee-kah lahs BEHN-tahs ow-mehn-TAH-rohn oon BEH-een-teh pohr see-EHN-toh', category: 'presentation-delivery', audio: 'como-pueden-observar' },
  { spanish: 'Los datos muestran que la tendencia es claramente positiva', english: 'The data shows that the trend is clearly positive', pronunciation: 'lohs DAH-tohs MWEHS-trahn keh lah tehn-DEHN-see-ah ehs KLAH-rah-MEHN-teh poh-see-TEE-bah', category: 'presentation-delivery', audio: 'datos-muestran-tendencia' },
  { spanish: 'En resumen, los tres pilares de nuestra estrategia son innovación, sostenibilidad y crecimiento', english: 'In summary, the three pillars of our strategy are innovation, sustainability, and growth', pronunciation: 'ehn rreh-SOO-mehn lohs trehs pee-LAH-rehs deh NWEHS-trah ehs-trah-TEH-hee-ah sohn ee-noh-bah-see-OHN sohs-teh-nee-bee-lee-DAHD ee kreh-see-mee-EHN-toh', category: 'presentation-delivery', audio: 'en-resumen-tres-pilares' },
  { spanish: 'Para concluir, quiero destacar los logros más significativos', english: 'To conclude, I want to highlight the most significant achievements', pronunciation: 'PAH-rah kohn-kloo-EER kee-EH-roh dehs-tah-KAHR lohs LOH-grohs mahs seeg-nee-fee-kah-TEE-bohs', category: 'presentation-delivery', audio: 'para-concluir-logros' },
  { spanish: 'Permítanme compartir algunos datos relevantes', english: 'Allow me to share some relevant data', pronunciation: 'pehr-MEE-tahn-meh kohm-pahr-TEER ahl-GOO-nohs DAH-tohs rreh-leh-BAHN-tehs', category: 'presentation-delivery', audio: 'permitanme-compartir-datos' },
  { spanish: 'Es importante señalar que estos resultados superaron nuestras expectativas', english: 'It is important to point out that these results exceeded our expectations', pronunciation: 'ehs eem-pohr-TAHN-teh seh-nyah-LAHR keh EHS-tohs rreh-sool-TAH-dohs soo-peh-RAH-rohn NWEHS-trahs ehks-pehk-tah-TEE-bahs', category: 'presentation-delivery', audio: 'importante-senalar-resultados' },
  { spanish: 'Si me permiten, pasaré a la siguiente diapositiva', english: 'If you allow me, I will move to the next slide', pronunciation: 'see meh pehr-MEE-tehn pah-sah-REH ah lah see-gee-EHN-teh dee-ah-poh-see-TEE-bah', category: 'presentation-delivery', audio: 'siguiente-diapositiva' },
  { spanish: 'Quisiera abrir el turno de preguntas y respuestas', english: 'I would like to open the floor for questions and answers', pronunciation: 'kee-see-EH-rah ah-BREER ehl TOOR-noh deh preh-GOON-tahs ee rrehs-PWEHS-tahs', category: 'presentation-delivery', audio: 'turno-preguntas-respuestas' },
  { spanish: 'Esto nos lleva al tema central de la presentación de hoy', english: 'This brings us to the central topic of today\'s presentation', pronunciation: 'EHS-toh nohs YEH-bah ahl TEH-mah sehn-TRAHL deh lah preh-sehn-tah-see-OHN deh oy', category: 'presentation-delivery', audio: 'tema-central-presentacion' },
  { spanish: 'Muchas gracias por su atención. Estoy abierto/a a preguntas', english: 'Thank you very much for your attention. I am open to questions', pronunciation: 'MOO-chahs GRAH-see-ahs pohr soo ah-tehn-see-OHN ehs-TOY ah-bee-EHR-toh/ah ah preh-GOON-tahs', category: 'presentation-delivery', audio: 'gracias-atencion-preguntas' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L55PhraseByAudio = phraseByAudio

// === INBOX MANAGER (unique activity) ===

export interface InboxManagerChallenge {
  emailSubject: string
  emailBody: string
  english: string
  correctReply: string
  options: string[]
}

export const INBOX_MANAGER_CHALLENGES: InboxManagerChallenge[] = [
  {
    emailSubject: 'Solicitud de reunión — Proyecto Andino',
    emailBody: 'Estimado/a colega: Le escribo para solicitar una reunión la próxima semana con el fin de revisar los avances del Proyecto Andino. ¿Tendría disponibilidad el martes o el miércoles? Quedo en espera de su respuesta. Atentamente, Lic. Ramírez.',
    english: 'A colleague is requesting a meeting next week to review project progress. They ask if Tuesday or Wednesday works.',
    correctReply: 'Estimado Lic. Ramírez: Agradezco su mensaje. El miércoles a las 10:00 sería ideal. Quedo a su disposición.',
    options: [
      'Estimado Lic. Ramírez: Agradezco su mensaje. El miércoles a las 10:00 sería ideal. Quedo a su disposición.',
      'Hola Ramírez, sí claro el martes o cuando quieras nos vemos.',
      'No puedo. Estoy muy ocupado toda la semana.',
      'Lamento informarle que el Proyecto Andino ha sido cancelado definitivamente.',
    ],
  },
  {
    emailSubject: 'Re: Propuesta comercial — Descuento especial',
    emailBody: 'Estimado equipo de ventas: Hemos revisado su propuesta y nos interesa, pero necesitaríamos un descuento adicional del 10% para cerrar el acuerdo. ¿Sería posible? Sin otro particular, Dra. Moreno, Directora de Compras.',
    english: 'The client liked the proposal but requests a 10% additional discount to close the deal.',
    correctReply: 'Estimada Dra. Moreno: Agradecemos su interés. Podemos ofrecer un 7% adicional si confirman el pedido esta semana. Quedamos a la espera de su respuesta.',
    options: [
      'Estimada Dra. Moreno: Agradecemos su interés. Podemos ofrecer un 7% adicional si confirman el pedido esta semana. Quedamos a la espera de su respuesta.',
      'Sí, le damos el 10% sin problema. Firme cuando quiera.',
      'Lamentablemente, no podemos hacer ningún tipo de descuento bajo ninguna circunstancia.',
      'Estimada Dra. Moreno: Su solicitud ha sido rechazada. Atentamente.',
    ],
  },
  {
    emailSubject: 'Urgente: Cambio en la fecha de entrega',
    emailBody: 'Estimado/a gerente: Por la presente, le comunico que debido a problemas logísticos, la fecha de entrega del lote 47-B se pospondrá una semana. Lamentamos los inconvenientes. Quedamos a su disposición para cualquier consulta. Ing. Torres, Jefe de Producción.',
    english: 'Production is notifying you that delivery of lot 47-B will be delayed by one week due to logistics issues.',
    correctReply: 'Estimado Ing. Torres: Acuso recibo de su mensaje. Entendemos la situación. Le solicito que nos envíe la nueva fecha confirmada a la brevedad. Atentamente.',
    options: [
      'Estimado Ing. Torres: Acuso recibo de su mensaje. Entendemos la situación. Le solicito que nos envíe la nueva fecha confirmada a la brevedad. Atentamente.',
      'Esto es inaceptable. Cancelamos todo el contrato inmediatamente.',
      'OK gracias por avisar.',
      'Estimado Ing. Torres: Proponemos que cambiemos de proveedor y cancelemos el pedido completo.',
    ],
  },
  {
    emailSubject: 'Invitación — Conferencia de Innovación Empresarial 2026',
    emailBody: 'Estimado/a profesional: Nos complace invitarle a la Conferencia de Innovación Empresarial que se celebrará el 15 de mayo en Ciudad de Panamá. La inscripción incluye acceso a talleres y networking. Adjunto encontrará el programa completo. Cordialmente, Comité Organizador.',
    english: 'You are invited to a business innovation conference in Panama City on May 15th, with workshops and networking.',
    correctReply: 'Estimado Comité Organizador: Agradezco la invitación. Confirmo mi asistencia y me gustaría participar en el taller de transformación digital. Quedo atento/a al programa definitivo.',
    options: [
      'Estimado Comité Organizador: Agradezco la invitación. Confirmo mi asistencia y me gustaría participar en el taller de transformación digital. Quedo atento/a al programa definitivo.',
      'No me interesa. Borren mi correo de su lista.',
      'Hola, sí voy. ¿Me reservan hotel?',
      'Por la presente, le comunico que la conferencia debe cancelarse por falta de presupuesto.',
    ],
  },
  {
    emailSubject: 'Evaluación de desempeño — Primer semestre',
    emailBody: 'Estimado/a colaborador/a: Le informo que su evaluación de desempeño del primer semestre ha sido completada. En general, los resultados son positivos, aunque se identificaron áreas de mejora en gestión del tiempo. Sugiero que agendemos una reunión para discutirlo. Atte., Lic. Vargas, Recursos Humanos.',
    english: 'HR has completed your performance review with positive results but suggests a meeting to discuss time management improvements.',
    correctReply: 'Estimada Lic. Vargas: Le agradezco por la evaluación. Estoy de acuerdo en agendar una reunión para revisar las áreas de mejora. ¿Le convendría el jueves por la tarde?',
    options: [
      'Estimada Lic. Vargas: Le agradezco por la evaluación. Estoy de acuerdo en agendar una reunión para revisar las áreas de mejora. ¿Le convendría el jueves por la tarde?',
      'No estoy de acuerdo con la evaluación. Exijo que la cambien inmediatamente.',
      'Gracias por el feedback, ya leí la evaluación.',
      'Estimada Lic. Vargas: Por la presente renuncio a mi puesto de trabajo. Atentamente.',
    ],
  },
  {
    emailSubject: 'Solicitud de presupuesto — Servicios de consultoría',
    emailBody: 'Estimado/a director/a: Somos una empresa con sede en Bogotá y estamos interesados en contratar sus servicios de consultoría estratégica. ¿Podrían enviarnos un presupuesto detallado para un proyecto de seis meses? Necesitaríamos la cotización antes del próximo lunes. Saludos, Dr. Castillo.',
    english: 'A Bogota-based company is requesting a detailed quote for a six-month consulting project, needed by Monday.',
    correctReply: 'Estimado Dr. Castillo: Agradecemos su interés en nuestros servicios. Le enviaremos el presupuesto detallado antes del viernes. ¿Podría indicarnos el alcance específico del proyecto para ajustar la propuesta?',
    options: [
      'Estimado Dr. Castillo: Agradecemos su interés en nuestros servicios. Le enviaremos el presupuesto detallado antes del viernes. ¿Podría indicarnos el alcance específico del proyecto para ajustar la propuesta?',
      'Hola Dr. Castillo, le mandamos algo rápido mañana.',
      'Lamentamos informarle que no ofrecemos servicios de consultoría. Atentamente.',
      'Estimado Dr. Castillo: Nuestro precio es de $500,000 USD. No negociable. Fin del asunto.',
    ],
  },
  {
    emailSubject: 'Disculpa por error en factura #2847',
    emailBody: 'Estimado/a cliente: Hemos detectado un error en la factura #2847 emitida el pasado 12 de marzo. El monto correcto debería ser $3,450 en lugar de $4,350. Adjunto encontrará la factura corregida. Le pedimos disculpas por las molestias. Contaduría General.',
    english: 'Accounting found a billing error — the correct amount is $3,450 instead of $4,350. The corrected invoice is attached.',
    correctReply: 'Estimado equipo de Contaduría: Acuso recibo de la factura corregida. Procederemos a actualizar nuestros registros. Le agradecemos la pronta notificación del error.',
    options: [
      'Estimado equipo de Contaduría: Acuso recibo de la factura corregida. Procederemos a actualizar nuestros registros. Le agradecemos la pronta notificación del error.',
      'Esto es un escándalo. Vamos a demandar a su empresa por fraude.',
      'OK, gracias por la corrección.',
      'No vamos a pagar ninguna factura hasta que se haga una auditoría completa de toda la empresa.',
    ],
  },
]

// === LESSON DATA ===

export const L55Data: LessonData = {
  id: 'L5.5',
  hero: {
    lessonId: 'L5.5',
    title: 'Professional & Workplace Spanish',
    subtitle: 'Communicating with confidence in the business world',
    description: 'Master the language of emails, meetings, negotiations, and presentations. Learn the formal register, diplomatic phrasing, and professional conventions that will make you stand out in any Spanish-speaking workplace — from writing polished emails to delivering powerful presentations.',
    image: '/images/L5.5/L5.5.jpg',
    gradient: 'from-blue-800/65 via-sky-700/55 to-cyan-700/65',
    accentColor: 'sky-200',
  },

  objectives: [
    { icon: '\u2709\uFE0F', title: 'Email Conventions', desc: 'Write professional emails with proper greetings, closings, and formal register: Estimado/a, Adjunto encontrará, Atentamente.' },
    { icon: '\uD83D\uDCCB', title: 'Meeting Language', desc: 'Lead and participate in meetings: set agendas, propose ideas, take minutes, and follow up professionally.' },
    { icon: '\uD83E\uDD1D', title: 'Negotiation Skills', desc: 'Negotiate deals diplomatically: make proposals, counter-offer, find middle ground, and close agreements.' },
    { icon: '\uD83C\uDFA4', title: 'Presentation Delivery', desc: 'Structure and deliver presentations: transitions, data references, conclusions, and Q&A management.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.3', label: 'Formal Register (Usted)', detail: 'L4.3 taught formal vs. informal register. Now apply usted consistently in professional contexts: "Le escribo para..." (I write to you...).' },
    { fromLesson: 'L4.6', label: 'Banking & Finance Vocabulary', detail: 'L4.6 covered financial terms. Now use them in negotiations: presupuesto, contrato, factura, plazo de pago.' },
    { fromLesson: 'L2.8', label: 'Job Interview Basics', detail: 'L2.8 introduced job interview language. Now advance to full workplace communication: meetings, emails, and presentations.' },
  ],

  sectionTransitions: [
    { afterSection: 'email-conventions', text: 'You can write polished professional emails! Now let\'s master the language of meetings.' },
    { afterSection: 'meeting-language', text: 'Meeting language unlocked! Next up — the art of negotiation in Spanish.' },
    { afterSection: 'negotiation-phrases', text: 'Negotiation skills loaded! Time to learn how to deliver presentations with confidence.' },
    { afterSection: 'dialogues', text: 'Great workplace conversations! Let\'s explore the cultural side of doing business in the Spanish-speaking world.' },
    { afterSection: 'cultural', text: 'Cultural insights acquired! Now test your professional skills in the Inbox Manager activity.' },
    { afterSection: 'inbox-manager', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Le escribo para...', english: 'I am writing to...' },
    { spanish: 'Propongo que...', english: 'I propose that...' },
    { spanish: 'Estamos dispuestos a...', english: 'We are willing to...' },
    { spanish: 'En primer lugar...', english: 'First of all...' },
    { spanish: 'Quedo a su disposición', english: 'I remain at your disposal' },
    { spanish: 'Atentamente', english: 'Sincerely' },
  ],

  pronunciationChallenges: [
    { spanish: 'Adjunto encontrará el informe trimestral', pronunciation: 'ahd-HOON-toh ehn-kohn-trah-RAH ehl een-FOHR-meh tree-mehs-TRAHL', english: 'Attached you will find the quarterly report', audio: 'adjunto-encontrara-informe', tip: '"Adjunto" is key business vocabulary. The "dj" sounds like English "j" in "judge." "Trimestral" = quarterly (tres meses = three months).' },
    { spanish: 'Propongo que revisemos los resultados', pronunciation: 'proh-POHN-goh keh rreh-bee-SEH-mohs lohs rreh-sool-TAH-dohs', english: 'I propose that we review the results', audio: 'propongo-que-revisemos', tip: '"Propongo que + subjunctive" — in meetings, proposals trigger subjunctive: propongo que reviseMOS (not revisamos). Same for sugiero que, pido que.' },
    { spanish: 'Necesitamos llegar a un acuerdo', pronunciation: 'neh-seh-see-TAH-mohs yeh-GAHR ah oon ah-KWEHR-doh', english: 'We need to reach an agreement', audio: 'llegar-a-un-acuerdo', tip: '"Llegar a un acuerdo" is the standard phrase for "reach an agreement." In negotiation, "acuerdo" is your best friend — it appears in dozens of set phrases.' },
    { spanish: 'Como pueden observar en esta gráfica', pronunciation: 'KOH-moh PWEH-dehn ohb-sehr-BAHR ehn EHS-tah GRAH-fee-kah', english: 'As you can see in this chart', audio: 'como-pueden-observar', tip: '"Observar" is more formal than "ver" (to see). In presentations, use "como pueden observar" instead of "como pueden ver" for a polished register.' },
    { spanish: 'Lamentablemente no podemos aceptar esas condiciones', pronunciation: 'lah-mehn-TAH-bleh-MEHN-teh noh poh-DEH-mohs ah-sehp-TAHR EH-sahs kohn-dee-see-OH-nehs', english: 'Unfortunately we cannot accept those conditions', audio: 'no-podemos-aceptar', tip: '"Lamentablemente" (unfortunately) softens a rejection. Other diplomatic softeners: "con todo respeto" (with all due respect), "si me permiten" (if you allow me).' },
    { spanish: 'Quisiera abrir el turno de preguntas y respuestas', pronunciation: 'kee-see-EH-rah ah-BREER ehl TOOR-noh deh preh-GOON-tahs ee rrehs-PWEHS-tahs', english: 'I would like to open the Q&A session', audio: 'turno-preguntas-respuestas', tip: '"Quisiera" is the most polished way to say "I would like" — even more formal than "me gustaría." Use it for high-level presentations and formal requests.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'email-conventions', label: 'Email Conventions' },
    { id: 'meeting-language', label: 'Meeting Language' },
    { id: 'negotiation-phrases', label: 'Negotiation Phrases' },
    { id: 'presentation-delivery', label: 'Presentation Delivery' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'phrase-sorting', label: 'Phrase Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'inbox-manager', label: 'Inbox Manager' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'email-conventions',
      title: 'Email Conventions \u2014 Convenciones de Correo Profesional',
      description: 'Master the formal openings, closings, and set phrases that define professional email communication in Spanish. These conventions are non-negotiable in business contexts.',
      tabs: [
        { label: 'Openings & Body', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'email-conventions').slice(0, 6) },
        { label: 'Closings & Follow-up', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'email-conventions').slice(6) },
      ],
    },
    {
      id: 'meeting-language',
      title: 'Meeting Language \u2014 Lenguaje de Reuniones',
      description: 'Run meetings like a pro: set the agenda, propose ideas, manage discussion, and close with clear action items.',
      tabs: [
        { label: 'Leading & Proposing', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'meeting-language').slice(0, 6) },
        { label: 'Managing & Closing', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'meeting-language').slice(6) },
      ],
    },
    {
      id: 'negotiation-phrases',
      title: 'Negotiation Phrases \u2014 Frases de Negociaci\u00F3n',
      description: 'The art of the deal in Spanish: make proposals, counter-offer diplomatically, find common ground, and close agreements.',
      tabs: [
        { label: 'Proposing & Offering', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'negotiation-phrases').slice(0, 6) },
        { label: 'Countering & Closing', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'negotiation-phrases').slice(6) },
      ],
    },
    {
      id: 'presentation-delivery',
      title: 'Presentation Delivery \u2014 Presentaciones Profesionales',
      description: 'Structure your presentation from opening to Q&A. Master transitions, data references, and powerful conclusions.',
      tabs: [
        { label: 'Opening & Transitions', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'presentation-delivery').slice(0, 6) },
        { label: 'Data & Closing', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'presentation-delivery').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'The Formal "Usted" Register in Business',
      content: 'In professional Spanish, usted is the default. All verb forms shift to third person: "usted tiene" (you have), "le escribo" (I write to you). Even in countries where "t\u00FA" is common socially (Spain, Mexico), business communication defaults to usted until trust is established. The indirect object "le" replaces "te": "Le informo" (I inform you), not "Te informo."',
      example: 'Le escribo para informarle... | Le agradezco su respuesta... | Quedo a su disposici\u00F3n...',
      reviewFrom: 'L4.3',
    },
    {
      title: 'Diplomatic Softeners \u2014 Suavizadores',
      content: 'Spanish business culture values diplomacy heavily. Use conditional forms to soften requests: "Querr\u00EDa" (I would want), "Podr\u00EDa" (could you), "Ser\u00EDa posible" (would it be possible). Add "lamentablemente" (unfortunately) before bad news and "con todo respeto" (with all due respect) before disagreements. These are not optional \u2014 they are expected.',
      example: 'Quisiera solicitar... | Lamentablemente no ser\u00E1 posible... | \u00BFSer\u00EDa tan amable de...?',
      reviewFrom: 'L4.8',
    },
    {
      title: 'Subjunctive in Business Proposals',
      content: 'Proposals and suggestions in meetings trigger the subjunctive mood: "Propongo que revisemos" (I propose that we review), "Sugiero que formemos" (I suggest that we form). This applies to any verb of influence (proponer, sugerir, recomendar, pedir) followed by "que." Master this pattern and you\'ll sound like a native professional.',
      example: 'Propongo que revisemos... | Sugiero que formemos un comit\u00E9... | Recomiendo que hablemos con...',
      reviewFrom: 'L4.2',
    },
    {
      title: 'Set Phrases \u2014 Fórmulas Fijas',
      content: 'Professional Spanish relies heavily on fixed formulas (f\u00F3rmulas fijas). These are phrases everyone uses verbatim: "Por la presente" (hereby), "Adjunto encontrar\u00E1" (attached you will find), "Sin otro particular" (without further ado), "Acuso recibo" (I acknowledge receipt). Memorize them as whole units \u2014 they are the building blocks of professional credibility.',
      example: 'Por la presente le comunico... | Adjunto encontrar\u00E1... | Quedo a su disposici\u00F3n...',
    },
  ],

  flashcardGroups: [
    {
      key: 'email-meeting',
      label: 'Emails & Meetings',
      audioKeys: ['estimado-senor-garcia', 'le-escribo-para-informarle', 'adjunto-encontrara-informe', 'quedo-a-su-disposicion', 'atentamente-recursos-humanos', 'por-la-presente-comunico', 'propongo-que-revisemos', 'tomemos-en-cuenta', 'orden-del-dia-incluye', 'pasemos-al-siguiente-punto'],
    },
    {
      key: 'negotiation',
      label: 'Negotiation',
      audioKeys: ['dispuestos-a-negociar', 'propuesta-incluye-descuento', 'llegar-a-un-acuerdo', 'condiciones-aceptables', 'plazo-de-pago-treinta', 'oferta-mutuamente-beneficiosa', 'no-podemos-aceptar', 'punto-intermedio'],
    },
    {
      key: 'presentation',
      label: 'Presentations',
      audioKeys: ['en-primer-lugar-agradecer', 'a-continuacion-resultados', 'como-pueden-observar', 'datos-muestran-tendencia', 'en-resumen-tres-pilares', 'para-concluir-logros', 'permitanme-compartir-datos', 'importante-senalar-resultados', 'turno-preguntas-respuestas', 'gracias-atencion-preguntas'],
    },
  ],

  matchPairs: [
    { left: 'Estimado/a', right: 'Dear (formal)' },
    { left: 'Adjunto encontrará', right: 'Attached you will find' },
    { left: 'El orden del día', right: 'The agenda' },
    { left: 'Estamos dispuestos a', right: 'We are willing to' },
    { left: 'En primer lugar', right: 'First of all' },
    { left: 'Atentamente', right: 'Sincerely' },
    { left: 'Quedo a su disposición', right: 'I remain at your disposal' },
    { left: 'Acuso recibo', right: 'I acknowledge receipt' },
  ],
  matchLabels: { left: 'Espa\u00F1ol', right: 'English' },

  sortActivities: [
    {
      title: 'Email vs. Meeting',
      instruction: 'Is this phrase typically used in an email or in a face-to-face meeting?',
      buckets: ['Email \u2709\uFE0F', 'Meeting \uD83D\uDCCB'],
      items: [
        { text: 'Adjunto encontrar\u00E1...', bucket: 'Email \u2709\uFE0F' },
        { text: 'Quedo en espera de su respuesta', bucket: 'Email \u2709\uFE0F' },
        { text: 'Sin otro particular', bucket: 'Email \u2709\uFE0F' },
        { text: 'Acuso recibo de su mensaje', bucket: 'Email \u2709\uFE0F' },
        { text: 'Pasemos al siguiente punto', bucket: 'Meeting \uD83D\uDCCB' },
        { text: '\u00BFAlguien tiene algo que agregar?', bucket: 'Meeting \uD83D\uDCCB' },
        { text: 'Levantemos acta de los acuerdos', bucket: 'Meeting \uD83D\uDCCB' },
        { text: 'Propongo que revisemos los resultados', bucket: 'Meeting \uD83D\uDCCB' },
      ],
    },
    {
      title: 'Negotiation: Soft vs. Firm',
      instruction: 'Is this negotiation phrase diplomatic (soft) or firm/direct?',
      buckets: ['Diplomatic \uD83E\uDD1D', 'Firm \u270A'],
      items: [
        { text: 'Propongo un punto intermedio', bucket: 'Diplomatic \uD83E\uDD1D' },
        { text: 'Estamos dispuestos a negociar', bucket: 'Diplomatic \uD83E\uDD1D' },
        { text: 'Consideramos que es mutuamente beneficiosa', bucket: 'Diplomatic \uD83E\uDD1D' },
        { text: '\u00BFQu\u00E9 condiciones ser\u00EDan aceptables?', bucket: 'Diplomatic \uD83E\uDD1D' },
        { text: 'No podemos aceptar esas condiciones', bucket: 'Firm \u270A' },
        { text: 'Necesitamos llegar a un acuerdo antes del viernes', bucket: 'Firm \u270A' },
        { text: 'Si aceptan, podemos firmar hoy mismo', bucket: 'Firm \u270A' },
        { text: 'Nos comprometemos a cumplir con los plazos', bucket: 'Firm \u270A' },
      ],
    },
  ],
  sortSectionId: 'phrase-sorting',
  sortTitle: 'Phrase Sorting',

  dialogues: [
    {
      id: 'dialogue-business-meeting',
      title: 'Quarterly Review Meeting \u2014 Ciudad de Panam\u00E1',
      location: 'Ciudad de Panam\u00E1',
      lines: [
        { speaker: 'Directora Salazar', text: 'Buenos d\u00EDas a todos. Gracias por asistir. El orden del d\u00EDa incluye tres puntos: resultados del trimestre, presupuesto del pr\u00F3ximo a\u00F1o y nuevas contrataciones.', audio: '/audio/L5.5/phrases/d1-line1.mp3' },
        { speaker: 'Ing. P\u00E9rez', text: 'Buenos d\u00EDas, directora. Antes de empezar, quisiera solicitar que agreguemos un punto sobre la capacitaci\u00F3n del personal.', audio: '/audio/L5.5/phrases/d1-line2.mp3', annotations: [{ phrase: 'quisiera solicitar', fromLesson: 'L4.8', note: 'Conditional "quisiera" for formal requests from L4.8' }] },
        { speaker: 'Directora Salazar', text: 'Por supuesto. Lo incluiremos al final. Pasemos al primer punto. Lic. Mendoza, \u00BFnos puede presentar los resultados?', audio: '/audio/L5.5/phrases/d1-line3.mp3' },
        { speaker: 'Lic. Mendoza', text: 'Con gusto. Como pueden observar en esta gr\u00E1fica, las ventas del trimestre aumentaron un quince por ciento con respecto al a\u00F1o anterior.', audio: '/audio/L5.5/phrases/d1-line4.mp3' },
        { speaker: 'Directora Salazar', text: 'Excelente. \u00BFQu\u00E9 factores contribuyeron a este crecimiento?', audio: '/audio/L5.5/phrases/d1-line5.mp3' },
        { speaker: 'Lic. Mendoza', text: 'Los datos muestran que la expansi\u00F3n al mercado centroamericano fue el factor principal. Tambi\u00E9n la campa\u00F1a de marketing digital tuvo un impacto significativo.', audio: '/audio/L5.5/phrases/d1-line6.mp3' },
        { speaker: 'Ing. P\u00E9rez', text: 'Propongo que destinemos parte del presupuesto a fortalecer esa campa\u00F1a. Los resultados lo justifican.', audio: '/audio/L5.5/phrases/d1-line7.mp3', annotations: [{ phrase: 'Propongo que destinemos', fromLesson: 'L4.2', note: 'Subjunctive after "propongo que" — influence triggers subjunctive from L4.2' }] },
        { speaker: 'Directora Salazar', text: 'Estoy de acuerdo. Sugiero que formemos un comit\u00E9 para evaluar las opciones de inversi\u00F3n. \u00BFAlguien tiene algo que agregar?', audio: '/audio/L5.5/phrases/d1-line8.mp3' },
        { speaker: 'Lic. Mendoza', text: 'Solo quiero hacer hincapi\u00E9 en que necesitamos los datos actualizados para la pr\u00F3xima reuni\u00F3n.', audio: '/audio/L5.5/phrases/d1-line9.mp3' },
        { speaker: 'Directora Salazar', text: 'Perfecto. Levantemos acta de los acuerdos. Quedamos en reunirnos la pr\u00F3xima semana para dar seguimiento.', audio: '/audio/L5.5/phrases/d1-line10.mp3' },
      ],
    },
    {
      id: 'dialogue-negotiation',
      title: 'Contract Negotiation \u2014 Barcelona',
      location: 'Barcelona',
      lines: [
        { speaker: 'Sr. Vila', text: 'Bienvenida, Sra. Reyes. Hemos revisado su propuesta con mucho inter\u00E9s. Sin embargo, hay algunos puntos que nos gustar\u00EDa negociar.', audio: '/audio/L5.5/phrases/d2-line1.mp3' },
        { speaker: 'Sra. Reyes', text: 'Por supuesto, Sr. Vila. Estamos dispuestos a negociar los t\u00E9rminos. \u00BFCu\u00E1les son sus inquietudes principales?', audio: '/audio/L5.5/phrases/d2-line2.mp3' },
        { speaker: 'Sr. Vila', text: 'En primer lugar, el plazo de entrega de seis meses nos parece demasiado largo. Necesitar\u00EDamos acortarlo a cuatro meses.', audio: '/audio/L5.5/phrases/d2-line3.mp3' },
        { speaker: 'Sra. Reyes', text: 'Entiendo su posici\u00F3n. Lamentablemente, cuatro meses no ser\u00EDa viable para la fase de desarrollo. Propongo un punto intermedio: cinco meses con un entregable parcial al tercer mes.', audio: '/audio/L5.5/phrases/d2-line4.mp3', annotations: [{ phrase: 'no ser\u00EDa viable', fromLesson: 'L4.8', note: 'Conditional for diplomatic rejection from L4.8' }] },
        { speaker: 'Sr. Vila', text: 'Eso podr\u00EDa funcionar. Segundo, \u00BFestar\u00EDan de acuerdo en incluir una cl\u00E1usula de exclusividad para el mercado europeo?', audio: '/audio/L5.5/phrases/d2-line5.mp3' },
        { speaker: 'Sra. Reyes', text: 'Necesito consultar con mi equipo antes de dar una respuesta definitiva sobre la exclusividad. Lo que s\u00ED podemos ofrecer es prioridad en el servicio posventa.', audio: '/audio/L5.5/phrases/d2-line6.mp3', annotations: [{ phrase: 'Necesito consultar con mi equipo', fromLesson: 'L4.3', note: 'Formal register using direct but respectful language from L4.3' }] },
        { speaker: 'Sr. Vila', text: '\u00BFY en cuanto al precio? Nuestra propuesta incluye un descuento del diez por ciento si firmamos antes de fin de mes.', audio: '/audio/L5.5/phrases/d2-line7.mp3' },
        { speaker: 'Sra. Reyes', text: 'Consideramos que esa oferta es mutuamente beneficiosa. Si aceptan el plazo de cinco meses con el entregable parcial, podemos confirmar el descuento hoy mismo.', audio: '/audio/L5.5/phrases/d2-line8.mp3' },
        { speaker: 'Sr. Vila', text: 'Me parece justo. Nos comprometemos a cumplir con los plazos establecidos por nuestra parte. \u00BFProcedemos a firmar?', audio: '/audio/L5.5/phrases/d2-line9.mp3' },
        { speaker: 'Sra. Reyes', text: 'Perfecto. Le agradezco su flexibilidad, Sr. Vila. Ha sido un placer negociar con ustedes.', audio: '/audio/L5.5/phrases/d2-line10.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Lead a quarterly review meeting in Panama City and negotiate a contract in Barcelona with professional diplomacy.',

  culturalNotes: [
    {
      title: 'Business Culture in Latin America \u2014 Relationships First',
      content: 'In Latin American business culture, building personal relationships (relaciones) comes before closing deals. Meetings often start with "pl\u00E1tica" (small talk) about family, travel, or food. Jumping straight to business is considered rude. The phrase "primero lo primero" actually means "build trust first" in this context. Business lunches can last 2-3 hours, and the actual negotiation may not start until dessert. Understanding this dynamic is crucial \u2014 patience is not just a virtue, it\'s a strategy.',
    },
    {
      title: 'Email Formality Levels \u2014 Knowing Your Register',
      content: 'Spanish business emails have three clear formality levels. Formal: "Estimado/a Sr./Sra." + usted + "Atentamente." Semi-formal: "Apreciado/a [nombre]" + usted + "Cordialmente." Informal (between trusted colleagues): "Hola [nombre]" + t\u00FA + "Saludos." Using the wrong level can damage relationships. When in doubt, always start formal \u2014 the other person will signal when to relax. In Spain, the shift to "t\u00FA" happens faster than in Latin America, where "usted" can persist for years in professional settings.',
    },
    {
      title: 'Networking & Enchufismo \u2014 The Power of Connections',
      content: '"Enchufismo" (from "enchufe" = plug/connection) describes the deeply rooted practice of using personal connections to advance professionally. While sometimes criticized, networking (hacer contactos) is an essential skill in Spanish-speaking business. Phrases like "Te presento a..." (Let me introduce you to...) and "Tengo un conocido que..." (I have an acquaintance who...) open more doors than any r\u00E9sum\u00E9. The saying "No es lo que sabes, sino a qui\u00E9n conoces" (It\'s not what you know, but who you know) reflects this reality across the Spanish-speaking world.',
    },
  ],
  culturalGradient: 'from-blue-50 to-sky-50',

  quiz: [
    { id: 1, type: 'mc', text: 'The most appropriate formal email greeting in Spanish is:', options: ['Hola amigo', 'Querido se\u00F1or', 'Estimado/a Sr./Sra.', 'Hey, \u00BFqu\u00E9 tal?'], answer: 2 },
    { id: 2, type: 'fill', text: 'Complete: "___ encontrar\u00E1 el informe trimestral" (Attached)', answer: 'Adjunto' },
    { id: 3, type: 'mc', text: '"Quedo a su disposici\u00F3n" means:', options: ['I quit my position', 'I remain at your disposal', 'I am disposed to leave', 'I will stay in my position'], answer: 1 },
    { id: 4, type: 'tf', text: '"El orden del d\u00EDa" is the Spanish term for a meeting agenda.', answer: true },
    { id: 5, type: 'mc', text: 'In Dialogue 1, what was the main factor behind sales growth?', options: ['New hires', 'Budget cuts', 'Central American market expansion', 'Price reduction'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "Propongo que ___ los resultados" (we review \u2014 subjunctive)', answer: 'revisemos' },
    { id: 7, type: 'mc', text: '"Estamos dispuestos a negociar" means:', options: ['We are finished negotiating', 'We are willing to negotiate', 'We disposed of the negotiation', 'We are desperate to negotiate'], answer: 1 },
    { id: 8, type: 'tf', text: 'In Latin American business culture, jumping straight to business without small talk is considered rude.', answer: true },
    { id: 9, type: 'mc', text: 'What does "acuso recibo" mean in a professional email?', options: ['I accuse the recipient', 'I acknowledge receipt', 'I refuse to receive', 'I send a receipt'], answer: 1 },
    { id: 10, type: 'mc', text: 'In Dialogue 2, what compromise did Sra. Reyes propose for the deadline?', options: ['Four months as requested', 'Six months original plan', 'Five months with partial delivery at month three', 'Seven months with full delivery'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "En primer ___, me gustar\u00EDa agradecer su presencia" (place)', answer: 'lugar' },
    { id: 12, type: 'mc', text: '"Sin otro particular" is used to:', options: ['Start a meeting', 'Close a formal email', 'Open a negotiation', 'Begin a presentation'], answer: 1 },
    { id: 13, type: 'tf', text: '"Quisiera" is a more formal alternative to "me gustar\u00EDa" for making requests.', answer: true },
    { id: 14, type: 'mc', text: '"Enchufismo" in Spanish business culture refers to:', options: ['Electric plugs', 'The power of personal connections', 'Unplugging from work', 'Charging devices'], answer: 1 },
    { id: 15, type: 'mc', text: 'Which phrase signals the end of a presentation?', options: ['En primer lugar', 'A continuaci\u00F3n', 'Para concluir', 'Pasemos al siguiente punto'], answer: 2 },
  ],

  audioBase: '/audio/L5.5/phrases',

  uniqueActivity: {
    id: 'InboxManagerL55',
    sectionId: 'inbox-manager',
    sectionColor: 'bg-sky-50/40',
    sectionBorder: 'border-sky-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-sky-50/30', border: 'border-sky-100' },
    'email-conventions': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'meeting-language': { bg: 'bg-cyan-50/30', border: 'border-cyan-100' },
    'negotiation-phrases': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'presentation-delivery': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'phrase-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'inbox-manager': { bg: 'bg-sky-50/40', border: 'border-sky-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
