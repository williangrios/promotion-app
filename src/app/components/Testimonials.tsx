/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Slider from 'react-slick'
import { envVariables } from '@/helpers/envVariables'

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <section
      className="py-6 px-6 text-white relative"
      style={{
        background: `${envVariables.PRIMARY_COLOR_DARK}`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center rounded-full">
        <h2 className="text-4xl font-extrabold mb-12 tracking-tight drop-shadow-md">
          Depoimentos de Clientes
        </h2>

        <Slider {...settings}>
          {envVariables.TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-8 bg-white/10 rounded-2xl shadow-xl backdrop-blur-md transition duration-300"
            >
              <p className="italic text-xl md:text-2xl leading-relaxed text-white/90 mb-6">
                “{t.feedback}”
              </p>
              <p className="font-bold text-lg text-yellow-300 tracking-wide">
                — {t.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

// 👉 Botões personalizados
function PrevArrow(props: any) {
  const { className, onClick } = props
  return (
    <div
      className={`${className} left-[-40px] z-10`}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: '9999px',
        background: 'rgba(255,255,255,0.2)',
        cursor: 'pointer',
      }}
    >
    </div>
  )
}

function NextArrow(props: any) {
  const { className, onClick } = props
  return (
    <div
      className={`${className} right-[-40px] z-10`}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: '9999px',
        background: 'rgba(255,255,255,0.2)',
        cursor: 'pointer',
      }}
    >
    </div>
  )
}
