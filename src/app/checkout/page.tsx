import React from 'react'

function page() {
  return <div>page</div>
}

export default page
// 'use client'

// import { useSearchParams } from 'next/navigation'
// import { useState } from 'react'
// import Image from 'next/image'
// import { loadStripe } from '@stripe/stripe-js'
// import Guarantee from '../components/Guarantee'
// import FAQ from '../components/FAQ'
// import { envVariables } from '@/helpers/envVariables'

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// )

// export default function CheckoutPage() {
//   const searchParams = useSearchParams()
//   const selectedProductId = searchParams.get('product') || 'frasco1'
//   const selectedProduct = envVariables.PRODUCTS.find(
//     (p) => p.id === selectedProductId
//   )

//   const [loading, setLoading] = useState(false)

//   const handleCheckout = async () => {
//     if (!selectedProduct) return
//     setLoading(true)
//     try {
//       const res = await fetch('/api/checkout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ priceId: selectedProduct.price }),
//       })
//       const { sessionId } = await res.json()
//       if (sessionId) {
//         const stripe = await stripePromise
//         if (!stripe) throw new Error('Stripe.js não carregou')
//         await stripe.redirectToCheckout({ sessionId })
//       } else {
//         alert('Erro ao criar sessão de pagamento.')
//       }
//     } catch (err) {
//       console.error('Erro ao criar checkout:', err)
//       alert('Ocorreu um erro ao iniciar o pagamento.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (!selectedProduct) {
//     return (
//       <section className="min-h-screen flex items-center justify-center text-white bg-slate-900">
//         <p>Produto inválido. Verifique o link de compra.</p>
//       </section>
//     )
//   }

//   return (
//     <section
//       className="min-h-screen mt-20 text-white flex flex-col w-full items-center justify-center py-6"
//       style={{ backgroundColor: envVariables.SECONDARY_COLOR_MEDIUM }}
//     >
//       <div className="w-full max-w-2xl bg-white text-gray-900 rounded-xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-center mb-4">
//           Adquira seu {selectedProduct.title}
//         </h1>
//         <p className="text-center text-gray-600 mb-6">
//           {selectedProduct.description}
//         </p>

//         <div className="border border-gray-300 rounded-lg p-6 mb-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-2xl font-extrabold">
//                 {selectedProduct.priceLabel}
//               </p>
//               <p className="text-sm text-gray-500">Pagamento único</p>
//             </div>
//             <Image
//               src="/vitamina.png"
//               alt="Imagem do produto"
//               width={100}
//               height={100}
//             />
//           </div>
//         </div>

//         <button
//           disabled={loading}
//           onClick={handleCheckout}
//           className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold py-3 rounded-full transition disabled:opacity-50"
//         >
//           {loading ? 'Redirecionando...' : 'Comprar Agora'}
//         </button>

//         <div className="mt-10 text-center text-sm text-slate-700">
//           <p>
//             ✔️ Garantia de 7 dias: seu dinheiro de volta se não ficar
//             satisfeito.
//           </p>
//           <p>🔒 Pagamento 100% seguro e criptografado.</p>
//         </div>
//       </div>

//       <div className="mt-8 flex flex-col w-full">
//         <Guarantee />
//         <FAQ />
//       </div>
//     </section>
//   )
// }
