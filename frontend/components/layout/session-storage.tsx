'use client'

import { useState, useEffect, useCallback } from 'react'

// Client-side storage for session history (will be replaced with server calls for logged-in users)
export const useSessionHistory = (sessionId) => {
  const [history, setHistory] = useState([])

  const addToHistory = useCallback((query) => {
    setHistory(prev => {
      const filtered = prev.filter(item => item.query !== query)
      return [
        { query, timestamp: Date.now() },
        ...filtered
      ].slice(0, 50)
    })
  }, [])

  const clearHistory = useCallback(() => {
    setHistory([])
  }, [])

  return { history, addToHistory, clearHistory }
}
