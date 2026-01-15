export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-32 max-w-2xl">
      <div className="animate-pulse space-y-8">
        <div className="h-12 bg-background-secondary rounded w-3/4"></div>
        <div className="h-6 bg-background-secondary rounded w-1/2"></div>
        <div className="space-y-3">
          <div className="h-4 bg-background-secondary rounded"></div>
          <div className="h-4 bg-background-secondary rounded"></div>
          <div className="h-4 bg-background-secondary rounded w-5/6"></div>
        </div>
      </div>
    </div>
  )
}

