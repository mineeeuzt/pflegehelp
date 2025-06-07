import { create } from 'zustand'
import { supabase, type User } from '../lib/supabase'

interface AuthState {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{success: boolean, error?: string}>
  signUp: (email: string, password: string, name: string) => Promise<{success: boolean, error?: string}>
  signOut: () => Promise<void>
  loadUser: () => Promise<void>
  createUserProfile: (userId: string, email: string, name: string) => Promise<{success: boolean, error?: string}>
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: true,

  signIn: async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        return { success: false, error: error.message }
      }

      if (data.user) {
        await get().loadUser()
      }

      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Ein unbekannter Fehler ist aufgetreten' 
      }
    }
  },

  signUp: async (email: string, password: string, name: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name,
          },
          emailRedirectTo: `${window.location.origin}/email-confirmation`
        }
      })

      if (error) {
        return { success: false, error: error.message }
      }

      if (data.user) {
        // Don't sign in immediately - wait for email confirmation
        // The user profile will be created when they confirm their email
        
        // If the user is already confirmed (e.g., in development)
        if (data.user.email_confirmed_at) {
          // Create the user profile immediately
          const { error: profileError } = await supabase
            .from('users')
            .insert([
              {
                id: data.user.id,
                email: data.user.email!,
                name,
                subscription_status: 'trial',
                trial_ends_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
              }
            ])

          if (profileError && !profileError.message.includes('duplicate')) {
            console.error('Profile creation error:', profileError)
          }

          await get().loadUser()
        }
      }

      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Ein unbekannter Fehler ist aufgetreten' 
      }
    }
  },

  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null })
  },

  createUserProfile: async (userId: string, email: string, name: string) => {
    try {
      const { error } = await supabase
        .from('users')
        .insert([
          {
            id: userId,
            email,
            name,
            subscription_status: 'trial',
            trial_ends_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          }
        ])

      if (error && !error.message.includes('duplicate key')) {
        console.error('Profile creation error:', error)
        return { success: false, error: error.message }
      }

      await get().loadUser()
      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Ein unbekannter Fehler ist aufgetreten' 
      }
    }
  },

  loadUser: async () => {
    try {
      set({ isLoading: true })
      
      const { data: { user: authUser } } = await supabase.auth.getUser()
      
      if (authUser) {
        const { data: userData, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', authUser.id)
          .single()

        if (error) {
          console.error('Error loading user profile:', error)
          set({ user: null, isLoading: false })
          return
        }

        set({ user: userData, isLoading: false })
      } else {
        set({ user: null, isLoading: false })
      }
    } catch (error) {
      console.error('Error loading user:', error)
      set({ user: null, isLoading: false })
    }
  },
}))

supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_OUT' || !session) {
    useAuthStore.getState().user = null
  } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
    useAuthStore.getState().loadUser()
  }
})