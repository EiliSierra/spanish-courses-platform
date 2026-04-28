"""Generate all audio files for L3.1 Past Tense using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L3.1\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Regular -AR
    ("hable-con-mi-mama", "Hablé con mi mamá"),
    ("camine-al-parque", "Caminé al parque"),
    ("cocino-una-cena", "Cocinó una cena deliciosa"),
    ("compramos-ropa", "Compramos ropa nueva"),
    ("viajaron-a-mexico", "Viajaron a México"),
    ("estudiaste-ayer", "¿Estudiaste ayer?"),
    ("trabaje-todo-el-dia", "Trabajé todo el día"),
    ("llamaste-a-tu-hermano", "Llamaste a tu hermano"),
    # Regular -ER/-IR
    ("comi-en-un-restaurante", "Comí en un restaurante"),
    ("bebimos-cafe", "Bebimos café"),
    ("escribio-un-mensaje", "Escribió un mensaje"),
    ("sali-temprano", "Salí temprano"),
    ("aprendieron-mucho", "Aprendieron mucho"),
    ("recibiste-mi-correo", "¿Recibiste mi correo?"),
    ("vivio-en-colombia", "Vivió en Colombia dos años"),
    ("corri-por-la-manana", "Corrí por la mañana"),
    # Irregular
    ("fui-al-cine", "Fui al cine"),
    ("fue-un-dia-increible", "Fue un día increíble"),
    ("tuve-mucho-trabajo", "Tuve mucho trabajo"),
    ("hice-la-tarea", "Hice la tarea"),
    ("dijo-que-si", "Dijo que sí"),
    ("puso-la-mesa", "Puso la mesa"),
    ("vine-a-las-ocho", "Vine a las ocho"),
    ("pude-terminar", "Pude terminar a tiempo"),
    ("quiso-ayudar", "Quiso ayudar"),
    ("supe-la-verdad", "Supe la verdad"),
    # Time markers
    ("ayer", "Ayer"),
    ("anoche", "Anoche"),
    ("la-semana-pasada", "La semana pasada"),
    ("el-mes-pasado", "El mes pasado"),
    ("el-ano-pasado", "El año pasado"),
    ("hace-dos-dias", "Hace dos días"),
    ("el-lunes-pasado", "El lunes pasado"),
    ("esta-manana", "Esta mañana"),
    ("primero-despues", "Primero... después..."),
    ("finalmente", "Finalmente"),
]

DIALOGUE_LINES = [
    # D1: Bogota (Colombian voices)
    ("d1-line1", "¡Hola! ¿Qué hiciste el fin de semana?", "es-CO-SalomeNeural"),
    ("d1-line2", "El sábado fui al centro comercial y compré ropa nueva.", "es-CO-GonzaloNeural"),
    ("d1-line3", "¡Qué bien! ¿Y el domingo?", "es-CO-SalomeNeural"),
    ("d1-line4", "Cociné una pasta con mi novia y después vimos una película.", "es-CO-GonzaloNeural"),
    ("d1-line5", "¿Qué película vieron?", "es-CO-SalomeNeural"),
    ("d1-line6", "Vimos una comedia colombiana. Fue muy divertida. ¿Y tú?", "es-CO-GonzaloNeural"),
    ("d1-line7", "Yo salí con mis amigas el viernes. Cenamos en un restaurante nuevo.", "es-CO-SalomeNeural"),
    ("d1-line8", "¿Les gustó el restaurante?", "es-CO-GonzaloNeural"),
    ("d1-line9", "¡Sí! La comida estuvo deliciosa. Después caminamos por el parque.", "es-CO-SalomeNeural"),
    # D2: San Juan (Venezuelan as proxy for Caribbean)
    ("d2-line1", "¿Fuiste a la playa la semana pasada?", "es-VE-SebastianNeural"),
    ("d2-line2", "Sí, fuimos a Rincón. Salimos el viernes por la mañana.", "es-VE-PaolaNeural"),
    ("d2-line3", "¿Cómo estuvo el viaje?", "es-VE-SebastianNeural"),
    ("d2-line4", "Fue increíble. Nadamos, tomamos sol y comimos mariscos frescos.", "es-VE-PaolaNeural"),
    ("d2-line5", "¿Dónde se quedaron?", "es-VE-SebastianNeural"),
    ("d2-line6", "Encontramos un hotel pequeño cerca de la playa. Costó muy poco.", "es-VE-PaolaNeural"),
    ("d2-line7", "¿Qué fue lo mejor del viaje?", "es-VE-SebastianNeural"),
    ("d2-line8", "El atardecer. Vimos el sol desde la playa. Fue mágico.", "es-VE-PaolaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L3.1 Past Tense...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
