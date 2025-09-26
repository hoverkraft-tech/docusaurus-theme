---
sidebar_position: 3
---

# Configuration

The Hoverkraft Docusaurus theme is designed to enforce strict branding guidelines with **no customization options**.

## Opinionated Design Philosophy

This theme follows an **opinionated approach** to ensure consistent branding across all Hoverkraft documentation projects:

- ✅ **Consistent Brand Identity**: All sites look and feel like official Hoverkraft properties
- ✅ **Reduced Maintenance**: No configuration options means fewer things to break
- ✅ **Faster Setup**: Just install and use - no complex configuration needed
- ✅ **Professional Standards**: Enforces design best practices and accessibility

## Basic Usage

Simply add the theme to your Docusaurus configuration:

```javascript title="docusaurus.config.js"
const config = {
  themes: ['@hoverkraft-tech/docusaurus-theme'],
  // No additional configuration required
};

export default config;
```

## What's Enforced

The theme automatically applies the [Official Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding):

### Official Hoverkraft Color Palette

<div className="color-demo">
  <div className="color-swatch color-swatch--primary">Primary<br/>Hoverkraft Blue</div>
  <div className="color-swatch color-swatch--secondary">Secondary<br/>Professional Gray</div>
  <div className="color-swatch color-swatch--accent">Accent<br/>Hoverkraft Orange</div>
</div>

These colors are **fixed** and cannot be overridden. For complete color specifications and usage guidelines, see the [Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding).

### Standard Typography

- **Font Family**: As specified in the [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding)
- **Font Sizes**: Consistent modular scale from the branding specifications
- **Font Weights**: Standardized hierarchy
- **Line Heights**: Optimized for readability

### Fixed Layout Components

- **Header**: Standard Hoverkraft branding with "Hoverkraft" text logo
- **Footer**: Professional multi-section footer with company information
- **Navigation**: Consistent navigation patterns
- **Content Layout**: Optimized spacing and structure

## Why No Customization?

**Brand Consistency**: Every Hoverkraft documentation site should look professionally consistent and immediately recognizable as part of the Hoverkraft ecosystem.

**Reduced Complexity**: Without customization options, there are fewer ways for implementations to break or diverge from standards.

**Faster Deployment**: Teams can focus on content rather than spending time on design decisions and configuration.

**Quality Assurance**: The theme is thoroughly tested in one configuration, ensuring reliability.

## Standard Docusaurus Configuration

You can still use all standard Docusaurus configuration options:

```javascript title="docusaurus.config.js"
const config = {
  title: 'My Documentation',
  tagline: 'My project tagline',
  
  // Standard Docusaurus configuration works normally
  themes: ['@hoverkraft-tech/docusaurus-theme'],
  
  themeConfig: {
    navbar: {
      title: 'My Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
      ],
    },
    footer: {
      // Standard Docusaurus footer configuration
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
      ],
    },
  },
};

export default config;
```

The Hoverkraft theme **enhances** the standard Docusaurus configuration with consistent branding while preserving all core Docusaurus functionality.

## Complete Configuration Example

Here's a complete working configuration:

```javascript title="docusaurus.config.js"
import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'My Documentation',
  tagline: 'Documentation with Hoverkraft branding',
  favicon: 'img/favicon.ico',
  
  url: 'https://my-docs.hoverkraft.tech',
  baseUrl: '/',
  
  // Apply Hoverkraft theme
  themes: ['@hoverkraft-tech/docusaurus-theme'],
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'My Project',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
```

## Migration from Customizable Versions

If you were using a previous version that allowed customization:

1. **Remove all `hoverkraft` configuration** from your `themeConfig`
2. **Remove custom color overrides** - the theme now uses fixed colors
3. **Update your build** with `npm run build`
4. **Enjoy the simplified configuration!**

The theme will automatically apply consistent Hoverkraft branding to your site.