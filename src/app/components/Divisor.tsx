'use client'
import { envVariables } from '@/helpers/envVariables'

interface DivisorProps {
  inverse?: boolean
}

export default function Divisor({ inverse = false }: DivisorProps) {
  const gradient = inverse
    ? `linear-gradient(to top, ${envVariables.PRIMARY_COLOR_DARK}, ${envVariables.PRIMARY_COLOR_LIGHT})`
    : `linear-gradient(to bottom, ${envVariables.PRIMARY_COLOR_DARK}, ${envVariables.PRIMARY_COLOR_LIGHT})`

  return (
    <div
      className="w-full h-26"
      style={{
        background: gradient,
      }}
    />
  )
}
