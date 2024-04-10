import { defineConfig } from 'unocss';
import { presetMini } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
	presets: [presetMini()],
	extractors: [extractorSvelte()],
	transformers: [transformerVariantGroup()]
});
