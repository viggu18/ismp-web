/**
 * Axios-based API client for the ISMP backend.
 * Base URL: NEXT_PUBLIC_API_URL (.env.local)
 */

import axios, { AxiosRequestConfig } from 'axios';

function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem('ismp-auth');
    return raw ? (JSON.parse(raw) as { state?: { token?: string } }).state?.token ?? null : null;
  } catch {
    return null;
  }
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api',
  headers: { 'Content-Type': 'application/json' },
});

// Attach token before every request
client.interceptors.request.use(config => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Unwrap axios error → plain Error with backend message
client.interceptors.response.use(
  res => res,
  err => {
    const msg = err?.response?.data?.message ?? err?.message ?? 'Request failed';
    return Promise.reject(new Error(msg));
  },
);

// Convenience wrapper — returns response.data directly (matches previous api.* usage)
async function req<T>(config: AxiosRequestConfig): Promise<T> {
  const res = await client.request<T>(config);
  return res.data;
}

export const api = {
  get:    <T>(path: string, config?: AxiosRequestConfig) => req<T>({ method: 'GET',    url: path, ...config }),
  post:   <T>(path: string, data?: unknown, config?: AxiosRequestConfig) => req<T>({ method: 'POST',   url: path, data, ...config }),
  put:    <T>(path: string, data?: unknown, config?: AxiosRequestConfig) => req<T>({ method: 'PUT',    url: path, data, ...config }),
  patch:  <T>(path: string, data?: unknown, config?: AxiosRequestConfig) => req<T>({ method: 'PATCH',  url: path, data, ...config }),
  delete: <T>(path: string, config?: AxiosRequestConfig) => req<T>({ method: 'DELETE', url: path, ...config }),
};
