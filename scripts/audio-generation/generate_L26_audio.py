"""Generate all audio files for L2.6 Shopping & Clothing using edge-tts."""
import asyncio
import edge_tts
import os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L2.6\phrases"

VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    ("la-camisa", "La camisa"), ("los-pantalones", "Los pantalones"),
    ("el-vestido", "El vestido"), ("la-falda", "La falda"),
    ("los-zapatos", "Los zapatos"), ("la-chaqueta", "La chaqueta"),
    ("la-camiseta", "La camiseta"), ("los-calcetines", "Los calcetines"),
    ("el-sombrero", "El sombrero"), ("las-gafas-de-sol", "Las gafas de sol"),
    ("rojo", "Rojo"), ("azul", "Azul"), ("negro", "Negro"), ("blanco", "Blanco"),
    ("verde", "Verde"), ("amarillo", "Amarillo"), ("grande", "Grande"),
    ("pequeno", "Pequeño"), ("largo", "Largo"), ("corto", "Corto"),
    ("cuanto-cuesta", "¿Cuánto cuesta?"),
    ("tiene-talla-mas-grande", "¿Tiene una talla más grande?"),
    ("me-queda-bien", "Me queda bien"), ("me-queda-grande", "Me queda grande"),
    ("puedo-probarmelo", "¿Puedo probármelo?"),
    ("donde-estan-los-probadores", "¿Dónde están los probadores?"),
    ("estoy-buscando", "Estoy buscando"), ("esta-en-oferta", "Está en oferta"),
    ("aceptan-tarjeta", "¿Aceptan tarjeta?"), ("me-lo-llevo", "Me lo llevo"),
    ("la-tienda", "La tienda"), ("el-centro-comercial", "El centro comercial"),
    ("el-probador", "El probador"), ("la-caja", "La caja"),
    ("el-descuento", "El descuento"), ("la-talla", "La talla"),
    ("el-recibo", "El recibo"), ("en-efectivo", "En efectivo"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Lima (Peruvian - use Colombian as closest)
    ("d1-line1", "¡Buenas tardes! ¿En qué puedo ayudarle?", "es-CO-GonzaloNeural"),
    ("d1-line2", "Estoy buscando una camisa azul.", "es-CO-SalomeNeural"),
    ("d1-line3", "Tenemos estas. ¿Qué talla usa?", "es-CO-GonzaloNeural"),
    ("d1-line4", "Mediana. ¿Puedo probármela?", "es-CO-SalomeNeural"),
    ("d1-line5", "Claro, los probadores están al fondo a la izquierda.", "es-CO-GonzaloNeural"),
    ("d1-line6", "Me queda perfecta. ¿Cuánto cuesta?", "es-CO-SalomeNeural"),
    ("d1-line7", "Cuesta ochenta y nueve soles. Pero hoy está en oferta: setenta soles.", "es-CO-GonzaloNeural"),
    ("d1-line8", "¡Perfecto! Me la llevo. ¿Aceptan tarjeta?", "es-CO-SalomeNeural"),
    ("d1-line9", "Sí, tarjeta y efectivo. Pase por la caja, por favor.", "es-CO-GonzaloNeural"),
    # Dialogue 2: Oaxaca (Mexican voices)
    ("d2-line1", "¡Pásele, pásele! Tenemos vestidos bonitos y baratos.", "es-MX-DaliaNeural"),
    ("d2-line2", "Me gusta este vestido rojo. ¿Cuánto cuesta?", "es-MX-JorgeNeural"),
    ("d2-line3", "Trescientos cincuenta pesos. Es hecho a mano.", "es-MX-DaliaNeural"),
    ("d2-line4", "¿Me hace un descuento? Compro dos.", "es-MX-JorgeNeural"),
    ("d2-line5", "Dos por seiscientos pesos. ¿Le parece bien?", "es-MX-DaliaNeural"),
    ("d2-line6", "¡Sí! ¿Tiene uno en verde también?", "es-MX-JorgeNeural"),
    ("d2-line7", "Sí, aquí tiene. Verde y rojo, los colores de México.", "es-MX-DaliaNeural"),
    ("d2-line8", "Hermosos. ¿Solo efectivo o también tarjeta?", "es-MX-JorgeNeural"),
    ("d2-line9", "Aquí solo efectivo, pero hay un cajero en la esquina.", "es-MX-DaliaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path):
        return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L2.6 Shopping & Clothing...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        voice = VOICES_ES[i % len(VOICES_ES)]
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
