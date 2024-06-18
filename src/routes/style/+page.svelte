<script lang="ts">
	import { base } from "$app/paths";
	import RouteLinker from "$lib/component/RouteLinker.svelte";
	import { routeObjToRoutes } from "$lib/route/routes";

	const Routes = routeObjToRoutes(
		{
			"/pixel": "Pixel Art CSS",
			"/retro": "Retro CSS",
		},
		`${base}/style`
	);
</script>

<RouteLinker routes={Routes}></RouteLinker>
