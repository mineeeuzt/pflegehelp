/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string
  readonly VITE_STRIPE_PRICE_ID_MONTHLY: string
  readonly VITE_STRIPE_PRICE_ID_YEARLY: string
  readonly VITE_OPENAI_API_KEY: string
  readonly VITE_APP_URL: string
  readonly VITE_MONTHLY_PRICE: string
  readonly VITE_YEARLY_PRICE: string
  readonly VITE_TRIAL_DAYS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}