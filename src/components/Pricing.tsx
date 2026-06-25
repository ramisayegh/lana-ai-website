import Link from 'next/link'

const fullPlan = {
  name: 'Lana',
  tagline: 'The full personality. Unmistakably human.',
  price: '$249',
  setup: '+ $499 setup (first month included)',
  features: [
    'Business discovery & full personality tuning',
    'Deep character & brand-tone configuration',
    'All languages — including fluent Leblish',
    'FAQ, service & sales-flow training',
    'Smart lead capture & pre-qualification',
    'Cloud-hosted, always-on, auto-updating',
    'Ongoing optimization & evolution',
  ],
}

const additionalServices = [
  {
    name: "Lana's Voice",
    description: 'AI phone calls & voice responses — she picks up, talks, and handles it.',
  },
  {
    name: "Lana's Flights",
    description: 'Search, compare, and book flights on behalf of your clients.',
  },
  {
    name: "Lana's Hotels",
    description: 'Hotel search and reservations — fully handled through chat.',
  },
]

function Check() {
  return (
    <svg
      className="shrink-0 mt-0.5 text-violet-400"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-500/[0.08] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-label mb-5">Pricing</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            One assistant. Endless capabilities.
          </h2>
          <p className="text-white/45 text-base max-w-md mx-auto">
            Start with Lana&rsquo;s core messaging intelligence. Unlock more as your business grows.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">

          {/* ── Lana (main plan) ── */}
          <div className="glow-frame relative rounded-[22px]">
            <div className="rounded-[21px] bg-[#0c0c18] p-8 sm:p-10 h-full flex flex-col">
              <div className="section-label mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.9)]" />
                {fullPlan.name}
              </div>

              <p className="text-white/55 text-sm mb-6 min-h-[3rem]">{fullPlan.tagline}</p>

              <div className="mb-1">
                <span className="text-5xl sm:text-6xl font-bold text-white neon-text">
                  {fullPlan.price}
                </span>
                <span className="text-white/45 text-xl ml-1">/month</span>
              </div>
              <p className="text-pink-300 text-sm font-semibold mb-8">{fullPlan.setup}</p>

              <ul className="space-y-3 mb-8">
                {fullPlan.features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/checkout"
                className="mt-auto block w-full text-center py-3.5 rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold text-sm hover:shadow-[0_0_28px_rgba(236,72,153,0.5)] transition-all duration-200"
              >
                Start with Lana
              </Link>
            </div>
          </div>

          {/* ── Additional Services ── */}
          <div className="glass-card hud-corners p-8 sm:p-10 flex flex-col">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-md border border-amber-400/20 bg-amber-400/[0.06] font-mono text-[0.7rem] uppercase tracking-[0.14em] text-amber-400/80 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
              Additional Services
            </div>

            <p className="text-white/50 text-sm mb-8">
              Lana is growing. New capabilities are coming — exclusively for existing clients first.
            </p>

            <div className="flex flex-col gap-5 flex-1">
              {additionalServices.map((service) => (
                <div
                  key={service.name}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5 flex flex-col gap-2 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{service.name}</p>
                    <span className="shrink-0 px-2 py-0.5 rounded-full border border-amber-400/25 bg-amber-400/[0.08] text-amber-400/80 text-[0.65rem] font-mono uppercase tracking-widest">
                      Soon
                    </span>
                  </div>
                  <p className="text-xs text-white/35 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <p className="text-white/20 text-xs text-center mt-8 leading-relaxed">
              Early access will be offered to active Lana clients first.
            </p>
          </div>

        </div>

        <p className="mt-8 text-center text-white/25 text-xs leading-relaxed max-w-lg mx-auto">
          Advanced integrations, custom workflows, or heavy automation may require a custom quote.
          Not sure which fits? We&rsquo;ll help you choose.
        </p>
      </div>
    </section>
  )
}
