---
sidebar_position: 3
---

# Configuration

The Hoverkraft theme now inherits from `@docusaurus/theme-classic` and focuses on providing consistent brand styling through CSS and static assets. There are no special `hoverkraft` theme options — the theme is intentionally opinionated about branding.

## Version Compatibility

| Theme Version | Docusaurus Version | React Version | Node Version | Status                        |
| ------------- | ------------------ | ------------- | ------------ | ----------------------------- |
| 1.0.0         | 3.x                | 19.x          | ≥18.0        | ✅ Stable                     |
| 0.1.1         | 3.x                | 19.x          | ≥18.0        | ✅ Stable                     |
| 0.1.0         | 3.x                | 19.x          | ≥18.0        | ⚠️ Package issue - use 0.1.1+ |

### Upgrading

When upgrading the theme:

```bash
# Check current version
npm list @hoverkraft/docusaurus-theme

# Update to latest
npm update @hoverkraft/docusaurus-theme

# Or install specific version
npm install @hoverkraft/docusaurus-theme@1.0.0
```

**Breaking Changes:**

- None in current versions

**Deprecations:**

- `HoverkraftHero.brandedText` prop - use `HoverkraftBrandHighlight` component instead

## How the theme is applied

The theme is activated by listing `@hoverkraft/docusaurus-theme` in the `themes` array of your site configuration. See the [installation guide](./installation#add-theme-to-configuration) for the step-by-step snippet.

Once enabled, the package delegates runtime behavior (color mode, Prism, etc.) to `@docusaurus/theme-classic` and layers Hoverkraft-specific CSS overrides and static assets on top.

## What you can and can't change

- You can use standard Docusaurus configuration (`navbar`, `footer`, `presets`, etc.).
- Visual changes are expected to be done via CSS overrides in your site `src/css/custom.css`.
- Structural or functional changes require swizzling the relevant component (for example `Logo`, `Layout`, or `Footer`).

## Applying custom CSS

Add your visual overrides to `src/css/custom.css` in your site. Example:

```css
/* src/css/custom.css */
.navbar__brand img {
  max-height: 36px;
}
.footer {
  padding-top: 2rem;
}
```

## Swizzling

To modify theme components directly, swizzle them into your site:

```bash
npx docusaurus swizzle @hoverkraft/docusaurus-theme <ComponentName> --typescript
```

After swizzling, you'll have a local copy of the component inside your site (`src/theme/`), and you must maintain compatibility with future theme updates.

## Migration notes

If you are upgrading from a previous version that exposed more customization, follow these steps:

1. Remove legacy `hoverkraft` entries from `themeConfig`.
2. Move any visual overrides into `src/css/custom.css`.
3. If you relied on custom components, swizzle them into your project and adjust as needed.

## Troubleshooting

For publishing or workspace build issues—such as missing assets after installation—follow the [migration guide troubleshooting steps](./migration#logo-404s) so there is a single source of truth for those commands.
