import React from 'react';

export default function InfluencerProfilePage() {
  return (
    <div className="pb-16">
      {/* Hero Section: Editorial Header */}
      <section className="relative px-8 pt-12 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-12 relative z-10">
          {/* Profile Image with Asymmetric Layout */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary-soft rounded-xl -rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
            <div className="w-64 h-80 md:w-80 md:h-[480px] rounded-xl overflow-hidden shadow-2xl relative z-10">
              <img alt="Influencer Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEkxF6vyR-JJjQUAaJtY3h4c5_uugp3jrlRYLxS4MV0zfoqFJN1E4XfRJW9oqV6aZVnpni0jclQA4fNS01IKde6BT7O9SdM8oW2crN8dD07cYC2HtFipxO7NPW8IJ7ZGS1mvIqMPdimR9MtwX0BGOKZwA0xN7xxr9cPVMYgJ3O8t5PTE_-shvT434hFG9PSkgsjVST5mAPfPqBnXhcsH_Ib-nO9AWElQqvNiEm7-lx14GYNhoxwlm7IZGdvOpCTiCEzk98CaOKxvYn" />
            </div>
          </div>
          {/* Info & Bio */}
          <div className="flex-1 space-y-8 pb-4">
            <div className="space-y-2">
              <span className="bg-primary-soft text-primary px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">Lifestyle & Tech</span>
              <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-none">Elena <br /><span className="text-primary">Vance.</span></h2>
            </div>
            <div className="max-w-lg">
              <p className="text-lg text-on-surface-variant font-medium leading-relaxed font-body">
                Creating minimalist visual narratives for global lifestyle brands. Specializing in high-end product integration and immersive travel storytelling with a focus on sustainable luxury.
              </p>
            </div>
            {/* Social & Action Links */}
            <div className="flex flex-wrap gap-6 items-center pt-4">
              <a className="flex items-center gap-2 text-primary font-bold hover:underline transition-all" href="#">
                <span className="material-symbols-outlined text-xl">link</span> instagram.com/elenavance
              </a>
              <a className="flex items-center gap-2 text-primary font-bold hover:underline transition-all" href="#">
                <span className="material-symbols-outlined text-xl">link</span> tiktok.com/@evance
              </a>
              <div className="flex gap-2">
                <button className="bg-gradient-to-br from-primary to-primary-light text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                  Send Offer
                </button>
                <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-xl font-bold border border-outline-variant/30 hover:bg-slate-50 transition-all active:scale-95">
                  Save to Shortlist
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative background text */}
        <div className="absolute top-20 right-[-10%] text-[240px] font-black text-slate-100/50 -z-0 pointer-events-none select-none">VANCE</div>
      </section>

      {/* Stats Section: Tonal Grid */}
      <section className="px-8 py-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Stats at a Glance</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-3xl">groups</span>
                <span className="text-success font-bold text-xs">+12% MoM</span>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-on-surface tracking-tighter">1.2M</p>
                <p className="text-slate-500 font-medium text-sm">Total Reach</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
                <span className="text-success font-bold text-xs">High Affinity</span>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-on-surface tracking-tighter">4.8%</p>
                <p className="text-slate-500 font-medium text-sm">Avg. Engagement</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-3xl">public</span>
                <span className="text-slate-400 font-bold text-xs">Global</span>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-on-surface tracking-tighter">NYC/LDN</p>
                <p className="text-slate-500 font-medium text-sm">Top Locations</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-primary text-3xl">person_search</span>
                <span className="text-success font-bold text-xs">Aged 24-35</span>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-on-surface tracking-tighter">72%</p>
                <p className="text-slate-500 font-medium text-sm">Female Audience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery: Bento Style */}
      <section className="px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Recent Work</h3>
              <h4 className="text-4xl font-extrabold tracking-tighter">Curated Portfolio</h4>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 group">
              View All Campaigns <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[800px]">
            <div className="col-span-12 md:col-span-8 row-span-1 rounded-2xl overflow-hidden relative group">
              <img alt="Work Sample 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA64CJ-MxPikgK2-Pwiqhm2wChbaASENUjvzqIkgvmuv1tqLjhUapVZGma_g7HQGIrsoF1941tXTE8a4nEs4XM2BZ4OXPXiAuxJDJAG84RO_1Ueo4oIHcFmQAEJCvTh2zY_KqLaSwocaHM2URgmyNQ4rQEaTXGydy6NF2toDh7oq8NdSaUZ3HrYnCvNOOmhDG0FSvQ8sgOa-uyrl7I2GzPAN8N9dj7tw_PHWNylVshjrBfh_E-9JSgii4U2R-vv-RApzvI5jYaIOQa3" />
              <div className="absolute bottom-0 left-0 p-8 text-white bg-gradient-to-t from-black/60 to-transparent w-full">
                <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-80">Aesthetic Living</p>
                <p className="text-2xl font-bold">The Nordic Minimalism Collection</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 row-span-2 rounded-2xl overflow-hidden relative group">
              <img alt="Work Sample 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAP2bSrcN1EmaH6CvE935VYWgSAdH8A9NQMGXafRpvF2elCiF8tshEz84ibRS_2WlUV3b1GwGdMW4WxfjSbRQ28kLhsiwPpAT2TixCjGR0WAalAaWgkuUXGy6Czgt72Rz6W030EybvxX8dRul6NQ0O-7URdKKHbZD0GRqfPcEmkNKf_6es0JjlguDHdROxK0vP6o_VlMh5z1iJemS5GFUTgLyz-BYGOb0PQfSA3WSnA3v_7yPcutDacn9tCWzLLJkYwoyY-8ir4iLV" />
              <div className="absolute bottom-0 left-0 p-8 text-white bg-gradient-to-t from-black/60 to-transparent w-full">
                <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-80">Fashion Week</p>
                <p className="text-2xl font-bold">Paris Streets: AW24</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 row-span-1 rounded-2xl overflow-hidden relative group">
              <img alt="Work Sample 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr-R2oRANlff2eDQNbLkNQU8u1V6Iknv5nEsepymh-29z9nqCpka-TtSBlaulM7t71ajSThASi1YAQmQlFsOKUSYGg5EwRcyMyNKPWYdG6d0i18c3BNnxpDReLqdVA0nugnJ-Elpq1IXbuu5MvB9cHGPHMsyW6wlQBPrWks1w_CMrPOMFDUqVuga7xSTGsUg4lFC_6elvum_yzWe8Z_qdmVrvrTjVFF-g9J8ZyjYFnOQM4nJ0wsyRR_ZB70KLS-eE1NkUZ94DTFLNU" />
              <div className="absolute bottom-0 left-0 p-8 text-white bg-gradient-to-t from-black/60 to-transparent w-full">
                <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-80">Tech & Luxury</p>
                <p className="text-2xl font-bold">Timeless Pieces</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 row-span-1 rounded-2xl overflow-hidden relative group">
              <img alt="Work Sample 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChQti5R5jLSeTT1f2dfIxJizXwSwW-AkSKt_YS8KeRRiNVubSKeOTWo0yYBUtVc2W_SdSLTl_UMVAgANFS7trKoPckMaMGlYsu-eV5njEGDgITTAM3KcmzRu1oHze9EowuYjjmSKl2_v_Tte1z5LHBugPkfOHIA0ElkBehhuVpsyl4QOySWeIxzfnkJMCnJ6lhFghPPC1B8LHM62et5Mw8qTe-QMg6d42rILgNniON7-GGxLyX2XTLt2ZJz7bIm3K1Pap2S6bGfEKD" />
              <div className="absolute bottom-0 left-0 p-8 text-white bg-gradient-to-t from-black/60 to-transparent w-full">
                <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-80">Travel</p>
                <p className="text-2xl font-bold">Serenity in Bali</p>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* Rate Card: Structured Tableless Layout */}
      <section className="px-8 py-24 bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Rate Card</h3>
            <h4 className="text-5xl font-extrabold tracking-tighter">Investment Guide</h4>
            <p className="text-slate-400 leading-relaxed font-body">Standard rates for 2024. Custom packages available upon request for multi-channel campaigns or long-term brand ambassadorships.</p>
            <div className="pt-8">
              <button className="bg-primary text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:bg-primary-light transition-all">
                Download Media Kit <span className="material-symbols-outlined">download</span>
              </button>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-4">
            <div className="flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">movie</span>
                </div>
                <div>
                  <p className="text-xl font-bold">Instagram Reel</p>
                  <p className="text-sm text-slate-500">60s edited video + 1 month usage</p>
                </div>
              </div>
              <p className="text-2xl font-black text-primary">$2,500+</p>
            </div>
            <div className="flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">photo_library</span>
                </div>
                <div>
                  <p className="text-xl font-bold">Feed Post / Carousel</p>
                  <p className="text-sm text-slate-500">Up to 5 slides + full caption</p>
                </div>
              </div>
              <p className="text-2xl font-black text-primary">$1,800+</p>
            </div>
            <div className="flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">history</span>
                </div>
                <div>
                  <p className="text-xl font-bold">Story Set (3 Slides)</p>
                  <p className="text-sm text-slate-500">Link stickers + engagement tags</p>
                </div>
              </div>
              <p className="text-2xl font-black text-primary">$850+</p>
            </div>
            <div className="flex items-center justify-between p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                </div>
                <div>
                  <p className="text-xl font-bold">UGC Content</p>
                  <p className="text-sm text-slate-500">Raw content for brand usage only</p>
                </div>
              </div>
              <p className="text-2xl font-black text-primary">$1,200+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Prompt */}
      <footer className="px-8 py-16 text-center space-y-8 max-w-2xl mx-auto">
        <h5 className="text-4xl font-extrabold tracking-tight">Ready to collaborate?</h5>
        <p className="text-on-surface-variant leading-relaxed">Elena is currently accepting bookings for Q4 2024. Submit your campaign brief and our team will get back to you within 48 hours.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-gradient-to-br from-primary to-primary-light text-white px-12 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
            Initiate Offer
          </button>
        </div>
      </footer>
    </div>
  );
}
