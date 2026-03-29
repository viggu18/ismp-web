import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const deliverables = [
  { icon: '🎥', qty: '1x Required', title: 'Instagram Reel (60s)', items: ['9:16 Vertical Format (1080x1920)', 'ASMR elements or curated soundtrack', 'Direct Link in Bio for 48 hours'] },
  { icon: '📷', qty: '3x Required', title: 'High-res Stills', items: ['4:5 Aspect Ratio (Carousel optimized)', 'Color grade consistent with Moodboard', 'Include RAW files for archival'] },
  { icon: '📖', qty: '1x Set', title: 'Story Set', items: ['Minimum 4 slides with engagement tags', "Clear 'Add Yours' or Poll sticker usage", 'Link sticker with UTM parameters'] },
];

const timeline = [
  { date: 'May 15, 2024', label: 'Brief Finalized & Assets Shared', desc: 'Access to product sample and digital brand assets.', active: true },
  { date: 'June 02, 2024', label: 'Content Draft Submission', desc: 'Upload first drafts of Reel and Stills for review.' },
  { date: 'June 10, 2024', label: 'Feedback & Revisions', desc: 'Collaborative refinement of the selected content.' },
  { date: 'June 20, 2024', label: 'Campaign Go-Live', desc: 'Simultaneous posting across all selected channels.', done: true },
];

