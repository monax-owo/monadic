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

<Portfolio>
	<svelte:fragment slot="icon">
		<img src="/icon_512.png" alt="icon" />
	</svelte:fragment>
	<svelte:fragment slot="name">
		<span>monax-owo</span>
	</svelte:fragment>
	<svelte:fragment slot="profile">
		<div class="">てすと</div>
	</svelte:fragment>
</Portfolio>
<div></div>
<RouteLinker routes={Routes}></RouteLinker>
