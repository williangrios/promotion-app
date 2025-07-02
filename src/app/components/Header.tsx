'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { envVariables } from '@/helpers/envVariables'
import Banner from './Banner'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur"
      style={{
        backgroundColor: envVariables.PRIMARY_COLOR_ULTRA_DARK,
        color: '#fff',
        borderBottom: `1px solid ${envVariables.SECONDARY_COLOR_DARK}33`, // transparência 20%
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Banner />
        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-8">
          {envVariables.NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition font-medium"
              style={{ color: '#fff' }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  envVariables.SECONDARY_COLOR_LIGHT
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff'
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Botão Mobile */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav
          className="md:hidden px-6 pb-4"
          style={{ backgroundColor: envVariables.PRIMARY_COLOR_DARK }}
        >
          {envVariables.NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2 text-sm border-b font-medium transition"
              style={{
                borderColor: `${envVariables.SECONDARY_COLOR_LIGHT}33`,
                color: '#fff',
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  envVariables.SECONDARY_COLOR_LIGHT
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff'
              }}
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
