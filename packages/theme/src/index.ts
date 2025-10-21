import path from "node:path";
import type { LoadContext, Plugin } from "@docusaurus/types";
import themeClassic from "@docusaurus/theme-classic";

export default function themeHoverkraft(context: LoadContext): Plugin<undefined> {
  const hoverkraftStylesheet = path.resolve(__dirname, "./styles/hoverkraft.css");
  const classicTheme = themeClassic(context, { customCss: [hoverkraftStylesheet] });
  const classicGetClientModules = classicTheme.getClientModules?.bind(classicTheme);

  return {
    ...classicTheme,
    name: "@hoverkraft/docusaurus-theme",
    getClientModules() {
      const modules = classicGetClientModules?.() ?? [];

      return modules.map((modulePath) => {
        if (modulePath === "./prism-include-languages") {
          return require.resolve("@docusaurus/theme-classic/lib/prism-include-languages");
        }

        if (modulePath === "./nprogress") {
          return require.resolve("@docusaurus/theme-classic/lib/nprogress");
        }

        return modulePath;
      });
    },
  };
}

export { validateThemeConfig } from "./validateThemeConfig";
