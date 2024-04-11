<script lang="ts">
	import { routes } from "$lib/routes";
</script>

<div class="flex flex-col">
	{#each routes as route}
		<a href={route.link}>{route.title}</a>
	{/each}
</div>

<button
	on:click={() => {
		console.log(routes);
	}}>1</button
>
