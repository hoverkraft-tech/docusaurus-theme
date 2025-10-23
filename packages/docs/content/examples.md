---
sidebar_position: 8
---

# Examples Gallery

Real-world examples of implementing Hoverkraft theme components.

## Complete Homepage Example

This example shows how to build a complete homepage using all major theme components.

**File:** `src/pages/index.tsx`

```tsx
import React from 'react';
import Layout from '@theme/Layout';
import { HoverkraftHero, HoverkraftBrandHighlight } from '@theme/hoverscape/HoverkraftHero';
import { HoverkraftFeatureList } from '@theme/hoverscape/HoverkraftFeatureList';
import { HoverkraftProjectCard } from '@theme/hoverscape/HoverkraftProjectCard';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HoverkraftHero
        title={<>Welcome to <HoverkraftBrandHighlight>Hoverkraft</HoverkraftBrandHighlight></>}
        description="Your gateway to open-source innovation."
        supportingVisual={<img src="/img/home.png" alt="Platform" />}
        actions={[
          { label: 'Explore Projects', to: '/docs/intro', variant: 'primary' },
          { 
            label: 'View on GitHub', 
            href: 'https://github.com/hoverkraft-tech', 
            variant: 'secondary', 
            target: '_blank' 
          },
        ]}
        align="left"
        tone="midnight"
      />

      {/* Features Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--ifm-background-surface-color)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
            Why Choose Hoverkraft?
          </h2>
          <HoverkraftFeatureList
            features={[
              {
                icon: '🔓',
                title: 'Open Source',
                description: 'Every project is open source and community-driven.',
              },
              {
                icon: '⚡',
                title: 'Developer First',
                description: 'Built by developers, for developers.',
              },
              {
                icon: '🤝',
                title: 'Community',
                description: 'Join our growing community of contributors.',
              },
            ]}
            align="center"
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>
            Featured Projects
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <HoverkraftProjectCard
              icon="⚡"
              title="compose-action"
              titleHref="https://github.com/hoverkraft-tech/compose-action"
              titleTarget="_blank"
              meta="⭐ 190 • TypeScript"
              description="Docker compose GitHub Action for CI/CD workflows."
              tags={['github-actions', 'docker-compose', 'ci']}
              accent="primary"
            />
            <HoverkraftProjectCard
              icon="📚"
              title="docusaurus-theme"
              titleHref="https://github.com/hoverkraft-tech/docusaurus-theme"
              titleTarget="_blank"
              meta="⭐ 45 • TypeScript"
              description="Opinionated Docusaurus theme with Hoverkraft branding."
              tags={['docusaurus', 'theme', 'documentation']}
              accent="neutral"
            />
            <HoverkraftProjectCard
              icon="🚀"
              title="your-project"
              titleTo="/docs/your-project"
              meta="⭐ 500 • TypeScript"
              description="Your amazing project description goes here."
              tags={['typescript', 'framework']}
              accent="primary"
              actions={[
                { label: 'Documentation', to: '/docs', variant: 'outline' },
              ]}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
```

## Minimal Homepage Example

For the simplest possible implementation:

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

## Feature Showcase Page

A dedicated page for showcasing features:

```tsx title="src/pages/features.tsx"
import React from 'react';
import Layout from '@theme/Layout';
import { HoverkraftFeatureList } from '@theme/hoverscape/HoverkraftFeatureList';

export default function Features() {
  const features = [
    {
      id: 'fast',
      icon: '⚡',
      eyebrow: 'Performance',
      title: 'Lightning Fast',
      description: 'Optimized build times and runtime performance for the best developer experience.',
    },
    {
      id: 'accessible',
      icon: '♿',
      eyebrow: 'Accessibility',
      title: 'WCAG Compliant',
      description: 'Built with accessibility in mind, meeting WCAG 2.1 AA standards.',
    },
    {
      id: 'customizable',
      icon: '🎨',
      eyebrow: 'Branding',
      title: 'Consistent Design',
      description: 'Hoverkraft-branded components with consistent styling across all pages.',
    },
    {
      id: 'documented',
      icon: '📚',
      eyebrow: 'Documentation',
      title: 'Well Documented',
      description: 'Comprehensive guides and examples to get you started quickly.',
    },
    {
      id: 'tested',
      icon: '✅',
      eyebrow: 'Quality',
      title: 'Battle Tested',
      description: 'Used in production across multiple Hoverkraft projects.',
    },
    {
      id: 'open-source',
      icon: '🔓',
      eyebrow: 'Community',
      title: 'Open Source',
      description: 'MIT licensed and open for contributions from the community.',
    },
  ];

  return (
    <Layout title="Features" description="All the features of Hoverkraft theme">
      <div style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Features</h1>
          <HoverkraftFeatureList 
            features={features} 
            align="start" 
            minColumnWidth={350} 
          />
        </div>
      </div>
    </Layout>
  );
}
```

