# Build + run determinístico con Node 22 (Next.js 16 requiere >=20.9)
FROM node:22-slim AS base
WORKDIR /app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Instalar dependencias
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prefer-offline

# Copiar el resto y buildear
COPY . .
RUN pnpm build

ENV NODE_ENV=production
# next start -H 0.0.0.0 toma el $PORT que inyecta Railway
CMD ["pnpm", "start"]
