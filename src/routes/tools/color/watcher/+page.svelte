<script lang="ts">
  import Template from "$lib/component/Template.svelte";
  import Warn from "$lib/component/Note/Warn.svelte";
  // const hexReg = new RegExp("a");
  let value: string = "#000";
  let hex: number = 0x000;
  // $: hex = value;
</script>

<Template>
  <div class="page">
    <Warn></Warn>
    <div style:background-color={value}>color: {value}</div>
    <div>hex: {hex}</div>
    <input type="color" bind:value />
  </div>
</Template>
