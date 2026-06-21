import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/*
        ╔══════════════════════════════════════════════════════╗
        ║  FULL-BLEED HERO IMAGE                               ║
        ║  Source file: /public/hero.jpg                       ║
        ║  Spans the entire viewport width as the background.  ║
        ║  To swap: replace that file (keep the same name),    ║
        ║  or change `src`. Framing via object-position below. ║
        ╚══════════════════════════════════════════════════════╝
      */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Lana AI — your human-sounding digital assistant"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        {/* Cinematic readability overlays — dark on the left for text, clearing
            by ~60% so the subject reads on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06060d] from-0% via-[#06060d]/80 via-30% to-transparent to-62%" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06060d] via-transparent to-[#06060d]/40" />
        {/* Neon color wash tinting the photo into the palette */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/30 via-transparent to-pink-900/20 mix-blend-screen" />
      </div>

      {/* Ambient tech glows + scanline + synthwave grid floor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-violet-500/[0.14] blur-[130px] animate-pulse-slow" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full bg-pink-500/[0.12] blur-[120px]" />
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent animate-scan" />
        <div className="scanlines absolute inset-0 opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-52 overflow-hidden">
          <div className="neon-grid-floor absolute inset-x-[-25%] bottom-0 h-80" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="section-label mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            AI Assistant · Online 24/7
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] mb-6">
            Your business,
            <br />
            <span className="text-shimmer">always replying.</span>
          </h1>

          <p className="text-base sm:text-lg text-white/65 leading-relaxed mb-9 max-w-xl">
            Meet Lana — an AI assistant trained on the soul of your business. She&apos;s fast enough
            that we had to slow her down — so your clients have time to finish their thought before
            she replies. She reads the full conversation, waits for the silence, then responds once.
            Concise. Warm. Exactly like a person would.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              href="/checkout"
              className="btn-primary hover:shadow-[0_0_28px_rgba(139,92,246,0.4)]"
            >
              Get Lana for my business
            </Link>
            <a href="#samples" className="btn-secondary">
              See how Lana replies
            </a>
          </div>

          {/* HUD status readout — replaces the price line */}
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-xs text-white/45">
            <span className="flex items-center gap-2">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-emerald-400">SYSTEM ONLINE</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-pink-400">reads context</span> then replies once
            </span>
            <span className="flex items-center gap-2">
              <span className="text-pink-400">∞</span> never sleeps
            </span>
            <span className="flex items-center gap-2">
              <span className="text-pink-400">Leblish</span> + all languages
            </span>
          </div>
        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-pink-400/60 to-transparent" />
      </div>
    </section>
  )
}
