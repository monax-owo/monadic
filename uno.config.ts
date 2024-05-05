import { defineConfig } from "unocss";
import { presetMini } from "unocss";
// import { presetUno } from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";
export default defineConfig({
	presets: [presetMini()],
	extractors: [extractorSvelte()],
	transformers: [transformerVariantGroup(), transformerDirectives()],
});
