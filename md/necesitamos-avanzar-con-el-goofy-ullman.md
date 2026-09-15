# Plan: Avanzar landing page MS & Asociados Abogados

## Contexto

El dueño del estudio respondió la guía de entrevista (ver `Resumen_Entrevista_MS_Asociados.pdf`). Hay suficiente información confirmada para avanzar en varios frentes (copy institucional, blog divulgativo, blog técnico, áreas de práctica, simposios), mientras que Equipo, Testimonios y el botón "Agendar consulta" funcional siguen bloqueados por datos que el dueño aún no envió (nombres del equipo, número de WhatsApp, herramienta de calendario, testimonios reales).

Estado actual del sitio (`index.html`, 438 líneas, HTML/CSS/JS plano sin build tooling, un solo commit en git):
- Secciones existentes: Header, Hero, Ticker de áreas, Quiénes somos (`#nosotros`), Áreas de práctica (`#areas`), Cómo trabajamos (`#proceso`), Equipo (`#equipo`), Contacto (`#contacto`), Footer.
- No existe sección de Blog ni de Simposios.
- El equipo usa avatares de iniciales placeholder (M.S., L.R., A.B.) — se mantienen tal cual, sin tocar, hasta recibir datos reales.
- El formulario de contacto (líneas 379-402) tiene `onsubmit="return false;"` — no envía nada.
- No hay links de WhatsApp, `tel:`, `mailto:` ni calendario en ningún lado.
- `<head>` no tiene meta description, Open Graph, Twitter Card, canonical, favicon, ni existe `robots.txt`/`sitemap.xml`.
- 3 de 4 imágenes siguen embebidas como base64 (hero watermark, foto hero, foto "quiénes somos"); solo el logo del header ya usa `img/logoblanco.png`. Además hay una imagen sin usar de 9.5MB en `img/` (`martillo-con-libros-sobre-el-escritorio-de-madera-antiguo.jpg`).
- Deploy target: **Cloudflare Pages** (sitio estático, sin build). Formulario de contacto: **Formspree**. Botón "Agendar consulta": se deja con **placeholders marcados con TODO** para WhatsApp y calendario.

El objetivo de este trabajo es dejar el sitio listo para desplegar en Cloudflare Pages, con el copy actualizado según los valores/tono confirmados, nuevas secciones (Blog divulgativo, Blog técnico, Simposios), SEO básico completo, y las secciones bloqueadas claramente marcadas como pendientes sin romper el diseño.

## Alcance — qué se hace y qué no

**Se hace ahora:**
1. Copy de "Quiénes somos" — reflejar valores explícitos + vocación multidisciplinaria futura.
2. Nueva sección Blog divulgativo — estructura + primer artículo real (tema: razonamiento probatorio y pruebas digitales).
3. Nueva sección Blog técnico — estructura visualmente separada, estado "en construcción", sin artículos reales.
4. Áreas de práctica — actualizar copy de la tarjeta Civil para incluir "Daños Modernos", agregar/renombrar tarjeta para "Juicios diversos", dar mayor protagonismo visual a Laboral y Comercial.
5. Nueva sección Simposios y actividades académicas — estado "Próximamente".
6. SEO: meta description, Open Graph, Twitter Card, canonical, favicon, `robots.txt`, `sitemap.xml`, jerarquía de encabezados revisada.
7. Deploy-readiness: extraer las 3 imágenes base64 restantes a archivos en `img/`, eliminar o excluir la imagen de 9.5MB no usada, conectar el formulario de contacto a Formspree, agregar `tel:`/`mailto:` reales donde corresponde, preparar el botón "Agendar consulta" con placeholders de WhatsApp (`wa.me/`) y calendario marcados con `TODO`, config mínima para Cloudflare Pages (sin build command, output = raíz; opcional `_headers`/`_redirects` si aplica).

**No se toca / queda bloqueado (documentado con comentario TODO en el HTML):**
- Sección Equipo: se mantiene el estilo de iniciales tal como está.
- Sección Testimonios: no se agrega (no hay contenido real).
- Número de WhatsApp real y herramienta de calendario real: quedan como placeholder.

## Archivos críticos a modificar

- `index.html` — todas las secciones nuevas/editadas, `<head>` SEO, wiring de formulario y CTA.
- `CSS/stylesheet.css` — estilos para las 3 secciones nuevas (Blog divulgativo, Blog técnico, Simposios), reutilizando los patrones visuales ya existentes (`.about`, `.practice`, cards, `eyebrow`/`H2` pattern) en vez de crear un sistema nuevo.
- `JS/script.js` — solo si se necesita lógica extra para el form de Formspree (probablemente no, Formspree funciona con `action`/`method` puro sin JS) o para el submit de éxito/error.
- Nuevos archivos: `robots.txt`, `sitemap.xml`, favicon (`favicon.ico` o `favicon.svg` a partir del logo existente).
- `img/` — extraer 3 base64 a archivos nuevos (ej. `img/hero-estatua.jpg`, `img/hero-watermark.png`, `img/about-balanza.jpg`); remover del repo (o excluir del deploy) la imagen de 9.5MB no referenciada.

## Detalle por sección

### 1. Quiénes somos (`#nosotros`, líneas ~166-213)
Reescribir el párrafo body (186-195) para mencionar explícitamente: transparencia, honestidad, compromiso con el cliente de inicio a fin, tenacidad; e incluir una frase que deje abierta la vocación multidisciplinaria (tecnología en alimentos, ingeniería ambiental, seguridad industrial, salud ocupacional) sin comprometerse a fechas. Se puede incorporar la frase institucional "Estudio jurídico de innovación permanente y excelencia técnica" como línea destacada (eyebrow o cita). Mantener tono simple/claro, evitar informalidad y evitar dar sensación de lentitud.

