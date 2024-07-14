<script lang="ts">
  import { Template } from "$lib/autoimport";
  import { page } from "$app/stores";
</script>

<Template>
  <Code>
    {JSON.stringify($page,null,"\t")}
  </Code>
</Template>

<style lang="scss">
  
</style>