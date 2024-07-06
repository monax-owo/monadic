<script lang="ts">
  import { base } from "$app/paths";
  import RouteLinker from "$lib/component/RouteLinker.svelte";
  import Template from "$lib/component/Template.svelte";
  import Todo from "$lib/component/dev/Todo.svelte";
  import { routeObjToRoutes } from "$lib/route/routes";
  const Routes = routeObjToRoutes(
    {
      "/color/mix": "Color Mix",
      "/color/watcher": "Color Watcher",
      "/other/event-listener": "Event Listener",
      "/other/href": "Url Jumper",
      "/other/key-tester": "Key Tester",
      "/other/test": "Test",
      "/other/valorant-chat-art": "Valorant Chat Art",
      "/hidden/post": "Post",
    },
    `${base}/tools`
  );
</script>

<Template>
  <Todo></Todo>
  <RouteLinker routes={Routes}></RouteLinker>
</Template>
