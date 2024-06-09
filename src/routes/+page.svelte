<script lang="ts">
	import { base } from "$app/paths";
	import { routeObjToRoutes } from "$lib/route/routes";
	import Linker from "$lib/component/Linker.svelte";
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
<Linker routes={Routes}></Linker>
