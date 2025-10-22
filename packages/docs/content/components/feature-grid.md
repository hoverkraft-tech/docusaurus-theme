---
sidebar_position: 6
---

# Feature Grid Component

`HoverkraftFeatureList` renders responsive cards with Hoverkraft typography, spacing, and hover states. Use it to highlight value propositions, roadmap items, or feature summaries.

## Usage

```tsx title="src/components/FeatureHighlights.tsx"
import {
  HoverkraftFeatureList,
  type HoverkraftFeatureItem,
} from "@hoverkraft/docusaurus-theme/components";

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

### Props

| Prop                  | Type                       | Description                                                         |
| --------------------- | -------------------------- | ------------------------------------------------------------------- |
| `features`            | `HoverkraftFeatureItem[]`  | Card definitions.                                                   |
| `align`               | `'start' \| 'center'`      | Optional grid alignment. Defaults to `start`.                       |
| `minColumnWidth`      | `number`                   | CSS min width (px) used for the responsive grid. Defaults to `260`. |
| `className` / `style` | `string` / `CSSProperties` | Extend or customize layout.                                         |

Each `HoverkraftFeatureItem` accepts the following fields:

- `id` – stable key for the card (optional but recommended)
- `icon` – emoji, SVG, or custom React node displayed at the top
- `eyebrow` – optional label displayed above the title
- `title` – required heading content
- `description` – supporting paragraph

## Tips

- Use concise titles and keep descriptions under ~120 characters for best line wrapping.
- Combine with `HoverkraftHero` to continue the value proposition narrative directly below the fold.
- Adjust `minColumnWidth` when you need more columns on wide screens.
