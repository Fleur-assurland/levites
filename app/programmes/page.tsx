import { Testimonials } from "@/components/testimonials"
import { Footer } from "react-day-picker"
import { Navigation } from "@/components/navigation"
import { Programs } from "@/components/programs"
import { HeroPrograms } from "@/components/hero_programs"

export default function Programmes() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <HeroPrograms />
            <Programs />
            <Testimonials />
            <Footer />
        </main>
    )
}
