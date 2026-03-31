"""Generate all audio files for L7.3 Media Literacy & Critical Analysis using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L7.3\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Bias Techniques (12)
    ("sesgo-de-confirmacion", "El sesgo de confirmación nos hace buscar solo información que refuerza nuestras creencias"),
    ("falacia-ad-hominem", "La falacia ad hominem ataca a la persona en vez de refutar su argumento"),
    ("apelacion-a-la-emocion", "La apelación a la emoción manipula los sentimientos para evitar el razonamiento lógico"),
    ("generalizacion-apresurada", "La generalización apresurada saca conclusiones de una muestra insuficiente"),
    ("hombre-de-paja", "El hombre de paja distorsiona la posición del oponente para atacarla más fácilmente"),
    ("pendiente-resbaladiza", "La pendiente resbaladiza predice una cadena catastrófica de eventos sin evidencia"),
    ("falsa-equivalencia", "La falsa equivalencia equipara dos cosas que no son comparables en absoluto"),
    ("sesgo-de-anclaje", "El sesgo de anclaje nos hace depender demasiado de la primera información recibida"),
    ("falacia-del-jugador", "La falacia del jugador cree que eventos pasados afectan probabilidades futuras independientes"),
    ("argumento-de-autoridad", "El argumento de autoridad usa la fama de alguien como prueba en vez de datos"),
    ("falsa-dicotomia", "La falsa dicotomía presenta solo dos opciones cuando existen alternativas intermedias"),
    ("efecto-bandwagon", "El efecto bandwagon argumenta que algo es cierto porque la mayoría lo cree"),
    # Media Vocabulary (12)
    ("titular-sensacionalista", "El titular sensacionalista exagera los hechos para captar la atención del lector"),
    ("fuente-anonima", "La fuente anónima proporcionó información clave bajo condición de confidencialidad"),
    ("nota-de-prensa", "La nota de prensa fue distribuida por el departamento de comunicaciones del gobierno"),
    ("editorial-refleja-opinion", "El editorial refleja la opinión del medio, no necesariamente los hechos objetivos"),
    ("cronica-combina-narracion", "La crónica combina narración y análisis para contar los hechos con profundidad"),
    ("reportaje-de-investigacion", "El reportaje de investigación expuso la red de corrupción tras meses de trabajo"),
    ("corresponsal-en-el-extranjero", "El corresponsal en el extranjero envía informes desde la zona del conflicto"),
    ("enviado-especial", "El enviado especial cubrió las elecciones presidenciales desde la capital"),
    ("rueda-de-prensa", "En la rueda de prensa, los periodistas cuestionaron las declaraciones oficiales"),
    ("linea-editorial", "La línea editorial del periódico determina qué historias reciben cobertura prioritaria"),
    ("columna-de-opinion", "La columna de opinión permite al autor expresar su punto de vista personal"),
    ("pie-de-foto", "El pie de foto contextualiza la imagen y debe ser preciso y verificable"),
    # Fake News Detection (12)
    ("verificar-fuentes", "Verificar fuentes es el primer paso para confirmar la veracidad de una noticia"),
    ("contrastar-informacion", "Contrastar información con múltiples medios independientes reduce el riesgo de error"),
    ("dato-vs-opinion", "Distinguir entre dato y opinión es fundamental para el pensamiento crítico"),
    ("desinformacion-vs-malinformacion", "La desinformación se crea deliberadamente; la malinformación saca de contexto hechos reales"),
    ("bulo-fake-news", "El bulo o fake news circula rápidamente en redes sociales sin verificación previa"),
    ("sesgo-algoritmico", "El sesgo algorítmico filtra contenido según tus preferencias, creando burbujas informativas"),
    ("camara-de-eco", "La cámara de eco refuerza tus ideas al exponerte solo a opiniones similares"),
    ("clickbait-titulares-enganosos", "El clickbait usa titulares engañosos para generar clics sin ofrecer contenido sustancial"),
    ("bots-cuentas-falsas", "Los bots y cuentas falsas amplifican mensajes para crear la ilusión de consenso"),
    ("fact-checking-profesional", "El fact-checking profesional verifica afirmaciones usando bases de datos y expertos"),
    ("imagen-sacada-de-contexto", "La imagen sacada de contexto es una de las formas más comunes de desinformación visual"),
    ("deepfake-inteligencia-artificial", "El deepfake utiliza inteligencia artificial para crear videos falsos extremadamente realistas"),
    # Critical Reading (12)
    ("el-autor-implica-que", "El autor implica que las reformas benefician solo a ciertos sectores privilegiados"),
    ("se-puede-inferir-que", "Se puede inferir que el periodista tiene una postura crítica hacia el gobierno"),
    ("el-tono-del-articulo", "El tono del artículo es irónico, lo cual revela la verdadera opinión del autor"),
    ("la-intencion-del-autor", "La intención del autor es persuadir al lector de que la medida es necesaria"),
    ("el-publico-objetivo", "El público objetivo de este medio son jóvenes urbanos con educación universitaria"),
    ("el-subtexto-politico", "El subtexto político sugiere una alianza entre el medio y el partido en el poder"),
    ("seleccion-de-fuentes", "La selección de fuentes revela el sesgo ideológico del reportaje"),
    ("encuadre-mediatico", "El encuadre mediático determina cómo se presenta una historia al público"),
    ("omision-de-datos", "La omisión de datos relevantes es tan manipuladora como la mentira directa"),
    ("lenguaje-connotativo", "El lenguaje connotativo carga las palabras de significado emocional e ideológico"),
    ("agenda-setting", "La agenda setting decide qué temas son importantes y cuáles se ignoran"),
    ("triangulacion-de-fuentes", "La triangulación de fuentes requiere al menos tres fuentes independientes para confirmar un hecho"),
]

DIALOGUE_LINES = [
    # D1: Journalism Class Discussion — Madrid (Spanish voices)
    ("d1-line1", "Hoy analizaremos cómo los medios construyen la realidad. ¿Alguien puede darme un ejemplo de sesgo mediático?", "es-ES-ElviraNeural"),
    ("d1-line2", "Ayer vi un titular que decía \"Desastre total en la economía\" pero el artículo solo hablaba de una caída del 0.3%.", "es-ES-AlvaroNeural"),
    ("d1-line3", "Excelente ejemplo de titular sensacionalista. ¿Qué falacia detectas ahí, Lucía?", "es-ES-ElviraNeural"),
    ("d1-line4", "Es una generalización apresurada. Usan un dato menor para sacar una conclusión enorme.", "es-ES-ElviraNeural"),
    ("d1-line5", "Exacto. Y también hay apelación a la emoción con la palabra \"desastre\". Ahora, ¿cómo verificaríamos esta noticia?", "es-ES-ElviraNeural"),
    ("d1-line6", "Primero, buscaría la fuente original de los datos económicos. Luego contrastaría con al menos dos medios más.", "es-ES-AlvaroNeural"),
    ("d1-line7", "¿Y no deberíamos revisar quién es el dueño del periódico? La línea editorial puede explicar el sesgo.", "es-ES-ElviraNeural"),
    ("d1-line8", "¡Brillante! La propiedad mediática es clave. En España, los grandes grupos mediáticos tienen vínculos políticos claros.", "es-ES-ElviraNeural"),
    ("d1-line9", "¿Es posible encontrar un medio completamente objetivo?", "es-ES-AlvaroNeural"),
    ("d1-line10", "La objetividad absoluta no existe. Lo importante es ser consciente de los sesgos y leer críticamente.", "es-ES-ElviraNeural"),
    ("d1-line11", "Entonces, ¿el lector también tiene sesgo de confirmación al elegir qué medios consume?", "es-ES-ElviraNeural"),
    ("d1-line12", "Absolutamente. Las redes sociales y los algoritmos crean cámaras de eco. Por eso hay que buscar fuentes diversas.", "es-ES-ElviraNeural"),
    ("d1-line13", "¿Y qué papel juegan los verificadores de datos como Maldita.es o Newtral?", "es-ES-AlvaroNeural"),
    ("d1-line14", "Son esenciales. El fact-checking profesional ha demostrado ser una herramienta vital contra la desinformación.", "es-ES-ElviraNeural"),
    ("d1-line15", "Me parece que la alfabetización mediática debería enseñarse desde la escuela primaria.", "es-ES-ElviraNeural"),
    # D2: Fact-Checkers at Work — Buenos Aires (Argentine voices)
    ("d2-line1", "¿Viste este viral que dice que Argentina va a prohibir las redes sociales para menores?", "es-AR-TomasNeural"),
    ("d2-line2", "Sí, lo estamos verificando. El titular es puro clickbait. La propuesta real es muy diferente.", "es-AR-ElenaNeural"),
    ("d2-line3", "¿Cuál es la diferencia entre lo que dice el titular y lo que dice el proyecto de ley?", "es-AR-TomasNeural"),
    ("d2-line4", "El proyecto propone verificación de edad, no una prohibición. Es un caso clásico de hombre de paja mediático.", "es-AR-ElenaNeural"),
    ("d2-line5", "¿Y cómo procedemos? ¿Buscamos la fuente original?", "es-AR-TomasNeural"),
    ("d2-line6", "Ya la tengo. El texto completo está en el Boletín Oficial. Compará vos mismo: nada de \"prohibición\".", "es-AR-ElenaNeural"),
    ("d2-line7", "¿Y las imágenes del artículo? Parecen sacadas de contexto.", "es-AR-TomasNeural"),
    ("d2-line8", "Sí, hice una búsqueda inversa de imagen. La foto es de una protesta de 2023 en otro país.", "es-AR-ElenaNeural"),
    ("d2-line9", "Increíble. La desinformación visual es cada vez más sofisticada. ¿Y los comentarios?", "es-AR-TomasNeural"),
    ("d2-line10", "Muchas cuentas que lo comparten tienen patrones de bots: cuentas nuevas, nombres genéricos, publicaciones masivas.", "es-AR-ElenaNeural"),
    ("d2-line11", "¿Publicamos la verificación como \"falso\" o como \"engañoso\"?", "es-AR-TomasNeural"),
    ("d2-line12", "Como \"engañoso\". El proyecto existe, pero la representación es completamente distorsionada. Esa es la categoría correcta.", "es-AR-ElenaNeural"),
    ("d2-line13", "La verdad está en los matices. Nuestro trabajo es mostrar esos matices que los titulares ignoran.", "es-AR-TomasNeural"),
    ("d2-line14", "Exacto. Y por eso la triangulación de fuentes es nuestro estándar de oro. Mínimo tres fuentes independientes.", "es-AR-ElenaNeural"),
    ("d2-line15", "Bueno, publiquemos. Ojalá que la verificación circule tanto como el bulo original.", "es-AR-TomasNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L7.3...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
