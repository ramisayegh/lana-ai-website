const steps = [
  {
    number: '01',
    title: 'We learn your business',
    body: 'A discovery session to understand your services, clients, tone, goals, and how you currently communicate.',
  },
  {
    number: '02',
    title: 'We train Lana',
    body: 'Lana is configured with your FAQs, services, pricing, brand tone, and sales flow — everything she needs to represent you.',
  },
  {
    number: '03',
    title: 'We connect your channels',
    body: 'We deploy Lana across all major messaging platforms — wherever your clients already reach you.',
  },
  {
    number: '04',
    title: 'Lana starts working',
    body: 'From day one, Lana handles replies, captures leads, answers questions, and keeps your conversations moving 24/7.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label mb-5">How it works</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Up and running in days, not months
          </h2>
          <p className="text-white/45 text-base max-w-md mx-auto">
            We handle the full setup. You focus on running your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line — desktop */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent hidden lg:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center lg:items-start lg:text-left group"
            >
              <div className="w-[52px] h-[52px] rounded-xl border border-pink-400/30 bg-pink-400/[0.06] flex items-center justify-center text-pink-300 font-mono font-bold text-sm mb-5 group-hover:border-violet-500/60 group-hover:bg-violet-500/10 group-hover:text-violet-400 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all duration-300 relative z-10">
                {step.number}
              </div>
              <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
