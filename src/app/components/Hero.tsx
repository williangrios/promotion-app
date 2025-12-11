'use client'
import { useEffect, useState } from 'react'
import { envVariables } from '@/helpers/envVariables'
import {
  CheckCircleIcon,
  TruckIcon,
  ShieldCheckIcon,
  StarIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const { title, subtitle, buttonLabel, buttonLink, images } = envVariables.HERO
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  const highlights = [
    { icon: CheckCircleIcon, text: '100% Natural' },
    { icon: TruckIcon, text: 'Frete Grátis' },
    { icon: ShieldCheckIcon, text: 'Garantia Total' },
  ]

  return (
    <section
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 text-white overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${envVariables.PRIMARY_COLOR_ULTRA_DARK} 0%, ${envVariables.PRIMARY_COLOR_DARK} 50%, ${envVariables.PRIMARY_COLOR_MEDIUM} 100%)`,
      }}
    >
      {/* Elementos decorativos de fundo */}
      {/* <div className="absolute inset-0 opacity-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-orange-500 to-red-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div> */}

      {/* Padrão de grid */}
      {/* <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div> */}

      {/* Overlay gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Coluna de texto */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Badge de destaque */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-md border border-yellow-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-300">
                Produto Nº1 em Vendas
              </span>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight animate-slide-up">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-yellow-300 drop-shadow-2xl">
                {title}
              </span>
            </h1>

            {/* Subtítulo */}
            <p
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              {subtitle}
            </p>

            {/* Highlights */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                href={buttonLink}
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base md:text-lg overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/50"
                style={{
                  background: `linear-gradient(135deg, ${envVariables.SECONDARY_COLOR_MEDIUM}, ${envVariables.SECONDARY_COLOR_LIGHT})`,
                  color: envVariables.PRIMARY_COLOR_DARK,
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {buttonLabel}
                  <span className="text-xl animate-bounce">🔥</span>
                </span>
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </Link>
              <Link
                href="#benefits"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base md:text-lg border-2 border-white/30 backdrop-blur-md hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Ver Benefícios
              </Link>
              {/* 10.0 */}
            </div>

            {/* Trust badges */}
            <div
              className="mt-8 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-300 animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white shadow-lg"
                    ></div>
                  ))}
                </div>
                <span className="font-medium">+8.500 clientes</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
                <span className="ml-1 font-medium">4.9/5.0</span>
              </div>
            </div>
          </div>

          {/* Coluna de imagem */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative animate-float">
              {/* Círculos decorativos */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-500/30 blur-3xl animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-orange-400/20 to-yellow-300/20 blur-2xl"></div>

              {/* Container da imagem */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                {/* Badge flutuante
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold px-4 py-2 rounded-full shadow-2xl z-20 animate-bounce">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-wide">
                        Aprovado
                      </div>
                      <div className="text-sm">ANVISA</div>
                    </div>
                  </div>
                </div> */}
                {/* Imagens rotativas */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                        index === currentIndex
                          ? 'opacity-100 scale-100 rotate-0'
                          : 'opacity-0 scale-95 rotate-3'
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className="w-full h-full object-contain drop-shadow-2xl"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                {/* Indicadores de slides */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-8 bg-yellow-400'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
