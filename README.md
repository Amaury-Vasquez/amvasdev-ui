# Amvasdev UI

A comprehensive React component library built with TypeScript, styled with [daisyUI](https://daisyui.com/) and TailwindCSS. Designed for modern React applications with full TypeScript support and customizable theming.

[![npm version](https://img.shields.io/npm/v/amvasdev-ui.svg)](https://www.npmjs.com/package/amvasdev-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

✨ **18+ React Components** - Buttons, inputs, modals, dropdowns, calendars, and more
🎨 **13 Built-in Themes** - Powered by daisyUI's theming system
📘 **Full TypeScript Support** - Complete type definitions for all components
🎯 **TailwindCSS Integration** - Custom `ui:` prefix to prevent style conflicts
♿ **Accessible** - Built with accessibility in mind
📦 **Tree-shakeable** - Import only what you need
🔧 **Customizable** - Extensive props and styling options

## Installation

```bash
npm install amvasdev-ui
```

**Peer Dependencies:**
- React >= 19
- react-dom >= 19

## Quick Start

Import the CSS file at the root of your application, then start using components:

```jsx
import "amvasdev-ui/dist/index.css";
import { Button, Input, Modal } from "amvasdev-ui";

function App() {
  return (
    <div>
      <Button variant="primary" size="lg">
        Click Me
      </Button>
      <Input label="Email" placeholder="Enter your email" />
    </div>
  );
}
```

## Components

### Form Components
- **Button** - Versatile button with variants, sizes, and loading states
- **Input** - Text input with labels, icons, and validation
- **PasswordInput** - Password input with show/hide toggle
- **Select** - Custom dropdown select
- **Checkbox** - Styled checkbox with variants
- **RadioGroup** - Radio button groups
- **DateInput** - Date picker with calendar integration

### Display Components
- **Badge** - Status indicators and labels
- **Modal** - Flexible dialog system
- **ActionModal** - Pre-styled confirmation modals
- **Tooltip** - Contextual tooltips
- **Calendar** - Date picker calendar
- **ColorPalette** - Theme preview and selection

### Navigation Components
- **Dropdown** - Customizable dropdown menus
- **HamburgerMenu** - Mobile-friendly menu
- **Breadcrumbs** - Navigation breadcrumbs

### Interactive Components
- **Combobox** - Searchable select with autocomplete
- **IconButton** - Icon-only buttons with tooltips

### Utility Components
- **Label** - Form labels
- **ErrorLabel** - Error message display

## Hooks

- `useClosableContainer` - Manage closable UI elements
- `useThemeChange` - Dynamic theme switching
- `useEventListener` - Event listener management
- `useOnClickOutside` - Detect outside clicks
- `useToggle` - Boolean state toggle
- `useIsomorphicLayoutEffect` - SSR-safe layout effects

## Theming

Choose from 13 built-in daisyUI themes:

```jsx
import { useThemeChange, THEME_LIST } from "amvasdev-ui";

function ThemeSelector() {
  const { changeTheme } = useThemeChange();

  return (
    <select onChange={(e) => changeTheme(e.target.value)}>
      {THEME_LIST.map((theme) => (
        <option key={theme} value={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
}
```

**Available themes:** emerald, dracula, winter, night, light, halloween, autumn, business, nord, dim, lemonade, sunset, valentine

## Documentation

For comprehensive component documentation, usage examples, and API reference:

📖 [Component Usage Guide](https://github.com/Amaury-Vasquez/amvasdev-ui/blob/main/COMPONENT_USAGE_GUIDE.md)

## TypeScript

All components are fully typed with comprehensive type exports:

```tsx
import type {
  ButtonProps,
  InputProps,
  ModalProps,
  BadgeVariant,
  SelectOption,
} from "amvasdev-ui";
```

## Credits

This library is built with and styled by:

- **[daisyUI](https://daisyui.com/)** - Component classes and theming system
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

Special thanks to the daisyUI team for creating an amazing component library that powers the styling of amvasdev-ui.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Amaury Vasquez](https://github.com/Amaury-Vasquez)

---

Made with ❤️ by [Amaury Vasquez](https://github.com/Amaury-Vasquez)
