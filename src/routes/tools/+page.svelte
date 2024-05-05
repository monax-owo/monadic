<script lang="ts">
import { allRoutes } from "$lib/route/routes"
const toolsRoutes = allRoutes
</script>

<div class="flex flex-col">
	{#each toolsRoutes as route}
		<a href={route.link}>{route.title}</a>
	{/each}
</div>
