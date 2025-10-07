import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
             <a href="/" className="text-2xl font-bold text-primary">
            <img
              src="logo.png" 
              alt="Logo Les Lévites Inter"
              className="h-20 w-auto"
            />
          </a>
            <p className="text-background/80 leading-relaxed">
             <span className="text-red-600">STOP</span> au cancer et aux hépatites virales depuis 15 ans.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="/impact" className="text-background/80 hover:text-background transition-colors">
                  Notre Impact
                </a>
              </li>
              <li>
                <a href="/programmes" className="text-background/80 hover:text-background transition-colors">
                  Programmes
                </a>
              </li>
              <li>
                <a href="/testimonial" className="text-background/80 hover:text-background transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-background/80 hover:text-background transition-colors">
                  À Propos
                </a>
              </li>
            </ul>
          </div>

          {/* S'engager */}
          <div>
            <h4 className="text-lg font-bold mb-4">S'Engager</h4>
            <ul className="space-y-2">
              <li>
                <a href="/dons" className="text-background/80 hover:text-background transition-colors">
                  Faire un Don
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Devenir Bénévole
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Partenariats
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Événements
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/80">
          <p>
            © {currentYear} LES LEVITES INTER. Tous droits réservés. |{" "}
            <a href="#" className="hover:text-background transition-colors">
              Mentions légales
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-background transition-colors">
              Politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
