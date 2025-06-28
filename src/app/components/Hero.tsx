'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { envVariables } from '@/helpers/envVariables'

export default function Hero() {
  const { title, subtitle, buttonLabel, buttonLink, images } = envVariables.HERO
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section
      className="relative py-24 px-6 text-white overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top left, ${envVariables.PRIMARY_COLOR_DARK} 0%, ${envVariables.PRIMARY_COLOR_MEDIUM} 40%, ${envVariables.PRIMARY_COLOR_LIGHT} 100%)
        `,
      }}
    >
      {/* 🔮 Efeito escuro para contraste */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* 💫 Bolhas animadas no fundo */}
      <div className="absolute -top-20 -left-10 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-20 -right-10 w-[300px] h-[300px] bg-white/10 rounded-full blur-2xl animate-pulse z-0" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Texto com fundo escurecido */}
        <div className="md:w-1/2 bg-black/60 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight tracking-tight text-white drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg text-gray-100 mb-8 drop-shadow">{subtitle}</p>
          <Link
            href={buttonLink}
            className="inline-block px-8 py-3 rounded-full font-semibold text-white shadow-lg transition duration-300 hover:brightness-110"
            style={{
              background: `linear-gradient(to right, ${envVariables.SECONDARY_COLOR_LIGHT}, ${envVariables.SECONDARY_COLOR_MEDIUM})`,
            }}
          >
            {buttonLabel}
          </Link>
        </div>

        {/* Banner rotativo de imagens */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className={`absolute top-0 left-0 w-full h-full object-contain rounded-2xl transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
