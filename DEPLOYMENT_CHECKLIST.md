# Raiou Cloudflare Pages 部署检查清单

## 当前状态

- ✅ 代码已推送到 GitHub (sandal5/raiou)
- ✅ 部署错误已修复
- ⏳ 等待 Cloudflare Pages 重新部署

## 立即执行 (必需)

### 第 1 步：在 Cloudflare 中重新部署

```
1. 访问 https://dash.cloudflare.com/
2. 找到 Pages 项目 "raiou"
3. 进入 "Deployments" 选项卡
4. 点击最新失败部署旁的 "Retry" 按钮
5. 或者 push 一个新提交自动触发部署
```

预期结果：部署应该成功完成，显示绿色 ✓

### 第 2 步：验证网站可访问

```
• 访问 https://raiou.pages.dev (临时 URL)
• 应该看到 Raiou 首页
• 检查响应式设计 (移动/平板/桌面)
```

## 后续步骤 (可选但推荐)

### 配置自定义域名

在 Cloudflare Pages 中：

1. 进入项目设置 → Custom domains
2. 点击 "Add custom domain"
3. 输入 `raiou.co.jp`
4. 按照指引配置 DNS

### 配置 Storyblok (可选)

1. 创建 Storyblok 账号: https://www.storyblok.com/
2. 创建新的 Space
3. 获取 API 令牌 (Settings > Access tokens)
4. 在 Cloudflare Pages 中添加环境变量：
   ```
   STORYBLOK_TOKEN = [你的 API 令牌]
   STORYBLOK_IS_PREVIEW = no
   STORYBLOK_ENVIRONMENT = production
   ```
5. 在 Storyblok 中创建内容模型
6. 在 Cloudflare 中重新部署

## 部署后验证

### 功能检查

- [ ] 首页加载正常
- [ ] 导航菜单可用
- [ ] 响应式设计工作正常
- [ ] 日文字体正确显示
- [ ] 所有组件正常渲染

### 性能检查

- [ ] 运行 PageSpeed Insights
- [ ] 检查 Core Web Vitals
- [ ] 监控 Cloudflare Analytics

### SEO 检查

- [ ] 元标签正确
- [ ] Sitemap 生成
- [ ] robots.txt 可访问

## 故障排除

### 如果部署仍然失败

**检查列表：**
1. 确认 GitHub 仓库代码已推送到 master 分支
2. 检查 Cloudflare Pages 的构建日志
3. 查看是否有错误信息

**常见错误和解决方案：**

- **错误：Unauthorized (401)**
  - 原因：没有 STORYBLOK_TOKEN
  - 解决：已修复 - 现在可以在没有令牌时构建

- **错误：Build failed**
  - 检查构建日志中的具体错误
  - 确保 Node.js 版本 18.x+

- **错误：Font loading issues**
  - 检查 Google Fonts 导入
  - 确保 CSS 文件正确

### 获取帮助

- 查看部署日志：Cloudflare Dashboard > Pages > Deployments
- 检查代码：https://github.com/sandal5/raiou
- 查看文档：docs/deployment.md

## 关键网址

| 资源 | URL |
|------|-----|
| GitHub 仓库 | https://github.com/sandal5/raiou |
| Cloudflare Dashboard | https://dash.cloudflare.com/ |
| Storyblok | https://www.storyblok.com/ |
| 临时网站 URL | https://raiou.pages.dev |
| 最终网站 URL | https://raiou.co.jp |

## 关键文件位置

- **构建配置**: `astro.config.mjs`
- **样式系统**: `src/styles/global.css`
- **自定义组件**: `src/storyblok/Raiou*.astro`
- **环境变量**: `.env.example`
- **部署指南**: `docs/deployment.md`

## 时间表

```
现在: ✅ 代码修复和推送
1小时内: ⏳ Cloudflare 部署
24小时: 自定义域名配置
1周: Storyblok 集成
```

## 备注

- 网站现在可以在没有 Storyblok API 令牌的情况下构建
- 优雅降级：缺少数据时显示默认首页
- 可以后续渐进式添加 CMS 内容
- 日文字体已优化，完全支持日本语显示

---

**最后更新**: 2025-11-10
**状态**: 🔄 等待 Cloudflare 重新部署
