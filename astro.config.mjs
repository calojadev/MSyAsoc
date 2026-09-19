// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO: reemplazar por el dominio definitivo del estudio cuando esté contratado.
// De este valor dependen el canonical, las URLs de Open Graph y el sitemap.xml.
const SITE = "https://msyasociados.pages.dev";

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
});
