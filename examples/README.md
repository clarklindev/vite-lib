# Component Examples

This directory contains comprehensive examples for all components in the @mankindui/core library.

## Available Examples

- **AccordionExample.tsx** - Collapsible content sections with smooth animations
- **AvatarExample.tsx** - Profile pictures with fallback handling and size variations
- **BadgeExample.tsx** - Status indicators, labels, and notification badges
- **ButtonExample.tsx** - Interactive buttons with various styles and states
- **CalendarExample.tsx** - Date picker with customizable week start options
- **CardExample.tsx** - Flexible content containers with title and content sections
- **CheckboxExample.tsx** - Interactive checkboxes with various states and sizes

## How to Use

Each example file demonstrates:

1. **Basic Usage** - Simple implementation examples
2. **Variations** - Different props and styling options
3. **Real-world Scenarios** - Practical use cases
4. **Code Examples** - Copy-paste ready code snippets
5. **Best Practices** - Recommended patterns and approaches

## Running Examples

To view the examples:

1. Import the example component you want to see
2. Use the `ExampleIndex` component to browse all examples
3. Each example is self-contained and interactive

```tsx
import ExampleIndex from './examples';
import ButtonExample from './examples/ButtonExample';

// View all examples
<ExampleIndex />

// View specific example
<ButtonExample />
```

## Structure

Each example follows this structure:

- **Header** - Component name and description
- **Basic Examples** - Simple usage patterns
- **Variations** - Different props and configurations
- **Real-world Examples** - Practical implementations
- **Usage Examples** - Code snippets and best practices

## Contributing

When adding new component examples:

1. Follow the existing naming convention: `ComponentNameExample.tsx`
2. Include comprehensive examples covering all major use cases
3. Add interactive demos where appropriate
4. Include code snippets for easy copying
5. Update the `examples/index.tsx` file to include the new example
6. Update this README with the new component

## Features Demonstrated

- **Responsive Design** - All examples work on mobile and desktop
- **Dark Mode Support** - Components adapt to light/dark themes
- **Accessibility** - Proper ARIA labels and keyboard navigation
- **Interactive States** - Hover, focus, active, and disabled states
- **Real-world Usage** - Practical implementation patterns
- **Code Examples** - Ready-to-use code snippets