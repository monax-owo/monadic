import { writable } from "svelte/store";
const paintCharMain = writable<string>(undefined);
const paintChar1 = writable<string>(undefined);
const paintChar2 = writable<string>(undefined);
export { paintCharMain, paintChar1, paintChar2 };
