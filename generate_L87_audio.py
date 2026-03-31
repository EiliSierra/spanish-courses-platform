"""Generate all audio files for L8.7 Politics & Governance using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L8.7\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Political Systems (12)
    ("la-democracia-representativa", "La democracia representativa permite que los ciudadanos elijan a sus gobernantes"),
    ("el-estado-de-derecho", "El estado de derecho garantiza que nadie esté por encima de la ley"),
    ("la-separacion-de-poderes", "La separación de poderes impide la concentración del poder en una sola persona"),
    ("el-poder-ejecutivo", "El poder ejecutivo recae en el presidente o primer ministro del gobierno"),
    ("el-poder-legislativo", "El poder legislativo elabora y aprueba las leyes de un país"),
    ("el-poder-judicial", "El poder judicial interpreta las leyes y administra justicia"),
    ("el-federalismo-distribuye", "El federalismo distribuye competencias entre el gobierno central y los estados"),
    ("la-republica-parlamentaria", "La república parlamentaria otorga al parlamento la función de elegir al jefe de gobierno"),
    ("la-soberania-popular", "La soberanía popular significa que el poder emana del pueblo"),
    ("la-constitucion-es-la", "La constitución es la ley suprema que rige la organización del Estado"),
    ("el-autoritarismo-concentra", "El autoritarismo concentra el poder sin control democrático ni rendición de cuentas"),
    ("la-alternancia-en-el", "La alternancia en el poder es un indicador esencial de salud democrática"),
    # Elections & Campaigns (12)
    ("la-campana-electoral", "La campaña electoral busca persuadir a los votantes con propuestas concretas"),
    ("el-candidato-presento", "El candidato presentó su plataforma ante miles de simpatizantes"),
    ("las-encuestas-de-opinion", "Las encuestas de opinión predicen las tendencias electorales pero no son infalibles"),
    ("la-jornada-electoral", "La jornada electoral transcurrió con normalidad y alta participación ciudadana"),
    ("el-escrutinio-de-los", "El escrutinio de los votos determinará al ganador de la contienda"),
    ("la-segunda-vuelta", "La segunda vuelta electoral se realiza cuando ningún candidato obtiene mayoría absoluta"),
    ("el-voto-en-blanco", "El voto en blanco es una forma legítima de protesta electoral"),
    ("el-padron-electoral", "El padrón electoral incluye a todos los ciudadanos habilitados para votar"),
    ("la-propaganda-politica", "La propaganda política utiliza medios de comunicación para influir en la opinión pública"),
    ("el-debate-presidencial", "El debate presidencial permite contrastar las visiones de los candidatos"),
    ("la-coalicion-de-partidos", "La coalición de partidos se forma para alcanzar una mayoría parlamentaria"),
    ("el-abstencionismo-refleja", "El abstencionismo refleja el desencanto de los ciudadanos con la clase política"),
    # Legislation & Policy (12)
    ("promulgar-una-ley", "Promulgar una ley es el acto formal de darle vigencia y fuerza obligatoria"),
    ("el-proyecto-de-ley", "El proyecto de ley debe ser debatido y aprobado por ambas cámaras del congreso"),
    ("la-reforma-constitucional", "La reforma constitucional requiere un proceso legislativo especial y mayorías calificadas"),
    ("la-politica-publica", "La política pública busca resolver problemas sociales mediante intervención del Estado"),
    ("el-decreto-ejecutivo", "El decreto ejecutivo permite al presidente actuar sin aprobación del congreso"),
    ("la-consulta-popular", "La consulta popular somete decisiones clave a la voluntad directa del pueblo"),
    ("el-veto-presidencial", "El veto presidencial puede bloquear una ley aprobada por el legislativo"),
    ("la-jurisprudencia-establece", "La jurisprudencia establece precedentes que guían la interpretación de las leyes"),
    ("la-descentralizacion", "La descentralización transfiere competencias del gobierno central a los municipios"),
    ("el-presupuesto-nacional", "El presupuesto nacional determina cómo se asignan los recursos del Estado"),
    ("la-regulacion-protege", "La regulación protege a los ciudadanos de abusos del mercado y del poder"),
    ("el-estado-de-emergencia", "El estado de emergencia otorga poderes extraordinarios al ejecutivo temporalmente"),
    # Civic Discourse (12)
    ("la-participacion-ciudadana", "La participación ciudadana fortalece la democracia y legitima las decisiones públicas"),
    ("la-rendicion-de-cuentas", "La rendición de cuentas obliga a los funcionarios a explicar sus acciones"),
    ("la-transparencia-gubernamental", "La transparencia gubernamental es esencial para combatir la corrupción"),
    ("la-corrupcion-sistemica", "La corrupción sistémica socava las instituciones y la confianza del pueblo"),
    ("el-clientelismo-politico", "El clientelismo político intercambia favores por lealtad electoral"),
    ("la-sociedad-civil", "La sociedad civil organizada vigila y demanda mejoras al gobierno"),
    ("el-activismo-juvenil", "El activismo juvenil está transformando el panorama político de América Latina"),
    ("la-libertad-de-prensa", "La libertad de prensa es un pilar fundamental de toda democracia"),
    ("el-derecho-a-la-protesta", "El derecho a la protesta pacífica está protegido por la constitución"),
    ("la-gobernanza-democratica", "La gobernanza democrática exige diálogo entre todas las fuerzas políticas"),
    ("los-movimientos-sociales", "Los movimientos sociales han sido motores de cambio en toda la región"),
    ("la-educacion-civica", "La educación cívica prepara a los jóvenes para ejercer una ciudadanía responsable"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Congressional Debate on Electoral Reform — CDMX
    ("d1-line1", "Se abre el debate sobre el proyecto de reforma electoral. Tiene la palabra la diputada Ramírez.", "es-MX-DaliaNeural"),
    ("d1-line2", "Compañeros legisladores, esta reforma busca fortalecer la participación ciudadana mediante la implementación del voto electrónico.", "es-MX-DaliaNeural"),
    ("d1-line3", "Con todo respeto, la soberanía popular no se fortalece con tecnología; se fortalece con educación cívica y transparencia.", "es-MX-JorgeNeural"),
    ("d1-line4", "Cabe señalar que el abstencionismo ha alcanzado niveles históricos. El voto electrónico facilita el acceso al sufragio, especialmente en comunidades rurales.", "es-MX-DaliaNeural"),
    ("d1-line5", "La pregunta fundamental es: ¿garantiza esta reforma la rendición de cuentas? Sin auditorías independientes, el voto electrónico puede ser manipulado.", "es-MX-JorgeNeural"),
    ("d1-line6", "Además, debemos considerar la brecha digital. No podemos promulgar una ley que excluya a los sectores más vulnerables de la sociedad.", "es-MX-JorgeNeural"),
    ("d1-line7", "Les recuerdo que el estado de derecho exige que toda reforma respete los principios constitucionales de universalidad y secreto del voto.", "es-MX-DaliaNeural"),
    ("d1-line8", "Por supuesto. El proyecto incluye una consulta popular para que los propios ciudadanos decidan si aceptan esta modalidad.", "es-MX-DaliaNeural"),
    ("d1-line9", "La sociedad civil ha manifestado preocupaciones legítimas. Propongo que este proyecto pase a una segunda vuelta de debate con la participación de expertos independientes.", "es-MX-JorgeNeural"),
    ("d1-line10", "Concuerdo. La democracia representativa funciona cuando escuchamos todas las voces, no solo las que nos convienen políticamente.", "es-MX-JorgeNeural"),
    ("d1-line11", "Se somete a votación la propuesta de ampliar el debate. Los que estén a favor, sírvanse manifestarlo.", "es-MX-DaliaNeural"),
    ("d1-line12", "Acepto la propuesta. El activismo juvenil y las organizaciones ciudadanas merecen ser escuchados antes de tomar una decisión definitiva.", "es-MX-DaliaNeural"),
    ("d1-line13", "Aprobado por unanimidad. Se aplaza el debate para incluir una audiencia pública con organizaciones de la sociedad civil.", "es-MX-DaliaNeural"),
    ("d1-line14", "Así debe funcionar la separación de poderes: el legislativo delibera con responsabilidad, no con prisa.", "es-MX-JorgeNeural"),
    ("d1-line15", "Se levanta la sesión. Recordemos que la gobernanza democrática exige diálogo entre todas las fuerzas políticas.", "es-MX-DaliaNeural"),
    # Dialogue 2: Civic Assembly on Local Governance — Montevideo
    ("d2-line1", "Buenas tardes. Esta asamblea ciudadana tiene como objetivo debatir el presupuesto participativo de nuestro barrio para el próximo año.", "es-AR-ElenaNeural"),
    ("d2-line2", "Yo propongo que se destine más presupuesto a la educación cívica en las escuelas. Los jóvenes necesitan entender cómo funciona la democracia.", "es-AR-TomasNeural"),
    ("d2-line3", "Estoy de acuerdo, pero primero necesitamos transparencia. ¿Dónde están los informes de ejecución del presupuesto anterior?", "es-AR-ElenaNeural"),
    ("d2-line4", "Excelente punto. La rendición de cuentas es la base de la participación ciudadana. Tenemos los informes disponibles en la página web municipal.", "es-AR-ElenaNeural"),
    ("d2-line5", "El problema real es el clientelismo. En las últimas elecciones, se repartieron favores a cambio de votos. Eso no es democracia.", "es-AR-TomasNeural"),
    ("d2-line6", "Por eso la sociedad civil organizada es tan importante. Nosotros, como vecinos, debemos vigilar y demandar mejoras.", "es-AR-ElenaNeural"),
    ("d2-line7", "Uruguay tiene una tradición democrática fuerte. La consulta popular aquí funciona. Pero no podemos dar eso por sentado.", "es-AR-TomasNeural"),
    ("d2-line8", "¿Alguien más quiere intervenir? Recordemos que el derecho a la protesta pacífica incluye el derecho a expresar desacuerdo aquí.", "es-AR-ElenaNeural"),
    ("d2-line9", "Soy parte de un colectivo estudiantil. Creemos que el activismo juvenil debe tener un espacio formal en estas decisiones, no solo consultivo.", "es-AR-ElenaNeural"),
    ("d2-line10", "Los movimientos sociales siempre han sido motores de cambio en nuestra región. Tu generación tiene mucho que aportar.", "es-AR-TomasNeural"),
    ("d2-line11", "Propongo crear una comisión mixta: vecinos, jóvenes y funcionarios municipales. La descentralización funciona cuando todos participan.", "es-AR-ElenaNeural"),
    ("d2-line12", "Me parece justo. La libertad de prensa también importa: invitemos a medios locales para que la ciudadanía sepa qué decidimos aquí.", "es-AR-ElenaNeural"),
    ("d2-line13", "La educación cívica prepara a los jóvenes para ejercer una ciudadanía responsable. Eso empieza en asambleas como esta.", "es-AR-ElenaNeural"),
    ("d2-line14", "Hermosas palabras. La política pública más efectiva es la que nace del diálogo ciudadano. Votemos las propuestas presentadas.", "es-AR-ElenaNeural"),
    ("d2-line15", "Hoy demostramos que la participación ciudadana fortalece la democracia. Esto es lo que significa el estado de derecho en la práctica.", "es-AR-TomasNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L8.7...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
