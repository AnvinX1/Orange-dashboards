# Page Transition Animation System

## Overview

A comprehensive animation system has been implemented throughout the dashboard to provide smooth, elegant page transitions and loading animations. The system uses CSS keyframe animations defined in `globals.css` with carefully orchestrated staggered timing for a polished user experience.

## Animation Types

### 1. **fadeInSlideUp** (Primary Page Transition)
- **Duration:** 0.5s
- **Easing:** ease-out
- **Effect:** Elements fade in while sliding up from below
- **Use Case:** Main page loads, content sections appearing
- **Trigger:** Applied to all dashboard pages on mount

### 2. **fadeOutSlideDown** (Exit Animation)
- **Duration:** 0.3s
- **Easing:** ease-in
- **Effect:** Elements fade out while sliding down
- **Use Case:** Page unload transitions (prepared for future use)

### 3. **scaleIn** (Detail Animations)
- **Duration:** 0.4s
- **Easing:** ease-out
- **Effect:** Elements scale from 95% to 100% while fading in
- **Use Case:** Modal dialogs, popovers, cards appearing

### 4. **slideInFromLeft** (Sidebar Animations)
- **Duration:** 0.4s
- **Easing:** ease-out
- **Effect:** Elements slide in from left while fading in
- **Use Case:** Sidebar navigation, left-aligned content

### 5. **slideInFromRight** (Sidebar Animations)
- **Duration:** 0.4s
- **Easing:** ease-out
- **Effect:** Elements slide in from right while fading in
- **Use Case:** Right panels, notifications, action menus

## Implementation Details

### Keyframe Definitions

All animations are defined in `/app/globals.css` under the `@layer utilities` section:

```css
@keyframes fadeInSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Tailwind Utility Classes

Custom Tailwind animation classes are automatically generated:
- `.animate-fadeInSlideUp`
- `.animate-fadeOutSlideDown`
- `.animate-scaleIn`
- `.animate-slideInFromLeft`
- `.animate-slideInFromRight`

## Application Strategy

### Initial Page Load (DashboardLayout)

When the application first loads, the entire dashboard animates in with:
1. **Layout wrapper:** 0.6s fadeInSlideUp animation
2. **Content area:** 0.7s fadeInSlideUp animation with 0.15s delay

This creates a cascading entrance effect.

### Page Transitions

Each page component uses staggered animations for content discovery:

```jsx
// Page header - immediate
<div style={{ animation: 'fadeInSlideUp 0.5s ease-out' }}>
  <PageHeader ... />
</div>

// Left column - slight delay
<div style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.1s backwards' }}>
  {/* Content */}
</div>

// Right column - more delay
<div style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.2s backwards' }}>
  {/* Content */}
</div>
```

The `backwards` fill mode ensures elements start from their initial state before animation begins.

### Staggered Animation Timing

- **0.0s:** Page header appears
- **0.1s delay:** Left/primary column content appears
- **0.2s delay:** Right/secondary column content appears

This creates a visual priority where the most important content appears first.

## Pages with Animations

All dashboard and sidebar pages have been animated:

**Dashboard Tab Pages:**
- Overview
- Activity
- Manage
- Program & Rewards
- Account Settings
- Reports

**Sidebar Pages:**
- Calendar
- Mail
- Cards
- Users
- Settings

## Component-Level Hooks

### usePageTransition()

Located in `/lib/hooks/usePageTransition.ts`, this hook detects route changes:

```tsx
const { isTransitioning } = usePageTransition();
```

This can be used to disable interactions during transitions or apply additional effects.

## Customization

### Adjusting Animation Timing

To change global animation duration, modify the keyframes in `/app/globals.css`:

```css
@keyframes fadeInSlideUp {
  from { /* Start state */ }
  to { /* End state */ }
}
```

Update the corresponding `.animate-fadeInSlideUp` class:

```css
.animate-fadeInSlideUp {
  animation: fadeInSlideUp 0.7s ease-out; /* Adjust duration */
}
```

### Adding New Animations

1. Define keyframes in `/app/globals.css` under `@layer utilities`
2. Add corresponding utility class
3. Apply to elements using `style={{ animation: '...' }}`

### Per-Page Customization

Edit individual page components in `/components/dashboard/pages/`:

```tsx
<div style={{ animation: 'fadeInSlideUp 0.5s ease-out 0.15s backwards' }}>
  {/* Adjust timing as needed */}
</div>
```

## Performance Considerations

- **GPU Acceleration:** All animations use `transform` and `opacity`, which are GPU-accelerated
- **Smooth Rendering:** Animation durations (0.3-0.7s) are optimized for 60fps displays
- **No Jank:** Animations don't block interactions on modern browsers
- **Mobile Friendly:** Durations are short enough to feel snappy on all devices

## Browser Support

All animations use standard CSS features supported by:
- Chrome/Edge 26+
- Firefox 16+
- Safari 9+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential additions to the animation system:
1. **Exit animations** when navigating away from pages
2. **Hover state animations** on interactive elements
3. **Scroll-triggered animations** for cards appearing on scroll
4. **Skeleton loading animations** during data fetching
5. **Success/error animations** for form submissions
6. **Navigation swipe gestures** on mobile

## Testing Animations

To test animations:

1. Open the dashboard and observe the initial load animation
2. Click through different sidebar pages to see page transitions
3. Open browser DevTools and use the Rendering > Animations inspector
4. Use `prefers-reduced-motion` to verify accessibility support

### Disable Animations for Testing

Add to your testing code:

```css
* {
  animation-duration: 0s !important;
  animation-delay: 0s !important;
}
```

## Accessibility Notes

Current implementation is animation-heavy for a polished UX. For users who prefer reduced motion, consider adding:

```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

And conditionally applying animations based on user preference.

---

**Last Updated:** February 2, 2026
**Animation System Version:** 1.0
