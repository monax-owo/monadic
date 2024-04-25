import { defineConfig } from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";
import { presetMini } from "unocss";
// import { presetUno } from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
	presets: [presetMini(), presetRemToPx()],
	extractors: [extractorSvelte()],
	transformers: [transformerVariantGroup(), transformerDirectives()],
});
