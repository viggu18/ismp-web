'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Search, Layers, BarChart2, Wallet,
  Mail, ShieldCheck, Settings, HelpCircle, LogOut,
  Compass, Briefcase, TrendingUp, Star, ArrowLeftRight,
  UserCircle2
} from 'lucide-react';

type NavItem = { href: string; label: string; icon: React.ElementType };

const hirerNav: NavItem[] = [
  { href: '/',             label: 'Dashboard',    icon: LayoutDashboard },
  { href: '/discover',     label: 'Discovery',    icon: Search          },
  { href: '/campaigns',    label: 'Campaigns',    icon: Layers          },
  { href: '/analytics',    label: 'Analytics',    icon: BarChart2       },
  { href: '/earnings',     label: 'Earnings',     icon: Wallet          },
  { href: '/messages',     label: 'Messages',     icon: Mail            },
  { href: '/verification', label: 'Verification', icon: ShieldCheck     },
  { href: '/settings',     label: 'Settings',     icon: Settings        },
];

const influencerNav: NavItem[] = [
  { href: '/',             label: 'Dashboard',    icon: LayoutDashboard },
  { href: '/explore',      label: 'Explore',      icon: Compass         },
  { href: '/applications', label: 'Applications', icon: Briefcase       },
  { href: '/analytics',    label: 'Analytics',    icon: TrendingUp      },
  { href: '/earnings',     label: 'Earnings',     icon: Wallet          },
  { href: '/messages',     label: 'Messages',     icon: Mail            },
  { href: '/verification', label: 'Verification', icon: ShieldCheck     },
  { href: '/profile',      label: 'My Profile',   icon: UserCircle2     },
  { href: '/settings',     label: 'Settings',     icon: Settings        },
];

export function Sidebar() {
  const pathname = usePathname();
  const [role, setRole] = useState<'hirer' | 'influencer'>('hirer');

  const isHirer = role === 'hirer';
  const nav = isHirer ? hirerNav : influencerNav;

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 z-50 bg-slate-50 dark:bg-slate-950 p-4 border-r border-slate-200 dark:border-slate-800 font-manrope text-sm font-medium">
      {/* Logo + role pill */}
      <div className="mb-8 px-2">
        <h1 className="text-lg font-black text-primary tracking-tighter">Editorial Hub</h1>
        <div className="flex items-center gap-2 mt-1">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider transition-colors ${
            isHirer
              ? 'bg-primary/10 text-primary'
              : 'bg-secondary/10 text-secondary'
          }`}>
            {isHirer ? 'Hirer' : 'Influencer'}
          </span>
          <span className="text-xs text-slate-400 font-normal">Premium Marketplace</span>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 space-y-0.5 overflow-y-auto">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 ${
                active
                  ? 'bg-white dark:bg-slate-900 text-primary shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:translate-x-0.5'
              }`}
            >
              <Icon size={18} className={active ? 'text-primary' : ''} />
              <span>{label}</span>
              {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto space-y-4 pt-4">
        {/* Role toggle button */}
        <button
          onClick={() => setRole(isHirer ? 'influencer' : 'hirer')}
          className={`w-full py-3 rounded-xl text-xs font-bold tracking-wider shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 ${
            isHirer
              ? 'bg-gradient-to-br from-secondary to-secondary/80 text-white'
              : 'bg-gradient-to-br from-primary to-primary-light text-white'
          }`}
        >
          <ArrowLeftRight size={14} />
          {isHirer ? 'Switch to Influencer' : 'Switch to Hirer'}
        </button>

        {/* Role context label */}
        <p className="text-center text-[10px] text-slate-400 font-medium -mt-2">
          {isHirer
            ? 'Viewing as: Brand / Agency'
            : 'Viewing as: Content Creator'}
        </p>

        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-0.5">
          <div className="text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer active:scale-95 transition-all">
            <HelpCircle size={18} />
            <span>Help Center</span>
          </div>
          <div className="text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer active:scale-95 transition-all">
            <LogOut size={18} />
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
