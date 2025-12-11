import React from 'react'

function PricingProduct() {
  return <div>PricingProduct</div>
}

export default PricingProduct
// 'use client'

// import { envVariables } from '@/helpers/envVariables'
// import Image from 'next/image'

// export default function PricingProduct() {
//   return (
//     <section
//       className="py-16 md:py-24 text-center relative overflow-hidden"
//       style={{
//         backgroundColor: envVariables.SECONDARY_COLOR_LIGHT,
//         color: envVariables.PRIMARY_COLOR_DARK,
//       }}
//     >
//       {/* Elementos decorativos de fundo */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Cabeçalho */}
//         <div className="mb-12 md:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
//             Escolha seu Kit e Transforme <br className="hidden sm:block" />
//             sua Energia 💥
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
//             Todos os kits foram desenvolvidos para garantir sua satisfação e os
//             melhores resultados.
//           </p>
//         </div>

//         {/* Grid de produtos */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {envVariables.PRODUCTS.map((product, idx) => (
//             <div
//               key={idx}
//               className={`group rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
//                 product.highlight
//                   ? 'bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400 text-black border-yellow-500 lg:scale-105 relative'
//                   : 'bg-white text-gray-900 border-gray-200 hover:border-gray-300'
//               }`}
//             >
//               {/* Badge de destaque */}
//               {product.highlight && (
//                 <div className="absolute -top-4 -right-4 z-10">
//                   <span className="relative flex h-12 w-12 items-center justify-center">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-12 w-12 bg-gradient-to-r from-red-600 to-red-500 shadow-lg items-center justify-center">
//                       <span className="text-white text-xs font-bold px-2 text-center leading-tight">
//                         MAIS
//                         <br />
//                         VENDIDO
//                       </span>
//                     </span>
//                   </span>
//                 </div>
//               )}

//               {/* Imagem do produto - MAIOR e SEM container */}
//               <div className="mb-8 flex justify-center items-center -mx-6 md:-mx-8 -mt-6 md:-mt-8 pt-8 pb-4 ">
//                 <Image
//                   src={product.img}
//                   width={220}
//                   height={320}
//                   alt={product.title}
//                   className="object-contain rounded-2xl h-56 md:h-72 lg:h-80 w-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
//                   priority={idx === 0}
//                 />
//               </div>

//               {/* Título e descrição */}
//               <div className="mb-4">
//                 <h3 className="text-2xl md:text-3xl font-bold mb-3">
//                   {product.title}
//                 </h3>
//                 <p className="text-sm md:text-base font-medium opacity-90">
//                   {product.description}
//                 </p>
//               </div>

//               {/* Features */}
//               <ul className="text-left text-sm md:text-base mb-6 space-y-3 flex-grow">
//                 {product.features.map((f, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     <span className="text-green-600 text-lg flex-shrink-0">
//                       ✅
//                     </span>
//                     <span className="leading-snug">{f}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Preço */}
//               <div className="mb-6">
//                 <p
//                   className={`text-3xl md:text-4xl font-extrabold ${
//                     product.highlight ? 'text-black' : 'text-gray-900'
//                   }`}
//                 >
//                   {product.priceLabel}
//                 </p>
//               </div>

//               {/* CTA Button */}
//               <div className="mt-auto">
//                 <a
//                   href={product.link}
//                   className="block w-full font-bold text-base md:text-lg px-6 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//                   style={{
//                     backgroundColor: envVariables.PRIMARY_COLOR_DARK,
//                     color: '#fff',
//                   }}
//                   onMouseOver={(e) => {
//                     const target = e.currentTarget as HTMLAnchorElement
//                     target.style.backgroundColor =
//                       envVariables.PRIMARY_COLOR_MEDIUM
//                     target.style.transform = 'scale(1.05) translateY(-2px)'
//                   }}
//                   onMouseOut={(e) => {
//                     const target = e.currentTarget as HTMLAnchorElement
//                     target.style.backgroundColor =
//                       envVariables.PRIMARY_COLOR_DARK
//                     target.style.transform = 'scale(1)'
//                   }}
//                 >
//                   {product.cta} 🔥
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
