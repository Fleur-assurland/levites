import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Don } from "@/components/dons"
import { HeroDons } from "@/components/hero_dons"
export default function Caravanes() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <Testimonials />
            <Footer />
        </main>
    )
}
