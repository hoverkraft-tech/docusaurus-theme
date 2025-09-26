---
sidebar_position: 1
---

# Colors

The Hoverkraft theme uses a **fixed color palette** that cannot be customized to ensure consistent branding.

## Official Hoverkraft Color Palette

The theme enforces these exact colors across all documentation sites:

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

These colors are **permanently fixed** and are applied automatically when you install the theme.

## Why Fixed Colors?

**Brand Consistency**: Every Hoverkraft documentation site must maintain the same professional appearance and brand recognition.

**Quality Standards**: These colors have been carefully selected for:
- Accessibility compliance (WCAG guidelines)
- Optimal contrast ratios for readability  
- Professional appearance across all contexts
- Print-friendly output

**Reduced Complexity**: With fixed colors, there are no configuration decisions to make and no ways for color choices to break the design.

## Color Usage Throughout the Theme

### Primary Color (#007acc)
- Header background
- Primary buttons and CTAs
- Link colors  
- Active navigation items
- Brand accents

### Secondary Color (#6c757d)
- Supporting text
- Borders and dividers
- Secondary buttons
- Metadata and captions

### Accent Color (#ff6b35)
- Highlights and warnings
- Progress indicators
- Call-to-action elements
- Special emphasis

## CSS Custom Properties

While you cannot override the theme colors, the theme internally uses CSS custom properties for consistency:

```css
/* These are set automatically by the theme - do not override */
:root {
  --hk-color-primary: #007acc;
  --hk-color-secondary: #6c757d;
  --hk-color-accent: #ff6b35;
  --hk-color-dark: #1a1a1a;
  --hk-color-light: #f8f9fa;
}
```

:::warning
**Do not attempt to override these values.** The theme is designed to enforce these exact colors for brand consistency.
:::

## Dark Mode Support

The theme automatically handles dark mode color variations:

```css
/* Light mode (default) */
:root {
  --hk-color-primary: #007acc;
  --hk-color-background: #ffffff;
  --hk-color-text: #333333;
}

/* Dark mode (automatic) */
[data-theme='dark'] {
  --hk-color-primary: #33a3dd;
  --hk-color-background: #1a1a1a;
  --hk-color-text: #ffffff;
}
```

These variations are also **fixed** and ensure proper contrast in both light and dark modes.

## Accessibility

The enforced color palette meets or exceeds WCAG accessibility standards:

- **Contrast Ratios**: All text/background combinations meet AA standards
- **Color-Blind Friendly**: Colors are distinguishable for users with color vision deficiencies  
- **High Contrast**: Text remains readable in all contexts
- **Print-Friendly**: Colors work well in print and grayscale

## Brand Colors in Context

You can see how these colors work together throughout this documentation site:

- **Headers and navigation** use the primary blue
- **Body text and UI elements** use the secondary gray
- **Call-to-action elements** use the accent orange
- **All combinations** maintain professional consistency

This consistent color usage creates a cohesive brand experience across all Hoverkraft documentation properties.

## Migration from Customizable Versions

If you previously used a version that allowed color customization:

1. **Remove color overrides** from your configuration
2. **Update your custom CSS** to work with the fixed palette  
3. **Test your content** to ensure it works with the enforced colors
4. **Enjoy the simplified workflow** with no color decisions needed!

The fixed color palette will ensure your documentation looks professional and on-brand automatically.