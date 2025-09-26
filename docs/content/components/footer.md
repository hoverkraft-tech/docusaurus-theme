---
sidebar_position: 2
---

# Footer Component

The Footer component provides a professional, multi-section footer with enforced Hoverkraft branding.

## Overview

The Hoverkraft Footer component features:

- **Fixed branding elements** from the [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding)
- **Responsive design** that stacks appropriately on mobile devices
- **Professional styling** with consistent colors and typography
- **Standard sections** for company information and resources

## Fixed Structure

The footer structure is standardized and cannot be customized:

### Company Section
- **Hoverkraft branding** and official messaging
- **Company description** per branding guidelines
- **Consistent brand positioning**

### Resources Section  
- **Documentation links** for site navigation
- **Community and support** links
- **Standard resource** categories

### Company Information
- **About and contact** information  
- **Legal and policy** links
- **Standard company** pages

All content and styling follows the specifications in the [Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding).

## Styling Features

### Visual Design
- **Gradient background** from dark to black
- **Primary color accent** border at the top
- **Grid layout** that adapts to screen size
- **Hover effects** on all links

### Typography
- **Consistent font weights** and sizing
- **Color hierarchy** for better readability
- **Proper spacing** between sections

## Default Links

The footer includes these default navigation items:

```jsx
// Resources Section
<ul>
  <li><a href="/docs">Documentation</a></li>
  <li><a href="/blog">Blog</a></li>
  <li><a href="/community">Community</a></li>
</ul>

// Company Section  
<ul>
  <li><a href="/about">About</a></li>
  <li><a href="/careers">Careers</a></li>
  <li><a href="/contact">Contact</a></li>
</ul>
```

## Customization

### Styling the Footer

Override footer styles in your custom CSS:

```css title="src/css/custom.css"
/* Customize footer background */
.hoverkraft-footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-top: 4px solid var(--hk-color-accent);
}

/* Customize section headings */
.hoverkraft-footer__section h4 {
  color: var(--hk-color-accent);
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Customize links */
.hoverkraft-footer__links a {
  position: relative;
  transition: all 0.3s ease;
}

.hoverkraft-footer__links a:hover {
  color: var(--hk-color-primary);
  transform: translateX(4px);
}
```

### Adding Custom Sections

To add custom content to the footer, you can swizzle the component:

```bash
npx docusaurus swizzle @hoverkraft/docusaurus-theme Footer --typescript
```

Then modify the component to include your custom sections:

```jsx title="src/theme/Footer/index.tsx"
export default function HoverkraftFooter(): JSX.Element {
  return (
    <footer className="hoverkraft-footer">
      <div className="hoverkraft-footer__content">
        {/* Existing sections */}
        
        {/* Add your custom section */}
        <div className="hoverkraft-footer__section">
          <h4>Custom Section</h4>
          <ul className="hoverkraft-footer__links">
            <li><a href="/custom">Custom Link</a></li>
            <li><a href="/another">Another Link</a></li>
          </ul>
        </div>
      </div>
      
      {/* Footer bottom remains the same */}
      <div className="hoverkraft-footer__bottom">
        <p>© {new Date().getFullYear()} Hoverkraft. All rights reserved.</p>
      </div>
    </footer>
  );
}
```

## Responsive Behavior

### Desktop Layout
- **Three-column grid** with equal spacing
- **Full-width sections** with proper margins
- **Hover effects** and animations

### Mobile Layout  
- **Single-column stack** for better readability
- **Reduced padding** for mobile spacing
- **Touch-friendly links** with larger tap targets

### Tablet Layout
- **Two-column grid** that adapts content
- **Balanced spacing** between sections
- **Maintained readability** at medium sizes

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `.hoverkraft-footer` | Main footer container |
| `.hoverkraft-footer__content` | Grid container for sections |
| `.hoverkraft-footer__section` | Individual footer section |
| `.hoverkraft-footer__links` | Link list within sections |
| `.hoverkraft-footer__bottom` | Copyright/bottom section |

## Accessibility Features

The footer includes several accessibility enhancements:

- **Semantic HTML structure** with proper footer element
- **Keyboard navigation** support for all links
- **High contrast colors** for readability
- **Descriptive link text** for screen readers

## Integration Notes

The footer component is automatically included in the Layout component and doesn't require separate configuration. It inherits theme colors and responds to configuration changes automatically.