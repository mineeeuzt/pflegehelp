import { supabase } from '../lib/supabase'

export interface AuthResponse {
  success: boolean
  error?: string
}

export const authService = {
  async validatePassword(password: string): Promise<{ isValid: boolean; errors: string[] }> {
    const errors: string[] = []

    if (password.length < 8) {
      errors.push('Passwort muss mindestens 8 Zeichen lang sein')
    }

    if (!/[A-Z]/.test(password)) {
      errors.push('Passwort muss mindestens einen Großbuchstaben enthalten')
    }

    if (!/[a-z]/.test(password)) {
      errors.push('Passwort muss mindestens einen Kleinbuchstaben enthalten')
    }

    if (!/\d/.test(password)) {
      errors.push('Passwort muss mindestens eine Zahl enthalten')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  },

  async checkTrialStatus(userId: string): Promise<{
    isTrialActive: boolean
    trialEndsAt: string | null
    daysLeft: number
  }> {
    try {
      const { data, error } = await supabase
        .rpc('is_trial_active', { user_uuid: userId })

      if (error) {
        throw new Error(error.message)
      }

      const { data: userData } = await supabase
        .from('users')
        .select('trial_ends_at, subscription_status')
        .eq('id', userId)
        .single()

      if (!userData) {
        return { isTrialActive: false, trialEndsAt: null, daysLeft: 0 }
      }

      const trialEndsAt = userData.trial_ends_at
      const daysLeft = trialEndsAt 
        ? Math.max(0, Math.ceil((new Date(trialEndsAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
        : 0

      return {
        isTrialActive: data,
        trialEndsAt,
        daysLeft
      }
    } catch (error) {
      console.error('Error checking trial status:', error)
      return { isTrialActive: false, trialEndsAt: null, daysLeft: 0 }
    }
  },

  async incrementUsageCount(userId: string, feature: 'case_generation' | 'care_plan' | 'care_info'): Promise<void> {
    try {
      const columnName = `usage_count_${feature}`
      
      await supabase.rpc('increment_usage_count', {
        user_uuid: userId,
        column_name: columnName
      })

      await supabase
        .from('usage_tracking')
        .insert([{
          user_id: userId,
          feature_type: feature
        }])
    } catch (error) {
      console.error('Error incrementing usage count:', error)
    }
  },

  async updateUserSubscription(
    userId: string, 
    subscriptionData: {
      subscription_status: string
      stripe_customer_id?: string
      stripe_subscription_id?: string
      payment_method_added?: boolean
    }
  ): Promise<void> {
    try {
      const { error } = await supabase
        .from('users')
        .update({
          ...subscriptionData,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId)

      if (error) {
        throw new Error(error.message)
      }
    } catch (error) {
      console.error('Error updating user subscription:', error)
      throw error
    }
  }
}