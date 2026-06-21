'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Is Lana a chatbot?',
    a: 'Lana is an AI digital assistant configured around your business, tone, and workflow. She is designed to feel more human and useful than a generic chatbot.',
  },
  {
    q: 'Can Lana reply automatically?',
    a: 'Yes, depending on the setup. Lana can either draft replies for your approval or reply automatically within defined rules.',
  },
  {
    q: 'What does the setup fee include?',
    a: 'Everything to get Lana live: business onboarding, tone and personality configuration, FAQ and service training, messaging flow setup, the language model subscription, the API tokens she needs to run — and your first month, on us.',
  },
  {
    q: 'What platforms can Lana work on?',
    a: 'Lana can be configured on all major messaging platforms — wherever your clients already reach you.',
  },
  {
    q: 'Can Lana speak Arabic?',
    a: 'Lana speaks every language — English, Arabic, French, Spanish, you name it. But what truly sets her apart is Leblish: the Arabic-English mix written in Latin letters and numbers that so many people naturally type. Most AI assistants stumble on it. Lana reads it fluently and replies in kind.',
  },
  {
    q: "What's the difference between Lana and Lana Lite?",
    a: "Lana runs on a larger, more capable language model — deeper personality, higher token limits, fluent Leblish, and ongoing learning. Lana Lite is powered by a smaller model with tighter limits: she still handles FAQs, captures leads, and sounds far more human than a standard chatbot — just without the full depth, the Leblish replies, or the ability to keep evolving over time. Both plans include the first month in the setup fee.",
  },
  {
    q: 'How much does Lana cost?',
    a: 'Lana Lite is $99/month with a $149 one-time setup (first month included). The full Lana is $249/month with a $499 one-time setup (first month included). Complex custom automations may need a separate quote.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="section-label mb-5">FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Common questions</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden hover:border-white/[0.12] transition-colors duration-200">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-sm sm:text-base font-medium text-white">{faq.q}</span>
                <svg
                  className={`shrink-0 text-violet-400 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 pt-1 text-sm text-white/50 leading-relaxed border-t border-white/[0.05]">
                  <div className="pt-3">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
