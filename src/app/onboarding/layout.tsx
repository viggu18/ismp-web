"use client";
import React, { useEffect, useState } from 'react';
import { useUser } from '@/store/authStore';
import { useRouter, usePathname } from 'next/navigation';
import { MdAccountCircle, MdShare, MdPayments, MdVerifiedUser } from 'react-icons/md';

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  const user = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !user) {
      router.push('/login');
    }
  }, [mounted, user, router]);

  if (!mounted || !user) return null;

  const isInfluencer = user.role === 'INFLUENCER';

  const steps = isInfluencer
    ? [
        { id: 'profile', icon: MdAccountCircle, label: 'Profile', path: '/onboarding/profile' },
        { id: 'socials', icon: MdShare, label: 'Socials', path: '/onboarding/socials' },
        { id: 'rates', icon: MdPayments, label: 'Rates', path: '/onboarding/rates' }
      ]
    : [
        { id: 'profile', icon: MdAccountCircle, label: 'Company Profile', path: '/onboarding/profile' },
        { id: 'verify', icon: MdVerifiedUser, label: 'Verify', path: '/onboarding/verify' }
      ];

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans antialiased">
      <aside className="hidden md:flex flex-col gap-y-4 p-6 h-screen w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 fixed left-0 top-0 z-40">
        <div className="mb-8">
          <h1 className="text-lg font-black text-primary uppercase tracking-tighter">Onboarding</h1>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">Complete workspace</p>
        </div>

        <nav className="flex flex-col gap-y-2">
          {steps.map(step => {
            const isActive = pathname.includes(step.path);
            return (
              <div key={step.id} onClick={() => router.push(step.path)} className={`cursor-pointer flex items-center gap-x-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${isActive ? 'bg-primary/10 text-primary font-bold shadow-sm' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                <step.icon size={20} className={isActive ? 'text-primary' : ''} />
                <span className="font-bold uppercase tracking-widest text-[10px]">{step.label}</span>
              </div>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 md:ml-64 p-8 md:p-12 lg:p-16 max-w-5xl mx-auto w-full pb-24 md:pb-16">
        {children}
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 px-6 py-4 flex justify-around items-center border-t border-slate-200 dark:border-slate-800">
        {steps.map(step => {
          const isActive = pathname.includes(step.path);
          return (
             <div key={step.id} onClick={() => router.push(step.path)} className={`flex flex-col items-center gap-1 ${isActive ? 'text-primary' : 'text-slate-500'}`}>
               <step.icon size={24} />
               <span className="text-[9px] font-bold uppercase">{step.label}</span>
             </div>
          );
        })}
      </nav>
    </div>
  );
}
