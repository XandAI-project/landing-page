#!/usr/bin/env node

/**
 * Script para criar um novo post no blog
 * Uso: node scripts/new-post.js "Título do Post"
 */

const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve))
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}

async function createPost() {
  console.log('📝 Criar Novo Post\n')

  const title = await question('Título do post: ')
  if (!title) {
    console.error('❌ Título é obrigatório!')
    process.exit(1)
  }

  const description = await question('Descrição (1 linha): ')
  const author = await question('Autor [XandAI]: ') || 'XandAI'
  const tagsInput = await question('Tags (separadas por vírgula): ')
  const tags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean)

  const slug = slugify(title)
  const date = new Date().toISOString().split('T')[0]

  const template = `---
title: "${title}"
date: "${date}"
description: "${description}"
author: "${author}"
tags: [${tags.map((t) => `"${t}"`).join(', ')}]
---

## Introdução

Escreva sua introdução aqui.

## Seção Principal

Seu conteúdo aqui.

\`\`\`python
# Exemplo de código
def exemplo():
    return "Hello, World!"
\`\`\`

## Conclusão

Resuma seus pontos principais.
`

  const postsDir = path.join(process.cwd(), 'content', 'posts')
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true })
  }

  const filePath = path.join(postsDir, `${slug}.mdx`)

  if (fs.existsSync(filePath)) {
    const overwrite = await question(`⚠️  Arquivo ${slug}.mdx já existe. Sobrescrever? (s/N): `)
    if (overwrite.toLowerCase() !== 's') {
      console.log('❌ Operação cancelada.')
      process.exit(0)
    }
  }

  fs.writeFileSync(filePath, template)
  console.log(`\n✅ Post criado: content/posts/${slug}.mdx`)
  console.log(`📝 Edite o arquivo e adicione seu conteúdo!`)

  rl.close()
}

createPost().catch((error) => {
  console.error('❌ Erro:', error.message)
  process.exit(1)
})

