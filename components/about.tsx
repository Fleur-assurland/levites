"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Eye, Award } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="a-propos" ref={sectionRef} className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Qui sommes-nous ?
          </h2>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="/levites.png"
              alt="L'équipe LES LEVITES INTER"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Texte */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">LES LEVITES INTER</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Fondée il y a 15 ans, LES LEVITES INTER est une organisation humanitaire dédiée à la lutte contre le
              cancer et les hépatites virales. Notre mission est d'apporter un soutien concret et humain aux personnes
              touchées par ces maladies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nous croyons fermement que chaque personne mérite un accès équitable aux soins, un accompagnement
              bienveillant et l'espoir d'un avenir meilleur. C'est pourquoi nous travaillons sans relâche pour offrir
              des programmes de prévention, de dépistage et de soutien adaptés aux besoins de chaque communauté.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Notre force réside dans notre équipe dévouée de professionnels de santé, de bénévoles et de partenaires
              qui partagent notre vision d'un monde où personne ne lutte seul contre la maladie.
            </p>
          </div>
        </div>

        {/* Valeurs */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Notre Mission",
              description:
                "Accompagner, soutenir et donner de l'espoir à chaque personne touchée par le cancer ou les hépatites virales.",
            },
            {
              icon: Eye,
              title: "Notre Vision",
              description:
                "Un monde où chacun a accès à des soins de qualité et où personne ne lutte seul contre la maladie.",
            },
            {
              icon: Award,
              title: "Nos Valeurs",
              description:
                "Compassion, dignité, excellence et engagement envers les plus vulnérables de nos communautés.",
            },
          ].map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className={`bg-card p-8 rounded-2xl shadow-lg text-center transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${0.4 + index * 0.15}s`,
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-xl mb-6">
                  <Icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-card-foreground mb-4">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
