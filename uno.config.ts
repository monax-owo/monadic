import { defineConfig } from "unocss";
// import { presetMini } from "unocss";
import { presetUno } from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
	presets: [presetUno()],
	extractors: [extractorSvelte()],
	transformers: [transformerVariantGroup()]
});
