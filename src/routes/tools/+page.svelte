<script lang="ts">
	import { routeObjToRoutes } from "$lib/route/routes";
	import RouteLinker from "$lib/component/RouteLinker.svelte";
	import Todo from "$lib/component/dev/Todo.svelte";
	import { base } from "$app/paths";
	const Routes = routeObjToRoutes(
		{
			"/color/mix": "Color Mix",
			"/color/watcher": "Color Watcher",
			"/other/href": "Url Jumper",
			"/other/key-tester": "Key Tester",
			"/other/test": "Test",
			"/other/valorant-chat-art": "Valorant Chat Art",
			"/hidden/post": "Post",
		},
		`${base}/tools`
	);
</script>

<Todo></Todo>
<RouteLinker routes={Routes}></RouteLinker>
