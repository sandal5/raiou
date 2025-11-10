# Raiou 株式会社 - 公式ウェブサイト

![Raiou Logo](https://raiou.co.jp/logo.svg)

莱歐株式会社の公式ウェブサイト - 中日優質製品・サービスの包括的なプラットフォーム

## 概要

Raiou は、精選全球優質資源、賦能品質生活體驗を使命とする企業です。
医療用耗材、保健品、ワイヤレスネット装備、日本旅游の4つの主要分野で、
中日を結ぶ高品質なソリューションを提供しています。

### 主要業務分野
- 🏥 **医用耗材** - 医療防護・臨床ケア・家庭健康監測
- 💊 **保健品** - 膳食補充・美容・肠道調理
- 🏸 **ワイヤレスネット** - プロフェッショナルな羽毛球装備
- ✈️ **日本旅游** - カスタマイズされた旅行プラン・ビザサポート

## 技術スタック

- **Framework**: Astro 5.12.9
- **CMS**: Storyblok
- **Styling**: Tailwind CSS v4 + Tailwind Typography
- **Typography**: Noto Sans JP (日文)、Inter (英文)
- **Hosting**: Cloudflare Pages
- **Domain**: raiou.co.jp (全日文)

## 機能

- ✅ 完全日文対応 - 日本語最適化フォント・レイアウト
- ✅ ブロック型コンテンツモデル - 柔軟なページ構成
- ✅ ビジュアル編集 - Storyblok の直感的なコンテンツ管理
- ✅ SEO最適化 - メタタグ・構造化データ対応
- ✅ 高速パフォーマンス - 静的出力・画像最適化
- ✅ レスポンシブデザイン - あらゆるデバイスに対応
- ✅ アクセシビリティ - WCAG 2.1 AA 準拠

## クイックスタート

### 前提条件
- Node.js 18.x 以上
- npm または bun

### ローカルセットアップ

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/raiou.git
cd raiou

# 依赖をインストール
npm install

# 環境変数を設定
cp .env.example .env
# .env ファイルを編集して STORYBLOK_TOKEN を設定
```

### 利用可能なスクリプト

```bash
# 開発サーバーを起動
npm run dev
# ブラウザで https://localhost:3000 にアクセス

# 本番用にビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

## 環境変数

`.env.example` をコピーして `.env` を作成し、以下を設定：

```bash
# Storyblok API トークン
STORYBLOK_TOKEN=your_api_token_here

# プレビューモード (yes または no)
STORYBLOK_IS_PREVIEW=no

# 環境設定 (development または production)
STORYBLOK_ENVIRONMENT=development

# サイト名とドメイン
SITE_NAME=Raiou
SITE_DOMAIN=raiou.co.jp
```

## プロジェクト構造

```
raiou/
├── src/
│   ├── components/          # 再利用可能なコンポーネント
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Button.astro
│   ├── storyblok/          # Storyblok コンポーネント
│   │   ├── Page.astro
│   │   ├── RaiouHero.astro
│   │   ├── BusinessGrid.astro
│   │   ├── CertificationsSection.astro
│   │   ├── NewsSection.astro
│   │   └── ContactSection.astro
│   ├── layouts/            # レイアウトテンプレート
│   │   └── Layout.astro
│   ├── pages/              # ページルート
│   │   └── [...slug].astro
│   ├── styles/             # グローバルスタイル
│   │   └── global.css
│   ├── utils/              # ユーティリティ関数
│   └── locales/            # 言語ファイル
├── public/                 # 静的アセット
│   └── fonts/
├── docs/                   # ドキュメント
│   ├── site-content.md    # コンテンツ構成
│   ├── site-architecture.md # IA・デザイン仕様
│   └── deployment.md       # デプロイメント手順
├── images/                 # プロジェクト画像
├── astro.config.mjs        # Astro 設定
├── tailwind.config.js      # Tailwind 設定
└── package.json            # プロジェクト依存関係
```

## ウェブサイトの構成

### 主要ページ
- **首頁 (/)** - ランディングページ
- **關於我們 (/about)** - 企業情報
- **醫用耗材 (/medical)** - 医療製品カテゴリ
- **保健品 (/supplements)** - 健康食品カテゴリ
- **羽毛球 (/badminton)** - スポーツ装備カテゴリ
- **日本旅游 (/tourism)** - 旅行サービス
- **新聞資訊 (/news)** - ニュース・ブログ
- **聯絡 (/contact)** - 問い合わせ

## カスタムコンポーネント

### RaiouHero
ブランドイメージと価値提案を強調するヒーローセクション

### BusinessGrid
4つの主要業務分野をハイライトするグリッドレイアウト

### CertificationsSection
資質認証と信頼の証を表示するセクション

### NewsSection
最新ニュースと記事の表示

### ContactSection
問い合わせフォーム統合のコンタクトセクション

## デザイン仕様

### カラーパレット
- **Primary**: #1F2937 (深灰藍)
- **Accent Red**: #EF4444
- **Accent Blue**: #3B82F6
- **Accent Amber**: #F59E0B

### タイポグラフィ
- **H1**: 32px bold
- **H2**: 24px bold
- **H3**: 20px bold
- **Body**: 16px regular (line-height 1.8)

詳細は [`docs/site-architecture.md`](docs/site-architecture.md) を参照

## デプロイメント

### Cloudflare Pages へのデプロイ

1. GitHub リポジトリを接続
2. ビルド設定：
   - **Framework**: Astro
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
3. 環境変数を設定
4. カスタムドメインを設定

詳細な手順は [`docs/deployment.md`](docs/deployment.md) を参照

## 性能最適化

- 静的サイト生成（SSG）
- 画像最適化（WebP + 遅延読み込み）
- CSS/JS ツリーシェイキング
- Core Web Vitals に対応

## SEO 最適化

- OG タグ・Twitter Card 対応
- メタ説明・キーワード設定
- 構造化データマークアップ
- サイトマップ自動生成

## アクセシビリティ

- WCAG 2.1 AA 準拠
- キーボードナビゲーション対応
- スクリーン リーダー対応
- 色対比度 4.5:1 以上

## パッケージ管理

このプロジェクトは bun または npm をサポートしています：

```bash
# npm を使用する場合
npm install
npm run dev

# bun を使用する場合
bun install
bun run dev
```

## 貢献ガイドライン

1. フォークして機能ブランチを作成
2. 変更をコミット
3. ブランチをプッシュ
4. プルリクエストを作成

## ライセンス

このプロジェクトは MIT ライセンスの下に公開されています。

## サポート

問題が発生した場合は、以下を参照：
- [Astro ドキュメント](https://docs.astro.build/)
- [Storyblok ドキュメント](https://www.storyblok.com/docs)
- [Cloudflare Pages ドキュメント](https://developers.cloudflare.com/pages/)

## 連絡先

- 📧 Email: info@raiou.co.jp
- 🌐 Website: https://raiou.co.jp
- 📱 Phone: +81 (0)XX-XXXX-XXXX

---

**最終更新**: 2024年11月10日
