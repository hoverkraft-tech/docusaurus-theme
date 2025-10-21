---
sidebar_position: 1
---

# Layout Component

The Hoverkraft theme inherits the implementation of layout behavior from `@docusaurus/theme-classic`. Hoverkraft provides CSS overrides and a packaged `Layout` component in the theme; however, the theme is intentionally CSS-first and prefers styling via variables and class names.

## Key points

- The Layout markup shipped with the theme provides the standard header, main content area, and footer.
- Visual styling is applied via CSS custom properties and theme style sheet overrides. The recommended way to customize visual appearance is via `src/css/custom.css` in your site.

## What is configurable

- Color and spacing tweaks: use CSS variables such as `--ifm-color-primary` or the Hoverkraft-specific `--hk-color-primary`.
- Dark mode: the theme supports dark mode by delegating to `@docusaurus/theme-classic`'s color mode handling.

## How to customize structure or behavior

1. Small visual changes: add CSS rules to your site `src/css/custom.css`.

2. Structural or behavioral changes: swizzle the `Layout` component.

   ```bash
   npx docusaurus swizzle @hoverkraft/docusaurus-theme Layout --typescript
   ```

   Keep in mind that swizzling creates a copy of the component in your project and you will need to maintain compatibility with theme updates.

## CSS classes and variables you can target

Useful classes:

- `.navbar`, `.navbar__brand`, `.navbar__logo`
- `.main-wrapper`, `.main-wrapper main`
- `.footer`, `.footer__inner`, `.footer__title`

Useful variables:

- `--ifm-color-primary`, `--ifm-color-secondary` (Infima / Docusaurus variables)
- `--hk-color-primary`, `--hk-color-secondary` (Hoverkraft branding variables)

## Accessibility

The theme follows Docusaurus accessibility patterns. When you make changes, preserve focus outlines and semantic structure.
