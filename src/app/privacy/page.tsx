import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Lana AI',
  description: 'Privacy Policy for Lana AI and hey-lana.ai.',
}

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'We collect information you provide directly to us, such as your name, email, phone number, and business details when you sign up or contact us. We may also collect information from connected third-party accounts, such as social media platforms, when you choose to link them.',
    ],
  },
  {
    title: '2. How We Use Information',
    body: [
      'We use collected information to provide and improve the Lana AI service, to configure and operate your AI assistant, to communicate with you about your account, and to support any connected content workflows you have authorized.',
    ],
  },
  {
    title: '3. TikTok and Third-Party Platform Data',
    body: [
      'When a user connects TikTok, we may access only the permissions approved by the user, such as basic profile information, account statistics, video listing, or publishing-related permissions if approved. We use this data only to support the connected content workflow and do not sell TikTok user data.',
      'Data obtained through other third-party integrations is handled under the same principle: access is limited to what the user has explicitly authorized, and used only to deliver the requested service.',
    ],
  },
  {
    title: '4. Content and Media Files',
    body: [
      'Any content or media you upload or connect through the service is used solely to fulfill the workflow you have requested — for example, drafting, formatting, or scheduling content on your behalf. We do not use your content to train third-party models without your consent.',
    ],
  },
  {
    title: '5. Cookies and Analytics',
    body: [
      'We may use cookies and similar technologies to understand how visitors use our website and to improve the user experience. You can control cookie preferences through your browser settings.',
    ],
  },
  {
    title: '6. Data Sharing',
    body: [
      'We do not sell your personal information. We may share data with service providers who help us operate the platform (such as hosting or payment processing), and only to the extent necessary to provide the service. We do not share TikTok or other connected-platform data beyond what is required to deliver the workflow you requested.',
    ],
  },
  {
    title: '7. Data Retention',
    body: [
      'We retain information for as long as necessary to provide the service and fulfill the purposes described in this policy, or as required by law. You may request deletion of your data at any time by contacting us.',
    ],
  },
  {
    title: '8. Security',
    body: [
      'We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '9. Your Rights',
    body: [
      'Depending on your location, you may have rights to access, correct, or delete your personal information, and to withdraw consent for connected integrations at any time. To exercise these rights, contact us using the details below.',
    ],
  },
  {
    title: '10. Children’s Privacy',
    body: [
      'Our service is not directed to children under 13, and we do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it.',
    ],
  },
  {
    title: '11. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the service after changes are posted constitutes acceptance of the updated policy.',
    ],
  },
  {
    title: '12. Contact',
    body: ['If you have questions about this Privacy Policy, contact us at ask@hey-lana.ai.'],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#08080f] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[100px]" />
      </div>

      <div className="relative border-b border-white/[0.06] px-4 sm:px-6 py-4 flex items-center gap-4 backdrop-blur-xl bg-[#08080f]/80">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/45 hover:text-white transition-colors text-sm"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back
        </Link>
        <div className="h-4 w-px bg-white/10" />
        <Link href="/" className="text-lg font-bold">
          Lana<span className="text-violet-400">.</span>AI
        </Link>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-white/35 text-sm mb-12">Last updated: July 1, 2026</p>

        <div className="glass-card p-8 sm:p-10 space-y-9">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-white mb-3">{section.title}</h2>
              <div className="space-y-3">
                {section.body.map((p, i) => (
                  <p key={i} className="text-white/55 text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
