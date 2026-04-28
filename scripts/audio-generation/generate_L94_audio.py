"""Generate all audio files for L9.4 Tourism & Hospitality Management using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L9.4\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Hotel Operations (12)
    ("recepcion-hotel", "La recepción del hotel está abierta las veinticuatro horas"),
    ("servicio-conserjeria", "El servicio de conserjería puede reservar restaurantes y tours"),
    ("tarifa-por-noche", "La tarifa por noche incluye desayuno buffet"),
    ("check-in-check-out", "El check-in es a las tres y el check-out a las doce"),
    ("suite-ejecutiva", "La suite ejecutiva tiene vista panorámica a la bahía"),
    ("servicio-habitaciones", "El servicio de habitaciones está disponible hasta la medianoche"),
    ("ocupacion-hotelera", "La ocupación hotelera alcanza el noventa por ciento en temporada alta"),
    ("gobernanta-limpieza", "La gobernanta supervisa la limpieza de todas las habitaciones"),
    ("confirmar-reservacion", "Necesitamos confirmar su reservación con tarjeta de crédito"),
    ("lavanderia-planchado", "El hotel ofrece servicio de lavandería y planchado"),
    ("tarjeta-acceso", "La tarjeta de acceso abre la puerta automáticamente"),
    ("cinco-estrellas", "La calificación del hotel es de cinco estrellas"),
    # Tour Guiding (12)
    ("itinerario-sitios", "El itinerario incluye tres sitios arqueológicos y un cenote"),
    ("guia-certificado", "Soy guía certificado con diez años de experiencia"),
    ("punto-de-encuentro", "El punto de encuentro es en el lobby del hotel a las ocho"),
    ("excursion-guiada", "La excursión guiada dura aproximadamente cuatro horas"),
    ("patrimonio-humanidad", "Machu Picchu es patrimonio de la humanidad desde mil novecientos ochenta y tres"),
    ("sendero-interpretativo", "El sendero interpretativo explica la flora y fauna local"),
    ("protector-solar-agua", "Recuerden llevar protector solar y agua suficiente"),
    ("entrada-parque-nacional", "La entrada al parque nacional tiene un costo adicional"),
    ("fotos-mirador", "Les recomiendo tomar fotos desde este mirador"),
    ("ruina-incas", "Esta ruina fue construida por los incas en el siglo quince"),
    ("recorrido-nocturno", "El recorrido nocturno muestra la ciudad iluminada"),
    ("preguntas-tour", "Pueden hacer preguntas en cualquier momento del tour"),
    # Destination Marketing (12)
    ("marca-destino", "La marca destino posiciona a la ciudad como líder en turismo cultural"),
    ("turismo-sostenible", "El turismo sostenible protege el medio ambiente y la cultura local"),
    ("turismo-aventura", "El turismo de aventura incluye rafting, senderismo y tirolesa"),
    ("ecoturismo", "El ecoturismo genera ingresos para las comunidades rurales"),
    ("temporada-alta", "La temporada alta va de diciembre a marzo en el Caribe"),
    ("paquete-todo-incluido", "El paquete todo incluido cubre vuelo, hotel y comidas"),
    ("resenas-en-linea", "Las reseñas en línea influyen en la decisión del viajero"),
    ("promocion-turistica", "La promoción turística se enfoca en las redes sociales"),
    ("turismo-gastronomico", "El turismo gastronómico atrae visitantes de todo el mundo"),
    ("temporada-baja", "La temporada baja ofrece precios más accesibles"),
    ("oficina-turismo", "La oficina de turismo proporciona mapas y folletos gratuitos"),
    ("turismo-comunitario", "El turismo comunitario ofrece experiencias auténticas"),
    # Event Planning (12)
    ("salon-banquetes", "El salón de banquetes tiene capacidad para trescientas personas"),
    ("menu-degustacion", "El menú de degustación incluye cinco tiempos con maridaje"),
    ("coordinacion-logistica", "La coordinación logística asegura que todo salga perfecto"),
    ("presupuesto-evento", "El presupuesto del evento no debe exceder los cincuenta mil dólares"),
    ("lista-invitados", "La lista de invitados ya tiene doscientos nombres confirmados"),
    ("servicio-catering", "El servicio de catering preparará cocina internacional"),
    ("decoracion-tropical", "La decoración del evento sigue una temática tropical"),
    ("sonido-iluminacion", "El sonido y la iluminación son responsabilidad del técnico"),
    ("maestro-ceremonias", "Necesitamos un maestro de ceremonias bilingüe"),
    ("confirmacion-asistencia", "La confirmación de asistencia se cierra el viernes"),
    ("montaje-evento", "El montaje del evento comienza a las seis de la mañana"),
    ("contrato-seguro", "El contrato incluye seguro de responsabilidad civil"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Hotel Check-in — Cancún, Mexico
    ("d1-line1", "Buenas tardes, bienvenidos al Hotel Caribe Azul. ¿En qué puedo ayudarles?", "es-MX-DaliaNeural"),
    ("d1-line2", "Hola, tenemos reservación a nombre de Johnson. Somos cuatro personas.", "es-MX-JorgeNeural"),
    ("d1-line3", "Perfecto, señor Johnson. Veo dos suites ejecutivas con vista al mar. El check-in está listo. ¿Me permite sus pasaportes?", "es-MX-DaliaNeural"),
    ("d1-line4", "Aquí tiene. ¿El desayuno está incluido en la tarifa?", "es-MX-JorgeNeural"),
    ("d1-line5", "Sí, su paquete todo incluido cubre desayuno buffet, almuerzo y cena en cualquiera de nuestros cinco restaurantes.", "es-MX-DaliaNeural"),
    ("d1-line6", "¡Excelente! ¿Y qué excursiones recomiendan?", "es-MX-JorgeNeural"),
    ("d1-line7", "Tenemos excursiones guiadas a Chichén Itzá, que es patrimonio de la humanidad, y tours de snorkel en la barrera de coral.", "es-MX-DaliaNeural"),
    ("d1-line8", "¿A qué hora salen?", "es-MX-JorgeNeural"),
    ("d1-line9", "El punto de encuentro es en el lobby a las ocho de la mañana. El tour dura aproximadamente ocho horas con almuerzo incluido.", "es-MX-DaliaNeural"),
    ("d1-line10", "¿Y para los niños hay actividades?", "es-MX-DaliaNeural"),
    ("d1-line11", "Por supuesto. Tenemos un club infantil con actividades supervisadas, clases de español para niños, y un sendero interpretativo en el jardín tropical.", "es-MX-DaliaNeural"),
    ("d1-line12", "¿El servicio de habitaciones está disponible por la noche?", "es-MX-JorgeNeural"),
    ("d1-line13", "Sí, hasta la medianoche. Además, el servicio de conserjería está a su disposición las veinticuatro horas para cualquier necesidad especial.", "es-MX-DaliaNeural"),
    ("d1-line14", "Perfecto. Y el viernes celebramos nuestro aniversario. ¿Podrían organizar algo especial?", "es-MX-JorgeNeural"),
    ("d1-line15", "Con mucho gusto. Puedo reservar una cena romántica en la playa con menú de degustación y música en vivo. Nuestro equipo de eventos se encargará de todo.", "es-MX-DaliaNeural"),
    ("d1-line16", "¡Maravilloso! Gracias por todo, Ana.", "es-MX-JorgeNeural"),
    ("d1-line17", "Es un placer. Aquí están sus tarjetas de acceso. Habitaciones trescientos doce y trescientos catorce, piso tres. ¡Disfruten su estadía!", "es-MX-DaliaNeural"),
    # Dialogue 2: Tour Guide — Cusco, Peru
    ("d2-line1", "¡Buenos días a todos! Soy Carlos, su guía certificado para hoy. Bienvenidos a Machu Picchu, patrimonio de la humanidad desde mil novecientos ochenta y tres.", "es-VE-SebastianNeural"),
    ("d2-line2", "¡Qué impresionante! ¿Cuándo fue construida esta ciudadela?", "es-CO-SalomeNeural"),
    ("d2-line3", "Fue construida alrededor de mil cuatrocientos cincuenta por el emperador inca Pachacútec. Funcionaba como centro ceremonial, agrícola y astronómico.", "es-VE-SebastianNeural"),
    ("d2-line4", "¿Cuánto dura la excursión guiada?", "es-CO-GonzaloNeural"),
    ("d2-line5", "Aproximadamente cuatro horas. Nuestro itinerario incluye el Templo del Sol, el Intihuatana y las terrazas agrícolas. Recuerden llevar protector solar y agua.", "es-VE-SebastianNeural"),
    ("d2-line6", "¿Por qué hay tantas terrazas en la montaña?", "es-CO-SalomeNeural"),
    ("d2-line7", "Los incas eran ingenieros agrícolas brillantes. Cada terraza tiene un microclima diferente. Cultivaban más de cien variedades de papa y maíz en distintos niveles.", "es-VE-SebastianNeural"),
    ("d2-line8", "¿Se puede subir al Huayna Picchu?", "es-CO-GonzaloNeural"),
    ("d2-line9", "Sí, pero se necesita un boleto adicional y solo permiten cuatrocientas personas al día. Es una caminata exigente de unas dos horas. Les recomiendo tomar fotos desde este mirador primero.", "es-VE-SebastianNeural"),
    ("d2-line10", "¿Qué significa \"Machu Picchu\" en quechua?", "es-CO-SalomeNeural"),
    ("d2-line11", "Significa \"Montaña Vieja.\" Y Huayna Picchu significa \"Montaña Joven.\" El quechua sigue siendo lengua viva — muchos guías aquí lo hablamos.", "es-VE-SebastianNeural"),
    ("d2-line12", "¿El turismo sostenible es importante aquí?", "es-CO-GonzaloNeural"),
    ("d2-line13", "Absolutamente. Ahora limitamos la entrada a tres mil setecientas personas diarias. El ecoturismo y el turismo comunitario benefician directamente a las familias de Cusco y Aguas Calientes.", "es-VE-SebastianNeural"),
    ("d2-line14", "¿Pueden hacer preguntas en cualquier momento?", "es-CO-SalomeNeural"),
    ("d2-line15", "¡Por supuesto! Para eso estoy. Ahora continuemos por el sendero interpretativo hacia el Templo del Cóndor. Síganme, por favor.", "es-VE-SebastianNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L9.4...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
