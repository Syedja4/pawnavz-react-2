import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(
    () => localStorage.getItem('pawnavz-theme') || 'dark'
  )

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light')
    localStorage.setItem('pawnavz-theme', theme)
  }, [theme])

  const setTheme = useCallback((nextTheme) => setThemeState(nextTheme), [])
  const value = useMemo(() => ({ theme, setTheme }), [setTheme, theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
