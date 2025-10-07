import { Testimonials } from "@/components/testimonials"
import { Navigation } from "@/components/navigation"
import { HeroTestimonial } from "@/components/hero_testimonial"
import { CallToActionTestimonial } from "@/components/call-to-action-testimonial"
import { Footer } from "@/components/footer"
export default function Testimonial() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <HeroTestimonial />
            <Testimonials />
            <CallToActionTestimonial />
            <Footer />
        </main>
    )
}
