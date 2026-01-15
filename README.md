# XandAI Blog

A clean, minimal, high-performance technical blog focused on AI, self-hosted models, and practical engineering.

## 🚀 Features

- **Static Site Generation** - Fast, SEO-friendly pages
- **MDX Support** - Write posts in Markdown with JSX components
- **Syntax Highlighting** - Beautiful code blocks for technical content
- **Dark Mode** - Purple-themed dark design
- **Reading Time** - Automatic calculation for each post
- **Table of Contents** - Auto-generated for long posts
- **SEO Optimized** - OpenGraph tags, meta descriptions, RSS feed
- **Responsive** - Mobile-first design
- **Zero Config** - Works out of the box

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Deployment**: Vercel or self-hosted (static export)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## 📝 Writing Posts

Create `.mdx` files in `content/posts/`:

```mdx
---
title: "Your Post Title"
date: "2026-01-15"
description: "A brief description"
author: "Your Name"
tags: ["AI", "Tutorial"]
---

## Your Content Here

Write in Markdown with full MDX support.

\`\`\`python
# Code blocks are automatically highlighted
def hello():
    print("Hello, World!")
\`\`\`
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#a855f7',  // Main purple
  accent: '#8b5cf6',   // Accent purple
}
```

### Typography

The blog uses Inter font by default. Change in `src/app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google'
```

### Layout

- Header: `src/components/Header.tsx`
- Footer: `src/components/Footer.tsx`
- Post Card: `src/components/PostCard.tsx`

## 📁 Project Structure

```
xandai-blog/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── blog/
│   │       └── [slug]/
│   │           └── page.tsx    # Blog post template
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PostCard.tsx
│   │   └── TableOfContents.tsx
│   └── lib/
│       ├── mdx.ts              # MDX utilities
│       └── utils.ts            # Helper functions
├── content/
│   └── posts/                  # Your blog posts
│       ├── post-1.mdx
│       └── post-2.mdx
├── public/                     # Static assets
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Static Export

```bash
npm run build
# Output in /out directory
```

Deploy the `/out` folder to any static hosting service.

## 🔧 Architecture Decisions

### Why Next.js App Router?

- Modern React patterns
- Built-in routing and layouts
- Excellent performance
- Easy static generation

### Why MDX?

- Familiar Markdown syntax
- Supports React components
- Great for technical content
- Easy to version control

### Why Static Export?

- Maximum performance
- Easy to self-host
- No server required
- Works offline

### Why Minimal Dependencies?

- Faster builds
- Smaller bundle size
- Easier maintenance
- Better long-term stability

## 📈 Performance

Target metrics:

- Lighthouse Performance: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Total Bundle Size: < 100KB

## 🔮 Future Features

- [ ] Search functionality
- [ ] Projects showcase
- [ ] Interactive code playgrounds
- [ ] Newsletter integration
- [ ] Comment system (self-hosted)

## 🤝 Contributing

This is part of the [XandAI project](https://github.com/XandAI-project). Contributions welcome!

## 📄 License

MIT

## 🔗 Links

- [XandAI GitHub](https://github.com/XandAI-project)
- [XandAI CLI](https://github.com/XandAI-project/Xandai-CLI)
- [XandAI Extension](https://github.com/XandAI-project/XandAI-Extension)

---

Built with ❤️ for the self-hosted AI community

