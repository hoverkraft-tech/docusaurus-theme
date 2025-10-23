---
sidebar_position: 7
---

# Migration Guide

This document explains how to migrate existing Docusaurus sites (classic, bootstrap, or custom themes) to the current Hoverkraft theme implementation.

Summary of current theme behavior

- The Hoverkraft theme now extends `@docusaurus/theme-classic`. It delegates runtime behavior (color mode, Prism, etc.) to the classic theme and layers Hoverkraft-specific CSS and static assets on top.
- There are no special `hoverkraft` runtime configuration options in the theme; branding is primarily applied via the packaged style sheet and static assets.

When migrating, prefer CSS overrides or swizzling rather than relying on theme-specific configuration values.

## From `@docusaurus/theme-classic`

### Compatibility

Because Hoverkraft extends the classic theme, most `themeConfig` entries (navbar, footer, prism, colorMode) will continue to work. You generally do not need to refactor existing configuration.

### What to check

- Navbar logo path: the packaged theme serves its logo from the theme static assets at `/docusaurus-theme/img/logo.svg`. If your site relied on a custom `img/logo.svg`, either keep that file in your site `static/img/` or update `navbar.logo.src` to the desired path.
- Custom CSS: move visual overrides into `src/css/custom.css` and target Hoverkraft classes/variables (for example `.navbar__brand`, `.footer`, `--hk-color-primary`).
- Swizzled components: if you previously swizzled components from classic, verify they still work and update imports if necessary.

## Migrating from Custom CSS

If you have custom CSS that duplicates theme functionality:

### Step 1: Identify Redundant Styles

The theme provides:

- Color variables and palettes
- Typography (Inter, Roboto Mono)
- Button styles
- Navbar and footer styling
- Dark mode support
- Code block styling

### Step 2: Remove Redundant Custom CSS

**Before:**

```css
:root {
  --ifm-color-primary: #1998ff;
  --ifm-font-family-base: "Inter", sans-serif;
  /* ... dozens of color and typography variables ... */
}

.button--primary {
  background: linear-gradient(45deg, #1998ff, #ff5a02);
}
```

**After:**

```css
/* Only keep truly custom styles not provided by theme */
/* Most sites can completely remove custom.css */
```

### Step 3: Update Configuration

Remove `customCss` from your preset config if you removed all custom CSS:

```typescript
presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: './sidebars.ts',
      },
      // Remove this if you deleted custom.css:
      // theme: {
      //   customCss: './src/css/custom.css',
      // },
    },
  ],
],
```

### Step 4: Refactor Custom Components

Replace custom component implementations with theme components:

**Before:**

```tsx
<section className={styles.hero}>
  <h1>{title}</h1>
  <p>{description}</p>
  <Link to="/docs">Get Started</Link>
</section>
```

**After:**

```tsx
import { HoverkraftHero } from "@theme/hoverscape/HoverkraftHero";

<HoverkraftHero
  title={title}
  description={description}
  actions={[{ label: "Get Started", to: "/docs", variant: "primary" }]}
/>;
```

## From other themes (bootstrap, custom)

Migration from non-classic themes may require more changes:

1. Remove the old theme package (if installed) and add Hoverkraft:

```bash
npm uninstall @docusaurus/theme-bootstrap
npm install @hoverkraft/docusaurus-theme
```

2. Add the Hoverkraft theme in `docusaurus.config.js`:

```js
export default {
  themes: ["@hoverkraft/docusaurus-theme"],
};
```

3. Migrate visual styles into `src/css/custom.css` and swizzle components when you need structural changes.

## Common migration tasks and fixes

### Logo 404s

- Symptom: `/docusaurus-theme/img/logo.svg` 404s after switching to the packaged theme.
- Cause: theme static assets haven't been published or copied into the package `lib/` output. Locally, ensure you ran `npm run build` in the theme package so assets are copied to `lib/`.
- Fix:

  ```bash
  # From the repo root in this workspace
  cd packages/theme && npm run build
  cd ../docs && npm run build # or run `make build` at the repo root
  ```

  When publishing the package, verify `lib/assets/logo.svg` (or `lib/assets/*`) are included in the published package.

### CSS conflicts

- Symptom: your custom styles are overridden by theme styles.
- Fix: use higher specificity, custom properties, or move overrides into `src/css/custom.css`.

### Component incompatibility

- Symptom: swizzled components break or behave differently.
- Fix: update imports to `@theme-original/...` components and adapt CSS class names or markup.

## Recommended migration process

1. Backup and document current site: commit all changes and list customizations.
2. Install Hoverkraft theme and run the development server.
3. Move visual overrides to `src/css/custom.css`.
4. Swizzle components that need structural changes and update them.
5. Run the full site build to verify production assets and static files are served.

## Checklist (short)

- [ ] Backup current repository
- [ ] Install Hoverkraft theme
- [ ] Move CSS overrides to `src/css/custom.css`
- [ ] Swizzle components that need structural changes
- [ ] Build theme package locally if using the workspace
- [ ] Build and test the site

If you want, I can produce a small migration checklist tailored to your current `docusaurus.config.js` (you can paste it here) and highlight exact lines to change.
