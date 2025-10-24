---
sidebar_position: 6
---

# Project Card Component

`HoverkraftProjectCard` reproduces the rich cards used across the Hoverkraft projects directory. It bundles iconography, metadata, tags, and CTA buttons with consistent spacing and hover interactions.

## Layout suggestions

- Wrap multiple cards in a CSS grid (`display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));`).
- Pair with `HoverkraftFeatureList` for a narrative flow: feature explanation → highlighted projects.
- Mix `accent="neutral"` cards with `primary` ones to create visual hierarchy.

## Accessibility

- The component renders semantic markup (`<article>`, `<header>`, `<ul>` for tags).
- Buttons default to `variant="outline"` when no variant is provided—override to emphasize certain actions.
- When using icons without visible text, provide `aria-label` or include hidden text for screen readers.

## Props

| Prop          | Type                     | Required | Default     | Description                                    |
| ------------- | ------------------------ | -------- | ----------- | ---------------------------------------------- |
| `title`       | `ReactNode`              | ✅       | -           | Project name                                   |
| `description` | `ReactNode`              | ✅       | -           | Project description                            |
| `icon`        | `ReactNode`              | ❌       | -           | Icon or emoji displayed in the card header     |
| `titleHref`   | `string`                 | ❌       | -           | External link for title (use with `href` URLs) |
| `titleTo`     | `string`                 | ❌       | -           | Internal route for title (use with site paths) |
| `titleTarget` | `string`                 | ❌       | -           | Link target (e.g., `'_blank'` for new tab)     |
| `titleRel`    | `string`                 | ❌       | -           | Link rel attribute passed to external URLs     |
| `meta`        | `ReactNode`              | ❌       | -           | Metadata (stars, language, version, etc.)      |
| `tags`        | `ReactNode[]`            | ❌       | -           | Tags/labels rendered as capsules               |
| `actions`     | `HoverkraftAction[]`     | ❌       | -           | Call-to-action buttons                         |
| `accent`      | `'primary' \| 'neutral'` | ❌       | `'primary'` | Color accent/highlight treatment               |
| `className`   | `string`                 | ❌       | -           | Extend styling with additional classes         |
| `id`          | `string`                 | ❌       | -           | DOM ID for deep-linking to the card            |

## Import

```tsx
import { HoverkraftProjectCard } from "@hoverkraft/docusaurus-theme/components";
```

## Usage

### Simple Example

```tsx live
<HoverkraftProjectCard
  icon="⚡"
  title="compose-action"
  titleHref="https://github.com/hoverkraft-tech/compose-action"
  meta="⭐ 190 • TypeScript"
  description="GitHub Action that runs docker-compose and cleans up gracefully."
  tags={["github-actions", "docker", "ci"]}
  actions={[
    { label: "View on GitHub", href: "https://github.com/hoverkraft-tech/compose-action" },
    {
      label: "Marketplace",
      href: "https://github.com/marketplace/actions/docker-compose-action",
      variant: "outline",
    },
  ]}
/>
```

```tsx live noInline
const primaryCard = {
  icon: "⚡",
  title: "compose-action",
  titleHref: "https://github.com/hoverkraft-tech/compose-action",
  meta: "Starred 190 | TypeScript",
  description: "GitHub Action that runs docker-compose workflows with graceful clean-up and logs.",
  tags: ["github-actions", "docker", "ci"],
  actions: [
    { label: "View on GitHub", href: "https://github.com/hoverkraft-tech/compose-action" },
    {
      label: "Marketplace",
      href: "https://github.com/marketplace/actions/docker-compose-action",
      variant: "outline",
      target: "_blank",
      rel: "noreferrer",
    },
  ],
};

const neutralCard = {
  icon: "🛰️",
  title: "hoverkraft.dev",
  titleTo: "/",
  meta: "Docs portal",
  description: "Docusaurus theme powering the Hoverkraft developer experience.",
  tags: ["design-system", "docusaurus"],
  accent: "neutral",
  actions: [
    { label: "Docs", to: "/docs/getting-started" },
    { label: "Components", to: "/docs/components" },
  ],
};

render(
  <div
    style={{
      display: "grid",
      gap: "1.5rem",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    }}
  >
    <HoverkraftProjectCard {...primaryCard} />
    <HoverkraftProjectCard {...neutralCard} />
  </div>
);
```
