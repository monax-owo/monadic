<script lang="ts">
	import Todo from "$lib/component/dev/Todo.svelte";
	// const hexReg = new RegExp("a");
	let value: string = "#000";
	let hex: number = 0x000;
	// $: hex = value;
</script>

<div class="page">
	<Todo></Todo>
	<div style:background-color={value}>color: {value}</div>
	<div>hex: {hex}</div>
	<input type="color" bind:value />
</div>
