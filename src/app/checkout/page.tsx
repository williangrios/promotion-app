'use client'

import { useState } from 'react'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'
import Guarantee from '../components/Guarantee'
import FAQ from '../components/FAQ'

// Carregando Stripe.js com sua Publishable Key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

const product = {
  vitamina: {
    title: 'Complexo Vitamínico',
    description: 'Blend completo de vitaminas essenciais para o seu bem-estar',
    price: 'R$49,90',
    installment: 'ou 1x de R$49,90',
    priceId: 'price_YOUR_STRIPE_PRICE_ID', // substitua aqui
  },
}

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)
  const plan = product.vitamina

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: plan.priceId }),
      })
      const { sessionId } = await res.json()
      if (sessionId) {
        const stripe = await stripePromise
        if (!stripe) throw new Error('Stripe.js não carregou')
        await stripe.redirectToCheckout({ sessionId })
      } else {
        alert('Erro ao criar sessão de pagamento.')
      }
    } catch (err) {
      console.error('Erro ao criar checkout:', err)
      alert('Ocorreu um erro ao iniciar o pagamento.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen mt-20 bg-slate-900 text-white flex flex-col w-full items-center justify-center p-6">
      <div className="w-full bg-white text-gray-900 rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Adquira Seu {plan.title}
        </h1>
        <p className="text-center text-gray-600 mb-6">{plan.description}</p>

        <div className="border border-gray-300 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-extrabold">{plan.price}</p>
              <p className="text-sm text-gray-500">{plan.installment}</p>
            </div>
            <Image
              src="/vitamina.png"
              alt="Imagem do produto"
              width={100}
              height={100}
            />
          </div>
        </div>

        <button
          disabled={loading}
          onClick={handleCheckout}
          className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold py-3 rounded-full transition disabled:opacity-50"
        >
          {loading ? 'Redirecionando...' : 'Comprar Agora'}
        </button>

        <div className="mt-10 text-center text-sm text-slate-700">
          <p>
            ✔️ Garantia de 7 dias: seu dinheiro de volta se não ficar
            satisfeito.
          </p>
          <p>🔒 Pagamento 100% seguro e criptografado.</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col w-full">
        <Guarantee />
        <FAQ />
      </div>
    </section>
  )
}
