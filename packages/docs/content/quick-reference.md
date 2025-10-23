---
sidebar_position: 9
---

# Quick Reference

A cheat sheet for common tasks and patterns when using the Hoverkraft Docusaurus theme.

## Installation

```bash
# Install the theme
npm install @hoverkraft/docusaurus-theme@latest

# Or with specific version
npm install @hoverkraft/docusaurus-theme@1.0.0
```

## Configuration

### Minimal Configuration

```typescript title="docusaurus.config.ts"
export default {
  // Add the theme
  themes: ['@hoverkraft/docusaurus-theme'],
  
  // You can safely remove:
  // - favicon (theme provides Hoverkraft favicon)
  // - themeConfig.navbar.logo (theme provides Hoverkraft logo)
  // - customCss (if you don't need custom styles)
}
```

### With Preset

```typescript title="docusaurus.config.ts"
export default {
  themes: ['@hoverkraft/docusaurus-theme'],
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        // Remove customCss if you don't need it
        // theme: {
        //   customCss: './src/css/custom.css',
        // },
      },
    ],
  ],
}
```

## Import Patterns

### Components

```tsx
// Hero component
import { HoverkraftHero, HoverkraftBrandHighlight } from '@theme/hoverscape/HoverkraftHero';

// Feature list
import { HoverkraftFeatureList } from '@theme/hoverscape/HoverkraftFeatureList';

// Project card
import { HoverkraftProjectCard } from '@theme/hoverscape/HoverkraftProjectCard';
```

### Types (if needed)

```tsx
import type { HoverkraftHeroProps } from '@hoverkraft/docusaurus-theme';
import type { HoverkraftAction } from '@hoverkraft/docusaurus-theme';
import type { HoverkraftFeatureItem } from '@hoverkraft/docusaurus-theme';
```

### ⚠️ Important: Use `@theme/` Alias

```tsx
// ✅ CORRECT
import { HoverkraftHero } from '@theme/hoverscape/HoverkraftHero';

// ❌ WRONG - Will cause module resolution errors
import { HoverkraftHero } from '@hoverkraft/docusaurus-theme/theme/hoverscape/HoverkraftHero';
```

## Common Props

### Actions (used in Hero and Cards)

```tsx
// Internal link
{ label: 'Get Started', to: '/docs/intro', variant: 'primary' }

// External link
{ label: 'GitHub', href: 'https://github.com/...', variant: 'secondary', target: '_blank' }

// Outline button
{ label: 'Learn More', to: '/about', variant: 'outline' }
```

**Variants:** `'primary'` | `'secondary'` | `'outline'`

### Alignment

```tsx
// Hero and Feature List
align="center"  // or 'left', 'start'

// Feature List specific
align="start"   // or 'center'
```

### Accent Colors

```tsx
// Project Card
accent="primary"   // or 'neutral'
```

### Tone (Hero only)

```tsx
tone="midnight"   // dark background (default)
tone="daylight"   // light background
```

## Component Quick Start

### Hero

```tsx
<HoverkraftHero
  title="Welcome"
  description="Get started in minutes"
  actions={[
    { label: 'Start', to: '/docs', variant: 'primary' }
  ]}
/>
```

### Hero with Brand Highlight

```tsx
<HoverkraftHero
  title={
    <>
      Welcome to <HoverkraftBrandHighlight>Hoverkraft</HoverkraftBrandHighlight>
    </>
  }
  description="Build amazing things"
  actions={[
    { label: 'Start', to: '/docs', variant: 'primary' },
    { label: 'GitHub', href: 'https://...', variant: 'secondary', target: '_blank' }
  ]}
  align="left"
  tone="midnight"
/>
```

### Feature List

```tsx
<HoverkraftFeatureList
  features={[
    {
      icon: '🚀',
      title: 'Fast',
      description: 'Lightning fast builds',
    },
    {
      icon: '🔧',
      title: 'Easy',
      description: 'Simple to use',
    },
  ]}
  align="center"
/>
```

### Project Card

```tsx
<HoverkraftProjectCard
  icon="⚡"
  title="Project Name"
  titleHref="https://github.com/..."
  titleTarget="_blank"
  meta="⭐ 100 • TypeScript"
  description="Project description"
  tags={['tag1', 'tag2']}
  accent="primary"
  actions={[
    { label: 'View', href: 'https://...', variant: 'outline' }
  ]}
/>
```

## Page Templates

### Minimal Homepage

```tsx title="src/pages/index.tsx"
import React from 'react';
import Layout from '@theme/Layout';
import { HoverkraftHero } from '@theme/hoverscape/HoverkraftHero';

export default function Home() {
  return (
    <Layout>
      <HoverkraftHero
        title="My Project"
        description="Build something amazing"
        actions={[{ label: 'Get Started', to: '/docs', variant: 'primary' }]}
      />
    </Layout>
  );
}
```

### Feature Page

```tsx title="src/pages/features.tsx"
import React from 'react';
import Layout from '@theme/Layout';
import { HoverkraftFeatureList } from '@theme/hoverscape/HoverkraftFeatureList';

export default function Features() {
  return (
    <Layout>
      <div style={{ padding: '4rem 0', maxWidth: '1200px', margin: '0 auto' }}>
        <HoverkraftFeatureList
          features={[
            { icon: '🚀', title: 'Fast', description: 'Optimized performance' },
            { icon: '🔒', title: 'Secure', description: 'Built with security in mind' },
          ]}
        />
      </div>
    </Layout>
  );
}
```

## Common Layouts

### Grid for Project Cards

```tsx
<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
  gap: '2rem' 
}}>
  <HoverkraftProjectCard {...card1} />
  <HoverkraftProjectCard {...card2} />
  <HoverkraftProjectCard {...card3} />
</div>
```

### Container with Max Width

```tsx
<div style={{ 
  maxWidth: '1200px', 
  margin: '0 auto', 
  padding: '0 1rem' 
}}>
  {/* Your content */}
</div>
```

### Section with Background

```tsx
<section style={{ 
  padding: '4rem 0', 
  backgroundColor: 'var(--ifm-background-surface-color)' 
}}>
  {/* Your content */}
</section>
```

## Troubleshooting

### Module not found errors

```tsx
// Use @theme/ alias, not package path
import { HoverkraftHero } from '@theme/hoverscape/HoverkraftHero';
```

### Verify installation

```bash
npm list @hoverkraft/docusaurus-theme
ls node_modules/@hoverkraft/docusaurus-theme/lib/
```

### Fresh install

```bash
rm -rf node_modules package-lock.json
npm install
```

## Version Commands

```bash
# Check current version
npm list @hoverkraft/docusaurus-theme

# Check latest available version
npm view @hoverkraft/docusaurus-theme version

# Update to latest
npm update @hoverkraft/docusaurus-theme

# Install specific version
npm install @hoverkraft/docusaurus-theme@1.0.0
```

## CSS Variables (Read-only)

Theme provides these CSS variables, but they're not meant to be customized:

```css
/* Example variables from the theme */
--ifm-color-primary
--ifm-font-family-base
--ifm-background-surface-color
```

If you need custom styling, add it to `src/css/custom.css` with higher specificity.

## Development Workflow

```bash
# Start development server
npm run start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Clear cache (if needed)
npm run clear
```

## Next Steps

- [Installation Guide](./installation) - Detailed setup instructions
- [Component Documentation](./components/hero) - Full component API reference
- [Examples](./examples) - Real-world implementation examples
- [Migration Guide](./migration) - Migrate from other themes
