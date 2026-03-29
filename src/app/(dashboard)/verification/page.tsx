import React from 'react';
import { ArrowRight, Badge, CheckCircle2, Circle, AlertCircle, Clock, Star } from 'lucide-react';

const accounts = [
  { name: 'Instagram', handle: '@johndoe_creative', iconBg: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', icon: '📸', status: 'Synced', statusClass: 'bg-secondary/10 text-secondary' },
  { name: 'TikTok', handle: '@jdoe_official', iconBg: 'bg-slate-900', icon: '🎵', status: 'Synced', statusClass: 'bg-secondary/10 text-secondary' },
  { name: 'YouTube', handle: 'JD Visuals', iconBg: 'bg-red-600', icon: '▶', status: 'Needs Sync', statusClass: 'bg-error-container text-error' },
];

export default function VerificationDashboardPage() {
  return (
    <div className="pt-8 px-8 pb-12 max-w-7xl mx-auto">
      {/* Hero Header Area */}
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-4">Verification Center</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Elevate your profile&apos;s authority and unlock premium campaign opportunities. Complete your identity verification and sync your social performance data.
          </p>
        </div>
        <div className="bg-surface-container-low rounded-xl px-6 py-4 flex items-center gap-4">
          <div className="relative h-12 w-12 flex items-center justify-center">
            <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48">
              <circle className="text-surface-container-highest" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
              <circle className="text-primary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="31.4" strokeWidth="4"></circle>
            </svg>
            <span className="text-sm font-bold">75%</span>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Profile Score</p>
            <p className="text-sm font-medium text-primary">High Trust Rating</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Identity Status Card */}
          <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10">
            <div className="w-full md:w-1/3 aspect-video rounded-xl bg-primary-soft flex items-center justify-center relative overflow-hidden group">
              <Badge size={64} className="text-primary" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full uppercase tracking-widest">Verified</span>
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Identity Verification Status</h2>
              <p className="text-on-surface-variant">Government ID (Passport •••• 4921) has been successfully verified. Your account is eligible for high-budget enterprise campaigns.</p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 group outline-none">
                View Credentials
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>

          {/* Social Accounts Grid */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-on-surface">Social Account Authentication</h3>
              <button className="text-sm font-bold text-primary px-4 py-2 hover:bg-primary-soft rounded-lg transition-colors outline-none">Sync All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {accounts.map((acc, i) => (
                <div key={i} className="bg-surface-container-low rounded-xl p-6 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-outline-variant/10">
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-full ${acc.iconBg} flex items-center justify-center text-white text-xl`}>
                      {acc.icon}
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{acc.name}</p>
                      <p className="text-xs text-on-surface-variant">{acc.handle}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-[10px] font-black rounded-lg uppercase tracking-wider ${acc.statusClass}`}>{acc.status}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Certifications */}
          <section className="space-y-6 pt-4">
            <h3 className="text-xl font-bold text-on-surface">Professional Certifications</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { LucideIcon: CheckCircle2, iconColor: 'text-primary', title: 'Elite Creator', desc: 'Top 5% engagement rate in Lifestyle category for 6 consecutive months.' },
                { LucideIcon: Star, iconColor: 'text-secondary', title: 'Safe Brand Partner', desc: 'Zero flagging history. Fully compliant with platform safety guidelines.' },
              ].map(({ LucideIcon, iconColor, title, desc }, i) => (
                <div key={i} className="flex-1 min-w-[280px] bg-white border border-outline-variant/10 rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden hover:shadow-sm transition-all">
                  <LucideIcon size={36} className={iconColor} />
                  <div>
                    <h4 className="font-bold text-lg text-on-surface">{title}</h4>
                    <p className="text-sm text-on-surface-variant">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Checklist */}
          <section className="bg-surface-container-high rounded-xl p-6 space-y-6">
            <div>
              <h4 className="font-bold text-lg text-on-surface">Verification Checklist</h4>
              <p className="text-xs text-on-surface-variant">Complete these to reach 100% status</p>
            </div>
            <ul className="space-y-4">
              {[
                { label: 'Identity Verification', desc: 'Completed on Oct 12, 2023', done: true },
                { label: 'Primary Instagram Sync', desc: 'Real-time insights enabled', done: true },
                { label: 'YouTube Content API', desc: 'Action Required: Re-authenticate', done: false, error: true },
                { label: 'Tax Information', desc: 'Required for payouts over $500', done: false },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.done
                    ? <CheckCircle2 size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                    : <Circle size={20} className="text-outline flex-shrink-0 mt-0.5" />
                  }
                  <div>
                    <p className="text-sm font-bold text-on-surface">{item.label}</p>
                    <p className={`text-xs ${item.error ? 'text-error font-medium' : 'text-on-surface-variant'}`}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-gradient-to-br from-primary to-primary-light text-white rounded-lg font-bold shadow-md hover:brightness-110 transition-all active:scale-[0.98] outline-none">
              Finish Onboarding
            </button>
          </section>

          {/* Activity Log */}
          <section className="space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-widest text-on-surface-variant">Activity Log</h4>
            <div className="space-y-4 border-l-2 border-surface-container-high ml-2 pl-4">
              {[
                { time: 'Oct 14, 14:20', msg: 'Instagram Insights auto-synced successfully.', color: 'bg-secondary' },
                { time: 'Oct 12, 09:15', msg: 'Identity Verification approved by admin.', color: 'bg-secondary' },
                { time: 'Oct 11, 23:45', msg: 'YouTube token expired. Sync interrupted.', color: 'bg-error', error: true },
                { time: 'Oct 10, 18:00', msg: 'Government ID submitted for review.', color: 'bg-slate-300' },
              ].map((log, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[21px] top-1 h-3 w-3 rounded-full ${log.color}`}></div>
                  <p className="text-xs font-bold text-on-surface">{log.time}</p>
                  <p className={`text-sm ${log.error ? 'text-error' : 'text-on-surface-variant'}`}>{log.msg}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Help CTA */}
          <div className="p-6 bg-primary-soft rounded-xl border border-primary-soft flex gap-4">
            <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-primary">Need help with verification?</p>
              <p className="text-xs text-on-surface-variant mb-2">Our support team reviews ID documents within 24 hours.</p>
              <a className="text-xs font-black underline text-primary" href="#">Chat with support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
