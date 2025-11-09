'use client'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { envVariables } from '@/helpers/envVariables'
import Banner from './Banner'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detecta scroll para adicionar efeito
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Previne scroll quando menu está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'shadow-xl py-3' : 'shadow-lg py-4'
        }`}
        style={{
          backgroundColor: scrolled
            ? `${envVariables.PRIMARY_COLOR_ULTRA_DARK}ee`
            : `${envVariables.PRIMARY_COLOR_ULTRA_DARK}f5`,
          color: '#fff',
          borderBottom: `1px solid ${envVariables.SECONDARY_COLOR_DARK}33`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo/Banner */}
          <div className="transform transition-transform duration-300 hover:scale-105">
            <Banner />
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {envVariables.NAV_ITEMS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 font-medium text-sm lg:text-base transition-all duration-300 rounded-lg hover:bg-white/10 group"
                style={{
                  color: '#fff',
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Underline animado */}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{
                    backgroundColor: envVariables.SECONDARY_COLOR_LIGHT,
                  }}
                ></span>
              </a>
            ))}

            {/* CTA Button Desktop */}
            <a
              href="#pricing"
              className="ml-4 px-6 py-2.5 rounded-full font-bold text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
              style={{
                backgroundColor: envVariables.SECONDARY_COLOR_MEDIUM,
                color: envVariables.PRIMARY_COLOR_DARK,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor =
                  envVariables.SECONDARY_COLOR_LIGHT
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor =
                  envVariables.SECONDARY_COLOR_MEDIUM
              }}
            >
              Comprar Agora 🔥
            </a>
          </nav>

          {/* Botão Mobile - Melhorado */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <div className="relative w-6 h-6">
              <Bars3Icon
                className={`absolute inset-0 h-6 w-6 text-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                }`}
              />
              <XMarkIcon
                className={`absolute inset-0 h-6 w-6 text-white transition-all duration-300 ${
                  menuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Menu Mobile - Overlay completo */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <nav
          className={`absolute top-16 left-0 right-0 mx-4 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
          style={{
            backgroundColor: envVariables.PRIMARY_COLOR_DARK,
            border: `1px solid ${envVariables.SECONDARY_COLOR_DARK}33`,
          }}
        >
          {/* Menu Items */}
          <div className="py-4">
            {envVariables.NAV_ITEMS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center px-6 py-4 text-base font-medium transition-all duration-200 border-b"
                style={{
                  borderColor: `${envVariables.SECONDARY_COLOR_LIGHT}20`,
                  color: '#fff',
                  animationDelay: `${idx * 50}ms`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(255,255,255,0.05)'
                  e.currentTarget.style.paddingLeft = '32px'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.paddingLeft = '24px'
                }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mr-3 text-xl">•</span>
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button Mobile */}
          <div
            className="p-4 border-t"
            style={{ borderColor: `${envVariables.SECONDARY_COLOR_LIGHT}20` }}
          >
            <a
              href="#pricing"
              className="flex items-center justify-center w-full px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg"
              style={{
                backgroundColor: envVariables.SECONDARY_COLOR_MEDIUM,
                color: envVariables.PRIMARY_COLOR_DARK,
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span>Comprar Agora</span>
              <span className="ml-2 text-xl">🔥</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Spacer para compensar header fixed */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}
