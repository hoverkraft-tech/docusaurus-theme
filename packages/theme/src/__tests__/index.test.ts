import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import themeClassic from "@docusaurus/theme-classic";
import type { LoadContext } from "@docusaurus/types";
import themeHoverkraft from "../index";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const nodeRequire = createRequire(import.meta.url);

function createLoadContext(
  siteConfigOverrides: Partial<LoadContext["siteConfig"]> = {},
): LoadContext {
  return {
    siteDir: currentDir,
    generatedFilesDir: path.join(currentDir, ".docusaurus"),
    siteConfig: {
      baseUrl: "/",
      i18n: {
        defaultLocale: "en",
        locales: ["en"],
      },
      staticDirectories: ["static"],
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
      ...siteConfigOverrides,
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
  it("extends the classic theme", () => {
    const context = createLoadContext();
    const plugin = themeHoverkraft(context);
    const classic = themeClassic(context, { customCss: [] });

    expect(plugin.name).toBe("@hoverkraft/docusaurus-theme");
    expect(plugin.getThemePath?.()).toEqual(classic.getThemePath?.());
    expect(plugin.getTypeScriptThemePath?.()).toEqual(
      classic.getTypeScriptThemePath?.(),
    );
  });

  it("registers the Hoverkraft stylesheet", () => {
    const context = createLoadContext();
    const plugin = themeHoverkraft(context);
    const clientModules = plugin.getClientModules?.() ?? [];

    expect(
      clientModules.some((modulePath) =>
        modulePath.endsWith("styles/hoverkraft.css"),
      ),
    ).toBe(true);
    expect(clientModules).toContain(
      nodeRequire.resolve(
        "@docusaurus/theme-classic/lib/prism-include-languages",
      ),
    );
    expect(clientModules).toContain(
      nodeRequire.resolve("@docusaurus/theme-classic/lib/nprogress"),
    );
  });

  it("exposes default translation messages from the base theme", async () => {
    const context = createLoadContext();
    const plugin = themeHoverkraft(context);
    const classic = themeClassic(context, { customCss: [] });

    const pluginMessages = await plugin.getDefaultCodeTranslationMessages?.();
    const classicMessages = await classic.getDefaultCodeTranslationMessages?.();

    expect(pluginMessages).toEqual(classicMessages);
  });

  it("adds the theme assets directory to staticDirectories", () => {
    const context = createLoadContext();
    const initialStaticDirectories = [...context.siteConfig.staticDirectories];
    themeHoverkraft(context);

    expect(context.siteConfig.staticDirectories).toEqual([
      ...initialStaticDirectories,
      path.resolve(currentDir, "../assets"),
    ]);

    // Ensure repeated instantiation does not duplicate entries
    themeHoverkraft(context);
    expect(context.siteConfig.staticDirectories).toEqual([
      ...initialStaticDirectories,
      path.resolve(currentDir, "../assets"),
    ]);
  });

  it("sets the default favicon when none is provided", () => {
    const context = createLoadContext();

    expect(context.siteConfig.favicon).toBeUndefined();

    themeHoverkraft(context);

    expect(context.siteConfig.favicon).toBe("img/favicon.ico");
  });

  it("does not override an existing favicon", () => {
    const context = createLoadContext({ favicon: "img/custom.ico" });

    themeHoverkraft(context);

    expect(context.siteConfig.favicon).toBe("img/custom.ico");
  });
});
