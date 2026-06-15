# syntax=docker/dockerfile:1
# Base pulled from a mirror to avoid Docker Hub anonymous rate limits.
# Override with: --build-arg NODE_IMAGE=node:22-alpine
ARG NODE_IMAGE=mirror.gcr.io/library/node:22-alpine

# ---- build stage -----------------------------------------------------------
FROM ${NODE_IMAGE} AS builder
WORKDIR /app
ENV NODE_ENV=development
# install deps + build the Nitro server output (.output)
COPY . .
RUN npm ci && npm run build

# ---- runtime stage ---------------------------------------------------------
FROM ${NODE_IMAGE} AS runner
WORKDIR /app
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000 \
    NUXT_TELEMETRY_DISABLED=1
# self-contained server bundle only
COPY --from=builder /app/.output ./.output
EXPOSE 3000
USER node
CMD ["node", ".output/server/index.mjs"]
