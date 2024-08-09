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
  @use "$lib/style/global.scss" as *;
  .header {
    padding: 0 16px; // モバイルのときは 0 16px にする
    width: 100%;
    @include media(md) {
      padding: 0 36px;
    }
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
      font-weight: 700;
      font-size: 1.125rem;
      text-decoration: none;
      & {
        padding: 6px 6px;
        @include media(md) {
          padding: 6px 12px;
        }
      }
    }
  }
</style>
