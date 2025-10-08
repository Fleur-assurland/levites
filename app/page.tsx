import { Hero } from "@/components/hero"
import { Impact } from "@/components/impact"
import { Programs } from "@/components/programs"
import { About } from "@/components/about"
import { TestimonialsHome } from "@/components/testimonials-home"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Impact />
      <Programs />
      <TestimonialsHome />
      <About />
      <CallToAction />
      <Footer />
    </main>
  )
}
