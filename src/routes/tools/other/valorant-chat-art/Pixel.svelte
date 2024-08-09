<script lang="ts">
  import { logger } from "$lib/util/logger";
  import { canvasArray, mainPC, altPC, defaulPixelChar, draw } from "./store";
  export let YIndex: number;
  export let XIndex: number;
  if (YIndex == null || XIndex == null) logger.error("index is not defined");
  let char: string = $defaulPixelChar;
  if (char === "" || !char) logger.error("char is not defined");
  $: char = $canvasArray[YIndex][XIndex];
  const paint = () => {
    $canvasArray[YIndex][XIndex] = $mainPC;
  };
  const over = () => {
    if ($draw) paint();
  };
</script>

<div class="Pixel">
  <button
    id={`${YIndex}[${XIndex}]`}
    type="button"
    on:focus={over}
    on:mouseover={over}
    on:click={paint}
    on:touchmove={over}
    on:touchstart={paint}>
    <svg viewBox="0 0 100 100" fill="black">
      <text
        x="50"
        y="-20"
        font-size="92"
        text-anchor="middle"
        dominant-baseline="text-before-edge">{char}</text>
    </svg>
  </button>
</div>

<style lang="scss">
  @use "$lib/style/global.scss" as *;
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
      // &:hover {
      // background-color: var();
      // }
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
