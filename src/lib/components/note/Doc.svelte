<script lang="ts">
  import { logger } from "$lib/util/logger";
  export let href: string;
  if (href === "" || !href) logger.error("href is not defined");
  if (!$$slots.default) console.warn("Doc.svelte slot is empty");
  // onMount(() => {});
</script>

<div class="Doc">
  <a {href} target="_blank" rel="noopener noreferrer">
    <slot></slot>
  </a>
</div>

<style lang="scss">
  //
</style>
