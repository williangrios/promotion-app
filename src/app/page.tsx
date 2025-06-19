import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Guarantee from './components/Guarantee'
import Stats from './components/Stats'
import ContactHelp from './components/ContactHelp'

export default function Home() {
  return (
    <>
      <main className="bg-slate-900 text-white pt-20">
        {' '}
        {/* add padding to offset fixed header */}
        <Hero />
        <section id="features">
          <Features />
        </section>
        <Testimonials />
        <section id="pricing">
          <Pricing />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="contact">
          <ContactHelp />
        </section>
        <Guarantee />
        <FAQ />
      </main>
    </>
  )
}
