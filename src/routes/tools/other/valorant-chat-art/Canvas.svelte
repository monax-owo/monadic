<script lang="ts">
	import Pixel from "./Pixel.svelte";
	const col = 5;
	const row = 26;
	let draw: boolean = false;
	const keydown = () => (draw = true);
	const keyup = () => (draw = false);
</script>

<svelte:window on:keydown={() => keydown()} on:keyup={() => keyup} />

<div class="Canvas" style:--col={col} style:--row={row}>
	{#each Array(col) as _, colIndex}
		<div class="row">
			{#each Array(row) as _, rowIndex}
				<Pixel id={`${colIndex}[${rowIndex}]`}></Pixel>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	@function fn1($axis) {
		@return calc(#{$axis} * calc(var(--size) + var(--gap)) - var(--gap));
	}
	.Canvas {
		--size: 12px;
		--gap: 2px;
		display: flex;
		flex-direction: column;
		align-content: space-between;
		// flex-wrap: nowrap;
		// gap: var(--gap);
		// (row * (size + gap)) - gap
		// ((row * size) + (row * gap) - gap)
		// ((row * size) + ((row - 1) * gap))
		// width: fn1(var(--row));
		width: 100%;
		// (col * (size + gap)) - gap
		height: fn1(var(--col));
	}
	.row {
		display: flex;
		// flex-grow: 0;
		// flex-shrink: 0;
		// flex-basis: auto;
		flex-direction: row;
		justify-content: space-between;
		// flex-wrap: nowrap;
		// gap: var(--gap);
		height: calc(100% / var(--col));

		:global(> button) {
			background: #fff;
			width: 100%;
			height: 100%;
		}
	}
</style>
