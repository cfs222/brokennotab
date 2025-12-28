// This fixes all the "Module '"overstated"' has no exported member" errors
declare module "overstated" {
  import * as React from "react";

  export class Container<T = any> {
    state: T;
    ctx: any;
    setState<K extends keyof T>(
      state:
        | ((
            prevState: Readonly<T>,
            props: Readonly<any>
          ) => Pick<T, K> | T | null)
        | Pick<T, K>
        | T
        | null,
      callback?: () => void
    ): void;
  }

  export function autosuspend(...args: any[]): any;
  export const debug: any;
  export const HMR: any;
  export const Provider: any;
  export const connect: any;

  export function useStore<C extends Container>(container: new () => C): C;
}
