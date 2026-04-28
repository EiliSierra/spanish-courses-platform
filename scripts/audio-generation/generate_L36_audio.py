"""Generate all audio files for L3.6 Environment & Nature using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L3.6\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Animals
    ("el-jaguar", "El jaguar"),
    ("la-tortuga-marina", "La tortuga marina"),
    ("el-condor", "El cóndor"),
    ("la-ballena", "La ballena"),
    ("el-mono", "El mono"),
    ("la-iguana", "La iguana"),
    ("el-loro", "El loro"),
    ("el-delfin", "El delfín"),
    ("la-mariposa", "La mariposa"),
    ("el-oso", "El oso"),
    # Nature & Geography
    ("la-selva-tropical", "La selva tropical"),
    ("el-volcan", "El volcán"),
    ("el-rio", "El río"),
    ("la-montana", "La montaña"),
    ("la-isla", "La isla"),
    ("el-bosque", "El bosque"),
    ("la-cascada", "La cascada"),
    ("el-desierto", "El desierto"),
    ("la-costa", "La costa"),
    ("el-arrecife-de-coral", "El arrecife de coral"),
    # Environment
    ("el-cambio-climatico", "El cambio climático"),
    ("la-contaminacion", "La contaminación"),
    ("los-recursos-naturales", "Los recursos naturales"),
    ("la-deforestacion", "La deforestación"),
    ("el-calentamiento-global", "El calentamiento global"),
    ("las-especies-en-peligro", "Las especies en peligro"),
    ("la-biodiversidad", "La biodiversidad"),
    ("el-ecosistema", "El ecosistema"),
    ("la-capa-de-ozono", "La capa de ozono"),
    ("la-sequia", "La sequía"),
    # Eco-Actions
    ("reciclar-la-basura", "Reciclar la basura"),
    ("ahorrar-agua", "Ahorrar agua"),
    ("plantar-arboles", "Plantar árboles"),
    ("usar-energia-solar", "Usar energía solar"),
    ("proteger-los-animales", "Proteger los animales"),
    ("reducir-el-plastico", "Reducir el plástico"),
    ("limpiar-las-playas", "Limpiar las playas"),
    ("cuidar-el-medio-ambiente", "Cuidar el medio ambiente"),
]

DIALOGUE_LINES = [
    # D1: Amazon / Iquitos (Colombian voices as proxy for Peruvian)
    ("d1-line1", "¡Mira! Hay un mono en ese árbol. ¿Lo ves?", "es-CO-SalomeNeural"),
    ("d1-line2", "¡Sí! Y escucho loros también. La selva está llena de vida.", "es-CO-GonzaloNeural"),
    ("d1-line3", "Nuestro guía dijo que hay más de mil especies de aves aquí.", "es-CO-SalomeNeural"),
    ("d1-line4", "¡Increíble! ¿Y es verdad que el Amazonas produce el veinte por ciento del oxígeno?", "es-CO-GonzaloNeural"),
    ("d1-line5", "Sí, por eso lo llaman los pulmones del planeta. Pero la deforestación es un problema muy serio.", "es-CO-SalomeNeural"),
    ("d1-line6", "¿Qué podemos hacer para ayudar?", "es-CO-GonzaloNeural"),
    ("d1-line7", "Podemos reducir el uso de papel, apoyar a comunidades locales y cuidar nuestros bosques.", "es-CO-SalomeNeural"),
    ("d1-line8", "¡Mira el río! ¿Esos son delfines rosados?", "es-CO-GonzaloNeural"),
    ("d1-line9", "¡Sí! Los delfines rosados del Amazonas. Son hermosos y están en peligro de extinción.", "es-CO-SalomeNeural"),
    # D2: Galápagos (Ecuadorian — using Colombian as closest proxy)
    ("d2-line1", "¡No puedo creer que estamos en las Islas Galápagos!", "es-MX-DaliaNeural"),
    ("d2-line2", "¡Yo tampoco! Mira esas iguanas marinas en las rocas.", "es-MX-JorgeNeural"),
    ("d2-line3", "Son únicas en el mundo. Solo existen aquí. ¿Y esas tortugas gigantes?", "es-MX-DaliaNeural"),
    ("d2-line4", "Las tortugas gigantes de Galápagos pueden vivir más de cien años.", "es-MX-JorgeNeural"),
    ("d2-line5", "Aquí la biodiversidad es impresionante. Charles Darwin estudió estas islas.", "es-MX-DaliaNeural"),
    ("d2-line6", "¿Es verdad que no puedes tocar a los animales?", "es-MX-JorgeNeural"),
    ("d2-line7", "Correcto. Es un parque nacional protegido. Debemos respetar la naturaleza.", "es-MX-DaliaNeural"),
    ("d2-line8", "Mañana quiero ver las ballenas y hacer snorkel en el arrecife de coral.", "es-MX-JorgeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L3.6 Environment & Nature...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
