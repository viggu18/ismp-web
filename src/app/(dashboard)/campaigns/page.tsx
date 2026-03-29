'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Plus, Search, Filter, MoreVertical,
  TrendingUp, Users, Clock, CheckCircle2,
  XCircle, AlertCircle, BarChart2, ChevronRight
} from 'lucide-react';

type CampaignStatus = 'active' | 'draft' | 'completed' | 'paused';

const campaigns = [
  {
    id: '1',
    title: 'Summer Vitality Collection',
    brand: 'Luxe Fragrances',
    abbr: 'LF',
    status: 'active' as CampaignStatus,
    budget: '$24,000',
    spent: '$8,400',
    progress: 35,
    applicants: 18,
    hired: 4,
    deadline: 'Jun 20, 2024',
    categories: ['Lifestyle', 'Beauty'],
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUmgcNrajZ90f-0P5wIaWyKJzZNW1YRMJp-sP8gU0j3g5tv_bDsatB86nd89WEqi5VmCgPdSvCpi02_OuEAjLU7LDCK72CCZA3OY8wGqzvycXGWnpsLpXKZ5j8UIRInCe1790RVaECDuPNJeltnibmz-lAyGBHlWV8tLbHFI4n3RGREV_1bliSJCoWFQjin231NyXWkh4_fBDr9eHvcks4pJ-8Ej71hr10iEXKkCntaLAHZorSc_tMZjJSHHeS49ipJK5je556Ycki',
  },
  {
    id: '2',
    title: 'Autumn Minimalist Series',
    brand: 'Modern Home',
    abbr: 'MH',
    status: 'active' as CampaignStatus,
    budget: '$15,000',
    spent: '$9,750',
    progress: 65,
    applicants: 31,
    hired: 6,
    deadline: 'Jul 05, 2024',
    categories: ['Interior', 'Lifestyle'],
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUtqjv_vkLzuuiuB8Zai3Uq_rKFAZwdi7K2tM6aCd-3p3gpxXX_m7cZf9jKDnxCw3GTQ94J8N0NnQkqlxFW8X_SSgvO_t7u7GavH4ROesPHm7OgRjVDuZMBWPwZEYQl81REA5UZ5LQYZcCAGySu03SNUUO2LO_5fpgJ1INR-BxjzFHXlGazAf4rn-69IXYGcRWqg4Lq5eVFnueS0pIOUWuK71imVJ1pORpW75JnCrsscjxvChWM6xV1hLlxAAd73IzyW12EHC4JGo',
  },
  {
    id: '3',
    title: 'Smart Home Unboxing Series',
    brand: 'Nexus Gear',
    abbr: 'NG',
    status: 'draft' as CampaignStatus,
    budget: '$8,500',
    spent: '$0',
    progress: 0,
    applicants: 0,
    hired: 0,
    deadline: 'Aug 15, 2024',
    categories: ['Tech', 'Review'],
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiV93SsLQ7S37cKmfp8ufDux8eEwJ7soQdRkVbQ4tQjNcYzz28ZW52mqeN00Zz5OpNBrhNPr5hc2P0F9Nsvan8uVDen5AYaRx9LXJ04d7f-hFWpz1TK5UrKvcPfQutcoXxGLy_oVkZhzjBqotmL5E9jEAb4J51470_ztl4uy-eOO9989ISyQRNyHZOufa2Op_P8WSCP5NxpqKp7RsEI13CW8kpmMjAKzQAVCQqx5aJ0_YjzoBeBDFeHUvcD8a4DvIRY3gUJjbUO27s',
  },
  {
    id: '4',
    title: 'Performance Wear Launch',
    brand: 'Vantage Sportswear',
    abbr: 'VS',
    status: 'completed' as CampaignStatus,
    budget: '$32,000',
    spent: '$31,200',
    progress: 100,
    applicants: 52,
    hired: 10,
    deadline: 'May 01, 2024',
    categories: ['Sports', 'Fashion'],
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCMBr4lRI21US16H_VW9HciVkm-37i4RG7i9gtxBWYxw8DKA95dwHEbNOTtd0wK46TjRGe9ZPDS1wCpzOcW_yRF_4xvOISXzT_FO7jXCz6XHXV99-ZGtayax25wIbMxU55I89yhwsRX4xV5wSKMXZ0C6kBGjKMBZlnEs777k_WWvBhQK5AFoTAQhJhK00CLGJMkhimyYUXTm4PrMTB6Amksja9AP5_uEf31qOeiyu-1rDwNtkgih2D34XltY0fVV2vKQcc3yiKREii',
  },
  {
    id: '5',
    title: 'Morning Ritual Skincare',
    brand: 'PureSkin Labs',
    abbr: 'PL',
    status: 'paused' as CampaignStatus,
    budget: '$11,000',
    spent: '$3,200',
    progress: 29,
    applicants: 14,
    hired: 2,
    deadline: 'Sep 10, 2024',
    categories: ['Beauty', 'Wellness'],
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARgFLopYdb3h4ARXEn2eT-8UV6SewjmUghN0NvJFyKwaQzmabnkU23Ihrsss7KH60sOl16ItmhbcEZBER18bTFhw9KFYzYuFbg6YwX5-MnElR_SbuchFeWqtwwxKMwYq0-0pCNNSiVZxU_VACc1sAi-lRf4kZ681AXFHuQQwkOvDXKr0fGVK5rqmAWytQZ3nWvzrPN6_NJOdBaz2FoOWE_xsKOq9CPGUCg7tvHh0JZf92WnFydOxYqk0xQz5t4QNHyFy9iRLCosdO3',
  },
];

