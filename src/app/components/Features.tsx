'use client'

import { envVariables } from '@/helpers/envVariables'
import Image from 'next/image'

export default function Features() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: envVariables.SECONDARY_COLOR_LIGHT, color: envVariables.SECONDARY_COLOR_DARK }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <Image
          src="/logo.jpg"
          alt={`${envVariables.PRODUCT_NAME} Logo`}
          width={100}
          height={100}
          className="rounded-full border-2 shadow-lg"
          style={{
            borderColor: envVariables.PRIMARY_COLOR_LIGHT,
          }}
        />

        <h2 className="text-4xl font-extrabold text-center my-4">
          Benefícios comprovados com {' '}
          <span style={{ color: envVariables.PRIMARY_COLOR_MEDIUM }}>
            {envVariables.PRODUCT_NAME}
          </span>{' '}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
          {envVariables.FEATURES.map((feat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl shadow hover:shadow-md transition"
              style={{
                backgroundColor: '#ffffff',
                color: envVariables.SECONDARY_COLOR_DARK,
              }}
            >
              <feat.icon
                className="h-10 w-10 mb-4"
                style={{ color: envVariables.PRIMARY_COLOR_MEDIUM }}
              />
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-700">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
