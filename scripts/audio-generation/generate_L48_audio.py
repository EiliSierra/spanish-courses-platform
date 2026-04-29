"""Generate all audio files for L4.8 Future Plans & Dreams using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L4.8\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Future Tense
    ("hablare-con-mi-jefe", "Hablaré con mi jefe mañana"),
    ("comere-en-un-restaurante", "Comeré en un restaurante nuevo"),
    ("vivire-en-otra-ciudad", "Viviré en otra ciudad"),
    ("estudiaremos-en-la-universidad", "Estudiaremos en la universidad"),
    ("trabajaras-en-lo-que-te-gusta", "Trabajarás en lo que te gusta"),
    ("viajaran-por-todo-el-mundo", "Viajarán por todo el mundo"),
    ("aprendere-otro-idioma", "Aprenderé otro idioma"),
    ("tendre-mi-propia-empresa", "Tendré mi propia empresa"),
    ("sere-doctor-algun-dia", "Seré doctor algún día"),
    ("podremos-lograr-nuestras-metas", "Podremos lograr nuestras metas"),
    # Conditional
    ("hablaria-con-el-presidente", "Hablaría con el presidente"),
    ("comeria-comida-de-todo-el-mundo", "Comería comida de todo el mundo"),
    ("viviria-en-la-playa", "Viviría en la playa"),
    ("viajaria-a-japon", "Viajaría a Japón"),
    ("estudiaria-arquitectura", "Estudiaría arquitectura"),
    ("me-gustaria-cambiar-de-carrera", "Me gustaría cambiar de carrera"),
    ("podria-ayudar-a-mas-personas", "Podría ayudar a más personas"),
    ("haria-un-viaje-largo", "Haría un viaje largo"),
    ("seria-voluntario-en-otro-pais", "Sería voluntario en otro país"),
    ("tendria-mas-tiempo-libre", "Tendría más tiempo libre"),
    # Goals
    ("quiero-ser-ingeniero", "Quiero ser ingeniero"),
    ("planeo-terminar-mi-carrera", "Planeo terminar mi carrera"),
    ("espero-encontrar-un-buen-trabajo", "Espero encontrar un buen trabajo"),
    ("mi-sueno-es-tener-una-familia", "Mi sueño es tener una familia"),
    ("pienso-estudiar-en-el-extranjero", "Pienso estudiar en el extranjero"),
    ("mi-meta-es-hablar-tres-idiomas", "Mi meta es hablar tres idiomas"),
    ("quiero-comprar-mi-propia-casa", "Quiero comprar mi propia casa"),
    ("planeo-ahorrar-para-el-futuro", "Planeo ahorrar para el futuro"),
    ("espero-viajar-a-sudamerica", "Espero viajar a Sudamérica"),
    ("mi-sueno-es-abrir-un-negocio", "Mi sueño es abrir un negocio"),
    # Hypothetical
    ("si-pudiera-viajaria-al-espacio", "Si pudiera, viajaría al espacio"),
    ("si-tuviera-dinero-compraria-una-casa", "Si tuviera dinero, compraría una casa"),
    ("me-gustaria-aprender-a-cocinar", "Me gustaría aprender a cocinar mejor"),
    ("si-fuera-presidente-cambiaria", "Si fuera presidente, cambiaría las leyes"),
    ("si-ganara-la-loteria-donaria", "Si ganara la lotería, donaría a caridad"),
    ("me-encantaria-conocer-europa", "Me encantaría conocer Europa"),
    ("si-hablara-espanol-perfecto", "Si hablara español perfecto, viviría en Madrid"),
    ("si-no-lloviera-iriamos", "Si no lloviera, iríamos al parque"),
]

DIALOGUE_LINES = [
    # D1: Career goals — Mexico City (Mexican voices)
    ("d1-line1", "¡Hola, Mateo! ¿Ya sabes qué harás después de graduarte?", "es-MX-DaliaNeural"),
    ("d1-line2", "Sí, estudiaré una maestría en ingeniería. Quiero especializarme en energía solar.", "es-MX-JorgeNeural"),
    ("d1-line3", "¡Qué interesante! Yo planeo buscar trabajo en una empresa internacional.", "es-MX-DaliaNeural"),
    ("d1-line4", "¿En serio? ¿Dónde te gustaría trabajar?", "es-MX-JorgeNeural"),
    ("d1-line5", "Me encantaría trabajar en España o Argentina. Mi sueño es vivir en el extranjero.", "es-MX-DaliaNeural"),
    ("d1-line6", "¡Qué padre! Si yo tuviera la oportunidad, también viviría fuera un tiempo.", "es-MX-JorgeNeural"),
    ("d1-line7", "¿Y a largo plazo? ¿Qué esperas para el futuro?", "es-MX-DaliaNeural"),
    ("d1-line8", "Espero tener mi propia empresa algún día. Y tú, ¿cuál es tu meta más grande?", "es-MX-JorgeNeural"),
    ("d1-line9", "Quiero ayudar a comunidades rurales con tecnología. Creo que podré hacer una diferencia.", "es-MX-DaliaNeural"),
    # D2: Hypothetical "what would you do" — Buenos Aires (Argentine voices)
    ("d2-line1", "Dale, juguemos. Si pudieras tener cualquier trabajo, ¿cuál sería?", "es-AR-ElenaNeural"),
    ("d2-line2", "Si pudiera elegir, sería chef. Me encanta cocinar. ¿Y vos?", "es-AR-TomasNeural"),
    ("d2-line3", "Yo sería directora de cine. Haría películas sobre la vida real.", "es-AR-ElenaNeural"),
    ("d2-line4", "¡Genial! ¿Y si ganaras un millón de dólares, qué harías primero?", "es-AR-TomasNeural"),
    ("d2-line5", "Primero viajaría por toda Sudamérica. Después abriría una escuela de cine.", "es-AR-ElenaNeural"),
    ("d2-line6", "¡Qué copado! Si yo tuviera un millón, abriría un restaurante y invertiría el resto.", "es-AR-TomasNeural"),
    ("d2-line7", "¿Y si pudieras vivir en cualquier época, cuándo vivirías?", "es-AR-ElenaNeural"),
    ("d2-line8", "Viviría en el futuro. Me gustaría ver cómo será el mundo en cien años.", "es-AR-TomasNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L4.8 Future Plans & Dreams...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