### 2. Blog divulgativo (sección nueva, ubicar después de Cómo trabajamos o antes de Contacto — decidir por flujo visual, probablemente después de `#areas`/`#proceso` y antes de Equipo)
- Estructura tipo grid de tarjetas (reutilizar patrón `.practice .card`).
- Primer artículo real: "Razonamiento probatorio y pruebas digitales" — resumen/copy inicial (no un post extenso, sino la tarjeta + posible anchor a contenido futuro).
- Otras dos tarjetas con los temas confirmados como "próximo artículo": impacto y derecho ambiental; mora en investigaciones penales (mencionar la propuesta de figura de "detectives" para agilizar procesos penales como gancho).
- Nav: agregar link "Blog" en header y footer.

### 3. Blog técnico (sección nueva, separada visualmente del blog divulgativo — otro fondo/estilo, ej. tema oscuro o bordeado distinto)
- Copy: posicionamiento ante colegas, mención a alianzas con organismos internacionales.
- Estado: "Próximamente" / "En construcción" — sin artículos, con placeholder tipo "Los primeros dictámenes técnicos se publicarán próximamente."

### 4. Áreas de práctica (`#areas`, líneas 215-270)
- Tarjeta Civil (228-234): actualizar copy para incorporar "Daños Modernos" (responsabilidad de compliance officers, administradores de sociedades, profesionales independientes) — evaluar si conviene separarla en tarjeta propia o fusionar, priorizando claridad.
- Agregar/renombrar una tarjeta para "Juicios diversos" (sumarios administrativos, aduaneros, litigios diversos) si no encaja bien en las 6 existentes — puede reemplazar o extender "Protección de Datos" según espacio, o ampliar a 7-8 tarjetas.
- Dar mayor peso visual (orden, tamaño o iconografía) a Laboral y Comercial como áreas prioritarias, sin eliminar las demás.

### 5. Simposios y actividades académicas (sección nueva)
- Estado "Próximamente", sin fechas ni fotos.
- Copy: espacios de intercambio con profesionales reconocidos a nivel nacional e internacional; usar el término correcto ("Simposio" = escucha activa) evitando confundir con "Foro".

### 6. SEO (`<head>`, líneas 1-14, + archivos nuevos)
- `<meta name="description">` con resumen del estudio y áreas clave.
- Open Graph: `og:title`, `og:description`, `og:type=website`, `og:locale=es_PY`, `og:image` (usar una imagen representativa ya extraída a `img/`).
- Twitter Card: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`.
- `<link rel="canonical">` (dominio a definir — usar placeholder o el dominio de Cloudflare Pages).
- Favicon a partir de `img/logoblanco.png` o el isotipo del estudio.
- `robots.txt` permitiendo todo + referencia a sitemap.
- `sitemap.xml` con la única URL (o con anclas de secciones si se decide).
- Revisar jerarquía de encabezados (un solo `<h1>` en hero, `<h2>` por sección, sin saltos de nivel).

### 7. Deploy-readiness
- Extraer las 3 imágenes base64 restantes (hero watermark, foto hero, foto about) a archivos `.png`/`.jpg` en `img/`, referenciarlas por `src` — reduce ~397KB del HTML y mejora cacheo.
- Eliminar o mover fuera del proyecto la imagen de 9.5MB no utilizada (confirmar con el usuario antes de borrar del repo si ya está trackeada; como está untracked según el git status inicial solo aparece `img/logoblanco.png`, así que la de 9.5MB probablemente tampoco está trackeada — verificar con `git status` antes de tocarla).
- Formulario de contacto: reemplazar `onsubmit="return false;"` por integración real con Formspree (`action="https://formspree.io/f/XXXXX" method="POST"`, con placeholder de endpoint marcado `TODO: reemplazar con endpoint real de Formspree`), mantener validación HTML5 existente.
- `tel:` y `mailto:` reales en el teléfono `(021) 673 294` y el correo `ms.asociados01@gmail.com` ya visibles en el sitio.
- Botón "Agendar consulta" (header línea 35, hero línea 58): cambiar de ancla `#contacto` a link real `https://wa.me/595TODO` con comentario TODO visible, y agregar segundo CTA o nota para calendario con placeholder (ej. `href="#TODO-calendario"`).
- Cloudflare Pages: no requiere archivo de config obligatorio (build command vacío, output directory = raíz `/`); documentar esto en el plan/README si se pide, sin agregar archivos innecesarios. Si se desea, agregar `_headers` mínimo (cache-control para `img/`) — opcional, evaluar si aporta valor real antes de agregarlo.

## Verificación

- Abrir `index.html` en navegador (o servir localmente) y revisar visualmente cada sección nueva/editada en desktop y mobile (breakpoints ya definidos en `CSS/stylesheet.css`).
- Verificar que el formulario de contacto envíe correctamente a Formspree (test real con el endpoint una vez creado).
- Validar SEO con una herramienta como Meta Tags checker / Lighthouse (Performance + SEO + Accessibility) desde DevTools.
- Confirmar que las imágenes cargan desde `img/` y no rompen el layout (revisar `alt` text).
- Revisar que los links `tel:`, `mailto:`, `wa.me` (aunque con número placeholder) tengan el formato correcto para no dar error 404 al hacer clic una vez completado el número real.
- Deploy de prueba en Cloudflare Pages (conectar repo o subir carpeta) y verificar que carga correctamente en la URL `*.pages.dev`.
