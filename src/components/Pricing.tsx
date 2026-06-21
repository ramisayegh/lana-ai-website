import Link from 'next/link'

const litePlan = {
  name: 'Lana Lite',
  tagline: 'Lean, capable, easy on the budget.',
  price: '$99',
  setup: '+ $150 setup (first month included)',
  blurb:
    'Powered by a lighter language model — fewer tokens, tighter limits, lower cost. She still handles FAQs, captures leads, and replies far better than any chatbot. Just without the full Lana depth.',
  features: [
    'Instant FAQ & canned replies',
    'Basic lead capture',
    'Replies in standard English & Arabic',
    'Light personality tuning',
    'Draft-reply mode',
  ],
  limits: [
    'Powered by a smaller language model — lower token limits',
    'Lighter character — not as deeply tuned as Lana',
    'No Leblish replies',
    'No live learning or ongoing evolution',
  ],
}

const fullPlan = {
  name: 'Lana',
  tagline: 'The full personality. Unmistakably human.',
  price: '$250',
  setup: '+ $500 setup (first month included)',
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

function Minus() {
  return (
    <svg
      className="shrink-0 mt-0.5 text-white/25"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
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
            Choose your Lana
          </h2>
          <p className="text-white/45 text-base max-w-md mx-auto">
            One assistant, two tiers. Go all-in with the full cloud personality — or keep it lean
            and budget-friendly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {/* ── Lana Lite ── */}
          <div className="glass-card hud-corners p-8 sm:p-10 flex flex-col">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-md border border-white/10 bg-white/[0.04] font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white/55 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              {litePlan.name}
            </div>

            <p className="text-white/50 text-sm mb-6 min-h-[3rem]">{litePlan.tagline}</p>

            <div className="mb-1">
              <span className="text-5xl font-bold text-white">{litePlan.price}</span>
              <span className="text-white/45 text-xl ml-1">/month</span>
            </div>
            <p className="text-white/40 text-sm font-medium mb-6">{litePlan.setup}</p>

            <p className="text-white/40 text-xs leading-relaxed mb-7 border-l-2 border-white/10 pl-3">
              {litePlan.blurb}
            </p>

            <ul className="space-y-3 mb-5">
              {litePlan.features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>

            <ul className="space-y-3 mb-8">
              {litePlan.limits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/35">
                  <Minus />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/checkout"
              className="mt-auto block w-full text-center py-3.5 rounded-lg border border-white/15 text-white font-semibold text-sm hover:border-white/35 hover:bg-white/[0.04] transition-all duration-200"
            >
              Start with Lite
            </Link>
          </div>

          {/* ── Lana (full, featured) ── */}
          <div className="glow-frame relative rounded-[22px]">
            {/* Most popular badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 text-white text-[0.7rem] font-mono uppercase tracking-[0.14em] font-semibold shadow-[0_0_20px_rgba(236,72,153,0.5)]">
              Most popular
            </div>

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
        </div>

        <p className="mt-8 text-center text-white/25 text-xs leading-relaxed max-w-lg mx-auto">
          Advanced integrations, custom workflows, or heavy automation may require a custom quote.
          Not sure which fits? We&rsquo;ll help you choose.
        </p>
      </div>
    </section>
  )
}
