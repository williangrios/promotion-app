import { EmailService } from '@/services/EmailService'
import { NextResponse } from 'next/server'

export async function GET() {
  const emailService = new EmailService()

  await emailService.sendWelcomeEmail({
    // email: email.toLowerCase().trim(),
    email: 'williangrios@yahoo.com.br',
  })

  return NextResponse.json({
    status: 'OK',
    message: 'Email enviado',
    timestamp: new Date().toISOString(),
    endpoints: {
      POST: '/api/',
      GET: '/api/payment-confirmation-webhook',
    },
  })
}