export default function CampaignBriefPage() {
  return (
    <div className="pt-8 px-8 pb-16 max-w-7xl">
      {/* Hero Header */}
      <section className="mb-16 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center overflow-hidden border border-outline-variant/10">
              <img className="w-full h-full object-cover" alt="Luxe Fragrances" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtAuTjRIrrh5CzrAncNYMwrVX-JRPC39rhhWsmgwWOic_Qi8RucHenUUjgTRwedrFN4cX1ZG47nEf70_epyvxsUUfiwPQRaRWFez9Zf6eQ41R5oKi2YeqNOqUgl0uBb340XBdwEZXjC65ojXPxwZWOsnTYejhNI9K_24MTmFMBuAzEXrn68O8BSw16STd7h3JLe_oTRKoMTZsKkIu4OZaTnkxZuQW_9yG53lvNH-Hyb35RsiicJTvQY_3PAg_tFdvzeGhOnPOofl0G" />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant/70">Luxe Fragrances Presents</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary mb-4 leading-none">
            Summer Vitality 2024
          </h1>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-widest uppercase">Draft / Proposed</span>
            <span className="text-on-surface-variant/60 font-medium italic">Premium Editorial Series</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-start md:justify-end mt-8 md:mt-0">
          <button className="group relative px-8 py-5 bg-gradient-to-br from-primary to-primary-light text-white rounded-xl font-bold text-sm tracking-tight shadow-xl hover:scale-[0.98] transition-all overflow-hidden outline-none">
            <span className="relative z-10">Accept Campaign Brief</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </section>

      {/* Overview & Budget */}
      <section className="mb-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Campaign Overview</h3>
          <p className="text-2xl font-light text-on-surface leading-snug mb-8">
            &ldquo;Capturing the essence of luxury in everyday moments.&rdquo;
          </p>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Our mission for Summer Vitality 2024 is to redefine the visual language of high-end scents. We are moving away from traditional studio photography towards raw, sun-drenched lifestyle environments.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="p-6 bg-surface rounded-xl">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Primary Goal</span>
              <span className="text-sm font-semibold text-primary">Brand Awareness &amp; Aesthetic Alignment</span>
            </div>
            <div className="p-6 bg-surface rounded-xl">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">Target Audience</span>
              <span className="text-sm font-semibold text-primary">Gen-Z &amp; Millennial Luxury Seekers</span>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-primary to-primary-light p-10 rounded-xl text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-12">Agreed Compensation</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-extrabold tracking-tighter text-white">$4,200</span>
              <span className="text-white/70 font-medium uppercase text-xs tracking-widest">USD Total</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-[240px]">
              Payment terms: 50% upon draft approval, 50% following campaign completion.
            </p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl flex-1 border border-outline-variant/10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-4">Visual Tone</h3>
            <div className="grid grid-cols-3 grid-rows-2 gap-3 h-48">
              <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover" alt="Sun-drenched luxury" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUmgcNrajZ90f-0P5wIaWyKJzZNW1YRMJp-sP8gU0j3g5tv_bDsatB86nd89WEqi5VmCgPdSvCpi02_OuEAjLU7LDCK72CCZA3OY8wGqzvycXGWnpsLpXKZ5j8UIRInCe1790RVaECDuPNJeltnibmz-lAyGBHlWV8tLbHFI4n3RGREV_1bliSJCoWFQjin231NyXWkh4_fBDr9eHvcks4pJ-8Ej71hr10iEXKkCntaLAHZorSc_tMZjJSHHeS49ipJK5je556Ycki" />
              </div>
              <div className="rounded-lg overflow-hidden"><img className="w-full h-full object-cover" alt="Perfume" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjv1Ob8JQSyBfB71_S-eFIVcPMUj7l31VA900_fZYIzhBTrtNtU2NGnoZloEx88WTgG55HgUUdwc2MyuK4XNx7zIamMaHBCnwnGTUipVPmQjyh8OmJUgOwOUcxzZJR6WRHKkEMhlCNu8VX5TVjnvblvxrd6Q8Kc4UX7K_ojHT19hpT3gtCXbxVVBWr3yWRHamE69lS3OzRsbWHRQQHisYAsGoI_4VFYWEDO5hrazncio8veaMTCNTPzSco_AAgxJxLM7ZNADzvNBJ0" /></div>
              <div className="rounded-lg overflow-hidden"><img className="w-full h-full object-cover" alt="Beach" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeDY-O_Jip2ZxpcgSTHKFlh_Z_Cb8wYuJw45Qbr6sjtS9GYZwSqUlc5u8nNL2V3cm1aTEOIIlnpmpfx_NqLCKjR3FhrNKexpcdgIwePEHS0uRAhiBzRVHE6iilbMmaVhSMlD0PXN35uQFnFmLpacQs5jqUdqltYT9mgYTqOe2D35lusuNC7eXZGc5biO4sdjK1cKz_mdsrLpTapyYtP9FXP4x7HwlV3hFpH1ct1Fl06BJksEH-KFJHSCaGdfvAbJKLa4GtfzJnlHRd" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mb-16">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-8">Campaign Deliverables</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliverables.map((d, i) => (
            <div key={i} className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 flex flex-col">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-3xl">{d.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-surface-container text-on-surface-variant rounded">{d.qty}</span>
              </div>
              <h4 className="text-xl font-bold text-on-surface mb-2">{d.title}</h4>
              <ul className="text-sm text-on-surface-variant space-y-3 mt-4">
                {d.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Dos & Don'ts + Timeline */}
      <section className="mb-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-8">Content Guidelines</h3>
          <div className="space-y-8">
            <div>
              <span className="block text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">✓ Do&apos;s</span>
              <ul className="text-sm text-on-surface-variant space-y-3">
                {['Use natural, soft golden hour lighting', 'Focus on the sensory experience', 'Keep styling minimal and sophisticated', 'Show the product in an active setting'].map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <span className="block text-[10px] font-bold text-error uppercase tracking-widest mb-4">✗ Don&apos;ts</span>
              <ul className="text-sm text-on-surface-variant space-y-3">
                {['Show visible competitor logos', 'Use harsh studio flash or artificial neon', 'Over-edit or use heavy third-party filters', 'Include cluttered backgrounds'].map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-12">Timeline &amp; Milestones</h3>
          <div className="relative px-4">
            <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-surface-container-highest"></div>
            <div className="space-y-12">
              {timeline.map((step, i) => (
                <div key={i} className="relative flex items-center gap-8 pl-12">
                  <div className={`absolute left-[-4px] w-3 h-3 rounded-full ring-4 ring-white shadow-sm z-10 ${step.done ? 'bg-secondary' : step.active ? 'bg-primary' : 'bg-surface-container-highest'}`}></div>
                  <div className="flex-1">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${step.done ? 'text-secondary' : 'text-on-surface-variant'}`}>{step.date}</span>
                    <h4 className={`font-bold text-lg ${step.done ? 'text-secondary' : step.active ? 'text-primary' : 'text-on-surface'}`}>{step.label}</h4>
                    <p className="text-sm text-on-surface-variant">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
