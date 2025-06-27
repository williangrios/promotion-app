'use client'

import { envVariables } from '@/helpers/envVariables'

export default function PricingProduct() {
  return (
    <section
      className="py-20 text-center"
      style={{ backgroundColor: envVariables.SECONDARY_COLOR_LIGHT, color: envVariables.SECONDARY_COLOR_DARK }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-4">
          Escolha seu Kit e Transforme sua Energia 💥
        </h2>
        <p className="text-lg mb-12">
          Todos os kits foram desenvolvidos para garantir sua satisfação e os melhores resultados.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {envVariables.PRODUCTS.map((product, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 flex flex-col shadow-lg border transition-transform ${
                product.highlight
                  ? 'bg-yellow-400 text-black border-yellow-600 scale-105 relative'
                  : 'bg-white text-gray-900 border-gray-200'
              }`}
            >
              {product.highlight && (
                <span className="absolute top-0 right-0 -mt-4 -mr-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full uppercase font-bold">
                  Mais vendido
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
              <p className="mb-4 font-medium">{product.description}</p>
              <ul className="text-left text-sm mb-6 space-y-2">
                {product.features.map((f, i) => (
                  <li key={i}>✅ {f}</li>
                ))}
              </ul>
              <p className="text-3xl font-extrabold mt-auto">{product.priceLabel}</p>
              <div className="mt-4">
                <a
                  href={product.link}
                  className="inline-block font-bold px-6 py-3 rounded-full transition"
                  style={{
                    backgroundColor: envVariables.PRIMARY_COLOR_DARK,
                    color: '#fff',
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      envVariables.PRIMARY_COLOR_MEDIUM
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                      envVariables.PRIMARY_COLOR_DARK
                  }}
                >
                  {product.cta} 🔥
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
