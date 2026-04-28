"""Generate all audio files for L2.5 At the Airport using edge-tts with varied regional voices."""
import asyncio
import edge_tts
import os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L2.5\phrases"

# Regional voices rotation
VOICES_ES = [
    "es-CO-SalomeNeural",    # Colombian female
    "es-MX-DaliaNeural",     # Mexican female
    "es-AR-ElenaNeural",     # Argentine female
    "es-ES-ElviraNeural",    # Spanish female
    "es-CL-CatalinaNeural",  # Chilean female
    "es-CO-GonzaloNeural",   # Colombian male
    "es-MX-JorgeNeural",     # Mexican male
    "es-AR-TomasNeural",     # Argentine male
    "es-ES-AlvaroNeural",    # Spanish male
    "es-VE-SebastianNeural", # Venezuelan male
    "es-VE-PaolaNeural",     # Venezuelan female
    "es-CL-LorenzoNeural",   # Chilean male
]

# Phrase audio files: (filename, spanish_text)
PHRASES = [
    # Airport Areas
    ("el-aeropuerto", "El aeropuerto"),
    ("la-terminal", "La terminal"),
    ("la-puerta-de-embarque", "La puerta de embarque"),
    ("el-mostrador", "El mostrador"),
    ("la-sala-de-espera", "La sala de espera"),
    ("el-control-de-seguridad", "El control de seguridad"),
    ("la-aduana", "La aduana"),
    ("el-reclamo-de-equipaje", "El reclamo de equipaje"),
    ("la-tienda-libre-de-impuestos", "La tienda libre de impuestos"),
    ("la-salida", "La salida"),
    # Check-in & Documents
    ("el-pasaporte", "El pasaporte"),
    ("la-tarjeta-de-embarque", "La tarjeta de embarque"),
    ("el-boleto-de-avion", "El boleto de avión"),
    ("la-maleta", "La maleta"),
    ("el-equipaje-de-mano", "El equipaje de mano"),
    ("facturar-el-equipaje", "Facturar el equipaje"),
    ("el-asiento", "El asiento"),
    ("ventanilla-o-pasillo", "Ventanilla o pasillo"),
    ("la-visa", "La visa"),
    ("el-vuelo", "El vuelo"),
    # On the Plane
    ("abrocharse-el-cinturon", "Abrocharse el cinturón"),
    ("el-despegue", "El despegue"),
    ("el-aterrizaje", "El aterrizaje"),
    ("el-piloto", "El piloto"),
    ("el-auxiliar-de-vuelo", "El auxiliar de vuelo"),
    ("la-turbulencia", "La turbulencia"),
    ("el-retraso", "El retraso"),
    ("la-escala", "La escala"),
    # Useful Phrases
    ("a-que-hora-sale-el-vuelo", "¿A qué hora sale el vuelo?"),
    ("donde-esta-la-puerta-cinco", "¿Dónde está la puerta cinco?"),
    ("mi-vuelo-tiene-retraso", "Mi vuelo tiene retraso"),
    ("perdi-mi-vuelo", "Perdí mi vuelo"),
    ("cuanto-pesa-la-maleta", "¿Cuánto pesa la maleta?"),
    ("quiero-un-asiento-de-ventanilla", "Quiero un asiento de ventanilla"),
    ("tiene-conexion-wifi", "¿Tiene conexión wifi?"),
    ("vuelo-directo", "Vuelo directo"),
    ("ida-y-vuelta", "Ida y vuelta"),
    ("solo-ida", "Solo ida"),
]

# Dialogue lines
DIALOGUE_LINES = [
    # Dialogue 1: Check-in at Mexico City (Mexican voices)
    ("d1-line1", "Buenos días. ¿Me permite su pasaporte y boleto, por favor?", "es-MX-DaliaNeural"),
    ("d1-line2", "Aquí tiene. Vuelo AM cuatrocientos cincuenta y seis a Madrid.", "es-MX-JorgeNeural"),
    ("d1-line3", "¿Va a facturar equipaje?", "es-MX-DaliaNeural"),
    ("d1-line4", "Sí, una maleta. Y tengo un equipaje de mano.", "es-MX-JorgeNeural"),
    ("d1-line5", "Ponga la maleta en la báscula, por favor. ¿Ventanilla o pasillo?", "es-MX-DaliaNeural"),
    ("d1-line6", "Ventanilla, por favor.", "es-MX-JorgeNeural"),
    ("d1-line7", "Tiene el asiento catorce A. La puerta de embarque es la B doce. El embarque comienza a las diez y media.", "es-MX-DaliaNeural"),
    ("d1-line8", "Gracias. ¿Dónde está el control de seguridad?", "es-MX-JorgeNeural"),
    ("d1-line9", "Siga derecho y después a la izquierda. ¡Buen vuelo!", "es-MX-DaliaNeural"),
    # Dialogue 2: Flight Delay in Bogota (Colombian voices)
    ("d2-line1", "Disculpe, ¿el vuelo AV doscientos cuatro tiene retraso?", "es-CO-SalomeNeural"),
    ("d2-line2", "Sí, señora. El vuelo tiene un retraso de dos horas por el mal tiempo.", "es-CO-GonzaloNeural"),
    ("d2-line3", "¿A qué hora sale ahora?", "es-CO-SalomeNeural"),
    ("d2-line4", "Sale a las doce y media en vez de las diez y media. La puerta cambió a C siete.", "es-CO-GonzaloNeural"),
    ("d2-line5", "¿Puedo ir a la tienda libre de impuestos mientras espero?", "es-CO-SalomeNeural"),
    ("d2-line6", "Claro, está aquí a la derecha. Le recomiendo estar en la puerta treinta minutos antes del embarque.", "es-CO-GonzaloNeural"),
    ("d2-line7", "Perfecto, gracias. ¿Hay wifi en la sala de espera?", "es-CO-SalomeNeural"),
    ("d2-line8", "Sí, el wifi es gratis. La contraseña está en las pantallas.", "es-CO-GonzaloNeural"),
]

# English narration voice
VOICE_EN = "en-US-JennyNeural"

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path):
        return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L2.5 At the Airport...")

    # Phrases (rotate voices)
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        voice = VOICES_ES[i % len(VOICES_ES)]
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))

    # Dialogue lines (specific voices per character)
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))

    await asyncio.gather(*tasks)
    print(f"\nDone! Files saved to {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
