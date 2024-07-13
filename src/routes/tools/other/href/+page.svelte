<script lang="ts">
  import Template from "$lib/component/Template.svelte";
  import Warn from "$lib/component/Note/Warn.svelte";
  let url: string;
</script>

<Template>
  <Warn></Warn>
  <input type="url" bind:value={url} />
  <button type="button" on:click={() => (window.location.href = url)}> HREF! </button>
  <button type="button" on:click={() => window.open(url)}> JUMP! </button>
</Template>
