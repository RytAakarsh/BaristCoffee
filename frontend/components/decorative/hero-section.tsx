"use client"

import { useLanguage } from "@/lib/language-context"

export default function HeroSection() {
  const { language } = useLanguage()

  const heroContent = {
    en: {
      greeting: "Hi! I'm Barist.Ai",
      description:
        "I can help you with types of beans, brewing methods, regions and where to buy the best specialty coffees.",
      question: "What's your coffee question today?",
    },
    pt: {
      greeting: "Olá! Sou o Barist.Ai",
      description:
        "Posso ajudar você com tipos de torra, métodos de extração, regiões produtoras e onde comprar os melhores cafés especiais.",
      question: "Qual sua dúvida sobre café hoje?",
    },
  }

  const content = heroContent[language as keyof typeof heroContent]

  return (
    <div className="h-full w-full flex flex-col lg:flex-row-reverse items-center justify-between p-6 lg:p-12 gap-8 lg:gap-12 bg-white from-background via-background to-primary/5 overflow-hidden">
      {/* Right Content */}
      <div className="flex-1 flex flex-col justify-between min-h-full animate-slide-down">
        {/* Main Content */}
        <div className="flex flex-col justify-center space-y-6 flex-1">
          <div>
            <h1 className="text-3xl lg:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
              {content.greeting}
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-light max-w-lg">
              {content.description}
            </p>
          </div>

          {/* Question */}
          <p className="text-base font-medium text-foreground pt-4">{content.question}</p>
        </div>
      </div>

      {/* Left Content */}
      <div className="flex-1 flex items-center justify-center lg:justify-start animate-slide-in-right min-h-96 lg:min-h-full">
        <div className="relative w-full max-w-sm h-full flex items-center justify-center">
          <img
            src="/images/image.png"
            alt="Barist.Ai Expert Barista"
            className="w-full h-full object-contain"
            loading="lazy"
            crossOrigin="anonymous"
          />
        </div>
      </div>
    </div>
  )
}
