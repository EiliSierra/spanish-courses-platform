"""Generate all audio files for L3.5 Sports & Hobbies using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L3.5\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Sports
    ("juego-al-futbol", "Juego al fútbol los sábados"),
    ("me-gusta-nadar", "Me gusta nadar en la piscina"),
    ("corro-en-el-parque", "Corro en el parque todas las mañanas"),
    ("practico-baloncesto", "Practico baloncesto con mis amigos"),
    ("mi-equipo-gano", "Mi equipo ganó el partido"),
    ("el-tenis-es-mi-deporte", "El tenis es mi deporte favorito"),
    ("vamos-a-jugar-beisbol", "Vamos a jugar al béisbol"),
    ("monto-bicicleta", "Monto bicicleta los domingos"),
    ("hago-yoga", "Hago yoga por la mañana"),
    ("levanto-pesas", "Levanto pesas en el gimnasio"),
    # Hobbies
    ("leo-libros", "Leo libros antes de dormir"),
    ("toco-la-guitarra", "Toco la guitarra desde niño"),
    ("pinto-cuadros", "Pinto cuadros los fines de semana"),
    ("cocino-recetas-nuevas", "Cocino recetas nuevas cada semana"),
    ("me-encanta-ver-peliculas", "Me encanta ver películas de acción"),
    ("juego-videojuegos", "Juego videojuegos con mis hermanos"),
    ("bailo-salsa", "Bailo salsa todos los viernes"),
    ("hago-senderismo", "Hago senderismo en las montañas"),
    ("escribo-poesia", "Escribo poesía en mi tiempo libre"),
    ("tomo-fotografias", "Tomo fotografías cuando viajo"),
    # Frequency
    ("todos-los-dias", "Todos los días"),
    ("dos-veces-a-la-semana", "Dos veces a la semana"),
    ("los-fines-de-semana", "Los fines de semana"),
    ("una-vez-al-mes", "Una vez al mes"),
    ("casi-nunca", "Casi nunca"),
    ("de-vez-en-cuando", "De vez en cuando"),
    ("siempre-que-puedo", "Siempre que puedo"),
    ("a-menudo", "A menudo"),
    # Opinions
    ("me-gusta-mucho-el-futbol", "Me gusta mucho el fútbol"),
    ("me-encanta-bailar", "Me encanta bailar"),
    ("prefiero-leer", "Prefiero leer que ver televisión"),
    ("no-me-gusta-correr", "No me gusta correr cuando llueve"),
    ("me-fascina-la-fotografia", "Me fascina la fotografía"),
    ("me-encanta-jugar-en-equipo", "Me encanta jugar en equipo"),
    ("prefiero-deportes-aire-libre", "Prefiero deportes al aire libre"),
    ("me-aburre-ver-deportes", "Me aburre ver deportes en la tele"),
    ("me-interesa-surfear", "Me interesa aprender a surfear"),
    ("me-divierte-la-escalada", "Me divierte mucho la escalada"),
]

DIALOGUE_LINES = [
    # D1: Buenos Aires (Argentine voices)
    ("d1-line1", "¿Qué hacés los fines de semana?", "es-AR-TomasNeural"),
    ("d1-line2", "Juego al fútbol con un equipo mixto los sábados. ¿Y vos?", "es-AR-ElenaNeural"),
    ("d1-line3", "Yo hago yoga por la mañana y después corro en el parque.", "es-AR-TomasNeural"),
    ("d1-line4", "¡Qué activo! ¿Corrés todos los días?", "es-AR-ElenaNeural"),
    ("d1-line5", "No, tres veces a la semana. Los domingos monto bicicleta.", "es-AR-TomasNeural"),
    ("d1-line6", "A mí me encanta el ciclismo también. ¿Vamos a andar juntos algún día?", "es-AR-ElenaNeural"),
    ("d1-line7", "¡Dale! El próximo domingo a las nueve.", "es-AR-TomasNeural"),
    ("d1-line8", "Perfecto. Después podemos tomar un café.", "es-AR-ElenaNeural"),
    # D2: Medellín (Colombian voices)
    ("d2-line1", "¿Tienes algún pasatiempo nuevo?", "es-CO-SalomeNeural"),
    ("d2-line2", "Sí, empecé clases de salsa hace un mes. ¡Me encanta!", "es-CO-GonzaloNeural"),
    ("d2-line3", "¡Qué chévere! Yo bailo salsa desde niña. Es mi pasión.", "es-CO-SalomeNeural"),
    ("d2-line4", "¿De verdad? ¿Y qué más te gusta hacer en tu tiempo libre?", "es-CO-GonzaloNeural"),
    ("d2-line5", "Leo mucho — dos libros al mes. Y pinto cuadros los domingos.", "es-CO-SalomeNeural"),
    ("d2-line6", "Yo prefiero actividades al aire libre. Hago senderismo de vez en cuando.", "es-CO-GonzaloNeural"),
    ("d2-line7", "A mí también me interesa el senderismo. ¿Conóces senderos cerca de aquí?", "es-CO-SalomeNeural"),
    ("d2-line8", "¡Claro! Hay uno increíble en las montañas. Vamos el próximo fin de semana.", "es-CO-GonzaloNeural"),
    ("d2-line9", "¡Listo! Llevo mi cámara para tomar fotos del paisaje.", "es-CO-SalomeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L3.5 Sports & Hobbies...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
