FROM oven/bun:1-alpine AS base
FROM base AS deps
# 设置工作目录
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# 创建编译环境
FROM base as builder
WORKDIR /app
# 复制src public 目录到工作目录
COPY  . .

COPY  ./next.docker.ts  ./next.config.ts
COPY --from=deps /app/node_modules ./node_modules
RUN bun run build

# 创建运行环境
FROM base as runtime

# 设置工作目录
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

 


EXPOSE 3000
ENV PORT 3000


CMD ["node", "server.js"]
