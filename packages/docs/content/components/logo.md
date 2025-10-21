---
sidebar_position: 3
---

# Logo Component

The Hoverkraft theme now inherits from `@docusaurus/theme-classic` and provides a fixed Logo component that renders the official Hoverkraft SVG. The theme intentionally treats the logo as an asset (static file) and not a configurable option.

## Key points

- The theme ships a built-in Logo component that imports and renders the official SVG located in the theme package static assets.
- The logo is not exposed as a theme configuration option. If you need a different logo, you must either override the `navbar.logo` site config (point it to a different `src` path) or swizzle the Logo component.

## Where the SVG lives

When the theme is installed or built, the logo is served from the theme package static folder and is available at:

- /docusaurus-theme/img/logo.svg

This path is handled automatically when using the packaged theme. If you run the site locally using the theme from a local workspace, the build process copies `packages/theme/src/theme/static/img/logo.svg` into the published `lib/` folder so the asset is served correctly.

## Customization options

1. Small tweaks via CSS

   The theme is CSS-first — most visual adjustments should be done by overriding or adding CSS in your site `src/css/custom.css`. Target the logo with selectors such as `.navbar__logo` or `.navbar__brand`.

2. Swizzle the Logo component (full control)

   To replace or fully customize the component, swizzle it into your project:

   ```bash
   npx docusaurus swizzle @hoverkraft/docusaurus-theme Logo --typescript
   ```

   After swizzling you can replace the SVG, change markup, add alt text, or wire the logo to a CDN URL.

## Accessibility

The built-in Logo component provides semantic markup and keyboard focusability. When you swizzle or replace the logo, ensure the anchor has an appropriate `aria-label` and that the image has `alt` text (or `aria-hidden` if decorative).

## Troubleshooting

- If the logo 404s (for example `/docusaurus-theme/img/logo.svg` returns 404), make sure you:
  - Ran `npm run build` in the theme package so static assets are copied to `lib/`.
  - Rebuilt the site (`make build`) so Docusaurus picks up the packaged theme files.
  - If using a published package, confirm the release contains the `lib/assets/logo.svg` file.

This ensures the asset is available at the theme static path and the Navbar component can load it automatically.
