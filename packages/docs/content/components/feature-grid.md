---
sidebar_position: 6
---

# Feature Grid Component

`HoverkraftFeatureList` renders responsive cards with Hoverkraft typography, spacing, and hover states. Use it to highlight value propositions, roadmap items, or feature summaries.

## Import

```tsx
import {
  HoverkraftFeatureList,
  type HoverkraftFeatureItem,
} from "@theme/hoverscape/HoverkraftFeatureList";
```

**Note:** Use the `@theme/` alias for importing components. Do NOT use `@hoverkraft/docusaurus-theme/theme/hoverscape/...` as this will cause module resolution errors.

## Usage

```tsx title="src/components/FeatureHighlights.tsx"
import {
  HoverkraftFeatureList,
  type HoverkraftFeatureItem,
} from "@theme/hoverscape/HoverkraftFeatureList";

const features: HoverkraftFeatureItem[] = [
  {
    id: "ops",
    icon: "⚙️",
    eyebrow: "Operations",
    title: "Deploy with confidence",
    description:
      "CI/CD blueprints, IaC modules, and observability defaults aligned with Hoverkraft best-practices.",
  },
  {
    id: "design",
    icon: "🎨",
    title: "Design system",
    description:
      "Polished typography, spacing tokens, and accessible color palettes ready to remix.",
  },
  {
    id: "community",
    icon: "🤝",
    title: "Community first",
    description: "Join maintainers and contributors building the Hoverkraft ecosystem together.",
  },
];

<HoverkraftFeatureList features={features} align="center" minColumnWidth={280} />;
```

## Simple Example

```tsx
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

## Tips

- Use concise titles and keep descriptions under ~120 characters for best line wrapping.
- Combine with `HoverkraftHero` to continue the value proposition narrative directly below the fold.
- Adjust `minColumnWidth` when you need more columns on wide screens.
