import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-2xl text-center">
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent-fuchsia bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="text-2xl font-bold mb-4 text-foreground">
        Page Not Found
      </h2>
      <p className="text-foreground-secondary mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}

