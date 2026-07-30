import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeCtx {
  dark: boolean
  toggleDark: () => void
}

const ThemeContext = createContext<ThemeCtx>({ dark: true, toggleDark: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    if (dark) document.body.classList.add('dark-mode')
    else document.body.classList.remove('dark-mode')
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, toggleDark: () => setDark((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
