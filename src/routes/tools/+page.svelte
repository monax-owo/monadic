<script lang="ts">
	import { allRoute } from "$lib/route/routes";
	const toolsRoutes = allRoute;
</script>

<div class="flex flex-col">
	{#each toolsRoutes as route}
		<a href={route.link}>{route.title}</a>
	{/each}
</div>
