'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { sendFeedback } from "@/lib/api";

const BRAZIL_STATES = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA',
  'MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN',
  'RS','RO','RR','SC','SP','SE','TO'
]

const COUNTRIES = [
  'United States','Canada','United Kingdom','Australia','Germany',
  'France','Japan','Brazil','India','Mexico','Other'
]

export default function FeedbackForm({ rating, sessionId, onClose, onRatingChange }) {
  const [yearOfBirth, setYearOfBirth] = useState('')
  const [sex, setSex] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [comments, setComments] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { language } = useLanguage()

  const translations = {
    en: {
      tellUs: 'Tell us more',
      rating: 'Rating',
      yearOfBirth: 'Year of birth',
      sex: 'Sex',
      country: 'Country',
      state: 'State',
      comments: 'Comments',
      selectPlaceholder: 'Select...',
      male: 'Male',
      female: 'Female',
      other: 'Other',
      commentPlaceholder: 'Tell us what you think...',
      cancel: 'Cancel',
      submit: 'Submit',
      submitting: 'Submitting...',
      missingFields: 'Please fill in all required fields',
      thanks: 'Thanks for your feedback!',
      appreciation: 'We appreciate your input and will use it to improve',
      yearPlaceholder: '1990'
    },
    pt: {
      tellUs: 'Conte-nos mais',
      rating: 'Classificação',
      yearOfBirth: 'Ano de nascimento',
      sex: 'Sexo',
      country: 'País',
      state: 'Estado',
      comments: 'Comentários',
      selectPlaceholder: 'Selecione...',
      male: 'Masculino',
      female: 'Feminino',
      other: 'Outro',
      commentPlaceholder: 'Conte-nos o que você pensa...',
      cancel: 'Cancelar',
      submit: 'Enviar',
      submitting: 'Enviando...',
      missingFields: 'Por favor, preencha todos os campos obrigatórios',
      thanks: 'Obrigado pelo seu feedback!',
      appreciation: 'Apreciamos sua contribuição e a usaremos para melhorar',
      yearPlaceholder: '1990'
    }
  }

  const t = translations[language as keyof typeof translations]

  // -----------------------------
  // ✔ FIXED handleSubmit function
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!yearOfBirth || !sex || !country || (country === 'Brazil' && !state)) {
      setError(t.missingFields)
      return
    }

    setIsSubmitting(true)

    try {
      const feedbackData = {
        stars: rating,
        yearOfBirth: parseInt(yearOfBirth),
        sex,
        country,
        state: country === 'Brazil' ? state : null,
        comments
      }

      const res = await sendFeedback(feedbackData)

      if (!res.ok) {
        setError("Failed to submit feedback")
        return
      }

      setSubmitted(true)

      setTimeout(() => {
        onClose()
      }, 2000)

    } catch (err) {
      console.error(err)
      setError("Failed to submit feedback")
    } finally {
      setIsSubmitting(false)
    }
  }

  // -----------------------------
  // SUCCESS SCREEN
  // -----------------------------
  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="animate-slide-up bg-gradient-to-br from-card to-card/95 border border-primary/20 rounded-2xl p-8 max-w-sm w-full shadow-premium-lg text-center">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 animate-pulse-glow">
            <span className="text-4xl">✨</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
            {t.thanks}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t.appreciation}
          </p>
        </div>
      </div>
    )
  }

  // -----------------------------
  // FORM UI
  // -----------------------------
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="animate-slide-up bg-gradient-to-br from-card to-card/95 border border-primary/20 rounded-2xl p-8 max-w-sm w-full shadow-premium-lg max-h-[90vh] overflow-y-auto">
        
        <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
          {t.tellUs}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Rating Stars */}
          <div>
            <label className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
              {t.rating} <span className="text-primary">{rating || '—'}/5</span>
            </label>
            <div className="flex gap-3 justify-center">
              {[1,2,3,4,5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => onRatingChange(star)}
                  className={`text-3xl transition-all duration-300 hover:scale-110 ${
                    star <= (rating || 0) ? 'text-primary scale-110' : 'text-muted-foreground'
                  }`}
                >★</button>
              ))}
            </div>
          </div>

          {/* Year */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t.yearOfBirth} <span className="text-destructive">*</span>
            </label>
            <input
              type="number"
              value={yearOfBirth}
              onChange={(e) => setYearOfBirth(e.target.value)}
              placeholder={t.yearPlaceholder}
              min="1900"
              max={new Date().getFullYear()}
              className="w-full px-4 py-2.5 border rounded-lg bg-input text-sm focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Sex */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t.sex} <span className="text-destructive">*</span>
            </label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="w-full px-4 py-2.5 border rounded-lg bg-input text-sm focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">{t.selectPlaceholder}</option>
              <option value="Male">{t.male}</option>
              <option value="Female">{t.female}</option>
              <option value="Other">{t.other}</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t.country} <span className="text-destructive">*</span>
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-2.5 border rounded-lg bg-input text-sm focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">{t.selectPlaceholder}</option>
              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          {/* State (Brazil only) */}
          {country === 'Brazil' && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t.state} <span className="text-destructive">*</span>
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-4 py-2.5 border rounded-lg bg-input text-sm focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">{t.selectPlaceholder}</option>
                {BRAZIL_STATES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          )}

          {/* Comments */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {t.comments}
            </label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder={t.commentPlaceholder}
              rows={3}
              className="w-full px-4 py-2.5 border rounded-lg bg-input text-sm resize-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="px-4 py-3 bg-destructive/10 border border-destructive/30 rounded-lg text-sm text-destructive font-medium">
              ⚠️ {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 text-sm font-medium border rounded-lg hover:bg-muted/40"
            >
              {t.cancel}
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
