'use client'

export default function CoffeeElements() {
  return (
    <>
      {/* Floating coffee bean decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top-left coffee splash */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        
        {/* Bottom-right coffee accent */}
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
        
        {/* Subtle middle element */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Decorative floating beans */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 text-6xl animate-float" style={{ animationDelay: '0s' }}>☕</div>
        <div className="absolute top-40 right-20 text-5xl animate-float" style={{ animationDelay: '1s' }}>☕</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-float" style={{ animationDelay: '2s' }}>☕</div>
        <div className="absolute bottom-20 right-1/3 text-5xl animate-float" style={{ animationDelay: '3s' }}>☕</div>
      </div>
    </>
  )
}
