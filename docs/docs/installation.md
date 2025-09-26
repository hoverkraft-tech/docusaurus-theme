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

Add the theme to your `docusaurus.config.js`:

```javascript title="docusaurus.config.js"
const config = {
  // ... other configuration
  
  // Add the Hoverkraft theme
  themes: ['@hoverkraft-tech/docusaurus-theme'],
  
  // ... rest of configuration
};

export default config;
```

### 3. Basic Theme Configuration

Add basic theme configuration to your `docusaurus.config.js`:

```javascript title="docusaurus.config.js"
const config = {
  // ... other configuration
  
  themeConfig: {
    // ... other theme config
    
    // Hoverkraft theme configuration
    hoverkraft: {
      colors: {
        primary: '#007acc',     // Optional: override primary color
        secondary: '#6c757d',   // Optional: override secondary color  
        accent: '#ff6b35',      // Optional: override accent color
      },
    },
  },
};
```

## Verify Installation

Start your Docusaurus development server:

```bash
npm run start
```

Or with yarn:

```bash
yarn start
```

You should now see your site using the Hoverkraft theme with the default branding and styling applied.

## Next Steps

- [**Configure the theme**](./configuration) with custom colors and options
- [**Customize components**](./customization/colors) to match your brand
- Explore the [**component documentation**](./components/layout) for advanced features

## Troubleshooting

### Common Issues

**Theme not loading?**
- Ensure you've added the theme to the `themes` array in your config
- Check that the package is properly installed in your `node_modules`
- Restart your development server after configuration changes

**TypeScript errors?**
- The theme includes full TypeScript definitions
- Make sure your TypeScript version is compatible (5.0+)
- Check that your `tsconfig.json` includes the theme types

**Build failures?**
- Ensure all peer dependencies are installed
- Check that your Docusaurus version is 3.0+
- Review the console output for specific error messages