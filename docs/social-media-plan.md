# Plan de Social Media + SEO Orgánico — Alexandria's Language Institute

## Contexto

Eili está terminando de configurar la plataforma del curso (`alexandriaslanguages.com`, freemium + subscripción) y necesita un **plan de crecimiento orgánico** — sin ads pagados al inicio — para atraer seguidores y compradores. El plan debe ser ejecutable con **2-3 horas/semana** (mínimo viable), apalancarse en las **74 lecciones del curso** como fuente infinita de contenido temático, y posicionar la marca en búsquedas de Google y Facebook para "aprender español / learn Spanish".

**Audiencia objetivo**: adultos A1 globales (EEUU, Europa, Asia no-nativos) — contenido principalmente en **inglés** como lengua franca.

**Estrategia de marca / producción**: **faceless inicial con voz clonada de Eili** (Professional Voice Clone de ElevenLabs). Nada de grabar videos con la cara en Fase 1. Formatos: carruseles estáticos, Reels con b-roll + voz clonada, videos de texto animado + voz clonada. Autenticidad preservada (es SU voz real, clonada una sola vez a partir de una sesión de grabación de 45 min) sin el bloqueo de grabar cada video. Cuando Eili tenga tiempo/ganas en Fase 2, se suma contenido con su cara real. Charles aparece solo en la sección "método" con aval de su estudio doctoral.

**Herramientas ya disponibles**: ElevenLabs (Creator plan, Professional Voice Clone), Blotato (automación), n8n, Gemini Nano Banana, OpenRouter, Canva API, workflow 4-plataformas.

---

## 1) Cuentas a crear (orden de prioridad)

Solo 4 cuentas para empezar — más cuentas = más dispersión con 2-3h/semana disponibles.

| # | Plataforma | Handle sugerido | Prioridad | Razón |
|---|------------|-----------------|-----------|-------|
| 1 | **Instagram** (Business) | `@alexandriaslanguages` | CRÍTICA | Nicho "learn Spanish" gigante. Reels + carruseles educativos funcionan muy bien para A1. |
| 2 | **TikTok** (Business) | `@alexandriaslanguages` | CRÍTICA | Mayor alcance orgánico 2026 para educativo. A1 adults están ahí. |
| 3 | **YouTube** (canal) | `Alexandria's Languages` | ALTA | Es el **2do buscador del mundo**. Shorts + videos largos → SEO brutal. |
| 4 | **Facebook Page** (conectada a IG) | `Alexandria's Language Institute` | ALTA | Obligatoria para aparecer en búsquedas de Facebook y para Instagram ads futuros. |
| 5 | **Pinterest** (Business) | `alexandriaslanguages` | MEDIA | SEO long-tail bestia ("spanish verbs cheat sheet", "learn spanish a1"). Muy bajo costo de producción. |
| 6 | **LinkedIn Page** (diferente a tu perfil personal) | `Alexandria's Language Institute` | BAJA | Para angle B2B (empresas que pagan cursos a empleados). Fase 2, no ahora. |

**No crear ahora**: Twitter/X (ROI bajo para educativo A1), Threads (redundante con IG), Snapchat.

### Setup inicial (una vez, ~2 horas total)

