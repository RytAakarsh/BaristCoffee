export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-6">
          <span className="text-6xl">☕</span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
          404
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Oops! This page doesn't exist.
        </p>
        <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto">
          It seems you've wandered off the beaten coffee path. Let's get you back on track!
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          Back to Barist.Ai
        </a>
      </div>
    </div>
  )
}
