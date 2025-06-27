'use client'

import Image from 'next/image'
import Link from 'next/link'
import { envVariables } from '@/helpers/envVariables'

export default function Hero() {
  const { title, subtitle, buttonLabel, buttonLink, image } = envVariables.HERO

  return (
    <section
      className="relative py-24 px-6 text-white overflow-hidden"
      style={{
        background: `radial-gradient(circle at top left, ${envVariables.PRIMARY_COLOR_LIGHT}, ${envVariables.PRIMARY_COLOR_MEDIUM} 70%)`,
      }}
    >
      {/* 🔮 Efeito de luz suave no fundo */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* ✨ Animação de bolhas suaves no fundo */}
      <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-20 -right-10 w-[300px] h-[300px] bg-white/10 rounded-full blur-2xl animate-pulse z-0" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Texto com fundo escuro translúcido */}
        <div className="md:w-1/2 bg-black/60 p-8 rounded-2xl shadow-2xl backdrop-blur-md">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight tracking-tight text-white drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg text-gray-100 mb-8 drop-shadow">
            {subtitle}
          </p>
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

        {/* Imagem com destaque */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </section>
  )
}
