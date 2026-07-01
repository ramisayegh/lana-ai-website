import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xl font-display font-bold mb-3">
              <span className="inline-flex w-2 h-2 rounded-full bg-pink-400" />
              Lana<span className="text-violet-400">.</span>AI
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              An AI assistant trained on your business —
              <br />
              replying instantly, capturing leads, never sleeping.
            </p>
            <p className="font-mono text-white/25 text-xs mt-3 uppercase tracking-widest">
              Human-sounding · Always on
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/25 mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5 text-sm text-white/45">
              {[
                { href: '#features', label: 'Features' },
                { href: '#how-it-works', label: 'How it works' },
                { href: '#pricing', label: 'Pricing' },
                { href: '#faq', label: 'FAQ' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors duration-150">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/checkout" className="hover:text-white transition-colors duration-150">
                  Get started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/25 mb-4">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-white/45">
              <li>
                <a href="https://hey-lana.ai" className="hover:text-white transition-colors duration-150">hey-lana.ai</a>
              </li>
              <li>
                <a href="mailto:ask@hey-lana.ai" className="hover:text-white transition-colors duration-150">ask@hey-lana.ai</a>
              </li>
              <li>
                <a href="https://wa.me/971585599609" className="hover:text-white transition-colors duration-150">WhatsApp +971 58 55 99 609</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-white/20 text-xs">
            © {year} Lana AI. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="font-mono text-white/25 text-xs hover:text-white/60 transition-colors duration-150">
              Terms of Service
            </Link>
            <Link href="/privacy" className="font-mono text-white/25 text-xs hover:text-white/60 transition-colors duration-150">
              Privacy Policy
            </Link>
            <p className="font-mono text-white/15 text-xs">hey-lana.ai</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
