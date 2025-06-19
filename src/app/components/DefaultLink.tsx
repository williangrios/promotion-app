import Link from 'next/link'
import React, { ReactNode } from 'react'

interface DefaultLinkProps {
  href: string
  children: ReactNode
}

function DefaultLink({ href, children }: DefaultLinkProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className="text-white hover:text-amber-400"
    >
      {children}
    </Link>
  )
}

export default DefaultLink
