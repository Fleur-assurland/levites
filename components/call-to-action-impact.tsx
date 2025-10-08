"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"
import { Heart, Mail, Phone } from "lucide-react"
import Link from "next/link"
export function CallToActionImpact() {
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

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Motif de fond subtil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <Heart className="mx-auto mb-8" size={64} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Multiplions notre impact.
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-primary-foreground/90 text-pretty">
              Votre générosité continue de sauver des vies. Ensemble, allons encore plus loin.
              Chaque don, chaque action, chaque sourire partagé contribue à changer des vies.
              Voici ce que votre soutien a déjà permis d'accomplir.
            </p>
          </div>

          {/* Boutons d'action */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <Link href="/dons">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                Faire un Don
              </Button>
            </Link>
            <Link href="/benevoles">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
              >
                Devenir Bénévole
              </Button>
            </Link>
          </div>

          {/* Contact rapide */}
          <div
            className={`grid md:grid-cols-2 gap-6 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <a
              href="mailto:contact@leslevitesinter.com"
              className="flex items-center justify-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm p-4 rounded-xl transition-colors duration-200"
            >
              <Mail size={24} />
              <span className="font-medium">contact@leslevitesinter.com</span>
            </a>
            <a
              href="tel:+225 XXXXXXXX"
              className="flex items-center justify-center gap-3 bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm p-4 rounded-xl transition-colors duration-200"
            >
              <Phone size={24} />
              <span className="font-medium">+225 XXXXXXXX</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
