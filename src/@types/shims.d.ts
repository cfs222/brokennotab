// src/types/shims.d.ts

// JSON imports
declare module "*.json" {
  const value: any;
  export default value;
}

// basic module shims — treat as any to silence type errors for now
declare module "pify" {
  const pify: any;
  export = pify;
}
declare module "mkdirp" {
  const mkdirp: any;
  export = mkdirp;
}
declare module "filenamify" {
  const filenamify: any;
  export default filenamify;
}
declare module "gray-matter" {
  const matter: any;
  export = matter;
}
declare module "electron-window-state" {
  const windowStateKeeper: any;
  export = windowStateKeeper;
}
declare module "unstated-compose" {
  const compose: any;
  export = compose;
}
declare module "overstated" {
  const overstated: any;
  export default overstated;
}

// webpack/electron injected globals
declare var __non_webpack_require__: any;
declare const __static: string;

// jQuery / Cash project-specific additions
interface JQueryStatic {
  $window?: JQuery<Window>;
  $document?: JQuery<Document>;
  isEditable?: (el?: Element | null) => boolean;
}
declare var $: JQueryStatic;
declare var Cash: any;
