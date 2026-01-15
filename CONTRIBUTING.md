# Contribuindo para XandAI Blog

Obrigado por considerar contribuir para o projeto XandAI! Este documento fornece diretrizes para contribuições.

## 🌟 Como Contribuir

### Reportar Bugs

Se encontrar um bug:

1. Verifique se já existe uma issue sobre isso
2. Abra uma nova issue com:
   - Título claro e descritivo
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Screenshots (se aplicável)
   - Seu ambiente (OS, navegador, versão Node)

### Sugerir Funcionalidades

Para sugerir novas funcionalidades:

1. Abra uma issue com tag `enhancement`
2. Descreva o problema que resolve
3. Explique a solução proposta
4. Considere alternativas

### Pull Requests

1. Fork o repositório
2. Crie um branch: `git checkout -b feature/minha-feature`
3. Faça suas mudanças
4. Teste localmente
5. Commit: `git commit -m 'feat: adiciona nova funcionalidade'`
6. Push: `git push origin feature/minha-feature`
7. Abra um Pull Request

## 📝 Padrões de Código

### TypeScript

- Use TypeScript estrito
- Defina tipos explícitos
- Evite `any`
- Use interfaces para objetos

```typescript
// ✅ Bom
interface Post {
  title: string
  date: string
  tags: string[]
}

// ❌ Evite
const post: any = { ... }
```

### React Components

- Use componentes funcionais
- Extraia lógica complexa para hooks
- Mantenha componentes pequenos e focados

```typescript
// ✅ Bom
export default function PostCard({ post }: PostCardProps) {
  return (
    <article>
      <h2>{post.title}</h2>
    </article>
  )
}
```

### Tailwind CSS

- Use classes utilitárias
- Evite CSS customizado quando possível
- Use as cores do tema

```tsx
// ✅ Bom
<div className="bg-background text-foreground p-4">

// ❌ Evite
<div style={{ backgroundColor: '#000' }}>
```

### Commits

Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona funcionalidade X
fix: corrige bug Y
docs: atualiza documentação
style: formata código
refactor: refatora componente Z
test: adiciona testes
chore: atualiza dependências
```

## 🧪 Testes

Antes de submeter um PR:

```bash
# Build local
npm run build

# Verificar lint
npm run lint

# Testar localmente
npm run dev
```

## 📚 Documentação

- Documente novas funcionalidades
- Atualize README.md se necessário
- Adicione comentários em código complexo
- Mantenha exemplos atualizados

## 🎨 Design

### Princípios

- **Minimalismo**: Menos é mais
- **Performance**: Priorize velocidade
- **Acessibilidade**: Suporte leitores de tela
- **Responsividade**: Mobile-first

### Cores

Mantenha consistência com o tema:

- Background: `#0a0a0f`
- Primary: `#a855f7` (purple)
- Accent: `#8b5cf6`
- Text: `#e4e4e7`

## 🚀 Áreas para Contribuir

### Fácil

- [ ] Corrigir typos na documentação
- [ ] Melhorar mensagens de erro
- [ ] Adicionar exemplos de posts
- [ ] Melhorar README

### Intermediário

- [ ] Adicionar novos componentes
- [ ] Melhorar estilos existentes
- [ ] Otimizar performance
- [ ] Adicionar testes

### Avançado

- [ ] Implementar busca
- [ ] Sistema de comentários
- [ ] Analytics integrado
- [ ] PWA support
- [ ] Internacionalização

## 🔍 Code Review

Pull Requests serão revisados para:

- **Funcionalidade**: Funciona como esperado?
- **Código**: Segue padrões do projeto?
- **Performance**: Impacto no bundle/velocidade?
- **Acessibilidade**: Acessível para todos?
- **Documentação**: Bem documentado?

## 📖 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)

## 💬 Comunidade

- GitHub Issues: Discussões técnicas
- GitHub Discussions: Perguntas gerais
- Email: av.souza2018@gmail.com

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a MIT License.

## ❤️ Reconhecimento

Todos os contribuidores serão adicionados à lista de contribuidores.

---

**Dúvidas?** Abra uma issue ou entre em contato!

Obrigado por contribuir para o ecossistema XandAI! 🚀

