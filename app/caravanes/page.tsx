import { TestimonialsHome } from "@/components/testimonials-home"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { HeroCaravanes } from "@/components/hero_caravanes"
import { Caravane } from "@/components/caravane"
import { CallToActionCaravane } from "@/components/call-to-action-caravane"
export default function Caravanes() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <HeroCaravanes />
            <Caravane />
            <TestimonialsHome />
            <CallToActionCaravane />
            <Footer />
        </main>
    )
}
