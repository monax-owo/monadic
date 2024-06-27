<script lang="ts">
	import Todo from "$lib/component/dev/Todo.svelte";
	import Pixel from "./Pixel.svelte";
	import { PC1, PC2 } from "./store";
	const col = 5;
	const row = 26;
	let canvasSize: string;
	let val1: number;
	let val2: number;
	$: PC1.set(paintCode[val1]);
	let paintCode: string[] = ["█", "2", "+", "a"];
</script>

<Todo></Todo>
<input type="number" bind:value={val1} />
<input type="number" bind:value={val2} />
<input type="text" bind:value={canvasSize} />
<div class="paint" style:--canvas-size="{canvasSize}px">
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
	.paint {
		div {
			gap: 2px;
		}
	}
	.col {
		height: auto;
	}
	.row {
		//
	}
</style>
