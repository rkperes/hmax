# Frontend Architecture

This frontend uses React Router with a structured approach to organize code by concern. The directory structure follows best practices for maintainability and scalability.

## Directory Structure

```
app/
├── routes/                  # File-based routing - keep these thin
│   ├── home.tsx            # Route components, minimal logic
│   ├── about.tsx
│   └── ...
├── services/                # Server-side logic & API calls (*.server.ts)
│   ├── hello.server.ts     # Loaders, actions, business logic
│   ├── auth.server.ts
│   └── ...
├── components/              # Pure UI components (no data fetching)
│   ├── Button.tsx
│   └── ui/
├── hooks/                   # Client-side custom hooks
│   └── useOptimistic.ts
├── utils/                   # Shared utilities
│   ├── http.server.ts      # Server-side fetch wrapper
│   ├── format.ts           # Formatting helpers
│   └── ...
└── types/                   # Shared TypeScript types
    └── api.ts              # API response types
```

## Key Principles

### Routes (`routes/*.tsx`)
- **Keep them thin**: Routes should focus on rendering the UI
- **Delegate data fetching**: Import loaders/services for data logic
- **Minimal imports**: Only import the services you need

```tsx
import { useLoaderData } from "react-router";
import { getSomeData } from "~/services/data.server";

export async function loader() {
  return getSomeData();
}

export default function MyRoute() {
  const data = useLoaderData<typeof loader>();
  return <div>{data}</div>;
}
```

### Services (`services/*.server.ts`)
- **Server-only code**: Use the `.server.ts` suffix (enforced by bundler)
- **API communication**: Handle all fetch calls to the backend
- **Business logic**: Loaders, actions, data transformations
- **Reusable**: Services can be called from multiple routes/actions

```ts
import { apiFetch } from "~/utils/http.server";

export async function getHelloMessage() {
  return apiFetch("/api/hello");
}
```

### Utils (`utils/`)
- `http.server.ts`: Centralized fetch wrapper with error handling
- Other utilities: Date formatting, string helpers, etc.

### Types (`types/`)
- API response types
- Domain types
- Shared interfaces

## Data Fetching Pattern

All data fetching happens in **loaders** (server-side, before rendering):

```tsx
// ✅ Good: Data loaded before component renders
export async function loader() {
  const data = await getHelloMessage();
  return { message: data.message };
}

export default function Home() {
  const { message } = useLoaderData<typeof loader>();
  return <p>{message}</p>;
}
```

Avoid client-side fetching with `useEffect`:

```tsx
// ❌ Avoid: Loading state, waterfalls, complexity
useEffect(() => {
  fetch("/api/hello").then(setData);
}, []);
```

## Environment Variables

Configure the API URL via environment variables:

```sh
# .env
API_URL=http://localhost:8080
```

The `http.server.ts` utility will use `API_URL` or default to `http://localhost:8080`.

## File Naming

- `*.server.ts` - Server-only code (loaders, actions, services)
- `*.tsx` - React components
- `*.ts` - Utilities, types, helpers
