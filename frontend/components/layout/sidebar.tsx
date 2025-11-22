"use client"

import { useLanguage } from "@/lib/language-context"
import AuthModal from "@/components/auth/auth-modal"
import { useState } from "react"

interface ChatHistory {
  id: string
  query: string
  timestamp: number
}

export default function Sidebar({
  user,
  history,
  onLoadFromHistory,
}: {
  user: any
  history: ChatHistory[]
  onLoadFromHistory: (query: string) => void
}) {
  const { language } = useLanguage()
  const [showAuthDropdown, setShowAuthDropdown] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)

  const translations = {
    en: {
      recentSearches: "Recent Searches",
      noHistory: "Your search history will appear here",
      signInToSave: "Sign in to save history",
      newChat: "New Chat",
      signIn: "Sign In",
    },
    pt: {
      recentSearches: "Pesquisas Recentes",
      noHistory: "Seu histórico de pesquisa aparecerá aqui",
      signInToSave: "Faça login para salvar histórico",
      newChat: "Novo Chat",
      signIn: "Entrar",
    },
  }

  const t = translations[language as keyof typeof translations]

  return (
    <aside className="hidden lg:flex w-72 flex-col border-r border-border/40 bg-white backdrop-blur-sm">
      <div className="p-6 border-b border-border/30">
        <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold hover:shadow-premium transition-all duration-300 hover:scale-105 active:scale-95 text-sm">
          ✨ {t.newChat}
        </button>
      </div>

      {user ? (
        <div className="flex-1 overflow-y-auto p-5">
          <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
            <img src="/historyiconlogo.jpg" alt="Barist.Ai" className="w-5 h-5" />
            {t.recentSearches}
          </h3>
          <div className="space-y-2">
            {history.length > 0 ? (
              history
                .slice(-20)
                .reverse()
                .map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => onLoadFromHistory(item.query)}
                    className="w-full text-left px-4 py-3 text-sm text-foreground hover:text-primary bg-transparent hover:bg-primary/10 rounded-lg transition-all duration-300 truncate border border-transparent hover:border-primary/30 group"
                    title={item.query}
                  >
                    <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                      {item.query}
                    </span>
                  </button>
                ))
            ) : (
              <p className="text-xs text-muted-foreground py-8 text-center">{t.noHistory}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center bg-white">
          <img src="/images/historyiconlogo.jpg" alt="Barist.Ai" className="w-20 h-20 mb-2 object-contain" />
          <p className="text-xs text-muted-foreground leading-relaxed">{t.signInToSave}</p>
        </div>
      )}

      <div className="border-t border-border/30 p-4 relative">
        <button
          onClick={() => setShowAuthDropdown(!showAuthDropdown)}
          className="relative w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 text-primary transition-all duration-300 hover:shadow-premium flex items-center justify-center group"
          title={user ? user.name : language === "en" ? "Sign In" : "Entrar"}
        >
          <span className="text-lg group-hover:scale-125 transition-transform duration-300">👤</span>
        </button>

        {showAuthDropdown && !user && (
          <div className="absolute bottom-full left-4 right-auto mb-2 bg-card border border-border/30 rounded-lg shadow-xl overflow-hidden z-50 backdrop-blur-sm min-w-max">
            <button
              onClick={() => {
                setShowAuthModal(true)
                setShowAuthDropdown(false)
              }}
              className="px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-primary/10 transition-colors whitespace-nowrap w-full"
            >
              {t.signIn}
            </button>
          </div>
        )}
      </div>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </aside>
  )
}
