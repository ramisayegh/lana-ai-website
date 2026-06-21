import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-500/[0.08] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-pink-500/[0.05] rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Ready to make your business
          <br />
          <span className="text-gradient">faster, warmer,</span>
          <br />
          and always responsive?
        </h2>
        <p className="text-white/45 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Join businesses that trust Lana to represent them every day — professionally, consistently, and on-brand.
        </p>
        <Link
          href="/checkout"
          className="inline-block px-8 py-4 rounded-lg bg-violet-500 text-black font-bold text-base hover:bg-violet-400 hover:shadow-[0_0_36px_rgba(139,92,246,0.4)] transition-all duration-200"
        >
          Get Lana AI
        </Link>
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-white/30">
          Deployed for your business · Live in days · Always on
        </p>
      </div>
    </section>
  )
}
