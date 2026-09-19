# MS & Asociados — guía de despliegue y pendientes

Sitio construido con [Astro](https://astro.build) y editable por el estudio
mediante [Decap CMS](https://decapcms.org) en la ruta `/admin`.

## Comandos

| Comando           | Qué hace                                      |
| ----------------- | --------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Servidor local en `http://localhost:4321`     |
| `npm run build`   | Genera el sitio estático en `dist/`           |
| `npm run preview` | Sirve `dist/` para revisar antes de desplegar |

## Cloudflare Pages

Conectar el repositorio y usar esta configuración:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 20 o superior

Al desplegar por primera vez, actualizar el dominio real en dos lugares:

1. `astro.config.mjs` → constante `SITE` (afecta canonical, Open Graph y sitemap).
2. `public/robots.txt` → línea `Sitemap:`.

## Decap CMS — login del estudio

Cloudflare Pages no tiene un servicio de identidad propio (como Netlify
Identity), así que el login con GitHub necesita un **Worker que actúe de proxy
OAuth**. Pasos, una sola vez:

1. En GitHub: **Settings → Developer settings → OAuth Apps → New OAuth App**.
   - _Homepage URL_: el dominio del sitio.
   - _Authorization callback URL_: `https://<tu-worker>.workers.dev/callback`.
   - Guardar el **Client ID** y el **Client Secret**.
2. Desplegar un proxy OAuth como Cloudflare Worker (por ejemplo
   [`decap-proxy`](https://github.com/sterlingwes/decap-proxy) u otro
   equivalente), cargando `CLIENT_ID` y `CLIENT_SECRET` como variables de
   entorno del Worker.
3. En `public/admin/config.yml`, reemplazar `base_url` por la URL del Worker.
4. Dar acceso de escritura al repositorio a la cuenta de GitHub del estudio.

Hecho esto, el titular entra a `https://<dominio>/admin`, se autentica con
GitHub y publica artículos sin tocar código: cada publicación genera un commit
y Cloudflare Pages reconstruye el sitio automáticamente.

## Pendientes del estudio

Estos datos están centralizados en `src/config.ts`. Al completarlos, los
botones y el formulario quedan funcionales sin tocar ningún componente.

| Pendiente                | Dónde se carga                          | Qué desbloquea                                      |
| ------------------------ | --------------------------------------- | --------------------------------------------------- |
| Número de WhatsApp       | `src/config.ts` → `PENDING.whatsappNumber` | Botón "Agendar consulta" (hoy ancla a `#contacto`) |
| Herramienta de calendario | `src/config.ts` → `PENDING.calendarUrl`   | Botón "Ver agenda disponible" (hoy oculto)          |
| ID de Formspree          | `src/config.ts` → `PENDING.formspreeId`   | Envío del formulario de contacto                    |
| URL del Worker OAuth     | `public/admin/config.yml` → `base_url`    | Login del estudio en `/admin`                       |
| Datos del equipo         | `src/components/Team.astro`               | Reemplazo de los monogramas M.S. / L.R. / A.B.      |
| Testimonios              | —                                         | Sección de testimonios (no construida aún)          |

### Imágenes a solicitar al estudio

Las fotos actuales son de maqueta (stock) y están marcadas con `TODO` en el
código. Para reemplazarlas basta con pisar el archivo en `public/img/`
manteniendo el nombre.

| Archivo                        | Dónde se ve             | Proporción sugerida | Peso máximo |
| ------------------------------ | ----------------------- | ------------------- | ----------- |
| `placeholder-hero.jpg`         | Portada, columna derecha | Vertical ~3:4       | 300 KB      |
| `placeholder-nosotros.jpg`     | Sección "Quiénes somos"  | Horizontal ~3:2     | 300 KB      |

El logo (`logoblanco.png`, `logo-watermark.png`, `logo-footer.png`) ya es
material definitivo del estudio y no requiere reemplazo.
