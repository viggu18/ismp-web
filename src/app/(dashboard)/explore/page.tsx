'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search, Filter, BookmarkPlus, DollarSign,
  Clock, Users, ChevronRight, Sparkles,
  TrendingUp, Zap, Star, AlertCircle
} from 'lucide-react';

type Campaign = {
  id: string;
  title: string;
  brand: string;
  logo: string;
  cover: string;
  budget: string;
  budgetMin: number;
  categories: string[];
  deliverables: string[];
  deadline: string;
  spots: number;
  spotsLeft: number;
  requirements: string;
  featured?: boolean;
  trending?: boolean;
  match?: number; // % match score
};

const campaigns: Campaign[] = [
  {
    id: '1', title: 'Summer Vitality Collection', brand: 'Luxe Fragrances', logo: 'LF',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUmgcNrajZ90f-0P5wIaWyKJzZNW1YRMJp-sP8gU0j3g5tv_bDsatB86nd89WEqi5VmCgPdSvCpi02_OuEAjLU7LDCK72CCZA3OY8wGqzvycXGWnpsLpXKZ5j8UIRInCe1790RVaECDuPNJeltnibmz-lAyGBHlWV8tLbHFI4n3RGREV_1bliSJCoWFQjin231NyXWkh4_fBDr9eHvcks4pJ-8Ej71hr10iEXKkCntaLAHZorSc_tMZjJSHHeS49ipJK5je556Ycki',
    budget: '$2,400–$5,000', budgetMin: 2400, categories: ['Beauty', 'Lifestyle'],
    deliverables: ['1x Reel', '3x Stills', '1x Story Set'],
    deadline: 'Jun 20, 2024', spots: 5, spotsLeft: 2,
    requirements: '50K+ followers, Lifestyle/Beauty niche.', featured: true, trending: true, match: 95,
  },
  {
    id: '2', title: 'Autumn Minimalist Series', brand: 'Modern Home', logo: 'MH',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUtqjv_vkLzuuiuB8Zai3Uq_rKFAZwdi7K2tM6aCd-3p3gpxXX_m7cZf9jKDnxCw3GTQ94J8N0NnQkqlxFW8X_SSgvO_t7u7GavH4ROesPHm7OgRjVDuZMBWPwZEYQl81REA5UZ5LQYZcCAGySu03SNUUO2LO_5fpgJ1INR-BxjzFHXlGazAf4rn-69IXYGcRWqg4Lq5eVFnueS0pIOUWuK71imVJ1pORpW75JnCrsscjxvChWM6xV1hLlxAAd73IzyW12EHC4JGo',
    budget: '$1,800–$3,500', budgetMin: 1800, categories: ['Interior', 'Lifestyle'],
    deliverables: ['5x Stills', '2x Reels'],
    deadline: 'Jul 05, 2024', spots: 6, spotsLeft: 4,
    requirements: 'Interior / Home decor niche. Authentic spaces only.', match: 82,
  },
  {
    id: '3', title: 'Smart Home Unboxing Series', brand: 'Nexus Gear', logo: 'NG',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiV93SsLQ7S37cKmfp8ufDux8eEwJ7soQdRkVbQ4tQjNcYzz28ZW52mqeN00Zz5OpNBrhNPr5hc2P0F9Nsvan8uVDen5AYaRx9LXJ04d7f-hFWpz1TK5UrKvcPfQutcoXxGLy_oVkZhzjBqotmL5E9jEAb4J51470_ztl4uy-eOO9989ISyQRNyHZOufa2Op_P8WSCP5NxpqKp7RsEI13CW8kpmMjAKzQAVCQqx5aJ0_YjzoBeBDFeHUvcD8a4DvIRY3gUJjbUO27s',
    budget: '$1,200–$2,500', budgetMin: 1200, categories: ['Tech', 'Review'],
    deliverables: ['1x YouTube Video', '2x TikTok'],
    deadline: 'Aug 15, 2024', spots: 8, spotsLeft: 5,
    requirements: 'Tech niche, 80K+ YouTube subs or 100K TikTok.', trending: true, match: 61,
  },
  {
    id: '4', title: 'Performance Wear Launch', brand: 'Vantage Sportswear', logo: 'VS',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCMBr4lRI21US16H_VW9HciVkm-37i4RG7i9gtxBWYxw8DKA95dwHEbNOTtd0wK46TjRGe9ZPDS1wCpzOcW_yRF_4xvOISXzT_FO7jXCz6XHXV99-ZGtayax25wIbMxU55I89yhwsRX4xV5wSKMXZ0C6kBGjKMBZlnEs777k_WWvBhQK5AFoTAQhJhK00CLGJMkhimyYUXTm4PrMTB6Amksja9AP5_uEf31qOeiyu-1rDwNtkgih2D34XltY0fVV2vKQcc3yiKREii',
    budget: '$2,000–$4,500', budgetMin: 2000, categories: ['Sports', 'Fashion'],
    deliverables: ['3x Reels', '5x Stills'],
    deadline: 'Sep 10, 2024', spots: 10, spotsLeft: 7,
    requirements: 'Fitness/Sports niche, active lifestyle content.', featured: true, match: 74,
  },
  {
    id: '5', title: 'Morning Ritual Skincare', brand: 'PureSkin Labs', logo: 'PL',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARgFLopYdb3h4ARXEn2eT-8UV6SewjmUghN0NvJFyKwaQzmabnkU23Ihrsss7KH60sOl16ItmhbcEZBER18bTFhw9KFYzYuFbg6YwX5-MnElR_SbuchFeWqtwwxKMwYq0-0pCNNSiVZxU_VACc1sAi-lRf4kZ681AXFHuQQwkOvDXKr0fGVK5rqmAWytQZ3nWvzrPN6_NJOdBaz2FoOWE_xsKOq9CPGUCg7tvHh0JZf92WnFydOxYqk0xQz5t4QNHyFy9iRLCosdO3',
    budget: '$800–$1,500', budgetMin: 800, categories: ['Beauty', 'Wellness'],
    deliverables: ['4x Stills', '1x Reel', '2x Stories'],
    deadline: 'Sep 30, 2024', spots: 4, spotsLeft: 1,
    requirements: 'Skincare niche. Must show authentic morning routine.', match: 88,
  },
  {
    id: '6', title: 'Plant-Based Cooking Series', brand: 'GreenTable', logo: 'GT',
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjv1Ob8JQSyBfB71_S-eFIVcPMUj7l31VA900_fZYIzhBTrtNtU2NGnoZloEx88WTgG55HgUUdwc2MyuK4XNx7zIamMaHBCnwnGTUipVPmQjyh8OmJUgOwOUcxzZJR6WRHKkEMhlCNu8VX5TVjnvblvxrd6Q8Kc4UX7K_ojHT19hpT3gtCXbxVVBWr3yWRHamE69lS3OzRsbWHRQQHisYAsGoI_4VFYWEDO5hrazncio8veaMTCNTPzSco_AAgxJxLM7ZNADzvNBJ0',
    budget: '$600–$1,200', budgetMin: 600, categories: ['Food & Drink', 'Wellness'],
    deliverables: ['3x Recipe Reels', '6x Stills'],
    deadline: 'Oct 01, 2024', spots: 6, spotsLeft: 6,
    requirements: 'Food/Lifestyle niche. Plant-based diet content a plus.', match: 70,
  },
];

