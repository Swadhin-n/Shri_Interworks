"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/lib/language-provider"
import { getTranslation } from "@/lib/translations"
import { Mail, Phone, MapPin, Loader } from "lucide-react"

export function ContactForm() {
  const { language } = useLanguage()
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        e.currentTarget.reset()
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError(getTranslation(language, "contact.error_send"))
      }
    } catch (err) {
      setError(getTranslation(language, "contact.error_generic"))
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-3">
      {/* Contact Information */}
      <div className="lg:col-span-1 space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4">SHRI INTERWORKS</h3>
          <p className="text-muted-foreground mb-6">
            {getTranslation(language, "contact.info_description")}
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <Mail className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold mb-1">{getTranslation(language, "contact.email_label")}</p>
              <a
                href="mailto:info@shriinterworks.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                info@shriinterworks.com
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold mb-1">{getTranslation(language, "contact.phone_label")}</p>
              <a href="tel:+40268123456" className="text-muted-foreground hover:text-primary transition-colors">
                +40 (268) 123-456
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold mb-1">{getTranslation(language, "contact.location_label")}</p>
              <p className="text-muted-foreground">Brașov, Romania</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <strong>{getTranslation(language, "contact.business_hours")}</strong>
            <br />
            {getTranslation(language, "contact.hours_weekday")}
            <br />
            {getTranslation(language, "contact.hours_saturday")}
            <br />
            {getTranslation(language, "contact.hours_sunday")}
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        {submitted ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
            <p className="text-lg font-semibold text-green-900 mb-2">{getTranslation(language, "contact.message_sent")}</p>
            <p className="text-green-700">{getTranslation(language, "contact.success")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value="fd06e06f-297d-4b2e-a034-fdfe3be89686" />

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {getTranslation(language, "contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={getTranslation(language, "contact.name")}
                  required
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {getTranslation(language, "contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={getTranslation(language, "contact.email")}
                  required
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                {getTranslation(language, "contact.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder={getTranslation(language, "contact.phone")}
                required
                className="w-full rounded-lg border border-border bg-card px-4 py-3 transition-colors focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="query" className="block text-sm font-medium mb-2">
                {getTranslation(language, "contact.query")}
              </label>
              <textarea
                id="query"
                name="query"
                placeholder={getTranslation(language, "contact.query")}
                rows={6}
                required
                className="w-full rounded-lg border border-border bg-card px-4 py-3 transition-colors focus:border-primary focus:outline-none resize-none"
              ></textarea>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-700 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && <Loader className="h-4 w-4 animate-spin" />}
              {loading ? getTranslation(language, "contact.sending") : getTranslation(language, "contact.submit")}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
