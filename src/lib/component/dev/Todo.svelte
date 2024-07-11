<script lang="ts">
  import { page } from "$app/stores";
  import { isDev } from "$lib/util/dev";
  if (!isDev) {
    console.log(`Todo.svelte here: ${$page.route.id}`);
  }
</script>

<div class="Todo">
  <div class="attention">
    <p>🚧under construction🚧</p>
  </div>
  <div class="comment">
    <slot></slot>
  </div>
</div>

<style lang="scss">
  .Todo {
    margin: 12px 0;
    border-radius: var(--component-b-radius);
    background: orange;
    padding: 12px 24px;
    color: var(--bg);
  }
  .attention {
    text-align: center;
  }
  .comment {
    margin: 0 0;
    font-family: "Noto Sans JP Variable", sans-serif;
    text-align: center;
    :global(> *) {
      margin: 4px 12px;
    }
  }
</style>
