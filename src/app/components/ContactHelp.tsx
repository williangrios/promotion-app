// ContactHelp.tsx
import { envVariables } from '@/helpers/envVariables'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactHelp() {
  return (
    <section className="py-20 bg-white text-center px-6">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center -space-x-4 mb-4">
          <Image
            src="/avatar1.jpg"
            alt="Atendente 1"
            width={48}
            height={48}
            className="rounded-full border-2 border-amber-400"
          />
          <Image
            src="/avatar2.jpg"
            alt="Atendente 2"
            width={48}
            height={48}
            className="rounded-full border-2 border-amber-400"
          />
          <Image
            src="/avatar3.jpg"
            alt="Atendente 3"
            width={48}
            height={48}
            className="rounded-full border-2 border-amber-400"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">Fale com Nosso Time</h2>
        <p className="mb-4">
          Dúvidas sobre produtos, pedidos ou garantia? Estamos prontos para
          ajudar!
        </p>
        <Link
          href={`https://wa.me/${envVariables.SOCIAL_WHATSAPP}`}
          target="_blank"
          className="inline-block bg-amber-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition"
        >
          Suporte via WhatsApp
        </Link>
      </div>
    </section>
  )
}
