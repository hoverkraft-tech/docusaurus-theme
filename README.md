<div align="center">
  <h1>@hoverkraft/docusaurus-theme</h1>
  <p>Strictly opinionated Docusaurus theme that enforces Hoverkraft branding and accessibility standards.</p>
</div>

---

[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## Overview

`@hoverkraft/docusaurus-theme` delivers a production-ready Hoverkraft-branded experience for every Docusaurus documentation project. The theme removes customization levers so that every property stays synchronized with the official Hoverkraft design system, accessibility bar, and editorial tone.

## Feature Highlights

- **Enforced branding**: Colors, typography, spacing, and component styling sourced from the [Hoverkraft Branding Guidelines](https://github.com/hoverkraft-tech/branding).
- **Accessibility-first**: Built to meet WCAG 2.1 Level AA, with detailed practices captured in `ACCESSIBILITY.md`.
- **Responsive layout**: Mobile-first breakpoints and fluid components covering desktop, tablet, and handset experiences.
- **Shared components**: Header, footer, hero, feature grid, buttons, and layout primitives with consistent semantics.
- **Print-friendly defaults**: Print styles remove noise while preserving content hierarchy.

## Documentation

- Public docs site content lives in `packages/docs` and is sourced from `packages/docs/content`.
- Generated static output is emitted to `packages/docs/build` during CI and local testing.
- Component usage and configuration examples are organized under `packages/docs/content/components` and `packages/docs/content/configuration`.

## Packages

| Package          | Description                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `packages/theme` | Source for the published `@hoverkraft/docusaurus-theme` package (TypeScript, compiled to `lib/`). |
| `packages/docs`  | Docusaurus site showcasing the theme, used for QA and documentation.                              |

## Installation

```bash
npm install @hoverkraft/docusaurus-theme
```

Add the theme to your Docusaurus configuration:

```javascript
// docusaurus.config.js
module.exports = {
  // ...other config
  themes: ["@hoverkraft/docusaurus-theme"],
};
```

The theme is opinionated by design and intentionally exposes no customization knobs.

## Development

Use npm workspaces to manage both packages in the monorepo:

```bash
npm install                              # Install workspace dependencies
npm run lint --workspaces                # Run ESLint across packages
npm run build --workspaces               # Build theme and docs outputs
npm run start --workspace=@hoverkraft/hoverkraft-theme-docs  # Launch the docs site
```

- Run builds before publishing or submitting pull requests to ensure `packages/theme/lib` is up to date.
- Accessibility changes must be mirrored in documentation updates; see `ACCESSIBILITY.md` for the audit checklist.

## Testing

```bash
npm run test --workspaces                # Execute ts-jest suites
npm run test:ci --workspaces             # Serial test run for CI environments
npm run lint --workspaces                # Linting serves as static analysis guardrail
```

- Theme unit tests are located in `packages/theme/src/__tests__`.
- The docs site can be smoke-tested locally with `npm run start --workspace=@hoverkraft/hoverkraft-theme-docs`.

## Releasing

1. Update semantic versioning in `packages/theme/package.json`.
2. Regenerate `packages/theme/lib` via `npm run build --workspaces`.
3. Validate docs output with `npm run build --workspace=@hoverkraft/hoverkraft-theme-docs` when content changes.
4. Publish the theme package via your chosen registry workflow (GitHub Actions or manual `npm publish`).

## Contributing

Please review [`CONTRIBUTING.md`](CONTRIBUTING.md) for accessibility requirements, review expectations, and code of conduct.

## Support

Questions or issues? Open an issue in the [GitHub repository](https://github.com/hoverkraft-tech/docusaurus-theme) or start a discussion.

## License

MIT License — see [LICENSE](LICENSE) for details.
