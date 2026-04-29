"""Generate all audio files for L4.4 News & Current Events using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L4.4\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Media Vocabulary
    ("el-periodico", "El periódico"),
    ("las-noticias", "Las noticias"),
    ("el-reportaje", "El reportaje"),
    ("el-noticiero", "El noticiero"),
    ("la-prensa", "La prensa"),
    ("el-titular", "El titular"),
    ("la-revista", "La revista"),
    ("el-periodista", "El periodista"),
    ("la-entrevista", "La entrevista"),
    ("la-cadena-de-television", "La cadena de televisión"),
    # Headlines
    ("aumentan-los-precios", "Aumentan los precios de alimentos en todo el país"),
    ("cientificos-descubren", "Científicos descubren nueva especie en el Amazonas"),
    ("gobierno-anuncia-plan", "Gobierno anuncia plan de energía renovable"),
    ("miles-protestan", "Miles de personas protestan en la capital"),
    ("seleccion-clasifica", "Selección nacional clasifica al mundial"),
    ("terremoto-sacude", "Terremoto de magnitud seis sacude la costa"),
    ("presidente-firma", "Presidente firma acuerdo comercial histórico"),
    ("estudiantes-exigen", "Estudiantes exigen cambios en el sistema educativo"),
    # Opinions
    ("creo-que-es-buena", "Creo que es una buena noticia"),
    ("en-mi-opinion", "En mi opinión, necesitamos más información"),
    ("estoy-de-acuerdo", "Estoy de acuerdo con el artículo"),
    ("no-estoy-de-acuerdo", "No estoy de acuerdo con eso"),
    ("me-parece-exagerado", "Me parece que es exagerado"),
    ("es-importante-que-sepa", "Es importante que la gente sepa esto"),
    ("no-me-sorprende", "No me sorprende esta noticia"),
    ("pienso-que-debe-actuar", "Pienso que el gobierno debe actuar"),
    ("para-mi-problema-serio", "Para mí, eso es un problema serio"),
    ("me-preocupa-situacion", "Me preocupa mucho esta situación"),
    # Reporting
    ("segun-el-periodico", "Según el periódico, hubo un accidente"),
    ("informaron-que", "Informaron que el presidente viajó ayer"),
    ("se-reporto-terremoto", "Se reportó un terremoto en Chile"),
    ("autoridades-confirmaron", "Las autoridades confirmaron la noticia"),
    ("de-acuerdo-con-fuentes", "De acuerdo con fuentes oficiales"),
    ("el-corresponsal-dijo", "El corresponsal dijo que la situación es grave"),
    ("se-espera-mejore", "Se espera que mejore la economía"),
    ("fuentes-indicaron", "Fuentes cercanas indicaron que hay cambios"),
    ("articulo-menciona", "El artículo menciona tres puntos clave"),
    ("noticia-publicada", "La noticia fue publicada esta mañana"),
]

DIALOGUE_LINES = [
    # D1: Mexico City (Mexican voices)
    ("d1-line1", "¿Ya leíste las noticias de hoy? ¡Hay un titular increíble!", "es-MX-DaliaNeural"),
    ("d1-line2", "No, todavía no. ¿Qué pasó?", "es-MX-JorgeNeural"),
    ("d1-line3", "Según el periódico, descubrieron una nueva especie de rana en Chiapas.", "es-MX-DaliaNeural"),
    ("d1-line4", "¿En serio? Creo que eso es muy importante para la biodiversidad.", "es-MX-JorgeNeural"),
    ("d1-line5", "Estoy de acuerdo. También informaron que aumentaron los precios de la gasolina.", "es-MX-DaliaNeural"),
    ("d1-line6", "¡Otra vez! En mi opinión, el gobierno debe hacer algo.", "es-MX-JorgeNeural"),
    ("d1-line7", "Pienso lo mismo. ¿Viste el noticiero anoche?", "es-MX-DaliaNeural"),
    ("d1-line8", "Sí, el reportaje sobre la educación fue muy interesante.", "es-MX-JorgeNeural"),
    ("d1-line9", "Me preocupa mucho esa situación. Es importante que la gente sepa.", "es-MX-DaliaNeural"),
    # D2: Buenos Aires (Argentine voices)
    ("d2-line1", "¿Leíste el artículo sobre el acuerdo comercial?", "es-AR-ElenaNeural"),
    ("d2-line2", "Sí, lo leí en la revista. Me parece que es positivo para la economía.", "es-AR-TomasNeural"),
    ("d2-line3", "No estoy de acuerdo. Creo que va a afectar a las pequeñas empresas.", "es-AR-ElenaNeural"),
    ("d2-line4", "Según fuentes oficiales, va a crear más empleos.", "es-AR-TomasNeural"),
    ("d2-line5", "Pero el corresponsal del periódico dijo que hay riesgos.", "es-AR-ElenaNeural"),
    ("d2-line6", "Es verdad. Para mí, necesitamos más información antes de opinar.", "es-AR-TomasNeural"),
    ("d2-line7", "En eso sí estoy de acuerdo. Es mejor esperar el reportaje completo.", "es-AR-ElenaNeural"),
    ("d2-line8", "Exacto. No creo que sea bueno sacar conclusiones rápidas.", "es-AR-TomasNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L4.4 News & Current Events...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
