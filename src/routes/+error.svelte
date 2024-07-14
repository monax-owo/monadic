<script lang="ts">
  import { page } from "$app/stores";
  import Template from "$components/Template.svelte";
</script>

<Template>
  <h1>{$page.status} : {$page.error?.message}</h1>
  <p>{$page.url.pathname}</p>
</Template>
