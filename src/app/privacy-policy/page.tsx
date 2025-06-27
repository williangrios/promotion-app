import { envVariables } from '@/helpers/envVariables'
import React from 'react'

export default function PagePrivacyPolicy() {
  const policy = envVariables.PRIVACY_POLICY

  return (
    <main className="max-w-4xl mx-auto px-6 py-32 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">
        {policy.title}
      </h1>

      <p className="mb-4 text-sm text-gray-500">Última atualização: {policy.lastUpdated}</p>

      <section className="space-y-6 text-base leading-relaxed">
        {policy.sections.map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <h2 className="text-xl font-semibold mt-8">{section.title}</h2>
            )}
            {section.content && <p>{section.content}</p>}
            {section.list && (
              <ul className="list-disc pl-5 space-y-2">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </main>
  )
}
