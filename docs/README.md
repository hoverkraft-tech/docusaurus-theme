# Hoverkraft Theme Documentation

This directory contains the official documentation for the Hoverkraft Docusaurus theme, built using the theme itself as a demonstration.

## Overview

This documentation site serves dual purposes:

1. **Comprehensive documentation** for the Hoverkraft theme
2. **Live demonstration** of the theme's features and capabilities

## Getting Started

### Install Dependencies

```bash
npm install
```

### Local Development

```bash
npm start
```

This starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

## Documentation Structure

- **Getting Started**: Introduction and installation guide
- **Installation**: Detailed setup instructions
- **Configuration**: Complete configuration reference
- **Components**: Documentation for Layout, Footer, and Logo components
- **Customization**: Guides for colors, typography, and custom CSS
- **Migration**: Guide for migrating from other themes

## Features Demonstrated

This site showcases all theme features:

- ✅ **Hoverkraft branding** applied throughout
- ✅ **Responsive design** across all screen sizes
- ✅ **Custom components** in action
- ✅ **Professional typography** for documentation
- ✅ **Color system** with primary, secondary, and accent colors
- ✅ **Footer and header** styling
- ✅ **Blog functionality** with theme styling

## Theme Configuration

The site uses this configuration to demonstrate the theme:

```javascript
// docusaurus.config.js
hoverkraft: {
  colors: {
    primary: '#007acc',
    secondary: '#6c757d',
    accent: '#ff6b35',
  },
}
```

## Contributing

To contribute to the documentation:

1. Edit the relevant Markdown files in `docs/`
2. Update configuration in `docusaurus.config.js` if needed
3. Test changes locally with `npm start`
4. Submit a pull request

## Deployment

The documentation is automatically deployed when changes are pushed to the main branch.
