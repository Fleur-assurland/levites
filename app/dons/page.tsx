import { Hero } from "@/components/hero"
import { TestimonialsHome } from "@/components/testimonials-home"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Don } from "@/components/dons"
import { HeroDons } from "@/components/hero_dons"
export default function Dons() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <HeroDons />
            <Don />
            <TestimonialsHome />
            <Footer />
        </main>
    )
}
