<script lang="ts">
  import { base } from "$app/paths";
  import RouteLinker from "$components/RouteLinker.svelte";
  import { Template, Warn } from "$lib/autoimport";
  const Routes = {
    "/color/mix": "Color Mix",
    "/color/watcher": "Color Watcher",
    "/other/event-listener": "Event Listener",
    "/other/href": "Url Jumper",
    "/other/key-tester": "Key Tester",
    "/other/tategaki": "Tategaki Generator",
    "/other/valorant-chat-art": "Valorant Chat Art",
    "/hidden/post": "Post",
  };
</script>

<Template>
  <Warn></Warn>
  <RouteLinker routes={Routes} base={`${base}/tools`}></RouteLinker>
</Template>
