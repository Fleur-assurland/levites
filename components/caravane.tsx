"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, CalendarDays, HeartHandshake, Users } from "lucide-react"

export function Caravane() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="caravane" ref={sectionRef} className="py-20 md:py-32 bg-muted">
            <div className="container mx-auto px-4 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        Apporter l'espoir là où il manque
                    </h2>
                    <p
                        className={`text-lg text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        Chaque étape de la caravane est une rencontre, un sourire, une vie changée.
                    </p>
                </div>

                {/* Caravanes passées */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            image: "/cara-bouake.png",
                            title: "Caravane 2022 – Bouaké",
                            description:
                                "Près de 800 personnes dépistées et 300 consultations gratuites réalisées. Une édition marquée par la solidarité et la foi.",
                        },
                        {
                            image: "/cara-korhogo.png",
                            title: "Caravane 2023 – Korhogo",
                            description:
                                "Une équipe de 40 bénévoles mobilisée. 1 200 bénéficiaires et des ateliers de prévention dans les écoles locales.",
                        },
                        {
                            image: "/cara-grandb.png",
                            title: "Caravane 2024 – Grand-Bassam",
                            description:
                                "Une grande mobilisation autour de la santé des femmes et des enfants, avec plus de 1 500 participants.",
                        },
                    ].map((caravane, i) => (
                        <div
                            key={i}
                            className={`bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${0.5 + i * 0.15}s` }}
                        >
                            <img
                                src={caravane.image}
                                alt={caravane.title}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-foreground mb-2">{caravane.title}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{caravane.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Prochaine caravane */}
                <div
                    className={`bg-accent text-accent-foreground p-10 rounded-3xl shadow-2xl mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                    style={{ transitionDelay: "1.2s" }}
                >
                    <div className="text-center mb-6">
                        <h3 className="text-3xl font-bold mb-2">Prochaine Caravane 2025</h3>
                        <p className="text-lg">
                            Ensemble, préparons la prochaine étape de notre mission humanitaire.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <CalendarDays size={36} className="mb-2" />
                            <p className="font-semibold">Décembre 2025</p>
                            <span className="text-sm text-muted-foreground">Prochaine édition</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <MapPin size={36} className="mb-2" />
                            <p className="font-semibold">Man, Côte d'Ivoire</p>
                            <span className="text-sm text-muted-foreground">Région des montagnes</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Users size={36} className="mb-2" />
                            <p className="font-semibold">+60 bénévoles</p>
                            <span className="text-sm text-muted-foreground">Médecins, infirmiers, jeunes volontaires</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <HeartHandshake size={36} className="mb-2" />
                            <p className="font-semibold">Partenaires</p>
                            <span className="text-sm text-muted-foreground">Hôpitaux, ONG, entreprises locales</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
