import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://kiragrudinina.github.io",
  base: "/",
  integrations: [tailwind()],
});
