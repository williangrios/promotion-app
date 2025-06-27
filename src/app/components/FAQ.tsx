'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { envVariables } from '@/helpers/envVariables'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx)

  return (
    <section className="py-20 flex w-full" style={{ backgroundColor: '#fff', color: envVariables.SECONDARY_COLOR_DARK }}>
      <div className="max-w-3xl mx-auto px-6 flex flex-col w-full">
        <h2 className="text-4xl font-bold text-center mb-10">
          Dúvidas Frequentes
        </h2>

        {envVariables.FAQ.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full border-b border-gray-200 py-4"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center text-left font-semibold text-lg transition-colors"
              style={{
                color: openIndex === idx
                  ? envVariables.PRIMARY_COLOR_LIGHT
                  : envVariables.SECONDARY_COLOR_DARK,
              }}
            >
              <span>{item.question}</span>
              <ChevronDownIcon
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === idx ? 'rotate-180' : ''
                }`}
                style={{
                  color: openIndex === idx
                    ? envVariables.PRIMARY_COLOR_LIGHT
                    : envVariables.SECONDARY_COLOR_DARK,
                }}
              />
            </button>

            {openIndex === idx && (
              <div className="mt-2 text-sm" style={{ color: '#444' }}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
