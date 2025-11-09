import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ success: true })
}

// Se não estiver usando ainda, exporte ao menos um GET vazio
export async function GET() {
  return NextResponse.json({ message: 'Checkout API' })
}
// import { NextRequest, NextResponse } from 'next/server'
// import Stripe from 'stripe'

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2025-05-28.basil',
// })

// export async function POST(req: NextRequest) {
//   try {
//     const { priceId } = (await req.json()) as { priceId?: string }
//     if (!priceId || typeof priceId !== 'string') {
//       return NextResponse.json(
//         { error: 'priceId is required and must be a string' },
//         { status: 400 }
//       )
//     }

//     const domain = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'
//     const session = await stripe.checkout.sessions.create({
//       mode: 'payment', // usando checkout one-time
//       payment_method_types: ['card', 'boleto', 'pix'],
//       line_items: [{ price: priceId, quantity: 1 }],
//       success_url: `${domain}/success`,
//       cancel_url: `${domain}/cancel`,
//       locale: 'pt-BR',
//       billing_address_collection: 'auto',
//       allow_promotion_codes: true,
//     })

//     return NextResponse.json({ sessionId: session.id }, { status: 200 })
//   } catch (error) {
//     console.error('Error creating checkout session:', error)
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     )
//   }
// }

// export async function GET() {
//   const domainConfigured = Boolean(process.env.NEXT_PUBLIC_APP_URL)
//   const apiKeyConfigured = Boolean(process.env.STRIPE_SECRET_KEY)

//   return NextResponse.json({
//     service: 'Checkout API',
//     version: process.env.npm_package_version ?? '2.0.0',
//     status: 'operational',
//     endpoints: [
//       {
//         method: 'POST',
//         path: '/api/checkout',
//         description: 'Create a Stripe Checkout session (one-time)',
//       },
//       {
//         method: 'GET',
//         path: '/api/checkout',
//         description: 'Check service status and config',
//       },
//     ],
//     rateLimit: '20 requests per hour per IP',
//     config: { domainConfigured, apiKeyConfigured },
//   })
// }
