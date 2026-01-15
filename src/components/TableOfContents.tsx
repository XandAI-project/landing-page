'use client'

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  // Extract headings from markdown content
  const headings = content
    .split('\n')
    .filter(line => line.startsWith('##'))
    .map(line => {
      const level = line.match(/^#+/)?.[0].length || 2
      const text = line.replace(/^#+\s/, '').trim()
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      return { level, text, id }
    })

  if (headings.length === 0) return null

  return (
    <nav className="mb-8 p-6 bg-background-secondary rounded-lg border border-border">
      <h2 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
        Table of Contents
      </h2>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li
            key={index}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className="text-sm text-foreground-secondary hover:text-primary transition-colors"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

