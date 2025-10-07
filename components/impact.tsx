"use client"

import { useEffect, useRef, useState } from "react"

export function Impact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "2,500+", label: "Patients accompagnés", delay: "0s" },
    { number: "15", label: "Années d'engagement", delay: "0.2s" },
    { number: "50+", label: "Professionnels mobilisés", delay: "0.4s" },
    { number: "98%", label: "Taux de satisfaction", delay: "0.6s" },
  ]

  return (
    <section id="impact" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Notre lutte, leurs victoires
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Chaque chiffre représente une vie touchée, une famille soutenue, un espoir renouvelé.
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: stat.delay,
              }}
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">{stat.number}</div>
              <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Image principale avec texte */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/health.jpg"
            alt="Accompagnement des patients"
            className="w-full h-[500px] md:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end">
            <div className="p-8 md:p-12 lg:p-16">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
                Un accompagnement humain au cœur de notre mission
              </h3>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed text-pretty">
                Nous croyons que derrière chaque diagnostic, il y a une personne, une famille, une histoire. Notre
                approche place l'humain au centre de tout ce que nous faisons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
