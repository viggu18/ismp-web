'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Clock, CheckCircle2, XCircle, MessageSquare,
  ChevronRight, Briefcase, TrendingUp, DollarSign,
  AlertCircle, FileText, Eye, MoreVertical
} from 'lucide-react';

type AppStatus = 'pending' | 'shortlisted' | 'negotiating' | 'hired' | 'rejected';

type Application = {
  id: string;
  campaignId: string;
  campaign: string;
  brand: string;
  logo: string;
  cover: string;
  status: AppStatus;
  appliedDate: string;
  lastUpdate: string;
  budget: string;
  categories: string[];
  note: string;
};

const applications: Application[] = [
  {
    id: 'a1', campaignId: '1',
    campaign: 'Summer Vitality Collection', brand: 'Luxe Fragrances', logo: 'LF',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUmgcNrajZ90f-0P5wIaWyKJzZNW1YRMJp-sP8gU0j3g5tv_bDsatB86nd89WEqi5VmCgPdSvCpi02_OuEAjLU7LDCK72CCZA3OY8wGqzvycXGWnpsLpXKZ5j8UIRInCe1790RVaECDuPNJeltnibmz-lAyGBHlWV8tLbHFI4n3RGREV_1bliSJCoWFQjin231NyXWkh4_fBDr9eHvcks4pJ-8Ej71hr10iEXKkCntaLAHZorSc_tMZjJSHHeS49ipJK5je556Ycki',
    status: 'negotiating', appliedDate: 'Oct 18, 2024', lastUpdate: '2h ago',
    budget: '$4,200', categories: ['Beauty', 'Lifestyle'],
    note: 'Draft #3 sent. Awaiting response on usage rights for stills.',
  },
  {
    id: 'a2', campaignId: '4',
    campaign: 'Morning Ritual Skincare', brand: 'PureSkin Labs', logo: 'PL',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARgFLopYdb3h4ARXEn2eT-8UV6SewjmUghN0NvJFyKwaQzmabnkU23Ihrsss7KH60sOl16ItmhbcEZBER18bTFhw9KFYzYuFbg6YwX5-MnElR_SbuchFeWqtwwxKMwYq0-0pCNNSiVZxU_VACc1sAi-lRf4kZ681AXFHuQQwkOvDXKr0fGVK5rqmAWytQZ3nWvzrPN6_NJOdBaz2FoOWE_xsKOq9CPGUCg7tvHh0JZf92WnFydOxYqk0xQz5t4QNHyFy9iRLCosdO3',
    status: 'shortlisted', appliedDate: 'Oct 22, 2024', lastUpdate: '1d ago',
    budget: '$1,200', categories: ['Beauty', 'Wellness'],
    note: 'You\'ve been shortlisted! The brand is reviewing your portfolio.',
  },
  {
    id: 'a3', campaignId: '2',
    campaign: 'Autumn Minimalist Series', brand: 'Modern Home', logo: 'MH',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUtqjv_vkLzuuiuB8Zai3Uq_rKFAZwdi7K2tM6aCd-3p3gpxXX_m7cZf9jKDnxCw3GTQ94J8N0NnQkqlxFW8X_SSgvO_t7u7GavH4ROesPHm7OgRjVDuZMBWPwZEYQl81REA5UZ5LQYZcCAGySu03SNUUO2LO_5fpgJ1INR-BxjzFHXlGazAf4rn-69IXYGcRWqg4Lq5eVFnueS0pIOUWuK71imVJ1pORpW75JnCrsscjxvChWM6xV1hLlxAAd73IzyW12EHC4JGo',
    status: 'pending', appliedDate: 'Oct 24, 2024', lastUpdate: '4h ago',
    budget: '$2,500', categories: ['Interior', 'Lifestyle'],
    note: 'Application submitted. Usually takes 3–5 days for review.',
  },
  {
    id: 'a4', campaignId: '5',
    campaign: 'Performance Wear Relaunch', brand: 'Vantage Sportswear', logo: 'VS',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCMBr4lRI21US16H_VW9HciVkm-37i4RG7i9gtxBWYxw8DKA95dwHEbNOTtd0wK46TjRGe9ZPDS1wCpzOcW_yRF_4xvOISXzT_FO7jXCz6XHXV99-ZGtayax25wIbMxU55I89yhwsRX4xV5wSKMXZ0C6kBGjKMBZlnEs777k_WWvBhQK5AFoTAQhJhK00CLGJMkhimyYUXTm4PrMTB6Amksja9AP5_uEf31qOeiyu-1rDwNtkgih2D34XltY0fVV2vKQcc3yiKREii',
    status: 'hired', appliedDate: 'Sep 30, 2024', lastUpdate: '3d ago',
    budget: '$3,500', categories: ['Sports', 'Fashion'],
    note: 'Offer accepted! Content shoot scheduled for Oct 28.',
  },
  {
    id: 'a5', campaignId: '3',
    campaign: 'Smart Home Unboxing Series', brand: 'Nexus Gear', logo: 'NG',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiV93SsLQ7S37cKmfp8ufDux8eEwJ7soQdRkVbQ4tQjNcYzz28ZW52mqeN00Zz5OpNBrhNPr5hc2P0F9Nsvan8uVDen5AYaRx9LXJ04d7f-hFWpz1TK5UrKvcPfQutcoXxGLy_oVkZhzjBqotmL5E9jEAb4J51470_ztl4uy-eOO9989ISyQRNyHZOufa2Op_P8WSCP5NxpqKp7RsEI13CW8kpmMjAKzQAVCQqx5aJ0_YjzoBeBDFeHUvcD8a4DvIRY3gUJjbUO27s',
    status: 'rejected', appliedDate: 'Oct 05, 2024', lastUpdate: '5d ago',
    budget: '$1,800', categories: ['Tech', 'Review'],
    note: 'Thank you for applying. The brand selected creators with a larger tech audience.',
  },
];

