interface Message {
  role: 'client' | 'lana'
  text: string
  time: string
}

interface Scenario {
  label: string
  messages: Message[]
}

const scenarios: Scenario[] = [
  {
    label: 'Turning a complaint around',
    messages: [
      {
        role: 'client',
        text: "Honestly not impressed. Messaged yesterday and got zero reply 😤",
        time: '9:48 AM',
      },
      {
        role: 'lana',
        text: "You're completely right to expect faster — I'm sorry you were left waiting. I'm on it now and not going anywhere. Tell me what you need and I'll have it sorted today. 😊",
        time: '9:48 AM',
      },
    ],
  },
  {
    label: 'Charm in Leblish',
    messages: [
      {
        role: 'client',
        text: 'marhaba! b2addro tsawwerouli el mat3am hal weekend? 😊',
        time: '7:21 PM',
      },
      {
        role: 'lana',
        text: 'Marhaba w ahla fik! 😊 Akeed mnerteb shoot hal weekend. Shu no3 el mat3am w kam post badak? Bjehhezlak kel shi w mnkhalleha tetla3 nar 🔥',
        time: '7:21 PM',
      },
    ],
  },
  {
    label: 'Knowing when to upsell',
    messages: [
      {
        role: 'client',
        text: 'Just need a quick logo, nothing fancy.',
        time: '1:05 PM',
      },
      {
        role: 'lana',
        text: 'Love a clean, no-fuss logo 😊 One thought — most clients who start here end up wanting matching socials so it all feels like one brand. Want just the logo quote, or shall I add a little bundle option too? Zero pressure.',
        time: '1:05 PM',
      },
    ],
  },
]

function PhoneMockup({ scenario }: { scenario: Scenario }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: '260px',
        borderRadius: '40px',
        background: 'linear-gradient(180deg, #1c1c2a 0%, #141420 100%)',
        border: '2px solid rgba(255,255,255,0.1)',
        boxShadow:
          '0 30px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 1px 0 rgba(255,255,255,0.08) inset',
        padding: '10px',
      }}
    >
      {/* Notch */}
      <div className="flex justify-center pt-1 pb-2">
        <div
          style={{
            width: '90px',
            height: '20px',
            borderRadius: '12px',
            background: '#0a0a12',
          }}
        />
      </div>

      {/* Screen */}
      <div
        style={{
          borderRadius: '30px',
          overflow: 'hidden',
          background: '#0c0c18',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Chat header */}
        <div
          style={{
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,255,255,0.035)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '13px',
              color: '#000',
              flexShrink: 0,
            }}
          >
            L
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
              Lana AI
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
              <div
                style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', flexShrink: 0 }}
              />
              <span style={{ fontSize: '9px', color: '#34d399' }}>online</span>
            </div>
          </div>
        </div>

        {/* Messages — fixed height so all phones are identical in size */}
        <div
          style={{
            padding: '14px 12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '10px',
            height: '300px',
            overflow: 'hidden',
          }}
        >
          {scenario.messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.role === 'lana' ? 'flex-end' : 'flex-start',
                gap: '3px',
              }}
            >
              <div
                style={{
                  maxWidth: '87%',
                  padding: '8px 11px',
                  borderRadius: msg.role === 'client' ? '14px 14px 14px 4px' : '14px 14px 4px 14px',
                  fontSize: '11px',
                  lineHeight: '1.5',
                  ...(msg.role === 'lana'
                    ? {
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
                        color: '#000',
                        fontWeight: 500,
                      }
                    : {
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.82)',
                      }),
                }}
              >
                {msg.text}
              </div>
              <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.22)', padding: '0 3px' }}>
                {msg.time}
              </span>
            </div>
          ))}
        </div>

        {/* Input bar */}
        <div
          style={{
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.025)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div
            style={{
              flex: 1,
              height: '28px',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          />
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="flex justify-center mt-2 pb-1">
        <div
          style={{
            width: '70px',
            height: '4px',
            borderRadius: '2px',
            background: 'rgba(255,255,255,0.18)',
          }}
        />
      </div>
    </div>
  )
}

export default function MessageSamples() {
  return (
    <section id="samples" className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="section-label mb-5">Real conversations</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            See how Lana actually replies
          </h2>
          <p className="text-white/45 text-base max-w-md mx-auto">
            Three common scenarios — handled instantly, naturally, and on-brand.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 lg:gap-16 items-start">
          {scenarios.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-5">
              <PhoneMockup scenario={s} />
              <span className="text-xs font-semibold text-violet-400/70 uppercase tracking-widest">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
