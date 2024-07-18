<script lang="ts">
  import Canvas from "./Canvas.svelte";
  import { draw } from "./store";
  import { Template, Warn } from "$lib/autoimport";
  import { clickCopy } from "$lib/util/clipboard";
  import { mainPC, altPC, paintCode, canvasArray, canvasString } from "./store";

  let canvasSize: string = "0";
  let val1: number = 0;
  let val2: number = 0;
  const block_letter: string[] = [2591, 2592].map((v, i) => `\\u${v}`);
  const block_letter2 = ["\u2591", "\u2592"];
  paintCode.set(["█", "░", "あ", "A", "a", "亜", "ア"]);
  $: mainPC.set($paintCode[val1]);
  const matrixToString = (canvas: string[][]): string =>
    canvas.reduce((acc, v) => acc.concat(v.join("")), [""]).join("\n");
  $: canvasString.set(matrixToString($canvasArray));
  //
  const kp = () => {};
</script>

<svelte:window on:keypress={kp} />
<Template>
  <Warn>
    <p>モバイル未対応</p>
    <p>文字の種類を追加する</p>
    <p>文字を選びやすくする</p>
  </Warn>
  <div class="icon"></div>
  <code>{JSON.stringify($paintCode)}</code>
  <input type="number" bind:value={val1} min="0" max={$paintCode.length - 1} />
  <input type="number" bind:value={val2} min="0" max={$paintCode.length - 1} />
  <input type="text" bind:value={canvasSize} />
  <div class="paint" style:--canvas-size="{canvasSize}px">
    <Canvas></Canvas>
  </div>

  <code>↓ painting : {$draw}</code>
  <pre>{$canvasString}</pre>
  <button type="button" use:clickCopy={$canvasString}>COPY</button>
</Template>

<style lang="scss">
  code,
  pre {
    display: block;
    border: 1px solid white;
    padding: 12px;
    font-size: 1.2em;
    line-height: 1.2em;
    font-family: "Noto Sans JP Variable", sans-serif;
  }
</style>
