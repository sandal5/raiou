# Raiou 网站信息架构与设计规范

## 网站信息架构图

```
raiou.co.jp (全日文网站)
│
├── 首页 (Home)
│   ├── 企业 Banner
│   ├── 核心价值导航
│   ├── 四大业务板块
│   ├── 成功案例轮播
│   ├── 资质认证
│   └── 新闻动态
│
├── 关于我们 (About)
│   ├── 企业简介
│   ├── 发展历程
│   ├── 团队介绍
│   ├── 资质荣誉
│   └── 企业文化
│
├── 医用耗材 (Medical)
│   ├── 产品分类
│   │   ├── 医用防护
│   │   ├── 临床护理
│   │   └── 家庭监测
│   ├── 产品列表
│   ├── 产品详情
│   ├── 批量采购
│   └── 技术支持
│
├── 保健品 (Supplements)
│   ├── 产品分类
│   │   ├── 膳食补充
│   │   ├── 美容抗衰
│   │   ├── 肠道调理
│   │   ├── 女性护理
│   │   └── 儿童营养
│   ├── 产品列表
│   ├── 产品详情
│   ├── 营养知识库
│   └── 咨询预约
│
├── 羽毛球 (Badminton)
│   ├── 产品分类
│   │   ├── 球拍
│   │   ├── 服饰
│   │   ├── 鞋类
│   │   └── 护具配件
│   ├── 选购指南
│   ├── 新手入门
│   ├── 赛事资讯
│   ├── 装备评测
│   └── 社区论坛
│
├── 日本旅游 (Tourism)
│   ├── 目的地指南
│   │   ├── 经典城市
│   │   ├── 度假胜地
│   │   └── 主题线路
│   ├── 旅游攻略
│   ├── 签证指南
│   ├── 行程规划
│   ├── 酒店预订
│   └── 定制服务
│
├── 新闻资讯 (News)
│   ├── 企业新闻
│   ├── 产品发布
│   ├── 行业资讯
│   └── 知识文章
│
├── 联系我们 (Contact)
│   ├── 公司信息
│   ├── 在线表单
│   ├── 地图定位
│   └── 社交媒体
│
└── 其他
    ├── 隐私政策
    ├── 服务条款
    └── FAQ
```

---

## 页面类型与组件模板

### 1. 首页组件
- **Hero Banner**：品牌形象展示 + CTA按钮
- **Value Proposition**：核心价值简述
- **Four Pillars Grid**：四大业务版块卡片
- **Case Studies Carousel**：客户案例滚动展示
- **Certifications Section**：资质认证墙
- **News Feed**：最新动态列表
- **Footer**：链接导航 + 联系方式

### 2. 业务详情页（Medical/Supplements/Badminton/Tourism）
- **Section Header**：版块标题 + 描述
- **Product/Service Grid**：产品/服务卡片列表
- **Product Detail Card**：
  - 图片展示
  - 名称和描述
  - 关键参数/规格
  - 价格信息
  - CTA按钮
  - 用户评价
- **Related Items**：相关推荐
- **Consultation Form**：咨询表单

### 3. 文章/资讯页
- **Hero Image**：文章头图
- **Meta Info**：发布日期、作者、分类
- **Content Area**：富文本内容
- **Related Articles**：相关文章推荐
- **Comment Section**：评论区域

### 4. 关于我们页
- **Company Overview**：公司简介
- **Timeline**：发展历程
- **Team Members Grid**：团队成员卡片
- **Values Section**：企业价值观
- **Certifications Gallery**：资质荣誉展示

### 5. 联系我们页
- **Contact Form**：咨询表单
- **Company Info**：公司信息卡片
- **Location Map**：地图定位
- **Social Media Links**：社交媒体

---

## 视觉设计规范

### 色彩系统
- **主色**：#1F2937（深灰蓝）- 专业、可信
- **辅助色1**：#EF4444（红色）- 活力、紧迫感
- **辅助色2**：#3B82F6（蓝色）- 科技、创新
- **强调色**：#F59E0B（琥珀色）- 温暖、优质
- **背景色**：#F9FAFB（浅灰）
- **文字色**：#111827（接近黑色）

### 字体系统
#### 日文字体（主体）
- **标题字体**：HGP創英角ﾎﾟｯﾌﾟ体 或 Yu Gothic
- **正文字体**：Noto Sans JP 或 Hiragino Sans
- **等宽字体**：Noto Sans Mono CJK JP

#### 英文字体（辅助）
- **标题**：Inter, Helvetica Neue
- **正文**：Inter, Open Sans

### 排版规范
- **H1**：32px, bold, 1.6 line-height
- **H2**：24px, bold, 1.5 line-height
- **H3**：20px, bold, 1.4 line-height
- **Body**：16px, regular, 1.6 line-height
- **Small**：14px, regular, 1.5 line-height

### 间距系统（Spacing Scale）
```
4px - xs
8px - sm
16px - md
24px - lg
32px - xl
48px - 2xl
64px - 3xl
```

### 圆角规范
- **Small Components**：4px
- **Medium Components**：8px
- **Cards**：12px
- **Large Components**：16px

### 阴影规范
```
shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
shadow-md: 0 4px 6px rgba(0,0,0,0.1)
shadow-lg: 0 10px 15px rgba(0,0,0,0.1)
shadow-xl: 0 20px 25px rgba(0,0,0,0.1)
```

---

## 响应式断点
- **Mobile (sm)**：320px - 640px
- **Tablet (md)**：640px - 1024px
- **Desktop (lg)**：1024px - 1280px
- **Wide Desktop (xl)**：1280px+

---

## 交互设计规范

### 按钮状态
- **Default**：标准样式
- **Hover**：背景色加深，阴影增强
- **Active/Pressed**：背景色更深
- **Disabled**：灰显，不可交互

### 链接样式
- **Default**：色彩链接 + 下划线
- **Hover**：颜色加深 + 下划线加粗
- **Visited**：颜色变灰

### 表单设计
- **Input Focus**：边框色改变，阴影显示
- **Error State**：红色边框 + 错误提示文本
- **Success State**：绿色边框 + 成功提示

---

## 性能优化规范
- 图片格式：WebP（主要）+ JPG（备用）
- 图片大小：根据容器宽度优化（响应式）
- 字体加载：使用 Google Fonts API 或自托管 WOFF2
- CSS 优化：Tailwind CSS tree-shaking
- JS 优化：Lazy loading 组件加载

---

## SEO 优化规范
- 每页独立的 Meta Title 和 Description
- 合理的 Header 层级 (H1-H6)
- 内链策略：相关内容互链
- 结构化数据：Schema.org 标记
- 多语言支持：Hreflang 标签（如需国际版）

---

## 无障碍规范 (A11y)
- WCAG 2.1 AA 标准
- 色彩对比度：4.5:1（文本）
- 键盘导航支持
- 屏幕阅读器友好
- Alt 文本完整性
