"""Generate all audio files for L6.8 Public Speaking & Rhetoric using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L6.8\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Rhetorical Devices (12)
    ("la-anafora-repite", "La anáfora repite palabras al inicio de cada frase para crear ritmo"),
    ("la-antitesis-confronta", "La antítesis confronta ideas opuestas para crear impacto"),
    ("la-gradacion-construye", "La gradación construye una escalada de intensidad"),
    ("acaso-no-merecemos", "¿Acaso no merecemos un futuro mejor? — una pregunta retórica"),
    ("el-paralelismo-repite", "El paralelismo repite estructuras gramaticales idénticas"),
    ("el-climax-lleva", "El clímax lleva al público al punto de máxima emoción"),
    ("la-metafora-transforma", "La metáfora transforma una idea abstracta en una imagen concreta"),
    ("la-hiperbole-exagera", "La hipérbole exagera para enfatizar un punto"),
    ("la-ironia-dice", "La ironía dice lo contrario de lo que quiere expresar"),
    ("la-aliteracion-repite", "La aliteración repite sonidos consonánticos para crear musicalidad"),
    ("la-personificacion-atribuye", "La personificación atribuye cualidades humanas a lo inanimado"),
    ("el-asindeton-elimina", "El asíndeton elimina conjunciones para acelerar el ritmo"),
    # Speech Structure (12)
    ("estimado-publico", "Estimado público, es un honor dirigirme a ustedes hoy"),
    ("en-primer-lugar-quiero", "En primer lugar, quiero agradecer su presencia"),
    ("permitanme-comenzar", "Permítanme comenzar con una pregunta fundamental"),
    ("para-concluir-quiero", "Para concluir, quiero dejarles una reflexión"),
    ("hago-un-llamado", "Hago un llamado a la acción: no podemos esperar más"),
    ("como-les-decia", "Como les decía al principio, el cambio empieza por nosotros"),
    ("quisiera-compartir", "Quisiera compartir con ustedes una historia personal"),
    ("los-datos-son-contundentes", "Los datos son contundentes: el 80% de los encuestados coincide"),
    ("ahora-bien-hay-quienes", "Ahora bien, hay quienes podrían objetar que esto no es viable"),
    ("sin-embargo-las-evidencias", "Sin embargo, las evidencias demuestran lo contrario"),
    ("antes-de-terminar", "Antes de terminar, quiero recalcar tres puntos clave"),
    ("les-dejo-con-esta-cita", "Les dejo con esta cita de Gabriel García Márquez"),
    # Persuasion Techniques (12)
    ("apelar-a-las-emociones", "Apelar a las emociones conecta con el corazón del público"),
    ("establecer-credibilidad", "Establecer credibilidad es el primer paso para persuadir"),
    ("presentar-evidencia-solida", "Presentar evidencia sólida fortalece cualquier argumento"),
    ("anticipar-objeciones", "Anticipar objeciones demuestra dominio del tema"),
    ("usar-anecdotas-personales", "Usar anécdotas personales humaniza el mensaje"),
    ("el-contacto-visual", "El contacto visual genera confianza y conexión"),
    ("las-pausas-estrategicas", "Las pausas estratégicas dan peso a las palabras clave"),
    ("repetir-la-idea-central", "Repetir la idea central refuerza el mensaje"),
    ("invocar-valores-compartidos", "Invocar valores compartidos une al orador con su público"),
    ("el-tono-de-voz", "El tono de voz debe variar para mantener la atención"),
    ("citar-a-expertos", "Citar a expertos aporta autoridad al discurso"),
    ("un-cierre-poderoso", "Un cierre poderoso deja una impresión duradera"),
    # Famous Speeches (12)
    ("companeros-hay-que", '"Compañeros, hay que endurecerse, pero sin perder la ternura jamás" — Che Guevara'),
    ("la-historia-me-absolvera", '"La Historia me absolverá" — Fidel Castro, discurso de defensa, 1953'),
    ("sueno-con-un-continente", '"Sueño con un continente unido por la justicia" — Simón Bolívar'),
    ("la-patria-es-dicha", '"La patria es dicha de todos, y dolor de todos" — José Martí'),
    ("el-discurso-de-eva-peron", "El discurso de Eva Perón unió a millones con su oratoria apasionada"),
    ("yo-no-vengo-a-llorar", '"Yo no vengo a llorar; aquí vengo a encender mi sangre" — Pablo Neruda'),
    ("rigoberta-menchu-hablo", "Rigoberta Menchú habló ante la ONU sobre los derechos indígenas"),
    ("el-pueblo-unido", '"El pueblo unido jamás será vencido" — eslogan de protesta chileno'),
    ("garcia-marquez-uso", "Gabriel García Márquez usó su discurso Nobel para hablar de América Latina"),
    ("tenemos-sed-de-libertad", '"Tenemos sed de libertad" es un recurso de personificación colectiva'),
    ("queremos-paz-queremos", 'La anáfora en discursos: "Queremos paz. Queremos justicia. Queremos dignidad."'),
    ("la-oratoria-es-el-arte", "La oratoria es el arte de mover conciencias con la palabra"),
]

DIALOGUE_LINES = [
    # Dialogue 1: TED Talk Preparation — Medellin (es-CO voices)
    ("d1-line1", "Estoy muy nerviosa por mi charla TEDx de mañana. ¿Me ayudas a practicar, Carlos?", "es-CO-SalomeNeural"),
    ("d1-line2", "Claro. Empieza desde el principio. ¿Cuál es tu apertura?", "es-CO-GonzaloNeural"),
    ("d1-line3", "Permítanme comenzar con una pregunta fundamental: ¿cuántos de ustedes han sentido que el sistema educativo les falló?", "es-CO-SalomeNeural"),
    ("d1-line4", "¡Poderoso! La pregunta retórica es perfecta para enganchar. ¿Y después?", "es-CO-GonzaloNeural"),
    ("d1-line5", "Presento los datos: el sesenta por ciento de los estudiantes colombianos dice que la escuela no les preparó para la vida real.", "es-CO-SalomeNeural"),
    ("d1-line6", "Bien, pero necesitas una anécdota personal. Los datos convencen; las historias conmueven.", "es-CO-GonzaloNeural"),
    ("d1-line7", "Tienes razón. Voy a contar cómo yo misma abandoné la universidad y después volví para cambiar el sistema desde adentro.", "es-CO-SalomeNeural"),
    ("d1-line8", "Perfecto. Eso establece credibilidad y genera empatía al mismo tiempo. ¿Y tu cierre?", "es-CO-GonzaloNeural"),
    ("d1-line9", 'Hago un llamado a la acción: "No podemos esperar a que el sistema cambie. Somos nosotros el cambio."', "es-CO-SalomeNeural"),
    ("d1-line10", 'Me encanta, pero prueba con una anáfora para el final: "Somos el cambio en las aulas. Somos el cambio en las calles. Somos el cambio que nuestros hijos merecen."', "es-CO-GonzaloNeural"),
    ("d1-line11", "¡Eso es increíble! La repetición le da un ritmo que se queda en la mente.", "es-CO-SalomeNeural"),
    ("d1-line12", 'Y una cosa más: no olvides las pausas. Después de cada "somos el cambio", cuenta dos segundos. El silencio es tu mejor aliado.', "es-CO-GonzaloNeural"),
    ("d1-line13", "Gracias, Carlos. La oratoria realmente es un arte. Me siento mucho más preparada.", "es-CO-SalomeNeural"),
    ("d1-line14", "Lo vas a hacer genial. Recuerda: conéctate con el público, no con tus notas. La autenticidad es la técnica más poderosa.", "es-CO-GonzaloNeural"),
    ("d1-line15", "Como les decía al principio... no, espera, eso es para mañana. ¡Practiquemos una vez más!", "es-CO-SalomeNeural"),
    # Dialogue 2: Political Speech Workshop — Santiago (es-CL voices)
    ("d2-line1", "Hoy analizaremos las técnicas retóricas de los grandes discursos latinoamericanos. Comencemos con José Martí.", "es-CL-LorenzoNeural"),
    ("d2-line2", '"La patria es dicha de todos, y dolor de todos." Es una antítesis perfecta: dicha contra dolor.', "es-CL-CatalinaNeural"),
    ("d2-line3", 'Exacto. Y la repetición de "de todos" crea un paralelismo que refuerza la idea de universalidad. Martí era un maestro.', "es-CL-LorenzoNeural"),
    ("d2-line4", "¿Y Eva Perón? Su discurso del renunciamiento es legendario por su carga emocional.", "es-CL-LorenzoNeural"),
    ("d2-line5", 'Eva Perón dominaba el pathos como nadie. Apelaba directamente a las emociones del pueblo: "Yo no soy más que una humilde mujer."', "es-CL-LorenzoNeural"),
    ("d2-line6", "Eso es fascinante. Usaba la humildad como arma retórica para generar identificación con su público.", "es-CL-CatalinaNeural"),
    ("d2-line7", '"Correcto. Y "El pueblo unido jamás será vencido" — ¿qué técnica retórica tiene?', "es-CL-LorenzoNeural"),
    ("d2-line8", 'Es una afirmación absoluta con ritmo musical. El "jamás será vencido" es un clímax emocional.', "es-CL-LorenzoNeural"),
    ("d2-line9", "Y el hecho de que se repita en coro lo convierte en un acto de retórica colectiva. El público no escucha; participa.", "es-CL-LorenzoNeural"),
    ("d2-line10", '¿Y el discurso Nobel de García Márquez? "La soledad de América Latina" es magistral.', "es-CL-CatalinaNeural"),
    ("d2-line11", "García Márquez usó la narración como herramienta retórica. En vez de datos, contó historias de América Latina para convencer a Europa de su realidad.", "es-CL-LorenzoNeural"),
    ("d2-line12", "Entonces, ¿la narrativa puede ser más persuasiva que los argumentos lógicos?", "es-CL-LorenzoNeural"),
    ("d2-line13", "A menudo sí. Las historias activan la empatía. Un dato se olvida; una historia se recuerda. Por eso los mejores oradores combinan logos con pathos.", "es-CL-LorenzoNeural"),
    ("d2-line14", "Me inspira saber que la oratoria no es solo para políticos. Todos podemos aprender a comunicar con impacto.", "es-CL-CatalinaNeural"),
    ("d2-line15", "Exacto. La oratoria es el arte de mover conciencias con la palabra. Y ese arte, como todos, se practica.", "es-CL-LorenzoNeural"),
    ("d2-line16", '"Como dijo Neruda: "Yo no vengo a llorar; aquí vengo a encender mi sangre." Eso es retórica pura.', "es-CL-LorenzoNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L6.8...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
