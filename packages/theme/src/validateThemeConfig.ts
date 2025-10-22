import { Joi } from "@docusaurus/utils-validation";
import type { ThemeConfig } from "./types";

const DEFAULT_CONFIG: ThemeConfig = {
  hoverkraft: {},
};

const ThemeConfigSchema = Joi.object({
  hoverkraft: Joi.object({}).optional(),
}).unknown(true);

const FORCED_LOGO = {
  alt: "Hoverkraft Logo",
  src: "img/logo.svg",
};

export function validateThemeConfig({
  validate,
  themeConfig,
}: {
  validate: <T>(schema: Joi.Schema, value: T) => T;
  themeConfig: ThemeConfig;
}): ThemeConfig {
  // Validate incoming config first (allows unknown fields such as navbar)
  const validated = validate(ThemeConfigSchema, themeConfig) as unknown as Record<string, unknown>;

  // Force-inject Hoverkraft logo into the top-level navbar config
  const navbar = Object.assign(
    {},
    (validated.navbar as Record<string, unknown> | undefined) ?? {},
    {
      logo: FORCED_LOGO,
    }
  );

  const merged = {
    ...validated,
    navbar,
  } as unknown as ThemeConfig;

  return merged;
}

export { DEFAULT_CONFIG };
