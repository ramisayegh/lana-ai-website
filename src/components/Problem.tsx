const problems = [
  {
    icon: '⏱',
    title: 'Slow replies lose leads',
    body: 'When a potential client reaches out and hears nothing for hours, they move on. Speed is a first impression.',
  },
  {
    icon: '🔁',
    title: 'Repeated questions drain time',
    body: 'Pricing, availability, services — your team answers the same questions every day while real work waits.',
  },
  {
    icon: '📋',
    title: 'Conversations fall through the cracks',
    body: 'Without a system, follow-ups are forgotten, leads go cold, and inquiries die in the inbox.',
  },
  {
    icon: '🤖',
    title: 'Generic chatbots feel impersonal',
    body: 'Standard chatbots insult clients with scripted non-answers. Lana is configured around your business, tone, and workflow.',
  },
]

export default function Problem() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-500/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-label mb-5">The reality</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Most businesses lose leads before
            <br className="hidden sm:block" /> a real conversation even starts.
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-lg mx-auto">
            Not from bad service — from slow, inconsistent, or forgotten communication.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="glass-card hud-corners p-6 hover:border-red-400/25 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl mb-4">{p.icon}</div>
              <h3 className="font-display font-semibold text-white text-sm mb-2">{p.title}</h3>
              <p className="text-white/45 text-xs leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-white/35 text-sm max-w-xl mx-auto">
          Lana is the answer — an AI assistant trained on your business that works around the clock, sounds human, and never forgets to follow up.
        </p>
      </div>
    </section>
  )
}
