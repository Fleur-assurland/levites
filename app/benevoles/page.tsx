import { TestimonialsHome } from "@/components/testimonials-home"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { BenevoleForm } from "@/components/benevole"
export default function Benevoles() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <BenevoleForm />
            <TestimonialsHome />
            <Footer />
        </main>
    )
}
