<script lang="ts">
  import { Template } from "$lib/autoimport";
  import { page } from "$app/stores";
  import Code from "$components/Code.svelte";
</script>

<Template>
  <Code>
    {JSON.stringify($page, null, "\t")}
  </Code>
</Template>

<style lang="scss">
</style>
