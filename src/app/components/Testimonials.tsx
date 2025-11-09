/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Slider from 'react-slick'
import { envVariables } from '@/helpers/envVariables'

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    centerMode: false, // Desativa o modo centralizado que mostra cards laterais
    variableWidth: false, // Garante que não haja largura variável
    adaptiveHeight: true, // Ajusta a altura baseado no conteúdo
    appendDots: (dots: any) => (
      <div className="mt-8">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white/30 rounded-full transition-all duration-300 hover:bg-white/50 cursor-pointer mt-4"></div>
    ),
  }

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${envVariables.PRIMARY_COLOR_DARK} 0%, ${envVariables.PRIMARY_COLOR_MEDIUM} 100%)`,
      }}
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      {/* Padrão de fundo */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-5xl md:text-6xl">💬</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Histórias reais de transformação e resultados incríveis
          </p>
        </div>

        {/* Slider de depoimentos */}
        <div className="testimonials-slider">
          <Slider {...settings}>
            {envVariables.TESTIMONIALS.map((t, i) => (
              <div key={i} className="outline-none">
                <div className="px-4 pb-4">
                  <div className="relative">
                    {/* Aspas decorativas */}
                    {/* <div className="absolute -top-6 -left-2 md:-left-4 text-yellow-400 text-7xl md:text-8xl opacity-20 font-serif leading-none">
                      "
                    </div> */}

                    {/* Card do depoimento */}
                    <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 transition-all duration-300 hover:bg-white/15 hover:shadow-3xl hover:scale-[1.02]">
                      {/* Estrelas */}
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(5)].map((_, idx) => (
                          <svg
                            key={idx}
                            className="w-6 h-6 md:w-7 md:h-7 text-yellow-400 drop-shadow-lg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Feedback */}
                      <p className="italic text-lg md:text-2xl leading-relaxed text-white/95 mb-8 font-light text-center">
                        &quot;{t.feedback}&quot;
                      </p>

                      {/* Separador */}
                      <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"></div>

                      {/* Nome do cliente */}
                      <div className="text-center">
                        <p className="font-bold text-xl md:text-2xl text-yellow-300 tracking-wide mb-1">
                          {t.name}
                        </p>
                        <p className="text-white/60 text-sm md:text-base">
                          Cliente Verificado ✓
                        </p>
                      </div>
                    </div>

                    {/* Aspas decorativas (fechamento) */}
                    {/* <div className="absolute -bottom-4 -right-2 md:-right-4 text-yellow-400 text-7xl md:text-8xl opacity-20 font-serif leading-none rotate-180">
                      "
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Badge de confiança */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <span className="text-2xl">🏆</span>
            <span className="font-semibold text-sm md:text-base">
              Mais de 8.500 clientes satisfeitos
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-slider .slick-dots li.slick-active div {
          background: white !important;
          width: 24px !important;
          border-radius: 9999px !important;
        }

        .testimonials-slider .slick-dots li div {
          margin: 0 !important;
        }

        .testimonials-slider .slick-list {
          overflow: hidden !important;
        }

        .testimonials-slider .slick-track {
          display: flex !important;
          align-items: stretch !important;
        }

        .testimonials-slider .slick-slide {
          opacity: 0 !important;
          transition: opacity 0.5s ease !important;
        }

        .testimonials-slider .slick-slide.slick-active {
          opacity: 1 !important;
        }

        .testimonials-slider .slick-slide > div {
          height: 100%;
        }

        .testimonials-slider .slick-slide:focus {
          outline: none !important;
        }
      `}</style>
    </section>
  )
}

// 👉 Botões personalizados aprimorados
function PrevArrow(props: any) {
  const { className, onClick } = props
  return (
    <button
      className={`${className} !left-0 md:!-left-16 z-10 group`}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: '9999px',
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
        cursor: 'pointer',
        border: '2px solid rgba(255,255,255,0.3)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.2))'
        e.currentTarget.style.transform = 'scale(1.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))'
        e.currentTarget.style.transform = 'scale(1)'
      }}
      aria-label="Anterior"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  )
}

function NextArrow(props: any) {
  const { className, onClick } = props
  return (
    <button
      className={`${className} !right-0 md:!-right-16 z-10 group`}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: '9999px',
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
        cursor: 'pointer',
        border: '2px solid rgba(255,255,255,0.3)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.2))'
        e.currentTarget.style.transform = 'scale(1.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background =
          'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))'
        e.currentTarget.style.transform = 'scale(1)'
      }}
      aria-label="Próximo"
    >
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  )
}
