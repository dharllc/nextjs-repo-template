# Next.js App with shadcn/ui

This is a modern Next.js application built with the latest technologies.

## Tech Stack

- **Framework**: [Next.js 15.4.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Testing**: [Vitest](https://vitest.dev/)
- **Linting**: [ESLint](https://eslint.org/)
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

To run on a different port:

```bash
npm run dev -- -p 3001
```

### Testing

Run tests with Vitest:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

Run tests with coverage report:

```bash
npm run test:coverage
```

#### Test Coverage

This project uses Vitest with v8 for code coverage. The coverage report shows:
- Statement coverage
- Branch coverage
- Function coverage
- Line coverage

Coverage reports are generated in:
- Console output (text format)
- `coverage/` directory (HTML format - open `coverage/index.html` in a browser)
- `coverage/coverage-final.json` (JSON format for CI/CD)

**Goal**: Maintain 100% test coverage for all new features.

#### Writing Tests

Tests are located in the `/tests` directory, mirroring the `/src` structure:
- API route tests: `/tests/api/`
- Component tests: `/tests/app/`

Keep tests simple and focused:
- Test the happy path
- Test error cases
- Test edge cases only when necessary
- Mock external dependencies

### Building

Build the application for production:

```bash
npm run build
```

Run the production build:

```bash
npm run start
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Adding Components

### shadcn/ui Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for UI components. These are not installed as a dependency but are copied directly into your project, giving you full control over the component code.

To add a new shadcn/ui component:

```bash
npx shadcn@latest add <component-name>
```

For example, to add a button component:

```bash
npx shadcn@latest add button
```

To add multiple components at once:

```bash
npx shadcn@latest add button card dialog
```

### Available Components

Browse all available components at [https://ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components)

Some popular components include:
- `button` - Various button styles and variants
- `card` - Card containers for content
- `dialog` - Modal dialogs
- `form` - Form components with validation
- `input` - Text input fields
- `select` - Dropdown select menus
- `table` - Data tables
- `toast` - Toast notifications

### Using Components

After adding a component, you can import and use it in your application:

```tsx
import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return (
    <Button variant="outline">Click me</Button>
  )
}
```

### Component Location

All shadcn/ui components are added to:
```
src/components/ui/
```

You can customize these components after installation to match your specific needs.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── api/          # API routes
│   │   │   └── healthcheck/
│   │   │       └── route.ts
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   └── ui/          # shadcn/ui components
│   │       └── button.tsx
│   ├── lib/             # Utility functions
│   │   └── utils.ts
│   ├── __tests__/       # Test setup
│   │   └── setup.ts
│   └── __mocks__/       # Test mocks
│       └── styleMock.js
├── tests/               # Test files (mirrors src structure)
│   ├── api/
│   │   └── healthcheck/
│   │       └── route.test.ts
│   ├── app/
│   │   ├── layout.test.tsx
│   │   └── page.test.tsx
│   └── README.md
├── public/              # Static assets
├── components.json      # shadcn/ui configuration
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
└── vitest.config.ts     # Vitest configuration
```

## Development Best Practices

### Before Committing Code

For every new feature or change, ensure you:

1. **Write Tests**: Add corresponding tests in the `/tests` directory
2. **Run Linting**: `npm run lint`
3. **Run Tests**: `npm run test`
4. **Check Coverage**: `npm run test:coverage` (aim for 100%)
5. **Build Successfully**: `npm run build`

### Development Workflow

```bash
# 1. Write your feature
# 2. Write tests for your feature
# 3. Run all checks before committing:
npm run lint
npm run test
npm run test:coverage
npm run build
```

### Quick Quality Check

Run all quality checks with:

```bash
npm run lint && npm run test:coverage && npm run build
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Vitest Documentation](https://vitest.dev)