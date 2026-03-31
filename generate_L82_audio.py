"""Generate all audio files for L8.2 Economics & Business Strategy using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L8.2\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Macroeconomics (12)
    ("pib-crecio-tres-por-ciento", "El PIB creció un tres por ciento este trimestre"),
    ("inflacion-supero-expectativas", "La inflación superó las expectativas del mercado"),
    ("tasa-desempleo-bajo", "La tasa de desempleo bajó al cuatro por ciento"),
    ("deuda-externa-riesgo-fiscal", "La deuda externa representa un riesgo fiscal significativo"),
    ("balanza-comercial-deficit", "La balanza comercial muestra un déficit creciente"),
    ("politica-monetaria-inflacion", "La política monetaria busca controlar la inflación"),
    ("recesion-economica", "Estamos entrando en una recesión económica"),
    ("devaluacion-poder-adquisitivo", "La devaluación afectó el poder adquisitivo"),
    ("banco-central-tasa-interes", "El banco central subió la tasa de interés"),
    ("tipo-cambio-estable", "El tipo de cambio se mantiene estable"),
    ("exportaciones-aumentaron", "Las exportaciones aumentaron un doce por ciento"),
    ("inversion-extranjera-record", "La inversión extranjera directa alcanzó niveles récord"),
    # Financial Reports (12)
    ("balance-general-salud", "El balance general refleja la salud financiera de la empresa"),
    ("estado-resultados-ganancia", "El estado de resultados muestra una ganancia neta"),
    ("flujo-caja-positivo", "El flujo de caja operativo fue positivo"),
    ("activos-superan-pasivos", "Los activos superan a los pasivos en un treinta por ciento"),
    ("margen-ganancia-redujo", "El margen de ganancia se redujo este semestre"),
    ("rentabilidad-supero-proyecciones", "La rentabilidad del proyecto superó las proyecciones"),
    ("dividendos-proximo-mes", "Los dividendos se distribuirán el próximo mes"),
    ("ingresos-brutos-aumentaron", "Los ingresos brutos aumentaron considerablemente"),
    ("apalancamiento-alto", "El apalancamiento financiero es demasiado alto"),
    ("depreciacion-activos", "La depreciación de los activos se registró correctamente"),
    ("retorno-inversion-quince", "El retorno sobre la inversión fue del quince por ciento"),
    ("auditar-estados-financieros", "Debemos auditar los estados financieros trimestrales"),
    # Startup & Innovation (12)
    ("capital-riesgo-escalar", "Necesitamos capital de riesgo para escalar"),
    ("ronda-inversion-serie-a", "Cerramos nuestra ronda de inversión Serie A"),
    ("escalabilidad-prioridad", "La escalabilidad del producto es nuestra prioridad"),
    ("modelo-negocio-suscripciones", "Nuestro modelo de negocio se basa en suscripciones"),
    ("propuesta-valor-diferencia", "La propuesta de valor nos diferencia del mercado"),
    ("incubadora-mentoria", "La incubadora de empresas nos brindó mentoría"),
    ("punto-equilibrio-seis-meses", "Alcanzamos el punto de equilibrio en seis meses"),
    ("producto-minimo-viable", "El producto mínimo viable ya está en el mercado"),
    ("pivotar-nuevo-segmento", "Buscamos pivotar hacia un nuevo segmento"),
    ("tasa-retencion-usuarios", "La tasa de retención de usuarios es del ochenta por ciento"),
    ("inversores-angeles", "Estamos en conversaciones con inversores ángeles"),
    ("aceleradora-fondos-internacionales", "La aceleradora nos conectó con fondos internacionales"),
    # Strategy & Analysis (12)
    ("analisis-foda-debilidades", "El análisis FODA reveló debilidades en distribución"),
    ("ventaja-competitiva-tecnologia", "Nuestra ventaja competitiva es la tecnología propia"),
    ("cuota-mercado-veintidos", "La cuota de mercado aumentó al veintidós por ciento"),
    ("segmentacion-tres-perfiles", "La segmentación del mercado identifica tres perfiles clave"),
    ("posicionamiento-sostenibilidad", "El posicionamiento de marca se enfoca en sostenibilidad"),
    ("cadena-suministro-pandemia", "La cadena de suministro fue interrumpida por la pandemia"),
    ("estrategia-diversificacion", "Implementaremos una estrategia de diversificación"),
    ("analisis-competencia-rivales", "El análisis de la competencia muestra tres rivales principales"),
    ("matriz-riesgo-escenarios", "La matriz de riesgo prioriza los escenarios críticos"),
    ("optimizar-estructura-costos", "Debemos optimizar la estructura de costos"),
    ("alianza-estrategica-mercados", "La alianza estratégica nos abre nuevos mercados"),
    ("plan-quinquenal-expansion", "El plan quinquenal contempla expansión regional"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Quarterly Board Meeting — Ciudad de México
    ("d1-line1", "Buenos días a todos. Comencemos con el informe trimestral. Licenciada Morales, ¿cómo estuvieron los números?", "es-MX-DaliaNeural"),
    ("d1-line2", "El PIB del sector tecnológico creció un cuatro por ciento, lo cual benefició nuestras ventas directamente.", "es-MX-DaliaNeural"),
    ("d1-line3", "Excelente. ¿Y el estado de resultados?", "es-MX-DaliaNeural"),
    ("d1-line4", "Los ingresos brutos aumentaron un doce por ciento. Sin embargo, el margen de ganancia se redujo por el aumento en costos de suministro.", "es-MX-DaliaNeural"),
    ("d1-line5", "Les sugiero que optimicemos la cadena de suministro. He identificado tres proveedores alternativos con mejores precios.", "es-MX-JorgeNeural"),
    ("d1-line6", "¿Cuál sería el impacto en la rentabilidad si cambiamos de proveedores?", "es-MX-DaliaNeural"),
    ("d1-line7", "Estimamos un aumento del ocho por ciento en el margen neto. El retorno sobre la inversión se vería en dos trimestres.", "es-MX-JorgeNeural"),
    ("d1-line8", "También recomiendo que diversifiquemos hacia el mercado centroamericano. El análisis FODA muestra oportunidades claras en Guatemala y Costa Rica.", "es-MX-DaliaNeural"),
    ("d1-line9", "Me parece una propuesta sólida. ¿Los activos actuales soportan esa expansión?", "es-MX-DaliaNeural"),
    ("d1-line10", "Sí, los activos superan los pasivos en un treinta por ciento. Tenemos capacidad financiera.", "es-MX-DaliaNeural"),
    ("d1-line11", "Además, podríamos buscar una alianza estratégica con distribuidores locales para reducir el riesgo.", "es-MX-JorgeNeural"),
    ("d1-line12", "Perfecto. Aprobemos el plan quinquenal con estas modificaciones. Los dividendos se distribuirán como estaba programado.", "es-MX-DaliaNeural"),
    ("d1-line13", "Entendido, directora. Prepararé el informe actualizado para el consejo de accionistas.", "es-MX-DaliaNeural"),
    ("d1-line14", "Excelente trabajo, equipo. La próxima reunión será en tres semanas. Muchas gracias.", "es-MX-DaliaNeural"),
    ("d1-line15", "Gracias, directora.", "es-MX-JorgeNeural"),
    # Dialogue 2: Startup Pitch at an Accelerator — Medellín
    ("d2-line1", "Buenas tardes, inversores. Soy Camilo Restrepo, fundador de AgroTech Solutions. Hoy les presento nuestra ronda Serie A.", "es-CO-GonzaloNeural"),
    ("d2-line2", "Nuestro modelo de negocio se basa en suscripciones mensuales para pequeños agricultores que necesitan datos climáticos y de mercado en tiempo real.", "es-CO-GonzaloNeural"),
    ("d2-line3", "¿Cuál es su propuesta de valor frente a competidores como FarmAI?", "es-CO-SalomeNeural"),
    ("d2-line4", "Nuestra ventaja competitiva es que operamos en español y portugués con datos hiperlocales. FarmAI solo cubre Norteamérica.", "es-CO-GonzaloNeural"),
    ("d2-line5", "¿Ya alcanzaron el punto de equilibrio?", "es-CO-SalomeNeural"),
    ("d2-line6", "Sí, lo alcanzamos en seis meses. La tasa de retención de usuarios es del ochenta por ciento y estamos creciendo un veinte por ciento mensual.", "es-CO-GonzaloNeural"),
    ("d2-line7", "¿Qué tan escalable es el producto? ¿Pueden entrar a Brasil y México rápidamente?", "es-ES-AlvaroNeural"),
    ("d2-line8", "La escalabilidad es nuestra prioridad. La incubadora de empresas Ruta N nos brindó mentoría y ya tenemos contactos en São Paulo y Guadalajara.", "es-CO-GonzaloNeural"),
    ("d2-line9", "¿Cuánto capital de riesgo necesitan y cómo lo usarían?", "es-CO-SalomeNeural"),
    ("d2-line10", "Buscamos dos millones de dólares. El sesenta por ciento para expansión regional, el treinta para desarrollo de producto y el diez para marketing.", "es-CO-GonzaloNeural"),
    ("d2-line11", "¿Cuál es el retorno sobre la inversión proyectado a tres años?", "es-ES-AlvaroNeural"),
    ("d2-line12", "Proyectamos un RSI del trescientos por ciento en tres años, basado en nuestro crecimiento actual y la demanda del mercado agrícola latinoamericano.", "es-CO-GonzaloNeural"),
    ("d2-line13", "Es un mercado enorme. Me gustaría revisar sus estados financieros detallados.", "es-CO-SalomeNeural"),
    ("d2-line14", "Por supuesto. Les enviaré el balance general, el estado de resultados y las proyecciones de flujo de caja esta misma tarde.", "es-CO-GonzaloNeural"),
    ("d2-line15", "Excelente presentación, Camilo. Agendemos una reunión de seguimiento la próxima semana.", "es-CO-SalomeNeural"),
    ("d2-line16", "¡Con mucho gusto! Gracias por su tiempo e interés en AgroTech Solutions.", "es-CO-GonzaloNeural"),
    ("d2-line17", "Gracias a usted. Colombia está produciendo startups impresionantes.", "es-ES-AlvaroNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L8.2...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
