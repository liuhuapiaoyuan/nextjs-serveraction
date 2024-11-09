
FROM  node:20.0.0-alpine as base


FROM base AS deps
# 设置工作目录
WORKDIR /app
COPY package*.json ./
RUN npm install

# 创建编译环境
FROM base as builder
WORKDIR /app
# 复制src public 目录到工作目录
COPY  . .

COPY  ./next.docker.mjs  ./next.config.mjs
# 复制node_modules 到工作目录
COPY --from=deps /app/node_modules ./node_modules
# 编译项目
RUN npm run build

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
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./

 


EXPOSE 3000
ENV PORT 3000


CMD ["node", "server.js"]
