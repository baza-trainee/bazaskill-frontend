FROM node:18-alpine AS deps
WORKDIR /app

# Install dependencies needed for build
RUN apk add --no-cache libc6-compat python3 make g++

COPY package.json package-lock.json ./
# Install ALL dependencies (including dev dependencies)
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set next telemetry disabled
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Run the build
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

USER nextjs

ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]