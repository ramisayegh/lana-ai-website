'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const businessTypes = [
  'Restaurant / Food & Beverage',
  'Retail / E-commerce',
  'Creative Agency',
  'Freelancer / Professional',
  'Real Estate',
  'Healthcare / Wellness',
  'Education',
  'Other',
]

// USDT direct-payment details (TRON / TRC-20)
const USDT_ADDRESS = 'TWFL7KTvcbDCEzZE9z71DakChR3DS1n885'
const USDT_NETWORK = 'TRON (TRC-20)'
const DUE_TODAY = 499

const inputClass =
  'w-full bg-white/[0.05] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.07] transition-all duration-150'

const selectClass =
  'w-full bg-white/[0.05] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.07] transition-all duration-150 appearance-none cursor-pointer'

type PayMethod = 'card' | 'usdt'

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false)
  const [payMethod, setPayMethod] = useState<PayMethod>('card')
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    websiteOrInstagram: '',
    businessType: '',
    assistantName: '',
    notes: '',
  })

  // Cryptomus redirects back here with ?paid=1 on a successful card payment.
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.search.includes('paid=1')) {
      setSubmitted(true)
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(USDT_ADDRESS)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — address is still visible to copy manually */
    }
  }


  return (
    <div className="min-h-screen bg-[#08080f] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[100px]" />
      </div>

      {/* Header bar */}
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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {submitted ? (
          /* Success state */
          <div className="text-center py-24">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-6">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-3">Request received</h2>
            <p className="text-white/50 text-base mb-2 max-w-sm mx-auto">
              Thank you. We&rsquo;ll review your request and reach out within 24 hours to discuss your setup.
            </p>
            <p className="text-white/25 text-sm mb-10">Check your email for a confirmation.</p>
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-full bg-violet-500 text-black font-semibold text-sm hover:bg-violet-400 transition-colors"
            >
              Back to home
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            {/* Form */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Start with Lana AI</h1>
              <p className="text-white/45 text-sm mb-8">
                Fill in the details below and we&rsquo;ll reach out to begin your setup.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/45 mb-1.5">
                      Full Name <span className="text-violet-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Sarah Hassan"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/45 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="My Business"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/45 mb-1.5">
                      Email <span className="text-violet-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/45 mb-1.5">
                      Phone / WhatsApp <span className="text-violet-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+961 70 000 000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/45 mb-1.5">
                    Website or Instagram
                  </label>
                  <input
                    type="text"
                    name="websiteOrInstagram"
                    value={form.websiteOrInstagram}
                    onChange={handleChange}
                    placeholder="@yourbusiness or www.yourbusiness.com"
                    className={inputClass}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/45 mb-1.5">
                      Business Type <span className="text-violet-500">*</span>
                    </label>
                    <select
                      name="businessType"
                      required
                      value={form.businessType}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" style={{ background: '#0e0e1b' }}>
                        Select type
                      </option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t} style={{ background: '#0e0e1b' }}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/45 mb-1.5">
                      Your assistant&rsquo;s name <span className="text-violet-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="assistantName"
                      required
                      value={form.assistantName}
                      onChange={handleChange}
                      placeholder="Lana"
                      className={inputClass}
                    />
                    <p className="text-white/25 text-[11px] mt-1.5 leading-relaxed">
                      What your AI introduces herself as. Keep &ldquo;Lana&rdquo; — or make her your own.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/45 mb-1.5">
                    Notes or questions
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Anything you'd like us to know about your business or communication needs..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-violet-500 text-black font-semibold text-sm hover:bg-violet-400 hover:shadow-[0_0_28px_rgba(139,92,246,0.35)] transition-all duration-200"
                >
                  Submit Request
                </button>

                <p className="text-white/20 text-xs text-center">
                  We&rsquo;ll contact you within 24 hours to confirm your request and begin onboarding.
                </p>
              </form>
            </div>

            {/* Sidebar: order summary + payment */}
            <div className="lg:sticky lg:top-8 flex flex-col gap-4">
              {/* Order summary */}
              <div className="glass-card p-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-5">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <p className="text-sm font-medium text-white">Lana AI Setup</p>
                      <p className="text-xs text-white/35 mt-0.5">
                        One-time · Configuration &amp; first month included
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-white shrink-0">$499</span>
                  </div>
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <p className="text-sm font-medium text-white">Monthly Subscription</p>
                      <p className="text-xs text-white/35 mt-0.5">From month two · Cancel anytime</p>
                    </div>
                    <span className="text-sm font-semibold text-white shrink-0">
                      $249<span className="text-white/35 font-normal">/mo</span>
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/[0.07] pt-4 flex justify-between items-center">
                  <span className="text-sm text-white/50">Due today</span>
                  <span className="text-2xl font-bold text-violet-400">${DUE_TODAY}</span>
                </div>
                <p className="text-white/25 text-xs mt-2 leading-relaxed">
                  Includes setup and your first month. $249/mo begins next month.
                </p>
              </div>

              {/* Payment */}
              <div className="glass-card p-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
                  Payment Method
                </h3>

                {/* Method toggle */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <button
                    type="button"
                    onClick={() => setPayMethod('card')}
                    className={`rounded-lg border px-3 py-2.5 text-xs font-semibold transition-all duration-150 ${
                      payMethod === 'card'
                        ? 'border-violet-500/60 bg-violet-500/10 text-white'
                        : 'border-white/10 bg-white/[0.03] text-white/45 hover:text-white/70'
                    }`}
                  >
                    Card / Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayMethod('usdt')}
                    className={`rounded-lg border px-3 py-2.5 text-xs font-semibold transition-all duration-150 ${
                      payMethod === 'usdt'
                        ? 'border-violet-500/60 bg-violet-500/10 text-white'
                        : 'border-white/10 bg-white/[0.03] text-white/45 hover:text-white/70'
                    }`}
                  >
                    USDT
                  </button>
                </div>

                {payMethod === 'card' ? (
                  <div>
                    <p className="text-white/45 text-xs leading-relaxed mb-4">
                      Pay by card, Apple Pay, or Google Pay. WhatsApp us and we&rsquo;ll send you a secure payment link within minutes.
                    </p>
                    <a
                      href="https://wa.me/971585599609?text=Hi%2C%20I%27d%20like%20to%20pay%20for%20Lana%20AI%20by%20card."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold text-sm hover:shadow-[0_0_24px_rgba(236,72,153,0.45)] transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp us to pay by card
                    </a>
                    <p className="text-white/25 text-[10px] text-center mt-3">
                      We&rsquo;ll reply within minutes with a secure payment link.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-white/45 text-xs leading-relaxed mb-4">
                      Send exactly <span className="text-white font-semibold">${DUE_TODAY} USDT</span>{' '}
                      on the <span className="text-white font-semibold">{USDT_NETWORK}</span> network
                      to the address below.
                    </p>

                    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 mb-3">
                      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1.5">
                        Network
                      </p>
                      <p className="text-sm text-white font-medium mb-3">{USDT_NETWORK}</p>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1.5">
                        Wallet address
                      </p>
                      <p className="text-[11px] text-white/80 font-mono break-all leading-relaxed">
                        {USDT_ADDRESS}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={copyAddress}
                      className="w-full py-3 rounded-xl border border-white/15 text-white font-semibold text-sm hover:border-white/35 hover:bg-white/[0.04] transition-all duration-200 mb-2"
                    >
                      {copied ? '✓ Address copied' : 'Copy address'}
                    </button>

                    <p className="text-amber-400/80 text-[11px] leading-relaxed mb-4">
                      Send only USDT on {USDT_NETWORK}. Sending another asset or network may lose the
                      funds.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(true)}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold text-sm hover:shadow-[0_0_24px_rgba(236,72,153,0.45)] transition-all duration-200"
                    >
                      I&rsquo;ve sent the payment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
