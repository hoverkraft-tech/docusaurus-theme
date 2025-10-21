import path from "node:path";
import themeClassic from "@docusaurus/theme-classic";
import type { LoadContext } from "@docusaurus/types";
import themeHoverkraft from "../index";

function createLoadContext(): LoadContext {
  return {
    siteDir: __dirname,
    generatedFilesDir: path.join(__dirname, ".docusaurus"),
    siteConfig: {
      baseUrl: "/",
      favicon: "favicon.ico",
      i18n: {
        defaultLocale: "en",
        locales: ["en"],
      },
      plugins: [],
      presets: [],
      themes: [],
      title: "Test Site",
      url: "https://example.com",
      themeConfig: {
        announcementBar: undefined,
        colorMode: {
          defaultMode: "light",
          disableSwitch: false,
          respectPrefersColorScheme: true,
          switchConfig: {},
        },
        prism: {
          additionalLanguages: [],
        },
      },
    } as never,
    siteMetadata: {
      docsVersion: undefined,
    },
    localizationDir: "i18n",
    env: {
      currentLocale: "en",
    },
    markdownProcessor: undefined as never,
    plugins: [],
    siteStorage: new Map(),
    i18n: {
      currentLocale: "en",
      localeConfigs: {
        en: {
          direction: "ltr",
          label: "English",
          calendar: "gregory",
        },
      },
    },
  } as unknown as LoadContext;
}

describe("themeHoverkraft plugin", () => {
  const context = createLoadContext();

  it("extends the classic theme", () => {
    const plugin = themeHoverkraft(context);
    const classic = themeClassic(context, { customCss: [] });

    expect(plugin.name).toBe("@hoverkraft/docusaurus-theme");
    expect(plugin.getThemePath?.()).toEqual(classic.getThemePath?.());
    expect(plugin.getTypeScriptThemePath?.()).toEqual(classic.getTypeScriptThemePath?.());
  });

  it("registers the Hoverkraft stylesheet", () => {
    const plugin = themeHoverkraft(context);
    const clientModules = plugin.getClientModules?.() ?? [];

    expect(clientModules.some((modulePath) => modulePath.endsWith("styles/hoverkraft.css"))).toBe(
      true
    );
    expect(clientModules).toContain(
      require.resolve("@docusaurus/theme-classic/lib/prism-include-languages")
    );
    expect(clientModules).toContain(require.resolve("@docusaurus/theme-classic/lib/nprogress"));
  });

  it("exposes default translation messages from the base theme", async () => {
    const plugin = themeHoverkraft(context);
    const classic = themeClassic(context, { customCss: [] });

    const pluginMessages = await plugin.getDefaultCodeTranslationMessages?.();
    const classicMessages = await classic.getDefaultCodeTranslationMessages?.();

    expect(pluginMessages).toEqual(classicMessages);
  });
});
