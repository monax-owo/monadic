import { writable } from "svelte/store";
const canvasArrayGen = <T>(y: number, x: number, item: T): T[][] => {
  if (item === "" || !item) throw new Error("item is nullish or empty");
  return [...Array(y)].map(() => Array(x).fill(item));
};
const PCMain = writable<string>(undefined);
const PC1 = writable<string>(undefined);
const PC2 = writable<string>(undefined);
const paintCode = writable<string[]>([""]);
const defaulPixelChar = writable<string>(undefined);
const canvasArray = writable<Array<Array<string>>>([]);
const canvasString = writable<string>(undefined);
export { canvasArrayGen, PCMain, PC1, PC2, paintCode, defaulPixelChar, canvasArray, canvasString };
