# Development Guidelines for Claude

This document contains important guidelines for Claude when working on this codebase.

## Core Development Principles

### 1. Test-Driven Development

**For every new feature or modification:**
- Write tests FIRST or immediately after implementing the feature
- Tests should be placed in `/tests` directory, mirroring the `/src` structure
- Keep tests simple and focused on functionality
- Aim for 100% test coverage

### 2. Quality Checks Before Completion

**Always run these commands before considering any task complete:**

```bash
npm run lint        # Check code style and quality
npm run test        # Run all tests
npm run test:coverage # Check test coverage (target: 100%)
npm run build       # Ensure the project builds successfully
```

### 3. Code Organization

- **API Routes**: Place in `/src/app/api/[route-name]/route.ts`
- **Components**: Use `/src/components/` for reusable components
- **UI Components**: shadcn components go in `/src/components/ui/`
- **Tests**: Mirror the source structure in `/tests/`

### 4. Testing Guidelines

#### What to Test
- Happy path scenarios
- Error handling
- Edge cases (when relevant)
- API responses and status codes
- Component rendering and interactions

#### Keep Tests Simple
- No need for exhaustive testing
- Focus on core functionality
- Mock external dependencies
- Use descriptive test names

#### Example Test Structure
```typescript
describe('Feature Name', () => {
  it('should handle the happy path', () => {
    // Test implementation
  })
  
  it('should handle errors gracefully', () => {
    // Error case test
  })
})
```

### 5. Adding New Features Checklist

- [ ] Implement the feature
- [ ] Write corresponding tests
- [ ] Run `npm run lint`
- [ ] Run `npm run test`
- [ ] Run `npm run test:coverage` (ensure 100%)
- [ ] Run `npm run build`
- [ ] Update documentation if needed

### 6. Common Commands Reference

```bash
# Development
npm run dev          # Start development server

# Testing
npm run test         # Run tests in watch mode
npm run test:coverage # Run tests with coverage report

# Code Quality
npm run lint         # Run ESLint
npm run build        # Build for production

# Adding Components
npx shadcn@latest add [component-name]  # Add a shadcn component
```

### 7. Important Reminders

- **Never skip tests** - Every feature needs tests
- **Coverage matters** - Maintain 100% test coverage
- **Quality over speed** - Run all checks before marking complete
- **Keep it simple** - Don't overcomplicate tests or implementations

### 8. File Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Tests**: Same name with `.test.ts(x)` extension
- **API Routes**: Always named `route.ts`

## Quick Reference

Before marking any task as complete, ensure:

```bash
✓ Tests written
✓ npm run lint (passes)
✓ npm run test (passes)
✓ npm run test:coverage (100%)
✓ npm run build (succeeds)
```

Remember: A feature without tests is not complete!