
import { create } from 'zustand';

type AuthState = {
  user: { phone: string } | null;
  setUser: (phone: string) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (phone) => set({ user: { phone } }),
  clearUser: () => set({ user: null }),
}));