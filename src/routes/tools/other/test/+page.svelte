<script lang="ts">
  import Template from "$lib/component/Template.svelte";
  import IsDev from "$lib/component/dev/IsDev.svelte";
</script>

<Template>
  <div class="page">
    <IsDev></IsDev>
  </div>
</Template>

<style lang="scss">
  .page {
    background: #fff;
    width: 400px;
    height: 400px;
  }
</style>
