import type { ThemeConfig } from './types';
import { Joi } from '@docusaurus/utils-validation';

const DEFAULT_CONFIG: ThemeConfig = {
  hoverkraft: {
    colors: {
      primary: '#007acc',
      secondary: '#6c757d',
      accent: '#ff6b35',
    },
  },
};

const ThemeConfigSchema = Joi.object({
  hoverkraft: Joi.object({
    colors: Joi.object({
      primary: Joi.string().optional(),
      secondary: Joi.string().optional(),
      accent: Joi.string().optional(),
    }).optional(),
    logo: Joi.object({
      src: Joi.string().required(),
      alt: Joi.string().optional(),
      href: Joi.string().optional(),
    }).optional(),
    customCss: Joi.array().items(Joi.string()).optional(),
  }).optional(),
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