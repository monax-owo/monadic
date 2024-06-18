<script lang="ts">
	import { base } from "$app/paths";
	import { routeObjToRoutes } from "$lib/route/routes";
	import RouteLinker from "$lib/component/RouteLinker.svelte";
	import Portfolio from "$lib/component/Portfolio.svelte";
	const Routes = routeObjToRoutes(
		{
			"/style": "Style",
			"/tools": "Mon tools",
		},
		base
	);
</script>

<svelte:head>
	<title>Monadic</title>
</svelte:head>
<Portfolio></Portfolio>
<RouteLinker routes={Routes}></RouteLinker>
