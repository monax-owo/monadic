<script lang="ts">
	import Todo from "$lib/component/dev/Todo.svelte";
	let paintCode: Array<string> = ["█"];
	let nowPaintChar: string = "";
</script>

<div>
	<Todo></Todo>
	<div class="canvas">
		{#each Array(7) as _, i}
			<div></div>
		{/each}
	</div>
</div>

<style lang="scss">
	.canvas {
		//
	}
</style>
