<script lang="ts">
  import { base } from "$app/paths";
  import RouteLinker from "$components/RouteLinker.svelte";
  import Template from "$components/Template.svelte";
  const Routes = {
    "/pixel": "Pixel Art CSS",
    "/retro": "Retro CSS",
  };
</script>

<Template>
  <RouteLinker routes={Routes} base={`${base}/style`}></RouteLinker>
</Template>
