import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
// import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
export default defineConfig({
  plugins: [sveltekit() /* react() */],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
