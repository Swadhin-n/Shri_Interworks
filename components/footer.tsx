"use client"

import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/language-provider"
import { getTranslation } from "@/lib/translations"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const router = useRouter()
  const { language } = useLanguage()

  const handleNavClick = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="border-t border-white/10 dark:border-white/5 backdrop-blur-md bg-white/10 dark:bg-white/5">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <img src="/logo.webp" alt="SHRI INTERWORKS" className="mb-3 h-10 w-auto" />
            <h3 className="font-bold text-primary">SC SHRI INTERWORKS SRL</h3>
            <p className="mt-2 text-sm text-muted-foreground">{getTranslation(language, "company.tagline")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(language, "footer.about")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick("/about")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {getTranslation(language, "nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("/services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {getTranslation(language, "nav.services")}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(language, "footer.services")}</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">{getTranslation(language, "services.construction")}</li>
              <li className="text-muted-foreground">{getTranslation(language, "services.hospitality")}</li>
              <li className="text-muted-foreground">{getTranslation(language, "services.shipbuilding")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{getTranslation(language, "footer.contact")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@shriinterworks.com" className="hover:text-primary transition-colors">
                  info@shriinterworks.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+40268123456" className="hover:text-primary transition-colors">
                  +40 (268) 123-456
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Brașov, Romania</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 dark:border-white/5 mt-8 pt-8 text-center text-sm text-muted-foreground">
          {getTranslation(language, "footer.rights")}
          <p className="mt-3 text-xs">Made with <span className="text-white">❤️</span> by Swadhin Upadhyay</p>
        </div>
      </div>
    </footer>
  )
}
