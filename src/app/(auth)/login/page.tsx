'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ArrowRight, Zap, BarChart2, Shield } from 'lucide-react';
import { useAuth } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const features = [
  { icon: Zap,       title: 'Instant Matching',   desc: 'AI-powered pairing with brands that fit your niche.' },
  { icon: BarChart2, title: 'Real-time Analytics', desc: 'Track reach, engagement, and campaign ROI live.'      },
  { icon: Shield,    title: 'Secure Payments',     desc: 'Escrow-protected earnings released on approval.'     },
];

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [showPw,   setShowPw]   = useState(false);
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    setLoading(true);
    try {
      await login(email, password);
      router.push('/');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed. Check your credentials.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

      {/* Left — branding */}
      <div className="hidden lg:flex flex-col justify-center space-y-10">
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white text-sm font-black">IH</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">InfluencerHub</span>
          </div>
          <h1 className="text-5xl font-heading font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Where creators<br />
            <span className="text-primary italic">meet brands.</span>
          </h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-sm">
            The professional marketplace for high-tier influencer campaigns.
          </p>
        </div>

        <div className="space-y-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm">{title}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">
          Trusted by 2,000+ creators & brands
        </p>
      </div>

      {/* Right — form card */}
      <div className="w-full">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-200/60 dark:border-slate-800">

          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-black">IH</span>
            </div>
            <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white">InfluencerHub</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white">Welcome back</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Sign in to your workspace
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" id="login-form">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Email or Phone
              </label>
              <Input
                id="login-email"
                type="text"
                autoComplete="email"
                placeholder="name@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/30"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Password
              </label>
              <div className="relative">
                <Input
                  id="login-password"
                  type={showPw ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/30 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 font-bold text-base shadow-lg shadow-primary/20 gap-2"
              id="login-submit"
            >
              {loading ? (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
              ) : (
                <>Sign In <ArrowRight size={18} /></>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-primary font-bold hover:underline">
                Create one free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
