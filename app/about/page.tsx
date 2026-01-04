"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-provider"
import { getTranslation } from "@/lib/translations"
import { CheckCircle2, Award, Users, Globe } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

export default function AboutPage() {
  const { language } = useLanguage()

  const highlights = [
    {
      icon: <Award className="h-8 w-8" />,
      title: getTranslation(language, "about.certified"),
      desc: getTranslation(language, "about.certified_desc"),
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: getTranslation(language, "about.expert_team"),
      desc: getTranslation(language, "about.expert_team_desc"),
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: getTranslation(language, "about.international_reach"),
      desc: getTranslation(language, "about.international_reach_desc"),
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: getTranslation(language, "about.quality_assurance"),
      desc: getTranslation(language, "about.quality_assurance_desc"),
    },
  ]

  const countries = ["India", "Nepal", "Sri Lanka", "Vietnam"]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="border-b border-white/10 dark:border-white/5 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {getTranslation(language, "about.page_title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{getTranslation(language, "about.page_description")}</p>
          </div>
        </section>

        {/* About Content */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">{getTranslation(language, "about.company_heading")}</h2>
                <p className="text-lg text-muted-foreground mb-4">{getTranslation(language, "company.tagline")}</p>
                <p className="text-muted-foreground mb-4">{getTranslation(language, "about.company_description")}</p>
                <p className="text-muted-foreground">{getTranslation(language, "about.mission")}</p>
              </div>
              <GlassCard className="h-fit">
                <h3 className="text-xl font-bold mb-6">{getTranslation(language, "about.credentials")}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{getTranslation(language, "about.registered")}</p>
                      <p className="text-sm text-muted-foreground">{getTranslation(language, "company.name")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{getTranslation(language, "about.license_text")}</p>
                      <p className="text-sm text-muted-foreground">J08/2781/2019</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{getTranslation(language, "about.authority")}</p>
                      <p className="text-sm text-muted-foreground">{getTranslation(language, "about.chamber")}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{getTranslation(language, "company.experience")}</p>
                      <p className="text-sm text-muted-foreground">{getTranslation(language, "about.hr_experience")}</p>
                    </div>
                  </li>
                </ul>
              </GlassCard>
            </div>

            {/* Highlights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">{getTranslation(language, "about.standout")}</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {highlights.map((item, i) => (
                  <GlassCard key={i}>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/20 p-3 text-primary dark:bg-primary/30">
                      {item.icon}
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Source Countries */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {getTranslation(language, "about.global_network")}
              </h2>
              <p className="text-center text-lg text-muted-foreground mb-8">
                {getTranslation(language, "about.connect_talent")}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {countries.map((country) => (
                  <GlassCard key={country} className="text-center">
                    <p className="font-semibold text-lg">{country}</p>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* Asian Workers Benefits */}
            <GlassCard>
              <h2 className="text-2xl font-bold mb-6">{getTranslation(language, "about.why_asian")}</h2>
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>
                    <strong>{getTranslation(language, "about.dedication_point")}:</strong>{" "}
                    {getTranslation(language, "about.dedication_benefit")}
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>
                    <strong>{getTranslation(language, "about.adaptability")}:</strong>{" "}
                    {getTranslation(language, "about.adaptability_benefit")}
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>
                    <strong>{getTranslation(language, "about.fast_learners")}:</strong>{" "}
                    {getTranslation(language, "about.fast_learners_benefit")}
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>
                    <strong>{getTranslation(language, "about.discipline")}:</strong>{" "}
                    {getTranslation(language, "about.discipline_benefit")}
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>
                    <strong>{getTranslation(language, "about.team_players")}:</strong>{" "}
                    {getTranslation(language, "about.team_players_benefit")}
                  </span>
                </p>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
