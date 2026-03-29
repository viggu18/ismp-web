import React from 'react';

export default function ContentExecutionPage() {
  return (
    <div className="pt-8 px-8 pb-12 max-w-7xl mx-auto">
      {/* Progress Tracker Section */}
      <section className="mb-12">
        <div className="grid grid-cols-5 gap-4">
          {/* Step 1: Content Creation */}
          <div className="flex flex-col gap-3">
            <div className="h-1.5 w-full bg-primary rounded-full"></div>
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Content Creation
            </div>
          </div>
          {/* Step 2: Draft Submitted */}
          <div className="flex flex-col gap-3">
            <div className="h-1.5 w-full bg-primary rounded-full"></div>
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Draft Submitted
            </div>
          </div>
          {/* Step 3: Feedback (ACTIVE) */}
          <div className="flex flex-col gap-3">
            <div className="h-1.5 w-full bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">pending</span>
              Feedback
            </div>
          </div>
          {/* Step 4: Approved */}
          <div className="flex flex-col gap-3">
            <div className="h-1.5 w-full bg-slate-200 rounded-full"></div>
            <div className="flex items-center gap-2 text-slate-400 font-medium text-xs uppercase tracking-widest">
              Approved
            </div>
          </div>
          {/* Step 5: Published */}
          <div className="flex flex-col gap-3">
            <div className="h-1.5 w-full bg-slate-200 rounded-full"></div>
            <div className="flex items-center gap-2 text-slate-400 font-medium text-xs uppercase tracking-widest">
              Published
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetrical Editorial Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Content Preview & Submission (Col Span 7) */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Current Draft</p>
                <h2 className="text-3xl font-extrabold tracking-tight text-on-surface">Submission #02</h2>
              </div>
              <button className="text-primary text-sm font-semibold hover:underline flex items-center gap-1">
                <span className="material-symbols-outlined text-lg">history</span> View History
              </button>
            </div>

            {/* Content Area (Influencer Submission) */}
            <div className="aspect-video w-full bg-surface-container-low rounded-xl mb-6 overflow-hidden relative group">
              <img alt="Content Draft Preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaIywZRIX8w3woexQJKpSKppMRzIvx4OXBQUa5Y5OnYAnCPzfaatwulWFhAsX85PlMPn6htc22i3g7AL8gHl4Cfm0K43nupMsY3RfCvNzOkVClAdtewlvgM1V53CwyOR6moQ9OyYsbQ7HlZ-2Bbt68IxBArOhhJpK0WeGRuUcCT8pV3vtO-_F-k2eXIlAt6vs3X2p1WtsP03ymnyEYnh69Wd9IDW3Eb9Jl9z85lEj0XOCRBbM34Rwygc5e15VjCdkdUgVOBwCPADsE" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-colors">
                  <span className="material-symbols-outlined">fullscreen</span>
                </button>
                <button className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/40 transition-colors">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-surface-container rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl">link</span>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-500 uppercase">External Link Reference</p>
                  <p className="text-sm font-medium text-primary">instagram.com/p/C_m92kLoX2...</p>
                </div>
                <button className="text-on-surface hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">open_in_new</span>
                </button>
              </div>

              {/* Influencer Submission Controls */}
              <div className="pt-4 flex gap-4">
                <button className="flex-1 py-3 border-2 border-dashed border-outline-variant rounded-xl text-slate-500 font-semibold text-sm hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">upload_file</span> Update Content
                </button>
                <button className="px-6 py-3 bg-slate-100 text-on-surface-variant font-semibold text-sm rounded-xl hover:bg-slate-200 transition-colors">
                  Preview All Assets
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Collaboration & Approvals (Col Span 5) */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          {/* Feedback Feed */}
          <div className="bg-surface-container-low rounded-xl p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Feedback Thread</h3>
              <span className="text-xs text-primary font-bold">3 Comments</span>
            </div>
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {/* Comment 1 */}
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full flex-shrink-0 overflow-hidden bg-slate-300">
                  <img alt="Hirer Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9cSEolys6QBBXOCRctv4ir9UzOMVW3bHIHz1tLGPYcYifYYP0dmEA-rq57O6NVrcA3vhgH_POobCXeBGZwcPdbe7WqwpaJ6myODhxOlTcD6swV3JQR7ZzH0CJcy9L_2Ryu-Yzeb4LkQmaFPYDOSKVTnCJw7zxuI7GguNIN5npHfE4p79dWIWWNVnE2ka4V71aQ-Dk5G9r3i05a2c_9xi1qniKglFZFoeZnolzTYkmQO0YcYERvxna3TIuiwJuydPiLKl1pZR6Xkso" />
                </div>
                <div className="flex-1">
                  <div className="bg-white p-4 rounded-xl rounded-tl-none shadow-sm">
                    <p className="text-xs font-bold text-slate-800 mb-1">Marcus Chen <span className="text-[10px] text-slate-400 font-normal ml-2">2h ago</span></p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">The lighting in the second shot is perfect, but could we make the product label a bit more visible? It's slightly blurry in the current draft.</p>
                  </div>
                </div>
              </div>

              {/* Comment 2 */}
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full flex-shrink-0 overflow-hidden bg-slate-300">
                  <img alt="Influencer Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUHsdS9tIV_rky8ljzmKyQCi_PzIV0HYZIHD1MEmu4ZVGcczbHu3FBiL0qVEGaKx8uH0G0WAgcL9jn9iC6aRBdWWqEtApB8SgRrcLjMPAU9SFMLBsQXVwVFW9T5QHWwE8soRVWb7zAu0hvC3kyMp97RpUuHhDR3KYUwU-91S_hE_H0S9jEmdtIp2e6QL4Sb3vz0xXPTxShicSBu2h5lXkS93pEYvZGfmhuXR9D-jALOziQwveejEcU_CF8xf-kEuxOCxF5OEBUsUZS" />
                </div>
                <div className="flex-1">
                  <div className="bg-primary-soft p-4 rounded-xl rounded-tl-none border border-primary-soft">
                    <p className="text-xs font-bold text-primary mb-1">Sarah J. <span className="text-[10px] text-slate-400 font-normal ml-2">45m ago</span></p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Got it! I've uploaded a new version (#02) where the focus is locked on the logo. Let me know if that works!</p>
                  </div>
                </div>
              </div>

              {/* Comment Input */}
              <div className="pt-4">
                <div className="relative">
                  <textarea className="w-full bg-surface-container-high border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary h-24 resize-none outline-none" placeholder="Write feedback..."></textarea>
                  <button className="absolute bottom-3 right-3 p-2 bg-gradient-to-br from-primary to-primary-light text-white rounded-lg hover:opacity-90 transition-opacity">
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Manager Actions</h3>
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-br from-primary to-primary-light text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform">
                <span className="material-symbols-outlined">verified</span>
                Approve for Publishing
              </button>
              <button className="w-full bg-error-container/20 text-error font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-error-container/40 transition-colors">
                <span className="material-symbols-outlined">assignment_return</span>
                Request Revision
              </button>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-slate-400 text-lg">calendar_today</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">Campaign Deadline</span>
              </div>
              <p className="text-lg font-extrabold text-on-surface">September 28, 2024</p>
              
              <div className="mt-4 flex items-center gap-2">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-error w-3/4"></div>
                </div>
                <span className="text-[10px] font-black text-error whitespace-nowrap">4 DAYS LEFT</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
