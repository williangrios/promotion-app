'use client'

import Image from 'next/image'
import Link from 'next/link'
import { envVariables } from '@/helpers/envVariables'

export default function MotivationalBanner() {
  const { MOTIVATIONAL_BANNER, SECONDARY_COLOR_MEDIUM, SECONDARY_COLOR_DARK, PRIMARY_COLOR_DARK, PRIMARY_COLOR_ULTRA_DARK } = envVariables

  return (
    <section
      className="py-16 px-2 text-white"
      style={{ backgroundColor: PRIMARY_COLOR_DARK }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagem do produto com moldura e sombra */}
        <div
          className="flex-1 flex justify-center relative rounded-lg"
          style={{
            border: `6px solid ${SECONDARY_COLOR_MEDIUM}`, // moldura cobre médio
            boxShadow: `0 12px 30px -8px ${SECONDARY_COLOR_DARK}cc, 0 0 20px 5px ${PRIMARY_COLOR_ULTRA_DARK}bb`, // sombra escura azulado e cobre escuro translúcido
            padding: '10px',
            backgroundColor: PRIMARY_COLOR_ULTRA_DARK,
          }}
        >
          <div className="relative z-10 rounded-md overflow-hidden">
            <Image
              src={MOTIVATIONAL_BANNER.image.src}
              alt={MOTIVATIONAL_BANNER.image.alt}
              width={300}
              height={300}
              className="drop-shadow-2xl rounded-md"
            />
          </div>
        </div>

        {/* Texto e botão */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            {MOTIVATIONAL_BANNER.title}
          </h2>
          {MOTIVATIONAL_BANNER.paragraphs.map((text, index) => (
            <p
              key={index}
              className="mb-4 leading-relaxed text-white/80 text-md"
            >
              {text}
            </p>
          ))}

          <Link
            href={MOTIVATIONAL_BANNER.cta.link}
            className="inline-block bg-white text-red-700 font-extrabold text-lg px-8 py-3 rounded-lg shadow hover:shadow-md transition"
          >
            {MOTIVATIONAL_BANNER.cta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
