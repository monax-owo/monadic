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
  const split = (array: string[]): string[][] =>
    array.reduce<string[][]>(
      (acc, v) => {
        v === "\n" ? acc.push([]) : acc[acc.length - 1].push(v);
        return acc;
      },
      [[]]
    );

  $: tempArray = Array.from(text);
  $: splitArray = split(tempArray);
  $: resultArray = rotate(splitArray);
  //
  const rotate = (array: string[][]) => array[0].map((v, i) => array.map(v2 => v2[i]).reverse());
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
    <br /><br />

    <code>{JSON.stringify(splitArray)}</code>

    <br /><br />
    <code>{JSON.stringify(resultArray)}</code>
    <code>{result}</code>
  </div>
</Template>

<style lang="scss">
  textarea {
    display: block;
    width: 100%;
  }
</style>
