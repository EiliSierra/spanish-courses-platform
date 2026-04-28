"""Generate all audio files for L6.1 Complex Sentence Architecture using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L6.1\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Relative Clauses (12)
    ("persona-con-quien-hable", "La persona con quien hablé ayer me dio la información"),
    ("libro-cuyo-autor", "El libro cuyo autor ganó el Nobel es fascinante"),
    ("lo-cual-demuestra", "Lo cual demuestra que teníamos razón desde el principio"),
    ("estudiantes-a-los-cuales", "Los estudiantes a los cuales les asigné el proyecto son brillantes"),
    ("razon-por-la-cual", "La razón por la cual renunció sigue siendo un misterio"),
    ("lo-que-mas-sorprendio", "Lo que más me sorprendió fue su honestidad"),
    ("doctora-a-la-cual", "La doctora, a la cual consulté, me recetó un tratamiento nuevo"),
    ("situacion-cuya-complejidad", "Es una situación cuya complejidad nadie anticipó"),
    ("paises-en-los-cuales", "Los países en los cuales se habla español comparten tradiciones"),
    ("candidato-por-quien", "El candidato por quien votamos resultó ser incompetente"),
    ("lo-que-pasa-es-que", "Lo que pasa es que no hemos recibido la autorización"),
    ("empresa-cuyas-acciones", "La empresa cuyas acciones cayeron anunció despidos masivos"),
    # Nominalization (12)
    ("hecho-de-que-no-hayan", "El hecho de que no hayan respondido es preocupante"),
    ("lo-interesante-es-que", "Lo interesante es que ninguno de los expertos coincidió"),
    ("manera-de-hablar", "Su manera de hablar refleja años de experiencia diplomática"),
    ("ser-humano-capacidad", "El ser humano tiene la capacidad de adaptarse a cualquier entorno"),
    ("lo-bueno-y-lo-malo", "Lo bueno y lo malo de vivir en la ciudad es la intensidad"),
    ("poder-de-la-palabra", "El poder de la palabra escrita ha transformado civilizaciones"),
    ("lo-fundamental-es-que", "Lo fundamental es que se respeten los derechos de todos"),
    ("insistencia-en-negar", "Su insistencia en negar los hechos debilitó su argumento"),
    ("querer-controlarlo-todo", "El querer controlarlo todo es una fuente de estrés"),
    ("lo-que-necesitamos", "Lo que necesitamos es un enfoque completamente diferente"),
    ("saber-no-ocupa-lugar", "El saber no ocupa lugar, como dice el refrán"),
    ("lo-sorprendente-fue", "Lo sorprendente fue la rapidez con que se resolvió el conflicto"),
    # Complex Subordination (12)
    ("aunque-sabia-que-no", "Aunque sabía que no debería haberlo dicho, no pudo evitar mencionar que la propuesta tenía fallos"),
    ("es-evidente-que-quienes", "Es evidente que quienes participaron en el estudio no sabían que estaban siendo observados"),
    ("me-pregunto-si-habra", "Me pregunto si habrá alguien que sepa exactamente lo que ocurrió aquella noche"),
    ("informe-que-presento", "El informe que presentó el comité sugiere que las medidas que se tomaron fueron insuficientes"),
    ("no-creo-que-sea-posible", "No creo que sea posible que terminemos antes de que anochezca, a menos que todos colaboren"),
    ("resulta-que-la-persona", "Resulta que la persona a la que habíamos contratado no tenía la experiencia que decía tener"),
    ("si-bien-es-cierto", "Si bien es cierto que la economía mejoró, no se puede negar que la desigualdad aumentó"),
    ("lo-que-no-entiendo", "Lo que no entiendo es por qué insisten en que aceptemos condiciones que claramente nos perjudican"),
    ("dado-que-la-situacion", "Dado que la situación era tan compleja que ningún abogado quería asumir el caso, tuvimos que buscar ayuda internacional"),
    ("quiero-que-sepas-que", "Quiero que sepas que, aunque no siempre lo demuestre, valoro todo lo que haces por nosotros"),
    ("parece-mentira-que", "Parece mentira que después de tantos años todavía no hayamos encontrado una solución que funcione"),
    ("a-pesar-de-que-advertimos", "A pesar de que le advertimos que el proyecto fracasaría si no cambiaba de estrategia, siguió adelante"),
    # Conditional Advanced (12)
    ("de-haberlo-sabido", "De haberlo sabido antes, habría tomado una decisión completamente diferente"),
    ("siempre-y-cuando", "Siempre y cuando se mantengan las condiciones actuales, el acuerdo seguirá vigente"),
    ("a-menos-que-presenten", "A menos que presenten pruebas convincentes, el juez desestimará el caso"),
    ("con-tal-de-que-llegues", "Con tal de que llegues a tiempo, no importa qué medio de transporte uses"),
    ("a-condicion-de-que", "A condición de que se firme el contrato esta semana, iniciaremos la obra el lunes"),
    ("por-si-acaso-llueve", "Por si acaso llueve, lleva un paraguas y una chaqueta impermeable"),
    ("si-hubiera-estudiado", "Si hubiera estudiado medicina en vez de derecho, hoy estaría trabajando en un hospital"),
    ("de-no-ser-por-tu", "De no ser por tu ayuda, no habríamos podido completar el proyecto a tiempo"),
    ("en-caso-de-que", "En caso de que necesiten más información, no duden en contactarnos"),
    ("si-yo-fuera-tu", "Si yo fuera tú, habría aceptado la oferta sin pensarlo dos veces"),
    ("a-no-ser-que-cambien", "A no ser que cambien las políticas, los resultados serán los mismos"),
    ("de-haber-tenido-mas", "De haber tenido más recursos, la investigación habría producido mejores resultados"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Constitutional Debate — Salamanca (es-ES voices)
    ("d1-line1", "La cuestión fundamental es si la ley, cuyo objetivo era proteger la libertad de expresión, ha logrado lo que se propuso.", "es-ES-AlvaroNeural"),
    ("d1-line2", "Lo interesante es que, a pesar de que la ley fue aprobada por unanimidad, los resultados no han sido los que esperábamos.", "es-ES-ElviraNeural"),
    ("d1-line3", "Precisamente. De haber anticipado estas consecuencias, el parlamento habría redactado el artículo tercero de manera diferente.", "es-ES-AlvaroNeural"),
    ("d1-line4", "No estoy de acuerdo. El hecho de que los resultados sean mixtos no significa que la ley en sí sea defectuosa.", "es-ES-ElviraNeural"),
    ("d1-line5", "Pero los juristas con quienes consulté coinciden en que el problema radica en la ambigüedad del texto.", "es-ES-AlvaroNeural"),
    ("d1-line6", "Siempre y cuando se mantenga el espíritu de la ley, las interpretaciones pueden adaptarse. Lo que no podemos hacer es descartarla por completo.", "es-ES-ElviraNeural"),
    ("d1-line7", "Reconozco que tiene razón en eso. A condición de que se revisen los artículos problemáticos, la reforma podría funcionar.", "es-ES-AlvaroNeural"),
    ("d1-line8", "Exacto. Lo fundamental es que el debate continúe con rigor académico, no con posiciones ideológicas.", "es-ES-ElviraNeural"),
    # Dialogue 2: Editorial Meeting — Bogota (es-CO voices)
    ("d2-line1", "Lo que necesitamos es un enfoque que conecte la investigación con lo que la gente realmente vive a diario.", "es-CO-SalomeNeural"),
    ("d2-line2", "El problema es que las fuentes con las cuales hemos trabajado no quieren ser citadas, lo cual dificulta la verificación.", "es-CO-GonzaloNeural"),
    ("d2-line3", "Entiendo, pero a menos que tengamos datos verificables, no podemos publicar. Nuestra credibilidad depende de ello.", "es-CO-SalomeNeural"),
    ("d2-line4", "De no ser por el testimonio del funcionario cuya identidad protegemos, no tendríamos nada.", "es-CO-GonzaloNeural"),
    ("d2-line5", "Lo sorprendente es que nadie más haya investigado este tema, dado que las pruebas son bastante accesibles.", "es-CO-SalomeNeural"),
    ("d2-line6", "Quizás sea porque el asunto involucra a personas con quienes los otros medios tienen compromisos económicos.", "es-CO-GonzaloNeural"),
    ("d2-line7", "Razón de más para publicarlo. Con tal de que cada dato esté respaldado por documentos, seguimos adelante.", "es-CO-SalomeNeural"),
    ("d2-line8", "De acuerdo. Su manera de abordar estos temas es lo que distingue a este periódico. Preparo el borrador para mañana.", "es-CO-GonzaloNeural"),
    ("d2-line9", "Perfecto. Y recuerda: lo que escribamos hoy será lo que la historia juzgue mañana.", "es-CO-SalomeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L6.1...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
