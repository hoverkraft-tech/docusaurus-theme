---
sidebar_position: 2
---

# Typography

The Hoverkraft theme uses **fixed typography** specifications that cannot be customized to ensure consistent branding.

## Official Typography Guidelines

For complete typography specifications, font selections, and usage guidelines, refer to the **[Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding)**.

The branding repository contains:
- Official font family selections
- Typography scale and sizing specifications
- Line height and spacing guidelines
- Font weight and style definitions
- Accessibility considerations for typography

## Theme Implementation

The Hoverkraft theme automatically applies the official typography system as defined in the [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding):

### Fixed Font System
- **Font Families**: As specified in the branding guidelines
- **Font Sizes**: Modular scale from the official specifications
- **Font Weights**: Standardized hierarchy
- **Line Heights**: Optimized for readability per branding standards

### Typography Scale

The theme uses the official modular scale for consistent typography across all documentation sites.

:::info
For detailed font size specifications, line heights, and font weight mappings, see the [Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding).
:::

## Why Fixed Typography?

**Brand Consistency**: Typography is a key component of brand identity. The fixed system ensures that all Hoverkraft documentation maintains the same professional typographic standards as defined in the [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding).

**Accessibility**: The typography specifications have been selected to meet accessibility requirements for readability and contrast.

**Professional Standards**: Consistent typography creates a cohesive reading experience across all Hoverkraft documentation properties.

## Responsive Behavior

The typography system automatically adjusts across different screen sizes according to the specifications in the [Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding):

- **Mobile optimization**: Font sizes scale appropriately for small screens
- **Desktop enhancement**: Optimal reading experience on larger displays
- **Print compatibility**: Typography works well in print contexts

## Implementation Notes

The theme applies typography through CSS custom properties, but these values are **not exposed for customization** to maintain brand consistency:

```css
/* Typography applied automatically - do not override */
:root {
  --ifm-font-family-base: /* As specified in branding guidelines */;
  --ifm-font-family-monospace: /* As specified in branding guidelines */;
  /* Font sizes, weights, and other typography values */
}
```

## Content Typography

While the base typography system is fixed, you can still create content-specific enhancements that work within the branding guidelines. Refer to the [Custom CSS documentation](./css) for allowed customizations that don't conflict with the official branding.

For any questions about typography usage or implementation, consult the [Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding) for authoritative guidelines.