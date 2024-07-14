<script lang="ts">
  import InputNumber from "$components/input/InputNumber.svelte";
  import { Template, Warn } from "$lib/autoimport";
  import { clickCopy } from "$lib/util/clipboard";
  import { isDev } from "$lib/util/dev";

  type Matrix<T> = T[][];
  type Ms = Matrix<string>;

  let text: string = "";
  let tempArray: string[];
  let splitArray: Ms;
  let fillArray: Ms;
  let offsetArray: Ms;
  let result: string;

  const width: number = 20;
  const ROW_JOINT_CHAR = "　";
  let offsetSize = 2;
  const split = (array: string[]): Ms => {
    return array.reduce(
      (acc: Ms, v) => {
        v === "\n" ? acc.push([]) : acc[acc.length - 1].push(v);
        return acc;
      },
      [[]]
    );
  };

  const longestLength = <T,>(array: Matrix<T>): number => {
    return array.reduce((acc, v) => {
      return Math.max(acc, v.length);
    }, 0);
  };

  const fill = (array: Ms): Ms => {
    const len = longestLength(array);
    return array.reduce((acc: Ms, v) => {
      acc.push([...v, ...Array(v.length >= len ? 0 : len - v.length).fill("")]);
      return acc;
    }, []);
  };

  const offset = (array: Ms, offsetSize: number = 0): Ms => {
    // return array.push(Array(offsetSize).fill(""));
    return [...array, ...Array(offsetSize).fill("")];
  };

  const rotate = (array: Ms): Ms => {
    return array[0].map((v, i) => array.map((v2) => v2[i]).reverse());
  };

  const replaceWhiteSpace = (array: Ms) => {
    return array.reduce((acc: Ms, arr2) => {
      acc.push(
        arr2.reduce((acc: string[], v) => {
          acc.push(v === "" ? "　" : v);
          return acc;
        }, [])
      );
      return acc;
    }, []);
  };

  const matrixStringToArray = (array: Ms) => {
    return replaceWhiteSpace(array).reduce((acc: string[], v) => {
      acc.push(v.join(ROW_JOINT_CHAR));
      return acc;
    }, []);
  };

  const res = (array: Ms) => {
    return matrixStringToArray(array).join("\n");
  };

  $: tempArray = Array.from(text);
  $: splitArray = split(tempArray);
  $: fillArray = fill(splitArray);
  $: offsetArray = offset(fillArray, offsetSize);
  $: rotateArray = rotate(offsetArray);
  $: result = res(rotateArray);
</script>

<Template>
  <Warn>
    <p>半角英数字を対応させる</p>
  </Warn>
  <textarea bind:value={text} />
  <!-- <input type="number" bind:value={offsetSize} min="0" max="10" /> -->
  <span>
    offset :<InputNumber min="0" max="10" bind:value={offsetSize}></InputNumber>
  </span>
  <details class="data" open={isDev}>
    <pre>temp   : {JSON.stringify(tempArray)}</pre>
    <pre>split  : {JSON.stringify(splitArray)}</pre>
    <pre>fill   : {JSON.stringify(fillArray)}</pre>
    <pre>offset : {JSON.stringify(offsetArray)}</pre>
    <pre>rotate : {JSON.stringify(rotateArray)}</pre>
    <pre>Length : {JSON.stringify(longestLength(splitArray))}</pre>
  </details>
  <pre class="result">{result}</pre>
  <button type="button" use:clickCopy={result}>COPY</button>
</Template>

<style lang="scss">
  textarea {
    display: block;
    width: 100%;
    min-height: 8rem;
    resize: vertical;
  }
  .data pre {
    display: block;
    margin: 12px 0;
    font-family: "Fira Code Variable", monospace;
  }
  .result {
    display: block;
    border: 1px solid white;
    padding: 12px;
    font-size: 1.2em;
    line-height: 1.2em;
    font-family: "Noto Sans JP Variable", sans-serif;
  }
</style>
