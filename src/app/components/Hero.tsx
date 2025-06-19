import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-amber-400 to-red-500 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold mb-4">
            Energia e Saúde em Cápsulas e Géis
          </h1>
          <p className="mb-6 text-lg">
            Conheça nossa linha de suplementos premium: cápsulas de alta
            potência e géis práticos para o seu dia a dia. Resultados visíveis
            em 7 dias ou seu dinheiro de volta!
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-white text-amber-500 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Veja Planos
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/produto-hero.png"
            alt="Linha de cápsulas e géis"
            width={400}
            height={400}
            className="shadow-2xl rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}
