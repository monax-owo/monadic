<script lang="ts">
	import { onMount } from "svelte";
	import { PC1, PC2, defaulPixelChar } from "./store";
	export let indexY: number;
	export let indexX: number;
	if (!indexY || !indexX) throw new Error("index is not defined");
	let char: string = $defaulPixelChar;
	if (char === "" || !char) throw new Error("char is not defined");
	let draw: boolean;
	const p = (PC: string) => (char = PC);
	const over = (e: MouseEvent, PC: string) => {
		if (draw) {
		}
	};
	onMount(() => {
		console.log("mount");
	});
</script>

<div class="Pixel">
	<button id={`${indexY}[${indexX}]`} type="button" on:click on:click={() => p($PC1)}>
		<!-- on:mouseover={e => over(e, $PC1)} -->
		<svg viewBox="0 0 100 100" fill="black" text-anchor="middle" dominant-baseline="text-bottom">
			<text x="50" y="85" font-size="90">{char}</text>
		</svg>
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
			background-color: transparent;
			padding: 0;
			padding-bottom: 100%;
			width: 100%;
			overflow: hidden;
			user-select: none;
		}
	}
	svg {
		// display: inline-block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		font-family: "Noto Sans JP Variable", sans-serif;
		& text {
			fill: black;
		}
	}
</style>
