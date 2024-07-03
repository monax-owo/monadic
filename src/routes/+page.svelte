<script lang="ts">
	import Template from "$lib/component/Template.svelte";
	import { base } from "$app/paths";
	import { routeObjToRoutes } from "$lib/route/routes";
	import RouteLinker from "$lib/component/RouteLinker.svelte";
	import Portfolio from "$lib/component/Portfolio.svelte";
	import Task from "./Task.svelte";
	const Routes = routeObjToRoutes(
		{
			"/style": "Style",
			"/tools": "Mon tools",
		},
		base
	);
	if
</script>

<svelte:head>
	<title>Monadic</title>
</svelte:head>

<Template>
	<Task></Task>
	<Portfolio>
		<svelte:fragment slot="icon">
			<img src="{base}/icon_512.png" alt="icon" />
		</svelte:fragment>
		<svelte:fragment slot="name">
			<span>monax-owo</span>
		</svelte:fragment>
		<svelte:fragment slot="profile">
			<div class="">てすと</div>
		</svelte:fragment>
	</Portfolio>
	<RouteLinker routes={Routes}></RouteLinker>
</Template>
