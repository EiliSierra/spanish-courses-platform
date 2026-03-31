"""Generate all audio files for L5.7 Academic & Literary Spanish using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L5.7\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Reported Speech (12)
    ("dijo-que-estaba-cansado", "Dijo que estaba cansado"),
    ("afirmo-que-el-proyecto-era-viable", "Afirmó que el proyecto era viable"),
    ("nego-que-hubiera-participado", "Negó que hubiera participado"),
    ("explico-que-los-datos-confirmaban", "Explicó que los datos confirmaban la teoría"),
    ("menciono-que-vendria-al-congreso", "Mencionó que vendría al congreso"),
    ("segun-el-investigador", "Según el investigador, los resultados son prometedores"),
    ("de-acuerdo-con-el-estudio", "De acuerdo con el estudio, la hipótesis se cumple"),
    ("senalo-que-habria-cambios", "Señaló que habría cambios significativos"),
    ("sostuvo-que-la-metodologia", "Sostuvo que la metodología era adecuada"),
    ("concluyo-que-se-necesitaba", "Concluyó que se necesitaba más investigación"),
    ("admitio-que-el-modelo-tenia", "Admitió que el modelo tenía limitaciones"),
    ("insistio-en-que-los-resultados", "Insistió en que los resultados eran confiables"),
    # Academic Vocabulary (12)
    ("la-hipotesis-fue-rechazada", "La hipótesis fue rechazada por los datos"),
    ("el-marco-teorico-se-basa", "El marco teórico se basa en tres pilares"),
    ("la-metodologia-combina-enfoques", "La metodología combina enfoques cualitativos y cuantitativos"),
    ("los-hallazgos-contradicen", "Los hallazgos contradicen estudios previos"),
    ("cabe-destacar-que-la-muestra", "Cabe destacar que la muestra es representativa"),
    ("es-menester-senalar", "Es menester señalar las limitaciones del estudio"),
    ("a-modo-de-conclusion", "A modo de conclusión, los datos respaldan la tesis"),
    ("el-planteamiento-del-problema", "El planteamiento del problema es innovador"),
    ("las-variables-independientes", "Las variables independientes fueron controladas"),
    ("el-analisis-arrojo-resultados", "El análisis arrojó resultados inesperados"),
    ("la-revision-bibliografica", "La revisión bibliográfica abarca veinte años"),
    ("los-datos-empiricos-corroboran", "Los datos empíricos corroboran la teoría"),
    # Literary Analysis (12)
    ("el-argumento-de-la-novela", "El argumento de la novela es complejo"),
    ("la-trama-se-desarrolla", "La trama se desarrolla en tres actos"),
    ("el-desenlace-fue-inesperado", "El desenlace fue inesperado y conmovedor"),
    ("el-narrador-omnisciente", "El narrador omnisciente revela los pensamientos"),
    ("la-metafora-del-rio", "La metáfora del río simboliza el tiempo"),
    ("el-simbolismo-es-central", "El simbolismo es central en la obra"),
    ("el-punto-de-vista-alterna", "El punto de vista alterna entre dos personajes"),
    ("el-tono-melancolico-domina", "El tono melancólico domina el relato"),
    ("el-protagonista-experimenta", "El protagonista experimenta una transformación"),
    ("la-ironia-dramatica-crea", "La ironía dramática crea tensión narrativa"),
    ("el-contexto-historico-influye", "El contexto histórico influye en la interpretación"),
    ("el-autor-emplea-lenguaje", "El autor emplea un lenguaje figurado"),
    # Summarizing & Paraphrasing (12)
    ("en-sintesis-la-evidencia", "En síntesis, la evidencia es contundente"),
    ("para-resumir-hay-tres-factores", "Para resumir, hay tres factores principales"),
    ("en-otras-palabras-el-sistema", "En otras palabras, el sistema necesita reformas"),
    ("dicho-de-otro-modo", "Dicho de otro modo, la correlación no implica causalidad"),
    ("el-autor-sostiene-que", "El autor sostiene que la educación es la clave"),
    ("se-puede-inferir-que", "Se puede inferir que el modelo es insuficiente"),
    ("en-definitiva-los-resultados", "En definitiva, los resultados hablan por sí mismos"),
    ("lo-anterior-sugiere", "Lo anterior sugiere una tendencia creciente"),
    ("cabe-concluir-que", "Cabe concluir que la intervención fue eficaz"),
    ("a-grandes-rasgos", "A grandes rasgos, el panorama es favorable"),
    ("en-pocas-palabras", "En pocas palabras, se requiere un cambio de paradigma"),
    ("como-se-ha-demostrado", "Como se ha demostrado, la hipótesis es válida"),
]

DIALOGUE_LINES = [
    # D1: University Seminar — Quito, Ecuador (Colombian voices as closest for Ecuador)
    ("d1-line1", "Buenas tardes. Hoy analizaremos el articulo de Ramirez sobre cambio climatico y migracion. Andrea, ¿podrias resumir la tesis principal?", "es-CO-SalomeNeural"),
    ("d1-line2", "Si, profesora. El autor sostiene que el cambio climatico sera el principal motor de migracion en America Latina para 2040.", "es-CO-SalomeNeural"),
    ("d1-line3", "Bien. ¿Y cual es el marco teorico que utiliza?", "es-CO-SalomeNeural"),
    ("d1-line4", "Se basa en la teoria de sistemas complejos. Cabe destacar que combina datos cuantitativos con estudios de caso cualitativos.", "es-CO-GonzaloNeural"),
    ("d1-line5", "Excelente. Ahora, ¿alguien podria senalar las limitaciones del estudio?", "es-CO-SalomeNeural"),
    ("d1-line6", "Es menester senalar que la muestra solo abarca tres paises. Dicho de otro modo, los hallazgos no son generalizables a toda la region.", "es-CO-SalomeNeural"),
    ("d1-line7", "De acuerdo con el propio autor, se necesitan mas estudios longitudinales. El admitio que los datos eran preliminares.", "es-CO-GonzaloNeural"),
    ("d1-line8", "A modo de conclusion, ¿que se puede inferir del articulo para las politicas publicas ecuatorianas?", "es-CO-SalomeNeural"),
    ("d1-line9", "En sintesis, se puede inferir que Ecuador necesita politicas de adaptacion climatica para reducir la presion migratoria interna.", "es-CO-SalomeNeural"),
    # D2: Book Club — San José, Costa Rica (Colombian voices as closest for Costa Rica)
    ("d2-line1", "Acabo de terminar Cien anos de soledad. El desenlace me dejo sin palabras.", "es-CO-SalomeNeural"),
    ("d2-line2", "¿Verdad? La trama se desarrolla de manera circular. Segun varios criticos, eso refleja la vision ciclica de la historia latinoamericana.", "es-CO-GonzaloNeural"),
    ("d2-line3", "El narrador omnisciente es fascinante. Revela el futuro y el pasado al mismo tiempo, como si el tiempo no fuera lineal.", "es-CO-SalomeNeural"),
    ("d2-line4", "Exacto. Y la metafora de la soledad como condena familiar es el hilo conductor de toda la novela.", "es-CO-GonzaloNeural"),
    ("d2-line5", "El simbolismo del hielo es brillante. Garcia Marquez dijo que queria capturar \"el asombro ante lo cotidiano.\"", "es-CO-SalomeNeural"),
    ("d2-line6", "En otras palabras, el realismo magico no inventa la magia; la encuentra en la realidad. El punto de vista del narrador hace que lo imposible parezca natural.", "es-CO-GonzaloNeural"),
    ("d2-line7", "El tono melancolico de las ultimas paginas me recordo a Pedro Paramo de Rulfo. ¿Creen que hay influencia directa?", "es-CO-SalomeNeural"),
    ("d2-line8", "Sin duda. Garcia Marquez afirmo que Rulfo habia sido una influencia fundamental. El argumento de Pedro Paramo tambien explora la memoria y la muerte.", "es-CO-GonzaloNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L5.7...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
