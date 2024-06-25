<script lang="ts">
	// eslint no-unused-vars
	import Todo from "$lib/component/dev/Todo.svelte";
	const col = 5;
	const row = 26;
	let canvasSize: string;
	let paintCode: Array<string> = ["█"];
	let nowPaintChar: string = "";
</script>

<div class="page">
	<Todo></Todo>
	<input type="text" bind:value={canvasSize} />
	<div class="paint" style:--canvas-size="{canvasSize}px">
		<div class="flex flex-col">
			{#each Array(col) as _, colIndex}
				<div class="flex flex-row">
					{#each Array(row) as _, rowIndex}
						<div class="{colIndex} canvas">{-rowIndex}</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@use "$lib/global.scss";
	.canvas {
		// --canvas-size: 12px;
		width: var(--canvas-size);
		height: var(--canvas-size);
		@include media(sm) {
			--canvas-size: 12px;
		}
	}
</style>
