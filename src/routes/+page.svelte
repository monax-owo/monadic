<script lang="ts">
  import { base } from "$app/paths";
  import Portfolio from "$lib/component/Portfolio.svelte";
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
  <Portfolio>
    <svelte:fragment slot="icon">
      <img src="{base}/icon_512.png" alt="icon" />
    </svelte:fragment>
    <svelte:fragment slot="name">
      <span>monax-owo</span>
    </svelte:fragment>
    <svelte:fragment slot="profile">
      <div class="">てすと</div>
    </svelte:fragment>
  </Portfolio>
  <RouteLinker routes={Routes}></RouteLinker>
</Template>