const statusConfig: Record<CampaignStatus, { label: string; color: string; icon: React.ElementType }> = {
  active:    { label: 'Active',    color: 'bg-secondary/10 text-secondary',          icon: CheckCircle2 },
  draft:     { label: 'Draft',     color: 'bg-surface-container-highest text-outline', icon: AlertCircle },
  completed: { label: 'Completed', color: 'bg-primary-soft text-primary',             icon: CheckCircle2 },
  paused:    { label: 'Paused',    color: 'bg-error-container/40 text-error',          icon: XCircle },
};

const filters: Array<{ key: 'all' | CampaignStatus; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'draft', label: 'Drafts' },
  { key: 'completed', label: 'Completed' },
  { key: 'paused', label: 'Paused' },
];

export default function CampaignsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | CampaignStatus>('all');
  const [search, setSearch] = useState('');

  const filtered = campaigns.filter((c) => {
    const matchesFilter = activeFilter === 'all' || c.status === activeFilter;
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.brand.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totals = {
    active: campaigns.filter((c) => c.status === 'active').length,
    budget: '$90,500',
    applicants: campaigns.reduce((a, c) => a + c.applicants, 0),
  };

  return (
    <div className="p-8 pb-20 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Campaigns</h1>
          <p className="text-on-surface-variant mt-1">Manage all your influencer campaigns in one place.</p>
        </div>
        <Link
          href="/campaigns/new"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-light text-white rounded-xl font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all text-sm"
        >
          <Plus size={18} />
          Create Campaign
        </Link>
      </div>

      {/* Summary Strip */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { LucideIcon: BarChart2, label: 'Active Campaigns', value: totals.active },
          { LucideIcon: TrendingUp, label: 'Total Budget Allocated', value: totals.budget },
          { LucideIcon: Users, label: 'Total Applicants', value: totals.applicants },
        ].map(({ LucideIcon, label, value }, i) => (
          <div key={i} className="bg-surface-container-lowest rounded-xl px-6 py-5 flex items-center gap-4 shadow-sm border border-outline-variant/10">
            <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center">
              <LucideIcon size={20} className="text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{label}</p>
              <p className="text-2xl font-extrabold text-on-surface">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
          <input
            className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"
            placeholder="Search campaigns or brands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-1">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                activeFilter === f.key
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <button className="px-4 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-xl flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low transition-all outline-none">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Campaign Cards Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-on-surface-variant">
          <AlertCircle size={48} className="mb-4 opacity-30" />
          <p className="font-bold text-lg">No campaigns found</p>
          <p className="text-sm">Try adjusting your search or filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((campaign) => {
            const { label, color, icon: StatusIcon } = statusConfig[campaign.status];
            return (
              <div
                key={campaign.id}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex flex-col"
              >
                {/* Cover */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={campaign.cover}
                    alt={campaign.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 backdrop-blur-sm ${color} bg-white/90`}>
                      <StatusIcon size={10} />
                      {label}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-white text-xs border border-white/30">
                      {campaign.abbr}
                    </div>
                    <span className="text-white text-xs font-semibold">{campaign.brand}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-on-surface group-hover:text-primary transition-colors leading-tight mb-3">
                    {campaign.title}
                  </h3>

                  {/* Categories */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {campaign.categories.map((cat) => (
                      <span key={cat} className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Progress */}
                  {campaign.status !== 'draft' && (
                    <div className="mb-4">
                      <div className="flex justify-between text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">
                        <span>Budget Used</span>
                        <span>{campaign.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${campaign.status === 'completed' ? 'bg-secondary' : 'bg-primary'}`}
                          style={{ width: `${campaign.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-[10px] text-on-surface-variant mt-1">
                        <span>{campaign.spent} spent</span>
                        <span>{campaign.budget} total</span>
                      </div>
                    </div>
                  )}

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 mb-5 pt-3 border-t border-outline-variant/10">
                    <div className="text-center">
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Budget</p>
                      <p className="font-bold text-sm text-on-surface">{campaign.budget}</p>
                    </div>
                    <div className="text-center border-x border-outline-variant/10">
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider flex items-center justify-center gap-1">
                        <Users size={9} /> Applied
                      </p>
                      <p className="font-bold text-sm text-on-surface">{campaign.applicants}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider flex items-center justify-center gap-1">
                        <Clock size={9} /> Deadline
                      </p>
                      <p className="font-bold text-xs text-on-surface">{campaign.deadline}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex gap-2">
                    <Link
                      href={`/campaigns/${campaign.id}`}
                      className="flex-1 py-2.5 text-center text-xs font-bold border border-outline-variant/30 rounded-lg text-on-surface hover:bg-surface-container-low transition-all"
                    >
                      View Brief
                    </Link>
                    <Link
                      href={`/campaigns/${campaign.id}/negotiate`}
                      className="flex-1 py-2.5 text-center text-xs font-bold bg-gradient-to-br from-primary to-primary-light text-white rounded-lg shadow-sm hover:brightness-110 transition-all flex items-center justify-center gap-1"
                    >
                      Negotiate <ChevronRight size={12} />
                    </Link>
                    <button className="p-2.5 border border-outline-variant/30 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-all outline-none">
                      <MoreVertical size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
