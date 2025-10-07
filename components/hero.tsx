"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ensemble.jpg"
          alt="Communauté unie dans la lutte"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight text-balance">
            <span className="text-red-600">STOP</span> au cancer
            <br />
            et aux hépatites virales
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
            Chaque jour, nous luttons aux côtés de ceux qui en ont besoin. Chaque geste compte. Chaque vie compte.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#impact"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={40} className="text-white" />
      </a>
    </section>
  )
}
