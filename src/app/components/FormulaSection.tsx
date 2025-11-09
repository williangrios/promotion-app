'use client'
import { envVariables } from '@/helpers/envVariables'
import { BeakerIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function FormulaSection() {
  const [activeTab, setActiveTab] = useState<'ingredientes' | 'beneficios'>(
    'ingredientes'
  )

  const ingredients = [
    {
      name: 'Maca Peruana',
      dosage: '400 mg',
      function: 'Libido, energia e vitalidade',
      icon: '🌿',
    },
    {
      name: 'Tribulus Terrestris',
      dosage: '250 mg',
      function: 'Estimula produção natural de testosterona',
      icon: '💪',
    },
    {
      name: 'Gengibre em pó',
      dosage: '100 mg',
      function: 'Vasodilatação, energia',
      icon: '🔥',
    },
    {
      name: 'Zinco quelado',
      dosage: '10 mg',
      function: 'Essencial para testosterona e fertilidade',
      icon: '⚡',
    },
    {
      name: 'Vitamina B6',
      dosage: '1,3 mg',
      function: 'Metabolismo e disposição',
      icon: '💊',
    },
    {
      name: 'L-Arginina',
      dosage: '300 mg',
      function: 'Aumenta o fluxo sanguíneo (efeito "Viagra natural")',
      icon: '💓',
    },
    {
      name: 'Panax Ginseng',
      dosage: '150 mg',
      function: 'Resistência física e mental',
      icon: '🧠',
    },
    {
      name: 'Muira Puama (extrato)',
      dosage: '200 mg',
      function: 'Afrodisíaco natural, tradicional no Brasil',
      icon: '🌳',
    },
  ]

  const benefits = [
    {
      title: 'Energia e Vitalidade',
      description: 'Maca peruana e ginseng aumentam disposição para o dia',
      icon: '⚡',
    },
    {
      title: 'Performance Física',
      description: 'Tribulus e zinco otimizam força e resistência',
      icon: '💪',
    },
    {
      title: 'Libido Masculina',
      description: 'Muira puama e L-arginina melhoram circulação e desejo',
      icon: '🔥',
    },
    {
      title: 'Foco Mental',
      description: 'Ginseng e vitamina B6 aumentam concentração',
      icon: '🧠',
    },
  ]

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${envVariables.PRIMARY_COLOR_ULTRA_DARK} 0%, ${envVariables.PRIMARY_COLOR_DARK} 100%)`,
      }}
    >
      {/* Elementos decorativos */}
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
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-md border border-yellow-400/30 rounded-full px-4 py-2 mb-6">
            <BeakerIcon className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-300">
              Fórmula Científica
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Conheça nossa fórmula{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              exclusiva
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Desenvolvida por especialistas com ingredientes premium de alta
            biodisponibilidade
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('ingredientes')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'ingredientes'
                ? 'text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
            style={{
              background:
                activeTab === 'ingredientes'
                  ? `linear-gradient(135deg, ${envVariables.SECONDARY_COLOR_MEDIUM}, ${envVariables.SECONDARY_COLOR_LIGHT})`
                  : 'transparent',
              border: `2px solid ${
                activeTab === 'ingredientes'
                  ? envVariables.SECONDARY_COLOR_MEDIUM
                  : 'rgba(255,255,255,0.2)'
              }`,
            }}
          >
            Fórmula Base
          </button>
          <button
            onClick={() => setActiveTab('beneficios')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'beneficios'
                ? 'text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
            style={{
              background:
                activeTab === 'beneficios'
                  ? `linear-gradient(135deg, ${envVariables.SECONDARY_COLOR_MEDIUM}, ${envVariables.SECONDARY_COLOR_LIGHT})`
                  : 'transparent',
              border: `2px solid ${
                activeTab === 'beneficios'
                  ? envVariables.SECONDARY_COLOR_MEDIUM
                  : 'rgba(255,255,255,0.2)'
              }`,
            }}
          >
            Benefícios
          </button>
        </div>

        {/* Conteúdo dos Tabs */}
        {activeTab === 'ingredientes' ? (
          <div className="max-w-5xl mx-auto">
            {/* Cabeçalho da tabela */}
            <div
              className="grid grid-cols-12 gap-4 px-6 py-4 rounded-t-2xl font-bold text-white text-sm md:text-base"
              style={{
                background: `linear-gradient(135deg, ${envVariables.PRIMARY_COLOR_MEDIUM}, ${envVariables.PRIMARY_COLOR_LIGHT})`,
              }}
            >
              <div className="col-span-5 md:col-span-4">Ingrediente</div>
              <div className="col-span-3 md:col-span-2 text-center">
                Dosagem
              </div>
              <div className="col-span-4 md:col-span-6">Função Principal</div>
            </div>

            {/* Linhas da tabela */}
            <div className="bg-white/5 backdrop-blur-md rounded-b-2xl border border-white/10 overflow-hidden">
              {ingredients.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors duration-200 group"
                >
                  <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white font-medium text-sm md:text-base">
                      {item.name}
                    </span>
                  </div>
                  <div className="col-span-3 md:col-span-2 flex items-center justify-center">
                    <span
                      className="font-bold text-sm md:text-base"
                      style={{ color: envVariables.SECONDARY_COLOR_LIGHT }}
                    >
                      {item.dosage}
                    </span>
                  </div>
                  <div className="col-span-4 md:col-span-6 flex items-center">
                    <span className="text-gray-300 text-xs md:text-sm leading-snug">
                      {item.function}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Badge informativo */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              <span>
                Fórmula base sugerida por cápsula • Uso: 2 cápsulas ao dia
              </span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${envVariables.SECONDARY_COLOR_MEDIUM}, ${envVariables.SECONDARY_COLOR_LIGHT})`,
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