- **Handle idéntico en las 4 plataformas**: `@alexandriaslanguages` (verificar disponibilidad con [namecheckr.com](https://namecheckr.com))
- **Bio estandarizada** (inglés):
  > Learn Spanish from a native speaker — method backed by doctoral research 🎓
  > A1 → C2 · Real audio · Interactive lessons
  > 👇 Start free
  > alexandriaslanguages.com
- **Foto perfil**: logo (mismo en las 4) — generar con Gemini Nano Banana si no existe
- **Link en bio**: usar Linktree O mejor una landing simple en `alexandriaslanguages.com/start` con CTA directo a registro gratuito
- **Conectar IG ↔ Facebook Page** desde Meta Business Suite (permite programar ambas desde un solo sitio)
- **Activar Creator Tools** en TikTok (analytics + monetización futura)

---

## 2) Administración diaria y semanal

**Filosofía**: producir 1 vez a la semana, programar todo, responder diariamente 15 minutos.

### Cadencia (5 posts/semana total, distribuidos) — **todo faceless, voz clonada**

| Día | Plataforma | Tipo | Producción | Tiempo |
|-----|------------|------|-----------|--------|
| Lun | IG Reel + TikTok + YT Short (mismo video) | Micro-lección de vocabulario | Texto animado + voz clonada + b-roll | 0 (programado) |
| Mar | IG Carrusel estático | Error común de angloparlantes | Canva 8 slides, sin audio | 0 (programado) |
| Mié | TikTok + IG Reel | Cultura hispana (dato curioso) | B-roll países + voz clonada narrando | 0 (programado) |
| Jue | Pinterest Pin + Facebook Post | Cheat sheet / infografía | Canva API + Pillow | 0 (programado) |
| Vie | IG Reel + TikTok + YT Short | Detrás del método / caso de estudiante | Texto animado + voz clonada | 0 (programado) |
| Sáb/Dom | — | Descanso o responder DMs | — | — |

**Regla**: **1 pieza de contenido = 3-4 plataformas** (repurposing). Nunca producir exclusivo para una sola plataforma.

### Distribución del tiempo semanal (2-3 horas totales)

| Actividad | Tiempo | Día sugerido |
|-----------|--------|--------------|
| **Producción batch** (escribir 5 scripts → ElevenLabs voz clonada → montar b-roll/texto en CapCut) | 60-90 min | Domingo tarde |
| **Programación en Blotato** (subir videos + captions + hashtags) | 20 min | Domingo noche |
| **Engagement diario** (responder comentarios/DMs) | 10-15 min × 5 días | Lun-Vie |
| **Revisar métricas + ajustar** | 15 min | Viernes |

**Ahorro clave**: sin grabación frente a cámara, el batch de producción baja de 90-120 min a **60-90 min**. Y el pipeline (script → voz clonada → video) es 90% automatizable con n8n.

### Blotato como centro de control

Ya lo tienes conectado. Úsalo para:
- Programar las 5 piezas semanales a Instagram, TikTok, Facebook, YouTube Shorts (todo desde un sitio)
- Guardar plantillas de caption con hashtags por pilar de contenido
- NO uses Blotato para Pinterest ni LinkedIn — usa **Tailwind** (Pinterest) y programación nativa de LinkedIn

---

## 3) Los 4 pilares de contenido (para no quedarte sin ideas nunca)

Con estos pilares y las **74 lecciones del curso** como fuente temática, puedes generar contenido por **un año sin repetirte**. Todo el audio de los videos se genera con **tu voz clonada en ElevenLabs** — autenticidad preservada, cero grabación cada semana.

### Pilar 1 — Micro-lección de vocabulario (40% del contenido)
- Formato: Reel/TikTok 15-30s con b-roll + texto animado + **voz clonada** narrando
- Fórmula: "1 Spanish word English speakers always confuse" → tu voz clonada pronuncia y explica → ejemplo en contexto → CTA
- Ejemplo: "saber vs conocer", "por vs para", "ser vs estar"
- **Fuente temática**: extraer de las 74 lecciones del curso (cada lección = 3-5 micro-videos)

### Pilar 2 — Errores comunes (25%)
- Formato: Carrusel IG estático (sin audio) o Reel con texto animado + voz clonada
- Fórmula: "Angloparlante dice X (❌) → Native dice Y (✅) → Why"
- Alto engagement (relatable, genera comentarios). Los carruseles no necesitan voz → producción ultra-rápida.

### Pilar 3 — Cultura hispana (20%)
- Formato: TikTok storytime con b-roll (ciudades hispanas) + voz clonada narrando; IG carrusel cultural
- Fórmula: Diferencias entre España/México/Argentina/Colombia (material temático del curso)
- Ejemplo: "How to say 'cool' in every Spanish country"

### Pilar 4 — Detrás del método + testimonios (15%)
- Formato: Video largo YouTube + Reel corto — **este sí con tu cara** en Fase 2 (cuando tengas tiempo/ganas). Mientras tanto, voz clonada + texto animado con el aval doctoral de Charles.
- Fórmula: "The doctoral research behind how we teach" (Charles) + casos reales de alumnos
- **Este pilar convierte** (es donde los "warm leads" se vuelven compradores)

---

## 4) SEO: cómo aparecer en Google y Facebook cuando busquen "aprender español"

Esto es **tan importante como las redes**, probablemente más. El tráfico de Google es el único que compra a escala sin depender del algoritmo de IG.

### 4.A — Google Search (tráfico orgánico principal)

**Prerequisitos técnicos** (una vez, ~3 horas total):
1. **Conectar dominio** `alexandriaslanguages.com` (ya pendiente, incluido en deadline Charles Apr 19)
2. **Google Search Console** + **Bing Webmaster** — registrar sitio, enviar sitemap
3. **Google Analytics 4** — instalar
4. **Schema markup** en el sitio:
   - `Organization` schema
   - `Course` schema en cada lección (Google muestra cursos en resultados especiales)
   - `FAQ` schema en preguntas frecuentes
5. **robots.txt + sitemap.xml** correctos

**Estrategia de contenido SEO** (blog en `alexandriaslanguages.com/blog`):
- **1 post/semana** de 1,500-2,000 palabras en inglés
- **Keywords objetivo** (long-tail, bajo competencia alta intención):
  - "how to learn spanish for beginners 2026"
  - "spanish a1 level guide"
  - "best way to learn spanish online"
  - "spanish verb conjugation for english speakers"
  - "free spanish lessons for beginners"
- **Herramientas gratuitas**:
  - [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) (requiere cuenta Google Ads gratis)
  - [AnswerThePublic](https://answerthepublic.com) — 3 búsquedas/día gratis
  - [Ubersuggest](https://neilpatel.com/ubersuggest/) — 3 búsquedas/día gratis
- **Producción**: usa GPT-5.1 Codex vía OpenRouter para generar drafts en minutos, después editas tú (~30 min/post)
- **CTA interno**: cada post termina con "Start your free Level 1 → alexandriaslanguages.com"

**Backlinks orgánicos** (genera autoridad):
- Publicar guest posts en blogs de aprendizaje de idiomas (FluentU, SpanishPod101 no compiten — otros sí)
- Responder en Quora y Reddit (`r/Spanish`, `r/languagelearning`) citando tu blog
- Submit a directorios: `courseduck.com`, `classcentral.com`

### 4.B — Facebook Search

Facebook tiene su propio buscador interno. Para aparecer:
1. **Facebook Page completa al 100%**:
   - Nombre: `Alexandria's Language Institute`
   - Username: `@alexandriaslanguages`
   - Categoría: "Education" → "Language School"
   - About: incluir keywords "learn Spanish online, Spanish for beginners, Spanish A1 B1 C1 C2"
   - **Call to Action button**: "Learn More" → a tu web
2. **Postear 3x/semana mínimo** (reciente = mejor ranking)
3. **Grupos de Facebook**: unirse a 5-10 grupos de "Learn Spanish", "Spanish learners", "Expats in Mexico" y aportar valor SIN spamear (comentarios útiles 4 semanas antes de cualquier mención de tu marca)
4. **Reviews**: pedir a los primeros 20 alumnos que dejen reseña en Facebook — el boost es enorme

### 4.C — YouTube SEO (bonus gigante)

YouTube es Google. Videos largos (8-15 min) rankean en Google y dan tráfico por años:
- 1 video largo al mes: "Complete guide to Spanish [topic]"
- Titles con keyword exacta: "Learn Spanish for Beginners — Full A1 Guide 2026"
- Description con link a web + timestamps + transcripción completa
- Thumbnails custom (Canva)

### 4.D — Pinterest (bajo esfuerzo, alto retorno SEO)

Pinterest es motor de búsqueda, no red social. Para "learn spanish" tiene millones de búsquedas mensuales.
- 5 pins/semana (generados automáticamente con Canva API + n8n → infografías de cheat sheets)
- Cada pin lleva al blog o a la landing
- Uso de **Rich Pins** (metadata estructurada)

---

## 5) Métricas a revisar cada viernes (15 min)

Solo 5 números, nada más:

| Métrica | Fuente | Objetivo mes 1 | Objetivo mes 6 |
|---------|--------|----------------|----------------|
| Seguidores IG + TikTok | nativo | +100/mes combinado | +2,000/mes |
| Click-through a web | Bio link + UTM tags | 50/mes | 1,000/mes |
| Registros Free Level 1 | Stripe/Clerk dashboard | 20/mes | 500/mes |
| Conversiones a pago | Stripe | 1-2/mes | 25/mes |
| Tráfico orgánico Google | Search Console | 100 impresiones/mes | 10,000 impresiones/mes |

**Regla**: si una plataforma no genera ni seguidores ni clicks en 90 días, **la abandonas**. No sigas tirando tiempo por inercia.

---

## 6) Hoja de ruta (primeras 8 semanas)

### Semana 0 — Voice Cloning (una sola vez, antes de todo)
- Grabar **45 minutos** de audio siguiendo el guion en `docs/voice-cloning-script.md`
- Subir audios a ElevenLabs → Professional Voice Clone (procesa en ~4 horas)
- Obtener `voice_id` y guardarlo como `ELEVENLABS_EILI_VOICE_ID` en `.env`
- Probar: generar 1 audio de prueba con el clon y validar calidad

### Semana 1 — Setup
- Día 1: Crear las 4 cuentas (IG, TikTok, YT, FB) con handle `@alexandriaslanguages` y **el logo oficial** de `branding/logo.png`
- Día 2: Bio estándar + conectar link en bio + foto de perfil = `branding/logo-icon-only.png` (o avatar específico)
- Día 3: Setup Blotato con las 4 cuentas
- Día 4: Setup Google Search Console + Analytics 4 en el dominio
- Día 5: Clonar workflow n8n `Social Media ModelIt 4 Platforms` → adaptar con prompts de Alexandria's Languages **y agregar nodo ElevenLabs** para generar audio en cada video

### Semana 2 — Primera batch de contenido (pipeline faceless)
- Escribir 10 scripts cortos de 30-60 palabras cada uno (tema: micro-lecciones Pilar 1)
- Generar 10 audios con la voz clonada vía ElevenLabs (automatizable con n8n, total ~5 min de compute)
- Montar 10 videos en CapCut o Descript con b-roll + texto animado + audio clonado
- Publicar 2 piezas (ritmo inicial suave) y programar el resto

### Semanas 3-4 — Ritmo normal
- 5 posts/semana siguiendo los 4 pilares (mezcla de Reels con voz clonada + carruseles estáticos)
- Empezar 1 blog post semanal en alexandriaslanguages.com/blog
- Unirse a 5 grupos de Facebook sobre español

### Semanas 5-8 — Optimización
- Revisar qué pilar genera más engagement → doblar
- Primeros 10 guest-comment posts en Reddit/Quora con enlace al blog
- Pedir a primeros alumnos (Level 1 free) un testimonial corto en video
- **Opcional Fase 2**: si Eili se siente lista, empezar a grabar 1 video/semana con su cara para el Pilar 4 ("detrás del método")

---

## 7) Archivos y herramientas críticas a crear/usar

Nada de código nuevo pesado — casi todo configuración y uso de lo que ya tienes.

- **ElevenLabs** (Creator plan activo, `ELEVENLABS_API_KEY` en `.env`) — Professional Voice Clone de Eili, genera audio con su voz para cada video de redes
- **Blotato** (ya conectado) — centro de programación para IG/TikTok/FB/YT
- **Canva API** (ya configurado en `.env`) — generar plantillas de carruseles e infografías Pinterest
- **n8n workflow existente** (`Social Media ModelIt 4 Platforms`, ID `kSzsISora8B7bW0q`) — **clonar** y adaptar para Alexandria's Languages (cambiar prompts, modelo de imagen, sheet destino) **+ agregar nodo de ElevenLabs** para generar el audio con la voz clonada en cada ejecución
- **Guion de voice cloning**: `docs/voice-cloning-script.md` — guion de 45 min para crear el Professional Voice Clone (hacer UNA sola vez al inicio)
- **Logo oficial y variantes**: `branding/` y `public/` — listos para usar como foto de perfil, OG image, favicon
- **Google Search Console** — URL nueva a registrar
- **Calendario de contenido** — Google Sheet nuevo con columnas `Fecha | Plataforma | Pilar | Script | Audio (voice_id) | Caption | Hashtags | Link video | Estado`. Ubicación sugerida: Google Drive de `esierra@alexandriasdesign.com` para respetar la regla de cuentas.

### Pipeline técnico de producción de 1 Reel (automatizado)

```
1. Escribir script corto (30-60 palabras) en Google Sheet
2. n8n lee el Sheet → llama OpenRouter (GPT-5.1) para refinar script si hace falta
3. n8n envía script a ElevenLabs API con ELEVENLABS_EILI_VOICE_ID → recibe audio MP3
4. n8n genera imagen/b-roll con gpt-image-1 o Gemini (según caso)
5. n8n combina audio + imagen/b-roll + texto animado → MP4 (15-30s)
6. n8n sube MP4 a Blotato → programa en IG + TikTok + YT Shorts
```

Tiempo humano por pieza (post-voice-clone): **~3 min** (solo escribir el script, todo lo demás es automático).

---

## 8) Verificación (cómo sabemos que funciona)

Al terminar Semana 0:
- ✅ Professional Voice Clone de Eili creado en ElevenLabs, `voice_id` guardado
- ✅ Prueba de audio con la voz clonada suena natural y fiel

Al terminar semana 2:
- ✅ Las 4 cuentas existen, linkean a `alexandriaslanguages.com`, tienen bio + foto = `branding/logo-icon-only.png` + 2-3 posts cada una
- ✅ Blotato tiene al menos 2 semanas de contenido programado
- ✅ Pipeline n8n (script → ElevenLabs → video → Blotato) funciona end-to-end
- ✅ Google Search Console confirma que el sitio está indexado
- ✅ La Facebook Page aparece cuando buscas "Alexandria's Language Institute" en Facebook

Al terminar mes 1:
- ✅ 20+ piezas de contenido publicadas (4-5/semana)
- ✅ 1 blog post semanal publicado (mínimo 4 posts)
- ✅ Analytics muestra visitas orgánicas de Google (aunque sean pocas)

Al terminar mes 3:
- ✅ 300+ seguidores combinados entre IG y TikTok
- ✅ Primer post viral (>10k views) identifica qué pilar funciona mejor
- ✅ Primeras conversiones orgánicas a pago (Premium)

---

## 9) Qué NO hacer (errores caros comunes)

- ❌ **No abrir 8 cuentas al mismo tiempo** — dispersión mata crecimiento orgánico. Enfócate en 3-4.
- ❌ **No producir contenido exclusivo por plataforma** — con 2-3h/semana es imposible. Todo se repurposa.
- ❌ **No comprar seguidores ni likes** — Meta y TikTok detectan esto y castigan el alcance permanentemente.
- ❌ **No postear solo promoción del curso** — proporción 80% valor / 20% venta. Si solo vendes, nadie sigue.
- ❌ **No cambiar de handle después de crecer** — elige uno que te guste y mantenlo.
- ❌ **No ignorar los primeros DMs/comentarios** — los primeros 50 seguidores son oro, son tu comunidad base.
- ❌ **No subir videos con marca de agua de TikTok a Instagram** — IG penaliza el alcance. Usa CapCut o SnapTik para bajar sin marca.
