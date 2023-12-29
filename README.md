# ⚛️ React Template

用于启动前端管理类型项目的模版，开箱即用。本项目的主要目的是：

1. 统一技术选型，减少团队中不同项目之间的技术栈不一致的切换成本。
2. 内置路由、状态管理、Dark Mode、Fetch 请求、权限等基础功能，可直接使用。节省每个系统都需要的基础功能的开发时间。
3. 只需关注于项目功能开发本身，而不是周边基础功能的开发和配置。

## 开始

### 本地开发

> 开发环境要求 Node.js 18+（Vite）

```bash
npm install
```

```bash
npm run dev
```

### 使用 Docker

todo..

## 技术栈

- React
- React Router
- Vite
- Antd
- Typescript
- TailwindCSS
- ESLint、Prettier

## Q&A

### Q: index.css 显示 tailwindcss Unknown 警告

A: 在 vscode 中改变文件默认类型。打开 [src/index.css](./src/index.css)，cmd + shift + p， 输入 change language mode，选 Tailwind CSS 即可。vscode user settings.json 中添加：

```json
"files.associations": {
  "*.css": "tailwindcss"
}
```

### Q: variable is assigned a value but never used

A: 有时候，你不得不写一些并不会使用的变量，例如：

```tsx
// 如果你只是想用 lastName, 并不需要第一个变量，你不得不这样写：
const [firstName, lastName] = useUserName()

// 只需要 lastName
<div lastName={lastName} />

// 这个规则 @typescript-eslint/no-unused-vars 会报错：
* firstName is assigned a value but never used.
```

此时，你可以使用 `_` 来忽略变量，就像 Rust 的下划线那样：

```tsx
const [_, lastName] = useUserName();
```

## TODOS

- 代码校验和格式化 ✅
- Dark mode ✅
- 项目结构 ✅
- 路由 ✅
- 环境变量 🚧
- 权限 🚧
- 状态管理 🚧
- fetch 请求 🚧
- 构建发布指南 🚧
- 支持容器化开发 🚧
