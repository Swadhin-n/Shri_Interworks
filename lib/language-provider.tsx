"use client"

import React from "react"
import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "ro" | "es" | "de" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isDark: boolean
  setIsDark: (dark: boolean) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isDark, setIsDark] = useState(false)

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark)
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const handleSetTheme = (dark: boolean) => {
    setIsDark(dark)
    localStorage.setItem("theme", dark ? "dark" : "light")
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isDark, setIsDark: handleSetTheme }}>
      {children}
    </LanguageContext.Provider>
  )
}
