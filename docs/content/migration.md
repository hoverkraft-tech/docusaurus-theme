---
sidebar_position: 7
---

# Migration Guide

Learn how to migrate from other themes to the Hoverkraft Docusaurus theme.

## From @docusaurus/theme-classic

### Overview

The Hoverkraft theme extends the classic theme, so migration is generally straightforward. Most existing configurations will continue to work.

### Configuration Changes

#### Before (Classic Theme)

```javascript title="docusaurus.config.js"
const config = {
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        // footer links
      ],
    },
  },
};
```

#### After (Hoverkraft Theme)

```javascript title="docusaurus.config.js"
const config = {
  // Add Hoverkraft theme
  themes: ['@hoverkraft/docusaurus-theme'],
  
  themeConfig: {
    // Keep existing configuration
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        // footer links
      ],
    },
    
    // Add Hoverkraft configuration
    hoverkraft: {
      colors: {
        primary: '#007acc',
        secondary: '#6c757d',
        accent: '#ff6b35',
      },
    },
  },
};
```

### Custom CSS Updates

Update your custom CSS to work with Hoverkraft styling:

#### Before

```css title="src/css/custom.css"
/* Classic theme customization */
:root {
  --ifm-color-primary: #25c2a0;
}

.navbar {
  background-color: #25c2a0;
}
```

#### After

```css title="src/css/custom.css"
/* Hoverkraft theme customization */
:root {
  /* Use Hoverkraft variables */
  --hk-color-primary: #25c2a0;
  --ifm-color-primary: var(--hk-color-primary);
}

/* Target Hoverkraft components */
.hoverkraft-header {
  background-color: var(--hk-color-primary);
}

/* Keep existing customizations */
.navbar {
  background-color: var(--hk-color-primary);
}
```

### Component Swizzling

If you've swizzled components from the classic theme:

#### Update Imports

```jsx title="src/theme/Layout/index.js"
// Before
import Layout from '@theme-original/Layout';

// After - may need to update for Hoverkraft components
import Layout from '@theme-original/Layout';
import { useThemeConfig } from '@docusaurus/theme-common';
```

#### Check Compatibility

Review swizzled components to ensure they work with Hoverkraft theme styling and structure.

## From Other Themes

### From @docusaurus/theme-bootstrap

Bootstrap theme users will need more significant changes:

#### Remove Bootstrap Theme

```bash
npm uninstall @docusaurus/theme-bootstrap
```

#### Install Hoverkraft Theme

```bash
npm install @hoverkraft/docusaurus-theme
```

#### Update Configuration

```javascript title="docusaurus.config.js"
const config = {
  // Remove bootstrap theme reference
  // themes: ['bootstrap'],
  
  // Add Hoverkraft theme
  themes: ['@hoverkraft/docusaurus-theme'],
  
  themeConfig: {
    // Update bootstrap-specific config to standard Docusaurus config
    hoverkraft: {
      colors: {
        primary: '#007acc',
        secondary: '#6c757d',
        accent: '#ff6b35',
      },
    },
  },
};
```

### From Custom Themes

If migrating from a completely custom theme:

#### Assess Current Functionality

1. **List all custom components** you've built
2. **Identify styling patterns** you want to preserve
3. **Review configuration options** you currently use
4. **Check third-party integrations** for compatibility

#### Migration Strategy

1. **Install Hoverkraft theme** alongside your current theme temporarily
2. **Gradually replace components** one by one
3. **Test each migration step** thoroughly
4. **Remove old theme** once migration is complete

## Common Migration Issues

### CSS Conflicts

**Problem**: Existing CSS conflicts with Hoverkraft styles

**Solution**: Use CSS specificity or rename classes

```css title="src/css/custom.css"
/* Increase specificity for your styles */
.my-component.my-component {
  background-color: #custom-color;
}

/* Or use CSS custom properties */
.my-component {
  background-color: var(--my-custom-color);
}
```

### Layout Differences

**Problem**: Layout structure changes break existing styling

**Solution**: Update selectors to target new Hoverkraft classes

```css title="src/css/custom.css"
/* Before */
.main-wrapper {
  padding: 2rem;
}

/* After */
.hoverkraft-main {
  padding: 2rem;
}
```

### Component Incompatibility

**Problem**: Custom components don't work with new theme

**Solution**: Update component imports and styling

```jsx title="src/components/MyComponent.js"
// Update imports if needed
import { useThemeConfig } from '@docusaurus/theme-common';

export default function MyComponent() {
  const { hoverkraft } = useThemeConfig();
  
  return (
    <div 
      className="my-component"
      style={{ 
        '--primary-color': hoverkraft?.colors?.primary || '#007acc' 
      }}
    >
      {/* Component content */}
    </div>
  );
}
```

## Step-by-Step Migration Process

### Phase 1: Preparation

1. **Backup your current setup**
   ```bash
   git commit -am "Backup before Hoverkraft migration"
   ```

2. **Document current customizations**
   - List all custom CSS files
   - Note swizzled components  
   - Record configuration changes

3. **Test current site thoroughly**
   - Document all functionality
   - Take screenshots for comparison

### Phase 2: Installation

1. **Install Hoverkraft theme**
   ```bash
   npm install @hoverkraft/docusaurus-theme
   ```

2. **Add to configuration**
   ```javascript title="docusaurus.config.js"
   const config = {
     themes: [
       '@hoverkraft/docusaurus-theme',
       // Keep existing themes temporarily
     ],
   };
   ```

3. **Start development server**
   ```bash
   npm start
   ```

### Phase 3: Configuration Migration

1. **Add Hoverkraft configuration**
   ```javascript title="docusaurus.config.js"
   themeConfig: {
     hoverkraft: {
       colors: {
         primary: '#your-primary-color',
         secondary: '#your-secondary-color',
         accent: '#your-accent-color',
       },
     },
   }
   ```

2. **Update CSS variables**
   ```css title="src/css/custom.css"
   :root {
     --hk-color-primary: #your-primary-color;
     --ifm-color-primary: var(--hk-color-primary);
   }
   ```

### Phase 4: Component Migration

1. **Update component styles** gradually
2. **Test each change** individually  
3. **Fix broken functionality** as you find it
4. **Remove old theme dependencies** when fully migrated

### Phase 5: Testing & Cleanup

1. **Comprehensive testing** across all pages
2. **Cross-browser testing** for compatibility
3. **Mobile responsiveness** verification
4. **Remove unused code** and dependencies

## Migration Checklist

### Pre-Migration

- [ ] Document current theme and customizations
- [ ] Backup current codebase
- [ ] Test all current functionality
- [ ] Review Hoverkraft theme documentation

### During Migration

- [ ] Install Hoverkraft theme
- [ ] Add basic configuration
- [ ] Update CSS variables and custom styles
- [ ] Test core functionality (navigation, search, etc.)
- [ ] Migrate custom components
- [ ] Update swizzled components if needed

### Post-Migration

- [ ] Comprehensive testing across all pages
- [ ] Cross-browser compatibility testing
- [ ] Mobile responsiveness verification
- [ ] Performance testing
- [ ] Clean up unused code and dependencies
- [ ] Update documentation

## Getting Help

If you encounter issues during migration:

1. **Check the documentation** for configuration options
2. **Review component documentation** for styling guidance
3. **Look at the example project** for implementation patterns
4. **Open an issue** in the GitHub repository for bugs
5. **Join the community** discussions for support

## Performance Considerations

After migration, monitor:

- **Page load times** - ensure no regressions
- **Bundle sizes** - check for unused dependencies
- **Runtime performance** - test interactive features
- **Accessibility** - verify all features remain accessible