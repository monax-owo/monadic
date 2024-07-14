<script lang="ts">
  import Template from "$lib/component/Template.svelte";
  import Page from "./Page";
  import { h, render as r } from "preact";
  let container: Element;
  onMount(() => {
    r(h(Page, null), container);
  });
</script>

<Template>
  <div bind:this={container}></div>
</Template>
