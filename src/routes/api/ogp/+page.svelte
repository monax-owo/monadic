<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Template from "$lib/component/Template.svelte";
  const title = "aaa";
</script>

<Template>
  <!-- svelte-ignore a11y-missing-content -->
  <a href={`${base}/api/ogp/${encodeURIComponent(title)}.png`}>{title}</a>
  <!-- <img src={`/${base}/api/ogp/${encodeURIComponent(title)}.png`} alt={title} /> -->
</Template>
