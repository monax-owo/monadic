<script lang="ts">
	import { routeObjToRoutes } from "$lib/route/routes";
	import Linker from "$lib/component/Linker.svelte";
	import { base } from "$app/paths";
	const Routes = routeObjToRoutes(
		{
			"/color/watcher": "Color Watcher",
			"/other/href": "Url Jumper",
			"/other/key-tester": "Key tester",
			"/other/test": "Test",
			"/other/valorant-chat-art": "Valorant Chat Art",
			"/hidden/post": "Post",
		},
		`${base}/tools`
	);
</script>

<Linker routes={Routes}></Linker>
