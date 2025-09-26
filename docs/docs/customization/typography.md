---
sidebar_position: 2
---

# Typography

Customize the typography and font system of the Hoverkraft Docusaurus theme.

## Default Typography

The Hoverkraft theme uses a carefully selected typography stack:

### Font Families

```css
/* Base font family */
--ifm-font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 
                        'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 
                        'Cantarell', sans-serif;

/* Monospace font family */
--ifm-font-family-monospace: 'JetBrains Mono', 'Fira Code', 'Consolas', 
                             'Monaco', 'Courier New', monospace;
```

### Font Sizes

The theme uses a modular scale for consistent typography:

| Element | Size | CSS Variable |
|---------|------|--------------|
| Body text | 16px | `--ifm-font-size-base` |
| Small text | 14px | `--ifm-font-size-small` |
| Large text | 18px | `--ifm-font-size-large` |
| H1 | 32px | `--ifm-h1-font-size` |
| H2 | 24px | `--ifm-h2-font-size` |
| H3 | 20px | `--ifm-h3-font-size` |

## Customizing Typography

### Using Web Fonts

Add custom web fonts to your site:

```css title="src/css/custom.css"
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Override font family */
:root {
  --ifm-font-family-base: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Self-Hosted Fonts

Host fonts locally for better performance:

```css title="src/css/custom.css"
/* Define font faces */
@font-face {
  font-family: 'CustomSans';
  src: url('/fonts/CustomSans-Regular.woff2') format('woff2'),
       url('/fonts/CustomSans-Regular.woff') format('woff');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'CustomSans';
  src: url('/fonts/CustomSans-Bold.woff2') format('woff2'),
       url('/fonts/CustomSans-Bold.woff') format('woff');
  font-weight: 700;
  font-display: swap;
}

/* Apply custom font */
:root {
  --ifm-font-family-base: 'CustomSans', sans-serif;
}
```

### Font Size Customization

Adjust the typography scale:

```css title="src/css/custom.css"
:root {
  /* Increase base font size */
  --ifm-font-size-base: 18px;
  
  /* Adjust heading sizes */
  --ifm-h1-font-size: 2.5rem;
  --ifm-h2-font-size: 2rem;
  --ifm-h3-font-size: 1.5rem;
  --ifm-h4-font-size: 1.25rem;
  --ifm-h5-font-size: 1.125rem;
  --ifm-h6-font-size: 1rem;
}
```

## Advanced Typography Features

### Font Loading Optimization

Optimize font loading performance:

```css title="src/css/custom.css"
/* Preload critical fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

/* Font display strategy */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap; /* Improve loading performance */
}
```

### Responsive Typography

Create responsive font sizes:

```css title="src/css/custom.css"
/* Base sizes */
:root {
  --ifm-font-size-base: 16px;
  --ifm-h1-font-size: 2rem;
}

/* Larger screens */
@media (min-width: 768px) {
  :root {
    --ifm-font-size-base: 18px;
    --ifm-h1-font-size: 2.5rem;
  }
}

/* Extra large screens */
@media (min-width: 1200px) {
  :root {
    --ifm-font-size-base: 20px;
    --ifm-h1-font-size: 3rem;
  }
}
```

### Custom Font Weights

Define specific font weights for different elements:

```css title="src/css/custom.css"
:root {
  /* Font weight scale */
  --ifm-font-weight-light: 300;
  --ifm-font-weight-normal: 400;
  --ifm-font-weight-semibold: 500;
  --ifm-font-weight-bold: 600;
  --ifm-font-weight-bolder: 700;
}

/* Apply to specific elements */
h1, h2, h3 {
  font-weight: var(--ifm-font-weight-bold);
}

.navbar__title {
  font-weight: var(--ifm-font-weight-bolder);
}

.menu__link {
  font-weight: var(--ifm-font-weight-semibold);
}
```

## Typography for Different Content Types

### Code and Technical Content

Customize code typography:

```css title="src/css/custom.css"
/* Code blocks */
.theme-code-block {
  --ifm-font-family-monospace: 'Fira Code', 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
}

/* Inline code */
code {
  font-family: var(--ifm-font-family-monospace);
  font-size: 0.9em;
  background-color: var(--ifm-color-emphasis-100);
  padding: 0.2em 0.4em;
  border-radius: 0.25em;
}
```

### Documentation Content

Optimize typography for documentation:

```css title="src/css/custom.css"
/* Article content */
.theme-doc-markdown {
  line-height: 1.7;
  font-size: 16px;
}

/* Improve readability */
.theme-doc-markdown p {
  margin-bottom: 1.2em;
}

.theme-doc-markdown ul, 
.theme-doc-markdown ol {
  padding-left: 1.5em;
}

.theme-doc-markdown li {
  margin-bottom: 0.5em;
}
```

### Blog Content

Style blog posts differently:

```css title="src/css/custom.css"
/* Blog post typography */
.blog-wrapper article {
  font-size: 18px;
  line-height: 1.8;
}

.blog-wrapper h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.blog-wrapper h2 {
  font-size: 1.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}
```

## Accessibility Considerations

### Font Size and Readability

Ensure text is readable for all users:

```css title="src/css/custom.css"
/* Minimum font sizes */
:root {
  --ifm-font-size-base: max(16px, 1rem); /* Never smaller than 16px */
}

/* Improve line height for readability */
body {
  line-height: 1.6;
}

/* Ensure sufficient contrast */
.theme-doc-markdown {
  color: var(--ifm-color-content);
}
```

### Responsive Text Scaling

Support user zoom and text scaling:

```css title="src/css/custom.css"
/* Use relative units */
h1 {
  font-size: 2rem; /* Scales with user preferences */
}

/* Avoid fixed pixel values for text */
.content {
  font-size: 1rem; /* Not 16px */
  line-height: 1.5; /* Not 24px */
}
```

## Performance Optimization

### Font Loading Strategy

Optimize font loading for performance:

```html title="static/fonts.html"
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Inter-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

### Font Subsetting

Load only the characters you need:

```css title="src/css/custom.css"
/* Load specific font subsets */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&subset=latin&display=swap');
```

## Common Typography Patterns

### Corporate Style

```css title="src/css/custom.css"
:root {
  --ifm-font-family-base: 'Arial', sans-serif;
  --ifm-font-size-base: 16px;
  --ifm-line-height-base: 1.5;
}

h1, h2, h3 {
  font-weight: 600;
  color: #2c3e50;
}
```

### Modern/Tech Style

```css title="src/css/custom.css"
:root {
  --ifm-font-family-base: 'Inter', sans-serif;
  --ifm-font-size-base: 17px;
  --ifm-line-height-base: 1.6;
}

h1, h2, h3 {
  font-weight: 700;
  letter-spacing: -0.02em;
}
```

### Editorial Style

```css title="src/css/custom.css"
:root {
  --ifm-font-family-base: 'Georgia', serif;
  --ifm-font-size-base: 18px;
  --ifm-line-height-base: 1.7;
}

h1, h2, h3 {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 300;
}
```