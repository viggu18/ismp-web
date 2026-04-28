'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Search, Layers, Compass, Briefcase } from 'lucide-react';

const hirerMobileNav = [
  { href: '/',             label: 'Home',       icon: LayoutDashboard },
  { href: '/discover',     label: 'Discover',   icon: Search          },
  { href: '/campaigns',    label: 'Campaigns',  icon: Layers          },
];

const influencerMobileNav = [
  { href: '/',             label: 'Home',       icon: LayoutDashboard },
  { href: '/explore',      label: 'Explore',    icon: Compass         },
  { href: '/applications', label: 'Apps',       icon: Briefcase       },
];

export function BottomNav({ isHirer = true }: { isHirer?: boolean }) {
  const pathname = usePathname();
  const nav = isHirer ? hirerMobileNav : influencerMobileNav;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 flex items-center justify-around z-50 pb-safe">
      {nav.map(({ href, label, icon: Icon }) => {
        const active = pathname === href || (href !== '/' && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
              active ? 'text-primary' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            <Icon size={20} className={active ? 'stroke-[2.5px]' : ''} />
            <span className="text-[10px] font-medium tracking-tight">{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
