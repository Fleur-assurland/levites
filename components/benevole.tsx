"use client"

import { useState } from "react"
import { HeartHandshake } from "lucide-react"

export function BenevoleForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    domaine: "",
    disponibilite: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Données envoyées :", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-20">
        <HeartHandshake size={60} className="mx-auto mb-6 text-primary" />
        <h3 className="text-3xl font-bold text-foreground mb-3">Merci pour votre engagement</h3>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Votre candidature a bien été reçue. L'équipe LES LÉVITES INTER vous contactera bientôt pour la suite.
        </p>
      </div>
    )
  }

  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Devenez Bénévole</h2>
          <p className="text-lg text-muted-foreground">
            Rejoignez notre équipe de cœur et contribuez à faire une réelle différence dans la vie de centaines de
            personnes.
          </p>
        </div>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="bg-card p-8 rounded-3xl shadow-xl space-y-6 border border-border"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Nom complet *</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl bg-muted border border-border focus:border-primary outline-none transition"
                placeholder="Votre nom complet"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl bg-muted border border-border focus:border-primary outline-none transition"
                placeholder="exemple@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Téléphone *</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl bg-muted border border-border focus:border-primary outline-none transition"
                placeholder="+225 07 00 00 00 00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Domaine de compétence *</label>
              <select
                name="domaine"
                value={formData.domaine}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-xl bg-muted border border-border focus:border-primary outline-none transition"
              >
                <option value="">Sélectionnez un domaine</option>
                <option value="sante">Santé</option>
                <option value="communication">Communication</option>
                <option value="logistique">Logistique</option>
                <option value="administration">Administration</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Disponibilité *</label>
            <select
              name="disponibilite"
              value={formData.disponibilite}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-muted border border-border focus:border-primary outline-none transition"
            >
              <option value="">Choisissez une option</option>
              <option value="temps-plein">Temps plein</option>
              <option value="temps-partiel">Temps partiel</option>
              <option value="ponctuelle">Ponctuelle (événements)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Pourquoi voulez-vous devenir bénévole ? *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-muted border border-border focus:border-primary outline-none transition min-h-[120px]"
              placeholder="Parlez-nous de votre motivation..."
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-primary text-primary-foreground py-4 px-10 rounded-2xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Envoyer ma candidature
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
