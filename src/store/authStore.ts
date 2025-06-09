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
  isLoading: false,

  signIn: async (email: string, password: string) => {
    try {
      console.log('AuthStore: Starting signIn process')
      set({ isLoading: true })
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        console.log('AuthStore: SignIn error:', error.message)
        set({ isLoading: false })
        return { success: false, error: error.message }
      }

      if (data.user) {
        console.log('AuthStore: Auth successful, loading user profile...')
        // Load user profile immediately after successful auth and wait for completion
        await get().loadUser()
        
        // Ensure we have a user loaded before considering success
        const currentState = get()
        console.log('AuthStore: User loaded:', !!currentState.user)
        if (!currentState.user) {
          set({ isLoading: false })
          return { success: false, error: 'Benutzerprofil konnte nicht geladen werden' }
        }
      }

      console.log('AuthStore: SignIn successful')
      set({ isLoading: false })
      return { success: true }
    } catch (error) {
      console.error('AuthStore: SignIn exception:', error)
      set({ isLoading: false })
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
          emailRedirectTo: `${window.location.origin}/dashboard`
        }
      })

      if (error) {
        return { success: false, error: error.message }
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
    set({ user: null, isLoading: false })
  },

  createUserProfile: async (userId: string, email: string, name: string) => {
    try {
      // First check if profile already exists
      const { data: existingUser } = await supabase
        .from('users')
        .select('id')
        .eq('id', userId)
        .single()

      if (existingUser) {
        // Profile already exists, just load it
        await get().loadUser()
        return { success: true }
      }

      // Create new profile
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

      if (error) {
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
      console.log('AuthStore: Loading user...')
      const { data: { user: authUser } } = await supabase.auth.getUser()
      
      if (!authUser) {
        console.log('AuthStore: No auth user found')
        set({ user: null, isLoading: false })
        return
      }

      console.log('AuthStore: Auth user found, loading profile for:', authUser.id)
      const { data: userData, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .single()

      if (error) {
        console.error('AuthStore: Error loading user profile:', error)
        
        // If user profile doesn't exist, try to create it
        if (error.code === 'PGRST116') {
          console.log('AuthStore: Profile not found, creating new profile...')
          const userName = authUser.user_metadata?.name || 'User'
          const createResult = await get().createUserProfile(authUser.id, authUser.email!, userName)
          
          if (createResult.success) {
            return // createUserProfile already calls loadUser again
          }
        }
        
        set({ user: null, isLoading: false })
        return
      }

      console.log('AuthStore: User profile loaded successfully:', userData.id)
      set({ user: userData, isLoading: false })
    } catch (error) {
      console.error('AuthStore: Error loading user:', error)
      set({ user: null, isLoading: false })
    }
  },
}))

// Remove the problematic auth state change listener for now
// We'll handle auth state manually
let isInitialized = false

export const initializeAuth = async () => {
  if (isInitialized) return
  isInitialized = true
  
  const { data: { session } } = await supabase.auth.getSession()
  if (session) {
    await useAuthStore.getState().loadUser()
  } else {
    useAuthStore.setState({ user: null, isLoading: false })
  }
}