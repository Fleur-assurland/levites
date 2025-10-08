"use client"

import { useEffect, useRef, useState } from "react"
import { HeartPulse, Heart, Activity, AlertCircle, Shield, Sparkles, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
    <main ref={sectionRef} className="relative overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background ">
        <div
          className="absolute inset-0 bg-[url('/about.jpg')] bg-cover bg-center bg-no-repeat"
        />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1] transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Ces maladies{" "}
              <span className="relative inline-block">
                <span className="relative z-10">silencieuses</span>
              </span>{" "}
              qui changent des vies
            </h1>

            <p
              className={`text-xl md:text-2xl text-primary-foreground leading-relaxed mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Le cancer du foie et les hépatites virales touchent des milliers de personnes chaque année. Mais avec les
              bons soins, il y a de l'espoir.
            </p>
          </div>
        </div>
      </section>

      {/* What is Liver Cancer Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div
                className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              >
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <div className="w-8 h-0.5 bg-primary rounded-full" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Le cancer du foie</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Une maladie qui commence en silence
                </h2>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Le foie est comme le grand nettoyeur de notre corps. Il filtre le sang, aide à digérer, stocke
                    l'énergie. Quand des cellules anormales commencent à grandir dans le foie, c'est le cancer.
                  </p>
                  <p className="text-foreground font-medium">
                    Le problème ? Au début, on ne sent rien. Pas de douleur, pas de signes. C'est pourquoi tant de
                    personnes le découvrent trop tard.
                  </p>
                  <p>
                    Mais détecté tôt, avec les bons soins, on peut le combattre. On peut vivre. On peut voir ses enfants
                    grandir.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-card rounded-2xl border-2 border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Ce qu'il faut savoir</h3>
                      <p className="text-sm text-muted-foreground">
                        En Côte d'Ivoire, beaucoup de cas sont liés aux hépatites B et C non traitées. C'est pourquoi le
                        dépistage est si important.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`relative transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/liver-cancer.jpg"
                    alt="Patient recevant des soins"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>

                {/* Floating stat */}
                <div className="absolute -bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm p-5 rounded-2xl border border-border shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                      <HeartPulse className="w-7 h-7 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">70%</p>
                      <p className="text-xs text-muted-foreground">de survie avec traitement précoce</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are Viral Hepatitis Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div
                className={`order-2 md:order-1 relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/vaccin.jpg"
                    alt="Dépistage médical"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>

                {/* Floating info */}
                <div className="absolute -bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm p-5 rounded-2xl border border-border shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Vaccination disponible</p>
                      <p className="text-xs text-muted-foreground">L'hépatite B peut être prévenue</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`order-1 md:order-2 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
              >

                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <div className="w-8 h-0.5 bg-primary rounded-full" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Les hépatites virales</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Des virus qui attaquent le foie
                </h2>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Les hépatites B et C sont des virus qui s'installent dans le foie et l'abîment petit à petit. On
                    peut les attraper par le sang, les relations intimes, ou de la mère à l'enfant.
                  </p>
                  <p className="text-foreground font-medium">
                    Le danger ? Ces virus peuvent rester des années sans qu'on le sache. Pendant ce temps, ils
                    détruisent le foie en silence.
                  </p>
                  <p>
                    Mais il y a de bonnes nouvelles : l'hépatite B peut être évitée avec un vaccin. L'hépatite C peut
                    être guérie avec des médicaments. Il suffit de savoir qu'on l'a.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    { type: "Hépatite B", info: "Vaccination protège à 95%" },
                    { type: "Hépatite C", info: "Guérison possible en 3 mois" },
                    { type: "Dépistage", info: "Simple prise de sang" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Activity className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-sm">{item.type}</p>
                        <p className="text-xs text-muted-foreground">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div
                className={`inline-flex items-center gap-2 bg-destructive/10 text-destructive px-5 py-2.5 rounded-full mb-6 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              >
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Signes d'alerte</span>
              </div>

              <h2
                className={`text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Quand faut-il s'inquiéter ?
              </h2>

              <p
                className={`text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Ces signes ne veulent pas toujours dire cancer ou hépatite, mais il vaut mieux vérifier.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  symptom: "Fatigue qui ne part pas",
                  description: "Même après le repos, vous vous sentez épuisé tout le temps",
                },
                {
                  symptom: "Ventre qui gonfle",
                  description: "Votre abdomen devient plus gros, surtout du côté droit",
                },
                {
                  symptom: "Peau et yeux jaunes",
                  description: "C'est ce qu'on appelle la jaunisse, signe que le foie souffre",
                },
                {
                  symptom: "Perte d'appétit",
                  description: "Vous ne voulez plus manger, vous perdez du poids sans raison",
                },
                {
                  symptom: "Douleur au ventre",
                  description: "Surtout en haut à droite, sous les côtes",
                },
                {
                  symptom: "Urine foncée",
                  description: "Votre urine devient marron comme du thé",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-6 bg-card rounded-2xl border-2 border-border hover:border-primary/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.symptom}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div
              className={`mt-10 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border-2 border-primary/20 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground fill-current" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">N'attendez pas que ça empire</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Si vous avez un ou plusieurs de ces signes, allez voir un médecin. Plus tôt on détecte, plus on a de
                    chances de guérir. Le dépistage est simple : une prise de sang et parfois une échographie.
                  </p>
                  <p className="text-foreground font-semibold">
                    Votre vie vaut la peine de vérifier. Faites-le pour vous, pour votre famille.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hope Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2.5 rounded-full mb-6 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Il y a de l'espoir</span>
            </div>

            <h2
              className={`text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Avec les bons soins, on peut{" "}
              <span className="relative inline-block">
                <span className="relative z-10">s'en sortir</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/20 rotate-1" />
              </span>
            </h2>

            <p
              className={`text-xl text-muted-foreground leading-relaxed mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              La médecine a fait d'énormes progrès. Aujourd'hui, beaucoup de personnes vivent longtemps et bien après un
              diagnostic.
            </p>

            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl mb-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <img
                src="/grandmother.jpg"
                alt="Famille heureuse après traitement"
                className="w-full h-[400px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border">
                  <p className="text-lg text-foreground font-semibold mb-2">
                    "Aujourd'hui, je vois mes petits-enfants grandir. Je n'aurais jamais cru ça possible."
                  </p>
                  <p className="text-sm text-muted-foreground">— Kouassi Marie, 66 ans, guéri de l'hépatite C</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Shield,
                  title: "Prévention",
                  description: "Vaccins, dépistage, hygiène",
                },
                {
                  icon: Activity,
                  title: "Traitement",
                  description: "Médicaments efficaces disponibles",
                },
                {
                  icon: Users,
                  title: "Accompagnement",
                  description: "Vous n'êtes pas seul dans ce combat",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-6 bg-card rounded-2xl border-2 border-border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${(i + 3) * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div
              className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Link
                href="/dons"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-5 px-10 rounded-2xl text-lg shadow-xl shadow-accent/20 transition-all hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1"
              >
                Aidez-nous à sauver des vies
                <Heart className="w-5 h-5 fill-current" />
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Ensemble, nous pouvons offrir l'espoir et les soins dont ils ont besoin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
