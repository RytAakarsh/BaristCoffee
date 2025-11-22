"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { useLanguage } from "@/lib/language-context"

export default function AuthModal({
  onClose,
}: {
  onClose: () => void
}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login, googleLogin } = useAuth()
  const { language } = useLanguage()

  const translations = {
    en: {
      login: "Welcome Back",
      email: "Email",
      password: "Password",
      continueGoogle: "Continue with Google",
      createAccount: "New to Barist.Ai?",
      submit: "Sign In",
      or: "or",
      error: "An error occurred. Please try again.",
      invalidEmail: "Please enter a valid email",
    },
    pt: {
      login: "Bem-vindo Novamente",
      email: "Email",
      password: "Senha",
      continueGoogle: "Continuar com Google",
      createAccount: "Novo no Barist.Ai?",
      submit: "Entrar",
      or: "ou",
      error: "Um erro ocorreu. Por favor, tente novamente.",
      invalidEmail: "Por favor, digite um email válido",
    },
  }

  const t = translations[language as keyof typeof translations]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      if (!email.includes("@")) {
        setError(t.invalidEmail)
        setIsLoading(false)
        return
      }

      await login(email, password)
      onClose()
    } catch (err) {
      setError(t.error)
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setError("")
    setIsLoading(true)
    try {
      await googleLogin()
      onClose()
    } catch (err) {
      setError(t.error)
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="animate-slide-up bg-gradient-to-br from-card to-card/95 border border-primary/20 rounded-2xl p-8 max-w-sm w-full shadow-premium-lg">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <img src="/logo.png" alt="Barist.Ai" className="w-8 h-8 object-contain" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">{t.login}</h2>
          <p className="text-sm text-muted-foreground">{t.createAccount}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t.email}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2.5 border border-border/40 rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">{t.password}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2.5 border border-border/40 rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
          </div>

          {error && (
            <div className="px-4 py-3 bg-destructive/10 border border-destructive/30 rounded-lg text-sm text-destructive font-medium">
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold hover:shadow-premium transition-all duration-300 disabled:opacity-50 hover:scale-105 active:scale-95"
          >
            {isLoading ? "..." : t.submit}
          </button>
        </form>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/40"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-card text-muted-foreground font-medium tracking-wide">{t.or}</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full px-4 py-3 border border-border/40 rounded-lg text-foreground hover:bg-muted/50 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3 font-medium hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          {t.continueGoogle}
        </button>

        <button
          onClick={onClose}
          className="w-full mt-6 px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          ✕ Close
        </button>
      </div>
    </div>
  )
}
