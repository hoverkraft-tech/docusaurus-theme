# AGENTS.md — agent instructions and operational contract

This file is written for automated coding agents (for example: Copilot coding agents). It exists to provide a concise operational contract and guardrails for agents working in this repository. It is not the canonical source for design or style rules. Those live in the developer documentation linked below.

## Organization-wide guidelines

(required)

- Follow the prioritized shared instructions in [hoverkraft-tech/.github/AGENTS.md](https://github.com/hoverkraft-tech/.github/blob/main/AGENTS.md) before making any change.
- Apply the global engineering guidelines from `ACCESSIBILITY.md`, `CONTRIBUTING.md`, and other root-level guides when modifying UI, documentation, or build tooling.

## Quick Start

This repository contains the Hoverkraft-branded Docusaurus theme and its documentation site. Review these entry points before coding:

- **[Overview](README.md#overview)** — Theme purpose, supported use cases, and positioning within the Hoverkraft design system.
- **[Feature Highlights](README.md#feature-highlights)** — Canonical list of enforced branding capabilities.
- **[Documentation](README.md#documentation)** — Location of end user docs and how they are published.
- **[Development](README.md#development)** — Required toolchain, workspace workflow, lint/test commands, and release expectations.
- **[Contributing](CONTRIBUTING.md)** — Accessibility-first contribution guidelines and review expectations.

## Agent-Specific Development Patterns

### Critical Workflow Knowledge

```bash
npm install                         # Install workspace dependencies
npm run build --workspaces          # Build the theme and docs packages
npm run lint --workspaces           # Run linting across all workspaces
npm run test --workspaces           # Execute unit tests (ts-jest)
npm run start --workspace=@hoverkraft/hoverkraft-theme-docs  # Launch docs for local QA
```

- Prefer `npm` for workspace orchestration. Only switch toolchains when the user explicitly requests it.
- Run `npm run build --workspaces` before submitting changes that impact published assets.

### Code Quality Expectations

- Maintain strict TypeScript types by updating `packages/theme/src` and generated declarations together.
- Keep UI/UX changes accessible: audit color contrast, focus management, and screen reader semantics in tandem (see `ACCESSIBILITY.md`).
- Validate configuration updates with existing tests in `packages/theme/src/__tests__`. Add new Arrange-Act-Assert unit tests for public APIs.
- Do not bypass linting or formatting rules; they are enforced via `eslint.config.mjs`, Prettier, and `ts-dev-tools` presets.

### Documentation Updates

- Mirror any theme changes in `packages/docs/content` and `packages/docs/src` when user-facing behavior changes.
- Update `README.md` and relevant guide pages if interfaces, commands, or outputs change.
- Keep version bumps and changelog notes aligned with the release process defined in `README.md#releasing` once present.
