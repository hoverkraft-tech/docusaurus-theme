---
sidebar_position: 1
---

# Layout Component

The Layout component is the main wrapper for all pages in your Docusaurus site.

## Overview

The Hoverkraft Layout component provides:

- **Consistent structure** across all pages
- **Responsive design** that adapts to different screen sizes
- **Branding integration** with Hoverkraft colors and styling
- **Dynamic theme application** based on configuration

## Features

### Responsive Design

The layout automatically adapts to different screen sizes with:

- **Mobile-first approach** for optimal mobile experience
- **Flexible header** that adjusts to content
- **Responsive spacing** and typography
- **Touch-friendly navigation** on mobile devices

### Theme Integration

The layout component:

- **Applies custom colors** from theme configuration
- **Sets CSS custom properties** for consistent theming
- **Integrates with other components** like Footer and Logo
- **Supports dark mode** (when available)

## Implementation Details

The Layout component wraps your content with:

```jsx
<div className="hoverkraft-theme">
  <div className="hoverkraft-layout">
    <header className="hoverkraft-header">{/* Logo and navigation */}</header>
    <main className="hoverkraft-main">{/* Your page content */}</main>
    <HoverkraftFooter />
  </div>
</div>
```

### CSS Classes

The layout provides several CSS classes you can target for customization:

| Class                | Description           |
| -------------------- | --------------------- |
| `.hoverkraft-theme`  | Root theme wrapper    |
| `.hoverkraft-layout` | Main layout container |
| `.hoverkraft-header` | Header section        |
| `.hoverkraft-main`   | Main content area     |

### Custom Properties

The layout sets CSS custom properties that you can use throughout your site:

| Property               | Description           |
| ---------------------- | --------------------- |
| `--hk-color-primary`   | Primary theme color   |
| `--hk-color-secondary` | Secondary theme color |
| `--hk-color-accent`    | Accent theme color    |

## Customization

### Overriding Styles

You can customize the layout by adding CSS to your custom style sheet:

```css title="src/css/custom.css"
/* Customize header */
.hoverkraft-header {
  background: linear-gradient(45deg, #007acc, #0088d4);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Customize main content area */
.hoverkraft-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Add custom spacing */
.hoverkraft-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
```

### Mobile Customization

Target mobile devices specifically:

```css title="src/css/custom.css"
@media (max-width: 768px) {
  .hoverkraft-header {
    padding: 0.5rem 1rem;
  }

  .hoverkraft-main {
    padding: 1rem 0.5rem;
  }
}
```

## Advanced Usage

### Extending the Layout

For advanced customization, you can swizzle the Layout component:

```bash
npx docusaurus swizzle @hoverkraft/docusaurus-theme Layout --typescript
```

This creates a copy of the Layout component in your project that you can modify directly.

:::warning
Swizzling components means you'll need to maintain compatibility with theme updates manually.
:::

### Integration with Other Themes

The Hoverkraft theme is designed to work alongside other Docusaurus themes and plugins. It applies its styling through CSS custom properties and specific class names to avoid conflicts.
