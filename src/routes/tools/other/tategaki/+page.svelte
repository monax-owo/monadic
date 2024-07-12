<script lang="ts">
  import { Template, Todo } from "$lib/autoimport";
  let text: string = "";
  let tempArray: string[];
  let splitArray: string[][] = [[]];
  let resultArray: string[][];
  let result: string;
  const width: number = 20;
  /**
   * 引数arrayを分割し2次元配列にする関数
   * 文字が"\n"かインデックスがwidthを超えたら次の配列に移る
   * @param array
   *
   */
  // const split = (array: string[]): string[][] => {
  //   let temp: string[][] = [[]];
  //   array.forEach((v, i) => {
  //     if (v === "\n") {
  //       temp.push([]);
  //     } else {
  //       temp[temp.length - 1].push(v);
  //     }
  //   });
  //   return temp;
  // };
  const split = (array: string[]): string[][] => {
    return array.reduce<string[][]>(
      (acc, v) => {
        v === "\n" ? acc.push([]) : acc[acc.length - 1].push(v);
        return acc;
      },
      [[]]
    );
  };
  const maxLen = <T,>(array: T[][]): number => {
    return array.reduce((acc, v) => {
      return Math.max(acc, v.length);
    }, 0);
  };
  const fill = (array: string[][]): string[][] => {
    let len = array.reduce((acc, v) => {
      return Math.max(acc, v.length);
    }, 0);
    let temp = array.reduce((acc: string[][], v) => {
      acc.push([...v, ...Array(v.length >= len ? 0 : len - v.length).fill("")]);
      return acc;
    }, []);
    return temp;
  };
  $: tempArray = Array.from(text);
  $: splitArray = split(tempArray);
  // $: resultArray = rotate(splitArray);
  // TODO:配列の長さを揃えないでも使えるrotate関数を作る
  // もしくはsplitArrayの配列の長さを揃える関数を作る
  // const rotate = (array: string[][]) => array[0].map((v, i) => array.map(v2 => v2[i]).reverse());
  //
</script>

<Template>
  <Todo>
    <p>text = textarea</p>
    <p>tempArray:string[] = textを1文字ずつ分割した配列</p>
    <p>splitArray: string[][] = tempArrayを</p>
  </Todo>
  <textarea bind:value={text} />
  <!-- <code>{text}</code> -->
  <div>
    <code>{JSON.stringify(tempArray)}</code>
    <code>{JSON.stringify(splitArray)}</code>
    <code>{JSON.stringify(resultArray)}</code>
    <code>{result}</code>
    <code>{JSON.stringify(fill(splitArray))}</code>
    <code>{JSON.stringify(maxLen(splitArray))}</code>
  </div>
</Template>

<style lang="scss">
  textarea {
    display: block;
    width: 100%;
    min-height: 8rem;
    resize: vertical;
  }
  code,
  pre {
    display: block;
    // border: 1px solid white;
    // padding: 12px;
    // font-size: 1.2em;
    // line-height: 1.2em;
    margin: 12px 0;
    font-family: "Noto Sans JP Variable", sans-serif;
  }
</style>
