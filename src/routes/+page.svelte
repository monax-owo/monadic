<script lang="ts">
	import { base } from "$app/paths";
	import { routeObjToRoutes } from "$lib/route/routes";
	import RouteLinker from "$lib/component/RouteLinker.svelte";
	import Portfolio from "$lib/component/Portfolio.svelte";
	import Todo from "$lib/component/dev/Todo.svelte";
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

<Todo></Todo>
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
