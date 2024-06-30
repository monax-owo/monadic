<script lang="ts">
	import Pixel from "./Pixel.svelte";
	import { CanvasArrayGen, PC1, canvasArray } from "./store";
	const col = 5;
	const row = 8;
	canvasArray.set(CanvasArrayGen(col, row, ""));
	let draw: boolean = false;
	const keydown = () => (draw = true);
	const keyup = () => (draw = false);
</script>

<svelte:window on:keydown={() => keydown()} on:keyup={() => keyup} />

<div class="Canvas" style:--col={col} style:--row={row}>
	{#each Array(col) as _, colIndex}
		<div class="row">
			{#each Array(row) as _, rowIndex}
				<Pixel
					id={`${colIndex}[${rowIndex}]`}
					on:click={() => {
						$canvasArray[colIndex][rowIndex] = $PC1;
					}}></Pixel>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.Canvas {
		--gap: 0.03%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
	}
	.row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: calc(calc(100% * var(--col)) - calc(var(--gap) * calc(var(--col) - 1)));
	}
	.row :global(.Pixel) {
		margin-bottom: calc(var(--gap) * calc(var(--row) - 1));
		width: calc(calc(100% / var(--row)) - calc(var(--gap) * calc(var(--row) - 1)));
	}
</style>
