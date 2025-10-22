---
sidebar_position: 7
---

# Project Card Component

`HoverkraftProjectCard` reproduces the rich cards used across the Hoverkraft projects directory. It bundles iconography, metadata, tags, and CTA buttons with consistent spacing and hover interactions.

## Usage

```tsx title="src/components/FeaturedProjects.tsx"
import { HoverkraftProjectCard } from "@hoverkraft/docusaurus-theme/components";

const card = {
  icon: "⚡",
  title: "compose-action",
  titleHref: "https://github.com/hoverkraft-tech/compose-action",
  meta: "⭐ 190 • TypeScript",
  description: "GitHub Action that runs docker-compose and cleans up gracefully.",
  tags: ["github-actions", "docker", "ci"],
  actions: [
    { label: "View on GitHub", href: "https://github.com/hoverkraft-tech/compose-action" },
    {
      label: "Marketplace",
      href: "https://github.com/marketplace/actions/docker-compose-action",
      variant: "outline",
    },
  ],
};

<HoverkraftProjectCard {...card} />;
```

## Props

| Prop                       | Type                     | Description                                        |
| -------------------------- | ------------------------ | -------------------------------------------------- |
| `icon`                     | `ReactNode`              | Emoji or JSX rendered inside the icon container.   |
| `title`                    | `ReactNode`              | Project name.                                      |
| `titleHref` / `titleTo`    | `string`                 | External (`href`) or internal (`to`) destination.  |
| `titleTarget` / `titleRel` | `string`                 | Passed to the title link when using external URLs. |
| `meta`                     | `ReactNode`              | Supplementary text (stars, language, etc.).        |
| `description`              | `ReactNode`              | Main body copy.                                    |
| `tags`                     | `ReactNode[]`            | Rendered as capsules below the description.        |
| `actions`                  | `HoverkraftAction[]`     | CTA buttons rendered at the bottom.                |
| `accent`                   | `'primary' \| 'neutral'` | Highlight treatment. Defaults to `primary`.        |
| `className` / `id`         | `string`                 | Extend styling or deep-link to the card.           |

## Layout suggestions

- Wrap multiple cards in a CSS grid (`display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));`).
- Pair with `HoverkraftFeatureList` for a narrative flow: feature explanation → highlighted projects.
- Mix `accent="neutral"` cards with `primary` ones to create visual hierarchy.

## Accessibility

- The component renders semantic markup (`<article>`, `<header>`, `<ul>` for tags).
- Buttons default to `variant="outline"` when no variant is provided—override to emphasize certain actions.
- When using icons without visible text, provide `aria-label` or include hidden text for screen readers.
