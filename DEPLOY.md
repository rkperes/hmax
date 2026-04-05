# Fly.io Deployment — Single App, Two Processes

## Architecture

```
Internet
   │
   ▼
[Fly proxy :443]
   │
   ▼
[React Router/Node :3000]  ←── public
   │  (localhost)
   ▼
[Go server :8080]  ←── internal only
```

Both processes run on the same VM. The Go backend is never exposed to the
public internet — only reachable via localhost from the frontend.

---

## Prerequisites

```bash
brew install flyctl       # or: curl -L https://fly.io/install.sh | sh
fly auth login
```

---

## First deploy

Place `Dockerfile` and `fly.toml` at your project root (next to `backend/` and `frontend/`):

```
my-project/
├── Dockerfile     ← here
├── fly.toml       ← here
├── backend/
│   ├── main.go
│   └── go.mod
└── frontend/
    ├── app/
    ├── package.json
    └── bun.lockb
```

Then:

```bash
# 1. Create the app (only once)
fly launch --no-deploy

# 2. Set any secrets your app needs
fly secrets set SESSION_SECRET=... DATABASE_URL=...

# 3. Deploy
fly deploy
```

---

## Subsequent deploys

```bash
fly deploy
```

---

## Go backend requirements

The Go server must:
- Listen on `127.0.0.1:8080` (not `0.0.0.0` — keep it internal)
- Read the port from env if you want flexibility: `os.Getenv("BACKEND_PORT")`

```go
// main.go
log.Fatal(http.ListenAndServe("127.0.0.1:8080", router))
```

## React Router frontend requirements

The frontend runs on Node.js (built with Vite via react-router build). It listens on `0.0.0.0:3000`
so Fly's proxy can reach it. Set `BACKEND_URL=http://localhost:8080` (already in fly.toml [env])
and use it in your loaders:

```ts
// app/utils/api.server.ts
const BACKEND_URL = process.env.BACKEND_URL ?? "http://localhost:8080";

export async function fetchFromAPI(path: string) {
  return fetch(`${BACKEND_URL}${path}`);
}
```

---

## Local Docker testing

Build the image:

```bash
docker build -t hmax /path/to/project/root
```

Run the full app (both backend and frontend):

```bash
docker run --rm -p 3000:3000 hmax
```

The frontend will be at `http://localhost:3000` and will connect to the backend on `localhost:8080` (internal).

Run just the frontend (if backend is running locally on port 8080):

```bash
docker run --rm -p 3000:3000 -e BACKEND_URL=http://localhost:8080 hmax \
  node /app/frontend/node_modules/.bin/react-router-serve /app/frontend/build/server/index.js
```

Run just the backend:

```bash
docker run --rm -p 8080:8080 hmax /app/backend/server
```

---

## Useful commands

```bash
fly logs                  # tail logs from all processes
fly logs --process api    # Go process only
fly logs --process web    # Remix process only
fly ssh console           # shell into the VM
fly status                # machine health
fly scale memory 1024     # bump RAM if needed
```
