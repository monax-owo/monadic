<script lang="ts">
  import Button from "$lib/component/Button.svelte";
  import { paste } from "$lib/util/clipboard";
  //
</script>

<div class="InputText">
  <input type="text" />
  <Button on:click={(e) => paste()}>paste</Button>
</div>

<style lang="scss">
  .InputText {
    //
  }
</style>
