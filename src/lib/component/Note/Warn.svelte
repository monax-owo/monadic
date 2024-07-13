<script lang="ts">
  import { page } from "$app/stores";
  import { isDev } from "$lib/util/dev";
  import Comment from "$lib/component/note/Comment.svelte";
  if (!isDev) {
    console.log(`Warn.svelte here: ${$page.route.id}`);
  }
</script>

<div class="Warn">
  <div class="attention">
    <p>🚧under construction🚧</p>
  </div>
  <Comment>
    <slot></slot>
  </Comment>
</div>

<style lang="scss">
  .Warn {
    margin: 12px 0;
    border-radius: var(--component-b-radius);
    background-color:darkorange;
    // background-color:;
    padding: 12px 24px;
    color: var(--bg);
  }
  .attention {
    text-align: center;
  }
</style>
