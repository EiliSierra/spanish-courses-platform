"""Generate all audio files for L4.7 Arts & Entertainment using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L4.7\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Music
    ("la-cancion", "La canción"),
    ("el-cantante", "El cantante"),
    ("la-banda", "La banda"),
    ("el-concierto", "El concierto"),
    ("la-letra-de-la-cancion", "La letra de la canción"),
    ("que-musica-te-gusta", "¿Qué música te gusta?"),
    ("me-encanta-el-reggaeton", "Me encanta el reggaetón"),
    ("escucho-salsa-cuando-cocino", "Escucho salsa cuando cocino"),
    ("de-nino-escuchaba-cumbia", "De niño escuchaba cumbia"),
    ("fui-a-un-concierto-increible", "Fui a un concierto increíble"),
    # Movies & TV
    ("la-pelicula", "La película"),
    ("la-serie", "La serie"),
    ("el-documental", "El documental"),
    ("la-comedia", "La comedia"),
    ("el-drama", "El drama"),
    ("la-pelicula-de-terror", "La película de terror"),
    ("viste-la-nueva-serie", "¿Viste la nueva serie?"),
    ("tiene-buenas-actuaciones", "Tiene muy buenas actuaciones"),
    ("el-final-me-sorprendio", "El final me sorprendió"),
    ("me-gustaban-las-telenovelas", "Me gustaban las telenovelas de niña"),
    # Books & Theater
    ("el-libro", "El libro"),
    ("la-novela", "La novela"),
    ("el-cuento", "El cuento"),
    ("la-obra-de-teatro", "La obra de teatro"),
    ("el-museo", "El museo"),
    ("la-exposicion-de-arte", "La exposición de arte"),
    ("estoy-leyendo-una-novela", "Estoy leyendo una novela fantástica"),
    ("fuimos-al-teatro-el-sabado", "Fuimos al teatro el sábado"),
    # Reviews & Opinions
    ("es-una-obra-maestra", "Es una obra maestra"),
    ("la-recomiendo-mucho", "La recomiendo mucho"),
    ("no-me-gusto-para-nada", "No me gustó para nada"),
    ("la-trama-es-muy-interesante", "La trama es muy interesante"),
    ("me-parecio-aburrida", "Me pareció aburrida"),
    ("tiene-un-ritmo-increible", "Tiene un ritmo increíble"),
    ("que-opinas-de-esta-pelicula", "¿Qué opinas de esta película?"),
    ("a-mi-me-encanto-pero-a-ti-no", "A mí me encantó, pero a ti no"),
    ("es-la-mejor-pelicula-del-ano", "Es la mejor película del año"),
    ("le-doy-cinco-estrellas", "Le doy cinco estrellas"),
]

DIALOGUE_LINES = [
    # D1: Recommending music — Medellín (Colombian voices)
    ("d1-line1", "¿Has escuchado la nueva canción de Karol G?", "es-CO-SalomeNeural"),
    ("d1-line2", "No todavía. ¿De qué género es?", "es-CO-GonzaloNeural"),
    ("d1-line3", "Es reggaetón pero con un poco de pop. La letra es muy bonita.", "es-CO-SalomeNeural"),
    ("d1-line4", "A mí me gusta más el rock en español. De niño escuchaba mucho Soda Stereo.", "es-CO-GonzaloNeural"),
    ("d1-line5", "¡Soda Stereo es clásico! Pero tienes que escuchar esta canción. Tiene un ritmo increíble.", "es-CO-SalomeNeural"),
    ("d1-line6", "Bueno, la voy a escuchar esta noche. ¿La encontré en Spotify?", "es-CO-GonzaloNeural"),
    ("d1-line7", "Sí, y también hay un video en YouTube. Fui a su concierto el mes pasado. ¡Fue increíble!", "es-CO-SalomeNeural"),
    ("d1-line8", "¿En serio? Yo quiero ir al próximo concierto. ¿Cuánto costaron las entradas?", "es-CO-GonzaloNeural"),
    ("d1-line9", "Costaron ciento cincuenta mil pesos, pero valió la pena. Te la recomiendo mucho.", "es-CO-SalomeNeural"),
    # D2: Debating a movie — Ciudad de México (Mexican voices)
    ("d2-line1", "¿Viste la película nueva de Guillermo del Toro?", "es-MX-JorgeNeural"),
    ("d2-line2", "Sí, la vi el fin de semana. A mí me encantó. Las actuaciones son increíbles.", "es-MX-DaliaNeural"),
    ("d2-line3", "A mí no me gustó mucho. Me pareció muy lenta. La trama no avanza.", "es-MX-JorgeNeural"),
    ("d2-line4", "¿Lenta? ¡Pero es un drama! No todo tiene que ser acción. El final me sorprendió.", "es-MX-DaliaNeural"),
    ("d2-line5", "Bueno, la fotografía es hermosa. Eso sí lo reconozco. Pero yo le doy dos estrellas.", "es-MX-JorgeNeural"),
    ("d2-line6", "¿Dos estrellas? ¡Yo le doy cinco! Es la mejor película del año, sin duda.", "es-MX-DaliaNeural"),
    ("d2-line7", "Prefiero la comedia que vimos la semana pasada. Me hizo reír mucho.", "es-MX-JorgeNeural"),
    ("d2-line8", "Esa también estuvo buena. ¿Y si la próxima vez vemos un documental?", "es-MX-DaliaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L4.7 Arts & Entertainment...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
