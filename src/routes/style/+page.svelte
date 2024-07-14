<script lang="ts">
  import { base } from "$app/paths";
  import RouteLinker from "$component/RouteLinker.svelte";
  import Template from "$component/Template.svelte";
  const Routes = {
    "/pixel": "Pixel Art CSS",
    "/retro": "Retro CSS",
  };
</script>

<Template>
  <RouteLinker routes={Routes} base={`${base}/style`}></RouteLinker>
</Template>
