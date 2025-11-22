"use client"

import { useAuth } from "@/lib/auth-context"
import { useLanguage } from "@/lib/language-context"
import AuthModal from "@/components/auth/auth-modal"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const { user, logout, isLoading } = useAuth()
  const { language, setLanguage } = useLanguage()
  const [showAuth, setShowAuth] = useState(false)

  return (
    <>
      <header className="border-b border-border/40 bg-card/95 backdrop-blur-xl px-6 py-4 flex items-center justify-between shadow-premium sticky top-0 z-20">
        <div className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity">
          <Image src="/logo.png" alt="Barist.Ai" width={180} height={70} className="h-14 w-auto" priority />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-1 bg-muted rounded-full p-1.5 backdrop-blur-sm border border-border/30">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                language === "en"
                  ? "bg-primary text-primary-foreground shadow-premium scale-105"
                  : "text-foreground hover:text-primary"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("pt")}
              className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                language === "pt"
                  ? "bg-primary text-primary-foreground shadow-premium scale-105"
                  : "text-foreground hover:text-primary"
              }`}
            >
              PT
            </button>
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              {user.photoUrl && (
                <img
                  src={user.photoUrl || "/placeholder.svg"}
                  alt={user.name}
                  className="w-9 h-9 rounded-full border-2 border-primary/50 shadow-premium"
                />
              )}
              <span className="text-sm font-medium text-foreground hidden sm:inline">{user.name}</span>
              <button
                onClick={() => logout()}
                disabled={isLoading}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 disabled:opacity-50"
              >
                {language === "en" ? "Logout" : "Sair"}
              </button>
            </div>
          ) : null}
        </div>
      </header>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  )
}
