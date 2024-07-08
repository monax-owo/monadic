import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import AutoImport from "unplugin-auto-import/vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    sveltekit(),
    AutoImport({
      dts: "./src/@types/auto-imports.d.ts",
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.svelte$/, // .svelte
      ],
      imports: [
        "svelte",
        {
          zod: [["default", "z"]], // import z from "zod"
        },
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
