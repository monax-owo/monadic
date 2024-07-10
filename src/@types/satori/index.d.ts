import type { SatoriOptions } from "satori";
import type { ComponentChildren } from "preact";
import type { ReactNode } from "react";

// declare function satori(element: ReactNode, options: SatoriOptions): Promise<string>;
declare module "satori" {
  export default function satori(
    element: ReactNode | ComponentChildren,
    options: SatoriOptions
  ): Promise<string>;
}
