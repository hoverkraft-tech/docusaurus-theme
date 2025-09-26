---
slug: introducing-hoverkraft-theme
title: Introducing the Hoverkraft Docusaurus Theme
authors: [hoverkraft]
tags: [theme, docusaurus, branding, announcement]
---

# Introducing the Hoverkraft Docusaurus Theme

We're excited to announce the release of the **Hoverkraft Docusaurus Theme** - a comprehensive theming solution that brings consistent branding and professional design to all Hoverkraft documentation projects.

<!-- truncate -->

## Why a Custom Theme?

As Hoverkraft continues to grow and develop new projects, maintaining consistent branding across all our documentation sites became increasingly important. We needed a solution that would:

- **Standardize our visual identity** across all documentation
- **Provide a professional appearance** that reflects our brand values  
- **Offer easy customization** for different project needs
- **Maintain excellent developer experience** with modern tooling

## What's Included

### 🎨 Professional Design System

The theme includes a complete design system with:

- **Hoverkraft color palette**: Primary (#007acc), Secondary (#6c757d), Accent (#ff6b35)
- **Typography system**: Inter font family with professional hierarchy
- **Responsive layouts**: Mobile-first design that works on all devices
- **Consistent spacing**: Modular scale for predictable layouts

### 🧩 Reusable Components

Three core components provide the foundation:

- **Layout**: Main page wrapper with responsive structure
- **Footer**: Multi-section footer with company information and links
- **Logo**: Configurable logo component supporting images or text

### ⚙️ Easy Configuration

Simple theme configuration through `docusaurus.config.js`:

```javascript
const config = {
  themes: ['@hoverkraft-tech/docusaurus-theme'],
  themeConfig: {
    hoverkraft: {
      colors: {
        primary: '#007acc',
        secondary: '#6c757d', 
        accent: '#ff6b35',
      },
      logo: {
        src: '/img/logo.svg',
        alt: 'Company Logo',
      },
    },
  },
};
```

### 🛠️ Developer Experience

Built with modern development practices:

- **TypeScript support**: Full type definitions for better DX
- **Hot reloading**: Instant feedback during development
- **CSS custom properties**: Easy theming and customization
- **Comprehensive documentation**: This site itself demonstrates the theme!

## Getting Started

Installation is straightforward:

```bash
npm install @hoverkraft-tech/docusaurus-theme
```

Add the theme to your Docusaurus configuration:

```javascript
module.exports = {
  themes: ['@hoverkraft-tech/docusaurus-theme'],
  // ... rest of your config
};
```

Start your development server and see the Hoverkraft branding applied immediately!

## Customization Options

### Colors

Override the default color palette to match your project:

```javascript
hoverkraft: {
  colors: {
    primary: '#0066cc',     // Custom primary
    secondary: '#777777',   // Custom secondary
    accent: '#ff5722',      // Custom accent
  },
}
```

### Logo

Add your custom logo or use the text fallback:

```javascript
hoverkraft: {
  logo: {
    src: '/img/my-logo.svg',
    alt: 'My Project Logo',
    href: 'https://myproject.com',
  },
}
```

### Advanced Styling

Add custom CSS for deeper customization:

```css
.hoverkraft-header {
  background: linear-gradient(135deg, #007acc, #0088d4);
}

.hoverkraft-footer {
  border-top: 3px solid var(--hk-color-accent);
}
```

## Real-World Usage

This documentation site is built using the Hoverkraft theme, demonstrating all features in action. You can see:

- **Responsive design** working across different screen sizes
- **Consistent branding** throughout all pages
- **Professional typography** in the documentation content
- **Custom components** like cards and buttons in action

## Migration from Classic Theme

Migrating from `@docusaurus/theme-classic` is seamless:

1. **Install the Hoverkraft theme** - it extends the classic theme
2. **Add theme configuration** - existing config continues to work
3. **Customize colors and branding** - use new Hoverkraft options
4. **Test and deploy** - minimal breaking changes

## Performance & Accessibility

The theme is built with performance and accessibility in mind:

- **Lightweight CSS**: Efficient styles with minimal overhead
- **Responsive images**: Optimized logo and image handling
- **Semantic HTML**: Proper document structure for screen readers
- **Keyboard navigation**: Full keyboard accessibility support
- **High contrast**: Colors meet WCAG accessibility guidelines

## Future Plans

We're just getting started! Upcoming features include:

- **Additional component variants**: More footer and header options
- **Dark mode enhancements**: Better dark theme support
- **Animation system**: Subtle animations for enhanced UX
- **Template gallery**: Pre-built page templates for common use cases
- **Plugin integrations**: Better integration with popular Docusaurus plugins

## Community & Feedback

The Hoverkraft theme is open source and welcomes community contributions:

- **GitHub Repository**: [hoverkraft-tech/docusaurus-theme](https://github.com/hoverkraft-tech/docusaurus-theme)
- **NPM Package**: [@hoverkraft-tech/docusaurus-theme](https://www.npmjs.com/package/@hoverkraft-tech/docusaurus-theme)
- **Documentation**: [This site](/) serves as comprehensive documentation

We'd love to hear your feedback and see how you're using the theme in your projects!

## Try It Today

Ready to give your documentation a professional look? Install the Hoverkraft theme today:

```bash
npm install @hoverkraft-tech/docusaurus-theme
```

Visit our [Getting Started guide](/docs/getting-started) for detailed installation instructions and examples.

---

*The Hoverkraft Docusaurus Theme represents our commitment to providing high-quality, professional tools for the developer community. We're excited to see what you build with it!*