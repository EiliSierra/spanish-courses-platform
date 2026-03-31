"""Generate all audio files for L7.6 Diplomacy & Conflict Resolution using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L7.6\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Diplomatic Language (12)
    ("proponemos-que-ambas", "Proponemos que ambas partes se comprometan a un alto el fuego inmediato"),
    ("instamos-a-la-comunidad", "Instamos a la comunidad internacional a tomar medidas urgentes"),
    ("exhortamos-a-las-partes", "Exhortamos a las partes a retomar las negociaciones de buena fe"),
    ("hacemos-un-llamado", "Hacemos un llamado a la paz y al diálogo como única vía de solución"),
    ("el-comunicado-conjunto", "El comunicado conjunto establece los términos del acuerdo bilateral"),
    ("la-delegacion-expresa", "La delegación expresa su más enérgica condena ante los hechos"),
    ("reafirmamos-nuestro", "Reafirmamos nuestro compromiso con los principios del derecho internacional"),
    ("la-resolucion-fue-adoptada", "La resolución fue adoptada por unanimidad del Consejo de Seguridad"),
    ("solicitamos-una-sesion", "Solicitamos una sesión extraordinaria para abordar esta crisis humanitaria"),
    ("la-soberania-de-cada", "La soberanía de cada nación debe ser respetada sin excepciones"),
    ("abogamos-por-una", "Abogamos por una solución pacífica y duradera al conflicto"),
    ("las-partes-firmantes", "Las partes firmantes se comprometen a cumplir los términos acordados"),
    # Negotiation Mastery (12)
    ("estamos-dispuestos-a-hacer", "Estamos dispuestos a hacer concesiones si la otra parte muestra la misma voluntad"),
    ("cual-seria-un-punto", "¿Cuál sería un punto medio aceptable para ambas delegaciones?"),
    ("la-propuesta-es-mutuamente", "La propuesta es mutuamente beneficiosa para todas las partes involucradas"),
    ("necesitamos-garantias", "Necesitamos garantías verificables antes de avanzar con el acuerdo"),
    ("proponemos-un-periodo", "Proponemos un período de prueba de seis meses con revisiones trimestrales"),
    ("esta-clausula-es", "Esta cláusula es innegociable para nuestra delegación"),
    ("sugerimos-redactar", "Sugerimos redactar un memorándum de entendimiento como primer paso"),
    ("las-condiciones-previas", "Las condiciones previas deben cumplirse antes de iniciar la segunda fase"),
    ("respetamos-su-posicion", "Respetamos su posición, pero consideramos que hay margen para el diálogo"),
    ("el-acuerdo-marco", "El acuerdo marco establece los principios generales de cooperación"),
    ("ambas-partes-se-beneficiarian", "Ambas partes se beneficiarían de un enfoque más flexible"),
    ("dejemos-de-lado", "Dejemos de lado las diferencias y centrémonos en lo que nos une"),
    # Conflict Mediation (12)
    ("entiendo-la-perspectiva", "Entiendo la perspectiva de ambas partes y creo que hay puntos en común"),
    ("podemos-encontrar-un", "¿Podemos encontrar un terreno común que satisfaga a todos?"),
    ("propongo-una-tregua", "Propongo una tregua para que ambas partes reflexionen con calma"),
    ("busquemos-una-solucion", "Busquemos una solución de compromiso que respete los intereses de todos"),
    ("es-fundamental-que-cada", "Es fundamental que cada parte escuche sin interrumpir a la otra"),
    ("la-mediacion-busca", "La mediación busca restaurar la comunicación entre las partes en conflicto"),
    ("reconozcamos-que-ambas", "Reconozcamos que ambas partes tienen preocupaciones legítimas"),
    ("la-justicia-restaurativa", "La justicia restaurativa se centra en reparar el daño, no en castigar"),
    ("antes-de-buscar", "Antes de buscar soluciones, necesitamos entender las causas del conflicto"),
    ("el-dialogo-es-siempre", "El diálogo es siempre preferible a la confrontación"),
    ("les-pido-que-mantengan", "Les pido que mantengan el respeto mutuo durante esta sesión"),
    ("un-mediador-imparcial", "Un mediador imparcial puede ayudar a desbloquear las negociaciones"),
    # International Relations (12)
    ("el-tratado-bilateral", "El tratado bilateral fue ratificado por los parlamentos de ambos países"),
    ("la-cumbre-de-lideres", "La cumbre de líderes mundiales abordará el cambio climático y la migración"),
    ("las-sanciones-economicas", "Las sanciones económicas buscan presionar sin recurrir a la fuerza militar"),
    ("el-derecho-internacional", "El derecho internacional humanitario protege a los civiles en zonas de conflicto"),
    ("la-asamblea-general", "La Asamblea General de las Naciones Unidas se reúne cada septiembre en Nueva York"),
    ("el-embargo-comercial", "El embargo comercial ha tenido consecuencias devastadoras para la población civil"),
    ("los-acuerdos-de-paz", "Los acuerdos de paz de Colombia representan un hito en la diplomacia regional"),
    ("la-diplomacia-preventiva", "La diplomacia preventiva busca evitar los conflictos antes de que escalen"),
    ("las-organizaciones-no", "Las organizaciones no gubernamentales desempeñan un papel crucial en la ayuda humanitaria"),
    ("el-multilateralismo-es", "El multilateralismo es esencial para abordar los desafíos globales del siglo XXI"),
    ("la-autodeterminacion", "La autodeterminación de los pueblos es un principio fundamental de la carta de la ONU"),
    ("los-cascos-azules", "Los cascos azules son las fuerzas de paz de las Naciones Unidas"),
]

DIALOGUE_LINES = [
    # D1: UN-Style Negotiation — Geneva (varied voices for international setting)
    ("d1-line1", "Estimados delegados, la situación en la frontera sur exige una respuesta coordinada e inmediata.", "es-MX-DaliaNeural"),
    ("d1-line2", "Mi delegación comparte esa preocupación. Sin embargo, necesitamos garantías verificables antes de comprometer recursos.", "es-ES-AlvaroNeural"),
    ("d1-line3", "Proponemos un acuerdo marco que establezca los principios generales de cooperación humanitaria en la región.", "es-MX-DaliaNeural"),
    ("d1-line4", "Respetamos su posición, pero consideramos que hay margen para un enfoque más flexible en la cuestión de los plazos.", "es-CL-LorenzoNeural"),
    ("d1-line5", "¿Cuál sería un punto medio aceptable para su delegación? Estamos dispuestos a hacer concesiones en los plazos si se mantienen los objetivos humanitarios.", "es-MX-DaliaNeural"),
    ("d1-line6", "Sugerimos un período de prueba de seis meses con revisiones trimestrales. Eso nos daría tiempo para evaluar la eficacia del programa.", "es-ES-AlvaroNeural"),
    ("d1-line7", "Mi delegación apoya esa propuesta. Pero la cláusula de financiamiento es innegociable: los fondos deben ser supervisados por un organismo independiente.", "es-CL-LorenzoNeural"),
    ("d1-line8", "Entendemos su posición. La propuesta es mutuamente beneficiosa si logramos acordar los mecanismos de supervisión.", "es-MX-DaliaNeural"),
    ("d1-line9", "Creo que hay terreno común. Propongo que las tres delegaciones redacten un borrador conjunto para la próxima sesión.", "es-CO-GonzaloNeural"),
    ("d1-line10", "Aceptamos. Reafirmamos nuestro compromiso con los principios del derecho internacional humanitario.", "es-ES-AlvaroNeural"),
    ("d1-line11", "Igualmente. Dejemos de lado las diferencias técnicas y centrémonos en lo que nos une: proteger a la población civil.", "es-CL-LorenzoNeural"),
    ("d1-line12", "Excelente. El comunicado conjunto establecerá los términos preliminares. Hacemos un llamado a la paz como única vía.", "es-MX-DaliaNeural"),
    ("d1-line13", "Queda registrado. La sesión extraordinaria se reanudará el jueves. Gracias a todas las delegaciones por su espíritu constructivo.", "es-CO-GonzaloNeural"),
    ("d1-line14", "Gracias. La diplomacia preventiva siempre será más eficaz que la intervención tardía. Trabajemos juntos.", "es-MX-DaliaNeural"),
    ("d1-line15", "Así es. El multilateralismo es esencial para los desafíos de nuestro tiempo. Nos vemos el jueves.", "es-CL-LorenzoNeural"),
    # D2: Community Mediation — Bogotá (Colombian voices)
    ("d2-line1", "Buenos días. Estamos aquí para facilitar el diálogo entre la asociación de vecinos y la empresa constructora. Les pido que mantengan el respeto mutuo.", "es-CO-SalomeNeural"),
    ("d2-line2", "La construcción ha destruido nuestro parque comunitario. Exigimos que se detenga la obra inmediatamente.", "es-CO-GonzaloNeural"),
    ("d2-line3", "Entendemos la frustración del vecindario, pero tenemos todos los permisos legales. La obra genera empleo para doscientas personas.", "es-CO-GonzaloNeural"),
    ("d2-line4", "Entiendo la perspectiva de ambas partes. Los vecinos valoran su espacio verde y la empresa tiene compromisos laborales. ¿Podemos encontrar un terreno común?", "es-CO-SalomeNeural"),
    ("d2-line5", "Propongo que la empresa construya un nuevo parque en otro terreno cercano como compensación. Busquemos una solución de compromiso.", "es-CO-SalomeNeural"),
    ("d2-line6", "Es una posibilidad. Pero necesitaríamos que el municipio aportara el terreno. No podemos asumir todo el costo.", "es-CO-GonzaloNeural"),
    ("d2-line7", "Reconozcamos que ambas partes tienen preocupaciones legítimas. Señor Morales, ¿aceptaría un parque nuevo si fuera más grande y mejor equipado?", "es-CO-SalomeNeural"),
    ("d2-line8", "Podría ser viable, pero queremos garantías por escrito. Ya nos han prometido cosas antes sin cumplirlas.", "es-CO-GonzaloNeural"),
    ("d2-line9", "Sugerimos redactar un memorándum de entendimiento como primer paso. Así ambas partes tendrán un documento formal con compromisos claros.", "es-CO-SalomeNeural"),
    ("d2-line10", "Estamos dispuestos a hacer esa concesión. Pero las condiciones previas deben ser claras: necesitamos que el municipio apruebe el cambio de uso de suelo.", "es-CO-GonzaloNeural"),
    ("d2-line11", "Y nosotros necesitamos un cronograma con fechas específicas. No queremos que esto se convierta en una promesa vacía.", "es-CO-SalomeNeural"),
    ("d2-line12", "Excelente. Ambas partes se beneficiarían de un enfoque más flexible. Propongo una tregua: detengan las protestas y la empresa pause la demolición del área verde mientras negociamos.", "es-CO-SalomeNeural"),
    ("d2-line13", "Aceptamos la tregua. El diálogo es siempre preferible a la confrontación.", "es-CO-GonzaloNeural"),
    ("d2-line14", "De acuerdo. La justicia restaurativa se centra en reparar el daño, y eso es lo que queremos hacer.", "es-CO-GonzaloNeural"),
    ("d2-line15", "Perfecto. Nos reuniremos la próxima semana con el borrador del memorándum. La mediación funciona cuando todas las partes actúan de buena fe.", "es-CO-SalomeNeural"),
    ("d2-line16", "Gracias por facilitar este espacio. Es fundamental que cada parte escuche a la otra. Hoy hemos dado un gran paso.", "es-CO-SalomeNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L7.6...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
