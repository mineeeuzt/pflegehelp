import { loadStripe } from '@stripe/stripe-js'

const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY

if (!stripePublishableKey) {
  throw new Error('Missing Stripe publishable key')
}

export const stripePromise = loadStripe(stripePublishableKey)

export const STRIPE_PRICES = {
  monthly: import.meta.env.VITE_STRIPE_PRICE_ID_MONTHLY,
  yearly: import.meta.env.VITE_STRIPE_PRICE_ID_YEARLY,
}

export const APP_CONFIG = {
  monthlyPrice: parseFloat(import.meta.env.VITE_MONTHLY_PRICE || '29.99'),
  yearlyPrice: parseFloat(import.meta.env.VITE_YEARLY_PRICE || '299.99'),
  trialDays: parseInt(import.meta.env.VITE_TRIAL_DAYS || '7'),
  appUrl: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
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