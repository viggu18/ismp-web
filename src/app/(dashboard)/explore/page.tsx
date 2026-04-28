'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import {
  Search, Filter, DollarSign, Clock, Globe, ChevronRight,
  Instagram, Youtube, Layers, X, Loader2, AlertCircle, Inbox,
} from 'lucide-react';
import { api } from '@/lib/api';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';

// ─── Types ─────────────────────────────────────────────────────────────────

interface Campaign {
  id: string;
  title: string;
  description: string | null;
  status: string;
  platforms: string[];
  contentTypes: string[];
  niche: string | null;
  budgetMin: number | null;
  budgetMax: number | null;
  timeline: string | null;
  deadlineDate: string | null;
  minFollowers: number | null;
  languages: string[];
  targetCities: string[];
  visibility: string;
  createdAt: string;
}

// ─── Constants ─────────────────────────────────────────────────────────────

const PLATFORMS = ['INSTAGRAM', 'YOUTUBE', 'JOSH', 'MOJ', 'SHARECHAT'] as const;
const CONTENT_TYPES = ['REEL', 'STATIC_POST', 'STORY', 'YOUTUBE_VIDEO', 'SHORT', 'PODCAST'] as const;

const platformIcon: Record<string, React.ReactNode> = {
  INSTAGRAM: <Instagram size={14} />,
  YOUTUBE:   <Youtube size={14} />,
};
const platformLabel: Record<string, string> = {
  INSTAGRAM: 'Instagram', YOUTUBE: 'YouTube', JOSH: 'Josh', MOJ: 'Moj', SHARECHAT: 'ShareChat',
};
const contentLabel: Record<string, string> = {
  REEL: 'Reel', STATIC_POST: 'Static Post', STORY: 'Story', YOUTUBE_VIDEO: 'YouTube Video', SHORT: 'Short', PODCAST: 'Podcast',
};

function fmtBudget(min: number | null, max: number | null): string {
  if (!min && !max) return '—';
  if (min && max) return `₹${(min/100).toFixed(0)}K – ₹${(max/100).toFixed(0)}K`;
  if (min) return `From ₹${(min/100).toFixed(0)}K`;
  return `Up to ₹${(max!/100).toFixed(0)}K`;
}

function fmtFollowers(n: number | null): string {
  if (!n) return null!;
  if (n >= 1_000_000) return `${(n/1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${(n/1_000).toFixed(0)}K+`;
  return `${n}+`;
}

// ─── Campaign card ──────────────────────────────────────────────────────────

