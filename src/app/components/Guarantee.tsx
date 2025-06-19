// Guarantee.tsx
import Image from 'next/image'

export default function Guarantee() {
  return (
    <section className="py-20 bg-gray-100 text-gray-800 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <Image
          src="/guarantee.png"
          alt="Garantia de Satisfação"
          width={200}
          height={200}
        />
        <div>
          <h2 className="text-3xl font-extrabold mb-4">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="mb-4">
            Teste nossas cápsulas e géis sem risco. Se não sentir mais
            disposição, só solicitar, e devolvemos 100% do valor — rápido e sem
            complicações.
          </p>
        </div>
      </div>
    </section>
  )
}
