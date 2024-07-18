import { writable } from "svelte/store";
const PCMain = writable<string>(undefined);
const mainPC = writable<string>(undefined);
const altPC = writable<string>(undefined);
const paintCode = writable<string[]>([""]);
const defaulPixelChar = writable<string>(undefined);
const canvasArray = writable<Array<Array<string>>>([]);
const canvasString = writable<string>(undefined);
const draw = writable<boolean>(false);

export {
  PCMain,
  mainPC,
  altPC,
  paintCode,
  defaulPixelChar,
  canvasArray,
  canvasString,
  draw,
};