const statusConfig: Record<AppStatus, { label: string; color: string; bg: string; icon: React.ElementType; step: number }> = {
  pending:     { label: 'Under Review', color: 'text-outline',          bg: 'bg-surface-container',      icon: Clock,          step: 1 },
  shortlisted: { label: 'Shortlisted',  color: 'text-tertiary',         bg: 'bg-tertiary-container/30',  icon: Eye,            step: 2 },
  negotiating: { label: 'Negotiating',  color: 'text-primary',          bg: 'bg-primary-soft',           icon: MessageSquare,  step: 3 },
  hired:       { label: 'Hired 🎉',     color: 'text-secondary',        bg: 'bg-secondary/10',           icon: CheckCircle2,   step: 4 },
  rejected:    { label: 'Not Selected', color: 'text-error',            bg: 'bg-error-container/20',     icon: XCircle,        step: 0 },
};

const FILTERS: Array<'all' | AppStatus> = ['all', 'pending', 'shortlisted', 'negotiating', 'hired', 'rejected'];
const FILTER_LABELS: Record<string, string> = {
  all: 'All', pending: 'Under Review', shortlisted: 'Shortlisted',
  negotiating: 'Negotiating', hired: 'Hired', rejected: 'Not Selected',
};

const PIPELINE_STEPS = ['Applied', 'Shortlisted', 'Negotiating', 'Hired'];

