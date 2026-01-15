# Deployment Guide

Este guia mostra como fazer deploy do blog XandAI em diferentes plataformas.

## 🚀 Vercel (Recomendado)

A forma mais simples de fazer deploy:

### Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Via GitHub

1. Push seu código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Importe seu repositório
5. Vercel detecta automaticamente Next.js
6. Click "Deploy"

**Configurações no Vercel:**
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: (deixe vazio, Next.js gerencia automaticamente)

## 📦 Static Export (Self-Hosted)

Para hospedar em qualquer servidor estático:

### Build

```bash
npm run build
```

Isso gera uma pasta `/out` com arquivos estáticos.

### Deploy para Nginx

```nginx
server {
    listen 80;
    server_name xandai.dev;
    root /var/www/xandai/out;
    
    location / {
        try_files $uri $uri/ $uri.html /404.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Deploy para Apache

Adicione `.htaccess` na pasta `/out`:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1.html [L]

# Cache static assets
<FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg)$">
    Header set Cache-Control "max-age=31536000, public, immutable"
</FilesMatch>
```

## 🐳 Docker

### Dockerfile

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build e Run

```bash
# Build
docker build -t xandai-blog .

# Run
docker run -p 80:80 xandai-blog
```

### Docker Compose

```yaml
version: '3.8'

services:
  blog:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

## ☁️ Netlify

```bash
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

Deploy:

```bash
# Via CLI
npm install -g netlify-cli
netlify deploy --prod

# Ou conecte via GitHub no netlify.com
```

## 🌐 Cloudflare Pages

1. Push para GitHub
2. Acesse [dash.cloudflare.com](https://dash.cloudflare.com)
3. Pages → Create a project
4. Conecte repositório
5. Configure:
   - Build command: `npm run build`
   - Build output: `out`
6. Deploy

## 📊 GitHub Pages

Adicione ao `package.json`:

```json
{
  "homepage": "https://username.github.io/xandai-blog",
  "scripts": {
    "deploy": "npm run build && touch out/.nojekyll && gh-pages -d out -t true"
  }
}
```

Instale gh-pages:

```bash
npm install --save-dev gh-pages
```

Deploy:

```bash
npm run deploy
```

## 🔒 HTTPS / SSL

### Let's Encrypt (Certbot)

```bash
# Instalar certbot
sudo apt install certbot python3-certbot-nginx

# Obter certificado
sudo certbot --nginx -d xandai.dev -d www.xandai.dev

# Renovação automática
sudo certbot renew --dry-run
```

### Cloudflare (Gratuito)

1. Adicione seu domínio ao Cloudflare
2. Ative "Full (strict)" SSL/TLS
3. Cloudflare fornece certificado automaticamente

## 🌍 Custom Domain

### Vercel

```bash
# Via CLI
vercel domains add xandai.dev

# Ou adicione no dashboard
```

Configure DNS:
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

### Netlify

```bash
# netlify.toml
[[redirects]]
  from = "https://www.xandai.dev/*"
  to = "https://xandai.dev/:splat"
  status = 301
  force = true
```

## 📈 Performance Optimization

### Vercel Edge Caching

Já configurado automaticamente com Next.js.

### CDN Configuration

Se usar static export, configure CDN:

```nginx
# Nginx com cache
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m;

server {
    location / {
        proxy_cache my_cache;
        proxy_cache_valid 200 1h;
        add_header X-Cache-Status $upstream_cache_status;
    }
}
```

## 🔄 Continuous Deployment

### GitHub Actions

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🧪 Preview Deployments

Vercel e Netlify criam automaticamente preview URLs para cada PR.

## 📝 Checklist Pré-Deploy

- [ ] Testar build localmente: `npm run build`
- [ ] Verificar SEO com Lighthouse
- [ ] Testar em diferentes navegadores
- [ ] Validar RSS feed
- [ ] Verificar sitemap
- [ ] Testar performance
- [ ] Configurar analytics (opcional)
- [ ] Configurar domínio customizado
- [ ] Configurar HTTPS
- [ ] Testar em mobile

## 🔍 Monitoring

### Vercel Analytics

Adicione ao `package.json`:

```json
{
  "dependencies": {
    "@vercel/analytics": "^1.1.0"
  }
}
```

Em `layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🆘 Troubleshooting

### Build Falha

```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### 404 em rotas

Certifique-se de que seu servidor está configurado para SPA routing ou use export estático.

### Imagens não carregam

Com `output: 'export'`, use `unoptimized: true` em `next.config.mjs`.

---

Para mais ajuda, consulte:
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)

