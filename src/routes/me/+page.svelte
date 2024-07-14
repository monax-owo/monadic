<script lang="ts">
  import Template from "$component/Template.svelte";
  import Portfolio from "$component/Portfolio.svelte";
  import { base } from "$app/paths";
</script>

<Template>
  <Portfolio>
    <svelte:fragment slot="icon">
      <img src="{base}/icon_512.png" alt="icon" />
    </svelte:fragment>
    <svelte:fragment slot="name">
      <span>monax-owo</span>
    </svelte:fragment>
    <svelte:fragment slot="profile">
      <div class="">てすと</div>
    </svelte:fragment>
  </Portfolio>
</Template>
