import { writable } from "svelte/store";
const PCMain = writable<string>(undefined);
const PC1 = writable<string>(undefined);
const PC2 = writable<string>(undefined);
const paintCode = writable<string[]>([""]);
const defaulPixelChar = writable<string>(undefined);
const canvasArray = writable<Array<Array<string>>>([]);
const canvasString = writable<string>(undefined);
const draw = writable<boolean>(false);

export {
  PCMain,
  PC1,
  PC2,
  paintCode,
  defaulPixelChar,
  canvasArray,
  canvasString,
  draw,
};
