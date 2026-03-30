"""Generate all audio files for L2.8 Work & Professions using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L2.8\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    ("el-doctor", "El doctor"), ("el-profesor", "El profesor"),
    ("el-ingeniero", "El ingeniero"), ("el-abogado", "El abogado"),
    ("el-enfermero", "El enfermero"), ("el-cocinero", "El cocinero"),
    ("el-mesero", "El mesero"), ("el-programador", "El programador"),
    ("el-contador", "El contador"), ("el-vendedor", "El vendedor"),
    ("el-disenador", "El diseñador"), ("el-bombero", "El bombero"),
    ("la-oficina", "La oficina"), ("el-hospital", "El hospital"),
    ("la-escuela", "La escuela"), ("el-restaurante", "El restaurante"),
    ("la-empresa", "La empresa"), ("la-tienda", "La tienda"),
    ("el-taller", "El taller"), ("desde-casa", "Desde casa"),
    ("a-que-te-dedicas", "¿A qué te dedicas?"),
    ("soy-profesor", "Soy profesor"),
    ("trabajo-en-una-oficina", "Trabajo en una oficina"),
    ("trabajo-de-lunes-a-viernes", "Trabajo de lunes a viernes"),
    ("mi-horario-es-flexible", "Mi horario es flexible"),
    ("tengo-una-reunion", "Tengo una reunión"),
    ("estoy-de-vacaciones", "Estoy de vacaciones"),
    ("me-gusta-mi-trabajo", "Me gusta mi trabajo"),
    ("busco-trabajo", "Busco trabajo"),
    ("trabajo-por-mi-cuenta", "Trabajo por mi cuenta"),
    ("habla-tres-idiomas", "Habla tres idiomas"),
    ("tiene-experiencia", "Tiene experiencia"),
    ("es-muy-profesional", "Es muy profesional"),
    ("trabaja-en-equipo", "Trabaja en equipo"),
    ("es-responsable", "Es responsable"),
    ("tiene-buena-actitud", "Tiene buena actitud"),
    ("es-puntual", "Es puntual"),
    ("aprende-rapido", "Aprende rápido"),
]

DIALOGUE_LINES = [
    # D1: Buenos Aires (Argentine voices)
    ("d1-line1", "Hola, ¿cómo te llamás? Soy Martín.", "es-AR-TomasNeural"),
    ("d1-line2", "Soy Paula, mucho gusto. ¿A qué te dedicás?", "es-AR-ElenaNeural"),
    ("d1-line3", "Soy diseñador gráfico. Trabajo desde casa.", "es-AR-TomasNeural"),
    ("d1-line4", "¡Qué bueno! Yo soy abogada. Trabajo en una empresa grande.", "es-AR-ElenaNeural"),
    ("d1-line5", "¿Te gusta tu trabajo?", "es-AR-TomasNeural"),
    ("d1-line6", "Sí, me gusta mucho. Es difícil pero interesante. ¿Y a vos?", "es-AR-ElenaNeural"),
    ("d1-line7", "Me encanta. Mi horario es flexible y trabajo por mi cuenta.", "es-AR-TomasNeural"),
    ("d1-line8", "¡Qué suerte! Yo trabajo de lunes a viernes, de nueve a seis.", "es-AR-ElenaNeural"),
    # D2: Monterrey (Mexican voices)
    ("d2-line1", "Buenos días. Siéntese, por favor. ¿Me puede contar sobre su experiencia?", "es-MX-JorgeNeural"),
    ("d2-line2", "Soy ingeniera. Tengo seis años de experiencia en empresas de tecnología.", "es-MX-DaliaNeural"),
    ("d2-line3", "¿Cuáles son sus fortalezas?", "es-MX-JorgeNeural"),
    ("d2-line4", "Soy responsable, puntual y trabajo bien en equipo. También hablo inglés.", "es-MX-DaliaNeural"),
    ("d2-line5", "¿Qué horario prefiere?", "es-MX-JorgeNeural"),
    ("d2-line6", "Prefiero de lunes a viernes con horario flexible.", "es-MX-DaliaNeural"),
    ("d2-line7", "¿Por qué quiere trabajar en nuestra empresa?", "es-MX-JorgeNeural"),
    ("d2-line8", "Me gusta la empresa porque es innovadora. Quiero crecer profesionalmente aquí.", "es-MX-DaliaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L2.8 Work & Professions...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
