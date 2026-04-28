'use client';
import React, { useEffect, useState } from 'react';
import {
  User, Mail, Phone, MapPin, Globe, ShieldCheck,
  Instagram, Youtube, Edit3, ExternalLink,
  Layers, BarChart2, DollarSign, Activity, X, Plus, Trash2, Check,
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { api } from '@/lib/api';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';

// ─── Types ────────────────────────────────────────────────────────────────────

interface SocialAccount {
  id: string;
  platform: 'INSTAGRAM' | 'YOUTUBE' | 'JOSH' | 'MOJ' | 'SHARECHAT';
  handle: string;
  profileUrl: string | null;
  followerCount: number | null;
  engagementRate: number | null;
  isVerified: boolean;
}

interface RateCard {
  id: string;
  platform: string;
  contentType: string;
  priceInr: number;
}

interface InfluencerProfile {
  id: string;
  displayName: string;
  avatarUrl: string | null;
  bio: string | null;
  city: string | null;
  state: string | null;
  languages: string[];
  niches: string[];
  gender: string | null;
  isAvailable: boolean;
  socialAccounts: SocialAccount[];
  ratecards: RateCard[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const platformIcon: Record<string, React.ReactNode> = {
  INSTAGRAM: <Instagram size={16} />,
  YOUTUBE:   <Youtube size={16} />,
  JOSH:      <span className="text-[10px] font-black">J</span>,
  MOJ:       <span className="text-[10px] font-black">M</span>,
  SHARECHAT: <span className="text-[10px] font-black">SC</span>,
};

const contentTypeLabel: Record<string, string> = {
  REEL: 'Reel', STATIC_POST: 'Static Post', STORY: 'Story Set',
  YOUTUBE_VIDEO: 'YouTube Video', SHORT: 'YouTube Short', PODCAST: 'Podcast',
};

function formatFollowers(n: number | null): string {
  if (!n) return '—';
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

// ─── Setup / Edit Modal ───────────────────────────────────────────────────────

interface SetupModalProps {
  initial?: InfluencerProfile | null;
  onClose: () => void;
  onSaved: (p: InfluencerProfile) => void;
}

function SetupModal({ initial, onClose, onSaved }: SetupModalProps) {
  const [form, setForm] = useState({
    displayName: initial?.displayName ?? '',
    bio:         initial?.bio ?? '',
    city:        initial?.city ?? '',
    state:       initial?.state ?? '',
    avatarUrl:   initial?.avatarUrl ?? '',
    gender:      initial?.gender ?? '',
    isAvailable: initial?.isAvailable ?? true,
    languages:   initial?.languages.join(', ') ?? '',
    niches:      initial?.niches.join(', ') ?? '',
  });
  const [saving, setSaving] = useState(false);
  const [error,  setError]  = useState('');

  function set(k: string, v: string | boolean) {
    setForm(f => ({ ...f, [k]: v }));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!form.displayName.trim()) { setError('Display name required.'); return; }
    const langs = form.languages.split(',').map(s => s.trim()).filter(Boolean);
    const nicheArr = form.niches.split(',').map(s => s.trim()).filter(Boolean);
    if (!langs.length) { setError('At least one language required.'); return; }
    if (!nicheArr.length) { setError('At least one niche required.'); return; }

    setSaving(true);
    try {
      const res = await api.put<{ data: InfluencerProfile }>('/influencers/me/profile', {
        displayName: form.displayName.trim(),
        bio:         form.bio.trim() || null,
        city:        form.city.trim() || null,
        state:       form.state.trim() || null,
        avatarUrl:   form.avatarUrl.trim() || null,
        gender:      form.gender.trim() || null,
        isAvailable: form.isAvailable,
        languages:   langs,
        niches:      nicheArr,
      });
      onSaved(res.data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Save failed.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-7 pt-7 pb-4 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-xl font-heading font-black text-slate-900 dark:text-white">
            {initial ? 'Edit Profile' : 'Set Up Your Profile'}
          </h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-7 space-y-5">
          {/* Display Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Display Name *</label>
            <Input value={form.displayName} onChange={e => set('displayName', e.target.value)} placeholder="Elena Vance" className="h-11" />
          </div>

          {/* Bio */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Bio</label>
            <textarea
              value={form.bio}
              onChange={e => set('bio', e.target.value)}
              placeholder="Tell brands about yourself..."
              rows={3}
              className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
          </div>

          {/* City / State */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">City</label>
              <Input value={form.city} onChange={e => set('city', e.target.value)} placeholder="Mumbai" className="h-11" />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">State</label>
              <Input value={form.state} onChange={e => set('state', e.target.value)} placeholder="Maharashtra" className="h-11" />
            </div>
          </div>

          {/* Avatar URL */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Avatar URL</label>
            <Input value={form.avatarUrl} onChange={e => set('avatarUrl', e.target.value)} placeholder="https://..." className="h-11" />
          </div>

          {/* Gender */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Gender</label>
            <Input value={form.gender} onChange={e => set('gender', e.target.value)} placeholder="Male / Female / Non-binary" className="h-11" />
          </div>

          {/* Languages */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Languages * <span className="normal-case font-normal">(comma separated)</span></label>
            <Input value={form.languages} onChange={e => set('languages', e.target.value)} placeholder="English, Hindi, Tamil" className="h-11" />
          </div>

          {/* Niches */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Niches * <span className="normal-case font-normal">(comma separated)</span></label>
            <Input value={form.niches} onChange={e => set('niches', e.target.value)} placeholder="Lifestyle, Fashion, Tech" className="h-11" />
          </div>

          {/* Available toggle */}
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <button
              type="button"
              onClick={() => set('isAvailable', !form.isAvailable)}
              className={`w-11 h-6 rounded-full transition-colors flex-shrink-0 relative ${form.isAvailable ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${form.isAvailable ? 'translate-x-5' : ''}`} />
            </button>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Available for collaborations</span>
          </label>

          {error && (
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">{error}</div>
          )}

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 h-11">Cancel</Button>
            <Button type="submit" disabled={saving} className="flex-1 h-11 font-bold gap-2">
              {saving ? (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
              ) : <><Check size={16} /> Save Profile</>}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatBadge({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">{icon}</div>
      <p className="text-2xl font-heading font-black text-slate-900 dark:text-white tracking-tight">{value}</p>
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}

function SocialRow({ account }: { account: SocialAccount }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-slate-100 dark:border-slate-800 last:border-0">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
          {platformIcon[account.platform] ?? <Globe size={14} />}
        </div>
        <div>
          <p className="font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
            {account.handle}
            {account.isVerified && <ShieldCheck size={13} className="text-primary" />}
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{account.platform}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-sm text-slate-900 dark:text-white">{formatFollowers(account.followerCount)}</p>
        {account.engagementRate && (
          <p className="text-[10px] text-green-500 font-semibold">{account.engagementRate.toFixed(1)}% eng.</p>
        )}
      </div>
    </div>
  );
}

function ProfileSkeleton() {
  return (
    <div className="space-y-8 p-6 lg:p-10 animate-pulse">
      <div className="flex gap-6 items-center">
        <Skeleton className="w-24 h-24 rounded-full" />
        <div className="space-y-3 flex-1">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-64" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1,2,3,4].map(i => <Skeleton key={i} className="h-32 rounded-2xl" />)}
      </div>
    </div>
  );
}

function HirerProfile({ user }: { user: { email: string | null; phone: string; isVerified: boolean } }) {
  return (
    <div className="p-6 lg:p-10 space-y-8">
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-black">
          {user.email ? user.email[0].toUpperCase() : '?'}
        </div>
        <div>
          <h1 className="text-3xl font-heading font-black text-slate-900 dark:text-white">{user.email ?? user.phone}</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider">Hirer</Badge>
            {user.isVerified && (
              <span className="flex items-center gap-1 text-[10px] font-bold text-green-500 uppercase tracking-wider">
                <ShieldCheck size={12} /> Verified
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-center gap-4">
          <Mail size={18} className="text-slate-400" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</p>
            <p className="font-semibold text-sm text-slate-900 dark:text-white">{user.email ?? '—'}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-center gap-4">
          <Phone size={18} className="text-slate-400" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone</p>
            <p className="font-semibold text-sm text-slate-900 dark:text-white">{user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function ProfilePage() {
  const user = useAuthStore(s => s.user);
  const [profile,     setProfile]     = useState<InfluencerProfile | null>(null);
  const [isLoading,   setIsLoading]   = useState(true);
  const [showSetup,   setShowSetup]   = useState(false);

  useEffect(() => {
    if (!user) return;
    if (user.role !== 'INFLUENCER') { setIsLoading(false); return; }

    api.get<{ data: InfluencerProfile | null }>('/influencers/me/profile')
      .then(res => setProfile(res.data))
      .catch(() => setProfile(null))
      .finally(() => setIsLoading(false));
  }, [user]);

  if (isLoading) return <ProfileSkeleton />;
  if (!user)     return null;
  if (user.role === 'HIRER') return <HirerProfile user={user} />;

  // ── Empty state ───────────────────────────────────────────────────────────────
  if (!profile) {
    return (
      <>
        <div className="flex flex-col items-center justify-center py-24 text-center space-y-4 px-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <User size={36} className="text-primary opacity-60" />
          </div>
          <h2 className="text-2xl font-heading font-black text-slate-900 dark:text-white">Profile not set up yet</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm">
            Complete your influencer profile to start getting discovered by brands.
          </p>
          <Button className="mt-4 font-bold gap-2" onClick={() => setShowSetup(true)}>
            <Edit3 size={16} /> Set Up Profile
          </Button>
        </div>
        {showSetup && (
          <SetupModal
            onClose={() => setShowSetup(false)}
            onSaved={p => {
              // PUT response omits socialAccounts/ratecards — preserve existing
              setProfile(prev => ({
                socialAccounts: prev?.socialAccounts ?? [],
                ratecards:      prev?.ratecards ?? [],
                ...p,
              }));
              setShowSetup(false);
            }}
          />
        )}
      </>
    );
  }

  // ── Full profile ──────────────────────────────────────────────────────────────
  const socialAccounts = profile.socialAccounts ?? [];
  const ratecards      = profile.ratecards ?? [];
  const totalFollowers = socialAccounts.reduce((s, a) => s + (a.followerCount ?? 0), 0);
  const avgEngagement  = socialAccounts.length
    ? socialAccounts.reduce((s, a) => s + (a.engagementRate ?? 0), 0) / socialAccounts.length
    : null;

  const initials = profile.displayName.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();

  return (
    <>
      <div className="p-6 lg:p-10 max-w-5xl mx-auto space-y-10 animate-in fade-in duration-500">

        {/* Hero */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {profile.avatarUrl ? (
            <img src={profile.avatarUrl} alt={profile.displayName}
              className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-lg" />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-black shadow-lg">
              {initials}
            </div>
          )}
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-heading font-black text-slate-900 dark:text-white">{profile.displayName}</h1>
              {user.isVerified && (
                <span className="flex items-center gap-1 text-xs font-bold text-green-500">
                  <ShieldCheck size={14} /> Verified
                </span>
              )}
              <Badge variant={profile.isAvailable ? 'default' : 'secondary'}
                className={`text-[10px] font-bold uppercase tracking-wider ${profile.isAvailable ? 'bg-green-500/10 text-green-600 border-green-200' : ''}`}>
                {profile.isAvailable ? 'Available' : 'Unavailable'}
              </Badge>
            </div>
            {(profile.city || profile.state) && (
              <p className="flex items-center gap-1.5 text-slate-500 text-sm">
                <MapPin size={14} /> {[profile.city, profile.state].filter(Boolean).join(', ')}
              </p>
            )}
            {profile.bio && <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-2xl">{profile.bio}</p>}
            {profile.niches.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {profile.niches.map(n => <Badge key={n} variant="secondary" className="text-[10px] font-bold uppercase tracking-wider">{n}</Badge>)}
              </div>
            )}
          </div>
          <Button variant="outline" size="sm" className="gap-2 self-start" onClick={() => setShowSetup(true)}>
            <Edit3 size={14} /> Edit Profile
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBadge label="Total Reach"     value={formatFollowers(totalFollowers)} icon={<Activity size={18} />} />
          <StatBadge label="Avg. Engagement" value={avgEngagement ? `${avgEngagement.toFixed(1)}%` : '—'} icon={<BarChart2 size={18} />} />
          <StatBadge label="Platforms"       value={String(socialAccounts.length)} icon={<Layers size={18} />} />
          <StatBadge label="Rate Cards"      value={String(ratecards.length)} icon={<DollarSign size={18} />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Social accounts */}
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
            <h2 className="font-heading font-black text-slate-900 dark:text-white mb-4">Social Platforms</h2>
            {socialAccounts.length === 0 ? (
              <p className="text-sm text-slate-400 py-6 text-center">No platforms linked yet.</p>
            ) : (
              socialAccounts.map(a => <SocialRow key={a.id} account={a} />)
            )}
          </section>

          {/* Account info + rates */}
          <section className="space-y-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
              <h2 className="font-heading font-black text-slate-900 dark:text-white mb-2">Account Info</h2>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={15} className="text-slate-400 flex-shrink-0" />
                <span className="text-slate-400 w-20 text-xs font-bold uppercase tracking-wider">Email</span>
                <span className="font-medium text-slate-900 dark:text-white">{user.email ?? '—'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={15} className="text-slate-400 flex-shrink-0" />
                <span className="text-slate-400 w-20 text-xs font-bold uppercase tracking-wider">Phone</span>
                <span className="font-medium text-slate-900 dark:text-white">{user.phone}</span>
              </div>
              {profile.languages.length > 0 && (
                <div className="flex items-start gap-3 text-sm">
                  <Globe size={15} className="text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 w-20 text-xs font-bold uppercase tracking-wider mt-0.5">Languages</span>
                  <div className="flex flex-wrap gap-1.5">
                    {profile.languages.map(l => <Badge key={l} variant="secondary" className="text-[10px]">{l}</Badge>)}
                  </div>
                </div>
              )}
            </div>

            {ratecards.length > 0 && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                <h2 className="font-heading font-black text-slate-900 dark:text-white mb-4">Rate Card</h2>
                <div className="space-y-3">
                  {ratecards.map(rc => (
                    <div key={rc.id} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{contentTypeLabel[rc.contentType] ?? rc.contentType}</p>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{rc.platform}</p>
                      </div>
                      <span className="font-black text-primary text-sm">₹{rc.priceInr.toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {socialAccounts.some(a => a.profileUrl) && (
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3">
                <h2 className="font-heading font-black text-slate-900 dark:text-white mb-2">Links</h2>
                {socialAccounts.filter(a => a.profileUrl).map(a => (
                  <a key={a.id} href={a.profileUrl!} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
                    <ExternalLink size={13} /> {a.handle} ({a.platform.toLowerCase()})
                  </a>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>

      {showSetup && (
        <SetupModal
          initial={profile}
          onClose={() => setShowSetup(false)}
          onSaved={p => { setProfile(p); setShowSetup(false); }}
        />
      )}
    </>
  );
}
