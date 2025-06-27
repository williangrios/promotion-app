'use client'

import { envVariables } from '@/helpers/envVariables'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const whatsappNumber = '55' + envVariables.SOCIAL_WHATSAPP

  const message = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o produto ${envVariables.PRODUCT_NAME}`
  )

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <section
      className="py-12 px-6 text-center rounded-2xl shadow-lg max-w-xl mx-auto my-12"
      style={{
        backgroundColor: envVariables.SECONDARY_COLOR_LIGHT,
        color: envVariables.SECONDARY_COLOR_DARK,
      }}
    >
      <h2 className="text-2xl font-bold mb-4">
        Fale com a gente no WhatsApp
      </h2>
      <p className="mb-6">
        Está com dúvidas? Quer comprar direto pelo WhatsApp? Clique abaixo e fale com a gente.
      </p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md"
        style={{
          backgroundColor: envVariables.PRIMARY_COLOR_MEDIUM,
          color: '#fff',
        }}
        onMouseOver={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
            envVariables.PRIMARY_COLOR_DARK
        }}
        onMouseOut={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
            envVariables.PRIMARY_COLOR_MEDIUM
        }}
      >
        <FaWhatsapp className="text-xl" />
        Falar no WhatsApp
      </a>
    </section>
  )
}
