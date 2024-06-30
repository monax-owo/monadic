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

<div class="Pixel">
	<button {id} type="button" class="Pixel" on:click on:click={() => p($PC1)} on:mouseover={e => over(e, $PC1)}>
		<span>{char}</span>
	</button>
</div>

<style lang="scss">
	@use "$lib/style/_mixin" as *;
	.Pixel {
		& button {
			display: block;
			position: relative;
			appearance: none;
			border: none;
			padding: 0;
			padding-bottom: 100%;
			width: 100%;
			overflow: hidden;
		}
	}
	span {
		// display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		font-size: 190%;
		line-height: 1;
		font-family: "Noto Sans JP Variable", sans-serif;
	}
</style>
