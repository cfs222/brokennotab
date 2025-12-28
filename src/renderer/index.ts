/* IMPORT */

// Load jQuery stub BEFORE anything else
import "./template/dist/javascript/notable.min.js";
import "./template/dist/css/notable.min.css";

import debugging from "./debugging";
import render from "./render";

/* RENDERER */

debugging();
render();

/* HOT MODULE REPLACEMENT */

declare const module: { hot?: any };

if (module.hot) {
  module.hot.accept("./render", () => {
    require("./render").default();
  });
}
