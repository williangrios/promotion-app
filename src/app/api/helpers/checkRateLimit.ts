// lib/rateLimiter.ts
import { NextRequest } from 'next/server'
import { getClientIp } from './getClientIp'

interface RateLimitConfig {
  maxRequests: number
  windowMs: number // em milissegundos
  identifier: string // prefixo opcional para diferenciar endpoints
}

interface RateLimitEntry {
  count: number
  resetTime: number
}

// Caches separados por identificador
const rateLimitCaches = new Map<string, Map<string, RateLimitEntry>>()

// Função principal de rate limiting
export function checkRateLimit(ip: string, config: RateLimitConfig): boolean {
  const { maxRequests, windowMs, identifier } = config

  // Pega ou cria o cache para este identificador
  if (!rateLimitCaches.has(identifier)) {
    rateLimitCaches.set(identifier, new Map())
  }
  const cache = rateLimitCaches.get(identifier)!

  const now = Date.now()
  const userLimit = cache.get(ip)

  if (!userLimit || now > userLimit.resetTime) {
    // Reset ou primeira requisição
    cache.set(ip, {
      count: 1,
      resetTime: now + windowMs,
    })
    return true
  }

  if (userLimit.count >= maxRequests) {
    return false
  }

  userLimit.count++
  return true
}

// Helper conveniente para uso com NextRequest
export function checkRequestRateLimit(
  req: NextRequest,
  config: RateLimitConfig
): boolean {
  const ip = getClientIp(req)
  return checkRateLimit(ip, config)
}

// Limpar entradas expiradas periodicamente (opcional)
export function cleanupExpiredEntries(): void {
  const now = Date.now()

  rateLimitCaches.forEach((cache) => {
    cache.forEach((entry, ip) => {
      if (now > entry.resetTime) {
        cache.delete(ip)
      }
    })
  })
}

// Configurações pré-definidas para facilitar
export const RateLimitPresets = {
  // Para APIs de geração de conteúdo
  strict: {
    maxRequests: 10,
    windowMs: 60 * 60 * 1000, // 1 hora
  },

  // Para envio de emails
  moderate: {
    maxRequests: 5,
    windowMs: 20 * 60 * 1000, // 20 minutos
  },

  // Para operações normais
  lenient: {
    maxRequests: 100,
    windowMs: 15 * 60 * 1000, // 15 minutos
  },
}
