<script lang="ts">
  import { Template } from "$lib/autoimport";
  import { Pages } from "$lib/route/page_manager";
  import { page } from "$app/stores";
  Pages.add("a", "test pages", "any");
</script>

<Template>
  <div>
    {JSON.stringify(Pages.value, undefined, 2)}
  </div>
</Template>

<style lang="scss">
</style>
