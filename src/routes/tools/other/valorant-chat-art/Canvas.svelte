<script lang="ts">
  import { rectangularArrayGen } from "$lib/util/rectangularArray";
  import Pixel from "./Pixel.svelte";
  import { canvasArray, defaulPixelChar, PC1, draw } from "./store";
  let col = 5;
  let row = 26;
  defaulPixelChar.set("░");
  const upDateCanvas = () =>
    canvasArray.set(rectangularArrayGen(col, row, $defaulPixelChar));
  upDateCanvas();
  const mousedown = () => draw.set(true);
  const mouseup = () => draw.set(false);
</script>

<svelte:window on:mousedown={mousedown} on:mouseup={mouseup} />

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
    border-radius: var(--component-b-radius);
    background-color: var(--text);
    padding: 8px;
    width: 100%;
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
