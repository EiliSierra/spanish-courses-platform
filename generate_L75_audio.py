"""Generate all audio files for L7.5 Psychology & Emotional Intelligence using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L7.5\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Emotional Vocabulary (12)
    ("la-angustia-me-invade", "La angustia me invade cuando pienso en el futuro"),
    ("la-resiliencia-es", "La resiliencia es la capacidad de recuperarse de la adversidad"),
    ("el-apego-inseguro", "El apego inseguro puede afectar nuestras relaciones adultas"),
    ("la-autoestima-se-construye", "La autoestima se construye a lo largo de toda la vida"),
    ("el-duelo-es-un-proceso", "El duelo es un proceso necesario para sanar emocionalmente"),
    ("la-ansiedad-se-manifiesta", "La ansiedad se manifiesta de formas muy diferentes en cada persona"),
    ("la-empatia-nos-permite", "La empatía nos permite ponernos en el lugar del otro"),
    ("el-desapego-saludable", "El desapego saludable permite amar sin depender emocionalmente"),
    ("la-vulnerabilidad-no-es", "La vulnerabilidad no es debilidad; es valentía emocional"),
    ("la-frustracion-surge", "La frustración surge cuando nuestras expectativas no se cumplen"),
    ("la-gratitud-transforma", "La gratitud transforma nuestra perspectiva sobre la vida"),
    ("la-culpa-no-resuelta", "La culpa no resuelta puede convertirse en un peso emocional crónico"),
    # Therapeutic Language (12)
    ("como-te-hace-sentir", "¿Cómo te hace sentir eso?"),
    ("parece-que-estas", "Parece que estás experimentando una gran carga emocional"),
    ("es-valido-sentirse", "Es válido sentirse así; no tienes que juzgarte por ello"),
    ("necesito-establecer-limites", "Necesito establecer límites para proteger mi bienestar emocional"),
    ("lo-que-sientes-es", "Lo que sientes es una respuesta natural a lo que has vivido"),
    ("a-veces-necesitamos", "A veces necesitamos pedir ayuda, y eso no nos hace débiles"),
    ("vamos-a-explorar", "Vamos a explorar juntos de dónde viene esa emoción"),
    ("el-autocuidado-no-es", "El autocuidado no es egoísmo; es una necesidad fundamental"),
    ("reconocer-nuestras-heridas", "Reconocer nuestras heridas es el primer paso para sanarlas"),
    ("que-necesitas-en-este", "¿Qué necesitas en este momento para sentirte mejor?"),
    ("tu-proceso-de-sanacion", "Tu proceso de sanación es único y tiene su propio ritmo"),
    ("no-tienes-que-tener", "No tienes que tener todas las respuestas ahora mismo"),
    # Interpersonal Skills (12)
    ("la-escucha-activa", "La escucha activa implica prestar atención sin interrumpir ni juzgar"),
    ("la-comunicacion-asertiva", "La comunicación asertiva expresa necesidades con claridad y respeto"),
    ("la-inteligencia-emocional", "La inteligencia emocional es la capacidad de gestionar nuestras emociones"),
    ("el-manejo-de-conflictos", "El manejo de conflictos requiere paciencia y voluntad de compromiso"),
    ("la-retroalimentacion", "La retroalimentación constructiva ayuda a crecer sin herir"),
    ("validar-las-emociones", "Validar las emociones del otro no significa estar de acuerdo"),
    ("la-empatia-cognitiva", "La empatía cognitiva y la empatía emocional son complementarias"),
    ("poner-limites-saludables", "Poner límites saludables fortalece las relaciones, no las destruye"),
    ("la-resolucion-de-conflictos", "La resolución de conflictos empieza por reconocer la perspectiva del otro"),
    ("la-comunicacion-no-violenta", "La comunicación no violenta transforma la forma en que nos relacionamos"),
    ("saber-decir-no", "Saber decir \"no\" con firmeza y amabilidad es una habilidad esencial"),
    ("la-negociacion-emocional", "La negociación emocional busca que ambas partes se sientan escuchadas"),
    # Self-Reflection (12)
    ("me-doy-cuenta-de-que", "Me doy cuenta de que mis reacciones reflejan mis heridas internas"),
    ("he-aprendido-a-reconocer", "He aprendido a reconocer mis patrones emocionales destructivos"),
    ("necesito-trabajar-en", "Necesito trabajar en mi tendencia a evitar los conflictos"),
    ("me-cuesta-aceptar-que", "Me cuesta aceptar que no puedo controlar todo lo que sucede"),
    ("estoy-aprendiendo-a-ser", "Estoy aprendiendo a ser compasivo conmigo mismo"),
    ("reconozco-que-mi-miedo", "Reconozco que mi miedo al rechazo influye en mis decisiones"),
    ("he-descubierto-que", "He descubierto que mi fortaleza nace de mis momentos más difíciles"),
    ("me-comprometo-a-escucharme", "Me comprometo a escucharme con la misma paciencia que ofrezco a otros"),
    ("aceptar-mi-imperfeccion", "Aceptar mi imperfección me libera de la presión de ser perfecto"),
    ("cada-dia-es-una-oportunidad", "Cada día es una oportunidad para elegir cómo respondo ante la vida"),
    ("la-introspeccion-me-ayuda", "La introspección me ayuda a entender por qué actúo como actúo"),
    ("soltar-el-control", "Soltar el control ha sido uno de los aprendizajes más difíciles de mi vida"),
]

DIALOGUE_LINES = [
    # D1: Therapy Session — Barcelona (Spanish voices)
    ("d1-line1", "Bienvenida, Lucía. ¿Cómo te ha ido esta semana?", "es-ES-ElviraNeural"),
    ("d1-line2", "Ha sido difícil. Tuve una discusión fuerte con mi madre y no he podido dejar de pensar en ello.", "es-ES-ElviraNeural"),
    ("d1-line3", "¿Cómo te hace sentir eso? ¿Puedes ponerle nombre a la emoción?", "es-ES-ElviraNeural"),
    ("d1-line4", "Siento una mezcla de angustia y culpa. Angustia porque sé que la relación se deteriora, y culpa porque quizás fui demasiado dura.", "es-ES-ElviraNeural"),
    ("d1-line5", "Es válido sentirse así. La angustia y la culpa a menudo coexisten en las relaciones familiares. No tienes que juzgarte por ello.", "es-ES-ElviraNeural"),
    ("d1-line6", "Pero me cuesta aceptar que no puedo controlar cómo reacciona ella. Siempre intento arreglar las cosas y termino exhausta.", "es-ES-ElviraNeural"),
    ("d1-line7", "Ahí hay un patrón interesante. ¿Te doy cuenta de que asumes la responsabilidad emocional de la relación entera?", "es-ES-ElviraNeural"),
    ("d1-line8", "Sí... He aprendido a reconocer ese patrón, pero romperlo es otra cosa. Es como si mi autoestima dependiera de que ella esté bien.", "es-ES-ElviraNeural"),
    ("d1-line9", "Eso se relaciona con el apego. Cuando crecemos sintiendo que debemos cuidar emocionalmente a nuestros padres, desarrollamos un apego ansioso.", "es-ES-ElviraNeural"),
    ("d1-line10", "Entonces, ¿necesito trabajar en mi tendencia a evitar los conflictos poniéndome en el papel de mediadora?", "es-ES-ElviraNeural"),
    ("d1-line11", "Exactamente. Y también en establecer límites. Puedes amar a tu madre y al mismo tiempo proteger tu bienestar emocional.", "es-ES-ElviraNeural"),
    ("d1-line12", "Me da miedo que poner límites signifique perderla.", "es-ES-ElviraNeural"),
    ("d1-line13", "La vulnerabilidad de expresar tus límites no es debilidad, Lucía. Es valentía emocional. Y los límites saludables fortalecen las relaciones, no las destruyen.", "es-ES-ElviraNeural"),
    ("d1-line14", "Tiene razón. Estoy aprendiendo a ser compasiva conmigo misma, pero es un proceso lento.", "es-ES-ElviraNeural"),
    ("d1-line15", "Tu proceso de sanación es único y tiene su propio ritmo. Lo importante es que estás aquí, haciendo el trabajo. Eso ya es resiliencia.", "es-ES-ElviraNeural"),
    ("d1-line16", "Gracias, doctora. Cada sesión me ayuda a entender un poco más por qué actúo como actúo.", "es-ES-ElviraNeural"),
    # D2: Emotional Support Group — Lima (varied voices)
    ("d2-line1", "Bienvenidos al grupo de apoyo emocional. Hoy hablaremos sobre la inteligencia emocional en nuestras relaciones. ¿Quién quiere comenzar?", "es-VE-PaolaNeural"),
    ("d2-line2", "Yo, por favor. He estado reflexionando sobre por qué siempre elijo parejas que me tratan mal. Me doy cuenta de que mis reacciones reflejan mis heridas internas.", "es-MX-JorgeNeural"),
    ("d2-line3", "Gracias por compartir eso, Marco. Reconocer esos patrones es enorme. ¿Cómo te sientes al decirlo en voz alta?", "es-VE-PaolaNeural"),
    ("d2-line4", "Vulnerable. Pero también aliviado. La introspección me ayuda a entender que no es casualidad.", "es-MX-JorgeNeural"),
    ("d2-line5", "Yo puedo relacionarme con eso. Mi terapeuta me dijo algo que cambió mi perspectiva: \"Lo que sientes es una respuesta natural a lo que has vivido.\"", "es-CO-SalomeNeural"),
    ("d2-line6", "Eso es la validación emocional. Y validar las emociones del otro no significa estar de acuerdo con todo; significa reconocer que su experiencia es real.", "es-VE-PaolaNeural"),
    ("d2-line7", "Yo estoy trabajando en la comunicación asertiva. Antes, o explotaba o me callaba todo. No había punto medio.", "es-CL-LorenzoNeural"),
    ("d2-line8", "La comunicación asertiva es exactamente ese punto medio: expresar lo que necesitas con claridad y respeto, sin agredir ni someterte.", "es-VE-PaolaNeural"),
    ("d2-line9", "A mí me cuesta mucho la escucha activa. Mientras la otra persona habla, ya estoy preparando mi respuesta en vez de realmente escuchar.", "es-MX-JorgeNeural"),
    ("d2-line10", "A veces necesitamos pedir ayuda, y eso no nos hace débiles. Yo tardé años en venir a este grupo, pero ha sido transformador.", "es-CO-SalomeNeural"),
    ("d2-line11", "Exacto. El autocuidado no es egoísmo; es una necesidad fundamental. No podemos cuidar a otros si no nos cuidamos primero.", "es-VE-PaolaNeural"),
    ("d2-line12", "He descubierto que mi fortaleza nace de mis momentos más difíciles. Cada crisis me ha enseñado algo sobre mí mismo.", "es-CL-LorenzoNeural"),
    ("d2-line13", "Eso es resiliencia pura. Y el hecho de que estén aquí, compartiendo y aprendiendo juntos, demuestra una enorme inteligencia emocional.", "es-VE-PaolaNeural"),
    ("d2-line14", "Me comprometo a escucharme con la misma paciencia que ofrezco a otros. Creo que es hora de tratarme como trataría a un amigo.", "es-MX-JorgeNeural"),
    ("d2-line15", "Cada día es una oportunidad para elegir cómo respondemos ante la vida. Hoy elijo la compasión.", "es-CO-SalomeNeural"),
    ("d2-line16", "Hermosas palabras para cerrar. Recuerden: aceptar nuestra imperfección nos libera de la presión de ser perfectos. Nos vemos la próxima semana.", "es-VE-PaolaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L7.5...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
