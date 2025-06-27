'use client'

import Image from 'next/image'

export default function MiniPaymentFooter() {
  return (
    <footer className="bg-[#8b0000] text-white py-6 px-4 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
        {/* Logo */}
        {/* <div className="flex items-center gap-2">
          <Image
            src="/logo-mini.png" // substitua pela sua logo pequena em /public
            alt="Logo"
            width={100}
            height={30}
            className="object-contain"
          />
        </div> */}

        {/* Formas de pagamento */}
        <div className="text-center">
          <p className="font-semibold mb-1">Formas de pagamento</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Image src="/pix.png" className='rounded-lg p-1 bg-white' alt="Pix" width={40} height={26} />
            <Image src="/credit-card.jpg" className='rounded-lg p-1 bg-white' alt="Visa" width={40} height={26} />
            <Image src="/boleto.png" className='rounded-lg p-1 bg-white' alt="Boleto" width={40} height={26} />
          </div>
        </div>
      </div>
    </footer>
  )
}
