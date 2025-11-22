'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import FeedbackForm from './feedback-form'

export default function FeedbackPanel({ onClose, sessionId }) {
  const [rating, setRating] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const { language } = useLanguage()

  const translations = {
    en: {
      title: 'How was your experience?',
      subtitle: 'Your feedback helps us improve',
      labels: ['Not helpful', 'Somewhat helpful', 'Helpful', 'Very helpful', 'Excellent'],
      skipButton: 'Skip for now'
    },
    pt: {
      title: 'Como foi sua experiência?',
      subtitle: 'Seu feedback nos ajuda a melhorar',
      labels: ['Não útil', 'Pouco útil', 'Útil', 'Muito útil', 'Excelente'],
      skipButton: 'Pular por enquanto'
    }
  }

  const t = translations[language as keyof typeof translations]
  const emojis = ['😞', '😐', '🙂', '😊', '😍']

  const handleEmojiClick = (index) => {
    setRating(index + 1)
    setShowForm(true)
  }

  if (showForm && rating) {
    return (
      <FeedbackForm
        rating={rating}
        sessionId={sessionId}
        onClose={onClose}
        onRatingChange={setRating}
      />
    )
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="animate-slide-up bg-gradient-to-br from-card to-card/95 border border-primary/20 rounded-2xl p-8 max-w-sm w-full shadow-premium-lg">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <span className="text-3xl">☕</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
            {t.title}
          </h2>
          <p className="text-sm text-muted-foreground font-light">
            {t.subtitle}
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {emojis.map((emoji, idx) => (
            <button
              key={idx}
              onClick={() => handleEmojiClick(idx)}
              className="text-4xl hover:scale-125 transition-transform duration-300 active:scale-110 hover:animate-pulse-glow"
              title={t.labels[idx]}
              aria-label={t.labels[idx]}
            >
              {emoji}
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground bg-muted/30 hover:bg-muted/50 rounded-lg transition-all duration-300"
        >
          {t.skipButton}
        </button>
      </div>
    </div>
  )
}
