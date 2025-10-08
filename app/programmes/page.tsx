import { TestimonialsHome } from "@/components/testimonials-home"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Programs } from "@/components/programs"
import { HeroPrograms } from "@/components/hero_programs"

export default function Programmes() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <HeroPrograms />
            <Programs />
            <TestimonialsHome />
            <Footer />
        </main>
    )
}
