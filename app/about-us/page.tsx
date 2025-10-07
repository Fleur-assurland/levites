import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import AboutPage from "@/components/about-us"
export default function About_us() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <AboutPage />
            <Testimonials />
            <Footer />
        </main>
    )
}
