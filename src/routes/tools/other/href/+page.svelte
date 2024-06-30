<script lang="ts">
	import Template from "$lib/component/Template.svelte";
	import Todo from "$lib/component/dev/Todo.svelte";
	let url: string;
</script>

<Template>
	<Todo></Todo>
	<input type="url" bind:value={url} />
	<button type="button" on:click={() => (window.location.href = url)}> HREF! </button>
	<button type="button" on:click={() => window.open(url)}> JUMP! </button>
</Template>
