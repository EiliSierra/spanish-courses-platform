"""Generate all audio files for L4.6 Banking & Finance using edge-tts."""
import asyncio, edge_tts, os

OUTPUT_DIR = r"D:\ClaudeEili\Proyectos\SpanishCourses-Next\public\audio\L4.6\phrases"
VOICES_ES = [
    "es-CO-SalomeNeural", "es-MX-DaliaNeural", "es-AR-ElenaNeural",
    "es-ES-ElviraNeural", "es-CL-CatalinaNeural", "es-CO-GonzaloNeural",
    "es-MX-JorgeNeural", "es-AR-TomasNeural", "es-ES-AlvaroNeural",
    "es-VE-SebastianNeural", "es-VE-PaolaNeural", "es-CL-LorenzoNeural",
]

PHRASES = [
    # Banking
    ("la-cuenta-bancaria", "La cuenta bancaria"),
    ("la-cuenta-de-ahorros", "La cuenta de ahorros"),
    ("la-cuenta-corriente", "La cuenta corriente"),
    ("el-cajero-automatico", "El cajero automático"),
    ("la-sucursal", "La sucursal"),
    ("la-tarjeta-de-debito", "La tarjeta de débito"),
    ("la-tarjeta-de-credito", "La tarjeta de crédito"),
    ("el-estado-de-cuenta", "El estado de cuenta"),
    ("el-saldo", "El saldo"),
    ("la-banca-en-linea", "La banca en línea"),
    # Transactions
    ("quiero-depositar-dinero", "Quiero depositar dinero"),
    ("necesito-retirar-efectivo", "Necesito retirar efectivo"),
    ("quiero-transferir-fondos", "Quiero transferir fondos"),
    ("necesito-pagar-una-factura", "Necesito pagar una factura"),
    ("quiero-cobrar-un-cheque", "Quiero cobrar un cheque"),
    ("la-comision-bancaria", "La comisión bancaria"),
    ("el-recibo", "El recibo"),
    ("firmar-aqui-por-favor", "Firmar aquí, por favor"),
    ("ingrese-su-contrasena", "Ingrese su contraseña"),
    ("el-deposito-directo", "El depósito directo"),
    # Currency
    ("la-casa-de-cambio", "La casa de cambio"),
    ("cual-es-el-tipo-de-cambio", "¿Cuál es el tipo de cambio?"),
    ("quiero-cambiar-dolares", "Quiero cambiar dólares a pesos"),
    ("la-moneda", "La moneda"),
    ("el-billete", "El billete"),
    ("el-efectivo", "El efectivo"),
    ("la-divisa-extranjera", "La divisa extranjera"),
    ("aceptan-dolares", "¿Aceptan dólares?"),
    # Financial Phrases
    ("quiero-abrir-una-cuenta", "Quiero abrir una cuenta"),
    ("cual-es-la-tasa-de-interes", "¿Cuál es la tasa de interés?"),
    ("necesito-un-prestamo", "Necesito un préstamo"),
    ("quiero-solicitar-una-hipoteca", "Quiero solicitar una hipoteca"),
    ("pagar-a-plazos", "Pagar a plazos"),
    ("el-presupuesto-mensual", "El presupuesto mensual"),
    ("ahorrar-para-el-futuro", "Ahorrar para el futuro"),
    ("la-deuda", "La deuda"),
    ("los-impuestos", "Los impuestos"),
    ("invertir-en-la-bolsa", "Invertir en la bolsa"),
]

DIALOGUE_LINES = [
    # D1: Opening account — Mexico City (Mexican voices)
    ("d1-line1", "Buenos días, bienvenido al banco. ¿En qué puedo ayudarle?", "es-MX-JorgeNeural"),
    ("d1-line2", "Buenos días. Quisiera abrir una cuenta de ahorros, por favor.", "es-MX-DaliaNeural"),
    ("d1-line3", "Claro. ¿Tiene su identificación oficial y un comprobante de domicilio?", "es-MX-JorgeNeural"),
    ("d1-line4", "Sí, aquí tiene mi pasaporte y una factura de electricidad.", "es-MX-DaliaNeural"),
    ("d1-line5", "Perfecto. El depósito mínimo es de quinientos pesos. ¿Desea depositar hoy?", "es-MX-JorgeNeural"),
    ("d1-line6", "Sí, quiero depositar dos mil pesos para empezar.", "es-MX-DaliaNeural"),
    ("d1-line7", "Muy bien. También le vamos a dar una tarjeta de débito. ¿Prefiere banca en línea?", "es-MX-JorgeNeural"),
    ("d1-line8", "Sí, por favor. ¿Cuál es la tasa de interés de la cuenta?", "es-MX-DaliaNeural"),
    ("d1-line9", "La tasa actual es del tres por ciento anual. Firme aquí, por favor.", "es-MX-JorgeNeural"),
    # D2: Currency exchange — Lima (Peruvian / Colombian voices)
    ("d2-line1", "Buenas tardes. ¿Cuál es el tipo de cambio de dólares a soles hoy?", "es-CO-SalomeNeural"),
    ("d2-line2", "Buenas tardes. Hoy el dólar está a tres soles con ochenta.", "es-CO-GonzaloNeural"),
    ("d2-line3", "Quiero cambiar trescientos dólares, por favor.", "es-CO-SalomeNeural"),
    ("d2-line4", "Son mil ciento cuarenta soles. ¿Quiere billetes grandes o pequeños?", "es-CO-GonzaloNeural"),
    ("d2-line5", "Una mezcla, por favor. Algunos de cien y otros de veinte.", "es-CO-SalomeNeural"),
    ("d2-line6", "Aquí tiene. ¿Necesita un recibo?", "es-CO-GonzaloNeural"),
    ("d2-line7", "Sí, por favor. ¿Cobran comisión?", "es-CO-SalomeNeural"),
    ("d2-line8", "No, señor. No cobramos comisión. Aquí está su recibo. ¡Buen viaje!", "es-CO-GonzaloNeural"),
]

async def gen(text, voice, path, rate="-10%"):
    if os.path.exists(path): return
    comm = edge_tts.Communicate(text, voice, rate=rate)
    await comm.save(path)
    print(f"  OK  {os.path.basename(path)}")

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    total = len(PHRASES) + len(DIALOGUE_LINES)
    print(f"Generating {total} audio files for L4.6 Banking & Finance...")
    tasks = []
    for i, (fname, text) in enumerate(PHRASES):
        tasks.append(gen(text, VOICES_ES[i % len(VOICES_ES)], os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    for fname, text, voice in DIALOGUE_LINES:
        tasks.append(gen(text, voice, os.path.join(OUTPUT_DIR, f"{fname}.mp3")))
    await asyncio.gather(*tasks)
    print(f"\nDone! {total} files in {OUTPUT_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
