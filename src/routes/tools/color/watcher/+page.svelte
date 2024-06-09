<script lang="ts">
	import Todo from "$lib/component/dev/Todo.svelte";
	// const hexReg = new RegExp("a");
	let value = "";
	// let hex: string;
</script>

<div class="watcher">
	<Todo></Todo>
	<div style:background-color={value}>color: {value}</div>
	<!-- <div>hex: {hex}</div> -->
	<input type="color" bind:value />
</div>
