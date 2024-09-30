<script lang="ts">
  import { Template } from "$lib/autoimport";
  import { Pages } from "$lib/route/page_manager";
  Pages.add("a", "test pages", "any");
</script>

<Template>
  <div>
    {JSON.stringify(Pages.value, null, 2)}
  </div>
</Template>

<style lang="scss">
</style>
