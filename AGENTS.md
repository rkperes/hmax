# HMAX Crane Landing - Agent Guidelines

## Build & Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run type checking in watch mode
- `npm run lint` - Run ESLint and Prettier checks
- `npm run format` - Format code with Prettier

## Code Style Guidelines

### Versioning
- This is a git repository
- NEVER delete .git/ or .gitignore
- DO NOT run git commands

### TypeScript & Svelte

- Use TypeScript with strict mode enabled
- All Svelte components must have `lang="ts"` in script tags
- Follow Svelte 5 composition patterns with runes
- Use `onMount` for side effects and DOM interactions

### Styling & CSS

- Use Tailwind CSS for all styling
- Custom CSS goes in `app.css` with `@layer` directives
- Prefer utility classes over custom CSS
- Use semantic HTML5 elements

### Imports & Structure

- Import Svelte modules first: `import { onMount } from 'svelte'`
- Then third-party libraries, then relative imports
- Use absolute imports where possible
- Keep components in `src/routes/` following SvelteKit conventions

### Naming Conventions

- Components: PascalCase (e.g., `HeroSection.svelte`)
- Variables: camelCase with descriptive names
- CSS classes: kebab-case for custom classes
- Use Portuguese for UI text and content

### Error Handling

- Use try-catch blocks for async operations
- Implement proper loading states
- Handle edge cases in data fetching
- Use TypeScript strict mode for type safety
