"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export default function ChatInput({ onSendMessage, isLoading }) {
  const [input, setInput] = useState("")
  const { language } = useLanguage()

  const translations = {
    en: { placeholder: "Ask about coffee, brewing, beans…" },
    pt: { placeholder: "Pergunte sobre café, preparo, grãos…" },
  }

  const t = translations[language as keyof typeof translations]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onSendMessage(input)
      setInput("")
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gradient-to-t from-background to-transparent">
      <div className="flex items-center gap-3 bg-card border-2 border-border/30 hover:border-primary/30 rounded-full px-5 py-3.5 transition-all duration-300 shadow-premium focus-within:shadow-premium-lg focus-within:border-primary/50 group">
        <img
          src="/images/chaticonlogo.jpg"
          alt="Barist.Ai"
          className="w-10 h-10  object-contain "
        />

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t.placeholder}
          className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground text-base font-medium"
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="text-primary hover:text-primary/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95 group-focus-within:text-primary"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-1.429 5.951 1.429a1 1 0 001.169-1.409l-7-14z" />
          </svg>
        </button>
      </div>
    </form>
  )
}
