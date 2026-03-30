"""Generate all audio files for L4.1 Imperfect Tense using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L4.1\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Regular -AR Imperfect
    ("hablaba-mucho", "Yo hablaba mucho de niño"),
    ("caminaba-al-colegio", "Caminaba al colegio todos los días"),
    ("jugaba-con-amigos", "Jugaba con mis amigos en el parque"),
    ("abuela-cocinaba", "Mi abuela cocinaba los domingos"),
    ("estudiabamos-juntos", "Estudiábamos juntos después de clases"),
    ("papa-trabajaba", "Mi papá trabajaba en una fábrica"),
    ("cantabas-coro", "¿Cantabas en el coro de la escuela?"),
    ("hermanos-peleaban", "Mis hermanos peleaban todo el tiempo"),
    ("dibujaba-bien", "Ella dibujaba muy bien"),
    ("tomabamos-helado", "Tomábamos helado en verano"),
    # Regular -ER/-IR Imperfect
    ("comia-casa-abuela", "Comía en casa de mi abuela"),
    ("viviamos-pueblo", "Vivíamos en un pueblo pequeño"),
    ("tenia-perro", "Tenía un perro que se llamaba Max"),
    ("leia-cuentos", "Leía cuentos antes de dormir"),
    ("escribia-cartas", "Escribía cartas a mi prima"),
    ("querias-ser", "¿Qué querías ser de grande?"),
    ("dormian-luz", "Dormían con la luz encendida"),
    ("corriamos-campo", "Corríamos por el campo"),
    # Irregular Imperfect
    ("era-timido", "Era muy tímido de niño"),
    ("ciudad-era-tranquila", "Mi ciudad era más tranquila antes"),
    ("iba-playa", "Iba a la playa cada verano"),
    ("ibamos-mercado", "Íbamos al mercado los sábados"),
    ("veia-caricaturas", "Veía caricaturas por la mañana"),
    ("veiamos-estrellas", "Veíamos las estrellas desde el techo"),
    # Childhood / Habitual Past
    ("cuando-era-nino", "Cuando era niño, todo era diferente"),
    ("de-pequeno-trepar", "De pequeño, me gustaba trepar árboles"),
    ("siempre-llovia", "Siempre llovía en diciembre"),
    ("no-habia-internet", "No había internet en esa época"),
    ("antes-vida-sencilla", "Antes la vida era más sencilla"),
    ("veranos-abuelos", "Todos los veranos visitábamos a los abuelos"),
    ("mama-contaba", "Mi mamá me contaba historias"),
    ("sonaba-volar", "Mientras dormía, soñaba con volar"),
    ("no-existian-celulares", "En esos tiempos no existían los celulares"),
    ("escuela-dos-cuadras", "La escuela quedaba a dos cuadras"),
    ("hacia-calor-pueblo", "Hacía mucho calor en mi pueblo"),
    ("conociamos-barrio", "Nos conocíamos todos en el barrio"),
    ("cenabamos-familia", "Cada noche cenábamos en familia"),
    ("fines-semana-jugar", "Los fines de semana eran para jugar"),
]

DIALOGUE_LINES = [
    # D1: Oaxaca (Mexican voices)
    ("d1-line1", "¿Cómo era tu pueblo cuando eras niña?", "es-MX-JorgeNeural"),
    ("d1-line2", "Era muy pequeño y tranquilo. Nos conocíamos todos.", "es-MX-DaliaNeural"),
    ("d1-line3", "¿Qué hacías después de la escuela?", "es-MX-JorgeNeural"),
    ("d1-line4", "Jugaba con mis primos en la calle. Corríamos, trepábamos árboles...", "es-MX-DaliaNeural"),
    ("d1-line5", "¡Qué bonito! ¿Y tu abuela?", "es-MX-JorgeNeural"),
    ("d1-line6", "Mi abuela cocinaba mole los domingos. Toda la familia iba a su casa.", "es-MX-DaliaNeural"),
    ("d1-line7", "¿Veían televisión?", "es-MX-JorgeNeural"),
    ("d1-line8", "No teníamos televisión. Por la noche, veíamos las estrellas y mi abuelo contaba historias.", "es-MX-DaliaNeural"),
    ("d1-line9", "Suena mágico. La vida era más sencilla antes.", "es-MX-JorgeNeural"),
    # D2: Buenos Aires (Argentine voices)
    ("d2-line1", "¿Sabés? Antes yo era muy diferente.", "es-AR-TomasNeural"),
    ("d2-line2", "¿En serio? ¿Cómo eras?", "es-AR-ElenaNeural"),
    ("d2-line3", "Era tímido. No hablaba mucho y siempre leía libros solo.", "es-AR-TomasNeural"),
    ("d2-line4", "¡No te creo! Ahora hablás con todo el mundo.", "es-AR-ElenaNeural"),
    ("d2-line5", "Sí, cambié mucho. Antes no salía de mi casa. Ahora viajo todo el tiempo.", "es-AR-TomasNeural"),
    ("d2-line6", "Yo también era distinta. De chica no me gustaba cocinar.", "es-AR-ElenaNeural"),
    ("d2-line7", "¿Y ahora? ¡Cocinás increíble!", "es-AR-TomasNeural"),
    ("d2-line8", "Gracias. Mi mamá siempre cocinaba y yo la miraba. Supongo que aprendí sin darme cuenta.", "es-AR-ElenaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L4.1 Imperfect Tense...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
