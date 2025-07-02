import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Guarantee from './components/Guarantee'
import Stats from './components/Stats'
import PricingProduct from './components/PricingProduct'
import MotivationalBanner from './components/MotivationalBanner'
import VideoSection from './components/VideoSection'
import Divisor from './components/Divisor'

export default function Home() {
  return (
    <>
      <main className="text-white pt-20">
        {' '}
        {/* add padding to offset fixed header */}
        <Hero />
        <VideoSection />
        <section id="benefits">
          <Features />
        </section>
        <Divisor inverse/>
        <Testimonials />
        <Divisor />
        <section id="pricing">
          <PricingProduct />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="banner">
          <MotivationalBanner />
        </section>
        {/* <section id="contact">
          <Contact />
        </section> */}
        <Guarantee />
        <FAQ />
      </main>
    </>
  )
}
