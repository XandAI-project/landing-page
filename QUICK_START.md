# Guia de Início Rápido

Comece a usar o blog XandAI em menos de 5 minutos.

## 🚀 Instalação Rápida

```bash
# Clone o repositório
git clone https://github.com/XandAI-project/XandAI-blog-page.git
cd XandAI-blog-page

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## ✍️ Escrever Seu Primeiro Post

1. Crie um arquivo em `content/posts/meu-primeiro-post.mdx`:

```mdx
---
title: "Meu Primeiro Post"
date: "2026-01-15"
description: "Este é meu primeiro post técnico sobre IA"
author: "Seu Nome"
tags: ["AI", "Tutorial"]
---

## Introdução

Este é meu primeiro post no blog XandAI!

## Código de Exemplo

\`\`\`python
def hello_ai():
    print("Hello, AI World!")
\`\`\`

## Conclusão

Publicar posts técnicos é fácil com XandAI!
```

2. Salve o arquivo
3. Recarregue o navegador - seu post aparecerá na homepage!

## 🎨 Personalizar o Blog

### Alterar Cores

Edite `tailwind.config.ts`:

```typescript
colors: {
  primary: '#a855f7',  // Sua cor principal
  accent: {
    purple: '#8b5cf6',  // Cor de acento
  }
}
```

### Alterar Informações do Site

Edite `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Seu Nome | Blog',
  description: 'Sua descrição aqui',
  // ... mais metadados
}
```

### Alterar Logo/Nome

Edite `src/components/Header.tsx`:

```typescript
<Link href="/">
  Seu Nome
</Link>
```

## 📝 Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de dev

# Build
npm run build        # Gera build de produção

# Preview
npm start            # Preview do build

# Lint
npm run lint         # Verifica erros
```

## 📂 Estrutura de Arquivos

```
xandai-blog/
├── content/
│   └── posts/          ← Seus posts aqui (.mdx)
├── src/
│   ├── app/
│   │   ├── page.tsx    ← Homepage
│   │   └── blog/
│   │       └── [slug]/ ← Template de post
│   ├── components/     ← Componentes React
│   └── lib/            ← Utilitários
└── public/             ← Assets estáticos
```

## 🎯 Próximos Passos

1. **Escreva mais posts** - Adicione arquivos `.mdx` em `content/posts/`
2. **Personalize o design** - Ajuste cores, fontes e layout
3. **Configure SEO** - Atualize metadados em `layout.tsx`
4. **Deploy** - Veja `DEPLOYMENT.md` para instruções
5. **Adicione analytics** - Integre Google Analytics ou Vercel Analytics

## 💡 Dicas

### Syntax Highlighting

Funciona automaticamente! Use:

\`\`\`python
def exemplo():
    return "Destacado!"
\`\`\`

### Adicionar Imagens

Coloque imagens em `public/images/` e referencie:

```mdx
![Alt text](/images/minha-imagem.png)
```

### Tags Úteis

Use tags consistentes para melhor organização:
- `AI`, `Machine Learning`, `Deep Learning`
- `Tutorial`, `Guide`, `Opinion`
- `Python`, `TypeScript`, `Rust`
- `Self-Hosted`, `Open Source`

### Frontmatter Completo

```yaml
---
title: "Título do Post"
date: "2026-01-15"
description: "Descrição curta e clara"
author: "Seu Nome"
tags: ["AI", "Tutorial", "Python"]
---
```

## 🔧 Solução de Problemas

### Posts não aparecem?

- Verifique que o arquivo está em `content/posts/`
- Confirme que tem extensão `.mdx`
- Verifique o frontmatter (título, data, etc)
- Recarregue o servidor de dev

### Erros de build?

```bash
# Limpe e reinstale
rm -rf .next node_modules
npm install
npm run dev
```

### Syntax highlighting não funciona?

- Certifique-se de especificar a linguagem: \`\`\`python
- Verifique que `rehype-highlight` está instalado

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [XandAI GitHub](https://github.com/XandAI-project)

## 🆘 Precisa de Ajuda?

- Abra uma issue no GitHub
- Consulte a documentação completa no README.md
- Veja exemplos em `content/posts/`

---

**Pronto para começar?** Execute `npm run dev` e comece a escrever!

