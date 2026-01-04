"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useLanguage } from "@/lib/language-provider"
import { getTranslation } from "@/lib/translations"
import { Menu, X, Globe, Moon, Sun } from "lucide-react"

const languages = [
  { code: "en" as const, label: "English" },
  { code: "ro" as const, label: "Română" },
  { code: "es" as const, label: "Español" },
  { code: "de" as const, label: "Deutsch" },
  { code: "fr" as const, label: "Français" },
]

export function Header() {
  const router = useRouter()
  const { language, setLanguage, isDark, setIsDark } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const handleThemeToggle = () => {
    setIsDark(!isDark)
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    router.push(href)
    window.scrollTo(0, 0)
  }

  const navItems = [
    { label: getTranslation(language, "nav.home"), href: "/" },
    { label: getTranslation(language, "nav.services"), href: "/services" },
    { label: getTranslation(language, "nav.about"), href: "/about" },
    { label: getTranslation(language, "nav.contact"), href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-white/[0.08] dark:bg-white/[0.03] border-b border-white/20 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-all duration-300 hover:opacity-80"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src="/logo.webp" alt="SHRI INTERWORKS" className="h-10 w-auto" />
          <span className="hidden font-bold text-primary sm:inline text-lg">SHRI INTERWORKS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="backdrop-blur-md bg-white/[0.08] dark:bg-white/[0.05] border border-white/[0.15] dark:border-white/[0.08] flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/[0.15] dark:hover:bg-white/[0.1] hover:shadow-lg hover:shadow-primary/20"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            {isLangOpen && (
              <div className="absolute right-0 top-full mt-2 w-40 backdrop-blur-2xl bg-white/[0.1] dark:bg-white/[0.05] border border-white/20 dark:border-white/10 rounded-lg shadow-2xl shadow-black/20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setIsLangOpen(false)
                    }}
                    className="block w-full px-4 py-2 text-left text-sm transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/15 first:rounded-t-lg last:rounded-b-lg hover:translate-x-1"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="backdrop-blur-md bg-white/[0.08] dark:bg-white/[0.05] border border-white/[0.15] dark:border-white/[0.08] rounded-lg p-2 transition-all duration-300 hover:bg-white/[0.15] dark:hover:bg-white/[0.1] hover:shadow-lg hover:shadow-primary/20 hover:scale-110"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="backdrop-blur-2xl bg-white/[0.08] dark:bg-white/[0.03] border-t border-white/20 dark:border-white/10 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-left transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 hover:translate-x-2"
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-white/20 dark:border-white/10 pt-4">
              <p className="mb-3 text-xs font-medium opacity-60">LANGUAGE</p>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setIsMenuOpen(false)
                    }}
                    className={`rounded-lg px-2 py-1 text-xs font-medium transition-all duration-300 ${
                      language === lang.code
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                        : "backdrop-blur-md bg-white/[0.08] dark:bg-white/[0.05] border border-white/[0.15] dark:border-white/[0.08] hover:bg-white/[0.15] dark:hover:bg-white/[0.1]"
                    } hover:scale-105`}
                  >
                    {lang.code.toUpperCase()}
                  </button> 
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
