import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import type { Post } from '@/lib/mdx'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const { slug, frontmatter, readingTime } = post

  return (
    <Link href={`/blog/${slug}`}>
      <article className="group p-6 rounded-lg border border-border hover:border-primary bg-background-secondary hover:bg-background-tertiary transition-all duration-200">
        <div className="flex items-center gap-3 mb-3 text-sm text-foreground-tertiary">
          <time dateTime={frontmatter.date}>
            {formatDate(frontmatter.date)}
          </time>
          <span>•</span>
          <span>{readingTime}</span>
        </div>

        <h2 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {frontmatter.title}
        </h2>

        <p className="text-foreground-secondary mb-4 line-clamp-2">
          {frontmatter.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-background-tertiary rounded border border-border text-foreground-tertiary"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  )
}

