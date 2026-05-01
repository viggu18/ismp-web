'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowLeft, Eye, EyeOff, Briefcase, Star, Check } from 'lucide-react';
import { useAuth, UserRole } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// ─── Step 1: Role picker ────────────────────────────────────────────────────

function RolePicker({ role, onChange }: { role: UserRole | ''; onChange: (r: UserRole) => void }) {
  const options: { value: UserRole; label: string; sub: string; icon: React.ElementType; color: string }[] = [
    {
      value: 'HIRER',
      label: 'Brand / Hirer',
      sub: 'I want to find creators and run campaigns',
      icon: Briefcase,
      color: 'border-primary bg-primary/5 text-primary',
    },
    {
      value: 'INFLUENCER',
      label: 'Creator / Influencer',
      sub: 'I want to get discovered and collaborate with brands',
      icon: Star,
      color: 'border-secondary bg-secondary/5 text-secondary',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white">What describes you?</h2>
      <p className="text-slate-500 dark:text-slate-400 text-sm">This sets up your workspace correctly.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {options.map(({ value, label, sub, icon: Icon, color }) => (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            className={`relative flex flex-col items-start gap-3 p-5 rounded-2xl border-2 transition-all text-left ${
              role === value
                ? color
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
            }`}
          >
            {role === value && (
              <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-current/10 flex items-center justify-center">
                <Check size={12} className="text-current" />
              </span>
            )}
            <Icon size={24} />
            <div>
              <p className="font-bold text-sm">{label}</p>
              <p className={`text-xs mt-0.5 ${role === value ? 'opacity-80' : 'text-slate-500 dark:text-slate-400'}`}>{sub}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Step 2: Credentials ─────────────────────────────────────────────────────

function CredentialFields({
  phone, email, password, confirmPassword,
  showPw, onTogglePw,
  onChange,
}: {
  phone: string; email: string; password: string; confirmPassword: string;
  showPw: boolean; onTogglePw: () => void;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white">Create your account</h2>
      <p className="text-slate-500 dark:text-slate-400 text-sm">Phone is required. Email is optional but recommended.</p>
      <div className="space-y-1.5">
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Phone *</label>
        <Input
          id="reg-phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={phone}
          onChange={e => onChange('phone', e.target.value)}
          className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/30"
        />
      </div>
      <div className="space-y-1.5">
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Email (optional)</label>
        <Input
          id="reg-email"
          type="email"
          autoComplete="email"
          placeholder="name@company.com"
          value={email}
          onChange={e => onChange('email', e.target.value)}
          className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/30"
        />
      </div>
      <div className="space-y-1.5">
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Password *</label>
        <div className="relative">
          <Input
            id="reg-password"
            type={showPw ? 'text' : 'password'}
            autoComplete="new-password"
            placeholder="Min. 8 characters"
            value={password}
            onChange={e => onChange('password', e.target.value)}
            className="h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/30 pr-12"
          />
          <button type="button" onClick={onTogglePw} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
            {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Confirm Password *</label>
        <Input
          id="reg-confirm"
          type={showPw ? 'text' : 'password'}
          autoComplete="new-password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={e => onChange('confirmPassword', e.target.value)}
          className={`h-12 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 focus-visible:ring-primary/30 ${
            confirmPassword && confirmPassword !== password ? 'border-red-400 focus-visible:ring-red-400/30' : ''
          }`}
        />
        {confirmPassword && confirmPassword !== password && (
          <p className="text-xs text-red-500">Passwords don&apos;t match</p>
        )}
      </div>
      <div className="flex items-start gap-3 pt-2">
        <input type="checkbox" id="reg-terms" required className="mt-0.5 w-4 h-4 rounded accent-primary" />
        <label htmlFor="reg-terms" className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          I agree to the{' '}
          <span className="text-primary font-semibold cursor-pointer hover:underline">Privacy Policy</span> and{' '}
          <span className="text-primary font-semibold cursor-pointer hover:underline">Terms of Service</span>.
        </label>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();

  const [step, setStep] = useState<1 | 2>(1);
  const [role, setRole] = useState<UserRole | ''>('');
  const [fields, setFields] = useState({ phone: '', email: '', password: '', confirmPassword: '' });
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleFieldChange(field: string, value: string) {
    setFields(f => ({ ...f, [field]: value }));
  }

  function handleNext() {
    if (!role) { setError('Please select a role.'); return; }
    setError('');
    setStep(2);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!fields.phone || !fields.password) { setError('Phone and password are required.'); return; }
    if (fields.password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    if (fields.password !== fields.confirmPassword) { setError('Passwords do not match.'); return; }
    setLoading(true);
    try {
      await register(role as UserRole, fields.phone, fields.email, fields.password);
      router.push('/onboarding');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
      setLoading(false);
    }
  }

  const stepLabels = ['Your Role', 'Credentials'];

  return (
    <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-center space-y-8">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white text-sm font-black">IH</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">InfluencerHub</span>
        </div>
        <div>
          <h1 className="text-5xl font-heading font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Join the <span className="text-primary italic">Elite</span><br />Creator Network.
          </h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-sm">
            Connect with top brands, manage campaigns, and grow your revenue — all in one place.
          </p>
        </div>
        {/* Progress visualization */}
        <div className="space-y-3">
          {stepLabels.map((label, i) => {
            const idx = i + 1;
            const done = step > idx;
            const active = step === idx;
            return (
              <div key={label} className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                  done ? 'bg-primary text-white' : active ? 'bg-primary/10 text-primary border-2 border-primary' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                }`}>
                  {done ? <Check size={14} /> : idx}
                </div>
                <span className={`text-sm font-semibold ${active ? 'text-slate-900 dark:text-white' : done ? 'text-primary' : 'text-slate-400'}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right — form card */}
      <div className="w-full">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl shadow-slate-200/60 dark:shadow-none border border-slate-200/60 dark:border-slate-800">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-6 lg:hidden">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-black">IH</span>
            </div>
            <span className="text-lg font-black tracking-tighter text-slate-900 dark:text-white">InfluencerHub</span>
          </div>

          {/* Step indicator (mobile) */}
          <div className="flex gap-2 mb-6 lg:hidden">
            {stepLabels.map((_, i) => (
              <div key={i} className={`h-1 flex-1 rounded-full transition-all ${step > i ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`} />
            ))}
          </div>

          <form onSubmit={handleSubmit} id="register-form">
            {step === 1 ? (
              <RolePicker role={role} onChange={r => { setRole(r); setError(''); }} />
            ) : (
              <CredentialFields
                {...fields}
                showPw={showPw}
                onTogglePw={() => setShowPw(s => !s)}
                onChange={handleFieldChange}
              />
            )}

            {error && (
              <div className="mt-5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <div className={`flex gap-3 mt-8 ${step === 2 ? 'flex-row' : ''}`}>
              {step === 2 && (
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="h-12 px-5 gap-2">
                  <ArrowLeft size={16} /> Back
                </Button>
              )}
              {step === 1 ? (
                <Button type="button" onClick={handleNext} className="w-full h-12 font-bold gap-2 shadow-lg shadow-primary/20">
                  Continue <ArrowRight size={18} />
                </Button>
              ) : (
                <Button type="submit" disabled={loading} className="flex-1 h-12 font-bold gap-2 shadow-lg shadow-primary/20" id="register-submit">
                  {loading ? (
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                  ) : (
                    <>Create Account <ArrowRight size={18} /></>
                  )}
                </Button>
              )}
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Already have an account?{' '}
              <Link href="/login" className="text-primary font-bold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
