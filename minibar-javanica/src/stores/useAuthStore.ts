// todo : buat authstore dengan kompabilitas yang bagus dengan kelengkapan dari user data dan token
import { create } from "zustand"

export interface User {
  id: number
  name: string
  email: string
  role: "CASHIER" | "USER"
}

interface AuthState {
  user: User | null
  token: string | null

  setAuth: (user: User, token: string) => void
  logout: () => void
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  setAuth: (user, token) =>
    set({
      user,
      token,
    }),

  logout: () =>
    set({
      user: null,
      token: null,
    }),
}))

export default useAuthStore