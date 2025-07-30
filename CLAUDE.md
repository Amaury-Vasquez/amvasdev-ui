# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **amvasdev-ui**, a React component library built with TypeScript that provides custom UI components styled with daisyUI and TailwindCSS. The library is designed to be consumed as an npm package by React applications.

## Development Commands

### Build and Development
- `npm run build` - Build the library using tsup (creates both CommonJS and ESM formats with TypeScript declarations)
- `npm run storybook` - Start Storybook development server on port 6006 for component development and testing
- `npm run build-storybook` - Build Storybook for production

### Testing
- No test framework is currently configured (`npm test` exits with error)

## Architecture

### Build System
- **tsup** is used for building the library with entry point at `src/index.ts`
- Generates both CommonJS and ESM formats with TypeScript declarations and sourcemaps
- **Storybook** is configured for component development and documentation

### Styling System
- **TailwindCSS** with `ui-` prefix for all classes to avoid conflicts when consumed
- **daisyUI** plugin provides component styling and theming
- Custom animations defined in `tailwind.config.js` for fade, scale, and slide transitions
- Safari-specific variant (`safari-only`) available for browser-specific styling
- Theme system with 14 predefined themes exported from `src/themes.ts`

### Component Architecture
- All components are located in `src/components/` with individual folders
- Each component folder contains the main component file and optional Storybook stories
- Components follow TypeScript patterns with exported props interfaces
- Component variants, sizes, and types are defined as TypeScript enums/unions
- All components are exported through `src/components/index.ts`

### Code Organization
- `src/index.ts` - Main entry point, exports all components, hooks, utilities, and themes
- `src/components/` - All UI components with individual exports
- `src/hooks/` - Custom React hooks (`useClosableContainer`, `useThemeChange`, `useEventListener`, `useOnClickOutside`, `useToggle`, `useIsomorphicLayoutEffect`)
- `src/utilities/` - Utility functions organized by domain (button, input, loader)
- `src/themes.ts` - Theme configuration for daisyUI
- `src/index.css` - Global styles imported by the library

### Dependencies
- **Peer dependencies**: React >=19, react-dom >=19
- **Key dependencies**: date-fns, react-calendar
- **Key dev dependencies**: lucide-react, react-icons, clsx

## Component Development

When working with components:
1. Each component should have its own folder in `src/components/`
2. Component should export props interface and any related types/enums
3. Add component exports to `src/components/index.ts`
4. Create Storybook stories for component documentation and testing
5. Use `ui-` prefixed TailwindCSS classes for styling
6. Follow existing patterns for variants, sizes, and prop interfaces

## Important Notes

- The library includes CSS that must be imported by consuming applications
- TailwindCSS classes are prefixed with `ui-` to prevent conflicts
- Components are built to work with daisyUI themes and styling system
- Storybook is the primary tool for component development and testing