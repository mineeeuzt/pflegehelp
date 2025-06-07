import { loadStripe } from '@stripe/stripe-js'

const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

if (!stripePublishableKey) {
  throw new Error('Missing Stripe publishable key')
}

export const stripePromise = loadStripe(stripePublishableKey)

export const STRIPE_PRICES = {
  monthly: 'price_1RXM4QCdcLuUUaQSrPem8NJi', // €4.99/Monat - BITTE ERSETZEN MIT NEUER PRICE ID
  yearly: 'price_YEARLY_TO_CREATE', // €49.75/Jahr - MUSS ERST ERSTELLT WERDEN
}

export const APP_CONFIG = {
  monthlyPrice: 4.99,
  yearlyPrice: 49.75,
  yearlyDiscount: 17, // 17% Rabatt
  trialDays: 7,
  appUrl: import.meta.env.VITE_APP_URL || 'https://aquamarine-hummingbird-b63293.netlify.app',
}

export interface CreateCheckoutSessionRequest {
  priceId: string
  successUrl: string
  cancelUrl: string
}

export interface CreateCheckoutSessionResponse {
  sessionUrl: string
}

export async function createCheckoutSession(
  data: CreateCheckoutSessionRequest
): Promise<CreateCheckoutSessionResponse> {
  const response = await fetch('/.netlify/functions/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to create checkout session')
  }

  return response.json()
}