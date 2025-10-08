import { TestimonialsHome } from "@/components/testimonials-home"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import AboutPage from "@/components/about-us"
export default function About_us() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <AboutPage />
            <TestimonialsHome />
            <Footer />
        </main>
    )
}
