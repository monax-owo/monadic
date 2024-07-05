import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: "404.html",
      edge: false,
      split: false,
    }),
    alias: {
      $routes: "src/routes",
    },
    paths: {
      base: process.argv.includes("dev") ? "/dev" : `/${process.env.BASE_PATH}`,
    },
  },
};
export default config;
