"""Generate all audio files for L9.3 Agriculture & Rural Life using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L9.3\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Farming & Crops (12)
    ("la-cosecha-de-maiz", "La cosecha de maíz fue abundante este año"),
    ("la-siembra-comienza", "La siembra comienza en marzo con las primeras lluvias"),
    ("riego-por-goteo", "Instalamos riego por goteo para ahorrar agua"),
    ("cultivo-rotativo", "El cultivo rotativo mejora la fertilidad del suelo"),
    ("mi-parcela-cafe", "Mi parcela tiene dos hectáreas de café"),
    ("invernadero-tomates", "El invernadero protege los tomates de las heladas"),
    ("abono-organico", "Usamos abono orgánico en lugar de químicos"),
    ("temporada-de-siembra", "La temporada de siembra varía según la región"),
    ("surcos-alineados", "Los surcos deben estar bien alineados para el riego"),
    ("tierra-descansar", "La tierra necesita descansar entre temporadas"),
    ("arado-prepara", "El arado prepara la tierra para la nueva siembra"),
    ("plagas-destruyeron", "Las plagas destruyeron la mitad del cultivo"),
    # Livestock & Animals (12)
    ("ganado-vacuno", "El ganado vacuno pasta en los prados verdes"),
    ("ganaderia-extensiva", "La ganadería extensiva requiere mucha tierra"),
    ("pastoreo-controlado", "El pastoreo debe ser controlado para evitar la erosión"),
    ("trashumancia", "La trashumancia es el traslado estacional del ganado"),
    ("cria-de-aves", "La cría de aves incluye pollos y gallinas ponedoras"),
    ("ordeno-manana", "El ordeño se hace a las cinco de la mañana"),
    ("inseminacion-artificial", "La inseminación artificial mejora la genética del rebaño"),
    ("ovejas-lana", "Las ovejas producen lana de alta calidad"),
    ("veterinario-ganado", "El veterinario revisa al ganado cada mes"),
    ("cerdos-maiz-soya", "Los cerdos se alimentan con maíz y soya"),
    ("corral-limpio", "El corral debe estar limpio para prevenir enfermedades"),
    ("marca-ganado", "La marca del ganado identifica al propietario"),
    # Organic & Sustainable Agriculture (12)
    ("agricultura-organica", "La agricultura orgánica no usa pesticidas sintéticos"),
    ("comercio-justo", "El comercio justo garantiza un precio digno al productor"),
    ("pesticidas-naturales", "Los pesticidas naturales protegen sin contaminar"),
    ("permacultura", "La permacultura imita los patrones de la naturaleza"),
    ("soberania-alimentaria", "La soberanía alimentaria es un derecho de los pueblos"),
    ("agricultura-regenerativa", "La agricultura regenerativa restaura los ecosistemas"),
    ("compostaje", "El compostaje transforma los desechos en nutrientes"),
    ("certificacion-organica", "La certificación orgánica toma al menos tres años"),
    ("mercados-locales", "Los mercados locales apoyan a los pequeños productores"),
    ("rotacion-cultivos", "La rotación de cultivos previene el agotamiento del suelo"),
    ("control-biologico", "El control biológico usa insectos beneficiosos"),
    ("huella-carbono-agricola", "La huella de carbono agrícola se puede reducir"),
    # Rural Customs & Traditions (12)
    ("feria-ganadera", "La feria ganadera reúne a productores de toda la región"),
    ("vendimia", "La vendimia celebra la cosecha de la uva"),
    ("matanza-tradicion", "La matanza es una tradición rural de preparar carne"),
    ("trueque", "El trueque era la forma original de comercio"),
    ("minga-comunitaria", "La minga comunitaria reúne vecinos para trabajo colectivo"),
    ("fiestas-patronales", "Las fiestas patronales del pueblo duran varios días"),
    ("arrieros", "Los arrieros transportaban mercancías a lomo de mula"),
    ("fogata-familia", "La fogata reúne a la familia después de la jornada"),
    ("mercado-campesino", "El mercado campesino se instala cada domingo"),
    ("rodada-jinetes", "La rodada reúne a los jinetes del valle"),
    ("cosecha-musica", "La cosecha se celebra con música y comida típica"),
    ("cooperativas-agricolas", "Las cooperativas agrícolas fortalecen a los campesinos"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Organic Farm — Oaxaca, Mexico
    ("d1-line1", "Bienvenidos a nuestra parcela orgánica. Aquí cultivamos maíz, frijol y calabaza juntos.", "es-MX-DaliaNeural"),
    ("d1-line2", "¿Por qué siembran los tres cultivos juntos? Eso es la milpa, ¿verdad?", "es-MX-JorgeNeural"),
    ("d1-line3", "Exacto. La milpa es sabiduría ancestral. El maíz crece alto, el frijol le da nitrógeno al suelo, y la calabaza cubre la tierra para retener humedad.", "es-MX-DaliaNeural"),
    ("d1-line4", "¡Increíble! Es como una permacultura natural. ¿Y usan abono orgánico?", "es-MX-JorgeNeural"),
    ("d1-line5", "Sí, hacemos nuestro propio compostaje con desechos de la cocina y estiércol de las gallinas.", "es-MX-DaliaNeural"),
    ("d1-line6", "¿Y cómo controlan las plagas sin pesticidas químicos?", "es-MX-JorgeNeural"),
    ("d1-line7", "Usamos control biológico. Plantamos flores que atraen insectos beneficiosos, y también preparamos repelentes con ajo y chile.", "es-MX-DaliaNeural"),
    ("d1-line8", "¿Han pensado en obtener certificación orgánica?", "es-MX-JorgeNeural"),
    ("d1-line9", "Es un proceso largo — toma al menos tres años. Pero ya estamos en el segundo año. Con el comercio justo, podremos vender a mejor precio.", "es-MX-DaliaNeural"),
    ("d1-line10", "¿La comunidad los apoya?", "es-MX-JorgeNeural"),
    ("d1-line11", "Mucho. Organizamos mingas para las tareas grandes. Los vecinos vienen, trabajamos juntos, y después compartimos comida. Así ha sido siempre.", "es-MX-DaliaNeural"),
    ("d1-line12", "¿Cuál es la temporada de siembra aquí?", "es-MX-JorgeNeural"),
    ("d1-line13", "Sembramos en mayo con las primeras lluvias y cosechamos en noviembre. La tierra descansa en invierno — ella también necesita su descanso.", "es-MX-DaliaNeural"),
    ("d1-line14", "¿Y venden en el mercado local?", "es-MX-JorgeNeural"),
    ("d1-line15", "Sí, cada domingo en el mercado campesino. Los clientes saben que nuestros productos son frescos y sin químicos. La soberanía alimentaria empieza aquí, en la parcela.", "es-MX-DaliaNeural"),
    # Dialogue 2: Wine Cooperative — Mendoza, Argentina
    ("d2-line1", "Che, ¿viste que la cooperativa va a comprar un nuevo sistema de riego por goteo?", "es-AR-TomasNeural"),
    ("d2-line2", "Sí, es una inversión grande pero necesaria. Con la sequía, no podemos seguir con el riego tradicional.", "es-AR-ElenaNeural"),
    ("d2-line3", "¿Cuántas hectáreas tenemos entre todos los socios?", "es-AR-TomasNeural"),
    ("d2-line4", "Unas doscientas hectáreas de viñedos y cincuenta de olivos. La vendimia empieza en marzo.", "es-AR-ElenaNeural"),
    ("d2-line5", "Este año quiero implementar cultivo rotativo en mi parcela. Tres años de vid y uno de leguminosas para recuperar el suelo.", "es-AR-TomasNeural"),
    ("d2-line6", "Buena idea. Mi abuelo hacía lo mismo. También dejaba descansar la tierra un año de cada cuatro.", "es-AR-ElenaNeural"),
    ("d2-line7", "¿Y qué opinás de la ganadería? Algunos socios quieren agregar ganado vacuno.", "es-AR-TomasNeural"),
    ("d2-line8", "Podría funcionar. Ganadería extensiva en las laderas que no sirven para vid. El pastoreo controlado hasta ayuda a fertilizar.", "es-AR-ElenaNeural"),
    ("d2-line9", "¿Vamos a participar en la feria ganadera de San Rafael?", "es-AR-TomasNeural"),
    ("d2-line10", "Claro, es buena para hacer contactos. Y la fiesta de la vendimia en Mendoza es en marzo — podemos promover nuestros vinos orgánicos ahí.", "es-AR-ElenaNeural"),
    ("d2-line11", "Perfecto. ¿Sabés qué me gusta de la cooperativa? Que entre todos somos más fuertes. Es como una minga moderna.", "es-AR-TomasNeural"),
    ("d2-line12", "Totalmente. Solos no podríamos competir. Juntos, exportamos a Europa con sello de comercio justo.", "es-AR-ElenaNeural"),
    ("d2-line13", "El veterinario viene mañana a revisar los animales. ¿Le avisamos a los demás socios?", "es-AR-TomasNeural"),
    ("d2-line14", "Sí, mandá un mensaje al grupo. Y recordales que el ordeño ahora es a las cinco, no a las seis.", "es-AR-ElenaNeural"),
    ("d2-line15", "Dale. La vida del campo es dura, pero no la cambiaría por nada.", "es-AR-TomasNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L9.3...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
