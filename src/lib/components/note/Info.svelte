<script lang="ts">
  import { page } from "$app/stores";
  import { isDev } from "$lib/util/dev";
  import Comment from "$components/note/Comment.svelte";
  if (!isDev) {
    console.log(`Info.svelte here: ${$page.route.id}`);
  }
</script>

<div class="Info">
  <div class="attention">
    <!-- TODO:文字を変える -->
    <p>🚧under construction🚧</p>
  </div>
  <Comment>
    <slot></slot>
  </Comment>
</div>

<style lang="scss">
  .Info {
    margin: 12px 0;
    border-radius: var(--component-b-radius);
    background-color: #00fa9a;
    padding: 12px 24px;
    color: var(--bg);
    // background-color:turquoise;
    // background-color:paleturquoise;
  }
  .attention {
    text-align: center;
  }
</style>
