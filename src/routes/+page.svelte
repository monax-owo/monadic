<script lang="ts">
  import { base } from "$app/paths";
  import RouteLinker from "$lib/component/RouteLinker.svelte";
  import Template from "$lib/component/Template.svelte";
  import { routeObjToRoutes } from "$lib/route/routes";
  import Task from "./Task.svelte";
  const Routes = routeObjToRoutes(
    {
      "/style": "Style",
      "/tools": "Mon tools",
      "/api": "API",
    },
    base
  );
</script>

<svelte:head>
  <title>Monadic</title>
</svelte:head>

<Template>
  <Task></Task>
  <RouteLinker routes={Routes}></RouteLinker>
</Template>
