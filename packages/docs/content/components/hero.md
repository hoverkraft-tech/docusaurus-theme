---
sidebar_position: 6
---

# Hero Component

The Hoverkraft theme ships a `HoverkraftHero` component that encapsulates the branded hero patterns used on the docs and public portal home pages. It combines headline, description, call-to-action buttons, and an optional supporting visual in a responsive layout.

## When to use it

- Landing pages (documentation home, product overviews, release microsites)
- Section headers that require strong Hoverkraft branding
- Situations where you want theme-consistent CTAs without hand-rolling markup

## Props

| Prop               | Type                       | Required | Default      | Description                                         |
| ------------------ | -------------------------- | -------- | ------------ | --------------------------------------------------- |
| `title`            | `ReactNode`                | ✅       | -            | Main heading text                                   |
| `description`      | `ReactNode`                | ❌       | -            | Subheading text                                     |
| `eyebrow`          | `string`                   | ❌       | -            | Small text above title                              |
| `brandedText`      | `ReactNode`                | ❌       | -            | Deprecated: use `HoverkraftBrandHighlight` in title |
| `supportingVisual` | `ReactNode`                | ❌       | -            | Image or graphic to display                         |
| `actions`          | `HoverkraftAction[]`       | ❌       | -            | Call-to-action buttons                              |
| `align`            | `'left' \| 'center'`       | ❌       | `'left'`     | Text alignment and grid alignment                   |
| `tone`             | `'midnight' \| 'daylight'` | ❌       | `'midnight'` | Color scheme (dark or light background)             |
| `id`               | `string`                   | ❌       | -            | Optional DOM ID for deep-linking                    |
| `className`        | `string`                   | ❌       | -            | Extend styling with additional classes              |

### Action Object Structure

Each action in the `actions` array has the following structure:

| Prop      | Type                                    | Required | Description                                |
| --------- | --------------------------------------- | -------- | ------------------------------------------ |
| `label`   | `string`                                | ✅       | Button text                                |
| `to`      | `string`                                | ❌       | Internal route (use for site navigation)   |
| `href`    | `string`                                | ❌       | External URL (use for external links)      |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | ❌       | Button style variant                       |
| `target`  | `string`                                | ❌       | Link target (e.g., `'_blank'` for new tab) |

## Usage

```tsx
import { HoverkraftHero, HoverkraftBrandHighlight } from "@hoverkraft/docusaurus-theme/components";
```

### Basic

```tsx live
<HoverkraftHero
  eyebrow="Introducing"
  title={
    <>
      Hoverkraft Docusaurus <HoverkraftBrandHighlight>Theme</HoverkraftBrandHighlight>
    </>
  }
  description="Opinionated styling, accessible defaults, and production-ready building blocks."
  actions={[{ label: "Get started", to: "/docs/getting-started", variant: "primary" }]}
/>
```

### Midnight tone (center aligned)

```tsx live noInline
const actions = [
  { label: "Get started", to: "/docs/getting-started", variant: "primary" },
  { label: "Browse components", to: "/docs/components", variant: "secondary" },
  {
    label: "GitHub",
    href: "https://github.com/hoverkraft-tech",
    variant: "outline",
    target: "_blank",
    rel: "noreferrer",
  },
];

const supportingVisual = (
  <div
    style={{
      display: "grid",
      placeItems: "center",
      width: "100%",
      aspectRatio: "4 / 3",
      borderRadius: "1rem",
      background:
        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.25), transparent 55%), linear-gradient(135deg, #1b2735, #090a0f)",
      color: "#fff",
      fontWeight: 600,
      fontSize: "1.15rem",
    }}
    aria-hidden="true"
  >
    Midnight tone
  </div>
);

render(
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
    supportingVisual={supportingVisual}
    id="hero-midnight"
  />
);
```

### Daylight tone (left aligned)

```tsx live noInline
const actions = [
  { label: "See examples", to: "/docs/examples", variant: "primary" },
  { label: "Configuration", to: "/docs/configuration", variant: "secondary" },
];

const supportingVisual = (
  <div
    style={{
      display: "grid",
      placeItems: "center",
      width: "100%",
      aspectRatio: "4 / 3",
      borderRadius: "1rem",
      background:
        "radial-gradient(circle at 60% 30%, rgba(20, 60, 120, 0.15), transparent 55%), linear-gradient(135deg, #f6f8fb, #ffffff)",
      color: "#1c2738",
      fontWeight: 600,
      fontSize: "1.15rem",
    }}
    aria-hidden="true"
  >
    Daylight tone
  </div>
);

render(
  <HoverkraftHero
    eyebrow="Docs ready"
    title={
      <>
        Compose faster with <HoverkraftBrandHighlight>Hoverkraft</HoverkraftBrandHighlight>{" "}
        workflows.
      </>
    }
    description="Ship your documentation homepage with polished CTAs and copy blocks in minutes."
    actions={actions}
    tone="daylight"
    align="left"
    supportingVisual={supportingVisual}
    id="hero-daylight"
  />
);
```
