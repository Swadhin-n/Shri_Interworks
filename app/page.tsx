"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-provider"
import { getTranslation } from "@/lib/translations"
import { useRouter } from "next/navigation"
import { ArrowRight, CheckCircle2, Users, Globe } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

export default function Home() {
  const router = useRouter()
  const { language } = useLanguage()

  const handleNavClick = (href: string) => {
    router.push(href)
    window.scrollTo(0, 0)
  }

  const services = [
    { key: "construction", icon: "🏗️" },
    { key: "hospitality", icon: "🍽️" },
    { key: "shipbuilding", icon: "⚓" },
    { key: "metalworking", icon: "🔧" },
    { key: "textile", icon: "🧵" },
    { key: "agriculture", icon: "🌾" },
    { key: "food", icon: "🍖" },
    { key: "furniture", icon: "🪑" },
    { key: "electrical", icon: "⚡" },
  ]

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: getTranslation(language, "about.dedication"),
      desc: getTranslation(language, "about.dedication_desc"),
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: getTranslation(language, "about.expertise"),
      desc: getTranslation(language, "about.expertise_desc"),
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: getTranslation(language, "about.selection"),
      desc: getTranslation(language, "about.selection_desc"),
    },
  ]

  const valueProps = [
    {
      title: getTranslation(language, "value.tailored"),
      desc: getTranslation(language, "value.tailored_desc"),
    },
    {
      title: getTranslation(language, "value.flexible"),
      desc: getTranslation(language, "value.flexible_desc"),
    },
    {
      title: getTranslation(language, "value.support"),
      desc: getTranslation(language, "value.support_desc"),
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen animated-bg">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              {getTranslation(language, "hero.title")}
            </h1>
            <p className="mt-6 text-balance text-lg text-muted-foreground sm:text-xl">
              {getTranslation(language, "hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={() => handleNavClick("/contact")}
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
              >
                {getTranslation(language, "hero.cta")}
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleNavClick("/about")}
                className="inline-flex items-center justify-center gap-2 backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-lg px-8 py-3 font-semibold transition-all hover:bg-white/15 dark:hover:bg-white/10 hover:shadow-lg hover:shadow-white/20 hover:scale-105"
              >
                {getTranslation(language, "nav.about")}
              </button>
            </div>

            {/* Company Credentials */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <GlassCard>
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground mt-2">{getTranslation(language, "company.experience")}</p>
              </GlassCard>
              <GlassCard>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground mt-2">Workers Placed</p>
              </GlassCard>
              <GlassCard className="col-span-2 sm:col-span-1">
                <p className="text-xs font-medium text-primary">Certified</p>
                <p className="text-sm text-muted-foreground mt-1">{getTranslation(language, "company.license")}</p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="border-t border-white/10 dark:border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {getTranslation(language, "services.title")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">{getTranslation(language, "services.subtitle")}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <GlassCard key={service.key}>
                  <span className="text-3xl block mb-3">{service.icon}</span>
                  <h3 className="font-semibold">{getTranslation(language, `services.${service.key}`)}</h3>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-t border-white/10 dark:border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {getTranslation(language, "about.title")}
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {benefits.map((benefit, i) => (
                <GlassCard key={i}>
                  <div className="mb-4 inline-flex rounded-lg bg-primary/20 p-3 text-primary dark:bg-primary/30 transition-all group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="border-t border-white/10 dark:border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {getTranslation(language, "value.title")}
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {valueProps.map((prop, i) => (
                <GlassCard key={i}>
                  <h3 className="mb-3 font-semibold text-primary">{prop.title}</h3>
                  <p className="text-sm text-muted-foreground">{prop.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="border-t border-white/10 dark:border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {getTranslation(language, "timeline.title")}
            </h2>
            <div className="space-y-6">
              {[
                {
                  label: getTranslation(language, "timeline.recruitment"),
                  duration: getTranslation(language, "timeline.recruitment_duration"),
                },
                {
                  label: getTranslation(language, "timeline.visa"),
                  duration: getTranslation(language, "timeline.visa_duration"),
                },
                {
                  label: getTranslation(language, "timeline.total"),
                  duration: getTranslation(language, "timeline.total_duration"),
                },
              ].map((item, i) => (
                <GlassCard key={i}>
                  <div className="flex items-center gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.label}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.duration}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-white/10 dark:border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              {getTranslation(language, "contact.subtitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Ready to transform your team with exceptional talent?</p>
            <button
              onClick={() => handleNavClick("/contact")}
              className="btn-glow inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-95 text-lg"
            >
              {getTranslation(language, "contact.title")}
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
