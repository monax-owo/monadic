import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const base = "monadic";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: "404.html",
    }),
    alias: {
      $routes: "src/routes",
      $component:"src/lib/component"
    },
    paths: {
      base: process.argv.includes("dev") ? "/dev" : `/${process.env.BASE_PATH ?? base}`,
    },
  },
};
export default config;
