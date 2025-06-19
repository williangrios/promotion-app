import type { NextRequest } from 'next/server'

export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for')
  const ip =
    forwarded?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown'
  return ip
}
