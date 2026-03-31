"""Generate all audio files for L8.8 Education & Teaching Methodology using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L8.8\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Pedagogy & Theory (12)
    ("el-constructivismo-sostiene", "El constructivismo sostiene que el aprendizaje se construye activamente a partir de la experiencia"),
    ("el-aprendizaje-significativo", "El aprendizaje significativo conecta los conocimientos nuevos con los saberes previos del estudiante"),
    ("la-zona-de-desarrollo", "La zona de desarrollo próximo es la distancia entre lo que el alumno sabe y lo que puede lograr con ayuda"),
    ("el-andamiaje-proporciona", "El andamiaje proporciona apoyo temporal que se retira gradualmente a medida que el alumno progresa"),
    ("la-educacion-diferenciada", "La educación diferenciada adapta la enseñanza a los diversos estilos y ritmos de aprendizaje"),
    ("la-taxonomia-de-bloom", "La taxonomía de Bloom clasifica los niveles de pensamiento desde recordar hasta crear"),
    ("el-aprendizaje-basado", "El aprendizaje basado en problemas presenta situaciones reales para desarrollar el pensamiento crítico"),
    ("la-metacognicion-es", "La metacognición es la capacidad de reflexionar sobre los propios procesos de aprendizaje"),
    ("la-motivacion-intrinseca", "La motivación intrínseca impulsa al estudiante a aprender por el placer del conocimiento"),
    ("el-aprendizaje-cooperativo", "El aprendizaje cooperativo fomenta la colaboración entre estudiantes para alcanzar objetivos comunes"),
    ("la-pedagogia-critica", "La pedagogía crítica cuestiona las relaciones de poder dentro del sistema educativo"),
    ("las-inteligencias-multiples", "Las inteligencias múltiples reconocen que cada persona aprende de maneras diferentes"),
    # Classroom Management (12)
    ("la-planificacion-didactica", "La planificación didáctica organiza los contenidos, actividades y tiempos de cada lección"),
    ("los-objetivos-de-aprendizaje", "Los objetivos de aprendizaje definen lo que el estudiante debe saber al final de la lección"),
    ("la-evaluacion-formativa", "La evaluación formativa permite ajustar la enseñanza durante el proceso de aprendizaje"),
    ("la-rubrica-establece", "La rúbrica establece criterios claros y niveles de desempeño para evaluar trabajos"),
    ("la-retroalimentacion-efectiva", "La retroalimentación efectiva es específica, oportuna y orientada al mejoramiento"),
    ("la-gestion-del-aula", "La gestión del aula crea un ambiente propicio para el aprendizaje y la convivencia"),
    ("la-evaluacion-sumativa", "La evaluación sumativa mide el aprendizaje al final de una unidad o curso"),
    ("las-estrategias-de-ensenanza", "Las estrategias de enseñanza deben adaptarse al contexto sociocultural de los alumnos"),
    ("la-inclusion-educativa", "La inclusión educativa garantiza el acceso y participación de todos los estudiantes"),
    ("el-diagnostico-inicial", "El diagnóstico inicial identifica los conocimientos previos y necesidades del grupo"),
    ("el-portafolio-del-estudiante", "El portafolio del estudiante documenta su progreso y reflexión a lo largo del curso"),
    ("la-disciplina-positiva", "La disciplina positiva establece límites claros sin recurrir al castigo punitivo"),
    # Curriculum Design (12)
    ("el-plan-de-estudios", "El plan de estudios estructura las materias y contenidos de un programa educativo"),
    ("las-competencias-transversales", "Las competencias transversales se desarrollan en todas las materias del currículo"),
    ("la-secuencia-didactica", "La secuencia didáctica ordena las actividades de aprendizaje de manera lógica y progresiva"),
    ("los-contenidos-curriculares", "Los contenidos curriculares deben ser pertinentes, actualizados y culturalmente relevantes"),
    ("el-perfil-de-egreso", "El perfil de egreso describe las competencias que el graduado debe demostrar"),
    ("la-adecuacion-curricular", "La adecuación curricular modifica el programa para atender necesidades educativas especiales"),
    ("los-estandares-educativos", "Los estándares educativos establecen expectativas comunes de lo que los estudiantes deben aprender"),
    ("la-interdisciplinariedad", "La interdisciplinariedad conecta diferentes materias para un aprendizaje más integrado"),
    ("el-aprendizaje-por-proyectos", "El aprendizaje por proyectos integra múltiples competencias en una tarea auténtica"),
    ("la-evaluacion-por-competencias", "La evaluación por competencias mide lo que el estudiante puede hacer, no solo lo que sabe"),
    ("el-curriculo-oculto", "El currículo oculto transmite valores y actitudes de manera implícita a través de la cultura escolar"),
    ("la-alineacion-curricular", "La alineación curricular asegura coherencia entre objetivos, actividades y evaluación"),
    # Educational Technology (12)
    ("el-aula-invertida", "El aula invertida transfiere la instrucción directa fuera del aula para usar el tiempo presencial en actividades prácticas"),
    ("la-gamificacion-aplica", "La gamificación aplica elementos de juego al proceso educativo para aumentar la motivación"),
    ("el-aprendizaje-hibrido", "El aprendizaje híbrido combina la instrucción presencial con actividades en línea"),
    ("la-plataforma-educativa", "La plataforma educativa centraliza recursos, tareas y comunicación entre docentes y estudiantes"),
    ("la-alfabetizacion-digital", "La alfabetización digital es una competencia esencial para el ciudadano del siglo XXI"),
    ("la-brecha-digital", "La brecha digital excluye a millones de estudiantes del acceso a la educación tecnológica"),
    ("los-recursos-educativos", "Los recursos educativos abiertos democratizan el acceso al conocimiento sin costo"),
    ("la-inteligencia-artificial", "La inteligencia artificial personaliza el aprendizaje según el ritmo y nivel de cada estudiante"),
    ("la-realidad-virtual", "La realidad virtual permite experiencias inmersivas que transforman el aprendizaje"),
    ("el-pensamiento-computacional", "El pensamiento computacional desarrolla habilidades de resolución de problemas sistemática"),
    ("la-evaluacion-adaptativa", "La evaluación adaptativa ajusta la dificultad de las preguntas según las respuestas del estudiante"),
    ("la-ciudadania-digital", "La ciudadanía digital enseña el uso responsable y ético de la tecnología"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Teacher Training Workshop — Santiago
    ("d1-line1", "Bienvenidos al taller de actualización docente. Hoy exploraremos cómo integrar la evaluación formativa en nuestra práctica diaria.", "es-CL-CatalinaNeural"),
    ("d1-line2", "Yo uso evaluaciones sumativas al final de cada unidad, pero mis estudiantes llegan al examen sin saber si van bien o mal.", "es-CL-LorenzoNeural"),
    ("d1-line3", "Exacto. La evaluación formativa permite ajustar la enseñanza durante el proceso, no después. ¿Alguien usa estrategias de retroalimentación continua?", "es-CL-CatalinaNeural"),
    ("d1-line4", "Yo implementé el aula invertida el semestre pasado. Los estudiantes ven videos en casa y en clase hacemos actividades prácticas con retroalimentación inmediata.", "es-CL-LorenzoNeural"),
    ("d1-line5", "¿Y la brecha digital? Muchos de mis alumnos no tienen internet estable en casa.", "es-CL-LorenzoNeural"),
    ("d1-line6", "Es un desafío real. Uso recursos educativos abiertos que los estudiantes pueden descargar en el laboratorio de la escuela.", "es-CL-LorenzoNeural"),
    ("d1-line7", "La educación diferenciada nos enseña que no hay una solución única. Debemos adaptar nuestras estrategias al contexto sociocultural de nuestros alumnos.", "es-CL-CatalinaNeural"),
    ("d1-line8", "Yo quiero hablar sobre la gamificación. ¿Realmente funciona o es solo una moda?", "es-CL-LorenzoNeural"),
    ("d1-line9", "Las investigaciones muestran que la gamificación aumenta la motivación intrínseca cuando se diseña bien. Pero no es magia; requiere planificación didáctica sólida.", "es-CL-CatalinaNeural"),
    ("d1-line10", "Me preocupa que los estudiantes se enfoquen en ganar puntos y no en aprender.", "es-CL-LorenzoNeural"),
    ("d1-line11", "Por eso es clave usar la taxonomía de Bloom: los puntos deben premiar los niveles altos — analizar, evaluar, crear — no solo recordar.", "es-CL-CatalinaNeural"),
    ("d1-line12", "Y las rúbricas son esenciales. Sin criterios claros, los estudiantes no saben qué se espera de ellos.", "es-CL-LorenzoNeural"),
    ("d1-line13", "Al final, todo vuelve al aprendizaje significativo: si conectamos los contenidos con la vida real del estudiante, la motivación viene sola.", "es-CL-LorenzoNeural"),
    ("d1-line14", "Exactamente. Recuerden: el andamiaje proporciona apoyo temporal. Nuestro objetivo es que los estudiantes vuelen solos.", "es-CL-CatalinaNeural"),
    ("d1-line15", "La metacognición también es clave. Cuando los alumnos reflexionan sobre cómo aprenden, aprenden mejor.", "es-CL-LorenzoNeural"),
    ("d1-line16", "Hermosa síntesis. Construyamos juntos una educación que prepare a nuestros estudiantes para un mundo en constante cambio.", "es-CL-CatalinaNeural"),
    # Dialogue 2: University Faculty Meeting on Curriculum Reform — Salamanca
    ("d2-line1", "Colegas, la razón de esta reunión es discutir la reforma del plan de estudios de nuestra facultad de Educación. Los datos del perfil de egreso muestran deficiencias.", "es-ES-AlvaroNeural"),
    ("d2-line2", "Nuestros graduados salen con teoría sólida pero sin competencias prácticas. El aprendizaje por proyectos debería tener más peso en el currículo.", "es-ES-ElviraNeural"),
    ("d2-line3", "Estoy de acuerdo. Además, necesitamos incorporar la alfabetización digital como competencia transversal, no como una materia aislada.", "es-ES-AlvaroNeural"),
    ("d2-line4", "¿Cómo proponéis lograr la alineación curricular? Los objetivos, las actividades y la evaluación deben ser coherentes.", "es-ES-AlvaroNeural"),
    ("d2-line5", "Sugiero que revisemos la secuencia didáctica de cada asignatura. Muchos contenidos se repiten sin profundización.", "es-ES-ElviraNeural"),
    ("d2-line6", "Y debemos actualizar los contenidos curriculares. La inteligencia artificial está transformando la educación y nuestro programa no la menciona.", "es-ES-AlvaroNeural"),
    ("d2-line7", "Paulo Freire nos enseñó que la pedagogía crítica cuestiona las relaciones de poder. Nuestro currículo debe formar educadores que piensen críticamente, no que repitan fórmulas.", "es-ES-ElviraNeural"),
    ("d2-line8", "La interdisciplinariedad también es clave. Los problemas educativos reales no se resuelven desde una sola disciplina.", "es-ES-AlvaroNeural"),
    ("d2-line9", "Propongo incluir la evaluación por competencias en lugar de exámenes memorísticos. Necesitamos medir lo que los estudiantes pueden hacer, no solo lo que saben recitar.", "es-ES-ElviraNeural"),
    ("d2-line10", "Y no olvidemos la adecuación curricular. Nuestros futuros profesores deben saber cómo adaptar su enseñanza a estudiantes con necesidades educativas especiales.", "es-ES-AlvaroNeural"),
    ("d2-line11", "La inclusión educativa no es un tema aparte; debe ser el eje de toda la formación docente.", "es-ES-ElviraNeural"),
    ("d2-line12", "También debemos abordar el currículo oculto. Lo que enseñamos implícitamente es tan importante como los contenidos formales.", "es-ES-AlvaroNeural"),
    ("d2-line13", "Los estándares educativos internacionales nos dan un marco. Pero cada contexto cultural requiere adaptación local.", "es-ES-ElviraNeural"),
    ("d2-line14", "Resumiendo: necesitamos un plan de estudios que forme docentes reflexivos, tecnológicamente competentes e inclusivos.", "es-ES-AlvaroNeural"),
    ("d2-line15", "Perfecto. Crearemos una comisión de reforma con representantes de todas las áreas. La educación del futuro se construye hoy.", "es-ES-AlvaroNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L8.8...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
