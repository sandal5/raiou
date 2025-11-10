# Raiou 快速开发指南

## 5 分钟快速开始

### 1️⃣ 安装依赖
```bash
cd raiou
npm install
```

### 2️⃣ 配置环境
```bash
cp .env.example .env
# 编辑 .env，填入 Storyblok API 令牌
```

### 3️⃣ 启动开发服务器
```bash
npm run dev
```

🎉 访问 `https://localhost:3000` 查看网站

---

## 常用命令

| 命令 | 功能 |
|------|------|
| `npm run dev` | 启动开发服务器 (HTTPS) |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览生产构建 |
| `npm run astro -- --help` | Astro 帮助命令 |

---

## 项目文件结构

```
src/
├── components/           # 可复用组件
│   ├── Header.astro     # 页头
│   ├── Footer.astro     # 页脚
│   └── Button.astro     # 按钮
│
├── storyblok/           # Storyblok 内容组件 ⭐
│   ├── RaiouHero.astro              # 首页 Hero
│   ├── BusinessGrid.astro           # 业务卡片
│   ├── CertificationsSection.astro  # 认证
│   ├── NewsSection.astro            # 新闻
│   ├── ContactSection.astro         # 联系
│   └── [其他组件]
│
├── layouts/             # 布局
│   └── Layout.astro    # 主布局
│
├── pages/               # 路由页面
│   └── [...slug].astro # 动态路由
│
├── styles/              # 样式
│   └── global.css      # 全局样式 (日文优化)
│
└── utils/               # 工具函数
```

---

## 修改页面样式

### 全局样式
编辑 `src/styles/global.css`:
```css
/* 修改主色 */
--color-primary: #1F2937;

/* 修改字体 */
--font-noto-jp: "Noto Sans JP", sans-serif;

/* 修改颜色 */
--color-accent-blue: #3B82F6;
```

### 组件样式
编辑 `src/storyblok/` 中的对应组件:
```astro
<div class="bg-primary text-white p-6">
  <!-- 内容 -->
</div>
```

---

## 添加新的 Storyblok 组件

### 第 1 步：创建组件文件
```bash
# 创建新组件
touch src/storyblok/MyNewComponent.astro
```

### 第 2 步：编写组件
```astro
---
const { blok } = Astro.props
---

<section class="py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold">
      {blok.title || '默认标题'}
    </h2>
    <p>{blok.description}</p>
  </div>
</section>
```

### 第 3 步：注册到 Astro 配置
编辑 `astro.config.mjs`:
```javascript
components: {
  // ... 其他组件
  my_new_component: 'storyblok/MyNewComponent',  // 添加这一行
}
```

### 第 4 步：在 Storyblok 中使用
在 Storyblok 编辑器中创建同名的组件块

---

## 常见任务

### 修改配色方案
编辑 `src/styles/global.css` 中的 `@theme` 部分:
```css
@theme {
  --color-primary: #新颜色;
  --color-accent-blue: #新颜色;
  --color-accent-red: #新颜色;
  --color-accent-amber: #新颜色;
}
```

### 修改字体
编辑 `src/styles/global.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=新字体');

@theme {
  --font-noto-jp: "新字体名", sans-serif;
}
```

### 修改排版
编辑 `src/styles/global.css`:
```css
h1 {
  font-size: 2.5rem;  /* 修改大小 */
  line-height: 1.2;   /* 修改行高 */
}
```

### 添加新页面
1. 在 Storyblok 中创建新页面
2. 发布页面
3. 重建网站 (`npm run build`)
4. 自动会在 `https://raiou.co.jp/page-slug` 出现

---

## 调试技巧

### 查看控制台输出
```bash
npm run dev
# 查看终端中的日志
```

### 检查构建错误
```bash
npm run build
# 如果有错误，终端会显示
```

### 开发者工具
在浏览器中按 `F12` 打开开发者工具:
- **Network** - 检查网络请求
- **Performance** - 性能分析
- **Elements** - 检查 HTML 结构

### 清除缓存
```bash
# 删除 .astro 缓存
rm -rf .astro
rm -rf node_modules/.cache

# 重新安装
npm install
npm run dev
```

---

## 部署前检查清单

- [ ] 所有页面内容已在 Storyblok 中发布
- [ ] 本地运行 `npm run build` 成功
- [ ] 没有控制台错误
- [ ] 检查 PageSpeed Insights 分数
- [ ] 移动设备测试通过
- [ ] 环境变量已正确配置

---

## 获取帮助

### 查看日志
```bash
# 详细日志
npm run dev -- --verbose
```

### Storyblok 相关
- 文档: https://www.storyblok.com/docs
- 社区: https://github.com/storyblok

### Astro 相关
- 文档: https://docs.astro.build
- 社区: https://astro.build/chat

### Tailwind CSS 相关
- 文档: https://tailwindcss.com/docs
- 类名查询: https://tailwindcss.com/docs/installation

---

## 性能提示

### 图片优化
- 使用 WebP 格式
- 为大图片提供 srcset
- 启用懒加载

### 代码优化
- 删除未使用的 CSS
- 最小化 JavaScript
- 使用缓存

### 监控工具
- Google PageSpeed Insights
- Cloudflare Analytics
- Web Vitals

---

## 常见问题

**Q: 为什么看不到 Storyblok 的更新?**
A: 重新构建网站 `npm run build`，或在开发服务器中按 `Ctrl+Shift+R` 强制刷新。

**Q: 如何添加新的业务版块?**
A: 在 `src/storyblok/` 中创建新组件，然后在 Storyblok 编辑器中使用。

**Q: 生产构建失败怎么办?**
A: 检查 `.env` 中的 Storyblok 令牌是否正确，运行 `npm run build` 查看详细错误。

---

## 下一步

✅ **快速开始完成！现在可以:**
1. 修改 Storyblok 内容
2. 调整样式和颜色
3. 添加新的组件和页面
4. 部署到 Cloudflare Pages

📚 **查看详细文档:**
- [网站内容优化](./site-content.md)
- [信息架构设计](./site-architecture.md)
- [部署指南](./deployment.md)

🚀 **准备部署?**
参考 [部署指南](./deployment.md) 将网站部署到 Cloudflare Pages
