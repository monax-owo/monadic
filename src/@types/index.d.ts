import satori, { SatoriOptions } from "satori";
import { ComponentChildren } from "preact";
import { ReactNode } from "react";
declare module "satori" {
  //prettier-ignore
  declare export default function satori(element: ReactNode | ComponentChildren, options: SatoriOptions): Promise<string>;
}
// declare function satori(element: ReactNode, options: SatoriOptions): Promise<string>;
// export {}
// 動いた
// declare export default function satori(element: ReactNode | ComponentChildren, options: SatoriOptions): Promise<string>;
