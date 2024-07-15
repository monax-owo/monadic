<script lang="ts">
  import { isDev } from "$lib/util/dev";
  export let size: number = 128;
  export let opacity: number = 0.8;
  export let strokeWidth: number = 1;
  export let stroke: string = "#000000";
  export let fill: string = "#ffffff";
  const r = (x: number) => v - x;
  const V: number = 4;
  const N: number = 2;
  const M: number = 0;
  const [v, n, m] = [V, N, M].map((val) => val * 32);
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
  <div class="IsDev" style:--opacity={opacity}>
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox={`0 0 ${v} ${v}`}
      xmlns="http://www.w3.org/2000/svg"
      {stroke}
      {fill}
      stroke-width={strokeWidth}>
      <polyline points={a.join(" ")} />
      <text
        x="0"
        y="20"
        transform={`rotate(45 ${r(v)},${v})`}
        fill="black"
        text-anchor="middle"><slot></slot></text>
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
    opacity: var(--opacity);
    pointer-events: none;
  }
</style>
