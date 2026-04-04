# HMAX Crane Landing - Agent Guidelines

### **Project Overview**
Modern full-stack application featuring a high-performance **Go** backend and a **Remix** frontend powered by **Bun**, deployed to **Fly.io**.

## Agent Index & Project Map

### Core Rules
- **General Overview:** [Self]
- **Frontend Standards:** [./skills/frontend.md](./skills/frontend.md)
- **Backend Patterns:** [./skills/backend.md](./skills/backend.md)
- **Deployment Info:** [./skills/deployment.md](./skills/deployment.md)

### Environment Context
- **Stack:** Go, Remix (React), Bun, SQLite.
- **Hosting:** Fly.io with Persistent Volumes.
- **Language:** All UI strings must use placeholders for i18n. Only define Portuguese (pt-BR) variant.
    - Backend languange is always English (error messages, etc.)

---

### **Core Stack**
* **Backend:** Go (REST API)
* **Frontend:** React + Remix + Tailwind CSS
* **Runtime:** Bun
* **Database:** SQLite (Persistent via Fly Volumes)
* **Infrastructure:** Fly.io

---

### **Project Structure**
* `/backend`: Go source code and API logic.
* `/frontend`: Remix application and UI components.
* `/design`: Key design resources to use as reference for the frontend.
* `Dockerfile`: Multi-stage build for unified deployment.

---

### **Guiding Principles**

* **Decoupled:** Backend and Frontend communicate strictly via REST.
* **Lightweight:** Minimal dependencies; prioritize standard library and native Bun performance.
* **Single-Instance:** Optimized for vertical scaling with local SQLite persistence.

### Versioning

- This is a git repository
- NEVER delete .git/ or .gitignore
- DO NOT run git write commands (add, stash, reset, commit, push, ...)

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
