import path from "node:path";
import themeClassic from "@docusaurus/theme-classic";
import type { LoadContext, Plugin } from "@docusaurus/types";

export default function themeHoverkraft(
  context: LoadContext,
): Plugin<undefined> {
  const hoverkraftStylesheet = path.resolve(
    __dirname,
    "./styles/hoverkraft.css",
  );
  const hoverkraftAssetsDir = path.resolve(__dirname, "./assets");
  const defaultFavicon = "img/favicon.ico";
  const existingStaticDirectories = context.siteConfig.staticDirectories ?? [
    "static",
  ];
  const normalizedStaticDirectories = new Set(
    existingStaticDirectories.map((directoryPath) =>
      path.resolve(context.siteDir, directoryPath),
    ),
  );

  if (!normalizedStaticDirectories.has(hoverkraftAssetsDir)) {
    context.siteConfig.staticDirectories = [
      ...existingStaticDirectories,
      hoverkraftAssetsDir,
    ];
  }

  if (!context.siteConfig.favicon) {
    context.siteConfig.favicon = defaultFavicon;
  }

  const classicTheme = themeClassic(context, {
    customCss: [hoverkraftStylesheet],
  });
  const classicGetClientModules =
    classicTheme.getClientModules?.bind(classicTheme);

  return {
    ...classicTheme,
    name: "@hoverkraft/docusaurus-theme",
    getClientModules() {
      const modules = classicGetClientModules?.() ?? [];

      return modules.map((modulePath) => {
        if (modulePath === "./prism-include-languages") {
          return require.resolve(
            "@docusaurus/theme-classic/lib/prism-include-languages",
          );
        }

        if (modulePath === "./nprogress") {
          return require.resolve("@docusaurus/theme-classic/lib/nprogress");
        }

        return modulePath;
      });
    },
  };
}

export type {
  HoverkraftAction,
  HoverkraftActionSize,
  HoverkraftActionVariant,
  HoverkraftFeatureItem,
  HoverkraftFeatureListProps,
  HoverkraftProjectCardProps,
} from "./theme/components.types";
export type { HoverkraftButtonProps } from "./theme/hoverscape/HoverkraftButton";
export type {
  HoverkraftBrandHighlightProps,
  HoverkraftHeroProps,
} from "./theme/hoverscape/HoverkraftHero";
export { validateThemeConfig } from "./validateThemeConfig";
