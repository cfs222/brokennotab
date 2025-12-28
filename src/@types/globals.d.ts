// In src\@types\globals.d.ts

// Add this interface above the Window interface
interface JQueryStub {
  length: number;
  selector: string;
  on(event: string, handler?: Function): this;
  off(event: string, handler?: Function): this;
  trigger(event: string): this;
  show(): this;
  hide(): this;
  css(property: string, value?: any): this;
  addClass(className: string): this;
  removeClass(className: string): this;
  toggleClass(className: string): this;
  hasClass(className: string): boolean;
  attr(key: string): string | undefined; // FIX: Return string, not wrapper
  attr(key: string, value: any): this;
  removeAttr(key: string): this;
  data(key: string): any;
  find(selector: string): this;
  parent(): this;
  children(): this;
  first(): this;
  not(selector: string): this;
  is(selector: string): boolean;
  each(fn: (index: number, element: any) => void): this;
  ready(fn: () => void): this;
  modal(): this;
  width(): number;
  height(): number;
  text(value?: string): this;
  html(value?: string): this;
  val(value?: any): this;
  widgetize(): this;
  layoutResizable(): this;
  [index: number]: any; // FIX: Allow array access like $input[0]
}

// Update the Window interface
declare global {
  interface Window {
    $: {
      (selector: any): JQueryStub; // FIX: Return the stub interface
      $window: {
        on: (event: string, handler: () => void) => any;
        off: (event: string, handler: () => void) => any;
        trigger: (event: string) => any;
      };
      $document: {
        on: (event: string, handler: () => void) => any;
        off: (event: string, handler: () => void) => any;
        trigger: (event: string) => any;
      };
      fn: any;
      ready: (fn: () => void) => any;
    };
  }
}