const CATEGORIES = ['All', 'Beauty', 'Lifestyle', 'Interior', 'Tech', 'Sports', 'Fashion', 'Wellness', 'Food & Drink'];
const SORT_OPTIONS = ['Best Match', 'Highest Budget', 'Deadline Soon', 'Spots Remaining'];

export default function ExplorePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Best Match');
  const [saved, setSaved] = useState<Set<string>>(new Set());

  const toggleSave = (id: string) =>
    setSaved((prev) => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });

  let filtered = campaigns.filter((c) => {
    const matchCat = category === 'All' || c.categories.includes(category);
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.brand.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  if (sort === 'Best Match')       filtered = [...filtered].sort((a, b) => (b.match ?? 0) - (a.match ?? 0));
  if (sort === 'Highest Budget')   filtered = [...filtered].sort((a, b) => b.budgetMin - a.budgetMin);
  if (sort === 'Spots Remaining')  filtered = [...filtered].sort((a, b) => a.spotsLeft - b.spotsLeft);

  const featured = filtered.filter(c => c.featured);
  const rest     = filtered.filter(c => !c.featured);

  return (
    <div className="p-8 pb-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles size={22} className="text-primary" />
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Explore Campaigns</h1>
        </div>
        <p className="text-on-surface-variant ml-9">Discover brand campaigns that match your content style and audience.</p>
      </div>

      {/* Search + Sort Bar */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
          <input
            className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-xl text-sm focus:ring-2 focus:ring-primary/20 outline-none"
            placeholder="Search campaigns or brands..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-3">
          <Filter size={14} className="text-outline" />
          <select
            className="bg-transparent text-sm font-bold text-on-surface outline-none py-2 pr-2 cursor-pointer"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 flex-wrap mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all outline-none ${
              category === cat
                ? 'bg-primary text-white shadow-sm'
                : 'bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant hover:border-primary/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-on-surface-variant">
          <AlertCircle size={48} className="mb-4 opacity-30" />
          <p className="font-bold text-lg">No campaigns found</p>
          <p className="text-sm">Try adjusting your search or category filter.</p>
        </div>
      ) : (
        <>
          {/* Featured Section */}
          {featured.length > 0 && search === '' && (
            <div className="mb-10">
              <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
                <Star size={12} className="text-primary" /> Featured Campaigns
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featured.map((c) => <CampaignCard key={c.id} campaign={c} saved={saved.has(c.id)} onSave={() => toggleSave(c.id)} featured />)}
              </div>
            </div>
          )}

          {/* All / Rest */}
          <div>
            {featured.length > 0 && search === '' && (
              <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
                <Zap size={12} /> More Campaigns
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {(search !== '' || featured.length === 0 ? filtered : rest).map((c) => (
                <CampaignCard key={c.id} campaign={c} saved={saved.has(c.id)} onSave={() => toggleSave(c.id)} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Campaign Card ────────────────────────────────────────────────────────────

function CampaignCard({ campaign: c, saved, onSave, featured }: { campaign: Campaign; saved: boolean; onSave: () => void; featured?: boolean }) {
  const urgentSpots = c.spotsLeft <= 2;
  return (
    <div className={`bg-surface-container-lowest rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex flex-col ${featured ? 'border-primary/20' : 'border-outline-variant/10'}`}>
      {/* Cover */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img src={c.cover} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {c.trending && (
            <span className="flex items-center gap-1 px-2 py-1 bg-black/40 backdrop-blur-sm text-white text-[9px] font-extrabold rounded-full uppercase tracking-wider">
              <TrendingUp size={9} /> Trending
            </span>
          )}
          {featured && (
            <span className="flex items-center gap-1 px-2 py-1 bg-primary/80 backdrop-blur-sm text-white text-[9px] font-extrabold rounded-full uppercase tracking-wider">
              <Star size={9} /> Featured
            </span>
          )}
        </div>

        {/* Save button */}
        <button
          onClick={onSave}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all outline-none ${saved ? 'bg-primary text-white' : 'bg-black/30 backdrop-blur-sm text-white hover:bg-black/50'}`}
        >
          <BookmarkPlus size={15} />
        </button>

        {/* Bottom */}
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-white/20 backdrop-blur-sm flex items-center justify-center font-black text-white text-[9px] border border-white/30">
              {c.logo}
            </div>
            <span className="text-white text-xs font-semibold">{c.brand}</span>
          </div>
          {c.match && (
            <span className={`text-[10px] font-extrabold px-2 py-1 rounded-full backdrop-blur-sm ${c.match >= 85 ? 'bg-secondary/80 text-white' : c.match >= 70 ? 'bg-white/20 text-white' : 'bg-black/30 text-white/80'}`}>
              {c.match}% match
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-base text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">{c.title}</h3>

        {/* Categories */}
        <div className="flex gap-1.5 flex-wrap mb-3">
          {c.categories.map((cat) => (
            <span key={cat} className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[9px] font-bold rounded-full uppercase tracking-wider">{cat}</span>
          ))}
        </div>

        {/* Deliverables */}
        <div className="mb-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1.5">Deliverables</p>
          <div className="flex flex-wrap gap-1">
            {c.deliverables.map((d) => (
              <span key={d} className="px-2 py-0.5 bg-primary-soft text-primary text-[9px] font-bold rounded-full">{d}</span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-outline-variant/10 mb-4 mt-auto">
          <div>
            <p className="text-[9px] font-bold uppercase text-on-surface-variant tracking-wider flex items-center gap-0.5"><DollarSign size={8} />Budget</p>
            <p className="font-extrabold text-xs text-on-surface mt-0.5">{c.budget}</p>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase text-on-surface-variant tracking-wider flex items-center gap-0.5"><Users size={8} />Spots Left</p>
            <p className={`font-extrabold text-xs mt-0.5 ${urgentSpots ? 'text-error' : 'text-on-surface'}`}>
              {c.spotsLeft} / {c.spots} {urgentSpots && '🔥'}
            </p>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase text-on-surface-variant tracking-wider flex items-center gap-0.5"><Clock size={8} />Deadline</p>
            <p className="font-extrabold text-xs text-on-surface mt-0.5">{c.deadline}</p>
          </div>
        </div>

        {/* Requirements */}
        <p className="text-[10px] text-on-surface-variant leading-relaxed mb-4">{c.requirements}</p>

        {/* CTA */}
        <div className="flex gap-2">
          <Link
            href={`/campaigns/${c.id}`}
            className="flex-1 py-2.5 text-center text-xs font-bold border border-outline-variant/30 rounded-xl text-on-surface hover:bg-surface-container-low transition-all"
          >
            View Brief
          </Link>
          <Link
            href={`/campaigns/${c.id}`}
            className="flex-1 py-2.5 text-center text-xs font-bold bg-gradient-to-br from-primary to-primary-light text-white rounded-xl shadow-sm hover:brightness-110 transition-all flex items-center justify-center gap-1"
          >
            Apply Now <ChevronRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
}
