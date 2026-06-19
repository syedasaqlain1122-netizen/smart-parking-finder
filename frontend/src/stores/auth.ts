import { create } from 'zustand'

interface User {
  id: string
  email: string
  role: string
}

interface AuthStore {
  user: User | null
  setUser: (user: User) => void
  logout: () => void
  loadUser: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    set({ user })
  },
  logout: () => {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user')
    set({ user: null })
  },
  loadUser: () => {
    const userStr = localStorage.getItem('user')
    if (userStr) {
      try {
        const user = JSON.parse(userStr)
        set({ user })
      } catch (error) {
        console.error('Failed to load user from localStorage', error)
      }
    }
  },
}))
