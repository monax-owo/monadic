<script lang="ts">
	import { afterUpdate } from "svelte";
	let cssVariable: Element;
	let [color1, color2]: string[] = ["#000", "#fff"];
	let [p1, p2]: number[] = [20, 80];
	const colorType = ["srgb", "srgb-linear", "lab", "oklab", "xyz", "xyz-d50", "xyz-d65"] as const;
	type RectangularColorSpace = (typeof colorType)[number];
	let selectedColorType: number = 0;
	let currentColorType: RectangularColorSpace;
	$: currentColorType = colorType[selectedColorType];
	$: mix = `color-mix(${currentColorType},${color1} ${p1}%,${color2} ${p2}%)`;
	let resuluMix: string;
	afterUpdate(() => {
		resuluMix = window.getComputedStyle(cssVariable).getPropertyValue("background-color");
	});
</script>

<div class="page">
	<div class="view" bind:this={cssVariable} style:--mix={mix}></div>
	<div class="container">
		<div class="color-type">
			<select bind:value={selectedColorType}>
				{#each colorType as type, i}
					<option value={i}>{type}</option>
				{/each}
			</select>
		</div>
		<div class="prop">
			<input type="color" bind:value={color1} />
			<input type="text" bind:value={color1} />
			<div class="">
				<input type="range" min="0" max="100" step="1" bind:value={p1} />
				<input type="number" bind:value={p1} />
			</div>
		</div>
		<div class="prop">
			<input type="color" bind:value={color2} />
			<input type="text" bind:value={color2} />
			<div class="">
				<input type="range" min="0" max="100" step="1" bind:value={p2} />
				<input type="number" bind:value={p2} />
			</div>
		</div>
	</div>
	<code>{mix}</code>
	<span>↓</span>
	<code>{resuluMix}</code>
</div>

<style lang="scss">
	.page {
		display: flex;
		flex-direction: column;
	}
	.view {
		background-color: var(--mix);
		aspect-ratio: 4/3;
	}
	.container {
		display: flex;
		flex-wrap: wrap;
		& input {
			display: inline-flex;
		}
	}
	.color-type {

	}

	.prop {
		margin: 24px;
	}
	input[type="number"] {
		width: 48px;
	}
</style>
