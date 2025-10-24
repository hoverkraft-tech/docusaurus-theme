---
sidebar_position: 2
---

# Installation

Learn how to install and set up the Hoverkraft Docusaurus theme in your project.

## Prerequisites

Before installing the theme, make sure you have:

- **Node.js 18+** installed
- An existing **Docusaurus 3.x** project, or create a new one
- **npm** or **Yarn** package manager

## Installing the Theme

### Install the Package

Install the theme from npm:

```bash
npm install @hoverkraft/docusaurus-theme
```

Or with Yarn:

```bash
yarn add @hoverkraft/docusaurus-theme
```

### Add Theme to Configuration

Add the theme to your `docusaurus.config.js` - **no additional configuration needed**:

```javascript title="docusaurus.config.js"
const config = {
  // ... other configuration

  // Add the Hoverkraft theme - that's it!
  themes: ["@hoverkraft/docusaurus-theme"],

  // ... rest of configuration
};

export default config;
```

**Note**: Unlike other themes, the Hoverkraft theme requires **zero configuration**. It automatically applies consistent Hoverkraft branding.

## Verifying Installation

After installing the theme, verify it's correctly installed:

```bash
# Check the package is installed
npm list @hoverkraft/docusaurus-theme

# Verify the lib directory exists (contains compiled files)
ls node_modules/@hoverkraft/docusaurus-theme/lib/
```

Expected output should show:

- `index.js`, `index.d.ts`
- `theme/` directory with component files
- `styles/` directory with CSS modules

If the `lib/` directory is missing, the package may have been published incorrectly.

### Start Development Server

Start your Docusaurus development server:

```bash
npm run start
```

Or with Yarn:

```bash
yarn start
```

You should now see your site using the Hoverkraft theme with the official branding applied automatically.

## Pre-Migration Checklist

Before migrating to the Hoverkraft theme:

- [ ] Verify you're using Docusaurus 3.x (`npm list @docusaurus/core`)
- [ ] Check the latest theme version (`npm view @hoverkraft/docusaurus-theme version`)
- [ ] Backup your current `docusaurus.config.ts` or `docusaurus.config.js`
- [ ] Review your custom CSS files to identify what can be removed
- [ ] Test in a separate branch first

## Next Steps

- Review the [Getting Started overview](./getting-started#whats-included) for the opinionated defaults bundled with the theme
- Use the [configuration guide](./configuration) when you need to customize styling or swizzle components
- Check the [migration guide](./migration) if upgrading from a previous theme implementation

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

### Build Fails After Installing Theme

**Error:** `Docusaurus was unable to resolve the "@hoverkraft/docusaurus-theme" theme`

**Possible causes:**

1. Package not installed correctly
2. Missing `lib/` directory (package published incorrectly)
3. Node modules cache issue

**Solutions:**

```bash
# Verify installation
npm list @hoverkraft/docusaurus-theme

# Check lib directory exists
ls node_modules/@hoverkraft/docusaurus-theme/lib/

# Try fresh install
rm -rf node_modules package-lock.json
npm install

# If lib/ is missing, report the issue - package may be broken
```

### Custom Favicon/Logo Not Showing

**Issue:** You set a custom favicon but still see the Hoverkraft favicon

**Explanation:** The theme provides opinionated Hoverkraft branding including favicon and logo. This is intentional.

**Solution:** The theme is designed for Hoverkraft-branded sites. If you need custom branding, you may need to use a different theme or swizzle the components.

### Type Errors with Components

**Error:** TypeScript errors when using theme components

**Solution:** Ensure you have the correct import and TypeScript is configured:

```tsx
// Import types if needed
import type { HoverkraftHeroProps } from "@hoverkraft/docusaurus-theme";
```
