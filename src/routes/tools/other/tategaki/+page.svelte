<script lang="ts">
  import { Template, Todo } from "$lib/autoimport";
  import { clickCopy } from "$lib/util/clipboard";

  type Matrix<T> = T[][];
  let text: string = "";
  let tempArray: string[];
  let splitArray: Matrix<string>;
  let fillArray: Matrix<string>;
  let result: string;

  const width: number = 20;
  const ROW_JOINT_CHAR = "　";
  const split = (array: string[]): Matrix<string> => {
    return array.reduce(
      (acc: Matrix<string>, v) => {
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

  const fill = (array: Matrix<string>): Matrix<string> => {
    const len = longestLength(array);
    return array.reduce((acc: Matrix<string>, v) => {
      acc.push([...v, ...Array(v.length >= len ? 0 : len - v.length).fill("")]);
      return acc;
    }, []);
  };

  // TODO:配列の長さを揃えないでも使えるrotate関数を作る
  // もしくはsplitArrayの配列の長さを揃える関数を作る
  const rotate = (array: Matrix<string>) => {
    return array[0].map((v, i) => array.map((v2) => v2[i]).reverse());
  };

  const replaceWhiteSpace = (array: Matrix<string>) => {
    return array.reduce((acc: Matrix<string>, arr2) => {
      acc.push(
        arr2.reduce((acc: string[], v) => {
          acc.push(v === "" ? "　" : v);
          return acc;
        }, [])
      );
      return acc;
    }, []);
  };

  const matrixStringToArray = (array: Matrix<string>) => {
    // return replaceWhiteSpace(array);
    return replaceWhiteSpace(array).reduce((acc: string[], v) => {
      acc.push(v.join(ROW_JOINT_CHAR));
      return acc;
    }, []);
  };
  const res = (array: Matrix<string>) => {
    return matrixStringToArray(array).join("\n");
  };

  $: tempArray = Array.from(text);
  $: splitArray = split(tempArray);
  $: fillArray = fill(splitArray);
  $: rotateArray = rotate(fillArray);
  $: result = res(rotateArray);
</script>

<Template>
  <Todo></Todo>
  <textarea bind:value={text} />
  <!-- <code>{text}</code> -->
  <details class="data">
    <pre>temp   : {JSON.stringify(tempArray)}</pre>
    <pre>split  : {JSON.stringify(splitArray)}</pre>
    <pre>fill   : {JSON.stringify(fillArray)}</pre>
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
  // code,
  .data pre {
    display: block;
    // border: 1px solid white;
    // padding: 12px;
    // font-size: 1.2em;
    // line-height: 1.2em;
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
