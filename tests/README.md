# Tests Directory

This directory contains all the tests for the application, mirroring the structure of the `src` directory.

## Structure

```
tests/
├── app/              # Tests for app directory components
│   ├── layout.test.tsx
│   └── page.test.tsx
└── api/              # Tests for API routes
    └── healthcheck/
        └── route.test.ts
```

## Running Tests

Run all tests:
```bash
npm run test
```

Run tests with UI:
```bash
npm run test:ui
```

Run tests in watch mode:
```bash
npm run test -- --watch
```

## Writing Tests

- Test files should have the same name as the file they're testing, with `.test.ts` or `.test.tsx` extension
- Tests should be placed in the same relative path as the source file
- Use descriptive test names that explain what is being tested
- Group related tests using `describe` blocks