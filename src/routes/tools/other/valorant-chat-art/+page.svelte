<script lang="ts">
	import Todo from "$lib/component/dev/Todo.svelte";
	import Canvas from "./Canvas.svelte";
	import { PC1, PC2, paintCode } from "./store";

	let canvasSize: string = "0";
	let val1: number = 0;
	let val2: number = 0;
	paintCode.set(["█", "1", "あ", "A", "a", "亜", "ア"]);
	$: PC1.set($paintCode[val1]);
</script>

<Todo>
	<p>%指定する</p>
	<a href="https://tobiasahlin.com/blog/common-flexbox-patterns/#3x3-grid-constrained-proportions-11">doc</a>
</Todo>
<input type="number" bind:value={val1} min="0" max={$paintCode.length - 1} />
<input type="number" bind:value={val2} min="0" max={$paintCode.length - 1} />
<input type="text" bind:value={canvasSize} />
<div class="paint" style:--canvas-size="{canvasSize}px">
	<Canvas></Canvas>
</div>
<code>{JSON.stringify($paintCode)}</code>

<style lang="scss">
</style>
