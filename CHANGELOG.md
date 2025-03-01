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

### Changed
- Significantly increased the size of all ASCII animations to better fill their containers
- Doubled the size of the TorusKnot geometry in the hero section (from 100x30 to 200x60)
- Increased camera distance and field of view for better perspective on larger animations
- Reduced ASCII resolution from 0.2 to 0.15/0.12 to create larger ASCII characters
- Further scaled up code example background geometries (sphere, torus, torusKnot) by 50%
- Optimized animation parameters for smoother rendering across all sections

### Planned Features

- Dark mode support
- Internationalization (i18n) support
- Additional landing page sections (pricing, FAQ)
- Animation enhancements
- Performance optimizations
- Integration with analytics
- A/B testing framework
