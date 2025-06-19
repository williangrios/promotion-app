import { envVariables } from '@/helpers/envVariables'
import {
  LightBulbIcon,
  DevicePhoneMobileIcon,
  CheckBadgeIcon,
  LockClosedIcon,
  SparklesIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const features = [
  {
    title: 'Você no comando',
    desc: 'Envie temas, fotos ou capítulos e a IA transforma em questões educativas sob medida.',
    icon: LightBulbIcon,
  },
  {
    title: 'Aprender para desbloquear',
    desc: 'O celular só é liberado após a criança responder corretamente. Estudo antes da diversão.',
    icon: LockClosedIcon,
  },
  {
    title: 'Controle sem estresse',
    desc: 'Configure matérias, níveis e frequência de bloqueio. Tudo no seu tempo, do seu jeito.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Educação de verdade',
    desc: 'Mais que um bloqueador, um aliado que estimula autonomia, foco e aprendizado real.',
    icon: CheckBadgeIcon,
  },
  {
    title: 'Resultados visíveis',
    desc: 'Pais relatam melhora nas notas em menos de 30 dias',
    icon: SparklesIcon,
  },
  {
    title: 'Relatório de Evolução',
    desc: 'Acompanhe os acertos e dificuldades da criança com gráficos claros e objetivos. Veja sua evolução semana a semana.',
    icon: ChartBarIcon,
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <Image
          src="/logo.jpg" // coloque a imagem na pasta public
          alt="Mentorzinho Logo"
          width={100} // tamanho ajustável
          height={100}
          className="rounded-full border-2 border-amber-400 shadow-lg"
        />
        <h2 className="text-4xl font-extrabold text-center my-4">
          O que faz do{' '}
          <span className="text-sky-600">{envVariables.APP_NAME}</span> um app
          único?
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Mais do que tecnologia, entregamos controle, foco e resultados reais
          na palma da sua mão. 📲
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <feat.icon className="h-10 w-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-700">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
