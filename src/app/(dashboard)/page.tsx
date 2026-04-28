'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUp, ArrowDown, Layers, BarChart2, DollarSign, Bell,
  Instagram, Youtube, Globe, Briefcase, TrendingUp, Activity,
  Plus, ChevronRight, Loader2, AlertCircle,
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { api } from '@/lib/api';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

// ─── Types ─────────────────────────────────────────────────────────────────

interface SocialAccount {
  platform: string;
  handle: string;
  followerCount: number | null;
  engagementRate: number | null;
  isVerified: boolean;
}

interface InfluencerProfile {
  displayName: string;
  city: string | null;
  state: string | null;
  niches: string[];
  isAvailable: boolean;
  socialAccounts: SocialAccount[];
  ratecards: { priceInr: number }[];
}

interface Campaign {
  id: string;
  title: string;
  description: string | null;
  status: 'DRAFT' | 'OPEN' | 'CLOSED' | 'CANCELLED';
  budget: number | null;
  niches: string[];
  platforms: string[];
  createdAt: string;
}

interface Notification {
  id: string;
  type: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

interface EarningEntry {
  id: string;
  amountInr: number;
  settledAt: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────

function fmt(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

function fmtInr(n: number) {
  return `₹${n.toLocaleString('en-IN')}`;
}

const statusColor: Record<string, string> = {
  OPEN:      'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  DRAFT:     'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
  CLOSED:    'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
  CANCELLED: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
};

const platformIcon: Record<string, React.ReactNode> = {
  INSTAGRAM: <Instagram size={15} />,
  YOUTUBE:   <Youtube size={15} />,
};

// ─── Stat card ─────────────────────────────────────────────────────────────

function StatCard({
  label, value, sub, icon, accent,
}: {
  label: string; value: string; sub?: string; icon: React.ReactNode; accent?: string;
}) {
  return (
    <div className={`rounded-2xl p-6 space-y-3 ${accent ?? 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'}`}>
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accent ? 'bg-white/15' : 'bg-primary/10'}`}>
        <span className={accent ? 'text-white' : 'text-primary'}>{icon}</span>
      </div>
      <p className={`text-2xl font-heading font-black tracking-tight ${accent ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{value}</p>
      <div>
        <p className={`text-[10px] font-bold uppercase tracking-widest ${accent ? 'text-white/70' : 'text-slate-500 dark:text-slate-400'}`}>{label}</p>
        {sub && <p className={`text-xs mt-0.5 font-medium ${accent ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>{sub}</p>}
      </div>
    </div>
  );
}

// ─── Campaign card ──────────────────────────────────────────────────────────

function CampaignCard({ c }: { c: Campaign }) {
  return (
    <Link href={`/campaigns/${c.id}`}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none hover:border-primary/30 transition-all group block">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors truncate">{c.title}</h3>
          {c.description && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{c.description}</p>
          )}
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0 ${statusColor[c.status]}`}>
          {c.status}
        </span>
      </div>
      <div className="flex items-center gap-3 mt-4 flex-wrap">
        {c.budget && (
          <span className="flex items-center gap-1 text-xs font-semibold text-primary">
            <DollarSign size={12} /> {fmtInr(c.budget)}
          </span>
        )}
        {c.platforms.slice(0, 2).map(p => (
          <span key={p} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {platformIcon[p] ?? <Globe size={12} />} {p.toLowerCase()}
          </span>
        ))}
        {c.niches.slice(0, 2).map(n => (
          <Badge key={n} variant="secondary" className="text-[10px]">{n}</Badge>
        ))}
      </div>
    </Link>
  );
}

// ─── Notification row ───────────────────────────────────────────────────────

function NotifRow({ n }: { n: Notification }) {
  return (
    <div className={`flex gap-3 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0 ${!n.isRead ? 'opacity-100' : 'opacity-60'}`}>
      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${!n.isRead ? 'bg-primary' : 'bg-transparent'}`} />
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug">{n.message}</p>
        <p className="text-[10px] text-slate-400 mt-0.5">{new Date(n.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

// ─── Loading skeleton ───────────────────────────────────────────────────────

function DashSkeleton() {
  return (
    <div className="p-6 lg:p-10 space-y-8 animate-pulse">
      <div className="space-y-2">
        <Skeleton className="h-9 w-64" />
        <Skeleton className="h-4 w-48" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1,2,3,4].map(i => <Skeleton key={i} className="h-32 rounded-2xl" />)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {[1,2,3].map(i => <Skeleton key={i} className="h-24 rounded-2xl" />)}
        </div>
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    </div>
  );
}

// ─── Influencer dashboard ───────────────────────────────────────────────────

function InfluencerDashboard({ user }: { user: { email: string | null; phone: string } }) {
  const [profile,       setProfile]       = useState<InfluencerProfile | null>(null);
  const [campaigns,     setCampaigns]     = useState<Campaign[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [earnings,      setEarnings]      = useState<EarningEntry[]>([]);
  const [loading,       setLoading]       = useState(true);

  useEffect(() => {
    Promise.allSettled([
      api.get<unknown>('/influencers/me/profile'),
      api.get<unknown>('/campaigns?limit=4&status=OPEN'),
      api.get<unknown>('/notifications'),
      api.get<unknown>('/influencers/me/earnings-history'),
    ]).then(([profileRes, campRes, notifRes, earnRes]) => {
      const getData = (v: unknown) =>
        (v && typeof v === 'object' && 'data' in (v as object)) ? (v as { data: unknown }).data : v;

      const toArr = <T,>(v: unknown): T[] => {
        const d = getData(v);
        // campaigns endpoint returns { items, pagination }
        if (d && typeof d === 'object' && 'items' in (d as object)) {
          const items = (d as { items: unknown }).items;
          return Array.isArray(items) ? items : [];
        }
        return Array.isArray(d) ? d : [];
      };

      if (profileRes.status === 'fulfilled') setProfile(getData(profileRes.value) as InfluencerProfile | null);
      if (campRes.status    === 'fulfilled') setCampaigns(toArr<Campaign>(campRes.value));
      if (notifRes.status   === 'fulfilled') setNotifications(toArr<Notification>(notifRes.value));
      if (earnRes.status    === 'fulfilled') setEarnings(toArr<EarningEntry>(earnRes.value));
    }).finally(() => setLoading(false));
  }, []);

  if (loading) return <DashSkeleton />;

  const socials = profile?.socialAccounts ?? [];
  const totalFollowers = socials.reduce((s, a) => s + (a.followerCount ?? 0), 0);
  const avgEngagement  = socials.length
    ? socials.reduce((s, a) => s + (a.engagementRate ?? 0), 0) / socials.length
    : null;
  const totalEarned    = earnings.reduce((s, e) => s + e.amountInr, 0);
  const unreadCount    = notifications.filter(n => !n.isRead).length;

  const greeting = profile?.displayName
    ? `Welcome back, ${profile.displayName.split(' ')[0]}!`
    : `Welcome back!`;

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto space-y-10 animate-in fade-in duration-500">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-heading font-black text-slate-900 dark:text-white">{greeting}</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            {profile
              ? `${profile.niches.slice(0,2).join(' · ')} · ${[profile.city, profile.state].filter(Boolean).join(', ') || 'Location not set'}`
              : 'Set up your profile to get discovered by brands.'}
          </p>
        </div>
        {profile?.isAvailable !== undefined && (
          <Badge className={profile.isAvailable ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400' : ''}>
            {profile.isAvailable ? '🟢 Available' : '🔴 Unavailable'}
          </Badge>
        )}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label="Total Reach"
          value={totalFollowers ? fmt(totalFollowers) : '—'}
          sub={socials.length ? `${socials.length} platform${socials.length > 1 ? 's' : ''}` : 'No accounts linked'}
          icon={<Activity size={18} />}
          accent="bg-gradient-to-br from-primary to-orange-400"
        />
        <StatCard
          label="Avg. Engagement"
          value={avgEngagement ? `${avgEngagement.toFixed(1)}%` : '—'}
          sub="Across all platforms"
          icon={<BarChart2 size={18} />}
        />
        <StatCard
          label="Total Earned"
          value={totalEarned ? fmtInr(totalEarned) : '—'}
          sub={`${earnings.length} payouts`}
          icon={<DollarSign size={18} />}
        />
        <StatCard
          label="Notifications"
          value={String(unreadCount)}
          sub={`${notifications.length} total`}
          icon={<Bell size={18} />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Open campaigns */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-black text-lg text-slate-900 dark:text-white">Open Campaigns</h2>
            <Link href="/discover" className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
              Browse all <ChevronRight size={14} />
            </Link>
          </div>
          {campaigns.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center text-slate-400 text-sm">
              No open campaigns right now.
            </div>
          ) : (
            <div className="space-y-3">
              {campaigns.map(c => <CampaignCard key={c.id} c={c} />)}
            </div>
          )}
        </section>

        {/* Notifications + social accounts */}
        <section className="space-y-6">
          {/* Notifications */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-black text-sm text-slate-900 dark:text-white">Notifications</h2>
              <Link href="/notifications" className="text-primary text-xs font-bold hover:underline">View all</Link>
            </div>
            {notifications.length === 0 ? (
              <p className="text-sm text-slate-400 text-center py-4">You're all caught up.</p>
            ) : (
              notifications.slice(0, 5).map(n => <NotifRow key={n.id} n={n} />)
            )}
          </div>

          {/* Social accounts quick view */}
          {socials.length > 0 && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
              <h2 className="font-heading font-black text-sm text-slate-900 dark:text-white mb-4">Your Platforms</h2>
              <div className="space-y-3">
                {socials.map((a, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                        {platformIcon[a.platform] ?? <Globe size={12} />}
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{a.handle}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-500">{fmt(a.followerCount ?? 0)}</span>
                  </div>
                ))}
              </div>
              <Link href="/profile" className="mt-4 flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                Manage profile <ChevronRight size={12} />
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

// ─── Hirer dashboard ────────────────────────────────────────────────────────

function HirerDashboard({ user }: { user: { email: string | null; phone: string } }) {
  const [campaigns,     setCampaigns]     = useState<Campaign[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading,       setLoading]       = useState(true);

  useEffect(() => {
    const unwrapCampaigns = (v: unknown): Campaign[] => {
      // Shape: { data: { items: [], pagination: {} } }
      if (v && typeof v === 'object' && 'data' in (v as object)) {
        const d = (v as { data: unknown }).data;
        if (d && typeof d === 'object' && 'items' in (d as object)) {
          const items = (d as { items: unknown }).items;
          return Array.isArray(items) ? items : [];
        }
        return Array.isArray(d) ? d : [];
      }
      return Array.isArray(v) ? (v as Campaign[]) : [];
    };
    Promise.allSettled([
      api.get<unknown>('/campaigns/my'),
      api.get<unknown>('/notifications'),
    ]).then(([campRes, notifRes]) => {
      if (campRes.status  === 'fulfilled') setCampaigns(unwrapCampaigns(campRes.value));
      if (notifRes.status === 'fulfilled') {
        const v = notifRes.value;
        const d = (v && typeof v === 'object' && 'data' in (v as object)) ? (v as { data: unknown }).data : v;
        setNotifications(Array.isArray(d) ? d : []);
      }
    }).finally(() => setLoading(false));
  }, []);

  if (loading) return <DashSkeleton />;

  const openCampaigns   = campaigns.filter(c => c.status === 'OPEN').length;
  const draftCampaigns  = campaigns.filter(c => c.status === 'DRAFT').length;
  const closedCampaigns = campaigns.filter(c => c.status === 'CLOSED').length;
  const unreadCount     = notifications.filter(n => !n.isRead).length;

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto space-y-10 animate-in fade-in duration-500">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-heading font-black text-slate-900 dark:text-white">
            Welcome back{user.email ? `, ${user.email.split('@')[0]}` : ''}!
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Here's your campaign overview.</p>
        </div>
        <Button asChild className="gap-2 font-bold shadow-lg shadow-primary/20">
          <Link href="/campaigns/new"><Plus size={16} /> New Campaign</Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Campaigns" value={String(campaigns.length)} icon={<Layers size={18} />}
          accent="bg-gradient-to-br from-primary to-orange-400" />
        <StatCard label="Open"   value={String(openCampaigns)}   icon={<TrendingUp size={18} />} sub="Accepting applications" />
        <StatCard label="Draft"  value={String(draftCampaigns)}  icon={<Briefcase size={18} />}  sub="Not published yet" />
        <StatCard label="Unread Notifications" value={String(unreadCount)} icon={<Bell size={18} />} sub="Alerts for you" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Campaigns list */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-black text-lg text-slate-900 dark:text-white">Your Campaigns</h2>
            <Link href="/campaigns" className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
              Manage <ChevronRight size={14} />
            </Link>
          </div>
          {campaigns.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center space-y-4">
              <Briefcase size={36} className="mx-auto text-slate-300" />
              <p className="text-slate-500 text-sm">No campaigns yet. Create your first one.</p>
              <Button asChild size="sm" className="gap-2 font-bold">
                <Link href="/campaigns/new"><Plus size={14} /> Create Campaign</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {campaigns.slice(0, 5).map(c => <CampaignCard key={c.id} c={c} />)}
            </div>
          )}
        </section>

        {/* Notifications */}
        <section>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-black text-sm text-slate-900 dark:text-white">Notifications</h2>
              <Link href="/notifications" className="text-primary text-xs font-bold hover:underline">View all</Link>
            </div>
            {notifications.length === 0 ? (
              <p className="text-sm text-slate-400 text-center py-4">You're all caught up.</p>
            ) : (
              notifications.slice(0, 6).map(n => <NotifRow key={n.id} n={n} />)
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const user = useAuthStore(s => s.user);
  if (!user) return null;
  return user.role === 'HIRER'
    ? <HirerDashboard user={user} />
    : <InfluencerDashboard user={user} />;
}
