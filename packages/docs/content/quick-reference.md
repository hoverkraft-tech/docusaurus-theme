---
sidebar_position: 9
---

# Quick Reference

Use this page as a navigation map for the Hoverkraft Docusaurus theme documentation. Each link points to the single, canonical source so you never have to reconcile duplicated instructions.

## Task Index

- **Install or verify the theme:** [Installation guide](./installation#installing-the-theme)
- **Add the theme to your config:** [Installation guide](./installation#add-theme-to-configuration)
- **Customize styling or swizzle components:** [Configuration](./configuration)
- **Plan or execute an upgrade:** [Migration guide](./migration)
- **Browse working pages built with the theme:** [Examples gallery](./examples)
- **Deep dive into individual components:** [Component docs](./components/layout)

## Component Directory

| Use case                        | Documentation                             | Notes                                                         |
| ------------------------------- | ----------------------------------------- | ------------------------------------------------------------- |
| Layout shell & global structure | [Layout](./components/layout)             | Inherits classic theme markup; customize via CSS or swizzle   |
| Footer                          | [Footer](./components/footer)             | For structure changes use `npx docusaurus swizzle ... Footer` |
| Navbar logo                     | [Logo](./components/logo)                 | Ships official SVG at `/docusaurus-theme/img/logo.svg`        |
| Hero banners & brand highlights | [Hero](./components/hero)                 | Includes `HoverkraftBrandHighlight` helper and action types   |
| Buttons & CTAs                  | [Button](./components/buttons)            | Reuse styling for internal/external links                     |
| Feature grids                   | [Feature Grid](./components/feature-grid) | Responsive cards with optional eyebrow labels                 |
| Project listings                | [Project Card](./components/project-card) | Supports metadata, tags, and action buttons                   |

## Package Landmarks

| Location                                                              | Purpose                                                                       |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `node_modules/@hoverkraft/docusaurus-theme/lib/index.js`              | Entry point consumed by Docusaurus                                            |
| `node_modules/@hoverkraft/docusaurus-theme/lib/theme/`                | Compiled React components used by the theme                                   |
| `node_modules/@hoverkraft/docusaurus-theme/lib/styles/hoverkraft.css` | Published style sheet that enforces branding                                  |
| `node_modules/@hoverkraft/docusaurus-theme/lib/assets/`               | Static assets (logo, footer icons) copied during `npm run build`              |
| `node_modules/@hoverkraft/docusaurus-theme/lib/test-utils/`           | Utilities mirrored in docs tests; import from package when writing site tests |

## Troubleshooting Index

- **Theme fails to resolve or build:** follow [Build fails after installing theme](./installation#build-fails-after-installing-theme).
- **Static assets 404 (logo, footer icons):** use the commands in [Migration guide → Logo 404s](./migration#logo-404s).
- **TypeScript component errors:** see [Type errors with components](./installation#type-errors-with-components).
- **Legacy customizations still active:** review [Migration checklist](./migration#checklist-short) to remove redundant overrides.

## Release & Versioning Shortcuts

- Check installed version: [`npm list @hoverkraft/docusaurus-theme`](./installation#verifying-installation).
- Discover the latest published release: [`npm view @hoverkraft/docusaurus-theme version`](./installation#pre-migration-checklist).
- Upgrade in place: [`npm update @hoverkraft/docusaurus-theme`](./configuration#upgrading).

## When You Need Examples

- Full landing-page patterns live in the [Examples gallery](./examples#complete-homepage-example).
- Component-level props and usage notes stay in their dedicated pages (see [Component directory](#component-directory)).
- For a concise overview of everything the theme bundles, revisit [Getting Started → What's Included](./getting-started#whats-included).
