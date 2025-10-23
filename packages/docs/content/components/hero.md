---
sidebar_position: 4
---

# Hero Component

The Hoverkraft theme ships a `HoverkraftHero` component that encapsulates the branded hero patterns used on the docs and public portal home pages. It combines headline, description, call-to-action buttons, and an optional supporting visual in a responsive layout.

## When to use it

- Landing pages (documentation home, product overviews, release microsites)
- Section headers that require strong Hoverkraft branding
- Situations where you want theme-consistent CTAs without hand-rolling markup

## Import

```tsx
import { HoverkraftHero, HoverkraftBrandHighlight } from '@theme/hoverscape/HoverkraftHero';
```

**Note:** Use the `@theme/` alias for importing components. Do NOT use `@hoverkraft/docusaurus-theme/theme/hoverscape/...` as this will cause module resolution errors.

## Basic usage

```tsx title="src/pages/index.tsx"
import {
  HoverkraftHero,
  HoverkraftBrandHighlight,
  type HoverkraftAction,
} from "@theme/hoverscape/HoverkraftHero";

const actions: HoverkraftAction[] = [
  { label: "Start building", to: "/docs/getting-started", variant: "primary" },
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

## Advanced Usage with Branded Text and Supporting Visual

```tsx
<HoverkraftHero
  title={
    <>
      Welcome to <HoverkraftBrandHighlight>Your Project</HoverkraftBrandHighlight>
    </>
  }
  description="Your project description here."
  supportingVisual={
    <img src="/img/hero.png" alt="Hero" style={{ maxWidth: '100%' }} />
  }
  actions={[
    { label: 'Get Started', to: '/docs/intro', variant: 'primary' },
    { label: 'View on GitHub', href: 'https://github.com/your-org/your-repo', variant: 'secondary', target: '_blank' },
  ]}
  align="left"  // 'left' | 'center'
  tone="midnight"  // 'midnight' | 'daylight'
/>
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `ReactNode` | ✅ | - | Main heading text |
| `description` | `ReactNode` | ❌ | - | Subheading text |
| `eyebrow` | `string` | ❌ | - | Small text above title |
| `brandedText` | `ReactNode` | ❌ | - | Deprecated: use `HoverkraftBrandHighlight` in title |
| `supportingVisual` | `ReactNode` | ❌ | - | Image or graphic to display |
| `actions` | `HoverkraftAction[]` | ❌ | - | Call-to-action buttons |
| `align` | `'left' \| 'center'` | ❌ | `'left'` | Text alignment and grid alignment |
| `tone` | `'midnight' \| 'daylight'` | ❌ | `'midnight'` | Color scheme (dark or light background) |
| `id` | `string` | ❌ | - | Optional DOM ID for deep-linking |
| `className` | `string` | ❌ | - | Extend styling with additional classes |

### Action Object Structure

Each action in the `actions` array has the following structure:

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | ✅ | Button text |
| `to` | `string` | ❌ | Internal route (use for site navigation) |
| `href` | `string` | ❌ | External URL (use for external links) |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | ❌ | Button style variant |
| `target` | `string` | ❌ | Link target (e.g., `'_blank'` for new tab) |

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
