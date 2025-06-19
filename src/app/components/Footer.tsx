// Footer.tsx
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import DefaultLink from './DefaultLink'
import { envVariables } from '@/helpers/envVariables'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + mídias */}
        <div className="flex flex-col items-center">
          <Image
            src="/logo.jpg"
            alt={`${envVariables.APP_NAME} Logo`}
            width={100}
            height={100}
            className="rounded-full border-2 border-amber-400 shadow-lg"
          />
          <div className="flex gap-4 mt-4">
            <DefaultLink
              href={`https://instagram.com/${envVariables.SOCIAL_INSTAGRAM}`}
            >
              <FaInstagram size={20} />
            </DefaultLink>
            <DefaultLink
              href={`https://facebook.com/${envVariables.SOCIAL_FACEBOOK}`}
            >
              <FaFacebookF size={20} />
            </DefaultLink>
            <DefaultLink href={`https://wa.me/${envVariables.SOCIAL_WHATSAPP}`}>
              <FaWhatsapp size={20} />
            </DefaultLink>
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase text-gray-400">
            Produto
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <DefaultLink href="/#benefits">Benefícios</DefaultLink>
            </li>
            <li>
              <DefaultLink href="/#pricing">Confira Planos</DefaultLink>
            </li>
            <li>
              <DefaultLink href="/#how-to-use">Como Usar</DefaultLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase text-gray-400">
            Empresa
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <DefaultLink href="/privacy-policy">
                Política de Privacidade
              </DefaultLink>
            </li>
            <li>
              <DefaultLink href="/terms-and-conditions">
                Termos de Uso
              </DefaultLink>
            </li>
            <li>
              <DefaultLink href="/help">Central de Ajuda</DefaultLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase text-gray-400">
            Suporte
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <DefaultLink href={`mailto:${envVariables.EMAIL_SUPPORT}`}>
                Email de Suporte
              </DefaultLink>
            </li>
            <li>
              <DefaultLink href={`tel:${envVariables.PHONE_SUPPORT}`}>
                Ligue Agora
              </DefaultLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        <p>
          &copy; {new Date().getFullYear()} {envVariables.APP_NAME}. Todos os
          direitos reservados.
        </p>
        <p className="mt-1">
          Transformando saúde e bem-estar com inovação em cápsulas e géis.
        </p>
      </div>
    </footer>
  )
}
