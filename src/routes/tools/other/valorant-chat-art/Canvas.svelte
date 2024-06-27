<script lang="ts">
	import Pixel from "./Pixel.svelte";
	const col = 5;
	const row = 26;
	let draw: boolean = false;
	const keydown = () => (draw = true);
	const keyup = () => (draw = false);
</script>

<svelte:window on:keydown={() => keydown()} on:keyup={() => keyup} />

<div class="Canvas">
	<div class="flex flex-col col">
		{#each Array(col) as _, colIndex}
			<div class="flex flex-row row">
				{#each Array(row) as _, rowIndex}
					<Pixel></Pixel>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	div {
		// gap: 2px;
	}

	.col {
		flex-basis: auto;
		display: flex;
		flex-grow: 0;
		flex-shrink: 0;
		flex-direction: column;
		flex-wrap: nowrap;
		gap: 2px;
		height: auto;
	}
	.row {
		display: flex;
		flex-grow: 0;
		flex-shrink: 0;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 2px;
		height: auto;
	}
</style>
