---
sidebar_position: 3
---

# Logo Component

The Logo component enforces consistent Hoverkraft branding with a fixed text logo.

## Overview

The Hoverkraft Logo component:

- **Displays "Hoverkraft" text** with consistent styling
- **Links to homepage** by default
- **Maintains brand consistency** across all sites
- **Responsive sizing** across different screen sizes

## Fixed Branding

The logo is **not configurable** and always displays "Hoverkraft" as a text logo to ensure consistent brand identity across all Hoverkraft documentation projects.

## Implementation

The logo component automatically renders:

```jsx
<a href="/" className="hoverkraft-logo hoverkraft-logo--text">
  <span className="hoverkraft-logo__text">Hoverkraft</span>
</a>
```

## Styling

### Fixed Styles

The logo component uses these enforced styles:

```css
.hoverkraft-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.hoverkraft-logo--text .hoverkraft-logo__text {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}
```

### Brand Consistency

The logo styling is **intentionally fixed** to maintain:

- **Consistent appearance** across all Hoverkraft sites
- **Professional branding** that's immediately recognizable
- **Accessibility standards** with proper contrast and focus states
- **Responsive behavior** that works on all screen sizes

## Responsive Behavior

### Desktop

- **Full logo size** with proper alignment in header
- **Clear visual hierarchy** with navigation items
- **Professional appearance** in all contexts

### Mobile

- **Proportional scaling** at smaller screen sizes
- **Touch-friendly target** area for navigation
- **Optimized spacing** for mobile layouts

### Automatic Sizing

The logo automatically scales appropriately:

```css
/* Responsive logo sizing - handled automatically */
@media (max-width: 768px) {
  .hoverkraft-logo--text .hoverkraft-logo__text {
    font-size: 1.1rem;
  }
}
```

## Accessibility

### Built-in Accessibility

The logo component includes:

- **Semantic markup** with proper link structure
- **Keyboard navigation** support (tab/enter)
- **Focus indicators** for accessibility compliance
- **Screen reader friendly** with clear navigation purpose

### WCAG Compliance

The fixed styling ensures:

- **High contrast ratios** for text visibility
- **Sufficient color contrast** in all themes
- **Proper focus management** for keyboard users
- **Screen reader compatibility** with semantic HTML

## Why No Customization?

### Brand Protection

The fixed logo ensures that:

- **All Hoverkraft documentation** shares consistent branding
- **Brand recognition** is maintained across projects
- **Professional standards** are enforced automatically
- **Visual identity** remains cohesive

### Simplified Maintenance

With no customization options:

- **No configuration** decisions needed
- **Faster setup** for new projects
- **Consistent behavior** across all implementations
- **Reduced support** complexity

### Quality Assurance

The fixed implementation guarantees:

- **Tested accessibility** across all use cases
- **Proper responsive behavior** on all devices
- **Consistent performance** without configuration issues
- **Professional appearance** in all contexts

## Integration Notes

- **Automatic inclusion** in Layout component header
- **No configuration required** - works out of the box
- **Theme integration** with consistent styling
- **Hot reloading support** during development

The logo component is designed to provide consistent, professional Hoverkraft branding without any setup or configuration requirements.
