'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, CheckCircle2, ChevronRight,
  Plus, Trash2, Target, DollarSign, Calendar,
  ImageIcon, FileText, Rocket, Save
} from 'lucide-react';

// ─── Types ──────────────────────────────────────────────────────────────────

type Deliverable = { icon: string; title: string; qty: string; specs: string };
type Milestone   = { label: string; date: string };

type FormData = {
  // Step 1: Basics
  title: string;
  brand: string;
  categories: string[];
  description: string;
  tagline: string;
  // Step 2: Budget
  totalBudget: string;
  compensation: string;
  paymentTerms: string;
  creatorsNeeded: string;
  // Step 3: Deliverables
  deliverables: Deliverable[];
  // Step 4: Guidelines
  dos: string[];
  donts: string[];
  // Step 5: Timeline
  startDate: string;
  liveDate: string;
  milestones: Milestone[];
};

// ─── Static Options ──────────────────────────────────────────────────────────

const CATEGORY_OPTIONS = [
  'Lifestyle', 'Fashion', 'Beauty', 'Tech', 'Sports',
  'Interior', 'Food & Drink', 'Travel', 'Finance', 'Gaming', 'Wellness', 'Parenting',
];

const DELIVERABLE_PRESETS: Deliverable[] = [
  { icon: '🎥', title: 'Instagram Reel', qty: '1x', specs: '60s, 9:16 vertical' },
  { icon: '📷', title: 'High-res Stills', qty: '3x', specs: 'RAW + 4:5 edited' },
  { icon: '📖', title: 'Story Set', qty: '1x set', specs: 'Min. 4 slides with CTA' },
  { icon: '🎬', title: 'YouTube Video', qty: '1x', specs: '8–15 min, with description link' },
  { icon: '📱', title: 'TikTok Video', qty: '2x', specs: '30–60s, trending audio' },
];

const PAYMENT_OPTIONS = [
  '50% on draft approval, 50% on completion',
  'Full payment within 7 days of go-live',
  'Milestone-based: 3 equal installments',
  'Net-30 after campaign completion',
];

// ─── Step Definitions ────────────────────────────────────────────────────────

const STEPS = [
  { id: 1, label: 'Basics',       icon: FileText   },
  { id: 2, label: 'Budget',       icon: DollarSign },
  { id: 3, label: 'Deliverables', icon: ImageIcon  },
  { id: 4, label: 'Guidelines',   icon: Target     },
  { id: 5, label: 'Timeline',     icon: Calendar   },
  { id: 6, label: 'Review',       icon: Rocket     },
];

// ─── Main Component ──────────────────────────────────────────────────────────

