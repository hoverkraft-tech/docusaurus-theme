---
sidebar_position: 6
---

# Feature Grid Component

`HoverkraftFeatureList` renders responsive cards with Hoverkraft typography, spacing, and hover states. Use it to highlight value propositions, roadmap items, or feature summaries.

## Tips

- Use concise titles and keep descriptions under ~120 characters for best line wrapping.
- Combine with `HoverkraftHero` to continue the value proposition narrative directly below the fold.
- Adjust `minColumnWidth` when you need more columns on wide screens.

### Props

| Prop             | Type                      | Required | Default   | Description                                              |
| ---------------- | ------------------------- | -------- | --------- | -------------------------------------------------------- |
| `features`       | `HoverkraftFeatureItem[]` | ✅       | -         | Array of feature items                                   |
| `align`          | `'start' \| 'center'`     | ❌       | `'start'` | Content alignment                                        |
| `minColumnWidth` | `number`                  | ❌       | `260`     | Min width for grid columns (px) used for responsive grid |
| `className`      | `string`                  | ❌       | -         | Extend or customize layout                               |
| `style`          | `CSSProperties`           | ❌       | -         | Custom inline styles                                     |

### Feature Item Structure

Each `HoverkraftFeatureItem` accepts the following fields:

| Field         | Type        | Required | Description                                           |
| ------------- | ----------- | -------- | ----------------------------------------------------- |
| `id`          | `string`    | ❌       | Stable key for the card (optional but recommended)    |
| `icon`        | `ReactNode` | ❌       | Emoji, SVG, or custom React node displayed at the top |
| `eyebrow`     | `string`    | ❌       | Optional label displayed above the title              |
| `title`       | `ReactNode` | ✅       | Required heading content                              |
| `description` | `ReactNode` | ❌       | Supporting paragraph                                  |

## Import

```tsx
import {
  HoverkraftFeatureList,
  type HoverkraftFeatureItem,
} from "@hoverkraft/docusaurus-theme/components";
```

## Usage

## Simple Example

```tsx live
<HoverkraftFeatureList
  features={[
    {
      icon: "🔓",
      title: "Open Source",
      description: "Community-driven development with full transparency.",
    },
    {
      icon: "⚡",
      title: "Fast",
      description: "Optimized for performance and developer experience.",
    },
    {
      icon: "🤝",
      title: "Community",
      description: "Join thousands of developers building the future.",
    },
  ]}
  align="center" // 'start' | 'center'
/>
```

### Center alignment (default spacing)

```tsx live
<HoverkraftFeatureList
  features={[
    {
      icon: "🔧",
      title: "Configurable",
      description: "Tune layout and spacing tokens without dropping into raw CSS.",
    },
    {
      icon: "🧱",
      eyebrow: "Composable",
      title: "Slot in your content",
      description: "Drop in markdown or React components and keep consistent rhythm.",
    },
    {
      icon: "🌓",
      title: "Dark-mode ready",
      description: "Automatic color tokens keep contrast compliant in both themes.",
    },
  ]}
  align="center"
  minColumnWidth={260}
/>
```

### Start alignment with narrower columns

```tsx live noInline
<HoverkraftFeatureList
  features={[
    {
      icon: "🧭",
      eyebrow: "Docs",
      title: "Guided journeys",
      description: "Compose narrative flows with staggered highlight cards.",
    },
    {
      icon: "♻️",
      title: "Reusable",
      description: "Share data across pages and keep your highlights in sync.",
    },
    {
      icon: "🧪",
      title: "Tested",
      description: "Snapshots ensure card spacing and responsive breakpoints stay intact.",
    },
    {
      icon: "🚀",
      title: "Production ready",
      description: "Shipped with sensible defaults, ready to deploy out of the box.",
    },
  ]}
  align="start"
  minColumnWidth={220}
/>
```
