"""Generate all audio files for L8.3 Technology & Engineering using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L8.3\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Software Development (12)
    ("codigo-fuente-repositorio", "El código fuente está en el repositorio"),
    ("compilar-proyecto", "Necesitamos compilar el proyecto antes de probarlo"),
    ("depurando-error", "Estoy depurando un error en la función principal"),
    ("nueva-rama-repositorio", "Creé una nueva rama en el repositorio"),
    ("fusiona-rama-principal", "Fusiona tu rama con la rama principal"),
    ("desplegar-produccion", "Vamos a desplegar en producción esta noche"),
    ("api-restful-json", "La API RESTful devuelve datos en formato JSON"),
    ("arquitectura-microservicios", "Estamos migrando a una arquitectura de microservicios"),
    ("commit-mensaje", "Haz un commit con un mensaje descriptivo"),
    ("integracion-continua-fallo", "La integración continua detectó un fallo en las pruebas"),
    ("pull-request-aprobar", "Revisa el pull request antes de aprobarlo"),
    ("framework-desarrollo-agil", "El framework facilita el desarrollo ágil"),
    # Hardware & Infrastructure (12)
    ("servidor-nube", "El servidor está alojado en la nube"),
    ("ancho-banda-trafico", "El ancho de banda no es suficiente para el tráfico actual"),
    ("latencia-servidor", "La latencia del servidor es demasiado alta"),
    ("almacenamiento-nube", "Migramos el almacenamiento en la nube a otro proveedor"),
    ("procesador-nucleos", "Este procesador tiene ocho núcleos de alto rendimiento"),
    ("memoria-ram-desarrollo", "Necesitamos más memoria RAM para el entorno de desarrollo"),
    ("fibra-optica-velocidad", "La red de fibra óptica mejora la velocidad de transferencia"),
    ("centro-datos-redundancia", "El centro de datos tiene redundancia geográfica"),
    ("virtualizacion-recursos", "La virtualización optimiza el uso de los recursos"),
    ("balanceador-carga", "Configura el balanceador de carga para distribuir el tráfico"),
    ("disco-estado-solido", "El disco de estado sólido acelera el tiempo de arranque"),
    ("refrigeracion-liquida", "Instalamos un sistema de refrigeración líquida en el rack"),
    # AI & Data (12)
    ("inteligencia-artificial-industria", "La inteligencia artificial está transformando la industria"),
    ("aprendizaje-automatico", "El aprendizaje automático detecta patrones en los datos"),
    ("red-neuronal-capas", "La red neuronal profunda tiene doce capas ocultas"),
    ("conjunto-datos-entrenar", "Debemos limpiar el conjunto de datos antes de entrenar el modelo"),
    ("sesgo-algoritmico", "El sesgo algorítmico puede generar resultados discriminatorios"),
    ("modelo-lenguaje", "El modelo de lenguaje genera texto coherente y fluido"),
    ("tokenizacion-texto", "La tokenización divide el texto en unidades procesables"),
    ("entrenando-datos-etiquetados", "Estamos entrenando el modelo con datos etiquetados"),
    ("funcion-perdida-error", "La función de pérdida mide el error del modelo"),
    ("procesamiento-lenguaje-natural", "El procesamiento de lenguaje natural analiza sentimientos"),
    ("inferencia-tiempo-real", "La inferencia en tiempo real requiere optimización del modelo"),
    ("aprendizaje-refuerzo", "El aprendizaje por refuerzo enseña al agente mediante recompensas"),
    # Cybersecurity (12)
    ("ciberseguridad-organizacion", "La ciberseguridad es fundamental para toda organización"),
    ("encriptacion-datos", "La encriptación protege los datos durante la transmisión"),
    ("autenticacion-dos-factores", "Activa la autenticación de dos factores en todas tus cuentas"),
    ("brecha-seguridad", "La brecha de seguridad expuso datos de millones de usuarios"),
    ("phishing-correo-banco", "El ataque de phishing imitaba un correo del banco"),
    ("cortafuegos-trafico", "El cortafuegos bloquea el tráfico sospechoso"),
    ("vulnerabilidad-dia-cero", "Descubrieron una vulnerabilidad de día cero en el sistema operativo"),
    ("ransomware-archivos", "El ransomware cifró todos los archivos de la empresa"),
    ("auditoria-seguridad", "Realizamos una auditoría de seguridad cada trimestre"),
    ("certificado-ssl", "El certificado SSL garantiza una conexión segura"),
    ("ingenieria-social", "La ingeniería social manipula a las personas para obtener acceso"),
    ("deteccion-intrusiones", "Implementamos un sistema de detección de intrusiones"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Dev Team Standup — Guadalajara Tech Hub
    ("d1-line1", "Buenos días, equipo. Empecemos el standup. ¿Cómo van con el sprint?", "es-MX-DaliaNeural"),
    ("d1-line2", "Ayer terminé de depurar el módulo de autenticación. Ya funciona la autenticación de dos factores.", "es-MX-JorgeNeural"),
    ("d1-line3", "Excelente. ¿Y el pull request? ¿Alguien lo revisó?", "es-MX-DaliaNeural"),
    ("d1-line4", "Yo lo revisé anoche. El código está limpio, pero sugiero agregar más pruebas unitarias.", "es-CO-SalomeNeural"),
    ("d1-line5", "De acuerdo, las agrego hoy. ¿Podemos fusionar la rama después de eso?", "es-MX-JorgeNeural"),
    ("d1-line6", "Sí, pero primero asegúrate de que la integración continua pase sin errores.", "es-MX-DaliaNeural"),
    ("d1-line7", "Por mi parte, estoy migrando la API a la arquitectura de microservicios. Llevo un setenta por ciento.", "es-CO-SalomeNeural"),
    ("d1-line8", "¿Has tenido problemas con la latencia entre los servicios?", "es-MX-DaliaNeural"),
    ("d1-line9", "Un poco. El balanceador de carga necesita ajustes. Voy a optimizar la configuración hoy.", "es-CO-SalomeNeural"),
    ("d1-line10", "También deberíamos revisar el ancho de banda del servidor de staging.", "es-MX-JorgeNeural"),
    ("d1-line11", "Buen punto. Lucía, ¿puedes verificar eso antes de desplegar en producción?", "es-MX-DaliaNeural"),
    ("d1-line12", "Claro. Lo tengo listo para mañana. ¿Desplegamos el jueves o el viernes?", "es-CO-SalomeNeural"),
    ("d1-line13", "El jueves. Así tenemos el viernes para monitorear y corregir cualquier fallo en producción.", "es-MX-DaliaNeural"),
    ("d1-line14", "Perfecto. Yo preparo la documentación de la API para el cliente.", "es-MX-JorgeNeural"),
    ("d1-line15", "Genial, equipo. Buen trabajo. Nos vemos mañana en el standup.", "es-MX-DaliaNeural"),
    # Dialogue 2: Cybersecurity Briefing — Madrid Security Center
    ("d2-line1", "Atención, equipo. Tenemos un incidente de seguridad. Anoche detectamos una brecha.", "es-ES-ElviraNeural"),
    ("d2-line2", "¿Qué tipo de ataque fue? ¿Phishing o intrusión directa?", "es-ES-AlvaroNeural"),
    ("d2-line3", "Un ataque de phishing sofisticado. Imitaba correos internos de recursos humanos.", "es-ES-ElviraNeural"),
    ("d2-line4", "¿Cuántos empleados cayeron en la trampa?", "es-ES-ElviraNeural"),
    ("d2-line5", "Tres personas hicieron clic en el enlace. Afortunadamente, la autenticación de dos factores bloqueó el acceso.", "es-ES-ElviraNeural"),
    ("d2-line6", "Menos mal. ¿Revisamos los registros del cortafuegos para rastrear el origen?", "es-ES-AlvaroNeural"),
    ("d2-line7", "Sí. Torres, quiero un análisis completo de los registros de las últimas cuarenta y ocho horas.", "es-ES-ElviraNeural"),
    ("d2-line8", "Entendido. También voy a revisar si hay vulnerabilidades de día cero en nuestros sistemas.", "es-ES-ElviraNeural"),
    ("d2-line9", "Propongo actualizar la encriptación a AES-256 y reforzar las políticas de contraseñas.", "es-ES-AlvaroNeural"),
    ("d2-line10", "De acuerdo. También necesitamos una campaña de concientización sobre ingeniería social.", "es-ES-ElviraNeural"),
    ("d2-line11", "Puedo preparar una simulación de phishing para medir la preparación del personal.", "es-ES-ElviraNeural"),
    ("d2-line12", "¿Deberíamos implementar un sistema de detección de intrusiones más robusto?", "es-ES-AlvaroNeural"),
    ("d2-line13", "Absolutamente. Preparen un presupuesto para la próxima auditoría de seguridad trimestral.", "es-ES-ElviraNeural"),
    ("d2-line14", "Directora, los certificados SSL de tres dominios vencen la próxima semana. ¿Los renuevo?", "es-ES-ElviraNeural"),
    ("d2-line15", "Inmediatamente. No podemos permitir ninguna conexión insegura. Buen trabajo, equipo.", "es-ES-ElviraNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L8.3...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
