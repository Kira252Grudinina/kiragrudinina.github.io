import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://kira252grudinina.github.io",
  integrations: [tailwind()],
});
