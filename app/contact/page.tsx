"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/lib/language-provider"
import { getTranslation } from "@/lib/translations"

export default function ContactPage() {
  const { language } = useLanguage()

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="border-b border-white/10 dark:border-white/5 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {getTranslation(language, "contact.page_title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{getTranslation(language, "contact.page_description")}</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <ContactForm />
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-white/10 dark:border-white/5 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold mb-4">{getTranslation(language, "contact.build_success")}</h2>
            <p className="text-muted-foreground">{getTranslation(language, "contact.commitment")}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
