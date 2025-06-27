'use client'

import Image from 'next/image'
import { envVariables } from '@/helpers/envVariables'

export default function Guarantee() {
  return (
    <section
      className="py-20 px-6 text-white"
      style={{ backgroundColor: envVariables.PRIMARY_COLOR_LIGHT }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <Image
          src="/guarantee.png"
          alt="Garantia de Satisfação"
          width={200}
          height={200}
        />
        <div>
          <h2 className="text-3xl font-extrabold mb-4 text-white">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-white text-lg leading-relaxed">
            {envVariables.GUARANTEE_TEXT}
          </p>
        </div>
      </div>
    </section>
  )
}
