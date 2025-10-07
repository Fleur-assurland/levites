import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "react-day-picker"
import { Navigation } from "@/components/navigation"
import { Don } from "@/components/dons"
import { HeroDons } from "@/components/hero_dons"
export default function Dons() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <HeroDons />
            <Don />
            <Testimonials />
            <Footer />
        </main>
    )
}
