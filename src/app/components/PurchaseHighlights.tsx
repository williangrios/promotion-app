'use client'

import { envVariables } from '@/helpers/envVariables'

export default function PurchaseHighlights() {
  return (
    <section
      className="text-white py-4 px-4"
      style={{
        background: `linear-gradient(90deg, ${envVariables.PRIMARY_COLOR_DARK}, ${envVariables.SECONDARY_COLOR_DARK})`,
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {envVariables.HIGHLIGHTS.map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <Icon className="w-7 h-7 text-white" />
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">{item.subtitle}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}