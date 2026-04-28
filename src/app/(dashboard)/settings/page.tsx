'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

// ─── Theme Toggle ─────────────────────────────────────────────────────────────

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options = [
    { value: 'light',  label: 'Light',  icon: Sun     },
    { value: 'dark',   label: 'Dark',   icon: Moon    },
    { value: 'system', label: 'System', icon: Monitor },
  ] as const;

  return (
    <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit">
      {options.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            theme === value
              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
          }`}
        >
          <Icon size={15} />
          {label}
        </button>
      ))}
    </div>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
        <h2 className="font-heading font-black text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">{title}</h2>
      </div>
      <div className="divide-y divide-slate-100 dark:divide-slate-800">{children}</div>
    </section>
  );
}

function Row({
  icon: Icon, label, description, right, onClick, danger,
}: {
  icon: React.ElementType;
  label: string;
  description?: string;
  right?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 px-6 py-4 ${onClick ? 'cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors' : ''}`}
      onClick={onClick}
    >
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${danger ? 'bg-red-100 dark:bg-red-950/30' : 'bg-primary/10'}`}>
        <Icon size={17} className={danger ? 'text-red-500' : 'text-primary'} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-sm ${danger ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>{label}</p>
        {description && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{description}</p>}
      </div>
      {right ?? (onClick && <ChevronRight size={16} className="text-slate-400 flex-shrink-0" />)}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingsPage() {
  const user   = useAuthStore(s => s.user);
  const logout = useAuthStore(s => s.logout);
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push('/login');
  }

  return (
    <div className="p-6 lg:p-10 max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-heading font-black text-slate-900 dark:text-white">Settings</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Manage your account and preferences.</p>
      </div>

      {/* Account */}
      <Section title="Account">
        <div className="flex items-center gap-4 px-6 py-5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-lg">
            {user?.email?.[0]?.toUpperCase() ?? '?'}
          </div>
          <div>
            <p className="font-bold text-slate-900 dark:text-white">{user?.email ?? user?.phone ?? '—'}</p>
            <div className="flex items-center gap-2 mt-0.5">
              <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider">
                {user?.role === 'HIRER' ? 'Brand / Hirer' : 'Creator / Influencer'}
              </Badge>
              {user?.isVerified && (
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">✓ Verified</span>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Appearance */}
      <Section title="Appearance">
        <div className="px-6 py-5 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm text-slate-900 dark:text-white">Theme</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Choose light, dark, or follow your system setting</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </Section>

      {/* Notifications */}
      <Section title="Notifications">
        <Row
          icon={Bell}
          label="Notification Preferences"
          description="Control which alerts you receive"
          onClick={() => router.push('/notifications')}
        />
      </Section>

      {/* Security */}
      <Section title="Security">
        <Row
          icon={Shield}
          label="Account Security"
          description="Password and verification settings"
        />
      </Section>

      {/* Danger */}
      <Section title="Session">
        <Row
          icon={LogOut}
          label="Log Out"
          description="Sign out of your current session"
          onClick={handleLogout}
          danger
        />
      </Section>

    </div>
  );
}
