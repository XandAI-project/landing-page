import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 max-w-5xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            <span className="bg-gradient-to-r from-primary to-accent-fuchsia bg-clip-text text-transparent">
              XandAI
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <a
              href="https://github.com/XandAI-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

