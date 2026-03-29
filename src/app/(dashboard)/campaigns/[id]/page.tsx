'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft, CheckCircle2, ChevronRight, Users,
  Clock, DollarSign, Target, ImageIcon, Video, BookOpen,
  ThumbsUp, XCircle, MessageSquare
} from 'lucide-react';

// ─── Shared data store (replace with API call later) ───────────────────────

const campaignData: Record<string, CampaignDetail> = {
  '1': {
    id: '1',
    title: 'Summer Vitality Collection',
    brand: 'Luxe Fragrances',
    brandTagline: 'Luxe Fragrances Presents',
    status: 'active',
    tagline: '"Capturing the essence of luxury in everyday moments."',
    description:
      'Our mission for Summer Vitality 2024 is to redefine the visual language of high-end scents. We are moving away from traditional studio photography towards raw, sun-drenched lifestyle environments.',
    goal: 'Brand Awareness & Aesthetic Alignment',
    audience: 'Gen-Z & Millennial Luxury Seekers',
    budget: '$24,000',
    compensation: '$4,200',
    paymentTerms: '50% on draft approval, 50% on completion.',
    deadline: 'Jun 20, 2024',
    applicants: 18,
    hired: 4,
    categories: ['Lifestyle', 'Beauty'],
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUmgcNrajZ90f-0P5wIaWyKJzZNW1YRMJp-sP8gU0j3g5tv_bDsatB86nd89WEqi5VmCgPdSvCpi02_OuEAjLU7LDCK72CCZA3OY8wGqzvycXGWnpsLpXKZ5j8UIRInCe1790RVaECDuPNJeltnibmz-lAyGBHlWV8tLbHFI4n3RGREV_1bliSJCoWFQjin231NyXWkh4_fBDr9eHvcks4pJ-8Ej71hr10iEXKkCntaLAHZorSc_tMZjJSHHeS49ipJK5je556Ycki',
    moodboard: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCUmgcNrajZ90f-0P5wIaWyKJzZNW1YRMJp-sP8gU0j3g5tv_bDsatB86nd89WEqi5VmCgPdSvCpi02_OuEAjLU7LDCK72CCZA3OY8wGqzvycXGWnpsLpXKZ5j8UIRInCe1790RVaECDuPNJeltnibmz-lAyGBHlWV8tLbHFI4n3RGREV_1bliSJCoWFQjin231NyXWkh4_fBDr9eHvcks4pJ-8Ej71hr10iEXKkCntaLAHZorSc_tMZjJSHHeS49ipJK5je556Ycki',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjv1Ob8JQSyBfB71_S-eFIVcPMUj7l31VA900_fZYIzhBTrtNtU2NGnoZloEx88WTgG55HgUUdwc2MyuK4XNx7zIamMaHBCnwnGTUipVPmQjyh8OmJUgOwOUcxzZJR6WRHKkEMhlCNu8VX5TVjnvblvxrd6Q8Kc4UX7K_ojHT19hpT3gtCXbxVVBWr3yWRHamE69lS3OzRsbWHRQQHisYAsGoI_4VFYWEDO5hrazncio8veaMTCNTPzSco_AAgxJxLM7ZNADzvNBJ0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAeDY-O_Jip2ZxpcgSTHKFlh_Z_Cb8wYuJw45Qbr6sjtS9GYZwSqUlc5u8nNL2V3cm1aTEOIIlnpmpfx_NqLCKjR3FhrNKexpcdgIwePEHS0uRAhiBzRVHE6iilbMmaVhSMlD0PXN35uQFnFmLpacQs5jqUdqltYT9mgYTqOe2D35lusuNC7eXZGc5biO4sdjK1cKz_mdsrLpTapyYtP9FXP4x7HwlV3hFpH1ct1Fl06BJksEH-KFJHSCaGdfvAbJKLa4GtfzJnlHRd',
    ],
    deliverables: [
      { icon: '🎥', qty: '1x Required', title: 'Instagram Reel (60s)', items: ['9:16 Vertical Format', 'ASMR or curated soundtrack', 'Link in Bio for 48 hours'] },
      { icon: '📷', qty: '3x Required', title: 'High-res Stills', items: ['4:5 Aspect Ratio', 'Color grade per moodboard', 'RAW files for archival'] },
      { icon: '📖', qty: '1x Set',      title: 'Story Set',          items: ['Min. 4 slides with engagement tags', 'Poll or Add Yours sticker', 'Link sticker with UTM'] },
    ],
    dos: ['Use natural golden hour lighting', 'Focus on sensory experience', 'Keep styling minimal and sophisticated', 'Show product in active setting'],
    donts: ['Show competitor logos', 'Use harsh studio flash or neon', 'Over-edit or use heavy filters', 'Include cluttered backgrounds'],
    timeline: [
      { date: 'May 15, 2024', label: 'Brief Finalized & Assets Shared', desc: 'Product sample and digital brand assets provided.', active: true },
      { date: 'Jun 02, 2024', label: 'Content Draft Submission', desc: 'Upload first drafts of Reel and Stills for review.' },
      { date: 'Jun 10, 2024', label: 'Feedback & Revisions', desc: 'Collaborative refinement of selected content.' },
      { date: 'Jun 20, 2024', label: 'Campaign Go-Live', desc: 'Simultaneous posting across all channels.', done: true },
    ],
  },
  '2': {
    id: '2',
    title: 'Autumn Minimalist Series',
    brand: 'Modern Home',
    brandTagline: 'Modern Home Presents',
    status: 'active',
    tagline: '"Where simplicity meets sophistication."',
    description:
      'We want creators who truly live the minimalist lifestyle to document authentic moments in curated home spaces. Think editorial-quality captures of everyday rituals.',
    goal: 'Product Discovery & Lifestyle Integration',
    audience: 'Millennial Homeowners & Interior Enthusiasts',
    budget: '$15,000',
    compensation: '$2,500',
    paymentTerms: 'Full payment within 7 days of campaign completion.',
    deadline: 'Jul 05, 2024',
    applicants: 31,
    hired: 6,
    categories: ['Interior', 'Lifestyle'],
    cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUtqjv_vkLzuuiuB8Zai3Uq_rKFAZwdi7K2tM6aCd-3p3gpxXX_m7cZf9jKDnxCw3GTQ94J8N0NnQkqlxFW8X_SSgvO_t7u7GavH4ROesPHm7OgRjVDuZMBWPwZEYQl81REA5UZ5LQYZcCAGySu03SNUUO2LO_5fpgJ1INR-BxjzFHXlGazAf4rn-69IXYGcRWqg4Lq5eVFnueS0pIOUWuK71imVJ1pORpW75JnCrsscjxvChWM6xV1hLlxAAd73IzyW12EHC4JGo',
    moodboard: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVUtqjv_vkLzuuiuB8Zai3Uq_rKFAZwdi7K2tM6aCd-3p3gpxXX_m7cZf9jKDnxCw3GTQ94J8N0NnQkqlxFW8X_SSgvO_t7u7GavH4ROesPHm7OgRjVDuZMBWPwZEYQl81REA5UZ5LQYZcCAGySu03SNUUO2LO_5fpgJ1INR-BxjzFHXlGazAf4rn-69IXYGcRWqg4Lq5eVFnueS0pIOUWuK71imVJ1pORpW75JnCrsscjxvChWM6xV1hLlxAAd73IzyW12EHC4JGo',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZuf7A-pbb7F7q4mReCUEYUO5pyGyRg7_EgLEw_1FeBtnap2HDc8jY-UmxqNgbHkxtL2vKm-C3h-mpUN6BFGXlTwDqrzY7ac6uvyTpBKVj1f45oUykRveKDwPSgEgigo12BB4JLRmJ15E1wW2dZPCxX1LLvwTn9ujfsj236xH8HVZwbtGFcZCoBIwHDd9dnrknEHH1bPUKz8xrej1k-6KSD3_O3b6szvzt8cTB0qjvaF6WNtqLABAK84rSfeW23xzYZax0knLAlhMl',
    ],
    deliverables: [
      { icon: '📸', qty: '5x Required', title: 'Lifestyle Stills', items: ['Neutral tones, natural light only', 'Product prominently featured', 'Minimum 3000px wide'] },
      { icon: '🎥', qty: '2x Required', title: 'Reel / TikTok',    items: ['Morning or golden-hour timing', 'Voiceover or ambient sound', 'Product tag in video'] },
    ],
    dos: ['Shoot in real living spaces', 'Emphasize texture and space', 'Use neutral earthy tones', 'Show product in context of daily rituals'],
    donts: ['Use studio backdrops', 'Show cluttered environments', 'Use bright unnatural colors', 'Over-saturate edits'],
    timeline: [
      { date: 'Jun 01, 2024', label: 'Brief & Assets Shared', desc: 'Access to product and brand kit.', active: true },
      { date: 'Jun 20, 2024', label: 'Draft Submission', desc: 'First pass of all deliverables.' },
      { date: 'Jul 01, 2024', label: 'Final Revisions', desc: 'Incorporate feedback and polish.' },
      { date: 'Jul 05, 2024', label: 'Campaign Launch', desc: 'All posts go live simultaneously.' },
    ],
  },
};

