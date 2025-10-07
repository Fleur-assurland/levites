import { Hero } from "@/components/hero"
import { Impact } from "@/components/impact"
import { Programs } from "@/components/programs"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "react-day-picker"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Impact />
      <Programs />
      <Testimonials />
      <About />
      <CallToAction />
      <Footer />
    </main>
  )
}
