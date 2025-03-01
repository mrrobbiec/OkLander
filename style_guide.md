# SuperForecaster Style Guide

This style guide provides comprehensive guidelines for the visual design and layout of the SuperForecaster application, with a focus on helping front-end developers style the landing page consistently.

## Table of Contents

- [Colour Palette](#colour-palette)
- [Typography](#typography)
- [Layout Structure](#layout-structure)
- [Logo Styling](#logo-styling)
- [Navigation](#navigation)
- [Components](#components)
- [Responsive Design](#responsive-design)
- [Animations](#animations)

## Colour Palette

### Primary Colours

| Colour | Hex Code | Usage |
|--------|----------|-------|
| Dark Blue | `#243040` | Primary background, hamburger menu, feature section background |
| Blue | `#3b82f6` | Accent colour, buttons, links, active tabs |
| Dark Blue (Accent) | `#2563eb` | Hover states, highlights |
| Slate 900 | `#0f172a` | Testimonials section background |
| Slate 950 | `#020617` | Header background, CTA section background |

### Secondary Colours

| Colour | Hex Code | Usage |
|--------|----------|-------|
| White | `#ffffff` | Background, text on dark backgrounds |
| Light Grey | `#f9fafb` | Secondary background, filter sections |
| Medium Grey | `#e5e7eb` | Borders, dividers |
| Dark Grey | `#4b5563` | Secondary text |
| Red | `#ef4444` | Error states, negative values |
| Green | `#10b981` | Success states, positive values |

### Opacity Variants

For text and borders on dark backgrounds, we use opacity variants:

| Variant | Usage |
|---------|-------|
| White with 80% opacity (`text-white/80`) | Secondary text on dark backgrounds |
| Blue with 30% opacity (`border-blue/30`) | Subtle borders on dark backgrounds |
| Blue with 20% opacity (`border-blue/20`) | Very subtle borders on dark backgrounds |
| Dark Blue Accent with 10% opacity (`bg-dark-blue-accent/10`) | Subtle background highlight |
| Dark Blue Accent with 20% opacity (`bg-dark-blue-accent/20`) | Hover state for transparent buttons |

### Chart Colours

For data visualisations, use these colours for consistency:

- Primary data series: `#8884d8` (purple)
- Secondary data series: `#82ca9d` (green)
- Tertiary data series: `#ffc658` (yellow)
- Quaternary data series: `#ff8042` (orange)

## Typography

### Font Families

The application uses IBM Plex fonts for all text:

- **IBM Plex Sans**: Primary font for all UI text, paragraphs, buttons, and labels
- **IBM Plex Serif**: Used for logos and certain headings

```css
font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
```

### Font Sizes

| Element | Size | Weight | Class |
|---------|------|--------|-------|
| Main Heading (h1) | 1.875rem (30px) | 700 | `text-3xl font-bold` |
| Secondary Heading (h2) | 1.5rem (24px) | 700 | `text-2xl font-bold` |
| Tertiary Heading (h3) | Base (16px) | 700 | `font-bold` |
| Body Text | 1rem (16px) | 400 | Default |
| Small Text | 0.875rem (14px) | 400 | `text-sm` |
| Extra Small Text | 0.75rem (12px) | 400 | `text-xs` |

### Text Styling

- Headings should have a bottom margin: `mb-4` (1rem)
- Paragraphs should have a bottom margin: `mb-6` (1.5rem)
- Use `text-gray-600` for secondary text
- Use `font-medium` (500) or `font-semibold` (600) for emphasis without using bold

### Scan Lines

Scan lines are used to create a retro, digital effect in the hero and CTA sections:

```css
/* Dark scan lines */
.scan-lines-dark {
  background-image: repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 0.5px, transparent 0.5px, transparent 3px);
  background-size: 100% 3.5px;
  opacity: 0.7;
  filter: blur(0.2px);
}

/* Light scan lines with animation */
.scan-lines-light {
  background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 0.5px, transparent 0.5px, transparent 7px);
  background-size: 100% 7.5px;
  animation: scanline-animation 8s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  opacity: 0.8;
  filter: blur(0.3px);
}

@keyframes scanline-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 7.5px;
  }
}
```

## Layout Structure

### Main Layout Components

The application follows a specific layout structure:

1. **Paper Back**: Fixed background that contains the navigation menu
2. **Paper Window**: Main scrollable container
3. **Paper Front**: Content container that rotates when the menu is open
4. **Container**: Holds the actual page content

```html
<div id="paper-back">
  <!-- Navigation menu -->
</div>
<div id="paper-window">
  <div id="paper-front">
    <div class="hamburger"><!-- Menu button --></div>
    <div id="container">
      <!-- Main content -->
    </div>
  </div>
</div>
```

### Content Layout

- Use padding of `p-6` (1.5rem) for main content containers
- Use `mb-8` (2rem) for major section spacing
- Use `mb-4` (1rem) for component spacing
- Use `rounded-lg` for container corners
- Add `shadow-md` to elevate important containers

### Grid System

- Use CSS Grid for complex layouts: `grid grid-cols-1 md:grid-cols-2 gap-6`
- For simpler layouts, use Flexbox: `flex items-center justify-between`

## Logo Styling

### Main Logo

The OkDash logo should be styled as follows:

```css
.logo {
  font-family: 'IBM Plex Serif', serif;
  font-size: 36px;
  font-weight: bold;
  color: white; /* When on dark background */
  letter-spacing: -0.05em;
}
```

### Splash Logo

For the splash/landing page, use a larger version:

```css
.splash-logo {
  font-family: 'IBM Plex Serif', serif;
  font-size: 5rem;
  font-weight: 700;
  color: #243040;
  margin-bottom: 1rem;
  letter-spacing: -0.05em;
}
```

### Section Headers

Section headers should include a small coloured bar underneath:

```html
<div class="mb-8">
  <h1 class="text-3xl font-bold mb-1">Section Title</h1>
  <p class="text-gray-600 mb-4">Section description text</p>
  <div class="h-1 w-16 bg-blue-600 mb-6"></div>
</div>
```

## Navigation

### Hamburger Menu

The hamburger menu uses a distinctive paper tilt effect:

- When closed, the main content is displayed normally
- When open, the main content tilts at a 10-degree angle, revealing the menu behind it

#### Hamburger Button

```css
.hamburger {
  position: fixed;
  z-index: 4;
  top: 30px;
  left: 30px;
  width: 30px;
  height: 24px;
  cursor: pointer;
}

.hamburger span,
.hamburger span:before, 
.hamburger span:after {
  position: relative;
  display: block;
  width: 24px;
  height: 2px;
  background-color: #243040;
  border-radius: 2px;
}

.hamburger span:before {
  content: '';
  position: absolute;
  bottom: -10px;
}

.hamburger span:after {
  content: '';
  position: absolute;
  bottom: -20px;
}
```

#### Close Button

```css
.close {
  position: fixed;
  top: 30px;
  left: 30px;
  width: 30px;
  height: 24px;
  cursor: pointer;
  z-index: 5;
}

.close:before, 
.close:after {
  content: '';
  position: absolute;
  display: block;
  width: 24px;
  height: 2px;
  top: 50%;
  background-color: white;
  border-radius: 2px;
}

.close:before {
  transform: translateY(-50%) rotate(45deg);
}

.close:after {
  transform: translateY(-50%) rotate(-45deg);
}
```

### Navigation Menu

#### Header Navigation

The main navigation menu in the header should be styled as follows:

- Centered in the header
- Small, white text buttons
- Translucent white background on hover
- Fixed positioning to prevent movement during logo animation

```css
.navigation-menu {
  display: flex;
  justify-content: center;
}

.navigation-menu-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem; /* text-xs */
  font-weight: 500; /* font-medium */
  color: white;
  height: 1.75rem; /* h-7 */
  padding: 0.25rem 0.5rem; /* py-1 px-2 */
  border-radius: 0.375rem; /* rounded-md */
  transition: background-color 0.2s;
}

.navigation-menu-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}
```

#### Side Navigation Menu

For the hamburger menu, use the following styling:

```css
#paper-back {
  width: 100%;
  height: 100vh;
  background-color: #243040;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 20px 20px;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.3);
}

#paper-back nav {
  padding: 120px 34px;
}

#paper-back nav a {
  display: block;
  margin-bottom: 25px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-family: 'IBM Plex Sans', sans-serif;
}
```

### Tab Navigation

For in-page tab navigation, use this style:

```html
<div class="flex flex-wrap border-b border-gray-300 mb-6">
  <button 
    class="pb-2 px-4 font-bold border-b-2 border-blue-600 text-blue-600"
  >
    <div class="flex items-center">
      <Icon size={16} class="mr-2" />
      Active Tab
    </div>
  </button>
  <button 
    class="pb-2 px-4 font-bold text-gray-500"
  >
    <div class="flex items-center">
      <Icon size={16} class="mr-2" />
      Inactive Tab
    </div>
  </button>
</div>
```

## Components

### Cards

Use cards for containing related information:

```html
<div class="p-4 border border-gray-200 rounded-lg">
  <h3 class="font-bold mb-2">Card Title</h3>
  <div class="h-48">
    <!-- Card content -->
  </div>
</div>
```

### Buttons

#### Primary Button

```html
<button class="px-3 py-1 text-sm rounded border bg-blue-600 text-white border-blue-600">
  Button Text
</button>
```

#### Secondary Button

```html
<button class="px-3 py-1 text-sm rounded border bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
  Button Text
</button>
```

### Filter Sections

Filter sections should be styled as follows:

```html
<div class="mb-6 bg-gray-50 p-4 rounded-lg">
  <h3 class="font-bold mb-2 text-sm uppercase text-gray-600 flex items-center">
    <FilterIcon size={16} class="mr-2" />
    Filter Title
  </h3>
  <div class="flex flex-wrap gap-2 items-center">
    <!-- Filter buttons -->
  </div>
</div>
```

### Data Visualisations

- All charts should be wrapped in a `ResponsiveContainer` with a fixed height
- Use a consistent height of `h-48` (12rem) for charts
- Include proper labels, legends, and tooltips for all charts

```html
<div class="h-48">
  <ResponsiveContainer width="100%" height="100%">
    <!-- Chart component -->
  </ResponsiveContainer>
</div>
```

### OkDash Gradient Container

The OkDash gradient container is used in the navigation menu to showcase the product with a screenshot background and gradient overlay:

```jsx
<a
  className="relative flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md overflow-hidden"
  href="/"
  style={{
    backgroundImage: `url('/okdash_screenshot.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
  
  {/* Content on top of the gradient */}
  <div className="relative z-10">
    <Icons.logo className="h-6 w-6 text-white" />
    <div className="mb-2 mt-4 text-lg font-medium text-white">
      OkDash
    </div>
    <p className="text-sm leading-tight text-white/90">
      Data journalism as business intelligence. Agentic BI is here.
    </p>
  </div>
</a>
```

Key styling elements:
- Background image with `contain` size to ensure the entire image is visible
- Transparent-to-black gradient overlay to ensure text readability
- Content positioned at the bottom with proper z-index to appear above the gradient
- White text for maximum contrast against the dark gradient

## Responsive Design

### Breakpoints

| Breakpoint | Width | Class Prefix |
|------------|-------|--------------|
| Mobile | < 768px | (default) |
| Tablet/Desktop | ≥ 768px | `md:` |

### Responsive Patterns

- Use single column layouts on mobile: `grid-cols-1`
- Use two column layouts on tablet/desktop: `md:grid-cols-2`
- Adjust font sizes and spacing as needed for smaller screens

## Animations

### Menu Animation

The menu uses a transform animation for the paper tilt effect:

```css
#paper-window.tilt #paper-front {
  transform: rotate(10deg) translateZ(0);
}

#paper-front {
  transform-origin: center 70%;
  transition: all 0.3s ease;
}
```

### Hover Effects

Use subtle hover effects for interactive elements:

- Buttons: `hover:bg-gray-100`
- Links: Change opacity or colour

## Splash Page

The splash/landing page should use this styling:

```css
.splash-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 20px 20px;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.05);
}

.splash-logo {
  font-family: 'IBM Plex Serif', serif;
  font-size: 5rem;
  font-weight: 700;
  color: #243040;
  margin-bottom: 1rem;
  letter-spacing: -0.05em;
}

.splash-subtitle {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #4b5563;
  margin-bottom: 2rem;
}
