import path from "node:path";
import themeHoverkraft from "../index";

describe("themeHoverkraft plugin", () => {
  it("exposes the base theme metadata", () => {
    const plugin = themeHoverkraft({} as never, {} as never);

    expect(plugin.name).toBe("@hoverkraft/docusaurus-theme");
    expect(plugin.getThemePath).toBeDefined();
    const themePath = plugin.getThemePath?.();
    expect(themePath).toBeTruthy();

    if (!themePath) {
      throw new Error("themePath is undefined");
    }

    expect(path.isAbsolute(themePath)).toBe(true);
    expect(themePath.endsWith("theme")).toBe(true);

    expect(plugin.getTypeScriptThemePath).toBeDefined();

    const tsThemePath = plugin.getTypeScriptThemePath?.();
    expect(tsThemePath).toBeTruthy();

    if (!tsThemePath) {
      throw new Error("tsThemePath is undefined");
    }
    expect(path.isAbsolute(tsThemePath)).toBe(true);
    expect(tsThemePath.split(path.sep).slice(-2).join(path.sep)).toBe(path.join("src", "theme"));
  });

  it("returns the built-in translation strings", () => {
    const plugin = themeHoverkraft({} as never, {} as never);

    expect(plugin.getDefaultCodeTranslationMessages).toBeDefined();
    const messages = plugin.getDefaultCodeTranslationMessages?.();
    expect(messages).toMatchInlineSnapshot(`
      {
        "theme.NotFound.p1": "We could not find what you were looking for.",
        "theme.NotFound.p2": "Please contact the owner of the site that linked you to the original URL and let them know their link is broken.",
        "theme.NotFound.title": "Page Not Found",
      }
    `);
  });
});
