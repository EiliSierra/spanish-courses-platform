"""Generate all audio files for L5.2 Subjunctive Mastery using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L5.2\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Imperfect Subjunctive -ra (12)
    ("quisiera-un-cafe", "Quisiera un café, por favor"),
    ("si-pudiera-volar", "Si pudiera volar, iría a las nubes"),
    ("si-tuviera-mas-tiempo", "Si tuviera más tiempo, leería más libros"),
    ("si-fuera-posible", "Si fuera posible, cambiaría el pasado"),
    ("si-hablara-mejor", "Si hablara mejor, me entenderían"),
    ("si-comiera-menos", "Si comiera menos, estaría más sano"),
    ("si-viviera-en-espana", "Si viviera en España, aprendería flamenco"),
    ("si-supiera-la-respuesta", "Si supiera la respuesta, te la diría"),
    ("esperaba-que-llegaran", "Esperaba que llegaran a tiempo"),
    ("era-necesario-que-estudiara", "Era necesario que estudiara más"),
    ("le-pedi-que-me-ayudara", "Le pedí que me ayudara"),
    ("queria-que-fueramos-juntos", "Quería que fuéramos juntos"),
    # Imperfect Subjunctive -se (10)
    ("quisiese-un-momento-de-paz", "Quisiese un momento de paz"),
    ("si-pudiese-elegir", "Si pudiese elegir, viviría aquí"),
    ("si-tuviese-dinero", "Si tuviese dinero, compraría esa casa"),
    ("si-fuese-necesario", "Si fuese necesario, lo haría de nuevo"),
    ("si-hablase-frances", "Si hablase francés, trabajaría en París"),
    ("si-comiese-antes", "Si comiese antes, no tendría hambre"),
    ("si-viviese-en-el-campo", "Si viviese en el campo, estaría más tranquilo"),
    ("si-supiese-la-verdad", "Si supiese la verdad, no callaría"),
    ("era-importante-que-lo-supiese", "Era importante que lo supiese"),
    ("dudaba-que-viniese", "Dudaba que viniese a la fiesta"),
    # Pluperfect Subjunctive (12)
    ("si-hubiera-sabido", "Si hubiera sabido, habría venido antes"),
    ("si-hubiera-estudiado-mas", "Si hubiera estudiado más, habría aprobado"),
    ("ojala-hubiera-viajado", "Ojalá hubiera viajado a Japón"),
    ("si-hubieramos-llegado-antes", "Si hubiéramos llegado antes, habríamos visto el concierto"),
    ("si-no-hubiera-llovido", "Si no hubiera llovido, habríamos ido al parque"),
    ("si-hubieran-escuchado", "Si hubieran escuchado, habrían entendido"),
    ("me-habria-gustado-que-hubieras", "Me habría gustado que hubieras venido"),
    ("si-hubiese-tenido-dinero", "Si hubiese tenido dinero, habría comprado la casa"),
    ("ojala-hubieramos-empezado", "Ojalá hubiéramos empezado antes"),
    ("si-hubiera-aceptado-el-trabajo", "Si hubiera aceptado el trabajo, estaría en Madrid"),
    ("si-no-hubiera-conocido", "Si no hubiera conocido a María, mi vida sería diferente"),
    ("si-hubiera-podido", "Si hubiera podido, habría cambiado todo"),
    # Como si Clauses (14)
    ("habla-como-si-fuera-el-jefe", "Habla como si fuera el jefe"),
    ("actua-como-si-supiera-todo", "Actúa como si supiera todo"),
    ("camina-como-si-no-tuviera-prisa", "Camina como si no tuviera prisa"),
    ("me-mira-como-si-me-conociera", "Me mira como si me conociera"),
    ("vive-como-si-no-hubiera-manana", "Vive como si no hubiera un mañana"),
    ("llora-como-si-se-le-hubiera-roto", "Llora como si se le hubiera roto el corazón"),
    ("gasta-dinero-como-si-fuera", "Gasta dinero como si fuera millonario"),
    ("sonrie-como-si-nada-hubiera", "Sonríe como si nada hubiera pasado"),
    ("corre-como-si-lo-persiguieran", "Corre como si lo persiguieran"),
    ("trabaja-como-si-no-hubiera-dormido", "Trabaja como si no hubiera dormido"),
    ("se-comporta-como-si-fuera-nino", "Se comporta como si fuera un niño"),
    ("responde-como-si-no-le-importara", "Responde como si no le importara"),
    ("come-como-si-no-hubiera-comido", "Come como si no hubiera comido en días"),
    ("habla-como-si-hubiera-vivido", "Habla como si hubiera vivido allí toda la vida"),
]

DIALOGUE_LINES = [
    # D1: Imagining Alternate Life Paths — Madrid (Spanish voices)
    ("d1-line1", "Diego, ¿alguna vez piensas en cómo sería tu vida si hubieras tomado otras decisiones?", "es-ES-ElviraNeural"),
    ("d1-line2", "Constantemente. Si hubiera estudiado medicina en vez de derecho, ahora sería cirujano.", "es-ES-AlvaroNeural"),
    ("d1-line3", "Y yo, si hubiese aceptado aquel trabajo en Buenos Aires, viviría allí ahora.", "es-ES-ElviraNeural"),
    ("d1-line4", "¿Te arrepientes? A veces actúas como si quisieras estar en otro lugar.", "es-ES-AlvaroNeural"),
    ("d1-line5", "No exactamente. Es que a veces pienso que si pudiera vivir dos vidas, elegiría las dos.", "es-ES-ElviraNeural"),
    ("d1-line6", "Te entiendo. Si tuviera la oportunidad de empezar de nuevo, estudiaría lo mismo pero viviría en otra ciudad.", "es-ES-AlvaroNeural"),
    ("d1-line7", "Mi madre habla como si supiera exactamente lo que debería haber hecho. Dice que debí haber sido abogada.", "es-ES-ElviraNeural"),
    ("d1-line8", "Las madres siempre hablan como si hubieran vivido nuestras vidas antes que nosotros.", "es-ES-AlvaroNeural"),
    ("d1-line9", "Jaja, es verdad. Pero si no hubiera seguido mi propio camino, no sería quien soy hoy.", "es-ES-ElviraNeural"),
    # D2: Discussing Regrets — Santiago de Chile (Chilean voices)
    ("d2-line1", "Tomás, ¿hay algo que ojalá hubieras hecho diferente en la vida?", "es-CL-CatalinaNeural"),
    ("d2-line2", "Sí, po. Si hubiera viajado más cuando era joven, tendría más experiencia del mundo.", "es-CL-LorenzoNeural"),
    ("d2-line3", "Yo también. Si hubiese aprendido inglés de chica, ahora no estaría luchando con las entrevistas de trabajo.", "es-CL-CatalinaNeural"),
    ("d2-line4", "Mi hermano gasta plata como si fuera millonario. Le dije que si siguiera así, se quedaría sin nada.", "es-CL-LorenzoNeural"),
    ("d2-line5", "Hay gente que vive como si no hubiera un mañana. A veces los envidio un poco.", "es-CL-CatalinaNeural"),
    ("d2-line6", "Si hubiera ahorrado desde los veinte, ya tendría mi departamento propio.", "es-CL-LorenzoNeural"),
    ("d2-line7", "Pero mira, si no hubiéramos pasado por todo eso, no seríamos las personas que somos ahora.", "es-CL-CatalinaNeural"),
    ("d2-line8", "Tenís razón. Al final, prefiero lo que tengo ahora. Aunque a veces actúo como si quisiera otra cosa.", "es-CL-LorenzoNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L5.2...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
