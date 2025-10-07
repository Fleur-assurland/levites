import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Impact } from "@/components/impact"
import { HeroImpact } from "@/components/hero_impact"
import { CallToActionImpact } from "@/components/call-to-action-impact"
export default function Impacts() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <HeroImpact />
            <Impact />
            <Testimonials />
            <CallToActionImpact />
            <Footer />
        </main>
    )
}
