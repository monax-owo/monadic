<script lang="ts">
  //
</script>

<div class="Header">
  <header class="header">
    <div class="header-content shadow-1">
      <slot name="logo">LOGO HERE</slot>
      <slot></slot>
      <slot name="link">SNS LINK HERE</slot>
    </div>
  </header>
</div>

<style lang="scss">
  .header {
    padding: 0 36px;
    width: 100%;
  }
  .header-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 16px auto;
    border: 0 solid transparent;
    border-radius: var(--Header-radius);
    background: var(--bg);
    padding: 0 16px;
    max-width: var(--Header-max-w);
    height: var(--Header-h);
    & :global() {
      gap: 16px;
    }
    :global(> [slot="logo"]) {
      display: flex;
      align-items: center;
      padding: 6px 12px;
      font-weight: 700;
      font-size: 1.125rem;
      text-decoration: none;
    }
  }
</style>
