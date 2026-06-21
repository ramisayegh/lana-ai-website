import { NextResponse } from 'next/server'
import crypto from 'crypto'

// Cryptomus invoice creation.
// Docs: https://doc.cryptomus.com/business/payments/creating-invoice
//
// Required environment variables (never commit these — set them in your host's
// dashboard, e.g. Vercel/Netlify project settings):
//   CRYPTOMUS_MERCHANT_ID   — the merchant UUID from your Cryptomus dashboard
//   CRYPTOMUS_PAYMENT_KEY   — the "Payment" API key for that merchant
//   SITE_URL                — your public site origin, e.g. https://hey-lana.ai
//
// The customer pays by card / Apple Pay / Google Pay on Cryptomus's hosted
// checkout; you receive the funds as USDT per your dashboard payout settings.

const CRYPTOMUS_API = 'https://api.cryptomus.com/v1/payment'

export async function POST(req: Request) {
  const merchant = process.env.CRYPTOMUS_MERCHANT_ID
  const apiKey = process.env.CRYPTOMUS_PAYMENT_KEY

  if (!merchant || !apiKey) {
    return NextResponse.json(
      { error: 'Card payments are being activated. Please pay with USDT, or contact us.' },
      { status: 503 }
    )
  }

  let amount = 500
  let plan = 'Lana Setup'
  let email = ''
  let orderId = `lana-${Date.now()}`
  try {
    const body = await req.json()
    if (body.amount) amount = Number(body.amount)
    if (body.plan) plan = String(body.plan)
    if (body.email) email = String(body.email)
    if (body.orderId) orderId = String(body.orderId)
  } catch {
    /* fall back to defaults */
  }

  const siteUrl = process.env.SITE_URL ?? ''

  const payload = {
    amount: amount.toFixed(2),
    currency: 'USD',
    order_id: orderId,
    url_success: `${siteUrl}/checkout?paid=1`,
    url_return: `${siteUrl}/checkout`,
    url_callback: `${siteUrl}/api/cryptomus/webhook`,
    additional_data: JSON.stringify({ plan, email }),
  }

  // Cryptomus signature: md5( base64(jsonBody) + paymentApiKey )
  const json = JSON.stringify(payload)
  const sign = crypto
    .createHash('md5')
    .update(Buffer.from(json).toString('base64') + apiKey)
    .digest('hex')

  try {
    const res = await fetch(CRYPTOMUS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        merchant,
        sign,
      },
      body: json,
    })
    const data = await res.json()

    if (!res.ok || !data?.result?.url) {
      return NextResponse.json(
        { error: 'Could not start the payment. Please try USDT, or contact us.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ url: data.result.url })
  } catch {
    return NextResponse.json(
      { error: 'Payment service is unreachable right now. Please try USDT, or contact us.' },
      { status: 502 }
    )
  }
}
