---
sidebar_position: 2
---

# Installation

Learn how to install and set up the Hoverkraft Docusaurus theme in your project.

## Prerequisites

Before installing the theme, make sure you have:

- **Node.js 18+** installed
- An existing **Docusaurus 3.x** project, or create a new one
- **npm** or **yarn** package manager

## Installing the Theme

### 1. Install the Package

Install the theme from NPM:

```bash
npm install @hoverkraft-tech/docusaurus-theme
```

Or with yarn:

```bash
yarn add @hoverkraft-tech/docusaurus-theme
```

### 2. Add Theme to Configuration

Add the theme to your `docusaurus.config.js` - **no additional configuration needed**:

```javascript title="docusaurus.config.js"
const config = {
  // ... other configuration
  
  // Add the Hoverkraft theme - that's it!
  themes: ['@hoverkraft-tech/docusaurus-theme'],
  
  // ... rest of configuration
};

export default config;
```

**Note**: Unlike other themes, the Hoverkraft theme requires **zero configuration**. It automatically applies consistent Hoverkraft branding.

## Verify Installation

Start your Docusaurus development server:

```bash
npm run start
```

Or with yarn:

```bash
yarn start
```

You should now see your site using the Hoverkraft theme with the official branding applied automatically.

## Next Steps

- Read about the [**opinionated design philosophy**](./configuration) behind the theme
- Explore the [**component documentation**](./components/layout) to understand the theme structure
- Check the [**migration guide**](./migration) if upgrading from a customizable version

## Troubleshooting

### Common Issues

**Theme not loading?**
- Ensure you've added the theme to the `themes` array in your config
- Check that the package is properly installed in your `node_modules`
- Restart your development server after adding the theme

**Build failures?**
- Ensure all peer dependencies are installed (Docusaurus 3.0+)
- Check that your Node.js version is 18+ 
- Review the console output for specific error messages

**Previous customizations not working?**
- The Hoverkraft theme enforces strict branding and ignores customization options
- Remove any `hoverkraft` configuration from your `themeConfig`
- See the [migration guide](./migration) for details