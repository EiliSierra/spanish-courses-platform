"""Generate all audio files for L5.8 Nuance, Tone & Register using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L5.8\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Softeners & Hedging (12)
    ("tal-vez-deberiamos", "Tal vez deberíamos reconsiderarlo"),
    ("quizas-no-sea", "Quizás no sea el mejor momento"),
    ("es-posible-que-haya", "Es posible que haya un malentendido"),
    ("me-parece-que-podriamos", "Me parece que podríamos intentar otra cosa"),
    ("diria-que-es-arriesgado", "Diría que es un poco arriesgado"),
    ("no-estoy-del-todo-seguro", "No estoy del todo seguro, pero creo que sí"),
    ("a-lo-mejor-tiene-razon", "A lo mejor tiene razón"),
    ("puede-que-me-equivoque", "Puede que me equivoque"),
    ("en-cierto-modo-tienes", "En cierto modo, tienes un punto"),
    ("hasta-cierto-punto", "Hasta cierto punto, estoy de acuerdo"),
    ("por-lo-que-tengo-entendido", "Por lo que tengo entendido, así es"),
    ("si-no-me-equivoco", "Si no me equivoco, ya lo mencionaron"),
    # Euphemisms & Politeness (12)
    ("paso-a-mejor-vida", "Pasó a mejor vida"),
    ("situacion-delicada", "Está en una situación delicada"),
    ("no-es-mi-fuerte", "No es mi fuerte"),
    ("le-importaria-repetirlo", "¿Le importaría repetirlo?"),
    ("disculpe-la-molestia", "Disculpe la molestia"),
    ("esta-entre-trabajos", "Está entre trabajos"),
    ("no-se-si-sera-el-momento", "No sé si será el momento adecuado"),
    ("le-agradeceria-enormemente", "Le agradecería enormemente su ayuda"),
    ("tiene-cierta-edad", "Tiene cierta edad"),
    ("no-me-es-posible", "No me es posible en este momento"),
    ("pasado-de-copas", "Está un poco pasado de copas"),
    ("con-todo-respeto", "Con todo respeto, no comparto esa opinión"),
    # Irony & Humor (12)
    ("que-bien-ironia", "¡Qué bien!"),
    ("no-me-digas", "¡No me digas!"),
    ("faltaba-mas", "¡Faltaba más!"),
    ("menos-mal", "¡Menos mal!"),
    ("vaya-vaya", "¡Vaya, vaya!"),
    ("ni-modo", "Ni modo"),
    ("anda-ya", "¡Anda ya!"),
    ("ya-era-hora", "¡Ya era hora!"),
    ("tu-crees-esceptico", "¿Tú crees?"),
    ("que-casualidad", "¡Qué casualidad!"),
    ("si-como-no", "Sí, cómo no"),
    ("que-sorpresa-ironico", "¡Qué sorpresa!"),
    # Regional Variation (12)
    ("orale-mexico", "¡Órale!"),
    ("que-padre-mexico", "¡Qué padre!"),
    ("esta-chido-mexico", "¡Está bien chido!"),
    ("neta-no-lo-sabia", "Neta, no lo sabía"),
    ("re-copado-argentina", "¡Re copado!"),
    ("boludo-argentina", "¡Ey, boludo!"),
    ("posta-argentina", "Posta que es genial"),
    ("no-bardees-argentina", "No me bardees"),
    ("que-chimba-colombia", "¡Qué chimba!"),
    ("parce-colombia", "¡Ey, parce!"),
    ("que-bacano-colombia", "¡Qué bacano!"),
    ("marica-colombia", "¡Ey, marica!"),
]

DIALOGUE_LINES = [
    # D1: Friday Night Plans — Guadalajara, Mexico (Mexican voices)
    ("d1-line1", "¡Órale, güey! ¿Qué onda para esta noche?", "es-MX-DaliaNeural"),
    ("d1-line2", "Pues mira, hay un lugar bien chido en Chapultepec. ¿Jala?", "es-MX-JorgeNeural"),
    ("d1-line3", "¡Qué padre! ¿Y quién más va? No me digas que invitaste a Rodrigo...", "es-MX-DaliaNeural"),
    ("d1-line4", "Neta que no. Ese cuate siempre llega tardísimo.", "es-MX-JorgeNeural"),
    ("d1-line5", "¡Ya era hora de que alguien lo dijera! La última vez llegó a las once.", "es-MX-DaliaNeural"),
    ("d1-line6", "¡Sí, cómo no! \"Cinco minutitos\" dijo, y llegó dos horas después.", "es-MX-JorgeNeural"),
    ("d1-line7", "Ni modo. Bueno, ¿a qué hora nos vemos?", "es-MX-DaliaNeural"),
    ("d1-line8", "A las ocho. Y si llego tarde, ¡no me digas nada!", "es-MX-JorgeNeural"),
    ("d1-line9", "¡Anda ya! Tú eres peor que Rodrigo. Ahí nos vemos, chido.", "es-MX-DaliaNeural"),
    # D2: Office Feedback — Buenos Aires, Argentina (Argentine voices)
    ("d2-line1", "Che, Martín, ¿tenés un segundo? Quería hablar del informe.", "es-AR-ElenaNeural"),
    ("d2-line2", "Dale, decime. ¿Qué onda?", "es-AR-TomasNeural"),
    ("d2-line3", "Mirá, me parece que podríamos revisar la sección de costos. Hay un par de detalles.", "es-AR-ElenaNeural"),
    ("d2-line4", "¿Vos decís? Los revisé dos veces...", "es-AR-TomasNeural"),
    ("d2-line5", "Sí, puede que me equivoque, pero el total del tercer trimestre no me cierra.", "es-AR-ElenaNeural"),
    ("d2-line6", "A ver... ¡Posta! Tenés razón, puse el número del año pasado. ¡Qué boludo!", "es-AR-TomasNeural"),
    ("d2-line7", "¡Menos mal que lo revisamos! No pasa nada, le erramos todos.", "es-AR-ElenaNeural"),
    ("d2-line8", "Re copado que me dijiste. Si lo mandaba así, era un desastre.", "es-AR-TomasNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L5.8...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
