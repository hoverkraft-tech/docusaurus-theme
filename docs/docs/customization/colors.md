---
sidebar_position: 1
---

# Colors

The Hoverkraft theme uses the **official Hoverkraft color palette** that cannot be customized to ensure consistent branding.

## Official Branding Reference

For complete color specifications, usage guidelines, and design principles, refer to the **[Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding)**.

The branding repository contains:
- Official color palette with hex values
- Color usage guidelines and examples
- Accessibility compliance documentation
- Print and digital specifications
- Brand application examples

## Theme Implementation

The theme automatically applies the official Hoverkraft colors:

<div className="color-demo">
  <div className="color-swatch color-swatch--primary">
    Primary<br/>Hoverkraft Blue
  </div>
  <div className="color-swatch color-swatch--secondary">
    Secondary<br/>Professional Gray  
  </div>
  <div className="color-swatch color-swatch--accent">
    Accent<br/>Hoverkraft Orange
  </div>
</div>

These colors are **permanently fixed** and are applied automatically when you install the theme.

## Why Fixed Colors?

**Brand Consistency**: Every Hoverkraft documentation site must maintain the same professional appearance and brand recognition as defined in the [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding).

**Quality Standards**: The colors have been carefully selected and documented in the branding repository for:
- Accessibility compliance (WCAG guidelines)
- Optimal contrast ratios for readability  
- Professional appearance across all contexts
- Print-friendly output

**Reduced Complexity**: With fixed colors, there are no configuration decisions to make and no ways for color choices to break the design.

## CSS Implementation

The theme uses CSS custom properties internally for consistency:

```css
/* These are set automatically by the theme - do not override */
:root {
  --hk-color-primary: /* Official Hoverkraft Blue */;
  --hk-color-secondary: /* Official Professional Gray */;
  --hk-color-accent: /* Official Hoverkraft Orange */;
  --hk-color-dark: /* Official Dark Color */;
  --hk-color-light: /* Official Light Color */;
}
```

:::warning
**Do not attempt to override these values.** The theme is designed to enforce the exact colors specified in the [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding).
:::

## Accessibility & Standards

All color combinations meet accessibility standards as documented in the [Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding):

- **WCAG AA Compliance**: All text/background combinations meet accessibility standards
- **Color-Blind Friendly**: Colors are distinguishable for users with color vision deficiencies  
- **High Contrast**: Text remains readable in all contexts
- **Print-Friendly**: Colors work well in print and grayscale

## Migration from Customizable Versions

If you previously used a version that allowed color customization:

1. **Remove color overrides** from your configuration
2. **Refer to the branding repository** for official color specifications
3. **Update your custom CSS** to work with the fixed palette  
4. **Test your content** to ensure it works with the enforced colors

The fixed color palette ensures your documentation automatically follows the [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding).