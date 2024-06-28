<script lang="ts">
	import { onMount } from "svelte";
	import { PC1, PC2 } from "./store";
	export let id;
	let char: string = "";
	let draw: boolean;
	const p = (PC: string) => (char = PC);
	const over = (e: MouseEvent, PC: string) => {
		if (draw) {
		}
	};
	onMount(() => () => (draw = false));
</script>

<button {id} type="button" class="Pixel" on:click={() => p($PC1)} on:mouseover={e => over(e, $PC1)}>
	<span>{char}</span>
</button>

<style lang="scss">
	@use "$lib/style/_mixin" as *;
	.Pixel {
		appearance: none;
		border: none;
		--canvas-size: 16px;
		display: block;
		padding: 0;
		// width: var(--canvas-size);
		// height: var(--canvas-size);
		overflow: hidden;
		@include media(sm) {
			--canvas-size: 24px;
		}
		@include media(md) {
			--canvas-size: 32px;
		}
	}
	span {
		font-size: calc(var(--canvas-size) - 2px);
		line-height: 1;
		font-family: "Noto Sans JP Variable", sans-serif;
	}
</style>