function CampaignCard({ c }: { c: Campaign }) {
  const initials = c.title.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();

  return (
    <Link
      href={`/campaigns/${c.id}`}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/30 hover:border-primary/30 transition-all group"
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-black text-primary text-sm flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">{c.title}</h3>
          {c.niche && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{c.niche}</p>}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 flex-shrink-0">
          Open
        </span>
      </div>

      {c.description && (
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">{c.description}</p>
      )}

      <div className="flex flex-wrap gap-2">
        {c.platforms.map(p => (
          <span key={p} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
            {platformIcon[p] ?? <Globe size={11} />} {platformLabel[p] ?? p}
          </span>
        ))}
        {c.contentTypes.slice(0,2).map(t => (
          <span key={t} className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
            {contentLabel[t] ?? t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-1 border-t border-slate-100 dark:border-slate-800 flex-wrap">
        {(c.budgetMin || c.budgetMax) && (
          <span className="flex items-center gap-1 text-xs font-bold text-primary">
            <DollarSign size={12} /> {fmtBudget(c.budgetMin, c.budgetMax)}
          </span>
        )}
        {c.minFollowers && (
          <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Layers size={12} /> {fmtFollowers(c.minFollowers)} followers
          </span>
        )}
        {c.deadlineDate && (
          <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Clock size={12} /> {new Date(c.deadlineDate).toLocaleDateString('en-IN', { day:'numeric', month:'short' })}
          </span>
        )}
        {c.languages.length > 0 && (
          <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Globe size={12} /> {c.languages.slice(0,2).join(', ')}
          </span>
        )}
      </div>
    </Link>
  );
}

// ─── Skeleton ───────────────────────────────────────────────────────────────

function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 animate-pulse">
      <div className="flex gap-4">
        <Skeleton className="w-11 h-11 rounded-xl flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-10 w-full" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </div>
  );
}

// ─── Filter pill ────────────────────────────────────────────────────────────

function Pill({
  label, active, onClick,
}: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${
        active
          ? 'bg-primary text-white shadow-sm shadow-primary/30'
          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
      }`}
    >
      {label}
    </button>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ExplorePage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState('');
  const [total,     setTotal]     = useState(0);
  const [page,      setPage]      = useState(1);
  const LIMIT = 12;

  // Filters
  const [search,      setSearch]      = useState('');
  const [platform,    setPlatform]    = useState('');
  const [contentType, setContentType] = useState('');
  const [niche,       setNiche]       = useState('');
  const [minBudget,   setMinBudget]   = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Debounce search
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const buildQuery = useCallback(() => {
    const q = new URLSearchParams();
    q.set('status', 'OPEN');
    q.set('page', String(page));
    q.set('limit', String(LIMIT));
    if (platform)    q.set('platform', platform);
    if (contentType) q.set('contentType', contentType);
    if (niche.trim()) q.set('niche', niche.trim());
    if (minBudget)   q.set('minBudget', minBudget);
    return q.toString();
  }, [page, platform, contentType, niche, minBudget]);

  const fetchCampaigns = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      // Shape: { success, message, data: { items: Campaign[], pagination: { total, page, limit, pages } } }
      const res = await api.get<{
        data: { items: Campaign[]; pagination: { total: number; page: number; limit: number } }
      }>(`/campaigns?${buildQuery()}`);
      const payload = res?.data;
      const items = Array.isArray(payload?.items) ? payload.items : [];
      setCampaigns(items);
      setTotal(payload?.pagination?.total ?? items.length);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed to load campaigns.');
    } finally {
      setLoading(false);
    }
  }, [buildQuery]);

  useEffect(() => {
    fetchCampaigns();
  }, [fetchCampaigns]);

  // When filters change reset to page 1
  useEffect(() => {
    setPage(1);
  }, [platform, contentType, niche, minBudget]);

  // Client-side search filter (backend doesn't support free-text search)
  const visible = search.trim()
    ? campaigns.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description?.toLowerCase().includes(search.toLowerCase()) ||
        c.niche?.toLowerCase().includes(search.toLowerCase())
      )
    : campaigns;

  const hasFilters = !!(platform || contentType || niche || minBudget);

  function clearFilters() {
    setPlatform(''); setContentType(''); setNiche(''); setMinBudget('');
  }

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">

      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-heading font-black text-slate-900 dark:text-white">Explore Campaigns</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          {loading ? 'Loading…' : `${total} open campaign${total !== 1 ? 's' : ''} available`}
        </p>
      </div>

      {/* Search + filter bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <Input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search campaigns, niches…"
            className="pl-9 h-11 bg-white dark:bg-slate-900"
          />
        </div>
        <Button
          variant={showFilters ? 'default' : 'outline'}
          onClick={() => setShowFilters(s => !s)}
          className="gap-2 h-11 font-bold flex-shrink-0"
        >
          <Filter size={15} />
          Filters
          {hasFilters && (
            <span className="bg-white/30 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full">
              {[platform, contentType, niche, minBudget].filter(Boolean).length}
            </span>
          )}
        </Button>
        {hasFilters && (
          <Button variant="ghost" onClick={clearFilters} className="gap-1 h-11 text-slate-500 flex-shrink-0">
            <X size={14} /> Clear
          </Button>
        )}
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-5 animate-in slide-in-from-top-2 duration-200">

          {/* Platform */}
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Platform</p>
            <div className="flex flex-wrap gap-2">
              <Pill label="All" active={!platform} onClick={() => setPlatform('')} />
              {PLATFORMS.map(p => (
                <Pill key={p} label={platformLabel[p]} active={platform === p} onClick={() => setPlatform(p === platform ? '' : p)} />
              ))}
            </div>
          </div>

          {/* Content type */}
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Content Type</p>
            <div className="flex flex-wrap gap-2">
              <Pill label="All" active={!contentType} onClick={() => setContentType('')} />
              {CONTENT_TYPES.map(t => (
                <Pill key={t} label={contentLabel[t]} active={contentType === t} onClick={() => setContentType(t === contentType ? '' : t)} />
              ))}
            </div>
          </div>

          {/* Niche + Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Niche</p>
              <Input
                value={niche}
                onChange={e => setNiche(e.target.value)}
                placeholder="Fashion, Tech, Food…"
                className="h-10 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Min Budget (₹)</p>
              <Input
                type="number"
                value={minBudget}
                onChange={e => setMinBudget(e.target.value)}
                placeholder="e.g. 5000"
                className="h-10 text-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-xl flex items-center gap-2">
          <AlertCircle size={16} /> {error}
        </div>
      )}

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}
        </div>
      ) : visible.length === 0 ? (
        <div className="flex flex-col items-center py-20 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <Inbox size={28} className="text-slate-400" />
          </div>
          <h2 className="font-heading font-black text-slate-900 dark:text-white text-xl">No campaigns found</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
            {hasFilters ? 'Try adjusting your filters.' : 'No open campaigns right now — check back soon.'}
          </p>
          {hasFilters && (
            <Button variant="outline" onClick={clearFilters} className="gap-2">
              <X size={14} /> Clear filters
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {visible.map(c => <CampaignCard key={c.id} c={c} />)}
        </div>
      )}

      {/* Pagination */}
      {!loading && total > LIMIT && (
        <div className="flex items-center justify-center gap-3 pt-4">
          <Button variant="outline" size="sm" disabled={page === 1} onClick={() => setPage(p => p - 1)} className="font-bold">
            ← Previous
          </Button>
          <span className="text-sm text-slate-500">
            Page {page} of {Math.ceil(total / LIMIT)}
          </span>
          <Button variant="outline" size="sm" disabled={page * LIMIT >= total} onClick={() => setPage(p => p + 1)} className="font-bold">
            Next →
          </Button>
        </div>
      )}
    </div>
  );
}
