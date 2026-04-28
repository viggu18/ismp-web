'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard, Search, Layers, BarChart2, Wallet,
  Mail, ShieldCheck, HelpCircle, LogOut,
  Compass, Briefcase, TrendingUp,
  UserCircle2, ArrowLeftRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/store/authStore';

type NavItem = { href: string; label: string; icon: React.ElementType };

const hirerNav: NavItem[] = [
  { href: '/',             label: 'Dashboard',    icon: LayoutDashboard },
  { href: '/discover',     label: 'Discovery',    icon: Search          },
  { href: '/campaigns',    label: 'Campaigns',    icon: Layers          },
  { href: '/analytics',    label: 'Analytics',    icon: BarChart2       },
  { href: '/earnings',     label: 'Earnings',     icon: Wallet          },
  { href: '/messages',     label: 'Messages',     icon: Mail            },
  { href: '/verification', label: 'Verification', icon: ShieldCheck     },
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
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const isHirer = user?.role === 'HIRER';
  const nav = isHirer ? hirerNav : influencerNav;

  function handleLogout() {
    logout();
    router.push('/login');
  }

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 z-50 bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl p-4 border-r border-slate-200/60 dark:border-slate-800/60 font-sans text-sm font-medium shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      {/* Logo + role pill */}
      <div className="mb-8 px-2 mt-2">
        <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <span className="text-white text-xs font-bold">IH</span>
          </div>
          InfluencerHub
        </h1>
        <div className="flex items-center gap-2 mt-3">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider transition-colors ${
            isHirer
              ? 'bg-primary/10 text-primary border border-primary/20'
              : 'bg-secondary/10 text-secondary border border-secondary/20'
          }`}>
            {isHirer ? 'Hirer' : 'Influencer'}
          </span>
          <span className="text-xs text-slate-400 font-normal">Workspace</span>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar pr-1">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group"
            >
              {active && (
                <motion.div 
                  layoutId="active-nav-bg"
                  className="absolute inset-0 bg-white dark:bg-slate-800 rounded-md shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                  initial={false}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <div className="relative flex items-center gap-3 w-full z-10">
                <Icon size={18} className={active ? 'text-primary stroke-[2.5px]' : 'text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors'} />
                <span className={active ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors'}>
                  {label}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto space-y-4 pt-4">
        <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 space-y-1">
          <div className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-all">
            <HelpCircle size={18} />
            <span>Help Center</span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left text-slate-600 dark:text-slate-400 hover:text-error hover:bg-error/10 flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer transition-all"
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
