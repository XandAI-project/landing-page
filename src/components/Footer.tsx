export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 mt-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-foreground-secondary">
            © {new Date().getFullYear()} XandAI. Open source and self-hosted.
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/XandAI-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-secondary hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="/rss.xml"
              className="text-sm text-foreground-secondary hover:text-primary transition-colors"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

