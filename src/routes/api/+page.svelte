<script lang="ts">
  import { base } from "$app/paths";
  import RouteLinker from "$components/RouteLinker.svelte";
  import Template from "$components/Template.svelte";
  import Task from "$routes/Task.svelte";
  const Routes = {
    "/ogp": "OGP",
  };
</script>

<Template>
  <Task></Task>
  <RouteLinker routes={Routes} base={`${base}/api`}></RouteLinker>
</Template>
