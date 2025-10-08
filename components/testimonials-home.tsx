"use client"

import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

export function TestimonialsHome() {
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

  const testimonials = [
    {
      quote: "Grâce aux LEVITES INTER, j'ai retrouvé l'espoir. Leur soutien a été précieux pendant mon traitement.",
      author: "Marie D.",
      role: "Patiente accompagnée",
    },
    {
      quote:
        "L'équipe m'a aidé à comprendre ma maladie et à accéder aux soins dont j'avais besoin. Je leur serai éternellement reconnaissant.",
      author: "Jean-Paul K.",
      role: "Bénéficiaire du programme hépatites",
    },
    {
      quote: "En tant que famille, nous avons été soutenus à chaque étape. Leur humanité fait toute la différence.",
      author: "Sophie M.",
      role: "Famille accompagnée",
    },
  ]

  return (
    <section id="temoignages" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Ecoutez leurs histoires
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Des histoires de courage, d'espoir et de solidarité.
          </p>
        </div>

        {/* Témoignages */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-2xl shadow-lg transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 0.2}s`,
              }}
            >
              <Quote className="text-accent mb-6" size={40} />
              <p className="text-lg text-card-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-6">
                <p className="font-bold text-card-foreground">{testimonial.author}</p>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
