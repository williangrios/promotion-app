// Testimonials.tsx
'use client'
import Slider from 'react-slick'

const testimonials = [
  {
    name: 'Fernanda Silva',
    feedback:
      'Usei as cápsulas de energia e senti a diferença já no segundo dia: mais foco e disposição para o trabalho!',
  },
  {
    name: 'Ricardo Almeida',
    feedback:
      'Os géis são extremamente práticos. Levo na bolsa e tomo a qualquer momento — perfeito para meu ritmo agitado.',
  },
  {
    name: 'Mariana Costa',
    feedback:
      'Minha imunidade melhorou muito desde que comecei a tomar juntos cápsulas e géis. Nota 10 para o sabor também!',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Depoimentos Reais</h2>
        <Slider
          dots
          infinite
          speed={500}
          autoplay
          autoplaySpeed={4000}
          slidesToShow={1}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="p-6">
              <p className="italic mb-4">“{t.feedback}”</p>
              <p className="font-bold">{t.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
