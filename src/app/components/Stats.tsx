'use client'

import { envVariables } from '@/helpers/envVariables'

export default function Stats() {
  return (
    <section
      className="text-white py-16 px-6"
      style={{
        background: `linear-gradient(135deg, ${envVariables.SECONDARY_COLOR_LIGHT}, ${envVariables.PRIMARY_COLOR_MEDIUM})`,
      }}
    >
      <div className="max-w-6xl mx-auto text-center grid md:grid-cols-3 gap-8">
        {envVariables.STATS.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={i} className="flex flex-col items-center">
              {Icon && <Icon className="w-10 h-10 mb-4" />}
              <p className="text-4xl font-extrabold">{s.value}</p>
              <p className="text-lg">{s.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