## Projects Directory Page

Create a projects directory using project cards:

```tsx title="src/pages/projects.tsx"
import React from 'react';
import Layout from '@theme/Layout';
import { HoverkraftProjectCard } from '@theme/hoverscape/HoverkraftProjectCard';

const projects = [
  {
    icon: '⚡',
    title: 'compose-action',
    titleHref: 'https://github.com/hoverkraft-tech/compose-action',
    titleTarget: '_blank',
    meta: '⭐ 190 • TypeScript',
    description: 'GitHub Action that runs docker-compose for testing and CI/CD.',
    tags: ['github-actions', 'docker', 'ci'],
    accent: 'primary' as const,
    actions: [
      { 
        label: 'GitHub', 
        href: 'https://github.com/hoverkraft-tech/compose-action',
        variant: 'outline' as const
      },
    ],
  },
  {
    icon: '📚',
    title: 'docusaurus-theme',
    titleHref: 'https://github.com/hoverkraft-tech/docusaurus-theme',
    titleTarget: '_blank',
    meta: '⭐ 45 • TypeScript',
    description: 'Opinionated Docusaurus theme with Hoverkraft branding and components.',
    tags: ['docusaurus', 'theme', 'react'],
    accent: 'neutral' as const,
    actions: [
      { 
        label: 'Documentation', 
        to: '/docs/getting-started',
        variant: 'primary' as const
      },
    ],
  },
];

export default function Projects() {
  return (
    <Layout title="Projects" description="Hoverkraft open source projects">
      <div style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Projects</h1>
          <p style={{ textAlign: 'center', fontSize: '1.25rem', marginBottom: '3rem' }}>
            Open source tools and libraries from the Hoverkraft community
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}>
            {projects.map((project) => (
              <HoverkraftProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
```

## Using Multiple Heroes on One Page

You can use multiple hero sections with different tones:

```tsx
<>
  <HoverkraftHero
    eyebrow="Section 1"
    title="Main Hero"
    description="Introduction to your product"
    tone="midnight"
    align="center"
    actions={[{ label: 'Get Started', to: '/docs', variant: 'primary' }]}
  />

  <section style={{ padding: '4rem 0' }}>
    {/* Content */}
  </section>

  <HoverkraftHero
    eyebrow="Section 2"
    title="Secondary Feature"
    description="Highlight another key feature"
    tone="daylight"
    align="left"
    supportingVisual={<img src="/img/feature.png" alt="Feature" />}
  />
</>
```

## Tips for Best Results

1. **Grid Layouts**: Use CSS Grid for project cards with `minmax` for responsive behavior:
   ```css
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
   ```

2. **Color Contrast**: Mix `accent="primary"` and `accent="neutral"` cards for visual hierarchy

3. **Feature Count**: For best layout, use 3 or 6 features in `HoverkraftFeatureList`

4. **Images**: Keep supporting visuals under 500KB for optimal performance

5. **Actions**: Limit to 2-3 action buttons in heroes for better mobile experience

## Integration with Docusaurus Features

The theme components work seamlessly with Docusaurus features:

```tsx
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HoverkraftHero } from '@theme/hoverscape/HoverkraftHero';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout>
      <HoverkraftHero
        title={siteConfig.title}
        description={siteConfig.tagline}
        actions={[
          { label: 'Get Started', to: '/docs/intro', variant: 'primary' }
        ]}
      />
    </Layout>
  );
}
```
