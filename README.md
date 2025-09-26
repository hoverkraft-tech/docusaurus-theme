# @hoverkraft-tech/docusaurus-theme

A custom Docusaurus theme that applies Hoverkraft branding and design guidelines to documentation sites.

## Installation

```bash
npm install @hoverkraft-tech/docusaurus-theme
# or
yarn add @hoverkraft-tech/docusaurus-theme
```

## Usage

Add the theme to your Docusaurus configuration file (`docusaurus.config.js`):

```javascript
module.exports = {
  // ... other config
  themes: ['@hoverkraft-tech/docusaurus-theme'],
  themeConfig: {
    // ... other theme config
    hoverkraft: {
      colors: {
        primary: '#007acc',     // Optional: override primary color
        secondary: '#6c757d',   // Optional: override secondary color
        accent: '#ff6b35',      // Optional: override accent color
      },
      logo: {
        src: '/img/logo.svg',   // Optional: custom logo
        alt: 'Hoverkraft Logo',
        href: '/',
      },
    },
  },
};
```

## Configuration Options

The theme accepts the following configuration options under `themeConfig.hoverkraft`:

### `colors` (optional)

Customize the color palette used by the theme:

- `primary`: Primary brand color (default: `#007acc`)
- `secondary`: Secondary color (default: `#6c757d`)
- `accent`: Accent color for highlights (default: `#ff6b35`)

### `logo` (optional)

Configure a custom logo:

- `src`: Path to the logo image (required if logo is specified)
- `alt`: Alt text for the logo (optional)
- `href`: Link destination when logo is clicked (optional, defaults to `/`)

### `customCss` (optional)

Array of paths to additional CSS files to include:

```javascript
hoverkraft: {
  customCss: [
    './src/css/custom.css',
  ],
}
```

## Features

This theme provides:

- **Hoverkraft Branding**: Applies the official Hoverkraft color palette and typography
- **Responsive Design**: Mobile-first responsive layout
- **Customizable**: Override colors and add custom styling
- **Accessible**: Built with accessibility best practices
- **Print-friendly**: Optimized print styles

## Development

To contribute to this theme:

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the theme: `npm run build`
4. Test your changes in a Docusaurus project

### Building

```bash
npm run build
```

### Watch mode for development

```bash
npm run build:watch
```

## License

MIT License - see [LICENSE](./LICENSE) for details.

## Support

For issues and questions, please open an issue in the [GitHub repository](https://github.com/hoverkraft-tech/docusaurus-theme).
