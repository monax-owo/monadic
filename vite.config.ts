import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import UnoCSS from "unocss/vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
	plugins: [
		UnoCSS(),
		sveltekit(),
		SvelteKitPWA({
			strategies: "injectManifest",
			srcDir: "src",
			filename: "sw.ts",
		}),
	],
	css: {
		postcss: {
			plugins: [autoprefixer()],
		},
	},
});
