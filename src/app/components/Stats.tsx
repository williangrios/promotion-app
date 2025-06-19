// Stats.tsx
import {
  AcademicCapIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'

const stats = [
  {
    value: '5.000+',
    label: 'Clientes Satisfeitos',
    icon: UserGroupIcon,
  },
  {
    value: '10.000+',
    label: 'Sachês e Cápsulas Vendidos',
    icon: ChartBarIcon,
  },
  {
    value: '98%',
    label: 'Taxa de Satisfação',
    icon: AcademicCapIcon,
  },
]

export default function Stats() {
  return (
    <section className="bg-gradient-to-br from-amber-400 to-red-500 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center grid md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <s.icon className="w-10 h-10 mb-4" />
            <p className="text-4xl font-extrabold">{s.value}</p>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
