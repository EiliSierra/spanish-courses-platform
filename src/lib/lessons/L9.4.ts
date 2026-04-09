import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Hotel Operations (12) ===
  { spanish: 'La recepción del hotel está abierta las veinticuatro horas', english: 'The hotel front desk is open twenty-four hours', pronunciation: 'lah reh-sehp-see-OHN dehl oh-TEHL ehs-TAH ah-bee-EHR-tah lahs beh-een-tee-KWAH-troh OH-rahs', category: 'hotel-operations', audio: 'recepcion-hotel' },
  { spanish: 'El servicio de conserjería puede reservar restaurantes y tours', english: 'The concierge service can book restaurants and tours', pronunciation: 'ehl sehr-BEE-see-oh deh kohn-sehr-heh-REE-ah PWEH-deh reh-sehr-BAHR rehs-tow-RAHN-tehs ee toors', category: 'hotel-operations', audio: 'servicio-conserjeria' },
  { spanish: 'La tarifa por noche incluye desayuno buffet', english: 'The nightly rate includes buffet breakfast', pronunciation: 'lah tah-REE-fah pohr NOH-cheh een-KLOO-yeh deh-sah-YOO-noh boo-FEH', category: 'hotel-operations', audio: 'tarifa-por-noche' },
  { spanish: 'El check-in es a las tres y el check-out a las doce', english: 'Check-in is at three and check-out is at twelve', pronunciation: 'ehl chehk-EEN ehs ah lahs trehs ee ehl chehk-OWT ah lahs DOH-seh', category: 'hotel-operations', audio: 'check-in-check-out' },
  { spanish: 'La suite ejecutiva tiene vista panorámica a la bahía', english: 'The executive suite has a panoramic view of the bay', pronunciation: 'lah sweet eh-heh-koo-TEE-bah tee-EH-neh BEES-tah pah-noh-RAH-mee-kah ah lah bah-EE-ah', category: 'hotel-operations', audio: 'suite-ejecutiva' },
  { spanish: 'El servicio de habitaciones está disponible hasta la medianoche', english: 'Room service is available until midnight', pronunciation: 'ehl sehr-BEE-see-oh deh ah-bee-tah-see-OH-nehs ehs-TAH dees-poh-NEE-bleh AHS-tah lah meh-dee-ah-NOH-cheh', category: 'hotel-operations', audio: 'servicio-habitaciones' },
  { spanish: 'La ocupación hotelera alcanza el noventa por ciento en temporada alta', english: 'Hotel occupancy reaches ninety percent in high season', pronunciation: 'lah oh-koo-pah-see-OHN oh-teh-LEH-rah ahl-KAHN-sah ehl noh-BEHN-tah pohr see-EHN-toh ehn tehm-poh-RAH-dah AHL-tah', category: 'hotel-operations', audio: 'ocupacion-hotelera' },
  { spanish: 'La gobernanta supervisa la limpieza de todas las habitaciones', english: 'The head housekeeper supervises the cleaning of all rooms', pronunciation: 'lah goh-behr-NAHN-tah soo-pehr-BEE-sah lah leem-pee-EH-sah deh TOH-dahs lahs ah-bee-tah-see-OH-nehs', category: 'hotel-operations', audio: 'gobernanta-limpieza' },
  { spanish: 'Necesitamos confirmar su reservación con tarjeta de crédito', english: 'We need to confirm your reservation with a credit card', pronunciation: 'neh-seh-see-TAH-mohs kohn-feer-MAHR soo reh-sehr-bah-see-OHN kohn tahr-HEH-tah deh KREH-dee-toh', category: 'hotel-operations', audio: 'confirmar-reservacion' },
  { spanish: 'El hotel ofrece servicio de lavandería y planchado', english: 'The hotel offers laundry and ironing service', pronunciation: 'ehl oh-TEHL oh-FREH-seh sehr-BEE-see-oh deh lah-bahn-deh-REE-ah ee plahn-CHAH-doh', category: 'hotel-operations', audio: 'lavanderia-planchado' },
  { spanish: 'La tarjeta de acceso abre la puerta automáticamente', english: 'The key card opens the door automatically', pronunciation: 'lah tahr-HEH-tah deh ahk-SEH-soh AH-breh lah PWEHR-tah ow-toh-MAH-tee-kah-MEHN-teh', category: 'hotel-operations', audio: 'tarjeta-acceso' },
  { spanish: 'La calificación del hotel es de cinco estrellas', english: 'The hotel rating is five stars', pronunciation: 'lah kah-lee-fee-kah-see-OHN dehl oh-TEHL ehs deh SEEN-koh ehs-TREH-yahs', category: 'hotel-operations', audio: 'cinco-estrellas' },

  // === Tour Guiding (12) ===
  { spanish: 'El itinerario incluye tres sitios arqueológicos y un cenote', english: 'The itinerary includes three archaeological sites and a cenote', pronunciation: 'ehl ee-tee-neh-RAH-ree-oh een-KLOO-yeh trehs SEE-tee-ohs ahr-keh-oh-LOH-hee-kohs ee oon seh-NOH-teh', category: 'tour-guiding', audio: 'itinerario-sitios' },
  { spanish: 'Soy guía certificado con diez años de experiencia', english: 'I am a certified guide with ten years of experience', pronunciation: 'soy GEE-ah sehr-tee-fee-KAH-doh kohn dee-EHS AH-nyohs deh ehks-peh-ree-EHN-see-ah', category: 'tour-guiding', audio: 'guia-certificado' },
  { spanish: 'El punto de encuentro es en el lobby del hotel a las ocho', english: 'The meeting point is in the hotel lobby at eight', pronunciation: 'ehl POON-toh deh ehn-KWEHN-troh ehs ehn ehl LOH-bee dehl oh-TEHL ah lahs OH-choh', category: 'tour-guiding', audio: 'punto-de-encuentro' },
  { spanish: 'La excursión guiada dura aproximadamente cuatro horas', english: 'The guided tour lasts approximately four hours', pronunciation: 'lah ehks-koor-see-OHN gee-AH-dah DOO-rah ah-prohk-see-mah-dah-MEHN-teh KWAH-troh OH-rahs', category: 'tour-guiding', audio: 'excursion-guiada' },
  { spanish: 'Machu Picchu es patrimonio de la humanidad desde mil novecientos ochenta y tres', english: 'Machu Picchu has been a World Heritage Site since 1983', pronunciation: 'MAH-choo PEEK-choo ehs pah-tree-MOH-nee-oh deh lah oo-mah-nee-DAHD DEHS-deh meel noh-beh-see-EHN-tohs oh-CHEHN-tah ee trehs', category: 'tour-guiding', audio: 'patrimonio-humanidad' },
  { spanish: 'El sendero interpretativo explica la flora y fauna local', english: 'The interpretive trail explains the local flora and fauna', pronunciation: 'ehl sehn-DEH-roh een-tehr-preh-tah-TEE-boh ehks-PLEE-kah lah FLOH-rah ee FOW-nah loh-KAHL', category: 'tour-guiding', audio: 'sendero-interpretativo' },
  { spanish: 'Recuerden llevar protector solar y agua suficiente', english: 'Remember to bring sunscreen and enough water', pronunciation: 'reh-KWEHR-dehn yeh-BAHR proh-tehk-TOHR soh-LAHR ee AH-gwah soo-fee-see-EHN-teh', category: 'tour-guiding', audio: 'protector-solar-agua' },
  { spanish: 'La entrada al parque nacional tiene un costo adicional', english: 'The national park entrance has an additional cost', pronunciation: 'lah ehn-TRAH-dah ahl PAHR-keh nah-see-oh-NAHL tee-EH-neh oon KOHS-toh ah-dee-see-oh-NAHL', category: 'tour-guiding', audio: 'entrada-parque-nacional' },
  { spanish: 'Les recomiendo tomar fotos desde este mirador', english: 'I recommend taking photos from this viewpoint', pronunciation: 'lehs reh-koh-mee-EHN-doh toh-MAHR FOH-tohs DEHS-deh EHS-teh mee-rah-DOHR', category: 'tour-guiding', audio: 'fotos-mirador' },
  { spanish: 'Esta ruina fue construida por los incas en el siglo quince', english: 'This ruin was built by the Incas in the fifteenth century', pronunciation: 'EHS-tah roo-EE-nah fweh kohns-troo-EE-dah pohr lohs EEN-kahs ehn ehl SEE-gloh KEEN-seh', category: 'tour-guiding', audio: 'ruina-incas' },
  { spanish: 'El recorrido nocturno muestra la ciudad iluminada', english: 'The night tour shows the illuminated city', pronunciation: 'ehl reh-koh-RREE-doh nohk-TOOR-noh MWEHS-trah lah see-oo-DAHD ee-loo-mee-NAH-dah', category: 'tour-guiding', audio: 'recorrido-nocturno' },
  { spanish: 'Pueden hacer preguntas en cualquier momento del tour', english: 'You can ask questions at any point during the tour', pronunciation: 'PWEH-dehn ah-SEHR preh-GOON-tahs ehn kwahl-kee-EHR moh-MEHN-toh dehl toor', category: 'tour-guiding', audio: 'preguntas-tour' },

  // === Destination Marketing (12) ===
  { spanish: 'La marca destino posiciona a la ciudad como líder en turismo cultural', english: 'The destination brand positions the city as a cultural tourism leader', pronunciation: 'lah MAHR-kah dehs-TEE-noh poh-see-see-OH-nah ah lah see-oo-DAHD KOH-moh LEE-dehr ehn too-REES-moh kool-too-RAHL', category: 'destination-marketing', audio: 'marca-destino' },
  { spanish: 'El turismo sostenible protege el medio ambiente y la cultura local', english: 'Sustainable tourism protects the environment and local culture', pronunciation: 'ehl too-REES-moh sohs-teh-NEE-bleh proh-TEH-heh ehl MEH-dee-oh ahm-bee-EHN-teh ee lah kool-TOO-rah loh-KAHL', category: 'destination-marketing', audio: 'turismo-sostenible' },
  { spanish: 'El turismo de aventura incluye rafting, senderismo y tirolesa', english: 'Adventure tourism includes rafting, hiking, and zip-lining', pronunciation: 'ehl too-REES-moh deh ah-behn-TOO-rah een-KLOO-yeh RAHF-teen sehn-deh-REES-moh ee tee-roh-LEH-sah', category: 'destination-marketing', audio: 'turismo-aventura' },
  { spanish: 'El ecoturismo genera ingresos para las comunidades rurales', english: 'Ecotourism generates income for rural communities', pronunciation: 'ehl eh-koh-too-REES-moh heh-NEH-rah een-GREH-sohs PAH-rah lahs koh-moo-nee-DAH-dehs roo-RAH-lehs', category: 'destination-marketing', audio: 'ecoturismo' },
  { spanish: 'La temporada alta va de diciembre a marzo en el Caribe', english: 'High season runs from December to March in the Caribbean', pronunciation: 'lah tehm-poh-RAH-dah AHL-tah bah deh dee-see-EHM-breh ah MAHR-soh ehn ehl kah-REE-beh', category: 'destination-marketing', audio: 'temporada-alta' },
  { spanish: 'El paquete todo incluido cubre vuelo, hotel y comidas', english: 'The all-inclusive package covers flight, hotel, and meals', pronunciation: 'ehl pah-KEH-teh TOH-doh een-kloo-EE-doh KOO-breh BWEH-loh oh-TEHL ee koh-MEE-dahs', category: 'destination-marketing', audio: 'paquete-todo-incluido' },
  { spanish: 'Las reseñas en línea influyen en la decisión del viajero', english: 'Online reviews influence the traveler\'s decision', pronunciation: 'lahs reh-SEH-nyahs ehn LEE-neh-ah een-FLOO-yehn ehn lah deh-see-see-OHN dehl bee-ah-HEH-roh', category: 'destination-marketing', audio: 'resenas-en-linea' },
  { spanish: 'La promoción turística se enfoca en las redes sociales', english: 'Tourism promotion focuses on social media', pronunciation: 'lah proh-moh-see-OHN too-REES-tee-kah seh ehn-FOH-kah ehn lahs REH-dehs soh-see-AH-lehs', category: 'destination-marketing', audio: 'promocion-turistica' },
  { spanish: 'El turismo gastronómico atrae visitantes de todo el mundo', english: 'Food tourism attracts visitors from around the world', pronunciation: 'ehl too-REES-moh gahs-troh-NOH-mee-koh ah-TRAH-eh bee-see-TAHN-tehs deh TOH-doh ehl MOON-doh', category: 'destination-marketing', audio: 'turismo-gastronomico' },
  { spanish: 'La temporada baja ofrece precios más accesibles', english: 'Low season offers more affordable prices', pronunciation: 'lah tehm-poh-RAH-dah BAH-hah oh-FREH-seh PREH-see-ohs mahs ahk-seh-SEE-blehs', category: 'destination-marketing', audio: 'temporada-baja' },
  { spanish: 'La oficina de turismo proporciona mapas y folletos gratuitos', english: 'The tourism office provides free maps and brochures', pronunciation: 'lah oh-fee-SEE-nah deh too-REES-moh proh-pohr-see-OH-nah MAH-pahs ee foh-YEH-tohs grah-TOO-ee-tohs', category: 'destination-marketing', audio: 'oficina-turismo' },
  { spanish: 'El turismo comunitario ofrece experiencias auténticas', english: 'Community-based tourism offers authentic experiences', pronunciation: 'ehl too-REES-moh koh-moo-nee-TAH-ree-oh oh-FREH-seh ehks-peh-ree-EHN-see-ahs ow-TEHN-tee-kahs', category: 'destination-marketing', audio: 'turismo-comunitario' },

  // === Event Planning (12) ===
  { spanish: 'El salón de banquetes tiene capacidad para trescientas personas', english: 'The banquet hall has capacity for three hundred people', pronunciation: 'ehl sah-LOHN deh bahn-KEH-tehs tee-EH-neh kah-pah-see-DAHD PAH-rah trehs-see-EHN-tahs pehr-SOH-nahs', category: 'event-planning', audio: 'salon-banquetes' },
  { spanish: 'El menú de degustación incluye cinco tiempos con maridaje', english: 'The tasting menu includes five courses with wine pairing', pronunciation: 'ehl meh-NOO deh deh-goos-tah-see-OHN een-KLOO-yeh SEEN-koh tee-EHM-pohs kohn mah-ree-DAH-heh', category: 'event-planning', audio: 'menu-degustacion' },
  { spanish: 'La coordinación logística asegura que todo salga perfecto', english: 'Logistical coordination ensures everything goes perfectly', pronunciation: 'lah kohr-dee-nah-see-OHN loh-HEES-tee-kah ah-seh-GOO-rah keh TOH-doh SAHL-gah pehr-FEHK-toh', category: 'event-planning', audio: 'coordinacion-logistica' },
  { spanish: 'El presupuesto del evento no debe exceder los cincuenta mil dólares', english: 'The event budget must not exceed fifty thousand dollars', pronunciation: 'ehl preh-soo-PWEHS-toh dehl eh-BEHN-toh noh DEH-beh ehk-seh-DEHR lohs seen-KWEHN-tah meel DOH-lah-rehs', category: 'event-planning', audio: 'presupuesto-evento' },
  { spanish: 'La lista de invitados ya tiene doscientos nombres confirmados', english: 'The guest list already has two hundred confirmed names', pronunciation: 'lah LEES-tah deh een-bee-TAH-dohs yah tee-EH-neh doh-see-EHN-tohs NOHM-brehs kohn-feer-MAH-dohs', category: 'event-planning', audio: 'lista-invitados' },
  { spanish: 'El servicio de catering preparará cocina internacional', english: 'The catering service will prepare international cuisine', pronunciation: 'ehl sehr-BEE-see-oh deh KAH-teh-reen preh-pah-rah-RAH koh-SEE-nah een-tehr-nah-see-oh-NAHL', category: 'event-planning', audio: 'servicio-catering' },
  { spanish: 'La decoración del evento sigue una temática tropical', english: 'The event decoration follows a tropical theme', pronunciation: 'lah deh-koh-rah-see-OHN dehl eh-BEHN-toh SEE-geh OO-nah teh-MAH-tee-kah troh-pee-KAHL', category: 'event-planning', audio: 'decoracion-tropical' },
  { spanish: 'El sonido y la iluminación son responsabilidad del técnico', english: 'Sound and lighting are the technician\'s responsibility', pronunciation: 'ehl soh-NEE-doh ee lah ee-loo-mee-nah-see-OHN sohn rehs-pohn-sah-bee-lee-DAHD dehl TEHK-nee-koh', category: 'event-planning', audio: 'sonido-iluminacion' },
  { spanish: 'Necesitamos un maestro de ceremonias bilingüe', english: 'We need a bilingual master of ceremonies', pronunciation: 'neh-seh-see-TAH-mohs oon mah-EHS-troh deh seh-reh-MOH-nee-ahs bee-LEEN-gweh', category: 'event-planning', audio: 'maestro-ceremonias' },
  { spanish: 'La confirmación de asistencia se cierra el viernes', english: 'The RSVP closes on Friday', pronunciation: 'lah kohn-feer-mah-see-OHN deh ah-sees-TEHN-see-ah seh see-EH-rrah ehl bee-EHR-nehs', category: 'event-planning', audio: 'confirmacion-asistencia' },
  { spanish: 'El montaje del evento comienza a las seis de la mañana', english: 'Event setup begins at six in the morning', pronunciation: 'ehl mohn-TAH-heh dehl eh-BEHN-toh koh-mee-EHN-sah ah lahs seh-EES deh lah mah-NYAH-nah', category: 'event-planning', audio: 'montaje-evento' },
  { spanish: 'El contrato incluye seguro de responsabilidad civil', english: 'The contract includes liability insurance', pronunciation: 'ehl kohn-TRAH-toh een-KLOO-yeh seh-GOO-roh deh rehs-pohn-sah-bee-lee-DAHD see-BEEL', category: 'event-planning', audio: 'contrato-seguro' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L94PhraseByAudio = phraseByAudio

// === CONCIERGE DESK (unique activity) ===

export interface ConciergeDeskChallenge {
  guestRequest: string
  english: string
  correctResponse: string
  options: string[]
}

export const CONCIERGE_DESK_CHALLENGES: ConciergeDeskChallenge[] = [
  {
    guestRequest: 'Disculpe, ¿podría recomendarme un restaurante de mariscos cerca del hotel?',
    english: 'Excuse me, could you recommend a seafood restaurant near the hotel?',
    correctResponse: 'Con mucho gusto. Le recomiendo La Perla del Mar, a solo cinco minutos caminando. ¿Desea que le haga una reservación?',
    options: ['Con mucho gusto. Le recomiendo La Perla del Mar, a solo cinco minutos caminando. ¿Desea que le haga una reservación?', 'No sé, busque en Google.', 'Hay uno por ahí, creo que se llama algo del mar.', 'Los restaurantes están cerrados a esta hora.'],
  },
  {
    guestRequest: 'Necesito un taxi al aeropuerto para mañana a las seis de la mañana. ¿Es posible?',
    english: 'I need a taxi to the airport for tomorrow at six in the morning. Is it possible?',
    correctResponse: 'Por supuesto. Le programaré el transporte para las seis en punto. El trayecto dura aproximadamente cuarenta minutos. ¿Necesita ayuda con el equipaje?',
    options: ['Por supuesto. Le programaré el transporte para las seis en punto. El trayecto dura aproximadamente cuarenta minutos. ¿Necesita ayuda con el equipaje?', 'A esa hora no hay taxis disponibles.', 'Llame usted mismo a un taxi, el número está en la habitación.', 'Mañana le aviso si consigo uno.'],
  },
  {
    guestRequest: 'Mi esposa y yo queremos celebrar nuestro aniversario. ¿Tienen algo especial?',
    english: 'My wife and I want to celebrate our anniversary. Do you have anything special?',
    correctResponse: 'Felicidades. Podemos preparar una cena romántica en la terraza con vista al mar, decoración floral y una botella de champán de cortesía.',
    options: ['Felicidades. Podemos preparar una cena romántica en la terraza con vista al mar, decoración floral y una botella de champán de cortesía.', 'No hacemos nada especial para aniversarios.', 'Vayan a cenar a algún restaurante afuera.', 'El hotel no ofrece servicios personalizados.'],
  },
  {
    guestRequest: 'La habitación está muy fría y no puedo ajustar el aire acondicionado. ¿Pueden ayudarme?',
    english: 'The room is very cold and I can\'t adjust the air conditioning. Can you help me?',
    correctResponse: 'Lamento la molestia. Enviaré a un técnico de mantenimiento inmediatamente. Mientras tanto, ¿le gustaría que le llevemos una manta adicional?',
    options: ['Lamento la molestia. Enviaré a un técnico de mantenimiento inmediatamente. Mientras tanto, ¿le gustaría que le llevemos una manta adicional?', 'El control está en la pared, inténtelo usted.', 'A esta hora no hay técnicos disponibles.', 'Eso pasa mucho, no se puede hacer nada.'],
  },
  {
    guestRequest: '¿Pueden organizar una excursión a las ruinas mayas para un grupo de diez personas?',
    english: 'Can you organize an excursion to the Mayan ruins for a group of ten people?',
    correctResponse: 'Con gusto. Tenemos excursiones guiadas a Chichén Itzá con transporte incluido. Para diez personas puedo ofrecerles tarifa grupal. ¿Prefieren mañana o pasado mañana?',
    options: ['Con gusto. Tenemos excursiones guiadas a Chichén Itzá con transporte incluido. Para diez personas puedo ofrecerles tarifa grupal. ¿Prefieren mañana o pasado mañana?', 'No organizamos tours, busquen una agencia afuera.', 'Diez personas es demasiado, máximo cinco.', 'Las ruinas están muy lejos, no vale la pena.'],
  },
  {
    guestRequest: 'Olvidé mi cargador de teléfono en casa. ¿Tienen alguno que pueda usar?',
    english: 'I forgot my phone charger at home. Do you have one I can use?',
    correctResponse: 'No se preocupe. En recepción tenemos cargadores universales disponibles para nuestros huéspedes. Se lo envío a su habitación ahora mismo.',
    options: ['No se preocupe. En recepción tenemos cargadores universales disponibles para nuestros huéspedes. Se lo envío a su habitación ahora mismo.', 'No tenemos cargadores, compre uno en la tienda.', 'Eso no es responsabilidad del hotel.', 'Puede cargar su teléfono en el lobby si encuentra un enchufe.'],
  },
  {
    guestRequest: 'Me gustaría extender mi estadía dos noches más. ¿Hay disponibilidad?',
    english: 'I would like to extend my stay by two more nights. Is there availability?',
    correctResponse: 'Déjeme verificar. Sí, tenemos disponibilidad en su mismo tipo de habitación. Le mantendremos la misma tarifa por noche. ¿Desea que actualice su reservación?',
    options: ['Déjeme verificar. Sí, tenemos disponibilidad en su mismo tipo de habitación. Le mantendremos la misma tarifa por noche. ¿Desea que actualice su reservación?', 'No hay habitaciones disponibles.', 'Tendría que hacer una reservación nueva con tarifa más alta.', 'Llame a la central de reservas, yo no puedo hacer eso.'],
  },
]

// === LESSON DATA ===

export const L94Data: LessonData = {
  id: 'L9.4',
  hero: {
    lessonId: 'L9.4',
    title: 'Tourism & Hospitality Management',
    subtitle: 'The art of welcoming the world in Spanish',
    description: 'Master the professional vocabulary of hotel operations, tour guiding, destination marketing, and event planning. From greeting guests at a luxury resort to guiding tourists through ancient ruins, learn the language that powers the tourism industry across the Spanish-speaking world.',
    image: '/images/L9.4/L9.4.jpg',
    gradient: 'from-blue-800/65 via-cyan-700/55 to-teal-700/65',
    accentColor: 'blue-200',
  },

  objectives: [
    { icon: '🏨', title: 'Hotel Operations', desc: 'Navigate front desk, concierge, room service, and hotel management terminology.' },
    { icon: '🗺️', title: 'Tour Guiding', desc: 'Lead excursions, describe heritage sites, and manage tour groups professionally.' },
    { icon: '📣', title: 'Destination Marketing', desc: 'Discuss tourism branding, sustainable tourism, and seasonal strategies.' },
    { icon: '🎪', title: 'Event Planning', desc: 'Coordinate banquets, catering, logistics, and guest management for events.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L2.4', label: 'At the Hotel', detail: 'L2.4 covered basic hotel interactions as a guest. Now learn the industry side — managing operations and serving guests professionally.' },
    { fromLesson: 'L2.5', label: 'At the Airport', detail: 'L2.5 introduced travel vocabulary. Now expand it to the full tourism ecosystem — from booking to farewell.' },
    { fromLesson: 'L5.5', label: 'Professional Spanish', detail: 'L5.5 covered workplace language. Now apply it to the specific context of hospitality and tourism management.' },
  ],

  sectionTransitions: [
    { afterSection: 'hotel-operations', text: 'Hotel operations mastered! Now let\'s hit the road as tour guides.' },
    { afterSection: 'tour-guiding', text: 'Great guiding skills! Let\'s explore how destinations market themselves.' },
    { afterSection: 'destination-marketing', text: 'Marketing expert! Time to plan some unforgettable events.' },
    { afterSection: 'dialogues', text: 'Wonderful professional conversations! Let\'s explore tourism culture.' },
    { afterSection: 'cultural', text: 'Now step behind the concierge desk and handle real guest requests!' },
    { afterSection: 'concierge-desk', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Bienvenido al hotel...', english: 'Welcome to the hotel...' },
    { spanish: 'Su reservación está confirmada...', english: 'Your reservation is confirmed...' },
    { spanish: 'La excursión sale a las...', english: 'The tour departs at...' },
    { spanish: 'Temporada alta/baja...', english: 'High/low season...' },
    { spanish: 'El presupuesto del evento...', english: 'The event budget...' },
    { spanish: '¿En qué puedo ayudarle?', english: 'How can I help you?' },
  ],

  pronunciationChallenges: [
    { spanish: 'El servicio de conserjería está a su disposición', pronunciation: 'ehl sehr-BEE-see-oh deh kohn-sehr-heh-REE-ah ehs-TAH ah soo dees-poh-see-see-OHN', english: 'The concierge service is at your disposal', audio: 'el-servicio-de-conserjeria-esta-a-su-disposicion', tip: '"Conserjería" has the stress on -RÍ-: kohn-sehr-heh-REE-ah. The "j" makes the Spanish "h" sound (like "Bach"). "Disposición" is a formal way to say "available for you."' },
    { spanish: 'Patrimonio de la humanidad certificado por la UNESCO', pronunciation: 'pah-tree-MOH-nee-oh deh lah oo-mah-nee-DAHD sehr-tee-fee-KAH-doh pohr lah oo-NEHS-koh', english: 'UNESCO-certified World Heritage Site', audio: 'patrimonio-de-la-humanidad-certificado-por-la-unesco', tip: '"Patrimonio" comes from "patri-" (father/heritage). Stress on -MO-: pah-tree-MOH-nee-oh. In tourism, this phrase carries prestige and credibility.' },
    { spanish: 'El paquete todo incluido cubre alimentación y entretenimiento', pronunciation: 'ehl pah-KEH-teh TOH-doh een-kloo-EE-doh KOO-breh ah-lee-mehn-tah-see-OHN ee ehn-treh-teh-nee-mee-EHN-toh', english: 'The all-inclusive package covers food and entertainment', audio: 'el-paquete-todo-incluido-cubre-alimentacion-y-entretenimiento', tip: '"Todo incluido" is the standard translation of "all-inclusive." "Entretenimiento" (entertainment) has six syllables — practice breaking it down: ehn-treh-teh-nee-mee-EHN-toh.' },
    { spanish: 'La coordinación logística del evento requiere atención al detalle', pronunciation: 'lah kohr-dee-nah-see-OHN loh-HEES-tee-kah dehl eh-BEHN-toh reh-kee-EH-reh ah-tehn-see-OHN ahl deh-TAH-yeh', english: 'The event logistical coordination requires attention to detail', audio: 'la-coordinacion-logistica-del-evento-requiere-atencion-al-detalle', tip: '"Logística" uses a soft "g" before "i": loh-HEES-tee-kah. "Detalle" (detail) ends with the "ye" sound: deh-TAH-yeh.' },
    { spanish: 'El turismo sostenible beneficia a las comunidades locales', pronunciation: 'ehl too-REES-moh sohs-teh-NEE-bleh beh-neh-FEE-see-ah ah lahs koh-moo-nee-DAH-dehs loh-KAH-lehs', english: 'Sustainable tourism benefits local communities', audio: 'el-turismo-sostenible-beneficia-a-las-comunidades-locales', tip: '"Sostenible" (sustainable) is stressed on -NI-: sohs-teh-NEE-bleh. It\'s the same root as "sostener" (to sustain/hold up).' },
    { spanish: 'La suite ejecutiva incluye acceso al salón VIP', pronunciation: 'lah sweet eh-heh-koo-TEE-bah een-KLOO-yeh ahk-SEH-soh ahl sah-LOHN bee-ee-PEH', english: 'The executive suite includes access to the VIP lounge', audio: 'la-suite-ejecutiva-incluye-acceso-al-salon-vip', tip: '"Suite" is borrowed from French and pronounced "sweet" in Spanish. "Ejecutiva" has the "j" sound: eh-heh-koo-TEE-bah. "VIP" is spelled out: bee-ee-PEH.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'hotel-operations', label: 'Hotel Operations' },
    { id: 'tour-guiding', label: 'Tour Guiding' },
    { id: 'destination-marketing', label: 'Destination Marketing' },
    { id: 'event-planning', label: 'Event Planning' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'concierge-desk', label: 'Concierge Desk' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'hotel-operations',
      title: 'Hotel Operations — Operaciones Hoteleras',
      description: 'The vocabulary of running a hotel — from front desk to housekeeping, reservations to guest services.',
      tabs: [
        { label: 'Front Desk & Rooms', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'hotel-operations').slice(0, 6) },
        { label: 'Services & Management', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'hotel-operations').slice(6) },
      ],
    },
    {
      id: 'tour-guiding',
      title: 'Tour Guiding — Guías de Turismo',
      description: 'Lead tours, describe heritage sites, manage groups, and share knowledge with visitors from around the world.',
      tabs: [
        { label: 'Itinerary & Sites', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'tour-guiding').slice(0, 6) },
        { label: 'Guide Communication', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'tour-guiding').slice(6) },
      ],
    },
    {
      id: 'destination-marketing',
      title: 'Destination Marketing — Marketing de Destinos',
      description: 'Branding, promotion, sustainable tourism strategies, and seasonal management for tourism destinations.',
      tabs: [
        { label: 'Branding & Types', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'destination-marketing').slice(0, 6) },
        { label: 'Promotion & Seasons', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'destination-marketing').slice(6) },
      ],
    },
    {
      id: 'event-planning',
      title: 'Event Planning — Planificación de Eventos',
      description: 'Coordinate banquets, manage budgets, handle catering, and ensure every event detail is perfect.',
      tabs: [
        { label: 'Venues & Menus', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'event-planning').slice(0, 6) },
        { label: 'Logistics & Contracts', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'event-planning').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Formal vs. Casual Hospitality Register',
      content: 'Hospitality Spanish uses a distinctly formal register. "¿En qué puedo servirle?" (How may I serve you?) is preferred over "¿Qué necesita?" Use "usted" always with guests. "Con mucho gusto" (with great pleasure), "a su disposición" (at your disposal), and "lamento la molestia" (I\'m sorry for the inconvenience) are essential phrases that convey professionalism.',
      example: 'Formal: ¿Desea que le ayude? | Casual: ¿Necesitas algo?',
    },
    {
      title: 'Borrowed Words in Tourism',
      content: 'Tourism Spanish borrows freely from English and French: "check-in/check-out," "lobby," "suite," "tour," "buffet," "catering." These words are pronounced with Spanish phonology: "lobby" becomes LOH-bee, "buffet" becomes boo-FEH. Some have Spanish equivalents: "check-in" = "registro," "lobby" = "vestíbulo," but the borrowed forms are widely used in the industry.',
      example: 'El check-in (LOH-bee) | El buffet (boo-FEH) | El tour (toor)',
      reviewFrom: 'L2.4',
    },
    {
      title: 'Numbers in Hospitality',
      content: 'Hotel and tourism professionals constantly use numbers: room numbers ("habitación trescientos doce"), prices ("novecientos pesos por noche"), times ("a las catorce horas"), percentages ("ochenta por ciento de ocupación"), and dates. Practice saying large numbers smoothly — guests expect confidence.',
      example: 'Habitación 312 = trescientos doce | $950/noche = novecientos cincuenta por noche',
      reviewFrom: 'L2.5',
    },
    {
      title: 'Subjunctive in Guest Services',
      content: 'Hospitality language relies heavily on the subjunctive for polite requests and suggestions: "¿Desea que le prepare...?" (Would you like me to prepare...?), "Le sugiero que visite..." (I suggest you visit...), "Es posible que llueva" (It\'s possible it might rain). This softens directives into elegant suggestions.',
      example: '¿Desea que le reserve una mesa? | Le recomiendo que pruebe el ceviche.',
    },
  ],

  flashcardGroups: [
    {
      key: 'hotel',
      label: 'Hotel Operations',
      audioKeys: ['recepcion-hotel', 'servicio-conserjeria', 'tarifa-por-noche', 'check-in-check-out', 'suite-ejecutiva', 'servicio-habitaciones', 'ocupacion-hotelera', 'gobernanta-limpieza', 'confirmar-reservacion', 'lavanderia-planchado', 'tarjeta-acceso', 'cinco-estrellas'],
    },
    {
      key: 'tours',
      label: 'Tour Guiding',
      audioKeys: ['itinerario-sitios', 'guia-certificado', 'punto-de-encuentro', 'excursion-guiada', 'patrimonio-humanidad', 'sendero-interpretativo', 'protector-solar-agua', 'entrada-parque-nacional', 'fotos-mirador', 'ruina-incas', 'recorrido-nocturno', 'preguntas-tour'],
    },
    {
      key: 'marketing-events',
      label: 'Marketing & Events',
      audioKeys: ['marca-destino', 'turismo-sostenible', 'turismo-aventura', 'ecoturismo', 'temporada-alta', 'paquete-todo-incluido', 'salon-banquetes', 'menu-degustacion', 'coordinacion-logistica', 'servicio-catering'],
    },
  ],

  matchPairs: [
    { left: 'La recepción', right: 'Front desk' },
    { left: 'El itinerario', right: 'Itinerary' },
    { left: 'Patrimonio de la humanidad', right: 'World Heritage Site' },
    { left: 'La temporada alta', right: 'High season' },
    { left: 'El paquete todo incluido', right: 'All-inclusive package' },
    { left: 'El salón de banquetes', right: 'Banquet hall' },
    { left: 'El turismo sostenible', right: 'Sustainable tourism' },
    { left: 'La conserjería', right: 'Concierge service' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: 'Hotel vs. Tour',
      instruction: 'Does this term belong to hotel operations or tour guiding?',
      buckets: ['Hotel 🏨', 'Tour 🗺️'],
      items: [
        { text: 'La recepción', bucket: 'Hotel 🏨' },
        { text: 'El servicio de habitaciones', bucket: 'Hotel 🏨' },
        { text: 'La gobernanta', bucket: 'Hotel 🏨' },
        { text: 'La tarifa por noche', bucket: 'Hotel 🏨' },
        { text: 'El itinerario', bucket: 'Tour 🗺️' },
        { text: 'El sendero interpretativo', bucket: 'Tour 🗺️' },
        { text: 'El punto de encuentro', bucket: 'Tour 🗺️' },
        { text: 'El patrimonio de la humanidad', bucket: 'Tour 🗺️' },
      ],
    },
    {
      title: 'Marketing vs. Events',
      instruction: 'Is this a marketing concept or an event planning term?',
      buckets: ['Marketing 📣', 'Events 🎪'],
      items: [
        { text: 'La marca destino', bucket: 'Marketing 📣' },
        { text: 'El ecoturismo', bucket: 'Marketing 📣' },
        { text: 'La temporada alta', bucket: 'Marketing 📣' },
        { text: 'El turismo sostenible', bucket: 'Marketing 📣' },
        { text: 'El salón de banquetes', bucket: 'Events 🎪' },
        { text: 'El servicio de catering', bucket: 'Events 🎪' },
        { text: 'La lista de invitados', bucket: 'Events 🎪' },
        { text: 'El menú de degustación', bucket: 'Events 🎪' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Vocabulary Sorting',

  dialogues: [
    {
      id: 'dialogue-hotel-lobby',
      title: 'A Luxury Hotel Lobby in Cancún — Mexico',
      location: 'Cancún, Mexico',
      lines: [
        { speaker: 'Ana (Concierge)', text: 'Buenas tardes, bienvenidos al Hotel Caribe Azul. ¿En qué puedo ayudarles?', audio: '/audio/L9.4/phrases/d1-line1.mp3' },
        { speaker: 'Mr. Johnson', text: 'Hola, tenemos reservación a nombre de Johnson. Somos cuatro personas.', audio: '/audio/L9.4/phrases/d1-line2.mp3' },
        { speaker: 'Ana', text: 'Perfecto, señor Johnson. Veo dos suites ejecutivas con vista al mar. El check-in está listo. ¿Me permite sus pasaportes?', audio: '/audio/L9.4/phrases/d1-line3.mp3' },
        { speaker: 'Mr. Johnson', text: 'Aquí tiene. ¿El desayuno está incluido en la tarifa?', audio: '/audio/L9.4/phrases/d1-line4.mp3' },
        { speaker: 'Ana', text: 'Sí, su paquete todo incluido cubre desayuno buffet, almuerzo y cena en cualquiera de nuestros cinco restaurantes.', audio: '/audio/L9.4/phrases/d1-line5.mp3', annotations: [{ phrase: 'paquete todo incluido', fromLesson: 'L2.4', note: 'Expands on basic hotel vocabulary from L2.4' }] },
        { speaker: 'Mr. Johnson', text: '¡Excelente! ¿Y qué excursiones recomiendan?', audio: '/audio/L9.4/phrases/d1-line6.mp3' },
        { speaker: 'Ana', text: 'Tenemos excursiones guiadas a Chichén Itzá, que es patrimonio de la humanidad, y tours de snorkel en la barrera de coral.', audio: '/audio/L9.4/phrases/d1-line7.mp3' },
        { speaker: 'Mr. Johnson', text: '¿A qué hora salen?', audio: '/audio/L9.4/phrases/d1-line8.mp3' },
        { speaker: 'Ana', text: 'El punto de encuentro es en el lobby a las ocho de la mañana. El tour dura aproximadamente ocho horas con almuerzo incluido.', audio: '/audio/L9.4/phrases/d1-line9.mp3' },
        { speaker: 'Mrs. Johnson', text: '¿Y para los niños hay actividades?', audio: '/audio/L9.4/phrases/d1-line10.mp3' },
        { speaker: 'Ana', text: 'Por supuesto. Tenemos un club infantil con actividades supervisadas, clases de español para niños, y un sendero interpretativo en el jardín tropical.', audio: '/audio/L9.4/phrases/d1-line11.mp3' },
        { speaker: 'Mr. Johnson', text: '¿El servicio de habitaciones está disponible por la noche?', audio: '/audio/L9.4/phrases/d1-line12.mp3' },
        { speaker: 'Ana', text: 'Sí, hasta la medianoche. Además, el servicio de conserjería está a su disposición las veinticuatro horas para cualquier necesidad especial.', audio: '/audio/L9.4/phrases/d1-line13.mp3' },
        { speaker: 'Mr. Johnson', text: 'Perfecto. Y el viernes celebramos nuestro aniversario. ¿Podrían organizar algo especial?', audio: '/audio/L9.4/phrases/d1-line14.mp3' },
        { speaker: 'Ana', text: 'Con mucho gusto. Puedo reservar una cena romántica en la playa con menú de degustación y música en vivo. Nuestro equipo de eventos se encargará de todo.', audio: '/audio/L9.4/phrases/d1-line15.mp3' },
        { speaker: 'Mr. Johnson', text: '¡Maravilloso! Gracias por todo, Ana.', audio: '/audio/L9.4/phrases/d1-line16.mp3' },
        { speaker: 'Ana', text: 'Es un placer. Aquí están sus tarjetas de acceso. Habitaciones trescientos doce y trescientos catorce, piso tres. ¡Disfruten su estadía!', audio: '/audio/L9.4/phrases/d1-line17.mp3' },
      ],
    },
    {
      id: 'dialogue-machu-picchu',
      title: 'A Tour Guide at Machu Picchu — Peru',
      location: 'Cusco, Peru',
      lines: [
        { speaker: 'Carlos (Guide)', text: '¡Buenos días a todos! Soy Carlos, su guía certificado para hoy. Bienvenidos a Machu Picchu, patrimonio de la humanidad desde mil novecientos ochenta y tres.', audio: '/audio/L9.4/phrases/d2-line1.mp3' },
        { speaker: 'Tourist 1', text: '¡Qué impresionante! ¿Cuándo fue construida esta ciudadela?', audio: '/audio/L9.4/phrases/d2-line2.mp3' },
        { speaker: 'Carlos', text: 'Fue construida alrededor de mil cuatrocientos cincuenta por el emperador inca Pachacútec. Funcionaba como centro ceremonial, agrícola y astronómico.', audio: '/audio/L9.4/phrases/d2-line3.mp3' },
        { speaker: 'Tourist 2', text: '¿Cuánto dura la excursión guiada?', audio: '/audio/L9.4/phrases/d2-line4.mp3' },
        { speaker: 'Carlos', text: 'Aproximadamente cuatro horas. Nuestro itinerario incluye el Templo del Sol, el Intihuatana y las terrazas agrícolas. Recuerden llevar protector solar y agua.', audio: '/audio/L9.4/phrases/d2-line5.mp3', annotations: [{ phrase: 'itinerario', fromLesson: 'L2.5', note: 'Travel planning vocabulary from L2.5 now used professionally' }] },
        { speaker: 'Tourist 1', text: '¿Por qué hay tantas terrazas en la montaña?', audio: '/audio/L9.4/phrases/d2-line6.mp3' },
        { speaker: 'Carlos', text: 'Los incas eran ingenieros agrícolas brillantes. Cada terraza tiene un microclima diferente. Cultivaban más de cien variedades de papa y maíz en distintos niveles.', audio: '/audio/L9.4/phrases/d2-line7.mp3' },
        { speaker: 'Tourist 2', text: '¿Se puede subir al Huayna Picchu?', audio: '/audio/L9.4/phrases/d2-line8.mp3' },
        { speaker: 'Carlos', text: 'Sí, pero se necesita un boleto adicional y solo permiten cuatrocientas personas al día. Es una caminata exigente de unas dos horas. Les recomiendo tomar fotos desde este mirador primero.', audio: '/audio/L9.4/phrases/d2-line9.mp3' },
        { speaker: 'Tourist 1', text: '¿Qué significa "Machu Picchu" en quechua?', audio: '/audio/L9.4/phrases/d2-line10.mp3' },
        { speaker: 'Carlos', text: 'Significa "Montaña Vieja." Y Huayna Picchu significa "Montaña Joven." El quechua sigue siendo lengua viva — muchos guías aquí lo hablamos.', audio: '/audio/L9.4/phrases/d2-line11.mp3' },
        { speaker: 'Tourist 2', text: '¿El turismo sostenible es importante aquí?', audio: '/audio/L9.4/phrases/d2-line12.mp3' },
        { speaker: 'Carlos', text: 'Absolutamente. Ahora limitamos la entrada a tres mil setecientas personas diarias. El ecoturismo y el turismo comunitario benefician directamente a las familias de Cusco y Aguas Calientes.', audio: '/audio/L9.4/phrases/d2-line13.mp3' },
        { speaker: 'Tourist 1', text: '¿Pueden hacer preguntas en cualquier momento?', audio: '/audio/L9.4/phrases/d2-line14.mp3' },
        { speaker: 'Carlos', text: '¡Por supuesto! Para eso estoy. Ahora continuemos por el sendero interpretativo hacia el Templo del Cóndor. Síganme, por favor.', audio: '/audio/L9.4/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Experience a luxury hotel check-in in Cancún with full concierge service, and join a certified tour guide exploring the wonders of Machu Picchu.',

  culturalNotes: [
    {
      title: 'Tourism as Economic Engine in Latin America',
      content: 'Tourism is a vital economic driver across Latin America and Spain. Mexico receives over 40 million international visitors annually, making it the most visited Spanish-speaking country. The Dominican Republic, Cuba, Costa Rica, and Peru each depend heavily on tourism revenue. In many coastal and historical cities, the hospitality industry is the primary employer. "El turismo es nuestra industria sin chimeneas" (Tourism is our industry without smokestacks) is a common saying that reflects both pride and the sector\'s environmental advantage over heavy industry.',
    },
    {
      title: 'UNESCO World Heritage Sites in the Spanish-Speaking World',
      content: 'The Spanish-speaking world boasts an extraordinary concentration of UNESCO World Heritage Sites. Spain leads with 50 sites (third worldwide), Mexico has 35, Peru has 13, and Argentina has 11. These include Machu Picchu, Chichén Itzá, the Galápagos Islands, Cartagena\'s historic center, the Alhambra, and Havana\'s old town. "Patrimonio de la humanidad" is not just a designation — it\'s a source of deep national pride and a powerful marketing tool for destinations seeking international visitors.',
    },
    {
      title: 'Community-Based Tourism — Turismo Comunitario',
      content: 'Across Latin America, "turismo comunitario" (community-based tourism) has emerged as an alternative to mass tourism. Indigenous communities in Ecuador, Bolivia, Peru, and Guatemala invite visitors to experience daily life — cooking traditional meals, farming, weaving, and participating in ceremonies. This model keeps revenue in local hands and preserves cultural heritage. In Ecuador\'s Kichwa communities along the Napo River, visitors stay in family-run eco-lodges and learn ancestral knowledge. It\'s tourism that transforms visitors and communities alike.',
    },
  ],
  culturalGradient: 'from-blue-50 to-cyan-50',

  quiz: [
    { id: 1, type: 'mc', text: '"La recepción" in a hotel refers to:', options: ['The restaurant', 'The front desk', 'The swimming pool', 'The parking lot'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "El ___ de encuentro es en el lobby a las ocho" (meeting)', answer: 'punto' },
    { id: 3, type: 'mc', text: '"Patrimonio de la humanidad" means:', options: ['National monument', 'Historical building', 'World Heritage Site', 'Tourist attraction'], answer: 2 },
    { id: 4, type: 'tf', text: '"El paquete todo incluido" covers flight, hotel, and meals.', answer: true },
    { id: 5, type: 'mc', text: '"La temporada alta" refers to:', options: ['Low season', 'Mid season', 'High season', 'Off season'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "El servicio de ___ puede reservar restaurantes" (concierge)', answer: 'conserjería' },
    { id: 7, type: 'mc', text: 'In Dialogue 1, how many restaurants does the hotel have?', options: ['Three', 'Four', 'Five', 'Seven'], answer: 2 },
    { id: 8, type: 'mc', text: '"El ecoturismo" focuses on:', options: ['Luxury travel', 'Budget travel', 'Environmentally responsible travel', 'Business travel'], answer: 2 },
    { id: 9, type: 'tf', text: '"Machu Picchu" means "Young Mountain" in Quechua.', answer: false },
    { id: 10, type: 'mc', text: '"La gobernanta" is responsible for:', options: ['Guest relations', 'Room cleaning supervision', 'Marketing', 'Event planning'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La excursión ___ dura cuatro horas" (guided)', answer: 'guiada' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, how many people per day can visit Huayna Picchu?', options: ['200', '400', '600', '1000'], answer: 1 },
    { id: 13, type: 'mc', text: '"El menú de degustación" is:', options: ['A fast food menu', 'A tasting menu', 'A children\'s menu', 'A breakfast menu'], answer: 1 },
    { id: 14, type: 'tf', text: 'Spain has the third most UNESCO World Heritage Sites worldwide.', answer: true },
    { id: 15, type: 'mc', text: '"Turismo comunitario" is designed to:', options: ['Replace hotels', 'Keep revenue in local communities', 'Increase mass tourism', 'Eliminate tour guides'], answer: 1 },
  ],

  audioBase: '/audio/L9.4/phrases',

  uniqueActivity: {
    id: 'ConciergeDeskL94',
    sectionId: 'concierge-desk',
    sectionColor: 'bg-blue-50/40',
    sectionBorder: 'border-blue-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'hotel-operations': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'tour-guiding': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'destination-marketing': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'event-planning': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'concierge-desk': { bg: 'bg-blue-50/40', border: 'border-blue-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
