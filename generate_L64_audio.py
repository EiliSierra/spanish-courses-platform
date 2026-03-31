"""Generate all audio files for L6.4 Slang, Neologisms & Language Evolution using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L6.4\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Internet & Digital Slang (12)
    ("stalkeo-en-todas-mis-redes", "Me stalkeó en todas mis redes sociales"),
    ("voy-a-googlear-eso", "Voy a googlear eso ahora mismo"),
    ("tuiteo-una-foto-increible", "Ella tuiteó una foto increíble"),
    ("fans-shippean-dos-personajes", "Los fans shippean a esos dos personajes"),
    ("me-ghosteo-despues-de-tres-citas", "Me ghosteó después de tres citas"),
    ("no-lo-troleen", "No lo troleen, es un buen tipo"),
    ("streamear-el-partido-en-vivo", "Vamos a streamear el partido en vivo"),
    ("influencer-millones-seguidores", "Ese influencer tiene millones de seguidores"),
    ("pon-el-hashtag-tendencia", "Pon el hashtag para que sea tendencia"),
    ("meme-se-volvio-viral", "Ese meme se volvió viral en segundos"),
    ("video-viral-noche-manana", "El video se hizo viral de la noche a la mañana"),
    ("cancelaron-en-redes", "Lo cancelaron en redes por sus comentarios"),
    # Anglicisms & The Debate (12)
    ("departamento-marketing-campana", "El departamento de marketing lanzó la campaña"),
    ("mexico-mercadotecnia", "En México dicen mercadotecnia, no marketing"),
    ("necesito-feedback-proyecto", "Necesito tu feedback sobre el proyecto"),
    ("retroalimentacion-positiva", "La retroalimentación del cliente fue positiva"),
    ("mando-email-detalles", "Te mando un email con los detalles"),
    ("revisa-correo-electronico", "Revisa tu correo electrónico, por favor"),
    ("coche-en-el-parking", "Dejé el coche en el parking del centro"),
    ("busca-estacionamiento", "Busca estacionamiento cerca del teatro"),
    ("show-anoche-espectacular", "El show de anoche fue espectacular"),
    ("espectaculo-empieza-ocho", "El espectáculo empieza a las ocho"),
    ("puristas-anglicismos-destruyen", "Los puristas dicen que los anglicismos destruyen el español"),
    ("lengua-evoluciona-absorbe", "La lengua evoluciona y absorbe palabras de otros idiomas"),
    # Generational Shifts (12)
    ("literal-no-entiendo", "Es que literal no entiendo nada"),
    ("algo-muy-random", "Fue algo muy random lo que pasó"),
    ("que-cringe-fiesta", "¡Qué cringe lo que hizo en la fiesta!"),
    ("relacion-super-toxica", "Esa relación es súper tóxica"),
    ("me-ghosteo-sin-explicacion", "Me ghosteó sin explicación alguna"),
    ("no-cap-lo-mejor", "No cap, eso fue lo mejor del año"),
    ("de-hecho-nadie-dice-eso", "De hecho, ya nadie dice eso"),
    ("yo-tipo-que-pasa", "Y yo tipo... ¿qué está pasando aquí?"),
    ("o-sea-no-tiene-sentido", "O sea, no tiene ningún sentido"),
    ("abuelos-no-entienden", "Mis abuelos no entienden ni la mitad de lo que digo"),
    ("boomers-no-saben-basado", 'Los boomers no saben lo que es "basado"'),
    ("generacion-inventa-vocabulario", "Cada generación inventa su propio vocabulario"),
    # RAE Neologisms (12)
    ("mandame-un-wasap", "Mándame un wasap cuando llegues"),
    ("publico-tuit-polemico", "Publicó un tuit muy polémico ayer"),
    ("tomo-selfi-monumento", "Se tomó una selfi frente al monumento"),
    ("bitcoin-nuevo-record", "El bitcóin alcanzó un nuevo récord"),
    ("era-de-la-posverdad", "Vivimos en la era de la posverdad"),
    ("mando-emoji-corazon", "Me mandó un emoji de corazón"),
    ("escucho-podcast-mananas", "Escucho ese pódcast todas las mañanas"),
    ("empresa-usa-big-data", "La empresa usa big data para tomar decisiones"),
    ("archivos-en-la-nube", "Guardo todos mis archivos en la nube"),
    ("resiliencia-clave-tiempos", "La resiliencia es clave en tiempos difíciles"),
    ("empoderar-comunidades", "Hay que empoderar a las comunidades locales"),
    ("deconstruir-estereotipos", "La sociedad necesita deconstruir ciertos estereotipos"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Teens chatting — CDMX (es-MX voices)
    ("d1-line1", "Wey, ¿ya viste lo que tuiteó el profe de historia?", "es-MX-DaliaNeural"),
    ("d1-line2", "No mames, sí. Literal se hizo viral en dos horas. Ya tiene como diez mil likes.", "es-MX-JorgeNeural"),
    ("d1-line3", "Jaja, es que fue súper random. Tipo, ¿un profe tuiteando memes de historia?", "es-MX-DaliaNeural"),
    ("d1-line4", 'A mí me da cringe cuando los profes intentan hablar como nosotros. Tipo "hola, chavos, ¿qué onda?"', "es-MX-JorgeNeural"),
    ("d1-line5", "No, pero este profe sí es chistoso de verdad. No cap.", "es-MX-DaliaNeural"),
    ("d1-line6", "Oye, ¿stalkeaste el perfil del chavo nuevo? El que llegó esta semana.", "es-MX-JorgeNeural"),
    ("d1-line7", "Obvio. Tiene puro contenido de gaming. Streamea en Twitch y todo.", "es-MX-DaliaNeural"),
    ("d1-line8", "¿Neta? Qué cool. ¿Lo seguiste?", "es-MX-JorgeNeural"),
    ("d1-line9", "Sí, pero no quiero que piense que lo estoy stalkeando, o sea, solo es curiosidad.", "es-MX-DaliaNeural"),
    ("d1-line10", "Jaja, clásico. Oye, mándame un wasap con el link del meme del profe.", "es-MX-JorgeNeural"),
    ("d1-line11", "Sale, te lo mando. Y no lo compartas en el grupo de la clase, ¿eh? No lo vayan a cancelar.", "es-MX-DaliaNeural"),
    ("d1-line12", "Tranquila, no soy troll. Aunque, de hecho, sería muy chistoso...", "es-MX-JorgeNeural"),
    ("d1-line13", "¡Diego! No seas tóxico. El profe es buena onda.", "es-MX-DaliaNeural"),
    ("d1-line14", "Ya, ya, era broma. Tipo, relájate. Voy a googlear si tiene más contenido nada más.", "es-MX-JorgeNeural"),
    ("d1-line15", "Ok, pero literal no hagas nada raro. Nos vemos mañana.", "es-MX-DaliaNeural"),
    # Dialogue 2: RAE Linguist Interview — Madrid (es-ES voices)
    ("d2-line1", "Doctora Campos, la RAE acaba de aceptar varias palabras nuevas este año. ¿Cómo decide la Academia qué palabras incluir?", "es-ES-AlvaroNeural"),
    ("d2-line2", "Bueno, el criterio principal es el uso. Si una palabra se usa de manera extendida y estable en la comunidad hispanohablante, la RAE la registra. No inventamos la lengua; la documentamos.", "es-ES-ElviraNeural"),
    ("d2-line3", 'Pero hay mucha polémica. Muchos critican la inclusión de palabras como "selfi" o "wasap". Dicen que se está destruyendo el español.', "es-ES-AlvaroNeural"),
    ("d2-line4", 'Es un debate antiguo. Cuando se aceptó "fútbol" del inglés "football", hubo las mismas críticas. Y hoy nadie diría que "fútbol" no es una palabra española.', "es-ES-ElviraNeural"),
    ("d2-line5", '¿Y qué opina de los jóvenes que mezclan inglés y español constantemente? "Literal", "cringe", "random"...', "es-ES-AlvaroNeural"),
    ("d2-line6", "Las generaciones jóvenes siempre han innovado el lenguaje. Los abuelos de hoy usaban jerga que escandalizaba a sus padres. Es un ciclo natural.", "es-ES-ElviraNeural"),
    ("d2-line7", 'Algunos lingüistas dicen que el "Spanglish" es una amenaza. ¿Está de acuerdo?', "es-ES-AlvaroNeural"),
    ("d2-line8", "Para nada. El Spanglish es un fenómeno sociolingüístico fascinante, especialmente en Estados Unidos. No es una corrupción del español; es una creatividad bilingüe.", "es-ES-ElviraNeural"),
    ("d2-line9", "¿Cuál ha sido la palabra más polémica que la RAE ha aceptado recientemente?", "es-ES-AlvaroNeural"),
    ("d2-line10", 'Probablemente "posverdad". No por el origen de la palabra, sino por lo que implica sobre nuestra sociedad. Una palabra puede ser un espejo.', "es-ES-ElviraNeural"),
    ("d2-line11", "¿Algún consejo para los estudiantes de español que quieren sonar naturales?", "es-ES-AlvaroNeural"),
    ("d2-line12", "Que lean de todo: noticias, redes sociales, literatura. Que escuchen pódcasts y canciones. La lengua viva está en la calle, no solo en los libros de gramática.", "es-ES-ElviraNeural"),
    ("d2-line13", "¿Cree que en veinte años el español tendrá aún más anglicismos?", "es-ES-AlvaroNeural"),
    ("d2-line14", 'Sin duda. Pero también creo que el español influenciará más al inglés. Ya lo hace: "fiesta", "siesta", "aficionado". El intercambio es bidireccional.', "es-ES-ElviraNeural"),
    ("d2-line15", "Doctora Campos, muchas gracias por esta conversación tan enriquecedora.", "es-ES-AlvaroNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L6.4...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
