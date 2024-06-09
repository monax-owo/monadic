<script lang="ts">
	import Todo from "$lib/component/dev/Todo.svelte";
	let url: string;
</script>

<div>
	<Todo></Todo>
	<input type="url" bind:value={url} />
	<button type="button" on:click={() => (window.location.href = url)}> HREF! </button>
	<button type="button" on:click={() => window.open(url)}> JUMP! </button>
</div>
