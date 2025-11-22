'use client'

import { useState } from 'react'

export default function MobileNav({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border lg:hidden">
          <div className="p-4 space-y-3">
            {user ? (
              <>
                <div className="px-4 py-2">
                  <p className="text-sm font-medium text-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <button
                  onClick={() => {
                    onLogout()
                    setIsOpen(false)
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary rounded transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="w-full px-4 py-2 text-sm text-foreground hover:bg-secondary rounded transition-colors">
                  Login
                </button>
                <button className="w-full px-4 py-2 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
