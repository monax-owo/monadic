<script lang="ts">
	import { base } from "$app/paths";
	import { routeObjToRoutes } from "$lib/route/routes";

	//
	const allRoutes = routeObjToRoutes(
		{
			"/pixel": "Pixel Art CSS",
		},
		`${base}/style`,
	);
</script>

<div class="flex flex-col">
	{#each allRoutes as route}
		<a href={route.link}>{route.title}</a>
	{/each}
</div>
