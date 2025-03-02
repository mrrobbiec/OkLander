# Changelog

All notable changes to the SuperForecaster Landing Page project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-03-01

### Added

- Initial release of the SuperForecaster landing page
- Responsive hero section with animated spotlight effect
- Features section with 6 key product features
- Testimonials section with client quotes and ratings
- Call to action section with trial signup and demo scheduling
- Custom Tailwind CSS configuration with brand colors
- TypeScript support with proper type definitions
- Vite build system configuration
- Responsive design for all screen sizes
- Custom utility functions in lib/utils.ts
- Spotlight component for visual enhancement
- CSS grid background patterns
- Custom IBM Plex font integration
- Comprehensive style guide documentation

### Technical

- Set up React 19 with TypeScript
- Configured Tailwind CSS with PostCSS
- Implemented responsive layout using Flexbox and CSS Grid
- Added SVG icons for feature illustrations
- Created reusable UI components
- Optimized for performance with Vite bundling
- Added proper TypeScript configurations
- Ensured cross-browser compatibility

## [Unreleased]

### Added
- ASCII art animation in the hero section using Three.js, replacing the previous lamp effect
- New AsciiAnimation component with a TorusKnot geometry and ASCII rendering
- Improved text visibility with proper text shadows
- Updated navigation menu with smaller, white text buttons
- Added translucent white background on hover for navigation buttons
- Changed ASCII animation text color to blue for better visual appeal
- Centered navigation menu in the header with fixed positioning
- Enhanced OkDash gradient container with screenshot background and transparent-to-black gradient overlay
- Added ASCII animation backgrounds to code example sections, replacing static SVG textures
- Created modular background components for each code example (OkStreamBackground, OkFlowBackground, OkDeployBackground)
- Implemented a reusable CodeBlockBackground component with customizable geometry, colors, and animation speeds
- Added semi-transparent overlays to ensure text readability against animated backgrounds
- Added new OkDash section featuring an embedded video with autoplay and loop functionality
- Implemented TypewriterLogo component for product titles to match branding style
- Added new "What is OkEngine?" section immediately after the hero section with title on the right and content on the left
- Added "Problem vs. Solution" comparison section with two-column layout comparing traditional BI struggles with OkEngine solutions
- Created Value Proposition "Billboard" section with a large headline and four key benefits (Speed, Simplicity, Real-Time ML, Scalability)
- Implemented paper texture background with scan lines overlay for the Value Proposition section
- Integrated NES.css for retro 8-bit style icons throughout the interface
- Replaced SVG icons with NES.css icons in the comparison section, value proposition section, and features section
- Created a reusable Icons component in src/components/icons.tsx with support for different icon sizes and custom classes
- Added new icon types: trophy, star, heart, coin, like, close, caret-right, and github

### Changed
- Significantly increased the size of all ASCII animations to better fill their containers
- Doubled the size of the TorusKnot geometry in the hero section (from 100x30 to 200x60)
- Increased camera distance and field of view for better perspective on larger animations
- Reduced ASCII resolution from 0.2 to 0.15/0.12 to create larger ASCII characters
- Further scaled up code example background geometries (sphere, torus, torusKnot) by 50%
- Optimized animation parameters for smoother rendering across all sections
- Updated code example titles to use TypewriterLogo component for consistent branding
- Removed code block filenames for cleaner presentation
- Made code example backgrounds 100% transparent to better showcase background animations
- Changed default font from IBM Plex Sans to IBM Plex Serif for all body text to enhance readability and visual appeal

### Planned Features

- Dark mode support
- Internationalization (i18n) support
- Additional landing page sections (pricing, FAQ)
- Animation enhancements
- Performance optimizations
- Integration with analytics
- A/B testing framework
