// FAQ.tsx
'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqData = [
  {
    question: 'Quais benefícios das cápsulas vitamínicas?',
    answer: `Nossas cápsulas foram formuladas para suprir deficiências nutricionais, promovendo mais energia, imunidade e vitalidade no seu dia a dia. Resultados que você sente já nas primeiras semanas.`,
  },
  {
    question: 'Como usar os géis concentrados?',
    answer:
      'Basta tomar 1 sachê de gel por dia, de preferência pela manhã, para garantir absorção máxima e praticidade no seu rotina — perfeito para quem não tem tempo de engolir cápsulas.',
  },
  {
    question: 'Posso combinar cápsulas e géis?',
    answer:
      'Sim! A combinação potencializa os efeitos: as cápsulas atuam de forma gradual, enquanto os géis dão aquele “boost” instantâneo. Siga sempre as instruções de dosagem no rótulo.',
  },
  {
    question: 'Há risco de contraindicações?',
    answer:
      'Nossos produtos são liberados por órgãos reguladores e testados dermatologicamente. Ainda assim, consulte seu médico se estiver grávida, amamentando ou em tratamento contínuo.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer:
      'Enviamos em até 24h úteis. Seu pedido chega em 3–5 dias úteis com frete grátis para todo o Brasil em compras acima de R$199.',
  },
  {
    question: 'E se eu não gostar?',
    answer:
      'Temos Garantia Total: devolvemos 100% do valor em até 7 dias após o recebimento, sem burocracia. Você só tem a ganhar!',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx)

  return (
    <section className="py-20 flex w-full bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 flex flex-col w-full">
        <h2 className="text-4xl font-bold text-center mb-10">
          Dúvidas Frequentes
        </h2>
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full border-b border-gray-200 py-4"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center text-left font-semibold text-lg hover:text-amber-400 transition"
            >
              <span>{item.question}</span>
              <ChevronDownIcon
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === idx ? 'rotate-180 text-amber-400' : ''
                }`}
              />
            </button>
            {openIndex === idx && (
              <div className="mt-2 text-gray-700 text-sm">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
