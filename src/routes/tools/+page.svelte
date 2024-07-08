<script lang="ts">
  import { base } from "$app/paths";
  import RouteLinker from "$lib/component/RouteLinker.svelte";
  import Template from "$lib/component/Template.svelte";
  import Todo from "$lib/component/dev/Todo.svelte";
  const Routes = {
    "/color/mix": "Color Mix",
    "/color/watcher": "Color Watcher",
    "/other/event-listener": "Event Listener",
    "/other/href": "Url Jumper",
    "/other/key-tester": "Key Tester",
    "/other/valorant-chat-art": "Valorant Chat Art",
    "/hidden/post": "Post",
  };
</script>

<Template>
  <Todo></Todo>
  <RouteLinker routes={Routes} base={`${base}/tools`}></RouteLinker>
</Template>
