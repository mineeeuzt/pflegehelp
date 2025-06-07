import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface User {
  id: string
  email: string
  name: string
  subscription_status: 'trial' | 'active' | 'expired' | 'cancelled'
  trial_ends_at: string
  stripe_customer_id?: string
  stripe_subscription_id?: string
  payment_method_added: boolean
  usage_count_case_generation: number
  usage_count_care_plan: number
  usage_count_care_info: number
  created_at: string
  updated_at: string
}

export interface Case {
  id: string
  user_id: string
  title: string
  content: string
  case_type: 'fallbeispiel' | 'pflegeplanung' | 'pesr' | 'smart_ziel' | 'pflegeinfo'
  ai_response?: string
  ai_feedback?: Record<string, unknown>
  care_infos?: Record<string, unknown>
  created_at: string
  updated_at: string
}

export interface CreateCaseData {
  title: string
  content: string
  case_type: Case['case_type']
  ai_response?: string
  ai_feedback?: Record<string, unknown>
  care_infos?: Record<string, unknown>
}