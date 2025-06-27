// app/terms-and-conditions/page.tsx

import { envVariables } from '@/helpers/envVariables'

export default function PageTermsAndConditions() {
  const { TERMS_AND_CONDITIONS } = envVariables

  return (
    <main className="max-w-4xl mx-auto px-6 py-32 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">
        {TERMS_AND_CONDITIONS.title}
      </h1>

      <p className="mb-4 text-sm text-gray-500">
        Última atualização: {TERMS_AND_CONDITIONS.lastUpdated}
      </p>

      <section className="space-y-6 text-base leading-relaxed">
        <p>{TERMS_AND_CONDITIONS.intro}</p>

        {TERMS_AND_CONDITIONS.sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mt-8">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc pl-5 space-y-2">
                {section.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  )
}