export default function NewCampaignPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    title: '',
    brand: '',
    categories: [],
    description: '',
    tagline: '',
    totalBudget: '',
    compensation: '',
    paymentTerms: PAYMENT_OPTIONS[0],
    creatorsNeeded: '',
    deliverables: [],
    dos: ['', '', ''],
    donts: ['', '', ''],
    startDate: '',
    liveDate: '',
    milestones: [
      { label: 'Brief & Assets Shared', date: '' },
      { label: 'Content Draft Submission', date: '' },
      { label: 'Feedback & Revisions', date: '' },
    ],
  });

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleCategory = (cat: string) =>
    set('categories', form.categories.includes(cat)
      ? form.categories.filter((c) => c !== cat)
      : [...form.categories, cat]);

  const addDeliverable = (preset: Deliverable) =>
    set('deliverables', [...form.deliverables, { ...preset }]);

  const removeDeliverable = (i: number) =>
    set('deliverables', form.deliverables.filter((_, idx) => idx !== i));

  const updateListItem = (key: 'dos' | 'donts', i: number, val: string) => {
    const arr = [...form[key]];
    arr[i] = val;
    set(key, arr);
  };

  const addListItem   = (key: 'dos' | 'donts') => set(key, [...form[key], '']);
  const removeListItem = (key: 'dos' | 'donts', i: number) =>
    set(key, form[key].filter((_, idx) => idx !== i));

  const updateMilestone = (i: number, field: keyof Milestone, val: string) => {
    const arr = [...form.milestones];
    arr[i] = { ...arr[i], [field]: val };
    set('milestones', arr);
  };

  const progress = ((step - 1) / (STEPS.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-surface-container-low">
      {/* ── Top Bar ── */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-outline-variant/10 px-8 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-6">
          <Link href="/campaigns" className="flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
            <ArrowLeft size={16} /> Campaigns
          </Link>

          {/* Step Breadcrumb */}
          <div className="hidden md:flex items-center gap-1">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              const done = step > s.id;
              const active = step === s.id;
              return (
                <React.Fragment key={s.id}>
                  <button
                    onClick={() => done && setStep(s.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      active  ? 'bg-primary text-white shadow-sm'
                      : done  ? 'text-secondary cursor-pointer hover:bg-secondary/10'
                      : 'text-on-surface-variant cursor-default'
                    }`}
                  >
                    {done ? <CheckCircle2 size={13} /> : <Icon size={13} />}
                    {s.label}
                  </button>
                  {idx < STEPS.length - 1 && (
                    <ChevronRight size={12} className="text-outline/40 flex-shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <button className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors outline-none">
            <Save size={14} /> Save Draft
          </button>
        </div>

        {/* Progress bar */}
        <div className="max-w-4xl mx-auto mt-3">
          <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* ── Form Body ── */}
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* ────────────── STEP 1: BASICS ────────────── */}
        {step === 1 && (
          <section className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <h2 className="text-3xl font-extrabold text-on-surface">Campaign Basics</h2>
              <p className="text-on-surface-variant mt-1">Start with the core identity of your campaign.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/10 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <Label>Campaign Title *</Label>
                  <input
                    className={inputCls}
                    placeholder="e.g. Summer Vitality Collection 2024"
                    value={form.title}
                    onChange={(e) => set('title', e.target.value)}
                  />
                </div>
                <div>
                  <Label>Brand / Company Name *</Label>
                  <input
                    className={inputCls}
                    placeholder="e.g. Luxe Fragrances"
                    value={form.brand}
                    onChange={(e) => set('brand', e.target.value)}
                  />
                </div>
                <div>
                  <Label>Campaign Tagline</Label>
                  <input
                    className={inputCls}
                    placeholder={`"Capturing luxury in everyday moments"`}
                    value={form.tagline}
                    onChange={(e) => set('tagline', e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <Label>Campaign Description *</Label>
                  <textarea
                    className={inputCls + ' resize-none'}
                    rows={4}
                    placeholder="Describe the campaign vision, context, and what makes it unique..."
                    value={form.description}
                    onChange={(e) => set('description', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label>Categories (pick all that apply)</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {CATEGORY_OPTIONS.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => toggleCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all outline-none ${
                        form.categories.includes(cat)
                          ? 'bg-primary text-white shadow-sm'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ────────────── STEP 2: BUDGET ────────────── */}
        {step === 2 && (
          <section className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <h2 className="text-3xl font-extrabold text-on-surface">Budget & Compensation</h2>
              <p className="text-on-surface-variant mt-1">Define your spend and how creators get paid.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/10 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>Total Campaign Budget *</Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">$</span>
                    <input className={inputCls + ' pl-8'} placeholder="24,000" value={form.totalBudget} onChange={(e) => set('totalBudget', e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label>Compensation Per Creator *</Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">$</span>
                    <input className={inputCls + ' pl-8'} placeholder="2,400" value={form.compensation} onChange={(e) => set('compensation', e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label>Creators Needed *</Label>
                  <input className={inputCls} type="number" placeholder="e.g. 5 or 10" value={form.creatorsNeeded} onChange={(e) => set('creatorsNeeded', e.target.value)} />
                </div>
                <div>
                  <Label>Payment Terms</Label>
                  <select
                    className={inputCls}
                    value={form.paymentTerms}
                    onChange={(e) => set('paymentTerms', e.target.value)}
                  >
                    {PAYMENT_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>

              {/* Live Preview Card */}
              {(form.compensation || form.totalBudget) && (
                <div className="bg-gradient-to-br from-primary to-primary-light p-6 rounded-xl text-white">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-4">Budget Preview</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-white/60 text-[10px] uppercase font-bold">Per Creator</p>
                      <p className="font-extrabold text-2xl">${form.compensation || '–'}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] uppercase font-bold">Creators</p>
                      <p className="font-extrabold text-2xl">{form.creatorsNeeded || '–'}</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] uppercase font-bold">Total Budget</p>
                      <p className="font-extrabold text-2xl">${form.totalBudget || '–'}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ────────────── STEP 3: DELIVERABLES ────────────── */}
        {step === 3 && (
          <section className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <h2 className="text-3xl font-extrabold text-on-surface">Deliverables</h2>
              <p className="text-on-surface-variant mt-1">What content do you expect from each creator?</p>
            </div>

            {/* Presets */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/10">
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Quick Add</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {DELIVERABLE_PRESETS.map((p) => (
                  <button
                    key={p.title}
                    type="button"
                    onClick={() => addDeliverable(p)}
                    className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-xl text-sm font-bold text-on-surface hover:bg-primary-soft hover:text-primary transition-all outline-none border border-outline-variant/10"
                  >
                    <Plus size={14} /> {p.icon} {p.title}
                  </button>
                ))}
              </div>

              {/* Added Deliverables */}
              {form.deliverables.length === 0 ? (
                <div className="py-12 text-center text-on-surface-variant border-2 border-dashed border-outline-variant/30 rounded-xl">
                  <ImageIcon size={32} className="mx-auto mb-3 opacity-30" />
                  <p className="font-bold">No deliverables added yet</p>
                  <p className="text-sm">Click one above to add it.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {form.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/10 group">
                      <span className="text-2xl">{d.icon}</span>
                      <div className="flex-1 grid grid-cols-3 gap-3">
                        <input
                          className="col-span-1 bg-white rounded-lg px-3 py-2 text-sm font-medium border border-outline-variant/20 focus:ring-2 focus:ring-primary/20 outline-none"
                          value={d.qty}
                          placeholder="Qty"
                          onChange={(e) => {
                            const arr = [...form.deliverables];
                            arr[i] = { ...arr[i], qty: e.target.value };
                            set('deliverables', arr);
                          }}
                        />
                        <input
                          className="col-span-1 bg-white rounded-lg px-3 py-2 text-sm font-medium border border-outline-variant/20 focus:ring-2 focus:ring-primary/20 outline-none"
                          value={d.title}
                          placeholder="Format"
                          onChange={(e) => {
                            const arr = [...form.deliverables];
                            arr[i] = { ...arr[i], title: e.target.value };
                            set('deliverables', arr);
                          }}
                        />
                        <input
                          className="col-span-1 bg-white rounded-lg px-3 py-2 text-sm border border-outline-variant/20 focus:ring-2 focus:ring-primary/20 outline-none"
                          value={d.specs}
                          placeholder="Specs"
                          onChange={(e) => {
                            const arr = [...form.deliverables];
                            arr[i] = { ...arr[i], specs: e.target.value };
                            set('deliverables', arr);
                          }}
                        />
                      </div>
                      <button onClick={() => removeDeliverable(i)} className="p-2 text-outline hover:text-error transition-colors opacity-0 group-hover:opacity-100 outline-none">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ────────────── STEP 4: GUIDELINES ────────────── */}
        {step === 4 && (
          <section className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <h2 className="text-3xl font-extrabold text-on-surface">Content Guidelines</h2>
              <p className="text-on-surface-variant mt-1">Help creators understand your brand standards.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Do's */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-secondary/20">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 size={18} className="text-secondary" />
                  <h3 className="font-bold text-on-surface">Do&apos;s</h3>
                </div>
                <div className="space-y-3">
                  {form.dos.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-4 text-secondary font-bold text-sm flex-shrink-0">•</span>
                      <input
                        className={inputCls + ' flex-1 py-2'}
                        placeholder={`Do ${i + 1}...`}
                        value={item}
                        onChange={(e) => updateListItem('dos', i, e.target.value)}
                      />
                      {form.dos.length > 1 && (
                        <button onClick={() => removeListItem('dos', i)} className="text-outline hover:text-error text-xs outline-none">
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button onClick={() => addListItem('dos')} className="mt-4 w-full py-2 text-secondary font-bold text-sm border border-dashed border-secondary/30 rounded-xl hover:bg-secondary/5 transition-all outline-none flex items-center justify-center gap-1">
                  <Plus size={14} /> Add Do
                </button>
              </div>

              {/* Don'ts */}
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-error-container/30">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-error font-black text-lg">✗</span>
                  <h3 className="font-bold text-on-surface">Don&apos;ts</h3>
                </div>
                <div className="space-y-3">
                  {form.donts.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-4 text-error font-bold text-sm flex-shrink-0">•</span>
                      <input
                        className={inputCls + ' flex-1 py-2'}
                        placeholder={`Don't ${i + 1}...`}
                        value={item}
                        onChange={(e) => updateListItem('donts', i, e.target.value)}
                      />
                      {form.donts.length > 1 && (
                        <button onClick={() => removeListItem('donts', i)} className="text-outline hover:text-error text-xs outline-none">
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button onClick={() => addListItem('donts')} className="mt-4 w-full py-2 text-error font-bold text-sm border border-dashed border-error/20 rounded-xl hover:bg-error-container/10 transition-all outline-none flex items-center justify-center gap-1">
                  <Plus size={14} /> Add Don&apos;t
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ────────────── STEP 5: TIMELINE ────────────── */}
        {step === 5 && (
          <section className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <h2 className="text-3xl font-extrabold text-on-surface">Timeline</h2>
              <p className="text-on-surface-variant mt-1">Set key dates so creators can plan their workload.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-outline-variant/10 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>Campaign Start Date *</Label>
                  <input type="date" className={inputCls} value={form.startDate} onChange={(e) => set('startDate', e.target.value)} />
                </div>
                <div>
                  <Label>Go-Live Date *</Label>
                  <input type="date" className={inputCls} value={form.liveDate} onChange={(e) => set('liveDate', e.target.value)} />
                </div>
              </div>

              <div>
                <Label>Milestones</Label>
                <div className="relative pl-6 mt-4 space-y-5">
                  <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-surface-container-highest" />
                  {form.milestones.map((m, i) => (
                    <div key={i} className="relative flex items-center gap-4">
                      <div className="absolute -left-[23px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-primary bg-white" />
                      <input
                        className={inputCls + ' flex-1'}
                        placeholder="Milestone label"
                        value={m.label}
                        onChange={(e) => updateMilestone(i, 'label', e.target.value)}
                      />
                      <input
                        type="date"
                        className={inputCls + ' w-44'}
                        value={m.date}
                        onChange={(e) => updateMilestone(i, 'date', e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => set('milestones', [...form.milestones, { label: '', date: '' }])}
                  className="mt-5 ml-6 flex items-center gap-2 text-sm font-bold text-primary hover:underline outline-none"
                >
                  <Plus size={14} /> Add Milestone
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ────────────── STEP 6: REVIEW ────────────── */}
        {step === 6 && (
          <section className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
            <div>
              <h2 className="text-3xl font-extrabold text-on-surface">Review & Publish</h2>
              <p className="text-on-surface-variant mt-1">Double-check everything before your campaign goes live.</p>
            </div>

            <div className="space-y-4">
              {/* Summary Cards */}
              {[
                {
                  step: 1, title: 'Basics', content: (
                    <div className="space-y-1 text-sm">
                      <p><span className="font-bold text-on-surface">Title:</span> <span className="text-on-surface-variant">{form.title || '–'}</span></p>
                      <p><span className="font-bold text-on-surface">Brand:</span> <span className="text-on-surface-variant">{form.brand || '–'}</span></p>
                      <p><span className="font-bold text-on-surface">Categories:</span> <span className="text-on-surface-variant">{form.categories.join(', ') || '–'}</span></p>
                    </div>
                  )
                },
                {
                  step: 2, title: 'Budget', content: (
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div><p className="text-[10px] font-bold uppercase text-on-surface-variant tracking-wider">Total Budget</p><p className="font-extrabold text-lg text-primary">${form.totalBudget || '–'}</p></div>
                      <div><p className="text-[10px] font-bold uppercase text-on-surface-variant tracking-wider">Per Creator</p><p className="font-extrabold text-lg text-primary">${form.compensation || '–'}</p></div>
                      <div><p className="text-[10px] font-bold uppercase text-on-surface-variant tracking-wider">Creators</p><p className="font-extrabold text-lg text-primary">{form.creatorsNeeded || '–'}</p></div>
                    </div>
                  )
                },
                {
                  step: 3, title: 'Deliverables', content: (
                    <div className="flex flex-wrap gap-2">
                      {form.deliverables.length === 0
                        ? <span className="text-sm text-on-surface-variant">None added</span>
                        : form.deliverables.map((d, i) => (
                          <span key={i} className="px-3 py-1.5 bg-surface-container text-on-surface-variant rounded-full text-xs font-bold">{d.icon} {d.qty} {d.title}</span>
                        ))}
                    </div>
                  )
                },
                {
                  step: 5, title: 'Timeline', content: (
                    <div className="text-sm space-y-1">
                      <p><span className="font-bold text-on-surface">Start:</span> <span className="text-on-surface-variant">{form.startDate || '–'}</span></p>
                      <p><span className="font-bold text-on-surface">Go-Live:</span> <span className="text-on-surface-variant">{form.liveDate || '–'}</span></p>
                    </div>
                  )
                },
              ].map(({ step: s, title, content }) => (
                <div key={s} className="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-on-surface">{title}</h3>
                    <button onClick={() => setStep(s)} className="text-xs font-bold text-primary hover:underline outline-none">Edit</button>
                  </div>
                  {content}
                </div>
              ))}
            </div>

            {/* Publish */}
            <div className="bg-gradient-to-br from-primary to-primary-light p-8 rounded-2xl text-white text-center">
              <Rocket size={32} className="mx-auto mb-3" />
              <h3 className="text-xl font-extrabold mb-2">Ready to publish?</h3>
              <p className="text-white/75 mb-6 text-sm">Your campaign will be visible to verified influencers immediately after publishing.</p>
              <div className="flex gap-4 justify-center">
                <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-sm hover:bg-white/20 transition-all outline-none">
                  Save as Draft
                </button>
                <button className="px-8 py-3 bg-white text-primary rounded-xl font-bold text-sm shadow-lg hover:shadow-xl active:scale-95 transition-all outline-none">
                  🚀 Publish Campaign
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ── Navigation Buttons ── */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-outline-variant/10">
          <button
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all outline-none border border-outline-variant/20 hover:bg-surface-container ${step === 1 ? 'invisible' : ''}`}
          >
            <ArrowLeft size={16} /> Back
          </button>
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
            Step {step} of {STEPS.length}
          </span>
          {step < STEPS.length ? (
            <button
              onClick={() => setStep((s) => Math.min(STEPS.length, s + 1))}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-light text-white rounded-xl font-bold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all outline-none"
            >
              Continue <ArrowRight size={16} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const inputCls =
  'w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary/30 outline-none transition-all placeholder:text-outline';

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
      {children}
    </label>
  );
}