export default function ApplicationsPage() {
  const [filter, setFilter] = useState<'all' | AppStatus>('all');

  const filtered = filter === 'all' ? applications : applications.filter(a => a.status === filter);

  const counts = {
    total: applications.length,
    active: applications.filter(a => ['pending','shortlisted','negotiating'].includes(a.status)).length,
    hired:  applications.filter(a => a.status === 'hired').length,
    earned: applications.filter(a => a.status === 'hired').reduce((sum, a) => sum + parseInt(a.budget.replace(/\D/g,'')), 0),
  };

  return (
    <div className="p-8 pb-20 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <Briefcase size={22} className="text-primary" />
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">My Applications</h1>
          </div>
          <p className="text-on-surface-variant ml-9">Track every campaign you&apos;ve applied to.</p>
        </div>
        <Link href="/explore" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-primary to-primary-light text-white rounded-xl font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all">
          Browse Campaigns <ChevronRight size={14} />
        </Link>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { icon: FileText,   label: 'Total Applied',  value: counts.total,           color: 'text-on-surface-variant bg-surface-container' },
          { icon: Clock,      label: 'In Progress',    value: counts.active,          color: 'text-primary bg-primary-soft' },
          { icon: CheckCircle2, label: 'Deals Landed', value: counts.hired,           color: 'text-secondary bg-secondary/10' },
          { icon: DollarSign, label: 'Total Earned',   value: `$${counts.earned.toLocaleString()}`, color: 'text-tertiary bg-tertiary-container/30' },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="bg-surface-container-lowest rounded-xl px-5 py-4 flex items-center gap-3 shadow-sm border border-outline-variant/10">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
              <Icon size={17} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant leading-none mb-0.5">{label}</p>
              <p className="text-xl font-extrabold text-on-surface">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {FILTERS.map((f) => {
          const count = f === 'all' ? applications.length : applications.filter(a => a.status === f).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all outline-none flex items-center gap-1.5 ${
                filter === f ? 'bg-primary text-white shadow-sm' : 'bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant hover:border-primary/30'
              }`}
            >
              {FILTER_LABELS[f]}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${filter === f ? 'bg-white/20' : 'bg-surface-container'}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Application Cards */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-on-surface-variant">
            <AlertCircle size={48} className="mb-4 opacity-30" />
            <p className="font-bold text-lg">No applications here</p>
            <p className="text-sm">Try a different filter or explore new campaigns.</p>
          </div>
        ) : (
          filtered.map((app) => {
            const { label, color, bg, icon: StatusIcon, step } = statusConfig[app.status];
            const isRejected = app.status === 'rejected';
            return (
              <div key={app.id} className={`bg-surface-container-lowest rounded-2xl border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden ${isRejected ? 'opacity-70 border-outline-variant/10' : 'border-outline-variant/10 hover:border-primary/20'}`}>
                <div className="flex">
                  {/* Cover strip */}
                  <div className="w-32 flex-shrink-0 relative overflow-hidden">
                    <img src={app.cover} alt={app.campaign} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-on-surface-variant">{app.brand}</span>
                          {app.categories.map(c => (
                            <span key={c} className="px-1.5 py-0.5 bg-surface-container text-on-surface-variant text-[9px] font-bold rounded uppercase tracking-wider">{c}</span>
                          ))}
                        </div>
                        <h3 className="font-bold text-lg text-on-surface leading-tight">{app.campaign}</h3>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${bg} ${color}`}>
                          <StatusIcon size={10} />
                          {label}
                        </span>
                        <button className="p-1.5 text-outline hover:text-on-surface transition-colors outline-none">
                          <MoreVertical size={15} />
                        </button>
                      </div>
                    </div>

                    {/* Pipeline tracker (not for rejected) */}
                    {!isRejected && (
                      <div className="mt-4 mb-3">
                        <div className="flex items-center gap-0">
                          {PIPELINE_STEPS.map((s, i) => {
                            const done   = step > i + 1;
                            const active = step === i + 1;
                            return (
                              <React.Fragment key={s}>
                                <div className="flex flex-col items-center">
                                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-extrabold border-2 transition-colors ${
                                    done   ? 'bg-secondary border-secondary text-white' :
                                    active ? 'bg-primary border-primary text-white' :
                                             'bg-white border-outline-variant text-outline'
                                  }`}>
                                    {done ? '✓' : i + 1}
                                  </div>
                                  <span className={`text-[9px] font-bold mt-1 whitespace-nowrap ${active ? 'text-primary' : done ? 'text-secondary' : 'text-outline'}`}>{s}</span>
                                </div>
                                {i < PIPELINE_STEPS.length - 1 && (
                                  <div className={`flex-1 h-0.5 mb-3.5 mx-1 transition-colors ${done ? 'bg-secondary' : 'bg-outline-variant/30'}`} />
                                )}
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Note */}
                    <p className={`text-xs leading-relaxed mb-3 ${isRejected ? 'text-outline' : 'text-on-surface-variant'}`}>
                      {app.note}
                    </p>

                    {/* Footer row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-[10px] text-on-surface-variant font-bold">
                        <span className="flex items-center gap-1"><TrendingUp size={10} /> {app.budget}</span>
                        <span className="flex items-center gap-1"><Clock size={10} /> Applied {app.appliedDate}</span>
                        <span className="text-outline">Updated {app.lastUpdate}</span>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/campaigns/${app.campaignId}`} className="px-3 py-1.5 text-xs font-bold border border-outline-variant/30 rounded-lg text-on-surface hover:bg-surface-container-low transition-all">
                          View Brief
                        </Link>
                        {app.status === 'negotiating' && (
                          <Link href={`/campaigns/${app.campaignId}/negotiate`} className="px-3 py-1.5 text-xs font-bold bg-gradient-to-br from-primary to-primary-light text-white rounded-lg shadow-sm hover:brightness-110 transition-all flex items-center gap-1">
                            <MessageSquare size={11} /> Negotiate
                          </Link>
                        )}
                        {app.status === 'hired' && (
                          <button className="px-3 py-1.5 text-xs font-bold bg-secondary/10 text-secondary rounded-lg border border-secondary/20 hover:bg-secondary/20 transition-all outline-none flex items-center gap-1">
                            <FileText size={11} /> View Contract
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
