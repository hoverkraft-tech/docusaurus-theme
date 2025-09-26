import type { LoadContext, Plugin } from '@docusaurus/types';
import type { ThemeConfig } from './types';

const path = require('path');

export default function themeHoverkraft(
  _context: LoadContext,
  _options: ThemeConfig
): Plugin<undefined> {
  return {
    name: '@hoverkraft-tech/docusaurus-theme',

    getThemePath() {
      return path.resolve(__dirname, './theme');
    },

    getTypeScriptThemePath() {
      return path.resolve(__dirname, '..', 'src', 'theme');
    },

    getDefaultCodeTranslationMessages() {
      return {
        'theme.NotFound.title': 'Page Not Found',
        'theme.NotFound.p1': 'We could not find what you were looking for.',
        'theme.NotFound.p2':
          'Please contact the owner of the site that linked you to the original URL and let them know their link is broken.',
      };
    },
  };
}

export { validateThemeConfig } from './validateThemeConfig';
