"""Generate all audio files for L3.8 Travel Stories using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L3.8\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Travel Vocabulary
    ("el-destino", "El destino"),
    ("el-viaje", "El viaje"),
    ("la-maleta", "La maleta"),
    ("el-paseo", "El paseo"),
    ("el-recuerdo", "El recuerdo"),
    ("la-aventura", "La aventura"),
    ("el-itinerario", "El itinerario"),
    ("la-guia-turistica", "La guía turística"),
    ("el-paisaje", "El paisaje"),
    ("la-temporada", "La temporada"),
    # Experiences
    ("conoci-un-lugar", "Conocí un lugar increíble"),
    ("visite-las-ruinas", "Visité las ruinas"),
    ("probe-la-comida-local", "Probé la comida local"),
    ("camine-por-la-ciudad", "Caminé por la ciudad"),
    ("tome-muchas-fotos", "Tomé muchas fotos"),
    ("nade-en-el-mar", "Nadé en el mar"),
    ("subi-a-la-montana", "Subí a la montaña"),
    ("me-perdi-en-las-calles", "Me perdí en las calles"),
    ("compre-recuerdos", "Compré recuerdos"),
    ("hice-un-tour-guiado", "Hice un tour guiado"),
    # Recommendations
    ("te-recomiendo-ir", "Te recomiendo ir en verano"),
    ("deberias-visitar", "Deberías visitar el museo"),
    ("vale-la-pena", "Vale la pena el viaje"),
    ("no-te-pierdas", "No te pierdas el centro histórico"),
    ("tienes-que-probar", "Tienes que probar el ceviche"),
    ("es-mejor-ir", "Es mejor ir en temporada baja"),
    ("lleva-ropa-comoda", "Lleva ropa cómoda"),
    ("reserva-con-anticipacion", "Reserva con anticipación"),
    ("no-olvides-protector", "No olvides el protector solar"),
    ("te-va-a-encantar", "Te va a encantar"),
    # Opinions
    ("fue-increible", "Fue increíble"),
    ("lo-mejor-fue", "Lo mejor fue la comida"),
    ("me-encanto-el-paisaje", "Me encantó el paisaje"),
    ("fue-una-experiencia", "Fue una experiencia única"),
    ("no-me-gusto-el-hotel", "No me gustó el hotel"),
    ("quiero-volver", "Quiero volver algún día"),
    ("el-viaje-cambio", "El viaje cambió mi vida"),
    ("fue-el-mejor-viaje", "Fue el mejor viaje de mi vida"),
]

DIALOGUE_LINES = [
    # D1: Peru trip / México City (Mexican voices)
    ("d1-line1", "¿A dónde fuiste de vacaciones?", "es-MX-DaliaNeural"),
    ("d1-line2", "Fui a Perú con mi familia. Visitamos Lima y Cusco.", "es-MX-JorgeNeural"),
    ("d1-line3", "¡Qué increíble! ¿Fueron a Machu Picchu?", "es-MX-DaliaNeural"),
    ("d1-line4", "Sí, subimos a Machu Picchu al amanecer. Fue la vista más impresionante de mi vida.", "es-MX-JorgeNeural"),
    ("d1-line5", "¿Y la comida? ¿Probaron algo típico?", "es-MX-DaliaNeural"),
    ("d1-line6", "Probamos ceviche en Lima. ¡Estuvo delicioso! También probé lomo saltado.", "es-MX-JorgeNeural"),
    ("d1-line7", "¿Me recomiendas ir?", "es-MX-DaliaNeural"),
    ("d1-line8", "¡Totalmente! Te recomiendo ir en junio o julio. El clima es perfecto. ¡Vale la pena!", "es-MX-JorgeNeural"),
    ("d1-line9", "¡Ya quiero ir! Voy a empezar a planear el viaje.", "es-MX-DaliaNeural"),
    # D2: Colombia adventure / Buenos Aires (Argentine voices)
    ("d2-line1", "Acabo de volver de Colombia. ¡Fue el mejor viaje de mi vida!", "es-AR-ElenaNeural"),
    ("d2-line2", "¡No me digas! ¿Qué ciudades visitaste?", "es-AR-TomasNeural"),
    ("d2-line3", "Fui a Cartagena, Medellín y el Eje Cafetero.", "es-AR-ElenaNeural"),
    ("d2-line4", "¿Qué fue lo mejor?", "es-AR-TomasNeural"),
    ("d2-line5", "Lo mejor fue caminar por la ciudad vieja de Cartagena. Los colores, la música, la comida...", "es-AR-ElenaNeural"),
    ("d2-line6", "¿Y Medellín? Dicen que es muy bonita.", "es-AR-TomasNeural"),
    ("d2-line7", "Medellín me encantó. Tomé el metrocable y vi toda la ciudad desde arriba.", "es-AR-ElenaNeural"),
    ("d2-line8", "¿Deberías llevar mucha ropa?", "es-AR-TomasNeural"),
    ("d2-line9", "Lleva ropa cómoda y no olvides el protector solar. ¡Hace mucho calor en la costa!", "es-AR-ElenaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L3.8 Travel Stories...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
