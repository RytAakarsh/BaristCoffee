'use client'

import { useState } from 'react'

export default function UserProfileMenu({ user, onLogout }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 hover:bg-secondary rounded-lg transition-colors"
      >
        <img
          src={user.photoUrl || '/placeholder.svg?height=32&width=32&query=user avatar'}
          alt={user.name}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm text-foreground hidden sm:inline">{user.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-10">
          <div className="px-4 py-3 border-b border-border">
            <p className="text-sm font-medium text-foreground">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <button
            onClick={() => {
              onLogout()
              setIsOpen(false)
            }}
            className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
