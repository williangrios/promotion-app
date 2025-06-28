'use client'

import { useEffect, useRef, useState } from 'react'
import { envVariables } from '@/helpers/envVariables'

export default function Stats() {
  const [visible, setVisible] = useState(false)
  const [counts, setCounts] = useState<number[]>(envVariables.STATS.map(() => 0))
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true)
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [visible])

  useEffect(() => {
    if (!visible) return

    const durations = envVariables.STATS.map(() => 2000)
    const start = performance.now()
    const targetValues = envVariables.STATS.map((s) =>
      typeof s.value === 'string' ? parseInt(s.value.replace(/[^\d]/g, '')) : s.value
    )

    const animate = (time: number) => {
      const elapsed = time - start
      const newCounts = targetValues.map((target, i) => {
        const progress = Math.min(elapsed / durations[i], 1)
        return Math.floor(progress * target)
      })

      setCounts(newCounts)

      if (elapsed < Math.max(...durations)) {
        requestAnimationFrame(animate)
      } else {
        setCounts(targetValues)
      }
    }

    requestAnimationFrame(animate)
  }, [visible])

  return (
    <section
      ref={sectionRef}
      className="text-white py-6 px-6"
      style={{
        background: `linear-gradient(180deg, ${envVariables.SECONDARY_COLOR_LIGHT}, ${envVariables.PRIMARY_COLOR_DARK})`,
      }}
    >
      <div className="max-w-6xl mx-auto text-center grid md:grid-cols-3 gap-8">
        {envVariables.STATS.map((s, i) => {
          const Icon = s.icon
          const suffix = typeof s.value === 'string' ? s.value.replace(/[\d.,]/g, '') : ''
          return (
            <div key={i} className="flex flex-col items-center">
              {Icon && <Icon className="w-10 h-10 mb-4" />}
              <p className="text-4xl font-extrabold">
                {counts[i]}
                {suffix}
              </p>
              <p className="text-lg">{s.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
