"""Generate all audio files for L8.4 Gastronomy & Culinary Arts using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L8.4\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Kitchen Techniques (12)
    ("saltear-verduras", "Hay que saltear las verduras a fuego alto"),
    ("blanquear-tomates", "Blanquea los tomates antes de pelarlos"),
    ("reducir-salsa", "Reduce la salsa hasta que espese"),
    ("emulsionar-aceite", "Emulsiona el aceite con el vinagre lentamente"),
    ("flamear-postre", "Flamea el postre con ron añejo"),
    ("marinar-pollo", "Marina el pollo durante toda la noche"),
    ("mise-en-place", "La mise en place es esencial antes de cocinar"),
    ("punto-coccion", "El punto de cocción del filete es medio"),
    ("glasear-zanahorias", "Glasea las zanahorias con mantequilla y miel"),
    ("escalfar-huevos", "Escalfa los huevos en agua con vinagre"),
    ("confitar-ajo", "Confita el ajo a temperatura baja durante dos horas"),
    ("bracear-carne", "Bracear la carne le da un sabor profundo"),
    # Regional Cuisines (12)
    ("ceviche-peruano", "El ceviche peruano se prepara con pescado crudo y limón"),
    ("tacos-al-pastor", "Los tacos al pastor llevan carne adobada y piña"),
    ("paella-valenciana", "La paella valenciana lleva arroz, conejo y judías verdes"),
    ("asado-argentino", "El asado argentino se cocina lentamente sobre brasas"),
    ("bandeja-paisa", "La bandeja paisa colombiana es un plato abundante y contundente"),
    ("mole-oaxaqueno", "El mole oaxaqueño lleva más de treinta ingredientes"),
    ("empanadas-argentinas", "Las empanadas argentinas se rellenan de carne, pollo o humita"),
    ("cuy-andino", "El cuy es un plato tradicional en los Andes peruanos"),
    ("arepa-venezolana", "La arepa venezolana se rellena de queso, carne o frijoles"),
    ("pupusas-salvadorenas", "Las pupusas salvadoreñas son tortillas rellenas de queso y chicharrón"),
    ("gazpacho-andaluz", "El gazpacho andaluz es una sopa fría de tomate"),
    ("lomo-saltado", "El lomo saltado fusiona la cocina peruana con la china"),
    # Food Criticism (12)
    ("textura-cremosa", "La textura es cremosa y aterciopelada"),
    ("sabor-umami", "El sabor es umami con toques ahumados"),
    ("notas-citrico", "Percibo notas de cítrico y hierbas frescas"),
    ("maridaje-perfecto", "Es un maridaje perfecto entre el vino y el queso"),
    ("presentacion-impecable", "La presentación del plato es impecable y artística"),
    ("equilibrio-sabores", "El equilibrio de sabores entre dulce y ácido es magistral"),
    ("complejidad-sabores", "El plato tiene una complejidad de sabores extraordinaria"),
    ("deshace-boca", "El bocado se deshace en la boca"),
    ("coccion-precisa", "La cocción es precisa y el interior queda jugoso"),
    ("emplatado-minimalista", "El emplatado es minimalista pero elegante"),
    ("ingrediente-identidad", "Cada ingrediente aporta su propia identidad al conjunto"),
    ("punto-justo-dulzura", "El postre tiene el punto justo de dulzura"),
    # Beverages & Specialty (12)
    ("cosecha-vino", "Este vino es de la cosecha del dos mil dieciocho"),
    ("reserva-crianza", "Es un reserva con cinco años de crianza"),
    ("taninos-suaves", "Los taninos son suaves y redondos en boca"),
    ("barrica-roble", "El vino maduró en barrica de roble francés"),
    ("cafe-origen", "Este café de origen es de la sierra colombiana"),
    ("tueste-medio", "Prefiero un tueste medio para resaltar las notas frutales"),
    ("notas-chocolate", "Detecto notas de chocolate amargo y nuez"),
    ("fermentacion-cafe", "La fermentación natural le da carácter al café"),
    ("mezcal-artesanal", "El mezcal artesanal tiene un final ahumado largo"),
    ("cacao-venezuela", "El cacao de Venezuela es considerado el mejor del mundo"),
    ("hierba-mate", "La infusión de hierba mate es un ritual en Argentina"),
    ("pisco-sour", "Este pisco sour lleva clara de huevo y amargo de Angostura"),
]

DIALOGUE_LINES = [
    # Dialogue 1: Professional Kitchen Service — Lima, Peru
    ("d1-line1", "¡Atención, equipo! Mise en place lista. El servicio empieza en quince minutos.", "es-CO-GonzaloNeural"),
    ("d1-line2", "Chef, el ceviche de corvina está listo. ¿Le agrego el ají limo ahora o al servir?", "es-CO-SalomeNeural"),
    ("d1-line3", "Al servir, siempre al servir. El ají pierde potencia si lo agregas antes.", "es-CO-GonzaloNeural"),
    ("d1-line4", "Chef, el lomo saltado está listo para saltear. ¿Fuego alto o medio?", "es-MX-JorgeNeural"),
    ("d1-line5", "Fuego alto, siempre. El wok tiene que estar humeando. La carne necesita sellarse en segundos.", "es-CO-GonzaloNeural"),
    ("d1-line6", "La reducción de ají amarillo está espesando. ¿La cuelo o la dejo así?", "es-CO-SalomeNeural"),
    ("d1-line7", "Cuélala. Necesitamos una textura sedosa para la presentación del plato.", "es-CO-GonzaloNeural"),
    ("d1-line8", "¡Marchando tres ceviches y dos lomos saltados, mesa siete!", "es-MX-JorgeNeural"),
    ("d1-line9", "¡Oído! Ana, el emplatado del ceviche tiene que ser minimalista pero elegante.", "es-CO-GonzaloNeural"),
    ("d1-line10", "Entendido. Uso la leche de tigre como espejo y el camote crocante de decoración.", "es-CO-SalomeNeural"),
    ("d1-line11", "Perfecto. Diego, el punto de cocción del lomo, ¿cómo lo pidieron?", "es-CO-GonzaloNeural"),
    ("d1-line12", "Uno jugoso y uno a punto, chef.", "es-MX-JorgeNeural"),
    ("d1-line13", "Bien. Cada ingrediente tiene que aportar su identidad al plato. Nada de más, nada de menos.", "es-CO-GonzaloNeural"),
    ("d1-line14", "Chef, el crítico del periódico está en la mesa doce. Pidió el menú degustación.", "es-CO-SalomeNeural"),
    ("d1-line15", "Entonces cada plato sale perfecto. Somos cocina peruana de nivel mundial. ¡Vamos, equipo!", "es-CO-GonzaloNeural"),
    # Dialogue 2: Food Critic Review — Barcelona, Spain
    ("d2-line1", "Buenas noches. Reservación a nombre de Martín, para la columna del suplemento gastronómico.", "es-ES-AlvaroNeural"),
    ("d2-line2", "Bienvenido, señor Martín. He seleccionado tres vinos para maridar con el menú de esta noche.", "es-ES-ElviraNeural"),
    ("d2-line3", "Excelente. Empecemos. ¿Qué me recomienda para acompañar el primer plato?", "es-ES-AlvaroNeural"),
    ("d2-line4", "Un albariño de Rías Baixas. Fresco, con notas de cítrico y melocotón. Maridaje perfecto con los mejillones.", "es-ES-ElviraNeural"),
    ("d2-line5", "Interesante elección. Los mejillones tienen una textura cremosa impresionante.", "es-ES-AlvaroNeural"),
    ("d2-line6", "El chef los preparó al vapor con azafrán y un toque de pimentón ahumado de la Vera.", "es-ES-ElviraNeural"),
    ("d2-line7", "El equilibrio de sabores es magistral. El ahumado no opaca el sabor del mar.", "es-ES-AlvaroNeural"),
    ("d2-line8", "Para el segundo plato, un Rioja reserva del dos mil dieciocho. Taninos suaves, final largo.", "es-ES-ElviraNeural"),
    ("d2-line9", "¿Cuánto tiempo en barrica de roble?", "es-ES-AlvaroNeural"),
    ("d2-line10", "Dieciocho meses en roble francés. El vino tiene notas de vainilla y cereza madura.", "es-ES-ElviraNeural"),
    ("d2-line11", "Exquisito. Y el cordero... la cocción es precisa. El interior queda rosado y jugoso.", "es-ES-AlvaroNeural"),
    ("d2-line12", "El chef lo braseó durante tres horas a temperatura baja antes del sellado final.", "es-ES-ElviraNeural"),
    ("d2-line13", "Se nota. El bocado se deshace en la boca. La presentación es minimalista pero impactante.", "es-ES-AlvaroNeural"),
    ("d2-line14", "Para el postre, un Pedro Ximénez. Notas de dátil, higo y chocolate amargo.", "es-ES-ElviraNeural"),
    ("d2-line15", "Una cena extraordinaria. Cada plato contó una historia. Mi crítica será muy favorable.", "es-ES-AlvaroNeural"),
    ("d2-line16", "Nos honra, señor Martín. La cocina española vive su mejor momento.", "es-ES-ElviraNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L8.4...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
