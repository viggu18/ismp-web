'use client';
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
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

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  register: (role: UserRole, phone: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthState & AuthActions | null>(null);

const TOKEN_KEY = 'ismp_token';
const USER_KEY  = 'ismp_user';

interface ApiAuthResponse {
  data: { token: string; user: AuthUser };
  message: string;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user,  setUser]  = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const storedUser  = localStorage.getItem(USER_KEY);
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch {
      // corrupted storage — clear it
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const persist = useCallback((token: string, user: AuthUser) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    setToken(token);
    setUser(user);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const res = await api.post<ApiAuthResponse>('/auth/login', { email, password });
    persist(res.data.token, res.data.user);
    router.push('/');
  }, [persist, router]);

  const register = useCallback(async (
    role: UserRole, phone: string, email: string, password: string
  ) => {
    const res = await api.post<ApiAuthResponse>('/auth/register', { role, phone, email, password });
    persist(res.data.token, res.data.user);
    router.push('/');
  }, [persist, router]);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setToken(null);
    setUser(null);
    router.push('/login');
  }, [router]);

  return (
    <AuthContext.Provider value={{
      user, token, isLoading,
      isAuthenticated: Boolean(token && user),
      login, register, logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
