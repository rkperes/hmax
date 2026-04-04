# ── Stage 1: Build Go backend ────────────────────────────────────────────────
FROM golang:1.23-alpine AS go-builder

WORKDIR /app/backend
COPY backend/go.mod backend/go.sum ./
RUN go mod download

COPY backend/ ./
RUN CGO_ENABLED=0 GOOS=linux go build -o server .


# ── Stage 2: Build Remix/Bun frontend ────────────────────────────────────────
FROM oven/bun:1 AS bun-builder

WORKDIR /app/frontend
COPY frontend/package.json frontend/bun.lock ./
RUN bun install --frozen-lockfile

COPY frontend/ ./
RUN bun run build


# ── Stage 3: Final runtime image ─────────────────────────────────────────────
FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

# copy bun from build stage
COPY --from=bun-builder /usr/local/bin/bun /usr/local/bin/bun

WORKDIR /app

# Copy Go binary
COPY --from=go-builder /app/backend/server ./backend/server

# Copy built Remix app
COPY --from=bun-builder /app/frontend/build ./frontend/build
COPY --from=bun-builder /app/frontend/package.json ./frontend/package.json
COPY --from=bun-builder /app/frontend/node_modules ./frontend/node_modules

EXPOSE 3000
