# @hoverkraft/docusaurus-theme

A strictly opinionated Docusaurus theme that enforces Hoverkraft branding guidelines for all Hoverkraft documentation projects.

## Installation

```bash
npm install @hoverkraft/docusaurus-theme
# or
yarn add @hoverkraft/docusaurus-theme
```

## Usage

Add the theme to your Docusaurus configuration file (`docusaurus.config.js`):

```javascript
module.exports = {
  // ... other config
  themes: ["@hoverkraft/docusaurus-theme"],
  // No additional configuration required - theme enforces Hoverkraft branding
};
```

## Strict Branding Enforcement

This theme is **opinionated by design** and enforces the official Hoverkraft branding guidelines:

- **Official Hoverkraft Branding**: Colors, typography, and design elements from the [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding)
- **Fixed Implementation**: No customization options to ensure brand consistency
- **Consistent Layout**: Standardized header, footer, and content structure

**No customization options are provided.** This ensures brand consistency across all Hoverkraft documentation projects.

For detailed branding specifications, color palettes, typography guidelines, and design principles, see the official [Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding).

## Features

This theme provides:

- **Enforced Hoverkraft Branding**: Official color palette, typography, and layout
- **Responsive Design**: Mobile-first responsive layout
- **Professional Components**: Standardized header, footer, and page structure
- **Accessibility**: Built with accessibility best practices
- **Print-friendly**: Optimized print styles

## Development

To contribute to this theme:

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Build the theme: `pnpm --filter @hoverkraft/docusaurus-theme run build`
4. Test your changes locally (optional): `pnpm --filter hoverkraft-theme-docs run start`

### Building

```bash
pnpm run build
```

### Watch mode for development

```bash
pnpm --filter @hoverkraft/docusaurus-theme run build:watch
```

## License

MIT License - see [LICENSE](./LICENSE) for details.

## Support

For issues and questions, please open an issue in the [GitHub repository](https://github.com/hoverkraft-tech/docusaurus-theme).
