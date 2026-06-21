'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/5 bg-[#08080f]/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-display font-bold tracking-tight">
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400" />
          </span>
          Lana<span className="text-violet-400">.</span>AI
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-widest text-white/55">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-pink-300 transition-colors duration-150">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/checkout"
            className="px-5 py-2 rounded-lg bg-violet-500 text-black text-sm font-semibold hover:bg-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-150"
          >
            Get Lana
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#08080f]/95 backdrop-blur-xl px-4 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/checkout"
            onClick={() => setOpen(false)}
            className="mt-1 px-5 py-2.5 rounded-full bg-violet-500 text-black text-sm font-semibold text-center hover:bg-violet-400 transition-colors"
          >
            Get Lana
          </Link>
        </div>
      )}
    </nav>
  )
}
