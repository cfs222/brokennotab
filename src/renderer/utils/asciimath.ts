/* IMPORT */

import * as _ from "lodash";
const asciimath2tex: any = require("asciimath2tex");

/* ASCIIMATH */

const AsciiMath = {
  getParser: _.memoize(() => {
    return new asciimath2tex();
  }),

  toTeX(str: string): string {
    const Parser = AsciiMath.getParser();

    return Parser.parse(str);
  },
};

/* EXPORT */

export default AsciiMath;
