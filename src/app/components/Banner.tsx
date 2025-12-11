import { envVariables } from '@/helpers/envVariables'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

export default function Banner() {
  return (
    <Link
      href="/"
      className="text-xl flex gap-2 items-center font-bold tracking-tight"
    >
      <Logo />
      <h1
        className="text-4xl font-extrabold select-none"
        style={{
          background: `linear-gradient(45deg, ${envVariables.SECONDARY_COLOR_LIGHT}, ${envVariables.SECONDARY_COLOR_MEDIUM}, ${envVariables.SECONDARY_COLOR_DARK})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          // Removi text-shadow que borrava
          // Mantive uma sombra sutil mas mais definida com drop-shadow menor e menos blur
          filter: `
              drop-shadow(0 0 1px rgba(0, 0, 0, 0.5))
            `,
          // Aumentar contraste com font-weight extra bold (já está) e um leve outline com text stroke
          // textStroke: `1px ${envVariables.SECONDARY_COLOR_DARK}`, // só funciona no Firefox, pra outros pode usar -webkit-text-stroke
          WebkitTextStroke: `0.8px ${envVariables.SECONDARY_COLOR_DARK}`,
        }}
      >
        {envVariables.PRODUCT_NAME}
      </h1>
    </Link>
  )
}
