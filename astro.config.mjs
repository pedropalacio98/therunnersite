import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
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
