"""Generate all audio files for L9.1 Architecture & Urban Planning using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L9.1\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Architectural Styles (12)
    ("barroco-ornamentacion", "El barroco se caracteriza por la ornamentación excesiva"),
    ("mudejar-islamicos-cristianos", "El estilo mudéjar combina elementos islámicos y cristianos"),
    ("art-deco-geometricas", "El art decó utiliza formas geométricas y líneas limpias"),
    ("brutalismo-hormigon", "El brutalismo emplea hormigón visto en grandes superficies"),
    ("neoclasico-grecia", "El neoclásico recupera las formas de la Grecia antigua"),
    ("colonial-espanola", "La arquitectura colonial refleja la influencia española"),
    ("modernismo-catalan-gaudi", "El modernismo catalán fue liderado por Antoni Gaudí"),
    ("boveda-peso-muros", "La bóveda distribuye el peso hacia los muros laterales"),
    ("arco-herradura-islamica", "El arco de herradura es típico de la arquitectura islámica"),
    ("fachada-renovada", "La fachada del edificio fue renovada el año pasado"),
    ("gotico-arcos-apuntados", "El estilo gótico se distingue por sus arcos apuntados"),
    ("minimalista-funcionalidad", "La arquitectura minimalista prioriza la funcionalidad"),
    # Construction Vocabulary (12)
    ("cimientos-estructura", "Los cimientos sostienen toda la estructura del edificio"),
    ("estructura-portante-cargas", "La estructura portante resiste las cargas del edificio"),
    ("hormigon-armado-acero", "El hormigón armado combina concreto con barras de acero"),
    ("viga-acero-salon", "La viga de acero cruza todo el salón principal"),
    ("andamio-obreros-altura", "El andamio permite a los obreros trabajar en altura"),
    ("obra-en-curso-diciembre", "La obra en curso estará terminada para diciembre"),
    ("plano-arquitectonico-espacios", "El plano arquitectónico muestra la distribución de espacios"),
    ("grua-materiales-piso", "La grúa levanta los materiales hasta el décimo piso"),
    ("encofrado-hormigon-frague", "El encofrado da forma al hormigón antes de que fragüe"),
    ("cimentacion-suelos-blandos", "La cimentación profunda es necesaria en suelos blandos"),
    ("arquitecto-demolicion", "El arquitecto supervisó la demolición del edificio antiguo"),
    ("ladrillos-mortero-cemento", "Los ladrillos se colocan con mortero de cemento"),
    # Urban Planning (12)
    ("ordenamiento-territorial-suelo", "El plan de ordenamiento territorial regula el uso del suelo"),
    ("zonificacion-residenciales", "La zonificación divide la ciudad en áreas residenciales y comerciales"),
    ("espacio-publico-convivencia", "El espacio público fomenta la convivencia ciudadana"),
    ("gentrificacion-residentes", "La gentrificación desplaza a los residentes originales del barrio"),
    ("transporte-integrado-metro", "El transporte público integrado conecta metro, bus y tranvía"),
    ("densidad-poblacional-calidad", "La densidad poblacional afecta la calidad de vida urbana"),
    ("ciclovias-movilidad-sostenible", "Las ciclovías promueven una movilidad más sostenible"),
    ("plan-maestro-diez-anos", "El plan maestro urbano se revisa cada diez años"),
    ("infraestructura-vial-mantenimiento", "La infraestructura vial necesita mantenimiento constante"),
    ("parques-urbanos-salud", "Los parques urbanos mejoran la salud mental de los habitantes"),
    ("regeneracion-urbana-zonas", "La regeneración urbana transforma zonas degradadas"),
    ("uso-mixto-vivienda-comercio", "El uso mixto del suelo combina vivienda, comercio y oficinas"),
    # Sustainable Design (12)
    ("certificacion-leed-sostenibilidad", "La certificación LEED garantiza estándares de sostenibilidad"),
    ("huella-ecologica-ciclo-vida", "La huella ecológica del edificio se mide durante todo su ciclo de vida"),
    ("materiales-reciclados-impacto", "Los materiales reciclados reducen el impacto ambiental"),
    ("ventilacion-natural-energia", "La ventilación natural reduce el consumo de energía"),
    ("paneles-solares-electricidad", "Los paneles solares integrados generan electricidad limpia"),
    ("azotea-verde-temperatura", "La azotea verde ayuda a regular la temperatura interior"),
    ("aguas-pluviales-jardines", "La recolección de aguas pluviales abastece los jardines"),
    ("aislamiento-termico-calor", "El aislamiento térmico evita la pérdida de calor"),
    ("iluminacion-led-convencional", "La iluminación LED consume menos que la convencional"),
    ("energia-neta-cero", "Los edificios de energía neta cero producen lo que consumen"),
    ("bioconstruccion-adobe", "La bioconstrucción utiliza materiales naturales como el adobe"),
    ("diseno-pasivo-orientacion", "El diseño pasivo aprovecha la orientación solar del terreno"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Architectural Studio — Barcelona
    ("d1-line1", "Buenos días, Carles. ¿Ya revisaste los planos para el nuevo centro cultural?", "es-ES-ElviraNeural"),
    ("d1-line2", "Sí, Elena. Me preocupa la estructura portante. Necesitamos reforzar los cimientos porque el terreno es blando.", "es-ES-AlvaroNeural"),
    ("d1-line3", "Entiendo. ¿Y qué opinas de la fachada? El cliente quiere algo que evoque el modernismo catalán.", "es-ES-ElviraNeural"),
    ("d1-line4", "Podemos incorporar elementos orgánicos, como hacía Gaudí. Curvas en vez de líneas rectas, mosaicos de cerámica.", "es-ES-AlvaroNeural"),
    ("d1-line5", "Me encanta. Y para la sostenibilidad, propongo una azotea verde y paneles solares integrados.", "es-ES-ElviraNeural"),
    ("d1-line6", "Perfecto. También deberíamos considerar la ventilación natural. Barcelona tiene un clima ideal para eso.", "es-ES-AlvaroNeural"),
    ("d1-line7", "Sí, y si usamos hormigón armado con materiales reciclados, podríamos obtener la certificación LEED.", "es-ES-ElviraNeural"),
    ("d1-line8", "¿Cuántas plantas tendrá el edificio? El plano arquitectónico actual muestra cinco.", "es-ES-AlvaroNeural"),
    ("d1-line9", "Cinco más la azotea. Necesitaremos vigas de acero reforzadas para el auditorio del tercer piso.", "es-ES-ElviraNeural"),
    ("d1-line10", "De acuerdo. Haré los cálculos estructurales esta semana. ¿Cuándo es la próxima reunión con el cliente?", "es-ES-AlvaroNeural"),
    ("d1-line11", "El jueves. Quiero presentarle las tres opciones de fachada con los renders 3D.", "es-ES-ElviraNeural"),
    ("d1-line12", "Perfecto. También prepararé un análisis comparativo de los costos de materiales sostenibles versus convencionales.", "es-ES-AlvaroNeural"),
    ("d1-line13", "Excelente. Este proyecto puede ser un referente del diseño sostenible en Cataluña.", "es-ES-ElviraNeural"),
    ("d1-line14", "Estoy de acuerdo. Un edificio que respete la tradición del modernismo catalán pero con tecnología del siglo XXI.", "es-ES-AlvaroNeural"),
    ("d1-line15", "¡Exacto! Vamos a crear algo que Gaudí habría admirado.", "es-ES-ElviraNeural"),
    # Dialogue 2: Urban Planning Council — Bogotá
    ("d2-line1", "Buenas tardes, concejales. Hoy presentaré el nuevo plan de ordenamiento territorial para la zona sur.", "es-CO-SalomeNeural"),
    ("d2-line2", "¿Cuáles son los principales cambios en la zonificación?", "es-CO-GonzaloNeural"),
    ("d2-line3", "Proponemos cambiar de uso exclusivamente residencial a uso mixto: vivienda, comercio y oficinas en la misma zona.", "es-CO-SalomeNeural"),
    ("d2-line4", "¿No aumentará eso la densidad poblacional en un área ya congestionada?", "es-CO-GonzaloNeural"),
    ("d2-line5", "Al contrario. El transporte público integrado que proponemos conectará la zona con TransMilenio y el futuro metro.", "es-CO-SalomeNeural"),
    ("d2-line6", "¿Y cómo evitaremos la gentrificación? Los residentes originales no pueden ser desplazados.", "es-VE-SebastianNeural"),
    ("d2-line7", "Tenemos un plan de vivienda protegida. El treinta por ciento de las nuevas construcciones serán viviendas de interés social.", "es-CO-SalomeNeural"),
    ("d2-line8", "¿Y los espacios públicos? El sector carece de parques y zonas verdes.", "es-VE-SebastianNeural"),
    ("d2-line9", "El plan incluye tres nuevos parques urbanos y ciclovías que conectan con la red existente.", "es-CO-SalomeNeural"),
    ("d2-line10", "¿Qué materiales se usarán en las nuevas construcciones?", "es-CO-GonzaloNeural"),
    ("d2-line11", "Exigiremos materiales reciclados y certificación LEED para todos los edificios de más de cinco pisos.", "es-CO-SalomeNeural"),
    ("d2-line12", "Bogotá ha sido un referente en urbanismo. ¿Cómo se compara este plan con el modelo de Medellín?", "es-VE-SebastianNeural"),
    ("d2-line13", "Nos inspiramos en Medellín pero adaptamos a nuestra realidad. La regeneración urbana aquí debe priorizar la equidad social.", "es-CO-SalomeNeural"),
    ("d2-line14", "¿Cuál es el cronograma de implementación?", "es-CO-GonzaloNeural"),
    ("d2-line15", "Fase uno en dieciocho meses: infraestructura vial y transporte. Fase dos en tres años: las nuevas edificaciones sostenibles.", "es-CO-SalomeNeural"),
    ("d2-line16", "Impresionante, arquitecta. Tiene nuestro apoyo para avanzar con la consulta ciudadana.", "es-VE-SebastianNeural"),
    ("d2-line17", "Gracias, concejales. Juntos construiremos una Bogotá más justa y sostenible.", "es-CO-SalomeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L9.1...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
