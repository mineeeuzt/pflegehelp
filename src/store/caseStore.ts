import { create } from 'zustand'
import { supabase, type Case, type CreateCaseData } from '../lib/supabase'

interface CaseState {
  cases: Case[]
  isLoading: boolean
  createCase: (data: CreateCaseData) => Promise<Case>
  updateCase: (id: string, data: Partial<Case>) => Promise<void>
  deleteCase: (id: string) => Promise<void>
  loadCases: () => Promise<void>
}

export const useCaseStore = create<CaseState>((set) => ({
  cases: [],
  isLoading: false,

  createCase: async (data: CreateCaseData) => {
    try {
      const { data: newCase, error } = await supabase
        .from('cases')
        .insert([data])
        .select()
        .single()

      if (error) {
        throw new Error(error.message)
      }

      set(state => ({
        cases: [newCase, ...state.cases]
      }))

      return newCase
    } catch (error) {
      console.error('Error creating case:', error)
      throw error
    }
  },

  updateCase: async (id: string, data: Partial<Case>) => {
    try {
      const { error } = await supabase
        .from('cases')
        .update({
          ...data,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)

      if (error) {
        throw new Error(error.message)
      }

      set(state => ({
        cases: state.cases.map(case_ => 
          case_.id === id 
            ? { ...case_, ...data, updated_at: new Date().toISOString() }
            : case_
        )
      }))
    } catch (error) {
      console.error('Error updating case:', error)
      throw error
    }
  },

  deleteCase: async (id: string) => {
    try {
      const { error } = await supabase
        .from('cases')
        .delete()
        .eq('id', id)

      if (error) {
        throw new Error(error.message)
      }

      set(state => ({
        cases: state.cases.filter(case_ => case_.id !== id)
      }))
    } catch (error) {
      console.error('Error deleting case:', error)
      throw error
    }
  },

  loadCases: async () => {
    try {
      set({ isLoading: true })
      
      const { data: cases, error } = await supabase
        .from('cases')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw new Error(error.message)
      }

      set({ cases: cases || [], isLoading: false })
    } catch (error) {
      console.error('Error loading cases:', error)
      set({ cases: [], isLoading: false })
    }
  },
}))