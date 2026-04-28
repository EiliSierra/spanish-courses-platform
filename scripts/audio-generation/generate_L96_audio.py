"""Generate all audio files for L9.6 Digital Marketing & Social Media using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L9.6\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Content Strategy (12)
    ("el-calendario-de-contenidos", "El calendario de contenidos organiza las publicaciones por fecha, plataforma y objetivo de cada post"),
    ("el-engagement", "El engagement mide el nivel de interacción entre la audiencia y el contenido de la marca"),
    ("el-alcance-organico", "El alcance orgánico se refiere a la cantidad de personas que ven el contenido sin publicidad pagada"),
    ("la-segmentacion-de-audiencia", "La segmentación de audiencia divide al público en grupos según sus intereses y comportamientos"),
    ("el-contenido-viral", "El contenido viral se difunde rápidamente a través de las redes sociales gracias al alto engagement"),
    ("el-storytelling-de-marca", "El storytelling de marca conecta emocionalmente con la audiencia contando la historia detrás del producto"),
    ("la-estrategia-omnicanal", "La estrategia omnicanal asegura una experiencia coherente del usuario en todas las plataformas"),
    ("el-contenido-generado", "El contenido generado por usuarios aporta autenticidad y construye comunidad alrededor de la marca"),
    ("el-tono-de-voz", "El tono de voz de la marca define cómo se comunica con su audiencia en cada plataforma"),
    ("la-curacion-de-contenidos", "La curación de contenidos selecciona y comparte material relevante de otras fuentes para la audiencia"),
    ("el-marketing-de-contenidos", "El marketing de contenidos atrae clientes potenciales ofreciendo información valiosa en lugar de publicidad directa"),
    ("la-publicacion-cruzada", "La publicación cruzada adapta el mismo mensaje a diferentes formatos según cada red social"),
    # Analytics & Metrics (12)
    ("la-tasa-de-conversion", "La tasa de conversión mide el porcentaje de visitantes que completan una acción deseada"),
    ("el-retorno-de-inversion", "El retorno de inversión calcula cuánto dinero genera cada dólar invertido en marketing"),
    ("las-impresiones", "Las impresiones cuentan el número total de veces que se muestra un contenido en pantalla"),
    ("el-costo-por-clic", "El costo por clic determina cuánto paga el anunciante cada vez que alguien hace clic en su anuncio"),
    ("el-embudo-de-ventas", "El embudo de ventas visualiza el recorrido del cliente desde el descubrimiento hasta la compra final"),
    ("los-indicadores-clave", "Los indicadores clave de rendimiento miden el éxito de las campañas según objetivos específicos"),
    ("la-tasa-de-rebote", "La tasa de rebote indica el porcentaje de visitantes que abandonan el sitio sin interactuar"),
    ("el-valor-de-vida", "El valor de vida del cliente estima cuánto gastará un cliente durante toda su relación con la marca"),
    ("las-metricas-de-vanidad", "Las métricas de vanidad como los seguidores no siempre reflejan el impacto real del negocio"),
    ("la-atribucion-de-conversiones", "La atribución de conversiones identifica qué canal de marketing generó cada venta"),
    ("el-panel-de-control", "El panel de control centraliza todas las métricas importantes en una sola vista para tomar decisiones"),
    ("la-prueba-ab", "La prueba A/B compara dos versiones de contenido para determinar cuál funciona mejor"),
    # Influencer Marketing (12)
    ("el-influencer-de-nicho", "El influencer de nicho tiene una audiencia pequeña pero muy comprometida con un tema específico"),
    ("la-colaboracion-de-marca", "La colaboración de marca asocia al influencer con un producto para crear contenido conjunto"),
    ("el-contenido-patrocinado", "El contenido patrocinado debe identificarse claramente para cumplir con las regulaciones de publicidad"),
    ("la-autenticidad", "La autenticidad es el factor más importante para que una recomendación de influencer sea creíble"),
    ("el-marketing-de-afiliados", "El marketing de afiliados paga una comisión al influencer por cada venta generada a través de su enlace"),
    ("el-ugc", "El UGC o contenido generado por usuarios es más confiable que la publicidad tradicional para los consumidores"),
    ("el-microinfluencer", "El microinfluencer tiene entre mil y cien mil seguidores y ofrece mayor tasa de engagement"),
    ("la-gestion-de-la-reputacion", "La gestión de la reputación en línea monitorea lo que se dice sobre la marca en redes sociales"),
    ("el-embajador-de-marca", "El embajador de marca representa a la empresa de manera continua más allá de una sola campaña"),
    ("la-economia-de-creadores", "La economía de creadores permite a individuos monetizar su contenido y construir negocios personales"),
    ("los-seguidores-falsos", "Los seguidores falsos inflan artificialmente las métricas y dañan la credibilidad del influencer"),
    ("la-transparencia", "La transparencia en las asociaciones comerciales genera confianza entre el influencer y su comunidad"),
    # SEO/SEM (12)
    ("la-optimizacion-para-buscadores", "La optimización para buscadores mejora la visibilidad de un sitio web en los resultados de búsqueda"),
    ("las-palabras-clave", "Las palabras clave son los términos que los usuarios escriben en el buscador para encontrar información"),
    ("el-posicionamiento-web", "El posicionamiento web determina en qué lugar aparece tu sitio en la página de resultados"),
    ("la-campana-de-pago", "La campaña de pago por clic cobra al anunciante solo cuando el usuario hace clic en el anuncio"),
    ("el-algoritmo-del-buscador", "El algoritmo del buscador evalúa cientos de factores para clasificar la relevancia de cada página web"),
    ("la-indexacion", "La indexación registra las páginas web en la base de datos del buscador para incluirlas en los resultados"),
    ("el-enlace-de-retroceso", "El enlace de retroceso desde un sitio de alta autoridad mejora el posicionamiento de tu página"),
    ("la-estrategia-de-contenido-largo", "La estrategia de contenido largo posiciona mejor que los artículos cortos en los buscadores modernos"),
    ("la-auditoria-seo", "La auditoría SEO analiza la salud técnica del sitio web para identificar problemas de rendimiento"),
    ("el-remarketing", "El remarketing muestra anuncios a personas que ya visitaron tu sitio web anteriormente"),
    ("la-busqueda-por-voz", "La búsqueda por voz está cambiando la forma en que los usuarios interactúan con los buscadores"),
    ("la-intencion-de-busqueda", "La intención de búsqueda determina si el usuario quiere información, comprar algo o navegar a un sitio específico"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Marketing Agency — Medellín
    ("d1-line1", "Bien, equipo. Revisemos las métricas de la campaña del mes pasado. ¿Cómo fue el engagement?", "es-CO-SalomeNeural"),
    ("d1-line2", "El engagement subió un 35% respecto al mes anterior. Los reels con storytelling tuvieron el mayor alcance orgánico.", "es-CO-GonzaloNeural"),
    ("d1-line3", "¿Y la tasa de conversión? Recordemos que el cliente espera un ROI del 300%.", "es-CO-SalomeNeural"),
    ("d1-line4", "La conversión mejoró del 1.2% al 2.1% gracias a la prueba A/B en la página de destino.", "es-CO-GonzaloNeural"),
    ("d1-line5", "Excelente. ¿Qué tal la colaboración con la influencer de nicho que contratamos?", "es-CO-SalomeNeural"),
    ("d1-line6", "Increíble. Tiene solo 15.000 seguidores pero su engagement es del 8%. Generó más ventas que el macroinfluencer del trimestre pasado.", "es-CO-GonzaloNeural"),
    ("d1-line7", "Eso confirma nuestra estrategia: microinfluencers con audiencias auténticas valen más que números inflados.", "es-CO-SalomeNeural"),
    ("d1-line8", "Para el próximo mes propongo enfocarnos en SEO. El posicionamiento del blog del cliente ha bajado.", "es-CO-GonzaloNeural"),
    ("d1-line9", "Buena idea. Necesitamos investigar palabras clave de cola larga y crear contenido más extenso y de mayor calidad.", "es-CO-SalomeNeural"),
    ("d1-line10", "También deberíamos implementar remarketing para recuperar a los visitantes que abandonan el embudo de ventas.", "es-CO-GonzaloNeural"),
    ("d1-line11", "De acuerdo. Actualicemos el calendario de contenidos y presentemos la nueva estrategia al cliente el viernes.", "es-CO-SalomeNeural"),
    ("d1-line12", "Perfecto. Voy a preparar el panel de control con todas las métricas actualizadas para la presentación.", "es-CO-GonzaloNeural"),
    ("d1-line13", "Excelente trabajo, Andrés. Los datos hablan: nuestra estrategia está funcionando.", "es-CO-SalomeNeural"),
    ("d1-line14", "Gracias, Dani. El marketing basado en datos es el futuro. Sin métricas, todo es intuición.", "es-CO-GonzaloNeural"),
    ("d1-line15", "Totalmente de acuerdo. Y la intuición sin datos es solo una apuesta.", "es-CO-SalomeNeural"),
    # Dialogue 2: Influencer Collaboration — Madrid
    ("d2-line1", "Hola, Carlos. Gracias por reunirte conmigo. Te cuento: mi marca de cosmética natural quiere colaborar contigo.", "es-ES-ElviraNeural"),
    ("d2-line2", "Encantado, Sofía. He visto vuestros productos y me gustan mucho. ¿Qué tipo de colaboración tenéis en mente?", "es-ES-AlvaroNeural"),
    ("d2-line3", "Queremos que seas embajador de marca durante tres meses. Contenido semanal en Instagram y TikTok.", "es-ES-ElviraNeural"),
    ("d2-line4", "Me interesa, pero necesito que sea auténtico. Solo promociono productos que realmente uso. Eso es clave para mi comunidad.", "es-ES-AlvaroNeural"),
    ("d2-line5", "Totalmente de acuerdo. La autenticidad es lo que buscamos. Por eso te elegimos a ti y no a un macroinfluencer.", "es-ES-ElviraNeural"),
    ("d2-line6", "¿El contenido será patrocinado? Siempre identifico claramente las colaboraciones. Es una cuestión de transparencia con mis seguidores.", "es-ES-AlvaroNeural"),
    ("d2-line7", "Sí, todo el contenido llevará la etiqueta de contenido patrocinado. Cumplimos con las regulaciones de publicidad.", "es-ES-ElviraNeural"),
    ("d2-line8", "¿Cuáles son las métricas que esperáis? ¿Engagement, conversiones, alcance?", "es-ES-AlvaroNeural"),
    ("d2-line9", "Principalmente engagement y tráfico a la web. Utilizaremos un enlace de afiliado para medir las conversiones directas.", "es-ES-ElviraNeural"),
    ("d2-line10", "Perfecto. Propongo crear contenido tipo \"mi rutina de mañana\" mostrando los productos de forma natural.", "es-ES-AlvaroNeural"),
    ("d2-line11", "Me encanta la idea. El storytelling es lo que mejor funciona con tu audiencia.", "es-ES-ElviraNeural"),
    ("d2-line12", "También puedo hacer un directo probando los productos en tiempo real. Eso genera mucho engagement.", "es-ES-AlvaroNeural"),
    ("d2-line13", "Genial. ¿Podemos incluir un código de descuento exclusivo para tus seguidores?", "es-ES-ElviraNeural"),
    ("d2-line14", "Claro, eso siempre funciona bien. Le damos valor a la comunidad y medimos el impacto directo.", "es-ES-AlvaroNeural"),
    ("d2-line15", "Perfecto. Te envío el contrato esta tarde. ¡Será una gran colaboración!", "es-ES-ElviraNeural"),
    ("d2-line16", "¡Estoy emocionado! Cuando la marca y el creador comparten valores, la magia ocurre.", "es-ES-AlvaroNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L9.6...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
