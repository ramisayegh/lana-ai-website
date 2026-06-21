const capabilities = [
  {
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </>
    ),
    title: 'Reads your inbox',
    body: 'Lana goes through your emails, flags what actually matters, drafts replies, and keeps your inbox from running your day.',
  },
  {
    icon: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </>
    ),
    title: 'Remembers everything',
    body: "From a client follow-up to your daughter's piano lesson, Lana sends the right reminder to the right person at the right time — even nudging your wife so nothing slips.",
  },
  {
    icon: (
      <>
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
      </>
    ),
    title: 'Understands voice notes',
    body: 'Send her a voice message and she transcribes it, understands what you mean, and acts on it. No typing required.',
  },
  {
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
    title: 'Works on your computer',
    body: 'Give Lana access and she handles tasks right on your machine — opening, organizing, and getting real work done for you.',
  },
  {
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </>
    ),
    title: 'Edits your spreadsheets',
    body: 'Share a Sheet and Lana fills it in, cleans it up, and updates it for you — like having an analyst on call.',
  },
  {
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </>
    ),
    title: 'Generates images',
    body: 'Need a visual? Lana creates images on the spot — for a post, a mockup, or an idea you can only describe in words.',
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-500/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="section-label mb-5">Beyond messaging</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Messages are just the beginning.
            <br />
            <span className="text-gradient">She runs your day.</span>
          </h2>
          <p className="text-white/45 text-base sm:text-lg max-w-xl mx-auto">
            Lana isn&rsquo;t only there to reply. She&rsquo;s a full assistant — handling your inbox,
            your reminders, your files, and your ideas, all in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="glass-card hud-corners p-6 group hover:border-pink-400/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="text-violet-400/70 mb-4 group-hover:text-violet-400 transition-colors duration-200">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {c.icon}
                </svg>
              </div>
              <h3 className="font-semibold text-white text-base mb-2">{c.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        {/* Closing: no limit */}
        <div className="glow-frame relative rounded-[22px]">
          <div className="rounded-[21px] bg-[#0c0c18] px-8 py-10 sm:px-12 sm:py-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-pink-400/30 bg-pink-400/[0.06] text-pink-300 mb-5 shadow-[0_0_20px_rgba(236,72,153,0.25)]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              And she knows about <span className="text-gradient">everything else.</span>
            </h3>
            <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">
              Whatever you need — a question, a task, a decision — just ask. Lana understands the
              world the way the smartest assistant would. There&rsquo;s genuinely no limit to what
              she can do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
