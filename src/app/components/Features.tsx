'use client'
import { envVariables } from '@/helpers/envVariables'
import Image from 'next/image'

export default function Features() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${envVariables.PRIMARY_COLOR_LIGHT} 0%, ${envVariables.PRIMARY_COLOR_MEDIUM} 100%)`,
        color: envVariables.SECONDARY_COLOR_LIGHT,
      }}
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Padrão de grid sutil */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da seção */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          {/* Logo com animação */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative">
              <Image
                src="/logo.png"
                alt={`${envVariables.PRODUCT_NAME} Logo`}
                width={120}
                height={120}
                className="rounded-full border-4 shadow-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{
                  borderColor: '#fff',
                }}
              />
              {/* Badge flutuante */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                ✓ 100% Natural
              </div>
            </div>
          </div>

          {/* Título principal */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 leading-tight">
            Benefícios Comprovados com{' '}
            <span
              className="relative inline-block"
              style={{ color: envVariables.SECONDARY_COLOR_MEDIUM }}
            >
              {envVariables.PRODUCT_NAME}
              {/* Underline animado */}
              <span
                className="absolute bottom-0 left-0 w-full h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${envVariables.SECONDARY_COLOR_MEDIUM}, ${envVariables.SECONDARY_COLOR_LIGHT})`,
                }}
              ></span>
            </span>
          </h2>

          {/* Subtítulo */}
          <p className="text-base md:text-lg text-center max-w-2xl opacity-90">
            Cientificamente formulado para maximizar seus resultados e
            transformar sua energia
          </p>
        </div>

        {/* Grid de features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {envVariables.FEATURES.map((feat, i) => (
            <div
              key={i}
              className="group relative"
              style={{
                animationDelay: `${i * 100}ms`,
              }}
            >
              {/* Brilho de fundo no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card principal */}
              <div className="relative bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 border border-gray-100">
                {/* Ícone com fundo circular */}
                <div className="relative mb-6 inline-block">
                  <div
                    className="absolute inset-0 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${envVariables.PRIMARY_COLOR_LIGHT}, ${envVariables.PRIMARY_COLOR_MEDIUM})`,
                    }}
                  ></div>
                  <div
                    className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${envVariables.PRIMARY_COLOR_LIGHT}, ${envVariables.PRIMARY_COLOR_MEDIUM})`,
                    }}
                  >
                    <feat.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900  group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300">
                  {feat.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {feat.desc}
                </p>

                {/* Número do benefício */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold text-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                  {i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button Mobile */}
        <div
          className="p-4 border-t"
          style={{ borderColor: `${envVariables.SECONDARY_COLOR_LIGHT}20` }}
        >
          <a
            href="#pricing"
            className="flex items-center justify-center w-full px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg"
            style={{
              backgroundColor: envVariables.SECONDARY_COLOR_MEDIUM,
              color: envVariables.PRIMARY_COLOR_DARK,
            }}
          >
            <span>Comprar Agora</span>
            <span className="ml-2 text-xl">🔥</span>
          </a>
        </div>
      </div>
    </section>
  )
}
