"""Generate all audio files for L5.4 Discourse Markers & Connectors using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L5.4\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Contrast Connectors (12)
    ("sin-embargo-propuesta", "Sin embargo, la propuesta tiene varios puntos débiles"),
    ("no-obstante-resultados", "No obstante, los resultados fueron positivos"),
    ("en-cambio-otros-expertos", "En cambio, otros expertos opinan lo contrario"),
    ("por-el-contrario-evidencia", "Por el contrario, la evidencia sugiere lo opuesto"),
    ("a-pesar-de-eso-gobierno", "A pesar de eso, el gobierno mantuvo su posición"),
    ("con-todo-debemos-reconocer", "Con todo, debemos reconocer los avances logrados"),
    ("ahora-bien-contexto-historico", "Ahora bien, hay que considerar el contexto histórico"),
    ("al-contrario-economia-crecio", "Al contrario de lo esperado, la economía creció"),
    ("mientras-que-apoyan-reforma", "Mientras que unos apoyan la reforma, otros la rechazan"),
    ("a-diferencia-europa-latam", "A diferencia de Europa, América Latina apuesta por otro modelo"),
    ("con-todo-y-eso-contribucion", "Con todo y eso, no se puede negar su contribución"),
    ("si-bien-es-cierto-riesgos", "Si bien es cierto que hay riesgos, los beneficios son mayores"),
    # Cause & Consequence (12)
    ("por-lo-tanto-inversion", "Por lo tanto, la inversión debe aumentar"),
    ("en-consecuencia-nuevas-leyes", "En consecuencia, se aprobaron nuevas leyes"),
    ("de-ahi-que-replantear", "De ahí que sea necesario replantear la estrategia"),
    ("dado-que-costos-subieron", "Dado que los costos subieron, reducimos el presupuesto"),
    ("puesto-que-no-consenso", "Puesto que no hay consenso, se pospuso la votación"),
    ("ya-que-mencionas-tema", "Ya que mencionas el tema, hablemos de ello a fondo"),
    ("de-modo-que-solucion-obvia", "De modo que la solución era obvia desde el principio"),
    ("asi-pues-queda-demostrado", "Así pues, queda demostrado que el método funciona"),
    ("por-consiguiente-actuar", "Por consiguiente, debemos actuar con urgencia"),
    ("a-causa-de-sequia", "A causa de la sequía, miles de familias perdieron sus cosechas"),
    ("gracias-cooperacion-acuerdo", "Gracias a la cooperación internacional, se logró el acuerdo"),
    ("como-resultado-protestas", "Como resultado de las protestas, el gobierno cedió"),
    # Concession & Addition (12)
    ("ademas-considerar-efectos", "Además, es importante considerar los efectos a largo plazo"),
    ("asimismo-estudios-confirman", "Asimismo, los estudios confirman la tendencia"),
    ("incluso-criticos-reconocen", "Incluso los críticos más duros reconocen el progreso"),
    ("a-pesar-de-que-camino", "A pesar de que el camino es difícil, seguiremos adelante"),
    ("si-bien-propuesta-ambiciosa", "Si bien la propuesta es ambiciosa, carece de financiamiento"),
    ("aunque-parezca-contradictorio", "Aunque parezca contradictorio, ambas posturas tienen mérito"),
    ("aun-cuando-cifras-mejoraron", "Aun cuando las cifras mejoraron, persiste la desigualdad"),
    ("de-igual-manera-impacto", "De igual manera, se debe analizar el impacto ambiental"),
    ("por-otra-parte-educacion", "Por otra parte, la educación juega un papel fundamental"),
    ("es-mas-encuestas-indican", "Es más, las encuestas indican un cambio de opinión"),
    ("aparte-de-eso-opinion-publica", "Aparte de eso, hay que tener en cuenta la opinión pública"),
    ("no-solo-eso-economia", "No solo eso, sino que también afecta la economía regional"),
    # Hedging & Academic (12)
    ("cabe-senalar-fenomeno", "Cabe señalar que este fenómeno no es exclusivo de una región"),
    ("conviene-destacar-educacion", "Conviene destacar la importancia de la educación bilingüe"),
    ("es-preciso-mencionar-datos", "Es preciso mencionar que los datos son preliminares"),
    ("se-podria-argumentar", "Se podría argumentar que la tecnología tiene un doble filo"),
    ("no-se-puede-negar-avances", "No se puede negar que ha habido avances significativos"),
    ("cabria-preguntarse-politica", "Cabría preguntarse si esta política es sostenible"),
    ("dicho-de-otro-modo", "Dicho de otro modo, el modelo actual está agotado"),
    ("en-definitiva-colaboracion", "En definitiva, la clave está en la colaboración"),
    ("desde-esta-perspectiva", "Desde esta perspectiva, el problema adquiere otra dimensión"),
    ("es-necesario-subrayar-muestra", "Es necesario subrayar que la muestra es limitada"),
    ("todo-parece-indicar-tendencia", "Todo parece indicar que la tendencia continuará"),
    ("en-resumidas-cuentas-datos", "En resumidas cuentas, los datos respaldan la hipótesis"),
]

DIALOGUE_LINES = [
    # D1: Debate on Urban Development — Lima (Venezuelan voices as closest for Peru)
    ("d1-line1", "Buenas noches. El tema de hoy: ¿debe la ciudad priorizar el transporte público o las autopistas? Comencemos con usted, señor Ramos.", "es-VE-PaolaNeural"),
    ("d1-line2", "Gracias. Cabe señalar que Lima enfrenta una crisis de movilidad. Por lo tanto, debemos invertir masivamente en el metro y los buses.", "es-VE-SebastianNeural"),
    ("d1-line3", "Sin embargo, señor Ramos, no podemos ignorar que millones de limeños dependen de sus vehículos. A diferencia de ciudades europeas, nuestra infraestructura no está preparada.", "es-VE-SebastianNeural"),
    ("d1-line4", "No obstante, los datos muestran que el 70% de la contaminación viene de los autos privados. En consecuencia, reducir su uso es urgente.", "es-VE-SebastianNeural"),
    ("d1-line5", "Si bien es cierto que la contaminación es grave, la solución no puede ser eliminar los autos de la noche a la mañana. Además, las familias necesitan opciones reales antes de dejar su vehículo.", "es-VE-SebastianNeural"),
    ("d1-line6", "A pesar de eso, ciudades como Bogotá y Medellín han demostrado que se puede hacer la transición. De ahí que necesitemos voluntad política.", "es-VE-SebastianNeural"),
    ("d1-line7", "Se podría argumentar que esos modelos no aplican directamente a Lima. Con todo, estoy de acuerdo en que debemos mejorar el transporte público — pero gradualmente.", "es-VE-SebastianNeural"),
    ("d1-line8", "En definitiva, ambos coinciden en la necesidad de mejorar el sistema. Gracias por este debate tan enriquecedor.", "es-VE-PaolaNeural"),
    # D2: Academic Panel on AI in Education — Montevideo (Argentine voices as closest for Uruguay)
    ("d2-line1", "Bueno, la pregunta central es: ¿la inteligencia artificial mejorará la educación o la perjudicará? Es preciso mencionar que los estudios aún son limitados.", "es-AR-ElenaNeural"),
    ("d2-line2", "Desde esta perspectiva, conviene destacar que la IA puede personalizar el aprendizaje. No obstante, el rol del docente sigue siendo insustituible.", "es-AR-TomasNeural"),
    ("d2-line3", "Asimismo, debemos considerar el acceso desigual a la tecnología. Dado que no todos los estudiantes tienen las mismas herramientas, la brecha digital podría ampliarse.", "es-AR-ElenaNeural"),
    ("d2-line4", "Por el contrario, algunos argumentan que la IA reduce costos y democratiza el acceso. Todo parece indicar que depende de la implementación.", "es-AR-TomasNeural"),
    ("d2-line5", "Cabría preguntarse si estamos preparados para regular esta tecnología en el aula. Aun cuando las intenciones sean buenas, los riesgos existen.", "es-AR-ElenaNeural"),
    ("d2-line6", "No se puede negar que hay riesgos. Ahora bien, también es cierto que la educación tradicional tiene sus propias limitaciones.", "es-AR-TomasNeural"),
    ("d2-line7", "De modo que la clave no es elegir entre IA y educación tradicional, sino encontrar el equilibrio correcto.", "es-AR-ElenaNeural"),
    ("d2-line8", "En resumidas cuentas, necesitamos más investigación, mejor regulación y, sobre todo, escuchar a los docentes.", "es-AR-TomasNeural"),
    ("d2-line9", "Completamente de acuerdo. Por consiguiente, propongo que formemos un comité de seguimiento. ¿Le parece?", "es-AR-ElenaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L5.4...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
