import { getAllPosts } from '@/lib/mdx'

export async function GET() {
  const posts = await getAllPosts()

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title>${post.frontmatter.title}</title>
      <link>https://xandai.dev/blog/${post.slug}</link>
      <description>${post.frontmatter.description}</description>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      <guid>https://xandai.dev/blog/${post.slug}</guid>
      ${post.frontmatter.tags.map((tag) => `<category>${tag}</category>`).join('\n      ')}
    </item>
  `
    )
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>XandAI Blog</title>
    <link>https://xandai.dev</link>
    <description>Technical articles about artificial intelligence, self-hosted models, and practical engineering experiments.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://xandai.dev/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  })
}

