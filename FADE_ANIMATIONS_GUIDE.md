# Fade Animations Guide

This guide contains all the fade-in logic extracted from `WHO.html` for easy reuse across other pages.

## CSS Styles

### Required CSS Classes

1. **`.site-title`** - Fades in the site title
   - Starts with `opacity: 0`
   - Add `.fade-in` class to trigger fade
   - Transition: 1.2s cubic-bezier

2. **`.back-link`** - Fades in the back button
   - Starts with `opacity: 0`
   - Add `.fade-in` class to trigger fade
   - Transition: 1s cubic-bezier

3. **`.content-section`** - Fades in and slides up the main content
   - Starts with `opacity: 0` and `translateY(40px)`
   - Add `.loaded` class to trigger fade + slide
   - Transition: 1.2s cubic-bezier

4. **`.fadein-weightlisted`** - Fades in highlighted text (staggered)
   - Starts with `opacity: 0`
   - Add `.visible` class to trigger fade
   - Transition: 1.3s cubic-bezier

### Optional Page Transition Classes

- `.page-exit-slide-left` - Exit animation (slides left)
- `.page-exit-fade` - Exit animation (fades out with scale)
- `.page-enter-slide-right` - Enter animation (slides right)
- `.page-enter-fade` - Enter animation (fades in with scale)

## JavaScript Logic

### Animation Timeline

1. **200ms** - Site title fades in
2. **300ms** - Start fading in weightlisted highlights (staggered: 300ms, 600ms, 900ms...)
3. **550ms** - Back link fades in
4. **600ms** - Content section fades in and slides up

### Required HTML Structure

```html
<body>
    <a href="index.html" class="back-link">← back</a>
    <div class="site-title">WEIGHTLISTED</div>
    <div class="content-section">
        <h1 class="page-title">Your Title</h1>
        <div class="content-text">
            <p>Your content with <span class="highlight fadein-weightlisted">WEIGHTLISTED</span> highlights</p>
        </div>
    </div>
    <script src="fade-animations.js"></script>
</body>
```

## Quick Implementation

### Option 1: Use External Files

1. Link the CSS file:
```html
<link rel="stylesheet" href="fade-animations.css">
```

2. Include the JavaScript file:
```html
<script src="fade-animations.js"></script>
```

### Option 2: Copy Inline

Copy the CSS from `fade-animations.css` into your `<style>` tag and the JavaScript from `fade-animations.js` into a `<script>` tag.

## Customization

### Adjust Timing

Modify the setTimeout delays in the JavaScript:
- Site title: `200` → change to your preferred delay
- Back link: `550` → change to your preferred delay
- Weightlisted highlights: `300 + idx * 300` → adjust base delay and stagger interval
- Content section: `600` → change to your preferred delay

### Adjust Animation Speed

Modify the transition durations in CSS:
- Site title: `1.2s` → change transition duration
- Back link: `1s` → change transition duration
- Content section: `1.2s` → change transition duration
- Weightlisted: `1.3s` → change transition duration

### Adjust Movement Distance

For content section slide-up effect:
- Change `translateY(40px)` to adjust starting position
- Change `translateY(0)` in `.loaded` to adjust end position

## Notes

- All animations use `cubic-bezier(0.4, 0, 0.2, 1)` easing for smooth transitions
- The back button click handler includes exit animations before navigation
- Weightlisted highlights fade in with a staggered effect (300ms between each)
- All selectors check for element existence before adding classes (prevents errors)

