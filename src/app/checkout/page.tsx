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
const DUE_TODAY = 500

const inputClass =
  'w-full bg-white/[0.05] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.07] transition-all duration-150'

const selectClass =
  'w-full bg-white/[0.05] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/40 focus:bg-white/[0.07] transition-all duration-150 appearance-none cursor-pointer'

type PayMethod = 'card' | 'usdt'

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false)
  const [payMethod, setPayMethod] = useState<PayMethod>('card')
  const [copied, setCopied] = useState(false)
  const [paying, setPaying] = useState(false)
  const [payError, setPayError] = useState('')
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

  const payByCard = async () => {
    setPaying(true)
    setPayError('')
    try {
      const res = await fetch('/api/cryptomus/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: DUE_TODAY,
          plan: 'Lana Setup',
          email: form.email,
          orderId: `lana-${Date.now()}`,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) {
        setPayError(
          data.error ||
            'Card payments are being activated. Please pay with USDT below, or contact us.'
        )
        return
      }
      window.location.href = data.url
    } catch {
      setPayError('Something went wrong. Please try USDT below, or contact us.')
    } finally {
      setPaying(false)
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
                    <span className="text-sm font-semibold text-white shrink-0">$500</span>
                  </div>
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <p className="text-sm font-medium text-white">Monthly Subscription</p>
                      <p className="text-xs text-white/35 mt-0.5">From month two · Cancel anytime</p>
                    </div>
                    <span className="text-sm font-semibold text-white shrink-0">
                      $250<span className="text-white/35 font-normal">/mo</span>
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/[0.07] pt-4 flex justify-between items-center">
                  <span className="text-sm text-white/50">Due today</span>
                  <span className="text-2xl font-bold text-violet-400">${DUE_TODAY}</span>
                </div>
                <p className="text-white/25 text-xs mt-2 leading-relaxed">
                  Includes setup and your first month. $250/mo begins next month.
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
                      Pay with Visa, Mastercard, Apple Pay or Google Pay. Secure checkout via
                      Cryptomus — no crypto knowledge needed.
                    </p>
                    <button
                      type="button"
                      onClick={payByCard}
                      disabled={paying}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold text-sm hover:shadow-[0_0_24px_rgba(236,72,153,0.45)] disabled:opacity-60 transition-all duration-200"
                    >
                      {paying ? 'Opening secure checkout…' : `Pay $${DUE_TODAY} by card`}
                    </button>
                    {payError && (
                      <p className="text-amber-400/90 text-[11px] mt-3 leading-relaxed">{payError}</p>
                    )}
                    <div className="flex items-center justify-center gap-2 mt-4 text-white/25 text-[10px]">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Encrypted · Visa · Mastercard · Apple Pay · Google Pay
                    </div>
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
