<script lang="ts">
  //
</script>

<div class="Code">
  <code><slot></slot></code>
</div>

<style lang="scss">
  .Code {
    border-width: 1px;
    border-color: var(--text);
    border-radius: var(--b-radius);
    background-color: var(--2-bg);
    padding: 16px;
  }
  code {
    font-family: "Fira Code Variable", monospace;
    tab-size: 2;
  }
</style>
