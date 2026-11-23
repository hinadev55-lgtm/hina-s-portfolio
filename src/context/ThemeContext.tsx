import { createContext, useContext, useLayoutEffect, useState } from 'react'

interface ThemeCtx {
  dark: boolean
  toggleDark: () => void
}

const ThemeContext = createContext<ThemeCtx>({ dark: true, toggleDark: () => {} })
const themeKey = 'hina-portfolio-theme'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(themeKey)
    if (saved === 'dark' || saved === 'light') return saved === 'dark'
  } catch {
    // The system preference is also available when storage is blocked.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(getInitialTheme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  function toggleDark() {
    const next = !dark
    setDark(next)
    try {
      localStorage.setItem(themeKey, next ? 'dark' : 'light')
    } catch {
      // The theme still applies for the current visit.
    }
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
