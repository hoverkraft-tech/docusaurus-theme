---
sidebar_position: 3
---

# Custom CSS - Strictly Limited

The Hoverkraft theme enforces **strict branding** and **severely restricts custom CSS** to maintain brand consistency.

## Official Branding Authority

All design specifications are defined and maintained in the **[Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding)**.

:::warning Severely Restricted
**Most CSS customization is not allowed.** The theme is designed to enforce consistent Hoverkraft branding across all documentation projects.
:::

## What is Absolutely Forbidden

❌ **Theme colors** - Cannot be changed or overridden  
❌ **Typography** - Font families, sizes, weights are fixed  
❌ **Header and footer** - Layout and branding are enforced  
❌ **Logo and branding elements** - Cannot be modified  
❌ **Core layout** - Page structure is standardized  
❌ **Navigation styling** - Menu and navigation appearance is fixed  

## Extremely Limited Allowances

Only **minimal content-specific styling** may be acceptable:

✅ **Content formatting helpers** (text alignment, spacing)  
✅ **Basic content containers** (cards, boxes) that don't affect branding  
✅ **Documentation-specific elements** (code examples, API docs)  

## If You Must Add CSS

If absolutely necessary, follow these strict guidelines:

### Use Existing Docusaurus Methods

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

### Only Content-Specific, Non-Branding CSS

```css title="src/css/custom.css"
/* ONLY content helpers - NO branding modifications */
.content-card {
  background: white;
  border: 1px solid #e1e4e8;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
}

.text-center { text-align: center; }
.text-right { text-align: right; }

/* API documentation helpers */
.api-endpoint {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  padding: 0.75rem;
  font-family: monospace;
  margin: 1rem 0;
}
```

## What Will Be Ignored or Overridden

The theme will ignore or override any CSS that attempts to modify branding:

```css title="src/css/custom.css"
/* These will be IGNORED or OVERRIDDEN */
:root {
  --ifm-color-primary: #ff0000; /* ❌ IGNORED */
}

.hoverkraft-header {
  background: #purple; /* ❌ OVERRIDDEN */
}

.hoverkraft-logo__text {
  color: #green; /* ❌ OVERRIDDEN */
}

/* Any modifications to theme classes will be overridden */
```

## Recommended Approach

**Don't fight the theme.** Instead:

1. **Accept the enforced branding** as specified in the [Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding)
2. **Focus on content quality** rather than visual customization
3. **Use standard Markdown and Docusaurus features** for content formatting
4. **Consult the branding repository** for approved design patterns

## Philosophy

The Hoverkraft theme prioritizes **brand consistency over customization flexibility**. This ensures all Hoverkraft documentation maintains identical professional standards as defined in the [Hoverkraft Branding Repository](https://github.com/hoverkraft-tech/branding).

**If you need extensive customization, this theme is not suitable for your project.**