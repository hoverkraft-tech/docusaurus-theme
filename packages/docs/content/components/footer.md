---
sidebar_position: 2
---

# Footer Component

The Hoverkraft theme provides a footer component with fixed structure and branding. The theme focuses on CSS-driven styling and ships the footer markup with the packaged theme.

## Key points

- The footer is part of the packaged theme and is not exposed as a configurable component via theme options.
- You can change visual appearance by overriding CSS in your site `src/css/custom.css`, or by swizzling the `Footer` component for deeper structural changes.

## Static assets

The theme includes footer assets (icons and SVGs) in its static folder; these are copied to the published `lib/` output during the theme build and served at `/docusaurus-theme/img/`.

## Customization

1. CSS overrides

   Add rules to your site `src/css/custom.css` to tweak colors, spacing, or typography. Target CSS classes such as `.footer`, `.footer__inner`, `.footer__title`, and `.footer__link-item`.

2. Swizzle Footer for structural changes

   ```bash
   npx docusaurus swizzle @hoverkraft/docusaurus-theme Footer --typescript
   ```

   After swizzling you are responsible for keeping the component compatible with future theme updates.

## Accessibility

The footer follows semantic HTML (`<footer>`) and includes keyboard-focusable links. When customizing, ensure you keep link text descriptive and maintain focus visibility for keyboard users.
