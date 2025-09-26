# Introduction

Welcome to the **Hoverkraft Docusaurus Theme** example!

This is a sample documentation site that demonstrates how to use the Hoverkraft theme with Docusaurus.

## Features

The Hoverkraft theme provides:

- 🎨 **Custom Branding**: Hoverkraft color palette and styling
- 📱 **Responsive Design**: Mobile-first approach
- ⚡ **Fast & Lightweight**: Optimized for performance
- 🔧 **Configurable**: Easy to customize colors and components

## Getting Started

To use this theme in your own project:

1. Install the theme:
   ```bash
   npm install @hoverkraft-tech/docusaurus-theme
   ```

2. Add it to your `docusaurus.config.js`:
   ```javascript
   module.exports = {
     themes: ['@hoverkraft-tech/docusaurus-theme'],
     themeConfig: {
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

3. Start your development server:
   ```bash
   npm run start
   ```

That's it! Your documentation site now uses the Hoverkraft theme.