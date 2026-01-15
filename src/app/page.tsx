import { getAllPosts } from '@/lib/mdx'
import PostCard from '@/components/PostCard'

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-col items-start space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent-purple to-accent-fuchsia bg-clip-text text-transparent">
            XandAI
          </h1>
          <p className="text-xl md:text-2xl text-foreground-secondary max-w-2xl">
            Technical notes on artificial intelligence, self-hosted models, and practical engineering experiments.
          </p>
          <div className="flex gap-3 text-sm text-foreground-tertiary">
            <span className="px-3 py-1 bg-background-secondary rounded-full border border-border">AI</span>
            <span className="px-3 py-1 bg-background-secondary rounded-full border border-border">Self-Hosted</span>
            <span className="px-3 py-1 bg-background-secondary rounded-full border border-border">Engineering</span>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-foreground">Recent Posts</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}

