# 盘点 Next.js `Server Actions` 的玩法

```shell

├── 引言
│   ├── 介绍 Server Actions 的概念和重要性
│   └── 概述本文将探讨的几种用法
├── Server Actions 的基本概念
│   ├── 什么是 Server Actions？
│   ├── Server Actions 与传统 API 的区别
│   └── Server Actions 的优势和适用场景
├── Server Actions 的多种用法
│   ├── 在 React Server Component 中使用 Form 表单内嵌使用
│   │   ├── 场景描述
│   │   └── 使用 Server Actions 处理表单提交
│   ├── 在 RSC 中，使用其他客户端组件触发 Server Action
│   │   ├── 场景描述
│   │   └── 通过按钮点击触发 Server Action
│   ├── 在客户端组件中使用 Stateless Form (无状态表单)
│   │   ├── 场景描述
│   │   └── 使用 `action.ts` 文件定义 Server Action
│   ├── 在客户端组件中使用 Stateful Form (有状态表单)
│   │   ├── 场景描述
│   │   └── 使用 `useActionState` 管理 Server Action 的状态
│   ├── 和其他第三方请求库配套使用，比如 `ahooks/useRequest`
│   │   ├── 场景描述
│   │   └── 结合 `useRequest` 处理数据获取和状态管理
│   └── 🧪试验：我们还需要 API Router 吗？
│       ├── 场景描述
│       └── 探讨 Server Actions 是否可以替代传统的 API Router
└── 总结
    ├── 回顾 Server Actions 的几种用法
    ├── 总结 Server Actions 的优势和适用场景
    └── 展望 Server Actions 的未来发展
```
