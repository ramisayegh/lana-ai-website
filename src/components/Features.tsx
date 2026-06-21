const features = [
  {
    icon: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
    viewBox: '0 0 24 24',
    title: 'Polished, human replies',
    body: 'Lana responds with warmth and professionalism — not scripted templates. Clients feel heard.',
  },
  {
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </>
    ),
    viewBox: '0 0 24 24',
    title: 'Instant FAQ handling',
    body: 'Services, pricing, availability, process — Lana knows your answers and delivers them instantly.',
  },
  {
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    viewBox: '0 0 24 24',
    title: 'Smart lead capture',
    body: 'Lana asks the right follow-up questions to qualify inquiries before they reach you.',
  },
  {
    icon: (
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    ),
    viewBox: '0 0 24 24',
    title: 'Lead pre-qualification',
    body: 'Serious leads get prioritized. Lana surfaces what matters so you invest time in the right clients.',
  },
  {
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="3" />
      </>
    ),
    viewBox: '0 0 24 24',
    title: 'Organized conversations',
    body: 'Every client thread stays clean, professional, and on track. No more buried chats.',
  },
  {
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    viewBox: '0 0 24 24',
    title: 'Draft or auto-reply mode',
    body: 'Lana can draft replies for your review or respond automatically — your choice, based on your workflow.',
  },
  {
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </>
    ),
    viewBox: '0 0 24 24',
    title: 'Messaging platform ready',
    body: 'Lana can be configured on all major messaging platforms — wherever your clients already reach you.',
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
    viewBox: '0 0 24 24',
    title: 'Speaks every language',
    body: 'Lana replies in any language your clients use — including Leblish, the Arabic-English mix written in Latin letters and numbers that so many clients naturally speak.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-label mb-5">What Lana does</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Built for real business communication
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-md mx-auto">
            Every capability is designed to make your client experience faster, warmer, and more professional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card hud-corners p-5 group hover:border-pink-400/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="text-violet-400/70 mb-4 group-hover:text-violet-400 transition-colors duration-200">
                <svg
                  width="20"
                  height="20"
                  viewBox={f.viewBox}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="font-semibold text-white text-sm mb-2">{f.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
