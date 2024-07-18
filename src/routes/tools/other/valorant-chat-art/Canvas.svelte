<script lang="ts">
  import { rectangularArrayGen } from "$lib/util/rectangularArray";
  import Pixel from "./Pixel.svelte";
  import { canvasArray, defaulPixelChar, mainPC, draw } from "./store";
  let col = 5;
  let row = 26;
  defaulPixelChar.set("░");
  const upDateCanvas = () =>
    canvasArray.set(rectangularArrayGen(col, row, $defaulPixelChar));
  upDateCanvas();
  const d = () => draw.set(true);
  const u = () => draw.set(false);
</script>

<svelte:window
  on:mousedown={d}
  on:mouseup={u}
  on:touchstart={d}
  on:touchcancel={u}
  on:touchend={u} />

<div class="Canvas" style:--col={col} style:--row={row}>
  {#each Array(col) as _, colIndex}
    <div class="row">
      {#each Array(row) as _, rowIndex}
        <Pixel YIndex={colIndex} XIndex={rowIndex}></Pixel>
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  .Canvas {
    --gap: 0.01%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 12px 0;
    background-color: var(--text);
    padding: 2px;
    width: 100%;
    touch-action: pinch-zoom;
    & :global(svg) {
      font-family: "Noto Sans JP Variable", sans-serif;
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: calc(
      calc(100% * var(--col)) - calc(var(--gap) * calc(var(--col) - 1))
    );
  }
  .row :global(.Pixel) {
    margin-bottom: calc(var(--gap) * calc(var(--row) - 1));
    width: calc(
      calc(100% / var(--row)) - calc(var(--gap) * calc(var(--row) - 1))
    );
  }
</style>
