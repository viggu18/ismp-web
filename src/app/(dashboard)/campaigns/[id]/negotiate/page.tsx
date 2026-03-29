'use client';
import React from 'react';
import { FileText, PlusCircle, Video, Camera, Layers, CheckCircle2, Pencil, Eye } from 'lucide-react';

const deliverableItems = [
  { LucideIcon: Video, title: '1x Reels (60s)', desc: 'Product focus, music-led' },
  { LucideIcon: Camera, title: '3x High-Res Stills', desc: 'Editorial style, 9 mo rights' },
  { LucideIcon: Layers, title: 'Raw Footage Access', desc: 'Archival purposes only' },
];

export default function CampaignNegotiationPage() {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)]">
      {/* Left Pane: Negotiation & Messaging */}
      <section className="flex-1 flex flex-col h-full bg-surface border-r border-outline-variant/15">
        {/* Header Info */}
        <div className="p-6 bg-surface-container-low/50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img className="w-12 h-12 rounded-xl object-cover" alt="Influencer profile photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuournz6Wy3XatbXGZSHJ-WYIsCRHv9vzAbtmZwQZqkcU0gkd3zk-jpS9Pqfv9lhHJ2Qh-FMGDw6Ya6m8YBqwT047uoXDl3KqrHUsVVMqQ4vhWrfXwyKmgesmvAVg4ODU2LpVrcgR8voZRBGfJsuDz7WX9ccadzSCe24GLXCuNE66STDk3c31KjIxcigJDTdEN9ZKuZ-IgzaAODlYyr1PbRgR6Eet6Z6vhkkGmBLCsJ8cHjI2-podEQUk8xUWFDWHEjtBZtm2uP2-c" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-surface"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-on-surface tracking-tight">Elena Valerius</h1>
              <p className="text-sm text-on-surface-variant">Negotiating: <span className="font-semibold">Summer Solstice Collection</span></p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-primary-soft text-primary text-xs font-bold rounded-full uppercase tracking-wider">Offer Sent</span>
            <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full uppercase tracking-wider">Draft #3</span>
          </div>
        </div>

        {/* Messages Stream */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div className="flex justify-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Monday, Oct 24</span>
          </div>

          {/* Message Received */}
          <div className="flex gap-4 max-w-[80%]">
            <img className="w-8 h-8 rounded-lg mt-1" alt="Elena Valerius avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGhXhv516PiyjBtDkS9cotzS90O8nxadx-bgUwZMauqhVlUSxf9B41V3rfzB3FVWWDFwzN6XmSuNkH7dUxvhkceJMubY5bxMTvswTiw88oWnEHFryormY6eo2mVCbHhlj95jHV2Vx8Y0z_PWVkccXRCkTASUi4XyUuR3PZA8ZwIhSM5L5JVY1z_y0ILHjw3vMxD8nM9J2lFF_JBz0IDDjQYgMyk1QMRk15VSQWM3-Kxc52OsxewvVAwL3fWEeKFGwufO8zj11F2Xo6" />
            <div className="space-y-2">
              <div className="p-4 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
                <p className="text-sm text-on-surface leading-relaxed">Hi team! I&apos;ve reviewed the latest brief. The timeline looks manageable, but I&apos;d like to adjust the usage rights for the high-res stills to 6 months instead of 12. Does that work for your quarterly budget?</p>
              </div>
              <span className="text-[10px] text-on-surface-variant ml-1">10:24 AM</span>
            </div>
          </div>

          {/* Offer Badge in Chat */}
          <div className="flex justify-center py-4">
            <div className="bg-primary-soft border border-primary-soft p-4 rounded-xl flex items-center gap-4 max-w-md">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center rounded-lg text-white">
                <FileText size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-primary">New Offer Generated</p>
                <p className="text-xs text-on-surface-variant">Draft #3 • $4,200.00 • 3 Deliverables</p>
              </div>
              <button className="text-primary font-bold text-xs hover:underline outline-none">View Details</button>
            </div>
          </div>

          {/* Message Sent */}
          <div className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse">
            <div className="w-8 h-8 rounded-lg bg-primary-soft flex items-center justify-center text-primary font-bold text-xs">M</div>
            <div className="space-y-2 text-right">
              <div className="p-4 bg-gradient-to-br from-primary to-primary-light text-white rounded-xl shadow-sm">
                <p className="text-sm leading-relaxed">Thanks Elena. We can compromise on 9 months for the stills. I&apos;ve updated the contract draft accordingly. Check the Offer Summary on the right.</p>
              </div>
              <span className="text-[10px] text-on-surface-variant mr-1">11:05 AM</span>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-6 bg-surface-container-lowest border-t border-outline-variant/15">
          <div className="flex items-center gap-4 bg-surface-container-low rounded-xl px-4 py-3">
            <button className="text-on-surface-variant hover:text-primary transition-colors outline-none">
              <PlusCircle size={20} />
            </button>
            <input className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface text-sm outline-none" placeholder="Type your message..." type="text" />
            <button className="bg-gradient-to-br from-primary to-primary-light text-white px-4 py-1.5 rounded-lg font-bold text-sm shadow-sm active:scale-95 transition-transform outline-none">
              Send
            </button>
          </div>
        </div>
      </section>

      {/* Right Pane: Offer Summary */}
      <aside className="w-full md:w-[420px] bg-surface-container-low p-8 overflow-y-auto custom-scrollbar">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-on-surface mb-1">Offer Summary</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Negotiation Phase: Active</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Current Bid</p>
              <p className="text-lg font-extrabold text-on-surface">$4,200</p>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Status</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-warning"></span>
                <p className="text-sm font-bold text-on-surface">Awaiting Response</p>
              </div>
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-on-surface">Deliverables</h3>
              <span className="text-xs text-primary font-bold cursor-pointer hover:underline">Edit</span>
            </div>
            <div className="space-y-2">
              {deliverableItems.map(({ LucideIcon, title, desc }, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-outline-variant/10">
                  <LucideIcon size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{title}</p>
                    <p className="text-xs text-on-surface-variant">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-on-surface">Timeline</h3>
            <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-1 before:bottom-1 before:w-[2px] before:bg-outline-variant/20">
              {[{ label: 'Content Capture', date: 'Oct 28 — Nov 02, 2024', active: true }, { label: 'Draft Submission', date: 'Nov 05, 2024' }, { label: 'Final Live Date', date: 'Nov 12, 2024' }].map((step, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[23px] top-1 w-3 h-3 rounded-full border-2 bg-white ${step.active ? 'border-primary' : 'border-outline-variant'}`}></div>
                  <p className="text-xs font-bold text-on-surface uppercase">{step.label}</p>
                  <p className="text-sm text-on-surface-variant">{step.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Panel */}
          <div className="pt-6 border-t border-outline-variant/20 space-y-3">
            <button className="w-full bg-gradient-to-br from-primary to-primary-light text-white py-3 rounded-xl font-bold shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 outline-none">
              <CheckCircle2 size={16} />
              Accept Offer
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="w-full bg-white text-on-surface py-3 rounded-xl font-bold border border-outline-variant/30 hover:bg-surface-container-high active:scale-[0.98] transition-all text-sm outline-none">Counter-offer</button>
              <button className="w-full bg-white text-error py-3 rounded-xl font-bold border border-error-container/30 hover:bg-error-container/20 active:scale-[0.98] transition-all text-sm outline-none">Decline</button>
            </div>
            <p className="text-[10px] text-center text-on-surface-variant mt-4 leading-tight">By accepting, you agree to the Campaign Master Terms and the specific deliverables outlined above.</p>
          </div>

          {/* Negotiation Logs */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Activity Log</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs">
                <div className="w-6 h-6 rounded-full bg-primary-soft flex items-center justify-center">
                  <Pencil size={10} className="text-primary" />
                </div>
                <p className="text-on-surface-variant"><span className="font-bold text-on-surface">You</span> updated Draft #3</p>
                <span className="ml-auto text-on-surface-variant">2h ago</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <Eye size={10} className="text-on-surface-variant" />
                </div>
                <p className="text-on-surface-variant"><span className="font-bold text-on-surface">Elena</span> viewed the offer</p>
                <span className="ml-auto text-on-surface-variant">4h ago</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
