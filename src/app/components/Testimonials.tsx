'use client'

import Slider from 'react-slick'
import { envVariables } from '@/helpers/envVariables'

export default function Testimonials() {
  return (
    <section
      className="py-20 px-6 text-white"
      style={{
        background: `linear-gradient(135deg, ${envVariables.PRIMARY_COLOR_DARK}, ${envVariables.PRIMARY_COLOR_MEDIUM})`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-10">Depoimentos Reais</h2>
        <Slider
          dots
          infinite
          speed={500}
          autoplay
          autoplaySpeed={5000}
          slidesToShow={1}
          arrows={false}
        >
          {envVariables.TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-6 bg-white/10 rounded-xl shadow-md backdrop-blur-sm"
            >
              <p className="italic text-lg mb-4">“{t.feedback}”</p>
              <p className="font-bold text-xl text-yellow-300">{t.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
