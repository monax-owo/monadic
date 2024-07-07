<script lang="ts">
  import { isDev } from "$lib/util/dev";
</script>
<!-- svgの方が良いと思う。 -->
{#if isDev}
  <div class="IsDev">
    <span>|</span>
  </div>
{/if}

<style lang="scss">
  :global(*:has(.IsDev)) {
    position: relative;
  }
  .IsDev {
    position: absolute;
    top: 0;
    right: 0;
    flex-wrap: wrap;
    align-content: center;
    width: 100px;
    height: 100px;
    // overflow: hidden;
    span {
      display: block;
      position: absolute;
      top: 24px;
      right: -24px;
      transform: rotate(45deg);
      background-color: var(--highlight-bg);
      padding: 0;
      width: 128px;
      height: 24px;
      text-align: center;
    }
  }
</style>
