---
sidebar_position: 5
---

# Button Component

`HoverkraftButton` provides a reusable call-to-action component that mirrors the styling found across Hoverkraft surfaces. Use it for links, primary actions, and grouped CTAs.

## Accessibility

- The component preserves focus rings across variants.
- When you pass an icon without visible text, include `ariaLabel` so screen readers announce the CTA.
- External links default to `target="_self"`; set `target="_blank"` and `rel="noopener noreferrer"` when opening new tabs.

## Props

| Prop               | Type                                    | Description                                                 |
| ------------------ | --------------------------------------- | ----------------------------------------------------------- |
| `label`            | `ReactNode`                             | Button text (ignored when `children` provided).             |
| `icon`             | `ReactNode`                             | Optional element rendered before the label.                 |
| `variant`          | `'primary' \| 'secondary' \| 'outline'` | Theme color treatment. Defaults to `primary`.               |
| `size`             | `'md' \| 'lg'`                          | Padding preset. Defaults to `md`.                           |
| `to`               | `string`                                | Internal navigation (uses Docusaurus `<Link />`).           |
| `href`             | `string`                                | External navigation (renders `<a>`).                        |
| `target` / `rel`   | `string`                                | Passed to the rendered link for external navigation.        |
| `ariaLabel`        | `string`                                | Accessible label when the visual content isn't descriptive. |
| `id` / `className` | `string`                                | DOM ID and class for fine-grained styling.                  |

> ℹ️ Provide either `to` or `href`. Passing both throws a TypeScript error.

## Usage

### Basic

```tsx live
<div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
  <HoverkraftButton to="/docs/getting-started" label="Primary" />
  <HoverkraftButton to="/docs/configuration" label="Secondary" variant="secondary" />
  <HoverkraftButton
    href="https://github.com/hoverkraft-tech"
    label="Outline"
    variant="outline"
    target="_blank"
    rel="noreferrer"
  />
</div>
```

### Using custom content

You can render any child nodes by supplying `children`. This is useful when the CTA combines text with icons or badges:

```tsx live
<HoverkraftButton href="https://hoverkraft.cloud" ariaLabel="Open Hoverkraft site">
  <span role="img" aria-hidden>
    🌐
  </span>
  <span>Hoverkraft Cloud</span>
</HoverkraftButton>
```

### Size comparison

```tsx live
<div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
  <HoverkraftButton to="/docs/examples" label="Medium" size="md" />
  <HoverkraftButton to="/docs/migration" label="Large" size="lg" />
</div>
```
