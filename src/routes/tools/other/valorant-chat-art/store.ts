import { writable } from "svelte/store";
const CanvasArrayGen = <T>(x: number, y: number, item: T): T[][] => {
	return [...Array(x)].map(_ => Array(y).fill(item));
};
const PCMain = writable<string>(undefined);
const PC1 = writable<string>(undefined);
const PC2 = writable<string>(undefined);
const paintCode = writable<string[]>([""]);
const canvasArray = writable<string[][]>(undefined);
export { CanvasArrayGen, PCMain, PC1, PC2, paintCode, canvasArray };
