<script lang="ts">
  import { page } from "$app/stores";
  import Template from "$lib/component/Template.svelte";
</script>

<Template>
  <h1>{$page.status} : {$page.error?.message}</h1>
  <p>{$page.url.pathname}</p>
</Template>
