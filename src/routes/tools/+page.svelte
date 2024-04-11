<script lang="ts">
	import { toolsRoutes } from "$lib/routes";
</script>

<div class="flex flex-col">
	{#each toolsRoutes as route}
		<a href={route.link}>{route.title}</a>
	{/each}
</div>
