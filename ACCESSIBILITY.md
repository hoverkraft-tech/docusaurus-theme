# Accessibility Features

This Hoverkraft Docusaurus theme follows the [MDN Web Accessibility guidelines](https://developer.mozilla.org/en-US/docs/Web/Accessibility) and implements WCAG 2.1 Level AA standards.

## Color Contrast

All colors used in the theme meet WCAG AA standards for contrast ratios:

### Light Mode Color Palette
- **Primary** (#0073cc): 4.86:1 contrast ratio ✓
- **Secondary** (#cc4400): 4.78:1 contrast ratio ✓
- **Info** (#007bb8): 4.64:1 contrast ratio ✓
- **Success** (#007d38): 5.26:1 contrast ratio ✓
- **Warning** (#8a6b00): 5.02:1 contrast ratio ✓
- **Danger** (#d1242a): 5.25:1 contrast ratio ✓

### Requirements
- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text** (18pt+ or 14pt+ bold): 3:1 minimum contrast ratio
- **UI components**: 3:1 minimum contrast ratio

All theme colors exceed the WCAG AA requirements for normal text.

## Keyboard Navigation

All interactive elements are fully accessible via keyboard:

- **Tab navigation**: Navigate through all interactive elements
- **Enter/Space**: Activate links and buttons
- **Skip to content**: Press Tab on page load to reveal skip link
- **Focus indicators**: All focusable elements have visible 3px outlines

### Focus Management
- Focus indicators use 3px solid outlines with 3px offset
- `:focus-visible` pseudo-class for keyboard-only focus states
- Mouse clicks don't show focus rings (better UX)
- Enhanced visibility in both light and dark modes

## Screen Reader Support

### ARIA Labels and Landmarks
- Proper semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<nav>`)
- ARIA landmarks for major page sections
- Descriptive `aria-label` attributes on all links
- `aria-labelledby` for navigation sections and main content
- SVG graphics include proper `role="img"` and `<title>` elements

### Skip Links
- "Skip to main content" link at the top of every page
- Becomes visible on keyboard focus
- Allows screen reader users to bypass navigation

## Motion and Animation

### Respecting User Preferences
The theme respects `prefers-reduced-motion` settings:
- Animations are disabled when user prefers reduced motion
- Transitions are reduced to 0.01ms
- Scroll behavior changes to `auto` (instant)
- Ensures comfortable experience for users with vestibular disorders

### Animations
- Logo hover animations only play when motion is preferred
- Smooth scrolling respects user preferences
- All animations can be disabled system-wide

## High Contrast Mode

The theme adapts to high contrast preferences:
- Darker primary colors in high contrast mode
- Thicker focus outlines (4px instead of 3px)
- Enhanced borders for better element distinction
- Maintains usability for users with low vision

## Typography

### Font Loading
- Fonts use `font-display: swap` to prevent invisible text
- System fonts as fallback for immediate rendering
- Web fonts load asynchronously

### Font Families
- **Body**: Inter, system fonts
- **Monospace**: Roboto Mono, system monospace fonts

### Readability
- Appropriate line heights (1.6 for body text)
- Sufficient spacing between elements
- Clear visual hierarchy

## Responsive Design

The theme is fully responsive and works across all devices:
- Mobile-first approach
- Touch targets meet minimum size requirements (44x44px)
- Viewport meta tag for proper mobile scaling
- Responsive images and layouts

## Print Accessibility

Print styles ensure readable output:
- Removed background images and colors
- Black text for maximum contrast
- Appropriate font sizes (12pt)
- Hidden non-essential elements (skip links)

## Testing Recommendations

### Manual Testing
1. **Keyboard navigation**: Navigate entire site using only keyboard
2. **Screen reader**: Test with NVDA, JAWS, or VoiceOver
3. **Zoom**: Test at 200% zoom level
4. **Color blindness**: Use color blindness simulators
5. **High contrast**: Enable high contrast mode in OS

### Automated Testing Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Pa11y](https://pa11y.org/)

## Browser Support

All accessibility features work in modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Compliance

This theme aims to comply with:
- WCAG 2.1 Level AA
- Section 508
- EN 301 549
- ADA (Americans with Disabilities Act)

## Reporting Issues

If you discover any accessibility issues, please report them via [GitHub Issues](https://github.com/hoverkraft-tech/docusaurus-theme/issues) with:
- Description of the issue
- Steps to reproduce
- Browser and assistive technology used
- Expected vs actual behavior

## Resources

- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Resources](https://webaim.org/resources/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
