---
sidebar_position: 3
---

# Logo Component

The Logo component provides flexible branding options for your site header.

## Overview

The Hoverkraft Logo component offers:

- **Image logo support** with proper accessibility
- **Text fallback** when no image is configured
- **Configurable links** for logo click behavior
- **Responsive sizing** across different screen sizes

## Configuration Options

### Image Logo

Configure an image logo through theme config:

```javascript title="docusaurus.config.js"
const config = {
  themeConfig: {
    hoverkraft: {
      logo: {
        src: '/img/hoverkraft-logo.svg',  // Path to logo file
        alt: 'Hoverkraft Logo',          // Alt text for accessibility
        href: 'https://hoverkraft.tech', // Click destination
      },
    },
  },
};
```

#### Logo File Requirements

- **Format**: SVG recommended for scalability, PNG/JPG supported
- **Size**: Optimized for 32px height (will scale automatically)
- **Location**: Place in `static/img/` directory
- **Naming**: Use descriptive names like `company-logo.svg`

### Text Logo

When no image is configured, the component displays "Hoverkraft" as styled text:

```jsx
// Default text logo rendering
<a href="/" className="hoverkraft-logo hoverkraft-logo--text">
  <span className="hoverkraft-logo__text">Hoverkraft</span>
</a>
```

## Styling

### Default Styles

The logo component includes these default styles:

```css
.hoverkraft-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.hoverkraft-logo__image {
  height: 32px;
  width: auto;
}

.hoverkraft-logo--text .hoverkraft-logo__text {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}
```

### Customizing Logo Styles

Override logo appearance in your custom CSS:

```css title="src/css/custom.css"
/* Customize logo container */
.hoverkraft-logo {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.hoverkraft-logo:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Customize image logo */
.hoverkraft-logo__image {
  height: 40px; /* Increase size */
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

/* Customize text logo */
.hoverkraft-logo--text .hoverkraft-logo__text {
  background: linear-gradient(45deg, #00aaff, #007acc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## Responsive Behavior

### Desktop
- **Full logo size** with hover effects
- **Proper alignment** with navigation items
- **Clear visual hierarchy** in header

### Mobile
- **Maintained proportions** at smaller screen sizes
- **Touch-friendly target** area for tapping
- **Optimized spacing** for mobile layouts

### Logo Sizing

The logo automatically scales based on screen size:

```css
/* Responsive logo sizing */
@media (max-width: 768px) {
  .hoverkraft-logo__image {
    height: 28px; /* Slightly smaller on mobile */
  }
  
  .hoverkraft-logo--text .hoverkraft-logo__text {
    font-size: 1.1rem;
  }
}
```

## Accessibility

### Alt Text

Always provide meaningful alt text for image logos:

```javascript
logo: {
  src: '/img/my-logo.svg',
  alt: 'My Company - Return to homepage', // Descriptive alt text
}
```

### Keyboard Navigation

The logo component supports:

- **Tab navigation** for keyboard users
- **Enter/Space activation** for following links
- **Focus indicators** for accessibility compliance

### Screen Reader Support

- **Semantic markup** with proper link structure
- **Descriptive text** for logo purpose
- **Skip link compatibility** for navigation

## Advanced Usage

### Multiple Logo Variations

Handle different logos for different contexts:

```javascript title="docusaurus.config.js"
const isDarkTheme = process.env.THEME_MODE === 'dark';

const config = {
  themeConfig: {
    hoverkraft: {
      logo: {
        src: isDarkTheme ? '/img/logo-light.svg' : '/img/logo-dark.svg',
        alt: 'Hoverkraft Logo',
      },
    },
  },
};
```

### Custom Logo Component

For advanced customization, swizzle the Logo component:

```bash
npx docusaurus swizzle @hoverkraft-tech/docusaurus-theme Logo --typescript
```

Then customize the component directly:

```tsx title="src/theme/Logo/index.tsx"
export default function HoverkraftLogo(): JSX.Element {
  const { hoverkraft } = useThemeConfig() as ThemeConfig;
  
  return (
    <a href="/" className="hoverkraft-logo custom-logo">
      {hoverkraft?.logo ? (
        <div className="logo-container">
          <img
            src={hoverkraft.logo.src}
            alt={hoverkraft.logo.alt || 'Logo'}
            className="hoverkraft-logo__image"
          />
          <span className="logo-tagline">Documentation</span>
        </div>
      ) : (
        <span className="hoverkraft-logo__text">Custom Brand</span>
      )}
    </a>
  );
}
```

## Integration Notes

- **Automatic inclusion** in Layout component header
- **Theme config integration** for easy customization  
- **CSS custom properties** support for dynamic theming
- **Hot reloading** support during development

## Best Practices

### Logo Files
- Use **vector formats** (SVG) when possible for crisp scaling
- Optimize **file sizes** for fast loading
- Provide **multiple sizes** if using raster formats
- Use **descriptive filenames** for maintenance

### Configuration
- Always include **alt text** for accessibility
- Use **absolute URLs** for external link destinations
- Test **logo scaling** across different screen sizes
- Verify **color contrast** against header background