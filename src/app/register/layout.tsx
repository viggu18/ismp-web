import React from 'react';

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background font-body text-on-surface antialiased">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col gap-y-4 p-6 h-screen w-64 bg-slate-50 border-r border-outline-variant/10 fixed left-0 top-0 z-40">
        <div className="mb-8">
          <h1 className="text-lg font-black text-primary uppercase tracking-tighter">Registration</h1>
          <p className="text-[10px] font-manrope uppercase tracking-widest text-textSecondary">Step-by-step onboarding</p>
        </div>

        <nav className="flex flex-col gap-y-2">
          {/* Step 1: Account */}
          <div className="flex items-center gap-x-3 px-4 py-3 text-textSecondary hover:bg-slate-200/50 rounded-lg transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">person_add</span>
            <span className="font-manrope uppercase tracking-widest text-[10px]">Account</span>
          </div>
          {/* Step 2: Verify */}
          <div className="flex items-center gap-x-3 px-4 py-3 text-textSecondary hover:bg-slate-200/50 rounded-lg transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">verified_user</span>
            <span className="font-manrope uppercase tracking-widest text-[10px]">Verify</span>
          </div>
          {/* Step 3: Profile (ACTIVE placeholder for now, ideally dynamic) */}
          <div className="flex items-center gap-x-3 px-4 py-3 bg-white text-primary rounded-lg shadow-sm font-bold transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
            <span className="font-manrope uppercase tracking-widest text-[10px]">Profile</span>
          </div>
          {/* Step 4: Socials */}
          <div className="flex items-center gap-x-3 px-4 py-3 text-textSecondary hover:bg-slate-200/50 rounded-lg transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">share</span>
            <span className="font-manrope uppercase tracking-widest text-[10px]">Socials</span>
          </div>
          {/* Step 5: Rates */}
          <div className="flex items-center gap-x-3 px-4 py-3 text-textSecondary hover:bg-slate-200/50 rounded-lg transition-all duration-300 ease-in-out">
            <span className="material-symbols-outlined">payments</span>
            <span className="font-manrope uppercase tracking-widest text-[10px]">Rates</span>
          </div>
        </nav>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-64 p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
        {children}
      </main>

      {/* Mobile Navigation Shell */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col items-center gap-1 text-textMuted">
          <span className="material-symbols-outlined">person_add</span>
          <span className="text-[9px] font-bold uppercase">Step 1</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
          <span className="text-[9px] font-bold uppercase">Profile</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-textMuted">
          <span className="material-symbols-outlined">payments</span>
          <span className="text-[9px] font-bold uppercase">Step 5</span>
        </div>
      </nav>
    </div>
  );
}
