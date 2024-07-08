<script lang="ts">
  import { logger } from "$lib/util/logger";
  import { PC1, PC2, defaulPixelChar } from "./store";
  export let indexY: number;
  export let indexX: number;
  if (!indexY || !indexX) logger.error("index is not defined");
  let char: string = $defaulPixelChar;
  if (char === "" || !char) logger.error("char is not defined");
  let draw: boolean;
  const p = (PC: string) => (char = PC);
  const over = (PC: string) => {
    if (draw) p(PC);
  };
  onMount(() => {
    console.log("mount");
  });
</script>

<div class="Pixel">
  <button
    id={`${indexY}[${indexX}]`}
    type="button"
    on:focus={() => over($PC1)}
    on:mouseover={() => over($PC1)}
    on:click
    on:click={() => p($PC1)}>
    <svg viewBox="0 0 100 100" fill="black">
      <text x="50" y="-20" font-size="92" text-anchor="middle" dominant-baseline="text-before-edge"
        >{char}</text>
    </svg>
  </button>
</div>

<style lang="scss">
  @use "$lib/style/_mixin" as *;
  .Pixel {
    & button {
      display: block;
      position: relative;
      appearance: none;
      border: none;
      background-color: transparent;
      padding: 0;
      padding-bottom: 100%;
      width: 100%;
      overflow: hidden;
      user-select: none;
      &:hover {
        // background-color: var();
      }
    }
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: "Noto Sans JP Variable", sans-serif;
    & text {
      fill: black;
    }
  }
</style>
