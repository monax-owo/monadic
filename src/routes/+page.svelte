<script lang="ts">
  import { base } from "$app/paths";
  import RouteLinker from "$component/RouteLinker.svelte";
  import { Template } from "$lib/autoimport";
  import Task from "./Task.svelte";
  const Routes = {
    "/style": "Style",
    "/tools": "Mon tools",
    "/api": "API",
  };
</script>

<svelte:head>
  <title>Monadic</title>
</svelte:head>

<Template>
  <Task></Task>
  <RouteLinker routes={Routes} {base}></RouteLinker>
</Template>
