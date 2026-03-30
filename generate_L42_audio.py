"""Generate all audio files for L4.2 Subjunctive Mood Introduction using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L4.2\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Wishes
    ("quiero-que-vengas", "Quiero que vengas a mi fiesta"),
    ("espero-que-estes-bien", "Espero que estés bien"),
    ("deseo-que-seas-feliz", "Deseo que seas feliz"),
    ("quiero-que-aprendas", "Quiero que aprendas español"),
    ("espero-que-tengas", "Espero que tengas un buen día"),
    ("ojala-que-llueva", "Ojalá que llueva mañana"),
    ("necesito-que-me-ayudes", "Necesito que me ayudes"),
    ("quiero-que-hables", "Quiero que hables con él"),
    ("espero-que-podamos", "Espero que podamos ir juntos"),
    ("deseo-que-todo-salga", "Deseo que todo salga bien"),
    # Recommendations
    ("es-importante-que-estudies", "Es importante que estudies"),
    ("te-sugiero-que-vayas", "Te sugiero que vayas al doctor"),
    ("es-mejor-que-comas", "Es mejor que comas frutas"),
    ("te-recomiendo-que-duermas", "Te recomiendo que duermas más"),
    ("es-necesario-que-practiques", "Es necesario que practiques"),
    ("te-aconsejo-que-ahorres", "Te aconsejo que ahorres dinero"),
    ("es-bueno-que-hagas", "Es bueno que hagas ejercicio"),
    ("sugiero-que-llames", "Sugiero que llames a tu mamá"),
    ("es-preferible-que-salgas", "Es preferible que salgas temprano"),
    ("te-pido-que-tengas", "Te pido que tengas paciencia"),
    # Emotions
    ("me-alegra-que-estes", "Me alegra que estés aquí"),
    ("me-preocupa-que-no-duermas", "Me preocupa que no duermas"),
    ("es-triste-que-se-vaya", "Es triste que se vaya"),
    ("me-molesta-que-llegues", "Me molesta que llegues tarde"),
    ("me-sorprende-que-hables", "Me sorprende que hables tan bien"),
    ("es-una-lastima-que-no-puedas", "Es una lástima que no puedas ir"),
    ("me-encanta-que-cocines", "Me encanta que cocines así"),
    ("tengo-miedo-de-que-se-pierda", "Tengo miedo de que se pierda"),
    ("me-frustra-que-no-entiendas", "Me frustra que no entiendas"),
    ("estoy-feliz-de-que-estemos", "Estoy feliz de que estemos juntos"),
    # Doubt
    ("dudo-que-llueva", "Dudo que llueva hoy"),
    ("no-creo-que-sea-verdad", "No creo que sea verdad"),
    ("es-posible-que-venga", "Es posible que venga mañana"),
    ("no-estoy-seguro-que-funcione", "No estoy seguro de que funcione"),
    ("es-probable-que-lleguen", "Es probable que lleguen tarde"),
    ("tal-vez-tenga-razon", "Tal vez tenga razón"),
    ("no-es-seguro-que-haya", "No es seguro que haya tiempo"),
    ("quizas-pueda-ayudarte", "Quizás pueda ayudarte"),
]

DIALOGUE_LINES = [
    # D1: Mexico City (Mexican voices)
    ("d1-line1", "Hijo, quiero que estudies para tu examen.", "es-MX-DaliaNeural"),
    ("d1-line2", "Sí, mamá. Ya estoy estudiando.", "es-MX-JorgeNeural"),
    ("d1-line3", "Es importante que duermas bien esta noche. No te desveles.", "es-MX-DaliaNeural"),
    ("d1-line4", "No te preocupes. Espero que el examen no sea muy difícil.", "es-MX-JorgeNeural"),
    ("d1-line5", "Te sugiero que repases los últimos tres capítulos.", "es-MX-DaliaNeural"),
    ("d1-line6", "Buena idea. ¿Quieres que te ayude con la cena primero?", "es-MX-JorgeNeural"),
    ("d1-line7", "Me alegra que me ofrezcas ayuda. Sí, necesito que cortes las verduras.", "es-MX-DaliaNeural"),
    ("d1-line8", "Claro. Ojalá que mañana todo salga bien.", "es-MX-JorgeNeural"),
    ("d1-line9", "Estoy segura de que vas a estar bien. ¡Tú puedes!", "es-MX-DaliaNeural"),
    # D2: Buenos Aires (Argentine voices)
    ("d2-line1", "Te recomiendo que vayas a Bariloche. ¡Es hermoso!", "es-AR-ElenaNeural"),
    ("d2-line2", "¿En serio? No creo que tenga suficiente dinero.", "es-AR-TomasNeural"),
    ("d2-line3", "Es posible que encuentres ofertas en internet. Te sugiero que busques ahora.", "es-AR-ElenaNeural"),
    ("d2-line4", "Me encanta que me ayudes con esto. ¿Cuándo es mejor ir?", "es-AR-TomasNeural"),
    ("d2-line5", "Es mejor que vayas en invierno si querés esquiar.", "es-AR-ElenaNeural"),
    ("d2-line6", "Espero que haya nieve. Dudo que pueda ir en julio, pero tal vez en agosto.", "es-AR-TomasNeural"),
    ("d2-line7", "Ojalá que puedas ir. Es importante que reserves el hotel con tiempo.", "es-AR-ElenaNeural"),
    ("d2-line8", "¡Gracias! Me alegra que conozcas tanto de viajes.", "es-AR-TomasNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L4.2 Subjunctive Mood...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
