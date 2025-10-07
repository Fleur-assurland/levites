"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, HandHeart, Users, Clock } from "lucide-react"

export function Don() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="dons" ref={sectionRef} className="relative overflow-hidden bg-background">
            <div className="relative py-16 md:py-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Soft badge */}
                        <div
                            className={`inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            <Heart className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">Ils ont besoin de vous</span>
                        </div>

                        {/* Main emotional headline */}
                        <p
                            className={`text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            Un petit geste peut tout changer. Avec votre soutien, nous offrons des soins, des médicaments et un
                            accompagnement humain à ceux qui se battent contre le cancer et les hépatites.
                            <span className="block mt-4 text-foreground font-semibold">" Votre don, c'est plus qu'une aide — C'est une vie sauvée. "</span>
                        </p>

                        {/* Soft stats */}
                        <div
                            className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            {[
                                { number: "847", label: "familles aidées" },
                                { number: "3 min", label: "pour donner" },
                                { number: "98%", label: "vont aux soins" },
                                { number: "24/7", label: "urgences" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-4 bg-card rounded-2xl border border-border">
                                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 md:py-20 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            {/* Image side */}
                            <div
                                className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/women.jpg"
                                        alt="Patient recevant des soins"
                                        className="w-full h-[400px] md:h-[500px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

                                    {/* Floating quote */}
                                    <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm p-5 rounded-2xl border border-border shadow-xl">
                                        <p className="text-sm text-muted-foreground italic mb-2">
                                            "Je ne voulais pas que mes enfants me voient partir..."
                                        </p>
                                        <p className="text-xs font-semibold text-foreground">— Aya, 38 ans</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content side */}
                            <div
                                className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                            >
                                <div className="inline-flex items-center gap-2 text-primary mb-4">
                                    <div className="w-8 h-0.5 bg-primary rounded-full" />
                                    <span className="text-sm font-semibold uppercase tracking-wide">Son histoire</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                                    Aya a deux enfants. Elle ne peut plus travailler.
                                </h2>

                                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                                    <p>
                                        Diagnostiquée il y a 8 mois, Aya a épuisé toutes ses économies.Ses traitements coûtent 500.000 FCFA par mois, alors qu'elle ne gagne que 100.000 FCFA.
                                    </p>
                                    <p className="text-foreground font-medium">
                                        Chaque jour sans traitement, le cancer progresse, rongeant peu à peu sa santé et sa force. Chaque jour, elle se bat contre la douleur et la peur, mais elle perd aussi un peu plus espoir.
                                    </p>
                                    <p>
                                        Mais avec votre aide, Aya peut continuer ses soins. Elle peut voir ses enfants grandir. Elle peut
                                        vivre.
                                    </p>
                                </div>


                                <div className="flex  justify-center gap-6 mt-10">
                                    {[
                                        { amount: "50.000 FCFA", impact: "1 semaine de médicaments pour Aya" },
                                        { amount: "200.000 FCFA", impact: "1 consultation + examens médicaux" },
                                        { amount: "500.000 FCFA", impact: "1 mois complet de traitement" },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="w-70 bg-card border border-border rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="bg-primary/10 rounded-xl py-3 px-4 mb-3">
                                                <span className="text-lg font-bold text-primary">{item.amount}</span>
                                            </div>
                                            <p className="text-sm text-muted-foreground font-medium leading-snug">
                                                {item.impact}
                                            </p>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 md:py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <div
                            className={`inline-flex items-center gap-2 bg-destructive/10 text-destructive px-5 py-2.5 rounded-full mb-6 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                        >
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-semibold">Le temps presse</span>
                        </div>

                        <h2
                            className={`text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            Aya n'est pas seule. Il y en a des centaines comme elle.
                        </h2>

                        <p
                            className={`text-xl text-muted-foreground leading-relaxed mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            En Côte d'Ivoire, des centaines de mères, de pères, d'enfants luttent contre le cancer du foie et les hépatites virales
                            sans pouvoir payer leurs soins.
                        </p>

                        <div
                            className={`bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-10 mb-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-bold text-foreground mb-2">847 familles comptent sur nous</h3>
                                    <p className="text-muted-foreground">
                                        Chaque mois, nous aidons des centaines de personnes à accéder aux soins vitaux. Mais nous ne pouvons
                                        pas le faire sans vous.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-muted/50 rounded-2xl p-6 text-left">
                                <p className="text-sm text-muted-foreground mb-3">Impact de votre don :</p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Heart className="w-4 h-4 text-primary fill-current" />
                                        <span className="text-sm text-foreground">
                                            <strong>50.000 FCFA</strong> = Soins d'urgence pour 1 patient
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Heart className="w-4 h-4 text-primary fill-current" />
                                        <span className="text-sm text-foreground">
                                            <strong>100.000 FCFA</strong> = Dépistage pour 15 personnes
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Heart className="w-4 h-4 text-primary fill-current" />
                                        <span className="text-sm text-foreground">
                                            <strong>500.000 FCFA</strong> = 1 mois de traitement complet
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="mt-6 text-sm text-muted-foreground">Paiement sécurisé • Reçu fiscal • Transparence totale</p>
                    </div>
                </div>
            </div>

            <div className="py-16 md:py-20 bg-muted/30">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comment donner ?</h2>
                            <p className="text-lg text-muted-foreground">
                                Choisissez votre moyen de paiement. C'est simple, rapide et sécurisé.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-5">
                            {[
                                {
                                    image: "/orange-money.png",
                                    title: "Orange Money",
                                    number: "+225 07 XX XX XX XX",
                                },
                                {
                                    image: "/wave.png",
                                    title: "Wave",
                                    number: "+225 01 XX XX XX XX",
                                },
                                {
                                    image: "/mtn.png",
                                    title: "MTN Mobile Money",
                                    number: "+225 05 XX XX XX XX",
                                },
                                {
                                    image: "/banque.png",
                                    title: "Virement",
                                    number: "SGBCI | CI00XXXX",
                                },
                            ].map((method, i) => (
                                <div
                                    key={i}
                                    className={`bg-card p-6 rounded-3xl border-2 border-border hover:border-primary/30 transition-all duration-700 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                                    style={{ transitionDelay: `${i * 100}ms` }}
                                >
                                    <div className="flex justify-center mb-4">
                                        <div className="w-full h-20 bg-muted/50 rounded-2xl flex items-center justify-center overflow-hidden">
                                            <img
                                                src={method.image || "/placeholder.svg"}
                                                alt={method.title}
                                                className="w-24 h-16 object-contain"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground text-center mb-3">{method.title}</h3>
                                    <div className="bg-muted/50 p-3 rounded-xl">
                                        <p className="font-mono text-sm text-center text-primary font-semibold break-all">
                                            {method.number}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-border">
                                <Heart className="w-4 h-4 text-primary animate-pulse fill-current" />
                                <span className="text-sm text-muted-foreground">
                                    Après votre don, envoyez-nous une capture d'écran pour recevoir votre reçu
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative py-20 md:py-24">
                {/* Image de fond */}
                <div
                    className="absolute inset-0 bg-[url('/women1.jpg')] bg-cover bg-center bg-no-repeat"
                />

                {/* Overlay transparent pour que le texte soit lisible */}
                <div className="absolute inset-0 bg-white/10" />

                {/* Contenu */}
                <div className="relative container mx-auto px-4 lg:px-8">
                    <div
                        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6 leading-tight">
                            Ne laissez pas Aya perdre espoir
                        </h2>

                        <p className="text-xl text-primary-foreground leading-relaxed mb-10">
                            Chaque minute compte. Chaque franc sauve. Pendant que vous lisez ces lignes, Aya attend. Elle espère.
                            <span className="block mt-4 text-primary-foreground font-bold text-2xl">
                                Soyez celui qui change son histoire.
                            </span>
                        </p>

                        <button className="group bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl shadow-accent/25 transition-all hover:shadow-accent/40 hover:-translate-y-1 hover:scale-105">
                            <span className="flex items-center justify-center gap-3">
                                Je fais un don maintenant
                                <Heart className="w-6 h-6 group-hover:scale-125 transition-transform animate-pulse" />
                            </span>
                        </button>

                        <p className="mt-8 text-xl text-primary-foreground">Merci de votre générosité. Vous êtes leur espoir.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
