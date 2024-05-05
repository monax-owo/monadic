import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import UnoCSS from "unocss/vite";
import autoprefixer from "autoprefixer";
import { cssDeclarationSorter } from "css-declaration-sorter";

export default defineConfig({
	plugins: [sveltekit(), UnoCSS(),],
	css: {
		postcss: {
			plugins: [
				autoprefixer(),
				// cssDeclarationSorter({ order: "smacss" })
			],
		},
	},
});
