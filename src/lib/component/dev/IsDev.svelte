<script lang="ts">
  import { isDev } from "$lib/util/dev";
  export let size: number = 128;
  export let strokeWidth: number = 1;
  const r = (x: number) => v - x;
  const v: number = 64;
  const n: number = 32;
  const m: number = 0;
  try {
  } catch (e) {
    logger;
  }
  // x,y
  // prettier-ignore
  const a = [
    m, r(v),
    v, r(m),
    v, r(n),
    n, r(v),
    m, r(v),
  ];
</script>

<!-- svgの方が良いと思う。 -->
{#if isDev}
  <div class="IsDev" style:--size={size}>
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox={`0 0 ${v} ${v}`}
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ff8080"
      fill="#ff8080"
      stroke-width={strokeWidth}>
      <polyline points={a.join(" ")}></polyline>
    </svg>
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
  }
</style>
