import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import SuccessStories from '@/components/SuccessStories'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a0b2e]">
      <Navigation />
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <SuccessStories />
      <Contact />
      <Footer />
    </main>
  )
}