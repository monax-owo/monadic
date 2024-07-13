<script lang="ts">
  import { page } from "$app/stores";
  import { routeObjToRoutes, type Route } from "$lib/route/routes";
  export let routes: object;
  export let base: string = $page.url.pathname;
  const routeList: Route[] = routeObjToRoutes(routes, base);
</script>

<div class="RouteLinker">
  {#each routeList as route}
    <a href={route.link}>{route.title}</a>
  {/each}
</div>

<style lang="scss">
  .RouteLinker {
    display: flex;
    flex-direction: column;
    a {
      color: var(--text);
      font-size: 1.2rem;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
