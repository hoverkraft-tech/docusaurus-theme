import { Joi } from "@docusaurus/utils-validation";
import type { ThemeConfig } from "./types";

const DEFAULT_CONFIG: ThemeConfig = {
  hoverkraft: {},
};

const ThemeConfigSchema = Joi.object({
  hoverkraft: Joi.object({}).optional(),
});

export function validateThemeConfig({
  validate,
  themeConfig,
}: {
  validate: <T>(schema: Joi.Schema, value: T) => T;
  themeConfig: ThemeConfig;
}): ThemeConfig {
  return validate(ThemeConfigSchema, themeConfig);
}

export { DEFAULT_CONFIG };
