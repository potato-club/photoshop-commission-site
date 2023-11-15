FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat python3 build-base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build
RUN yarn install --frozen-lockfile --production
RUN rm -rf ./.next/cache

FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV SHOULD_PROFILE=true
ENV SHOULD_TRACE=true

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/server-preload.js ./server-preload.js
COPY .env /var/jenkins_home/.env

USER nextjs

EXPOSE 3000

CMD ["yarn", "start"]