// Fallback for campaigns 3-5 (minimally structured)
const fallbackCampaign = (id: string): CampaignDetail => ({
  id,
  title: 'Campaign Brief',
  brand: 'Brand',
  brandTagline: 'Brand Presents',
  status: 'draft',
  tagline: '"Content that connects."',
  description: 'This campaign brief is being finalised. Details will be available soon.',
  goal: 'TBD',
  audience: 'TBD',
  budget: '$0',
  compensation: '$0',
  paymentTerms: 'To be confirmed.',
  deadline: 'TBD',
  applicants: 0,
  hired: 0,
  categories: [],
  cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiV93SsLQ7S37cKmfp8ufDux8eEwJ7soQdRkVbQ4tQjNcYzz28ZW52mqeN00Zz5OpNBrhNPr5hc2P0F9Nsvan8uVDen5AYaRx9LXJ04d7f-hFWpz1TK5UrKvcPfQutcoXxGLy_oVkZhzjBqotmL5E9jEAb4J51470_ztl4uy-eOO9989ISyQRNyHZOufa2Op_P8WSCP5NxpqKp7RsEI13CW8kpmMjAKzQAVCQqx5aJ0_YjzoBeBDFeHUvcD8a4DvIRY3gUJjbUO27s',
  moodboard: [],
  deliverables: [],
  dos: [],
  donts: [],
  timeline: [],
});

