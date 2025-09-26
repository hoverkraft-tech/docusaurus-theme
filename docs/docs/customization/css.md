---
sidebar_position: 3
---

# Custom CSS

Learn how to add custom CSS and override theme styles effectively.

## Adding Custom CSS

### Method 1: Theme Configuration

Add custom CSS files through theme configuration:

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

### Method 2: Docusaurus Custom CSS

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

### Method 3: Direct Import

Import CSS files directly in your components:

```jsx title="src/components/MyComponent.js"
import './MyComponent.css';

export default function MyComponent() {
  return <div className="my-component">Content</div>;
}
```

## CSS Architecture

### Recommended File Structure

Organize your CSS files for maintainability:

```
src/
├── css/
│   ├── custom.css           # Main custom styles
│   ├── variables.css        # CSS custom properties
│   ├── components.css       # Component-specific styles
│   ├── overrides.css        # Theme overrides
│   └── utilities.css        # Utility classes
```

### CSS Variables Strategy

Define reusable CSS custom properties:

```css title="src/css/variables.css"
:root {
  /* Custom spacing scale */
  --hk-spacing-xs: 0.25rem;
  --hk-spacing-sm: 0.5rem;
  --hk-spacing-md: 1rem;
  --hk-spacing-lg: 2rem;
  --hk-spacing-xl: 3rem;
  
  /* Custom border radius */
  --hk-radius-sm: 0.25rem;
  --hk-radius-md: 0.5rem;
  --hk-radius-lg: 1rem;
  
  /* Custom shadows */
  --hk-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --hk-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --hk-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

## Overriding Theme Styles

### Component-Specific Overrides

Target specific theme components:

```css title="src/css/overrides.css"
/* Override header styling */
.hoverkraft-header {
  background: linear-gradient(135deg, #007acc, #0088d4);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* Override footer styling */
.hoverkraft-footer {
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
  border-top: 3px solid var(--hk-color-accent);
}

/* Override logo styling */
.hoverkraft-logo__image {
  height: 36px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  transition: transform 0.2s ease;
}

.hoverkraft-logo:hover .hoverkraft-logo__image {
  transform: scale(1.05);
}
```

### Docusaurus Component Overrides

Override built-in Docusaurus components:

```css title="src/css/overrides.css"
/* Customize navbar */
.navbar {
  box-shadow: var(--hk-shadow-md);
  backdrop-filter: blur(8px);
}

.navbar__title {
  font-weight: 700;
  color: var(--hk-color-primary);
}

/* Customize sidebar */
.theme-doc-sidebar-container {
  background-color: var(--hk-color-light);
  border-right: 2px solid var(--hk-color-primary);
}

.menu__link {
  border-radius: var(--hk-radius-sm);
  transition: all 0.2s ease;
}

.menu__link:hover {
  background-color: var(--hk-color-primary);
  color: white;
  transform: translateX(4px);
}
```

## Custom Components

### Creating Utility Classes

Build a utility class system:

```css title="src/css/utilities.css"
/* Spacing utilities */
.hk-p-xs { padding: var(--hk-spacing-xs); }
.hk-p-sm { padding: var(--hk-spacing-sm); }
.hk-p-md { padding: var(--hk-spacing-md); }
.hk-p-lg { padding: var(--hk-spacing-lg); }

.hk-m-xs { margin: var(--hk-spacing-xs); }
.hk-m-sm { margin: var(--hk-spacing-sm); }
.hk-m-md { margin: var(--hk-spacing-md); }
.hk-m-lg { margin: var(--hk-spacing-lg); }

/* Color utilities */
.hk-text-primary { color: var(--hk-color-primary); }
.hk-text-secondary { color: var(--hk-color-secondary); }
.hk-text-accent { color: var(--hk-color-accent); }

.hk-bg-primary { background-color: var(--hk-color-primary); }
.hk-bg-light { background-color: var(--hk-color-light); }

/* Border utilities */
.hk-border-primary { border: 1px solid var(--hk-color-primary); }
.hk-border-radius { border-radius: var(--hk-radius-md); }

/* Shadow utilities */
.hk-shadow-sm { box-shadow: var(--hk-shadow-sm); }
.hk-shadow-md { box-shadow: var(--hk-shadow-md); }
.hk-shadow-lg { box-shadow: var(--hk-shadow-lg); }
```

### Custom Card Components

Create reusable card styles:

```css title="src/css/components.css"
/* Custom card component */
.hk-card {
  background: white;
  border-radius: var(--hk-radius-lg);
  box-shadow: var(--hk-shadow-md);
  padding: var(--hk-spacing-lg);
  margin-bottom: var(--hk-spacing-md);
  border-left: 4px solid var(--hk-color-primary);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hk-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--hk-shadow-lg);
}

.hk-card__title {
  color: var(--hk-color-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--hk-spacing-sm);
}

.hk-card__content {
  color: var(--ifm-color-content);
  line-height: 1.6;
}

/* Card variants */
.hk-card--accent {
  border-left-color: var(--hk-color-accent);
}

.hk-card--accent .hk-card__title {
  color: var(--hk-color-accent);
}

.hk-card--secondary {
  border-left-color: var(--hk-color-secondary);
}

.hk-card--secondary .hk-card__title {
  color: var(--hk-color-secondary);
}
```

### Button Components

Create consistent button styles:

```css title="src/css/components.css"
/* Custom button system */
.hk-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--hk-radius-md);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.hk-button:hover {
  text-decoration: none;
  transform: translateY(-1px);
}

