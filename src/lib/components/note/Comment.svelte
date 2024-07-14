<script lang="ts">
  //
</script>

<div class="Comment">
  <slot></slot>
</div>

<style lang="scss">
  .Comment {
    margin: 0 0;
    // font-family: "Noto Color Emoji", "Noto Sans JP Variable", sans-serif;
    text-align: center;
    :global(> *) {
      margin: 4px 12px;
    }
    :global(> [data-done]) {
      &::before {
        content: "✔";
      }
    }
  }
</style>
