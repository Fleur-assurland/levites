"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Shield, Users, Stethoscope } from "lucide-react"

export function Programs() {
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

  const programs = [
    {
      icon: Heart,
      title: "Lutte contre le cancer",
      description:
        "Accompagnement des patients et de leurs familles tout au long du parcours de soins, avec un soutien psychologique et matériel.",
      image: "/lutte.png",
    },
    {
      icon: Shield,
      title: "Prévention des hépatites",
      description:
        "Campagnes de dépistage, sensibilisation et vaccination pour prévenir la transmission des hépatites virales dans les communautés.",
      image: "/prevention.jpg",
    },
    {
      icon: Users,
      title: "Soutien aux familles",
      description:
        "Groupes de parole, aide financière et accompagnement social pour les familles touchées par la maladie.",
      image: "/soutiens.jpg",
    },
    {
      icon: Stethoscope,
      title: "Accès aux soins",
      description:
        "Facilitation de l'accès aux traitements et aux soins de qualité pour les populations les plus vulnérables.",
      image: "/soins.jpg",
    },
  ]

  return (
    <section id="programmes" ref={sectionRef} className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Nos programmes d'action
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Des actions concrètes pour faire la différence chaque jour
          </p>
        </div>

        {/* Grille de programmes */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                className={`group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 0.15}s`,
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-accent text-accent-foreground p-3 rounded-xl">
                      <Icon size={28} />
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">{program.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{program.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
