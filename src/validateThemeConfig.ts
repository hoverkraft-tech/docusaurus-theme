import type { ThemeConfig } from './types';
import { Joi } from '@docusaurus/utils-validation';

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
  validate: any;
  themeConfig: ThemeConfig;
}): ThemeConfig {
  return validate(ThemeConfigSchema, themeConfig);
}

export { DEFAULT_CONFIG };
