'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { name: 'Funcionalidades', href: '/#features' },
  { name: 'Download', href: '/#download' },
  { name: 'Planos', href: './#pricing' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900 text-white z-50 border-b border-white/10 shadow-md shadow-white/10 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-amber-400"
        >
          <Image
            src="/banner.jpg" // coloque a imagem na pasta public
            alt="Mentorzinho Logo"
            width={200} // tamanho ajustável
            height={70}
            className="rounded-lg border-2 border-amber-400 shadow-lg"
          />
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-amber-400 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-800 px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-sm border-b border-slate-700 hover:text-amber-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
