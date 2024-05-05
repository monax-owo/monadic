<script lang="ts">
import { base } from "$app/paths"
import { allRoutes } from "$lib/route/routes"
</script>

<div>工事中です</div>
<a href="{base}/tools">Tools</a>
<div class="flex flex-col">
	{#each allRoutes as route}
		<a href={route.link}>{route.title}</a>
	{/each}
</div>
