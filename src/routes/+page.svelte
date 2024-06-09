<script lang="ts">
	import { base } from "$app/paths";
	import { routeObjToRoutes } from "$lib/route/routes";
	import Linker from "$lib/component/Linker.svelte";
	const Routes = routeObjToRoutes(
		{
			"/style": "Style",
			"/tools": "Mon tools",
		},
		base,
	);
</script>

<svelte:head>
	<title>Monadic</title>
</svelte:head>

<Linker routes={Routes}></Linker>
