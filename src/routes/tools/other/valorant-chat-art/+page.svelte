<script lang="ts">
	import Todo from "$lib/component/dev/Todo.svelte";
	import Canvas from "./Canvas.svelte";
	import { paintChar1, paintChar2 } from "./store";
	const col = 5;
	const row = 26;
	let canvasSize: string;
	let paintCode: Array<string> = ["█"];
</script>

<div class="page">
	<Todo>
		<p>@include, routes/+page.svelte</p>
		<p>{paintChar1}</p>
	</Todo>
	<input type="text" bind:value={canvasSize} />
	<div class="paint" style:--canvas-size="{canvasSize}px">
		<div class="flex flex-col">
			{#each Array(col) as _, colIndex}
				<div class="flex flex-row">
					{#each Array(row) as _, rowIndex}
						<Canvas></Canvas>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.paint {
		div {
			gap: 2px;
		}
	}
</style>
