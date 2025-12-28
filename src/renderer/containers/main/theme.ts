/* IMPORT */

import { Container, autosuspend } from "overstated";
import Settings from "@common/settings";

/* THEME */

class Theme extends Container<ThemeState, MainCTX> {
  /* STATE */

  state = {
    theme: Settings.get("theme"),
  };

  /* CONSTRUCTOR */

  constructor() {
    super();
    autosuspend(this);
  }

  /* HELPERS */

  _updateDocument = (doc: Document, theme: string): void => {
    const $body = $(doc.body);
    const clsAttr = $body.attr("class");

    // DEBUG: Log what we received
    console.log(
      '[THEME] attr("class") returned:',
      clsAttr,
      "Type:",
      typeof clsAttr
    );

    // SAFETY: Only process strings
    if (typeof clsAttr !== "string") {
      console.warn("[THEME] Expected string, got", typeof clsAttr);
      return;
    }

    if (!clsAttr) return;

    $body.attr(
      "class",
      clsAttr.replace(/(^|\s)theme-([^\s"']+)/i, `$1theme-${theme}`)
    );
  };

  /* API */

  isSupported = (theme: string): boolean => {
    const themes = this.ctx.themes.get();
    return themes.includes(theme);
  };

  get = (): string => {
    return this.state.theme;
  };

  set = (theme: string) => {
    if (!this.isSupported(theme)) return;
    if (theme === this.state.theme) return;

    Settings.set("theme", theme);
    this._updateDocument(document, theme);
    return this.setState({ theme });
  };

  update = () => {
    this._updateDocument(document, this.state.theme);
  };
}

/* EXPORT */

export default Theme;
