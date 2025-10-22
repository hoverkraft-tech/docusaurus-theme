---
sidebar_position: 4
---

# Hero Component

The Hoverkraft theme ships a `HoverkraftHero` component that encapsulates the branded hero patterns used on the docs and public portal home pages. It combines headline, description, call-to-action buttons, and an optional supporting visual in a responsive layout.

## When to use it

- Landing pages (documentation home, product overviews, release microsites)
- Section headers that require strong Hoverkraft branding
- Situations where you want theme-consistent CTAs without hand-rolling markup

## Basic usage

```tsx title="src/pages/index.tsx"
import {
  HoverkraftHero,
  HoverkraftBrandHighlight,
  type HoverkraftAction,
} from "@hoverkraft/docusaurus-theme/components";

const actions: HoverkraftAction[] = [
  { label: "Start building", to: "/docs/getting-started" },
  { label: "View components", to: "/docs/components", variant: "secondary" },
  { label: "GitHub", href: "https://github.com/hoverkraft-tech", variant: "outline" },
];

<HoverkraftHero
  eyebrow="Introducing"
  title={
    <>
      Hoverkraft Docusaurus <HoverkraftBrandHighlight>Theme</HoverkraftBrandHighlight>
    </>
  }
  description="Opinionated styling, accessible defaults, and production-ready building blocks."
  actions={actions}
  tone="midnight"
  align="center"
/>;
```

## Props

| Prop               | Type                       | Description                                                                       |
| ------------------ | -------------------------- | --------------------------------------------------------------------------------- |
| `eyebrow`          | `string`                   | Optional headline kicker rendered above the title.                                |
| `title`            | `ReactNode`                | Main heading for the hero.                                                        |
| `description`      | `ReactNode`                | Supporting copy below the title.                                                  |
| `brandedText`      | `ReactNode`                | Highlighted text appended to the title. Legacy prop for quick adoption.           |
| `supportingVisual` | `ReactNode`                | Optional element rendered alongside the hero content (images, code blocks, etc.). |
| `actions`          | `HoverkraftAction[]`       | CTA buttons rendered with Hoverkraft button styling.                              |
| `align`            | `'left' \| 'center'`       | Controls text alignment and grid alignment. Default `left`.                       |
| `tone`             | `'midnight' \| 'daylight'` | Chooses dark or light background treatments. Default `midnight`.                  |
| `id`               | `string`                   | Optional DOM ID for deep-linking.                                                 |
| `className`        | `string`                   | Extend styling with additional classes.                                           |

### Highlight only specific words

Use the `HoverkraftBrandHighlight` helper to wrap statements within a composed title or anywhere else you need to emphasize the Hoverkraft brand copy:

```tsx
<HoverkraftHero
  title={
    <>
      Compose faster with <HoverkraftBrandHighlight>Hoverkraft</HoverkraftBrandHighlight> workflows.
    </>
  }
  description="Spin up branded hero sections in minutes."
  actions={[{ label: "Explore docs", to: "/docs" }]}
/>
```

## Custom visuals

Pass any React node through `supportingVisual` to display media on the right-hand side (or above on smaller viewports):

```tsx
<HoverkraftHero
  title="Scale your docs"
  supportingVisual={<img src="/img/hero-visual.png" alt="Preview of Hoverkraft docs" />}
  actions={[{ label: "View migration guide", to: "/docs/migration" }]}
/>
```

For more granular control over button styles, use the exported `HoverkraftButton` component directly.
