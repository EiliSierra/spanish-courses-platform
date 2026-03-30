"""Generate all audio files for L2.7 Describing People using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L2.7\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    ("alto", "Alto"), ("bajo", "Bajo"), ("delgado", "Delgado"),
    ("el-pelo-largo", "El pelo largo"), ("el-pelo-corto", "El pelo corto"),
    ("el-pelo-rubio", "El pelo rubio"), ("el-pelo-castano", "El pelo castaño"),
    ("los-ojos-verdes", "Los ojos verdes"), ("los-ojos-marrones", "Los ojos marrones"),
    ("la-barba", "La barba"),
    ("simpatico", "Simpático"), ("amable", "Amable"), ("divertido", "Divertido"),
    ("inteligente", "Inteligente"), ("trabajador", "Trabajador"), ("tranquilo", "Tranquilo"),
    ("serio", "Serio"), ("timido", "Tímido"), ("generoso", "Generoso"), ("paciente", "Paciente"),
    ("es-alto-y-delgado", "Es alto y delgado"),
    ("es-simpatica-y-divertida", "Es simpática y divertida"),
    ("tiene-los-ojos-azules", "Tiene los ojos azules"),
    ("tiene-el-pelo-negro", "Tiene el pelo negro"),
    ("lleva-gafas", "Lleva gafas"),
    ("lleva-una-camisa-azul", "Lleva una camisa azul"),
    ("se-parece-a-su-mama", "Se parece a su mamá"),
    ("como-es-el", "¿Cómo es él?"),
    ("esta-contento", "Está contento"), ("esta-cansado", "Está cansado"),
    ("esta-enojado", "Está enojado"), ("esta-preocupado", "Está preocupado"),
    ("esta-triste", "Está triste"), ("esta-nervioso", "Está nervioso"),
    ("esta-emocionado", "Está emocionado"), ("esta-ocupado", "Está ocupado"),
]

DIALOGUE_LINES = [
    # D1: Santiago (Chilean voices)
    ("d1-line1", "¿Conoces a mi amigo Diego?", "es-CL-CatalinaNeural"),
    ("d1-line2", "No, ¿cómo es?", "es-CL-LorenzoNeural"),
    ("d1-line3", "Es alto y delgado. Tiene el pelo corto y negro.", "es-CL-CatalinaNeural"),
    ("d1-line4", "¿Y su personalidad?", "es-CL-LorenzoNeural"),
    ("d1-line5", "Es muy simpático y divertido. Siempre está contento.", "es-CL-CatalinaNeural"),
    ("d1-line6", "¿Tiene ojos claros?", "es-CL-LorenzoNeural"),
    ("d1-line7", "Sí, tiene los ojos verdes. Y hoy lleva una chaqueta azul.", "es-CL-CatalinaNeural"),
    ("d1-line8", "¡Ah, ya sé quién es! Está allá, cerca de la puerta.", "es-CL-LorenzoNeural"),
    # D2: Medellin (Colombian voices)
    ("d2-line1", "¿A quién te pareces más, a tu mamá o a tu papá?", "es-CO-GonzaloNeural"),
    ("d2-line2", "Dicen que me parezco a mi mamá. Tenemos los mismos ojos marrones.", "es-CO-SalomeNeural"),
    ("d2-line3", "¿Y tu hermano?", "es-CO-GonzaloNeural"),
    ("d2-line4", "Él se parece más a mi papá. Es alto, tiene barba y el pelo castaño.", "es-CO-SalomeNeural"),
    ("d2-line5", "¿Cómo es de personalidad?", "es-CO-GonzaloNeural"),
    ("d2-line6", "Es serio pero muy generoso. Hoy está un poco cansado porque trabajó mucho.", "es-CO-SalomeNeural"),
    ("d2-line7", "Mi hermana es lo opuesto. Es muy divertida y siempre está emocionada.", "es-CO-GonzaloNeural"),
    ("d2-line8", "¡Las familias son interesantes! Cada persona es diferente.", "es-CO-SalomeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L2.7 Describing People...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
