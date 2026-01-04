"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-provider"
import { getTranslation } from "@/lib/translations"
import { Briefcase, Users, CheckCircle2, Zap } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

export default function ServicesPage() {
  const { language } = useLanguage()

  const sectors = [
    { key: "construction" },
    { key: "hospitality" },
    { key: "shipbuilding" },
    { key: "metalworking" },
    { key: "textile" },
    { key: "agriculture" },
    { key: "food" },
    { key: "furniture" },
    { key: "electrical" },
  ]

  const process = [
    { step: 1, titleKey: "services.initial_consultation", descKey: "services.initial_consultation_desc" },
    { step: 2, titleKey: "services.candidate_selection", descKey: "services.candidate_selection_desc" },
    { step: 3, titleKey: "services.assessment_options", descKey: "services.assessment_options_desc" },
    { step: 4, titleKey: "services.documentation", descKey: "services.documentation_desc" },
    { step: 5, titleKey: "services.deployment", descKey: "services.deployment_desc" },
    { step: 6, titleKey: "services.ongoing_support", descKey: "services.ongoing_support_desc" },
  ]

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      titleKey: "services.expert_selection",
      descKey: "services.expert_selection_desc",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      titleKey: "services.quality_check",
      descKey: "services.quality_check_desc",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      titleKey: "services.fast_recruitment",
      descKey: "services.fast_recruitment_desc",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      titleKey: "services.full_support",
      descKey: "services.full_support_desc",
    },
  ]

  const assessmentOptions = [
    { titleKey: "services.cv_review", descKey: "services.cv_review_desc" },
    { titleKey: "services.video_intro", descKey: "services.video_intro_desc" },
    { titleKey: "services.online_interview", descKey: "services.online_interview_desc" },
    { titleKey: "services.in_person", descKey: "services.in_person_desc" },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="border-b border-white/10 dark:border-white/5 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {getTranslation(language, "services.page_title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {getTranslation(language, "services.page_description")}
            </p>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sector, i) => (
                <GlassCard key={i}>
                  <span className="text-4xl block mb-3">
                    {sector.key === "construction" && "🏗️"}
                    {sector.key === "hospitality" && "🍽️"}
                    {sector.key === "shipbuilding" && "⚓"}
                    {sector.key === "metalworking" && "🔧"}
                    {sector.key === "textile" && "🧵"}
                    {sector.key === "agriculture" && "🌾"}
                    {sector.key === "food" && "🍖"}
                    {sector.key === "furniture" && "🪑"}
                    {sector.key === "electrical" && "⚡"}
                  </span>
                  <h3 className="font-bold text-lg mb-2">{getTranslation(language, `services.${sector.key}`)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {getTranslation(language, `services.${sector.key}_desc`)}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="border-t border-white/10 dark:border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">{getTranslation(language, "services.how_deliver")}</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, i) => (
                <div key={i} className="text-center">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/20 dark:bg-primary/30 p-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{getTranslation(language, feature.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{getTranslation(language, feature.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recruitment Process */}
        <section className="border-t border-white/10 dark:border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {getTranslation(language, "services.recruitment_process")}
            </h2>
            <div className="space-y-6">
              {process.map((item, i) => (
                <GlassCard key={i}>
                  <div className="flex gap-6 items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{getTranslation(language, item.titleKey)}</h3>
                      <p className="text-muted-foreground text-sm">{getTranslation(language, item.descKey)}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment Options */}
        <section className="border-t border-white/10 dark:border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {getTranslation(language, "services.flexible_assessment")}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {assessmentOptions.map((option, i) => (
                <GlassCard key={i}>
                  <h3 className="font-semibold mb-3">{getTranslation(language, option.titleKey)}</h3>
                  <p className="text-muted-foreground text-sm">{getTranslation(language, option.descKey)}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
