---
sidebar_position: 3
---

# Custom CSS

While the Hoverkraft theme enforces strict branding, you can still add custom CSS for **content styling** without overriding theme colors or layout.

## What You Can Customize

✅ **Content-specific styling** for your documentation  
✅ **Additional utility classes** for your content  
✅ **Component styling** that doesn't conflict with theme branding  
✅ **Page-specific enhancements** using standard Docusaurus methods  

## What You Cannot Override

❌ **Theme colors** - Primary, secondary, and accent colors are fixed  
❌ **Header and footer** - Layout and branding are enforced  
❌ **Logo and branding elements** - These maintain consistent Hoverkraft identity  
❌ **Core typography** - Font families and hierarchies are standardized  

## Adding Custom CSS

### Recommended Method: Docusaurus Custom CSS

Use Docusaurus's built-in custom CSS system:

```javascript title="docusaurus.config.js"
const config = {
  presets: [
    [
      'classic',
      {
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};
```

### Direct Import in Components

Import CSS files directly in your components:

```jsx title="src/components/MyComponent.js"
import './MyComponent.css';

export default function MyComponent() {
  return <div className="my-component">Content</div>;
}
```

## Allowed Customizations

### Content-Specific Styling

Style your documentation content without affecting theme branding:

```css title="src/css/custom.css"
/* Custom content styling - ALLOWED */
.my-content-card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem 0;
}

.my-info-box {
  background-color: #f8f9fa;
  border-left: 4px solid var(--hk-color-primary); /* Use theme colors */
  padding: 1rem;
  margin: 1rem 0;
}

.my-code-example {
  background: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 1rem;
  font-family: 'Consolas', monospace;
}
```

### Utility Classes

Create utility classes for your content:

```css title="src/css/custom.css"
/* Spacing utilities - ALLOWED */
.my-spacing-sm { margin: 0.5rem; }
.my-spacing-md { margin: 1rem; }
.my-spacing-lg { margin: 2rem; }

.my-text-center { text-align: center; }
.my-text-right { text-align: right; }

/* Content-specific utilities - ALLOWED */
.my-highlight {
  background-color: rgba(0, 122, 204, 0.1); /* Semi-transparent primary */
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
}

.my-emphasis {
  font-weight: 600;
  color: var(--hk-color-primary); /* Use theme color */
}
```

### Component Enhancements

Enhance your content components while respecting theme branding:

```css title="src/css/custom.css"
/* Documentation-specific enhancements - ALLOWED */
.api-endpoint {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  padding: 0.75rem;
  font-family: monospace;
  margin: 1rem 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card {
  background: white;
  border: 1px solid #e1e4e8;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
}
```

## What to Avoid

### Don't Override Theme Branding

```css title="src/css/custom.css"
/* DON'T DO THIS - Theme colors are fixed */
:root {
  --hk-color-primary: #ff0000; /* ❌ Will be ignored */
}

.hoverkraft-header {
  background: #purple; /* ❌ Don't override theme components */
}

.hoverkraft-logo__text {
  color: #green; /* ❌ Don't change branding elements */
}
```

### Don't Break Responsive Design

```css title="src/css/custom.css"
/* DON'T DO THIS - Breaks responsive layout */
.my-component {
  width: 1200px; /* ❌ Fixed widths break mobile */
  position: fixed; /* ❌ Can interfere with theme layout */
}

/* DO THIS INSTEAD - Responsive and flexible */
.my-component {
  max-width: 100%;
  width: min(1200px, 100% - 2rem);
  margin: 0 auto;
}
```

## Working With Theme Colors

While you can't change theme colors, you can use them in your custom styles:

```css title="src/css/custom.css"
/* Use theme colors in your custom components */
.my-alert {
  border-left: 4px solid var(--hk-color-accent);
  background: rgba(255, 107, 53, 0.1);
  padding: 1rem;
}

.my-button {
  background: var(--hk-color-primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.my-button:hover {
  background: var(--ifm-color-primary-dark); /* Use Docusaurus variants */
}
```

## Responsive Design

Ensure your customizations work on all devices:

```css title="src/css/custom.css"
/* Mobile-first responsive design */
.my-content {
  padding: 1rem;
}

@media (min-width: 768px) {
  .my-content {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .my-content {
    padding: 3rem;
  }
}
```

## Best Practices

### Naming Conventions
- Use **descriptive class names** like `.my-feature-card`
- **Prefix your classes** to avoid conflicts (e.g., `.my-`, `.project-`)
- Follow **BEM methodology** for complex components

### Performance
- **Minimize CSS size** by avoiding redundant rules
- **Use efficient selectors** (avoid deep nesting)
- **Group related styles** together for better maintainability

### Compatibility
- **Test on different screen sizes** to ensure responsive behavior
- **Use theme CSS variables** when available
- **Avoid overriding theme classes** to prevent conflicts

## Example: Custom Documentation Card

Here's a complete example of allowed customization:

```css title="src/css/custom.css"
/* Custom documentation card component */
.doc-card {
  background: white;
  border: 1px solid #e1e4e8;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin: 1rem 0;
  transition: box-shadow 0.2s ease;
}

.doc-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.doc-card__title {
  color: var(--hk-color-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.doc-card__content {
  color: var(--ifm-color-content);
  line-height: 1.6;
}

.doc-card__footer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e1e4e8;
  font-size: 0.875rem;
  color: var(--hk-color-secondary);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .doc-card {
    padding: 1rem;
    margin: 0.75rem 0;
  }
}
```

This approach lets you enhance your content while maintaining the consistent Hoverkraft branding that the theme enforces.