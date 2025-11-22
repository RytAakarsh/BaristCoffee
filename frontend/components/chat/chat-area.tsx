"use client"

import { useLanguage } from "@/lib/language-context"

export default function ChatArea({ messages, isLoading }) {
  const { language } = useLanguage()

  const heroMessages = {
    en: "Welcome to your premium coffee experience. I'm Barist.Ai, your expert guide to everything coffee. Ask about brewing methods, bean origins, flavor profiles, or coffee culture—I'm here to inspire your perfect cup.",
    pt: "Bem-vindo à sua experiência premium de café. Sou o Barist.Ai, seu guia especialista em tudo relacionado a café. Pergunte sobre métodos de preparo, origens dos grãos, perfis de sabor ou cultura do café—estou aqui para inspirar sua xícara perfeita.",
  }

  const welcomeTitles = {
    en: "Welcome to Barist.Ai",
    pt: "Bem-vindo ao Barist.Ai",
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 bg-gradient-to-b from-background via-background to-secondary/20">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-center">
          <div className="mb-8 animate-slide-up">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center mb-6 shadow-premium animate-pulse-glow">
              <img src="/logo.png" alt="Barist.Ai" className="w-12 h-12 object-contain animate-rotate-slow" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
              {welcomeTitles[language as keyof typeof welcomeTitles]}
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto font-light">
              {heroMessages[language as keyof typeof heroMessages]}
            </p>
          </div>

          {/* Coffee tips grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 w-full max-w-2xl">
            {[
              { icon: "🌍", title: language === "en" ? "Bean Origins" : "Origens dos Grãos" },
              { icon: "⏱️", title: language === "en" ? "Brew Timing" : "Tempo de Preparo" },
              { icon: "🔥", title: language === "en" ? "Temperature" : "Temperatura" },
              { icon: "💧", title: language === "en" ? "Water Ratio" : "Proporção de Água" },
            ].map((tip, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border/30 bg-card/50 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <span className="text-2xl block mb-2">{tip.icon}</span>
                <p className="text-sm font-medium text-foreground">{tip.title}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {messages.map((msg, idx) => (
            <div
              key={msg.id}
              className={`flex animate-fade-in ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div
                className={`max-w-xs lg:max-w-2xl px-5 py-4 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-br-none shadow-premium"
                    : "bg-card border border-border/40 text-foreground rounded-bl-none backdrop-blur-sm"
                }`}
              >
                <p className="text-sm lg:text-base leading-relaxed whitespace-pre-wrap font-medium">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-slide-up">
              <div className="bg-card border border-border/40 px-5 py-4 rounded-2xl rounded-bl-none backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-bounce"></div>
                  <div
                    className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-primary/80 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
