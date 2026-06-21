const traits = [
  {
    label: 'Business-trained',
    desc: 'Configured with your services, tone, FAQs, and sales process — not a generic template.',
  },
  {
    label: 'Sounds human',
    desc: 'Clients feel heard. Lana is warm, clear, and natural — never robotic.',
  },
  {
    label: 'Consistent 24/7',
    desc: 'Whether it is 2pm or 2am, Lana replies with the same quality and care.',
  },
  {
    label: 'Tone-adaptive',
    desc: 'From luxury brands to casual agencies — Lana matches your tone and character exactly.',
  },
  {
    label: 'Every language — including Leblish',
    desc: 'Lana speaks any language your clients use, with a genuine feel for Leblish — Arabic typed in Latin letters and numbers the way people actually text.',
  },
  {
    label: 'Keeps evolving',
    desc: 'As your business grows and changes, Lana updates with it.',
  },
]

export default function WhyLana() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/[0.05] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[90px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="section-label mb-6">Why Lana feels different</div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Not a chatbot.
              <br />
              <span className="text-gradient">A business-trained assistant.</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-5">
              Generic chatbots answer questions with scripts. Lana understands your business — your tone, services, client journey, and what matters to your specific audience.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              She is built to represent you the way you would represent yourself on your best day. Always available. Always professional. Always human-sounding.
            </p>
          </div>

          {/* Right: trait grid */}
          <div className="grid grid-cols-2 gap-3">
            {traits.map((t) => (
              <div
                key={t.label}
                className="glass-card hud-corners p-5 hover:border-pink-400/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                  <span className="font-display text-sm font-semibold text-white">{t.label}</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
