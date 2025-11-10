# Raiou 部署指南

## Cloudflare Pages 部署

### 前提条件
1. GitHub 帐户和 raiou 仓库
2. Cloudflare 帐户（免费可用）
3. Storyblok 帐户和 API 令牌

### 步骤 1：连接 GitHub 仓库

1. 登录 Cloudflare Dashboard
2. 导航到 **Pages**
3. 点击 **Create a project** → **Connect to Git**
4. 授权 Cloudflare 访问您的 GitHub 帐户
5. 选择 `raiou` 仓库

### 步骤 2：配置构建设置

在 Cloudflare Pages 配置中设置：

- **Framework**: Astro
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: 18.x 或更高

### 步骤 3：设置环境变量

在 Cloudflare Pages 项目设置中添加以下环境变量：

#### 生产环境（Production）
```
STORYBLOK_TOKEN=your_production_api_token
STORYBLOK_IS_PREVIEW=no
STORYBLOK_ENVIRONMENT=production
```

#### 预览环境（Preview）
```
STORYBLOK_TOKEN=your_preview_api_token
STORYBLOK_IS_PREVIEW=yes
STORYBLOK_ENVIRONMENT=development
```

### 步骤 4：配置自定义域名

1. 在 Cloudflare Pages 项目中，转到 **Settings**
2. 在 **Domains** 部分，点击 **Add domain**
3. 输入 `raiou.co.jp`
4. 根据指引更新您的 DNS 设置

### 步骤 5：配置 DNS

如果您使用 Cloudflare 作为 DNS 提供商：

1. 在 Cloudflare DNS 管理中添加 CNAME 记录：
   - Name: `raiou`
   - Type: `CNAME`
   - Target: `your-project.pages.dev`
   - TTL: Auto

如果使用其他 DNS 提供商，请根据 Cloudflare 提供的指引配置。

---

## 本地开发

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 `https://localhost:3000` (使用 HTTPS)

### 构建项目
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

---

## 环境变量配置

创建 `.env` 文件（开发用）：

```bash
cp .env.example .env
```

编辑 `.env` 并填入您的 Storyblok API 令牌：

```
STORYBLOK_TOKEN=your_api_token_here
STORYBLOK_IS_PREVIEW=no
STORYBLOK_ENVIRONMENT=development
```

---

## Storyblok 集成

### 获取 API 令牌

1. 登录 Storyblok 并前往 **Settings**
2. 在 **API tokens** 中创建新令牌
3. 选择权限级别（Preview 或 Public）
4. 复制令牌值

### 配置 Webhook

为了在 Storyblok 内容更新时自动部署：

1. 在 Storyblok 中转到 **Webhooks**
2. 创建新 Webhook：
   - **URL**: `https://api.cloudflare.com/client/v4/accounts/{account_id}/pages/webhooks/deploy_hooks/{deploy_hook_id}`
   - **Events**: Story published, Story unpublished

> 注意：Deploy Hook ID 可从 Cloudflare Pages 项目的 **Settings** → **Build & deployments** 获取

---

## GitHub Actions 自动化（可选）

项目已配置了自动化工作流程，每次 push 到 main 分支时都会自动部署。

---

## 故障排除

### 构建失败
- 检查 Node.js 版本是否为 18.x 或更高
- 验证 `STORYBLOK_TOKEN` 环境变量是否已正确设置
- 检查 `npm run build` 本地是否成功

### 域名解析问题
- 检查 DNS 记录是否已正确配置
- 使用 `nslookup` 或 `dig` 验证 DNS 解析
- 等待 DNS 缓存清除（可能需要 24-48 小时）

### 内容未更新
- 验证 Storyblok API 令牌的权限
- 检查 Webhook 配置是否正确
- 确认 Storyblok 内容已发布

---

## 性能优化

### 图片优化
- 使用 WebP 格式
- 实施响应式图片加载
- 启用图片懒加载

### CDN 配置
- Cloudflare Pages 自动提供全局 CDN
- 启用缓存清除（Purge Cache）以加快内容更新
- 配置缓存过期时间

### 监控
- 在 Cloudflare Dashboard 中监控页面加载性能
- 查看分析报告
- 设置性能告警

---

## 安全配置

### 环境变量安全
- 不要在版本控制中提交 `.env` 文件
- 使用 Cloudflare 的环境变量管理功能
- 定期轮换 API 令牌

### 防火墙规则
- 在 Cloudflare 中配置 WAF（Web Application Firewall）
- 启用 DDoS 保护
- 配置速率限制以防止滥用

### HTTPS
- Cloudflare Pages 自动提供 SSL/TLS 证书
- 强制使用 HTTPS 重定向

---

## 维护计划

### 定期检查
- 每周检查构建日志
- 监控错误报告
- 验证内容更新是否正确发布

### 更新依赖
```bash
npm update
npm audit
```

### 备份
- 定期备份 Storyblok 内容
- 维护 GitHub 仓库备份

---

## 支持

如有问题，请参考：
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Astro 文档](https://docs.astro.build/)
- [Storyblok 文档](https://www.storyblok.com/docs)
