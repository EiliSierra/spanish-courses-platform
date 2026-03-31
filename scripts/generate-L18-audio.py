"""Generate all audio files for L1.8 Daily Routines using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_PHRASES = "D:/ClaudeEili/Proyectos/SpanishCourses-Next/public/audio/L1.8/phrases"
OUTPUT_DIALOGUES = "D:/ClaudeEili/Proyectos/SpanishCourses-Next/public/audio/L1.8/dialogues"

VOICE_MX_F = "es-MX-DaliaNeural"
VOICE_MX_M = "es-MX-JorgeNeural"
VOICE_CO_F = "es-CO-SalomeNeural"
VOICE_CO_M = "es-CO-GonzaloNeural"

PHRASES = {
    "me-despierto": ("Me despierto", VOICE_MX_F),
    "me-levanto": ("Me levanto", VOICE_MX_M),
    "me-ducho": ("Me ducho", VOICE_MX_F),
    "me-visto": ("Me visto", VOICE_MX_M),
    "desayuno": ("Desayuno", VOICE_MX_F),
    "salgo-de-casa": ("Salgo de casa", VOICE_MX_M),
    "trabajo": ("Trabajo", VOICE_MX_M),
    "estudio": ("Estudio", VOICE_MX_F),
    "almuerzo": ("Almuerzo", VOICE_MX_M),
    "camino": ("Camino", VOICE_MX_F),
    "cocino": ("Cocino", VOICE_MX_F),
    "limpio-la-casa": ("Limpio la casa", VOICE_MX_F),
    "hago-ejercicio": ("Hago ejercicio", VOICE_MX_M),
    "ceno": ("Ceno", VOICE_MX_M),
    "leo-un-libro": ("Leo un libro", VOICE_MX_F),
    "veo-television": ("Veo televisión", VOICE_MX_M),
    "me-acuesto": ("Me acuesto", VOICE_MX_F),
    "me-duermo": ("Me duermo", VOICE_MX_M),
    "por-la-manana": ("Por la mañana", VOICE_MX_F),
    "por-la-tarde": ("Por la tarde", VOICE_MX_M),
    "por-la-noche": ("Por la noche", VOICE_MX_F),
    "temprano": ("Temprano", VOICE_MX_M),
    "tarde": ("Tarde", VOICE_MX_F),
    "todos-los-dias": ("Todos los días", VOICE_MX_M),
    "fines-de-semana": ("Los fines de semana", VOICE_MX_F),
    "me-gusta": ("Me gusta", VOICE_MX_F),
    "no-me-gusta": ("No me gusta", VOICE_MX_M),
    "me-gusta-cocinar": ("Me gusta cocinar", VOICE_MX_F),
    "me-gusta-leer": ("Me gusta leer", VOICE_MX_M),
    "prefiero": ("Prefiero", VOICE_MX_F),
    "normalmente": ("Normalmente", VOICE_MX_M),
    "siempre": ("Siempre", VOICE_MX_F),
    "a-veces": ("A veces", VOICE_MX_M),
}

DIALOGUE_1 = [
    ("d1-line1", "Hoy vamos a hablar de nuestra rutina diaria. María, ¿a qué hora te levantas?", VOICE_MX_M),
    ("d1-line2", "Me levanto a las seis y media. Me ducho, me visto y desayuno.", VOICE_MX_F),
    ("d1-line3", "¿Y qué desayunas?", VOICE_MX_M),
    ("d1-line4", "Normalmente desayuno café con pan y fruta.", VOICE_MX_F),
    ("d1-line5", "¿Qué haces por la tarde?", VOICE_MX_M),
    ("d1-line6", "Trabajo hasta las cinco. Después hago ejercicio y cocino. Me acuesto a las diez.", VOICE_MX_F),
]

DIALOGUE_2 = [
    ("d2-line1", "¿Qué haces los fines de semana?", VOICE_CO_M),
    ("d2-line2", "Los sábados me levanto tarde. No trabajo los fines de semana.", VOICE_CO_F),
    ("d2-line3", "¿Te gusta cocinar?", VOICE_CO_M),
    ("d2-line4", "¡Sí! Me gusta mucho cocinar. Los domingos cocino para mi familia.", VOICE_CO_F),
    ("d2-line5", "A mí me gusta leer. Leo por la noche, siempre.", VOICE_CO_M),
    ("d2-line6", "¿Y haces ejercicio?", VOICE_CO_F),
    ("d2-line7", "A veces. Camino por el parque los domingos por la mañana.", VOICE_CO_M),
]

async def generate(text, voice, path):
    c = edge_tts.Communicate(text, voice, rate="-10%")
    await c.save(path)

async def main():
    os.makedirs(OUTPUT_PHRASES, exist_ok=True)
    os.makedirs(OUTPUT_DIALOGUES, exist_ok=True)

    print("Generating L1.8 phrase audio...")
    tasks = []
    for key, (text, voice) in PHRASES.items():
        path = os.path.join(OUTPUT_PHRASES, f"{key}.mp3")
        if not os.path.exists(path):
            tasks.append(generate(text, voice, path))
            print(f"  Queued: {key}")
    if tasks:
        await asyncio.gather(*tasks)
        print(f"  Generated {len(tasks)} phrase files")

    print("\nGenerating L1.8 dialogue audio...")
    tasks = []
    for lines in [DIALOGUE_1, DIALOGUE_2]:
        for key, text, voice in lines:
            path = os.path.join(OUTPUT_DIALOGUES, f"{key}.mp3")
            if not os.path.exists(path):
                tasks.append(generate(text, voice, path))
                print(f"  Queued: {key}")
    if tasks:
        await asyncio.gather(*tasks)
        print(f"  Generated {len(tasks)} dialogue files")

    total = len(os.listdir(OUTPUT_PHRASES)) + len(os.listdir(OUTPUT_DIALOGUES))
    print(f"\nDone! Total L1.8 audio files: {total}")

if __name__ == "__main__":
    asyncio.run(main())
