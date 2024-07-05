<script lang="ts">
  import { base } from "$app/paths";
  import RouteLinker from "$lib/component/RouteLinker.svelte";
  import Template from "$lib/component/Template.svelte";
  import { routeObjToRoutes } from "$lib/route/routes";
  import Task from "$routes/Task.svelte";
  const Routes = routeObjToRoutes(
    {
      "/ogp": "OGP",
    },
    `${base}/api`
  );
</script>

<Template>
  <Task></Task>
  <RouteLinker routes={Routes}></RouteLinker>
</Template>
