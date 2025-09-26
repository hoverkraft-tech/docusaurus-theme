---
sidebar_position: 3
---

# Configuration

Comprehensive guide to configuring the Hoverkraft Docusaurus theme.

## Basic Configuration

The theme is configured through the `hoverkraft` object in your `themeConfig`:

```javascript title="docusaurus.config.js"
const config = {
  themeConfig: {
    hoverkraft: {
      // Configuration options go here
    },
  },
};
```

## Color Configuration

### Default Colors

The theme comes with Hoverkraft's official color palette:

<div className="color-demo">
  <div className="color-swatch color-swatch--primary">Primary<br/>#007acc</div>
  <div className="color-swatch color-swatch--secondary">Secondary<br/>#6c757d</div>
  <div className="color-swatch color-swatch--accent">Accent<br/>#ff6b35</div>
</div>

### Customizing Colors

Override the default colors by providing your own values:

```javascript title="docusaurus.config.js"
const config = {
  themeConfig: {
    hoverkraft: {
      colors: {
        primary: '#0066cc',     // Custom primary color
        secondary: '#777777',   // Custom secondary color
        accent: '#ff5722',      // Custom accent color
      },
    },
  },
};
```

:::tip
Colors should be provided as hex values (e.g., `#007acc`) for best compatibility across all components.
:::

## Logo Configuration

### Using a Custom Logo

Configure a custom logo image:

```javascript title="docusaurus.config.js"
const config = {
  themeConfig: {
    hoverkraft: {
      logo: {
        src: '/img/my-logo.svg',     // Path to your logo file
        alt: 'My Company Logo',      // Alt text for accessibility
        href: '/',                   // Link destination (optional)
      },
    },
  },
};
```

### Text-Only Logo

If no logo is configured, the theme will display "Hoverkraft" as a text logo by default.

## Advanced Configuration

### Custom CSS Files

Include additional CSS files for further customization:

```javascript title="docusaurus.config.js"
const config = {
  themeConfig: {
    hoverkraft: {
      customCss: [
        './src/css/custom-theme.css',
        './src/css/overrides.css',
      ],
    },
  },
};
```

## Complete Configuration Example

Here's a complete configuration example with all available options:

```javascript title="docusaurus.config.js"
import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'My Documentation',
  tagline: 'Documentation with Hoverkraft branding',
  
  // ... other Docusaurus config
  
  themes: ['@hoverkraft-tech/docusaurus-theme'],
  
  themeConfig: {
    // Standard Docusaurus theme config
    navbar: {
      title: 'My Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    
    // Hoverkraft theme configuration
    hoverkraft: {
      colors: {
        primary: '#007acc',
        secondary: '#6c757d',
        accent: '#ff6b35',
      },
      logo: {
        src: '/img/hoverkraft-logo.svg',
        alt: 'Hoverkraft Logo',
        href: 'https://hoverkraft.tech',
      },
      customCss: [
        './src/css/custom-branding.css',
      ],
    },
  },
};

export default config;
```

## Configuration Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `colors.primary` | `string` | `#007acc` | Primary brand color |
| `colors.secondary` | `string` | `#6c757d` | Secondary color |
| `colors.accent` | `string` | `#ff6b35` | Accent color for highlights |
| `logo.src` | `string` | - | Path to logo image |
| `logo.alt` | `string` | `Logo` | Alt text for logo |
| `logo.href` | `string` | `/` | Logo link destination |
| `customCss` | `string[]` | `[]` | Additional CSS files to include |

## Environment-Specific Configuration

You can use different configurations for different environments:

```javascript title="docusaurus.config.js"
const isProduction = process.env.NODE_ENV === 'production';

const config = {
  themeConfig: {
    hoverkraft: {
      colors: {
        primary: isProduction ? '#007acc' : '#ff6b35', // Orange in dev
      },
    },
  },
};
```

:::info
Changes to theme configuration require restarting your development server to take effect.
:::