<script lang="ts">
	import { base } from "$app/paths";
	import { routeObjToRoutes } from "$lib/route/routes";
	const allRoutes = routeObjToRoutes(
		{
			"/style": "Style",
			"/style/pixel": "Pixel Art CSS",
			"/tools": "Mon tools",
			"/tools/color/watcher": "Color Watcher",
			"/tools/other/key-tester": "Key tester",
			"/tools/other/test": "Test",
			"/tools/hidden": "Hidden",
			"/tools/hidden/post": "Post",
		},
		base,
	);
</script>

<svelte:head>
	<title>Monadic</title>
</svelte:head>
<div class="flex flex-col">
	{#each allRoutes as route}
		<a href={route.link}>{route.title}</a>
	{/each}
</div>
