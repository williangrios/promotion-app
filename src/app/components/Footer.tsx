import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import DefaultLink from './DefaultLink'
import { envVariables } from '@/helpers/envVariables'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      className="text-white py-12 px-6"
      style={{ backgroundColor: envVariables.PRIMARY_COLOR_DARK }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + mídias */}
        <div className="flex flex-col items-center">
          <Image
            src="/logo.jpg"
            alt={`${envVariables.PRODUCT_NAME} Logo`}
            width={100}
            height={100}
            className="rounded-full border-2 shadow-lg"
            style={{ borderColor: envVariables.PRIMARY_COLOR_LIGHT }}
          />
          <div className="flex gap-4 mt-4">
            {envVariables.SOCIAL_YOUTUBE && (
              <DefaultLink
                href={`https://youtube.com/${envVariables.SOCIAL_YOUTUBE}`}
              >
                <FaYoutube size={20} />
              </DefaultLink>
            )}
            {envVariables.SOCIAL_INSTAGRAM && (
              <DefaultLink
                href={`https://instagram.com/${envVariables.SOCIAL_INSTAGRAM}`}
              >
                <FaInstagram size={20} />
              </DefaultLink>
            )}
            {envVariables.SOCIAL_FACEBOOK && (
              <DefaultLink
                href={`https://facebook.com/${envVariables.SOCIAL_FACEBOOK}`}
              >
                <FaFacebookF size={20} />
              </DefaultLink>
            )}
            {envVariables.SOCIAL_WHATSAPP && (
              <DefaultLink href={`https://wa.me/${envVariables.SOCIAL_WHATSAPP}`}>
                <FaWhatsapp size={20} />
              </DefaultLink>
            )}
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase" style={{ color: envVariables.SECONDARY_COLOR_LIGHT }}>
            Produto
          </h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              <DefaultLink href="/#benefits">Benefícios</DefaultLink>
            </li>
            <li>
              <DefaultLink href="/#pricing">Preços</DefaultLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase" style={{ color: envVariables.SECONDARY_COLOR_LIGHT }}>
            Empresa
          </h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              <DefaultLink href="/privacy-policy">Política de Privacidade</DefaultLink>
            </li>
            <li>
              <DefaultLink href="/terms-and-conditions">Termos de Uso</DefaultLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase" style={{ color: envVariables.SECONDARY_COLOR_LIGHT }}>
            Suporte
          </h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              <DefaultLink href={`mailto:${envVariables.EMAIL_SUPPORT}`}>
                Suporte
              </DefaultLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-white/70">
        <p>
          &copy; {new Date().getFullYear()} {envVariables.PRODUCT_NAME}. Todos os
          direitos reservados.
        </p>
        <p className="mt-1">
          Transformando saúde e bem-estar com inovação em cápsulas e géis.
        </p>
      </div>
    </footer>
  )
}
