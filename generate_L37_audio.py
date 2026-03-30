"""Generate all audio files for L3.7 Celebrations & Traditions using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L3.7\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Celebrations
    ("la-fiesta-de-cumpleanos", "La fiesta de cumpleaños"),
    ("la-boda-fue-hermosa", "La boda fue hermosa"),
    ("la-quinceanera-de-mi-prima", "La quinceañera de mi prima"),
    ("celebramos-con-toda-la-familia", "Celebramos con toda la familia"),
    ("soplo-las-velas", "Sopló las velas del pastel"),
    ("bailamos-toda-la-noche", "Bailamos toda la noche"),
    ("abrio-los-regalos", "Abrió los regalos"),
    ("el-vals-de-la-quinceanera", "El vals de la quinceañera"),
    ("brindamos-por-los-novios", "Brindamos por los novios"),
    ("tiramos-confeti", "Tiramos confeti y serpentinas"),
    # Holidays
    ("feliz-navidad", "Feliz Navidad"),
    ("el-dia-de-muertos", "El Día de Muertos"),
    ("feliz-ano-nuevo", "Feliz Año Nuevo"),
    ("la-nochebuena-es-especial", "La Nochebuena es muy especial"),
    ("pusimos-un-altar", "Pusimos un altar de muertos"),
    ("comimos-doce-uvas", "Comimos doce uvas a medianoche"),
    ("la-semana-santa", "La Semana Santa en Guatemala"),
    ("el-dia-de-reyes", "El Día de los Reyes Magos"),
    ("celebramos-la-independencia", "Celebramos la Independencia"),
    ("fuimos-a-la-misa", "Fuimos a la misa de Nochebuena"),
    # Traditions
    ("rompimos-la-pinata", "Rompimos la piñata"),
    ("cantamos-villancicos", "Cantamos villancicos"),
    ("hicimos-un-brindis", "Hicimos un brindis"),
    ("las-posadas-duran", "Las posadas duran nueve días"),
    ("decoramos-con-papel-picado", "Decoramos con papel picado"),
    ("pusimos-flores-cempasuchil", "Pusimos flores de cempasúchil"),
    ("comimos-tamales", "Comimos tamales en Navidad"),
    ("quemamos-fuegos-artificiales", "Quemamos fuegos artificiales"),
    ("usamos-mascaras", "Usamos máscaras en el Carnaval"),
    ("preparamos-pan-de-muerto", "Preparamos pan de muerto"),
    # Greetings
    ("felicidades", "¡Felicidades!"),
    ("feliz-cumpleanos", "¡Feliz cumpleaños!"),
    ("que-lo-pases-bien", "¡Que lo pases muy bien!"),
    ("salud", "¡Salud!"),
    ("prospero-ano-nuevo", "¡Próspero Año Nuevo!"),
    ("enhorabuena-por-tu-boda", "¡Enhorabuena por tu boda!"),
    ("que-cumplas-muchos-mas", "¡Que cumplas muchos más!"),
    ("que-vivan-los-novios", "¡Que vivan los novios!"),
]

DIALOGUE_LINES = [
    # D1: Quinceañera — Ciudad de México (Mexican voices)
    ("d1-line1", "¡Hola! ¿Fuiste a la quinceañera de Valentina?", "es-MX-DaliaNeural"),
    ("d1-line2", "¡Sí! Fue increíble. Bailamos toda la noche.", "es-MX-JorgeNeural"),
    ("d1-line3", "¿Cómo estuvo el vals?", "es-MX-DaliaNeural"),
    ("d1-line4", "Hermoso. Valentina bailó con su papá primero y después con sus chambelanes.", "es-MX-JorgeNeural"),
    ("d1-line5", "¿Rompieron la piñata?", "es-MX-DaliaNeural"),
    ("d1-line6", "¡Claro! Y también comimos un pastel enorme de tres pisos.", "es-MX-JorgeNeural"),
    ("d1-line7", "¿Le dieron regalos?", "es-MX-DaliaNeural"),
    ("d1-line8", "Sí, su abuela le dio un anillo de oro. Valentina lloró de la emoción.", "es-MX-JorgeNeural"),
    ("d1-line9", "¡Qué bonito! ¡Felicidades a Valentina!", "es-MX-DaliaNeural"),
    # D2: Día de Muertos — Oaxaca (Mexican voices, different pair)
    ("d2-line1", "¿Celebraste el Día de Muertos este año?", "es-MX-DaliaNeural"),
    ("d2-line2", "Sí, fuimos a Oaxaca con toda la familia.", "es-MX-JorgeNeural"),
    ("d2-line3", "¿Pusieron un altar de muertos?", "es-MX-DaliaNeural"),
    ("d2-line4", "Sí, pusimos fotos de mis abuelos, flores de cempasúchil y su comida favorita.", "es-MX-JorgeNeural"),
    ("d2-line5", "¿Fueron al panteón?", "es-MX-DaliaNeural"),
    ("d2-line6", "Sí, decoramos las tumbas con velas y flores. Fue muy emotivo.", "es-MX-JorgeNeural"),
    ("d2-line7", "¿Comieron algo especial?", "es-MX-DaliaNeural"),
    ("d2-line8", "Preparamos pan de muerto y chocolate caliente. También vimos las comparsas en el centro.", "es-MX-JorgeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L3.7 Celebrations & Traditions...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
