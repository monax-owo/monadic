<script lang="ts">
	import { base } from "$app/paths";
	import Linker from "$lib/component/Linker.svelte";
	import { routeObjToRoutes } from "$lib/route/routes";

	//
	const Routes = routeObjToRoutes(
		{
			"/pixel": "Pixel Art CSS",
		},
		`${base}/style`
	);
</script>

<Linker routes={Routes}></Linker>
