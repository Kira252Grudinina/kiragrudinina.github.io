import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kira252grudinina.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
