"""Generate all audio files for L7.4 Scientific & Environmental Spanish using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L7.4\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Scientific Method (12)
    ("la-hipotesis-nula-establece", "La hipótesis nula establece que no hay diferencia significativa"),
    ("el-grupo-de-control", "El grupo de control no recibe el tratamiento experimental"),
    ("la-variable-independiente", "La variable independiente es la que el investigador manipula"),
    ("el-margen-de-error", "El margen de error fue inferior al cinco por ciento"),
    ("la-muestra-representativa", "La muestra representativa refleja la diversidad de la población"),
    ("los-resultados-son-estadisticamente", "Los resultados son estadísticamente significativos con p menor a 0.05"),
    ("es-necesario-replicar", "Es necesario replicar el experimento para validar los hallazgos"),
    ("el-sesgo-de-confirmacion", "El sesgo de confirmación afecta la objetividad del estudio"),
    ("la-revision-por-pares", "La revisión por pares garantiza la calidad de la publicación"),
    ("se-aplico-un-diseno-experimental", "Se aplicó un diseño experimental de doble ciego"),
    ("la-correlacion-no-implica", "La correlación no implica causalidad"),
    ("los-datos-fueron-sometidos", "Los datos fueron sometidos a un análisis de regresión múltiple"),
    # Environmental Crisis (12)
    ("el-calentamiento-global", "El calentamiento global ha elevado la temperatura media en 1.2 grados"),
    ("la-huella-de-carbono", "La huella de carbono mide el impacto ambiental de nuestras actividades"),
    ("las-energias-renovables", "Las energías renovables son fundamentales para la transición energética"),
    ("la-biodiversidad-de-la-region", "La biodiversidad de la región está amenazada por la actividad humana"),
    ("la-deforestacion-del-amazonas", "La deforestación del Amazonas libera millones de toneladas de CO2"),
    ("el-efecto-invernadero", "El efecto invernadero atrapa el calor dentro de la atmósfera terrestre"),
    ("la-sostenibilidad-requiere", "La sostenibilidad requiere equilibrar las necesidades económicas y ecológicas"),
    ("el-desarrollo-sustentable", "El desarrollo sustentable busca satisfacer las necesidades del presente sin comprometer el futuro"),
    ("los-ecosistemas-marinos", "Los ecosistemas marinos sufren la acidificación de los océanos"),
    ("la-economia-circular", "La economía circular propone reducir, reutilizar y reciclar los recursos"),
    ("las-emisiones-de-gases", "Las emisiones de gases de efecto invernadero deben reducirse drásticamente"),
    ("el-derretimiento-de-los-glaciares", "El derretimiento de los glaciares está elevando el nivel del mar"),
    # Technical Writing (12)
    ("los-datos-arrojaron-que", "Los datos arrojaron que existe una tendencia creciente"),
    ("se-observo-una-correlacion", "Se observó una correlación entre la temperatura y la productividad"),
    ("cabe-mencionar-que", "Cabe mencionar que los resultados preliminares son prometedores"),
    ("los-hallazgos-sugieren", "Los hallazgos sugieren una relación causal entre ambas variables"),
    ("de-acuerdo-con-la-metodologia", "De acuerdo con la metodología empleada, se procedió a analizar las muestras"),
    ("se-procedio-a-analizar", "Se procedió a analizar los factores que inciden en el fenómeno"),
    ("a-partir-de-los-resultados", "A partir de los resultados obtenidos, se puede concluir que"),
    ("el-presente-estudio-tiene", "El presente estudio tiene como objetivo determinar el impacto de"),
    ("en-lo-que-respecta", "En lo que respecta al marco teórico, se consultaron las siguientes fuentes"),
    ("es-preciso-senalar", "Es preciso señalar las limitaciones inherentes a esta investigación"),
    ("la-evidencia-empirica", "La evidencia empírica respalda la hipótesis planteada"),
    ("se-recomienda-ampliar", "Se recomienda ampliar la muestra en futuras investigaciones"),
    # Science Communication (12)
    ("la-divulgacion-cientifica", "La divulgación científica acerca la ciencia al público general"),
    ("en-terminos-sencillos", "En términos sencillos, las células son los bloques de construcción de la vida"),
    ("esto-significa-que", "Esto significa que el planeta se calienta más rápido de lo previsto"),
    ("para-ponerlo-en-perspectiva", "Para ponerlo en perspectiva, cada segundo se destruyen dos hectáreas de bosque"),
    ("segun-los-expertos", "Según los expertos, la ventana de acción se está cerrando rápidamente"),
    ("la-evidencia-cientifica-demuestra", "La evidencia científica demuestra que el cambio climático es real"),
    ("los-cientificos-advierten", "Los científicos advierten sobre las consecuencias irreversibles"),
    ("un-estudio-reciente", "Un estudio reciente publicado en Nature reveló que"),
    ("la-comunidad-cientifica", "La comunidad científica ha alcanzado un consenso sobre este tema"),
    ("imaginemos-que-la-atmosfera", "Imaginemos que la atmósfera es como una manta que cubre la Tierra"),
    ("las-investigaciones-de-vanguardia", "Las investigaciones de vanguardia están transformando nuestra comprensión"),
    ("es-crucial-comunicar", "Es crucial comunicar la ciencia de manera accesible y rigurosa"),
]

DIALOGUE_LINES = [
    # D1: In the Research Lab — Santiago, Chile (Chilean voices)
    ("d1-line1", "Buenos días, Tomás. ¿Cómo van los resultados del experimento sobre contaminación del suelo?", "es-CL-CatalinaNeural"),
    ("d1-line2", "Los datos arrojaron que hay una correlación significativa entre el uso de pesticidas y la disminución de microorganismos.", "es-CL-LorenzoNeural"),
    ("d1-line3", "Interesante. ¿El margen de error es aceptable?", "es-CL-CatalinaNeural"),
    ("d1-line4", "Sí, fue inferior al tres por ciento. Además, la muestra representativa incluyó suelos de cinco regiones distintas.", "es-CL-LorenzoNeural"),
    ("d1-line5", "¿Controlaste por la variable de temperatura? Cabe mencionar que las condiciones climáticas podrían sesgar los resultados.", "es-CL-CatalinaNeural"),
    ("d1-line6", "Sí, se aplicó un diseño experimental que incluyó la temperatura como variable de control. Los resultados siguen siendo estadísticamente significativos.", "es-CL-LorenzoNeural"),
    ("d1-line7", "Excelente. Antes de enviar el artículo a revisión por pares, necesitamos replicar el experimento con una muestra más amplia.", "es-CL-CatalinaNeural"),
    ("d1-line8", "De acuerdo. También quiero incluir un análisis de regresión múltiple para fortalecer las conclusiones.", "es-CL-LorenzoNeural"),
    ("d1-line9", "Perfecto. Los hallazgos podrían tener implicaciones importantes para las políticas agrícolas de la región.", "es-CL-CatalinaNeural"),
    ("d1-line10", "Sí, es preciso señalar que ningún estudio previo ha analizado este fenómeno en suelos chilenos con esta profundidad.", "es-CL-LorenzoNeural"),
    ("d1-line11", "Eso es lo que hace esta investigación tan relevante. Preparemos el protocolo para la segunda fase.", "es-CL-CatalinaNeural"),
    ("d1-line12", "Perfecto, doctora. También debería consultar las fuentes del marco teórico para asegurarme de que estén actualizadas.", "es-CL-LorenzoNeural"),
    ("d1-line13", "Buena idea. La ciencia avanza rápido y no queremos citar datos obsoletos.", "es-CL-CatalinaNeural"),
    ("d1-line14", "Entendido. Tendré el borrador listo para la próxima semana.", "es-CL-LorenzoNeural"),
    ("d1-line15", "¡Adelante! Esta investigación puede hacer una diferencia real.", "es-CL-CatalinaNeural"),
    # D2: Environmental Conference — San José, Costa Rica (varied voices)
    ("d2-line1", "Bienvenidos al panel sobre cambio climático y biodiversidad en Centroamérica. Doctora Rojas, ¿cuál es el panorama actual?", "es-MX-DaliaNeural"),
    ("d2-line2", "Según los expertos del IPCC, la ventana de acción se está cerrando rápidamente. La evidencia científica demuestra que el calentamiento global está acelerándose.", "es-CO-SalomeNeural"),
    ("d2-line3", "Para ponerlo en perspectiva, Costa Rica alberga el cinco por ciento de la biodiversidad mundial en solo el 0.03 por ciento del territorio.", "es-ES-AlvaroNeural"),
    ("d2-line4", "Exacto. Y esa biodiversidad está amenazada. La deforestación, aunque se ha reducido aquí, sigue siendo crítica en la región.", "es-CO-SalomeNeural"),
    ("d2-line5", "¿Qué soluciones proponen?", "es-MX-DaliaNeural"),
    ("d2-line6", "Las energías renovables son fundamentales. Costa Rica ya genera más del noventa por ciento de su electricidad de fuentes renovables.", "es-ES-AlvaroNeural"),
    ("d2-line7", "En términos sencillos, necesitamos una economía circular. Reducir, reutilizar y reciclar no es un eslogan; es una necesidad científica.", "es-CO-SalomeNeural"),
    ("d2-line8", "¿Y el papel de la divulgación científica en todo esto?", "es-MX-DaliaNeural"),
    ("d2-line9", "Es crucial comunicar la ciencia de manera accesible. Imaginemos que la atmósfera es como una manta: cuanto más gruesa, más calor atrapa.", "es-ES-AlvaroNeural"),
    ("d2-line10", "La comunidad científica ha alcanzado un consenso claro. Ahora necesitamos que los gobiernos actúen con la misma urgencia.", "es-CO-SalomeNeural"),
    ("d2-line11", "¿Qué papel juegan los pueblos indígenas en la conservación?", "es-MX-DaliaNeural"),
    ("d2-line12", "Los territorios indígenas protegen el ochenta por ciento de la biodiversidad mundial. Su conocimiento ecológico ancestral es invaluable para la ciencia moderna.", "es-CO-SalomeNeural"),
    ("d2-line13", "Un estudio reciente publicado en Nature reveló que las áreas gestionadas por comunidades indígenas tienen tasas de deforestación significativamente menores.", "es-ES-AlvaroNeural"),
    ("d2-line14", "Las investigaciones de vanguardia están transformando nuestra comprensión. Gracias a ambos por este panel tan enriquecedor.", "es-MX-DaliaNeural"),
    ("d2-line15", "Gracias. El desarrollo sustentable no es una opción; es la única vía posible.", "es-CO-SalomeNeural"),
    ("d2-line16", "Así es. Como científicos, nuestro deber es comunicar con claridad y actuar con urgencia.", "es-ES-AlvaroNeural"),
    ("d2-line17", "¡Que estas palabras nos inspiren a todos! Un aplauso para nuestros panelistas.", "es-MX-DaliaNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L7.4...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
