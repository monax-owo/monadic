<script lang="ts">
  export let test = "1536px";
</script>

<div class="Template" style:--test={test}>
  <slot><div>no content</div></slot>
</div>

<style lang="scss">
  .Template {
    margin: 16px auto 0;
    padding: 0 64px;
    width: 100%;
    max-width: calc(var(--Header-max-w) - 512px);
    color: var(--text);
  }
</style>
