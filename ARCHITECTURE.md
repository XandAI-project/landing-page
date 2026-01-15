# Arquitetura do XandAI Blog

Este documento explica as decisões arquiteturais e estrutura do projeto.

## 🏗️ Visão Geral

O XandAI Blog é uma aplicação **estática** (SSG - Static Site Generation) construída com Next.js 14+ usando o App Router.

### Princípios de Design

1. **Simplicidade**: Código limpo e fácil de entender
2. **Performance**: Otimizado para velocidade
3. **Minimalismo**: Poucas dependências
4. **Extensibilidade**: Fácil adicionar funcionalidades
5. **SEO-First**: Otimizado para motores de busca

## 📁 Estrutura do Projeto

```
xandai-blog/
│
├── src/                          # Código fonte
│   ├── app/                      # App Router (Next.js 14+)
│   │   ├── layout.tsx           # Layout raiz (SEO, fonts, providers)
│   │   ├── page.tsx             # Homepage (lista de posts)
│   │   ├── globals.css          # Estilos globais
│   │   ├── loading.tsx          # Loading state
│   │   ├── not-found.tsx        # 404 page
│   │   ├── sitemap.ts           # Sitemap dinâmico
│   │   ├── rss.xml/             
│   │   │   └── route.ts         # RSS feed
│   │   └── blog/
│   │       └── [slug]/
│   │           └── page.tsx     # Template de post individual
│   │
│   ├── components/               # Componentes React
│   │   ├── Header.tsx           # Header global
│   │   ├── Footer.tsx           # Footer global
│   │   ├── PostCard.tsx         # Card de preview do post
│   │   └── TableOfContents.tsx  # TOC para posts longos
│   │
│   └── lib/                      # Utilitários e lógica de negócio
│       ├── mdx.ts               # Parse e gestão de MDX
│       └── utils.ts             # Funções helper (formatação, etc)
│
├── content/                      # Conteúdo do blog
│   └── posts/                   # Posts em MDX
│       ├── post-1.mdx
│       └── post-2.mdx
│
├── public/                       # Assets estáticos
│   ├── favicon.svg
│   └── robots.txt
│
├── scripts/                      # Scripts utilitários
│   └── new-post.js              # CLI para criar posts
│
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI
│
├── tailwind.config.ts           # Configuração Tailwind
├── tsconfig.json                # Configuração TypeScript
├── next.config.mjs              # Configuração Next.js
└── package.json                 # Dependências
```

## 🔧 Stack Técnico

### Core

- **Next.js 14+**: Framework React com SSG
- **TypeScript**: Type safety
- **React 18**: UI library

### Styling

- **Tailwind CSS**: Utility-first CSS
- **@tailwindcss/typography**: Prose styling para MDX

### Content

- **MDX**: Markdown com React components
- **next-mdx-remote**: Server-side MDX rendering
- **gray-matter**: Parse frontmatter
- **reading-time**: Calcula tempo de leitura

### Code Highlighting

- **rehype-highlight**: Syntax highlighting
- **highlight.js**: Tema de highlight

### Markdown Enhancement

- **remark-gfm**: GitHub Flavored Markdown
- **rehype-slug**: IDs em headings
- **rehype-autolink-headings**: Links automáticos em headings

### Utilities

- **date-fns**: Formatação de datas

## 🎯 Fluxo de Dados

### 1. Build Time (SSG)

```
MDX Files → gray-matter → Frontmatter + Content
                                ↓
                        reading-time calc
                                ↓
                        Sort by date
                                ↓
                    Generate static pages
```

### 2. Post Rendering

```
MDX Content → next-mdx-remote → React Components
                    ↓
            remark plugins (GFM)
                    ↓
        rehype plugins (highlight, slug, links)
                    ↓
            Final HTML output
```

### 3. Navigation

```
User Request → Static HTML (from /out)
                    ↓
            Client-side hydration
                    ↓
        React components interactive
```

## 🚀 Performance

### Estratégias

1. **Static Generation**: Todas as páginas geradas em build time
2. **No Client JS**: Mínimo JavaScript necessário
3. **Code Splitting**: Automatic by Next.js
4. **Image Optimization**: Desabilitado para static export
5. **CSS Purging**: Tailwind remove CSS não usado

### Métricas Alvo

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Total Bundle Size**: < 100KB
- **Lighthouse Score**: 95+

## 🎨 Sistema de Design

### Cores (Dark Theme)

```typescript
colors: {
  background: {
    DEFAULT: '#0a0a0f',    // Background principal
    secondary: '#13131a',   // Cards, inputs
    tertiary: '#1a1a24',    // Hover states
  },
  foreground: {
    DEFAULT: '#e4e4e7',     // Texto principal
    secondary: '#a1a1aa',   // Texto secundário
    tertiary: '#71717a',    // Texto terciário
  },
  primary: {
    DEFAULT: '#a855f7',     // Purple principal
    light: '#c084fc',       // Purple claro
    dark: '#9333ea',        // Purple escuro
  },
  border: {
    DEFAULT: '#27272a',     // Bordas padrão
    light: '#3f3f46',       // Bordas hover
  }
}
```