type CampaignDetail = {
  id: string;
  title: string;
  brand: string;
  brandTagline: string;
  status: string;
  tagline: string;
  description: string;
  goal: string;
  audience: string;
  budget: string;
  compensation: string;
  paymentTerms: string;
  deadline: string;
  applicants: number;
  hired: number;
  categories: string[];
  cover: string;
  moodboard: string[];
  deliverables: { icon: string; qty: string; title: string; items: string[] }[];
  dos: string[];
  donts: string[];
  timeline: { date: string; label: string; desc: string; active?: boolean; done?: boolean }[];
};

// ─── Component ─────────────────────────────────────────────────────────────

export default function CampaignBriefPage() {
  const { id } = useParams<{ id: string }>();
  const campaign = campaignData[id] ?? fallbackCampaign(id);

  return (
    <div className="pt-8 px-8 pb-20 max-w-7xl mx-auto">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-8">
        <Link href="/campaigns" className="flex items-center gap-1 hover:text-primary transition-colors font-medium">
          <ArrowLeft size={16} />
          Campaigns
        </Link>
        <ChevronRight size={14} className="opacity-40" />
        <span className="font-bold text-on-surface truncate max-w-xs">{campaign.title}</span>
      </nav>

      {/* ── Hero Header ── */}
      <section className="mb-14 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden border border-outline-variant/10">
              <span className="font-black text-primary text-xs">{campaign.brand.slice(0, 2).toUpperCase()}</span>
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant/70">
              {campaign.brandTagline}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-primary mb-4 leading-none">
            {campaign.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase">
              {campaign.status}
            </span>
            {campaign.categories.map((cat) => (
              <span key={cat} className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-bold tracking-wider uppercase">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col gap-3 md:items-end mt-6 md:mt-0">
          <Link
            href={`/campaigns/${id}/negotiate`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-primary to-primary-light text-white rounded-xl font-bold text-sm shadow-xl hover:brightness-110 active:scale-95 transition-all"
          >
            <MessageSquare size={16} />
            Open Negotiation
          </Link>
          <div className="flex gap-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
            <span className="flex items-center gap-1"><Users size={10} /> {campaign.applicants} Applicants</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock size={10} /> Due {campaign.deadline}</span>
          </div>
        </div>
      </section>

      {/* ── Cover Image ── */}
      <div className="w-full h-64 rounded-2xl overflow-hidden mb-12 relative">
        <img src={campaign.cover} alt={campaign.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* ── Overview + Budget ── */}
      <section className="mb-12 grid grid-cols-12 gap-6">
        {/* Overview */}
        <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Campaign Overview</h3>
          <p className="text-2xl font-light text-on-surface leading-snug mb-6 italic">{campaign.tagline}</p>
          <p className="text-on-surface-variant leading-relaxed mb-8">{campaign.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-surface rounded-xl flex gap-3 items-start">
              <Target size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Primary Goal</span>
                <span className="text-sm font-semibold text-primary">{campaign.goal}</span>
              </div>
            </div>
            <div className="p-5 bg-surface rounded-xl flex gap-3 items-start">
              <Users size={18} className="text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Target Audience</span>
                <span className="text-sm font-semibold text-secondary">{campaign.audience}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Budget + Moodboard */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
          <div className="bg-gradient-to-br from-primary to-primary-light p-8 rounded-xl text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="flex items-center gap-2 mb-6">
              <DollarSign size={16} className="opacity-70" />
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Compensation Per Creator</h3>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-extrabold tracking-tighter">{campaign.compensation}</span>
              <span className="text-white/70 font-medium uppercase text-xs tracking-widest">USD</span>
            </div>
            <p className="text-white/75 text-sm mt-3 leading-relaxed">{campaign.paymentTerms}</p>
            <div className="mt-5 pt-5 border-t border-white/20 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Total Budget</p>
                <p className="text-white font-extrabold text-lg">{campaign.budget}</p>
              </div>
              <div>
                <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Hired</p>
                <p className="text-white font-extrabold text-lg">{campaign.hired} / creators</p>
              </div>
            </div>
          </div>

          {campaign.moodboard.length > 0 && (
            <div className="bg-surface-container-low p-5 rounded-xl border border-outline-variant/10">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-3 flex items-center gap-2">
                <ImageIcon size={12} /> Visual Tone / Moodboard
              </h3>
              <div className="grid grid-cols-3 gap-2 h-36">
                {campaign.moodboard.slice(0, 3).map((src, i) => (
                  <div key={i} className={`rounded-lg overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`} style={i === 0 ? { gridRow: 'span 2' } : {}}>
                    <img src={src} alt="Moodboard" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Deliverables ── */}
      {campaign.deliverables.length > 0 && (
        <section className="mb-12">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Campaign Deliverables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {campaign.deliverables.map((d, i) => (
              <div key={i} className="bg-surface-container-lowest p-7 rounded-xl border border-outline-variant/10 flex flex-col hover:shadow-md transition-all">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-3xl">{d.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-surface-container text-on-surface-variant rounded">
                    {d.qty}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-on-surface mb-3">{d.title}</h4>
                <ul className="text-sm text-on-surface-variant space-y-2.5 mt-2">
                  {d.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Dos & Don'ts + Timeline ── */}
      {(campaign.dos.length > 0 || campaign.timeline.length > 0) && (
        <section className="mb-12 grid grid-cols-12 gap-6">
          {/* Content Guidelines */}
          <div className="col-span-12 lg:col-span-4 bg-surface-container-low p-7 rounded-xl border border-outline-variant/10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-7">Content Guidelines</h3>
            <div className="space-y-7">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsUp size={14} className="text-secondary" />
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Do&apos;s</span>
                </div>
                <ul className="text-sm text-on-surface-variant space-y-2.5">
                  {campaign.dos.map((item, i) => <li key={i} className="flex gap-2"><span className="text-secondary">•</span>{item}</li>)}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <XCircle size={14} className="text-error" />
                  <span className="text-[10px] font-bold text-error uppercase tracking-widest">Don&apos;ts</span>
                </div>
                <ul className="text-sm text-on-surface-variant space-y-2.5">
                  {campaign.donts.map((item, i) => <li key={i} className="flex gap-2"><span className="text-error">•</span>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-10">
              Timeline &amp; Milestones
            </h3>
            <div className="relative px-4">
              <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-surface-container-highest" />
              <div className="space-y-10">
                {campaign.timeline.map((step, i) => (
                  <div key={i} className="relative flex items-start gap-8 pl-12">
                    <div className={`absolute left-[-4px] top-1 w-3 h-3 rounded-full ring-4 ring-white shadow-sm z-10 ${step.done ? 'bg-secondary' : step.active ? 'bg-primary' : 'bg-surface-container-highest'}`} />
                    <div className="flex-1">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${step.done ? 'text-secondary' : 'text-on-surface-variant'}`}>{step.date}</span>
                      <h4 className={`font-bold text-base mt-0.5 ${step.done ? 'text-secondary' : step.active ? 'text-primary' : 'text-on-surface'}`}>{step.label}</h4>
                      <p className="text-sm text-on-surface-variant">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Footer CTA ── */}
      <div className="flex items-center justify-between pt-8 border-t border-outline-variant/20">
        <Link href="/campaigns" className="flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
          <ArrowLeft size={16} /> Back to Campaigns
        </Link>
        <div className="flex gap-3">
          <Link
            href={`/campaigns/${id}/negotiate`}
            className="px-6 py-3 bg-gradient-to-br from-primary to-primary-light text-white rounded-xl font-bold shadow-md hover:brightness-110 active:scale-95 transition-all text-sm flex items-center gap-2"
          >
            <MessageSquare size={16} />
            Go to Negotiation
          </Link>
        </div>
      </div>
    </div>
  );
}
