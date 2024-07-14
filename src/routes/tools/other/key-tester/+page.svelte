<script lang="ts">
  import Template from "$component/Template.svelte";
  let histories: string[] = [];
  function keyTester(event: { key: string }) {
    histories = [event.key, ...histories];
  }
  $: if (histories.length > 10) histories.pop();
</script>

<svelte:window on:keydown={keyTester} />

<Template>
  <div class="page shadow-1">
    {#if histories.length !== 0}
      {#each histories as history}
        <li>{history}</li>
      {/each}
    {:else}
      <div>press key!</div>
    {/if}
  </div>
</Template>

<style lang="scss">
  .page {
    margin: 32px auto;
    border-radius: var(--Header-radius);
    padding: 16px;
    width: 600px;
  }
</style>
