"""Generate all audio files for L9.2 Fashion & Design using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L9.2\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Fashion Industry (12)
    ("pasarela-desfile-luces", "La pasarela del desfile fue iluminada con luces doradas"),
    ("desfile-moda-otono", "El desfile de moda presentó la nueva colección de otoño"),
    ("coleccion-primavera-verano", "La colección primavera-verano destaca los colores vibrantes"),
    ("disenador-alta-costura", "El diseñador de alta costura presentó vestidos impresionantes"),
    ("prenda-vestir-chaqueta", "La prenda de vestir más vendida fue la chaqueta de cuero"),
    ("patronaje-forma-proporciones", "El patronaje define la forma y las proporciones de cada pieza"),
    ("modelos-caminata-desfile", "Las modelos ensayan la caminata antes del desfile"),
    ("casa-moda-accesorios", "La casa de moda lanzó su marca de accesorios"),
    ("estilista-looks-sesion", "El estilista seleccionó los looks para la sesión fotográfica"),
    ("industria-moda-empleos", "La industria de la moda genera millones de empleos"),
    ("showroom-prendas-mayoristas", "El showroom exhibe las prendas para compradores mayoristas"),
    ("semana-moda-disenadores", "La semana de la moda reúne a diseñadores de todo el mundo"),
    # Textiles & Materials (12)
    ("seda-natural-brillo", "La seda natural tiene un brillo único e inconfundible"),
    ("algodon-organico-pesticidas", "El algodón orgánico se cultiva sin pesticidas químicos"),
    ("terciopelo-textura-lujosa", "El terciopelo aporta una textura lujosa a cualquier prenda"),
    ("lana-merino-temperatura", "La lana merino es suave y regula la temperatura corporal"),
    ("cuero-vegano-sinteticos", "El cuero vegano se fabrica con materiales sintéticos sostenibles"),
    ("tela-estampada-floral", "La tela estampada lleva un diseño floral muy colorido"),
    ("tejido-punto-cuerpo", "El tejido de punto se estira y adapta al cuerpo"),
    ("lino-climas-calidos", "El lino es ideal para climas cálidos por su frescura"),
    ("mezclilla-jeans-resistentes", "La mezclilla se usa para fabricar los jeans más resistentes"),
    ("encaje-artesanal-manual", "El encaje artesanal requiere horas de trabajo manual"),
    ("fibra-bambu-ecologica", "La fibra de bambú es antibacteriana y ecológica"),
    ("nailon-reciclado-pesca", "El nailon reciclado se obtiene de redes de pesca descartadas"),
    # Design Process (12)
    ("boceto-esencia-coleccion", "El boceto inicial captura la esencia de la colección"),
    ("moodboard-direccion-creativa", "El moodboard inspira la dirección creativa del proyecto"),
    ("paleta-colores-identidad", "La paleta de colores define la identidad de la marca"),
    ("corte-bies-elegante", "El corte al bies crea una caída elegante y fluida"),
    ("costuras-invisibles-profesional", "Las costuras invisibles dan un acabado profesional"),
    ("acabado-artesanal-costura", "El acabado artesanal distingue la alta costura del prêt-à-porter"),
    ("prueba-fitting-modelo", "La prueba de fitting ajusta la prenda al cuerpo de la modelo"),
    ("prototipo-revisiones-produccion", "El prototipo pasa por varias revisiones antes de producción"),
    ("silueta-forma-prenda", "La silueta define la forma general de la prenda en el cuerpo"),
    ("drapeado-pliegues-tela", "El drapeado crea pliegues artísticos en la tela"),
    ("confeccion-industrial-cantidades", "La confección industrial permite producir en grandes cantidades"),
    ("estampado-digital-ilimitados", "El estampado digital ofrece diseños ilimitados sin pantallas"),
    # Sustainable Fashion (12)
    ("moda-circular-residuos", "La moda circular busca eliminar los residuos textiles"),
    ("comercio-justo-laborales", "El comercio justo garantiza condiciones laborales dignas"),
    ("huella-hidrica-textil", "La huella hídrica de la industria textil es alarmante"),
    ("upcycling-prendas-nuevos", "El upcycling transforma prendas viejas en diseños nuevos"),
    ("trazabilidad-cadena-origen", "La trazabilidad de la cadena muestra el origen de cada material"),
    ("fast-fashion-costo-ambiental", "El fast fashion produce ropa barata a un costo ambiental enorme"),
    ("slow-fashion-calidad", "El slow fashion prioriza la calidad sobre la cantidad"),
    ("segunda-mano-desperdicio", "La ropa de segunda mano reduce el desperdicio textil"),
    ("fibras-biodegradables-contaminar", "Las fibras biodegradables se descomponen sin contaminar"),
    ("tenido-natural-pigmentos", "El teñido natural usa pigmentos de plantas y minerales"),
    ("produccion-local-carbono", "La producción local reduce la huella de carbono del transporte"),
    ("alquiler-ropa-consumismo", "El alquiler de ropa es una alternativa al consumismo"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Fashion Studio — Mexico City
    ("d1-line1", "Bienvenida, Mariana. Pasa al taller. Quiero mostrarte los bocetos de la nueva colección.", "es-MX-DaliaNeural"),
    ("d1-line2", "¡Qué emoción! ¿Cuál es la inspiración para esta colección primavera-verano?", "es-MX-DaliaNeural"),
    ("d1-line3", "Los textiles indígenas de Oaxaca. Mira el moodboard: colores tierra, bordados geométricos, materiales naturales.", "es-MX-DaliaNeural"),
    ("d1-line4", "Es hermoso. ¿Y cómo trabajas con las comunidades artesanas?", "es-MX-DaliaNeural"),
    ("d1-line5", "Tenemos acuerdos de comercio justo. Ellas tejen las telas y reciben crédito como codiseñadoras.", "es-MX-DaliaNeural"),
    ("d1-line6", "¿Qué materiales estás usando? Veo que la paleta de colores es muy cálida.", "es-MX-DaliaNeural"),
    ("d1-line7", "Algodón orgánico para las prendas base, seda natural para los vestidos de noche, y lino para las piezas casuales.", "es-MX-DaliaNeural"),
    ("d1-line8", "¿Nada de materiales sintéticos?", "es-MX-DaliaNeural"),
    ("d1-line9", "Solo nailon reciclado para los forros. Queremos que toda la colección sea trazable desde el origen de cada fibra.", "es-MX-DaliaNeural"),
    ("d1-line10", "Impresionante. ¿Y el patronaje? Veo cortes muy innovadores.", "es-MX-DaliaNeural"),
    ("d1-line11", "Sí, estoy experimentando con el corte al bies para crear siluetas fluidas. Sin costuras visibles.", "es-MX-DaliaNeural"),
    ("d1-line12", "¿Cuándo es el desfile?", "es-MX-DaliaNeural"),
    ("d1-line13", "En tres semanas, durante la Semana de la Moda de la Ciudad de México. Todavía estamos en las pruebas de fitting.", "es-MX-DaliaNeural"),
    ("d1-line14", "¡Va a ser espectacular! La moda mexicana está conquistando el mundo.", "es-MX-DaliaNeural"),
    ("d1-line15", "Gracias, Mariana. Mi sueño es demostrar que la moda puede ser bella, sostenible y justa al mismo tiempo.", "es-MX-DaliaNeural"),
    # Dialogue 2: Fashion Show Backstage — Madrid
    ("d2-line1", "¡Vamos, equipo! Faltan veinte minutos para que salgan las modelos a la pasarela.", "es-ES-AlvaroNeural"),
    ("d2-line2", "Pablo, hay un problema con el vestido de terciopelo. La costura del hombro se abrió.", "es-ES-ElviraNeural"),
    ("d2-line3", "¿Puedes repararlo? Necesitamos costuras invisibles, no se puede notar nada en la pasarela.", "es-ES-AlvaroNeural"),
    ("d2-line4", "Dame cinco minutos. Este terciopelo es delicado pero tengo la aguja correcta.", "es-ES-ElviraNeural"),
    ("d2-line5", "Perfecto. ¿Y el estilista ya seleccionó los accesorios para el look final?", "es-ES-AlvaroNeural"),
    ("d2-line6", "Sí, decidió los aretes de plata artesanal que complementan el acabado de la colección.", "es-ES-ElviraNeural"),
    ("d2-line7", "Bien. Las modelos ya ensayaron la caminata esta mañana. ¿El orden de salida está confirmado?", "es-ES-AlvaroNeural"),
    ("d2-line8", "Confirmado. Empezamos con las prendas casuales de lino, luego las de seda, y cerramos con la alta costura.", "es-ES-ElviraNeural"),
    ("d2-line9", "¿Ya llegaron los periodistas de moda? Vi que Vogue España confirmó su asistencia.", "es-ES-AlvaroNeural"),
    ("d2-line10", "Sí, y también están las compradoras de El Corte Inglés. Si les gusta, podríamos entrar en sus tiendas.", "es-ES-ElviraNeural"),
    ("d2-line11", "¿Cómo está el showroom? ¿Tienen los lookbooks listos para los compradores mayoristas?", "es-ES-AlvaroNeural"),
    ("d2-line12", "Todo listo. Incluimos la información de trazabilidad de cada prenda, como nos pidieron.", "es-ES-ElviraNeural"),
    ("d2-line13", "Excelente. Esta colección demuestra que España puede liderar el slow fashion en Europa.", "es-ES-AlvaroNeural"),
    ("d2-line14", "¡Listo el vestido! La costura quedó perfecta. Nadie notará la reparación.", "es-ES-ElviraNeural"),
    ("d2-line15", "¡Eres una artista, Sofía! Bueno, equipo... ¡es hora del desfile! ¡Suerte a todos!", "es-ES-AlvaroNeural"),
    ("d2-line16", "¡Que comience la magia de la moda!", "es-ES-ElviraNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L9.2...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