### Typography

- **Font**: Inter (Google Fonts)
- **Prose**: @tailwindcss/typography
- **Headings**: Bold, gradient para títulos principais
- **Code**: Mono font, syntax highlighted

## 📝 Sistema de Conteúdo

### Frontmatter Schema

```yaml
title: string       # Obrigatório
date: string        # ISO format (YYYY-MM-DD)
description: string # Meta description
author: string      # Nome do autor
tags: string[]      # Array de tags
```

### MDX Features

✅ **Suportado:**
- GitHub Flavored Markdown
- Syntax highlighting
- Tables
- Footnotes
- Task lists
- Autolinks

❌ **Não suportado (por simplicidade):**
- React components customizados em posts
- Interactive widgets

## 🔐 SEO

### Implementado

1. **Meta Tags**: Title, description, keywords
2. **OpenGraph**: Facebook/LinkedIn sharing
3. **Twitter Cards**: Twitter sharing
4. **Sitemap**: Gerado dinamicamente
5. **RSS Feed**: Feed completo
6. **robots.txt**: Search engine guidance
7. **Semantic HTML**: Proper heading hierarchy

### Estrutura de URLs

```
/                           # Homepage
/blog/[slug]               # Post individual
/sitemap.xml               # Sitemap
/rss.xml                   # RSS feed
```

## 🧩 Componentes

### Layout Components

**Header**
- Logo/site name
- Navigation links
- Sticky positioning

**Footer**
- Copyright
- Links
- RSS link

### Content Components

**PostCard**
- Preview de post
- Metadata (date, reading time)
- Tags
- Hover effects

**TableOfContents**
- Auto-gerado de headings
- Conditional render (posts longos)
- Smooth scroll

## 🔄 Build Process

### Development

```bash
npm run dev
↓
Next.js dev server
↓
Hot reload on changes
```

### Production

```bash
npm run build
↓
TypeScript compilation
↓
MDX processing
↓
Static page generation
↓
CSS optimization
↓
Output to /out directory
```

## 📦 Deploy

### Static Export

- `output: 'export'` em `next.config.mjs`
- Gera pasta `/out` com HTML estático
- Deploy em qualquer servidor estático

### Plataformas

- **Vercel**: Configuração zero
- **Netlify**: Via netlify.toml
- **GitHub Pages**: Via gh-pages
- **Self-hosted**: Nginx/Apache

## 🔮 Extensibilidade

### Fácil Adicionar

1. **Novos componentes MDX**: Registrar em MDXRemote
2. **Páginas estáticas**: Adicionar em `/app`
3. **Estilos**: Estender Tailwind config
4. **Posts**: Apenas adicionar .mdx

### Features Futuras

1. **Search**: Algolia ou local search
2. **Comments**: Giscus ou self-hosted
3. **Analytics**: Vercel Analytics
4. **Newsletter**: Integração email
5. **PWA**: Service worker
6. **i18n**: Multi-language support

## 🧪 Testing Strategy

### Atual

- ESLint para code quality
- TypeScript para type safety
- Build test no CI

### Futuro

- Unit tests (Jest)
- E2E tests (Playwright)
- Visual regression (Percy)
- Performance tests (Lighthouse CI)

## 🛡️ Segurança

### Implementado

- No server-side code (static)
- No database (static files)
- No API keys exposed
- Content sanitization by MDX

### Best Practices

- CSP headers (configurar no servidor)
- HTTPS only
- Regular dependency updates

## 📊 Monitoring

### Recomendado

- **Vercel Analytics**: Performance
- **Google Search Console**: SEO
- **Lighthouse CI**: Performance tracking
- **Sentry**: Error tracking (se adicionar)

## 🔄 Maintenance

### Regular Tasks

1. Update dependencies mensalmente
2. Review e otimizar bundle size
3. Audit accessibility
4. Check broken links
5. Review analytics

### Breaking Changes

- Next.js major versions
- React major versions
- Tailwind major versions

## 📚 Referências

### Inspirações

- [Vercel Blog](https://vercel.com/blog)
- [Linear Blog](https://linear.app/blog)
- [Stripe Blog](https://stripe.com/blog)

### Documentação

- [Next.js Docs](https://nextjs.org/docs)
- [MDX Docs](https://mdxjs.com/)
- [Tailwind Docs](https://tailwindcss.com/)

---

**Última atualização**: Janeiro 2026

Para questões sobre arquitetura, abra uma issue no GitHub.

