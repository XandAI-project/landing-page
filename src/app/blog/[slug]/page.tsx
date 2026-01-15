import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import TableOfContents from '@/components/TableOfContents'
import 'highlight.js/styles/github-dark.css'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.frontmatter.title} | XandAI`,
    description: post.frontmatter.description,
    keywords: post.frontmatter.tags,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const { frontmatter, content, readingTime } = post

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4 text-sm text-foreground-tertiary">
          <time dateTime={frontmatter.date}>
            {formatDate(frontmatter.date)}
          </time>
          <span>•</span>
          <span>{readingTime}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
          {frontmatter.title}
        </h1>
        
        <p className="text-xl text-foreground-secondary mb-6">
          {frontmatter.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-background-secondary rounded-full border border-border text-foreground-secondary hover:border-primary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Table of Contents for long posts */}
      {content.length > 3000 && (
        <TableOfContents content={content} />
      )}

      {/* Content */}
      <div className="prose prose-lg prose-invert max-w-none">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeHighlight as any,
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: 'wrap' }],
              ],
            },
          }}
        />
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border">
        <div className="text-sm text-foreground-secondary">
          <p>Written by {frontmatter.author}</p>
          <p className="mt-2">
            Found this helpful? Share your thoughts on{' '}
            <a
              href="https://github.com/XandAI-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </article>
  )
}

