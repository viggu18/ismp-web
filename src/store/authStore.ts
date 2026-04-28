import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '@/lib/api';

export type UserRole = 'HIRER' | 'INFLUENCER';

export interface AuthUser {
  id: string;
  role: UserRole;
  phone: string;
  email: string | null;
  isVerified: boolean;
  profileId: string | null;
  profileCompleted: boolean;
}

interface ApiAuthResponse {
  data: { token: string; user: AuthUser };
  message: string;
}

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  // Actions
  login: (email: string, password: string) => Promise<void>;
  register: (role: UserRole, phone: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  setLoading: (v: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,

      setLoading: (v) => set({ isLoading: v }),

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const res = await api.post<ApiAuthResponse>('/auth/login', { email, password });
          set({ user: res.data.user, token: res.data.token, isLoading: false });
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
      },

      register: async (role, phone, email, password) => {
        set({ isLoading: true });
        try {
          const res = await api.post<ApiAuthResponse>('/auth/register', { role, phone, email, password });
          set({ user: res.data.user, token: res.data.token, isLoading: false });
        } catch (err) {
          set({ isLoading: false });
          throw err;
        }
      },

      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'ismp-auth', // localStorage key
      partialize: (state) => ({ user: state.user, token: state.token }),
    },
  ),
);

// Convenience selector — avoids re-renders when unrelated state changes
export const useAuth = () => useAuthStore();
export const useUser = () => useAuthStore((s) => s.user);
export const useToken = () => useAuthStore((s) => s.token);
export const useIsAuthenticated = () => useAuthStore((s) => Boolean(s.token && s.user));
