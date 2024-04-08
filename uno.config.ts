import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';
import extractorSvelte from '@unocss/extractor-svelte';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
	presets: [presetUno()],
	extractors: [extractorSvelte()],
	transformers: [transformerVariantGroup()]
});
