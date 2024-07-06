<script lang="ts">
  import { copy } from "$lib/component/dev/clipboard";
  import Todo from "$lib/component/dev/Todo.svelte";
  import Doc from "$lib/component/dev/Doc.svelte";
  import Template from "$lib/component/Template.svelte";
  import Canvas from "./Canvas.svelte";
  import { PC1, PC2, paintCode, canvasArray, canvasString } from "./store";

  let canvasSize: string = "0";
  let val1: number = 0;
  let val2: number = 0;
  paintCode.set(["█", "░", "あ", "A", "a", "亜", "ア"]);
  $: PC1.set($paintCode[val1]);
  const canvasArrayToString = (canvas: Array<Array<string>>): string => {
    let temp: string[] = [""];
    canvas.forEach(row => {
      temp.push(row.join(""));
    });
    return temp.join("\n");
  };
  $: canvasString.set(canvasArrayToString($canvasArray));
</script>

<Template>
  <Todo>
    <p>左クリック長押しで書けるようにする</p>
    <p>文字の種類を追加する</p>
    <p>文字を選びやすくする</p>
    <Doc
      href="https://tobiasahlin.com/blog/common-flexbox-patterns/#3x3-grid-constrained-proportions-11"
    ></Doc>
  </Todo>
  <div class="icon"> </div>
  <code>{JSON.stringify($paintCode)}</code>
  <input type="number" bind:value={val1} min="0" max={$paintCode.length - 1} />
  <input type="number" bind:value={val2} min="0" max={$paintCode.length - 1} />
  <input type="text" bind:value={canvasSize} />
  <div class="paint" style:--canvas-size="{canvasSize}px">
    <Canvas></Canvas>
  </div>

  <code>↓</code>
  <pre>{$canvasString}</pre>
  <button type="button" on:click={() => copy($canvasString)}>COPY</button>
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