/* Button variants */
.hk-button--primary {
  background-color: var(--hk-color-primary);
  color: white;
}

.hk-button--primary:hover {
  background-color: var(--ifm-color-primary-dark);
  color: white;
}

.hk-button--accent {
  background-color: var(--hk-color-accent);
  color: white;
}

.hk-button--outline {
  background-color: transparent;
  color: var(--hk-color-primary);
  border: 2px solid var(--hk-color-primary);
}

.hk-button--outline:hover {
  background-color: var(--hk-color-primary);
  color: white;
}

/* Button sizes */
.hk-button--small {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
}

.hk-button--large {
  padding: 1rem 2rem;
  font-size: 1rem;
}
```

## Responsive Design

### Mobile-First Approach

Use mobile-first responsive design:

```css title="src/css/custom.css"
/* Mobile styles (base) */
.hk-container {
  padding: 1rem;
  max-width: 100%;
}

.hk-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet styles */
@media (min-width: 768px) {
  .hk-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .hk-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .hk-grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
}
```

### Responsive Typography

Scale typography across devices:

```css title="src/css/custom.css"
/* Responsive font sizes */
.hk-title {
  font-size: 1.5rem;
  line-height: 1.3;
}

@media (min-width: 768px) {
  .hk-title {
    font-size: 2rem;
  }
}

@media (min-width: 1024px) {
  .hk-title {
    font-size: 2.5rem;
  }
}
```

## Dark Mode Support

### Dark Mode Variables

Define dark mode color variants:

```css title="src/css/custom.css"
/* Light mode (default) */
:root {
  --hk-bg-primary: #ffffff;
  --hk-bg-secondary: #f8f9fa;
  --hk-text-primary: #333333;
  --hk-border-color: #e1e5e9;
}

/* Dark mode */
[data-theme='dark'] {
  --hk-bg-primary: #1a1a1a;
  --hk-bg-secondary: #2d2d2d;
  --hk-text-primary: #ffffff;
  --hk-border-color: #444444;
}

/* Apply variables */
.hk-card {
  background-color: var(--hk-bg-primary);
  color: var(--hk-text-primary);
  border-color: var(--hk-border-color);
}
```

## Performance Optimization

### CSS Organization

Optimize CSS loading and performance:

```css title="src/css/custom.css"
/* Critical styles first */
:root {
  /* Essential variables */
}

/* Layout styles */
.hoverkraft-theme { /* ... */ }

/* Component styles */
.hk-card { /* ... */ }

/* Utility classes last */
.hk-p-sm { /* ... */ }
```

### Minimize CSS

Use efficient selectors and avoid redundancy:

```css title="src/css/custom.css"
/* Efficient - single class */
.hk-button {
  /* All button styles */
}

/* Less efficient - multiple selectors */
.btn, button, .button {
  /* Duplicate styles */
}
```

## Best Practices

### CSS Naming Conventions

Use consistent naming:

- **Theme prefix**: `hk-` for Hoverkraft-specific classes
- **BEM methodology**: `block__element--modifier`
- **Semantic names**: `primary`, `secondary`, not `blue`, `gray`

### CSS Organization

- **Group related styles** together
- **Use CSS custom properties** for reusable values
- **Comment complex styles** for maintainability
- **Test responsive behavior** across devices

### Performance Tips

- **Minimize CSS specificity** conflicts
- **Use efficient selectors** (avoid deep nesting)
- **Leverage CSS custom properties** for dynamic theming
- **Optimize for critical rendering path**