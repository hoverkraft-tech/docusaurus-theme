---
slug: introducing-hoverkraft-theme
title: Introducing the Hoverkraft Docusaurus Theme
authors:
  - name: Hoverkraft
    title: Hoverkraft Team
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

### 🎨 Enforced Professional Design System

The theme implements the official [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding):

- **Official Hoverkraft branding**: Colors, typography, and design elements from the branding repository
- **Consistent layouts**: Mobile-first design that works on all devices
- **Professional spacing**: Modular scale for predictable layouts
- **Brand compliance**: Automatic enforcement of branding standards

### 🧩 Standardized Components

Core components provide consistent branding:

- **Layout**: Main page wrapper with Hoverkraft branding
- **Footer**: Multi-section footer with company information and links
- **Logo**: Fixed "Hoverkraft" text branding for consistency

### ⚙️ Zero Configuration Required

The theme enforces branding automatically with no configuration needed:

```javascript
const config = {
  themes: ['@hoverkraft/docusaurus-theme'],
  // No additional configuration required - branding applied automatically
};
```

### 🛠️ Developer Experience

Built with modern development practices:

- **TypeScript support**: Full type definitions for better DX
- **Hot reloading**: Instant feedback during development
- **Enforced branding**: Automatic application of [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding)
- **Comprehensive documentation**: This site itself demonstrates the theme!
- **CSS custom properties**: Easy theming and customization
- **Comprehensive documentation**: This site itself demonstrates the theme!

## Getting Started

Installation is straightforward:

```bash
npm install @hoverkraft/docusaurus-theme
```

Add the theme to your Docusaurus configuration:

```javascript
module.exports = {
  themes: ['@hoverkraft/docusaurus-theme'],
  // ... rest of your config
};
```

Start your development server and see the official Hoverkraft branding applied automatically!

## Enforced Branding Standards

The theme automatically applies the [Official Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding) with no configuration required:

### Fixed Color Palette

- Consistent application of official Hoverkraft colors
- No customization allowed to ensure brand consistency
- Automatically optimized for accessibility and readability

### Standardized Typography

- Official font families and sizing from the branding guidelines
- Professional hierarchy maintained across all documentation
- Optimized for readability and web performance

### Professional Layout

- Consistent header with "Hoverkraft" branding
- Standardized footer with company information
- Responsive design that works on all devices

For complete branding specifications, refer to the [Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding).

## Real-World Usage

This documentation site is built using the Hoverkraft theme, demonstrating the enforced branding in action. You can see:

- **Responsive design** working across different screen sizes
- **Consistent branding** throughout all pages
- **Professional typography** in the documentation content
- **Official color palette** applied consistently

## Migration from Classic Theme

Migrating from `@docusaurus/theme-classic` is straightforward:

1. **Install the Hoverkraft theme** - it enforces Hoverkraft branding automatically
2. **Remove custom branding** - the theme handles all branding decisions
3. **No configuration needed** - branding is applied automatically
4. **Test and deploy** - enjoy the simplified setup!

## Performance & Accessibility

The theme is built with performance and accessibility in mind, following the [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding):

- **Lightweight CSS**: Efficient styles with minimal overhead
- **Optimized branding assets**: Performance-optimized implementation of brand elements
- **Semantic HTML**: Proper document structure for screen readers
- **Keyboard navigation**: Full keyboard accessibility support
- **WCAG compliance**: Colors and contrast ratios meet accessibility guidelines

## Future Plans

We're committed to maintaining brand consistency while improving the theme:

- **Enhanced performance**: Ongoing optimization of branding asset delivery
- **Better accessibility**: Continued improvements to meet evolving standards
- **Updated branding**: Automatic updates when branding guidelines evolve
- **Developer experience**: Better tooling for theme integration
- **Documentation improvements**: Enhanced guides and examples

All future enhancements will maintain strict adherence to the [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding).

## Community & Feedback

The Hoverkraft theme is open source and welcomes community contributions:

- **GitHub Repository**: [hoverkraft-tech/docusaurus-theme](https://github.com/hoverkraft-tech/docusaurus-theme)
- **NPM Package**: [@hoverkraft/docusaurus-theme](https://www.npmjs.com/package/@hoverkraft/docusaurus-theme)
- **Documentation**: [Documentation site](/docs/getting-started) serves as comprehensive documentation

We'd love to hear your feedback and see how you're using the theme in your projects!

## Try It Today

Ready to give your documentation a professional look? Install the Hoverkraft theme today:

```bash
npm install @hoverkraft/docusaurus-theme
```

Visit our [Getting Started guide](/docs/getting-started) for detailed installation instructions and examples.

---

_The Hoverkraft Docusaurus Theme represents our commitment to providing high-quality, professional tools for the developer community. We're excited to see what you build with it!_
