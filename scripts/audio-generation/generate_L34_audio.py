"""Generate all audio files for L3.4 Cooking & Recipes using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L3.4\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Ingredients
    ("el-aguacate", "El aguacate"),
    ("la-cebolla", "La cebolla"),
    ("el-ajo", "El ajo"),
    ("el-tomate", "El tomate"),
    ("el-arroz", "El arroz"),
    ("el-pollo", "El pollo"),
    ("la-sal-y-la-pimienta", "La sal y la pimienta"),
    ("el-aceite-de-oliva", "El aceite de oliva"),
    ("el-limon", "El limón"),
    ("el-cilantro", "El cilantro"),
    # Kitchen Tools
    ("la-sarten", "La sartén"),
    ("la-olla", "La olla"),
    ("el-cuchillo", "El cuchillo"),
    ("la-tabla-de-cortar", "La tabla de cortar"),
    ("la-cuchara", "La cuchara"),
    ("el-tenedor", "El tenedor"),
    ("el-horno", "El horno"),
    ("la-estufa", "La estufa"),
    # Cooking Actions
    ("cortar-en-pedazos", "Cortar en pedazos"),
    ("mezclar-los-ingredientes", "Mezclar los ingredientes"),
    ("hervir-el-agua", "Hervir el agua"),
    ("freir-con-aceite", "Freír con aceite"),
    ("cocinar-a-fuego-lento", "Cocinar a fuego lento"),
    ("agregar-la-sal", "Agregar la sal"),
    ("picar-la-cebolla", "Picar la cebolla"),
    ("pelar-el-ajo", "Pelar el ajo"),
    ("revolver-la-mezcla", "Revolver la mezcla"),
    ("servir-en-un-plato", "Servir en un plato"),
    # Recipe Phrases
    ("primero-lava-las-verduras", "Primero, lava las verduras"),
    ("despues-corta-el-tomate", "Después, corta el tomate"),
    ("luego-calienta-la-sarten", "Luego, calienta la sartén"),
    ("cocina-por-veinte-minutos", "Cocina por veinte minutos"),
    ("la-receta-esta-lista", "¡La receta está lista!"),
    ("necesitas-dos-tazas-de-arroz", "Necesitas dos tazas de arroz"),
    ("anade-una-pizca-de-sal", "Añade una pizca de sal"),
    ("deja-reposar-cinco-minutos", "Deja reposar cinco minutos"),
    ("la-comida-huele-delicioso", "La comida huele delicioso"),
    ("me-pasas-la-receta", "¿Me pasas la receta?"),
]

DIALOGUE_LINES = [
    # D1: Mexico City (Mexican voices)
    ("d1-line1", "¡Vamos a hacer guacamole! ¿Tienes aguacates?", "es-MX-DaliaNeural"),
    ("d1-line2", "Sí, compré tres aguacates maduros en el mercado.", "es-MX-JorgeNeural"),
    ("d1-line3", "Perfecto. Primero, corta los aguacates por la mitad.", "es-MX-DaliaNeural"),
    ("d1-line4", "Listo. ¿Ahora los machaco con un tenedor?", "es-MX-JorgeNeural"),
    ("d1-line5", "Sí, pero no mucho. Me gusta con pedazos. Ahora pica la cebolla y el cilantro.", "es-MX-DaliaNeural"),
    ("d1-line6", "¿Le pongo tomate también?", "es-MX-JorgeNeural"),
    ("d1-line7", "¡Claro! Mezcla todo y agrega jugo de limón y sal.", "es-MX-DaliaNeural"),
    ("d1-line8", "¡Mmm, huele delicioso! ¿Dónde están los totopos?", "es-MX-JorgeNeural"),
    ("d1-line9", "¡Aquí! Ayer los compré en la tienda. ¡A comer!", "es-MX-DaliaNeural"),
    # D2: Lima (using Colombian as proxy for Peruvian)
    ("d2-line1", "Hoy voy a cocinar arroz con pollo. ¿Me ayudas?", "es-CO-SalomeNeural"),
    ("d2-line2", "¡Sí! ¿Qué necesitamos?", "es-CO-GonzaloNeural"),
    ("d2-line3", "Pollo, arroz, cebolla, ajo, tomate y cilantro.", "es-CO-SalomeNeural"),
    ("d2-line4", "¿Primero corto el pollo?", "es-CO-GonzaloNeural"),
    ("d2-line5", "Sí, córtalo en pedazos y ponle sal y pimienta.", "es-CO-SalomeNeural"),
    ("d2-line6", "Ya está. ¿Ahora lo frío en la olla?", "es-CO-GonzaloNeural"),
    ("d2-line7", "Exacto. Fríe el pollo, luego agrega la cebolla y el ajo.", "es-CO-SalomeNeural"),
    ("d2-line8", "¿Y el arroz cuándo lo agrego?", "es-CO-GonzaloNeural"),
    ("d2-line9", "Después de tres minutos. Añade el arroz con agua y cocina a fuego lento veinte minutos.", "es-CO-SalomeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L3.4 Cooking & Recipes...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
