<script lang="ts">
  import { page } from "$app/stores";
  import { isDev } from "$lib/util/dev";
  import Comment from "$components/note/Comment.svelte";
  if (!isDev) {
    console.log(`Warn.svelte here: ${$page.url.pathname}`);
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
  @use "$lib/global.scss" as *;
  .Warn {
    margin: 12px 0;
    border-radius: var(--component-b-radius);
    background-color: darkorange;
    // background-color:;
    padding: 4px 0;
    color: var(--bg);
    @include media(md) {
      padding: 12px 0;
    }
  }
  .attention {
    text-align: center;
  }
</style>
