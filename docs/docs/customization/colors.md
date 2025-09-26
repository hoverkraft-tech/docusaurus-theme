---
sidebar_position: 1
---

# Colors

Learn how to customize the color palette of the Hoverkraft Docusaurus theme.

## Default Color Palette

The Hoverkraft theme uses a carefully selected color palette:

<div className="color-demo">
  <div className="color-swatch color-swatch--primary">
    Primary<br/>#007acc
  </div>
  <div className="color-swatch color-swatch--secondary">
    Secondary<br/>#6c757d  
  </div>
  <div className="color-swatch color-swatch--accent">
    Accent<br/>#ff6b35
  </div>
</div>

## Customizing Theme Colors

### Basic Color Override

Override the default colors in your theme configuration:

```javascript title="docusaurus.config.js"
const config = {
  themeConfig: {
    hoverkraft: {
      colors: {
        primary: '#0066cc',     // Custom blue
        secondary: '#888888',   // Custom gray  
        accent: '#ff6600',      // Custom orange
      },
    },
  },
};
```

### Using Brand Colors

Apply your organization's brand colors:

```javascript title="docusaurus.config.js"
const config = {
  themeConfig: {
    hoverkraft: {
      colors: {
        primary: '#1976d2',     // Material Blue
        secondary: '#424242',   // Material Gray
        accent: '#f57c00',      // Material Orange
      },
    },
  },
};
```

## CSS Custom Properties

The theme exposes CSS custom properties that you can use throughout your site:

### Available Properties

| Property | Description | Default |
|----------|-------------|---------|
| `--hk-color-primary` | Primary brand color | `#007acc` |
| `--hk-color-secondary` | Secondary color | `#6c757d` |
| `--hk-color-accent` | Accent color | `#ff6b35` |
| `--hk-color-dark` | Dark color | `#1a1a1a` |
| `--hk-color-light` | Light color | `#f8f9fa` |

### Using Custom Properties

Reference these properties in your custom CSS:

```css title="src/css/custom.css"
/* Use theme colors in your components */
.my-component {
  background-color: var(--hk-color-primary);
  border: 1px solid var(--hk-color-secondary);
  color: var(--hk-color-light);
}

.my-accent-button {
  background-color: var(--hk-color-accent);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
}

.my-card {
  border-left: 4px solid var(--hk-color-primary);
  background-color: var(--hk-color-light);
  padding: 1rem;
}
```

## Advanced Color Customization

### Creating Color Variants

Generate lighter and darker variants of your colors:

```css title="src/css/custom.css"
:root {
  /* Create variations of primary color */
  --hk-color-primary-light: #339cdd;
  --hk-color-primary-dark: #004d80;
  
  /* Create variations of accent color */  
  --hk-color-accent-light: #ff8a5c;
  --hk-color-accent-dark: #cc4a1a;
}

/* Use variants in components */
.button--primary {
  background-color: var(--hk-color-primary);
  border-color: var(--hk-color-primary-dark);
}

.button--primary:hover {
  background-color: var(--hk-color-primary-light);
}
```

### Dark Mode Support

Define different colors for dark mode:

```css title="src/css/custom.css"
/* Light mode colors (default) */
:root {
  --hk-color-primary: #007acc;
  --hk-color-background: #ffffff;
  --hk-color-text: #333333;
}

/* Dark mode colors */
[data-theme='dark'] {
  --hk-color-primary: #33a3dd; /* Lighter primary for dark bg */
  --hk-color-background: #1a1a1a;
  --hk-color-text: #ffffff;
}
```

## Color Accessibility

### Contrast Requirements

Ensure your color choices meet accessibility standards:

```css title="src/css/custom.css"
/* Good contrast example */
.accessible-button {
  background-color: #0066cc; /* Dark enough for white text */
  color: #ffffff;           /* High contrast ratio */
}

/* Test contrast ratios at https://webaim.org/resources/contrastchecker/ */
```

### Color-Blind Friendly Palettes

Consider color-blind users when choosing colors:

```javascript title="docusaurus.config.js"
// Color-blind friendly palette
const config = {
  themeConfig: {
    hoverkraft: {
      colors: {
        primary: '#0173b2',   // Blue (distinguishable)
        secondary: '#5d5d5d', // Gray (neutral)  
        accent: '#de8f05',    // Orange (distinguishable from blue)
      },
    },
  },
};
```

## Testing Your Colors

### Browser Developer Tools

Test your colors in browser dev tools:

1. **Inspect elements** to see computed CSS values
2. **Modify custom properties** in real-time
3. **Test different screen sizes** and color modes
4. **Verify contrast ratios** with accessibility tools

### Color Validation Tools

Use online tools to validate your color choices:

- **WebAIM Contrast Checker**: Test contrast ratios
- **Coolors.co**: Generate color palettes
- **Adobe Color**: Create harmonious color schemes

## Common Color Schemes

### Corporate/Professional

```javascript
colors: {
  primary: '#2c3e50',   // Dark blue-gray
  secondary: '#7f8c8d', // Medium gray
  accent: '#3498db',    // Bright blue
}
```

### Creative/Modern

```javascript  
colors: {
  primary: '#8e44ad',   // Purple
  secondary: '#95a5a6', // Light gray
  accent: '#e67e22',    // Orange
}
```

### Tech/Innovation

```javascript
colors: {
  primary: '#2ecc71',   // Green
  secondary: '#34495e', // Dark gray
  accent: '#f39c12',    // Yellow-orange
}
```

## Troubleshooting

### Colors Not Applying

If your custom colors aren't showing:

1. **Restart development server** after config changes
2. **Clear browser cache** to see updates
3. **Check CSS specificity** if overrides aren't working
4. **Verify hex format** (use `#rrggbb` format)

### Performance Considerations

- **Use CSS custom properties** instead of hardcoded values
- **Avoid too many color variants** to keep CSS lean
- **Test performance** with many simultaneous color changes