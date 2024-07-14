<script lang="ts">
  import { base } from "$app/paths";
  import Template from "$components/Template.svelte";
  const title = "test title";
</script>

<Template>
  <a href={`${base}/api/ogp/${encodeURIComponent(title)}.png`}>{title}</a>
  <!-- <img src={`/${base}/api/ogp/${encodeURIComponent(title)}.png`} alt={title} /> -->
</Template>
