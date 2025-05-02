import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://pedropalacio98.github.io",
  base: "/running-store/",
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",

  build: {
    outdir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: true,
  },

  integrations: [react()],
});
