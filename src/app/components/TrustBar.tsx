'use client'
import {
  TruckIcon,
  CreditCardIcon,
  GiftIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'
import { envVariables } from '@/helpers/envVariables'

export default function TrustBar() {
  const trustItems = [
    {
      icon: TruckIcon,
      title: 'Entregamos',
      subtitle: 'Para todo o Brasil!',
    },
    {
      icon: CreditCardIcon,
      title: 'Pague com cartão',
      subtitle: 'em até 12x',
    },
    {
      icon: GiftIcon,
      title: 'Frete grátis',
      subtitle: 'em qualquer pedido!',
    },
    {
      icon: LockClosedIcon,
      title: 'Compra segura',
      subtitle: 'Site blindado!',
    },
  ]

  return (
    <section
      className="py-4 md:py-5 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${envVariables.PRIMARY_COLOR_ULTRA_DARK}, ${envVariables.PRIMARY_COLOR_DARK})`,
      }}
    >
      {/* Padrão de fundo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 md:gap-4 group cursor-default"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              {/* Ícone */}
              <div
                className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>

              {/* Texto */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-bold text-white leading-tight mb-0.5">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-white/80 leading-tight">
                  {item.subtitle}
                </p>
              </div>

              {/* Separador vertical (apenas desktop e não no último item) */}
              {idx < trustItems.length - 1 && (
                <div
                  className="hidden lg:block w-px h-12 ml-auto"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
