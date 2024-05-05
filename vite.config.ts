import { defineConfig } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import UnoCSS from "unocss/vite"
import autoprefixer from "autoprefixer"

export default defineConfig({
	plugins: [UnoCSS(), sveltekit()],
	css: {
		postcss: {
			plugins: [autoprefixer()],
		},
	},
})
